'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultPredicate = require('./../methods/defaultPredicate');

class TakeWhileEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* TakeWhileIterator() {
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