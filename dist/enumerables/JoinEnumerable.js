'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

var JoinEnumerable = function (_IEnumerable) {
    _inherits(JoinEnumerable, _IEnumerable);

    function JoinEnumerable(outer, inner, outerKeySelector, innerKeySelector, resultSelector) {
        var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

        _classCallCheck(this, JoinEnumerable);

        var _this = _possibleConstructorReturn(this, (JoinEnumerable.__proto__ || Object.getPrototypeOf(JoinEnumerable)).call(this, outer));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var innerTemp, outerIndex, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, outerElement, outerKey, innerIndex, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, innerElement, innerKey, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, innerValue;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            innerTemp = [], outerIndex = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = outer[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 73;
                                break;
                            }

                            outerElement = _step.value;
                            outerKey = outerKeySelector(outerElement, outerIndex);

                            if (!(outerIndex == 0)) {
                                _context.next = 42;
                                break;
                            }

                            innerIndex = 0;
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 14;
                            _iterator2 = inner[Symbol.iterator]();

                        case 16:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context.next = 26;
                                break;
                            }

                            innerElement = _step2.value;
                            innerKey = innerKeySelector(innerElement, innerIndex++);

                            innerTemp.push({ key: innerKey, element: innerElement });

                            if (!comparer(outerKey, innerKey)) {
                                _context.next = 23;
                                break;
                            }

                            _context.next = 23;
                            return resultSelector(outerElement, innerElement);

                        case 23:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 16;
                            break;

                        case 26:
                            _context.next = 32;
                            break;

                        case 28:
                            _context.prev = 28;
                            _context.t0 = _context['catch'](14);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t0;

                        case 32:
                            _context.prev = 32;
                            _context.prev = 33;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 35:
                            _context.prev = 35;

                            if (!_didIteratorError2) {
                                _context.next = 38;
                                break;
                            }

                            throw _iteratorError2;

                        case 38:
                            return _context.finish(35);

                        case 39:
                            return _context.finish(32);

                        case 40:
                            _context.next = 69;
                            break;

                        case 42:
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            _context.prev = 45;
                            _iterator3 = innerTemp[Symbol.iterator]();

                        case 47:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                _context.next = 55;
                                break;
                            }

                            innerValue = _step3.value;

                            if (!comparer(outerKey, innerValue.key)) {
                                _context.next = 52;
                                break;
                            }

                            _context.next = 52;
                            return resultSelector(outerElement, innerValue.element);

                        case 52:
                            _iteratorNormalCompletion3 = true;
                            _context.next = 47;
                            break;

                        case 55:
                            _context.next = 61;
                            break;

                        case 57:
                            _context.prev = 57;
                            _context.t1 = _context['catch'](45);
                            _didIteratorError3 = true;
                            _iteratorError3 = _context.t1;

                        case 61:
                            _context.prev = 61;
                            _context.prev = 62;

                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }

                        case 64:
                            _context.prev = 64;

                            if (!_didIteratorError3) {
                                _context.next = 67;
                                break;
                            }

                            throw _iteratorError3;

                        case 67:
                            return _context.finish(64);

                        case 68:
                            return _context.finish(61);

                        case 69:
                            outerIndex++;

                        case 70:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 73:
                            _context.next = 79;
                            break;

                        case 75:
                            _context.prev = 75;
                            _context.t2 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t2;

                        case 79:
                            _context.prev = 79;
                            _context.prev = 80;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 82:
                            _context.prev = 82;

                            if (!_didIteratorError) {
                                _context.next = 85;
                                break;
                            }

                            throw _iteratorError;

                        case 85:
                            return _context.finish(82);

                        case 86:
                            return _context.finish(79);

                        case 87:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 75, 79, 87], [14, 28, 32, 40], [33,, 35, 39], [45, 57, 61, 69], [62,, 64, 68], [80,, 82, 86]]);
        }));
        return _this;
    }

    return JoinEnumerable;
}(IEnumerable);

;

module.exports = JoinEnumerable;