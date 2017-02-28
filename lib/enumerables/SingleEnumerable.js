import IEnumerable from './../IEnumerable';

import core from './../core/core';

class SingleEnumerable extends IEnumerable {
	constructor(value) {
		super([]);
		core.defineProperty(this, Symbol.iterator, function*() {
            yield value;
        });
	}
}

export default SingleEnumerable;