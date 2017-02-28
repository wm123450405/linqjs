'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IOrderedEnumerable2 = require('./IOrderedEnumerable');

var _IOrderedEnumerable3 = _interopRequireDefault(_IOrderedEnumerable2);

var _defaultSelector = require('./../methods/defaultSelector');

var _defaultSelector2 = _interopRequireDefault(_defaultSelector);

var _defaultComparer = require('./../methods/defaultComparer');

var _defaultComparer2 = _interopRequireDefault(_defaultComparer);

var _selectorComparer = require('./../methods/selectorComparer');

var _selectorComparer2 = _interopRequireDefault(_selectorComparer);

var _descendingComparer = require('./../methods/descendingComparer');

var _descendingComparer2 = _interopRequireDefault(_descendingComparer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderByDescendingEnumerable = function (_IOrderedEnumerable) {
    _inherits(OrderByDescendingEnumerable, _IOrderedEnumerable);

    function OrderByDescendingEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultSelector2.default;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultComparer2.default;

        _classCallCheck(this, OrderByDescendingEnumerable);

        return _possibleConstructorReturn(this, (OrderByDescendingEnumerable.__proto__ || Object.getPrototypeOf(OrderByDescendingEnumerable)).call(this, source, (0, _descendingComparer2.default)((0, _selectorComparer2.default)(keySelector, comparer))));
    }

    return OrderByDescendingEnumerable;
}(_IOrderedEnumerable3.default);

;

exports.default = OrderByDescendingEnumerable;