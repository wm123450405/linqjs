import core from './core/core';

import defaultPredicate from './methods/defaultPredicate';
import defaultSelector from './methods/defaultSelector';
import defaultEqualityComparer from './methods/defaultEqualityComparer';
import defaultComparer from './methods/defaultComparer';
import defaultGroupResultSelector from './methods/defaultGroupResultSelector';
import defaultKeySelector from './methods/defaultKeySelector';
import defaultValueSelector from './methods/defaultValueSelector';

import NoSuchElementsException from './core/exceptions/NoSuchElementsException';
import OutOfRangeException from './core/exceptions/OutOfRangeException';
import TooManyElementsException from './core/exceptions/TooManyElementsException';
import KeysForMultiElementsException from './core/exceptions/KeysForMultiElementsException';

import RepeatEnumerable from './enumerables/RepeatEnumerable';
import RangeEnumerable from './enumerables/RangeEnumerable';
import EmptyEnumerable from './enumerables/EmptyEnumerable';
import IteratorEnumerable from './enumerables/IteratorEnumerable';
import WhereEnumerable from './enumerables/WhereEnumerable';
import SelectEnumerable from './enumerables/SelectEnumerable';
import ConcatEnumerable from './enumerables/ConcatEnumerable';
import DistinctEnumerable from './enumerables/DistinctEnumerable';
import ExceptEnumerable from './enumerables/ExceptEnumerable';
import UnionEnumerable from './enumerables/UnionEnumerable';
import IntersectEnumerable from './enumerables/IntersectEnumerable';
import OfTypeEnumerable from './enumerables/OfTypeEnumerable';
import SkipEnumerable from './enumerables/SkipEnumerable';
import SkipWhileEnumerable from './enumerables/SkipWhileEnumerable';
import TakeEnumerable from './enumerables/TakeEnumerable';
import TakeWhileEnumerable from './enumerables/TakeWhileEnumerable';
import IOrderedEnumerable from './enumerables/IOrderedEnumerable';
import OrderByEnumerable from './enumerables/OrderByEnumerable';
import OrderByDescendingEnumerable from './enumerables/OrderByDescendingEnumerable';
import ThenByEnumerable from './enumerables/ThenByEnumerable';
import ThenByDescendingEnumerable from './enumerables/ThenByDescendingEnumerable';
import GroupingEnumerable from './enumerables/GroupingEnumerable';
import SelectManyEnumerable from './enumerables/SelectManyEnumerable';
import JoinEnumerable from './enumerables/JoinEnumerable';
import GroupJoinEnumerable from './enumerables/GroupJoinEnumerable';
import ReverseEnumerable from './enumerables/ReverseEnumerable';
import ZipEnumerable from './enumerables/ZipEnumerable';
import SingleEnumerable from './enumerables/SingleEnumerable';
import Dictionary from './enumerables/Dictionary';
import Lookup from './enumerables/Lookup';

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
            join(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().join(inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
            },
            groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
                return this.asEnumerable().groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
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
            findIndex(predicate, start = 0) {
                return this.asEnumerable().findIndex(predicate, start);
            },
            lastIndexOf(value, start = 0, comparer = defaultEqualityComparer) {
                return this.asEnumerable().lastIndexOf(value, start, comparer);
            },
            findLastIndex(predicate, start = 0) {
                return this.asEnumerable().findLastIndex(predicate, start);
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
            forEach(action = defaultAction) {
                return this.asEnumerable().forEach(action);
            }
        });
        if (type !== 'string') {
            defineProperties(prototype, {
                concat(other = []) {
                    return this.asEnumerable().concat(other);
                }
            });
        }
        if (type !== 'object') {
            defineProperties(prototype, {
                toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                }
            });
        } else {
            defineProperties(prototype, {
                toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
                    return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                }
            });
        }
    };
    static repeat(element, count = 0) {
        return new RepeatEnumerable(element, count);
    };
    static range(start, count) {
        return new RangeEnumerable(start, count)
    };
    static empty() {
        return new EmptyEnumerable();
    };
    static asEnumerable(object) {
        return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
    };
    static toArray(source) {
        let array = [];
        for (let element of source) {
            array.push(element);
        }
        return array;
    };
    static toDictionary(source, keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
        let dictionary = new Dictionary(), index = 0;
        for (let element of source) {
            let key = keySelector(element, index);
            if (dictionary.has(key, comparer)) {
                throw KeysForMultiElementsException;
            } else {
                dictionary.set(key, elementSelector(element, index), comparer);
            }
            index++;
        }
        return dictionary;
    };
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
    };
    static where(source, predicate = defaultPredicate) {
        return new WhereEnumerable(source, predicate);
    };
    static select(source, selector = defaultSelector) {
        return new SelectEnumerable(source, selector);
    };
    static concat(source, other = []) {
        return new ConcatEnumerable(source, other);
    };
    static distinct(source, comparer = defaultEqualityComparer) {
        return new DistinctEnumerable(source, comparer);
    };
    static except(source, other, comparer = defaultEqualityComparer) {
        return new ExceptEnumerable(source, other, comparer);
    };
    static union(source, other, comparer = defaultEqualityComparer) {
        return new UnionEnumerable(source, other, comparer);
    };
    static intersect(source, other, comparer = defaultEqualityComparer) {
        return new IntersectEnumerable(source, other, comparer);
    };
    static ofType(source, type) {
        return new OfTypeEnumerable(source, type);
    };
    static skip(source, count) {
        return new SkipEnumerable(source, count);
    };
    static skipWhile(source, predicate = defaultPredicate) {
        return new SkipWhileEnumerable(source, predicate);
    };
    static take(source, count) {
        return new TakeEnumerable(source, count);
    };
    static takeWhile(source, predicate = defaultPredicate) {
        return new TakeWhileEnumerable(source, predicate);
    };
    static orderBy(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByEnumerable(source, keySelector, comparer);
    };
    static orderByDescending(source, keySelector = defaultSelector, comparer = defaultComparer) {
        return new OrderByDescendingEnumerable(source, keySelector, comparer);
    };
    static thenBy(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByEnumerable(orderedSource, keySelector, comparer);
        }
    };
    static thenByDescending(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        if (orderedSource instanceof IOrderedEnumerable) {
            return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
        } else {
            return new OrderByDescendingEnumerable(orderedSource, keySelector, comparer);
        }
    };
    static groupBy(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
        return new GroupingEnumerable(source, keySelector, elementSelector, resultSelector, comparer)
    };
    static selectMany(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        return new SelectManyEnumerable(source, collectionSelector, resultSelector);
    };
    static join(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        if (typeof resultSelector === 'undefined') {
            return core.array$join.call(outer, inner);
        } else {
            return new JoinEnumerable(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
        }
    };
    static groupJoin(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        return new GroupJoinEnumerable(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
    };
    static reverse(source) {
        return new ReverseEnumerable(source);
    };
    static zip(source, other, resultSelector) {
        return new ZipEnumerable(source, other, resultSelector);
    };
    static defaultIfEmpty(source, defaultValue) {
        return Enumerable.isEmpty(source) ? new SingleEnumerable(defaultValue) : source;
    };
    static all(source, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (!predicate(element, index++)) {
                return false;
            }
        }
        return true;
    };
    static any(source, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (predicate(element, index++)) {
                return true;
            }
        }
        return false;
    };
    static isEmpty(source) {
        return !Enumerable.any(source);
    };
    static sequenceEqual(source, other, comparer = defaultEqualityComparer) {
        let sourceIterator = source[Symbol.iterator]();
        let otherIterator = other[Symbol.iterator]();
        let sourceElement, otherElement;
        do {
            sourceElement = sourceIterator.next();
            otherElement = otherIterator.next();
            if (sourceElement.done != otherElement.done) {
                return false;
            } else if (!comparer(sourceElement.value, otherElement.value)) {
                return false;
            }
        } while (!(sourceElement.done && otherElement.done));
        return true;
    };
    static first(source, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        throw NoSuchElementsException;
    };
    static firstOrDefault(source, defaultValue, predicate = defaultPredicate) {
        let index = 0;
        for (let element of source) {
            if (predicate(element, index++)) {
                return element;
            }
        }
        return defaultValue;
    };
    static last(source, predicate = defaultPredicate) {
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
            throw NoSuchElementsException;
        }
    };
    static lastOrDefault(source, defaultValue, predicate = defaultPredicate) {
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
    };
    static single(source, predicate = defaultPredicate) {
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
        if (count == 1) {
            return single;
        } else if (count == 0) {
            throw NoSuchElementsException;
        } else {
            throw TooManyElementsException;
        }
    };
    static singleOrDefault(source, defaultValue, predicate = defaultPredicate) {
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
        if (count == 1) {
            return single;
        } else if (count == 0) {
            return defaultValue;
        } else {
            throw TooManyElementsException;
        }
    };
    static count(source, predicate = defaultPredicate) {
        let count = 0, index = 0;
        for (let element of source) {
            if (predicate(element, index++)) {
                count++;
            }
        }
        return count;
    };
    static aggregate(source, seed, func, resultSelector = defaultSelector) {
        for (let element of source) {
            seed = func(seed, element);
        }
        return resultSelector(seed);
    };
    static sum(source, selector = defaultSelector) {
        let sum = 0, index = 0;
        for (let element of source) {
            sum += parseFloat(selector(element, index++));
        }
        return sum;
    };
    static max(source, selector = defaultSelector, comparer = defaultComparer) {
        let max = false, first = true, index = 0;
        for (let element of source) {
            element = selector(element, index++);
            if (first) {
                max = element;
            } else {
                max = comparer(max, element) > 0 ? max : element;
            }
        }
        if (first) {
            throw NoSuchElementsException;
        } else {
            return max;
        }
    };
    static min(source, selector = defaultSelector, comparer = defaultComparer) {
        let min = false, first = true, index = 0;
        for (let element of source) {
            element = selector(element, index++);
            if (first) {
                min = element;
            } else {
                min = comparer(min, element) < 0 ? min : element;
            }
        }
        if (first) {
            throw NoSuchElementsException;
        } else {
            return min;
        }
    };
    static average(source, selector = defaultSelector) {
        let sum = 0, count = 0, index = 0;
        for (let element of source) {
            sum += parseFloat(selector(element, index++));
            count++;
        }
        if (count != 0) {
            return sum / count;
        } else {
            throw NoSuchElementsException;
        }
    };
    static contains(source, value, comparer = defaultEqualityComparer) {
        for (let element of source) {
            if (comparer(element, value)) {
                return true;
            }
        }
        return false;
    };
    static elementAt(source, index) {
        if (index >= 0) {
            for (let element of source) {
                if (index-- == 0) {
                    return element;
                }
            }
        }
        throw OutOfRangeException;
    };
    static elementAtOrDefault(source, index, defaultValue) {
        if (index >= 0) {
            for (let element of source) {
                if (index-- == 0) {
                    return element;
                }
            }
        }
        return defaultValue;
    };
    static indexOf(source, value, start = 0, comparer = defaultEqualityComparer) {
        let index = 0;
        for (let element of source) {
            if (index >= start && comparer(element, value)) {
                return index;
            }
            index++;
        }
        return -1;
    };
    static findIndex(source, predicate, start = 0) {
        let index = 0;
        for (let element of source) {
            if (index >= start && predicate(element, index)) {
                return index;
            }
            index++;
        }
        return -1;
    };
    static lastIndexOf(source, value, start = 0, comparer = defaultEqualityComparer) {
        let index = 0, lastIndex = -1;
        for (let element of source) {
            if (index >= start && comparer(element, value)) {
                lastIndex = index;
            }
            index++;
        }
        return lastIndex;
    };
    static findLastIndex(source, predicate, start = 0) {
        let index = 0, lastIndex = -1;
        for (let element of source) {
            if (index >= start && predicate(element, index)) {
                lastIndex = index;
            }
            index++;
        }
        return lastIndex;
    };
    static forEach(source, action = defaultAction) {
        let index = 0;
        for (let element of source) {
            action(element, index++);
        }
    }
};
export default Enumerable;