'use strict';

const INode = require('./INode');

class ProbabilityNode extends INode {
    constructor(element, index, probability) {
        super(element, index);
        this.probability = probability;
    }
    set(element, index, probability) {
        this.probability = probability;
        return super.set(element, index);
    }
}

module.exports = ProbabilityNode;