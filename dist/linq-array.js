'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
var Enumerable = require('./linq');

var core = require('./core/core');

module.exports = function () {
	Enumerable.extends(Array.prototype, 'array');

	(function (types, props) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var type = _step.value;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					var _loop = function _loop() {
						var prop = _step2.value;

						var original = type.prototype[prop];
						core.defineProperty(type.prototype, prop, function () {
							return Enumerable.asEnumerable(original.apply(this, arguments));
						});
					};

					for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						_loop();
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	})([Array, Map, Set, WeakMap, WeakSet], ['keys', 'values', 'entries']);
};