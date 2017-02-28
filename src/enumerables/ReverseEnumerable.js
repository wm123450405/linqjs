import IEnumerable from './../IEnumerable';

import core from './../core/core';

class ReverseEnumerable extends IEnumerable {
    constructor(source) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let temp = source.toArray(), length = temp.length;
            for (let i = length - 1; i >= 0; i--) {
                yield temp[i];
            }
        });
    }
};

export default ReverseEnumerable;