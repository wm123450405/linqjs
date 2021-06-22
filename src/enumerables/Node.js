'use strict';

class Node {
    constructor(element, index, options = { }) {
        this.element = element;
        this.index = index;
        this.options = options;
    }
}

module.exports = Node;