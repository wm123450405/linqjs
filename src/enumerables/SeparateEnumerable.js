'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultValueSelector = require('./../methods/defaultValueSelector');
const defaultChildrenSelector = require('./../methods/defaultChildrenSelector');

class SeparateEnumerable extends IEnumerable {
    constructor(source, childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
        super(source);
        childrenSelector = methods.asSelector(childrenSelector);
        valueSelector = methods.asSelector(valueSelector);
        core.defineProperty(this, Symbol.iterator, function* SeparateIterator() {
            for (let element of source) {
                if (core.isUndefined(element)) {
                    yield element;
                } else {
                    let collection = childrenSelector(element);
                    if (core.isList(collection)) {
                        if (element !== collection) {
                            yield valueSelector(element);
                        }
                        yield* Enumerable.separate(collection, childrenSelector, valueSelector);
                    } else {
                        yield valueSelector(element);
                    }
                }
            }
        });
    }
}

module.exports = SeparateEnumerable;