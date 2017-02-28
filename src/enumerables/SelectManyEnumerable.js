import IEnumerable from './../IEnumerable';

import core from './../core/core';

import defaultSelector from './../methods/defaultSelector';

class SelectManyEnumerable extends IEnumerable {
    constructor(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let element of source) {
                for (let collectionElement of collectionSelector(element)) {
                    yield resultSelector(collectionElement);
                }
            }
        });
    }
};

export default SelectManyEnumerable;