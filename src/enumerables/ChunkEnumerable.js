'use strict';

const IEnumerable = require('./../IEnumerable');

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
                            return new IChunk(index, function* () {
                                let index = 0;
                                while (last.array.length > index || hasNext() && last.array.length > index) {
                                    yield last.array[index++];
                                }
                            });
                        })(last);
                    }
                    last.array.push(next.value);
                    last.count++;
                }
                return !next.done;
            };
            let ci = 0;
            while (chunks.length > ci || hasNext()) {
                if (chunks.length > ci) {
                    yield chunks[ci++].chunk;
                }
            }
        });
    }
}

module.exports = ChunkEnumerable;