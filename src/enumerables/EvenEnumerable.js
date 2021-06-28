'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultIndexSelector = require('../methods/defaultIndexSelector');

class EvenEnumerable extends IEnumerable {
    constructor(source, selector = defaultIndexSelector) {
        super(source);
        selector = methods.asSelector(selector);
        core.defineProperty(this, Symbol.iterator, function* EvenIterator() {
            let index = 0;
            for (let element of source) {
                if (selector(element, index++) % 2 === 0) {
                    yield element;
                }
            }
        });
    }
}

module.exports = EvenEnumerable;