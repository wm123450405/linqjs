'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultPredicate = require('./../methods/defaultPredicate');

class TakeWhileEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let taking = true, index = 0;
            for (let element of source) {
                taking = taking && predicate(element, index++);
                if (taking) {
                    yield element;
                } else {
                    break;
                }
            }
        });
    }
}

module.exports = TakeWhileEnumerable;