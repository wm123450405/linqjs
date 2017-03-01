const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class RepeatEnumerable extends IEnumerable {
    constructor(element, count = 0) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let i = 0; i < count; i++) {
                yield element;
            }
        });
    };
};

module.exports = RepeatEnumerable;