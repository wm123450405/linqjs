'use strict';

const core = require('./../core/core');

const ITree = require('./ITree');

const methods = require('./../methods/methods');

const defaultChildrenSelector = require('./../methods/defaultChildrenSelector');
const defaultValueSelector = require('./../methods/defaultValueSelector');

class TreeEnumerable extends ITree {
    constructor(source, childrenSelector = defaultChildrenSelector, valueSelector = defaultValueSelector) {
        childrenSelector = methods.asSelector(childrenSelector);
        valueSelector = methods.asSelector(valueSelector);
        super(valueSelector(source), function* () {
            let children = childrenSelector(source);
            if (children) {
                for (let child of children) {
                    yield new TreeEnumerable(child, childrenSelector, valueSelector);
                }
            }
        });
    }
}

module.exports = TreeEnumerable;