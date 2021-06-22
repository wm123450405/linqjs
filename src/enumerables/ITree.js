'use strict';

const extend = require('extend');

const GeneratorEnumerable = require('./GeneratorEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');
const NotAncestorOfException = require('./../core/exceptions/NotAncestorOfException');

const methods = require('./../methods/methods');
const defaultPredicate = require('./../methods/defaultPredicate');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultValueSetter = require('./../methods/defaultValueSetter');
const defaultChildrenSetter = require('./../methods/defaultChildrenSetter');

class ITree extends GeneratorEnumerable {
    constructor(value, generator) {
        super(generator);
        core.defineProperty(this, 'value', () => value, true, true);
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ITreeIterator() {
            return iterator();
        });
        core.defineProperty(this, 'children', function() {
            return new GeneratorEnumerable(iterator);
        }, true, true);
    }
    get values() {
        return Enumerable.select(this.children, child => child.value);
    }
    getChild(index) {
        return Enumerable.elementAt(this.children, index);
    }
    getValue(index) {
        return this.getChild(index).value;
    }
    toValue(childrenSetter = defaultChildrenSetter, valueSetter = defaultValueSetter) {
        valueSetter = methods.asSetter(valueSetter);
        childrenSetter = methods.asSetter(childrenSetter);
        let obj = { };
        if (typeof this.value !== 'undefined') {
            valueSetter(obj, this.value);
        }
        let children = Enumerable.select(this, sub => sub.toValue(childrenSetter, valueSetter)).toArray();
        if (children.length) {
            childrenSetter(obj, children);
        }
        return obj;
    }
    toObject() {
        let obj = {
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
    breadthTraverse() {
        return new BreadthEnumerable(this);
    }

    /**
     * 搜索(广度优先搜索)
     */
    breadthSearch(predicate = defaultPredicate) {
        return Enumerable.first(this.breadthTraverse(), predicate);
    }

    /**
     * 搜索符合条件的子树(广度优先搜索)
     */
    breadthSubTree(predicate) {
        return new BreadthSubTreeEnumerable(this, predicate);
    }

    /**
     * 深度优先遍历
     */
    depthTraverse() {
        return new DepthEnumerable(this);
    }

    /**
     * 搜索(深度优先搜索)
     */
    depthSearch(predicate = defaultPredicate) {
        return Enumerable.first(this.depthTraverse(), predicate);
    }

    /**
     * 搜索符合条件的子树(深度优先搜索)
     */
    depthSubTree(predicate) {
        return new DepthSubTreeEnumerable(this, predicate);
    }

    /**
     * 多个节点的最小公共祖先
     */
    lowestAncestor(...nodes) {
        let matchCount = nodes.length;
        let isMatch = new Array(matchCount).fill(false);
        let search = current => {
            let index = 0;
            for (let node of nodes) {
                if (!isMatch[index] && ITree.isSameNode(current, node)) {
                    isMatch[index] = true;
                    matchCount--;
                    break;
                }
                index++;
            }
            for (let child of current) {
                let result = search(child);
                if (result) {
                    return result;
                } else if (matchCount === 0) {
                    return current;
                }
            }
            return false;
        };
        let result = search(this);
        if (result) {
            return result.value;
        } else {
            throw new NotAncestorOfException(this, nodes[isMatch.map((match, index) => ({ match, index })).find(({ match }) => !match).index]);
        }
    }
    /**
     * 是否是子节点
     */
    isChildOf(root) {
        return root.isParentOf(this);
    }
    /**
     * 是否是父节点
     */
    isParentOf(node) {
        return Enumerable.any(this, current => ITree.isSameNode(current, node));
    }
    /**
     * 是否是后辈节点
     */
    isDescendantOf(root) {
        return root.isAncestorOf(this);
    }
    /**
     * 是否是祖先节点
     */
    isAncestorOf(node) {
        let search = current => {
            if (ITree.isSameNode(current, node)) {
                return true;
            } else {
                for (let child of current) {
                    if (search(child)) {
                        return true;
                    }
                }
                return false;
            }
        };
        return search(this);
    }

    /**
     * 获取一个节点的父节点
     */
    getParent(node) {
        return this.getParentNode(node).value;
    }
    getParentNode(node) {
        let search = current => {
            if (ITree.isSameNode(current, node)) {
                return true;
            } else {
                for (let child of current) {
                    let res = search(child);
                    if (res === true) {
                        return current;
                    } else if (res) {
                        return res;
                    }
                }
                return false;
            }
        };
        let result = search(this);
        if (result && result !== true) {
            return result;
        } else {
            throw new NotAncestorOfException(this, node);
        }
    }

    /**
     * 同辈节点的操作
     */
    prevAllNodes(node, predicate = defaultPredicate) {
        return new PrevNodesEnumerable(this, node, predicate);
    }
    prevNode(node, predicate = defaultPredicate) {
        return Enumerable.last(this.prevAllNodes(node, predicate));
    }
    nextAllNodes(node, predicate = defaultPredicate) {
        return new NextNodesEnumerable(this, node, predicate);
    }
    nextNode(node, predicate = defaultPredicate) {
        return Enumerable.first(this.nextAllNodes(node, predicate));
    }
    siblingNodes(node, predicate = defaultPredicate) {
        return new SiblingNodesEnumerable(this, node, predicate);
    }

    /**
     * 同辈节点值的操作
     */
    prevAll(node, predicate = defaultPredicate) {
        return new PrevEnumerable(this, node, predicate);
    }
    prev(node, predicate = defaultPredicate) {
        return Enumerable.last(this.prevAll(node, predicate));
    }
    nextAll(node, predicate = defaultPredicate) {
        return new NextEnumerable(this, node, predicate);
    }
    next(node, predicate = defaultPredicate) {
        return Enumerable.first(this.nextAll(node, predicate));
    }
    siblings(node, predicate = defaultPredicate) {
        return new SiblingsEnumerable(this, node, predicate);
    }

    /**
     * 搜索当前节点的路径(深度优先搜索)
     */
    path(root) {
        return root.pathTo(this);
    }
    pathTo(node) {
        return new PathToEnumerable(this, node);
    }
    pathNodes(root) {
        return root.pathNodesTo(this);
    }
    pathNodesTo(node) {
        return new PathNodesToEnumerable(this, node);
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
    depth(predicate = defaultPredicate) {
        predicate = methods.asPredicate(predicate);
        return Enumerable.where(this.children, (element, index) => predicate(element.value, index)).select(child => child.depth(predicate)).maxOrDefault(0) + 1;
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
                if (current.degree() !== 0) {
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
        return new BinaryTree(this);
    }
}

ITree.isSameNode = (current, node, comparer = defaultEqualityComparer) => {
    comparer = methods.asComparer(comparer);
    return current === node || (node instanceof ITree ? comparer(current.value, node.value) : comparer(current.value, node));
};

module.exports = ITree;

const BinaryTree = require('./BinaryTree');
const PathToEnumerable = require('./PathToEnumerable');
const PathNodesToEnumerable = require('./PathNodesToEnumerable');
const BreadthEnumerable = require('./BreadthEnumerable');
const DepthEnumerable = require('./DepthEnumerable');
const BreadthSubTreeEnumerable = require('./BreadthSubTreeEnumerable');
const DepthSubTreeEnumerable = require('./DepthSubTreeEnumerable');
const PrevEnumerable = require('./PrevEnumerable');
const NextEnumerable = require('./NextEnumerable');
const SiblingsEnumerable = require('./SiblingsEnumerable');
const PrevNodesEnumerable = require('./PrevNodesEnumerable');
const NextNodesEnumerable = require('./NextNodesEnumerable');
const SiblingNodesEnumerable = require('./SiblingNodesEnumerable');