'use strict';

const ITree = require('./ITree');

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');
const defaultPredicate = require('../methods/defaultPredicate');

class PrevEnumerable extends IEnumerable {
    constructor(tree, node, predicate = defaultPredicate) {
        super([]);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* PrevIterator() {
            let parent = tree.getParentNode(node);
            for (let child of parent.children) {
                if (ITree.isSameNode(child, node)) {
                    break;
                }
                if (predicate(child.value)) {
                    yield child.value;
                }
            }
        });
    }
}

module.exports = PrevEnumerable;