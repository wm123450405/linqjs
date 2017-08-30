'use strict';

const core = require('./core/core');

const methods = require('./methods/methods');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultResultSelector = require('./methods/defaultResultSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultAction = require('./methods/defaultAction');

const arrayComparer = require('./methods/arrayComparer');
const predicateComparer = require('./methods/predicateComparer');
const propertySelector = require('./methods/propertySelector');
const regexpPredicate = require('./methods/regexpPredicate');
const defaultExistsPredicate = require('./methods/defaultExistsPredicate');
const notPredicate = require('./methods/notPredicate');
const equalityPredicate = require('./methods/equalityPredicate');
const selectorPredicate = require('./methods/selectorPredicate');
const greaterComparer = require('./methods/greaterComparer');
const lessComparer = require('./methods/lessComparer');
const ignoreCaseComparer = require('./methods/ignoreCaseComparer');

const NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
const OutOfRangeException = require('./core/exceptions/OutOfRangeException');
const TooManyElementsException = require('./core/exceptions/TooManyElementsException');
const KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');
const NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');
const NotEnumerableException = require('./core/exceptions/NotEnumerableException');
const PluginRepeatException = require('./core/exceptions/PluginRepeatException');
const PropertyExpressionInvalidException = require('./core/exceptions/PropertyExpressionInvalidException');
const InvalidFunctionException = require('./core/exceptions/InvalidFunctionException');

const IComparable = require('./core/IComparable');
const IEquatable = require('./core/IEquatable');

const asIterable = value => {
	if (value[Symbol.iterator]) {
		return value;
	} else if (value.asEnumerable) {
		return value.asEnumerable();
	} else {
		throw new NotEnumerableException(value);
	}
};

const Enumerable = function(source) {
    return Enumerable.asEnumerable(source);
};
Enumerable.getEnumerator = function(enumerable) {
    return new IEnumerator(asIterable(enumerable));
};
Enumerable.getIterator = function(enumerable) {
    return asIterable(enumerable)[Symbol.iterator]();
};
Enumerable.repeat = function(element, count = 0) {
    return new RepeatEnumerable(element, count);
};
Enumerable.range = function(start, count) {
    return new RangeEnumerable(start, count);
};
Enumerable.empty = function() {
    return new EmptyEnumerable();
};
Enumerable.asEnumerable = function(object) {
    return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
};
Enumerable.toArray = function(source) {
    if (core.isArray(source)) {
        return source;
    } else {
        source = asIterable(source);
        return Array.from(source);
    }
};
Enumerable.toDictionary = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    let dictionary = new Dictionary(), index = 0;
    source = asIterable(source);
    keySelector = methods.asSelector(keySelector);
    elementSelector = methods.asSelector(elementSelector);
    comparer = methods.asSameComparer(comparer);
    for (let element of source) {
        let key = keySelector(element, index);
        if (dictionary.has(key, comparer)) {
            throw new KeysForMultiElementsException(key);
        } else {
            dictionary.set(key, elementSelector(element, index), comparer);
        }
        index++;
    }
    return dictionary;
};
Enumerable.toLookup = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
    let lookup = new Lookup(), index = 0;
    source = asIterable(source);
    keySelector = methods.asSelector(keySelector);
    elementSelector = methods.asSelector(elementSelector);
    comparer = methods.asSameComparer(comparer);
    for (let element of source) {
        let key = keySelector(element, index);
        if (lookup.has(key, comparer)) {
            lookup.get(key, comparer).push(elementSelector(element, index));
        } else {
            lookup.set(key, [elementSelector(element, index)], comparer);
        }
        index++;
    }
    return lookup;
};
Enumerable.where = function(source, predicate = defaultPredicate) {
    return new WhereEnumerable(asIterable(source), predicate);
};
Enumerable.select = function(source, selector = defaultSelector) {
    return new SelectEnumerable(asIterable(source), selector);
};
Enumerable.distinct = function(source, comparer = defaultEqualityComparer) {
    return new DistinctEnumerable(asIterable(source), comparer);
};
Enumerable.except = function(source, other, comparer = defaultEqualityComparer) {
    return new ExceptEnumerable(asIterable(source), other, comparer);
};
Enumerable.union = function(source, other, comparer = defaultEqualityComparer) {
    return new UnionEnumerable(asIterable(source), other, comparer);
};
Enumerable.intersect = function(source, other, comparer = defaultEqualityComparer) {
    return new IntersectEnumerable(asIterable(source), other, comparer);
};
Enumerable.ofType = function(source, type) {
    return new OfTypeEnumerable(asIterable(source), type);
};
Enumerable.skip = function(source, count) {
    return new SkipEnumerable(asIterable(source), count);
};
Enumerable.skipWhile = function(source, predicate = defaultPredicate) {
    return new SkipWhileEnumerable(asIterable(source), predicate);
};
Enumerable.take = function(source, count) {
    return new TakeEnumerable(asIterable(source), count);
};
Enumerable.takeWhile = function(source, predicate = defaultPredicate) {
    return new TakeWhileEnumerable(asIterable(source), predicate);
};
Enumerable.orderBy = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return new OrderByEnumerable(asIterable(source), keySelector, comparer);
};
Enumerable.orderByDescending = function(source, keySelector = defaultSelector, comparer = defaultComparer) {
    return new OrderByDescendingEnumerable(asIterable(source), keySelector, comparer);
};
Enumerable.thenBy = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return new ThenByEnumerable(orderedSource, keySelector, comparer);
    } else {
        return new OrderByEnumerable(asIterable(orderedSource), keySelector, comparer);
    }
};
Enumerable.thenByDescending = function(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    if (orderedSource instanceof IOrderedEnumerable) {
        return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
    } else {
        return new OrderByDescendingEnumerable(asIterable(orderedSource), keySelector, comparer);
    }
};
Enumerable.groupBy = function(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
    return new GroupedEnumerable(asIterable(source), keySelector, elementSelector, resultSelector, comparer);
};
Enumerable.selectMany = function(source, collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
    return new SelectManyEnumerable(asIterable(source), collectionSelector, resultSelector);
};
Enumerable.join = function(outer, inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    if (core.isUndefined(resultSelector) && core.array$join) {
        if (core.isArray(outer)) {
            return core.array$join.call(outer, inner);
        } else {
            return core.array$join.call(this.toArray(asIterable(outer)), inner);
        }
    } else {
        return new JoinEnumerable(asIterable(outer), asIterable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
};
Enumerable.leftJoin = function(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return new LeftJoinEnumerable(asIterable(outer), asIterable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.rightJoin = function(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return new RightJoinEnumerable(asIterable(outer), asIterable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.groupJoin = function(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
    return new GroupJoinEnumerable(asIterable(outer), asIterable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
};
Enumerable.reverse = function(source) {
    return new ReverseEnumerable(asIterable(source));
};
Enumerable.zip = function(source, other, resultSelector = defaultResultSelector) {
    return new ZipEnumerable(asIterable(source), other, resultSelector);
};
Enumerable.every = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$every) {
        return core.array$every.call(source, callback, thisArg);
    } else {
        return this.all(source, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.find = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$find) {
        return core.array$find.call(source, callback, thisArg);
    } else {
        return this.firstOrDefault(source, undefined, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.includes = function(source, element, start = 0) {
    if (core.isArray(source) && core.array$includes) {
        return core.array$includes.call(source, element, start);
    } else if (core.isString(source) && core.string$includes) {
        return core.string$includes.call(source, element, start);
    } else {
        return this.skip(source, start).contains(element);
    }
};
Enumerable.map = function(source, callback, thisArg) {
    return this.select(source, (element, index) => callback.call(thisArg, element, index, source));
};
Enumerable.filter = function(source, callback, thisArg) {
    return this.where(source, (element, index) => callback.call(thisArg, element, index, source));
};
Enumerable.concat = function(source, ...others) {
    return new (Function.prototype.bind.apply(ConcatEnumerable, core.array$concat.call([null], [asIterable(source)], others)))();
};
Enumerable.pop = function(source) {
    if (core.isArray(source) && core.array$pop) {
        return core.array$pop.call(source);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            let len = iterable.length - 1;
            for (let index = 0; index < len; index++) {
                yield iterable[index];
            }
        });
        return iterable[iterable.length - 1];
    }
};
Enumerable.push = function(source, ...values) {
    if (core.isArray(source) && core.array$push) {
        return core.array$push.apply(source, values);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            yield* iterable;
            yield* values;
        });
        return iterable.length + values.length;
    }
};
Enumerable.shift = function(source) {
    if (core.isArray(source) && core.array$shift) {
        return core.array$shift.call(source);
    } else {
        source = asIterable(source);
        let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
        core.setProperty(source, Symbol.iterator, function*() {
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
};
Enumerable.unshift = function(source, ...values) {
    if (core.isArray(source) && core.array$unshift) {
        return core.array$unshift.apply(source, values);
    } else {
        source = asIterable(source);
        let iterable = this.toArray(source);
        core.setProperty(source, Symbol.iterator, function*() {
            yield* values;
            yield* iterable;
        });
        return values.length + iterable.length;
    }
};
Enumerable.reduce = function(source, callback, initialValue) {
    if (core.isArray(source) && core.array$reduce) {
        return core.array$reduce.call(source, callback, initialValue);
    } else {
        return this.aggregate(source, initialValue, (seed, element, index) => callback(seed, element, index, source));
    }
};
Enumerable.reduceRight = function(source, callback, initialValue) {
    if (core.isArray(source) && core.array$reduceRight) {
        return core.array$reduceRight.call(source, callback, initialValue);
    } else {
        return this.reverse(source).aggregate(initialValue, (seed, element, index) => callback(seed, element, index, source));
    }
};
Enumerable.some = function(source, callback, thisArg) {
    if (core.isArray(source) && core.array$some) {
        return core.array$some.call(source, callback, thisArg);
    } else {
        return this.any(source, (element, index) => callback.call(thisArg, element, index, source));
    }
};
Enumerable.slice = function(source, start = 0, end = Infinity) {
    return new SliceEnumerable(asIterable(source), start, end);
};
Enumerable.splice = function(source, start, count, ...values) {
    if (core.isArray(source) && core.array$splice) {
        return core.array$splice.call(source, start, count, ...values);
    } else {
        return new (Function.prototype.bind.apply(SpliceEnumerable, core.array$concat.call([null], [asIterable(source), start, count], values)))();
    }
};
Enumerable.fill = function(source, value, start = 0, end = Infinity) {
    return new FillEnumerable(asIterable(source), value, start, end);
};
Enumerable.sort = function(source, comparer = defaultComparer) {
    return new SortEnumerable(asIterable(source), comparer);
};
Enumerable.copyWithin = function(source, target = 0, start = 0, end = Infinity) {
    return new CopyWithinEnumerable(asIterable(source), target, start, end);
};
Enumerable.defaultIfEmpty = function(source, defaultValue) {
    return this.isEmpty(source) ? new SingleEnumerable(defaultValue) : this.asEnumerable(source);
};
Enumerable.all = function(source, predicate = defaultPredicate) {
    let index = 0;
    source = asIterable(source);
    predicate = methods.asPredicate(predicate);
    for (let element of source) {
        if (!predicate(element, index++)) {
            return false;
        }
    }
    return true;
};
Enumerable.any = function(source, predicate = defaultPredicate) {
    let index = 0;
    source = asIterable(source);
    predicate = methods.asPredicate(predicate);
    for (let element of source) {
        if (predicate(element, index++)) {
            return true;
        }
    }
    return false;
};
Enumerable.isEmpty = function(source) {
    return !this.any(source);
};
Enumerable.sequenceEqual = function(source, other, comparer = defaultEqualityComparer) {
    source = asIterable(source);
    other = asIterable(other);
    comparer = methods.asEqualityComparer(comparer);
    let sourceIterator = source[Symbol.iterator]();
    let otherIterator = other[Symbol.iterator]();
    let sourceElement, otherElement;
    while(!((sourceElement = sourceIterator.next()).done & (otherElement = otherIterator.next()).done)) {
        if (sourceElement.done !== otherElement.done) {
            return false;
        } else if (!comparer(sourceElement.value, otherElement.value)) {
            return false;
        }
    }
    return true;
};
Enumerable.first = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[0];
        } else {
            throw new NoSuchElementsException();
        }
    } else {
        let index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        throw new NoSuchElementsException();
    }
};
Enumerable.firstOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[0];
        } else {
            return defaultValue;
        }   
    } else {
        let index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        return defaultValue;
    }
};
Enumerable.last = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[source.length - 1];
        } else {
            throw new NoSuchElementsException();
        }
    } else {
        let last, has = false, index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                last = element;
                has = true;
            }
        }
        if (has) {
            return last;
        } else {
            throw new NoSuchElementsException();
        }
    }
};
Enumerable.lastOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length > 0) {
            return source[source.length - 1];
        } else {
            return defaultValue;
        }
    } else {
        let last, has = false, index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                last = element;
                has = true;
            }
        }
        if (has) {
            return last;
        } else {
            return defaultValue;
        }
    }
};
Enumerable.single = function(source, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length === 1) {
            return source[0];
        } else if (source.length === 0) {
            throw new NoSuchElementsException();
        } else {
            throw new TooManyElementsException();
        }
    } else {
        let single, count = 0, index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                single = element;
                count++;
                if (count >= 2) {
                    break;
                }
            }
        }
        if (count === 1) {
            return single;
        } else if (count === 0) {
            throw new NoSuchElementsException();
        } else {
            throw new TooManyElementsException();
        }
    }
};
Enumerable.singleOrDefault = function(source, defaultValue, predicate = defaultPredicate) {
    if (predicate === defaultPredicate && core.isProto(source)) {
        if (source.length === 1) {
            return source[0];
        } else if (source.length === 0) {
            return defaultValue;
        } else {
            throw new TooManyElementsException();
        }
    } else {
        let single, count = 0, index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        for (let element of source) {
            if (predicate(element, index++)) {
                single = element;
                count++;
                if (count >= 2) {
                    break;
                }
            }
        }
        if (count === 1) {
            return single;
        } else if (count === 0) {
            return defaultValue;
        } else {
            throw new TooManyElementsException();
        }
    }
};
Enumerable.count = function(source, predicate = defaultPredicate) {
    let count = 0, index = 0;
    source = asIterable(source);
    predicate = methods.asPredicate(predicate);
    for (let element of source) {
        if (predicate(element, index++)) {
            count++;
        }
    }
    return count;
};
Enumerable.aggregate = function(source, seed, func, resultSelector = defaultSelector) {
    let index = 0;
    source = asIterable(source);
    resultSelector = methods.asSelector(resultSelector);
    for (let element of source) {
        seed = func(seed, element, index++);
    }
    return resultSelector(seed);
};
Enumerable.sum = function(source, selector = defaultSelector) {
    let sum = 0, index = 0;
    source = asIterable(source);
    selector = methods.asSelector(selector);
    for (let element of source) {
        sum += parseFloat(selector(element, index++));
        if (isNaN(sum)) return sum;
    }
    return sum;
};
Enumerable.product = function(source, selector = defaultSelector) {
    let product = 1, index = 0;
    source = asIterable(source);
    selector = methods.asSelector(selector);
    for (let element of source) {
        product *= parseFloat(selector(element, index++));
        if (isNaN(product)) return product;
    }
    return index === 0 ? NaN : product;
};
Enumerable.max = function(source, selector = defaultSelector, comparer = defaultComparer) {
    let max = false, first = true, index = 0;
    source = asIterable(source);
    selector = methods.asSelector(selector);
    comparer = methods.asComparer(comparer);
    for (let element of source) {
        element = selector(element, index++);
        if (first) {
            max = element;
        } else {
            max = comparer(max, element) > 0 ? max : element;
        }
        first = false;
    }
    if (first) {
        throw new NoSuchElementsException();
    } else {
        return max;
    }
};
Enumerable.min = function(source, selector = defaultSelector, comparer = defaultComparer) {
    let min = false, first = true, index = 0;
    source = asIterable(source);
    selector = methods.asSelector(selector);
    comparer = methods.asComparer(comparer);
    for (let element of source) {
        element = selector(element, index++);
        if (first) {
            min = element;
        } else {
            min = comparer(min, element) < 0 ? min : element;
        }
        first = false;
    }
    if (first) {
        throw new NoSuchElementsException();
    } else {
        return min;
    }
};
Enumerable.average = function(source, selector = defaultSelector) {
    let sum = 0, count = 0, index = 0;
    source = asIterable(source);
    selector = methods.asSelector(selector);
    for (let element of source) {
        sum += parseFloat(selector(element, index++));
        if (isNaN(sum)) return sum;
        count++;
    }
    if (count !== 0) {
        return sum / count;
    } else {
        throw new NoSuchElementsException();
    }
};
Enumerable.contains = function(source, value, comparer = defaultEqualityComparer) {
    source = asIterable(source);
    comparer = methods.asEqualityComparer(comparer);
    for (let element of source) {
        if (comparer(element, value)) {
            return true;
        }
    }
    return false;
};
Enumerable.elementAt = function(source, index) {
    if (core.isProto(source)) {
        if (index >= 0 && index < source.length) {
            return source[index];
        } else {
            throw new OutOfRangeException(index);
        }
    } else {
        if (index >= 0) {
            source = asIterable(source);
            for (let element of source) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        throw new OutOfRangeException(index);
    }
};
Enumerable.elementAtOrDefault = function(source, index, defaultValue) {
    if (core.isProto(source)) {
        if (index >= 0 && index < source.length) {
            return source[index];
        } else {
            return defaultValue;
        }
    } else {
        if (index >= 0) {
            source = asIterable(source);
            for (let element of source) {
                if (index-- === 0) {
                    return element;
                }
            }
        }
        return defaultValue;
    }
};
Enumerable.indexOf = function(source, value, start = 0, comparer = defaultStrictEqualityComparer) {
    if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$indexOf) {
        return core.array$indexOf.call(source, value, start);
    } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$indexOf) {
        return core.string$indexOf.call(source, value, start);
    } else {
        let index = 0;
        source = asIterable(source);
        comparer = methods.asStrictEqualityComparer(comparer);
        for (let element of source) {
            if (index >= start && comparer(element, value)) {
                return index;
            }
            index++;
        }
        return -1;
    }
};
Enumerable.findIndex = function(source, predicate, thisArg) {
    if (core.isArray(source) && core.array$findIndex) {
        return core.array$findIndex.call(source, predicate, thisArg);
    } else {
        let index = 0;
        source = asIterable(source);
        predicate = methods.asPredicate(predicate);
        let callback = (element, index) => predicate.call(thisArg, element, index, source);
        for (let element of source) {
            if (callback(element, index)) {
                return index;
            }
            index++;
        }
        return -1;
    }
};
Enumerable.findLast = function(source, callback, thisArg) {
    return this.lastOrDefault(source, undefined, (element, index) => callback.call(thisArg, element, index, source));
};
Enumerable.lastIndexOf = function(source, value, start = Infinity, comparer = defaultStrictEqualityComparer) {
    if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$lastIndexOf) {
        return core.array$lastIndexOf.call(source, value, start);
    } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$lastIndexOf) {
        return core.string$lastIndexOf.call(source, value, start);
    } else {
        source = this.toArray(asIterable(source));
        comparer = methods.asStrictEqualityComparer(comparer);
        if (start < 0) {
            start = source.length + start;
        }
        for (let index = Math.min(start, source.length - 1); index >= 0; index--) {
            if (comparer(source[index], value)) {
                return index;
            }
        }
        return -1;
    }
};
Enumerable.findLastIndex = function(source, predicate, thisArg) {
    source = this.toArray(asIterable(source));
    predicate = methods.asPredicate(predicate);
    let callback = (element, index) => predicate.call(thisArg, element, index, source);
    for (let index = source.length - 1; index >= 0; index--) {
        let element = source[index];
        if (callback(element, index)) {
            return index;
        }
    }
    return -1;
};
Enumerable.forEach = function(source, action = defaultAction, thisArg = undefined) {
    if (core.isArray(source) && core.array$forEach) {
        core.array$forEach.call(source, action, thisArg);
    } else {
        let index = 0;
        let callback = (element, index) => action.call(thisArg, element, index, source);
        source = asIterable(source);
        for (let element of source) {
            callback(element, index++);
        }
    }
};
Enumerable.chunk = function(source, chunk, offset = 0) {
    return new ChunkEnumerable(source, chunk, offset);
};
Enumerable.leftPad = function(source, length, value) {
    return new LeftPadEnumerable(source, length, value);
};
Enumerable.rightPad = function(source, length, value) {
    return new RightPadEnumerable(source, length, value);
};
Enumerable.rand = function(source, count = 0) {
    return new RandEnumerable(source, count);
};
core.defineProperty(Enumerable, 'comparers', () => ({
    get default() {
        return defaultComparer;
    },
    get equality() {
        return defaultEqualityComparer;
    },
    get same() {
        return defaultSameComparer;
    },
    get strict() {
        return defaultStrictEqualityComparer;
    },
    array(array, last = false, comparer = defaultEqualityComparer) {
        return arrayComparer(array, last, comparer);
    },
    predicate(predicateArray, last = false) {
        return predicateComparer(predicateArray, last);
    },
    greater(greaterThen, comparer = defaultEqualityComparer) {
        return greaterComparer(greaterThen, comparer);
    },
    less(lessThen, comparer = defaultEqualityComparer) {
        return lessComparer(lessThen, comparer);
    },
    ignoreCase(selector = defaultSelector) {
        return ignoreCaseComparer(selector);
    }
}), true, true);
core.defineProperty(Enumerable, 'selectors', () => ({
    get default() {
        return defaultSelector;
    },
    get key() {
        return defaultKeySelector;
    },
    get value() {
        return defaultValueSelector;
    },
    get result() {
        return defaultResultSelector;
    },
    property(property) {
    	return propertySelector(property);
    }
}), true, true);
core.defineProperty(Enumerable, 'actions', () => ({
    get default() {
        return defaultAction;
    }
}), true, true);
core.defineProperty(Enumerable, 'predicates', () => ({
    get default() {
        return defaultPredicate;
    },
    get exists() {
        return defaultExistsPredicate;
    },
    selector(selector, predicate = defaultExistsPredicate) {
        return selectorPredicate(selector, predicate);
    },
    not(predicate = defaultExistsPredicate) {
        return notPredicate(predicate);
    },
    equality(value, comparer = defaultEqualityComparer) {
        return equalityPredicate(value, comparer);
    },
    strict(value) {
        return equalityPredicate(value, defaultStrictEqualityComparer);
    },
    same(value) {
        return equalityPredicate(value, defaultSameComparer);
    },
    regexp(regexp, keySelector = defaultSelector) {
        return regexpPredicate(regexp, keySelector);
    }
}), true, true);
core.defineProperty(Enumerable, 'exceptions', () => ({
    get NoSuchElementsException() {
        return NoSuchElementsException;
    },
    get OutOfRangeException() {
        return OutOfRangeException;
    },
    get TooManyElementsException() {
        return TooManyElementsException;
    },
    get KeysForMultiElementsException() {
        return KeysForMultiElementsException;
    },
    get NeedExecuteBeforeException() {
        return NeedExecuteBeforeException;
    },
    get PropertyExpressionInvalidException() {
        return PropertyExpressionInvalidException;
    },
    get InvalidFunctionException() {
        return InvalidFunctionException;
    },
    get PluginRepeatException() {
        return PluginRepeatException;
    }
}), true, true);
core.defineProperty(Enumerable, 'IComparable', () => IComparable, true, true);
core.defineProperty(Enumerable, 'IEquatable', () => IEquatable, true, true);

module.exports = Enumerable;

require('./plugin');
require('./extend');

const IEnumerator = require('./IEnumerator');

const IEnumerable = require('./IEnumerable');
const RepeatEnumerable = require('./enumerables/RepeatEnumerable');
const RangeEnumerable = require('./enumerables/RangeEnumerable');
const EmptyEnumerable = require('./enumerables/EmptyEnumerable');
const IteratorEnumerable = require('./enumerables/IteratorEnumerable');
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
const TakeEnumerable = require('./enumerables/TakeEnumerable');
const TakeWhileEnumerable = require('./enumerables/TakeWhileEnumerable');
const IOrderedEnumerable = require('./enumerables/IOrderedEnumerable');
const OrderByEnumerable = require('./enumerables/OrderByEnumerable');
const OrderByDescendingEnumerable = require('./enumerables/OrderByDescendingEnumerable');
const ThenByEnumerable = require('./enumerables/ThenByEnumerable');
const ThenByDescendingEnumerable = require('./enumerables/ThenByDescendingEnumerable');
const GroupedEnumerable = require('./enumerables/GroupedEnumerable');
const SelectManyEnumerable = require('./enumerables/SelectManyEnumerable');
const JoinEnumerable = require('./enumerables/JoinEnumerable');
const LeftJoinEnumerable = require('./enumerables/LeftJoinEnumerable');
const RightJoinEnumerable = require('./enumerables/RightJoinEnumerable');
const GroupJoinEnumerable = require('./enumerables/GroupJoinEnumerable');
const ReverseEnumerable = require('./enumerables/ReverseEnumerable');
const ZipEnumerable = require('./enumerables/ZipEnumerable');
const SingleEnumerable = require('./enumerables/SingleEnumerable');
const Dictionary = require('./enumerables/Dictionary');
const Lookup = require('./enumerables/Lookup');
const SliceEnumerable = require('./enumerables/SliceEnumerable');
const SpliceEnumerable = require('./enumerables/SpliceEnumerable');
const FillEnumerable = require('./enumerables/FillEnumerable');
const SortEnumerable = require('./enumerables/SortEnumerable');
const CopyWithinEnumerable = require('./enumerables/CopyWithinEnumerable');
const ChunkEnumerable = require('./enumerables/ChunkEnumerable');
const LeftPadEnumerable = require('./enumerables/LeftPadEnumerable');
const RightPadEnumerable = require('./enumerables/RightPadEnumerable');
const RandEnumerable = require('./enumerables/RandEnumerable');
