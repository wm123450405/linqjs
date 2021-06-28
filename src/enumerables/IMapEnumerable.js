'use strict';

const IEnumerable = require('../IEnumerable');

const methods = require('../methods/methods');

const defaultKeySelector = require('../methods/defaultKeySelector');
const defaultValueSelector = require('../methods/defaultValueSelector');
const defaultSameComparer = require('../methods/defaultSameComparer');
const defaultAction = require('../methods/defaultAction');

class IMapEnumerable extends IEnumerable {
    constructor() {
        super({});
    }
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
    toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        return super.toDictionary(keySelector, elementSelector, comparer);
    }
    toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        return super.toLookup(keySelector, elementSelector, comparer);
    }
    forEach(action = defaultAction, thisArg = undefined) {
        let callback = (element, key) => action.call(thisArg, element, key, this);
        for (let entry of this) {
            callback(entry.value, entry.key);
        }
    }
}

module.exports = IMapEnumerable;