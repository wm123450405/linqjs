const core = require('./core/core');

const defaultPredicate = require('./methods/defaultPredicate');
const defaultSelector = require('./methods/defaultSelector');
const defaultEqualityComparer = require('./methods/defaultEqualityComparer');
const defaultComparer = require('./methods/defaultComparer');
const defaultGroupResultSelector = require('./methods/defaultGroupResultSelector');
const defaultKeySelector = require('./methods/defaultKeySelector');
const defaultValueSelector = require('./methods/defaultValueSelector');

const hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

class IEnumerable {
    constructor(source) {
        let type = source instanceof String || typeof(source) === 'string' ? 'string' : source instanceof Array || core.typeName(source).endsWith(' Iterator') ? 'array' : source instanceof IEnumerable ? 'enumerable' : 'object';
        core.defineProperty(this, Symbol.toStringTag, 'IEnumerable');
        core.defineProperties(this, {
            getProtoType() {
                return type === 'enumerable' ? source.getProtoType() : type;
            },
            toString() {
                return type === 'string' ? Enumerable.join(this, '') : type === 'array' ? '[' + Enumerable.join(this, ',') + ']' : type === 'enumerable' ? source.toString.call(this) : ('[' + Enumerable.join(this, ',') + ']');
            }
        });
        if (hasProxy) {
            return new Proxy(this, {
                get(target, prop) {
                    if (typeof(prop) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                        return target.elementAtOrDefault(prop);
                    } else {
                        return target[prop];
                    }
                },
                getOwnPropertyDescriptor(target, prop) {
                    if (typeof(prop) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                        return { writable: false, enumerable: true, configurable: true };
                    } else {
                        return Object.getOwnPropertyDescriptor(target, prop);
                    }
                },
                ownKeys(target) {
                    return Enumerable.range(0, target.count()).select(i => String(i)).concat(Reflect.ownKeys(target)).toArray();
                }
            });
        }
    };
    get length() {
        return this.count();
    };
    get size() {
        return this.count();
    };
    where(predicate = defaultPredicate) {
        return Enumerable.where(this, predicate);
    };
    select(selector = defaultSelector) {
        return Enumerable.select(this, selector);
    };
    elementAt(index) {
        return Enumerable.elementAt(this, index);
    };
    elementAtOrDefault(index, defaultValue) {
        return Enumerable.elementAtOrDefault(this, index, defaultValue);
    };
    asEnumerable() {
        return this;
    };
    concat(other = []) {
        return Enumerable.concat(this, other);
    };
    distinct(comparer = defaultEqualityComparer) {
        return Enumerable.distinct(this, comparer);
    };
    except(other, comparer = defaultEqualityComparer) {
        return Enumerable.except(this, other, comparer);
    };
    union(other, comparer = defaultEqualityComparer) {
        return Enumerable.union(this, other, comparer);
    };
    intersect(other, comparer = defaultEqualityComparer) {
        return Enumerable.intersect(this, other, comparer);
    };
    ofType(type) {
        return Enumerable.ofType(this, type);
    };
    skip(count) {
        return Enumerable.skip(this, count);
    };
    skipWhile(predicate = defaultPredicate()) {
        return Enumerable.skipWhile(this, predicate);
    };
    take(count) {
        return Enumerable.take(this, count);
    };
    takeWhile(predicate = defaultPredicate()) {
        return Enumerable.takeWhile(this, predicate);
    };
    orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.orderBy(this, keySelector, comparer);
    };
    orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.orderByDescending(this, keySelector, comparer);
    };
    groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
    };
    selectMany(collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        return Enumerable.selectMany(this, collectionSelector, resultSelector);
    };
    join(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.join(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
    };
    groupJoin(inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupJoin(this, inner, outerKeySelector, innerKeySelector, resultSelector, comparer);
    };
    defaultIfEmpty() {
        return Enumerable.defaultIfEmpty(this);
    };
    all(predicate = defaultPredicate) {
        return Enumerable.all(this, predicate);
    };
    any(predicate = defaultPredicate) {
        return Enumerable.any(this, predicate);
    };
    isEmpty() {
        return Enumerable.isEmpty(this);
    };
    sequenceEqual(other, comparer = defaultEqualityComparer) {
        return Enumerable.sequenceEqual(this, other, comparer);
    };
    first(predicate = defaultPredicate) {
        return Enumerable.first(this, predicate);
    };
    firstOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.firstOrDefault(this, defaultValue, predicate);
    };
    last(predicate = defaultPredicate) {
        return Enumerable.last(this, predicate);
    };
    lastOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.lastOrDefault(this, defaultValue, predicate);
    };
    single(predicate = defaultPredicate) {
        return Enumerable.single(this, predicate);
    };
    singleOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.singleOrDefault(this, defaultValue, predicate);
    };
    count(predicate = defaultPredicate) {
        return Enumerable.count(this, predicate);
    };
    sum(predicate = defaultPredicate) {
        return Enumerable.sum(this, predicate);
    };
    max(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.max(this, selector, comparer);
    }
    min(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.min(this, selector, comparer);
    };
    average(predicate = defaultPredicate) {
        return Enumerable.average(this, predicate);
    };
    aggregate(seed, func, selector = defaultSelector) {
        return Enumerable.aggregate(this, seed, func, selector);
    };
    contains(value, comparer = defaultEqualityComparer) {
        return Enumerable.contains(this, value, comparer);
    };
    indexOf(value, start = 0, comparer = defaultEqualityComparer) {
        return Enumerable.indexOf(this, value, start, comparer);
    };
    findIndex(predicate, start = 0) {
        return Enumerable.findIndex(this, predicate, start);
    };
    lastIndexOf(value, start = 0, comparer = defaultEqualityComparer) {
        return Enumerable.lastIndexOf(this, value, start, comparer);
    };
    findLastIndex(predicate, start = 0) {
        return Enumerable.findLastIndex(this, predicate, start);
    };
    reverse() {
        return Enumerable.reverse(this);
    };
    zip(other, resultSelector) {
        return Enumerable.zip(this, other, resultSelector);
    };
    toArray() {
        return Enumerable.toArray(this);
    };
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    };
    toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toDictionary(this, keySelector, elementSelector, comparer)
    };
    toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toLookup(this, keySelector, elementSelector, comparer)
    };
    forEach(action = defaultAction) {
        return Enumerable.forEach(this, action);
    };
};

module.exports = IEnumerable;

const Enumerable = require('./Enumerable');