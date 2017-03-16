'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

const defaultKeySelector = require('./../methods/defaultKeySelector');
const defaultValueSelector = require('./../methods/defaultValueSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultAction = require('./../methods/defaultAction');

class IMapEnumerable extends IEnumerable {
    constructor() {
        super({});
    }
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
    toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
    }
    toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
    }
    forEach(action = defaultAction) {
        for (let entry of this) {
            action(entry.value, entry.key);
        }
    }
}

module.exports = IMapEnumerable;