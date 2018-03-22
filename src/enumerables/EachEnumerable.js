'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultAction = require('./../methods/defaultAction');

class EachEnumerable extends IEnumerable {
    constructor(source, action = defaultAction) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* EachIterator() {
            let index = 0;
            for (let element of source) {
                action(element, index++);
                yield element;
            }
        })
    }
}

module.exports = EachEnumerable;