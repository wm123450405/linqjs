'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var TakeEnumerable = function (_IEnumerable) {
    _inherits(TakeEnumerable, _IEnumerable);

    function TakeEnumerable(source, count) {
        _classCallCheck(this, TakeEnumerable);

        var _this = _possibleConstructorReturn(this, (TakeEnumerable.__proto__ || Object.getPrototypeOf(TakeEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

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
                                _context.next = 18;
                                break;
                            }

                            element = _step.value;

                            if (!(index < count)) {
                                _context.next = 13;
                                break;
                            }

                            _context.next = 11;
                            return element;

                        case 11:
                            _context.next = 14;
                            break;

                        case 13:
                            return _context.abrupt('return');

                        case 14:
                            index++;

                        case 15:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 18:
                            _context.next = 24;
                            break;

                        case 20:
                            _context.prev = 20;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 24:
                            _context.prev = 24;
                            _context.prev = 25;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 27:
                            _context.prev = 27;

                            if (!_didIteratorError) {
                                _context.next = 30;
                                break;
                            }

                            throw _iteratorError;

                        case 30:
                            return _context.finish(27);

                        case 31:
                            return _context.finish(24);

                        case 32:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 20, 24, 32], [25,, 27, 31]]);
        }));
        return _this;
    }

    return TakeEnumerable;
}(IEnumerable);

;

module.exports = TakeEnumerable;