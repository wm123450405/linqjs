const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IGrouping extends IEnumerable {
    constructor(key, iterable) {
        super([]);
        this.key = key;
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* iterable;
        });
    }
};

module.exports = IGrouping;