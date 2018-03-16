'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

class SubTreeEnumerable extends IEnumerable {
    constructor(tree, predicate) {
        super([]);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* SubTreeIterator(){
            let queue = [ [ tree ] ];
            while (queue.length) {
                for (let element of queue.shift()) {
                    if (predicate(element.value)) {
                        yield element;
                    }
                    queue.push(element);
                }
            }
        });
    }
}

module.exports = SubTreeEnumerable;