'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class BreadthEnumerable extends IEnumerable {
    constructor(tree) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* BreadthIterator() {
            let queue = [ [ tree ] ];
            while (queue.length) {
                for (let element of queue.shift()) {
                    yield element.value;
                    queue.push(element);
                }
            }
        });
    }
}

module.exports = BreadthEnumerable;
