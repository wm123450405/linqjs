'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class FillEnumerable extends IEnumerable {
	constructor(source, value, start = 0, end = Infinity) {
        super(source);
        if (core.isArray(source) && core.array$fill) {
            return Enumerable.extend(core.array$fill.call(source, value, start, end));
        } else {
            let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
            core.setProperty(source, Symbol.iterator, function*() {
                if (start < 0 || end < 0) {
                    iterable = [...iterable];
                    if (start < 0) {
                        start = iterable.length + start;
                    }
                    if (end < 0) {
                        end = iterable.length + end;
                    }
                }
                let index = 0;
                for (let element of iterable) {
                    if (index < start || index >= end) {
                        yield element;
                    } else {
                        yield value;
                    }
                    index++;
                }
            });
            return source;
        }
    }
}

module.exports = FillEnumerable;

const Enumerable = require('./../Enumerable');