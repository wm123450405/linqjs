const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultSelector = require('./../methods/defaultSelector');

class SelectManyEnumerable extends IEnumerable {
    constructor(source, collectionSelector = defaultSelector, resultSelector = defaultSelector) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                for (let collectionElement of collectionSelector(element, index++)) {
                    yield resultSelector(collectionElement);
                }
            }
        });
    }
};

module.exports = SelectManyEnumerable;