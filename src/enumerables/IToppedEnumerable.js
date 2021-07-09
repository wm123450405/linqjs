'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class IToppedEnumerable extends IEnumerable {
    constructor(source, count, reverse, orderByComparer = defaultComparer) {
        super(source);
        orderByComparer = methods.asComparer(orderByComparer);
        core.defineProperty(this, Symbol.iterator, function* ToppedIterator() {
            let header = [];
            const swap = (array, index, other) => {
                let temp = array[index];
                array[index] = array[other];
                array[other] = temp;
            };
            const heaping = (array, index, orderByComparer) => {
                //let l = count - 1 - ((count - 1 - index) * 2 + 1);
                //let r = l - 1;
                let l = 2 * index - count;
                let r = l - 1;
                if (r >= 0) {
                    if (orderByComparer(array[l], array[r]) < 0) {
                        if (orderByComparer(array[index], array[r]) < 0) {
                            swap(array, index, r);
                            heaping(array, r, orderByComparer);
                        }
                    } else {
                        if (orderByComparer(array[index], array[l]) < 0) {
                            swap(array, index, l);
                            heaping(array, l, orderByComparer);
                        }
                    }
                } else if (l >= 0) {
                    if (orderByComparer(array[index], array[l]) < 0) {
                        swap(array, index, l);
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
                        header[count - 1] = element;
                        heaping(header, count - 1, orderByComparer);
                        // console.log('header:', header.map(v => v.toFixed(3)).join('|'), element);
                    }
                }
            }
            header.sort(orderByComparer);
            // console.log('end:', header.map(v => v.toFixed(3)).join('|'));
            if (reverse) {
                for (let i = header.length - 1; i >= 0; i--) {
                    yield header[i];
                }
            } else {
                yield* header;
            }
        });
    }
}

module.exports = IToppedEnumerable;