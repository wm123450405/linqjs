'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class ConcatEnumerable extends IEnumerable {
    constructor(source, ...others) {
        super(source);
        let type = this.getProtoType();
        core.defineProperty(this, Symbol.iterator, function* ConcatIterator() {
            yield* source;
            for (let other of others) {
                if (!core.isUndefined(other) && (!core.isString(other) || type === 'string') && !core.isArguments(other)) {
                    if (other[Symbol.iterator]) {
                        yield* other;
                    } else if (core.isIterator(other)) {
                        yield* other.asEnumerable();
                    } else {
                        yield other;
                    }
                } else {
                    yield other;
                }
            }
        });
    }
}

module.exports = ConcatEnumerable;