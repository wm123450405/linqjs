import IEnumerable from './../IEnumerable';

import core from './../core/core';

class EmptyEnumerable extends IEnumerable {
    constructor() {
        super([]);
        core.defineProperty(this, Symbol.iterator, function*() { });
    };
};

export default EmptyEnumerable;