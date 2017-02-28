import IEnumerable from './../IEnumerable';

import core from './../core/core';

const isInstanceofString = (element) => element instanceof String || typeof element === 'string';
const isInstanceofArray = (element) => element instanceof Array;
const isInstanceofObject = (element) => element instanceof Object;
const isInstanceofNumber = (element) => element instanceof Number || typeof element === 'number';
const isInstanceofFunction = (element) => element instanceof Function || typeof element === 'function';
const isInstanceof = (type) => (element) => element instanceof type;

class OfTypeEnumerable extends IEnumerable {
    constructor(source, type) {
        super(source);
        let is = type === String ? isInstanceofString : type === Array ? isInstanceofArray : type === Object ? isInstanceofObject : type === Number ? isInstanceofNumber : type === Function ? isInstanceofFunction : isInstanceof(type);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let element of source) {
                if (is(element)) {
                    yield element;
                }
            }
        });
    };
};

export default OfTypeEnumerable;