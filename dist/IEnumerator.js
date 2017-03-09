'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var core = require('./core/core');

var IEnumerator = function IEnumerator(enumerable) {
	_classCallCheck(this, IEnumerator);

	var iterator = void 0;
	var next = false;
	core.defineProperties(this, {
		moveNext: function moveNext() {
			next = iterator.next();
			return !next.done;
		},
		reset: function reset() {
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
};

;

module.exports = IEnumerator;