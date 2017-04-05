'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultResultSelector = require('./../methods/defaultResultSelector');

class ZipEnumerable extends IEnumerable {
    constructor(source, other, resultSelector = defaultResultSelector) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* ZipIterator() {
            let sourceIterator = source[Symbol.iterator]();
            let otherIterator = other[Symbol.iterator]();
            let sourceElement, otherElement, index = 0;
            do {
                sourceElement = sourceIterator.next();
                otherElement = otherIterator.next();
                if (!sourceElement.done && !otherElement.done) {
                    yield resultSelector(sourceElement.value, otherElement.value, index++);
                }
            } while (!(sourceElement.done && otherElement.done));
        });
    }
}

module.exports = ZipEnumerable;