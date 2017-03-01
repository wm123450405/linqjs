const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultPredicate = require('./../methods/defaultPredicate');

class WhereEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                if (predicate(element, index++)) {
                    yield element;
                }
            }
        });
    };
};

module.exports = WhereEnumerable;