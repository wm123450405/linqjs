'use strict';

const BinaryTree = require('./BinaryTree');

const NoSuchElementsException = require('./../core/exceptions/NoSuchElementsException');

class PostOrderTree extends BinaryTree {
    constructor(source) {
        let tree = { };
        let array = source.toArray();
        if (array.length) {
            let nodes = [ tree ];
            for (let i = 1; i < array.length; i += 2) {
                let node = nodes.shift();
                if (array.length - i >= 2) {
                    let left = { };
                    let right = { };
                    node.children = [ left, right ];
                    nodes.push(left, right);
                } else {
                    let left = { };
                    node.children = [ left ];
                    nodes.push(left);
                }
            }
            let index = 0;
            let fill = node => {
                if (node.children && node.children.length >= 1) {
                    fill(node.children[0]);
                }
                if (node.children && node.children.length === 2) {
                    fill(node.children[1]);
                }
                node.value = array[index++];
            };
            fill(tree);
        } else {
            throw new NoSuchElementsException();
        }
        super(tree);
    }
}

module.exports = PostOrderTree;