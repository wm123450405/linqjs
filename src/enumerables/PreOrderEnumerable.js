'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class PreOrderEnumerable extends IEnumerable {
    constructor(tree) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* PreOrderIterator() {
            yield tree.value;
            if (tree.hasLeft()) {
                yield* new PreOrderEnumerable(tree.left);
            }
            if (tree.hasRight()) {
                yield* new PreOrderEnumerable(tree.right);
            }
        })
    }
}

module.exports = PreOrderEnumerable;