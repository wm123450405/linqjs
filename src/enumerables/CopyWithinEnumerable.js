'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

class CopyWithinEnumerable extends IEnumerable {
	constructor(source, target = 0, start = 0, end = Infinity) {
        super(source);
        let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
        core.setProperty(source, Symbol.iterator, function*() {
            if (target < 0 || start < 0 || end < 0) {
                iterable = [...iterable];
                if (target < 0) {
                    target = iterable.length + target;
                }
                if (start < 0) {
                    start = iterable.length + start;
                }
                if (end < 0) {
                    end = iterable.length + end;
                }
            }
            if (target >= start) {
                let index = 0, temp = [];
                for (let element of iterable) {
                    if (index >= start && index < end) {
                        temp.push(element);
                    }
                    if (index < target) {
                        yield element;
                    } else if (temp.length) {
                        yield temp.shift();
                    } else {
                        yield element;
                    }
                    index++;
                }
            } else {
                let index = 0, temp = [];
                for (let element of iterable) {
                    if (index < target) {
                        yield element;
                    } else {
                        if (index <= end) {
                            temp.push(element);
                        }
                        if (index >= start && index < end) {
                            temp.shift();
                            yield element;
                        } else if (index === end) {
                            yield* temp;
                            temp = [];
                        } else if (index > end) {
                            yield element;
                        }
                    }
                    index++;
                }
                yield* temp;
            }
        });
    }
}

module.exports = CopyWithinEnumerable;