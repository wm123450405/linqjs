'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class BottomEnumerable extends IEnumerable {
    constructor(source, count, orderByComparer = defaultComparer) {
        super(source);

        orderByComparer = methods.asComparer(orderByComparer);

        core.defineProperty(this, Symbol.iterator, function* BottomIterator() {
            let header = [], bottom = [];
            const heaping = (array, index, orderByComparer) => {
                //let l = count - 1 - ((count - 1 - index) * 2 + 1);
                //let r = l - 1;
                let l = 2 * index - count;
                let r = l - 1;
                if (r >= 0) {
                    if (orderByComparer(array[l], array[r]) < 0) {
                        if (orderByComparer(array[index], array[r]) < 0) {
                            core.swap(array, index, r);
                            heaping(array, r, orderByComparer);
                        }
                    } else {
                        if (orderByComparer(array[index], array[l]) < 0) {
                            core.swap(array, index, l);
                            heaping(array, l, orderByComparer);
                        }
                    }
                } else if (l >= 0) {
                    if (orderByComparer(array[index], array[l]) < 0) {
                        core.swap(array, index, l);
                    }
                }
            };
            for (let element of source) {
                if (header.length < count) {
                    if (header.length === 0 || orderByComparer(element, header[0]) > 0) {
                        header.push(element);
                    } else {
                        header.unshift(element);
                    }
                    if (header.length === count) {
                        //todo: 优化倒序大顶堆
                        header.sort(orderByComparer);
                        // console.log('start:', header.join('|'));
                    }
                } else {
                    let c;
                    c = orderByComparer(element, header[count - 1]);
                    if (c < 0) {
                        bottom.unshift(header[count - 1]);
                        header[count - 1] = element;
                        heaping(header, count - 1, orderByComparer);
                        // console.log('bottom:', bottom.map(v => v.toFixed(3)).join('|'), element);
                    } else {
                        bottom.push(element);
                    }
                }
            }
            bottom.sort(orderByComparer);
            // console.log('end:', bottom.map(v => v.toFixed(3)).join('|'));
            yield* bottom;
        });
        core.defineProperty(this, BottomEnumerable.SOURCE, () => source, true);
        core.defineProperty(this, BottomEnumerable.COUNT, () => count, true);
    }
    skip(count) {
        return new BottomEnumerable(this[BottomEnumerable.SOURCE], this[BottomEnumerable.COUNT] + count);
    }
}

BottomEnumerable.SOURCE = Symbol.for("BottomEnumerable.SOURCE");
BottomEnumerable.COUNT = Symbol.for("BottomEnumerable.COUNT");

module.exports = BottomEnumerable;