import IEnumerable from './../IEnumerable';

import core from './../core/core';

import Enumerable from './../Enumerable';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';

class DistinctEnumerable extends IEnumerable {
    constructor(source, comparer = defaultEqualityComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let temp = [];
            for (let element of source) {
                if (!Enumerable.contains(temp, element, comparer)) {
                    temp.push(element);
                    yield element;
                }
            }
        });
    };
};

export default DistinctEnumerable;