import IEnumerable from './../IEnumerable';

import core from './../core/core';

import defaultPredicate from './../methods/defaultPredicate';

class WhereEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                if (predicate(element, index++)) {
                    yield element;
                }
            }
        });
    };
};

export default WhereEnumerable;