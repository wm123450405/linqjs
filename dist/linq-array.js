'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	_linq2.default.extends(Array.prototype, 'array');

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
						_core2.default.defineProperty(type.prototype, prop, function () {
							return _linq2.default.asEnumerable(original.apply(this, arguments));
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

var _linq = require('./linq');

var _linq2 = _interopRequireDefault(_linq);

var _core = require('./core/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

; /**
   * Created by wm123 on 2017/2/14.
   */