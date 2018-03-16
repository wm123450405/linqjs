'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class PostOrderEnumerable extends IEnumerable {
    constructor(tree) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* PostOrderIterator() {
            if (tree.hasLeft()) {
                yield* new PostOrderEnumerable(tree.left);
            }
            if (tree.hasRight()) {
                yield* new PostOrderEnumerable(tree.right);
            }
            yield tree.value;
        })
    }
}

module.exports = PostOrderEnumerable;