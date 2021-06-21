'use strict';

const core = require('./core/core');

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
    asEnumerable(childrenSelector, valueSelector = defaultValueSelector) {
        if (core.isUndefined(childrenSelector)) {
            return this;
        } else {
            return Enumerable.asEnumerable(childrenSelector, valueSelector);
        }
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
    skipWhile(predicate = defaultPredicate) {
        return Enumerable.skipWhile(this, predicate);
    }
    skipSame(comparer = defaultSameComparer) {
        return Enumerable.skipSame(this, comparer);
    }
    skipProportion(proportion = 0) {
        return Enumerable.skipProportion(this, proportion);
    }
    take(count) {
        return Enumerable.take(this, count);
    }
    takeWhile(predicate = defaultPredicate) {
        return Enumerable.takeWhile(this, predicate);
    }
    takeSame(comparer = defaultSameComparer) {
        return Enumerable.takeSame(this, comparer);
    }
    takeProportion(proportion = 0) {
        return Enumerable.takeProportion(this, proportion);
    }
    sorted(keySelector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.sorted(this, keySelector, comparer);
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
    flatMap(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return Enumerable.flatMap(this, collectionSelector, resultSelector);
    }
    flatten(collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        return Enumerable.flatten(this, collectionSelector, resultSelector);
    }
    join(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (arguments.length === 1) {
            return Enumerable.join(this, inner);
        } else {
            return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    joining(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.joining(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    innerJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    leftJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.leftJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    rightJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.rightJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    groupJoin(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
    defaultIfEmpty(defaultValue) {
        return Enumerable.defaultIfEmpty(this, defaultValue);
    }
    all(predicate = defaultPredicate) {
        return Enumerable.all(this, predicate);
    }
    allMatch(predicate = defaultPredicate) {
        return Enumerable.allMatch(this, predicate);
    }
    any(predicate = defaultPredicate) {
        return Enumerable.any(this, predicate);
    }
    anyMatch(predicate = defaultPredicate) {
        return Enumerable.anyMatch(this, predicate);
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
    maxOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.maxOrDefault(this, defaultValue, selector, comparer);
    }
    min(selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.min(this, selector, comparer);
    }
    minOrDefault(defaultValue, selector = defaultSelector, comparer = defaultComparer) {
        return Enumerable.minOrDefault(this, defaultValue, selector, comparer);
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
    toPreOrder() {
        return Enumerable.toPreOrder(this);
    }
    toInOrder() {
        return Enumerable.toInOrder(this);
    }
    toPostOrder() {
        return Enumerable.toPostOrder(this);
    }
    forEach(action = defaultAction, thisArg = undefined) {
        return Enumerable.forEach(this, action, thisArg);
    }
    each(action = defaultAction) {
        return Enumerable.each(this, action);
    }
    indices(indices) {
        return Enumerable.indices(this, indices);
    }
    permutation(count, repeatable = false) {
        return Enumerable.permutation(this, count, repeatable);
    }
    combination(count, repeatable = false) {
        return Enumerable.combination(this, count, repeatable);
    }
    chunk(chunk, offset = 0) {
        return Enumerable.chunk(this, chunk, offset);
    }
    split(splitPredicate = defaultFalsePredicate) {
        return Enumerable.split(this, splitPredicate);
    }
    nearSplit(splitPredicate = defaultFalsePredicate) {
        return Enumerable.nearSplit(this, splitPredicate);
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
    random() {
        return Enumerable.random(this);
    }
    randomOrDefault(defaultValue) {
        return Enumerable.randomOrDefault(this, defaultValue);
    }
    wipe(predicate = defaultPredicate, count = 0) {
        return Enumerable.wipe(this, predicate, count);
    }
    nearBy(keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.nearBy(this, keySelector, elementSelector, resultSelector, comparer);
    }
    combine(parentSelector = defaultParentSelector, keySelector = defaultKeySelector, valueSelector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.combine(this, parentSelector, keySelector, valueSelector, comparer);
    }
    separate(childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
        return Enumerable.separate(this, childrenSelector, valueSelector);
    }
    isSub(other, comparer = defaultEqualityComparer) {
        return Enumerable.isSub(this, other, comparer);
    }
    isSuper(other, comparer = defaultEqualityComparer) {
        return Enumerable.isSuper(this, other, comparer);
    }
    symmetric(other, comparer = defaultEqualityComparer) {
        return Enumerable.symmetric(this, other, comparer);
    }
    conflict(selector = defaultSelector, comparer = defaultEqualityComparer) {
        return Enumerable.conflict(this, selector, comparer);
    }
    proportion(predicate = defaultPredicate) {
        return Enumerable.proportion(this, predicate);
    }
}

module.exports = IEnumerable;

const Enumerable = require('./Enumerable');