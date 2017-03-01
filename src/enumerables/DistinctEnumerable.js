const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

class DistinctEnumerable extends IEnumerable {
    constructor(source, comparer = defaultEqualityComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let temp = [];
            for (let element of source) {
                if (!Enumerable.contains(temp, element, comparer)) {
                    temp.push(element);
                    yield element;
                }
            }
        });
    };
};

module.exports = DistinctEnumerable;