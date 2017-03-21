'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const isInstanceOfBoolean = element => element instanceof Boolean || element === true || element === false;
const isInstanceOfString = element => element instanceof String || core.getType(element) === core.types.String;
const isInstanceOfArray = element => element instanceof Array || core.getType(element) === core.types.Array || Array.isArray && Array.isArray(element);
const isInstanceOfObject = element => element instanceof Object && !(element instanceof RegExp || isInstanceOfArray(element) || isInstanceOfFunction(element));
const isInstanceOfNumber = element => element instanceof Number || core.getType(element) === core.types.Number;
const isInstanceOfFunction = element => element instanceof Function || core.getType(element) === core.types.Function;
const isInstanceOf = type => element => element instanceof type;
const isInstanceOfByTypeName = type => element => core.getType(element).toUpperCase() === type.toUpperCase();

class OfTypeEnumerable extends IEnumerable {
    constructor(source, type) {
        super(source);
        let is = type === Boolean ? isInstanceOfBoolean : type === String ? isInstanceOfString : type === Array ? isInstanceOfArray : type === Number ? isInstanceOfNumber : type === Function ? isInstanceOfFunction : type === Object ? isInstanceOfObject : core.getType(type) === core.types.String ? isInstanceOfByTypeName(type) : isInstanceOf(type);
        core.defineProperty(this, Symbol.iterator, function* OfTypeIterator() {
            for (let element of source) {
                if (is(element)) {
                    yield element;
                }
            }
        });
    }
}

module.exports = OfTypeEnumerable;