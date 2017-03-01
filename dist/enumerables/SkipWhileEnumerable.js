'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var defaultPredicate = require('./../methods/defaultPredicate');

var SkipWhileEnumerable = function (_IEnumerable) {
    _inherits(SkipWhileEnumerable, _IEnumerable);

    function SkipWhileEnumerable(source) {
        var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

        _classCallCheck(this, SkipWhileEnumerable);

        var _this = _possibleConstructorReturn(this, (SkipWhileEnumerable.__proto__ || Object.getPrototypeOf(SkipWhileEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var skipping, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            skipping = true, index = 0;
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

                            skipping = skipping && predicate(element, index++);

                            if (skipping) {
                                _context.next = 12;
                                break;
                            }

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
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
        }));
        return _this;
    }

    return SkipWhileEnumerable;
}(IEnumerable);

;

module.exports = SkipWhileEnumerable;