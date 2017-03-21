'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

class IteratorEnumerable extends IterableEnumerable {
    constructor(iterator) {
        super(iterator);
        let temp = [], first = true;
        core.defineProperty(this, Symbol.iterator, function* IteratorIterator() {
            let next;
            while (!(next = iterator.next()).done) {
                temp.push(next.value);
                yield next.value;
            }
    		if (first) {
    			first = false;
    		} else {
    			yield* temp;
    		}
        });
    }
}

module.exports = IteratorEnumerable;