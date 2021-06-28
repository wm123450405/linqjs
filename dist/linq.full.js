(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Enumerable = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],4:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./isNativeReflectConstruct.js":14,"./setPrototypeOf.js":20}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],8:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
var superPropBase = require("./superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./superPropBase.js":22}],10:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":20}],12:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],14:[function(require,module,exports){
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],15:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],16:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],17:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],18:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],19:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":4,"@babel/runtime/helpers/typeof":24}],20:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],21:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":16,"./nonIterableRest.js":17,"./unsupportedIterableToArray.js":25}],22:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./getPrototypeOf.js":10}],23:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithoutHoles.js":3,"./iterableToArray.js":15,"./nonIterableSpread.js":18,"./unsupportedIterableToArray.js":25}],24:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],25:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],26:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeFunction = require("./isNativeFunction.js");

var construct = require("./construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./construct.js":6,"./getPrototypeOf.js":10,"./isNativeFunction.js":13,"./setPrototypeOf.js":20}],27:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":29}],28:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],29:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],30:[function(require,module,exports){
'use strict';

var _require = require('./core/core'),
    asEnumerable = _require.asEnumerable,
    defineProperty = _require.defineProperty;

var defaultPredicate = require('./methods/defaultPredicate');

var defaultFalsePredicate = require('./methods/defaultFalsePredicate');

var defaultSelector = require('./methods/defaultSelector');

var defaultSameComparer = require('./methods/defaultSameComparer');

var defaultEqualityComparer = require('./methods/defaultEqualityComparer');

var defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');

var defaultComparer = require('./methods/defaultComparer');

var defaultResultSelector = require('./methods/defaultResultSelector');

var defaultJoinSelector = require('./methods/defaultJoinSelector');

var defaultKeySelector = require('./methods/defaultKeySelector');

var defaultValueSelector = require('./methods/defaultValueSelector');

var defaultParentSelector = require('./methods/defaultParentSelector');

var defaultIndexSelector = require('./methods/defaultIndexSelector');

var defaultChildrenSelector = require('./methods/defaultChildrenSelector');

var defaultChildrenSetter = require('./methods/defaultChildrenSetter');

var defaultValueSetter = require('./methods/defaultValueSetter');

var defaultAction = require('./methods/defaultAction');

var arrayComparer = require('./methods/arrayComparer');

var predicateComparer = require('./methods/predicateComparer');

var propertySetter = require('./methods/propertySetter');

var propertySelector = require('./methods/propertySelector');

var regexpPredicate = require('./methods/regexpPredicate');

var defaultExistsPredicate = require('./methods/defaultExistsPredicate');

var notPredicate = require('./methods/notPredicate');

var equalityPredicate = require('./methods/equalityPredicate');

var selectorPredicate = require('./methods/selectorPredicate');

var greaterComparer = require('./methods/greaterComparer');

var lessComparer = require('./methods/lessComparer');

var ignoreCaseComparer = require('./methods/ignoreCaseComparer');

var NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');

var OutOfRangeException = require('./core/exceptions/OutOfRangeException');

var TooManyElementsException = require('./core/exceptions/TooManyElementsException');

var KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');

var NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');

var PluginRepeatException = require('./core/exceptions/PluginRepeatException');

var PropertyExpressionInvalidException = require('./core/exceptions/PropertyExpressionInvalidException');

var InvalidFunctionException = require('./core/exceptions/InvalidFunctionException');

var NotAncestorOfException = require('./core/exceptions/NotAncestorOfException');

var IComparable = require('./core/IComparable');

var IEquatable = require('./core/IEquatable');

var Enumerable = function Enumerable(source, childrenSelector) {
  var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
  return asEnumerable(source, childrenSelector, valueSelector);
};

Enumerable.getEnumerator = function (enumerable) {
  return asEnumerable(enumerable).getEnumerator();
};

Enumerable.getIterator = function (enumerable) {
  return asEnumerable(enumerable).getIterator();
};

Enumerable.repeat = function (element) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new RepeatEnumerable(element, count);
};

Enumerable.range = function (start, count) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return new RangeEnumerable(start, count, step);
};

Enumerable.between = function (start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return new BetweenEnumerable(start, end, step);
};

Enumerable.generate = function (generate) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new GenerateEnumerable(generate, count);
};

Enumerable.empty = function () {
  return new EmptyEnumerable();
};

Enumerable.asEnumerable = function (object, childrenSelector) {
  var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
  return asEnumerable(object, childrenSelector, valueSelector);
};

Enumerable.from = function (object, childrenSelector) {
  var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
  return asEnumerable(object, childrenSelector, valueSelector);
};

Enumerable.toArray = function (source) {
  return asEnumerable(source).toArray();
};

Enumerable.toDictionary = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSameComparer;
  return asEnumerable(source).toDictionary(keySelector, elementSelector, comparer);
};

Enumerable.toLookup = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSameComparer;
  return asEnumerable(source).toLookup(keySelector, elementSelector, comparer);
};

Enumerable.toPreOrder = function (source) {
  return asEnumerable(source).toPreOrder();
};

Enumerable.toInOrder = function (source) {
  return asEnumerable(source).toInOrder();
};

Enumerable.toPostOrder = function (source) {
  return asEnumerable(source).toPostOrder();
};

Enumerable.where = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).where(predicate);
};

Enumerable.select = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  return asEnumerable(source).select(selector);
};

Enumerable.distinct = function (source) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
  return asEnumerable(source).distinct(comparer);
};

Enumerable.except = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).except(other, comparer);
};

Enumerable.union = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).union(other, comparer);
};

Enumerable.intersect = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).intersect(other, comparer);
};

Enumerable.ofType = function (source, type) {
  return asEnumerable(source).ofType(type);
};

Enumerable.skip = function (source, count) {
  return asEnumerable(source).skip(count);
};

Enumerable.skipWhile = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).skipWhile(predicate);
};

Enumerable.skipSame = function (source) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
  return asEnumerable(source).skipSame(comparer);
};

Enumerable.skipProportion = function (source) {
  var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return asEnumerable(source).skipProportion(proportion);
};

Enumerable.take = function (source, count) {
  return asEnumerable(source).take(count);
};

Enumerable.takeWhile = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).takeWhile(predicate);
};

Enumerable.takeSame = function (source) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
  return asEnumerable(source).takeSame(comparer);
};

Enumerable.takeProportion = function (source) {
  var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return asEnumerable(source).takeProportion(proportion);
};

Enumerable.orderBy = Enumerable.sorted = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  return asEnumerable(source).orderBy(keySelector, comparer);
};

Enumerable.orderByDescending = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  return asEnumerable(source).orderByDescending(keySelector, comparer);
};

Enumerable.thenBy = function (orderedSource) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

  if (orderedSource instanceof IOrderedEnumerable) {
    return orderedSource.thenBy(keySelector, comparer);
  } else {
    return this.orderBy(orderedSource, keySelector, comparer);
  }
};

Enumerable.thenByDescending = function (orderedSource) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

  if (orderedSource instanceof IOrderedEnumerable) {
    return orderedSource.thenByDescending(keySelector, comparer);
  } else {
    return this.orderByDescending(orderedSource, keySelector, comparer);
  }
};

Enumerable.groupBy = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultResultSelector;
  var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
  return asEnumerable(source).groupBy(keySelector, elementSelector, resultSelector, comparer);
};

Enumerable.selectMany = Enumerable.flatMap = Enumerable.flatten = function (source) {
  var collectionSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
  return asEnumerable(source).selectMany(collectionSelector, resultSelector);
};

Enumerable.join = function (outer, inner) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
  var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
  var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

  if (arguments.length <= 2) {
    return asEnumerable(outer).join(inner);
  } else {
    return asEnumerable(outer).join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  }
};

Enumerable.innerJoin = Enumerable.joining = function (outer, inner) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
  var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
  var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
  return asEnumerable(outer).innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};

Enumerable.leftJoin = function (outer, inner) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
  var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
  var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
  return asEnumerable(outer).leftJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};

Enumerable.rightJoin = function (outer, inner) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
  var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
  var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
  return asEnumerable(outer).rightJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};

Enumerable.groupJoin = function (outer, inner) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
  var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
  var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
  return asEnumerable(outer).groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
};

Enumerable.reverse = function (source) {
  return asEnumerable(source).reverse();
};

Enumerable.zip = function (source, other) {
  var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
  return asEnumerable(source).zip(other, resultSelector);
};

Enumerable.every = function (source, callback, thisArg) {
  return asEnumerable(source).every(callback, thisArg);
};

Enumerable.find = function (source, callback, thisArg) {
  return asEnumerable(source).find(callback, thisArg);
};

Enumerable.includes = function (source, element) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return asEnumerable(source).includes(element, start);
};

Enumerable.map = function (source, callback, thisArg) {
  return asEnumerable(source).map(callback, thisArg);
};

Enumerable.filter = function (source, callback, thisArg) {
  return asEnumerable(source).filter(callback, thisArg);
};

Enumerable.concat = function (source) {
  var _asEnumerable;

  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return (_asEnumerable = asEnumerable(source)).concat.apply(_asEnumerable, others);
};

Enumerable.pop = function (source) {
  return asEnumerable(source).pop();
};

Enumerable.push = function (source) {
  var _asEnumerable2;

  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return (_asEnumerable2 = asEnumerable(source)).push.apply(_asEnumerable2, values);
};

Enumerable.shift = function (source) {
  return asEnumerable(source).shift();
};

Enumerable.unshift = function (source) {
  var _asEnumerable3;

  for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    values[_key3 - 1] = arguments[_key3];
  }

  return (_asEnumerable3 = asEnumerable(source)).unshift.apply(_asEnumerable3, values);
};

Enumerable.reduce = function (source, callback, initialValue) {
  return asEnumerable(source).reduce(callback, initialValue);
};

Enumerable.reduceRight = function (source, callback, initialValue) {
  return asEnumerable(source).reduceRight(callback, initialValue);
};

Enumerable.some = function (source, callback, thisArg) {
  return asEnumerable(source).some(callback, thisArg);
};

Enumerable.slice = function (source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  return asEnumerable(source).slice(start, end);
};

Enumerable.splice = function (source, start, count) {
  var _asEnumerable4;

  for (var _len4 = arguments.length, values = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    values[_key4 - 3] = arguments[_key4];
  }

  return (_asEnumerable4 = asEnumerable(source)).splice.apply(_asEnumerable4, [start, count].concat(values));
};

Enumerable.fill = function (source, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
  return asEnumerable(source).fill(value, start, end);
};

Enumerable.sort = function (source) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
  return asEnumerable(source).sort(comparer);
};

Enumerable.copyWithin = function (source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
  return asEnumerable(source).copyWithin(target, start, end);
};

Enumerable.defaultIfEmpty = function (source) {
  var _asEnumerable5;

  for (var _len5 = arguments.length, defaultValues = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    defaultValues[_key5 - 1] = arguments[_key5];
  }

  return (_asEnumerable5 = asEnumerable(source)).defaultIfEmpty.apply(_asEnumerable5, defaultValues);
};

Enumerable.all = Enumerable.allMatch = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).all(predicate);
};

Enumerable.any = Enumerable.anyMatch = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).any(predicate);
};

Enumerable.isEmpty = function (source) {
  return asEnumerable(source).isEmpty();
};

Enumerable.sequenceEqual = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).sequenceEqual(other, comparer);
};

Enumerable.first = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).first(predicate);
};

Enumerable.firstOrDefault = function (source, defaultValue) {
  var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
  return asEnumerable(source).firstOrDefault(defaultValue, predicate);
};

Enumerable.last = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).last(predicate);
};

Enumerable.lastOrDefault = function (source, defaultValue) {
  var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
  return asEnumerable(source).lastOrDefault(defaultValue, predicate);
};

Enumerable.single = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).single(predicate);
};

Enumerable.singleOrDefault = function (source, defaultValue) {
  var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
  return asEnumerable(source).singleOrDefault(defaultValue, predicate);
};

Enumerable.count = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).count(predicate);
};

Enumerable.proportion = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  return asEnumerable(source).proportion(predicate);
};

Enumerable.aggregate = function (source, seed, func) {
  var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  return asEnumerable(source).aggregate(seed, func, resultSelector);
};

Enumerable.sum = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  return asEnumerable(source).sum(selector);
};

Enumerable.product = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  return asEnumerable(source).product(selector);
};

Enumerable.max = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  return asEnumerable(source).max(selector, comparer);
};

Enumerable.maxIndex = function (source, defaultValue) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultComparer;
  return asEnumerable(source).maxIndex(selector, comparer);
};

Enumerable.maxOrDefault = function (source, defaultValue) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultComparer;
  return asEnumerable(source).maxOrDefault(defaultValue, selector, comparer);
};

Enumerable.min = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  return asEnumerable(source).min(selector, comparer);
};

Enumerable.minIndex = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  return asEnumerable(source).minIndex(selector, comparer);
};

Enumerable.minOrDefault = function (source, defaultValue) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultComparer;
  return asEnumerable(source).minOrDefault(defaultValue, selector, comparer);
};

Enumerable.average = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  return asEnumerable(source).average(selector);
};

Enumerable.contains = function (source, value) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).contains(value, comparer);
};

Enumerable.elementAt = function (source, index) {
  return asEnumerable(source).elementAt(index);
};

Enumerable.elementAtOrDefault = function (source, index, defaultValue) {
  return asEnumerable(source).elementAtOrDefault(index, defaultValue);
};

Enumerable.indexOf = function (source, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultStrictEqualityComparer;
  return asEnumerable(source).indexOf(value, start, comparer);
};

Enumerable.findIndex = function (source, callback, thisArg) {
  return asEnumerable(source).findIndex(callback, thisArg);
};

Enumerable.findLast = function (source, callback, thisArg) {
  return asEnumerable(source).findLast(callback, thisArg);
};

Enumerable.lastIndexOf = function (source, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultStrictEqualityComparer;
  return asEnumerable(source).lastIndexOf(value, start, comparer);
};

Enumerable.findLastIndex = function (source, callback, thisArg) {
  return asEnumerable(source).findLastIndex(callback, thisArg);
};

Enumerable.forEach = function (source) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;
  var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return asEnumerable(source).forEach(action, thisArg);
};

Enumerable.each = function (source) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;
  return asEnumerable(source).each(action);
};

Enumerable.indices = function (source, indices) {
  return asEnumerable(source).indices(indices);
};

Enumerable.permutation = function (source, count) {
  var repeatable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return asEnumerable(source).permutation(count, repeatable);
};

Enumerable.combination = function (source, count) {
  var repeatable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return asEnumerable(source).combination(count, repeatable);
};

Enumerable.chunk = function (source, chunk) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return asEnumerable(source).chunk(chunk, offset);
};

Enumerable.split = function (source) {
  var splitPredicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFalsePredicate;
  return asEnumerable(source).split(splitPredicate);
};

Enumerable.nearSplit = function (source) {
  var splitPredicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFalsePredicate;
  return asEnumerable(source).nearSplit(splitPredicate);
};

Enumerable.leftPad = function (source, length, value) {
  return asEnumerable(source).leftPad(length, value);
};

Enumerable.rightPad = function (source, length, value) {
  return asEnumerable(source).rightPad(length, value);
};

Enumerable.rand = function (source) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return asEnumerable(source).rand(count);
};

Enumerable.random = function (source) {
  return asEnumerable(source).random();
};

Enumerable.randomOrDefault = function (source, defaultValue) {
  return asEnumerable(source).randomOrDefault(defaultValue);
};

Enumerable.randomProbability = function (source, probabilitySelector) {
  return asEnumerable(source).randomProbability(probabilitySelector);
};

Enumerable.randomIndexProbability = function (source, probabilitySelector) {
  return asEnumerable(source).randomIndexProbability(probabilitySelector);
};

Enumerable.randomProbabilityOrDefault = function (source, defaultValue, probabilitySelector) {
  return asEnumerable(source).randomProbabilityOrDefault(defaultValue, probabilitySelector);
};

Enumerable.wipe = function (source) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return asEnumerable(source).wipe(predicate, count);
};

Enumerable.nearBy = function (source) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
  var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultResultSelector;
  var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
  return asEnumerable(source).nearBy(keySelector, elementSelector, resultSelector, comparer);
};

Enumerable.combine = function (source) {
  var parentSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParentSelector;
  var keySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultKeySelector;
  var valueSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
  var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
  return asEnumerable(source).combine(parentSelector, keySelector, valueSelector, comparer);
};

Enumerable.separate = function (source) {
  var childrenSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildrenSelector;
  var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
  return asEnumerable(source).separate(childrenSelector, valueSelector);
};

Enumerable.isSub = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).isSub(other, comparer);
};

Enumerable.isSuper = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).isSuper(other, comparer);
};

Enumerable.symmetric = function (source, other) {
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).symmetric(other, comparer);
};

Enumerable.conflict = function (source) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  return asEnumerable(source).conflict(selector, comparer);
};

defineProperty(Enumerable, 'comparers', function () {
  return {
    get default() {
      return defaultComparer;
    },

    get equality() {
      return defaultEqualityComparer;
    },

    get same() {
      return defaultSameComparer;
    },

    get strict() {
      return defaultStrictEqualityComparer;
    },

    array: function array(_array) {
      var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
      return arrayComparer(_array, last, comparer);
    },
    predicate: function predicate(predicateArray) {
      var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return predicateComparer(predicateArray, last);
    },
    greater: function greater(greaterThen) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return greaterComparer(greaterThen, comparer);
    },
    less: function less(lessThen) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return lessComparer(lessThen, comparer);
    },
    ignoreCase: function ignoreCase() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      return ignoreCaseComparer(selector);
    }
  };
}, true, true);
defineProperty(Enumerable, 'setters', function () {
  return {
    get children() {
      return defaultChildrenSetter;
    },

    get value() {
      return defaultValueSetter;
    },

    property: function property(_property) {
      var ignoreInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return propertySetter(_property, ignoreInvalid);
    }
  };
}, true, true);
defineProperty(Enumerable, 'selectors', function () {
  return {
    get default() {
      return defaultSelector;
    },

    get key() {
      return defaultKeySelector;
    },

    get value() {
      return defaultValueSelector;
    },

    get children() {
      return defaultChildrenSelector;
    },

    get parent() {
      return defaultParentSelector;
    },

    get result() {
      return defaultResultSelector;
    },

    get join() {
      return defaultJoinSelector;
    },

    get index() {
      return defaultIndexSelector;
    },

    property: function property(_property2) {
      var ignoreInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return propertySelector(_property2, ignoreInvalid);
    }
  };
}, true, true);
defineProperty(Enumerable, 'actions', function () {
  return {
    get default() {
      return defaultAction;
    }

  };
}, true, true);
defineProperty(Enumerable, 'predicates', function () {
  return {
    get default() {
      return defaultPredicate;
    },

    get exists() {
      return defaultExistsPredicate;
    },

    selector: function selector(_selector) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultExistsPredicate;
      return selectorPredicate(_selector, predicate);
    },
    not: function not() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultExistsPredicate;
      return notPredicate(predicate);
    },
    equality: function equality(value) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return equalityPredicate(value, comparer);
    },
    strict: function strict(value) {
      return equalityPredicate(value, defaultStrictEqualityComparer);
    },
    same: function same(value) {
      return equalityPredicate(value, defaultSameComparer);
    },
    regexp: function regexp(_regexp) {
      var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      return regexpPredicate(_regexp, keySelector);
    }
  };
}, true, true);
defineProperty(Enumerable, 'exceptions', function () {
  return {
    get NoSuchElementsException() {
      return NoSuchElementsException;
    },

    get OutOfRangeException() {
      return OutOfRangeException;
    },

    get TooManyElementsException() {
      return TooManyElementsException;
    },

    get KeysForMultiElementsException() {
      return KeysForMultiElementsException;
    },

    get NeedExecuteBeforeException() {
      return NeedExecuteBeforeException;
    },

    get PropertyExpressionInvalidException() {
      return PropertyExpressionInvalidException;
    },

    get InvalidFunctionException() {
      return InvalidFunctionException;
    },

    get PluginRepeatException() {
      return PluginRepeatException;
    },

    get NotAncestorOfException() {
      return NotAncestorOfException;
    }

  };
}, true, true);
defineProperty(Enumerable, 'IComparable', function () {
  return IComparable;
}, true, true);
defineProperty(Enumerable, 'IEquatable', function () {
  return IEquatable;
}, true, true);
module.exports = Enumerable;

var RepeatEnumerable = require('./enumerables/RepeatEnumerable');

var RangeEnumerable = require('./enumerables/RangeEnumerable');

var EmptyEnumerable = require('./enumerables/EmptyEnumerable');

var IOrderedEnumerable = require('./enumerables/IOrderedEnumerable');

var BetweenEnumerable = require('./enumerables/BetweenEnumerable');

var GenerateEnumerable = require('./enumerables/GenerateEnumerable');

},{"./core/IComparable":33,"./core/IEquatable":34,"./core/core":35,"./core/exceptions/InvalidFunctionException":37,"./core/exceptions/KeysForMultiElementsException":38,"./core/exceptions/NeedExecuteBeforeException":39,"./core/exceptions/NoSuchElementsException":40,"./core/exceptions/NotAncestorOfException":41,"./core/exceptions/OutOfRangeException":42,"./core/exceptions/PluginRepeatException":43,"./core/exceptions/PropertyExpressionInvalidException":44,"./core/exceptions/TooManyElementsException":45,"./enumerables/BetweenEnumerable":47,"./enumerables/EmptyEnumerable":62,"./enumerables/GenerateEnumerable":66,"./enumerables/IOrderedEnumerable":75,"./enumerables/RangeEnumerable":109,"./enumerables/RepeatEnumerable":110,"./methods/arrayComparer":148,"./methods/defaultAction":149,"./methods/defaultChildrenSelector":150,"./methods/defaultChildrenSetter":151,"./methods/defaultComparer":152,"./methods/defaultEqualityComparer":153,"./methods/defaultExistsPredicate":154,"./methods/defaultFalsePredicate":155,"./methods/defaultIndexSelector":156,"./methods/defaultJoinSelector":157,"./methods/defaultKeySelector":158,"./methods/defaultParentSelector":159,"./methods/defaultPredicate":160,"./methods/defaultResultSelector":161,"./methods/defaultSameComparer":162,"./methods/defaultSelector":163,"./methods/defaultStrictEqualityComparer":164,"./methods/defaultValueSelector":165,"./methods/defaultValueSetter":166,"./methods/equalityPredicate":168,"./methods/greaterComparer":169,"./methods/ignoreCaseComparer":170,"./methods/lessComparer":171,"./methods/notPredicate":173,"./methods/predicateComparer":174,"./methods/propertySelector":176,"./methods/propertySetter":177,"./methods/regexpPredicate":178,"./methods/selectorPredicate":180}],31:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var core = require('./core/core');

var methods = require('./methods/methods');

var defaultPredicate = require('./methods/defaultPredicate');

var defaultFalsePredicate = require('./methods/defaultFalsePredicate');

var defaultSelector = require('./methods/defaultSelector');

var defaultSameComparer = require('./methods/defaultSameComparer');

var defaultEqualityComparer = require('./methods/defaultEqualityComparer');

var defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');

var defaultComparer = require('./methods/defaultComparer');

var defaultResultSelector = require('./methods/defaultResultSelector');

var defaultJoinSelector = require('./methods/defaultJoinSelector');

var defaultKeySelector = require('./methods/defaultKeySelector');

var defaultValueSelector = require('./methods/defaultValueSelector');

var defaultParentSelector = require('./methods/defaultParentSelector');

var defaultChildrenSelector = require('./methods/defaultChildrenSelector');

var defaultAction = require('./methods/defaultAction');

var NoSuchElementsException = require('./core/exceptions/NoSuchElementsException');

var OutOfRangeException = require('./core/exceptions/OutOfRangeException');

var TooManyElementsException = require('./core/exceptions/TooManyElementsException');

var KeysForMultiElementsException = require('./core/exceptions/KeysForMultiElementsException');

var SingleNode = require('./enumerables/SingleNode');

var ValueNode = require('./enumerables/ValueNode');

var ProbabilityNode = require('./enumerables/ProbabilityNode');

var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);
var string = 'string';
var array = 'array';
var enumerable = 'enumerable';
var object = 'object';

var firstNode = function firstNode(enumerable) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  var index = 0;
  predicate = methods.asPredicate(predicate);

  var _iterator = _createForOfIteratorHelper(enumerable),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;

      if (predicate(element, index)) {
        return new SingleNode(element, index);
      }

      index++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var lastNode = function lastNode(enumerable) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  var last,
      index = 0;
  predicate = methods.asPredicate(predicate);

  var _iterator2 = _createForOfIteratorHelper(enumerable),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;

      if (predicate(element, index)) {
        if (last) {
          last.set(element, index);
        } else {
          last = new SingleNode(element, index);
        }
      }

      index++;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return last;
};

var singleNode = function singleNode(enumerable) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
  var single,
      index = 0;
  predicate = methods.asPredicate(predicate);

  var _iterator3 = _createForOfIteratorHelper(enumerable),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var element = _step3.value;

      if (predicate(element, index)) {
        if (single) {
          throw new TooManyElementsException();
        } else {
          single = new SingleNode(element, index);
        }

        index++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return single;
};

var maxNode = function maxNode(enumerable) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  selector = methods.asSelector(selector);
  comparer = methods.asComparer(comparer);
  var iterator = enumerable.getIterator();
  var next = iterator.next();

  if (!next.done) {
    var index = 0,
        value,
        element;
    var max = new ValueNode(next.value, index, selector(next.value, index));

    while (!(next = iterator.next()).done) {
      index++;
      element = next.value;
      value = selector(element, index);

      if (comparer(max.value, value) <= 0) {
        max.set(element, index, value);
      }
    }

    return max;
  }
};

var minNode = function minNode(enumerable) {
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
  selector = methods.asSelector(selector);
  comparer = methods.asComparer(comparer);
  var iterator = enumerable.getIterator();
  var next = iterator.next();

  if (!next.done) {
    var index = 0,
        value,
        element;
    var min = new ValueNode(next.value, index, selector(next.value, index));

    while (!(next = iterator.next()).done) {
      index++;
      element = next.value;
      value = selector(element, index);

      if (comparer(min.value, value) >= 0) {
        min.set(element, index, value);
      }
    }

    return min;
  }
};

var randomNodeProbability = function randomNodeProbability(enumerable, probabilitySelector) {
  var array = [],
      index = 0,
      sum = 0,
      probability = 0;
  probabilitySelector = methods.asSelector(probabilitySelector);

  var _iterator4 = _createForOfIteratorHelper(enumerable),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var element = _step4.value;
      probability = probabilitySelector(array, index);

      if (probability > 0) {
        sum += probability;
        array.push(new ProbabilityNode(element, index, probability));
      }

      index++;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (array.length > 0) {
    var result = Math.random() * sum;

    var _iterator5 = _createForOfIteratorHelper(array),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var node = _step5.value;
        sum -= node.probability;

        if (sum <= result) {
          return node;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
};

var IEnumerable = /*#__PURE__*/function (_Array) {
  (0, _inherits2.default)(IEnumerable, _Array);

  var _super = _createSuper(IEnumerable);

  function IEnumerable(source) {
    var _this;

    (0, _classCallCheck2.default)(this, IEnumerable);
    _this = _super.call(this);
    var typeName = core.getType(source);
    var type = source instanceof IEnumerable ? enumerable : typeName === core.types.String ? string : typeName === core.types.Array || typeName.endsWith(core.types.Iterator) ? array : object;
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.toStringTag, 'IEnumerable');
    core.defineProperties((0, _assertThisInitialized2.default)(_this), {
      getProtoType: function getProtoType() {
        return type === enumerable ? source.getProtoType() : type;
      },
      toString: function toString() {
        return type === string ? this.join('') : type === array ? '[' + this.join(',') + ']' : type === enumerable ? source.toString.call(this) : '[' + this.join(',') + ']';
      },
      toProto: function toProto() {
        return this.getProtoType() === string ? this.join('') : this.getProtoType() === array ? this.toArray() : this.toObject();
      }
    });

    if (hasProxy) {
      return (0, _possibleConstructorReturn2.default)(_this, new Proxy((0, _assertThisInitialized2.default)(_this), {
        get: function get(target, prop) {
          if ((0, _typeof2.default)(prop) !== 'symbol' && !isNaN(prop) && core.isInteger(prop) && prop >= 0 && !(prop in target)) {
            return target.elementAtOrDefault(prop);
          } else if (prop === 'length' || prop === 'size') {
            return target.count();
          } else {
            return target[prop];
          }
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
          if ((0, _typeof2.default)(prop) !== 'symbol' && !isNaN(prop) && core.isInteger(prop) && prop >= 0 && !(prop in target)) {
            return {
              enumerable: true,
              configurable: true,
              get: function get() {
                return target.elementAtOrDefault(prop);
              }
            };
          } else if (prop === 'length' || prop === 'size') {
            var desc = Object.getOwnPropertyDescriptor(target, 'length');
            desc.value = target.count();
            return desc;
          } else {
            return Object.getOwnPropertyDescriptor(target, prop);
          }
        },
        ownKeys: function ownKeys(target) {
          return target.select(function (e, index) {
            return index.toString();
          }).concat(Reflect.ownKeys(target));
        }
      }));
    }

    return _this;
  }

  (0, _createClass2.default)(IEnumerable, [{
    key: "length",
    get: function get() {
      return this.count();
    }
  }, {
    key: "size",
    get: function get() {
      return this.count();
    }
  }, {
    key: "getEnumerator",
    value: function getEnumerator() {
      return new IEnumerator(this);
    }
  }, {
    key: "getIterator",
    value: function getIterator() {
      return this[Symbol.iterator]();
    }
  }, {
    key: "getIterable",
    value: function getIterable() {
      return (0, _defineProperty2.default)({}, Symbol.iterator, this[Symbol.iterator]);
    }
  }, {
    key: "where",
    value: function where() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return new WhereEnumerable(this, predicate);
    }
  }, {
    key: "select",
    value: function select() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      return new SelectEnumerable(this, selector);
    }
  }, {
    key: "elementAt",
    value: function elementAt(index) {
      if (index >= 0) {
        var _iterator6 = _createForOfIteratorHelper(this),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var element = _step6.value;

            if (index-- === 0) {
              return element;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      throw new OutOfRangeException(index);
    }
  }, {
    key: "elementAtOrDefault",
    value: function elementAtOrDefault(index, defaultValue) {
      if (index >= 0) {
        var _iterator7 = _createForOfIteratorHelper(this),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var element = _step7.value;

            if (index-- === 0) {
              return element;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }

      return defaultValue;
    }
  }, {
    key: "asEnumerable",
    value: function asEnumerable(childrenSelector) {
      var valueSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;

      if (core.isUndefined(childrenSelector)) {
        return this;
      } else {
        return core.asEnumerable(this, childrenSelector, valueSelector);
      }
    }
  }, {
    key: "concat",
    value: function concat() {
      for (var _len = arguments.length, others = new Array(_len), _key = 0; _key < _len; _key++) {
        others[_key] = arguments[_key];
      }

      // return new ConcatEnumerable(this, ...others);
      return new (Function.prototype.bind.apply(ConcatEnumerable, core.a$concat.call([null], [this], others)))();
    }
  }, {
    key: "distinct",
    value: function distinct() {
      var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;
      return new DistinctEnumerable(this, comparer);
    }
  }, {
    key: "except",
    value: function except(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return new ExceptEnumerable(this, other, comparer);
    }
  }, {
    key: "union",
    value: function union(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return new UnionEnumerable(this, other, comparer);
    }
  }, {
    key: "intersect",
    value: function intersect(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return new IntersectEnumerable(this, other, comparer);
    }
  }, {
    key: "ofType",
    value: function ofType(type) {
      return new OfTypeEnumerable(this, type);
    }
  }, {
    key: "skip",
    value: function skip(count) {
      return new SkipEnumerable(this, count);
    }
  }, {
    key: "skipWhile",
    value: function skipWhile() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return new SkipWhileEnumerable(this, predicate);
    }
  }, {
    key: "skipSame",
    value: function skipSame() {
      var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSameComparer;
      return new SkipSameEnumerable(this, comparer);
    }
  }, {
    key: "skipProportion",
    value: function skipProportion() {
      var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new SkipProportionEnumerable(this, proportion);
    }
  }, {
    key: "take",
    value: function take(count) {
      return new TakeEnumerable(this, count);
    }
  }, {
    key: "takeWhile",
    value: function takeWhile() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return new TakeWhileEnumerable(this, predicate);
    }
  }, {
    key: "takeSame",
    value: function takeSame() {
      var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSameComparer;
      return new TakeSameEnumerable(this, comparer);
    }
  }, {
    key: "takeProportion",
    value: function takeProportion() {
      var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new TakeProportionEnumerable(this, proportion);
    }
  }, {
    key: "sorted",
    value: function sorted() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      return this.orderBy(keySelector, comparer);
    }
  }, {
    key: "orderBy",
    value: function orderBy() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      return new OrderByEnumerable(this, keySelector, comparer);
    }
  }, {
    key: "orderByDescending",
    value: function orderByDescending() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      return new OrderByDescendingEnumerable(this, keySelector, comparer);
    }
  }, {
    key: "groupBy",
    value: function groupBy() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
      var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
      return new GroupedEnumerable(this, keySelector, elementSelector, resultSelector, comparer);
    }
  }, {
    key: "selectMany",
    value: function selectMany() {
      var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
      return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
  }, {
    key: "flatMap",
    value: function flatMap() {
      var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
      return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
      return new SelectManyEnumerable(this, collectionSelector, resultSelector);
    }
  }, {
    key: "join",
    value: function join(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

      if (arguments.length <= 1) {
        if (core.a$join) {
          return core.a$join.call(this.toArray(), inner);
        } else {
          inner = inner || '';
          var result = '',
              first = true;

          var _iterator8 = _createForOfIteratorHelper(this),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var element = _step8.value;

              if (first) {
                result += element;
                first = false;
              } else {
                result += inner + element;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          return result;
        }
      } else {
        return this.innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
      }
    }
  }, {
    key: "joining",
    value: function joining(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
      return this.innerJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  }, {
    key: "innerJoin",
    value: function innerJoin(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
      return new JoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  }, {
    key: "leftJoin",
    value: function leftJoin(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
      return new LeftJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  }, {
    key: "rightJoin",
    value: function rightJoin(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
      return new RightJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  }, {
    key: "groupJoin",
    value: function groupJoin(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
      return new GroupJoinEnumerable(this, core.asEnumerable(inner), resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  }, {
    key: "defaultIfEmpty",
    value: function defaultIfEmpty() {
      for (var _len2 = arguments.length, defaultValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        defaultValues[_key2] = arguments[_key2];
      }

      //todo: 优化
      return this.isEmpty() ? core.asEnumerable(defaultValues) : this;
    }
  }, {
    key: "all",
    value: function all() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var index = 0;
      predicate = methods.asPredicate(predicate);

      var _iterator9 = _createForOfIteratorHelper(this),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var element = _step9.value;

          if (!predicate(element, index++)) {
            return false;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return true;
    }
  }, {
    key: "allMatch",
    value: function allMatch() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return this.all(this, predicate);
    }
  }, {
    key: "any",
    value: function any() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var index = 0;
      predicate = methods.asPredicate(predicate);

      var _iterator10 = _createForOfIteratorHelper(this),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var element = _step10.value;

          if (predicate(element, index++)) {
            return true;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return false;
    }
  }, {
    key: "anyMatch",
    value: function anyMatch() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return this.any(this, predicate);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.any();
    }
  }, {
    key: "sequenceEqual",
    value: function sequenceEqual(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      other = core.asEnumerable(other);
      comparer = methods.asEqualityComparer(comparer);
      var sourceIterator = this.getIterator();
      var otherIterator = other.getIterator();
      var sourceElement, otherElement;

      while (!((sourceElement = sourceIterator.next()).done & (otherElement = otherIterator.next()).done)) {
        if (sourceElement.done !== otherElement.done) {
          return false;
        } else if (!comparer(sourceElement.value, otherElement.value)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "first",
    value: function first() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var node = firstNode(this, predicate);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "firstOrDefault",
    value: function firstOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var node = firstNode(this, predicate);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.element;
      }
    }
  }, {
    key: "last",
    value: function last() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var node = lastNode(this, predicate);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "lastOrDefault",
    value: function lastOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var node = lastNode(this, predicate);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.element;
      }
    }
  }, {
    key: "single",
    value: function single() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var node = singleNode(this, predicate);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "singleOrDefault",
    value: function singleOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var node = singleNode(this, predicate);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.element;
      }
    }
  }, {
    key: "count",
    value: function count() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var count = 0,
          index = 0;
      predicate = methods.asPredicate(predicate);

      var _iterator11 = _createForOfIteratorHelper(this),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var element = _step11.value;

          if (predicate(element, index++)) {
            count++;
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return count;
    }
  }, {
    key: "sum",
    value: function sum() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var sum = 0,
          index = 0;
      selector = methods.asSelector(selector);

      var _iterator12 = _createForOfIteratorHelper(this),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var element = _step12.value;
          sum += parseFloat(selector(element, index++));
          if (isNaN(sum) || !isFinite(sum)) return sum;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return sum;
    }
  }, {
    key: "product",
    value: function product() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var product = 1,
          index = 0;
      selector = methods.asSelector(selector);

      var _iterator13 = _createForOfIteratorHelper(this),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var element = _step13.value;
          product *= parseFloat(selector(element, index++));
          if (isNaN(product) || !isFinite(product)) return product;
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return index === 0 ? NaN : product;
    }
  }, {
    key: "max",
    value: function max() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      var node = maxNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "maxIndex",
    value: function maxIndex() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      var node = maxNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        return -1;
      } else {
        return node.index;
      }
    }
  }, {
    key: "maxOrDefault",
    value: function maxOrDefault(defaultValue) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
      var node = maxNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.element;
      }
    }
  }, {
    key: "min",
    value: function min() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      var node = minNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "minIndex",
    value: function minIndex() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      var node = minNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        return -1;
      } else {
        return node.index;
      }
    }
  }, {
    key: "minOrDefault",
    value: function minOrDefault(defaultValue) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
      var node = minNode(this, selector, comparer);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.element;
      }
    }
  }, {
    key: "average",
    value: function average() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var sum = 0,
          count = 0,
          index = 0;
      selector = methods.asSelector(selector);

      var _iterator14 = _createForOfIteratorHelper(this),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var element = _step14.value;
          sum += parseFloat(selector(element, index++));
          if (isNaN(sum) || !isFinite(sum)) return sum;
          count++;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      if (count !== 0) {
        return sum / count;
      } else {
        throw new NoSuchElementsException();
      }
    }
  }, {
    key: "aggregate",
    value: function aggregate(seed, func) {
      var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var index = 0;
      resultSelector = methods.asSelector(resultSelector);

      var _iterator15 = _createForOfIteratorHelper(this),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var element = _step15.value;
          seed = func(seed, element, index++);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return resultSelector(seed);
    }
  }, {
    key: "contains",
    value: function contains(value) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      comparer = methods.asEqualityComparer(comparer);

      var _iterator16 = _createForOfIteratorHelper(this),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var element = _step16.value;

          if (comparer(element, value)) {
            return true;
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return false;
    }
  }, {
    key: "indexOf",
    value: function indexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;
      var index = 0;
      comparer = methods.asStrictEqualityComparer(comparer);

      var _iterator17 = _createForOfIteratorHelper(this),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var element = _step17.value;

          if (index >= start && comparer(element, value)) {
            return index;
          }

          index++;
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return -1;
    }
  }, {
    key: "findIndex",
    value: function findIndex(predicate, thisArg) {
      var _this2 = this;

      var index = 0;
      predicate = methods.asPredicate(predicate);

      var callback = function callback(element, index) {
        return predicate.call(thisArg, element, index, _this2);
      };

      var _iterator18 = _createForOfIteratorHelper(this),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var element = _step18.value;

          if (callback(element, index)) {
            return index;
          }

          index++;
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      return -1;
    }
  }, {
    key: "lastIndexOf",
    value: function lastIndexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;
      var array = this.toArray();
      comparer = methods.asStrictEqualityComparer(comparer);

      if (start < 0) {
        start = array.length + start;
      }

      for (var index = Math.min(start, array.length - 1); index >= 0; index--) {
        if (comparer(array[index], value)) {
          return index;
        }
      }

      return -1;
    }
  }, {
    key: "findLast",
    value: function findLast(callback, thisArg) {
      var _this3 = this;

      return this.lastOrDefault(undefined, function (element, index) {
        return callback.call(thisArg, element, index, _this3);
      });
    }
  }, {
    key: "findLastIndex",
    value: function findLastIndex(predicate, thisArg) {
      var _this4 = this;

      var array = this.toArray();
      predicate = methods.asPredicate(predicate);

      var callback = function callback(element, index) {
        return predicate.call(thisArg, element, index, _this4);
      };

      for (var index = array.length - 1; index >= 0; index--) {
        var element = array[index];

        if (callback(element, index)) {
          return index;
        }
      }

      return -1;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return new ReverseEnumerable(this);
    }
  }, {
    key: "zip",
    value: function zip(other) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
      return new ZipEnumerable(this, other, resultSelector);
    }
  }, {
    key: "slice",
    value: function slice() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      return new SliceEnumerable(this, start, end);
    }
  }, {
    key: "every",
    value: function every(callback, thisArg) {
      var _this5 = this;

      return this.all(function (element, index) {
        return callback.call(thisArg, element, index, _this5);
      });
    }
  }, {
    key: "find",
    value: function find(callback, thisArg) {
      var _this6 = this;

      return this.firstOrDefault(undefined, function (element, index) {
        return callback.call(thisArg, element, index, _this6);
      });
    }
  }, {
    key: "includes",
    value: function includes(element) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.skip(start).contains(element);
    }
  }, {
    key: "map",
    value: function map(callback, thisArg) {
      var _this7 = this;

      return this.select(function (element, index) {
        return callback.call(thisArg, element, index, _this7);
      });
    }
  }, {
    key: "filter",
    value: function filter(callback, thisArg) {
      var _this8 = this;

      return this.where(function (element, index) {
        return callback.call(thisArg, element, index, _this8);
      });
    }
  }, {
    key: "pop",
    value: function pop() {
      var iterable = this.toArray();
      core.setProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var len, index;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                len = iterable.length - 1;
                index = 0;

              case 2:
                if (!(index < len)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return iterable[index];

              case 5:
                index++;
                _context.next = 2;
                break;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return iterable[iterable.length - 1];
    }
  }, {
    key: "push",
    value: function push() {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      var iterable = this.toArray();
      core.setProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.delegateYield(iterable, "t0", 1);

              case 1:
                return _context2.delegateYield(values, "t1", 2);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return iterable.length + values.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      var iterable = (0, _defineProperty2.default)({}, Symbol.iterator, this[Symbol.iterator]);
      core.setProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var index, _iterator19, _step19, element;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                index = 0;
                _iterator19 = _createForOfIteratorHelper(iterable);
                _context3.prev = 2;

                _iterator19.s();

              case 4:
                if ((_step19 = _iterator19.n()).done) {
                  _context3.next = 12;
                  break;
                }

                element = _step19.value;

                if (!(index > 0)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 9;
                return element;

              case 9:
                index++;

              case 10:
                _context3.next = 4;
                break;

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](2);

                _iterator19.e(_context3.t0);

              case 17:
                _context3.prev = 17;

                _iterator19.f();

                return _context3.finish(17);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 14, 17, 20]]);
      }));
      return this.firstOrDefault(iterable);
    }
  }, {
    key: "unshift",
    value: function unshift() {
      for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        values[_key4] = arguments[_key4];
      }

      var iterable = this.toArray();
      core.setProperty(this, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.delegateYield(values, "t0", 1);

              case 1:
                return _context4.delegateYield(iterable, "t1", 2);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return values.length + iterable.length;
    }
  }, {
    key: "reduce",
    value: function reduce(callback, initialValue) {
      var _this9 = this;

      return this.aggregate(initialValue, function (seed, element, index) {
        return callback(seed, element, index, _this9);
      });
    }
  }, {
    key: "reduceRight",
    value: function reduceRight(callback, initialValue) {
      var _this10 = this;

      return this.reverse().aggregate(initialValue, function (seed, element, index) {
        return callback(seed, element, index, _this10);
      });
    }
  }, {
    key: "some",
    value: function some(callback, thisArg) {
      var _this11 = this;

      return this.any(function (element, index) {
        return callback.call(thisArg, element, index, _this11);
      });
    }
  }, {
    key: "splice",
    value: function splice(start, count) {
      for (var _len5 = arguments.length, values = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        values[_key5 - 2] = arguments[_key5];
      }

      // return new SpliceEnumerable(this, start, count, ...values);
      return new (Function.prototype.bind.apply(SpliceEnumerable, core.a$concat.call([null], [this, start, count], values)))();
    }
  }, {
    key: "fill",
    value: function fill(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
      return new FillEnumerable(this, value, start, end);
    }
  }, {
    key: "sort",
    value: function sort() {
      var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultComparer;
      return new SortEnumerable(this, comparer);
    }
  }, {
    key: "copyWithin",
    value: function copyWithin() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
      return new CopyWithinEnumerable(this, target, start, end);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return core.toArray(this);
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
  }, {
    key: "toDictionary",
    value: function toDictionary() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      var dictionary = new Dictionary(),
          index = 0;
      keySelector = methods.asSelector(keySelector);
      elementSelector = methods.asSelector(elementSelector);
      comparer = methods.asSameComparer(comparer);

      var _iterator20 = _createForOfIteratorHelper(this),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var element = _step20.value;
          var key = keySelector(element, index);

          if (dictionary.has(key, comparer)) {
            throw new KeysForMultiElementsException(key);
          } else {
            dictionary.set(key, elementSelector(element, index), comparer);
          }

          index++;
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }

      return dictionary;
    }
  }, {
    key: "toLookup",
    value: function toLookup() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      var lookup = new Lookup(),
          index = 0;
      keySelector = methods.asSelector(keySelector);
      elementSelector = methods.asSelector(elementSelector);
      comparer = methods.asSameComparer(comparer);

      var _iterator21 = _createForOfIteratorHelper(this),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var element = _step21.value;
          var key = keySelector(element, index);

          if (lookup.has(key, comparer)) {
            lookup.get(key, comparer).push(elementSelector(element, index));
          } else {
            lookup.set(key, [elementSelector(element, index)], comparer);
          }

          index++;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      return lookup;
    }
  }, {
    key: "toPreOrder",
    value: function toPreOrder() {
      return new PreOrderTree(this);
    }
  }, {
    key: "toInOrder",
    value: function toInOrder() {
      return new InOrderTree(this);
    }
  }, {
    key: "toPostOrder",
    value: function toPostOrder() {
      return new PostOrderTree(this);
    }
  }, {
    key: "forEach",
    value: function forEach() {
      var _this12 = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var index = 0;

      var callback = function callback(element, index) {
        return action.call(thisArg, element, index, _this12);
      };

      var _iterator22 = _createForOfIteratorHelper(this),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var element = _step22.value;
          callback(element, index++);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
    }
  }, {
    key: "each",
    value: function each() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
      return new EachEnumerable(this, action);
    }
  }, {
    key: "indices",
    value: function indices(_indices) {
      return new IndicesEnumerable(this, core.asEnumerable(_indices));
    }
  }, {
    key: "permutation",
    value: function permutation(count) {
      var repeatable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (repeatable) {
        return new PermutationRepeatableEnumerable(this, count);
      } else {
        return new PermutationEnumerable(this, count);
      }
    }
  }, {
    key: "combination",
    value: function combination(count) {
      var repeatable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (repeatable) {
        return new CombinationRepeatableEnumerable(this, count);
      } else {
        return new CombinationEnumerable(this, count);
      }
    }
  }, {
    key: "chunk",
    value: function chunk(_chunk) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new ChunkEnumerable(this, _chunk, offset);
    }
  }, {
    key: "split",
    value: function split() {
      var splitPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFalsePredicate;
      return new SplitEnumerable(this, splitPredicate);
    }
  }, {
    key: "nearSplit",
    value: function nearSplit() {
      var splitPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFalsePredicate;
      return new NearSplitEnumerable(this, splitPredicate);
    }
  }, {
    key: "leftPad",
    value: function leftPad(length, value) {
      return new LeftPadEnumerable(this, length, value);
    }
  }, {
    key: "rightPad",
    value: function rightPad(length, value) {
      return new RightPadEnumerable(this, length, value);
    }
  }, {
    key: "rand",
    value: function rand() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new RandEnumerable(this, count);
    }
  }, {
    key: "random",
    value: function random() {
      var array = this.toArray();

      if (array.length) {
        return array[Math.floor(Math.random() * array.length)];
      } else {
        throw new NoSuchElementsException();
      }
    }
  }, {
    key: "randomOrDefault",
    value: function randomOrDefault(defaultValue) {
      var array = this.toArray();

      if (array.length) {
        return array[Math.floor(Math.random() * array.length)];
      } else {
        return defaultValue;
      }
    }
  }, {
    key: "randomProbability",
    value: function randomProbability(probabilitySelector) {
      var node = randomNodeProbability(this, probabilitySelector);

      if (core.isUndefined(node)) {
        throw new NoSuchElementsException();
      } else {
        return node.element;
      }
    }
  }, {
    key: "randomIndexProbability",
    value: function randomIndexProbability(probabilitySelector) {
      var node = randomNodeProbability(this, probabilitySelector);

      if (core.isUndefined(node)) {
        return -1;
      } else {
        return node.index;
      }
    }
  }, {
    key: "randomProbabilityOrDefault",
    value: function randomProbabilityOrDefault(defaultValue, probabilitySelector) {
      var node = randomNodeProbability(this, probabilitySelector);

      if (core.isUndefined(node)) {
        return defaultValue;
      } else {
        return node.index;
      }
    }
  }, {
    key: "wipe",
    value: function wipe() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new WipeEnumerable(this, predicate, count);
    }
  }, {
    key: "nearBy",
    value: function nearBy() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
      var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
      var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
      return new NearGroupedEnumerable(this, keySelector, elementSelector, resultSelector, comparer);
    }
  }, {
    key: "combine",
    value: function combine() {
      var parentSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultParentSelector;
      var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeySelector;
      var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
      return new CombineEnumerable(this, parentSelector, keySelector, valueSelector, comparer);
    }
  }, {
    key: "separate",
    value: function separate() {
      var childrenSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultChildrenSelector;
      var valueSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
      return new SeparateEnumerable(this, childrenSelector, valueSelector);
    }
  }, {
    key: "isSub",
    value: function isSub(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      other = core.asEnumerable(other);

      var _iterator23 = _createForOfIteratorHelper(this),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var element = _step23.value;

          if (!other.contains(element, comparer)) {
            return false;
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }

      return true;
    }
  }, {
    key: "isSuper",
    value: function isSuper(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return core.asEnumerable(other).isSub(this, comparer);
    }
  }, {
    key: "symmetric",
    value: function symmetric(other) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      return new SymmetricEnumerable(this, core.asEnumerable(other), comparer);
    }
  }, {
    key: "conflict",
    value: function conflict() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
      var temp = [];
      var index = 0;
      selector = methods.asSelector(selector);
      comparer = methods.asEqualityComparer(comparer);

      var _iterator24 = _createForOfIteratorHelper(this),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var element = _step24.value;
          var key = selector(element, index);

          var _iterator25 = _createForOfIteratorHelper(temp),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var other = _step25.value;

              if (comparer(key, other)) {
                return true;
              }
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          temp.push(key);
          index++;
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }

      return false;
    }
  }, {
    key: "proportion",
    value: function proportion() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      if (predicate === defaultPredicate) return 1;
      var count = 0,
          selected = 0,
          index = 0;
      predicate = methods.asPredicate(predicate);

      var _iterator26 = _createForOfIteratorHelper(this),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var element = _step26.value;

          if (predicate(element, index++)) {
            selected++;
          }

          count++;
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }

      return count === 0 ? 1 : selected / count;
    }
  }]);
  return IEnumerable;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Array));

module.exports = IEnumerable;

var IEnumerator = require('./IEnumerator');

var WhereEnumerable = require('./enumerables/WhereEnumerable');

var SelectEnumerable = require('./enumerables/SelectEnumerable');

var ConcatEnumerable = require('./enumerables/ConcatEnumerable');

var DistinctEnumerable = require('./enumerables/DistinctEnumerable');

var ExceptEnumerable = require('./enumerables/ExceptEnumerable');

var UnionEnumerable = require('./enumerables/UnionEnumerable');

var IntersectEnumerable = require('./enumerables/IntersectEnumerable');

var OfTypeEnumerable = require('./enumerables/OfTypeEnumerable');

var SkipEnumerable = require('./enumerables/SkipEnumerable');

var SkipWhileEnumerable = require('./enumerables/SkipWhileEnumerable');

var SkipSameEnumerable = require('./enumerables/SkipSameEnumerable');

var SkipProportionEnumerable = require('./enumerables/SkipProportionEnumerable');

var TakeEnumerable = require('./enumerables/TakeEnumerable');

var TakeWhileEnumerable = require('./enumerables/TakeWhileEnumerable');

var TakeSameEnumerable = require('./enumerables/TakeSameEnumerable');

var TakeProportionEnumerable = require('./enumerables/TakeProportionEnumerable');

var OrderByEnumerable = require('./enumerables/OrderByEnumerable');

var OrderByDescendingEnumerable = require('./enumerables/OrderByDescendingEnumerable');

var GroupedEnumerable = require('./enumerables/GroupedEnumerable');

var SelectManyEnumerable = require('./enumerables/SelectManyEnumerable');

var JoinEnumerable = require('./enumerables/JoinEnumerable');

var LeftJoinEnumerable = require('./enumerables/LeftJoinEnumerable');

var RightJoinEnumerable = require('./enumerables/RightJoinEnumerable');

var GroupJoinEnumerable = require('./enumerables/GroupJoinEnumerable');

var ReverseEnumerable = require('./enumerables/ReverseEnumerable');

var ZipEnumerable = require('./enumerables/ZipEnumerable');

var Dictionary = require('./enumerables/Dictionary');

var Lookup = require('./enumerables/Lookup');

var SliceEnumerable = require('./enumerables/SliceEnumerable');

var SpliceEnumerable = require('./enumerables/SpliceEnumerable');

var FillEnumerable = require('./enumerables/FillEnumerable');

var SortEnumerable = require('./enumerables/SortEnumerable');

var CopyWithinEnumerable = require('./enumerables/CopyWithinEnumerable');

var ChunkEnumerable = require('./enumerables/ChunkEnumerable');

var SplitEnumerable = require('./enumerables/SplitEnumerable');

var NearSplitEnumerable = require('./enumerables/NearSplitEnumerable');

var LeftPadEnumerable = require('./enumerables/LeftPadEnumerable');

var RightPadEnumerable = require('./enumerables/RightPadEnumerable');

var RandEnumerable = require('./enumerables/RandEnumerable');

var WipeEnumerable = require('./enumerables/WipeEnumerable');

var NearGroupedEnumerable = require('./enumerables/NearGroupedEnumerable');

var SeparateEnumerable = require('./enumerables/SeparateEnumerable');

var CombineEnumerable = require('./enumerables/CombineEnumerable');

var SymmetricEnumerable = require('./enumerables/SymmetricEnumerable');

var EachEnumerable = require('./enumerables/EachEnumerable');

var IndicesEnumerable = require('./enumerables/IndicesEnumerable');

var PermutationEnumerable = require('./enumerables/PermutationEnumerable');

var PermutationRepeatableEnumerable = require('./enumerables/PermutationRepeatableEnumerable');

var CombinationEnumerable = require('./enumerables/CombinationEnumerable');

var CombinationRepeatableEnumerable = require('./enumerables/CombinationRepeatableEnumerable');

var PreOrderTree = require('./enumerables/PreOrderTree');

var InOrderTree = require('./enumerables/InOrderTree');

var PostOrderTree = require('./enumerables/PostOrderTree');

},{"./IEnumerator":32,"./core/core":35,"./core/exceptions/KeysForMultiElementsException":38,"./core/exceptions/NoSuchElementsException":40,"./core/exceptions/OutOfRangeException":42,"./core/exceptions/TooManyElementsException":45,"./enumerables/ChunkEnumerable":51,"./enumerables/CombinationEnumerable":52,"./enumerables/CombinationRepeatableEnumerable":53,"./enumerables/CombineEnumerable":54,"./enumerables/ConcatEnumerable":55,"./enumerables/CopyWithinEnumerable":56,"./enumerables/Dictionary":59,"./enumerables/DistinctEnumerable":60,"./enumerables/EachEnumerable":61,"./enumerables/ExceptEnumerable":64,"./enumerables/FillEnumerable":65,"./enumerables/GroupJoinEnumerable":68,"./enumerables/GroupedEnumerable":69,"./enumerables/InOrderTree":78,"./enumerables/IndicesEnumerable":79,"./enumerables/IntersectEnumerable":80,"./enumerables/JoinEnumerable":83,"./enumerables/LeftJoinEnumerable":84,"./enumerables/LeftPadEnumerable":85,"./enumerables/Lookup":86,"./enumerables/NearGroupedEnumerable":88,"./enumerables/NearSplitEnumerable":89,"./enumerables/OfTypeEnumerable":93,"./enumerables/OrderByDescendingEnumerable":94,"./enumerables/OrderByEnumerable":95,"./enumerables/PermutationEnumerable":98,"./enumerables/PermutationRepeatableEnumerable":99,"./enumerables/PostOrderTree":101,"./enumerables/PreOrderTree":103,"./enumerables/ProbabilityNode":106,"./enumerables/RandEnumerable":108,"./enumerables/ReverseEnumerable":111,"./enumerables/RightJoinEnumerable":112,"./enumerables/RightPadEnumerable":113,"./enumerables/SelectEnumerable":114,"./enumerables/SelectManyEnumerable":115,"./enumerables/SeparateEnumerable":116,"./enumerables/SingleNode":119,"./enumerables/SkipEnumerable":120,"./enumerables/SkipProportionEnumerable":121,"./enumerables/SkipSameEnumerable":122,"./enumerables/SkipWhileEnumerable":123,"./enumerables/SliceEnumerable":124,"./enumerables/SortEnumerable":125,"./enumerables/SpliceEnumerable":126,"./enumerables/SplitEnumerable":127,"./enumerables/SymmetricEnumerable":129,"./enumerables/TakeEnumerable":130,"./enumerables/TakeProportionEnumerable":131,"./enumerables/TakeSameEnumerable":132,"./enumerables/TakeWhileEnumerable":133,"./enumerables/UnionEnumerable":137,"./enumerables/ValueNode":138,"./enumerables/WhereEnumerable":139,"./enumerables/WipeEnumerable":140,"./enumerables/ZipEnumerable":141,"./methods/defaultAction":149,"./methods/defaultChildrenSelector":150,"./methods/defaultComparer":152,"./methods/defaultEqualityComparer":153,"./methods/defaultFalsePredicate":155,"./methods/defaultJoinSelector":157,"./methods/defaultKeySelector":158,"./methods/defaultParentSelector":159,"./methods/defaultPredicate":160,"./methods/defaultResultSelector":161,"./methods/defaultSameComparer":162,"./methods/defaultSelector":163,"./methods/defaultStrictEqualityComparer":164,"./methods/defaultValueSelector":165,"./methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/typeof":24,"@babel/runtime/helpers/wrapNativeSuper":26,"@babel/runtime/regenerator":27}],32:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var core = require('./core/core');

var NeedExecuteBeforeException = require('./core/exceptions/NeedExecuteBeforeException');

var IEnumerator = function IEnumerator(enumerable) {
  (0, _classCallCheck2.default)(this, IEnumerator);
  var iterator;
  var next = false;
  core.defineProperties(this, {
    moveNext: function moveNext() {
      next = iterator.next();
      return !next.done;
    },
    reset: function reset() {
      iterator = (enumerable[Symbol.iterator] || enumerable.asEnumerable()[Symbol.iterator])();
      next = false;
    },

    get current() {
      if (next) {
        return next.value;
      } else {
        throw new NeedExecuteBeforeException('moveNext');
      }
    }

  });
  this.reset();
};

module.exports = IEnumerator;

},{"./core/core":35,"./core/exceptions/NeedExecuteBeforeException":39,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":12}],33:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var IComparable = /*#__PURE__*/function () {
  function IComparable() {
    (0, _classCallCheck2.default)(this, IComparable);
  }

  (0, _createClass2.default)(IComparable, [{
    key: "compare",
    value: function compare(other) {
      return 0;
    }
  }]);
  return IComparable;
}();

module.exports = IComparable;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],34:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var IEquatable = /*#__PURE__*/function () {
  function IEquatable() {
    (0, _classCallCheck2.default)(this, IEquatable);
  }

  (0, _createClass2.default)(IEquatable, [{
    key: "equals",
    value: function equals(other) {
      return false;
    }
  }]);
  return IEquatable;
}();

module.exports = IEquatable;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],35:[function(require,module,exports){
(function (process){(function (){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getFunctionNameReg = /^(function\*?|class)\s+([^({\s]*)\s*[({].*/ig;
var getObjectTypeNameReg = /^\[\w+\s(.+)]$/ig;

var getter = function getter(properties, property) {
  return function () {
    return properties[property];
  };
};

var getFunctionName = function getFunctionName(fun) {
  return fun.name || (getFunctionNameReg.exec(fun) || [])[2] || '';
};

var UNDEFINED = 'Undefined';
var STRING = 'String';
var ARRAY = 'Array';
var OBJECT = 'Object';
var MAP = 'Map';
var SET = 'Set';
var FUNCTION = 'Function';
var REGEXP = 'RegExp';
var BOOLEAN = 'Boolean';
var NUMBER = 'Number';
var SYMBOL = 'Symbol';
var ARGUMENTS = 'Arguments';
var ITERATOR = 'Iterator';
var ENUMERABLE = 'Enumerable';
var TREE = 'Tree';
var a$ = Array.prototype;
var s$ = String.prototype;
var core = {
  isDev: function isDev() {
    return typeof process !== 'undefined' && process && process.env && process.env.NODE_ENV === 'development';
  },
  getType: function getType(value) {
    var typeName = (0, _typeof2.default)(value);

    if (typeName === 'undefined') {
      return UNDEFINED;
    } else if (typeName === 'string' || value instanceof String) {
      return STRING;
    } else if (typeName === 'number' || value instanceof Number) {
      return NUMBER;
    } else if (typeName === 'function' || value instanceof Function) {
      return FUNCTION;
    } else {
      var type = value[Symbol.toStringTag];

      if (!type) {
        type = Object.prototype.toString.call(value);
        type = type.substring('[object '.length, type.length - 1);
      }

      if (type === 'Object' || type === 'Error') {
        return getFunctionName(value.constructor);
      } else {
        if (typeName !== 'object') {
          return typeName.substring(0, 1).toUpperCase() + typeName.substring(1);
        } else {
          return type;
        }
      }
    }
  },
  types: {
    get Undefined() {
      return UNDEFINED;
    },

    get String() {
      return STRING;
    },

    get Array() {
      return ARRAY;
    },

    get Object() {
      return OBJECT;
    },

    get Map() {
      return MAP;
    },

    get Set() {
      return SET;
    },

    get Function() {
      return FUNCTION;
    },

    get RegExp() {
      return REGEXP;
    },

    get Boolean() {
      return BOOLEAN;
    },

    get Number() {
      return NUMBER;
    },

    get Symbol() {
      return SYMBOL;
    },

    get Arguments() {
      return ARGUMENTS;
    },

    get Iterator() {
      return ITERATOR;
    },

    get Enumerable() {
      return ENUMERABLE;
    },

    get Tree() {
      return TREE;
    }

  },
  isUndefined: function isUndefined(value) {
    return core.getType(value) === UNDEFINED;
  },
  isString: function isString(value) {
    return core.getType(value) === STRING;
  },
  isArray: function isArray(value) {
    return core.getType(value) === ARRAY;
  },
  isNumber: function isNumber(value) {
    return core.getType(value) === NUMBER;
  },
  isObject: function isObject(value) {
    return core.getType(value) === OBJECT;
  },
  isSet: function isSet(value) {
    return core.getType(value) === SET;
  },
  isMap: function isMap(value) {
    return core.getType(value) === MAP;
  },
  isSymbol: function isSymbol(value) {
    return core.getType(value) === SYMBOL;
  },
  isFunction: function isFunction(value) {
    return core.getType(value) === FUNCTION;
  },
  isArguments: function isArguments(value) {
    return core.getType(value) === ARGUMENTS;
  },
  isIterator: function isIterator(value) {
    return core.getType(value).endsWith(ITERATOR);
  },
  isEnumerable: function isEnumerable(value) {
    return core.getType(value).endsWith(ENUMERABLE);
  },
  isProto: function isProto(value) {
    var type = core.getType(value);
    return type === ARRAY || type === STRING;
  },
  isList: function isList(value) {
    var type = core.getType(value);
    return type === ARRAY || type === ENUMERABLE || type === SET;
  },
  isInteger: function isInteger(value) {
    return /^[-+]?\d+$/.test(value) || Number.isInteger(value);
  },
  asPascal: function asPascal(name) {
    return typeof name === 'string' ? name.substring(0, 1).toUpperCase() + name.substring(1) : name;
  },
  conflict: function conflict(prototype, property) {
    if ((0, _typeof2.default)(property) !== 'symbol' && prototype.hasOwnProperty(property)) {
      var newProperty = 'o$' + property;
      if (prototype.hasOwnProperty(newProperty)) return;
      if (core.isDev()) console.warn(property + ' already in ' + core.getType(prototype) + ', set original function to ' + newProperty);
      Object.defineProperty(prototype, newProperty, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: prototype[property]
      });
    }
  },
  setProperty: function setProperty(prototype, property, value) {
    var isGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var isEnumerable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (isGet && value instanceof Function) {
      Object.defineProperty(prototype, property, {
        enumerable: isEnumerable,
        configurable: true,
        get: value
      });
    } else {
      Object.defineProperty(prototype, property, {
        enumerable: isEnumerable,
        writable: true,
        configurable: true,
        value: value
      });
    }
  },
  defineProperty: function defineProperty(prototype, property, value) {
    var isGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var isEnumerable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    core.conflict(prototype, property);

    if (property === Symbol.iterator) {
      var name = (getFunctionName(value) || getFunctionName(prototype[Symbol.iterator])).replace(/\s*Iterator$/ig, ' Iterator');

      if (name) {
        core.defineProperty(value, Symbol.toStringTag, name);
      }
    }

    core.setProperty(prototype, property, value, isGet, isEnumerable);
  },
  defineProperties: function defineProperties(prototype, properties) {
    var pascalOrPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    for (var property in properties) {
      if (properties.hasOwnProperty(property)) {
        core.defineProperty(prototype, pascalOrPrefix === true ? core.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property, getter(properties, property), true, false);
      }
    }
  },
  undefineProperty: function undefineProperty(prototype, property) {
    if ((0, _typeof2.default)(property) !== 'symbol' && prototype.hasOwnProperty(property)) {
      var oldProperty = 'o$' + property;

      if (prototype.hasOwnProperty(oldProperty)) {
        Object.defineProperty(prototype, property, {
          enumerable: false,
          writable: true,
          configurable: true,
          value: prototype[oldProperty]
        });
        delete prototype[oldProperty];
      } else {
        delete prototype[property];
      }
    }
  },
  undefineProperties: function undefineProperties(prototype, properties) {
    var pascalOrPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var _iterator = _createForOfIteratorHelper(properties),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var property = _step.value;
        core.undefineProperty(prototype, pascalOrPrefix === true ? core.asPascal(property) : pascalOrPrefix ? pascalOrPrefix + property : property);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  asIterable: function asIterable(value) {
    if (value[Symbol.iterator]) {
      return value;
    } else {
      return core.asEnumerable(value);
    }
  },
  asEnumerable: function asEnumerable(object, childrenSelector, valueSelector) {
    var c;

    if (core.isUndefined(childrenSelector)) {
      if (core.isEnumerable(object)) {
        return object;
      } else if (core.isIterator(object)) {
        c = require('../enumerables/IteratorEnumerable');
      } else {
        var type = object[core.typeAs] || core.getType(object);

        if (type === STRING) {
          c = require('../enumerables/StringEnumerable');
        } else if (type === ARRAY || type === SET || type === ARGUMENTS) {
          c = require('../enumerables/ArrayEnumerable');
        } else if (type === MAP) {
          c = require('../enumerables/MapEnumerable');
        } else if (type === ITERATOR) {
          c = require('../enumerables/IteratorEnumerable');
        } else if (object[Symbol.iterator]) {
          c = require('../enumerables/IterableEnumerable');
        } else {
          c = require('../enumerables/ObjectEnumerable');
        }
      }
    } else {
      c = require('../enumerables/TreeEnumerable');
    }

    return new c(object, childrenSelector, valueSelector);
  },
  toArray: function toArray(source) {
    if (core.isArray(source)) {
      return source;
    } else {
      source = core.asIterable(source);
      return Array.from(source);
    }
  },
  range: function range(start, count) {
    var result = [];

    for (var i = 0; i < count; start++, i++) {
      result.push(start);
    }

    return result;
  },
  repeat: function repeat(element, count) {
    var result = [];

    for (var i = 0; i < count; i++) {
      result.push(element);
    }

    return result;
  },
  typeAs: Symbol('typeAs'),
  delegate: Symbol.for('delegate'),
  lazy: false,
  a$every: a$.every,
  a$concat: a$.concat,
  a$splice: a$.splice,
  a$slice: a$.slice,
  a$fill: a$.fill,
  a$find: a$.find,
  a$includes: a$.includes,
  a$map: a$.map,
  a$filter: a$.filter,
  a$shift: a$.shift,
  a$unshift: a$.unshift,
  a$pop: a$.pop,
  a$push: a$.push,
  a$reduce: a$.reduce,
  a$reduceRight: a$.reduceRight,
  a$some: a$.some,
  a$sort: a$.sort,
  a$copyWithin: a$.copyWithin,
  a$join: a$.join,
  a$indexOf: a$.indexOf,
  a$lastIndexOf: a$.lastIndexOf,
  a$findIndex: a$.findIndex,
  a$forEach: a$.forEach,
  s$concat: s$.concat,
  s$slice: s$.slice,
  s$includes: s$.includes,
  s$indexOf: s$.indexOf,
  s$lastIndexOf: s$.lastIndexOf,
  s$split: s$.split
};
module.exports = core;

}).call(this)}).call(this,require('_process'))

},{"../enumerables/ArrayEnumerable":46,"../enumerables/IterableEnumerable":81,"../enumerables/IteratorEnumerable":82,"../enumerables/MapEnumerable":87,"../enumerables/ObjectEnumerable":92,"../enumerables/StringEnumerable":128,"../enumerables/TreeEnumerable":136,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/typeof":24,"_process":28}],36:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var core = require('../core');

var Exception = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(Exception, _Error);

  var _super = _createSuper(Exception);

  function Exception(message) {
    var _this;

    (0, _classCallCheck2.default)(this, Exception);
    _this = _super.call(this, message);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'getType', function () {
      return core.getType((0, _assertThisInitialized2.default)(_this));
    }, true, true);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'toString', function () {
      return "".concat(core.getType((0, _assertThisInitialized2.default)(_this)), ": ").concat(message);
    }, false, true);
    return _this;
  }

  return Exception;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

module.exports = Exception;

},{"../core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/wrapNativeSuper":26}],37:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var InvalidFunctionException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(InvalidFunctionException, _Exception);

  var _super = _createSuper(InvalidFunctionException);

  function InvalidFunctionException(fun) {
    (0, _classCallCheck2.default)(this, InvalidFunctionException);
    return _super.call(this, 'Invalid function value of can not convert to a function value, the original value is : ' + fun);
  }

  return InvalidFunctionException;
}(Exception);

module.exports = InvalidFunctionException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],38:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var core = require('../core');

var Exception = require('./Exception');

var objectStr = Object.prototype.toString.call({});

var toString = function toString(key) {
  var str = key.toString();
  return str === objectStr ? '[object ' + core.getType(key) + ']' : str;
};

var KeysForMultiElementsException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(KeysForMultiElementsException, _Exception);

  var _super = _createSuper(KeysForMultiElementsException);

  function KeysForMultiElementsException(key) {
    (0, _classCallCheck2.default)(this, KeysForMultiElementsException);
    return _super.call(this, 'Keys for multi elements, key:' + toString(key));
  }

  return KeysForMultiElementsException;
}(Exception);

module.exports = KeysForMultiElementsException;

},{"../core":35,"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],39:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var NeedExecuteBeforeException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(NeedExecuteBeforeException, _Exception);

  var _super = _createSuper(NeedExecuteBeforeException);

  function NeedExecuteBeforeException(methodName) {
    (0, _classCallCheck2.default)(this, NeedExecuteBeforeException);
    return _super.call(this, 'Need execute method [' + methodName + '()] before');
  }

  return NeedExecuteBeforeException;
}(Exception);

module.exports = NeedExecuteBeforeException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],40:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var NoSuchElementsException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(NoSuchElementsException, _Exception);

  var _super = _createSuper(NoSuchElementsException);

  function NoSuchElementsException() {
    (0, _classCallCheck2.default)(this, NoSuchElementsException);
    return _super.call(this, 'No such elements');
  }

  return NoSuchElementsException;
}(Exception);

module.exports = NoSuchElementsException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],41:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var core = require('../core');

var Exception = require('./Exception');

var NotAncestorOfException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(NotAncestorOfException, _Exception);

  var _super = _createSuper(NotAncestorOfException);

  function NotAncestorOfException(ancestor, descendant) {
    (0, _classCallCheck2.default)(this, NotAncestorOfException);
    return _super.call(this, "'".concat(core.isUndefined(ancestor.key) ? ancestor.value : ancestor.key, "' is not ancestor node of '").concat(core.isUndefined(descendant.key) ? descendant.value : descendant.key, "'"));
  }

  return NotAncestorOfException;
}(Exception);

module.exports = NotAncestorOfException;

},{"../core":35,"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],42:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var OutOfRangeException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(OutOfRangeException, _Exception);

  var _super = _createSuper(OutOfRangeException);

  function OutOfRangeException(index) {
    (0, _classCallCheck2.default)(this, OutOfRangeException);
    return _super.call(this, 'Out of range, index:' + index);
  }

  return OutOfRangeException;
}(Exception);

module.exports = OutOfRangeException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],43:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var PluginRepeatException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(PluginRepeatException, _Exception);

  var _super = _createSuper(PluginRepeatException);

  function PluginRepeatException(plugin) {
    var builtin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _classCallCheck2.default)(this, PluginRepeatException);
    return _super.call(this, builtin ? "Can not add plugin with name \"".concat(plugin.name, "\" because of this is a builtin property") : "Plugin with name \"".concat(plugin.name, "\" has already added"));
  }

  return PluginRepeatException;
}(Exception);

module.exports = PluginRepeatException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],44:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var PropertyExpressionInvalidException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(PropertyExpressionInvalidException, _Exception);

  var _super = _createSuper(PropertyExpressionInvalidException);

  function PropertyExpressionInvalidException(property) {
    (0, _classCallCheck2.default)(this, PropertyExpressionInvalidException);
    return _super.call(this, 'The property expression is invalid. property is :' + property);
  }

  return PropertyExpressionInvalidException;
}(Exception);

module.exports = PropertyExpressionInvalidException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],45:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Exception = require('./Exception');

var TooManyElementsException = /*#__PURE__*/function (_Exception) {
  (0, _inherits2.default)(TooManyElementsException, _Exception);

  var _super = _createSuper(TooManyElementsException);

  function TooManyElementsException() {
    (0, _classCallCheck2.default)(this, TooManyElementsException);
    return _super.call(this, 'Too many elements');
  }

  return TooManyElementsException;
}(Exception);

module.exports = TooManyElementsException;

},{"./Exception":36,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],46:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get5 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProtoEnumerable = require('./ProtoEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultJoinSelector = require('../methods/defaultJoinSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultStrictEqualityComparer = require('../methods/defaultStrictEqualityComparer');

var defaultAction = require('../methods/defaultAction');

var defaultComparer = require('../methods/defaultComparer');

var ArrayEnumerable = /*#__PURE__*/function (_ProtoEnumerable) {
  (0, _inherits2.default)(ArrayEnumerable, _ProtoEnumerable);

  var _super = _createSuper(ArrayEnumerable);

  function ArrayEnumerable(array) {
    var _this;

    (0, _classCallCheck2.default)(this, ArrayEnumerable);
    _this = _super.call(this, array);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function ArrayIterator() {
      return array[Symbol.iterator]();
    });
    return _this;
  }

  (0, _createClass2.default)(ArrayEnumerable, [{
    key: "join",
    value: function join(inner) {
      var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
      var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
      var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
      var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

      if (arguments.length === 1 && core.a$join) {
        return core.a$join.call(this[core.delegate], inner);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "join", this).call(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
      }
    }
  }, {
    key: "indexOf",
    value: function indexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;

      if (comparer === defaultStrictEqualityComparer && core.a$indexOf) {
        return core.a$indexOf.call(this[core.delegate], value, start);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "indexOf", this).call(this, value, start, comparer);
      }
    }
  }, {
    key: "lastIndexOf",
    value: function lastIndexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;

      if (comparer === defaultStrictEqualityComparer && core.a$lastIndexOf) {
        return core.a$lastIndexOf.call(this[core.delegate], value, start);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "lastIndexOf", this).call(this, value, start, comparer);
      }
    }
  }, {
    key: "findIndex",
    value: function findIndex(predicate, thisArg) {
      if (core.a$findIndex) {
        return core.a$findIndex.call(this[core.delegate], predicate, thisArg);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "findIndex", this).call(this, predicate, thisArg);
      }
    }
  }, {
    key: "every",
    value: function every(callback, thisArg) {
      if (core.a$every) {
        return core.a$every.call(this[core.delegate], callback, thisArg);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "every", this).call(this, callback, thisArg);
      }
    }
  }, {
    key: "find",
    value: function find(callback, thisArg) {
      if (core.a$find) {
        return core.a$find.call(this[core.delegate], callback, thisArg);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "find", this).call(this, callback, thisArg);
      }
    }
  }, {
    key: "includes",
    value: function includes(element) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (core.a$includes) {
        return core.a$includes.call(this[core.delegate], element, start);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "includes", this).call(this, element, start);
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (core.a$pop) {
        return core.a$pop.call(this[core.delegate]);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "pop", this).call(this);
      }
    }
  }, {
    key: "push",
    value: function push() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      if (core.a$push) {
        return core.a$push.apply(this[core.delegate], values);
      } else {
        var _get2;

        return (_get2 = (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "push", this)).call.apply(_get2, [this].concat(values));
      }
    }
  }, {
    key: "shift",
    value: function shift() {
      if (core.a$shift) {
        return core.a$shift.call(this[core.delegate]);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "shift", this).call(this);
      }
    }
  }, {
    key: "unshift",
    value: function unshift() {
      for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      if (core.a$unshift) {
        return core.a$unshift.apply(this[core.delegate], values);
      } else {
        var _get3;

        return (_get3 = (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "unshift", this)).call.apply(_get3, [this].concat(values));
      }
    }
  }, {
    key: "reduce",
    value: function reduce(callback, initialValue) {
      if (core.a$reduce) {
        return core.a$reduce.call(this[core.delegate], callback, initialValue);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "reduce", this).call(this, callback, initialValue);
      }
    }
  }, {
    key: "reduceRight",
    value: function reduceRight(callback, initialValue) {
      if (core.a$reduceRight) {
        return core.a$reduceRight.call(this[core.delegate], callback, initialValue);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "reduceRight", this).call(this, callback, initialValue);
      }
    }
  }, {
    key: "splice",
    value: function splice(start, count) {
      for (var _len3 = arguments.length, values = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        values[_key3 - 2] = arguments[_key3];
      }

      if (core.a$splice) {
        var _core$a$splice;

        var result = (_core$a$splice = core.a$splice).call.apply(_core$a$splice, [this[core.delegate], start, count].concat(values));

        return core.asEnumerable(result);
      } else {
        var _get4;

        return (_get4 = (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "splice", this)).call.apply(_get4, [this, start, count].concat(values));
      }
    }
  }, {
    key: "fill",
    value: function fill(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

      if (core.a$fill) {
        var result = core.a$fill.call(this[core.delegate], value, start, end);
        return core.asEnumerable(result);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "fill", this).call(this, value, start, end);
      }
    }
  }, {
    key: "some",
    value: function some(callback, thisArg) {
      if (core.a$some) {
        return core.a$some.call(this[core.delegate], callback, thisArg);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "some", this).call(this, callback, thisArg);
      }
    }
  }, {
    key: "forEach",
    value: function forEach() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (core.a$forEach) {
        core.a$forEach.call(this[core.delegate], action, thisArg);
      } else {
        (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "forEach", this).call(this, action, thisArg);
      }
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this[core.delegate];
    }
  }, {
    key: "sort",
    value: function sort() {
      var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultComparer;

      if (core.a$sort) {
        comparer = methods.asComparer(comparer);
        var result = core.a$sort.call(this[core.delegate], comparer);
        return core.asEnumerable(result);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "sort", this).call(this, comparer);
      }
    }
  }, {
    key: "copyWithin",
    value: function copyWithin() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

      if (core.a$copyWithin) {
        var result = core.a$copyWithin.call(this[core.delegate], target, start, end);
        return core.asEnumerable(result);
      } else {
        return (0, _get5.default)((0, _getPrototypeOf2.default)(ArrayEnumerable.prototype), "copyWithin", this).call(this, target, start, end);
      }
    }
  }]);
  return ArrayEnumerable;
}(ProtoEnumerable);

module.exports = ArrayEnumerable;

},{"../core/core":35,"../methods/defaultAction":149,"../methods/defaultComparer":152,"../methods/defaultEqualityComparer":153,"../methods/defaultJoinSelector":157,"../methods/defaultSelector":163,"../methods/defaultStrictEqualityComparer":164,"../methods/methods":172,"./ProtoEnumerable":107,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],47:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var BetweenEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(BetweenEnumerable, _IEnumerable);

  var _super = _createSuper(BetweenEnumerable);

  function BetweenEnumerable(start, end) {
    var _this;

    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    (0, _classCallCheck2.default)(this, BetweenEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function BetweenIterator() {
      var value;
      return _regenerator.default.wrap(function BetweenIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = start;

            case 1:
              if (!(value <= end)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return value;

            case 4:
              value += step;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, BetweenIterator);
    }));
    return _this;
  }

  return BetweenEnumerable;
}(IEnumerable);

module.exports = BetweenEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],48:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var core = require('../core/core');

var GeneratorEnumerable = require('./GeneratorEnumerable');

var PreOrderEnumerable = require('./PreOrderEnumerable');

var InOrderEnumerable = require('./InOrderEnumerable');

var PostOrderEnumerable = require('./PostOrderEnumerable');

var DEFAULT_LEFT = Symbol('left');
var DEFAULT_RIGHT = Symbol('right');

var BinaryTree = /*#__PURE__*/function (_ITree) {
  (0, _inherits2.default)(BinaryTree, _ITree);

  var _super = _createSuper(BinaryTree);

  function BinaryTree(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, BinaryTree);
    _this = _super.call(this, tree.value, /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(tree.children || [], "t0", 1);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    var left = DEFAULT_LEFT,
        right = DEFAULT_RIGHT;
    var iterator = _this[Symbol.iterator];
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function BinaryTreeIterator() {
      var it, itLeft, itRight;
      return _regenerator.default.wrap(function BinaryTreeIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              it = iterator();
              itLeft = it.next();

              if (itLeft.done) {
                _context2.next = 16;
                break;
              }

              left = itLeft.value && new BinaryTree(itLeft.value);
              _context2.next = 6;
              return left;

            case 6:
              itRight = it.next();

              if (itRight.done) {
                _context2.next = 13;
                break;
              }

              right = itRight.value && new BinaryTree(itRight.value);
              _context2.next = 11;
              return right;

            case 11:
              _context2.next = 14;
              break;

            case 13:
              right = undefined;

            case 14:
              _context2.next = 17;
              break;

            case 16:
              left = undefined;

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, BinaryTreeIterator);
    }));
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'children', function () {
      return new GeneratorEnumerable(this[Symbol.iterator]);
    }, true, true);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'left', function () {
      return left === DEFAULT_LEFT ? left = _this.elementAtOrDefault(0) : left;
    }, true, true);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'right', function () {
      return right === DEFAULT_RIGHT ? right = _this.elementAtOrDefault(1) : right;
    }, true, true);
    return _this;
  }

  (0, _createClass2.default)(BinaryTree, [{
    key: "hasLeft",
    value: function hasLeft() {
      return !core.isUndefined(this.left);
    }
  }, {
    key: "hasRight",
    value: function hasRight() {
      return !core.isUndefined(this.right);
    }
    /**
     * 前序遍历
     **/

  }, {
    key: "preOrder",
    value: function preOrder() {
      return new PreOrderEnumerable(this);
    }
    /**
     * 中序遍历
     */

  }, {
    key: "inOrder",
    value: function inOrder() {
      return new InOrderEnumerable(this);
    }
    /**
     * 后序遍历
     */

  }, {
    key: "postOrder",
    value: function postOrder() {
      return new PostOrderEnumerable(this);
    }
  }, {
    key: "isBinary",
    get: function get() {
      return true;
    }
  }, {
    key: "asBinary",
    value: function asBinary() {
      return this;
    }
  }]);
  return BinaryTree;
}(ITree);

module.exports = BinaryTree;

},{"../core/core":35,"./GeneratorEnumerable":67,"./ITree":76,"./InOrderEnumerable":77,"./PostOrderEnumerable":100,"./PreOrderEnumerable":102,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],49:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var BreadthEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(BreadthEnumerable, _IEnumerable);

  var _super = _createSuper(BreadthEnumerable);

  function BreadthEnumerable(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, BreadthEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function BreadthIterator() {
      var queue, _iterator, _step, element;

      return _regenerator.default.wrap(function BreadthIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queue = [[tree]];

            case 1:
              if (!queue.length) {
                _context.next = 22;
                break;
              }

              _iterator = _createForOfIteratorHelper(queue.shift());
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 12;
                break;
              }

              element = _step.value;
              _context.next = 9;
              return element.value;

            case 9:
              queue.push(element);

            case 10:
              _context.next = 5;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator.f();

              return _context.finish(17);

            case 20:
              _context.next = 1;
              break;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, BreadthIterator, null, [[3, 14, 17, 20]]);
    }));
    return _this;
  }

  return BreadthEnumerable;
}(IEnumerable);

module.exports = BreadthEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],50:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var BreadthSubTreeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(BreadthSubTreeEnumerable, _IEnumerable);

  var _super = _createSuper(BreadthSubTreeEnumerable);

  function BreadthSubTreeEnumerable(tree, predicate) {
    var _this;

    (0, _classCallCheck2.default)(this, BreadthSubTreeEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function BreadthSubTreeIterator() {
      var queue, _iterator, _step, element;

      return _regenerator.default.wrap(function BreadthSubTreeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queue = [[tree]];

            case 1:
              if (!queue.length) {
                _context.next = 23;
                break;
              }

              _iterator = _createForOfIteratorHelper(queue.shift());
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;

              if (!predicate(element.value)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              queue.push(element);

            case 11:
              _context.next = 5;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
              _context.next = 1;
              break;

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, BreadthSubTreeIterator, null, [[3, 15, 18, 21]]);
    }));
    return _this;
  }

  return BreadthSubTreeEnumerable;
}(IEnumerable);

module.exports = BreadthSubTreeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],51:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var IChunk = require('./IChunk');

var ChunkEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(ChunkEnumerable, _IEnumerable);

  var _super = _createSuper(ChunkEnumerable);

  function ChunkEnumerable(source, chunk) {
    var _this;

    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    (0, _classCallCheck2.default)(this, ChunkEnumerable);
    _this = _super.call(this, source);
    offset = offset < 0 ? (offset % chunk + chunk) % chunk : offset;
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ChunkIterator() {
      var index, chunks, last, it, hasNext, ci;
      return _regenerator.default.wrap(function ChunkIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              index = 0;
              chunks = [];
              it = source[Symbol.iterator]();

              hasNext = function hasNext() {
                var next = it.next();

                if (!next.done) {
                  if (!last || last.count === chunk || offset !== 0 && index === 0 && last.count === offset) {
                    if (last) index++;
                    chunks.push(last = {
                      count: 0,
                      array: []
                    });

                    last.chunk = function (last) {
                      return new IChunk(index, /*#__PURE__*/_regenerator.default.mark(function _callee() {
                        var index;
                        return _regenerator.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                index = 0;

                              case 1:
                                if (!(last.array.length > index || hasNext() && last.array.length > index)) {
                                  _context.next = 6;
                                  break;
                                }

                                _context.next = 4;
                                return last.array[index++];

                              case 4:
                                _context.next = 1;
                                break;

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                    }(last);
                  }

                  last.array.push(next.value);
                  last.count++;
                }

                return !next.done;
              };

              ci = 0;

            case 5:
              if (!(chunks.length > ci || hasNext())) {
                _context2.next = 11;
                break;
              }

              if (!(chunks.length > ci)) {
                _context2.next = 9;
                break;
              }

              _context2.next = 9;
              return chunks[ci++].chunk;

            case 9:
              _context2.next = 5;
              break;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, ChunkIterator);
    }));
    return _this;
  }

  return ChunkEnumerable;
}(IEnumerable);

module.exports = ChunkEnumerable;

},{"../IEnumerable":31,"../core/core":35,"./IChunk":70,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],52:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var IndicesEnumerable = require('./IndicesEnumerable');

var core = require('../core/core');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var CombinationEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(CombinationEnumerable, _IEnumerable);

  var _super = _createSuper(CombinationEnumerable);

  function CombinationEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, CombinationEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function CombinationIterator() {
      var iterator, indices, array, end, hasNext, nextIndices, lastIndex;
      return _regenerator.default.wrap(function CombinationIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iterator = source.getIterator();
              indices = core.range(0, count);
              array = [];
              end = false;

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  end = true;
                  return false;
                } else {
                  array.push(next.value);
                  return true;
                }
              };

              nextIndices = function nextIndices() {
                for (var i = count - 1; i >= 0; i--) {
                  var needNext = false;
                  indices[i]++;

                  if (indices[i] + (count - i) - 1 >= array.length) {
                    if (end || !hasNext()) {
                      needNext = true;
                    }
                  }

                  if (!needNext) {
                    for (var j = i + 1, k = 1; j < count; j++, k++) {
                      indices[j] = indices[i] + k;
                    }

                    return true;
                  }
                }

                return false;
              };

              lastIndex = indices[count - 1];

            case 7:
              if (!(array.length <= lastIndex)) {
                _context.next = 12;
                break;
              }

              if (hasNext()) {
                _context.next = 10;
                break;
              }

              throw new NoSuchElementsException();

            case 10:
              _context.next = 7;
              break;

            case 12:
              _context.next = 14;
              return new IndicesEnumerable(array, (0, _toConsumableArray2.default)(indices));

            case 14:
              if (nextIndices()) {
                _context.next = 12;
                break;
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, CombinationIterator);
    }));
    return _this;
  }

  return CombinationEnumerable;
}(IEnumerable);

module.exports = CombinationEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NoSuchElementsException":40,"./IndicesEnumerable":79,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],53:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var IndicesEnumerable = require('./IndicesEnumerable');

var core = require('../core/core');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var CombinationEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(CombinationEnumerable, _IEnumerable);

  var _super = _createSuper(CombinationEnumerable);

  function CombinationEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, CombinationEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function CombinationIterator() {
      var iterator, indices, array, end, hasNext, nextIndices;
      return _regenerator.default.wrap(function CombinationIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iterator = source.getIterator();
              indices = core.repeat(0, count);
              array = [];
              end = false;

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  end = true;
                  return false;
                } else {
                  array.push(next.value);
                  return true;
                }
              };

              nextIndices = function nextIndices() {
                for (var i = count - 1; i >= 0; i--) {
                  var needNext = false;
                  indices[i]++;

                  if (indices[i] >= array.length) {
                    if (end || !hasNext()) {
                      needNext = true;
                    }
                  }

                  if (!needNext) {
                    for (var j = i + 1; j < count; j++) {
                      indices[j] = indices[i];
                    }

                    return true;
                  }
                }

                return false;
              };

              if (!hasNext()) {
                _context.next = 12;
                break;
              }

            case 7:
              _context.next = 9;
              return new IndicesEnumerable(array, (0, _toConsumableArray2.default)(indices));

            case 9:
              if (nextIndices()) {
                _context.next = 7;
                break;
              }

            case 10:
              _context.next = 13;
              break;

            case 12:
              throw new NoSuchElementsException();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, CombinationIterator);
    }));
    return _this;
  }

  return CombinationEnumerable;
}(IEnumerable);

module.exports = CombinationEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NoSuchElementsException":40,"./IndicesEnumerable":79,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],54:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultKeySelector = require('../methods/defaultKeySelector');

var defaultSelector = require('../methods/defaultSelector');

var defaultParentSelector = require('../methods/defaultParentSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var ICombine = require('./ICombine');

var CombineEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(CombineEnumerable, _IEnumerable);

  var _super = _createSuper(CombineEnumerable);

  function CombineEnumerable(source) {
    var _this;

    var parentSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParentSelector;
    var keySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultKeySelector;
    var valueSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, CombineEnumerable);
    _this = _super.call(this, source);
    parentSelector = methods.asSelector(parentSelector);
    keySelector = methods.asSelector(keySelector);
    valueSelector = methods.asSelector(valueSelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function CombineIterator() {
      var temp, result, length, i, value, hasParent, j, parent, combine, _i, _result, _value;

      return _regenerator.default.wrap(function CombineIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //todo: 可以优化
              temp = source.select(function (element) {
                return {
                  key: keySelector(element),
                  parent: parentSelector(element),
                  value: valueSelector(element),
                  children: []
                };
              }).toArray();
              result = [];
              length = temp.length;
              i = 0;

            case 4:
              if (!(i < length)) {
                _context2.next = 22;
                break;
              }

              value = temp[i];
              hasParent = false;
              j = 0;

            case 8:
              if (!(j < length)) {
                _context2.next = 18;
                break;
              }

              if (!(i !== j)) {
                _context2.next = 15;
                break;
              }

              parent = temp[j];

              if (!comparer(parent.key, value.parent)) {
                _context2.next = 15;
                break;
              }

              parent.children.push(value);
              hasParent = true;
              return _context2.abrupt("break", 18);

            case 15:
              j++;
              _context2.next = 8;
              break;

            case 18:
              if (!hasParent) {
                result.push(value);
              }

            case 19:
              i++;
              _context2.next = 4;
              break;

            case 22:
              combine = function combine(value) {
                return new ICombine(value.key, value.parent, value.value, /*#__PURE__*/_regenerator.default.mark(function _callee() {
                  var _iterator, _step, sub;

                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _iterator = _createForOfIteratorHelper(value.children);
                          _context.prev = 1;

                          _iterator.s();

                        case 3:
                          if ((_step = _iterator.n()).done) {
                            _context.next = 9;
                            break;
                          }

                          sub = _step.value;
                          _context.next = 7;
                          return combine(sub);

                        case 7:
                          _context.next = 3;
                          break;

                        case 9:
                          _context.next = 14;
                          break;

                        case 11:
                          _context.prev = 11;
                          _context.t0 = _context["catch"](1);

                          _iterator.e(_context.t0);

                        case 14:
                          _context.prev = 14;

                          _iterator.f();

                          return _context.finish(14);

                        case 17:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 11, 14, 17]]);
                }));
              };

              _i = 0, _result = result;

            case 24:
              if (!(_i < _result.length)) {
                _context2.next = 31;
                break;
              }

              _value = _result[_i];
              _context2.next = 28;
              return combine(_value);

            case 28:
              _i++;
              _context2.next = 24;
              break;

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, CombineIterator);
    }));
    return _this;
  }

  return CombineEnumerable;
}(IEnumerable);

module.exports = CombineEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultKeySelector":158,"../methods/defaultParentSelector":159,"../methods/defaultSelector":163,"../methods/methods":172,"./ICombine":71,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],55:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var ConcatEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(ConcatEnumerable, _IEnumerable);

  var _super = _createSuper(ConcatEnumerable);

  function ConcatEnumerable(source) {
    var _this;

    for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      others[_key - 1] = arguments[_key];
    }

    (0, _classCallCheck2.default)(this, ConcatEnumerable);
    _this = _super.call(this, source);

    var type = _this.getProtoType();

    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ConcatIterator() {
      var _iterator, _step, other;

      return _regenerator.default.wrap(function ConcatIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(source, "t0", 1);

            case 1:
              _iterator = _createForOfIteratorHelper(others);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 23;
                break;
              }

              other = _step.value;

              if (!(!core.isUndefined(other) && (!core.isString(other) || type === 'string') && !core.isArguments(other))) {
                _context.next = 19;
                break;
              }

              if (!other[Symbol.iterator]) {
                _context.next = 11;
                break;
              }

              return _context.delegateYield(other, "t1", 9);

            case 9:
              _context.next = 17;
              break;

            case 11:
              if (!core.isIterator(other)) {
                _context.next = 15;
                break;
              }

              return _context.delegateYield(other.asEnumerable(), "t2", 13);

            case 13:
              _context.next = 17;
              break;

            case 15:
              _context.next = 17;
              return other;

            case 17:
              _context.next = 21;
              break;

            case 19:
              _context.next = 21;
              return other;

            case 21:
              _context.next = 4;
              break;

            case 23:
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t3 = _context["catch"](2);

              _iterator.e(_context.t3);

            case 28:
              _context.prev = 28;

              _iterator.f();

              return _context.finish(28);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, ConcatIterator, null, [[2, 25, 28, 31]]);
    }));
    return _this;
  }

  return ConcatEnumerable;
}(IEnumerable);

module.exports = ConcatEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],56:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var CopyWithinEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(CopyWithinEnumerable, _IEnumerable);

  var _super = _createSuper(CopyWithinEnumerable);

  function CopyWithinEnumerable(source) {
    var _this;

    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
    (0, _classCallCheck2.default)(this, CopyWithinEnumerable);
    _this = _super.call(this, source);
    var iterable = (0, _defineProperty2.default)({}, Symbol.iterator, source[Symbol.iterator]);
    core.setProperty(source, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var index, temp, _iterator, _step, element, _index, _temp, _iterator2, _step2, _element;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (target < 0 || start < 0 || end < 0) {
                iterable = (0, _toConsumableArray2.default)(iterable);

                if (target < 0) {
                  target = iterable.length + target;
                }

                if (start < 0) {
                  start = iterable.length + start;
                }

                if (end < 0) {
                  end = iterable.length + end;
                }
              }

              if (!(target >= start)) {
                _context.next = 34;
                break;
              }

              index = 0, temp = [];
              _iterator = _createForOfIteratorHelper(iterable);
              _context.prev = 4;

              _iterator.s();

            case 6:
              if ((_step = _iterator.n()).done) {
                _context.next = 24;
                break;
              }

              element = _step.value;

              if (index >= start && index < end) {
                temp.push(element);
              }

              if (!(index < target)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return element;

            case 12:
              _context.next = 21;
              break;

            case 14:
              if (!temp.length) {
                _context.next = 19;
                break;
              }

              _context.next = 17;
              return temp.shift();

            case 17:
              _context.next = 21;
              break;

            case 19:
              _context.next = 21;
              return element;

            case 21:
              index++;

            case 22:
              _context.next = 6;
              break;

            case 24:
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](4);

              _iterator.e(_context.t0);

            case 29:
              _context.prev = 29;

              _iterator.f();

              return _context.finish(29);

            case 32:
              _context.next = 72;
              break;

            case 34:
              _index = 0, _temp = [];
              _iterator2 = _createForOfIteratorHelper(iterable);
              _context.prev = 36;

              _iterator2.s();

            case 38:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 63;
                break;
              }

              _element = _step2.value;

              if (!(_index < target)) {
                _context.next = 45;
                break;
              }

              _context.next = 43;
              return _element;

            case 43:
              _context.next = 60;
              break;

            case 45:
              if (_index <= end) {
                _temp.push(_element);
              }

              if (!(_index >= start && _index < end)) {
                _context.next = 52;
                break;
              }

              _temp.shift();

              _context.next = 50;
              return _element;

            case 50:
              _context.next = 60;
              break;

            case 52:
              if (!(_index === end)) {
                _context.next = 57;
                break;
              }

              return _context.delegateYield(_temp, "t1", 54);

            case 54:
              _temp = [];
              _context.next = 60;
              break;

            case 57:
              if (!(_index > end)) {
                _context.next = 60;
                break;
              }

              _context.next = 60;
              return _element;

            case 60:
              _index++;

            case 61:
              _context.next = 38;
              break;

            case 63:
              _context.next = 68;
              break;

            case 65:
              _context.prev = 65;
              _context.t2 = _context["catch"](36);

              _iterator2.e(_context.t2);

            case 68:
              _context.prev = 68;

              _iterator2.f();

              return _context.finish(68);

            case 71:
              return _context.delegateYield(_temp, "t3", 72);

            case 72:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 26, 29, 32], [36, 65, 68, 71]]);
    }));
    return _this;
  }

  return CopyWithinEnumerable;
}(IEnumerable);

module.exports = CopyWithinEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],57:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var DepthEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(DepthEnumerable, _IEnumerable);

  var _super = _createSuper(DepthEnumerable);

  function DepthEnumerable(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, DepthEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function DepthIterator() {
      var nodes, iterators, pop, next;
      return _regenerator.default.wrap(function DepthIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nodes = [tree];
              iterators = [tree[Symbol.iterator]()];
              pop = false;

            case 3:
              if (!(nodes.length && iterators.length)) {
                _context.next = 11;
                break;
              }

              if (pop) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return nodes[nodes.length - 1].value;

            case 7:
              next = iterators[iterators.length - 1].next();

              if (next.done) {
                iterators.pop();
                nodes.pop();
                pop = true;
              } else {
                nodes.push(next.value);
                iterators.push(next.value[Symbol.iterator]());
                pop = false;
              }

              _context.next = 3;
              break;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, DepthIterator);
    }));
    return _this;
  }

  return DepthEnumerable;
}(IEnumerable);

module.exports = DepthEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],58:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var BreadthSubTreeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(BreadthSubTreeEnumerable, _IEnumerable);

  var _super = _createSuper(BreadthSubTreeEnumerable);

  function BreadthSubTreeEnumerable(tree, predicate) {
    var _this;

    (0, _classCallCheck2.default)(this, BreadthSubTreeEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function BreadthSubTreeIterator() {
      var nodes, iterators, pop, next;
      return _regenerator.default.wrap(function BreadthSubTreeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nodes = [tree];
              iterators = [tree[Symbol.iterator]()];
              pop = false;

            case 3:
              if (!(nodes.length && iterators.length)) {
                _context.next = 11;
                break;
              }

              if (!(!pop && predicate(nodes[nodes.length - 1].value))) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return nodes[nodes.length - 1];

            case 7:
              next = iterators[iterators.length - 1].next();

              if (next.done) {
                iterators.pop();
                nodes.pop();
                pop = true;
              } else {
                nodes.push(next.value);
                iterators.push(next.value[Symbol.iterator]());
                pop = false;
              }

              _context.next = 3;
              break;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, BreadthSubTreeIterator);
    }));
    return _this;
  }

  return BreadthSubTreeEnumerable;
}(IEnumerable);

module.exports = BreadthSubTreeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],59:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapEnumerable = require('./MapEnumerable');

var Dictionary = /*#__PURE__*/function (_MapEnumerable) {
  (0, _inherits2.default)(Dictionary, _MapEnumerable);

  var _super = _createSuper(Dictionary);

  function Dictionary() {
    (0, _classCallCheck2.default)(this, Dictionary);
    return _super.call(this, new Map());
  }

  (0, _createClass2.default)(Dictionary, [{
    key: "toObject",
    value: function toObject() {
      var object = {};

      var _iterator = _createForOfIteratorHelper(this),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          object[entry.key] = entry.value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return object;
    }
  }]);
  return Dictionary;
}(MapEnumerable);

module.exports = Dictionary;

},{"./MapEnumerable":87,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],60:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var DistinctEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(DistinctEnumerable, _IEnumerable);

  var _super = _createSuper(DistinctEnumerable);

  function DistinctEnumerable(source) {
    var _this;

    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, DistinctEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function DistinctIterator() {
      var temp, set, _iterator, _step, element;

      return _regenerator.default.wrap(function DistinctIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = core.asEnumerable([]), set = new Set();
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 14;
                break;
              }

              element = _step.value;

              if (set.has(element)) {
                _context.next = 12;
                break;
              }

              if (temp.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              temp.push(element);

            case 11:
              set.add(element);

            case 12:
              _context.next = 4;
              break;

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 19:
              _context.prev = 19;

              _iterator.f();

              return _context.finish(19);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, DistinctIterator, null, [[2, 16, 19, 22]]);
    }));
    return _this;
  }

  return DistinctEnumerable;
}(IEnumerable);

module.exports = DistinctEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],61:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var defaultAction = require('../methods/defaultAction');

var EachEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(EachEnumerable, _IEnumerable);

  var _super = _createSuper(EachEnumerable);

  function EachEnumerable(source) {
    var _this;

    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;
    (0, _classCallCheck2.default)(this, EachEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function EachIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function EachIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }

              element = _step.value;
              action(element, index++);
              _context.next = 9;
              return element;

            case 9:
              _context.next = 4;
              break;

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 16:
              _context.prev = 16;

              _iterator.f();

              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, EachIterator, null, [[2, 13, 16, 19]]);
    }));
    return _this;
  }

  return EachEnumerable;
}(IEnumerable);

module.exports = EachEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultAction":149,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],62:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var EmptyEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(EmptyEnumerable, _IEnumerable);

  var _super = _createSuper(EmptyEnumerable);

  function EmptyEnumerable() {
    var _this;

    (0, _classCallCheck2.default)(this, EmptyEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function EmptyIterator() {
      return _regenerator.default.wrap(function EmptyIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield([], "t0", 1);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, EmptyIterator);
    }));
    return _this;
  }

  return EmptyEnumerable;
}(IEnumerable);

module.exports = EmptyEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],63:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Entry = /*#__PURE__*/function () {
  function Entry(key, value) {
    (0, _classCallCheck2.default)(this, Entry);
    this.key = key;
    this.value = value;
  }

  (0, _createClass2.default)(Entry, [{
    key: "toString",
    value: function toString() {
      return '{' + this.key + ':' + this.value + '}';
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        key: this.key,
        value: this.value
      };
    }
  }]);
  return Entry;
}();

module.exports = Entry;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],64:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var ExceptEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(ExceptEnumerable, _IEnumerable);

  var _super = _createSuper(ExceptEnumerable);

  function ExceptEnumerable(source, other) {
    var _this;

    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, ExceptEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asEqualityComparer(comparer);
    other = core.asEnumerable(other);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ExceptIterator() {
      var temp, _iterator, _step, element;

      return _regenerator.default.wrap(function ExceptIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = core.asEnumerable([]);
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;

              if (other.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              if (temp.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              temp.push(element);
              _context.next = 11;
              return element;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, ExceptIterator, null, [[2, 15, 18, 21]]);
    }));
    return _this;
  }

  return ExceptEnumerable;
}(IEnumerable);

module.exports = ExceptEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],65:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var FillEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(FillEnumerable, _IEnumerable);

  var _super = _createSuper(FillEnumerable);

  function FillEnumerable(source, value) {
    var _this;

    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
    (0, _classCallCheck2.default)(this, FillEnumerable);
    _this = _super.call(this, source);
    var iterable = source.getIterable();
    core.setProperty(source, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (start < 0 || end < 0) {
                iterable = (0, _toConsumableArray2.default)(iterable);

                if (start < 0) {
                  start = iterable.length + start;
                }

                if (end < 0) {
                  end = iterable.length + end;
                }
              }

              index = 0;
              _iterator = _createForOfIteratorHelper(iterable);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 17;
                break;
              }

              element = _step.value;

              if (!(index < start || index >= end)) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              _context.next = 14;
              break;

            case 12:
              _context.next = 14;
              return value;

            case 14:
              index++;

            case 15:
              _context.next = 5;
              break;

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 22:
              _context.prev = 22;

              _iterator.f();

              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 19, 22, 25]]);
    }));
    return (0, _possibleConstructorReturn2.default)(_this, source);
  }

  return FillEnumerable;
}(IEnumerable);

module.exports = FillEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],66:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var GenerateEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(GenerateEnumerable, _IEnumerable);

  var _super = _createSuper(GenerateEnumerable);

  function GenerateEnumerable(generate) {
    var _this;

    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, GenerateEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function GenerateIterator() {
      var i;
      return _regenerator.default.wrap(function GenerateIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < count)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return generate(i);

            case 4:
              i++;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, GenerateIterator);
    }));
    return _this;
  }

  return GenerateEnumerable;
}(IEnumerable);

module.exports = GenerateEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],67:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var GeneratorEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(GeneratorEnumerable, _IEnumerable);

  var _super = _createSuper(GeneratorEnumerable);

  function GeneratorEnumerable(generator) {
    var _this;

    (0, _classCallCheck2.default)(this, GeneratorEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function GeneratorIterator() {
      return generator();
    });
    return _this;
  }

  return GeneratorEnumerable;
}(IEnumerable);

module.exports = GeneratorEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],68:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultJoinSelector = require('../methods/defaultJoinSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultSelector = require('../methods/defaultSelector');

var IGrouping = require('./IGrouping');

var Entry = require('./Entry');

var createGrouping = function createGrouping(array, key, comparer, hasNext) {
  return new IGrouping(key, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var index;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = 0;

          case 1:
            if (!(array.length > index || hasNext())) {
              _context.next = 9;
              break;
            }

            if (!(array.length > index)) {
              _context.next = 7;
              break;
            }

            if (!comparer(key, array[index].key)) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return array[index].value;

          case 6:
            index++;

          case 7:
            _context.next = 1;
            break;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

var GroupJoinEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(GroupJoinEnumerable, _IEnumerable);

  var _super = _createSuper(GroupJoinEnumerable);

  function GroupJoinEnumerable(outer, inner) {
    var _this;

    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
    var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, GroupJoinEnumerable);
    _this = _super.call(this, outer);
    outerKeySelector = methods.asSelector(outerKeySelector);
    innerKeySelector = methods.asSelector(innerKeySelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function GroupJoinIterator() {
      var innerTemp, outerIndex, innerIndex, innerIterator, innerHasNext, _iterator, _step, outerElement, outerKey;

      return _regenerator.default.wrap(function GroupJoinIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              innerTemp = [], outerIndex = 0, innerIndex = 0, innerIterator = inner[Symbol.iterator]();

              innerHasNext = function innerHasNext() {
                var next = innerIterator.next();

                if (!next.done) {
                  var innerElement = next.value;
                  innerTemp.push(new Entry(innerKeySelector(innerElement, innerIndex++), innerElement));
                }

                return !next.done;
              };

              _iterator = _createForOfIteratorHelper(outer);
              _context2.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context2.next = 13;
                break;
              }

              outerElement = _step.value;
              outerKey = outerKeySelector(outerElement, outerIndex++);
              _context2.next = 10;
              return resultSelector(outerElement, createGrouping(innerTemp, outerKey, comparer, innerHasNext));

            case 10:
              outerIndex++;

            case 11:
              _context2.next = 5;
              break;

            case 13:
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](3);

              _iterator.e(_context2.t0);

            case 18:
              _context2.prev = 18;

              _iterator.f();

              return _context2.finish(18);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, GroupJoinIterator, null, [[3, 15, 18, 21]]);
    }));
    return _this;
  }

  return GroupJoinEnumerable;
}(IEnumerable);

module.exports = GroupJoinEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultJoinSelector":157,"../methods/defaultSelector":163,"../methods/methods":172,"./Entry":63,"./IGrouping":72,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],69:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultResultSelector = require('../methods/defaultResultSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var equalityPredicate = require('../methods/equalityPredicate');

var IGrouping = require('./IGrouping');

var GroupedEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(GroupedEnumerable, _IEnumerable);

  var _super = _createSuper(GroupedEnumerable);

  function GroupedEnumerable(source) {
    var _this;

    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultResultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, GroupedEnumerable);
    _this = _super.call(this, source);
    keySelector = methods.asSelector(keySelector);
    elementSelector = methods.asSelector(elementSelector);
    resultSelector = methods.asSelector(resultSelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function GroupedIterator() {
      var groupings, iterators, noneKey, it, hasNext, gi, grouping;
      return _regenerator.default.wrap(function GroupedIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              groupings = [];
              iterators = new Map();
              noneKey = Symbol('noneKey');
              it = source.getIterator();

              hasNext = function hasNext() {
                var next = it.next();

                if (!next.done) {
                  var key = keySelector(next.value);
                  var element = elementSelector(next.value);
                  var trueKey;

                  if (iterators.has(key)) {
                    trueKey = key;
                  } else {
                    trueKey = core.asEnumerable(iterators.keys()).where(equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                  }

                  if (trueKey === noneKey) {
                    iterators.set(key, []);
                    groupings.push(new IGrouping(key, function (key) {
                      return /*#__PURE__*/_regenerator.default.mark(function _callee() {
                        var array, index;
                        return _regenerator.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                array = iterators.get(key);
                                index = 0;

                              case 2:
                                if (!(array.length > index || hasNext())) {
                                  _context.next = 8;
                                  break;
                                }

                                if (!(array.length > index)) {
                                  _context.next = 6;
                                  break;
                                }

                                _context.next = 6;
                                return array[index++];

                              case 6:
                                _context.next = 2;
                                break;

                              case 8:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      });
                    }(key)));
                  } else {
                    if (key !== trueKey) {
                      iterators.set(key, iterators.get(trueKey));
                    }
                  }

                  iterators.get(key).push(element);
                }

                return !next.done;
              };

              gi = 0;

            case 6:
              if (!(groupings.length > gi || hasNext())) {
                _context2.next = 13;
                break;
              }

              if (!(groupings.length > gi)) {
                _context2.next = 11;
                break;
              }

              grouping = groupings[gi++];
              _context2.next = 11;
              return resultSelector(grouping.key, grouping);

            case 11:
              _context2.next = 6;
              break;

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, GroupedIterator);
    }));
    return _this;
  }

  return GroupedEnumerable;
}(IEnumerable);

module.exports = GroupedEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultResultSelector":161,"../methods/defaultSelector":163,"../methods/equalityPredicate":168,"../methods/methods":172,"./IGrouping":72,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],70:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeneratorEnumerable = require('./GeneratorEnumerable');

var core = require('../core/core');

var IChunk = /*#__PURE__*/function (_GeneratorEnumerable) {
  (0, _inherits2.default)(IChunk, _GeneratorEnumerable);

  var _super = _createSuper(IChunk);

  function IChunk(index, generator) {
    var _this;

    (0, _classCallCheck2.default)(this, IChunk);
    _this = _super.call(this, generator);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'index', function () {
      return index;
    }, true, true);
    var iterator = _this[Symbol.iterator];
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function IChunkIterator() {
      return iterator();
    });
    return _this;
  }

  return IChunk;
}(GeneratorEnumerable);

module.exports = IChunk;

},{"../core/core":35,"./GeneratorEnumerable":67,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],71:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var core = require('../core/core');

var defaultValueSetter = require('../methods/defaultValueSetter');

var defaultChildrenSetter = require('../methods/defaultChildrenSetter');

var ICombine = /*#__PURE__*/function (_ITree) {
  (0, _inherits2.default)(ICombine, _ITree);

  var _super = _createSuper(ICombine);

  function ICombine(key, parent, value, generator) {
    var _this;

    (0, _classCallCheck2.default)(this, ICombine);
    _this = _super.call(this, value, generator);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'parent', function () {
      return parent;
    }, true, true);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'key', function () {
      return key;
    }, true, true);
    var iterator = _this[Symbol.iterator];
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function ICombineIterator() {
      return iterator();
    });
    return _this;
  }

  (0, _createClass2.default)(ICombine, [{
    key: "toObject",
    value: function toObject() {
      var obj = (0, _get2.default)((0, _getPrototypeOf2.default)(ICombine.prototype), "toObject", this).call(this);
      if (typeof this.key !== 'undefined' && this.key !== null) obj.key = this.key;
      if (typeof this.parent !== 'undefined' && this.parent !== null) obj.parent = this.parent;
      return obj;
    }
  }, {
    key: "toValue",
    value: function toValue() {
      var childrenSetter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultChildrenSetter;
      var valueSetter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSetter;
      var obj = (0, _get2.default)((0, _getPrototypeOf2.default)(ICombine.prototype), "toObject", this).call(this, childrenSetter, valueSetter);
      if (typeof this.key !== 'undefined' && this.key !== null) obj.key = this.key;
      if (typeof this.parent !== 'undefined' && this.parent !== null) obj.parent = this.parent;
      return obj;
    }
  }]);
  return ICombine;
}(ITree);

module.exports = ICombine;

},{"../core/core":35,"../methods/defaultChildrenSetter":151,"../methods/defaultValueSetter":166,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],72:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeneratorEnumerable = require('./GeneratorEnumerable');

var core = require('../core/core');

var IGrouping = /*#__PURE__*/function (_GeneratorEnumerable) {
  (0, _inherits2.default)(IGrouping, _GeneratorEnumerable);

  var _super = _createSuper(IGrouping);

  function IGrouping(key, generator) {
    var _this;

    (0, _classCallCheck2.default)(this, IGrouping);
    _this = _super.call(this, generator);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'key', function () {
      return key;
    }, true, true);
    var iterator = _this[Symbol.iterator];
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function GroupingIterator() {
      return iterator();
    });
    return _this;
  }

  return IGrouping;
}(GeneratorEnumerable);

module.exports = IGrouping;

},{"../core/core":35,"./GeneratorEnumerable":67,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],73:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var methods = require('../methods/methods');

var defaultKeySelector = require('../methods/defaultKeySelector');

var defaultValueSelector = require('../methods/defaultValueSelector');

var defaultSameComparer = require('../methods/defaultSameComparer');

var defaultAction = require('../methods/defaultAction');

var IMapEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(IMapEnumerable, _IEnumerable);

  var _super = _createSuper(IMapEnumerable);

  function IMapEnumerable() {
    (0, _classCallCheck2.default)(this, IMapEnumerable);
    return _super.call(this, {});
  }

  (0, _createClass2.default)(IMapEnumerable, [{
    key: "toObject",
    value: function toObject() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      keySelector = methods.asSelector(keySelector);
      elementSelector = methods.asSelector(elementSelector);
      comparer = methods.asSameComparer(comparer);
      return this.toDictionary(keySelector, elementSelector, comparer).toObject();
    }
  }, {
    key: "toDictionary",
    value: function toDictionary() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      keySelector = methods.asSelector(keySelector);
      elementSelector = methods.asSelector(elementSelector);
      comparer = methods.asSameComparer(comparer);
      return (0, _get2.default)((0, _getPrototypeOf2.default)(IMapEnumerable.prototype), "toDictionary", this).call(this, keySelector, elementSelector, comparer);
    }
  }, {
    key: "toLookup",
    value: function toLookup() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
      var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      keySelector = methods.asSelector(keySelector);
      elementSelector = methods.asSelector(elementSelector);
      comparer = methods.asSameComparer(comparer);
      return (0, _get2.default)((0, _getPrototypeOf2.default)(IMapEnumerable.prototype), "toLookup", this).call(this, keySelector, elementSelector, comparer);
    }
  }, {
    key: "forEach",
    value: function forEach() {
      var _this = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var callback = function callback(element, key) {
        return action.call(thisArg, element, key, _this);
      };

      var _iterator = _createForOfIteratorHelper(this),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          callback(entry.value, entry.key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return IMapEnumerable;
}(IEnumerable);

module.exports = IMapEnumerable;

},{"../IEnumerable":31,"../methods/defaultAction":149,"../methods/defaultKeySelector":158,"../methods/defaultSameComparer":162,"../methods/defaultValueSelector":165,"../methods/methods":172,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],74:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var INode = /*#__PURE__*/function () {
  function INode(element, index) {
    (0, _classCallCheck2.default)(this, INode);
    this.element = element;
    this.index = index;
  }

  (0, _createClass2.default)(INode, [{
    key: "set",
    value: function set(element, index) {
      this.element = element;
      this.index = index;
      return this;
    }
  }]);
  return INode;
}();

module.exports = INode;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],75:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultComparer = require('../methods/defaultComparer');

var FIRST = Symbol.for('FIRST');

var IOrderedEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(IOrderedEnumerable, _IEnumerable);

  var _super = _createSuper(IOrderedEnumerable);

  function IOrderedEnumerable(source) {
    var _this;

    var orderByComparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    (0, _classCallCheck2.default)(this, IOrderedEnumerable);
    _this = _super.call(this, source);
    orderByComparer = methods.asComparer(orderByComparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function OrderedIterator() {
      var temp, first, _iterator, _step, _element, _iterator2, _step2, element;

      return _regenerator.default.wrap(function OrderedIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = [];
              first = FIRST;
              _iterator = _createForOfIteratorHelper(source);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _element = _step.value;

                  if (first === FIRST) {
                    first = _element;
                  } else if (orderByComparer(first, _element) <= 0) {
                    temp.push(_element);
                  } else {
                    temp.unshift(first);
                    first = _element;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!(first !== FIRST)) {
                _context.next = 24;
                break;
              }

              _context.next = 7;
              return first;

            case 7:
              _iterator2 = _createForOfIteratorHelper(temp.sort(orderByComparer));
              _context.prev = 8;

              _iterator2.s();

            case 10:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 16;
                break;
              }

              element = _step2.value;
              _context.next = 14;
              return element;

            case 14:
              _context.next = 10;
              break;

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](8);

              _iterator2.e(_context.t0);

            case 21:
              _context.prev = 21;

              _iterator2.f();

              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, OrderedIterator, null, [[8, 18, 21, 24]]);
    }));
    core.defineProperty((0, _assertThisInitialized2.default)(_this), IOrderedEnumerable.source, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), IOrderedEnumerable.orderByComparer, orderByComparer);
    return _this;
  }

  (0, _createClass2.default)(IOrderedEnumerable, [{
    key: "thenBy",
    value: function thenBy() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      keySelector = methods.asSelector(keySelector);
      comparer = methods.asComparer(comparer);
      return new ThenByEnumerable(this, keySelector, comparer);
    }
  }, {
    key: "thenByDescending",
    value: function thenByDescending() {
      var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
      keySelector = methods.asSelector(keySelector);
      comparer = methods.asComparer(comparer);
      return new ThenByDescendingEnumerable(this, keySelector, comparer);
    }
  }]);
  return IOrderedEnumerable;
}(IEnumerable);

IOrderedEnumerable.source = Symbol('IOrderedEnumerable.source');
IOrderedEnumerable.orderByComparer = Symbol('IOrderedEnumerable.orderByComparer');
module.exports = IOrderedEnumerable;

var ThenByEnumerable = require('./ThenByEnumerable');

var ThenByDescendingEnumerable = require('./ThenByDescendingEnumerable');

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultComparer":152,"../methods/defaultSelector":163,"../methods/methods":172,"./ThenByDescendingEnumerable":134,"./ThenByEnumerable":135,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],76:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeneratorEnumerable = require('./GeneratorEnumerable');

var core = require('../core/core');

var NotAncestorOfException = require('../core/exceptions/NotAncestorOfException');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultValueSetter = require('../methods/defaultValueSetter');

var defaultChildrenSetter = require('../methods/defaultChildrenSetter');

var ITree = /*#__PURE__*/function (_GeneratorEnumerable) {
  (0, _inherits2.default)(ITree, _GeneratorEnumerable);

  var _super = _createSuper(ITree);

  function ITree(value, generator) {
    var _this;

    (0, _classCallCheck2.default)(this, ITree);
    _this = _super.call(this, generator);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'value', function () {
      return value;
    }, true, true);
    var iterator = _this[Symbol.iterator];
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function ITreeIterator() {
      return iterator();
    });
    core.defineProperty((0, _assertThisInitialized2.default)(_this), 'children', function () {
      return new GeneratorEnumerable(iterator);
    }, true, true);
    return _this;
  }

  (0, _createClass2.default)(ITree, [{
    key: "values",
    get: function get() {
      return this.children.select(function (child) {
        return child.value;
      });
    }
  }, {
    key: "getChild",
    value: function getChild(index) {
      return this.children.elementAt(index);
    }
  }, {
    key: "getValue",
    value: function getValue(index) {
      return this.getChild(index).value;
    }
  }, {
    key: "toValue",
    value: function toValue() {
      var childrenSetter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultChildrenSetter;
      var valueSetter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSetter;
      valueSetter = methods.asSetter(valueSetter);
      childrenSetter = methods.asSetter(childrenSetter);
      var obj = {};

      if (typeof this.value !== 'undefined') {
        valueSetter(obj, this.value);
      }

      var children = this.select(function (sub) {
        return sub.toValue(childrenSetter, valueSetter);
      }).toArray();

      if (children.length) {
        childrenSetter(obj, children);
      }

      return obj;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var obj = {
        value: this.value
      };
      var children = this.select(function (sub) {
        return sub.toObject();
      }).toArray();

      if (children.length) {
        obj.children = children;
      }

      if (!core.isUndefined(this.parent)) {
        obj.parent = this.parent;
      }

      return obj;
    }
    /**
     * 广度优先遍历
     */

  }, {
    key: "breadthTraverse",
    value: function breadthTraverse() {
      return new BreadthEnumerable(this);
    }
    /**
     * 搜索(广度优先搜索)
     */

  }, {
    key: "breadthSearch",
    value: function breadthSearch() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return this.breadthTraverse().first(predicate);
    }
    /**
     * 搜索符合条件的子树(广度优先搜索)
     */

  }, {
    key: "breadthSubTree",
    value: function breadthSubTree(predicate) {
      return new BreadthSubTreeEnumerable(this, predicate);
    }
    /**
     * 深度优先遍历
     */

  }, {
    key: "depthTraverse",
    value: function depthTraverse() {
      return new DepthEnumerable(this);
    }
    /**
     * 搜索(深度优先搜索)
     */

  }, {
    key: "depthSearch",
    value: function depthSearch() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      return this.depthTraverse().first(predicate);
    }
    /**
     * 搜索符合条件的子树(深度优先搜索)
     */

  }, {
    key: "depthSubTree",
    value: function depthSubTree(predicate) {
      return new DepthSubTreeEnumerable(this, predicate);
    }
    /**
     * 多个节点的最小公共祖先
     */

  }, {
    key: "lowestAncestor",
    value: function lowestAncestor() {
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      var matchCount = nodes.length;
      var isMatch = core.repeat(false, matchCount);

      var search = function search(current) {
        var index = 0;

        var _iterator = _createForOfIteratorHelper(nodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;

            if (!isMatch[index] && ITree.isSameNode(current, node)) {
              isMatch[index] = true;
              matchCount--;
              break;
            }

            index++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(current),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var child = _step2.value;

            var _result = search(child);

            if (_result) {
              return _result;
            } else if (matchCount === 0) {
              return current;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return false;
      };

      var result = search(this);

      if (result) {
        return result.value;
      } else {
        throw new NotAncestorOfException(this, nodes[isMatch.map(function (match, index) {
          return {
            match: match,
            index: index
          };
        }).find(function (_ref) {
          var match = _ref.match;
          return !match;
        }).index]);
      }
    }
    /**
     * 是否是子节点
     */

  }, {
    key: "isChildOf",
    value: function isChildOf(root) {
      return root.isParentOf(this);
    }
    /**
     * 是否是父节点
     */

  }, {
    key: "isParentOf",
    value: function isParentOf(node) {
      return this.any(function (current) {
        return ITree.isSameNode(current, node);
      });
    }
    /**
     * 是否是后辈节点
     */

  }, {
    key: "isDescendantOf",
    value: function isDescendantOf(root) {
      return root.isAncestorOf(this);
    }
    /**
     * 是否是祖先节点
     */

  }, {
    key: "isAncestorOf",
    value: function isAncestorOf(node) {
      var search = function search(current) {
        if (ITree.isSameNode(current, node)) {
          return true;
        } else {
          var _iterator3 = _createForOfIteratorHelper(current),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var child = _step3.value;

              if (search(child)) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      };

      return search(this);
    }
    /**
     * 获取一个节点的父节点
     */

  }, {
    key: "getParent",
    value: function getParent(node) {
      return this.getParentNode(node).value;
    }
  }, {
    key: "getParentNode",
    value: function getParentNode(node) {
      var search = function search(current) {
        if (ITree.isSameNode(current, node)) {
          return true;
        } else {
          var _iterator4 = _createForOfIteratorHelper(current),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var child = _step4.value;
              var res = search(child);

              if (res === true) {
                return current;
              } else if (res) {
                return res;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return false;
        }
      };

      var result = search(this);

      if (result && result !== true) {
        return result;
      } else {
        throw new NotAncestorOfException(this, node);
      }
    }
    /**
     * 同辈节点的操作
     */

  }, {
    key: "prevAllNodes",
    value: function prevAllNodes(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new PrevNodesEnumerable(this, node, predicate);
    }
  }, {
    key: "prevNode",
    value: function prevNode(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return this.prevAllNodes(node, predicate).last();
    }
  }, {
    key: "nextAllNodes",
    value: function nextAllNodes(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new NextNodesEnumerable(this, node, predicate);
    }
  }, {
    key: "nextNode",
    value: function nextNode(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return this.nextAllNodes(node, predicate).first();
    }
  }, {
    key: "siblingNodes",
    value: function siblingNodes(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new SiblingNodesEnumerable(this, node, predicate);
    }
    /**
     * 同辈节点值的操作
     */

  }, {
    key: "prevAll",
    value: function prevAll(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new PrevEnumerable(this, node, predicate);
    }
  }, {
    key: "prev",
    value: function prev(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return this.prevAll(node, predicate).last();
    }
  }, {
    key: "nextAll",
    value: function nextAll(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new NextEnumerable(this, node, predicate);
    }
  }, {
    key: "next",
    value: function next(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return this.nextAll(node, predicate).first();
    }
  }, {
    key: "siblings",
    value: function siblings(node) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      return new SiblingsEnumerable(this, node, predicate);
    }
    /**
     * 搜索当前节点的路径(深度优先搜索)
     */

  }, {
    key: "path",
    value: function path(root) {
      return root.pathTo(this);
    }
  }, {
    key: "pathTo",
    value: function pathTo(node) {
      return new PathToEnumerable(this, node);
    }
  }, {
    key: "pathNodes",
    value: function pathNodes(root) {
      return root.pathNodesTo(this);
    }
  }, {
    key: "pathNodesTo",
    value: function pathNodesTo(node) {
      return new PathNodesToEnumerable(this, node);
    }
    /**
     * 广度
     */

  }, {
    key: "degree",
    value: function degree() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      predicate = methods.asPredicate(predicate);
      return this.children.count(function (element, index) {
        return predicate(element.value, index);
      });
    }
    /**
     * 深度
     */

  }, {
    key: "depth",
    value: function depth() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      predicate = methods.asPredicate(predicate);
      return this.children.where(function (element, index) {
        return predicate(element.value, index);
      }).select(function (child) {
        return child.depth(predicate);
      }).maxOrDefault(0) + 1;
    }
    /**
     * 是否为二叉树
     */

  }, {
    key: "isBinary",
    value: function isBinary() {
      return this.degree() <= 2 && this.children.all(function (child) {
        return child.isBinary();
      });
    }
    /**
     * 是否为满二叉树(国际标准)
     */

  }, {
    key: "isFullBinary",
    value: function isFullBinary() {
      var degree = this.degree();
      return degree === 0 || degree === 2 && this.children.all(function (child) {
        return child.isFullBinary();
      });
    }
    /**
     * 是否为完全二叉树
     */

  }, {
    key: "isCompleteBinary",
    value: function isCompleteBinary() {
      var queue = [this];
      var current;
      var end = false;

      while (queue.length) {
        current = queue.shift();

        if (end) {
          if (current.degree() !== 0) {
            return false;
          }
        } else {
          var degree = current.degree();

          if (degree > 2) {
            return false;
          }

          if (degree !== 2) {
            end = true;
          }

          queue.push.apply(queue, (0, _toConsumableArray2.default)(current.children));
        }
      }

      return true;
    }
    /**
     * 是否为完美二叉树
     */

  }, {
    key: "isPerfectBinary",
    value: function isPerfectBinary() {
      var line = [this];
      var nextLine = [];
      var current;

      while (line.length) {
        current = line.shift();
        var degree = current.degree();

        if (degree === 0) {
          if (nextLine.length) {
            return false;
          }
        } else if (degree === 2) {
          var _nextLine;

          (_nextLine = nextLine).push.apply(_nextLine, (0, _toConsumableArray2.default)(current.children));
        } else {
          return false;
        }

        if (!line.length && nextLine.length) {
          line = nextLine;
          nextLine = [];
        }
      }

      return true;
    }
  }, {
    key: "asBinary",
    value: function asBinary() {
      return new BinaryTree(this);
    }
  }], [{
    key: "isSameNode",
    value: function isSameNode(current, node) {
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
      comparer = methods.asComparer(comparer);
      return current === node || (node instanceof ITree ? comparer(current.value, node.value) : comparer(current.value, node));
    }
  }]);
  return ITree;
}(GeneratorEnumerable);

module.exports = ITree;

var BinaryTree = require('./BinaryTree');

var PathToEnumerable = require('./PathToEnumerable');

var PathNodesToEnumerable = require('./PathNodesToEnumerable');

var BreadthEnumerable = require('./BreadthEnumerable');

var DepthEnumerable = require('./DepthEnumerable');

var BreadthSubTreeEnumerable = require('./BreadthSubTreeEnumerable');

var DepthSubTreeEnumerable = require('./DepthSubTreeEnumerable');

var PrevEnumerable = require('./PrevEnumerable');

var NextEnumerable = require('./NextEnumerable');

var SiblingsEnumerable = require('./SiblingsEnumerable');

var PrevNodesEnumerable = require('./PrevNodesEnumerable');

var NextNodesEnumerable = require('./NextNodesEnumerable');

var SiblingNodesEnumerable = require('./SiblingNodesEnumerable');

},{"../core/core":35,"../core/exceptions/NotAncestorOfException":41,"../methods/defaultChildrenSetter":151,"../methods/defaultEqualityComparer":153,"../methods/defaultPredicate":160,"../methods/defaultValueSetter":166,"../methods/methods":172,"./BinaryTree":48,"./BreadthEnumerable":49,"./BreadthSubTreeEnumerable":50,"./DepthEnumerable":57,"./DepthSubTreeEnumerable":58,"./GeneratorEnumerable":67,"./NextEnumerable":90,"./NextNodesEnumerable":91,"./PathNodesToEnumerable":96,"./PathToEnumerable":97,"./PrevEnumerable":104,"./PrevNodesEnumerable":105,"./SiblingNodesEnumerable":117,"./SiblingsEnumerable":118,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23}],77:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var InOrderEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(InOrderEnumerable, _IEnumerable);

  var _super = _createSuper(InOrderEnumerable);

  function InOrderEnumerable(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, InOrderEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function InOrderIterator() {
      return _regenerator.default.wrap(function InOrderIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!tree.hasLeft()) {
                _context.next = 2;
                break;
              }

              return _context.delegateYield(new InOrderEnumerable(tree.left), "t0", 2);

            case 2:
              _context.next = 4;
              return tree.value;

            case 4:
              if (!tree.hasRight()) {
                _context.next = 6;
                break;
              }

              return _context.delegateYield(new InOrderEnumerable(tree.right), "t1", 6);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, InOrderIterator);
    }));
    return _this;
  }

  return InOrderEnumerable;
}(IEnumerable);

module.exports = InOrderEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],78:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BinaryTree = require('./BinaryTree');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var InOrderTree = /*#__PURE__*/function (_BinaryTree) {
  (0, _inherits2.default)(InOrderTree, _BinaryTree);

  var _super = _createSuper(InOrderTree);

  function InOrderTree(source) {
    (0, _classCallCheck2.default)(this, InOrderTree);
    var tree = {};
    var array = source.toArray();

    if (array.length) {
      var nodes = [tree];

      for (var i = 1; i < array.length; i += 2) {
        var node = nodes.shift();

        if (array.length - i >= 2) {
          var left = {};
          var right = {};
          node.children = [left, right];
          nodes.push(left, right);
        } else {
          var _left = {};
          node.children = [_left];
          nodes.push(_left);
        }
      }

      var index = 0;

      var fill = function fill(node) {
        if (node.children && node.children.length >= 1) {
          fill(node.children[0]);
        }

        node.value = array[index++];

        if (node.children && node.children.length === 2) {
          fill(node.children[1]);
        }
      };

      fill(tree);
    } else {
      throw new NoSuchElementsException();
    }

    return _super.call(this, tree);
  }

  return InOrderTree;
}(BinaryTree);

module.exports = InOrderTree;

},{"../core/exceptions/NoSuchElementsException":40,"./BinaryTree":48,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],79:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var IndicesEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(IndicesEnumerable, _IEnumerable);

  var _super = _createSuper(IndicesEnumerable);

  function IndicesEnumerable(source, indices) {
    var _this;

    (0, _classCallCheck2.default)(this, IndicesEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function IndicesIterator() {
      var iterator, next, index, array, _iterator, _step, element;

      return _regenerator.default.wrap(function IndicesIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iterator = indices[Symbol.iterator]();
              next = iterator.next();

              if (next.done) {
                _context.next = 32;
                break;
              }

              index = 0;
              array = [];
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 6;

              _iterator.s();

            case 8:
              if ((_step = _iterator.n()).done) {
                _context.next = 24;
                break;
              }

              element = _step.value;
              array.push(element);

              if (!(index === next.value)) {
                _context.next = 21;
                break;
              }

              _context.next = 14;
              return element;

            case 14:
              if (!(!(next = iterator.next()).done && next.value <= index)) {
                _context.next = 19;
                break;
              }

              _context.next = 17;
              return array[next.value];

            case 17:
              _context.next = 14;
              break;

            case 19:
              if (!next.done) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("break", 24);

            case 21:
              index++;

            case 22:
              _context.next = 8;
              break;

            case 24:
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](6);

              _iterator.e(_context.t0);

            case 29:
              _context.prev = 29;

              _iterator.f();

              return _context.finish(29);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, IndicesIterator, null, [[6, 26, 29, 32]]);
    }));
    return _this;
  }

  return IndicesEnumerable;
}(IEnumerable);

module.exports = IndicesEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],80:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var IntersectEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(IntersectEnumerable, _IEnumerable);

  var _super = _createSuper(IntersectEnumerable);

  function IntersectEnumerable(source, other) {
    var _this;

    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, IntersectEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asEqualityComparer(comparer);
    other = core.asEnumerable(other);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function IntersectIterator() {
      var temp, _iterator, _step, element;

      return _regenerator.default.wrap(function IntersectIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = core.asEnumerable([]);
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;

              if (!other.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              if (temp.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              temp.push(element);
              _context.next = 11;
              return element;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, IntersectIterator, null, [[2, 15, 18, 21]]);
    }));
    return _this;
  }

  return IntersectEnumerable;
}(IEnumerable);

module.exports = IntersectEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],81:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var IterableEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(IterableEnumerable, _IEnumerable);

  var _super = _createSuper(IterableEnumerable);

  function IterableEnumerable(iterable) {
    var _this;

    (0, _classCallCheck2.default)(this, IterableEnumerable);
    _this = _super.call(this, iterable);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function IterableIterator() {
      return _regenerator.default.wrap(function IterableIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(iterable, "t0", 1);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, IterableIterator);
    }));
    return _this;
  }

  return IterableEnumerable;
}(IEnumerable);

module.exports = IterableEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],82:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IterableEnumerable = require('./IterableEnumerable');

var core = require('../core/core');

var IteratorEnumerable = /*#__PURE__*/function (_IterableEnumerable) {
  (0, _inherits2.default)(IteratorEnumerable, _IterableEnumerable);

  var _super = _createSuper(IteratorEnumerable);

  function IteratorEnumerable(iterator) {
    var _this;

    (0, _classCallCheck2.default)(this, IteratorEnumerable);
    _this = _super.call(this, iterator);
    var temp = [],
        first = true;
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function IteratorIterator() {
      var next;
      return _regenerator.default.wrap(function IteratorIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!first) {
                _context.next = 10;
                break;
              }

            case 1:
              if ((next = iterator.next()).done) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return next.value;

            case 4:
              temp.push(next.value);
              _context.next = 1;
              break;

            case 7:
              first = false;
              _context.next = 11;
              break;

            case 10:
              return _context.delegateYield(temp, "t0", 11);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, IteratorIterator);
    }));
    return _this;
  }

  return IteratorEnumerable;
}(IterableEnumerable);

module.exports = IteratorEnumerable;

},{"../core/core":35,"./IterableEnumerable":81,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],83:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultJoinSelector = require('../methods/defaultJoinSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultSelector = require('../methods/defaultSelector');

var JoinEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(JoinEnumerable, _IEnumerable);

  var _super = _createSuper(JoinEnumerable);

  function JoinEnumerable(outer, inner) {
    var _this;

    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
    var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, JoinEnumerable);
    _this = _super.call(this, outer);
    outerKeySelector = methods.asSelector(outerKeySelector);
    innerKeySelector = methods.asSelector(innerKeySelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function JoinIterator() {
      var innerTemp, outerIndex, _iterator, _step, outerElement, outerKey, innerIndex, _iterator2, _step2, innerElement, innerKey, _iterator3, _step3, innerValue;

      return _regenerator.default.wrap(function JoinIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              innerTemp = [], outerIndex = 0;
              _iterator = _createForOfIteratorHelper(outer);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 52;
                break;
              }

              outerElement = _step.value;
              outerKey = outerKeySelector(outerElement, outerIndex);

              if (!(outerIndex === 0)) {
                _context.next = 31;
                break;
              }

              innerIndex = 0;
              _iterator2 = _createForOfIteratorHelper(inner);
              _context.prev = 10;

              _iterator2.s();

            case 12:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 21;
                break;
              }

              innerElement = _step2.value;
              innerKey = innerKeySelector(innerElement, innerIndex++);
              innerTemp.push({
                key: innerKey,
                element: innerElement
              });

              if (!comparer(outerKey, innerKey)) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return resultSelector(outerElement, innerElement);

            case 19:
              _context.next = 12;
              break;

            case 21:
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](10);

              _iterator2.e(_context.t0);

            case 26:
              _context.prev = 26;

              _iterator2.f();

              return _context.finish(26);

            case 29:
              _context.next = 49;
              break;

            case 31:
              _iterator3 = _createForOfIteratorHelper(innerTemp);
              _context.prev = 32;

              _iterator3.s();

            case 34:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 41;
                break;
              }

              innerValue = _step3.value;

              if (!comparer(outerKey, innerValue.key)) {
                _context.next = 39;
                break;
              }

              _context.next = 39;
              return resultSelector(outerElement, innerValue.element);

            case 39:
              _context.next = 34;
              break;

            case 41:
              _context.next = 46;
              break;

            case 43:
              _context.prev = 43;
              _context.t1 = _context["catch"](32);

              _iterator3.e(_context.t1);

            case 46:
              _context.prev = 46;

              _iterator3.f();

              return _context.finish(46);

            case 49:
              outerIndex++;

            case 50:
              _context.next = 4;
              break;

            case 52:
              _context.next = 57;
              break;

            case 54:
              _context.prev = 54;
              _context.t2 = _context["catch"](2);

              _iterator.e(_context.t2);

            case 57:
              _context.prev = 57;

              _iterator.f();

              return _context.finish(57);

            case 60:
            case "end":
              return _context.stop();
          }
        }
      }, JoinIterator, null, [[2, 54, 57, 60], [10, 23, 26, 29], [32, 43, 46, 49]]);
    }));
    return _this;
  }

  return JoinEnumerable;
}(IEnumerable);

module.exports = JoinEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultJoinSelector":157,"../methods/defaultSelector":163,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],84:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultJoinSelector = require('../methods/defaultJoinSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultSelector = require('../methods/defaultSelector');

var LeftJoinEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(LeftJoinEnumerable, _IEnumerable);

  var _super = _createSuper(LeftJoinEnumerable);

  function LeftJoinEnumerable(outer, inner) {
    var _this;

    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
    var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, LeftJoinEnumerable);
    _this = _super.call(this, outer);
    outerKeySelector = methods.asSelector(outerKeySelector);
    innerKeySelector = methods.asSelector(innerKeySelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function LeftJoinIterator() {
      var innerTemp, outerIndex, _iterator, _step, outerElement, outerKey, innerIndex, match, _iterator2, _step2, innerElement, innerKey, _match, _iterator3, _step3, innerValue;

      return _regenerator.default.wrap(function LeftJoinIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              innerTemp = [], outerIndex = 0;
              _iterator = _createForOfIteratorHelper(outer);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 62;
                break;
              }

              outerElement = _step.value;
              outerKey = outerKeySelector(outerElement, outerIndex);

              if (!(outerIndex === 0)) {
                _context.next = 36;
                break;
              }

              innerIndex = 0;
              match = false;
              _iterator2 = _createForOfIteratorHelper(inner);
              _context.prev = 11;

              _iterator2.s();

            case 13:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 23;
                break;
              }

              innerElement = _step2.value;
              innerKey = innerKeySelector(innerElement, innerIndex++);
              innerTemp.push({
                key: innerKey,
                element: innerElement
              });

              if (!comparer(outerKey, innerKey)) {
                _context.next = 21;
                break;
              }

              match = true;
              _context.next = 21;
              return resultSelector(outerElement, innerElement);

            case 21:
              _context.next = 13;
              break;

            case 23:
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](11);

              _iterator2.e(_context.t0);

            case 28:
              _context.prev = 28;

              _iterator2.f();

              return _context.finish(28);

            case 31:
              if (match) {
                _context.next = 34;
                break;
              }

              _context.next = 34;
              return resultSelector(outerElement);

            case 34:
              _context.next = 59;
              break;

            case 36:
              _match = false;
              _iterator3 = _createForOfIteratorHelper(innerTemp);
              _context.prev = 38;

              _iterator3.s();

            case 40:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 48;
                break;
              }

              innerValue = _step3.value;

              if (!comparer(outerKey, innerValue.key)) {
                _context.next = 46;
                break;
              }

              _match = true;
              _context.next = 46;
              return resultSelector(outerElement, innerValue.element);

            case 46:
              _context.next = 40;
              break;

            case 48:
              _context.next = 53;
              break;

            case 50:
              _context.prev = 50;
              _context.t1 = _context["catch"](38);

              _iterator3.e(_context.t1);

            case 53:
              _context.prev = 53;

              _iterator3.f();

              return _context.finish(53);

            case 56:
              if (_match) {
                _context.next = 59;
                break;
              }

              _context.next = 59;
              return resultSelector(outerElement);

            case 59:
              outerIndex++;

            case 60:
              _context.next = 4;
              break;

            case 62:
              _context.next = 67;
              break;

            case 64:
              _context.prev = 64;
              _context.t2 = _context["catch"](2);

              _iterator.e(_context.t2);

            case 67:
              _context.prev = 67;

              _iterator.f();

              return _context.finish(67);

            case 70:
            case "end":
              return _context.stop();
          }
        }
      }, LeftJoinIterator, null, [[2, 64, 67, 70], [11, 25, 28, 31], [38, 50, 53, 56]]);
    }));
    return _this;
  }

  return LeftJoinEnumerable;
}(IEnumerable);

module.exports = LeftJoinEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultJoinSelector":157,"../methods/defaultSelector":163,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],85:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var LeftPadEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(LeftPadEnumerable, _IEnumerable);

  var _super = _createSuper(LeftPadEnumerable);

  function LeftPadEnumerable(source, length, value) {
    var _this;

    (0, _classCallCheck2.default)(this, LeftPadEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ConcatIterator() {
      var temp, i;
      return _regenerator.default.wrap(function ConcatIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = source.toArray();
              i = temp.length;

            case 2:
              if (!(i < length)) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return value;

            case 5:
              i++;
              _context.next = 2;
              break;

            case 8:
              return _context.delegateYield(temp, "t0", 9);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, ConcatIterator);
    }));
    return _this;
  }

  return LeftPadEnumerable;
}(IEnumerable);

module.exports = LeftPadEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],86:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Dictionary = require('./Dictionary');

var Lookup = /*#__PURE__*/function (_Dictionary) {
  (0, _inherits2.default)(Lookup, _Dictionary);

  var _super = _createSuper(Lookup);

  function Lookup() {
    (0, _classCallCheck2.default)(this, Lookup);
    return _super.call(this);
  }

  return Lookup;
}(Dictionary);

module.exports = Lookup;

},{"./Dictionary":59,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],87:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IMapEnumerable = require('./IMapEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSameComparer = require('../methods/defaultSameComparer');

var equalityPredicate = require('../methods/equalityPredicate');

var Entry = require('./Entry');

var MapEnumerable = /*#__PURE__*/function (_IMapEnumerable) {
  (0, _inherits2.default)(MapEnumerable, _IMapEnumerable);

  var _super = _createSuper(MapEnumerable);

  function MapEnumerable(map) {
    var _this;

    (0, _classCallCheck2.default)(this, MapEnumerable);
    _this = _super.call(this);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), core.delegate, map);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function MapIterator() {
      var _iterator, _step, key;

      return _regenerator.default.wrap(function MapIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(map.keys());
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 9;
                break;
              }

              key = _step.value;
              _context.next = 7;
              return new Entry(key, map.get(key));

            case 7:
              _context.next = 3;
              break;

            case 9:
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

              _iterator.e(_context.t0);

            case 14:
              _context.prev = 14;

              _iterator.f();

              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, MapIterator, null, [[1, 11, 14, 17]]);
    }));
    return _this;
  }

  (0, _createClass2.default)(MapEnumerable, [{
    key: "get",
    value: function get(key) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
      comparer = methods.asSameComparer(comparer);

      if (comparer === defaultSameComparer) {
        return this[core.delegate].get(key);
      } else {
        return this[core.delegate].get(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
      comparer = methods.asSameComparer(comparer);

      if (comparer === defaultSameComparer) {
        this[core.delegate].set(key, value);
      } else {
        this[core.delegate].set(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)), value);
      }

      return this;
    }
  }, {
    key: "has",
    value: function has(key) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
      comparer = methods.asSameComparer(comparer);

      if (comparer === defaultSameComparer) {
        return this[core.delegate].has(key);
      } else {
        return this.keys().contains(key, comparer);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
      comparer = methods.asSameComparer(comparer);

      if (comparer === defaultSameComparer) {
        return this[core.delegate].delete(key);
      } else {
        return this[core.delegate].delete(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      return this[core.delegate].keys().asEnumerable();
    }
  }, {
    key: "values",
    value: function values() {
      return this[core.delegate].values().asEnumerable();
    }
  }, {
    key: "entries",
    value: function entries() {
      return this[core.delegate].entries().asEnumerable();
    }
  }]);
  return MapEnumerable;
}(IMapEnumerable);

module.exports = MapEnumerable;

},{"../core/core":35,"../methods/defaultSameComparer":162,"../methods/equalityPredicate":168,"../methods/methods":172,"./Entry":63,"./IMapEnumerable":73,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],88:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultResultSelector = require('../methods/defaultResultSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var IGrouping = require('./IGrouping');

var NearGroupedEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(NearGroupedEnumerable, _IEnumerable);

  var _super = _createSuper(NearGroupedEnumerable);

  function NearGroupedEnumerable(source) {
    var _this;

    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultResultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, NearGroupedEnumerable);
    _this = _super.call(this, source);
    keySelector = methods.asSelector(keySelector);
    elementSelector = methods.asSelector(elementSelector);
    resultSelector = methods.asSelector(resultSelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function NearGroupedIterator() {
      var groupings, array, noneKey, prevKey, it, hasNext, gi, grouping;
      return _regenerator.default.wrap(function NearGroupedIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              groupings = [];
              array = [];
              noneKey = Symbol('noneKey');
              prevKey = noneKey;
              it = source[Symbol.iterator]();

              hasNext = function hasNext() {
                var next = it.next();

                if (!next.done) {
                  var key = keySelector(next.value);
                  var element = elementSelector(next.value);

                  if (prevKey === noneKey || !comparer(key, prevKey)) {
                    array = [];
                    prevKey = key;
                    groupings.push(new IGrouping(key, function (array) {
                      return /*#__PURE__*/_regenerator.default.mark(function _callee() {
                        var index;
                        return _regenerator.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                index = 0;

                              case 1:
                                if (!(array.length > index || hasNext())) {
                                  _context.next = 7;
                                  break;
                                }

                                if (!(array.length > index)) {
                                  _context.next = 5;
                                  break;
                                }

                                _context.next = 5;
                                return array[index++];

                              case 5:
                                _context.next = 1;
                                break;

                              case 7:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      });
                    }(array)));
                  }

                  array.push(element);
                }

                return !next.done;
              };

              gi = 0;

            case 7:
              if (!(groupings.length > gi || hasNext())) {
                _context2.next = 14;
                break;
              }

              if (!(groupings.length > gi)) {
                _context2.next = 12;
                break;
              }

              grouping = groupings[gi++];
              _context2.next = 12;
              return resultSelector(grouping.key, grouping);

            case 12:
              _context2.next = 7;
              break;

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, NearGroupedIterator);
    }));
    return _this;
  }

  return NearGroupedEnumerable;
}(IEnumerable);

module.exports = NearGroupedEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultResultSelector":161,"../methods/defaultSelector":163,"../methods/methods":172,"./IGrouping":72,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],89:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IChunk = require('./IChunk');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultFalsePredicate = require('../methods/defaultFalsePredicate');

var NearSplitEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(NearSplitEnumerable, _IEnumerable);

  var _super = _createSuper(NearSplitEnumerable);

  function NearSplitEnumerable(source) {
    var _this;

    var splitPredicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFalsePredicate;
    (0, _classCallCheck2.default)(this, NearSplitEnumerable);
    _this = _super.call(this, source);
    splitPredicate = methods.asPredicate(splitPredicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function NearSplitIterator() {
      var iterator, chunkIndex, chunk, chunks, index, current, addChunk, hasNext, ci;
      return _regenerator.default.wrap(function NearSplitIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              iterator = source[Symbol.iterator]();
              chunkIndex = 0;
              chunk = [];
              chunks = [];
              index = 0;

              addChunk = function addChunk() {
                chunks.push(current = new IChunk(chunkIndex++, function (chunk) {
                  return /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var i;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            i = 0;

                          case 1:
                            if (!(chunk.length > i || hasNext() && chunk.length > i)) {
                              _context.next = 6;
                              break;
                            }

                            _context.next = 4;
                            return chunk[i++];

                          case 4:
                            _context.next = 1;
                            break;

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  });
                }(chunk)));
              };

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  return false;
                } else {
                  if (splitPredicate(next.value, index++)) {
                    if (chunk.length || current && current.index === 0) {
                      chunk = [];
                      addChunk();
                    } else {
                      return hasNext();
                    }
                  } else {
                    chunk.push(next.value);
                  }

                  return true;
                }
              };

              addChunk();
              ci = 0;

            case 9:
              if (!(chunks.length > ci || hasNext())) {
                _context2.next = 15;
                break;
              }

              if (!(chunks.length > ci)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 13;
              return chunks[ci++];

            case 13:
              _context2.next = 9;
              break;

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, NearSplitIterator);
    }));
    return _this;
  }

  return NearSplitEnumerable;
}(IEnumerable);

module.exports = NearSplitEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultFalsePredicate":155,"../methods/methods":172,"./IChunk":70,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],90:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var NextEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(NextEnumerable, _IEnumerable);

  var _super = _createSuper(NextEnumerable);

  function NextEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, NextEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function NextIterator() {
      var parent, next, _iterator, _step, child;

      return _regenerator.default.wrap(function NextIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              next = false;
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              child = _step.value;

              if (!(next && predicate(child.value))) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return child.value;

            case 10:
              if (!next && ITree.isSameNode(child, node)) {
                next = true;
              }

            case 11:
              _context.next = 5;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, NextIterator, null, [[3, 15, 18, 21]]);
    }));
    return _this;
  }

  return NextEnumerable;
}(IEnumerable);

module.exports = NextEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],91:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var NextEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(NextEnumerable, _IEnumerable);

  var _super = _createSuper(NextEnumerable);

  function NextEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, NextEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function NextNodesIterator() {
      var parent, next, _iterator, _step, child;

      return _regenerator.default.wrap(function NextNodesIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              next = false;
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              child = _step.value;

              if (!(next && predicate(child.value))) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return child;

            case 10:
              if (!next && ITree.isSameNode(child, node)) {
                next = true;
              }

            case 11:
              _context.next = 5;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, NextNodesIterator, null, [[3, 15, 18, 21]]);
    }));
    return _this;
  }

  return NextEnumerable;
}(IEnumerable);

module.exports = NextEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],92:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IMapEnumerable = require('./IMapEnumerable');

var core = require('../core/core');

var Entry = require('./Entry');

var ObjectEnumerable = /*#__PURE__*/function (_IMapEnumerable) {
  (0, _inherits2.default)(ObjectEnumerable, _IMapEnumerable);

  var _super = _createSuper(ObjectEnumerable);

  function ObjectEnumerable(source) {
    var _this;

    (0, _classCallCheck2.default)(this, ObjectEnumerable);
    _this = _super.call(this);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ObjectIterator() {
      var _i, _Object$keys, key;

      return _regenerator.default.wrap(function ObjectIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _i = 0, _Object$keys = Object.keys(source);

            case 1:
              if (!(_i < _Object$keys.length)) {
                _context.next = 8;
                break;
              }

              key = _Object$keys[_i];
              _context.next = 5;
              return new Entry(key, source[key]);

            case 5:
              _i++;
              _context.next = 1;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, ObjectIterator);
    }));
    return _this;
  }

  return ObjectEnumerable;
}(IMapEnumerable);

module.exports = ObjectEnumerable;

},{"../core/core":35,"./Entry":63,"./IMapEnumerable":73,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],93:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var isInstanceOfBoolean = function isInstanceOfBoolean(element) {
  return element instanceof Boolean || element === true || element === false;
};

var isInstanceOfString = function isInstanceOfString(element) {
  return element instanceof String || core.getType(element) === core.types.String;
};

var isInstanceOfArray = function isInstanceOfArray(element) {
  return element instanceof Array || core.getType(element) === core.types.Array || Array.isArray && Array.isArray(element);
};

var isInstanceOfObject = function isInstanceOfObject(element) {
  return element instanceof Object && !(element instanceof RegExp || isInstanceOfArray(element) || isInstanceOfFunction(element));
};

var isInstanceOfNumber = function isInstanceOfNumber(element) {
  return element instanceof Number || core.getType(element) === core.types.Number;
};

var isInstanceOfFunction = function isInstanceOfFunction(element) {
  return element instanceof Function || core.getType(element) === core.types.Function;
};

var isInstanceOf = function isInstanceOf(type) {
  return function (element) {
    return element instanceof type;
  };
};

var isInstanceOfByTypeName = function isInstanceOfByTypeName(type) {
  return function (element) {
    return core.getType(element).toUpperCase() === type.toUpperCase();
  };
};

var OfTypeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(OfTypeEnumerable, _IEnumerable);

  var _super = _createSuper(OfTypeEnumerable);

  function OfTypeEnumerable(source, type) {
    var _this;

    (0, _classCallCheck2.default)(this, OfTypeEnumerable);
    _this = _super.call(this, source);
    var is = type === Boolean ? isInstanceOfBoolean : type === String ? isInstanceOfString : type === Array ? isInstanceOfArray : type === Number ? isInstanceOfNumber : type === Function ? isInstanceOfFunction : type === Object ? isInstanceOfObject : core.getType(type) === core.types.String ? isInstanceOfByTypeName(type) : isInstanceOf(type);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function OfTypeIterator() {
      var _iterator, _step, element;

      return _regenerator.default.wrap(function OfTypeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 10;
                break;
              }

              element = _step.value;

              if (!is(element)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return element;

            case 8:
              _context.next = 3;
              break;

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _iterator.e(_context.t0);

            case 15:
              _context.prev = 15;

              _iterator.f();

              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, OfTypeIterator, null, [[1, 12, 15, 18]]);
    }));
    return _this;
  }

  return OfTypeEnumerable;
}(IEnumerable);

module.exports = OfTypeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],94:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultComparer = require('../methods/defaultComparer');

var selectorComparer = require('../methods/selectorComparer');

var descendingComparer = require('../methods/descendingComparer');

var OrderByDescendingEnumerable = /*#__PURE__*/function (_IOrderedEnumerable) {
  (0, _inherits2.default)(OrderByDescendingEnumerable, _IOrderedEnumerable);

  var _super = _createSuper(OrderByDescendingEnumerable);

  function OrderByDescendingEnumerable(source) {
    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    (0, _classCallCheck2.default)(this, OrderByDescendingEnumerable);
    keySelector = methods.asSelector(keySelector);
    comparer = methods.asComparer(comparer);
    return _super.call(this, source, descendingComparer(selectorComparer(keySelector, comparer)));
  }

  return OrderByDescendingEnumerable;
}(IOrderedEnumerable);

module.exports = OrderByDescendingEnumerable;

},{"../methods/defaultComparer":152,"../methods/defaultSelector":163,"../methods/descendingComparer":167,"../methods/methods":172,"../methods/selectorComparer":179,"./IOrderedEnumerable":75,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],95:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultComparer = require('../methods/defaultComparer');

var selectorComparer = require('../methods/selectorComparer');

var OrderByEnumerable = /*#__PURE__*/function (_IOrderedEnumerable) {
  (0, _inherits2.default)(OrderByEnumerable, _IOrderedEnumerable);

  var _super = _createSuper(OrderByEnumerable);

  function OrderByEnumerable(source) {
    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    (0, _classCallCheck2.default)(this, OrderByEnumerable);
    keySelector = methods.asSelector(keySelector);
    comparer = methods.asComparer(comparer);
    return _super.call(this, source, selectorComparer(keySelector, comparer));
  }

  return OrderByEnumerable;
}(IOrderedEnumerable);

module.exports = OrderByEnumerable;

},{"../methods/defaultComparer":152,"../methods/defaultSelector":163,"../methods/methods":172,"../methods/selectorComparer":179,"./IOrderedEnumerable":75,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],96:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var ITree = require('./ITree');

var core = require('../core/core');

var NotAncestorOfException = require('../core/exceptions/NotAncestorOfException');

var PathNodesToEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PathNodesToEnumerable, _IEnumerable);

  var _super = _createSuper(PathNodesToEnumerable);

  function PathNodesToEnumerable(root, node) {
    var _this;

    (0, _classCallCheck2.default)(this, PathNodesToEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PathNodesToIterator() {
      var search, result, _iterator2, _step2, n;

      return _regenerator.default.wrap(function PathNodesToIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = function search(result, current) {
                result.push(current);

                if (ITree.isSameNode(current, node)) {
                  return result;
                } else {
                  var _iterator = _createForOfIteratorHelper(current),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var child = _step.value;

                      if (search(result, child)) {
                        return result;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  result.pop();
                  return false;
                }
              };

              result = search([], root);

              if (!result) {
                _context.next = 22;
                break;
              }

              _iterator2 = _createForOfIteratorHelper(result);
              _context.prev = 4;

              _iterator2.s();

            case 6:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 12;
                break;
              }

              n = _step2.value;
              _context.next = 10;
              return n;

            case 10:
              _context.next = 6;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

              _iterator2.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator2.f();

              return _context.finish(17);

            case 20:
              _context.next = 23;
              break;

            case 22:
              throw new NotAncestorOfException(root, node);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, PathNodesToIterator, null, [[4, 14, 17, 20]]);
    }));
    return _this;
  }

  return PathNodesToEnumerable;
}(IEnumerable);

module.exports = PathNodesToEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NotAncestorOfException":41,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],97:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var ITree = require('./ITree');

var core = require('../core/core');

var NotAncestorOfException = require('../core/exceptions/NotAncestorOfException');

var PathToEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PathToEnumerable, _IEnumerable);

  var _super = _createSuper(PathToEnumerable);

  function PathToEnumerable(root, node) {
    var _this;

    (0, _classCallCheck2.default)(this, PathToEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PathToIterator() {
      var search, result, _iterator2, _step2, n;

      return _regenerator.default.wrap(function PathToIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = function search(result, current) {
                result.push(current);

                if (ITree.isSameNode(current, node)) {
                  return result;
                } else {
                  var _iterator = _createForOfIteratorHelper(current),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var child = _step.value;

                      if (search(result, child)) {
                        return result;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  result.pop();
                  return false;
                }
              };

              result = search([], root);

              if (!result) {
                _context.next = 22;
                break;
              }

              _iterator2 = _createForOfIteratorHelper(result);
              _context.prev = 4;

              _iterator2.s();

            case 6:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 12;
                break;
              }

              n = _step2.value;
              _context.next = 10;
              return n.value;

            case 10:
              _context.next = 6;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

              _iterator2.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator2.f();

              return _context.finish(17);

            case 20:
              _context.next = 23;
              break;

            case 22:
              throw new NotAncestorOfException(root, node);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, PathToIterator, null, [[4, 14, 17, 20]]);
    }));
    return _this;
  }

  return PathToEnumerable;
}(IEnumerable);

module.exports = PathToEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NotAncestorOfException":41,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],98:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var IndicesEnumerable = require('./IndicesEnumerable');

var core = require('../core/core');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var PermutationEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PermutationEnumerable, _IEnumerable);

  var _super = _createSuper(PermutationEnumerable);

  function PermutationEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, PermutationEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PermutationIterator() {
      var iterator, indices, used, array, end, hasNext, nextIndices, lastIndex;
      return _regenerator.default.wrap(function PermutationIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iterator = source[Symbol.iterator]();
              indices = core.range(0, count);
              used = core.repeat(true, count);
              array = [];
              end = false;

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  end = true;
                  return false;
                } else {
                  array.push(next.value);

                  while (used.length < array.length) {
                    used.push(false);
                  }

                  return true;
                }
              };

              nextIndices = function nextIndices() {
                for (var i = count - 1; i >= 0; i--) {
                  used[indices[i]] = false;
                  var needNext = false;

                  do {
                    indices[i]++;

                    if (array.length <= indices[i]) {
                      if (end || !hasNext()) {
                        needNext = true;
                      }

                      if (end) break;
                    }
                  } while (used[indices[i]]);

                  if (!needNext) {
                    used[indices[i]] = true;

                    for (var j = i + 1; j < count; j++) {
                      for (var k = 0; k < used.length; k++) {
                        if (!used[k]) {
                          indices[j] = k;
                          used[k] = true;
                          break;
                        }
                      }
                    }

                    return true;
                  }
                }

                return false;
              };

              lastIndex = indices[count - 1];

            case 8:
              if (!(array.length <= lastIndex)) {
                _context.next = 13;
                break;
              }

              if (hasNext()) {
                _context.next = 11;
                break;
              }

              throw new NoSuchElementsException();

            case 11:
              _context.next = 8;
              break;

            case 13:
              _context.next = 15;
              return new IndicesEnumerable(array, (0, _toConsumableArray2.default)(indices));

            case 15:
              if (nextIndices()) {
                _context.next = 13;
                break;
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, PermutationIterator);
    }));
    return _this;
  }

  return PermutationEnumerable;
}(IEnumerable);

module.exports = PermutationEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NoSuchElementsException":40,"./IndicesEnumerable":79,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],99:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var IndicesEnumerable = require('./IndicesEnumerable');

var core = require('../core/core');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var PermutationRepeatableEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PermutationRepeatableEnumerable, _IEnumerable);

  var _super = _createSuper(PermutationRepeatableEnumerable);

  function PermutationRepeatableEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, PermutationRepeatableEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PermutationRepeatableIterator() {
      var iterator, indices, array, end, hasNext, nextIndices;
      return _regenerator.default.wrap(function PermutationRepeatableIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iterator = source.getIterator();
              indices = core.repeat(0, count);
              array = [];
              end = false;

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  end = true;
                  return false;
                } else {
                  array.push(next.value);
                  return true;
                }
              };

              nextIndices = function nextIndices() {
                for (var i = count - 1; i >= 0; i--) {
                  indices[i]++;
                  var needNext = false;

                  if (array.length <= indices[i]) {
                    if (end || !hasNext()) {
                      indices[i] = 0;
                      needNext = true;
                    }
                  }

                  if (!needNext) {
                    return true;
                  }
                }

                return false;
              };

              if (!hasNext()) {
                _context.next = 12;
                break;
              }

            case 7:
              _context.next = 9;
              return new IndicesEnumerable(array, (0, _toConsumableArray2.default)(indices));

            case 9:
              if (nextIndices()) {
                _context.next = 7;
                break;
              }

            case 10:
              _context.next = 13;
              break;

            case 12:
              throw new NoSuchElementsException();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, PermutationRepeatableIterator);
    }));
    return _this;
  }

  return PermutationRepeatableEnumerable;
}(IEnumerable);

module.exports = PermutationRepeatableEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../core/exceptions/NoSuchElementsException":40,"./IndicesEnumerable":79,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],100:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var PostOrderEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PostOrderEnumerable, _IEnumerable);

  var _super = _createSuper(PostOrderEnumerable);

  function PostOrderEnumerable(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, PostOrderEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PostOrderIterator() {
      return _regenerator.default.wrap(function PostOrderIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!tree.hasLeft()) {
                _context.next = 2;
                break;
              }

              return _context.delegateYield(new PostOrderEnumerable(tree.left), "t0", 2);

            case 2:
              if (!tree.hasRight()) {
                _context.next = 4;
                break;
              }

              return _context.delegateYield(new PostOrderEnumerable(tree.right), "t1", 4);

            case 4:
              _context.next = 6;
              return tree.value;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, PostOrderIterator);
    }));
    return _this;
  }

  return PostOrderEnumerable;
}(IEnumerable);

module.exports = PostOrderEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],101:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BinaryTree = require('./BinaryTree');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var PostOrderTree = /*#__PURE__*/function (_BinaryTree) {
  (0, _inherits2.default)(PostOrderTree, _BinaryTree);

  var _super = _createSuper(PostOrderTree);

  function PostOrderTree(source) {
    (0, _classCallCheck2.default)(this, PostOrderTree);
    var tree = {};
    var array = source.toArray();

    if (array.length) {
      var nodes = [tree];

      for (var i = 1; i < array.length; i += 2) {
        var node = nodes.shift();

        if (array.length - i >= 2) {
          var left = {};
          var right = {};
          node.children = [left, right];
          nodes.push(left, right);
        } else {
          var _left = {};
          node.children = [_left];
          nodes.push(_left);
        }
      }

      var index = 0;

      var fill = function fill(node) {
        if (node.children && node.children.length >= 1) {
          fill(node.children[0]);
        }

        if (node.children && node.children.length === 2) {
          fill(node.children[1]);
        }

        node.value = array[index++];
      };

      fill(tree);
    } else {
      throw new NoSuchElementsException();
    }

    return _super.call(this, tree);
  }

  return PostOrderTree;
}(BinaryTree);

module.exports = PostOrderTree;

},{"../core/exceptions/NoSuchElementsException":40,"./BinaryTree":48,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],102:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var PreOrderEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PreOrderEnumerable, _IEnumerable);

  var _super = _createSuper(PreOrderEnumerable);

  function PreOrderEnumerable(tree) {
    var _this;

    (0, _classCallCheck2.default)(this, PreOrderEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PreOrderIterator() {
      return _regenerator.default.wrap(function PreOrderIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return tree.value;

            case 2:
              if (!tree.hasLeft()) {
                _context.next = 4;
                break;
              }

              return _context.delegateYield(new PreOrderEnumerable(tree.left), "t0", 4);

            case 4:
              if (!tree.hasRight()) {
                _context.next = 6;
                break;
              }

              return _context.delegateYield(new PreOrderEnumerable(tree.right), "t1", 6);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, PreOrderIterator);
    }));
    return _this;
  }

  return PreOrderEnumerable;
}(IEnumerable);

module.exports = PreOrderEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],103:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BinaryTree = require('./BinaryTree');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var PreOrderTree = /*#__PURE__*/function (_BinaryTree) {
  (0, _inherits2.default)(PreOrderTree, _BinaryTree);

  var _super = _createSuper(PreOrderTree);

  function PreOrderTree(source) {
    (0, _classCallCheck2.default)(this, PreOrderTree);
    var tree = {};
    var array = source.toArray();

    if (array.length) {
      var nodes = [tree];

      for (var i = 1; i < array.length; i += 2) {
        var node = nodes.shift();

        if (array.length - i >= 2) {
          var left = {};
          var right = {};
          node.children = [left, right];
          nodes.push(left, right);
        } else {
          var _left = {};
          node.children = [_left];
          nodes.push(_left);
        }
      }

      var index = 0;

      var fill = function fill(node) {
        node.value = array[index++];

        if (node.children && node.children.length >= 1) {
          fill(node.children[0]);
        }

        if (node.children && node.children.length === 2) {
          fill(node.children[1]);
        }
      };

      fill(tree);
    } else {
      throw new NoSuchElementsException();
    }

    return _super.call(this, tree);
  }

  return PreOrderTree;
}(BinaryTree);

module.exports = PreOrderTree;

},{"../core/exceptions/NoSuchElementsException":40,"./BinaryTree":48,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],104:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var PrevEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PrevEnumerable, _IEnumerable);

  var _super = _createSuper(PrevEnumerable);

  function PrevEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, PrevEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PrevIterator() {
      var parent, _iterator, _step, child;

      return _regenerator.default.wrap(function PrevIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              child = _step.value;

              if (!ITree.isSameNode(child, node)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("break", 13);

            case 8:
              if (!predicate(child.value)) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return child.value;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, PrevIterator, null, [[2, 15, 18, 21]]);
    }));
    return _this;
  }

  return PrevEnumerable;
}(IEnumerable);

module.exports = PrevEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],105:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var PrevEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(PrevEnumerable, _IEnumerable);

  var _super = _createSuper(PrevEnumerable);

  function PrevEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, PrevEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function PrevNodesIterator() {
      var parent, _iterator, _step, child;

      return _regenerator.default.wrap(function PrevNodesIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              child = _step.value;

              if (!ITree.isSameNode(child, node)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("break", 13);

            case 8:
              if (!predicate(child.value)) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return child;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, PrevNodesIterator, null, [[2, 15, 18, 21]]);
    }));
    return _this;
  }

  return PrevEnumerable;
}(IEnumerable);

module.exports = PrevEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],106:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var INode = require('./INode');

var ProbabilityNode = /*#__PURE__*/function (_INode) {
  (0, _inherits2.default)(ProbabilityNode, _INode);

  var _super = _createSuper(ProbabilityNode);

  function ProbabilityNode(element, index, probability) {
    var _this;

    (0, _classCallCheck2.default)(this, ProbabilityNode);
    _this = _super.call(this, element, index);
    _this.probability = probability;
    return _this;
  }

  (0, _createClass2.default)(ProbabilityNode, [{
    key: "set",
    value: function set(element, index, probability) {
      this.probability = probability;
      return (0, _get2.default)((0, _getPrototypeOf2.default)(ProbabilityNode.prototype), "set", this).call(this, element, index);
    }
  }]);
  return ProbabilityNode;
}(INode);

module.exports = ProbabilityNode;

},{"./INode":74,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],107:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IterableEnumerable = require('./IterableEnumerable');

var core = require('../core/core');

var defaultPredicate = require('../methods/defaultPredicate');

var OutOfRangeException = require('../core/exceptions/OutOfRangeException');

var NoSuchElementsException = require('../core/exceptions/NoSuchElementsException');

var TooManyElementsException = require('../core/exceptions/TooManyElementsException');

var ProtoEnumerable = /*#__PURE__*/function (_IterableEnumerable) {
  (0, _inherits2.default)(ProtoEnumerable, _IterableEnumerable);

  var _super = _createSuper(ProtoEnumerable);

  function ProtoEnumerable(source) {
    var _this;

    (0, _classCallCheck2.default)(this, ProtoEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), core.delegate, source);
    return _this;
  }

  (0, _createClass2.default)(ProtoEnumerable, [{
    key: "elementAt",
    value: function elementAt(index) {
      var delegate = this[core.delegate];

      if (core.isProto(delegate)) {
        if (index >= 0 && index < delegate.length) {
          return delegate[index];
        } else {
          throw new OutOfRangeException(index);
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "elementAt", this).call(this, index);
      }
    }
  }, {
    key: "elementAtOrDefault",
    value: function elementAtOrDefault(index, defaultValue) {
      var delegate = this[core.delegate];

      if (core.isProto(delegate)) {
        if (index >= 0 && index < delegate.length) {
          return delegate[index];
        } else if (index > 0) {
          return defaultValue;
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "elementAtOrDefault", this).call(this, index, defaultValue);
      }
    }
  }, {
    key: "first",
    value: function first() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length > 0) {
          return delegate[0];
        } else {
          throw new NoSuchElementsException();
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "first", this).call(this, predicate);
      }
    }
  }, {
    key: "firstOrDefault",
    value: function firstOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length > 0) {
          return delegate[0];
        } else {
          return defaultValue;
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "firstOrDefault", this).call(this, defaultValue, predicate);
      }
    }
  }, {
    key: "last",
    value: function last() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length > 0) {
          return delegate[delegate.length - 1];
        } else {
          throw new NoSuchElementsException();
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "last", this).call(this, predicate);
      }
    }
  }, {
    key: "lastOrDefault",
    value: function lastOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length > 0) {
          return delegate[delegate.length - 1];
        } else {
          return defaultValue;
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "lastOrDefault", this).call(this, defaultValue, predicate);
      }
    }
  }, {
    key: "single",
    value: function single() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length === 1) {
          return delegate[0];
        } else if (delegate.length === 0) {
          throw new NoSuchElementsException();
        } else {
          throw new TooManyElementsException();
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "single", this).call(this, predicate);
      }
    }
  }, {
    key: "singleOrDefault",
    value: function singleOrDefault(defaultValue) {
      var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        if (delegate.length === 1) {
          return delegate[0];
        } else if (delegate.length === 0) {
          return defaultValue;
        } else {
          throw new TooManyElementsException();
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "singleOrDefault", this).call(this, defaultValue, predicate);
      }
    }
  }, {
    key: "count",
    value: function count() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
      var delegate = this[core.delegate];

      if (predicate === defaultPredicate && core.isProto(delegate)) {
        return delegate.length;
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(ProtoEnumerable.prototype), "count", this).call(this, predicate);
      }
    }
  }]);
  return ProtoEnumerable;
}(IterableEnumerable);

module.exports = ProtoEnumerable;

},{"../core/core":35,"../core/exceptions/NoSuchElementsException":40,"../core/exceptions/OutOfRangeException":42,"../core/exceptions/TooManyElementsException":45,"../methods/defaultPredicate":160,"./IterableEnumerable":81,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],108:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var RandEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(RandEnumerable, _IEnumerable);

  var _super = _createSuper(RandEnumerable);

  function RandEnumerable(source) {
    var _this;

    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var repeatable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    (0, _classCallCheck2.default)(this, RandEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function RandIterator() {
      var temp, i, index, element, _i;

      return _regenerator.default.wrap(function RandIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = source.toArray();

              if (!repeatable) {
                _context.next = 11;
                break;
              }

              i = 0;

            case 3:
              if (!(i < length)) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return temp[Math.floor(temp.length * Math.random())];

            case 6:
              i++;
              _context.next = 3;
              break;

            case 9:
              _context.next = 21;
              break;

            case 11:
              _i = 0;

            case 12:
              if (!(_i < length)) {
                _context.next = 21;
                break;
              }

              index = Math.floor((temp.length - _i) * Math.random()) + _i;
              element = temp[index];
              temp[index] = temp[_i];
              _context.next = 18;
              return element;

            case 18:
              _i++;
              _context.next = 12;
              break;

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, RandIterator);
    }));
    return _this;
  }

  return RandEnumerable;
}(IEnumerable);

module.exports = RandEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],109:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var RangeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(RangeEnumerable, _IEnumerable);

  var _super = _createSuper(RangeEnumerable);

  function RangeEnumerable(start, count) {
    var _this;

    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    (0, _classCallCheck2.default)(this, RangeEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function RangeIterator() {
      var i, value;
      return _regenerator.default.wrap(function RangeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0, value = start;

            case 1:
              if (!(i < count)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return value;

            case 4:
              i++, value += step;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, RangeIterator);
    }));
    return _this;
  }

  return RangeEnumerable;
}(IEnumerable);

module.exports = RangeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],110:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var RepeatEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(RepeatEnumerable, _IEnumerable);

  var _super = _createSuper(RepeatEnumerable);

  function RepeatEnumerable(element) {
    var _this;

    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, RepeatEnumerable);
    _this = _super.call(this, []);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function RepeatIterator() {
      var i;
      return _regenerator.default.wrap(function RepeatIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < count)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return element;

            case 4:
              i++;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, RepeatIterator);
    }));
    return _this;
  }

  return RepeatEnumerable;
}(IEnumerable);

module.exports = RepeatEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],111:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var ReverseEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(ReverseEnumerable, _IEnumerable);

  var _super = _createSuper(ReverseEnumerable);

  function ReverseEnumerable(source) {
    var _this;

    (0, _classCallCheck2.default)(this, ReverseEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ReverseIterator() {
      var temp, length, i;
      return _regenerator.default.wrap(function ReverseIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = source.toArray(), length = temp.length;
              i = length - 1;

            case 2:
              if (!(i >= 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return temp[i];

            case 5:
              i--;
              _context.next = 2;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, ReverseIterator);
    }));
    return _this;
  }

  return ReverseEnumerable;
}(IEnumerable);

module.exports = ReverseEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],112:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultJoinSelector = require('../methods/defaultJoinSelector');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var defaultSelector = require('../methods/defaultSelector');

var LeftJoinEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(LeftJoinEnumerable, _IEnumerable);

  var _super = _createSuper(LeftJoinEnumerable);

  function LeftJoinEnumerable(outer, inner) {
    var _this;

    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
    var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, LeftJoinEnumerable);
    _this = _super.call(this, outer);
    outerKeySelector = methods.asSelector(outerKeySelector);
    innerKeySelector = methods.asSelector(innerKeySelector);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function LeftJoinIterator() {
      var outerTemp, innerIndex, _iterator, _step, innerElement, innerKey, outerIndex, match, _iterator2, _step2, outerElement, outerKey, _match, _iterator3, _step3, outerValue;

      return _regenerator.default.wrap(function LeftJoinIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              outerTemp = [], innerIndex = 0;
              _iterator = _createForOfIteratorHelper(inner);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 62;
                break;
              }

              innerElement = _step.value;
              innerKey = innerKeySelector(innerElement, innerIndex);

              if (!(innerIndex === 0)) {
                _context.next = 36;
                break;
              }

              outerIndex = 0;
              match = false;
              _iterator2 = _createForOfIteratorHelper(outer);
              _context.prev = 11;

              _iterator2.s();

            case 13:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 23;
                break;
              }

              outerElement = _step2.value;
              outerKey = outerKeySelector(outerElement, outerIndex++);
              outerTemp.push({
                key: outerKey,
                element: outerElement
              });

              if (!comparer(outerKey, innerKey)) {
                _context.next = 21;
                break;
              }

              match = true;
              _context.next = 21;
              return resultSelector(outerElement, innerElement);

            case 21:
              _context.next = 13;
              break;

            case 23:
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](11);

              _iterator2.e(_context.t0);

            case 28:
              _context.prev = 28;

              _iterator2.f();

              return _context.finish(28);

            case 31:
              if (match) {
                _context.next = 34;
                break;
              }

              _context.next = 34;
              return resultSelector(undefined, innerElement);

            case 34:
              _context.next = 59;
              break;

            case 36:
              _match = false;
              _iterator3 = _createForOfIteratorHelper(outerTemp);
              _context.prev = 38;

              _iterator3.s();

            case 40:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 48;
                break;
              }

              outerValue = _step3.value;

              if (!comparer(outerValue.key, innerKey)) {
                _context.next = 46;
                break;
              }

              _match = true;
              _context.next = 46;
              return resultSelector(outerValue.element, innerElement);

            case 46:
              _context.next = 40;
              break;

            case 48:
              _context.next = 53;
              break;

            case 50:
              _context.prev = 50;
              _context.t1 = _context["catch"](38);

              _iterator3.e(_context.t1);

            case 53:
              _context.prev = 53;

              _iterator3.f();

              return _context.finish(53);

            case 56:
              if (_match) {
                _context.next = 59;
                break;
              }

              _context.next = 59;
              return resultSelector(undefined, innerElement);

            case 59:
              innerIndex++;

            case 60:
              _context.next = 4;
              break;

            case 62:
              _context.next = 67;
              break;

            case 64:
              _context.prev = 64;
              _context.t2 = _context["catch"](2);

              _iterator.e(_context.t2);

            case 67:
              _context.prev = 67;

              _iterator.f();

              return _context.finish(67);

            case 70:
            case "end":
              return _context.stop();
          }
        }
      }, LeftJoinIterator, null, [[2, 64, 67, 70], [11, 25, 28, 31], [38, 50, 53, 56]]);
    }));
    return _this;
  }

  return LeftJoinEnumerable;
}(IEnumerable);

module.exports = LeftJoinEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/defaultJoinSelector":157,"../methods/defaultSelector":163,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],113:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var RightPadEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(RightPadEnumerable, _IEnumerable);

  var _super = _createSuper(RightPadEnumerable);

  function RightPadEnumerable(source, length, value) {
    var _this;

    (0, _classCallCheck2.default)(this, RightPadEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ConcatIterator() {
      var _iterator, _step, v, i;

      return _regenerator.default.wrap(function ConcatIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 10;
                break;
              }

              v = _step.value;
              length--;
              _context.next = 8;
              return v;

            case 8:
              _context.next = 3;
              break;

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _iterator.e(_context.t0);

            case 15:
              _context.prev = 15;

              _iterator.f();

              return _context.finish(15);

            case 18:
              i = 0;

            case 19:
              if (!(i < length)) {
                _context.next = 25;
                break;
              }

              _context.next = 22;
              return value;

            case 22:
              i++;
              _context.next = 19;
              break;

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, ConcatIterator, null, [[1, 12, 15, 18]]);
    }));
    return _this;
  }

  return RightPadEnumerable;
}(IEnumerable);

module.exports = RightPadEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],114:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var SelectEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SelectEnumerable, _IEnumerable);

  var _super = _createSuper(SelectEnumerable);

  function SelectEnumerable(source) {
    var _this;

    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    (0, _classCallCheck2.default)(this, SelectEnumerable);
    _this = _super.call(this, source);
    selector = methods.asSelector(selector);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SelectIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function SelectIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 10;
                break;
              }

              element = _step.value;
              _context.next = 8;
              return selector(element, index++);

            case 8:
              _context.next = 4;
              break;

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 15:
              _context.prev = 15;

              _iterator.f();

              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, SelectIterator, null, [[2, 12, 15, 18]]);
    }));
    return _this;
  }

  return SelectEnumerable;
}(IEnumerable);

module.exports = SelectEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultSelector":163,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],115:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSelector = require('../methods/defaultSelector');

var defaultResultSelector = require('../methods/defaultResultSelector');

var SelectManyEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SelectManyEnumerable, _IEnumerable);

  var _super = _createSuper(SelectManyEnumerable);

  function SelectManyEnumerable(source) {
    var _this;

    var collectionSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
    (0, _classCallCheck2.default)(this, SelectManyEnumerable);
    _this = _super.call(this, source);
    collectionSelector = methods.asSelector(collectionSelector); //resultSelector = methods.asSelector(resultSelector);

    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SelectManyIterator() {
      var index, _iterator, _step, element, _iterator2, _step2, collectionElement;

      return _regenerator.default.wrap(function SelectManyIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 25;
                break;
              }

              element = _step.value;
              _iterator2 = _createForOfIteratorHelper(core.asEnumerable(collectionSelector(element, index++)));
              _context.prev = 7;

              _iterator2.s();

            case 9:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 15;
                break;
              }

              collectionElement = _step2.value;
              _context.next = 13;
              return resultSelector(element, collectionElement);

            case 13:
              _context.next = 9;
              break;

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);

              _iterator2.e(_context.t0);

            case 20:
              _context.prev = 20;

              _iterator2.f();

              return _context.finish(20);

            case 23:
              _context.next = 4;
              break;

            case 25:
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t1 = _context["catch"](2);

              _iterator.e(_context.t1);

            case 30:
              _context.prev = 30;

              _iterator.f();

              return _context.finish(30);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, SelectManyIterator, null, [[2, 27, 30, 33], [7, 17, 20, 23]]);
    }));
    return _this;
  }

  return SelectManyEnumerable;
}(IEnumerable);

module.exports = SelectManyEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultResultSelector":161,"../methods/defaultSelector":163,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],116:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultValueSelector = require('../methods/defaultValueSelector');

var defaultChildrenSelector = require('../methods/defaultChildrenSelector');

var SeparateEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SeparateEnumerable, _IEnumerable);

  var _super = _createSuper(SeparateEnumerable);

  function SeparateEnumerable(source) {
    var _this;

    var childrenSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildrenSelector;
    var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
    (0, _classCallCheck2.default)(this, SeparateEnumerable);
    _this = _super.call(this, source);
    childrenSelector = methods.asSelector(childrenSelector);
    valueSelector = methods.asSelector(valueSelector);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SeparateIterator() {
      var _iterator, _step, element, collection;

      return _regenerator.default.wrap(function SeparateIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 22;
                break;
              }

              element = _step.value;

              if (!core.isUndefined(element)) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return element;

            case 8:
              _context.next = 20;
              break;

            case 10:
              collection = childrenSelector(element);

              if (!core.isList(collection)) {
                _context.next = 18;
                break;
              }

              if (!(element !== collection)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return valueSelector(element);

            case 15:
              return _context.delegateYield(core.asEnumerable(collection).separate(childrenSelector, valueSelector), "t0", 16);

            case 16:
              _context.next = 20;
              break;

            case 18:
              _context.next = 20;
              return valueSelector(element);

            case 20:
              _context.next = 3;
              break;

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t1 = _context["catch"](1);

              _iterator.e(_context.t1);

            case 27:
              _context.prev = 27;

              _iterator.f();

              return _context.finish(27);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, SeparateIterator, null, [[1, 24, 27, 30]]);
    }));
    return _this;
  }

  return SeparateEnumerable;
}(IEnumerable);

module.exports = SeparateEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultChildrenSelector":150,"../methods/defaultValueSelector":165,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],117:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var SiblingsEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SiblingsEnumerable, _IEnumerable);

  var _super = _createSuper(SiblingsEnumerable);

  function SiblingsEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, SiblingsEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SiblingsIterator() {
      var parent, skip, _iterator, _step, child;

      return _regenerator.default.wrap(function SiblingsIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              skip = false;
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }

              child = _step.value;

              if (!(!skip && ITree.isSameNode(child, node))) {
                _context.next = 11;
                break;
              }

              skip = true;
              _context.next = 14;
              break;

            case 11:
              if (!predicate(child.value)) {
                _context.next = 14;
                break;
              }

              _context.next = 14;
              return child;

            case 14:
              _context.next = 5;
              break;

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 21:
              _context.prev = 21;

              _iterator.f();

              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, SiblingsIterator, null, [[3, 18, 21, 24]]);
    }));
    return _this;
  }

  return SiblingsEnumerable;
}(IEnumerable);

module.exports = SiblingsEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],118:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ITree = require('./ITree');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var SiblingsEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SiblingsEnumerable, _IEnumerable);

  var _super = _createSuper(SiblingsEnumerable);

  function SiblingsEnumerable(tree, node) {
    var _this;

    var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;
    (0, _classCallCheck2.default)(this, SiblingsEnumerable);
    _this = _super.call(this, []);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SiblingNodesIterator() {
      var parent, skip, _iterator, _step, child;

      return _regenerator.default.wrap(function SiblingNodesIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parent = tree.getParentNode(node);
              skip = false;
              _iterator = _createForOfIteratorHelper(parent.children);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }

              child = _step.value;

              if (!(!skip && ITree.isSameNode(child, node))) {
                _context.next = 11;
                break;
              }

              skip = true;
              _context.next = 14;
              break;

            case 11:
              if (!predicate(child.value)) {
                _context.next = 14;
                break;
              }

              _context.next = 14;
              return child.value;

            case 14:
              _context.next = 5;
              break;

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 21:
              _context.prev = 21;

              _iterator.f();

              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, SiblingNodesIterator, null, [[3, 18, 21, 24]]);
    }));
    return _this;
  }

  return SiblingsEnumerable;
}(IEnumerable);

module.exports = SiblingsEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],119:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var INode = require('./INode');

var SingleNode = /*#__PURE__*/function (_INode) {
  (0, _inherits2.default)(SingleNode, _INode);

  var _super = _createSuper(SingleNode);

  function SingleNode(element, index) {
    (0, _classCallCheck2.default)(this, SingleNode);
    return _super.call(this, element, index);
  }

  return SingleNode;
}(INode);

module.exports = SingleNode;

},{"./INode":74,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],120:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var SkipEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SkipEnumerable, _IEnumerable);

  var _super = _createSuper(SkipEnumerable);

  function SkipEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, SkipEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SkipIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function SkipIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 12;
                break;
              }

              element = _step.value;

              if (!(index >= count)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return element;

            case 9:
              index++;

            case 10:
              _context.next = 4;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator.f();

              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, SkipIterator, null, [[2, 14, 17, 20]]);
    }));
    return _this;
  }

  return SkipEnumerable;
}(IEnumerable);

module.exports = SkipEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],121:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var SkipProportionEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SkipProportionEnumerable, _IEnumerable);

  var _super = _createSuper(SkipProportionEnumerable);

  function SkipProportionEnumerable(source) {
    var _this;

    var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, SkipProportionEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SkipProportionIterator() {
      var array, length, i, _iterator, _step, element;

      return _regenerator.default.wrap(function SkipProportionIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(proportion > 0)) {
                _context.next = 13;
                break;
              }

              if (!(proportion < 1)) {
                _context.next = 11;
                break;
              }

              array = source.toArray();
              length = array.length;
              i = Math.floor(length * proportion);

            case 5:
              if (!(i < length)) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return array[i];

            case 8:
              i++;
              _context.next = 5;
              break;

            case 11:
              _context.next = 30;
              break;

            case 13:
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 14;

              _iterator.s();

            case 16:
              if ((_step = _iterator.n()).done) {
                _context.next = 22;
                break;
              }

              element = _step.value;
              _context.next = 20;
              return element;

            case 20:
              _context.next = 16;
              break;

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](14);

              _iterator.e(_context.t0);

            case 27:
              _context.prev = 27;

              _iterator.f();

              return _context.finish(27);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, SkipProportionIterator, null, [[14, 24, 27, 30]]);
    }));
    return _this;
  }

  return SkipProportionEnumerable;
}(IEnumerable);

module.exports = SkipProportionEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],122:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSameComparer = require('../methods/defaultSameComparer');

var SkipSameEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SkipSameEnumerable, _IEnumerable);

  var _super = _createSuper(SkipSameEnumerable);

  function SkipSameEnumerable(source) {
    var _this;

    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
    (0, _classCallCheck2.default)(this, SkipSameEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SkipSameIterator() {
      var first, firstElement, firstSkiped, _iterator, _step, element;

      return _regenerator.default.wrap(function SkipSameIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = true, firstElement = false, firstSkiped = false;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 22;
                break;
              }

              element = _step.value;

              if (!first) {
                _context.next = 11;
                break;
              }

              firstElement = element;
              first = false;
              _context.next = 20;
              break;

            case 11:
              if (!firstSkiped) {
                _context.next = 16;
                break;
              }

              _context.next = 14;
              return element;

            case 14:
              _context.next = 20;
              break;

            case 16:
              if (comparer(element, firstElement)) {
                _context.next = 20;
                break;
              }

              firstSkiped = true;
              _context.next = 20;
              return element;

            case 20:
              _context.next = 4;
              break;

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 27:
              _context.prev = 27;

              _iterator.f();

              return _context.finish(27);

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, SkipSameIterator, null, [[2, 24, 27, 30]]);
    }));
    return _this;
  }

  return SkipSameEnumerable;
}(IEnumerable);

module.exports = SkipSameEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultSameComparer":162,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],123:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var SkipWhileEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SkipWhileEnumerable, _IEnumerable);

  var _super = _createSuper(SkipWhileEnumerable);

  function SkipWhileEnumerable(source) {
    var _this;

    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    (0, _classCallCheck2.default)(this, SkipWhileEnumerable);
    _this = _super.call(this, source);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SkipWhileIterator() {
      var skipping, index, _iterator, _step, element;

      return _regenerator.default.wrap(function SkipWhileIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              skipping = true, index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 12;
                break;
              }

              element = _step.value;
              skipping = skipping && predicate(element, index++);

              if (skipping) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              _context.next = 4;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator.f();

              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, SkipWhileIterator, null, [[2, 14, 17, 20]]);
    }));
    return _this;
  }

  return SkipWhileEnumerable;
}(IEnumerable);

module.exports = SkipWhileEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],124:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var SliceEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SliceEnumerable, _IEnumerable);

  var _super = _createSuper(SliceEnumerable);

  function SliceEnumerable(source) {
    var _this;

    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    (0, _classCallCheck2.default)(this, SliceEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SliceIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function SliceIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (start < 0 || end < 0) {
                source = (0, _toConsumableArray2.default)(source);

                if (start < 0) {
                  start = Math.max(source.length + start, 0);
                }

                if (end < 0) {
                  end = Math.max(source.length + end, 0);
                }
              }

              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 17;
                break;
              }

              element = _step.value;

              if (!(index >= start && index < end)) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              _context.next = 14;
              break;

            case 12:
              if (!(index >= end)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("break", 17);

            case 14:
              index++;

            case 15:
              _context.next = 5;
              break;

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 22:
              _context.prev = 22;

              _iterator.f();

              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, SliceIterator, null, [[3, 19, 22, 25]]);
    }));
    return _this;
  }

  return SliceEnumerable;
}(IEnumerable);

module.exports = SliceEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],125:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var defaultComparer = require('../methods/defaultComparer');

var core = require('../core/core');

var methods = require('../methods/methods');

var SortEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SortEnumerable, _IEnumerable);

  var _super = _createSuper(SortEnumerable);

  function SortEnumerable(source) {
    var _this;

    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    (0, _classCallCheck2.default)(this, SortEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asComparer(comparer);
    var iterable = source.getIterable();
    core.setProperty(source, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield((0, _toConsumableArray2.default)(iterable).sort(comparer), "t0", 1);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return (0, _possibleConstructorReturn2.default)(_this, source);
  }

  return SortEnumerable;
}(IEnumerable);

module.exports = SortEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultComparer":152,"../methods/methods":172,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/regenerator":27}],126:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var SpliceEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SpliceEnumerable, _IEnumerable);

  var _super = _createSuper(SpliceEnumerable);

  function SpliceEnumerable(source, start, count) {
    var _this;

    for (var _len = arguments.length, values = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      values[_key - 3] = arguments[_key];
    }

    (0, _classCallCheck2.default)(this, SpliceEnumerable);
    _this = _super.call(this, source);

    if (core.isArray(source) && core.a$splice) {
      var _core$a$splice;

      var deleteValues = (_core$a$splice = core.a$splice).call.apply(_core$a$splice, [source, start, count].concat(values));

      core.setProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.delegateYield(deleteValues, "t0", 1);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    } else {
      count = typeof count === 'undefined' ? Infinity : count;
      var iterable = (0, _defineProperty2.default)({}, Symbol.iterator, source[Symbol.iterator]);
      core.setProperty(source, Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var index, _iterator, _step, element, _iterator2, _step2, value;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                index = 0;
                _iterator = _createForOfIteratorHelper(iterable);
                _context2.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 35;
                  break;
                }

                element = _step.value;

                if (!(index < start)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 9;
                return element;

              case 9:
                _context2.next = 32;
                break;

              case 11:
                if (!(index == start)) {
                  _context2.next = 29;
                  break;
                }

                _iterator2 = _createForOfIteratorHelper(values);
                _context2.prev = 13;

                _iterator2.s();

              case 15:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 21;
                  break;
                }

                value = _step2.value;
                _context2.next = 19;
                return value;

              case 19:
                _context2.next = 15;
                break;

              case 21:
                _context2.next = 26;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t0 = _context2["catch"](13);

                _iterator2.e(_context2.t0);

              case 26:
                _context2.prev = 26;

                _iterator2.f();

                return _context2.finish(26);

              case 29:
                if (!(index >= start + count)) {
                  _context2.next = 32;
                  break;
                }

                _context2.next = 32;
                return element;

              case 32:
                index++;

              case 33:
                _context2.next = 4;
                break;

              case 35:
                _context2.next = 40;
                break;

              case 37:
                _context2.prev = 37;
                _context2.t1 = _context2["catch"](2);

                _iterator.e(_context2.t1);

              case 40:
                _context2.prev = 40;

                _iterator.f();

                return _context2.finish(40);

              case 43:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 37, 40, 43], [13, 23, 26, 29]]);
      }));
      core.setProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SpliceIterator() {
        var index, _iterator3, _step3, element;

        return _regenerator.default.wrap(function SpliceIterator$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                index = 0;
                _iterator3 = _createForOfIteratorHelper(iterable);
                _context3.prev = 2;

                _iterator3.s();

              case 4:
                if ((_step3 = _iterator3.n()).done) {
                  _context3.next = 12;
                  break;
                }

                element = _step3.value;

                if (!(index >= start && index < start + count)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 9;
                return element;

              case 9:
                index++;

              case 10:
                _context3.next = 4;
                break;

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](2);

                _iterator3.e(_context3.t0);

              case 17:
                _context3.prev = 17;

                _iterator3.f();

                return _context3.finish(17);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, SpliceIterator, null, [[2, 14, 17, 20]]);
      }));
    }

    return _this;
  }

  return SpliceEnumerable;
}(IEnumerable);

module.exports = SpliceEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],127:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IChunk = require('./IChunk');

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultFalsePredicate = require('../methods/defaultFalsePredicate');

var SplitEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SplitEnumerable, _IEnumerable);

  var _super = _createSuper(SplitEnumerable);

  function SplitEnumerable(source) {
    var _this;

    var splitPredicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFalsePredicate;
    (0, _classCallCheck2.default)(this, SplitEnumerable);
    _this = _super.call(this, source);
    splitPredicate = methods.asPredicate(splitPredicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SplitIterator() {
      var iterator, chunkIndex, chunk, chunks, index, addChunk, hasNext, ci;
      return _regenerator.default.wrap(function SplitIterator$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              iterator = source[Symbol.iterator]();
              chunkIndex = 0;
              chunk = [];
              chunks = [];
              index = 0;

              addChunk = function addChunk() {
                chunks.push(new IChunk(chunkIndex++, function (chunk) {
                  return /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var i;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            i = 0;

                          case 1:
                            if (!(chunk.length > i || hasNext() && chunk.length > i)) {
                              _context.next = 6;
                              break;
                            }

                            _context.next = 4;
                            return chunk[i++];

                          case 4:
                            _context.next = 1;
                            break;

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  });
                }(chunk)));
              };

              hasNext = function hasNext() {
                var next = iterator.next();

                if (next.done) {
                  return false;
                } else {
                  if (splitPredicate(next.value, index++)) {
                    chunk = [];
                    addChunk();
                  } else {
                    chunk.push(next.value);
                  }

                  return true;
                }
              };

              addChunk();
              ci = 0;

            case 9:
              if (!(chunks.length > ci || hasNext())) {
                _context2.next = 15;
                break;
              }

              if (!(chunks.length > ci)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 13;
              return chunks[ci++];

            case 13:
              _context2.next = 9;
              break;

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, SplitIterator);
    }));
    return _this;
  }

  return SplitEnumerable;
}(IEnumerable);

module.exports = SplitEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultFalsePredicate":155,"../methods/methods":172,"./IChunk":70,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],128:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ProtoEnumerable = require('./ProtoEnumerable');

var core = require('../core/core');

var defaultStrictEqualityComparer = require('../methods/defaultStrictEqualityComparer');

var defaultFalsePredicate = require('../methods/defaultFalsePredicate');

var OutOfRangeException = require('../core/exceptions/OutOfRangeException');

var StringEnumerable = /*#__PURE__*/function (_ProtoEnumerable) {
  (0, _inherits2.default)(StringEnumerable, _ProtoEnumerable);

  var _super = _createSuper(StringEnumerable);

  function StringEnumerable(string) {
    var _this;

    (0, _classCallCheck2.default)(this, StringEnumerable);
    _this = _super.call(this, string);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, function StringIterator() {
      return string[Symbol.iterator]();
    });
    return _this;
  }

  (0, _createClass2.default)(StringEnumerable, [{
    key: "elementAt",
    value: function elementAt(index) {
      if (index >= 0 && index < this[core.delegate].length) {
        return this[core.delegate][index];
      } else {
        throw new OutOfRangeException(index);
      }
    }
  }, {
    key: "indexOf",
    value: function indexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;

      if (comparer === defaultStrictEqualityComparer && core.s$indexOf) {
        return core.s$indexOf.call(this[core.delegate], value, start);
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(StringEnumerable.prototype), "indexOf", this).call(this, value, start, comparer);
      }
    }
  }, {
    key: "lastIndexOf",
    value: function lastIndexOf(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;

      if (comparer === defaultStrictEqualityComparer && core.s$lastIndexOf) {
        return core.s$lastIndexOf.call(this[core.delegate], value, start);
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(StringEnumerable.prototype), "lastIndexOf", this).call(this, value, start, comparer);
      }
    }
  }, {
    key: "includes",
    value: function includes(element) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (core.s$includes) {
        return core.s$includes.call(this[core.delegate], element, start);
      } else {
        return this[core.delegate].indexOf(element, start) !== -1;
      }
    }
  }, {
    key: "split",
    value: function split() {
      var splitPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFalsePredicate;

      if (core.s$split) {
        if (splitPredicate === defaultFalsePredicate) {
          var result = core.s$split.call(this[core.delegate]);
          return core.asEnumerable(result);
        } else if (core.isString(splitPredicate)) {
          var _result = core.s$split.call(this[core.delegate], splitPredicate);

          return core.asEnumerable(_result);
        } else {
          return (0, _get2.default)((0, _getPrototypeOf2.default)(StringEnumerable.prototype), "split", this).call(this, splitPredicate);
        }
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(StringEnumerable.prototype), "split", this).call(this, splitPredicate);
      }
    }
  }, {
    key: "toArray",
    value: function toArray() {
      if (core.s$split) {
        return core.s$split.call(this[core.delegate]);
      } else {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(StringEnumerable.prototype), "toArray", this).call(this);
      }
    }
  }]);
  return StringEnumerable;
}(ProtoEnumerable);

module.exports = StringEnumerable;

},{"../core/core":35,"../core/exceptions/OutOfRangeException":42,"../methods/defaultFalsePredicate":155,"../methods/defaultStrictEqualityComparer":164,"./ProtoEnumerable":107,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],129:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var SymmetricEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(SymmetricEnumerable, _IEnumerable);

  var _super = _createSuper(SymmetricEnumerable);

  function SymmetricEnumerable(source, other) {
    var _this;

    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, SymmetricEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function SymmetricIterator() {
      var temp, _iterator, _step, element, _iterator2, _step2, _element;

      return _regenerator.default.wrap(function SymmetricIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = core.asEnumerable([]);
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;

              if (other.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              if (temp.contains(element, comparer)) {
                _context.next = 11;
                break;
              }

              temp.push(element);
              _context.next = 11;
              return element;

            case 11:
              _context.next = 4;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
              _iterator2 = _createForOfIteratorHelper(other);
              _context.prev = 22;

              _iterator2.s();

            case 24:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 33;
                break;
              }

              _element = _step2.value;

              if (source.contains(_element, comparer)) {
                _context.next = 31;
                break;
              }

              if (temp.contains(_element, comparer)) {
                _context.next = 31;
                break;
              }

              temp.push(_element);
              _context.next = 31;
              return _element;

            case 31:
              _context.next = 24;
              break;

            case 33:
              _context.next = 38;
              break;

            case 35:
              _context.prev = 35;
              _context.t1 = _context["catch"](22);

              _iterator2.e(_context.t1);

            case 38:
              _context.prev = 38;

              _iterator2.f();

              return _context.finish(38);

            case 41:
            case "end":
              return _context.stop();
          }
        }
      }, SymmetricIterator, null, [[2, 15, 18, 21], [22, 35, 38, 41]]);
    }));
    return _this;
  }

  return SymmetricEnumerable;
}(IEnumerable);

module.exports = SymmetricEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],130:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var TakeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(TakeEnumerable, _IEnumerable);

  var _super = _createSuper(TakeEnumerable);

  function TakeEnumerable(source, count) {
    var _this;

    (0, _classCallCheck2.default)(this, TakeEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function TakeIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function TakeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 15;
                break;
              }

              element = _step.value;

              if (!(index < count)) {
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return element;

            case 9:
              _context.next = 12;
              break;

            case 11:
              return _context.abrupt("break", 15);

            case 12:
              index++;

            case 13:
              _context.next = 4;
              break;

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 20:
              _context.prev = 20;

              _iterator.f();

              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, TakeIterator, null, [[2, 17, 20, 23]]);
    }));
    return _this;
  }

  return TakeEnumerable;
}(IEnumerable);

module.exports = TakeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],131:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var TakeProportionEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(TakeProportionEnumerable, _IEnumerable);

  var _super = _createSuper(TakeProportionEnumerable);

  function TakeProportionEnumerable(source) {
    var _this;

    var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    (0, _classCallCheck2.default)(this, TakeProportionEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function TakeProportionIterator() {
      var _iterator, _step, element, count, take, nextCount, queue, _iterator2, _step2, _element, countProportion;

      return _regenerator.default.wrap(function TakeProportionIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(proportion > 0)) {
                _context.next = 51;
                break;
              }

              if (!(proportion >= 1)) {
                _context.next = 21;
                break;
              }

              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }

              element = _step.value;
              _context.next = 9;
              return element;

            case 9:
              _context.next = 5;
              break;

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 16:
              _context.prev = 16;

              _iterator.f();

              return _context.finish(16);

            case 19:
              _context.next = 51;
              break;

            case 21:
              count = 0, take = 0, nextCount = 1 / proportion, queue = [];
              _iterator2 = _createForOfIteratorHelper(source);
              _context.prev = 23;

              _iterator2.s();

            case 25:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 36;
                break;
              }

              _element = _step2.value;
              count++;
              queue.push(_element);

              if (!(nextCount < count && take < Math.floor(count * proportion))) {
                _context.next = 34;
                break;
              }

              _context.next = 32;
              return queue[take];

            case 32:
              take++;
              nextCount = (take + 1) / proportion;

            case 34:
              _context.next = 25;
              break;

            case 36:
              _context.next = 41;
              break;

            case 38:
              _context.prev = 38;
              _context.t1 = _context["catch"](23);

              _iterator2.e(_context.t1);

            case 41:
              _context.prev = 41;

              _iterator2.f();

              return _context.finish(41);

            case 44:
              countProportion = Math.floor(count * proportion);

            case 45:
              if (!(take < countProportion)) {
                _context.next = 51;
                break;
              }

              _context.next = 48;
              return queue[take];

            case 48:
              take++;
              _context.next = 45;
              break;

            case 51:
            case "end":
              return _context.stop();
          }
        }
      }, TakeProportionIterator, null, [[3, 13, 16, 19], [23, 38, 41, 44]]);
    }));
    return _this;
  }

  return TakeProportionEnumerable;
}(IEnumerable);

module.exports = TakeProportionEnumerable;

},{"../IEnumerable":31,"../core/core":35,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],132:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultSameComparer = require('../methods/defaultSameComparer');

var TakeSameEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(TakeSameEnumerable, _IEnumerable);

  var _super = _createSuper(TakeSameEnumerable);

  function TakeSameEnumerable(source) {
    var _this;

    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
    (0, _classCallCheck2.default)(this, TakeSameEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function TakeSameIterator() {
      var first, firstElement, _iterator, _step, element;

      return _regenerator.default.wrap(function TakeSameIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              first = true, firstElement = false;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 21;
                break;
              }

              element = _step.value;

              if (!first) {
                _context.next = 13;
                break;
              }

              firstElement = element;
              first = false;
              _context.next = 11;
              return element;

            case 11:
              _context.next = 19;
              break;

            case 13:
              if (!comparer(element, firstElement)) {
                _context.next = 18;
                break;
              }

              _context.next = 16;
              return element;

            case 16:
              _context.next = 19;
              break;

            case 18:
              return _context.abrupt("break", 21);

            case 19:
              _context.next = 4;
              break;

            case 21:
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 26:
              _context.prev = 26;

              _iterator.f();

              return _context.finish(26);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, TakeSameIterator, null, [[2, 23, 26, 29]]);
    }));
    return _this;
  }

  return TakeSameEnumerable;
}(IEnumerable);

module.exports = TakeSameEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultSameComparer":162,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],133:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var TakeWhileEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(TakeWhileEnumerable, _IEnumerable);

  var _super = _createSuper(TakeWhileEnumerable);

  function TakeWhileEnumerable(source) {
    var _this;

    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    (0, _classCallCheck2.default)(this, TakeWhileEnumerable);
    _this = _super.call(this, source);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function TakeWhileIterator() {
      var taking, index, _iterator, _step, element;

      return _regenerator.default.wrap(function TakeWhileIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              taking = true, index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 15;
                break;
              }

              element = _step.value;
              taking = taking && predicate(element, index++);

              if (!taking) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              _context.next = 13;
              break;

            case 12:
              return _context.abrupt("break", 15);

            case 13:
              _context.next = 4;
              break;

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 20:
              _context.prev = 20;

              _iterator.f();

              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, TakeWhileIterator, null, [[2, 17, 20, 23]]);
    }));
    return _this;
  }

  return TakeWhileEnumerable;
}(IEnumerable);

module.exports = TakeWhileEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],134:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var methods = require('../methods/methods');

var thenByComparer = require('../methods/thenByComparer');

var selectorComparer = require('../methods/selectorComparer');

var defaultSelector = require('../methods/defaultSelector');

var defaultComparer = require('../methods/defaultComparer');

var descendingComparer = require('../methods/descendingComparer');

var ThenByDescendingEnumerable = /*#__PURE__*/function (_IOrderedEnumerable) {
  (0, _inherits2.default)(ThenByDescendingEnumerable, _IOrderedEnumerable);

  var _super = _createSuper(ThenByDescendingEnumerable);

  function ThenByDescendingEnumerable(orderedSource) {
    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    (0, _classCallCheck2.default)(this, ThenByDescendingEnumerable);
    keySelector = methods.asSelector(keySelector);
    comparer = methods.asComparer(comparer);
    return _super.call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], descendingComparer(selectorComparer(keySelector, comparer))));
  }

  return ThenByDescendingEnumerable;
}(IOrderedEnumerable);

module.exports = ThenByDescendingEnumerable;

},{"../methods/defaultComparer":152,"../methods/defaultSelector":163,"../methods/descendingComparer":167,"../methods/methods":172,"../methods/selectorComparer":179,"../methods/thenByComparer":181,"./IOrderedEnumerable":75,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],135:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IOrderedEnumerable = require('./IOrderedEnumerable');

var methods = require('../methods/methods');

var thenByComparer = require('../methods/thenByComparer');

var selectorComparer = require('../methods/selectorComparer');

var defaultSelector = require('../methods/defaultSelector');

var defaultComparer = require('../methods/defaultComparer');

var ThenByEnumerable = /*#__PURE__*/function (_IOrderedEnumerable) {
  (0, _inherits2.default)(ThenByEnumerable, _IOrderedEnumerable);

  var _super = _createSuper(ThenByEnumerable);

  function ThenByEnumerable(orderedSource) {
    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    (0, _classCallCheck2.default)(this, ThenByEnumerable);
    keySelector = methods.asSelector(keySelector);
    comparer = methods.asComparer(comparer);
    return _super.call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], selectorComparer(keySelector, comparer)));
  }

  return ThenByEnumerable;
}(IOrderedEnumerable);

module.exports = ThenByEnumerable;

},{"../methods/defaultComparer":152,"../methods/defaultSelector":163,"../methods/methods":172,"../methods/selectorComparer":179,"../methods/thenByComparer":181,"./IOrderedEnumerable":75,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],136:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var core = require('../core/core');

var ITree = require('./ITree');

var methods = require('../methods/methods');

var defaultChildrenSelector = require('../methods/defaultChildrenSelector');

var defaultValueSelector = require('../methods/defaultValueSelector');

var TreeEnumerable = /*#__PURE__*/function (_ITree) {
  (0, _inherits2.default)(TreeEnumerable, _ITree);

  var _super = _createSuper(TreeEnumerable);

  function TreeEnumerable(source) {
    var childrenSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultChildrenSelector;
    var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValueSelector;
    (0, _classCallCheck2.default)(this, TreeEnumerable);
    childrenSelector = methods.asSelector(childrenSelector);
    valueSelector = methods.asSelector(valueSelector);
    return _super.call(this, valueSelector(source), /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var children, _iterator, _step, child;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              children = childrenSelector(source);

              if (!children) {
                _context.next = 19;
                break;
              }

              _iterator = _createForOfIteratorHelper(children);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }

              child = _step.value;
              _context.next = 9;
              return new TreeEnumerable(child, childrenSelector, valueSelector);

            case 9:
              _context.next = 5;
              break;

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 16:
              _context.prev = 16;

              _iterator.f();

              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13, 16, 19]]);
    }));
  }

  return TreeEnumerable;
}(ITree);

module.exports = TreeEnumerable;

},{"../core/core":35,"../methods/defaultChildrenSelector":150,"../methods/defaultValueSelector":165,"../methods/methods":172,"./ITree":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],137:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultEqualityComparer = require('../methods/defaultEqualityComparer');

var UnionEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(UnionEnumerable, _IEnumerable);

  var _super = _createSuper(UnionEnumerable);

  function UnionEnumerable(source, other) {
    var _this;

    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
    (0, _classCallCheck2.default)(this, UnionEnumerable);
    _this = _super.call(this, source);
    comparer = methods.asEqualityComparer(comparer);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function UnionIterator() {
      var temp, _iterator, _step, element, _iterator2, _step2, _element;

      return _regenerator.default.wrap(function UnionIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              temp = core.asEnumerable([]);
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 12;
                break;
              }

              element = _step.value;

              if (temp.contains(element, comparer)) {
                _context.next = 10;
                break;
              }

              temp.push(element);
              _context.next = 10;
              return element;

            case 10:
              _context.next = 4;
              break;

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 17:
              _context.prev = 17;

              _iterator.f();

              return _context.finish(17);

            case 20:
              _iterator2 = _createForOfIteratorHelper(other);
              _context.prev = 21;

              _iterator2.s();

            case 23:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 31;
                break;
              }

              _element = _step2.value;

              if (temp.contains(_element, comparer)) {
                _context.next = 29;
                break;
              }

              temp.push(_element);
              _context.next = 29;
              return _element;

            case 29:
              _context.next = 23;
              break;

            case 31:
              _context.next = 36;
              break;

            case 33:
              _context.prev = 33;
              _context.t1 = _context["catch"](21);

              _iterator2.e(_context.t1);

            case 36:
              _context.prev = 36;

              _iterator2.f();

              return _context.finish(36);

            case 39:
            case "end":
              return _context.stop();
          }
        }
      }, UnionIterator, null, [[2, 14, 17, 20], [21, 33, 36, 39]]);
    }));
    return _this;
  }

  return UnionEnumerable;
}(IEnumerable);

module.exports = UnionEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultEqualityComparer":153,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],138:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var INode = require('./INode');

var ValueNode = /*#__PURE__*/function (_INode) {
  (0, _inherits2.default)(ValueNode, _INode);

  var _super = _createSuper(ValueNode);

  function ValueNode(element, index, value) {
    var _this;

    (0, _classCallCheck2.default)(this, ValueNode);
    _this = _super.call(this, element, index);
    _this.value = value;
    return _this;
  }

  (0, _createClass2.default)(ValueNode, [{
    key: "set",
    value: function set(element, index, value) {
      this.value = value;
      return (0, _get2.default)((0, _getPrototypeOf2.default)(ValueNode.prototype), "set", this).call(this, element, index);
    }
  }]);
  return ValueNode;
}(INode);

module.exports = ValueNode;

},{"./INode":74,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19}],139:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var WhereEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(WhereEnumerable, _IEnumerable);

  var _super = _createSuper(WhereEnumerable);

  function WhereEnumerable(source) {
    var _this;

    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    (0, _classCallCheck2.default)(this, WhereEnumerable);
    _this = _super.call(this, source);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function WhereIterator() {
      var index, _iterator, _step, element;

      return _regenerator.default.wrap(function WhereIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }

              element = _step.value;

              if (!predicate(element, index++)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return element;

            case 9:
              _context.next = 4;
              break;

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 16:
              _context.prev = 16;

              _iterator.f();

              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, WhereIterator, null, [[2, 13, 16, 19]]);
    }));
    return _this;
  }

  return WhereEnumerable;
}(IEnumerable);

module.exports = WhereEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],140:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var methods = require('../methods/methods');

var defaultPredicate = require('../methods/defaultPredicate');

var WipeEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(WipeEnumerable, _IEnumerable);

  var _super = _createSuper(WipeEnumerable);

  function WipeEnumerable(source) {
    var _this;

    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    (0, _classCallCheck2.default)(this, WipeEnumerable);
    _this = _super.call(this, source);
    predicate = methods.asPredicate(predicate);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function WipeIterator() {
      var index, size, _iterator, _step, element;

      return _regenerator.default.wrap(function WipeIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = 0;
              size = 0;
              _iterator = _createForOfIteratorHelper(source);
              _context.prev = 3;

              _iterator.s();

            case 5:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }

              element = _step.value;

              if (!(count !== 0 && size > count || !predicate(element, index++))) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return element;

            case 10:
              size++;

            case 11:
              _context.next = 5;
              break;

            case 13:
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](3);

              _iterator.e(_context.t0);

            case 18:
              _context.prev = 18;

              _iterator.f();

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, WipeIterator, null, [[3, 15, 18, 21]]);
    }));
    return _this;
  }

  return WipeEnumerable;
}(IEnumerable);

module.exports = WipeEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultPredicate":160,"../methods/methods":172,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],141:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IEnumerable = require('../IEnumerable');

var core = require('../core/core');

var defaultResultSelector = require('../methods/defaultResultSelector');

var ZipEnumerable = /*#__PURE__*/function (_IEnumerable) {
  (0, _inherits2.default)(ZipEnumerable, _IEnumerable);

  var _super = _createSuper(ZipEnumerable);

  function ZipEnumerable(source, other) {
    var _this;

    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
    (0, _classCallCheck2.default)(this, ZipEnumerable);
    _this = _super.call(this, source);
    core.defineProperty((0, _assertThisInitialized2.default)(_this), Symbol.iterator, /*#__PURE__*/_regenerator.default.mark(function ZipIterator() {
      var sourceIterator, otherIterator, sourceElement, otherElement, index;
      return _regenerator.default.wrap(function ZipIterator$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sourceIterator = source[Symbol.iterator]();
              otherIterator = other[Symbol.iterator]();
              index = 0;

            case 3:
              sourceElement = sourceIterator.next();
              otherElement = otherIterator.next();

              if (!(!sourceElement.done && !otherElement.done)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return resultSelector(sourceElement.value, otherElement.value, index++);

            case 8:
              if (!(sourceElement.done && otherElement.done)) {
                _context.next = 3;
                break;
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, ZipIterator);
    }));
    return _this;
  }

  return ZipEnumerable;
}(IEnumerable);

module.exports = ZipEnumerable;

},{"../IEnumerable":31,"../core/core":35,"../methods/defaultResultSelector":161,"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":19,"@babel/runtime/regenerator":27}],142:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var core = require('./core/core');

var Enumerable = require('./Enumerable');

var methods = require('./methods/methods');

var defaultPredicate = require('./methods/defaultPredicate');

var defaultFalsePredicate = require('./methods/defaultFalsePredicate');

var defaultSelector = require('./methods/defaultSelector');

var defaultJoinSelector = require('./methods/defaultJoinSelector');

var defaultSameComparer = require('./methods/defaultSameComparer');

var defaultEqualityComparer = require('./methods/defaultEqualityComparer');

var defaultStrictEqualityComparer = require('./methods/defaultStrictEqualityComparer');

var defaultComparer = require('./methods/defaultComparer');

var defaultResultSelector = require('./methods/defaultResultSelector');

var defaultKeySelector = require('./methods/defaultKeySelector');

var defaultValueSelector = require('./methods/defaultValueSelector');

var defaultParentSelector = require('./methods/defaultParentSelector');

var defaultChildrenSelector = require('./methods/defaultChildrenSelector');

var defaultAction = require('./methods/defaultAction');

var _extends = new Map();

var addExtends = function addExtends(prototype, type, pascalOrPrefix, callback) {
  var _iterator = _createForOfIteratorHelper(_extends),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
          _prototypes = _step$value[1];

      if (_prototypes.has(prototype)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (!_extends.has(type)) {
    _extends.set(type, new Map());
  }

  var prototypes = _extends.get(type);

  if (prototypes.has(prototype) && prototypes.get(prototype) !== pascalOrPrefix) {
    if (callback && core.isFunction(callback)) {
      callback(prototypes.get(prototype));
    }
  }

  prototypes.set(prototype, pascalOrPrefix);
  return true;
};

var removeExtends = function removeExtends(prototype, type, pascalOrPrefix) {
  if (_extends.has(type)) {
    if (_extends.get(type).has(prototype) && _extends.get(type).get(prototype) === pascalOrPrefix) {
      _extends.get(type).delete(prototype);

      if (Enumerable.isEmpty(_extends.get(type))) {
        _extends.delete(type);
      }

      return true;
    }
  }

  return false;
};

var memberFunction = function memberFunction(name) {
  return function () {
    return Enumerable[name].apply(Enumerable, [this].concat(arguments));
  };
};

var extendObject = {
  getEnumerator: function getEnumerator() {
    return Enumerable.getEnumerator(this);
  },
  getIterator: function getIterator() {
    return Enumerable.getIterator(this);
  },
  where: function where() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.where(this, predicate);
  },
  select: function select() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    return Enumerable.select(this, selector);
  },
  elementAt: function elementAt(index) {
    return Enumerable.elementAt(this, index);
  },
  elementAtOrDefault: function elementAtOrDefault(index, defaultValue) {
    return Enumerable.elementAtOrDefault(this, index, defaultValue);
  },
  distinct: function distinct() {
    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;
    return Enumerable.distinct(this, comparer);
  },
  except: function except(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.except(this, other, comparer);
  },
  union: function union(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.union(this, other, comparer);
  },
  intersect: function intersect(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.intersect(this, other, comparer);
  },
  ofType: function ofType(type) {
    return Enumerable.ofType(this, type);
  },
  skip: function skip(count) {
    return Enumerable.skip(this, count);
  },
  skipWhile: function skipWhile() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.skipWhile(this, predicate);
  },
  skipProportion: function skipProportion() {
    var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return Enumerable.skipProportion(this, proportion);
  },
  skipSame: function skipSame() {
    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSameComparer;
    return Enumerable.skipSame(this, comparer);
  },
  take: function take(count) {
    return Enumerable.take(this, count);
  },
  takeWhile: function takeWhile() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.takeWhile(this, predicate);
  },
  takeSame: function takeSame() {
    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSameComparer;
    return Enumerable.takeSame(this, comparer);
  },
  takeProportion: function takeProportion() {
    var proportion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return Enumerable.takeProportion(this, proportion);
  },
  sorted: function sorted() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    return Enumerable.sorted(this, keySelector, comparer);
  },
  orderBy: function orderBy() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    return Enumerable.orderBy(this, keySelector, comparer);
  },
  orderByDescending: function orderByDescending() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    return Enumerable.orderByDescending(this, keySelector, comparer);
  },
  groupBy: function groupBy() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
    var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
    return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
  },
  selectMany: function selectMany() {
    var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
    return Enumerable.selectMany(this, collectionSelector, resultSelector);
  },
  flatMap: function flatMap() {
    var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
    return Enumerable.flatMap(this, collectionSelector, resultSelector);
  },
  flatten: function flatten() {
    var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
    return Enumerable.flatten(this, collectionSelector, resultSelector);
  },
  join: function join(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

    if (arguments.length === 1) {
      return Enumerable.join(this, inner);
    } else {
      return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
    }
  },
  joining: function joining(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    return Enumerable.joining(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  },
  innerJoin: function innerJoin(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    return Enumerable.innerJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  },
  leftJoin: function leftJoin(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    return Enumerable.leftJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  },
  rightJoin: function rightJoin(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    return Enumerable.rightJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  },
  groupJoin: function groupJoin(inner) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultJoinSelector;
    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;
    return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
  },
  defaultIfEmpty: function defaultIfEmpty(defaultValue) {
    return Enumerable.defaultIfEmpty(this, defaultValue);
  },
  all: function all() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.all(this, predicate);
  },
  allMatch: function allMatch() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.allMatch(this, predicate);
  },
  any: function any() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.any(this, predicate);
  },
  anyMatch: function anyMatch() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.anyMatch(this, predicate);
  },
  isEmpty: function isEmpty() {
    return Enumerable.isEmpty(this);
  },
  sequenceEqual: function sequenceEqual(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.sequenceEqual(this, other, comparer);
  },
  first: function first() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.first(this, predicate);
  },
  firstOrDefault: function firstOrDefault(defaultValue) {
    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    return Enumerable.firstOrDefault(this, defaultValue, predicate);
  },
  last: function last() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.last(this, predicate);
  },
  lastOrDefault: function lastOrDefault(defaultValue) {
    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    return Enumerable.lastOrDefault(this, defaultValue, predicate);
  },
  single: function single() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.single(this, predicate);
  },
  singleOrDefault: function singleOrDefault(defaultValue) {
    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;
    return Enumerable.singleOrDefault(this, defaultValue, predicate);
  },
  count: function count() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.count(this, predicate);
  },
  sum: function sum() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    return Enumerable.sum(this, selector);
  },
  product: function product() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    return Enumerable.product(this, selector);
  },
  max: function max() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    return Enumerable.max(this, selector, comparer);
  },
  maxOrDefault: function maxOrDefault(defaultValue) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    return Enumerable.maxOrDefault(this, defaultValue, selector, comparer);
  },
  min: function min() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;
    return Enumerable.min(this, selector, comparer);
  },
  minOrDefault: function minOrDefault(defaultValue) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;
    return Enumerable.minOrDefault(this, defaultValue, selector, comparer);
  },
  average: function average() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    return Enumerable.average(this, selector);
  },
  aggregate: function aggregate(seed, func) {
    var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    return Enumerable.aggregate(this, seed, func, selector);
  },
  contains: function contains(value) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.contains(this, value, comparer);
  },
  indexOf: function indexOf(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;
    return Enumerable.indexOf(this, value, start, comparer);
  },
  findIndex: function findIndex(predicate, thisArg) {
    return Enumerable.findIndex(this, predicate, thisArg);
  },
  lastIndexOf: function lastIndexOf(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStrictEqualityComparer;
    return Enumerable.lastIndexOf(this, value, start, comparer);
  },
  findLast: function findLast(predicate, thisArg) {
    return Enumerable.findLast(this, predicate, thisArg);
  },
  findLastIndex: function findLastIndex(predicate, thisArg) {
    return Enumerable.findLastIndex(this, predicate, thisArg);
  },
  reverse: function reverse() {
    return Enumerable.reverse(this);
  },
  copyWithin: function copyWithin() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

    if (core.isArray(this) && core.a$copyWithin && !core.lazy) {
      return core.a$copyWithin.call(this, target, start, end);
    } else {
      return Enumerable.copyWithin(this, target, start, end);
    }
  },
  every: function every(callback, thisArg) {
    return Enumerable.every(this, callback, thisArg);
  },
  fill: function fill(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

    if (core.isArray(this) && core.a$fill && !core.lazy) {
      return core.a$fill.call(this, value, start, end);
    } else {
      return Enumerable.fill(this, value, start, end);
    }
  },
  filter: function filter(callback, thisArg) {
    if ((core.isArray(this) || core.isArguments(this)) && core.a$filter && !core.lazy) {
      return core.a$filter.call(this, callback, thisArg);
    } else {
      return Enumerable.filter(this, callback, thisArg);
    }
  },
  find: function find(callback, thisArg) {
    return Enumerable.find(this, callback, thisArg);
  },
  includes: function includes(element) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (core.isString(this) && core.s$includes) {
      return core.s$includes.call(this, element, start);
    } else if ((core.isArray(this) || core.isArguments(this)) && core.a$includes) {
      return core.a$includes.call(this, element, start);
    } else {
      return Enumerable.includes(this, element, start);
    }
  },
  map: function map(callback, thisArg) {
    if ((core.isArray(this) || core.isArguments(this)) && core.a$map && !core.lazy) {
      return core.a$map.call(this, callback, thisArg);
    } else {
      return Enumerable.map(this, callback, thisArg);
    }
  },
  pop: function pop() {
    return Enumerable.pop(this);
  },
  push: function push() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    return Enumerable.push.apply(Enumerable, core.a$concat.call([this], values));
  },
  shift: function shift() {
    return Enumerable.shift(this);
  },
  unshift: function unshift() {
    for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    return Enumerable.unshift.apply(Enumerable, core.a$concat.call([this], values));
  },
  reduce: function reduce(callback, initialValue) {
    return Enumerable.reduce(this, callback, initialValue);
  },
  reduceRight: function reduceRight(callback, initialValue) {
    return Enumerable.reduceRight(this, callback, initialValue);
  },
  slice: function slice() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

    if (core.isString(this) && core.s$slice && !core.lazy) {
      return core.s$slice.call(this, start, end);
    } else if ((core.isArray(this) || core.isArguments(this)) && core.a$slice && !core.lazy) {
      return core.a$slice.call(this, start, end);
    } else {
      return Enumerable.slice(this, start, end);
    }
  },
  splice: function splice(start, count) {
    for (var _len3 = arguments.length, values = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      values[_key3 - 2] = arguments[_key3];
    }

    return Enumerable.splice.apply(Enumerable, core.a$concat.call([this, start, count], values));
  },
  some: function some(callback, thisArg) {
    return Enumerable.some(this, callback, thisArg);
  },
  sort: function sort() {
    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultComparer;

    if (core.isArray(this) && core.a$sort && !core.lazy) {
      return core.a$sort.call(this, methods.asComparer(comparer));
    } else {
      return Enumerable.sort(this, comparer);
    }
  },
  zip: function zip(other) {
    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultResultSelector;
    return Enumerable.zip(this, other, resultSelector);
  },
  toArray: function toArray() {
    return Enumerable.toArray(this);
  },
  toObject: function toObject() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
    return Enumerable.toDictionary(this, keySelector, elementSelector, comparer).toObject();
  },
  toPreOrder: function toPreOrder() {
    return Enumerable.toPreOrder(this);
  },
  toInOrder: function toInOrder() {
    return Enumerable.toInOrder(this);
  },
  toPostOrder: function toPostOrder() {
    return Enumerable.toPostOrder(this);
  },
  forEach: function forEach() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    return Enumerable.forEach(this, action, thisArg);
  },
  each: function each() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
    return Enumerable.each(this, action);
  },
  indices: function indices(_indices) {
    return Enumerable.indices(this, _indices);
  },
  permutation: function permutation(count) {
    var repeatable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return Enumerable.permutation(this, count, repeatable);
  },
  combination: function combination(count) {
    var repeatable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return Enumerable.combination(this, count, repeatable);
  },
  chunk: function chunk(_chunk) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Enumerable.chunk(this, _chunk, offset);
  },
  split: function split() {
    var splitPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFalsePredicate;
    return Enumerable.split(this, splitPredicate);
  },
  nearSplit: function nearSplit() {
    var splitPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFalsePredicate;
    return Enumerable.nearSplit(this, splitPredicate);
  },
  leftPad: function leftPad(length, value) {
    return Enumerable.leftPad(this, length, value);
  },
  rightPad: function rightPad(length, value) {
    return Enumerable.rightPad(this, length, value);
  },
  rand: function rand() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return Enumerable.rand(this, count);
  },
  random: function random() {
    return Enumerable.random(this);
  },
  randomOrDefault: function randomOrDefault(defaultValue) {
    return Enumerable.randomOrDefault(this, defaultValue);
  },
  wipe: function wipe() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Enumerable.wipe(this, predicate, count);
  },
  nearBy: function nearBy() {
    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultResultSelector;
    var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
    return Enumerable.nearBy(this, keySelector, elementSelector, resultSelector, comparer);
  },
  combine: function combine() {
    var parentSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultParentSelector;
    var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeySelector;
    var valueSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
    var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;
    return Enumerable.combine(this, parentSelector, keySelector, valueSelector, comparer);
  },
  separate: function separate() {
    var childrenSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultChildrenSelector;
    var valueSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
    return Enumerable.separate(this, childrenSelector, valueSelector);
  },
  isSub: function isSub(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.isSub(this, other, comparer);
  },
  isSuper: function isSuper(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.isSuper(this, other, comparer);
  },
  symmetric: function symmetric(other) {
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.symmetric(this, other, comparer);
  },
  conflict: function conflict() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
    return Enumerable.conflict(this, selector, comparer);
  },
  concat: function concat() {
    for (var _len4 = arguments.length, others = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      others[_key4] = arguments[_key4];
    }

    if (core.isString(this) && core.s$concat && !core.lazy) {
      return core.s$concat.apply(this, others);
    } else if ((core.isArray(this) || core.isArguments(this)) && core.a$concat && !core.lazy) {
      return core.a$concat.apply(this, others);
    } else {
      return Enumerable.concat.apply(Enumerable, core.a$concat.call([this], others));
    }
  },
  proportion: function proportion() {
    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;
    return Enumerable.proportion(this, predicate);
  }
};
core.defineProperty(Enumerable, 'extends', function () {
  var result = new Map();

  var _iterator2 = _createForOfIteratorHelper(_extends),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2),
          type = _step2$value[0],
          prototypes = _step2$value[1];

      var p = new Map();

      var _iterator3 = _createForOfIteratorHelper(prototypes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = (0, _slicedToArray2.default)(_step3.value, 2),
              prototype = _step3$value[0],
              pascalOrPrefix = _step3$value[1];

          p.set(prototype, pascalOrPrefix);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      result.set(type, p);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}, true, true);

Enumerable.unextendAll = function () {
  var _iterator4 = _createForOfIteratorHelper(this.extends),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = (0, _slicedToArray2.default)(_step4.value, 2),
          type = _step4$value[0],
          prototypes = _step4$value[1];

      var _iterator5 = _createForOfIteratorHelper(prototypes),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = (0, _slicedToArray2.default)(_step5.value, 2),
              prototype = _step5$value[0],
              pascalOrPrefix = _step5$value[1];

          Enumerable.unextend(prototype, type, true, pascalOrPrefix);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};

Enumerable.extendAll = function (extendMap) {
  var _iterator6 = _createForOfIteratorHelper(extendMap),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = (0, _slicedToArray2.default)(_step6.value, 2),
          type = _step6$value[0],
          prototypes = _step6$value[1];

      var _iterator7 = _createForOfIteratorHelper(prototypes),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = (0, _slicedToArray2.default)(_step7.value, 2),
              prototype = _step7$value[0],
              pascalOrPrefix = _step7$value[1];

          Enumerable.extend(prototype, type, true, pascalOrPrefix);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};

Enumerable.unextend = function (prototype, type) {
  var isPrototype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var pascalOrPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if ((0, _typeof2.default)(prototype) !== 'object' || core.getType(type) !== core.types.String) return prototype;

  if (!isPrototype || removeExtends(prototype, type, pascalOrPrefix)) {
    core.undefineProperties(prototype, [].concat((0, _toConsumableArray2.default)(Object.keys(extendObject)), ['toDictionary', 'toLookup']), pascalOrPrefix);

    var _iterator8 = _createForOfIteratorHelper(this.plugins),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var plugin = _step8.value;

        if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
          core.undefineProperties(prototype, [plugin.name], pascalOrPrefix);
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  return prototype;
};

Enumerable.extend = function (prototype, type) {
  var _this = this;

  var isPrototype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var pascalOrPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if ((0, _typeof2.default)(prototype) !== 'object' || core.getType(type) !== core.types.String) return prototype;

  if (!isPrototype || addExtends(prototype, type, pascalOrPrefix, function (pascalOrPrefix) {
    return _this.unextend(prototype, type, isPrototype, pascalOrPrefix);
  })) {
    core.defineProperties(prototype, extendObject, pascalOrPrefix);

    if (type !== core.types.Object) {
      core.defineProperties(prototype, {
        toDictionary: function toDictionary() {
          var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
          var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
          var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
          return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        },
        toLookup: function toLookup() {
          var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
          var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
          var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
          return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
      }, pascalOrPrefix);
    } else {
      core.defineProperties(prototype, {
        toDictionary: function toDictionary() {
          var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
          var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
          var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
          return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        },
        toLookup: function toLookup() {
          var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
          var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
          var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSameComparer;
          return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
      }, pascalOrPrefix);
    }

    var _iterator9 = _createForOfIteratorHelper(this.plugins),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var plugin = _step9.value;

        if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
          core.defineProperties(prototype, (0, _defineProperty2.default)({}, plugin.name, memberFunction(plugin.name)), pascalOrPrefix);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  return prototype;
};

},{"./Enumerable":30,"./core/core":35,"./methods/defaultAction":149,"./methods/defaultChildrenSelector":150,"./methods/defaultComparer":152,"./methods/defaultEqualityComparer":153,"./methods/defaultFalsePredicate":155,"./methods/defaultJoinSelector":157,"./methods/defaultKeySelector":158,"./methods/defaultParentSelector":159,"./methods/defaultPredicate":160,"./methods/defaultResultSelector":161,"./methods/defaultSameComparer":162,"./methods/defaultSelector":163,"./methods/defaultStrictEqualityComparer":164,"./methods/defaultValueSelector":165,"./methods/methods":172,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/slicedToArray":21,"@babel/runtime/helpers/toConsumableArray":23,"@babel/runtime/helpers/typeof":24}],143:[function(require,module,exports){
'use strict';
/**
 * Created by wm123 on 2017/2/14.
 */

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Enumerable = require('./Enumerable');

var core = require('./core/core');

var getter = function getter(original) {
  return function () {
    return Enumerable.extend(original.apply(this, arguments), core.types.Array);
  };
};

var extendsTypes = [Array, Map, Set];
var extendsProperties = ['keys', 'values', 'entries'];
module.exports = {
  install: function install() {
    Enumerable.extend(Array.prototype, core.types.Array, true);

    (function (types, props) {
      var _iterator = _createForOfIteratorHelper(types),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;

          if (type) {
            var _iterator2 = _createForOfIteratorHelper(props),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var prop = _step2.value;
                core.defineProperty(type.prototype, prop, getter(type.prototype[prop]));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    })(extendsTypes, extendsProperties);
  },
  uninstall: function uninstall() {
    Enumerable.unextend(Array.prototype, core.types.Array, true);

    (function (types, props) {
      var _iterator3 = _createForOfIteratorHelper(types),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var type = _step3.value;

          if (type) {
            core.undefineProperties(type.prototype, props);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    })(extendsTypes, extendsProperties);
  }
};

},{"./Enumerable":30,"./core/core":35}],144:[function(require,module,exports){
'use strict';
/**
 * Created by wm123 on 2017/2/14.
 */

var Enumerable = require('./Enumerable');

var core = require('./core/core');

module.exports = {
  install: function install() {
    Enumerable.extend(Object.prototype, core.types.Object, true);
  },
  uninstall: function uninstall() {
    Enumerable.unextend(Object.prototype, core.types.Object, true);
  }
};

},{"./Enumerable":30,"./core/core":35}],145:[function(require,module,exports){
'use strict';
/**
 * Created by wm123 on 2017/2/14.
 */

var Enumerable = require('./Enumerable');

var core = require('./core/core');

module.exports = {
  install: function install() {
    Enumerable.extend(String.prototype, core.types.String, true);
  },
  uninstall: function uninstall() {
    Enumerable.unextend(String.prototype, core.types.String, true);
  }
};

},{"./Enumerable":30,"./core/core":35}],146:[function(require,module,exports){
'use strict';

var core = require('./core/core');

var Enumerable = require('./linq');

require('./plugin');

require('./extend');

var CONFLICT_SET_CONFIG = 'Can not set this config after call the noConflict method. If you want, you can use Enumerable.noConflict method with one parameter which value is "true" to set Enumerable of global back to this module';
var config = {
  extends: {
    array: false,
    string: false,
    object: false
  }
};

var extendArray = require('./linq-array');

var extendObject = require('./linq-object');

var extendString = require('./linq-string');

var save = Enumerable.save;
var restore = Enumerable.restore;

Enumerable.save = function (saved) {
  save.call(this, saved);
  if (!saved.config) saved.config = {};
  if (!saved.config.extends) saved.config.extends = {};
  saved.config.extends.array = this.config.extends.array;
  this.config.extends.array = false;
  saved.config.extends.string = this.config.extends.string;
  this.config.extends.string = false;
  saved.config.extends.object = this.config.extends.object;
  this.config.extends.object = false;
  saved.extends = this.extends;
  if (this.unextendAll) this.unextendAll();
};

Enumerable.restore = function (saved) {
  restore.call(this, saved);
  this.config.extends.array = saved.config && saved.config.extends && saved.config.extends.array || false;
  this.config.extends.string = saved.config && saved.config.extends && saved.config.extends.string || false;
  this.config.extends.object = saved.config && saved.config.extends && saved.config.extends.object || false;
  this.extendAll(saved.extends);
};

Enumerable.config.extends = {
  set array(value) {
    if (config.noConflict) {
      console.warn(CONFLICT_SET_CONFIG);
      return;
    }

    if (config.extends.array !== value) {
      if (value) {
        extendArray.install();
      } else {
        extendArray.uninstall();
      }
    }

    config.extends.array = value;
  },

  get array() {
    return config.extends.array;
  },

  set object(value) {
    if (config.noConflict) {
      console.warn(CONFLICT_SET_CONFIG);
      return;
    }

    if (config.extends.object !== value) {
      if (value) {
        extendObject.install();
      } else {
        extendObject.uninstall();
      }
    }

    config.extends.object = value;
  },

  get object() {
    return config.extends.object;
  },

  set string(value) {
    if (config.noConflict) {
      console.warn(CONFLICT_SET_CONFIG);
      return;
    }

    if (config.extends.string !== value) {
      if (value) {
        extendString.install();
      } else {
        extendString.uninstall();
      }
    }

    config.extends.string = value;
  },

  get string() {
    return config.extends.string;
  },

  set lazy(value) {
    if (config.extends.lazy !== value) {
      core.lazy = value;
    }

    config.extends.lazy = value;
  },

  get lazy() {
    return config.extends.lazy;
  }

};
module.exports = Enumerable;

},{"./core/core":35,"./extend":142,"./linq":147,"./linq-array":143,"./linq-object":144,"./linq-string":145,"./plugin":182}],147:[function(require,module,exports){
(function (global){(function (){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var g = (typeof global === "undefined" ? "undefined" : (0, _typeof2.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof2.default)(self)) === "object" ? self : void 0; // if (!g.regeneratorRuntime && typeof regeneratorRuntime === 'undefined') {
//     require('@babel/polyfill');
// }

var CONFLICT_SUGGEST = 'You may require this module twice or more. I suggest you to only require once. If you must to, you can also use Enumerable.noConflict method to solve the conflict';
var defaultAs = 'asEnumerable';

var clear = function clear(name) {
  delete String.prototype[name];
  delete Array.prototype[name];
  delete Map.prototype[name];
  delete Set.prototype[name];
  delete Object.prototype[name];
};

var _Enumerable;

var _saved = {};

if (g.Enumerable) {
  _Enumerable = g.Enumerable;

  _Enumerable.save(_saved);

  delete g.Enumerable;
  console.warn(CONFLICT_SUGGEST);
}

var core = require('./core/core');

var Enumerable = require('./Enumerable');

var config = {
  as: defaultAs,
  noConflict: false
};
var saved = {};

var initAs = function initAs(name) {
  if (name !== defaultAs && config.as && config.as !== defaultAs) {
    clear(config.as);
  }

  core.defineProperties(Object.prototype, (0, _defineProperty2.default)({}, name, function (childrenSelector, valueSelector) {
    return core.asEnumerable(this, childrenSelector, valueSelector);
  }));
  core.defineProperties(String.prototype, (0, _defineProperty2.default)({}, name, function () {
    return new StringEnumerable(this);
  }));
  core.defineProperties(Array.prototype, (0, _defineProperty2.default)({}, name, function () {
    return new ArrayEnumerable(this);
  }));
  core.defineProperties(Map.prototype, (0, _defineProperty2.default)({}, name, function () {
    return new MapEnumerable(this);
  }));
  core.defineProperties(Set.prototype, (0, _defineProperty2.default)({}, name, function () {
    return new ArrayEnumerable(this);
  }));
  config.as = name;
};

initAs(defaultAs);

Enumerable.typeAs = function (type, as) {
  if (type.constructor.prototype !== type) type = type.prototype;
  type[core.typeAs] = as;
};

Enumerable.types = core.types;
Enumerable.config = {
  set as(name) {
    initAs(name);
  },

  get as() {
    return config.as;
  }

};

Enumerable.save = function (saved) {
  if (this.config.as !== defaultAs) clear(this.config.as);
  clear(defaultAs);
};

Enumerable.restore = function (saved) {
  var as = this.config.as;
  this.config.as = defaultAs;
  if (as !== defaultAs) this.config.as = as;
};

Enumerable.noConflict = function () {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (callback !== true) {
    if (this.isConflict) {
      this.save(saved);
      config.noConflict = true;
      g.Enumerable = _Enumerable;
      g.Enumerable.restore(_saved);
      var noConflict = g.Enumerable.noConflict;

      g.Enumerable.noConflict = function () {
        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (callback === true) {
          g.Enumerable.save(_saved);
          config.noConflict = false;
          Enumerable.restore(saved);
          g.Enumerable.noConflict = noConflict;
          return Enumerable;
        } else {
          return noConflict();
        }
      };
    }
  }

  if (callback && core.isFunction(callback)) callback(Enumerable);
  return Enumerable;
};

core.defineProperty(Enumerable, 'isConflict', function () {
  return _Enumerable && !config.noConflict;
}, true, true);
module.exports = g.Enumerable = Enumerable;

var MapEnumerable = require('./enumerables/MapEnumerable');

var ArrayEnumerable = require('./enumerables/ArrayEnumerable');

var StringEnumerable = require('./enumerables/StringEnumerable');

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {})

},{"./Enumerable":30,"./core/core":35,"./enumerables/ArrayEnumerable":46,"./enumerables/MapEnumerable":87,"./enumerables/StringEnumerable":128,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/typeof":24}],148:[function(require,module,exports){
'use strict';

var defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = function (array) {
  var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
  comparer = methods.asEqualityComparer(comparer);
  var enumerable = array.asEnumerable(),
      count = -1;

  var getCount = function getCount() {
    return count === -1 ? count = enumerable.count() : count;
  };

  return function (element, other) {
    var elementIndex = enumerable.indexOf(element, 0, comparer);
    elementIndex = elementIndex === -1 && last ? getCount() : elementIndex;
    var otherIndex = enumerable.indexOf(other, 0, comparer);
    otherIndex = otherIndex === -1 && last ? getCount() : otherIndex;
    return elementIndex - otherIndex;
  };
};

var methods = require('./methods');

},{"./defaultEqualityComparer":153,"./methods":172}],149:[function(require,module,exports){
'use strict';

module.exports = function (element, key) {};

},{}],150:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element.children === 'undefined' ? element : element.children;
};

},{}],151:[function(require,module,exports){
'use strict';

module.exports = function (element, value) {
  if (typeof element !== 'undefined' && element !== null) {
    element.children = value;
  }
};

},{}],152:[function(require,module,exports){
'use strict';

var IComparable = require('../core/IComparable');

module.exports = function (element, other) {
  return element instanceof IComparable ? element.compare(other) : other instanceof IComparable ? -other.compare(element) : element > other ? 1 : element == other ? 0 : -1;
};

},{"../core/IComparable":33}],153:[function(require,module,exports){
'use strict';

var IEquatable = require('../core/IEquatable');

module.exports = function (element, other) {
  return element instanceof IEquatable ? element.equals(other) : other instanceof IEquatable ? other.equals(element) : element == other;
};

},{"../core/IEquatable":34}],154:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element !== 'undefined' && element !== null;
};

},{}],155:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return false;
};

},{}],156:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return index;
};

},{}],157:[function(require,module,exports){
'use strict';

module.exports = function (outer, inner) {
  return {
    outer: outer,
    inner: inner
  };
};

},{}],158:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element.key === 'undefined' ? element : element.key;
};

},{}],159:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return element.parent;
};

},{}],160:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return true;
};

},{}],161:[function(require,module,exports){
'use strict';

module.exports = function (key, result) {
  return result;
};

},{}],162:[function(require,module,exports){
'use strict';

module.exports = function (element, other) {
  return element === other || typeof element === 'number' && typeof other === 'number' && isNaN(element) && isNaN(other);
};

},{}],163:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return element;
};

},{}],164:[function(require,module,exports){
'use strict';

module.exports = function (element, other) {
  return element === other;
};

},{}],165:[function(require,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element.value === 'undefined' ? element : element.value;
};

},{}],166:[function(require,module,exports){
'use strict';

module.exports = function (element, value) {
  if (typeof element !== 'undefined' && element !== null) {
    element.value = value;
  }
};

},{}],167:[function(require,module,exports){
'use strict';

module.exports = function (orderBy) {
  return function (element, other) {
    return -orderBy(element, other);
  };
};

},{}],168:[function(require,module,exports){
'use strict';

var defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = function (value) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
  comparer = methods.asEqualityComparer(comparer);
  return function (element, index) {
    return comparer(element, value);
  };
};

var methods = require('./methods');

},{"./defaultEqualityComparer":153,"./methods":172}],169:[function(require,module,exports){
'use strict';

var defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = function (greaterThen) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
  return function (element, other) {
    comparer = methods.asEqualityComparer(comparer);

    if (comparer(element, other)) {
      return 0;
    } else {
      return greaterThen(element, other) ? 1 : -1;
    }
  };
};

var methods = require('./methods');

},{"./defaultEqualityComparer":153,"./methods":172}],170:[function(require,module,exports){
'use strict';

var defaultSelector = require('./defaultSelector');

module.exports = function () {
  var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
  keySelector = methods.asSelector(keySelector);
  return function (element, other) {
    element = keySelector(element);
    other = keySelector(other);
    return element === other || element && other && element.toString().toLowerCase() === other.toString().toLowerCase();
  };
};

var methods = require('./methods');

},{"./defaultSelector":163,"./methods":172}],171:[function(require,module,exports){
'use strict';

var defaultEqualityComparer = require('./defaultEqualityComparer');

module.exports = function (lessThen) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;
  return function (element, other) {
    comparer = methods.asEqualityComparer(comparer);

    if (comparer(element, other)) {
      return 0;
    } else {
      return lessThen(element, other) ? -1 : 1;
    }
  };
};

var methods = require('./methods');

},{"./defaultEqualityComparer":153,"./methods":172}],172:[function(require,module,exports){
'use strict';

var core = require('../core/core');

var InvalidFunctionException = require('../core/exceptions/InvalidFunctionException');

var methods = {
  asSelector: function asSelector(selector) {
    var type = core.getType(selector);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return propertySelector(selector);
    } else if (type === core.types.Function) {
      return selector;
    } else {
      throw new InvalidFunctionException(selector);
    }
  },
  asSetter: function asSetter(setter) {
    var type = core.getType(setter);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return propertySetter(setter);
    } else if (type === core.types.Function) {
      return setter;
    } else {
      throw new InvalidFunctionException(setter);
    }
  },
  asPredicate: function asPredicate(predicate) {
    var type = core.getType(predicate);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return selectorPredicate(predicate);
    } else if (type === core.types.Function) {
      return predicate;
    } else if (type === core.types.RegExp) {
      return regexpPredicate(predicate);
    } else if (type === core.types.Array || type === core.types.Object) {
      return propertiesPredicate(predicate);
    } else {
      throw new InvalidFunctionException(predicate);
    }
  },
  asEqualityComparer: function asEqualityComparer(comparer) {
    var type = core.getType(comparer);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return selectorComparer(comparer, defaultEqualityComparer);
    } else if (type === core.types.Function) {
      return comparer;
    } else {
      throw new InvalidFunctionException(comparer);
    }
  },
  asStrictEqualityComparer: function asStrictEqualityComparer(comparer) {
    var type = core.getType(comparer);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return selectorComparer(comparer, defaultStrictEqualityComparer);
    } else if (type === core.types.Function) {
      return comparer;
    } else {
      throw new InvalidFunctionException(comparer);
    }
  },
  asSameComparer: function asSameComparer(comparer) {
    var type = core.getType(comparer);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return selectorComparer(comparer, defaultSameComparer);
    } else if (type === core.types.Function) {
      return comparer;
    } else {
      throw new InvalidFunctionException(comparer);
    }
  },
  asComparer: function asComparer(comparer) {
    var type = core.getType(comparer);

    if (type === core.types.String || type === core.types.Number || type === core.types.Symbol) {
      return selectorComparer(comparer, defaultComparer);
    } else if (type === core.types.Array || type === core.types.Enumerable) {
      return arrayComparer(comparer);
    } else if (type === core.types.Function) {
      return comparer;
    } else {
      throw new InvalidFunctionException(comparer);
    }
  }
};
module.exports = methods;

var propertySetter = require('./propertySetter');

var propertySelector = require('./propertySelector');

var selectorPredicate = require('./selectorPredicate');

var selectorComparer = require('./selectorComparer');

var defaultEqualityComparer = require('./defaultEqualityComparer');

var defaultStrictEqualityComparer = require('./defaultStrictEqualityComparer');

var defaultSameComparer = require('./defaultSameComparer');

var defaultComparer = require('./defaultComparer');

var arrayComparer = require('./arrayComparer');

var propertiesPredicate = require('./propertiesPredicate');

var regexpPredicate = require('./regexpPredicate');

},{"../core/core":35,"../core/exceptions/InvalidFunctionException":37,"./arrayComparer":148,"./defaultComparer":152,"./defaultEqualityComparer":153,"./defaultSameComparer":162,"./defaultStrictEqualityComparer":164,"./propertiesPredicate":175,"./propertySelector":176,"./propertySetter":177,"./regexpPredicate":178,"./selectorComparer":179,"./selectorPredicate":180}],173:[function(require,module,exports){
'use strict';

var defaultExistsPredicate = require('./defaultExistsPredicate');

module.exports = function () {
  var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultExistsPredicate;
  predicate = methods.asPredicate(predicate);
  return function (element, index) {
    return !predicate(element, index);
  };
};

var methods = require('./methods');

},{"./defaultExistsPredicate":154,"./methods":172}],174:[function(require,module,exports){
'use strict';

module.exports = function (array) {
  var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var enumerable = array.asEnumerable(),
      count = -1;

  var getCount = function getCount() {
    return count === -1 ? count = enumerable.count() : count;
  };

  return function (element, other) {
    var elementIndex = enumerable.findIndex(function (predicate) {
      return predicate(element);
    });
    elementIndex = elementIndex === -1 && last ? getCount() : elementIndex;
    var otherIndex = enumerable.findIndex(function (predicate) {
      return predicate(other);
    });
    otherIndex = otherIndex === -1 && last ? getCount() : otherIndex;
    return elementIndex - otherIndex;
  };
};

var methods = require('./methods');

},{"./methods":172}],175:[function(require,module,exports){
'use strict';

var defaultSameComparer = require('./defaultSameComparer');

var propertySelector = require('./propertySelector');

var compare = function compare(element, properties, comparer) {
  for (var property in properties) {
    var ep = propertySelector(property)(element);
    var pp = properties[property];
    var ept = core.getType(ep);

    if (ept !== core.getType(pp)) {
      return false;
    } else {
      if (ept === core.types.Object || ept === core.types.Array) {
        if (!compare(ep, pp, comparer)) {
          return false;
        }
      } else if (!comparer(ep, pp)) {
        return false;
      }
    }
  }

  return true;
};

module.exports = function (properties) {
  var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSameComparer;
  comparer = methods.asEqualityComparer(comparer);
  return function (element) {
    return compare(element, properties, comparer);
  };
};

var methods = require('./methods');

var core = require('../core/core');

},{"../core/core":35,"./defaultSameComparer":162,"./methods":172,"./propertySelector":176}],176:[function(require,module,exports){
'use strict';

var core = require('../core/core');

var PropertyExpressionInvalidException = require('../core/exceptions/PropertyExpressionInvalidException');

var regValid = /^(([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))(\.([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))*$/ig;
var regSplit = /(?:^|\.)([_$\w][_$\w\d]*)|\[(?:(\d+)|'([^']+)'|"([^"]+)")]/ig;

module.exports = function (property) {
  var ignoreInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (core.isSymbol(property) || core.isNumber(property)) {
    return function (element, index) {
      return typeof element !== 'undefined' && element !== null ? element[property] : element;
    };
  } else if (property === '') {
    return function (element, index) {
      return element;
    };
  } else {
    regValid.lastIndex = 0;

    if (regValid.test(property)) {
      return function (element) {
        regSplit.lastIndex = 0;
        var result;

        while (typeof element !== 'undefined' && element !== null && (result = regSplit.exec(property))) {
          element = element[result[1] || result[2] || result[3] || result[4]];
        }

        return element;
      };
    } else if (!ignoreInvalid) {
      throw new PropertyExpressionInvalidException(property);
    }
  }
};

},{"../core/core":35,"../core/exceptions/PropertyExpressionInvalidException":44}],177:[function(require,module,exports){
'use strict';

var core = require('../core/core');

var PropertyExpressionInvalidException = require('../core/exceptions/PropertyExpressionInvalidException');

var regValid = /^(([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))(\.([_$\w][_$\w\d]*)|(\[((\d+)|'([^']+)'|"([^"]+)")]))*$/ig;
var regSplit = /(?:^|\.)([_$\w][_$\w\d]*)|\[(?:(\d+)|'([^']+)'|"([^"]+)")]/ig;
var FIRST = Symbol('first');

module.exports = function (property) {
  var ignoreInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (core.isSymbol(property) || core.isNumber(property)) {
    return function (element, value) {
      if (typeof element !== 'undefined' && element !== null) {
        element[property] = value;
      } else if (!ignoreInvalid) {
        throw new PropertyExpressionInvalidException(property);
      }
    };
  } else if (property === '') {
    throw new PropertyExpressionInvalidException(property);
  } else {
    regValid.lastIndex = 0;

    if (regValid.test(property)) {
      return function (element, value) {
        regSplit.lastIndex = 0;
        var result;
        var prop = FIRST;

        while (typeof element !== 'undefined' && element !== null && (result = regSplit.exec(property))) {
          if (prop !== FIRST) element = element[prop];
          prop = result[1] || result[2] || result[3] || result[4];
        }

        if (typeof element !== 'undefined' && element !== null && prop !== FIRST) {
          element[prop] = value;
        } else if (!ignoreInvalid) {
          throw new PropertyExpressionInvalidException(property);
        }
      };
    } else if (!ignoreInvalid) {
      throw new PropertyExpressionInvalidException(property);
    }
  }
};

},{"../core/core":35,"../core/exceptions/PropertyExpressionInvalidException":44}],178:[function(require,module,exports){
'use strict';

var defaultSelector = require('./defaultSelector');

module.exports = function (regexp) {
  var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
  keySelector = methods.asSelector(keySelector);
  return function (element) {
    return regexp.test(keySelector(element));
  };
};

var methods = require('./methods');

},{"./defaultSelector":163,"./methods":172}],179:[function(require,module,exports){
'use strict';

module.exports = function (selector, comparer) {
  selector = methods.asSelector(selector);
  return function (element, other) {
    return comparer(selector(element), selector(other));
  };
};

var methods = require('./methods');

},{"./methods":172}],180:[function(require,module,exports){
'use strict';

var defaultExistsPredicate = require('./defaultExistsPredicate');

module.exports = function (selector) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultExistsPredicate;
  selector = methods.asSelector(selector);
  predicate = methods.asPredicate(predicate);
  return function (element, index) {
    return predicate(selector(element, index), index);
  };
};

var methods = require('./methods');

},{"./defaultExistsPredicate":154,"./methods":172}],181:[function(require,module,exports){
'use strict';

module.exports = function (orderByComparer, thenByComparer) {
  return function (element, other) {
    var compare = orderByComparer(element, other);
    return compare === 0 ? thenByComparer(element, other) : compare;
  };
};

},{}],182:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var core = require('./core/core');

var Enumerable = require('./Enumerable');

var IEnumerable = require('./IEnumerable');

var PluginRepeatException = require('./core/exceptions/PluginRepeatException');

var _plugins = [];

var pluginComparer = function pluginComparer(element, other) {
  return element.name === other.name;
};

var staticFunction = function staticFunction(fn) {
  return function () {
    return fn.apply(Enumerable, arguments);
  };
};

var memberFunction = function memberFunction(name) {
  return function () {
    return Enumerable[name].apply(Enumerable, [this].concat(arguments));
  };
};

core.defineProperty(Enumerable, 'plugins', function () {
  return this.select(_plugins, function (plugin) {
    return {
      get name() {
        return plugin.name;
      },

      get value() {
        return plugin.value;
      },

      get types() {
        return plugin.types;
      }

    };
  }).toArray();
}, true, true);

Enumerable.addPlugins = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  for (var _i = 0, _plugins2 = plugins; _i < _plugins2.length; _i++) {
    var plugin = _plugins2[_i];

    if (plugin.name && plugin.value) {
      if (this.contains(_plugins, plugin, pluginComparer)) {
        throw new PluginRepeatException(plugin);
      } else if (typeof Enumerable[plugin.name] !== 'undefined') {
        throw new PluginRepeatException(plugin, true);
      } else {
        plugin.types = plugin.types || [];

        _plugins.push(plugin);

        Enumerable[plugin.name] = staticFunction(plugin.value);
        IEnumerable.prototype[plugin.name] = memberFunction(plugin.name);

        var _iterator = _createForOfIteratorHelper(this.extends),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
                type = _step$value[0],
                prototypes = _step$value[1];

            var _iterator2 = _createForOfIteratorHelper(prototypes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2),
                    prototype = _step2$value[0],
                    pascalOrPrefix = _step2$value[1];

                if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
                  core.defineProperties(prototype, (0, _defineProperty2.default)({}, plugin.name, memberFunction(plugin.name)), pascalOrPrefix);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } else {
      console.error("Not a plugin value");
    }
  }

  return this;
};

Enumerable.removePlugins = function () {
  for (var _len2 = arguments.length, plugins = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    plugins[_key2] = arguments[_key2];
  }

  for (var _i2 = 0, _plugins3 = plugins; _i2 < _plugins3.length; _i2++) {
    var plugin = _plugins3[_i2];

    if (core.getType(plugin) === core.types.String) {
      plugin = {
        name: plugin
      };
    }

    var index = this.indexOf(_plugins, plugin, 0, pluginComparer);

    if (index !== -1) {
      plugin = _plugins[index];

      _plugins.splice(index, 1);

      delete Enumerable[plugin.name];
      delete IEnumerable.prototype[plugin.name];

      var _iterator3 = _createForOfIteratorHelper(this.extends),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = (0, _slicedToArray2.default)(_step3.value, 2),
              type = _step3$value[0],
              prototypes = _step3$value[1];

          var _iterator4 = _createForOfIteratorHelper(prototypes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = (0, _slicedToArray2.default)(_step4.value, 2),
                  prototype = _step4$value[0],
                  pascalOrPrefix = _step4$value[1];

              if (this.isEmpty(plugin.types) || this.contains(plugin.types, type)) {
                core.undefineProperties(prototype, [plugin.name], pascalOrPrefix);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } else {
      console.error("No plugin find with name \"".concat(plugin.name, "\""));
    }
  }

  return this;
};

},{"./Enumerable":30,"./IEnumerable":31,"./core/core":35,"./core/exceptions/PluginRepeatException":43,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/slicedToArray":21}]},{},[146])(146)
});
//# sourceMappingURL=linq.full.js.map
