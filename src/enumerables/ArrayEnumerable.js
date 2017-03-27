'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./../methods/defaultStrictEqualityComparer');
const defaultAction = require('./../methods/defaultAction');

const Enumerable = require('./../Enumerable');

class ArrayEnumerable extends IterableEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
                comparer = methods.asStrictEqualityComparer(comparer);
                if (comparer === defaultStrictEqualityComparer && core.array$indexOf) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
                comparer = methods.asStrictEqualityComparer(comparer);
                if (comparer === defaultStrictEqualityComparer && core.array$lastIndexOf) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex(predicate, thisArg) {
                if (core.array$findIndex) {
                    return core.array$findIndex.call(array, predicate, thisArg);
                } else {
                    return Enumerable.findIndex(this, predicate, thisArg);
                }
            },
            join(inner, resultSelector = undefined, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
                outerKeySelector = methods.asSelector(outerKeySelector);
                innerKeySelector = methods.asSelector(innerKeySelector);
                comparer = methods.asEqualityComparer(comparer);
                if (typeof resultSelector === 'undefined' && core.array$join) {
                    return core.array$join.call(array, inner);
                } else {
                    return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
                }
            },
            every(callback, thisArg) {
                if (core.array$every) {
                    return core.array$every.call(array, callback, thisArg);
                } else {
                    return Enumerable.every(this, callback, thisArg);
                }
            },
            find(callback, thisArg) {
                if (core.array$find) {
                    return core.array$find.call(array, callback, thisArg);
                } else {
                    return Enumerable.find(this, callback, thisArg);
                }
            },
            includes(element, start = 0) {
                if (core.array$includes) {
                    return core.array$includes.call(array, element, start);
                } else {
                    return Enumerable.includes(this, element, start);
                }
            },
            pop() {
                if (core.array$pop) {
                    return core.array$pop.call(array);
                } else {
                    return Enumerable.pop(this);
                }
            },
            push(...values) {
                if (core.array$push) {
                    return core.array$push.apply(array, values);
                } else {
                    return Enumerable.push(this, ...values);
                }
            },
            shift() {
                if (core.array$shift) {
                    return core.array$shift.call(array);
                } else {
                    return Enumerable.shift(this);
                }
            },
            unshift(...values) {
                if (core.array$unshift) {
                    return core.array$unshift.apply(array, values);
                } else {
                    return Enumerable.unshift(this, ...values);
                }
            },
            reduce(callback, initialValue) {
                if (core.array$reduce) {
                    return core.array$reduce.call(array, callback, initialValue);
                } else {
                    return Enumerable.reduce(this, callback, initialValue);
                }
            },
            reduceRight(callback, initialValue) {
                if (core.array$reduceRight) {
                    return core.array$reduceRight.call(array, callback, initialValue);
                } else {
                    return Enumerable.reduceRight(this, callback, initialValue);
                }
            },
            some(callback, thisArg) {
                if (core.array$some) {
                    return core.array$some.call(array, callback, thisArg);
                } else {
                    return Enumerable.some(this, callback, thisArg);
                }
            },
            forEach(source, action = defaultAction, thisArg = undefined) {
                if (core.array$forEach) {
                    core.array$forEach.call(array, action, thisArg);
                } else {
                    Enumerable.forEach(this, action, thisArg);
                }
            }
        });
    }
}

module.exports = ArrayEnumerable;