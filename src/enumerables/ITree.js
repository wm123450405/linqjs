'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');
const defaultPredicate = require('./../methods/defaultPredicate');

class ITree extends IteratorEnumerable {
    constructor(parentGetter, value, iterator) {
        super(iterator);
        core.defineProperty(this, 'parent', parentGetter, true, true);
        core.defineProperty(this, 'value', () => value, true, true);
        iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ITreeIterator() {
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
     * 广度优先遍历
     */
    breadth() {
        let tree = this;
        return new IteratorEnumerable(function* () {
            let queue = [ [ tree ] ];
            while (queue.length) {
                for (let element of queue.shift()) {
                    yield element.value;
                    queue.push(element);
                }
            }
        });
    }
    /**
     * 最近的根节点
     */
    lowestRoot(...trees) {

    }

    /**
     * 获取当前节点的路径
     */
    path() {
        let current = this;
        let path = [];
        do {
            path.unshift(current.value);
        } while (core.isUndefined(current.parent) && (current = current.parent));
        return Enumerable.asEnumerable(path);
    }

    /**
     * 广度
     */
    degree(predicate = defaultPredicate) {
        predicate = methods.asPredicate(predicate);
        return Enumerable.count(this.children, (element, index) => predicate(element.value, index));
    }
    /**
     * 深度
     */
    deep(predicate = defaultPredicate) {
        predicate = methods.asPredicate(predicate);
        return Enumerable.where(this.children, (element, index) => predicate(element.value, index)).maxOrDefault(child => child.deep(), 0) + 1;
    }
    /**
     * 是否为二叉树
     */
    isBinary() {
        return this.degree() <= 2 && Enumerable.all(this.children, child => child.isBinary());
    }
    /**
     * 是否为满二叉树(国际标准)
     */
    isFullBinary() {
        let degree = this.degree();
        return degree === 0 || degree === 2 && Enumerable.all(this.children, child => child.isFullBinary());
    }

    /**
     * 是否为完全二叉树
     */
    isCompleteBinary() {
        let queue = [ this ];
        let current;
        let end = false;
        while (queue.length) {
            current = queue.shift();
            if (end) {
                if (current.degree !== 0) {
                    return false;
                }
            } else {
                let degree = current.degree();
                if (degree > 2) {
                    return false;
                }
                if (degree !== 2) {
                    end = true;
                }
                queue.push(...current.children);
            }
        }
        return true;
    }

    /**
     * 是否为完美二叉树
     */
    isPerfectBinary() {
        let line = [ this ];
        let nextLine = [];
        let current;
        while (line.length) {
            current = line.shift();
            let degree = current.degree();
            if (degree === 0) {
                if (nextLine.length) {
                    return false;
                }
            } else if (degree === 2) {
                nextLine.push(...current.children);
            } else {
                return false;
            }
            if (!line.length && nextLine.length) {
                line = nextLine;
                nextLine = [];
            }
        }
        return true;
    }
    asBinary() {
        return new BinaryTree(() => this.parent && this.parent.asBinary(), this.value, this[Symbol.iterator]);
    }
}

module.exports = ITree;

const BinaryTree = require('./BinaryTree');