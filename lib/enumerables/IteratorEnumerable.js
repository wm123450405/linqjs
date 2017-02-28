import IEnumerable from './../IEnumerable';

import core from './../core/core';

class IteratorEnumerable extends IEnumerable {
    constructor(iterable) {
        super(iterable);
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* iterable;
        });
    }
};

export default IteratorEnumerable;