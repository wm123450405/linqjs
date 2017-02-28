import IEnumerable from './../IEnumerable';

import core from './../core/core';

import Enumerable from './../Enumerable';

import defaultKeySelector from './../methods/defaultKeySelector';
import defaultValueSelector from './../methods/defaultValueSelector';
import defaultEqualityComparer from './../methods/defaultEqualityComparer';

class IMapEnumerable extends IEnumerable {
    constructor() {
        super({});
    };
    toObject(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    };
    toDictionary(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
    };
    toLookup(keySelector = defaultKeySelector, elementSelector = defaultValueSelector, comparer = defaultEqualityComparer) {
        return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
    };
    forEach(action = defaultAction) {
        for (let entry of this) {
            action(entry.value, entry.key);
        }
    }
};

export default IMapEnumerable;