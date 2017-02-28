'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IEnumerable2 = require('./../IEnumerable');

var _IEnumerable3 = _interopRequireDefault(_IEnumerable2);

var _core = require('./../core/core');

var _core2 = _interopRequireDefault(_core);

var _Enumerable = require('./../Enumerable');

var _Enumerable2 = _interopRequireDefault(_Enumerable);

var _defaultSelector = require('./../methods/defaultSelector');

var _defaultSelector2 = _interopRequireDefault(_defaultSelector);

var _defaultComparer = require('./../methods/defaultComparer');

var _defaultComparer2 = _interopRequireDefault(_defaultComparer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = function (_IEnumerable) {
    _inherits(IOrderedEnumerable, _IEnumerable);

    function IOrderedEnumerable(source) {
        var orderByComparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

        _classCallCheck(this, IOrderedEnumerable);

        var _this = _possibleConstructorReturn(this, (IOrderedEnumerable.__proto__ || Object.getPrototypeOf(IOrderedEnumerable)).call(this, source));

        _core2.default.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = source.toArray().sort(orderByComparer)[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            element = _step.value;
                            _context.next = 9;
                            return element;

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        }));
        _core2.default.defineProperties(_this, {
            thenBy: function thenBy() {
                var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

                return _Enumerable2.default.thenBy(this, keySelector, comparer);
            },
            thenByDescending: function thenByDescending() {
                var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultSelector2.default;
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultComparer2.default;

                return _Enumerable2.default.thenByDescending(this, keySelector, comparer);
            }
        });
        _core2.default.defineProperty(_this, IOrderedEnumerable.source, source);
        _core2.default.defineProperty(_this, IOrderedEnumerable.orderByComparer, orderByComparer);
        return _this;
    }

    return IOrderedEnumerable;
}(_IEnumerable3.default);

;
IOrderedEnumerable.source = Symbol('source');
IOrderedEnumerable.orderByComparer = Symbol('orderByComparer');

exports.default = IOrderedEnumerable;