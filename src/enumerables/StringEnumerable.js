'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultStrictEqualityComparer = require('./../methods/defaultStrictEqualityComparer');

const Enumerable = require('./../Enumerable');

class StringEnumerable extends IterableEnumerable {
    constructor(string) {
        super(string);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
                comparer = methods.asStrictEqualityComparer(comparer);
                if (comparer === defaultStrictEqualityComparer && core.string$indexOf) {
                    return core.string$indexOf.call(string, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = Infinity, comparer = defaultStrictEqualityComparer) {
                comparer = methods.asStrictEqualityComparer(comparer);
                if (comparer === defaultStrictEqualityComparer && core.string$lastIndexOf) {
                    return core.string$lastIndexOf.call(string, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            includes(element, start = 0) {
                if (core.string$includes) {
                    return core.string$includes.call(string, element, start);
                } else {
                    return Enumerable.includes(this, element, start);
                }
            }
        });
    }
}

module.exports = StringEnumerable;