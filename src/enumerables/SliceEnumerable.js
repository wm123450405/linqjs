'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SliceEnumerable extends IEnumerable {
	constructor(source, start = 0, end = Infinity) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* SliceIterator() {
        	if (start < 0 || end < 0) {
        		source = [...source];
        		if (start < 0) {
        			start = Math.max(source.length + start, 0);
        		}
        		if (end < 0) {
        			end = Math.max(source.length + end, 0);
        		}
        	}
            let index = 0;
            for (let element of source) {
            	if (index >= start && index < end) {
            		yield element;
            	} else if (index >= end) {
            		break;
            	}
                index++;
            }
        });
    }
}

module.exports = SliceEnumerable;