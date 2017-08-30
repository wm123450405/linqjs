'use strict';

const core = require('./core/core');

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

const hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

const string = 'string';
const array = 'array';
const enumerable = 'enumerable';
const object = 'object';

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
                    return Enumerable.toArray(Enumerable.range(0, target.count()).select(i => String(i)).concat(Reflect.ownKeys(target)));
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
        return Enumerable.getEnumerator(this);
    }
    getIterator() {
        return Enumerable.getIterator(this);
    }
    where(predicate = defaultPredicate) {
        return Enumerable.where(this, predicate);
    }
    select(selector = defaultSelector) {
        return Enumerable.select(this, selector);
    }
    elementAt(index) {
        return Enumerable.elementAt(this, index);
    }
    elementAtOrDefault(index, defaultValue) {
        return Enumerable.elementAtOrDefault(this, index, defaultValue);
    }
    asEnumerable() {
        return this;
    }
    concat(...others) {
        return Enumerable.concat(this, ...others);
    }
    distinct(comparer = defaultEqualityComparer) {
        return Enumerable.distinct(this, comparer);
    }
    except(other, comparer = defaultEqualityComparer) {
        return Enumerable.except(this, other, comparer);
    }
    union(other, comparer = defaultEqualityComparer) {
        return Enumerable.union(this, other, comparer);
    }
    intersect(other, comparer = defaultEqualityComparer) {
        return Enumerable.intersect(this, other, comparer);
    }
    ofType(type) {
        return Enumerable.ofType(this, type);
    }
    skip(count) {
        return Enumerable.skip(this, count);
    }
    skipWhile(predicate = defaultPredicate()) {
        return Enumerable.skipWhile(this, predicate);
    }
    take(count) {
        return Enumerable.take(this, count);
    }
    takeWhile(predicate = defaultPredicate()) {
        return Enumerable.takeWhile(this, predicate);
    }
    orderBy(keySelector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.orderBy(this, keySelector, comparer);
    }
    orderByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.orderByDescending(this, keySelector, comparer);
    }
    groupBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
    }
    selectMany(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return Enumerable.selectMany(this, collectionSelector, resultSelector);
    }
    join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    leftJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.leftJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    rightJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.rightJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    groupJoin(inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    defaultIfEmpty(defaultValue) {
        return Enumerable.defaultIfEmpty(this, defaultValue);
    }
    all(predicate = defaultPredicate) {
        return Enumerable.all(this, predicate);
    }
    any(predicate = defaultPredicate) {
        return Enumerable.any(this, predicate);
    }
    isEmpty() {
        return Enumerable.isEmpty(this);
    }
    sequenceEqual(other, comparer = defaultEqualityComparer) {
        return Enumerable.sequenceEqual(this, other, comparer);
    }
    first(predicate = defaultPredicate) {
        return Enumerable.first(this, predicate);
    }
    firstOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.firstOrDefault(this, defaultValue, predicate);
    }
    last(predicate = defaultPredicate) {
        return Enumerable.last(this, predicate);
    }
    lastOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.lastOrDefault(this, defaultValue, predicate);
    }
    single(predicate = defaultPredicate) {
        return Enumerable.single(this, predicate);
    }
    singleOrDefault(defaultValue, predicate = defaultPredicate) {
        return Enumerable.singleOrDefault(this, defaultValue, predicate);
    }
    count(predicate = defaultPredicate) {
        return Enumerable.count(this, predicate);
    }
    sum(selector = defaultSelector) {
        return Enumerable.sum(this, selector);
    }
    product(selector = defaultSelector) {
        return Enumerable.product(this, selector);
    }
    max(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.max(this, selector, comparer);
    }
    min(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.min(this, selector, comparer);
    }
    average(selector = defaultSelector) {
        return Enumerable.average(this, selector);
    }
    aggregate(seed, func, selector = defaultSelector) {
        return Enumerable.aggregate(this, seed, func, selector);
    }
    contains(value, comparer = defaultEqualityComparer) {
        return Enumerable.contains(this, value, comparer);
    }
    indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
        return Enumerable.indexOf(this, value, start, comparer);
    }
    findIndex(predicate, thisArg) {
        return Enumerable.findIndex(this, predicate, thisArg);
    }
    lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        return Enumerable.lastIndexOf(this, value, start, comparer);
    }
    findLast(predicate, thisArg) {
        return Enumerable.findLast(this, predicate, thisArg);
    }
    findLastIndex(predicate, thisArg) {
        return Enumerable.findLastIndex(this, predicate, thisArg);
    }
    reverse() {
        return Enumerable.reverse(this);
    }
    zip(other, resultSelector = defaultResultSelector) {
        return Enumerable.zip(this, other, resultSelector);
    }
    slice(start = 0, end = Infinity) {
        return Enumerable.slice(this, start, end);
    }
    every(callback, thisArg) {
        return Enumerable.every(this, callback, thisArg);
    }
    find(callback, thisArg) {
        return Enumerable.find(this, callback, thisArg);
    }
    includes(element, start = 0) {
        return Enumerable.includes(this, element, start);
    }
    map(callback, thisArg) {
        return Enumerable.map(this, callback, thisArg);
    }
    filter(callback, thisArg) {
        return Enumerable.filter(this, callback, thisArg);
    }
    pop() {
        return Enumerable.pop(this);
    }
    push(...values) {
        return Enumerable.push(this, ...values);
    }
    shift() {
        return Enumerable.shift(this);
    }
    unshift(...values) {
        return Enumerable.unshift(this, ...values);
    }
    reduce(callback, initialValue) {
        return Enumerable.reduce(this, callback, initialValue);
    }
    reduceRight(callback, initialValue) {
        return Enumerable.reduceRight(this, callback, initialValue);
    }
    some(callback, thisArg) {
        return Enumerable.some(this, callback, thisArg);
    }
    splice(start, count, ...values) {
        return Enumerable.splice(this, start, count, ...values);
    }
    fill(value, start = 0, end = Infinity) {
        return Enumerable.fill(this, value, start, end);
    }
    sort(comparer = defaultComparer) {
        return Enumerable.sort(this, comparer);
    }
    copyWithin(target = 0, start = 0, end = Infinity) {
        return Enumerable.copyWithin(this, target, start, end);
    }
    toArray() {
        return Enumerable.toArray(this);
    }
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
    toDictionary(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
    }
    toLookup(keySelector = defaultSelector, elementSelector = defaultSelector, comparer = defaultSameComparer) {
        return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
    }
    forEach(action = defaultAction, thisArg = undefined) {
        return Enumerable.forEach(this, action, thisArg);
    }
    chunk(chunk, offset = 0) {
        return Enumerable.chunk(this, chunk, offset);
    }
    leftPad(length, value) {
        return Enumerable.leftPad(this, length, value);
    }
    rightPad(length, value) {
        return Enumerable.rightPad(this, length, value);
    }
    rand(count = 0) {
        return Enumerable.rand(this, count);
    }
}

module.exports = IEnumerable;

const Enumerable = require('./Enumerable');