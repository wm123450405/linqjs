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
                chunks.push((chunk => new IChunk(chunkIndex++, function*() {
                    while (chunk.length > 0 || hasNext()) {
                        if (chunk.length > 0) {
                            yield chunk.shift();
                        } else {
                            break;
                        }
                    }
                }))(chunk));
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
            while (chunks.length > 0 || hasNext()) {
                if (chunks.length > 0) {
                    yield chunks.shift();
                }
            }
        });
    }
}

module.exports = SplitEnumerable;