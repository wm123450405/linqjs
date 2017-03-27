'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');

class SelectManyEnumerable extends IEnumerable {
    constructor(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        super(source);
        collectionSelector = methods.asSelector(collectionSelector);
        resultSelector = methods.asSelector(resultSelector);
        core.defineProperty(this, Symbol.iterator, function* SelectManyIterator() {
            let index = 0;
            for (let element of source) {
                for (let collectionElement of collectionSelector(element, index++)) {
                    yield resultSelector(collectionElement);
                }
            }
        });
    }
}

module.exports = SelectManyEnumerable;