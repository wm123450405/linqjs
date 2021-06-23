'use strict';

class INode {
    constructor(element, index) {
        this.element = element;
        this.index = index;
    }
    set(element, index) {
        this.element = element;
        this.index = index;
        return this;
    }
}

module.exports = INode;