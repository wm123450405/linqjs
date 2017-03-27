'use strict';

const IEnumerable = require('./../IEnumerable');

const defaultComparer = require('./../methods/defaultComparer');

const core = require('./../core/core');

const methods = require('./../methods/methods');

class SortEnumerable extends IEnumerable {
	constructor(source, comparer = defaultComparer) {
        super(source);
        comparer = methods.asComparer(comparer);
        if (core.isArray(source) && core.array$sort) {
            return Enumerable.extend(core.array$sort.call(source, comparer));
        } else {
            let iterable = { [Symbol.iterator]:source[Symbol.iterator] };
            core.setProperty(source, Symbol.iterator, function*() {
                yield* [...iterable].sort(comparer);
            });
            return source;
        }
    }
}

module.exports = SortEnumerable;

const Enumerable = require('./../Enumerable');