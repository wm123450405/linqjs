'use strict';

const IChunk = require('./IChunk');

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');
const defaultFalsePredicate = require('./../methods/defaultFalsePredicate');

class SplitEnumerable extends IEnumerable {
    constructor(source, splitPredicate = defaultFalsePredicate) {
        super(source);
        splitPredicate = methods.asPredicate(splitPredicate);
        core.defineProperty(this, Symbol.iterator, function* SplitIterator() {
            let iterator = source[Symbol.iterator]();
            let chunkIndex = 0;
            let chunk = [];
            let chunks = [];
            let index = 0;
            let addChunk = () => {
                chunks.push(new IChunk(chunkIndex++, (chunk => function*() {
                    let i = 0;
                    while (chunk.length > i || hasNext() && chunk.length > i) {
                        yield chunk[i++];
                    }
                })(chunk)));
            };
            let hasNext = () => {
                let next = iterator.next();
                if (next.done) {
                    return false;
                } else {
                    if (splitPredicate(next.value, index++)) {
                        chunk = [];
                        addChunk();
                    } else {
                        chunk.push(next.value);
                    }
                    return true;
                }
            };
            addChunk();
            let ci = 0;
            while (chunks.length > ci || hasNext()) {
                if (chunks.length > ci) {
                    yield chunks[ci++];
                }
            }
        });
    }
}

module.exports = SplitEnumerable;