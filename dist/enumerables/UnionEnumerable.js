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

var _defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

var _defaultEqualityComparer2 = _interopRequireDefault(_defaultEqualityComparer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnionEnumerable = function (_IEnumerable) {
    _inherits(UnionEnumerable, _IEnumerable);

    function UnionEnumerable(source, other) {
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaultEqualityComparer2.default;

        _classCallCheck(this, UnionEnumerable);

        var _this = _possibleConstructorReturn(this, (UnionEnumerable.__proto__ || Object.getPrototypeOf(UnionEnumerable)).call(this, source));

        _core2.default.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _element;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            temp = [];
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = source[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 15;
                                break;
                            }

                            element = _step.value;

                            if (_Enumerable2.default.contains(temp, element, comparer)) {
                                _context.next = 12;
                                break;
                            }

                            temp.push(element);
                            _context.next = 12;
                            return element;

                        case 12:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 15:
                            _context.next = 21;
                            break;

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 21:
                            _context.prev = 21;
                            _context.prev = 22;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 24:
                            _context.prev = 24;

                            if (!_didIteratorError) {
                                _context.next = 27;
                                break;
                            }

                            throw _iteratorError;

                        case 27:
                            return _context.finish(24);

                        case 28:
                            return _context.finish(21);

                        case 29:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 32;
                            _iterator2 = other[Symbol.iterator]();

                        case 34:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context.next = 43;
                                break;
                            }

                            _element = _step2.value;

                            if (_Enumerable2.default.contains(temp, _element, comparer)) {
                                _context.next = 40;
                                break;
                            }

                            temp.push(_element);
                            _context.next = 40;
                            return _element;

                        case 40:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 34;
                            break;

                        case 43:
                            _context.next = 49;
                            break;

                        case 45:
                            _context.prev = 45;
                            _context.t1 = _context['catch'](32);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t1;

                        case 49:
                            _context.prev = 49;
                            _context.prev = 50;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 52:
                            _context.prev = 52;

                            if (!_didIteratorError2) {
                                _context.next = 55;
                                break;
                            }

                            throw _iteratorError2;

                        case 55:
                            return _context.finish(52);

                        case 56:
                            return _context.finish(49);

                        case 57:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28], [32, 45, 49, 57], [50,, 52, 56]]);
        }));
        return _this;
    }

    return UnionEnumerable;
}(_IEnumerable3.default);

;

exports.default = UnionEnumerable;