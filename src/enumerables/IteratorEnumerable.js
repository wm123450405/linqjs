'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('../core/core');

class IteratorEnumerable extends IterableEnumerable {
    constructor(iterator) {
        super(iterator);
        let temp = [], first = true;
        core.defineProperty(this, Symbol.iterator, function* IteratorIterator() {
    		if (first) {
                let next;
                while (!(next = iterator.next()).done) {
                    yield next.value;
                    temp.push(next.value);
                }
    			first = false;
    		} else {
    			yield* temp;
    		}
        });
    }
}

module.exports = IteratorEnumerable;