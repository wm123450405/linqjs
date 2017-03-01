const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class ConcatEnumerable extends IEnumerable {
    constructor(source, other = []) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* source;
            yield* other;
        });
    };
};

module.exports = ConcatEnumerable;