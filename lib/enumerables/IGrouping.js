import IEnumerable from './../IEnumerable';

import core from './../core/core';

class IGrouping extends IEnumerable {
    constructor(key, iterable) {
        super([]);
        this.key = key;
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* iterable;
        });
    }
};

export default IGrouping;