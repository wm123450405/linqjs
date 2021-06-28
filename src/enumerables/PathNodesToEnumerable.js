'use strict';

const IEnumerable = require('../IEnumerable');

const ITree = require('./ITree');

const core = require('../core/core');

const NotAncestorOfException = require('../core/exceptions/NotAncestorOfException');

class PathNodesToEnumerable extends IEnumerable {
    constructor(root, node) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* PathNodesToIterator() {
            let search = (result, current) => {
                result.push(current);
                if (ITree.isSameNode(current, node)) {
                    return result;
                } else {
                    for (let child of current) {
                        if (search(result, child)) {
                            return result;
                        }
                    }
                    result.pop();
                    return false;
                }
            };
            let result = search([], root);
            if (result) {
                for (let n of result) {
                    yield n;
                }
            } else {
                throw new NotAncestorOfException(root, node);
            }
        });
    }
}

module.exports = PathNodesToEnumerable;