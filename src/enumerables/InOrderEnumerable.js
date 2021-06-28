'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

class InOrderEnumerable extends IEnumerable {
    constructor(tree) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* InOrderIterator() {
            if (tree.hasLeft()) {
                yield* new InOrderEnumerable(tree.left);
            }
            yield tree.value;
            if (tree.hasRight()) {
                yield* new InOrderEnumerable(tree.right);
            }
        });
    }
}

module.exports = InOrderEnumerable;