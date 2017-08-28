'use strict';

const core = require('./core/core');

const Enumerable = require('./Enumerable');

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

let _extends = new Map();

const addExtends = (prototype, type) => {
    for (let [, prototypes] of _extends) {
        if (prototypes.has(prototype)) {
            return false;
        }
    }
    if (!_extends.has(type)) {
        _extends.set(type, new Set());
    }
    _extends.get(type).add(prototype);
    return true;
};
const removeExtends = (prototype, type) => {
    if (_extends.has(type)) {
        if (_extends.get(type).has(prototype)) {
            _extends.get(type).delete(prototype);
            if (Enumerable.isEmpty(_extends.get(type))) {
                _extends.delete(type);
            }
            return true;
        }
    }
    return false;
};
const memberFunction = name => function() {
    return Enumerable[name].apply(Enumerable, [this].concat(arguments));
};

core.defineProperty(Enumerable, 'extends', function() {
    return this.select(_extends).toArray();
}, true, true);

Enumerable.unextend = function(prototype, type, isPrototype = false, pascalOrPrefix = false) {
    if (typeof prototype !== 'object' || core.getType(type) !== core.types.String) return prototype;
    if (!isPrototype || removeExtends(prototype, type)) {
		core.undefineProperties(prototype, [ 'where', 'select', 'elementAt', 'distinct', 'except', 'union', 'intersect', 'ofType', 'skip', 'skipWhile', 'take', 'takeWhile', 'orderBy', 'orderByDescending', 'groupBy', 'selectMany', 'join', 'groupJoin', 'defaultIfEmpty', 'all', 'any', 'isEmpty', 'sequenceEqual', 'first', 'firstOrDefault', 'last', 'lastOrDefault', 'single', 'singleOrDefault', 'count', 'sum', 'max', 'min', 'average', 'aggregate', 'contains', 'indexOf', 'findIndex', 'lastIndexOf', 'findLast', 'findLastIndex', 'reverse', 'copyWithin', 'every', 'fill', 'filter', 'find', 'includes', 'map', 'pop', 'push', 'shift', 'unshift', 'reduce', 'reduceRight', 'slice', 'splice', 'some', 'sort', 'zip', 'toArray', 'toObject', 'forEach', 'concat', 'toDictionary', 'toLookup' ], pascalOrPrefix);
        for (let plugin of this.plugins) {
        	if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
        		core.undefineProperties(prototype, [ plugin.name ], pascalOrPrefix);
        	}
        }
    }
    return prototype;
};
Enumerable.extend = function(prototype, type, isPrototype = false, pascalOrPrefix = false) {
    if (typeof prototype !== 'object' || core.getType(type) !== core.types.String) return prototype;
    if (!isPrototype || addExtends(prototype, type)) {
        core.defineProperties(prototype, {
            where(predicate = defaultPredicate) {
                return Enumerable.where(this, predicate);
            },
            select(selector = defaultSelector) {
                return Enumerable.select(this, selector);
            },
            elementAt(index) {
                return Enumerable.elementAt(this, index);
            },
            distinct(comparer = defaultEqualityComparer) {
                return Enumerable.distinct(this, comparer);
            },
            except(other, comparer = defaultEqualityComparer) {
                return Enumerable.except(this, other, comparer);
            },
            union(other, comparer = defaultEqualityComparer) {
                return Enumerable.union(this, other, comparer);
            },
            intersect(other, comparer = defaultEqualityComparer) {
                return Enumerable.intersect(this, other, comparer);
            },
            ofType(type) {
                return Enumerable.ofType(this, type);
            },
            skip(count) {
                return Enumerable.skip(this, count);
            },
            skipWhile(predicate = defaultPredicate()) {
                return Enumerable.skipWhile(this, predicate);
            },
            take(count) {
                return Enumerable.take(this, count);
            },
            takeWhile(predicate = defaultPredicate()) {
                return Enumerable.takeWhile(this, predicate);
            },
            orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderBy(this, keySelector, comparer);
            },
            orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.orderByDescending(this, keySelector, comparer);
            },
            groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
            },
            selectMany(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
                return Enumerable.selectMany(this, collectionSelector, resultSelector);
            },
            join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            groupJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            },
            defaultIfEmpty() {
                return Enumerable.defaultIfEmpty(this);
            },
            all(predicate = defaultPredicate) {
                return Enumerable.all(this, predicate);
            },
            any(predicate = defaultPredicate) {
                return Enumerable.any(this, predicate);
            },
            isEmpty() {
                return Enumerable.isEmpty(this);
            },
            sequenceEqual(other, comparer = defaultEqualityComparer) {
                return Enumerable.sequenceEqual(this, other, comparer);
            },
            first(predicate = defaultPredicate) {
                return Enumerable.first(this, predicate);
            },
            firstOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.firstOrDefault(this, defaultValue, predicate);
            },
            last(predicate = defaultPredicate) {
                return Enumerable.last(this, predicate);
            },
            lastOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.lastOrDefault(this, defaultValue, predicate);
            },
            single(predicate = defaultPredicate) {
                return Enumerable.single(this, predicate);
            },
            singleOrDefault(defaultValue, predicate = defaultPredicate) {
                return Enumerable.singleOrDefault(this, defaultValue, predicate);
            },
            count(predicate = defaultPredicate) {
                return Enumerable.count(this, predicate);
            },
            sum(predicate = defaultPredicate) {
                return Enumerable.sum(this, predicate);
            },
            max(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.max(this, selector, comparer);
            },
            min(selector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.min(this, selector, comparer);
            },
            average(predicate = defaultPredicate) {
                return Enumerable.average(this, predicate);
            },
            aggregate(seed, func, selector = defaultSelector) {
                return Enumerable.aggregate(this, seed, func, selector);
            },
            contains(value, comparer = defaultEqualityComparer) {
                return Enumerable.contains(this, value, comparer);
            },
            indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
                return Enumerable.indexOf(this, value, start, comparer);
            },
            findIndex(predicate, thisArg) {
                return Enumerable.findIndex(this, predicate, thisArg);
            },
            lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
                return Enumerable.lastIndexOf(this, value, start, comparer);
            },
            findLast(predicate, thisArg) {
                return Enumerable.findLast(this, predicate, thisArg);
            },
            findLastIndex(predicate, thisArg) {
                return Enumerable.findLastIndex(this, predicate, thisArg);
            },
            reverse() {
                return Enumerable.reverse(this);
            },
            copyWithin(target = 0, start = 0, end = Infinity) {
                return Enumerable.copyWithin(this, target, start, end);
            },
            every(callback, thisArg) {
                return Enumerable.every(this, callback, thisArg);
            },
            fill(value, start = 0, end = Infinity) {
                return Enumerable.fill(this, value, start, end);
            },
            filter(callback, thisArg) {
                return Enumerable.filter(this, callback, thisArg);
            },
            find(callback, thisArg) {
                return Enumerable.find(this, callback, thisArg);
            },
            includes(element, start = 0) {
                return Enumerable.includes(this, element, start);
            },
            map(callback, thisArg) {
                return Enumerable.map(this, callback, thisArg);
            },
            pop() {
                return Enumerable.pop(this);
            },
            push(...values) {
                return Enumerable.push.apply(Enumerable, core.array$concat.call([this], values));
            },
            shift() {
                return Enumerable.shift(this);
            },
            unshift(...values) {
                return Enumerable.unshift.apply(Enumerable, core.array$concat.call([this], values));
            },
            reduce(callback, initialValue) {
                return Enumerable.reduce(this, callback, initialValue);
            },
            reduceRight(callback, initialValue) {
                return Enumerable.reduceRight(this, callback, initialValue);
            },
            slice(start = 0, end = Infinity) {
                return Enumerable.slice(this, start, end);
            },
            splice(start, count, ...values) {
                return Enumerable.splice.apply(Enumerable, core.array$concat.call([this, start, count], values));
            },
            some(callback, thisArg) {
                return Enumerable.some(this, callback, thisArg);
            },
            sort(comparer = defaultComparer) {
                return Enumerable.sort(this, comparer);
            },
            zip(other, resultSelector = defaultResultSelector) {
                return Enumerable.zip(this, other, resultSelector);
            },
            toArray() {
                return Enumerable.toArray(this);
            },
            toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                return Enumerable.toDictionary(this, keySelector, elementSelector, comparer).toObject();
            },
            forEach(action = defaultAction, thisArg = undefined) {
                return Enumerable.forEach(this, action, thisArg);
            },
            concat(...others) {
                return Enumerable.concat.apply(Enumerable, core.array$concat.call([this], others));
            }
        }, pascalOrPrefix);
        if (type !== core.types.Object) {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            }, pascalOrPrefix);
        } else {
            core.defineProperties(prototype, {
                toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
                },
                toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
                    return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
                }
            }, pascalOrPrefix);
        }
        for (let plugin of this.plugins) {
        	if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
        		core.defineProperties(prototype, {
        		    [plugin.name] : memberFunction(plugin.name)
                }, pascalOrPrefix);
        	}
        }
    }
    return prototype;
};