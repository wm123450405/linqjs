import IEnumerable from './../IEnumerable';

import core from './../core/core';

import defaultSelector from './../methods/defaultSelector';

class SelectEnumerable extends IEnumerable {
    constructor(source, selector = defaultSelector) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                yield selector(element, index++);
            }
        });
    };
};

export default SelectEnumerable;