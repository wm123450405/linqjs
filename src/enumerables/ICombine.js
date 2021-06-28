'use strict';

const ITree = require('./ITree');

const core = require('../core/core');

const defaultValueSetter = require('../methods/defaultValueSetter');
const defaultChildrenSetter = require('../methods/defaultChildrenSetter');

class ICombine extends ITree {
    constructor(key, parent, value, generator) {
        super(value, generator);
        core.defineProperty(this, 'parent', () => parent, true, true);
        core.defineProperty(this, 'key', () => key, true, true);
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ICombineIterator() {
            return iterator();
        });
    }
    toObject() {
        let obj = super.toObject();
        if (typeof this.key !== 'undefined' && this.key !== null) obj.key = this.key;
        if (typeof this.parent !== 'undefined' && this.parent !== null) obj.parent = this.parent;
        return obj;
    }
    toValue(childrenSetter = defaultChildrenSetter, valueSetter = defaultValueSetter) {
        let obj = super.toObject(childrenSetter, valueSetter);
        if (typeof this.key !== 'undefined' && this.key !== null) obj.key = this.key;
        if (typeof this.parent !== 'undefined' && this.parent !== null) obj.parent = this.parent;
        return obj;
    }
}

module.exports = ICombine;