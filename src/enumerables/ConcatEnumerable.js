import IEnumerable from './../IEnumerable';

import core from './../core/core';

class ConcatEnumerable extends IEnumerable {
    constructor(source, other = []) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* source;
            yield* other;
        });
    };
};

export default ConcatEnumerable;