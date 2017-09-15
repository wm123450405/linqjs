'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

class ICombine extends IteratorEnumerable {
    constructor(key, parent, value, iterator) {
        super(iterator);
        core.defineProperty(this, 'key', () => key, true, true);
        core.defineProperty(this, 'parent', () => parent, true, true);
        core.defineProperty(this, 'value', () => value, true, true);
        iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ICombineIterator() {
            return iterator();
        });
        core.defineProperty(this, 'children', function() {
            return new IteratorEnumerable(iterator());
        }, true, true);
    }
    toObject() {
        let obj = {
            key: this.key,
            value: this.value
        };
        let children = Enumerable.select(this, sub => sub.toObject()).toArray();
        if (children.length) {
            obj.children = children;
        }
        if (!core.isUndefined(this.parent)) {
            obj.parent = this.parent;
        }
        return obj;
    }
}

module.exports = ICombine;