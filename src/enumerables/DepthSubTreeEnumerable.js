'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

class BreadthSubTreeEnumerable extends IEnumerable {
    constructor(tree, predicate) {
        super([]);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* BreadthSubTreeIterator(){
            let nodes = [ tree ];
            let iterators = [ tree[Symbol.iterator]() ];
            let pop = false;
            while (nodes.length && iterators.length) {
                if (!pop && predicate(nodes[nodes.length - 1].value)) yield nodes[nodes.length - 1].value;
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

module.exports = BreadthSubTreeEnumerable;