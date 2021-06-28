'use strict';

const ITree = require('./ITree');

const core = require('../core/core');

const GeneratorEnumerable = require('./GeneratorEnumerable');
const PreOrderEnumerable = require('./PreOrderEnumerable');
const InOrderEnumerable = require('./InOrderEnumerable');
const PostOrderEnumerable = require('./PostOrderEnumerable');

const DEFAULT_LEFT = Symbol('left');
const DEFAULT_RIGHT = Symbol('right');

class BinaryTree extends ITree {
    constructor(tree) {
        super(tree.value, function* () { yield* (tree.children || []); });
        let left = DEFAULT_LEFT, right = DEFAULT_RIGHT;
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function* BinaryTreeIterator() {
            let it = iterator();
            let itLeft = it.next();
            if (!itLeft.done) {
                left = itLeft.value && new BinaryTree(itLeft.value);
                yield left;
                let itRight = it.next();
                if (!itRight.done) {
                    right = itRight.value && new BinaryTree(itRight.value);
                    yield right;
                } else {
                    right = undefined;
                }
            } else {
                left = undefined;
            }
        });
        core.defineProperty(this, 'children', function() {
            return new GeneratorEnumerable(this[Symbol.iterator]);
        }, true, true);
        core.defineProperty(this, 'left', () => left === DEFAULT_LEFT ? left = this.elementAtOrDefault(0) : left, true, true);
        core.defineProperty(this, 'right', () => right === DEFAULT_RIGHT ? right = this.elementAtOrDefault(1) : right, true, true);
    }
    hasLeft() {
        return !core.isUndefined(this.left);
    }
    hasRight() {
        return !core.isUndefined(this.right);
    }
    /**
     * 前序遍历
     **/
    preOrder() {
        return new PreOrderEnumerable(this);
    }

    /**
     * 中序遍历
     */
    inOrder() {
        return new InOrderEnumerable(this);
    }
    /**
     * 后序遍历
     */
    postOrder() {
        return new PostOrderEnumerable(this);
    }
    get isBinary() {
        return true;
    }
    asBinary() {
        return this;
    }
}

module.exports = BinaryTree;