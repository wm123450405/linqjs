import IteratorEnumerable from './IteratorEnumerable';

import core from './../core/core';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';

import Enumerable from './../Enumerable';

class StringEnumerable extends IteratorEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer) {
                    return core.string$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer) {
                    return core.string$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            }
        });
    };
};

export default StringEnumerable;