const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultSelector = require('./../methods/defaultSelector');

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

module.exports = SelectManyEnumerable;