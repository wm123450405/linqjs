'use strict';

const ITree = require('./ITree');

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');
const defaultPredicate = require('../methods/defaultPredicate');

class NextEnumerable extends IEnumerable {
    constructor(tree, node, predicate = defaultPredicate) {
        super([]);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* NextNodesIterator() {
            let parent = tree.getParentNode(node);
            let next = false;
            for (let child of parent.children) {
                if (next && predicate(child.value)) {
                    yield child;
                }
                if (!next && ITree.isSameNode(child, node)) {
                    next = true;
                }
            }
        });
    }
}

module.exports = NextEnumerable;