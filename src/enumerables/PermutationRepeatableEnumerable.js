'use strict';

const IEnumerable = require('./../IEnumerable');

const IndicesEnumerable = require('./IndicesEnumerable');

const core = require('./../core/core');

const NoSuchElementsException = require('./../core/exceptions/NoSuchElementsException');

class PermutationRepeatableEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* PermutationRepeatableIterator() {
            let iterator = source.getIterator();
            let indices = core.repeat(0, count);
            let array = [];
            let end = false;
            let hasNext = () => {
                let next = iterator.next();
                if (next.done) {
                    end = true;
                    return false;
                } else {
                    array.push(next.value);
                    return true;
                }
            };
            let nextIndices = () => {
                for (let i = count - 1; i >= 0; i--) {
                    indices[i]++;
                    let needNext = false;
                    if (array.length <= indices[i]) {
                        if (end || !hasNext()) {
                            indices[i] = 0;
                            needNext = true;
                        }
                    }
                    if (!needNext) {
                        return true;
                    }
                }
                return false;
            };

            if (hasNext()) {
                do {
                    yield new IndicesEnumerable(array, [...indices]);
                } while (nextIndices());
            } else {
                throw new NoSuchElementsException();
            }
        });
    }
}

module.exports = PermutationRepeatableEnumerable;