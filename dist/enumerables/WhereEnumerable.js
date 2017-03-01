'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = require('./../IEnumerable');

var core = require('./../core/core');

var defaultPredicate = require('./../methods/defaultPredicate');

var WhereEnumerable = function (_IEnumerable) {
    _inherits(WhereEnumerable, _IEnumerable);

    function WhereEnumerable(source) {
        var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

        _classCallCheck(this, WhereEnumerable);

        var _this = _possibleConstructorReturn(this, (WhereEnumerable.__proto__ || Object.getPrototypeOf(WhereEnumerable)).call(this, source));

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
                                _context.next = 14;
                                break;
                            }

                            element = _step.value;

                            if (!predicate(element, index++)) {
                                _context.next = 11;
                                break;
                            }

                            _context.next = 11;
                            return element;

                        case 11:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 14:
                            _context.next = 20;
                            break;

                        case 16:
                            _context.prev = 16;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 20:
                            _context.prev = 20;
                            _context.prev = 21;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 23:
                            _context.prev = 23;

                            if (!_didIteratorError) {
                                _context.next = 26;
                                break;
                            }

                            throw _iteratorError;

                        case 26:
                            return _context.finish(23);

                        case 27:
                            return _context.finish(20);

                        case 28:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 16, 20, 28], [21,, 23, 27]]);
        }));
        return _this;
    }

    return WhereEnumerable;
}(IEnumerable);

;

module.exports = WhereEnumerable;