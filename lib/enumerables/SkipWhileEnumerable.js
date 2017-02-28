import IEnumerable from './../IEnumerable';

import core from './../core/core';

import defaultPredicate from './../methods/defaultPredicate';

class SkipWhileEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let skipping = true, index = 0;
            for (let element of source) {
                skipping = skipping && predicate(element, index++);
                if (!skipping) {
                    yield element;
                }
            }
        });
    };
};

export default SkipWhileEnumerable;