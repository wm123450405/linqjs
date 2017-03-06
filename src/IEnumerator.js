const core = require('./core/core');

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
					throw 'Should execute moveNext() before';
				}
			}
		});
		this.reset();
	}
};

module.exports = IEnumerator;