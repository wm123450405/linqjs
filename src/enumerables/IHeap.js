'use strict';

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class IHeap {
    constructor(source, comparer = defaultComparer) {
        if (core.isArray(source) || source instanceof ArrayEnumerable) {
            source = [...source];
        } else {
            source = core.toArray(source);
        }
        comparer = methods.asComparer(comparer);
        core.heap(source, 1, comparer);
        core.defineProperty(this, Symbol.iterator, function* HeapIterator() {
            yield* source;
        });
        core.defineProperty(this, IHeap.SOURCE, () => source, true);
        core.defineProperty(this, IHeap.COMPARER, () => comparer, true);
    }
    asEnumerable() {
        return core.asEnumerable(this);
    }
    push(...elements) {
        let source = this[IHeap.SOURCE];
        let length = source.length;
        for (let element of elements) {
            source.push(element);
            core.upping(source, length, 1, this[IHeap.COMPARER]);
            length++;
        }
        return length;
    }
    pop() {
        let source = this[IHeap.SOURCE];
        let element = source.shift();
        let length = source.length;
        if (length > 1) {
            source.unshift(source.pop());
            core.heaping(source, length, 0, 1, this[IHeap.COMPARER]);
        }
        return element;
    }
    // pops(count) {
    //     return new HeapPopsEnumerable();
    // }
    toArray() {
        return this.asEnumerable().toArray();
    }
}

IHeap.SOURCE = Symbol.for("IHeap.SOURCE");
IHeap.COMPARER = Symbol.for("IHeap.COMPARER");

module.exports = IHeap;

const ArrayEnumerable = require('./ArrayEnumerable');