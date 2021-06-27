'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class RandEnumerable extends IEnumerable {
    constructor(source, length = 0, repeatable = false) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* RandIterator() {
            let temp = source.toArray();
            if (repeatable) {
                for (let i = 0; i < length; i++) {
                    yield temp[Math.floor(temp.length * Math.random())];
                }
            } else {
                let index, element;
                for (let i = 0; i < length; i++) {
                    index = Math.floor((temp.length - i) * Math.random()) + i;
                    element = temp[index];
                    temp[index] = temp[i];
                    yield element;
                }
            }
        });
    }
}

module.exports = RandEnumerable;