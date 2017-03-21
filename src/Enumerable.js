'use strict';

const core = require('./core/core');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultGroupResultSelector = require('./methods/defaultGroupResultSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultAction = require('./methods/defaultAction');

const arrayComparer = require('./methods/arrayComparer');
const predicateComparer = require('./methods/predicateComparer');

const NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');
const OutOfRangeException = require('./core/exceptions/OutOfRangeException');
const TooManyElementsException = require('./core/exceptions/TooManyElementsException');
const KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');
const NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');

const IComparable = require('./core/IComparable');
const IEquatable = require('./core/IEquatable');

const asEnumerable = value => {
	if (value[Symbol.iterator]) {
		return value;
	} else if (core.isIterator(value)) {
		return value.asEnumerable();
	} else {
		throw new Error('Not an enumerable value');
	}
};

class Enumerable {
    static unextends(prototype, type) {
        if (typeof prototype !== 'object') return prototype;
        core.undefineProperties(prototype, 'where', 'select', 'elementAt', 'distinct', 'except', 'union', 'intersect', 'ofType', 'skip', 'skipWhile', 'take', 'takeWhile', 'orderBy', 'orderByDescending', 'groupBy', 'selectMany', 'join', 'groupJoin', 'defaultIfEmpty', 'all', 'any', 'isEmpty', 'sequenceEqual', 'first', 'firstOrDefault', 'last', 'lastOrDefault', 'single', 'singleOrDefault', 'count', 'sum', 'max', 'min', 'average', 'aggregate', 'contains', 'indexOf', 'findIndex', 'lastIndexOf', 'findLastIndex', 'reverse', 'copyWithin', 'every', 'fill', 'filter', 'find', 'includes', 'map', 'pop', 'push', 'shift', 'unshift', 'reduce', 'reduceRight', 'slice', 'splice', 'some', 'sort', 'zip', 'toArray', 'toObject', 'forEach', 'concat', 'toDictionary', 'toLookup');
    }
    static extends(prototype, type) {
        if (typeof prototype !== 'object') return prototype;
        core.defineProperties(prototype, {
            where(predicate = defaultPredicate) {
                return Enumerable.where(asEnumerable(this), predicate);
            },
            select(selector = defaultSelector) {
                return Enumerable.select(asEnumerable(this), selector);
            },
            elementAt(index) {
                return Enumerable.elementAt(asEnumerable(this), index);
            },
            distinct(comparer = defaultEqualityComparer) {
                return Enumerable.distinct(asEnumerable(this), comparer);
            },
            except(other, comparer = defaultEqualityComparer) {
                return Enumerable.except(asEnumerable(this), other, comparer);
            },
            union(other, comparer = defaultEqualityComparer) {
                return Enumerable.union(asEnumerable(this), other, comparer);
            },
            intersect(other, comparer = defaultEqualityComparer) {
                return Enumerable.intersect(asEnumerable(this), other, comparer);
            },
            ofType(type) {
                return Enumerable.ofType(asEnumerable(this), type);
            },
            skip(count) {
                return Enumerable.skip(asEnumerable(this), count);
            },
            skipWhile(predicate = defaultPredicate()) {
                return Enumerable.skipWhile(asEnumerable(this), predicate);
            },
            take(count) {
                return Enumerable.take(asEnumerable(this), count);
            },
            takeWhile(predicate = defaultPredicate()) {
                return Enumerable.takeWhile(asEnumerable(this), predicate);
            },
            orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderBy(asEnumerable(this), keySelector, comparer);
            },
            orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderByDescending(asEnumerable(this), keySelector, comparer);
            },
            groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupBy(asEnumerable(this), keySelector, elementSelector, resultSelector, comparer);
            },
            selectMany(collectionSelector = defaultSelector, resultSelector = defaultSelector) {
                return Enumerable.selectMany(asEnumerable(this), collectionSelector, resultSelector);
            },
            join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.join(asEnumerable(this), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            groupJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupJoin(asEnumerable(this), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            defaultIfEmpty() {
                return Enumerable.defaultIfEmpty(asEnumerable(this));
            },
            all(predicate = defaultPredicate) {
                return Enumerable.all(asEnumerable(this), predicate);
            },
            any(predicate = defaultPredicate) {
                return Enumerable.any(asEnumerable(this), predicate);
            },
            isEmpty() {
                return Enumerable.isEmpty(asEnumerable(this));
            },
            sequenceEqual(other, comparer = defaultEqualityComparer) {
                return Enumerable.sequenceEqual(asEnumerable(this), other, comparer);
            },
            first(predicate = defaultPredicate) {
                return Enumerable.first(asEnumerable(this), predicate);
            },
            firstOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.firstOrDefault(asEnumerable(this), defaultValue, predicate);
            },
            last(predicate = defaultPredicate) {
                return Enumerable.last(asEnumerable(this), predicate);
            },
            lastOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.lastOrDefault(asEnumerable(this), defaultValue, predicate);
            },
            single(predicate = defaultPredicate) {
                return Enumerable.single(asEnumerable(this), predicate);
            },
            singleOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.singleOrDefault(asEnumerable(this), defaultValue, predicate);
            },
            count(predicate = defaultPredicate) {
                return Enumerable.count(asEnumerable(this), predicate);
            },
            sum(predicate = defaultPredicate) {
                return Enumerable.sum(asEnumerable(this), predicate);
            },
            max(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.max(asEnumerable(this), selector, comparer);
            },
            min(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.min(asEnumerable(this), selector, comparer);
            },
            average(predicate = defaultPredicate) {
                return Enumerable.average(asEnumerable(this), predicate);
            },
            aggregate(seed, func, selector = defaultSelector) {
                return Enumerable.aggregate(asEnumerable(this), seed, func, selector);
            },
            contains(value, comparer = defaultEqualityComparer) {
                return Enumerable.contains(asEnumerable(this), value, comparer);
            },
            indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
                return Enumerable.indexOf(asEnumerable(this), value, start, comparer);
            },
            findIndex(predicate, thisArg) {
                return Enumerable.findIndex(asEnumerable(this), predicate, thisArg);
            },
            lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
                return Enumerable.lastIndexOf(asEnumerable(this), value, start, comparer);
            },
            findLastIndex(predicate, thisArg) {
                return Enumerable.findLastIndex(asEnumerable(this), predicate, thisArg);
            },
            reverse() {
                return Enumerable.reverse(asEnumerable(this));
            },
            copyWithin(target = 0, start = 0, end = Infinity) {
                return Enumerable.copyWithin(asEnumerable(this), target, start, end);
            },
            every(callback, thisArg) {
                return Enumerable.every(asEnumerable(this), callback, thisArg);
            },
            fill(value, start = 0, end = Infinity) {
                return Enumerable.fill(asEnumerable(this), value, start, end);
            },
            filter(callback, thisArg) {
                return Enumerable.filter(asEnumerable(this), callback, thisArg);
            },
            find(callback, thisArg) {
                return Enumerable.find(asEnumerable(this), callback, thisArg);
            },
            includes(element, start = 0) {
                return Enumerable.includes(asEnumerable(this), element, start);
            },
            map(callback, thisArg) {
                return Enumerable.map(asEnumerable(this), callback, thisArg);
            },
            pop() {
                return Enumerable.pop(asEnumerable(this));
            },
            push(...values) {
                return Enumerable.push.apply(Enumerable, core.array$concat.call([asEnumerable(this)], values));
            },
            shift() {
                return Enumerable.shift(asEnumerable(this));
            },
            unshift(...values) {
                return Enumerable.unshift.apply(Enumerable, core.array$concat.call([asEnumerable(this)], values));
            },
            reduce(callback, initialValue) {
                return Enumerable.reduce(asEnumerable(this), callback, initialValue);
            },
            reduceRight(callback, initialValue) {
                return Enumerable.reduceRight(asEnumerable(this), callback, initialValue);
            },
            slice(start = 0, end = Infinity) {
                return Enumerable.slice(asEnumerable(this), start, end);
            },
            splice(start, count, ...values) {
                return Enumerable.splice.apply(Enumerable, core.array$concat.call([asEnumerable(this), start, count], values));
            },
            some(callback, thisArg) {
                return Enumerable.some(asEnumerable(this), callback, thisArg);
            },
            sort(comparer = defaultComparer) {
                return Enumerable.sort(asEnumerable(this), comparer);
            },
            zip(other, resultSelector) {
                return Enumerable.zip(asEnumerable(this), other, resultSelector);
            },
            toArray() {
                return Enumerable.toArray(asEnumerable(this));
            },
            toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                return Enumerable.toDictionary(asEnumerable(this), keySelector, elementSelector, comparer).toObject();
            },
            forEach(action = defaultAction, thisArg = undefined) {
                return Enumerable.forEach(asEnumerable(this), action, thisArg);
            },
            concat(...others) {
                return Enumerable.concat.apply(Enumerable, core.array$concat.call([asEnumerable(this)], others));
            }
        });
        if (type !== core.types.Object) {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            });
        } else {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            });
        }
        return prototype;
    }
    static getEnumerator(enumerable) {
        return new IEnumerator(asEnumerable(enumerable));
    }
    static repeat(element, count = 0) {
        return new RepeatEnumerable(element, count);
    }
    static range(start, count) {
        return new RangeEnumerable(start, count);
    }
    static empty() {
        return new EmptyEnumerable();
    }
    static asEnumerable(object) {
        return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
    }
    static toArray(source) {
        if (core.isArray(source)) {
            return source;
        } else {
            source = asEnumerable(source);
            return Array.from(source);
        }
    }
    static toDictionary(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        let dictionary = new Dictionary(), index = 0;
        source = asEnumerable(source);
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
    }
    static toLookup(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        let lookup = new Lookup(), index = 0;
        source = asEnumerable(source);
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
    }
    static where(source, predicate = defaultPredicate) {
        return new WhereEnumerable(asEnumerable(source), predicate);
    }
    static select(source, selector = defaultSelector) {
        return new SelectEnumerable(asEnumerable(source), selector);
    }
    static distinct(source, comparer = defaultEqualityComparer) {
        return new DistinctEnumerable(asEnumerable(source), comparer);
    }
    static except(source, other, comparer = defaultEqualityComparer) {
        return new ExceptEnumerable(asEnumerable(source), other, comparer);
    }
    static union(source, other, comparer = defaultEqualityComparer) {
        return new UnionEnumerable(asEnumerable(source), other, comparer);
    }
    static intersect(source, other, comparer = defaultEqualityComparer) {
        return new IntersectEnumerable(asEnumerable(source), other, comparer);
    }
    static ofType(source, type) {
        return new OfTypeEnumerable(asEnumerable(source), type);
    }
    static skip(source, count) {
        return new SkipEnumerable(asEnumerable(source), count);
    }
    static skipWhile(source, predicate = defaultPredicate) {
        return new SkipWhileEnumerable(asEnumerable(source), predicate);
    }
    static take(source, count) {
        return new TakeEnumerable(asEnumerable(source), count);
    }
    static takeWhile(source, predicate = defaultPredicate) {
        return new TakeWhileEnumerable(asEnumerable(source), predicate);
    }
    static orderBy(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByEnumerable(asEnumerable(source), keySelector, comparer);
    }
    static orderByDescending(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByDescendingEnumerable(asEnumerable(source), keySelector, comparer);
    }
    static thenBy(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByEnumerable(asEnumerable(orderedSource), keySelector, comparer);
        }
    }
    static thenByDescending(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByDescendingEnumerable(asEnumerable(orderedSource), keySelector, comparer);
        }
    }
    static groupBy(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
        return new GroupedEnumerable(asEnumerable(source), keySelector, elementSelector, resultSelector, comparer);
    }
    static selectMany(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        return new SelectManyEnumerable(asEnumerable(source), collectionSelector, resultSelector);
    }
    static join(outer, inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (typeof resultSelector === 'undefined' && core.array$join) {
            if (core.isArray(outer)) {
                return core.array$join.call(outer, inner);
            } else {
                return core.array$join.call(this.toArray(asEnumerable(outer)), inner);
            }
        } else {
            return new JoinEnumerable(asEnumerable(outer), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    static groupJoin(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new GroupJoinEnumerable(asEnumerable(outer), inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    static reverse(source) {
        return new ReverseEnumerable(asEnumerable(source));
    }
    static zip(source, other, resultSelector) {
        return new ZipEnumerable(asEnumerable(source), other, resultSelector);
    }
    static every(source, callback, thisArg) {
        if (core.isArray(source) && core.array$every) {
            return core.array$every.call(source, callback, thisArg);
        } else {
            return this.all(source, (element, index) => callback.call(thisArg, element, index, source));
        }
    }
    static find(source, callback, thisArg) {
        if (core.isArray(source) && core.array$find) {
            return core.array$find.call(source, callback, thisArg);
        } else {
            return this.firstOrDefault(source, undefined, (element, index) => callback.call(thisArg, element, index, source));
        }
    }
    static includes(source, element, start = 0) {
        if (core.isArray(source) && core.array$includes) {
            return core.array$includes.call(source, element, start);
        } else if (core.isString(source) && core.string$includes) {
            return core.string$includes.call(source, element, start);
        } else {
            return this.skip(source, start).contains(element);
        }
    }
    static map(source, callback, thisArg) {
        return this.select(source, (element, index) => callback.call(thisArg, element, index, source));
    }
    static filter(source, callback, thisArg) {
        return this.where(source, (element, index) => callback.call(thisArg, element, index, source));
    }
    static concat(source, ...others) {
        return new (Function.prototype.bind.apply(ConcatEnumerable, core.array$concat.call([null], [asEnumerable(source)], others)))();
    }
    static pop(source) {
        if (core.isArray(source) && core.array$pop) {
            return core.array$pop.call(source);
        } else {
            source = asEnumerable(source);
            let iterable = this.toArray(source);
            core.setProperty(source, Symbol.iterator, function*() {
                let len = iterable.length - 1;
                for (let index = 0; index < len; index++) {
                    yield iterable[index];
                }
            });
            return iterable[iterable.length - 1];
        }
    }
    static push(source, ...values) {
        if (core.isArray(source) && core.array$push) {
            return core.array$push.apply(source, values);
        } else {
            source = asEnumerable(source);
            let iterable = this.toArray(source);
            core.setProperty(source, Symbol.iterator, function*() {
                yield* iterable;
                yield* values;
            });
            return iterable.length + values.length;
        }
    }
    static shift(source) {
        if (core.isArray(source) && core.array$shift) {
            return core.array$shift.call(source);
        } else {
            source = asEnumerable(source);
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
    }
    static unshift(source, ...values) {
        if (core.isArray(source) && core.array$unshift) {
            return core.array$unshift.apply(source, values);
        } else {
            source = asEnumerable(source);
            let iterable = this.toArray(source);
            core.setProperty(source, Symbol.iterator, function*() {
                yield* values;
                yield* iterable;
            });
            return values.length + iterable.length;
        }
    }
    static reduce(source, callback, initialValue) {
        if (core.isArray(source) && core.array$reduce) {
            return core.array$reduce.call(source, callback, initialValue);
        } else {
            return this.aggregate(source, initialValue, (seed, element, index) => callback(seed, element, index, source));
        }
    }
    static reduceRight(source, callback, initialValue) {
        if (core.isArray(source) && core.array$reduceRight) {
            return core.array$reduceRight.call(source, callback, initialValue);
        } else {
            return this.reverse(source).aggregate(initialValue, (seed, element, index) => callback(seed, element, index, source));
        }
    }
    static some(source, callback, thisArg) {
        if (core.isArray(source) && core.array$some) {
            return core.array$some.call(source, callback, thisArg);
        } else {
            return this.any(source, (element, index) => callback.call(thisArg, element, index, source));
        }
    }
    static slice(source, start = 0, end = Infinity) {
        return new SliceEnumerable(asEnumerable(source), start, end);
    }
    static splice(source, start, count, ...values) {
        return new (Function.prototype.bind.apply(SpliceEnumerable, core.array$concat.call([null], [asEnumerable(source), start, count], values)))();
    }
    static fill(source, value, start = 0, end = Infinity) {
        return new FillEnumerable(asEnumerable(source), value, start, end);
    }
    static sort(source, comparer = defaultComparer) {
        return new SortEnumerable(asEnumerable(source), comparer);
    }
    static copyWithin(source, target = 0, start = 0, end = Infinity) {
        return new CopyWithinEnumerable(asEnumerable(source), target, start, end);
    }
    static defaultIfEmpty(source, defaultValue) {
        return this.isEmpty(source) ? new SingleEnumerable(defaultValue) : this.asEnumerable(source);
    }
    static all(source, predicate = defaultPredicate) {
        let index = 0;
        source = asEnumerable(source);
        for (let element of source) {
            if (!predicate(element, index++)) {
                return false;
            }
        }
        return true;
    }
    static any(source, predicate = defaultPredicate) {
        let index = 0;
        source = asEnumerable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                return true;
            }
        }
        return false;
    }
    static isEmpty(source) {
        return !this.any(source);
    }
    static sequenceEqual(source, other, comparer = defaultEqualityComparer) {
        source = asEnumerable(source);
        other = asEnumerable(other);
        let sourceIterator = source[Symbol.iterator]();
        let otherIterator = other[Symbol.iterator]();
        let sourceElement, otherElement;
        while(!((sourceElement = sourceIterator.next()).done & (otherElement = otherIterator.next()).done)) {
            if (sourceElement.done != otherElement.done) {
                return false;
            } else if (!comparer(sourceElement.value, otherElement.value)) {
                return false;
            }
        }
        return true;
    }
    static first(source, predicate = defaultPredicate) {
        if (predicate === defaultPredicate && core.isProto(source)) {
            if (source.length > 0) {
                return source[0];
            } else {
                throw new NoSuchElementsException();
            }
        } else {
            let index = 0;
            source = asEnumerable(source);
            for (let element of source) {
                if (predicate(element, index++)) {
                    return element;
                }
            }
            throw new NoSuchElementsException();
        }
    }
    static firstOrDefault(source, defaultValue, predicate = defaultPredicate) {
        if (predicate === defaultPredicate && core.isProto(source)) {
            if (source.length > 0) {
                return source[0];
            } else {
                return defaultValue;
            }   
        } else {
            let index = 0;
            source = asEnumerable(source);
            for (let element of source) {
                if (predicate(element, index++)) {
                    return element;
                }
            }
            return defaultValue;
        }
    }
    static last(source, predicate = defaultPredicate) {
        if (predicate === defaultPredicate && core.isProto(source)) {
            if (source.length > 0) {
                return source[source.length - 1];
            } else {
                throw new NoSuchElementsException();
            }
        } else {
            let last, has = false, index = 0;
            source = asEnumerable(source);
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
    }
    static lastOrDefault(source, defaultValue, predicate = defaultPredicate) {
        if (predicate === defaultPredicate && core.isProto(source)) {
            if (source.length > 0) {
                return source[source.length - 1];
            } else {
                return defaultValue;
            }
        } else {
            let last, has = false, index = 0;
            source = asEnumerable(source);
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
    }
    static single(source, predicate = defaultPredicate) {
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
            source = asEnumerable(source);
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
    }
    static singleOrDefault(source, defaultValue, predicate = defaultPredicate) {
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
            source = asEnumerable(source);
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
    }
    static count(source, predicate = defaultPredicate) {
        let count = 0, index = 0;
        source = asEnumerable(source);
        for (let element of source) {
            if (predicate(element, index++)) {
                count++;
            }
        }
        return count;
    }
    static aggregate(source, seed, func, resultSelector = defaultSelector) {
        let index = 0;
        source = asEnumerable(source);
        for (let element of source) {
            seed = func(seed, element, index++);
        }
        return resultSelector(seed);
    }
    static sum(source, selector = defaultSelector) {
        let sum = 0, index = 0;
        source = asEnumerable(source);
        for (let element of source) {
            sum += parseFloat(selector(element, index++));
            if (isNaN(sum)) return sum;
        }
        return sum;
    }
    static max(source, selector = defaultSelector, comparer = defaultComparer) {
        let max = false, first = true, index = 0;
        source = asEnumerable(source);
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
    }
    static min(source, selector = defaultSelector, comparer = defaultComparer) {
        let min = false, first = true, index = 0;
        source = asEnumerable(source);
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
    }
    static average(source, selector = defaultSelector) {
        let sum = 0, count = 0, index = 0;
        source = asEnumerable(source);
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
    }
    static contains(source, value, comparer = defaultEqualityComparer) {
        source = asEnumerable(source);
        for (let element of source) {
            if (comparer(element, value)) {
                return true;
            }
        }
        return false;
    }
    static elementAt(source, index) {
        if (core.isProto(source)) {
            if (index >= 0 && index < source.length) {
                return source[index];
            } else {
                throw new OutOfRangeException(index);
            }
        } else {
            if (index >= 0) {
                source = asEnumerable(source);
                for (let element of source) {
                    if (index-- === 0) {
                        return element;
                    }
                }
            }
            throw new OutOfRangeException(index);
        }
    }
    static elementAtOrDefault(source, index, defaultValue) {
        if (core.isProto(source)) {
            if (index >= 0 && index < source.length) {
                return source[index];
            } else {
                return defaultValue;
            }
        } else {
            if (index >= 0) {
                source = asEnumerable(source);
                for (let element of source) {
                    if (index-- === 0) {
                        return element;
                    }
                }
            }
            return defaultValue;
        }
    }
    static indexOf(source, value, start = 0, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$indexOf) {
            return core.array$indexOf.call(source, value, start);
        } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$indexOf) {
            return core.string$indexOf.call(source, value, start);
        } else {
            let index = 0;
            source = asEnumerable(source);
            for (let element of source) {
                if (index >= start && comparer(element, value)) {
                    return index;
                }
                index++;
            }
            return -1;
        }
    }
    static findIndex(source, predicate, thisArg) {
        let index = 0;
        let callback = (element, index) => predicate.call(thisArg, element, index, source);
        source = asEnumerable(source);
        for (let element of source) {
            if (callback(element, index)) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static lastIndexOf(source, value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.isArray(source) && core.array$lastIndexOf) {
            return core.array$lastIndexOf.call(source, value, start);
        } else if (comparer === defaultStrictEqualityComparer && core.isString(source) && core.string$lastIndexOf) {
            return core.string$lastIndexOf.call(source, value, start);
        } else {
            source = this.toArray(asEnumerable(source));
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
    }
    static findLastIndex(source, predicate, thisArg) {
        let callback = (element, index) => predicate.call(thisArg, element, index, source);
        source = this.toArray(asEnumerable(source));
        for (let index = source.length - 1; index >= 0; index--) {
            let element = source[index];
            if (callback(element, index)) {
                return index;
            }
        }
        return -1;
    }
    static forEach(source, action = defaultAction, thisArg = undefined) {
        if (core.isArray(source) && core.array$forEach) {
            core.array$forEach.call(source, action, thisArg);
        } else {
            let index = 0;
            let callback = (element, index) => action.call(thisArg, element, index, source);
            source = asEnumerable(source);
            for (let element of source) {
                callback(element, index++);
            }
        }
    }
    static arrayComparer(array, last = false, comparer = defaultEqualityComparer) {
        console.warn('This method was deprecated, please use Enumerable.comparers.array(array, last, comparer)');
        return arrayComparer(array, last, comparer);
    }
    static predicateComparer(predicateArray, last = false) {
        console.warn('This method was deprecated, please use Enumerable.comparers.predicate(predicateArray, last)');
        return predicateComparer(predicateArray, last);
    }
    static get comparers() {
        return {
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
            }
        };
    }
    static get selectors() {
        return {
            get default() {
                return defaultSelector;
            },
            get key() {
                return defaultKeySelector;
            },
            get value() {
                return defaultValueSelector;
            },
            get groupResult() {
                return defaultGroupResultSelector;
            }
        };
    }
    static get actions() {
        return {
            get default() {
                return defaultAction;
            }
        };
    }
    static get predicates() {
        return {
            get default() {
                return defaultPredicate;
            }
        };
    }
    static get exceptions() {
        return {
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
            }
        };
    }
    static get IComparable() {
        return IComparable;
    }
    static get IEquatable() {
        return IEquatable;
    }
}

module.exports = Enumerable;

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
