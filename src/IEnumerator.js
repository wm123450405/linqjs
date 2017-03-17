'use strict';

const core = require('./core/core');

const NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');

class IEnumerator {
	constructor(enumerable) {
		let iterator;
		let next = false;
		core.defineProperties(this, {
			moveNext() {
				next = iterator.next();
				return !next.done;
			},
			reset() {
				iterator = (enumerable[Symbol.iterator] || enumerable.asEnumerable()[Symbol.iterator])();
				next = false;
			},
			get current() {
				if (next) {
					return next.value;
				} else {
					throw new NeedExecuteBeforeException('moveNext');
				}
			}
		});
		this.reset();
	}
}

module.exports = IEnumerator;