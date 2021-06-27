'use strict';

const ProtoEnumerable = require('./ProtoEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');
const defaultJoinSelector = require('./../methods/defaultJoinSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('./../methods/defaultStrictEqualityComparer');
const defaultAction = require('./../methods/defaultAction');
const defaultComparer = require('./../methods/defaultComparer');

class ArrayEnumerable extends ProtoEnumerable {
    constructor(array) {
        super(array);
    }
    join(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (arguments.length === 1 && core.array$join) {
            return core.array$join.call(this[core.delegate], inner);
        } else {
            return super.join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.array$indexOf) {
            return core.array$indexOf.call(this[core.delegate], value, start);
        } else {
            return super.indexOf(value, start, comparer);
        }
    }
    lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.array$lastIndexOf) {
            return core.array$lastIndexOf.call(this[core.delegate], value, start);
        } else {
            return super.lastIndexOf(value, start, comparer);
        }
    }
    findIndex(predicate, thisArg) {
        if (core.array$findIndex) {
            return core.array$findIndex.call(this[core.delegate], predicate, thisArg);
        } else {
            return super.findIndex(predicate, thisArg);
        }
    }
    every(callback, thisArg) {
        if (core.array$every) {
            return core.array$every.call(this[core.delegate], callback, thisArg);
        } else {
            return super.every(callback, thisArg);
        }
    }
    find(callback, thisArg) {
        if (core.array$find) {
            return core.array$find.call(this[core.delegate], callback, thisArg);
        } else {
            return super.find(callback, thisArg);
        }
    }
    includes(element, start = 0) {
        if (core.array$includes) {
            return core.array$includes.call(this[core.delegate], element, start);
        } else {
            return super.includes(element, start);
        }
    }
    pop() {
        if (core.array$pop) {
            return core.array$pop.call(this[core.delegate]);
        } else {
            return super.pop();
        }
    }
    push(...values) {
        if (core.array$push) {
            return core.array$push.apply(this[core.delegate], values);
        } else {
            return super.push(...values);
        }
    }
    shift() {
        if (core.array$shift) {
            return core.array$shift.call(this[core.delegate]);
        } else {
            return super.shift();
        }
    }
    unshift(...values) {
        if (core.array$unshift) {
            return core.array$unshift.apply(this[core.delegate], values);
        } else {
            return super.unshift(...values);
        }
    }
    reduce(callback, initialValue) {
        if (core.array$reduce) {
            return core.array$reduce.call(this[core.delegate], callback, initialValue);
        } else {
            return super.reduce(callback, initialValue);
        }
    }
    reduceRight(callback, initialValue) {
        if (core.array$reduceRight) {
            return core.array$reduceRight.call(this[core.delegate], callback, initialValue);
        } else {
            return super.reduceRight(callback, initialValue);
        }
    }
    splice(start, count, ...values) {
        if (core.array$splice) {
            let result = core.array$splice.call(this[core.delegate], start, count, ...values);
            return core.asEnumerable(result);
        } else {
            return super.splice(start, count, ...values);
        }
    }
    fill(value, start = 0, end = Infinity) {
        if (core.array$fill) {
            let result = core.array$fill.call(this[core.delegate], value, start, end);
            return core.asEnumerable(result);
        } else {
            return super.fill(value, start, end);
        }
    }
    some(callback, thisArg) {
        if (core.array$some) {
            return core.array$some.call(this[core.delegate], callback, thisArg);
        } else {
            return super.some(callback, thisArg);
        }
    }
    forEach(source, action = defaultAction, thisArg = undefined) {
        if (core.array$forEach) {
            core.array$forEach.call(this[core.delegate], action, thisArg);
        } else {
            super.forEach(action, thisArg);
        }
    }
    toArray() {
        return this[core.delegate];
    }
    sort(comparer = defaultComparer) {
        if (core.array$sort) {
            comparer = methods.asComparer(comparer);
            let result = core.array$sort.call(this[core.delegate], comparer);
            return core.asEnumerable(result);
        } else {
            return super.sort(comparer);
        }
    }
    copyWithin(target = 0, start = 0, end = Infinity) {
        if (core.array$copyWithin) {
            let result = core.array$copyWithin.call(this[core.delegate], target, start, end);
            return core.asEnumerable(result);
        } else {
            return super.copyWithin(target, start, end);
        }
    }
}

module.exports = ArrayEnumerable;