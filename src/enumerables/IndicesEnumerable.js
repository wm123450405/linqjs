'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IndicesEnumerable extends IEnumerable {
    constructor(source, indices) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* IndicesIterator() {
            let iterator = indices[Symbol.iterator]();
            let next = iterator.next();
            if (!next.done) {
                let index = 0;
                let array = [];
                for (let element of source) {
                    array.push(element);
                    if (index === next.value) {
                        yield element;
                        while (!(next = iterator.next()).done && next.value <= index) {
                            yield array[next.value];
                        }
                        if (next.done) {
                            break;
                        }
                    }
                    index++;
                }
            }
        })
    }
}

module.exports = IndicesEnumerable;