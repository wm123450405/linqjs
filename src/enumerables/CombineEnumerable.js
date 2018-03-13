'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultKeySelector = require('./../methods/defaultKeySelector');
const defaultSelector = require('./../methods/defaultSelector');
const defaultParentSelector = require('./../methods/defaultParentSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

const ICombine = require('./ICombine');

class CombineEnumerable extends IEnumerable {
    constructor(source, parentSelector = defaultParentSelector, keySelector = defaultKeySelector, valueSelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(source);
        parentSelector = methods.asSelector(parentSelector);
        keySelector = methods.asSelector(keySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* CombineIterator() {
            let temp = Enumerable.select(source, element => ({ key: keySelector(element), parent: parentSelector(element), value: valueSelector(element), children: [] })).toArray();
            let result = [];
            let length = temp.length;
            for (let i = 0; i < length; i++) {
                let value = temp[i];
                let hasParent = false;
                for (let j = 0; j < length; j++) {
                    if (i !== j) {
                        let parent = temp[j];
                        if (comparer(parent.key, value.parent)) {
                            parent.children.push(value);
                            hasParent = true;
                            break;
                        }
                    }
                }
                if (!hasParent) {
                    result.push(value);
                }
            }
            let combine = value => new ICombine(value.key, value.parent, value.value, function* () {
                for (let sub of value.children) {
                    yield combine(sub);
                }
            });
            for (let value of result) {
                yield combine(value);
            }
        });
    }
}

module.exports = CombineEnumerable;