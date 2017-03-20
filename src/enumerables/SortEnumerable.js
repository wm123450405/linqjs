'use strict';

const IEnumerable = require('./../IEnumerable');

const defaultComparer = require('./../methods/defaultComparer');

const core = require('./../core/core');

class SortEnumerable extends IEnumerable {
	constructor(source, comparer = defaultComparer) {
        super(source);
        if (core.isArray(source) && core.array$sort) {
            return Enumerable.extends(core.array$sort.call(source, comparer));
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