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
    /**
     * 六种遍历顺序
     **/
    dlr() {

    }
    ldr() {

    }
    lrd() {

    }
    /**
     * 深度
     */
    get deep() {
        return this.children.maxOrDefault(child => child.deep, 0) + 1;
    }
    /**
     * 是否为二叉树
     */
    get isBinary() {
        let count = this.children.count();
        return count <= 2 && this.children.all(child => child.isBinary());
    }
    /**
     * 是否为满二叉树
     */
    get isFullBinary() {
        let count = this.children.count();
        return count === 0 || count === 2 && this.children.all(child => child.isFullBinary());
    }
    get isCompleteBinary() {

    }
    get isPerfectBinary() {

    }
    asBinary() {

    }
}

module.exports = ICombine;