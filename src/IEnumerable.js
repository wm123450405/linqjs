'use strict';

const core = require('./core/core');

const methods = require('./methods/methods');
const defaultPredicate = require('./methods/defaultPredicate');
const defaultFalsePredicate = require('./methods/defaultFalsePredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultResultSelector = require('./methods/defaultResultSelector');
const defaultJoinSelector = require('./methods/defaultJoinSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultParentSelector = require('./methods/defaultParentSelector');
const defaultChildrenSelector = require('./methods/defaultChildrenSelector');
const defaultAction = require('./methods/defaultAction');

const NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
const OutOfRangeException = require('./core/exceptions/OutOfRangeException');
const TooManyElementsException = require('./core/exceptions/TooManyElementsException');
const KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');

const SingleNode = require('./enumerables/SingleNode');
const ValueNode = require('./enumerables/ValueNode');
const ProbabilityNode = require('./enumerables/ProbabilityNode');

const hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

const string = 'string';
const array = 'array';
const enumerable = 'enumerable';
const object = 'object';

const firstNode = (enumerable, predicate = defaultPredicate) => {
    let index = 0;
    predicate = methods.asPredicate(predicate);
    for (let element of enumerable) {
        if (predicate(element, index)) {
            return new SingleNode(element, index);
        }
        index++;
    }
};
const lastNode = (enumerable, predicate = defaultPredicate) => {
    let last, index = 0;
    predicate = methods.asPredicate(predicate);
    for (let element of enumerable) {
        if (predicate(element, index)) {
            if (last) {
                last.set(element, index);
            } else {
                last = new SingleNode(element, index);
            }
        }
        index++;
    }
    return last;
};
const singleNode = (enumerable, predicate = defaultPredicate) => {
    let single, index = 0;
    predicate = methods.asPredicate(predicate);
    for (let element of enumerable) {
        if (predicate(element, index)) {
            if (single) {
                throw new TooManyElementsException();
            } else {
                single = new SingleNode(element, index);
            }
            index++;
        }
    }
    return single;
};
const maxNode = function(enumerable, selector = defaultSelector, comparer = defaultComparer) {
    selector = methods.asSelector(selector);
    comparer = methods.asComparer(comparer);
    let iterator = enumerable.getIterator();
    let next = iterator.next();
    if (!next.done) {
        let index = 0, value, element;
        let max = new ValueNode(next.value, index, selector(next.value, index));
        while (!(next = iterator.next()).done) {
            index++;
            element = next.value;
            value = selector(element, index);
            if (comparer(max.value, value) <= 0) {
                max.set(element, index, value);
            }
        }
        return max;
    }
};
const minNode = function(enumerable, selector = defaultSelector, comparer = defaultComparer) {
    selector = methods.asSelector(selector);
    comparer = methods.asComparer(comparer);
    let iterator = enumerable.getIterator();
    let next = iterator.next();
    if (!next.done) {
        let index = 0, value, element;
        let min = new ValueNode(next.value, index, selector(next.value, index));
        while (!(next = iterator.next()).done) {
            index++;
            element = next.value;
            value = selector(element, index);
            if (comparer(min.value, value) >= 0) {
                min.set(element, index, value);
            }
        }
        return min;
    }
};
const randomNodeProbability = function(enumerable, probabilitySelector) {
    let array = [], index = 0, sum = 0, probability = 0;
    probabilitySelector = methods.asSelector(probabilitySelector);
    for (let element of enumerable) {
        probability = probabilitySelector(array, index);
        if (probability > 0) {
            sum += probability;
            array.push(new ProbabilityNode(element, index, probability));
        }
        index++;
    }
    if (array.length > 0) {
        let result = Math.random() * sum;
        for (let node of array) {
            sum -= node.probability;
            if (sum <= result) {
                return node;
            }
        }
    }
};

class IEnumerable extends Array {
    constructor(source) {
        super();
        let typeName = core.getType(source);
        let type = source instanceof IEnumerable ? enumerable : typeName === core.types.String ? string : typeName === core.types.Array || typeName.endsWith(core.types.Iterator) ? array : object;
        core.defineProperty(this, Symbol.toStringTag, 'IEnumerable');
        core.defineProperties(this, {
            getProtoType() {
                return type === enumerable ? source.getProtoType() : type;
            },
            toString() {
                return type === string ? this.join('') : type === array ? '[' + this.join(',') + ']' : type === enumerable ? source.toString.call(this) : ('[' + this.join(',') + ']');
            },
            toProto() {
                return this.getProtoType() === string ? this.join('') : this.getProtoType() === array ? this.toArray() : this.toObject();
            }
        });
        if (hasProxy) {
            return new Proxy(this, {
                get(target, prop) {
                    if (typeof(prop) !== 'symbol' && !isNaN(prop) && core.isInteger(prop) && prop >= 0 && !(prop in target)) {
                        return target.elementAtOrDefault(prop);
                    } else if (prop === 'length' || prop === 'size') {
                        return target.count();
                    } else {
                        return target[prop];
                    }
                },
                getOwnPropertyDescriptor(target, prop) {
                    if (typeof(prop) !== 'symbol' && !isNaN(prop) && core.isInteger(prop) && prop >= 0 && !(prop in target)) {
                        return { enumerable: true, configurable: true, get: () => target.elementAtOrDefault(prop) };
                    } else if (prop === 'length' || prop === 'size') {
                        let desc = Object.getOwnPropertyDescriptor(target, 'length');
                        desc.value = target.count();
                        return desc;
                    } else {
                        return Object.getOwnPropertyDescriptor(target, prop);
                    }
                },
                ownKeys(target) {
                    return target.select((e, index) => index.toString()).concat(Reflect.ownKeys(target));
                }
            });
        }
    }
    get length() {
        return this.count();
    }
    get size() {
        return this.count();
    }
    getEnumerator() {
        return new IEnumerator(this);
    }
    getIterator() {
        return this[Symbol.iterator]();
    }
    getIterable() {
        return { [Symbol.iterator]: this[Symbol.iterator] };
    }
    where(predicate = defaultPredicate) {
        return new WhereEnumerable(this, predicate);
    }
    select(selector = defaultSelector) {
        return new SelectEnumerable(this, selector);
    }
    elementAt(index) {
        if (index >= 0) {
            for (let element of this) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        throw new OutOfRangeException(index);
    }
    elementAtOrDefault(index, defaultValue) {
        if (index >= 0) {
            for (let element of this) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        return defaultValue;
    }
    asEnumerable(childrenSelector, valueSelector = defaultValueSelector) {
        if (core.isUndefined(childrenSelector)) {
            return this;
        } else {
            return core.asEnumerable(this, childrenSelector, valueSelector);
        }
    }
    concat(...others) {
        // return new ConcatEnumerable(this, ...others);
        return new (
            Function.prototype.bind.apply(
                ConcatEnumerable,
                core.a$concat.call(
                    [null],
                    [this],
                    others
                )
            )
        )();
    }
    distinct(comparer = defaultEqualityComparer) {
        return new DistinctEnumerable(this, comparer);
    }
    except(other, comparer = defaultEqualityComparer) {
        return new ExceptEnumerable(this, other, comparer);
    }
    union(other, comparer = defaultEqualityComparer) {
        return new UnionEnumerable(this, other, comparer);
    }
    intersect(other, comparer = defaultEqualityComparer) {
        return new IntersectEnumerable(this, other, comparer);
    }
    ofType(type) {
        return new OfTypeEnumerable(this, type);
    }
    skip(count) {
        return new SkipEnumerable(this, count);
    }
    skipWhile(predicate = defaultPredicate) {
        return new SkipWhileEnumerable(this, predicate);
    }
    skipSame(comparer = defaultSameComparer) {
        return new SkipSameEnumerable(this, comparer);
    }
    skipProportion(proportion = 0) {
        return new SkipProportionEnumerable(this, proportion);
    }
    take(count) {
        return new TakeEnumerable(this, count);
    }
    takeWhile(predicate = defaultPredicate) {
        return new TakeWhileEnumerable(this, predicate);
    }
    takeSame(comparer = defaultSameComparer) {
        return new TakeSameEnumerable(this, comparer);
    }
    takeProportion(proportion = 0) {
        return new TakeProportionEnumerable(this, proportion);
    }
    sorted(keySelector = defaultSelector, comparer = defaultComparer) {
        return this.orderBy(keySelector, comparer);
    }
    orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByEnumerable(this, keySelector, comparer);
    }
    orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByDescendingEnumerable(this, keySelector, comparer);
    }
    groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        return new GroupedEnumerable(this, keySelector, elementSelector, resultSelector, comparer);
    }
    selectMany(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
    flatMap(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
    flatten(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
    join(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (arguments.length <= 1) {
            if (core.a$join) {
                return core.a$join.call(this.toArray(), inner);
            } else {
                inner = inner || '';
                let result = '', first = true;
                for (let element of this) {
                    if (first) {
                        result += element;
                        first = false;
                    } else {
                        result += inner + element;
                    }
                }
                return result;
            }
        } else {
            return this.innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    joining(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return this.innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    innerJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new JoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    leftJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new LeftJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    rightJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new RightJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    groupJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new GroupJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    defaultIfEmpty(...defaultValues) {
        //todo: 优化
        return this.isEmpty() ? core.asEnumerable(defaultValues) : this;
    }
    all(predicate = defaultPredicate) {
        let index = 0;
        predicate = methods.asPredicate(predicate);
        for (let element of this) {
            if (!predicate(element, index++)) {
                return false;
            }
        }
        return true;
    }
    allMatch(predicate = defaultPredicate) {
        return this.all(this, predicate);
    }
    any(predicate = defaultPredicate) {
        let index = 0;
        predicate = methods.asPredicate(predicate);
        for (let element of this) {
            if (predicate(element, index++)) {
                return true;
            }
        }
        return false;
    }
    anyMatch(predicate = defaultPredicate) {
        return this.any(this, predicate);
    }
    isEmpty() {
        return !this.any();
    }
    sequenceEqual(other, comparer = defaultEqualityComparer) {
        other = core.asEnumerable(other);
        comparer = methods.asEqualityComparer(comparer);
        let sourceIterator = this.getIterator();
        let otherIterator = other.getIterator();
        let sourceElement, otherElement;
        while(!((sourceElement = sourceIterator.next()).done & (otherElement = otherIterator.next()).done)) {
            if (sourceElement.done !== otherElement.done) {
                return false;
            } else if (!comparer(sourceElement.value, otherElement.value)) {
                return false;
            }
        }
        return true;
    }
    first(predicate = defaultPredicate) {
        let node = firstNode(this, predicate);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    firstOrDefault(defaultValue, predicate = defaultPredicate) {
        let node = firstNode(this, predicate);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.element;
        }
    }
    last(predicate = defaultPredicate) {
        let node = lastNode(this, predicate);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    lastOrDefault(defaultValue, predicate = defaultPredicate) {
        let node = lastNode(this, predicate);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.element;
        }
    }
    single(predicate = defaultPredicate) {
        let node = singleNode(this, predicate);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    singleOrDefault(defaultValue, predicate = defaultPredicate) {
        let node = singleNode(this, predicate);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.element;
        }
    }
    count(predicate = defaultPredicate) {
        let count = 0, index = 0;
        predicate = methods.asPredicate(predicate);
        for (let element of this) {
            if (predicate(element, index++)) {
                count++;
            }
        }
        return count;
    }
    sum(selector = defaultSelector) {
        let sum = 0, index = 0;
        selector = methods.asSelector(selector);
        for (let element of this) {
            sum += parseFloat(selector(element, index++));
            if (isNaN(sum) || !isFinite(sum)) return sum;
        }
        return sum;
    }
    product(selector = defaultSelector) {
        let product = 1, index = 0;
        selector = methods.asSelector(selector);
        for (let element of this) {
            product *= parseFloat(selector(element, index++));
            if (isNaN(product) || !isFinite(product)) return product;
        }
        return index === 0 ? NaN : product;
    }
    max(selector = defaultSelector, comparer = defaultComparer) {
        let node = maxNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    maxIndex(selector = defaultSelector, comparer = defaultComparer) {
        let node = maxNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            return -1;
        } else {
            return node.index;
        }
    }
    maxOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        let node = maxNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.element;
        }
    }
    min(selector = defaultSelector, comparer = defaultComparer) {
        let node = minNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    minIndex(selector = defaultSelector, comparer = defaultComparer) {
        let node = minNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            return -1;
        } else {
            return node.index;
        }
    }
    minOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        let node = minNode(this, selector, comparer);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.element;
        }
    }
    average(selector = defaultSelector) {
        let sum = 0, count = 0, index = 0;
        selector = methods.asSelector(selector);
        for (let element of this) {
            sum += parseFloat(selector(element, index++));
            if (isNaN(sum) || !isFinite(sum)) return sum;
            count++;
        }
        if (count !== 0) {
            return sum / count;
        } else {
            throw new NoSuchElementsException();
        }
    }
    aggregate(seed, func, resultSelector = defaultSelector) {
        let index = 0;
        resultSelector = methods.asSelector(resultSelector);
        for (let element of this) {
            seed = func(seed, element, index++);
        }
        return resultSelector(seed);
    }
    contains(value, comparer = defaultEqualityComparer) {
        comparer = methods.asEqualityComparer(comparer);
        for (let element of this) {
            if (comparer(element, value)) {
                return true;
            }
        }
        return false;
    }
    indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
        let index = 0;
        comparer = methods.asStrictEqualityComparer(comparer);
        for (let element of this) {
            if (index >= start && comparer(element, value)) {
                return index;
            }
            index++;
        }
        return -1;
    }
    findIndex(predicate, thisArg) {
        let index = 0;
        predicate = methods.asPredicate(predicate);
        let callback = (element, index) => predicate.call(thisArg, element, index, this);
        for (let element of this) {
            if (callback(element, index)) {
                return index;
            }
            index++;
        }
        return -1;
    }
    lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        let array = this.toArray();
        comparer = methods.asStrictEqualityComparer(comparer);
        if (start < 0) {
            start = array.length + start;
        }
        for (let index = Math.min(start, array.length - 1); index >= 0; index--) {
            if (comparer(array[index], value)) {
                return index;
            }
        }
        return -1;
    }
    findLast(callback, thisArg) {
        return this.lastOrDefault(undefined, (element, index) => callback.call(thisArg, element, index, this));
    }
    findLastIndex(predicate, thisArg) {
        let array = this.toArray();
        predicate = methods.asPredicate(predicate);
        let callback = (element, index) => predicate.call(thisArg, element, index, this);
        for (let index = array.length - 1; index >= 0; index--) {
            let element = array[index];
            if (callback(element, index)) {
                return index;
            }
        }
        return -1;
    }
    reverse() {
        return new ReverseEnumerable(this);
    }
    zip(other, resultSelector = defaultResultSelector) {
        return new ZipEnumerable(this, other, resultSelector);
    }
    slice(start = 0, end = Infinity) {
        return new SliceEnumerable(this, start, end);
    }
    every(callback, thisArg) {
        return this.all((element, index) => callback.call(thisArg, element, index, this));
    }
    find(callback, thisArg) {
        return this.firstOrDefault(undefined, (element, index) => callback.call(thisArg, element, index, this));
    }
    includes(element, start = 0) {
        return this.skip(start).contains(element);
    }
    map(callback, thisArg) {
        return this.select((element, index) => callback.call(thisArg, element, index, this));
    }
    filter(callback, thisArg) {
        return this.where((element, index) => callback.call(thisArg, element, index, this));
    }
    pop() {
        let iterable = this.toArray();
        core.setProperty(this, Symbol.iterator, function*() {
            let len = iterable.length - 1;
            for (let index = 0; index < len; index++) {
                yield iterable[index];
            }
        });
        return iterable[iterable.length - 1];
    }
    push(...values) {
        let iterable = this.toArray();
        core.setProperty(this, Symbol.iterator, function*() {
            yield* iterable;
            yield* values;
        });
        return iterable.length + values.length;
    }
    shift() {
        let iterable = { [Symbol.iterator]:this[Symbol.iterator] };
        core.setProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of iterable) {
                if (index > 0) {
                    yield element;
                }
                index++;
            }
        });
        return this.firstOrDefault(iterable);
    }
    unshift(...values) {
        let iterable = this.toArray();
        core.setProperty(this, Symbol.iterator, function*() {
            yield* values;
            yield* iterable;
        });
        return values.length + iterable.length;
    }
    reduce(callback, initialValue) {
        return this.aggregate(initialValue, (seed, element, index) => callback(seed, element, index, this));
    }
    reduceRight(callback, initialValue) {
        return this.reverse().aggregate(initialValue, (seed, element, index) => callback(seed, element, index, this));
    }
    some(callback, thisArg) {
        return this.any((element, index) => callback.call(thisArg, element, index, this));
    }
    splice(start, count, ...values) {
        // return new SpliceEnumerable(this, start, count, ...values);
        return new (Function.prototype.bind.apply(SpliceEnumerable, core.a$concat.call([null], [this, start, count], values)))();
    }
    fill(value, start = 0, end = Infinity) {
        return new FillEnumerable(this, value, start, end);
    }
    sort(comparer = defaultComparer) {
        return new SortEnumerable(this, comparer);
    }
    copyWithin(target = 0, start = 0, end = Infinity) {
        return new CopyWithinEnumerable(this, target, start, end);
    }
    toArray() {
        return core.toArray(this);
    }
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
    toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        let dictionary = new Dictionary(), index = 0;
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        for (let element of this) {
            let key = keySelector(element, index);
            if (dictionary.has(key, comparer)) {
                throw new KeysForMultiElementsException(key);
            } else {
                dictionary.set(key, elementSelector(element, index), comparer);
            }
            index++;
        }
        return dictionary;
    }
    toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        let lookup = new Lookup(), index = 0;
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        for (let element of this) {
            let key = keySelector(element, index);
            if (lookup.has(key, comparer)) {
                lookup.get(key, comparer).push(elementSelector(element, index));
            } else {
                lookup.set(key, [elementSelector(element, index)], comparer);
            }
            index++;
        }
        return lookup;
    }
    toPreOrder() {
        return new PreOrderTree(this);
    }
    toInOrder() {
        return new InOrderTree(this);
    }
    toPostOrder() {
        return new PostOrderTree(this);
    }
    forEach(action = defaultAction, thisArg = undefined) {
        let index = 0;
        let callback = (element, index) => action.call(thisArg, element, index, this);
        for (let element of this) {
            callback(element, index++);
        }
    }
    each(action = defaultAction) {
        return new EachEnumerable(this, action);
    }
    indices(indices) {
        return new IndicesEnumerable(this, core.asEnumerable(indices));
    }
    permutation(count, repeatable = false) {
        if (repeatable) {
            return new PermutationRepeatableEnumerable(this, count);
        } else {
            return new PermutationEnumerable(this, count);
        }
    }
    combination(count, repeatable = false) {
        if (repeatable) {
            return new CombinationRepeatableEnumerable(this, count);
        } else {
            return new CombinationEnumerable(this, count);
        }
    }
    chunk(chunk, offset = 0) {
        return new ChunkEnumerable(this, chunk, offset);
    }
    split(splitPredicate = defaultFalsePredicate) {
        return new SplitEnumerable(this, splitPredicate);
    }
    nearSplit(splitPredicate = defaultFalsePredicate) {
        return new NearSplitEnumerable(this, splitPredicate);
    }
    leftPad(length, value) {
        return new LeftPadEnumerable(this, length, value);
    }
    rightPad(length, value) {
        return new RightPadEnumerable(this, length, value);
    }
    rand(count = 0) {
        return new RandEnumerable(this, count);
    }
    random() {
        let array = this.toArray();
        if (array.length) {
            return array[Math.floor(Math.random() * array.length)];
        } else {
            throw new NoSuchElementsException();
        }
    }
    randomOrDefault(defaultValue) {
        let array = this.toArray();
        if (array.length) {
            return array[Math.floor(Math.random() * array.length)];
        } else {
            return defaultValue;
        }
    }
    randomProbability(probabilitySelector) {
        let node = randomNodeProbability(this, probabilitySelector);
        if (core.isUndefined(node)) {
            throw new NoSuchElementsException();
        } else {
            return node.element;
        }
    }
    randomIndexProbability(probabilitySelector) {
        let node = randomNodeProbability(this, probabilitySelector);
        if (core.isUndefined(node)) {
            return -1;
        } else {
            return node.index;
        }
    }
    randomProbabilityOrDefault(defaultValue, probabilitySelector) {
        let node = randomNodeProbability(this, probabilitySelector);
        if (core.isUndefined(node)) {
            return defaultValue;
        } else {
            return node.index;
        }
    }
    wipe(predicate = defaultPredicate, count = 0) {
        return new WipeEnumerable(this, predicate, count);
    }
    nearBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        return new NearGroupedEnumerable(this, keySelector, elementSelector, resultSelector, comparer);
    }
    combine(parentSelector = defaultParentSelector, keySelector = defaultKeySelector, valueSelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new CombineEnumerable(this, parentSelector, keySelector, valueSelector, comparer);
    }
    separate(childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
        return new SeparateEnumerable(this, childrenSelector, valueSelector);
    }
    isSub(other, comparer = defaultEqualityComparer) {
        other = core.asEnumerable(other);
        for (let element of this) {
            if (!other.contains(element, comparer)) {
                return false;
            }
        }
        return true;
    }
    isSuper(other, comparer = defaultEqualityComparer) {
        return core.asEnumerable(other).isSub(this, comparer);
    }
    symmetric(other, comparer = defaultEqualityComparer) {
        return new SymmetricEnumerable(this, core.asEnumerable(other), comparer);
    }
    conflict(selector = defaultSelector, comparer = defaultEqualityComparer) {
        let temp = [];
        let index = 0;
        selector = methods.asSelector(selector);
        comparer = methods.asEqualityComparer(comparer);
        for (let element of this) {
            let key = selector(element, index);
            for (let other of temp) {
                if (comparer(key, other)) {
                    return true;
                }
            }
            temp.push(key);
            index++;
        }
        return false;
    }
    proportion(predicate = defaultPredicate) {
        if (predicate === defaultPredicate) return 1;
        let count = 0, selected = 0, index = 0;
        predicate = methods.asPredicate(predicate);
        for (let element of this) {
            if (predicate(element, index++)) {
                selected++;
            }
            count++;
        }
        return count === 0 ? 1 : selected / count;
    }
}

module.exports = IEnumerable;

const IEnumerator = require('./IEnumerator');

const WhereEnumerable = require('./enumerables/WhereEnumerable');
const SelectEnumerable = require('./enumerables/SelectEnumerable');
const ConcatEnumerable = require('./enumerables/ConcatEnumerable');
const DistinctEnumerable = require('./enumerables/DistinctEnumerable');
const ExceptEnumerable = require('./enumerables/ExceptEnumerable');
const UnionEnumerable = require('./enumerables/UnionEnumerable');
const IntersectEnumerable = require('./enumerables/IntersectEnumerable');
const OfTypeEnumerable = require('./enumerables/OfTypeEnumerable');
const SkipEnumerable = require('./enumerables/SkipEnumerable');
const SkipWhileEnumerable = require('./enumerables/SkipWhileEnumerable');
const SkipSameEnumerable = require('./enumerables/SkipSameEnumerable');
const SkipProportionEnumerable = require('./enumerables/SkipProportionEnumerable');
const TakeEnumerable = require('./enumerables/TakeEnumerable');
const TakeWhileEnumerable = require('./enumerables/TakeWhileEnumerable');
const TakeSameEnumerable = require('./enumerables/TakeSameEnumerable');
const TakeProportionEnumerable = require('./enumerables/TakeProportionEnumerable');
const OrderByEnumerable = require('./enumerables/OrderByEnumerable');
const OrderByDescendingEnumerable = require('./enumerables/OrderByDescendingEnumerable');
const GroupedEnumerable = require('./enumerables/GroupedEnumerable');
const SelectManyEnumerable = require('./enumerables/SelectManyEnumerable');
const JoinEnumerable = require('./enumerables/JoinEnumerable');
const LeftJoinEnumerable = require('./enumerables/LeftJoinEnumerable');
const RightJoinEnumerable = require('./enumerables/RightJoinEnumerable');
const GroupJoinEnumerable = require('./enumerables/GroupJoinEnumerable');
const ReverseEnumerable = require('./enumerables/ReverseEnumerable');
const ZipEnumerable = require('./enumerables/ZipEnumerable');
const Dictionary = require('./enumerables/Dictionary');
const Lookup = require('./enumerables/Lookup');
const SliceEnumerable = require('./enumerables/SliceEnumerable');
const SpliceEnumerable = require('./enumerables/SpliceEnumerable');
const FillEnumerable = require('./enumerables/FillEnumerable');
const SortEnumerable = require('./enumerables/SortEnumerable');
const CopyWithinEnumerable = require('./enumerables/CopyWithinEnumerable');
const ChunkEnumerable = require('./enumerables/ChunkEnumerable');
const SplitEnumerable = require('./enumerables/SplitEnumerable');
const NearSplitEnumerable = require('./enumerables/NearSplitEnumerable');
const LeftPadEnumerable = require('./enumerables/LeftPadEnumerable');
const RightPadEnumerable = require('./enumerables/RightPadEnumerable');
const RandEnumerable = require('./enumerables/RandEnumerable');
const WipeEnumerable = require('./enumerables/WipeEnumerable');
const NearGroupedEnumerable = require('./enumerables/NearGroupedEnumerable');
const SeparateEnumerable = require('./enumerables/SeparateEnumerable');
const CombineEnumerable = require('./enumerables/CombineEnumerable');
const SymmetricEnumerable = require('./enumerables/SymmetricEnumerable');
const EachEnumerable = require('./enumerables/EachEnumerable');
const IndicesEnumerable = require('./enumerables/IndicesEnumerable');
const PermutationEnumerable = require('./enumerables/PermutationEnumerable');
const PermutationRepeatableEnumerable = require('./enumerables/PermutationRepeatableEnumerable');
const CombinationEnumerable = require('./enumerables/CombinationEnumerable');
const CombinationRepeatableEnumerable = require('./enumerables/CombinationRepeatableEnumerable');

const PreOrderTree = require('./enumerables/PreOrderTree');
const InOrderTree = require('./enumerables/InOrderTree');
const PostOrderTree = require('./enumerables/PostOrderTree');