'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class TopEnumerable extends IEnumerable {
    constructor(source, count, orderByComparer = defaultComparer) {
        super(source);

        orderByComparer = methods.asComparer(orderByComparer);

        core.defineProperty(this, Symbol.iterator, function* TopIterator() {
            let header = [];
            for (let element of source) {
                if (header.length < count) {
                    if (header.length === 0 || orderByComparer(element, header[0]) > 0) {
                        header.push(element);
                    } else {
                        header.unshift(element);
                    }
                    if (header.length === count) {
                        core.heap(header, -1, orderByComparer);
                        // console.log('start:', header.join('|'));
                    }
                } else {
                    let c;
                    c = orderByComparer(element, header[count - 1]);
                    if (c < 0) {
                        header[count - 1] = element;
                        core.heaping(header, header.length,count - 1, -1, orderByComparer);
                        // console.log('header:', header.map(v => v.toFixed(3)).join('|'), element);
                    }
                }
            }
            header.sort(orderByComparer);
            // console.log('end:', header.map(v => v.toFixed(3)).join('|'));
            yield* header;
        });
        core.defineProperty(this, TopEnumerable.SOURCE, () => source, true);
        core.defineProperty(this, TopEnumerable.COUNT, () => count, true);
    }
    take(count) {
        return new TopEnumerable(this[TopEnumerable.SOURCE], Math.min(this[TopEnumerable.COUNT], count));
    }
}

TopEnumerable.SOURCE = Symbol.for("TopEnumerable.SOURCE");
TopEnumerable.COUNT = Symbol.for("TopEnumerable.COUNT");

module.exports = TopEnumerable;