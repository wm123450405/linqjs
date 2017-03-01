'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var defaultSelector = require('./../methods/defaultSelector');

var SelectManyEnumerable = function (_IEnumerable) {
    _inherits(SelectManyEnumerable, _IEnumerable);

    function SelectManyEnumerable(source) {
        var collectionSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

        _classCallCheck(this, SelectManyEnumerable);

        var _this = _possibleConstructorReturn(this, (SelectManyEnumerable.__proto__ || Object.getPrototypeOf(SelectManyEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, collectionElement;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = source[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 36;
                                break;
                            }

                            element = _step.value;
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 10;
                            _iterator2 = collectionSelector(element)[Symbol.iterator]();

                        case 12:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context.next = 19;
                                break;
                            }

                            collectionElement = _step2.value;
                            _context.next = 16;
                            return resultSelector(collectionElement);

                        case 16:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 12;
                            break;

                        case 19:
                            _context.next = 25;
                            break;

                        case 21:
                            _context.prev = 21;
                            _context.t0 = _context['catch'](10);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t0;

                        case 25:
                            _context.prev = 25;
                            _context.prev = 26;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 28:
                            _context.prev = 28;

                            if (!_didIteratorError2) {
                                _context.next = 31;
                                break;
                            }

                            throw _iteratorError2;

                        case 31:
                            return _context.finish(28);

                        case 32:
                            return _context.finish(25);

                        case 33:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 36:
                            _context.next = 42;
                            break;

                        case 38:
                            _context.prev = 38;
                            _context.t1 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t1;

                        case 42:
                            _context.prev = 42;
                            _context.prev = 43;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 45:
                            _context.prev = 45;

                            if (!_didIteratorError) {
                                _context.next = 48;
                                break;
                            }

                            throw _iteratorError;

                        case 48:
                            return _context.finish(45);

                        case 49:
                            return _context.finish(42);

                        case 50:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
        }));
        return _this;
    }

    return SelectManyEnumerable;
}(IEnumerable);

;

module.exports = SelectManyEnumerable;