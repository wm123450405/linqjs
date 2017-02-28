import IEnumerable from './../IEnumerable';

import core from './../core/core';

class RepeatEnumerable extends IEnumerable {
    constructor(element, count = 0) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let i = 0; i < count; i++) {
                yield element;
            }
        });
    };
};

export default RepeatEnumerable;