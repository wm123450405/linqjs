'use strict';

const INode = require('./INode');

class ValueNode extends INode {
    constructor(element, index, value) {
        super(element, index);
        this.value = value;
    }
    set(element, index, value) {
        this.value = value;
        return super.set(element, index);
    }
}

module.exports = ValueNode;