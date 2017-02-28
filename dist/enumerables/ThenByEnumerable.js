'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IOrderedEnumerable2 = require('./IOrderedEnumerable');

var _IOrderedEnumerable3 = _interopRequireDefault(_IOrderedEnumerable2);

var _thenByComparer = require('./../methods/thenByComparer');

var _thenByComparer2 = _interopRequireDefault(_thenByComparer);

var _selectorComparer = require('./../methods/selectorComparer');

var _selectorComparer2 = _interopRequireDefault(_selectorComparer);

var _defaultSelector = require('./../methods/defaultSelector');

var _defaultSelector2 = _interopRequireDefault(_defaultSelector);

var _defaultComparer = require('./../methods/defaultComparer');

var _defaultComparer2 = _interopRequireDefault(_defaultComparer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThenByEnumerable = function (_IOrderedEnumerable) {
    _inherits(ThenByEnumerable, _IOrderedEnumerable);

    function ThenByEnumerable(orderedSource) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultComparer2.default;

        _classCallCheck(this, ThenByEnumerable);

        return _possibleConstructorReturn(this, (ThenByEnumerable.__proto__ || Object.getPrototypeOf(ThenByEnumerable)).call(this, orderedSource[_IOrderedEnumerable3.default.source], (0, _thenByComparer2.default)(orderedSource[_IOrderedEnumerable3.default.orderByComparer], (0, _selectorComparer2.default)(keySelector, comparer))));
    }

    return ThenByEnumerable;
}(_IOrderedEnumerable3.default);

;

exports.default = ThenByEnumerable;