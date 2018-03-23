'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const IndicesEnumerable = require('./IndicesEnumerable');

const core = require('./../core/core');

class PermutationEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* PermutationIterator() {
            let iterator = source[Symbol.iterator]();
            let indices = Enumerable.range(0, count).toArray();
            let used = Enumerable.repeat(true, count).toArray();
            let array = [];
            let end = false;
            let hasNext = () => {
                let next = iterator.next();
                if (next.done) {
                    end = true;
                    return false;
                } else {
                    array.push(next.value);
                    while (used.length < array.length) used.push(false);
                    return true;
                }
            };
            let nextIndices = () => {
                for (let i = count - 1; i >= 0; i--) {
                    used[indices[i]] = false;
                    let nextNext = false;
                    do {
                        indices[i]++;
                        if (array.length <= indices[i]) {
                            if (end || !hasNext()) {
                                nextNext = true;//need i--
                            }
                            if (end) break;
                        }
                    } while(used[indices[i]]);
                    if (!nextNext) {
                        used[indices[i]] = true;
                        for (let j = i + 1; j < count; j++) {
                            for (let k = 0; k < used.length; k++) {
                                if (!used[k]) {
                                    indices[j] = k;
                                    used[k] = true;
                                    break;
                                }
                            }
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

module.exports = PermutationEnumerable;