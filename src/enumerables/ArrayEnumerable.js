'use strict';

const ProtoEnumerable = require('./ProtoEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSelector = require('../methods/defaultSelector');
const defaultJoinSelector = require('../methods/defaultJoinSelector');
const defaultEqualityComparer = require('../methods/defaultEqualityComparer');
const defaultStrictEqualityComparer = require('../methods/defaultStrictEqualityComparer');
const defaultAction = require('../methods/defaultAction');
const defaultComparer = require('../methods/defaultComparer');

class ArrayEnumerable extends ProtoEnumerable {
    constructor(array) {
        super(array);
        core.defineProperty(this, Symbol.iterator, function ArrayIterator() {
            return array[Symbol.iterator]();
        });
    }
    join(inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        if (arguments.length === 1 && core.a$join) {
            return core.a$join.call(this[core.delegate], inner);
        } else {
            return super.join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }
    indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.a$indexOf) {
            return core.a$indexOf.call(this[core.delegate], value, start);
        } else {
            return super.indexOf(value, start, comparer);
        }
    }
    lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.a$lastIndexOf) {
            return core.a$lastIndexOf.call(this[core.delegate], value, start);
        } else {
            return super.lastIndexOf(value, start, comparer);
        }
    }
    findIndex(predicate, thisArg) {
        if (core.a$findIndex) {
            return core.a$findIndex.call(this[core.delegate], predicate, thisArg);
        } else {
            return super.findIndex(predicate, thisArg);
        }
    }
    every(callback, thisArg) {
        if (core.a$every) {
            return core.a$every.call(this[core.delegate], callback, thisArg);
        } else {
            return super.every(callback, thisArg);
        }
    }
    find(callback, thisArg) {
        if (core.a$find) {
            return core.a$find.call(this[core.delegate], callback, thisArg);
        } else {
            return super.find(callback, thisArg);
        }
    }
    includes(element, start = 0) {
        if (core.a$includes) {
            return core.a$includes.call(this[core.delegate], element, start);
        } else {
            return super.includes(element, start);
        }
    }
    pop() {
        if (core.a$pop) {
            return core.a$pop.call(this[core.delegate]);
        } else {
            return super.pop();
        }
    }
    push(...values) {
        if (core.a$push) {
            return core.a$push.apply(this[core.delegate], values);
        } else {
            return super.push(...values);
        }
    }
    shift() {
        if (core.a$shift) {
            return core.a$shift.call(this[core.delegate]);
        } else {
            return super.shift();
        }
    }
    unshift(...values) {
        if (core.a$unshift) {
            return core.a$unshift.apply(this[core.delegate], values);
        } else {
            return super.unshift(...values);
        }
    }
    reduce(callback, initialValue) {
        if (core.a$reduce) {
            return core.a$reduce.call(this[core.delegate], callback, initialValue);
        } else {
            return super.reduce(callback, initialValue);
        }
    }
    reduceRight(callback, initialValue) {
        if (core.a$reduceRight) {
            return core.a$reduceRight.call(this[core.delegate], callback, initialValue);
        } else {
            return super.reduceRight(callback, initialValue);
        }
    }
    splice(start, count, ...values) {
        if (core.a$splice) {
            let result = core.a$splice.call(this[core.delegate], start, count, ...values);
            return core.asEnumerable(result);
        } else {
            return super.splice(start, count, ...values);
        }
    }
    fill(value, start = 0, end = Infinity) {
        if (core.a$fill) {
            let result = core.a$fill.call(this[core.delegate], value, start, end);
            return core.asEnumerable(result);
        } else {
            return super.fill(value, start, end);
        }
    }
    some(callback, thisArg) {
        if (core.a$some) {
            return core.a$some.call(this[core.delegate], callback, thisArg);
        } else {
            return super.some(callback, thisArg);
        }
    }
    forEach(action = defaultAction, thisArg = undefined) {
        if (core.a$forEach) {
            core.a$forEach.call(this[core.delegate], action, thisArg);
        } else {
            super.forEach(action, thisArg);
        }
    }
    toArray() {
        return this[core.delegate];
    }
    sort(comparer = defaultComparer) {
        if (core.a$sort) {
            comparer = methods.asComparer(comparer);
            let result = core.a$sort.call(this[core.delegate], comparer);
            return core.asEnumerable(result);
        } else {
            return super.sort(comparer);
        }
    }
    copyWithin(target = 0, start = 0, end = Infinity) {
        if (core.a$copyWithin) {
            let result = core.a$copyWithin.call(this[core.delegate], target, start, end);
            return core.asEnumerable(result);
        } else {
            return super.copyWithin(target, start, end);
        }
    }
}

module.exports = ArrayEnumerable;