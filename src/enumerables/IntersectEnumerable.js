import IEnumerable from './../IEnumerable';

import core from './../core/core';

import Enumerable from './../Enumerable';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';

class IntersectEnumerable extends IEnumerable {
    constructor(source, other, comparer = defaultEqualityComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let temp = [];
            for (let element of source) {
                if (Enumerable.contains(other, element, comparer)) {
                    if (!Enumerable.contains(temp, element, comparer)) {
                        temp.push(element);
                        yield element;
                    }
                }
            }
        });
    };
};

export default IntersectEnumerable;