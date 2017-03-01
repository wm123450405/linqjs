const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class EmptyEnumerable extends IEnumerable {
    constructor() {
        super([]);
        core.defineProperty(this, Symbol.iterator, function*() { });
    };
};

module.exports = EmptyEnumerable;