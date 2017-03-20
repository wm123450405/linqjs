'use strict';

const core = require('./core/core');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
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

class Enumerable {
    static extends(prototype, type) {
        core.defineProperties(prototype, {
            where(predicate = defaultPredicate) {
                return this.asEnumerable().where(predicate);
            },
            select(selector = defaultSelector) {
                return this.asEnumerable().select(selector);
            },
            elementAt(index) {
                return this.asEnumerable().elementAt(index);
            },
            distinct(comparer = defaultEqualityComparer) {
                return this.asEnumerable().distinct(comparer);
            },
            except(other, comparer = defaultEqualityComparer) {
                return this.asEnumerable().except(other, comparer);
            },
            union(other, comparer = defaultEqualityComparer) {
                return this.asEnumerable().union(other, comparer);
            },
            intersect(other, comparer = defaultEqualityComparer) {
                return this.asEnumerable().intersect(other, comparer);
            },
            ofType(type) {
                return this.asEnumerable().ofType(type);
            },
            skip(count) {
                return this.asEnumerable().skip(count);
            },
            skipWhile(predicate = defaultPredicate()) {
                return this.asEnumerable().skipWhile(predicate);
            },
            take(count) {
                return this.asEnumerable().take(count);
            },
            takeWhile(predicate = defaultPredicate()) {
                return this.asEnumerable().takeWhile(predicate);
            },
            orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return this.asEnumerable().orderBy(keySelector, comparer);
            },
            orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return this.asEnumerable().orderByDescending(keySelector, comparer);
            },
            groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().groupBy(keySelector, elementSelector, resultSelector, comparer);
            },
            selectMany(collectionSelector = defaultSelector, resultSelector = defaultSelector) {
                return this.asEnumerable().selectMany(collectionSelector, resultSelector);
            },
            join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            groupJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            defaultIfEmpty() {
                return this.asEnumerable().defaultIfEmpty();
            },
            all(predicate = defaultPredicate) {
                return this.asEnumerable().all(predicate);
            },
            any(predicate = defaultPredicate) {
                return this.asEnumerable().any(predicate);
            },
            isEmpty() {
                return this.asEnumerable().isEmpty();
            },
            sequenceEqual(other, comparer = defaultEqualityComparer) {
                return this.asEnumerable().sequenceEqual(other, comparer);
            },
            first(predicate = defaultPredicate) {
                return this.asEnumerable().first(predicate);
            },
            firstOrDefault(defaultValue, predicate = defaultPredicate) {
                return this.asEnumerable().firstOrDefault(defaultValue, predicate);
            },
            last(predicate = defaultPredicate) {
                return this.asEnumerable().last(predicate);
            },
            lastOrDefault(defaultValue, predicate = defaultPredicate) {
                return this.asEnumerable().lastOrDefault(defaultValue, predicate);
            },
            single(predicate = defaultPredicate) {
                return this.asEnumerable().single(predicate);
            },
            singleOrDefault(defaultValue, predicate = defaultPredicate) {
                return this.asEnumerable().singleOrDefault(defaultValue, predicate);
            },
            count(predicate = defaultPredicate) {
                return this.asEnumerable().count(predicate);
            },
            sum(predicate = defaultPredicate) {
                return this.asEnumerable().sum(predicate);
            },
            max(selector = defaultSelector, comparer = defaultComparer) {
                return this.asEnumerable().max(selector, comparer);
            },
            min(selector = defaultSelector, comparer = defaultComparer) {
                return this.asEnumerable().min(selector, comparer);
            },
            average(predicate = defaultPredicate) {
                return this.asEnumerable().average(predicate);
            },
            aggregate(seed, func, selector = defaultSelector) {
                return this.asEnumerable().aggregate(seed, func, selector);
            },
            contains(value, comparer = defaultEqualityComparer) {
                return this.asEnumerable().contains(value, comparer);
            },
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                return this.asEnumerable().indexOf(value, start, comparer);
            },
            findIndex(predicate, thisArg) {
                return this.asEnumerable().findIndex(predicate, thisArg);
            },
            lastIndexOf(value, start = 0, comparer = defaultEqualityComparer) {
                return this.asEnumerable().lastIndexOf(value, start, comparer);
            },
            findLastIndex(predicate, thisArg) {
                return this.asEnumerable().findLastIndex(predicate, thisArg);
            },
            reverse() {
                return this.asEnumerable().reverse();
            },
            zip(other, resultSelector) {
                return this.asEnumerable().zip(other, resultSelector);
            },
            toArray() {
                return this.asEnumerable().toArray();
            },
            toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer).toObject();
            },
            forEach(action = defaultAction, thisArg = undefined) {
                return this.asEnumerable().forEach(action, thisArg);
            },
        });
        if (type !== core.types.String) {
            core.defineProperties(prototype, {
                concat(...others) {
                    return this.asEnumerable().concat(...others);
                }
            });
        }
        if (type !== core.types.Object) {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                }
            });
        } else {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                }
            });
        }
        return prototype;
    }
    static getEnumerator(enumerable) {
        return new IEnumerator(enumerable);
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
        return [...source];
    }
    static toDictionary(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
        let dictionary = new Dictionary(), index = 0;
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
    static toLookup(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
        let lookup = new Lookup(), index = 0;
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
        return new WhereEnumerable(source, predicate);
    }
    static select(source, selector = defaultSelector) {
        return new SelectEnumerable(source, selector);
    }
    static concat(source, ...others) {
        return new ConcatEnumerable(source, ...others);
    }
    static distinct(source, comparer = defaultEqualityComparer) {
        return new DistinctEnumerable(source, comparer);
    }
    static except(source, other, comparer = defaultEqualityComparer) {
        return new ExceptEnumerable(source, other, comparer);
    }
    static union(source, other, comparer = defaultEqualityComparer) {
        return new UnionEnumerable(source, other, comparer);
    }
    static intersect(source, other, comparer = defaultEqualityComparer) {
        return new IntersectEnumerable(source, other, comparer);
    }
    static ofType(source, type) {
        return new OfTypeEnumerable(source, type);
    }
    static skip(source, count) {
        return new SkipEnumerable(source, count);
    }
    static skipWhile(source, predicate = defaultPredicate) {
        return new SkipWhileEnumerable(source, predicate);
    }
    static take(source, count) {
        return new TakeEnumerable(source, count);
    }
    static takeWhile(source, predicate = defaultPredicate) {
        return new TakeWhileEnumerable(source, predicate);
    }
    static orderBy(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByEnumerable(source, keySelector, comparer);
    }
    static orderByDescending(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByDescendingEnumerable(source, keySelector, comparer);
    }
    static thenBy(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByEnumerable(orderedSource, keySelector, comparer);
        }
    }
    static thenByDescending(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByDescendingEnumerable(orderedSource, keySelector, comparer);
        }
    }
    static groupBy(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
        return new GroupingEnumerable(source, keySelector, elementSelector, resultSelector, comparer);
    }
    static selectMany(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        return new SelectManyEnumerable(source, collectionSelector, resultSelector);
    }
    static join(outer, inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (typeof resultSelector === 'undefined' && core.array$join) {
            if (core.isArray(outer)) {
                return core.array$join.call(outer, inner);
            } else {
                return core.array$join.call(Enumerable.toArray(outer), inner);
            }
        } else {
            return new JoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    static groupJoin(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return new GroupJoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    static reverse(source) {
        return new ReverseEnumerable(source);
    }
    static zip(source, other, resultSelector) {
        return new ZipEnumerable(source, other, resultSelector);
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
        } else {
            return this.skip(source, start).contains(element);
        }
    }
    static map(source, callback, thisArg) {
        if (core.isArray(source) && core.array$map) {
            return core.array$map.call(source, callback, thisArg);
        } else {
            return this.select(source, (element, index) => callback.call(thisArg, element, index, source));
        }
    }
    static filter(source, callback, thisArg) {
        if (core.isArray(source) && core.array$filter) {
            return core.array$filter.call(source, callback, thisArg);
        } else {
            return this.where(source, (element, index) => callback.call(thisArg, element, index, source));
        }
    }
    static pop(source) {
        if (core.isArray(source) && core.array$pop) {
            return core.array$pop.call(source);
        } else {
            let iterable = [...source];
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
            return core.array$push.call(source, ...values);
        } else {
            let iterable = [...source];
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
            return core.array$unshift.call(source, ...values);
        } else {
            let iterable = [...source];
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
        return new SliceEnumerable(source, start, end);
    }
    static splice(source, start, count, ...values) {
        return new SpliceEnumerable(source, start, count, ...values);
    }
    static fill(source, value, start = 0, end = Infinity) {
        return new FillEnumerable(source, value, start, end);
    }
    static sort(source, comparer = defaultComparer) {
        return new SortEnumerable(source, comparer);
    }
    static copyWithin(source, target = 0, start = 0, end = Infinity) {
        return new CopyWithinEnumerable(source, target, start, end);
    }
    static defaultIfEmpty(source, defaultValue) {
        return Enumerable.isEmpty(source) ? new SingleEnumerable(defaultValue) : Enumerable.asEnumerable(source);
    }
    static all(source, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (!predicate(element, index++)) {
                return false;
            }
        }
        return true;
    }
    static any(source, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (predicate(element, index++)) {
                return true;
            }
        }
        return false;
    }
    static isEmpty(source) {
        return !Enumerable.any(source);
    }
    static sequenceEqual(source, other, comparer = defaultEqualityComparer) {
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
        for (let element of source) {
            if (predicate(element, index++)) {
                count++;
            }
        }
        return count;
    }
    static aggregate(source, seed, func, resultSelector = defaultSelector) {
        let index = 0;
        for (let element of source) {
            seed = func(seed, element, index++);
        }
        return resultSelector(seed);
    }
    static sum(source, selector = defaultSelector) {
        let sum = 0, index = 0;
        for (let element of source) {
            sum += parseFloat(selector(element, index++));
            if (isNaN(sum)) return sum;
        }
        return sum;
    }
    static max(source, selector = defaultSelector, comparer = defaultComparer) {
        let max = false, first = true, index = 0;
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
                for (let element of source) {
                    if (index-- === 0) {
                        return element;
                    }
                }
            }
            return defaultValue;
        }
    }
    static indexOf(source, value, start = 0, comparer = defaultEqualityComparer) {
        if (comparer === defaultEqualityComparer && core.isProto(source)) {
            return Enumerable.asEnumerable(source).indexOf(value, start);
        } else {
            let index = 0;
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
        for (let element of source) {
            if (callback(element, index)) {
                return index;
            }
            index++;
        }
        return -1;
    }
    static lastIndexOf(source, value, start = Infinity, comparer = defaultEqualityComparer) {
        if (comparer === defaultEqualityComparer && core.isProto(source)) {
            return Enumerable.asEnumerable(source).lastIndexOf(value, start);
        } else {
            source = [...source];
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
        source = [...source];
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
const GroupingEnumerable = require('./enumerables/GroupingEnumerable');
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
