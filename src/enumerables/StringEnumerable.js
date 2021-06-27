'use strict';

const ProtoEnumerable = require('./ProtoEnumerable');

const core = require('./../core/core');

const defaultStrictEqualityComparer = require('./../methods/defaultStrictEqualityComparer');
const defaultFalsePredicate = require('./../methods/defaultFalsePredicate');

const OutOfRangeException = require('./../core/exceptions/OutOfRangeException');

class StringEnumerable extends ProtoEnumerable {
    constructor(string) {
        super(string);
    }
    elementAt(index) {
        if (index >= 0 && index < this[core.delegate].length) {
            return this[core.delegate][index];
        } else {
            throw new OutOfRangeException(index);
        }
    }
    indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.string$indexOf) {
            return core.string$indexOf.call(string, value, start);
        } else {
            return super.indexOf(value, start, comparer);
        }
    }
    lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
        if (comparer === defaultStrictEqualityComparer && core.string$lastIndexOf) {
            return core.string$lastIndexOf.call(string, value, start);
        } else {
            return super.lastIndexOf(value, start, comparer);
        }
    }
    includes(element, start = 0) {
        if (core.string$includes) {
            return core.string$includes.call(string, element, start);
        } else {
            return this[core.delegate].indexOf(element, start) !== -1;
        }
    }
    split(splitPredicate = defaultFalsePredicate) {
        if (core.string$split) {
            if (splitPredicate === defaultFalsePredicate) {
                let result = core.string$split.call(this[core.delegate]);
                return core.asEnumerable(result);
            } else if (core.isString(splitPredicate)) {
                let result = core.string$split.call(this[core.delegate], splitPredicate);
                return core.asEnumerable(result);
            } else {
                return super.split(splitPredicate);
            }
        } else {
            return super.split(splitPredicate);
        }
    }
    toArray() {
        if (core.string$split) {
            return core.string$split.call(this[core.delegate])
        } else {
            return super.toArray();
        }
    }
}

module.exports = StringEnumerable;