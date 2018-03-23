'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const IndicesEnumerable = require('./IndicesEnumerable');

const core = require('./../core/core');

class CombinationEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* CombinationIterator() {
            let iterator = source[Symbol.iterator]();
            let indices = Enumerable.range(0, count).toArray();
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
                    let nextNext = false;
                    indices[i]++;
                    if (indices[i] + (count - i) - 1 >= array.length) {
                        if (end || !hasNext()) {
                            nextNext = true
                        }
                    }
                    if (!nextNext) {
                        for (let j = i + 1, k = 1; j < count; j++, k++) {
                            indices[j] = indices[i] + k;
                        }
                        return true;
                    }
                }
                return false;
            };

            let lastIndex = indices[count - 1];
            while (array.length <= lastIndex) {
                if (!hasNext()) {
                    throw new NoSuchElementsException();
                }
            }
            do {
                yield new IndicesEnumerable(array, [...indices]);
            } while (nextIndices());
        });
    }
}

module.exports = CombinationEnumerable;