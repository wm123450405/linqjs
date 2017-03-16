'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const isInstanceofBoolean = element => element instanceof Boolean || element === true || element === false;
const isInstanceofString = element => element instanceof String || typeof element === 'string';
const isInstanceofArray = element => element instanceof Array || Array.isArray && Array.isArray(element);
const isInstanceofObject = element => element instanceof Object && !(element instanceof RegExp || isInstanceofArray(element) || isInstanceofFunction(element));
const isInstanceofNumber = element => element instanceof Number || typeof element === 'number';
const isInstanceofFunction = element => element instanceof Function || typeof element === 'function';
const isInstanceof = type => element => element instanceof type;
const isInstanceofByTypeName = type => element => core.getType(element).toUpperCase() === type.toUpperCase();

class OfTypeEnumerable extends IEnumerable {
    constructor(source, type) {
        super(source);
        let is = type === Boolean ? isInstanceofBoolean : type === String ? isInstanceofString : type === Array ? isInstanceofArray : type === Number ? isInstanceofNumber : type === Function ? isInstanceofFunction : type === Object ? isInstanceofObject : typeof type === 'string' ? isInstanceofByTypeName(type) : isInstanceof(type);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let element of source) {
                if (is(element)) {
                    yield element;
                }
            }
        });
    }
}

module.exports = OfTypeEnumerable;