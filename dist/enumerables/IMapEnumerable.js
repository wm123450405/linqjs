'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var Enumerable = require('./../Enumerable');

var defaultKeySelector = require('./../methods/defaultKeySelector');
var defaultValueSelector = require('./../methods/defaultValueSelector');
var defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

var IMapEnumerable = function (_IEnumerable) {
    _inherits(IMapEnumerable, _IEnumerable);

    function IMapEnumerable() {
        _classCallCheck(this, IMapEnumerable);

        return _possibleConstructorReturn(this, (IMapEnumerable.__proto__ || Object.getPrototypeOf(IMapEnumerable)).call(this, {}));
    }

    _createClass(IMapEnumerable, [{
        key: 'toObject',
        value: function toObject() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return this.toDictionary(keySelector, elementSelector, comparer).toObject();
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'toLookup',
        value: function toLookup() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'forEach',
        value: function forEach() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    action(entry.value, entry.key);
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
        }
    }]);

    return IMapEnumerable;
}(IEnumerable);

;

module.exports = IMapEnumerable;