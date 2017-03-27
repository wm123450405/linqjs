'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');

class SelectEnumerable extends IEnumerable {
    constructor(source, selector = defaultSelector) {
        super(source);
        selector = methods.asSelector(selector);
        core.defineProperty(this, Symbol.iterator, function* SelectIterator() {
            let index = 0;
            for (let element of source) {
                yield selector(element, index++);
            }
        });
    }
}

module.exports = SelectEnumerable;