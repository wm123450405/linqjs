'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class FillEnumerable extends IEnumerable {
	constructor(source, value, start = 0, end = Infinity) {
        super(source);
        let iterable = source.getIterable();
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

module.exports = FillEnumerable;