import IEnumerable from './../IEnumerable';

import core from './../core/core';

import Enumerable from './../Enumerable';

import defaultSelector from './../methods/defaultSelector';
import defaultComparer from './../methods/defaultComparer';

class IOrderedEnumerable extends IEnumerable {
    constructor(source, orderByComparer = defaultComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let element of source.toArray().sort(orderByComparer)) {
                yield element;
            }
        });
        core.defineProperties(this, {
            thenBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.thenBy(this, keySelector, comparer);
            },
            thenByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.thenByDescending(this, keySelector, comparer);
            }
        });
        core.defineProperty(this, IOrderedEnumerable.source, source);
        core.defineProperty(this, IOrderedEnumerable.orderByComparer, orderByComparer);
    };
    static source = Symbol('source');
    static orderByComparer = Symbol('orderByComparer');
};

export default IOrderedEnumerable;