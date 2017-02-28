import IEnumerable from './../IEnumerable';

import core from './../core/core';

class RangeEnumerable extends IEnumerable {
    constructor(start, count) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let i = 0, value = start; i < count; i++, value++) {
                yield value;
            }
        });
    };
};

export default RangeEnumerable;