'use strict';

const ITree = require('./ITree');

const methods = require('./../methods/methods');

const defaultChildrenSelector = require('./../methods/defaultChildrenSelector');

class TreeEnumerable extends ITree {
    constructor(source, childrenSelector = defaultChildrenSelector) {
        childrenSelector = methods.asSelector(childrenSelector);
        super(source, function* () {
            let children = childrenSelector(source);
            if (children) {
                for (let child of children) {
                    yield new TreeEnumerable(child, childrenSelector);
                }
            }
        });
    }
}

module.exports = TreeEnumerable;