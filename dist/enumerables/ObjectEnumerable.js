'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMapEnumerable = require('./IMapEnumerable');

var core = require('./../core/core');

var Entry = require('./Entry');

var ObjectEnumerable = function (_IMapEnumerable) {
    _inherits(ObjectEnumerable, _IMapEnumerable);

    function ObjectEnumerable(source) {
        _classCallCheck(this, ObjectEnumerable);

        var _this = _possibleConstructorReturn(this, (ObjectEnumerable.__proto__ || Object.getPrototypeOf(ObjectEnumerable)).call(this));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = Object.keys(source)[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            key = _step.value;
                            _context.next = 9;
                            return new Entry(key, source[key]);

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
        return _this;
    }

    return ObjectEnumerable;
}(IMapEnumerable);

;

module.exports = ObjectEnumerable;