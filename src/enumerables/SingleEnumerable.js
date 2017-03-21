'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SingleEnumerable extends IEnumerable {
	constructor(value) {
		super([]);
		core.defineProperty(this, Symbol.iterator, function* SingleIterator() {
            yield value;
        });
	}
}

module.exports = SingleEnumerable;