'use strict';

const ITree = require('./ITree');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');
const GeneratorEnumerable = require('./GeneratorEnumerable');

const DEFAULT_LEFT = Symbol('left');
const DEFAULT_RIGHT = Symbol('right');

const subTree = sub => sub && sub.asBinary();

class BinaryTree extends ITree {
    constructor(value, generator) {
        super(value, generator);
        let left = DEFAULT_LEFT, right = DEFAULT_RIGHT;
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function* BinaryTreeIterator() {
            let it = iterator();
            let itLeft = it.next();
            if (!itLeft.done) {
                left = subTree(itLeft.value);
                yield left;
                let itRight = it.next();
                if (!itRight.done) {
                    right = subTree(itRight.value);
                    yield right;
                } else {
                    right = undefined;
                }
            } else {
                left = undefined;
            }
        });
        core.defineProperty(this, 'children', function() {
            return new GeneratorEnumerable(function* () {
                let it = iterator();
                let itLeft = it.next();
                if (!itLeft.done) {
                    left = subTree(itLeft.value);
                    yield left;
                    let itRight = it.next();
                    if (!itRight.done) {
                        right = subTree(itRight.value);
                        yield right;
                    } else {
                        right = undefined;
                    }
                } else {
                    left = undefined;
                }
            });
        }, true, true);
        core.defineProperty(this, 'left', () => left === DEFAULT_LEFT ? left = Enumerable.elementAtOrDefault(this, 0) : left, true, true);
        core.defineProperty(this, 'right', () => right === DEFAULT_RIGHT ? right = Enumerable.elementAtOrDefault(this, 1) : right, true, true);
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
        let tree = this;
        return new GeneratorEnumerable(function* () {
            yield tree.value;
            if (tree.hasLeft()) {
                yield* tree.left.preOrder();
            }
            if (tree.hasRight()) {
                yield* tree.right.preOrder();
            }
        });
    }

    /**
     * 中序遍历
     */
    inOrder() {
        let tree = this;
        return new GeneratorEnumerable(function* () {
            if (tree.hasLeft()) {
                yield* tree.left.inOrder();
            }
            yield tree.value;
            if (tree.hasRight()) {
                yield* tree.right.inOrder();
            }
        });
    }
    /**
     * 后序遍历
     */
    postOrder() {
        let tree = this;
        return new GeneratorEnumerable(function* () {
            if (tree.hasLeft()) {
                yield* tree.left.postOrder();
            }
            if (tree.hasRight()) {
                yield* tree.right.postOrder();
            }
            yield tree.value;
        });
    }
    get isBinary() {
        return true;
    }
    asBinary() {
        return this;
    }
}

module.exports = BinaryTree;