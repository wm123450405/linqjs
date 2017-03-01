const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultSelector = require('./../methods/defaultSelector');

class SelectEnumerable extends IEnumerable {
    constructor(source, selector = defaultSelector) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                yield selector(element, index++);
            }
        });
    };
};

module.exports = SelectEnumerable;