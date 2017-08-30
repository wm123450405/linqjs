'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

const IChunk = require('./IChunk');

class ChunkEnumerable extends IEnumerable {
    constructor(source, chunk, offset = 0) {
        super(source);
        offset = offset < 0 ? (offset % chunk + chunk) % chunk : offset;
        core.defineProperty(this, Symbol.iterator, function* ChunkIterator() {
            let index = 0;
            let chunks = [], last;
            let it = source[Symbol.iterator]();
            let hasNext = () => {
                let next = it.next();
                if (!next.done) {
                    if (!last || last.count === chunk || offset !== 0 && index === 0 && last.count === offset) {
                        if (last) index++;
                        chunks.push(last = {
                            count: 0,
                            array: [],
                        });
                        last.chunk = (last => {
                            return new IChunk(index, {
                                *[Symbol.iterator]() {
                                    while (last.array.length || hasNext() && last.array.length) {
                                        yield last.array.shift();
                                    }
                                }
                            });
                        })(last);
                    }
                    last.array.push(next.value);
                    last.count++;
                }
                return !next.done;
            };
            while (chunks.length || hasNext()) {
                if (chunks.length) {
                    yield chunks.shift().chunk;
                }
            }
        });
    }
}

module.exports = ChunkEnumerable;