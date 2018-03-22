'use strict';

const core = require('./core/core');

const Enumerable = require('./Enumerable');
const methods = require('./methods/methods');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultJoinSelector = require('./methods/defaultJoinSelector');
const defaultSameComparer = require('./methods/defaultSameComparer');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultResultSelector = require('./methods/defaultResultSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');
const defaultParentSelector = require('./methods/defaultParentSelector');
const defaultChildrenSelector = require('./methods/defaultChildrenSelector');
const defaultAction = require('./methods/defaultAction');

let _extends = new Map();

const addExtends = (prototype, type, pascalOrPrefix, callback) => {
    for (let [, prototypes] of _extends) {
        if (prototypes.has(prototype)) {
            return false;
        }
    }
    if (!_extends.has(type)) {
        _extends.set(type, new Map());
    }
    let prototypes = _extends.get(type);
    if (prototypes.has(prototype) && prototypes.get(prototype) !== pascalOrPrefix) {
        if (callback && core.isFunction(callback)) {
            callback(prototypes.get(prototype));
        }
    }
    prototypes.set(prototype, pascalOrPrefix);
    return true;
};
const removeExtends = (prototype, type, pascalOrPrefix) => {
    if (_extends.has(type)) {
        if (_extends.get(type).has(prototype) && _extends.get(type).get(prototype) === pascalOrPrefix) {
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
const extendObject = {
    getEnumerator() {
        return Enumerable.getEnumerator(this);
    },
    getIterator() {
        return Enumerable.getIterator(this);
    },
    where(predicate = defaultPredicate) {
        return Enumerable.where(this, predicate);
    },
    select(selector = defaultSelector) {
        return Enumerable.select(this, selector);
    },
    elementAt(index) {
        return Enumerable.elementAt(this, index);
    },
    elementAtOrDefault(index, defaultValue) {
        return Enumerable.elementAtOrDefault(this, index, defaultValue);
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
    join(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (arguments.length === 1) {
            return Enumerable.join(this, inner);
        } else {
            return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    },
    innerJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.innerJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    },
    leftJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.leftJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    },
    rightJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.rightJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    },
    groupJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    },
    defaultIfEmpty(defaultValue) {
        return Enumerable.defaultIfEmpty(this, defaultValue);
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
    sum(selector = defaultSelector) {
        return Enumerable.sum(this, selector);
    },
    product(selector = defaultSelector) {
        return Enumerable.product(this, selector);
    },
    max(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.max(this, selector, comparer);
    },
    maxOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.maxOrDefault(this, defaultValue, selector, comparer);
    },
    min(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.min(this, selector, comparer);
    },
    minOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.minOrDefault(this, defaultValue, selector, comparer);
    },
    average(selector = defaultSelector) {
        return Enumerable.average(this, selector);
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
        if (core.isArray(this) && core.array$copyWithin && !core.lazy) {
            return core.array$copyWithin.call(this, target, start, end);
        } else {
            return Enumerable.copyWithin(this, target, start, end);
        }
    },
    every(callback, thisArg) {
        return Enumerable.every(this, callback, thisArg);
    },
    fill(value, start = 0, end = Infinity) {
        if (core.isArray(this) && core.array$fill && !core.lazy) {
            return core.array$fill.call(this, value, start, end);
        } else {
            return Enumerable.fill(this, value, start, end);
        }
    },
    filter(callback, thisArg) {
        if ((core.isArray(this) || core.isArguments(this)) && core.array$filter && !core.lazy) {
            return core.array$filter.call(this, callback, thisArg);
        } else {
            return Enumerable.filter(this, callback, thisArg);
        }
    },
    find(callback, thisArg) {
        return Enumerable.find(this, callback, thisArg);
    },
    includes(element, start = 0) {
        return Enumerable.includes(this, element, start);
    },
    map(callback, thisArg) {
        if ((core.isArray(this) || core.isArguments(this)) && core.array$map && !core.lazy) {
            return core.array$map.call(this, callback, thisArg);
        } else {
            return Enumerable.map(this, callback, thisArg);
        }
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
        if (core.isString(this) && core.string$slice && !core.lazy) {
            return core.string$slice.call(this, start, end);
        } else if ((core.isArray(this) || core.isArguments(this)) && core.array$slice && !core.lazy) {
            return core.array$slice.call(this, start, end);
        } else {
            return Enumerable.slice(this, start, end);
        }
    },
    splice(start, count, ...values) {
        return Enumerable.splice.apply(Enumerable, core.array$concat.call([this, start, count], values));
    },
    some(callback, thisArg) {
        return Enumerable.some(this, callback, thisArg);
    },
    sort(comparer = defaultComparer) {
        if (core.isArray(this) && core.array$sort && !core.lazy) {
            return core.array$sort.call(this, methods.asComparer(comparer));
        } else {
            return Enumerable.sort(this, comparer);
        }
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
    toPreOrder() {
        return Enumerable.toPreOrder(this);
    },
    toInOrder() {
        return Enumerable.toInOrder(this);
    },
    toPostOrder() {
        return Enumerable.toPostOrder(this);
    },
    forEach(action = defaultAction, thisArg = undefined) {
        return Enumerable.forEach(this, action, thisArg);
    },
    each(action = defaultAction) {
        return Enumerable.each(this, action);
    },
    chunk(chunk, offset = 0) {
        return Enumerable.chunk(this, chunk, offset);
    },
    leftPad(length, value) {
        return Enumerable.leftPad(this, length, value);
    },
    rightPad(length, value) {
        return Enumerable.rightPad(this, length, value);
    },
    rand(count = 0) {
        return Enumerable.rand(this, count);
    },
    wipe(predicate = defaultPredicate, count = 0) {
        return Enumerable.wipe(this, predicate, count);
    },
    nearBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.nearBy(this, keySelector, elementSelector, resultSelector, comparer);
    },
    combine(parentSelector = defaultParentSelector, keySelector = defaultKeySelector, valueSelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.combine(this, parentSelector, keySelector, valueSelector, comparer);
    },
    separate(childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
        return Enumerable.separate(this, childrenSelector, valueSelector);
    },
    isSub(other, comparer = defaultEqualityComparer) {
        return Enumerable.isSub(this, other, comparer);
    },
    isSuper(other, comparer = defaultEqualityComparer) {
        return Enumerable.isSuper(this, other, comparer);
    },
    symmetric(other, comparer = defaultEqualityComparer) {
        return Enumerable.symmetric(this, other, comparer);
    },
    concat(...others) {
        if (core.isString(this) && core.string$concat && !core.lazy) {
            return core.string$concat.apply(this, others);
        } else if ((core.isArray(this) || core.isArguments(this))&& core.array$concat && !core.lazy) {
            return core.array$concat.apply(this, others);
        } else {
            return Enumerable.concat.apply(Enumerable, core.array$concat.call([this], others));
        }
    }
};

core.defineProperty(Enumerable, 'extends', function() {
    let result = new Map();
    for (let [type, prototypes] of _extends) {
        let p = new Map();
        for (let [prototype, pascalOrPrefix] of prototypes) {
            p.set(prototype, pascalOrPrefix);
        }
        result.set(type, p);
    }
    return result;
}, true, true);

Enumerable.unextendAll = function() {
    for (let [ type, prototypes ] of this.extends) {
        for (let [prototype, pascalOrPrefix] of prototypes) {
            Enumerable.unextend(prototype, type, true, pascalOrPrefix);
        }
    }
};
Enumerable.extendAll = function(extendMap) {
    for (let [ type, prototypes ] of extendMap) {
        for (let [prototype, pascalOrPrefix] of prototypes) {
            Enumerable.extend(prototype, type, true, pascalOrPrefix);
        }
    }
};
Enumerable.unextend = function(prototype, type, isPrototype = false, pascalOrPrefix = false) {
    if (typeof prototype !== 'object' || core.getType(type) !== core.types.String) return prototype;
    if (!isPrototype || removeExtends(prototype, type, pascalOrPrefix)) {
		core.undefineProperties(prototype, [ ...Object.keys(extendObject), 'toDictionary', 'toLookup' ], pascalOrPrefix);
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
    if (!isPrototype || addExtends(prototype, type, pascalOrPrefix, pascalOrPrefix => this.unextend(prototype, type, isPrototype, pascalOrPrefix))) {
        core.defineProperties(prototype, extendObject, pascalOrPrefix);
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
        		    [ plugin.name ] : memberFunction(plugin.name)
                }, pascalOrPrefix);
        	}
        }
    }
    return prototype;
};