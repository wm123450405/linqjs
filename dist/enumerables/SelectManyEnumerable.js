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
            var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, collectionElement;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            index = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = source[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 37;
                                break;
                            }

                            element = _step.value;
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            _context.prev = 11;
                            _iterator2 = collectionSelector(element, index++)[Symbol.iterator]();

                        case 13:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                _context.next = 20;
                                break;
                            }

                            collectionElement = _step2.value;
                            _context.next = 17;
                            return resultSelector(collectionElement);

                        case 17:
                            _iteratorNormalCompletion2 = true;
                            _context.next = 13;
                            break;

                        case 20:
                            _context.next = 26;
                            break;

                        case 22:
                            _context.prev = 22;
                            _context.t0 = _context['catch'](11);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context.t0;

                        case 26:
                            _context.prev = 26;
                            _context.prev = 27;

                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }

                        case 29:
                            _context.prev = 29;

                            if (!_didIteratorError2) {
                                _context.next = 32;
                                break;
                            }

                            throw _iteratorError2;

                        case 32:
                            return _context.finish(29);

                        case 33:
                            return _context.finish(26);

                        case 34:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 37:
                            _context.next = 43;
                            break;

                        case 39:
                            _context.prev = 39;
                            _context.t1 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t1;

                        case 43:
                            _context.prev = 43;
                            _context.prev = 44;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 46:
                            _context.prev = 46;

                            if (!_didIteratorError) {
                                _context.next = 49;
                                break;
                            }

                            throw _iteratorError;

                        case 49:
                            return _context.finish(46);

                        case 50:
                            return _context.finish(43);

                        case 51:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 39, 43, 51], [11, 22, 26, 34], [27,, 29, 33], [44,, 46, 50]]);
        }));
        return _this;
    }

    return SelectManyEnumerable;
}(IEnumerable);

;

module.exports = SelectManyEnumerable;