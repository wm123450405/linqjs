'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultKeySelector = require('./../methods/defaultKeySelector');
const defaultValueSelector = require('./../methods/defaultValueSelector');
const defaultSameComparer = require('./../methods/defaultSameComparer');
const defaultAction = require('./../methods/defaultAction');

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
        return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
    }
    toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultSameComparer) {
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        comparer = methods.asSameComparer(comparer);
        return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
    }
    forEach(action = defaultAction) {
        for (let entry of this) {
            action(entry.value, entry.key);
        }
    }
}

module.exports = IMapEnumerable;