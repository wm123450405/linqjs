import IteratorEnumerable from './IteratorEnumerable';

import core from './../core/core';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';

import Enumerable from './../Enumerable';

class ArrayEnumerable extends IteratorEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex(predicate, start = 0) {
                if (start === 0) {
                    return core.array$findIndex.call(array, predicate);
                } else {
                    return Enumerable.findIndex(this, predicate, start);
                }
            }
        });
    };
};

export default ArrayEnumerable;