'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SpliceEnumerable extends IEnumerable {
	constructor(source, start, count, ...values) {
        super(source);
        if (core.isArray(source) && core.array$splice) {
            let deleteValues = core.array$splice.call(source, start, count, ...values);
            core.setProperty(this, Symbol.iterator, function*() {
                yield* deleteValues;
            });
        } else {
            count = typeof count === 'undefined' ? Infinity : count;
            let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
            core.setProperty(source, Symbol.iterator, function*() {
                let index = 0;
                for (let element of iterable) {
                    if (index < start) {
                        yield element;
                    } else {
                        if (index == start) {
                            for (let value of values) {
                                yield value;
                            }
                        }
                        if (index >= start + count) {
                            yield element;
                        }
                    }
                    index++;
                }
            });
            core.setProperty(this, Symbol.iterator, function* SpliceIterator() {
                let index = 0;
                for (let element of iterable) {
                    if (index >= start && index < start + count) {
                        yield element;
                    }
                    index++;
                }
            });
        }
    }
}

module.exports = SpliceEnumerable;