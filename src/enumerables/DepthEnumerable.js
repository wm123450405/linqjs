'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

class DepthEnumerable extends IEnumerable {
    constructor(tree) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* DepthIterator() {
            let nodes = [ tree ];
            let iterators = [ tree[Symbol.iterator]() ];
            let pop = false;
            while (nodes.length && iterators.length) {
                if (!pop) yield nodes[nodes.length - 1].value;
                let next = iterators[iterators.length - 1].next();
                if (next.done) {
                    iterators.pop();
                    nodes.pop();
                    pop = true;
                } else {
                    nodes.push(next.value);
                    iterators.push(next.value[Symbol.iterator]());
                    pop = false;
                }
            }
        });
    }
}

module.exports = DepthEnumerable;