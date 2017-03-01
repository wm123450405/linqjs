const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SingleEnumerable extends IEnumerable {
	constructor(value) {
		super([]);
		core.defineProperty(this, Symbol.iterator, function*() {
            yield value;
        });
	}
}

module.exports = SingleEnumerable;