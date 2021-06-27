'use strict';

const INode = require('./INode');

class SingleNode extends INode {
    constructor(element, index) {
        super(element, index);
    }
}

module.exports = SingleNode;