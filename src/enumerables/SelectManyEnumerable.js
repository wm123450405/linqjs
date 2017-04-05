'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');
const defaultResultSelector = require('./../methods/defaultResultSelector');

class SelectManyEnumerable extends IEnumerable {
    constructor(source, collectionSelector = defaultSelector, resultSelector = defaultResultSelector) {
        super(source);
        collectionSelector = methods.asSelector(collectionSelector);
        //resultSelector = methods.asSelector(resultSelector);
        core.defineProperty(this, Symbol.iterator, function* SelectManyIterator() {
            let index = 0;
            for (let element of source) {
                for (let collectionElement of Enumerable.asEnumerable(collectionSelector(element, index++))) {
                    yield resultSelector(element, collectionElement);
                }
            }
        });
    }
}

module.exports = SelectManyEnumerable;

const Enumerable = require('./../Enumerable');