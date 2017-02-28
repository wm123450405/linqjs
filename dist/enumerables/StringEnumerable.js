'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IteratorEnumerable2 = require('./IteratorEnumerable');

var _IteratorEnumerable3 = _interopRequireDefault(_IteratorEnumerable2);

var _core = require('./../core/core');

var _core2 = _interopRequireDefault(_core);

var _defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

var _defaultEqualityComparer2 = _interopRequireDefault(_defaultEqualityComparer);

var _Enumerable = require('./../Enumerable');

var _Enumerable2 = _interopRequireDefault(_Enumerable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StringEnumerable = function (_IteratorEnumerable) {
    _inherits(StringEnumerable, _IteratorEnumerable);

    function StringEnumerable(array) {
        _classCallCheck(this, StringEnumerable);

        var _this = _possibleConstructorReturn(this, (StringEnumerable.__proto__ || Object.getPrototypeOf(StringEnumerable)).call(this, array));

        _core2.default.defineProperties(_this, {
            indexOf: function indexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

                if (comparer === _defaultEqualityComparer2.default) {
                    return _core2.default.string$indexOf.call(array, value, start);
                } else {
                    return _Enumerable2.default.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf: function lastIndexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

                if (comparer === _defaultEqualityComparer2.default) {
                    return _core2.default.string$lastIndexOf.call(array, value, start);
                } else {
                    return _Enumerable2.default.lastIndexOf(this, value, start, comparer);
                }
            }
        });
        return _this;
    }

    return StringEnumerable;
}(_IteratorEnumerable3.default);

;

exports.default = StringEnumerable;