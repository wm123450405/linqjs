'use strict';

const ITree = require('./ITree');

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');
const defaultPredicate = require('../methods/defaultPredicate');

class SiblingsEnumerable extends IEnumerable {
    constructor(tree, node, predicate = defaultPredicate) {
        super([]);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* SiblingsIterator() {
            let parent = tree.getParentNode(node);
            let skip = false;
            for (let child of parent.children) {
                if (!skip && ITree.isSameNode(child, node)) {
                    skip = true;
                } else if (predicate(child.value)) {
                    yield child;
                }
            }
        });
    }
}

module.exports = SiblingsEnumerable;