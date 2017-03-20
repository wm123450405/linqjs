'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

class IteratorEnumerable extends IterableEnumerable {
    constructor(iterator) {
        super(iterator);
        let temp = [], first = true;
        core.defineProperty(this, Symbol.iterator, function*() {
        	let next = iterator.next();
        	if (next.done) {
        		if (first) {
        			first = false;
        		} else {
        			yield* temp;
        		}
        	} else {
        		temp.push(next.value);
        		yield next.value;
        	}
        });
    }
}

module.exports = IteratorEnumerable;