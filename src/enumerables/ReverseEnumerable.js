const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class ReverseEnumerable extends IEnumerable {
    constructor(source) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let temp = source.toArray(), length = temp.length;
            for (let i = length - 1; i >= 0; i--) {
                yield temp[i];
            }
        });
    }
};

module.exports = ReverseEnumerable;