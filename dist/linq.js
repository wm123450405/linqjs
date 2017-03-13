!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Enumerable=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

_dereq_("core-js/shim");

_dereq_("regenerator-runtime/runtime");

_dereq_("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
}).call(this,typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {})
},{"core-js/fn/regexp/escape":2,"core-js/shim":295,"regenerator-runtime/runtime":297}],2:[function(_dereq_,module,exports){
'use strict';

_dereq_('../../modules/core.regexp.escape');
module.exports = _dereq_('../../modules/_core').RegExp.escape;
},{"../../modules/_core":23,"../../modules/core.regexp.escape":119}],3:[function(_dereq_,module,exports){
'use strict';

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};
},{}],4:[function(_dereq_,module,exports){
'use strict';

var cof = _dereq_('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};
},{"./_cof":18}],5:[function(_dereq_,module,exports){
'use strict';

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _dereq_('./_wks')('unscopables'),
    ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _dereq_('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"./_hide":40,"./_wks":117}],6:[function(_dereq_,module,exports){
'use strict';

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};
},{}],7:[function(_dereq_,module,exports){
'use strict';

var isObject = _dereq_('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":49}],8:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';

var toObject = _dereq_('./_to-object'),
    toIndex = _dereq_('./_to-index'),
    toLength = _dereq_('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
  var O = toObject(this),
      len = toLength(O.length),
      to = toIndex(target, len),
      from = toIndex(start, len),
      end = arguments.length > 2 ? arguments[2] : undefined,
      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
      inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};
},{"./_to-index":105,"./_to-length":108,"./_to-object":109}],9:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';

var toObject = _dereq_('./_to-object'),
    toIndex = _dereq_('./_to-index'),
    toLength = _dereq_('./_to-length');
module.exports = function fill(value /*, start = 0, end = @length */) {
  var O = toObject(this),
      length = toLength(O.length),
      aLen = arguments.length,
      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
      end = aLen > 2 ? arguments[2] : undefined,
      endPos = end === undefined ? length : toIndex(end, length);
  while (endPos > index) {
    O[index++] = value;
  }return O;
};
},{"./_to-index":105,"./_to-length":108,"./_to-object":109}],10:[function(_dereq_,module,exports){
'use strict';

var forOf = _dereq_('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};
},{"./_for-of":37}],11:[function(_dereq_,module,exports){
'use strict';

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _dereq_('./_to-iobject'),
    toLength = _dereq_('./_to-length'),
    toIndex = _dereq_('./_to-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":105,"./_to-iobject":107,"./_to-length":108}],12:[function(_dereq_,module,exports){
'use strict';

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = _dereq_('./_ctx'),
    IObject = _dereq_('./_iobject'),
    toObject = _dereq_('./_to-object'),
    toLength = _dereq_('./_to-length'),
    asc = _dereq_('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1,
      IS_FILTER = TYPE == 2,
      IS_SOME = TYPE == 3,
      IS_EVERY = TYPE == 4,
      IS_FIND_INDEX = TYPE == 6,
      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
      create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this),
        self = IObject(O),
        f = ctx(callbackfn, that, 3),
        length = toLength(self.length),
        index = 0,
        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
        val,
        res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":15,"./_ctx":25,"./_iobject":45,"./_to-length":108,"./_to-object":109}],13:[function(_dereq_,module,exports){
'use strict';

var aFunction = _dereq_('./_a-function'),
    toObject = _dereq_('./_to-object'),
    IObject = _dereq_('./_iobject'),
    toLength = _dereq_('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that),
      self = IObject(O),
      length = toLength(O.length),
      index = isRight ? length - 1 : 0,
      i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }return memo;
};
},{"./_a-function":3,"./_iobject":45,"./_to-length":108,"./_to-object":109}],14:[function(_dereq_,module,exports){
'use strict';

var isObject = _dereq_('./_is-object'),
    isArray = _dereq_('./_is-array'),
    SPECIES = _dereq_('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};
},{"./_is-array":47,"./_is-object":49,"./_wks":117}],15:[function(_dereq_,module,exports){
'use strict';

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = _dereq_('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":14}],16:[function(_dereq_,module,exports){
'use strict';

var aFunction = _dereq_('./_a-function'),
    isObject = _dereq_('./_is-object'),
    invoke = _dereq_('./_invoke'),
    arraySlice = [].slice,
    factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */) {
  var fn = aFunction(this),
      partArgs = arraySlice.call(arguments, 1);
  var bound = function bound() /* args... */{
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};
},{"./_a-function":3,"./_invoke":44,"./_is-object":49}],17:[function(_dereq_,module,exports){
'use strict';

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./_cof'),
    TAG = _dereq_('./_wks')('toStringTag')
// ES3 wrong here
,
    ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":18,"./_wks":117}],18:[function(_dereq_,module,exports){
"use strict";

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};
},{}],19:[function(_dereq_,module,exports){
'use strict';

var dP = _dereq_('./_object-dp').f,
    create = _dereq_('./_object-create'),
    redefineAll = _dereq_('./_redefine-all'),
    ctx = _dereq_('./_ctx'),
    anInstance = _dereq_('./_an-instance'),
    defined = _dereq_('./_defined'),
    forOf = _dereq_('./_for-of'),
    $iterDefine = _dereq_('./_iter-define'),
    step = _dereq_('./_iter-step'),
    setSpecies = _dereq_('./_set-species'),
    DESCRIPTORS = _dereq_('./_descriptors'),
    fastKey = _dereq_('./_meta').fastKey,
    SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key),
      entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = this,
            entry = getEntry(that, key);
        if (entry) {
          var next = entry.n,
              prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */) {
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
            entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key),
        prev,
        index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = iterated; // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this,
          kind = that._k,
          entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":6,"./_ctx":25,"./_defined":27,"./_descriptors":28,"./_for-of":37,"./_iter-define":53,"./_iter-step":55,"./_meta":62,"./_object-create":66,"./_object-dp":67,"./_redefine-all":86,"./_set-species":91}],20:[function(_dereq_,module,exports){
'use strict';

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = _dereq_('./_classof'),
    from = _dereq_('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":10,"./_classof":17}],21:[function(_dereq_,module,exports){
'use strict';

var redefineAll = _dereq_('./_redefine-all'),
    getWeak = _dereq_('./_meta').getWeak,
    anObject = _dereq_('./_an-object'),
    isObject = _dereq_('./_is-object'),
    anInstance = _dereq_('./_an-instance'),
    forOf = _dereq_('./_for-of'),
    createArrayMethod = _dereq_('./_array-methods'),
    $has = _dereq_('./_has'),
    arrayFind = createArrayMethod(5),
    arrayFindIndex = createArrayMethod(6),
    id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._i = id++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"./_an-instance":6,"./_an-object":7,"./_array-methods":12,"./_for-of":37,"./_has":39,"./_is-object":49,"./_meta":62,"./_redefine-all":86}],22:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    $export = _dereq_('./_export'),
    redefine = _dereq_('./_redefine'),
    redefineAll = _dereq_('./_redefine-all'),
    meta = _dereq_('./_meta'),
    forOf = _dereq_('./_for-of'),
    anInstance = _dereq_('./_an-instance'),
    isObject = _dereq_('./_is-object'),
    fails = _dereq_('./_fails'),
    $iterDetect = _dereq_('./_iter-detect'),
    setToStringTag = _dereq_('./_set-to-string-tag'),
    inheritIfRequired = _dereq_('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME],
      C = Base,
      ADDER = IS_MAP ? 'set' : 'add',
      proto = C && C.prototype,
      O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C()
    // early implementations not supports chaining
    ,
        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    ,
        THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    })
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    ,
        ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }) // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    ,
        BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C(),
          index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":6,"./_export":32,"./_fails":34,"./_for-of":37,"./_global":38,"./_inherit-if-required":43,"./_is-object":49,"./_iter-detect":54,"./_meta":62,"./_redefine":87,"./_redefine-all":86,"./_set-to-string-tag":92}],23:[function(_dereq_,module,exports){
'use strict';

var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
},{}],24:[function(_dereq_,module,exports){
'use strict';

var $defineProperty = _dereq_('./_object-dp'),
    createDesc = _dereq_('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};
},{"./_object-dp":67,"./_property-desc":85}],25:[function(_dereq_,module,exports){
'use strict';

// optional / simple context binding
var aFunction = _dereq_('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":3}],26:[function(_dereq_,module,exports){
'use strict';

var anObject = _dereq_('./_an-object'),
    toPrimitive = _dereq_('./_to-primitive'),
    NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};
},{"./_an-object":7,"./_to-primitive":110}],27:[function(_dereq_,module,exports){
"use strict";

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],28:[function(_dereq_,module,exports){
'use strict';

// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});
},{"./_fails":34}],29:[function(_dereq_,module,exports){
'use strict';

var isObject = _dereq_('./_is-object'),
    document = _dereq_('./_global').document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};
},{"./_global":38,"./_is-object":49}],30:[function(_dereq_,module,exports){
'use strict';

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
},{}],31:[function(_dereq_,module,exports){
'use strict';

// all enumerable object keys, includes symbols
var getKeys = _dereq_('./_object-keys'),
    gOPS = _dereq_('./_object-gops'),
    pIE = _dereq_('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it),
      getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it),
        isEnum = pIE.f,
        i = 0,
        key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};
},{"./_object-gops":73,"./_object-keys":76,"./_object-pie":77}],32:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    core = _dereq_('./_core'),
    hide = _dereq_('./_hide'),
    redefine = _dereq_('./_redefine'),
    ctx = _dereq_('./_ctx'),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
      key,
      own,
      out,
      exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":23,"./_ctx":25,"./_global":38,"./_hide":40,"./_redefine":87}],33:[function(_dereq_,module,exports){
'use strict';

var MATCH = _dereq_('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};
},{"./_wks":117}],34:[function(_dereq_,module,exports){
"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};
},{}],35:[function(_dereq_,module,exports){
'use strict';

var hide = _dereq_('./_hide'),
    redefine = _dereq_('./_redefine'),
    fails = _dereq_('./_fails'),
    defined = _dereq_('./_defined'),
    wks = _dereq_('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY),
      fns = exec(defined, SYMBOL, ''[KEY]),
      strfn = fns[0],
      rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};
},{"./_defined":27,"./_fails":34,"./_hide":40,"./_redefine":87,"./_wks":117}],36:[function(_dereq_,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags

var anObject = _dereq_('./_an-object');
module.exports = function () {
  var that = anObject(this),
      result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};
},{"./_an-object":7}],37:[function(_dereq_,module,exports){
'use strict';

var ctx = _dereq_('./_ctx'),
    call = _dereq_('./_iter-call'),
    isArrayIter = _dereq_('./_is-array-iter'),
    anObject = _dereq_('./_an-object'),
    toLength = _dereq_('./_to-length'),
    getIterFn = _dereq_('./core.get-iterator-method'),
    BREAK = {},
    RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable),
      f = ctx(fn, that, entries ? 2 : 1),
      index = 0,
      length,
      step,
      iterator,
      result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;
},{"./_an-object":7,"./_ctx":25,"./_is-array-iter":46,"./_iter-call":51,"./_to-length":108,"./core.get-iterator-method":118}],38:[function(_dereq_,module,exports){
'use strict';

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
},{}],39:[function(_dereq_,module,exports){
"use strict";

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};
},{}],40:[function(_dereq_,module,exports){
'use strict';

var dP = _dereq_('./_object-dp'),
    createDesc = _dereq_('./_property-desc');
module.exports = _dereq_('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
},{"./_descriptors":28,"./_object-dp":67,"./_property-desc":85}],41:[function(_dereq_,module,exports){
'use strict';

module.exports = _dereq_('./_global').document && document.documentElement;
},{"./_global":38}],42:[function(_dereq_,module,exports){
'use strict';

module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function () {
  return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});
},{"./_descriptors":28,"./_dom-create":29,"./_fails":34}],43:[function(_dereq_,module,exports){
'use strict';

var isObject = _dereq_('./_is-object'),
    setPrototypeOf = _dereq_('./_set-proto').set;
module.exports = function (that, target, C) {
  var P,
      S = target.constructor;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};
},{"./_is-object":49,"./_set-proto":90}],44:[function(_dereq_,module,exports){
"use strict";

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};
},{}],45:[function(_dereq_,module,exports){
'use strict';

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":18}],46:[function(_dereq_,module,exports){
'use strict';

// check on default Array iterator
var Iterators = _dereq_('./_iterators'),
    ITERATOR = _dereq_('./_wks')('iterator'),
    ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":56,"./_wks":117}],47:[function(_dereq_,module,exports){
'use strict';

// 7.2.2 IsArray(argument)
var cof = _dereq_('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};
},{"./_cof":18}],48:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.3 Number.isInteger(number)
var isObject = _dereq_('./_is-object'),
    floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./_is-object":49}],49:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};
},{}],50:[function(_dereq_,module,exports){
'use strict';

// 7.2.8 IsRegExp(argument)
var isObject = _dereq_('./_is-object'),
    cof = _dereq_('./_cof'),
    MATCH = _dereq_('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};
},{"./_cof":18,"./_is-object":49,"./_wks":117}],51:[function(_dereq_,module,exports){
'use strict';

// call something on iterator step with safe closing on error
var anObject = _dereq_('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":7}],52:[function(_dereq_,module,exports){
'use strict';

var create = _dereq_('./_object-create'),
    descriptor = _dereq_('./_property-desc'),
    setToStringTag = _dereq_('./_set-to-string-tag'),
    IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":40,"./_object-create":66,"./_property-desc":85,"./_set-to-string-tag":92,"./_wks":117}],53:[function(_dereq_,module,exports){
'use strict';

var LIBRARY = _dereq_('./_library'),
    $export = _dereq_('./_export'),
    redefine = _dereq_('./_redefine'),
    hide = _dereq_('./_hide'),
    has = _dereq_('./_has'),
    Iterators = _dereq_('./_iterators'),
    $iterCreate = _dereq_('./_iter-create'),
    setToStringTag = _dereq_('./_set-to-string-tag'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    ITERATOR = _dereq_('./_wks')('iterator'),
    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
,
    FF_ITERATOR = '@@iterator',
    KEYS = 'keys',
    VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator',
      DEF_VALUES = DEFAULT == VALUES,
      VALUES_BUG = false,
      proto = Base.prototype,
      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
      $default = $native || getMethod(DEFAULT),
      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
      methods,
      key,
      IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":32,"./_has":39,"./_hide":40,"./_iter-create":52,"./_iterators":56,"./_library":58,"./_object-gpo":74,"./_redefine":87,"./_set-to-string-tag":92,"./_wks":117}],54:[function(_dereq_,module,exports){
'use strict';

var ITERATOR = _dereq_('./_wks')('iterator'),
    SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7],
        iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};
},{"./_wks":117}],55:[function(_dereq_,module,exports){
"use strict";

module.exports = function (done, value) {
  return { value: value, done: !!done };
};
},{}],56:[function(_dereq_,module,exports){
"use strict";

module.exports = {};
},{}],57:[function(_dereq_,module,exports){
'use strict';

var getKeys = _dereq_('./_object-keys'),
    toIObject = _dereq_('./_to-iobject');
module.exports = function (object, el) {
  var O = toIObject(object),
      keys = getKeys(O),
      length = keys.length,
      index = 0,
      key;
  while (length > index) {
    if (O[key = keys[index++]] === el) return key;
  }
};
},{"./_object-keys":76,"./_to-iobject":107}],58:[function(_dereq_,module,exports){
"use strict";

module.exports = false;
},{}],59:[function(_dereq_,module,exports){
"use strict";

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1
// Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
// Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
},{}],60:[function(_dereq_,module,exports){
"use strict";

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
},{}],61:[function(_dereq_,module,exports){
"use strict";

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],62:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = _dereq_('./_uid')('meta'),
    isObject = _dereq_('./_is-object'),
    has = _dereq_('./_has'),
    setDesc = _dereq_('./_object-dp').f,
    id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_dereq_('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
},{"./_fails":34,"./_has":39,"./_is-object":49,"./_object-dp":67,"./_uid":114}],63:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Map = _dereq_('./es6.map'),
    $export = _dereq_('./_export'),
    shared = _dereq_('./_shared')('metadata'),
    store = shared.store || (shared.store = new (_dereq_('./es6.weak-map'))());

var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  }return keyMetadata;
};
var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
      keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) {
    keys.push(key);
  });
  return keys;
};
var toMetaKey = function toMetaKey(it) {
  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
};
var exp = function exp(O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};
},{"./_export":32,"./_shared":94,"./es6.map":149,"./es6.weak-map":255}],64:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    macrotask = _dereq_('./_task').set,
    Observer = global.MutationObserver || global.WebKitMutationObserver,
    process = global.process,
    Promise = global.Promise,
    isNode = _dereq_('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true,
        node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};
},{"./_cof":18,"./_global":38,"./_task":104}],65:[function(_dereq_,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)

var getKeys = _dereq_('./_object-keys'),
    gOPS = _dereq_('./_object-gops'),
    pIE = _dereq_('./_object-pie'),
    toObject = _dereq_('./_to-object'),
    IObject = _dereq_('./_iobject'),
    $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || _dereq_('./_fails')(function () {
  var A = {},
      B = {},
      S = Symbol(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target),
      aLen = arguments.length,
      index = 1,
      getSymbols = gOPS.f,
      isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]),
        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;
},{"./_fails":34,"./_iobject":45,"./_object-gops":73,"./_object-keys":76,"./_object-pie":77,"./_to-object":109}],66:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = _dereq_('./_an-object'),
    dPs = _dereq_('./_object-dps'),
    enumBugKeys = _dereq_('./_enum-bug-keys'),
    IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
    Empty = function Empty() {/* empty */},
    PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _dereq_('./_dom-create')('iframe'),
      i = enumBugKeys.length,
      lt = '<',
      gt = '>',
      iframeDocument;
  iframe.style.display = 'none';
  _dereq_('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":7,"./_dom-create":29,"./_enum-bug-keys":30,"./_html":41,"./_object-dps":68,"./_shared-key":93}],67:[function(_dereq_,module,exports){
'use strict';

var anObject = _dereq_('./_an-object'),
    IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
    toPrimitive = _dereq_('./_to-primitive'),
    dP = Object.defineProperty;

exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
},{"./_an-object":7,"./_descriptors":28,"./_ie8-dom-define":42,"./_to-primitive":110}],68:[function(_dereq_,module,exports){
'use strict';

var dP = _dereq_('./_object-dp'),
    anObject = _dereq_('./_an-object'),
    getKeys = _dereq_('./_object-keys');

module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties),
      length = keys.length,
      i = 0,
      P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};
},{"./_an-object":7,"./_descriptors":28,"./_object-dp":67,"./_object-keys":76}],69:[function(_dereq_,module,exports){
'use strict';

// Forced replacement prototype accessors methods
module.exports = _dereq_('./_library') || !_dereq_('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function () {/* empty */});
  delete _dereq_('./_global')[K];
});
},{"./_fails":34,"./_global":38,"./_library":58}],70:[function(_dereq_,module,exports){
'use strict';

var pIE = _dereq_('./_object-pie'),
    createDesc = _dereq_('./_property-desc'),
    toIObject = _dereq_('./_to-iobject'),
    toPrimitive = _dereq_('./_to-primitive'),
    has = _dereq_('./_has'),
    IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
    gOPD = Object.getOwnPropertyDescriptor;

exports.f = _dereq_('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":28,"./_has":39,"./_ie8-dom-define":42,"./_object-pie":77,"./_property-desc":85,"./_to-iobject":107,"./_to-primitive":110}],71:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_('./_to-iobject'),
    gOPN = _dereq_('./_object-gopn').f,
    toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
},{"./_object-gopn":72,"./_to-iobject":107}],72:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = _dereq_('./_object-keys-internal'),
    hiddenKeys = _dereq_('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":75}],73:[function(_dereq_,module,exports){
"use strict";

exports.f = Object.getOwnPropertySymbols;
},{}],74:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = _dereq_('./_has'),
    toObject = _dereq_('./_to-object'),
    IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
    ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};
},{"./_has":39,"./_shared-key":93,"./_to-object":109}],75:[function(_dereq_,module,exports){
'use strict';

var has = _dereq_('./_has'),
    toIObject = _dereq_('./_to-iobject'),
    arrayIndexOf = _dereq_('./_array-includes')(false),
    IE_PROTO = _dereq_('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};
},{"./_array-includes":11,"./_has":39,"./_shared-key":93,"./_to-iobject":107}],76:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _dereq_('./_object-keys-internal'),
    enumBugKeys = _dereq_('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":75}],77:[function(_dereq_,module,exports){
"use strict";

exports.f = {}.propertyIsEnumerable;
},{}],78:[function(_dereq_,module,exports){
'use strict';

// most Object methods by ES6 should accept primitives
var $export = _dereq_('./_export'),
    core = _dereq_('./_core'),
    fails = _dereq_('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY],
      exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};
},{"./_core":23,"./_export":32,"./_fails":34}],79:[function(_dereq_,module,exports){
'use strict';

var getKeys = _dereq_('./_object-keys'),
    toIObject = _dereq_('./_to-iobject'),
    isEnum = _dereq_('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it),
        keys = getKeys(O),
        length = keys.length,
        i = 0,
        result = [],
        key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};
},{"./_object-keys":76,"./_object-pie":77,"./_to-iobject":107}],80:[function(_dereq_,module,exports){
'use strict';

// all object keys, includes non-enumerable and symbols
var gOPN = _dereq_('./_object-gopn'),
    gOPS = _dereq_('./_object-gops'),
    anObject = _dereq_('./_an-object'),
    Reflect = _dereq_('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it)),
      getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./_an-object":7,"./_global":38,"./_object-gopn":72,"./_object-gops":73}],81:[function(_dereq_,module,exports){
'use strict';

var $parseFloat = _dereq_('./_global').parseFloat,
    $trim = _dereq_('./_string-trim').trim;

module.exports = 1 / $parseFloat(_dereq_('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3),
      result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;
},{"./_global":38,"./_string-trim":102,"./_string-ws":103}],82:[function(_dereq_,module,exports){
'use strict';

var $parseInt = _dereq_('./_global').parseInt,
    $trim = _dereq_('./_string-trim').trim,
    ws = _dereq_('./_string-ws'),
    hex = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;
},{"./_global":38,"./_string-trim":102,"./_string-ws":103}],83:[function(_dereq_,module,exports){
'use strict';

var path = _dereq_('./_path'),
    invoke = _dereq_('./_invoke'),
    aFunction = _dereq_('./_a-function');
module.exports = function () /* ...pargs */{
  var fn = aFunction(this),
      length = arguments.length,
      pargs = Array(length),
      i = 0,
      _ = path._,
      holder = false;
  while (length > i) {
    if ((pargs[i] = arguments[i++]) === _) holder = true;
  }return function () /* ...args */{
    var that = this,
        aLen = arguments.length,
        j = 0,
        k = 0,
        args;
    if (!holder && !aLen) return invoke(fn, pargs, that);
    args = pargs.slice();
    if (holder) for (; length > j; j++) {
      if (args[j] === _) args[j] = arguments[k++];
    }while (aLen > k) {
      args.push(arguments[k++]);
    }return invoke(fn, args, that);
  };
};
},{"./_a-function":3,"./_invoke":44,"./_path":84}],84:[function(_dereq_,module,exports){
'use strict';

module.exports = _dereq_('./_global');
},{"./_global":38}],85:[function(_dereq_,module,exports){
"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};
},{}],86:[function(_dereq_,module,exports){
'use strict';

var redefine = _dereq_('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};
},{"./_redefine":87}],87:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    hide = _dereq_('./_hide'),
    has = _dereq_('./_has'),
    SRC = _dereq_('./_uid')('src'),
    TO_STRING = 'toString',
    $toString = Function[TO_STRING],
    TPL = ('' + $toString).split(TO_STRING);

_dereq_('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else {
    if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else {
      if (O[key]) O[key] = val;else hide(O, key, val);
    }
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./_core":23,"./_global":38,"./_has":39,"./_hide":40,"./_uid":114}],88:[function(_dereq_,module,exports){
"use strict";

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};
},{}],89:[function(_dereq_,module,exports){
"use strict";

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],90:[function(_dereq_,module,exports){
'use strict';

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = _dereq_('./_is-object'),
    anObject = _dereq_('./_an-object');
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _dereq_('./_ctx')(Function.call, _dereq_('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};
},{"./_an-object":7,"./_ctx":25,"./_is-object":49,"./_object-gopd":70}],91:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    dP = _dereq_('./_object-dp'),
    DESCRIPTORS = _dereq_('./_descriptors'),
    SPECIES = _dereq_('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};
},{"./_descriptors":28,"./_global":38,"./_object-dp":67,"./_wks":117}],92:[function(_dereq_,module,exports){
'use strict';

var def = _dereq_('./_object-dp').f,
    has = _dereq_('./_has'),
    TAG = _dereq_('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};
},{"./_has":39,"./_object-dp":67,"./_wks":117}],93:[function(_dereq_,module,exports){
'use strict';

var shared = _dereq_('./_shared')('keys'),
    uid = _dereq_('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":94,"./_uid":114}],94:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};
},{"./_global":38}],95:[function(_dereq_,module,exports){
'use strict';

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = _dereq_('./_an-object'),
    aFunction = _dereq_('./_a-function'),
    SPECIES = _dereq_('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor,
      S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":3,"./_an-object":7,"./_wks":117}],96:[function(_dereq_,module,exports){
'use strict';

var fails = _dereq_('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    arg ? method.call(null, function () {}, 1) : method.call(null);
  });
};
},{"./_fails":34}],97:[function(_dereq_,module,exports){
'use strict';

var toInteger = _dereq_('./_to-integer'),
    defined = _dereq_('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that)),
        i = toInteger(pos),
        l = s.length,
        a,
        b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":27,"./_to-integer":106}],98:[function(_dereq_,module,exports){
'use strict';

// helper for String#{startsWith, endsWith, includes}
var isRegExp = _dereq_('./_is-regexp'),
    defined = _dereq_('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
},{"./_defined":27,"./_is-regexp":50}],99:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    fails = _dereq_('./_fails'),
    defined = _dereq_('./_defined'),
    quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string)),
      p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};
},{"./_defined":27,"./_export":32,"./_fails":34}],100:[function(_dereq_,module,exports){
'use strict';

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = _dereq_('./_to-length'),
    repeat = _dereq_('./_string-repeat'),
    defined = _dereq_('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that)),
      stringLength = S.length,
      fillStr = fillString === undefined ? ' ' : String(fillString),
      intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength,
      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};
},{"./_defined":27,"./_string-repeat":101,"./_to-length":108}],101:[function(_dereq_,module,exports){
'use strict';

var toInteger = _dereq_('./_to-integer'),
    defined = _dereq_('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this)),
      res = '',
      n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }return res;
};
},{"./_defined":27,"./_to-integer":106}],102:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    defined = _dereq_('./_defined'),
    fails = _dereq_('./_fails'),
    spaces = _dereq_('./_string-ws'),
    space = '[' + spaces + ']',
    non = '\u200B\x85',
    ltrim = RegExp('^' + space + space + '*'),
    rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;
},{"./_defined":27,"./_export":32,"./_fails":34,"./_string-ws":103}],103:[function(_dereq_,module,exports){
'use strict';

module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
},{}],104:[function(_dereq_,module,exports){
'use strict';

var ctx = _dereq_('./_ctx'),
    invoke = _dereq_('./_invoke'),
    html = _dereq_('./_html'),
    cel = _dereq_('./_dom-create'),
    global = _dereq_('./_global'),
    process = global.process,
    setTask = global.setImmediate,
    clearTask = global.clearImmediate,
    MessageChannel = global.MessageChannel,
    counter = 0,
    queue = {},
    ONREADYSTATECHANGE = 'onreadystatechange',
    defer,
    channel,
    port;
var run = function run() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [],
        i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_dereq_('./_cof')(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};
},{"./_cof":18,"./_ctx":25,"./_dom-create":29,"./_global":38,"./_html":41,"./_invoke":44}],105:[function(_dereq_,module,exports){
'use strict';

var toInteger = _dereq_('./_to-integer'),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":106}],106:[function(_dereq_,module,exports){
"use strict";

// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],107:[function(_dereq_,module,exports){
'use strict';

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./_iobject'),
    defined = _dereq_('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};
},{"./_defined":27,"./_iobject":45}],108:[function(_dereq_,module,exports){
'use strict';

// 7.1.15 ToLength
var toInteger = _dereq_('./_to-integer'),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":106}],109:[function(_dereq_,module,exports){
'use strict';

// 7.1.13 ToObject(argument)
var defined = _dereq_('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};
},{"./_defined":27}],110:[function(_dereq_,module,exports){
'use strict';

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = _dereq_('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":49}],111:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (_dereq_('./_descriptors')) {
  var LIBRARY = _dereq_('./_library'),
      global = _dereq_('./_global'),
      fails = _dereq_('./_fails'),
      $export = _dereq_('./_export'),
      $typed = _dereq_('./_typed'),
      $buffer = _dereq_('./_typed-buffer'),
      ctx = _dereq_('./_ctx'),
      anInstance = _dereq_('./_an-instance'),
      propertyDesc = _dereq_('./_property-desc'),
      hide = _dereq_('./_hide'),
      redefineAll = _dereq_('./_redefine-all'),
      toInteger = _dereq_('./_to-integer'),
      toLength = _dereq_('./_to-length'),
      toIndex = _dereq_('./_to-index'),
      toPrimitive = _dereq_('./_to-primitive'),
      has = _dereq_('./_has'),
      same = _dereq_('./_same-value'),
      classof = _dereq_('./_classof'),
      isObject = _dereq_('./_is-object'),
      toObject = _dereq_('./_to-object'),
      isArrayIter = _dereq_('./_is-array-iter'),
      create = _dereq_('./_object-create'),
      getPrototypeOf = _dereq_('./_object-gpo'),
      gOPN = _dereq_('./_object-gopn').f,
      getIterFn = _dereq_('./core.get-iterator-method'),
      uid = _dereq_('./_uid'),
      wks = _dereq_('./_wks'),
      createArrayMethod = _dereq_('./_array-methods'),
      createArrayIncludes = _dereq_('./_array-includes'),
      speciesConstructor = _dereq_('./_species-constructor'),
      ArrayIterators = _dereq_('./es6.array.iterator'),
      Iterators = _dereq_('./_iterators'),
      $iterDetect = _dereq_('./_iter-detect'),
      setSpecies = _dereq_('./_set-species'),
      arrayFill = _dereq_('./_array-fill'),
      arrayCopyWithin = _dereq_('./_array-copy-within'),
      $DP = _dereq_('./_object-dp'),
      $GOPD = _dereq_('./_object-gopd'),
      dP = $DP.f,
      gOPD = $GOPD.f,
      RangeError = global.RangeError,
      TypeError = global.TypeError,
      Uint8Array = global.Uint8Array,
      ARRAY_BUFFER = 'ArrayBuffer',
      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
      PROTOTYPE = 'prototype',
      ArrayProto = Array[PROTOTYPE],
      $ArrayBuffer = $buffer.ArrayBuffer,
      $DataView = $buffer.DataView,
      arrayForEach = createArrayMethod(0),
      arrayFilter = createArrayMethod(2),
      arraySome = createArrayMethod(3),
      arrayEvery = createArrayMethod(4),
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      arrayIncludes = createArrayIncludes(true),
      arrayIndexOf = createArrayIncludes(false),
      arrayValues = ArrayIterators.values,
      arrayKeys = ArrayIterators.keys,
      arrayEntries = ArrayIterators.entries,
      arrayLastIndexOf = ArrayProto.lastIndexOf,
      arrayReduce = ArrayProto.reduce,
      arrayReduceRight = ArrayProto.reduceRight,
      arrayJoin = ArrayProto.join,
      arraySort = ArrayProto.sort,
      arraySlice = ArrayProto.slice,
      arrayToString = ArrayProto.toString,
      arrayToLocaleString = ArrayProto.toLocaleString,
      ITERATOR = wks('iterator'),
      TAG = wks('toStringTag'),
      TYPED_CONSTRUCTOR = uid('typed_constructor'),
      DEF_CONSTRUCTOR = uid('def_constructor'),
      ALL_CONSTRUCTORS = $typed.CONSTR,
      TYPED_ARRAY = $typed.TYPED,
      VIEW = $typed.VIEW,
      WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var strictToLength = function strictToLength(it, SAME) {
    if (it === undefined) throw TypeError(WRONG_LENGTH);
    var number = +it,
        length = toLength(it);
    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0,
        length = list.length,
        result = allocate(C, length);
    while (length > index) {
      result[index] = list[index++];
    }return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, { get: function get() {
        return this._d[internal];
      } });
  };

  var $from = function from(source /*, mapfn, thisArg */) {
    var O = toObject(source),
        aLen = arguments.length,
        mapfn = aLen > 1 ? arguments[1] : undefined,
        mapping = mapfn !== undefined,
        iterFn = getIterFn(O),
        i,
        length,
        values,
        result,
        step,
        iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of() /*...items*/{
    var index = 0,
        length = arguments.length,
        result = allocate(this, length);
    while (length > index) {
      result[index] = arguments[index++];
    }return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this,
          length = validate(that).length,
          middle = Math.floor(length / 2),
          index = 0,
          value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }return that;
    },
    some: function some(callbackfn /*, thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this),
          length = O.length,
          $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1),
        length = this.length,
        src = toObject(arrayLike),
        len = toLength(src.length),
        index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {/* noop */},
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  });

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
        ISNT_UINT8 = NAME != 'Uint8Array',
        GETTER = 'get' + KEY,
        SETTER = 'set' + KEY,
        TypedArray = global[NAME],
        Base = TypedArray || {},
        TAC = TypedArray && getPrototypeOf(TypedArray),
        FORCED = !TypedArray || !$typed.ABV,
        O = {},
        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0,
            offset = 0,
            buffer,
            byteLength,
            length,
            klass;
        if (!isObject(data)) {
          length = strictToLength(data, true);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!$iterDetect(function (iter) {
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR],
        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
        $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {/* empty */};
},{"./_an-instance":6,"./_array-copy-within":8,"./_array-fill":9,"./_array-includes":11,"./_array-methods":12,"./_classof":17,"./_ctx":25,"./_descriptors":28,"./_export":32,"./_fails":34,"./_global":38,"./_has":39,"./_hide":40,"./_is-array-iter":46,"./_is-object":49,"./_iter-detect":54,"./_iterators":56,"./_library":58,"./_object-create":66,"./_object-dp":67,"./_object-gopd":70,"./_object-gopn":72,"./_object-gpo":74,"./_property-desc":85,"./_redefine-all":86,"./_same-value":89,"./_set-species":91,"./_species-constructor":95,"./_to-index":105,"./_to-integer":106,"./_to-length":108,"./_to-object":109,"./_to-primitive":110,"./_typed":113,"./_typed-buffer":112,"./_uid":114,"./_wks":117,"./core.get-iterator-method":118,"./es6.array.iterator":130}],112:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    DESCRIPTORS = _dereq_('./_descriptors'),
    LIBRARY = _dereq_('./_library'),
    $typed = _dereq_('./_typed'),
    hide = _dereq_('./_hide'),
    redefineAll = _dereq_('./_redefine-all'),
    fails = _dereq_('./_fails'),
    anInstance = _dereq_('./_an-instance'),
    toInteger = _dereq_('./_to-integer'),
    toLength = _dereq_('./_to-length'),
    gOPN = _dereq_('./_object-gopn').f,
    dP = _dereq_('./_object-dp').f,
    arrayFill = _dereq_('./_array-fill'),
    setToStringTag = _dereq_('./_set-to-string-tag'),
    ARRAY_BUFFER = 'ArrayBuffer',
    DATA_VIEW = 'DataView',
    PROTOTYPE = 'prototype',
    WRONG_LENGTH = 'Wrong length!',
    WRONG_INDEX = 'Wrong index!',
    $ArrayBuffer = global[ARRAY_BUFFER],
    $DataView = global[DATA_VIEW],
    Math = global.Math,
    RangeError = global.RangeError,
    Infinity = global.Infinity,
    BaseBuffer = $ArrayBuffer,
    abs = Math.abs,
    pow = Math.pow,
    floor = Math.floor,
    log = Math.log,
    LN2 = Math.LN2,
    BUFFER = 'buffer',
    BYTE_LENGTH = 'byteLength',
    BYTE_OFFSET = 'byteOffset',
    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
  var buffer = Array(nBytes),
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
      i = 0,
      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
      e,
      m,
      c;
  value = abs(value);
  if (value != value || value === Infinity) {
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = eLen - 7,
      i = nBytes - 1,
      s = buffer[i--],
      e = s & 127,
      m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function packI8(it) {
  return [it & 0xff];
};
var packI16 = function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function packF64(it) {
  return packIEEE754(it, 52, 8);
};
var packF32 = function packF32(it) {
  return packIEEE754(it, 23, 4);
};

var addGetter = function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function get() {
      return this[internal];
    } });
};

var get = function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index,
      intIndex = toInteger(numIndex);
  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b,
      start = intIndex + view[$OFFSET],
      pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index,
      intIndex = toInteger(numIndex);
  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b,
      start = intIndex + view[$OFFSET],
      pack = conversion(+value);
  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
};

var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length,
      byteLength = toLength(numberLength);
  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    var byteLength = validateArrayBufferArguments(this, length);
    this._b = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH],
        offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
  }) || !fails(function () {
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2)),
      $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
},{"./_an-instance":6,"./_array-fill":9,"./_descriptors":28,"./_fails":34,"./_global":38,"./_hide":40,"./_library":58,"./_object-dp":67,"./_object-gopn":72,"./_redefine-all":86,"./_set-to-string-tag":92,"./_to-integer":106,"./_to-length":108,"./_typed":113}],113:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    hide = _dereq_('./_hide'),
    uid = _dereq_('./_uid'),
    TYPED = uid('typed_array'),
    VIEW = uid('view'),
    ABV = !!(global.ArrayBuffer && global.DataView),
    CONSTR = ABV,
    i = 0,
    l = 9,
    Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};
},{"./_global":38,"./_hide":40,"./_uid":114}],114:[function(_dereq_,module,exports){
'use strict';

var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],115:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    core = _dereq_('./_core'),
    LIBRARY = _dereq_('./_library'),
    wksExt = _dereq_('./_wks-ext'),
    defineProperty = _dereq_('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};
},{"./_core":23,"./_global":38,"./_library":58,"./_object-dp":67,"./_wks-ext":116}],116:[function(_dereq_,module,exports){
'use strict';

exports.f = _dereq_('./_wks');
},{"./_wks":117}],117:[function(_dereq_,module,exports){
'use strict';

var store = _dereq_('./_shared')('wks'),
    uid = _dereq_('./_uid'),
    _Symbol = _dereq_('./_global').Symbol,
    USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":38,"./_shared":94,"./_uid":114}],118:[function(_dereq_,module,exports){
'use strict';

var classof = _dereq_('./_classof'),
    ITERATOR = _dereq_('./_wks')('iterator'),
    Iterators = _dereq_('./_iterators');
module.exports = _dereq_('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./_classof":17,"./_core":23,"./_iterators":56,"./_wks":117}],119:[function(_dereq_,module,exports){
'use strict';

// https://github.com/benjamingr/RexExp.escape
var $export = _dereq_('./_export'),
    $re = _dereq_('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) {
    return $re(it);
  } });
},{"./_export":32,"./_replacer":88}],120:[function(_dereq_,module,exports){
'use strict';

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = _dereq_('./_export');

$export($export.P, 'Array', { copyWithin: _dereq_('./_array-copy-within') });

_dereq_('./_add-to-unscopables')('copyWithin');
},{"./_add-to-unscopables":5,"./_array-copy-within":8,"./_export":32}],121:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $every = _dereq_('./_array-methods')(4);

$export($export.P + $export.F * !_dereq_('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":12,"./_export":32,"./_strict-method":96}],122:[function(_dereq_,module,exports){
'use strict';

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = _dereq_('./_export');

$export($export.P, 'Array', { fill: _dereq_('./_array-fill') });

_dereq_('./_add-to-unscopables')('fill');
},{"./_add-to-unscopables":5,"./_array-fill":9,"./_export":32}],123:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $filter = _dereq_('./_array-methods')(2);

$export($export.P + $export.F * !_dereq_('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":12,"./_export":32,"./_strict-method":96}],124:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = _dereq_('./_export'),
    $find = _dereq_('./_array-methods')(6),
    KEY = 'findIndex',
    forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /*, that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":5,"./_array-methods":12,"./_export":32}],125:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = _dereq_('./_export'),
    $find = _dereq_('./_array-methods')(5),
    KEY = 'find',
    forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /*, that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":5,"./_array-methods":12,"./_export":32}],126:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $forEach = _dereq_('./_array-methods')(0),
    STRICT = _dereq_('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":12,"./_export":32,"./_strict-method":96}],127:[function(_dereq_,module,exports){
'use strict';

var ctx = _dereq_('./_ctx'),
    $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    call = _dereq_('./_iter-call'),
    isArrayIter = _dereq_('./_is-array-iter'),
    toLength = _dereq_('./_to-length'),
    createProperty = _dereq_('./_create-property'),
    getIterFn = _dereq_('./core.get-iterator-method');

$export($export.S + $export.F * !_dereq_('./_iter-detect')(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
    var O = toObject(arrayLike),
        C = typeof this == 'function' ? this : Array,
        aLen = arguments.length,
        mapfn = aLen > 1 ? arguments[1] : undefined,
        mapping = mapfn !== undefined,
        index = 0,
        iterFn = getIterFn(O),
        length,
        result,
        step,
        iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});
},{"./_create-property":24,"./_ctx":25,"./_export":32,"./_is-array-iter":46,"./_iter-call":51,"./_iter-detect":54,"./_to-length":108,"./_to-object":109,"./core.get-iterator-method":118}],128:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $indexOf = _dereq_('./_array-includes')(false),
    $native = [].indexOf,
    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});
},{"./_array-includes":11,"./_export":32,"./_strict-method":96}],129:[function(_dereq_,module,exports){
'use strict';

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = _dereq_('./_export');

$export($export.S, 'Array', { isArray: _dereq_('./_is-array') });
},{"./_export":32,"./_is-array":47}],130:[function(_dereq_,module,exports){
'use strict';

var addToUnscopables = _dereq_('./_add-to-unscopables'),
    step = _dereq_('./_iter-step'),
    Iterators = _dereq_('./_iterators'),
    toIObject = _dereq_('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t,
      kind = this._k,
      index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":5,"./_iter-define":53,"./_iter-step":55,"./_iterators":56,"./_to-iobject":107}],131:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)

var $export = _dereq_('./_export'),
    toIObject = _dereq_('./_to-iobject'),
    arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (_dereq_('./_iobject') != Object || !_dereq_('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});
},{"./_export":32,"./_iobject":45,"./_strict-method":96,"./_to-iobject":107}],132:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toIObject = _dereq_('./_to-iobject'),
    toInteger = _dereq_('./_to-integer'),
    toLength = _dereq_('./_to-length'),
    $native = [].lastIndexOf,
    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this),
        length = toLength(O.length),
        index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }return -1;
  }
});
},{"./_export":32,"./_strict-method":96,"./_to-integer":106,"./_to-iobject":107,"./_to-length":108}],133:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $map = _dereq_('./_array-methods')(1);

$export($export.P + $export.F * !_dereq_('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":12,"./_export":32,"./_strict-method":96}],134:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    createProperty = _dereq_('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * _dereq_('./_fails')(function () {
  function F() {}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0,
        aLen = arguments.length,
        result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }result.length = aLen;
    return result;
  }
});
},{"./_create-property":24,"./_export":32,"./_fails":34}],135:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $reduce = _dereq_('./_array-reduce');

$export($export.P + $export.F * !_dereq_('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
},{"./_array-reduce":13,"./_export":32,"./_strict-method":96}],136:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $reduce = _dereq_('./_array-reduce');

$export($export.P + $export.F * !_dereq_('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});
},{"./_array-reduce":13,"./_export":32,"./_strict-method":96}],137:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    html = _dereq_('./_html'),
    cof = _dereq_('./_cof'),
    toIndex = _dereq_('./_to-index'),
    toLength = _dereq_('./_to-length'),
    arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * _dereq_('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length),
        klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toIndex(begin, len),
        upTo = toIndex(end, len),
        size = toLength(upTo - start),
        cloned = Array(size),
        i = 0;
    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }return cloned;
  }
});
},{"./_cof":18,"./_export":32,"./_fails":34,"./_html":41,"./_to-index":105,"./_to-length":108}],138:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $some = _dereq_('./_array-methods')(3);

$export($export.P + $export.F * !_dereq_('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":12,"./_export":32,"./_strict-method":96}],139:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    aFunction = _dereq_('./_a-function'),
    toObject = _dereq_('./_to-object'),
    fails = _dereq_('./_fails'),
    $sort = [].sort,
    test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !_dereq_('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});
},{"./_a-function":3,"./_export":32,"./_fails":34,"./_strict-method":96,"./_to-object":109}],140:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_set-species')('Array');
},{"./_set-species":91}],141:[function(_dereq_,module,exports){
'use strict';

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = _dereq_('./_export');

$export($export.S, 'Date', { now: function now() {
    return new Date().getTime();
  } });
},{"./_export":32}],142:[function(_dereq_,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var $export = _dereq_('./_export'),
    fails = _dereq_('./_fails'),
    getTime = Date.prototype.getTime;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function () {
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var d = this,
        y = d.getUTCFullYear(),
        m = d.getUTCMilliseconds(),
        s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
},{"./_export":32,"./_fails":34}],143:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    toPrimitive = _dereq_('./_to-primitive');

$export($export.P + $export.F * _dereq_('./_fails')(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
      return 1;
    } }) !== 1;
}), 'Date', {
  toJSON: function toJSON(key) {
    var O = toObject(this),
        pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});
},{"./_export":32,"./_fails":34,"./_to-object":109,"./_to-primitive":110}],144:[function(_dereq_,module,exports){
'use strict';

var TO_PRIMITIVE = _dereq_('./_wks')('toPrimitive'),
    proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) _dereq_('./_hide')(proto, TO_PRIMITIVE, _dereq_('./_date-to-primitive'));
},{"./_date-to-primitive":26,"./_hide":40,"./_wks":117}],145:[function(_dereq_,module,exports){
'use strict';

var DateProto = Date.prototype,
    INVALID_DATE = 'Invalid Date',
    TO_STRING = 'toString',
    $toString = DateProto[TO_STRING],
    getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  _dereq_('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}
},{"./_redefine":87}],146:[function(_dereq_,module,exports){
'use strict';

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = _dereq_('./_export');

$export($export.P, 'Function', { bind: _dereq_('./_bind') });
},{"./_bind":16,"./_export":32}],147:[function(_dereq_,module,exports){
'use strict';

var isObject = _dereq_('./_is-object'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    HAS_INSTANCE = _dereq_('./_wks')('hasInstance'),
    FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) _dereq_('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }return false;
  } });
},{"./_is-object":49,"./_object-dp":67,"./_object-gpo":74,"./_wks":117}],148:[function(_dereq_,module,exports){
'use strict';

var dP = _dereq_('./_object-dp').f,
    createDesc = _dereq_('./_property-desc'),
    has = _dereq_('./_has'),
    FProto = Function.prototype,
    nameRE = /^\s*function ([^ (]*)/,
    NAME = 'name';

var isExtensible = Object.isExtensible || function () {
  return true;
};

// 19.2.4.2 name
NAME in FProto || _dereq_('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      var that = this,
          name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch (e) {
      return '';
    }
  }
});
},{"./_descriptors":28,"./_has":39,"./_object-dp":67,"./_property-desc":85}],149:[function(_dereq_,module,exports){
'use strict';

var strong = _dereq_('./_collection-strong');

// 23.1 Map Objects
module.exports = _dereq_('./_collection')('Map', function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":22,"./_collection-strong":19}],150:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.3 Math.acosh(x)
var $export = _dereq_('./_export'),
    log1p = _dereq_('./_math-log1p'),
    sqrt = Math.sqrt,
    $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN 
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
},{"./_export":32,"./_math-log1p":60}],151:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.5 Math.asinh(x)
var $export = _dereq_('./_export'),
    $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
},{"./_export":32}],152:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.7 Math.atanh(x)
var $export = _dereq_('./_export'),
    $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
},{"./_export":32}],153:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.9 Math.cbrt(x)
var $export = _dereq_('./_export'),
    sign = _dereq_('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
},{"./_export":32,"./_math-sign":61}],154:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.11 Math.clz32(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
},{"./_export":32}],155:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.12 Math.cosh(x)
var $export = _dereq_('./_export'),
    exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
},{"./_export":32}],156:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.14 Math.expm1(x)
var $export = _dereq_('./_export'),
    $expm1 = _dereq_('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
},{"./_export":32,"./_math-expm1":59}],157:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.16 Math.fround(x)
var $export = _dereq_('./_export'),
    sign = _dereq_('./_math-sign'),
    pow = Math.pow,
    EPSILON = pow(2, -52),
    EPSILON32 = pow(2, -23),
    MAX32 = pow(2, 127) * (2 - EPSILON32),
    MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

$export($export.S, 'Math', {
  fround: function fround(x) {
    var $abs = Math.abs(x),
        $sign = sign(x),
        a,
        result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  }
});
},{"./_export":32,"./_math-sign":61}],158:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = _dereq_('./_export'),
    abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0,
        i = 0,
        aLen = arguments.length,
        larg = 0,
        arg,
        div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
},{"./_export":32}],159:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.18 Math.imul(x, y)
var $export = _dereq_('./_export'),
    $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * _dereq_('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff,
        xn = +x,
        yn = +y,
        xl = UINT16 & xn,
        yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
},{"./_export":32,"./_fails":34}],160:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.21 Math.log10(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) / Math.LN10;
  }
});
},{"./_export":32}],161:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.20 Math.log1p(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', { log1p: _dereq_('./_math-log1p') });
},{"./_export":32,"./_math-log1p":60}],162:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.22 Math.log2(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});
},{"./_export":32}],163:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.28 Math.sign(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', { sign: _dereq_('./_math-sign') });
},{"./_export":32,"./_math-sign":61}],164:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.30 Math.sinh(x)
var $export = _dereq_('./_export'),
    expm1 = _dereq_('./_math-expm1'),
    exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * _dereq_('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
},{"./_export":32,"./_fails":34,"./_math-expm1":59}],165:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.33 Math.tanh(x)
var $export = _dereq_('./_export'),
    expm1 = _dereq_('./_math-expm1'),
    exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x),
        b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
},{"./_export":32,"./_math-expm1":59}],166:[function(_dereq_,module,exports){
'use strict';

// 20.2.2.34 Math.trunc(x)
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"./_export":32}],167:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    has = _dereq_('./_has'),
    cof = _dereq_('./_cof'),
    inheritIfRequired = _dereq_('./_inherit-if-required'),
    toPrimitive = _dereq_('./_to-primitive'),
    fails = _dereq_('./_fails'),
    gOPN = _dereq_('./_object-gopn').f,
    gOPD = _dereq_('./_object-gopd').f,
    dP = _dereq_('./_object-dp').f,
    $trim = _dereq_('./_string-trim').trim,
    NUMBER = 'Number',
    $Number = global[NUMBER],
    Base = $Number,
    proto = $Number.prototype
// Opera ~12 has broken Object#toString
,
    BROKEN_COF = cof(_dereq_('./_object-create')(proto)) == NUMBER,
    TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0),
        third,
        radix,
        maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:case 98:
          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
        case 79:case 111:
          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      }return parseInt(digits, radix);
    }
  }return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value,
        that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _dereq_('./_descriptors') ? gOPN(Base) : (
  // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _dereq_('./_redefine')(global, NUMBER, $Number);
}
},{"./_cof":18,"./_descriptors":28,"./_fails":34,"./_global":38,"./_has":39,"./_inherit-if-required":43,"./_object-create":66,"./_object-dp":67,"./_object-gopd":70,"./_object-gopn":72,"./_redefine":87,"./_string-trim":102,"./_to-primitive":110}],168:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.1 Number.EPSILON
var $export = _dereq_('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
},{"./_export":32}],169:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.2 Number.isFinite(number)
var $export = _dereq_('./_export'),
    _isFinite = _dereq_('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"./_export":32,"./_global":38}],170:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.3 Number.isInteger(number)
var $export = _dereq_('./_export');

$export($export.S, 'Number', { isInteger: _dereq_('./_is-integer') });
},{"./_export":32,"./_is-integer":48}],171:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.4 Number.isNaN(number)
var $export = _dereq_('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    return number != number;
  }
});
},{"./_export":32}],172:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.5 Number.isSafeInteger(number)
var $export = _dereq_('./_export'),
    isInteger = _dereq_('./_is-integer'),
    abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"./_export":32,"./_is-integer":48}],173:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = _dereq_('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
},{"./_export":32}],174:[function(_dereq_,module,exports){
'use strict';

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = _dereq_('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
},{"./_export":32}],175:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $parseFloat = _dereq_('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
},{"./_export":32,"./_parse-float":81}],176:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $parseInt = _dereq_('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
},{"./_export":32,"./_parse-int":82}],177:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toInteger = _dereq_('./_to-integer'),
    aNumberValue = _dereq_('./_a-number-value'),
    repeat = _dereq_('./_string-repeat'),
    $toFixed = 1..toFixed,
    floor = Math.floor,
    data = [0, 0, 0, 0, 0, 0],
    ERROR = 'Number.toFixed: incorrect invocation!',
    ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1,
      c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6,
      c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6,
      s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }return s;
};
var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
  var n = 0,
      x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !_dereq_('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR),
        f = toInteger(fractionDigits),
        s = '',
        m = ZERO,
        e,
        z,
        j,
        k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }return m;
  }
});
},{"./_a-number-value":4,"./_export":32,"./_fails":34,"./_string-repeat":101,"./_to-integer":106}],178:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $fails = _dereq_('./_fails'),
    aNumberValue = _dereq_('./_a-number-value'),
    $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});
},{"./_a-number-value":4,"./_export":32,"./_fails":34}],179:[function(_dereq_,module,exports){
'use strict';

// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_('./_export');

$export($export.S + $export.F, 'Object', { assign: _dereq_('./_object-assign') });
},{"./_export":32,"./_object-assign":65}],180:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: _dereq_('./_object-create') });
},{"./_export":32,"./_object-create":66}],181:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !_dereq_('./_descriptors'), 'Object', { defineProperties: _dereq_('./_object-dps') });
},{"./_descriptors":28,"./_export":32,"./_object-dps":68}],182:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !_dereq_('./_descriptors'), 'Object', { defineProperty: _dereq_('./_object-dp').f });
},{"./_descriptors":28,"./_export":32,"./_object-dp":67}],183:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.5 Object.freeze(O)
var isObject = _dereq_('./_is-object'),
    meta = _dereq_('./_meta').onFreeze;

_dereq_('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":49,"./_meta":62,"./_object-sap":78}],184:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = _dereq_('./_to-iobject'),
    $getOwnPropertyDescriptor = _dereq_('./_object-gopd').f;

_dereq_('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":70,"./_object-sap":78,"./_to-iobject":107}],185:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.7 Object.getOwnPropertyNames(O)
_dereq_('./_object-sap')('getOwnPropertyNames', function () {
  return _dereq_('./_object-gopn-ext').f;
});
},{"./_object-gopn-ext":71,"./_object-sap":78}],186:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = _dereq_('./_to-object'),
    $getPrototypeOf = _dereq_('./_object-gpo');

_dereq_('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":74,"./_object-sap":78,"./_to-object":109}],187:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.11 Object.isExtensible(O)
var isObject = _dereq_('./_is-object');

_dereq_('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"./_is-object":49,"./_object-sap":78}],188:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.12 Object.isFrozen(O)
var isObject = _dereq_('./_is-object');

_dereq_('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"./_is-object":49,"./_object-sap":78}],189:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.13 Object.isSealed(O)
var isObject = _dereq_('./_is-object');

_dereq_('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
},{"./_is-object":49,"./_object-sap":78}],190:[function(_dereq_,module,exports){
'use strict';

// 19.1.3.10 Object.is(value1, value2)
var $export = _dereq_('./_export');
$export($export.S, 'Object', { is: _dereq_('./_same-value') });
},{"./_export":32,"./_same-value":89}],191:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./_to-object'),
    $keys = _dereq_('./_object-keys');

_dereq_('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});
},{"./_object-keys":76,"./_object-sap":78,"./_to-object":109}],192:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.15 Object.preventExtensions(O)
var isObject = _dereq_('./_is-object'),
    meta = _dereq_('./_meta').onFreeze;

_dereq_('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});
},{"./_is-object":49,"./_meta":62,"./_object-sap":78}],193:[function(_dereq_,module,exports){
'use strict';

// 19.1.2.17 Object.seal(O)
var isObject = _dereq_('./_is-object'),
    meta = _dereq_('./_meta').onFreeze;

_dereq_('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});
},{"./_is-object":49,"./_meta":62,"./_object-sap":78}],194:[function(_dereq_,module,exports){
'use strict';

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = _dereq_('./_export');
$export($export.S, 'Object', { setPrototypeOf: _dereq_('./_set-proto').set });
},{"./_export":32,"./_set-proto":90}],195:[function(_dereq_,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()

var classof = _dereq_('./_classof'),
    test = {};
test[_dereq_('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _dereq_('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./_classof":17,"./_redefine":87,"./_wks":117}],196:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $parseFloat = _dereq_('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
},{"./_export":32,"./_parse-float":81}],197:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $parseInt = _dereq_('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
},{"./_export":32,"./_parse-int":82}],198:[function(_dereq_,module,exports){
'use strict';

var LIBRARY = _dereq_('./_library'),
    global = _dereq_('./_global'),
    ctx = _dereq_('./_ctx'),
    classof = _dereq_('./_classof'),
    $export = _dereq_('./_export'),
    isObject = _dereq_('./_is-object'),
    aFunction = _dereq_('./_a-function'),
    anInstance = _dereq_('./_an-instance'),
    forOf = _dereq_('./_for-of'),
    speciesConstructor = _dereq_('./_species-constructor'),
    task = _dereq_('./_task').set,
    microtask = _dereq_('./_microtask')(),
    PROMISE = 'Promise',
    TypeError = global.TypeError,
    process = global.process,
    $Promise = global[PROMISE],
    process = global.process,
    isNode = classof(process) == 'process',
    empty = function empty() {/* empty */},
    Internal,
    GenericPromiseCapability,
    Wrapper;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1),
        FakePromise = (promise.constructor = {})[_dereq_('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {/* empty */}
}();

// helpers
var sameConstructor = function sameConstructor(a, b) {
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function newPromiseCapability(C) {
  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};
var perform = function perform(exec) {
  try {
    exec();
  } catch (e) {
    return { error: e };
  }
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v,
        ok = promise._s == 1,
        i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail,
          resolve = reaction.resolve,
          reject = reaction.reject,
          domain = reaction.domain,
          result,
          then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v,
        abrupt,
        handler,
        console;
    if (isUnhandled(promise)) {
      abrupt = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (abrupt) throw abrupt.error;
  });
};
var isUnhandled = function isUnhandled(promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c,
      i = 0,
      reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  }return true;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this,
      then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = _dereq_('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function PromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
_dereq_('./_set-to-string-tag')($Promise, PROMISE);
_dereq_('./_set-species')(PROMISE);
Wrapper = _dereq_('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this),
        $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
    var capability = newPromiseCapability(this),
        $$resolve = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this,
        capability = newPromiseCapability(C),
        resolve = capability.resolve,
        reject = capability.reject;
    var abrupt = perform(function () {
      var values = [],
          index = 0,
          remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++,
            alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (abrupt) reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this,
        capability = newPromiseCapability(C),
        reject = capability.reject;
    var abrupt = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (abrupt) reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":3,"./_an-instance":6,"./_classof":17,"./_core":23,"./_ctx":25,"./_export":32,"./_for-of":37,"./_global":38,"./_is-object":49,"./_iter-detect":54,"./_library":58,"./_microtask":64,"./_redefine-all":86,"./_set-species":91,"./_set-to-string-tag":92,"./_species-constructor":95,"./_task":104,"./_wks":117}],199:[function(_dereq_,module,exports){
'use strict';

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = _dereq_('./_export'),
    aFunction = _dereq_('./_a-function'),
    anObject = _dereq_('./_an-object'),
    rApply = (_dereq_('./_global').Reflect || {}).apply,
    fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !_dereq_('./_fails')(function () {
  rApply(function () {});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target),
        L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
},{"./_a-function":3,"./_an-object":7,"./_export":32,"./_fails":34,"./_global":38}],200:[function(_dereq_,module,exports){
'use strict';

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = _dereq_('./_export'),
    create = _dereq_('./_object-create'),
    aFunction = _dereq_('./_a-function'),
    anObject = _dereq_('./_an-object'),
    isObject = _dereq_('./_is-object'),
    fails = _dereq_('./_fails'),
    bind = _dereq_('./_bind'),
    rConstruct = (_dereq_('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() {}
  return !(rConstruct(function () {}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype,
        instance = create(isObject(proto) ? proto : Object.prototype),
        result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
},{"./_a-function":3,"./_an-object":7,"./_bind":16,"./_export":32,"./_fails":34,"./_global":38,"./_is-object":49,"./_object-create":66}],201:[function(_dereq_,module,exports){
'use strict';

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = _dereq_('./_object-dp'),
    $export = _dereq_('./_export'),
    anObject = _dereq_('./_an-object'),
    toPrimitive = _dereq_('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * _dereq_('./_fails')(function () {
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});
},{"./_an-object":7,"./_export":32,"./_fails":34,"./_object-dp":67,"./_to-primitive":110}],202:[function(_dereq_,module,exports){
'use strict';

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = _dereq_('./_export'),
    gOPD = _dereq_('./_object-gopd').f,
    anObject = _dereq_('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
},{"./_an-object":7,"./_export":32,"./_object-gopd":70}],203:[function(_dereq_,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)

var $export = _dereq_('./_export'),
    anObject = _dereq_('./_an-object');
var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target
  this._i = 0; // next index
  var keys = this._k = [] // keys
  ,
      key;
  for (key in iterated) {
    keys.push(key);
  }
};
_dereq_('./_iter-create')(Enumerate, 'Object', function () {
  var that = this,
      keys = that._k,
      key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});
},{"./_an-object":7,"./_export":32,"./_iter-create":52}],204:[function(_dereq_,module,exports){
'use strict';

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = _dereq_('./_object-gopd'),
    $export = _dereq_('./_export'),
    anObject = _dereq_('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});
},{"./_an-object":7,"./_export":32,"./_object-gopd":70}],205:[function(_dereq_,module,exports){
'use strict';

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = _dereq_('./_export'),
    getProto = _dereq_('./_object-gpo'),
    anObject = _dereq_('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});
},{"./_an-object":7,"./_export":32,"./_object-gpo":74}],206:[function(_dereq_,module,exports){
'use strict';

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = _dereq_('./_object-gopd'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    has = _dereq_('./_has'),
    $export = _dereq_('./_export'),
    isObject = _dereq_('./_is-object'),
    anObject = _dereq_('./_an-object');

function get(target, propertyKey /*, receiver*/) {
  var receiver = arguments.length < 3 ? target : arguments[2],
      desc,
      proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });
},{"./_an-object":7,"./_export":32,"./_has":39,"./_is-object":49,"./_object-gopd":70,"./_object-gpo":74}],207:[function(_dereq_,module,exports){
'use strict';

// 26.1.9 Reflect.has(target, propertyKey)
var $export = _dereq_('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});
},{"./_export":32}],208:[function(_dereq_,module,exports){
'use strict';

// 26.1.10 Reflect.isExtensible(target)
var $export = _dereq_('./_export'),
    anObject = _dereq_('./_an-object'),
    $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
},{"./_an-object":7,"./_export":32}],209:[function(_dereq_,module,exports){
'use strict';

// 26.1.11 Reflect.ownKeys(target)
var $export = _dereq_('./_export');

$export($export.S, 'Reflect', { ownKeys: _dereq_('./_own-keys') });
},{"./_export":32,"./_own-keys":80}],210:[function(_dereq_,module,exports){
'use strict';

// 26.1.12 Reflect.preventExtensions(target)
var $export = _dereq_('./_export'),
    anObject = _dereq_('./_an-object'),
    $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});
},{"./_an-object":7,"./_export":32}],211:[function(_dereq_,module,exports){
'use strict';

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = _dereq_('./_export'),
    setProto = _dereq_('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});
},{"./_export":32,"./_set-proto":90}],212:[function(_dereq_,module,exports){
'use strict';

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = _dereq_('./_object-dp'),
    gOPD = _dereq_('./_object-gopd'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    has = _dereq_('./_has'),
    $export = _dereq_('./_export'),
    createDesc = _dereq_('./_property-desc'),
    anObject = _dereq_('./_an-object'),
    isObject = _dereq_('./_is-object');

function set(target, propertyKey, V /*, receiver*/) {
  var receiver = arguments.length < 4 ? target : arguments[3],
      ownDesc = gOPD.f(anObject(target), propertyKey),
      existingDescriptor,
      proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });
},{"./_an-object":7,"./_export":32,"./_has":39,"./_is-object":49,"./_object-dp":67,"./_object-gopd":70,"./_object-gpo":74,"./_property-desc":85}],213:[function(_dereq_,module,exports){
'use strict';

var global = _dereq_('./_global'),
    inheritIfRequired = _dereq_('./_inherit-if-required'),
    dP = _dereq_('./_object-dp').f,
    gOPN = _dereq_('./_object-gopn').f,
    isRegExp = _dereq_('./_is-regexp'),
    $flags = _dereq_('./_flags'),
    $RegExp = global.RegExp,
    Base = $RegExp,
    proto = $RegExp.prototype,
    re1 = /a/g,
    re2 = /a/g
// "new" creates a new object, old webkit buggy here
,
    CORRECT_NEW = new $RegExp(re1) !== re1;

if (_dereq_('./_descriptors') && (!CORRECT_NEW || _dereq_('./_fails')(function () {
  re2[_dereq_('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp,
        piRE = isRegExp(p),
        fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  _dereq_('./_redefine')(global, 'RegExp', $RegExp);
}

_dereq_('./_set-species')('RegExp');
},{"./_descriptors":28,"./_fails":34,"./_flags":36,"./_global":38,"./_inherit-if-required":43,"./_is-regexp":50,"./_object-dp":67,"./_object-gopn":72,"./_redefine":87,"./_set-species":91,"./_wks":117}],214:[function(_dereq_,module,exports){
'use strict';

// 21.2.5.3 get RegExp.prototype.flags()
if (_dereq_('./_descriptors') && /./g.flags != 'g') _dereq_('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _dereq_('./_flags')
});
},{"./_descriptors":28,"./_flags":36,"./_object-dp":67}],215:[function(_dereq_,module,exports){
'use strict';

// @@match logic
_dereq_('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';

    var O = defined(this),
        fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});
},{"./_fix-re-wks":35}],216:[function(_dereq_,module,exports){
'use strict';

// @@replace logic
_dereq_('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';

    var O = defined(this),
        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});
},{"./_fix-re-wks":35}],217:[function(_dereq_,module,exports){
'use strict';

// @@search logic
_dereq_('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';

    var O = defined(this),
        fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});
},{"./_fix-re-wks":35}],218:[function(_dereq_,module,exports){
'use strict';

// @@split logic
_dereq_('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';

  var isRegExp = _dereq_('./_is-regexp'),
      _split = $split,
      $push = [].push,
      $SPLIT = 'split',
      LENGTH = 'length',
      LAST_INDEX = 'lastIndex';
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function $split(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function $split(separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this),
        fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});
},{"./_fix-re-wks":35,"./_is-regexp":50}],219:[function(_dereq_,module,exports){
'use strict';

_dereq_('./es6.regexp.flags');
var anObject = _dereq_('./_an-object'),
    $flags = _dereq_('./_flags'),
    DESCRIPTORS = _dereq_('./_descriptors'),
    TO_STRING = 'toString',
    $toString = /./[TO_STRING];

var define = function define(fn) {
  _dereq_('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_dereq_('./_fails')(function () {
  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}
},{"./_an-object":7,"./_descriptors":28,"./_fails":34,"./_flags":36,"./_redefine":87,"./es6.regexp.flags":214}],220:[function(_dereq_,module,exports){
'use strict';

var strong = _dereq_('./_collection-strong');

// 23.2 Set Objects
module.exports = _dereq_('./_collection')('Set', function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":22,"./_collection-strong":19}],221:[function(_dereq_,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)

_dereq_('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});
},{"./_string-html":99}],222:[function(_dereq_,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()

_dereq_('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});
},{"./_string-html":99}],223:[function(_dereq_,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()

_dereq_('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});
},{"./_string-html":99}],224:[function(_dereq_,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()

_dereq_('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});
},{"./_string-html":99}],225:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $at = _dereq_('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});
},{"./_export":32,"./_string-at":97}],226:[function(_dereq_,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';

var $export = _dereq_('./_export'),
    toLength = _dereq_('./_to-length'),
    context = _dereq_('./_string-context'),
    ENDS_WITH = 'endsWith',
    $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * _dereq_('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH),
        endPosition = arguments.length > 1 ? arguments[1] : undefined,
        len = toLength(that.length),
        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
        search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});
},{"./_export":32,"./_fails-is-regexp":33,"./_string-context":98,"./_to-length":108}],227:[function(_dereq_,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()

_dereq_('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});
},{"./_string-html":99}],228:[function(_dereq_,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)

_dereq_('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});
},{"./_string-html":99}],229:[function(_dereq_,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)

_dereq_('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});
},{"./_string-html":99}],230:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toIndex = _dereq_('./_to-index'),
    fromCharCode = String.fromCharCode,
    $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [],
        aLen = arguments.length,
        i = 0,
        code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }return res.join('');
  }
});
},{"./_export":32,"./_to-index":105}],231:[function(_dereq_,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';

var $export = _dereq_('./_export'),
    context = _dereq_('./_string-context'),
    INCLUDES = 'includes';

$export($export.P + $export.F * _dereq_('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});
},{"./_export":32,"./_fails-is-regexp":33,"./_string-context":98}],232:[function(_dereq_,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()

_dereq_('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});
},{"./_string-html":99}],233:[function(_dereq_,module,exports){
'use strict';

var $at = _dereq_('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t,
      index = this._i,
      point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});
},{"./_iter-define":53,"./_string-at":97}],234:[function(_dereq_,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)

_dereq_('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});
},{"./_string-html":99}],235:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toIObject = _dereq_('./_to-iobject'),
    toLength = _dereq_('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw),
        len = toLength(tpl.length),
        aLen = arguments.length,
        res = [],
        i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }return res.join('');
  }
});
},{"./_export":32,"./_to-iobject":107,"./_to-length":108}],236:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _dereq_('./_string-repeat')
});
},{"./_export":32,"./_string-repeat":101}],237:[function(_dereq_,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()

_dereq_('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});
},{"./_string-html":99}],238:[function(_dereq_,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';

var $export = _dereq_('./_export'),
    toLength = _dereq_('./_to-length'),
    context = _dereq_('./_string-context'),
    STARTS_WITH = 'startsWith',
    $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * _dereq_('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */) {
    var that = context(this, searchString, STARTS_WITH),
        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
        search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});
},{"./_export":32,"./_fails-is-regexp":33,"./_string-context":98,"./_to-length":108}],239:[function(_dereq_,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()

_dereq_('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});
},{"./_string-html":99}],240:[function(_dereq_,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()

_dereq_('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});
},{"./_string-html":99}],241:[function(_dereq_,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()

_dereq_('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});
},{"./_string-html":99}],242:[function(_dereq_,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()

_dereq_('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});
},{"./_string-trim":102}],243:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = _dereq_('./_global'),
    has = _dereq_('./_has'),
    DESCRIPTORS = _dereq_('./_descriptors'),
    $export = _dereq_('./_export'),
    redefine = _dereq_('./_redefine'),
    META = _dereq_('./_meta').KEY,
    $fails = _dereq_('./_fails'),
    shared = _dereq_('./_shared'),
    setToStringTag = _dereq_('./_set-to-string-tag'),
    uid = _dereq_('./_uid'),
    wks = _dereq_('./_wks'),
    wksExt = _dereq_('./_wks-ext'),
    wksDefine = _dereq_('./_wks-define'),
    keyOf = _dereq_('./_keyof'),
    enumKeys = _dereq_('./_enum-keys'),
    isArray = _dereq_('./_is-array'),
    anObject = _dereq_('./_an-object'),
    toIObject = _dereq_('./_to-iobject'),
    toPrimitive = _dereq_('./_to-primitive'),
    createDesc = _dereq_('./_property-desc'),
    _create = _dereq_('./_object-create'),
    gOPNExt = _dereq_('./_object-gopn-ext'),
    $GOPD = _dereq_('./_object-gopd'),
    $DP = _dereq_('./_object-dp'),
    $keys = _dereq_('./_object-keys'),
    gOPD = $GOPD.f,
    dP = $DP.f,
    gOPN = gOPNExt.f,
    $Symbol = global.Symbol,
    $JSON = global.JSON,
    _stringify = $JSON && $JSON.stringify,
    PROTOTYPE = 'prototype',
    HIDDEN = wks('_hidden'),
    TO_PRIMITIVE = wks('toPrimitive'),
    isEnum = {}.propertyIsEnumerable,
    SymbolRegistry = shared('symbol-registry'),
    AllSymbols = shared('symbols'),
    OPSymbols = shared('op-symbols'),
    ObjectProto = Object[PROTOTYPE],
    USE_NATIVE = typeof $Symbol == 'function',
    QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P)),
      i = 0,
      l = keys.length,
      key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto,
      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  _dereq_('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  _dereq_('./_object-pie').f = $propertyIsEnumerable;
  _dereq_('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !_dereq_('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
  wks(symbols[i++]);
}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
  wksDefine(symbols[i++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it],
        i = 1,
        replacer,
        $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":7,"./_descriptors":28,"./_enum-keys":31,"./_export":32,"./_fails":34,"./_global":38,"./_has":39,"./_hide":40,"./_is-array":47,"./_keyof":57,"./_library":58,"./_meta":62,"./_object-create":66,"./_object-dp":67,"./_object-gopd":70,"./_object-gopn":72,"./_object-gopn-ext":71,"./_object-gops":73,"./_object-keys":76,"./_object-pie":77,"./_property-desc":85,"./_redefine":87,"./_set-to-string-tag":92,"./_shared":94,"./_to-iobject":107,"./_to-primitive":110,"./_uid":114,"./_wks":117,"./_wks-define":115,"./_wks-ext":116}],244:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $typed = _dereq_('./_typed'),
    buffer = _dereq_('./_typed-buffer'),
    anObject = _dereq_('./_an-object'),
    toIndex = _dereq_('./_to-index'),
    toLength = _dereq_('./_to-length'),
    isObject = _dereq_('./_is-object'),
    ArrayBuffer = _dereq_('./_global').ArrayBuffer,
    speciesConstructor = _dereq_('./_species-constructor'),
    $ArrayBuffer = buffer.ArrayBuffer,
    $DataView = buffer.DataView,
    $isView = $typed.ABV && ArrayBuffer.isView,
    $slice = $ArrayBuffer.prototype.slice,
    VIEW = $typed.VIEW,
    ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * _dereq_('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength,
        first = toIndex(start, len),
        final = toIndex(end === undefined ? len : end, len),
        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
        viewS = new $DataView(this),
        viewT = new $DataView(result),
        index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }return result;
  }
});

_dereq_('./_set-species')(ARRAY_BUFFER);
},{"./_an-object":7,"./_export":32,"./_fails":34,"./_global":38,"./_is-object":49,"./_set-species":91,"./_species-constructor":95,"./_to-index":105,"./_to-length":108,"./_typed":113,"./_typed-buffer":112}],245:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export');
$export($export.G + $export.W + $export.F * !_dereq_('./_typed').ABV, {
  DataView: _dereq_('./_typed-buffer').DataView
});
},{"./_export":32,"./_typed":113,"./_typed-buffer":112}],246:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],247:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],248:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],249:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],250:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],251:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],252:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],253:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":111}],254:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);
},{"./_typed-array":111}],255:[function(_dereq_,module,exports){
'use strict';

var each = _dereq_('./_array-methods')(0),
    redefine = _dereq_('./_redefine'),
    meta = _dereq_('./_meta'),
    assign = _dereq_('./_object-assign'),
    weak = _dereq_('./_collection-weak'),
    isObject = _dereq_('./_is-object'),
    getWeak = meta.getWeak,
    isExtensible = Object.isExtensible,
    uncaughtFrozenStore = weak.ufstore,
    tmp = {},
    InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _dereq_('./_collection')('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype,
        method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
        // store all the rest on native weakmap
      }return method.call(this, a, b);
    });
  });
}
},{"./_array-methods":12,"./_collection":22,"./_collection-weak":21,"./_is-object":49,"./_meta":62,"./_object-assign":65,"./_redefine":87}],256:[function(_dereq_,module,exports){
'use strict';

var weak = _dereq_('./_collection-weak');

// 23.4 WeakSet Objects
_dereq_('./_collection')('WeakSet', function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./_collection":22,"./_collection-weak":21}],257:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes

var $export = _dereq_('./_export'),
    $includes = _dereq_('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_dereq_('./_add-to-unscopables')('includes');
},{"./_add-to-unscopables":5,"./_array-includes":11,"./_export":32}],258:[function(_dereq_,module,exports){
'use strict';

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = _dereq_('./_export'),
    microtask = _dereq_('./_microtask')(),
    process = _dereq_('./_global').process,
    isNode = _dereq_('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});
},{"./_cof":18,"./_export":32,"./_global":38,"./_microtask":64}],259:[function(_dereq_,module,exports){
'use strict';

// https://github.com/ljharb/proposal-is-error
var $export = _dereq_('./_export'),
    cof = _dereq_('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});
},{"./_cof":18,"./_export":32}],260:[function(_dereq_,module,exports){
'use strict';

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = _dereq_('./_export');

$export($export.P + $export.R, 'Map', { toJSON: _dereq_('./_collection-to-json')('Map') });
},{"./_collection-to-json":20,"./_export":32}],261:[function(_dereq_,module,exports){
'use strict';

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0,
        $x1 = x1 >>> 0,
        $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
},{"./_export":32}],262:[function(_dereq_,module,exports){
'use strict';

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff,
        $u = +u,
        $v = +v,
        u0 = $u & UINT16,
        v0 = $v & UINT16,
        u1 = $u >> 16,
        v1 = $v >> 16,
        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
},{"./_export":32}],263:[function(_dereq_,module,exports){
'use strict';

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0,
        $x1 = x1 >>> 0,
        $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
},{"./_export":32}],264:[function(_dereq_,module,exports){
'use strict';

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = _dereq_('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff,
        $u = +u,
        $v = +v,
        u0 = $u & UINT16,
        v0 = $v & UINT16,
        u1 = $u >>> 16,
        v1 = $v >>> 16,
        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
},{"./_export":32}],265:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    aFunction = _dereq_('./_a-function'),
    $defineProperty = _dereq_('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
_dereq_('./_descriptors') && $export($export.P + _dereq_('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});
},{"./_a-function":3,"./_descriptors":28,"./_export":32,"./_object-dp":67,"./_object-forced-pam":69,"./_to-object":109}],266:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    aFunction = _dereq_('./_a-function'),
    $defineProperty = _dereq_('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
_dereq_('./_descriptors') && $export($export.P + _dereq_('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});
},{"./_a-function":3,"./_descriptors":28,"./_export":32,"./_object-dp":67,"./_object-forced-pam":69,"./_to-object":109}],267:[function(_dereq_,module,exports){
'use strict';

// https://github.com/tc39/proposal-object-values-entries
var $export = _dereq_('./_export'),
    $entries = _dereq_('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});
},{"./_export":32,"./_object-to-array":79}],268:[function(_dereq_,module,exports){
'use strict';

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = _dereq_('./_export'),
    ownKeys = _dereq_('./_own-keys'),
    toIObject = _dereq_('./_to-iobject'),
    gOPD = _dereq_('./_object-gopd'),
    createProperty = _dereq_('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object),
        getDesc = gOPD.f,
        keys = ownKeys(O),
        result = {},
        i = 0,
        key;
    while (keys.length > i) {
      createProperty(result, key = keys[i++], getDesc(O, key));
    }return result;
  }
});
},{"./_create-property":24,"./_export":32,"./_object-gopd":70,"./_own-keys":80,"./_to-iobject":107}],269:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    toPrimitive = _dereq_('./_to-primitive'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    getOwnPropertyDescriptor = _dereq_('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_dereq_('./_descriptors') && $export($export.P + _dereq_('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this),
        K = toPrimitive(P, true),
        D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});
},{"./_descriptors":28,"./_export":32,"./_object-forced-pam":69,"./_object-gopd":70,"./_object-gpo":74,"./_to-object":109,"./_to-primitive":110}],270:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    toObject = _dereq_('./_to-object'),
    toPrimitive = _dereq_('./_to-primitive'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    getOwnPropertyDescriptor = _dereq_('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_dereq_('./_descriptors') && $export($export.P + _dereq_('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this),
        K = toPrimitive(P, true),
        D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});
},{"./_descriptors":28,"./_export":32,"./_object-forced-pam":69,"./_object-gopd":70,"./_object-gpo":74,"./_to-object":109,"./_to-primitive":110}],271:[function(_dereq_,module,exports){
'use strict';

// https://github.com/tc39/proposal-object-values-entries
var $export = _dereq_('./_export'),
    $values = _dereq_('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});
},{"./_export":32,"./_object-to-array":79}],272:[function(_dereq_,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable

var $export = _dereq_('./_export'),
    global = _dereq_('./_global'),
    core = _dereq_('./_core'),
    microtask = _dereq_('./_microtask')(),
    OBSERVABLE = _dereq_('./_wks')('observable'),
    aFunction = _dereq_('./_a-function'),
    anObject = _dereq_('./_an-object'),
    anInstance = _dereq_('./_an-instance'),
    redefineAll = _dereq_('./_redefine-all'),
    hide = _dereq_('./_hide'),
    forOf = _dereq_('./_for-of'),
    RETURN = forOf.RETURN;

var getMethod = function getMethod(fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function cleanupSubscription(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function subscriptionClosed(subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function closeSubscription(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function Subscription(observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer),
        subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
        subscription.unsubscribe();
      };else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function next(value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
      items[i] = arguments[i++];
    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (done) return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () {
  return this;
});

$export($export.G, { Observable: $Observable });

_dereq_('./_set-species')('Observable');
},{"./_a-function":3,"./_an-instance":6,"./_an-object":7,"./_core":23,"./_export":32,"./_for-of":37,"./_global":38,"./_hide":40,"./_microtask":64,"./_redefine-all":86,"./_set-species":91,"./_wks":117}],273:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    toMetaKey = metadata.key,
    ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
  } });
},{"./_an-object":7,"./_metadata":63}],274:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    toMetaKey = metadata.key,
    getOrCreateMetadataMap = metadata.map,
    store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  } });
},{"./_an-object":7,"./_metadata":63}],275:[function(_dereq_,module,exports){
'use strict';

var Set = _dereq_('./es6.set'),
    from = _dereq_('./_array-from-iterable'),
    metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    ordinaryOwnMetadataKeys = metadata.keys,
    toMetaKey = metadata.key;

var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P),
      parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });
},{"./_an-object":7,"./_array-from-iterable":10,"./_metadata":63,"./_object-gpo":74,"./es6.set":220}],276:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    ordinaryHasOwnMetadata = metadata.has,
    ordinaryGetOwnMetadata = metadata.get,
    toMetaKey = metadata.key;

var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });
},{"./_an-object":7,"./_metadata":63,"./_object-gpo":74}],277:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    ordinaryOwnMetadataKeys = metadata.keys,
    toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });
},{"./_an-object":7,"./_metadata":63}],278:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    ordinaryGetOwnMetadata = metadata.get,
    toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });
},{"./_an-object":7,"./_metadata":63}],279:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    getPrototypeOf = _dereq_('./_object-gpo'),
    ordinaryHasOwnMetadata = metadata.has,
    toMetaKey = metadata.key;

var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });
},{"./_an-object":7,"./_metadata":63,"./_object-gpo":74}],280:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    ordinaryHasOwnMetadata = metadata.has,
    toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });
},{"./_an-object":7,"./_metadata":63}],281:[function(_dereq_,module,exports){
'use strict';

var metadata = _dereq_('./_metadata'),
    anObject = _dereq_('./_an-object'),
    aFunction = _dereq_('./_a-function'),
    toMetaKey = metadata.key,
    ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, targetKey) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
    };
  } });
},{"./_a-function":3,"./_an-object":7,"./_metadata":63}],282:[function(_dereq_,module,exports){
'use strict';

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = _dereq_('./_export');

$export($export.P + $export.R, 'Set', { toJSON: _dereq_('./_collection-to-json')('Set') });
},{"./_collection-to-json":20,"./_export":32}],283:[function(_dereq_,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at

var $export = _dereq_('./_export'),
    $at = _dereq_('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});
},{"./_export":32,"./_string-at":97}],284:[function(_dereq_,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/

var $export = _dereq_('./_export'),
    defined = _dereq_('./_defined'),
    toLength = _dereq_('./_to-length'),
    isRegExp = _dereq_('./_is-regexp'),
    getFlags = _dereq_('./_flags'),
    RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
  this._r = regexp;
  this._s = string;
};

_dereq_('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this),
        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
},{"./_defined":27,"./_export":32,"./_flags":36,"./_is-regexp":50,"./_iter-create":52,"./_to-length":108}],285:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end

var $export = _dereq_('./_export'),
    $pad = _dereq_('./_string-pad');

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});
},{"./_export":32,"./_string-pad":100}],286:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end

var $export = _dereq_('./_export'),
    $pad = _dereq_('./_string-pad');

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});
},{"./_export":32,"./_string-pad":100}],287:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

_dereq_('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');
},{"./_string-trim":102}],288:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

_dereq_('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');
},{"./_string-trim":102}],289:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_wks-define')('asyncIterator');
},{"./_wks-define":115}],290:[function(_dereq_,module,exports){
'use strict';

_dereq_('./_wks-define')('observable');
},{"./_wks-define":115}],291:[function(_dereq_,module,exports){
'use strict';

// https://github.com/ljharb/proposal-global
var $export = _dereq_('./_export');

$export($export.S, 'System', { global: _dereq_('./_global') });
},{"./_export":32,"./_global":38}],292:[function(_dereq_,module,exports){
'use strict';

var $iterators = _dereq_('./es6.array.iterator'),
    redefine = _dereq_('./_redefine'),
    global = _dereq_('./_global'),
    hide = _dereq_('./_hide'),
    Iterators = _dereq_('./_iterators'),
    wks = _dereq_('./_wks'),
    ITERATOR = wks('iterator'),
    TO_STRING_TAG = wks('toStringTag'),
    ArrayValues = Iterators.Array;

for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
  var NAME = collections[i],
      Collection = global[NAME],
      proto = Collection && Collection.prototype,
      key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}
},{"./_global":38,"./_hide":40,"./_iterators":56,"./_redefine":87,"./_wks":117,"./es6.array.iterator":130}],293:[function(_dereq_,module,exports){
'use strict';

var $export = _dereq_('./_export'),
    $task = _dereq_('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});
},{"./_export":32,"./_task":104}],294:[function(_dereq_,module,exports){
'use strict';

// ie9- setTimeout & setInterval additional parameters fix
var global = _dereq_('./_global'),
    $export = _dereq_('./_export'),
    invoke = _dereq_('./_invoke'),
    partial = _dereq_('./_partial'),
    navigator = global.navigator,
    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function wrap(set) {
  return MSIE ? function (fn, time /*, ...args */) {
    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"./_export":32,"./_global":38,"./_invoke":44,"./_partial":83}],295:[function(_dereq_,module,exports){
'use strict';

_dereq_('./modules/es6.symbol');
_dereq_('./modules/es6.object.create');
_dereq_('./modules/es6.object.define-property');
_dereq_('./modules/es6.object.define-properties');
_dereq_('./modules/es6.object.get-own-property-descriptor');
_dereq_('./modules/es6.object.get-prototype-of');
_dereq_('./modules/es6.object.keys');
_dereq_('./modules/es6.object.get-own-property-names');
_dereq_('./modules/es6.object.freeze');
_dereq_('./modules/es6.object.seal');
_dereq_('./modules/es6.object.prevent-extensions');
_dereq_('./modules/es6.object.is-frozen');
_dereq_('./modules/es6.object.is-sealed');
_dereq_('./modules/es6.object.is-extensible');
_dereq_('./modules/es6.object.assign');
_dereq_('./modules/es6.object.is');
_dereq_('./modules/es6.object.set-prototype-of');
_dereq_('./modules/es6.object.to-string');
_dereq_('./modules/es6.function.bind');
_dereq_('./modules/es6.function.name');
_dereq_('./modules/es6.function.has-instance');
_dereq_('./modules/es6.parse-int');
_dereq_('./modules/es6.parse-float');
_dereq_('./modules/es6.number.constructor');
_dereq_('./modules/es6.number.to-fixed');
_dereq_('./modules/es6.number.to-precision');
_dereq_('./modules/es6.number.epsilon');
_dereq_('./modules/es6.number.is-finite');
_dereq_('./modules/es6.number.is-integer');
_dereq_('./modules/es6.number.is-nan');
_dereq_('./modules/es6.number.is-safe-integer');
_dereq_('./modules/es6.number.max-safe-integer');
_dereq_('./modules/es6.number.min-safe-integer');
_dereq_('./modules/es6.number.parse-float');
_dereq_('./modules/es6.number.parse-int');
_dereq_('./modules/es6.math.acosh');
_dereq_('./modules/es6.math.asinh');
_dereq_('./modules/es6.math.atanh');
_dereq_('./modules/es6.math.cbrt');
_dereq_('./modules/es6.math.clz32');
_dereq_('./modules/es6.math.cosh');
_dereq_('./modules/es6.math.expm1');
_dereq_('./modules/es6.math.fround');
_dereq_('./modules/es6.math.hypot');
_dereq_('./modules/es6.math.imul');
_dereq_('./modules/es6.math.log10');
_dereq_('./modules/es6.math.log1p');
_dereq_('./modules/es6.math.log2');
_dereq_('./modules/es6.math.sign');
_dereq_('./modules/es6.math.sinh');
_dereq_('./modules/es6.math.tanh');
_dereq_('./modules/es6.math.trunc');
_dereq_('./modules/es6.string.from-code-point');
_dereq_('./modules/es6.string.raw');
_dereq_('./modules/es6.string.trim');
_dereq_('./modules/es6.string.iterator');
_dereq_('./modules/es6.string.code-point-at');
_dereq_('./modules/es6.string.ends-with');
_dereq_('./modules/es6.string.includes');
_dereq_('./modules/es6.string.repeat');
_dereq_('./modules/es6.string.starts-with');
_dereq_('./modules/es6.string.anchor');
_dereq_('./modules/es6.string.big');
_dereq_('./modules/es6.string.blink');
_dereq_('./modules/es6.string.bold');
_dereq_('./modules/es6.string.fixed');
_dereq_('./modules/es6.string.fontcolor');
_dereq_('./modules/es6.string.fontsize');
_dereq_('./modules/es6.string.italics');
_dereq_('./modules/es6.string.link');
_dereq_('./modules/es6.string.small');
_dereq_('./modules/es6.string.strike');
_dereq_('./modules/es6.string.sub');
_dereq_('./modules/es6.string.sup');
_dereq_('./modules/es6.date.now');
_dereq_('./modules/es6.date.to-json');
_dereq_('./modules/es6.date.to-iso-string');
_dereq_('./modules/es6.date.to-string');
_dereq_('./modules/es6.date.to-primitive');
_dereq_('./modules/es6.array.is-array');
_dereq_('./modules/es6.array.from');
_dereq_('./modules/es6.array.of');
_dereq_('./modules/es6.array.join');
_dereq_('./modules/es6.array.slice');
_dereq_('./modules/es6.array.sort');
_dereq_('./modules/es6.array.for-each');
_dereq_('./modules/es6.array.map');
_dereq_('./modules/es6.array.filter');
_dereq_('./modules/es6.array.some');
_dereq_('./modules/es6.array.every');
_dereq_('./modules/es6.array.reduce');
_dereq_('./modules/es6.array.reduce-right');
_dereq_('./modules/es6.array.index-of');
_dereq_('./modules/es6.array.last-index-of');
_dereq_('./modules/es6.array.copy-within');
_dereq_('./modules/es6.array.fill');
_dereq_('./modules/es6.array.find');
_dereq_('./modules/es6.array.find-index');
_dereq_('./modules/es6.array.species');
_dereq_('./modules/es6.array.iterator');
_dereq_('./modules/es6.regexp.constructor');
_dereq_('./modules/es6.regexp.to-string');
_dereq_('./modules/es6.regexp.flags');
_dereq_('./modules/es6.regexp.match');
_dereq_('./modules/es6.regexp.replace');
_dereq_('./modules/es6.regexp.search');
_dereq_('./modules/es6.regexp.split');
_dereq_('./modules/es6.promise');
_dereq_('./modules/es6.map');
_dereq_('./modules/es6.set');
_dereq_('./modules/es6.weak-map');
_dereq_('./modules/es6.weak-set');
_dereq_('./modules/es6.typed.array-buffer');
_dereq_('./modules/es6.typed.data-view');
_dereq_('./modules/es6.typed.int8-array');
_dereq_('./modules/es6.typed.uint8-array');
_dereq_('./modules/es6.typed.uint8-clamped-array');
_dereq_('./modules/es6.typed.int16-array');
_dereq_('./modules/es6.typed.uint16-array');
_dereq_('./modules/es6.typed.int32-array');
_dereq_('./modules/es6.typed.uint32-array');
_dereq_('./modules/es6.typed.float32-array');
_dereq_('./modules/es6.typed.float64-array');
_dereq_('./modules/es6.reflect.apply');
_dereq_('./modules/es6.reflect.construct');
_dereq_('./modules/es6.reflect.define-property');
_dereq_('./modules/es6.reflect.delete-property');
_dereq_('./modules/es6.reflect.enumerate');
_dereq_('./modules/es6.reflect.get');
_dereq_('./modules/es6.reflect.get-own-property-descriptor');
_dereq_('./modules/es6.reflect.get-prototype-of');
_dereq_('./modules/es6.reflect.has');
_dereq_('./modules/es6.reflect.is-extensible');
_dereq_('./modules/es6.reflect.own-keys');
_dereq_('./modules/es6.reflect.prevent-extensions');
_dereq_('./modules/es6.reflect.set');
_dereq_('./modules/es6.reflect.set-prototype-of');
_dereq_('./modules/es7.array.includes');
_dereq_('./modules/es7.string.at');
_dereq_('./modules/es7.string.pad-start');
_dereq_('./modules/es7.string.pad-end');
_dereq_('./modules/es7.string.trim-left');
_dereq_('./modules/es7.string.trim-right');
_dereq_('./modules/es7.string.match-all');
_dereq_('./modules/es7.symbol.async-iterator');
_dereq_('./modules/es7.symbol.observable');
_dereq_('./modules/es7.object.get-own-property-descriptors');
_dereq_('./modules/es7.object.values');
_dereq_('./modules/es7.object.entries');
_dereq_('./modules/es7.object.define-getter');
_dereq_('./modules/es7.object.define-setter');
_dereq_('./modules/es7.object.lookup-getter');
_dereq_('./modules/es7.object.lookup-setter');
_dereq_('./modules/es7.map.to-json');
_dereq_('./modules/es7.set.to-json');
_dereq_('./modules/es7.system.global');
_dereq_('./modules/es7.error.is-error');
_dereq_('./modules/es7.math.iaddh');
_dereq_('./modules/es7.math.isubh');
_dereq_('./modules/es7.math.imulh');
_dereq_('./modules/es7.math.umulh');
_dereq_('./modules/es7.reflect.define-metadata');
_dereq_('./modules/es7.reflect.delete-metadata');
_dereq_('./modules/es7.reflect.get-metadata');
_dereq_('./modules/es7.reflect.get-metadata-keys');
_dereq_('./modules/es7.reflect.get-own-metadata');
_dereq_('./modules/es7.reflect.get-own-metadata-keys');
_dereq_('./modules/es7.reflect.has-metadata');
_dereq_('./modules/es7.reflect.has-own-metadata');
_dereq_('./modules/es7.reflect.metadata');
_dereq_('./modules/es7.asap');
_dereq_('./modules/es7.observable');
_dereq_('./modules/web.timers');
_dereq_('./modules/web.immediate');
_dereq_('./modules/web.dom.iterable');
module.exports = _dereq_('./modules/_core');
},{"./modules/_core":23,"./modules/es6.array.copy-within":120,"./modules/es6.array.every":121,"./modules/es6.array.fill":122,"./modules/es6.array.filter":123,"./modules/es6.array.find":125,"./modules/es6.array.find-index":124,"./modules/es6.array.for-each":126,"./modules/es6.array.from":127,"./modules/es6.array.index-of":128,"./modules/es6.array.is-array":129,"./modules/es6.array.iterator":130,"./modules/es6.array.join":131,"./modules/es6.array.last-index-of":132,"./modules/es6.array.map":133,"./modules/es6.array.of":134,"./modules/es6.array.reduce":136,"./modules/es6.array.reduce-right":135,"./modules/es6.array.slice":137,"./modules/es6.array.some":138,"./modules/es6.array.sort":139,"./modules/es6.array.species":140,"./modules/es6.date.now":141,"./modules/es6.date.to-iso-string":142,"./modules/es6.date.to-json":143,"./modules/es6.date.to-primitive":144,"./modules/es6.date.to-string":145,"./modules/es6.function.bind":146,"./modules/es6.function.has-instance":147,"./modules/es6.function.name":148,"./modules/es6.map":149,"./modules/es6.math.acosh":150,"./modules/es6.math.asinh":151,"./modules/es6.math.atanh":152,"./modules/es6.math.cbrt":153,"./modules/es6.math.clz32":154,"./modules/es6.math.cosh":155,"./modules/es6.math.expm1":156,"./modules/es6.math.fround":157,"./modules/es6.math.hypot":158,"./modules/es6.math.imul":159,"./modules/es6.math.log10":160,"./modules/es6.math.log1p":161,"./modules/es6.math.log2":162,"./modules/es6.math.sign":163,"./modules/es6.math.sinh":164,"./modules/es6.math.tanh":165,"./modules/es6.math.trunc":166,"./modules/es6.number.constructor":167,"./modules/es6.number.epsilon":168,"./modules/es6.number.is-finite":169,"./modules/es6.number.is-integer":170,"./modules/es6.number.is-nan":171,"./modules/es6.number.is-safe-integer":172,"./modules/es6.number.max-safe-integer":173,"./modules/es6.number.min-safe-integer":174,"./modules/es6.number.parse-float":175,"./modules/es6.number.parse-int":176,"./modules/es6.number.to-fixed":177,"./modules/es6.number.to-precision":178,"./modules/es6.object.assign":179,"./modules/es6.object.create":180,"./modules/es6.object.define-properties":181,"./modules/es6.object.define-property":182,"./modules/es6.object.freeze":183,"./modules/es6.object.get-own-property-descriptor":184,"./modules/es6.object.get-own-property-names":185,"./modules/es6.object.get-prototype-of":186,"./modules/es6.object.is":190,"./modules/es6.object.is-extensible":187,"./modules/es6.object.is-frozen":188,"./modules/es6.object.is-sealed":189,"./modules/es6.object.keys":191,"./modules/es6.object.prevent-extensions":192,"./modules/es6.object.seal":193,"./modules/es6.object.set-prototype-of":194,"./modules/es6.object.to-string":195,"./modules/es6.parse-float":196,"./modules/es6.parse-int":197,"./modules/es6.promise":198,"./modules/es6.reflect.apply":199,"./modules/es6.reflect.construct":200,"./modules/es6.reflect.define-property":201,"./modules/es6.reflect.delete-property":202,"./modules/es6.reflect.enumerate":203,"./modules/es6.reflect.get":206,"./modules/es6.reflect.get-own-property-descriptor":204,"./modules/es6.reflect.get-prototype-of":205,"./modules/es6.reflect.has":207,"./modules/es6.reflect.is-extensible":208,"./modules/es6.reflect.own-keys":209,"./modules/es6.reflect.prevent-extensions":210,"./modules/es6.reflect.set":212,"./modules/es6.reflect.set-prototype-of":211,"./modules/es6.regexp.constructor":213,"./modules/es6.regexp.flags":214,"./modules/es6.regexp.match":215,"./modules/es6.regexp.replace":216,"./modules/es6.regexp.search":217,"./modules/es6.regexp.split":218,"./modules/es6.regexp.to-string":219,"./modules/es6.set":220,"./modules/es6.string.anchor":221,"./modules/es6.string.big":222,"./modules/es6.string.blink":223,"./modules/es6.string.bold":224,"./modules/es6.string.code-point-at":225,"./modules/es6.string.ends-with":226,"./modules/es6.string.fixed":227,"./modules/es6.string.fontcolor":228,"./modules/es6.string.fontsize":229,"./modules/es6.string.from-code-point":230,"./modules/es6.string.includes":231,"./modules/es6.string.italics":232,"./modules/es6.string.iterator":233,"./modules/es6.string.link":234,"./modules/es6.string.raw":235,"./modules/es6.string.repeat":236,"./modules/es6.string.small":237,"./modules/es6.string.starts-with":238,"./modules/es6.string.strike":239,"./modules/es6.string.sub":240,"./modules/es6.string.sup":241,"./modules/es6.string.trim":242,"./modules/es6.symbol":243,"./modules/es6.typed.array-buffer":244,"./modules/es6.typed.data-view":245,"./modules/es6.typed.float32-array":246,"./modules/es6.typed.float64-array":247,"./modules/es6.typed.int16-array":248,"./modules/es6.typed.int32-array":249,"./modules/es6.typed.int8-array":250,"./modules/es6.typed.uint16-array":251,"./modules/es6.typed.uint32-array":252,"./modules/es6.typed.uint8-array":253,"./modules/es6.typed.uint8-clamped-array":254,"./modules/es6.weak-map":255,"./modules/es6.weak-set":256,"./modules/es7.array.includes":257,"./modules/es7.asap":258,"./modules/es7.error.is-error":259,"./modules/es7.map.to-json":260,"./modules/es7.math.iaddh":261,"./modules/es7.math.imulh":262,"./modules/es7.math.isubh":263,"./modules/es7.math.umulh":264,"./modules/es7.object.define-getter":265,"./modules/es7.object.define-setter":266,"./modules/es7.object.entries":267,"./modules/es7.object.get-own-property-descriptors":268,"./modules/es7.object.lookup-getter":269,"./modules/es7.object.lookup-setter":270,"./modules/es7.object.values":271,"./modules/es7.observable":272,"./modules/es7.reflect.define-metadata":273,"./modules/es7.reflect.delete-metadata":274,"./modules/es7.reflect.get-metadata":276,"./modules/es7.reflect.get-metadata-keys":275,"./modules/es7.reflect.get-own-metadata":278,"./modules/es7.reflect.get-own-metadata-keys":277,"./modules/es7.reflect.has-metadata":279,"./modules/es7.reflect.has-own-metadata":280,"./modules/es7.reflect.metadata":281,"./modules/es7.set.to-json":282,"./modules/es7.string.at":283,"./modules/es7.string.match-all":284,"./modules/es7.string.pad-end":285,"./modules/es7.string.pad-start":286,"./modules/es7.string.trim-left":287,"./modules/es7.string.trim-right":288,"./modules/es7.symbol.async-iterator":289,"./modules/es7.symbol.observable":290,"./modules/es7.system.global":291,"./modules/web.dom.iterable":292,"./modules/web.immediate":293,"./modules/web.timers":294}],296:[function(_dereq_,module,exports){
'use strict';

// shim for using process in browser

var process = module.exports = {};

process.nextTick = function () {
    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

    if (canSetImmediate) {
        return function (f) {
            return window.setImmediate(f);
        };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
}();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
},{}],297:[function(_dereq_,module,exports){
(function (process,global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
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
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

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
        if (delegate.iterator.return) {
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
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

    if (!info) {
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

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function () {
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

  runtime.keys = function (object) {
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
        var i = -1,
            next = function next() {
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
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
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
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
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

        return !!caught;
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

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
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

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
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

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
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
}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
}).call(this,_dereq_("qC859L"),typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {})
},{"qC859L":296}],298:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var core = _dereq_('./core/core');

var defaultPredicate = _dereq_('./methods/defaultPredicate');
var defaultSelector = _dereq_('./methods/defaultSelector');
var defaultEqualityComparer = _dereq_('./methods/defaultEqualityComparer');
var defaultComparer = _dereq_('./methods/defaultComparer');
var defaultGroupResultSelector = _dereq_('./methods/defaultGroupResultSelector');
var defaultKeySelector = _dereq_('./methods/defaultKeySelector');
var defaultValueSelector = _dereq_('./methods/defaultValueSelector');
var defaultAction = _dereq_('./methods/defaultAction');

var _arrayComparer = _dereq_('./methods/arrayComparer');
var _predicateComparer = _dereq_('./methods/predicateComparer');

var NoSuchElementsException = _dereq_('./core/exceptions/NoSuchElementsException');
var OutOfRangeException = _dereq_('./core/exceptions/OutOfRangeException');
var TooManyElementsException = _dereq_('./core/exceptions/TooManyElementsException');
var KeysForMultiElementsException = _dereq_('./core/exceptions/KeysForMultiElementsException');

var Enumerable = function () {
    function Enumerable() {
        _classCallCheck(this, Enumerable);
    }

    _createClass(Enumerable, null, [{
        key: 'extends',
        value: function _extends(prototype, type) {
            core.defineProperties(prototype, {
                where: function where() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().where(predicate);
                },
                select: function select() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

                    return this.asEnumerable().select(selector);
                },
                elementAt: function elementAt(index) {
                    return this.asEnumerable().elementAt(index);
                },
                distinct: function distinct() {
                    var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;

                    return this.asEnumerable().distinct(comparer);
                },
                except: function except(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().except(other, comparer);
                },
                union: function union(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().union(other, comparer);
                },
                intersect: function intersect(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().intersect(other, comparer);
                },
                ofType: function ofType(type) {
                    return this.asEnumerable().ofType(type);
                },
                skip: function skip(count) {
                    return this.asEnumerable().skip(count);
                },
                skipWhile: function skipWhile() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

                    return this.asEnumerable().skipWhile(predicate);
                },
                take: function take(count) {
                    return this.asEnumerable().take(count);
                },
                takeWhile: function takeWhile() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

                    return this.asEnumerable().takeWhile(predicate);
                },
                orderBy: function orderBy() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().orderBy(keySelector, comparer);
                },
                orderByDescending: function orderByDescending() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().orderByDescending(keySelector, comparer);
                },
                groupBy: function groupBy() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                    var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGroupResultSelector;
                    var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

                    return this.asEnumerable().groupBy(keySelector, elementSelector, resultSelector, comparer);
                },
                selectMany: function selectMany() {
                    var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

                    return this.asEnumerable().selectMany(collectionSelector, resultSelector);
                },
                join: function join(inner) {
                    var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
                    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
                    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

                    return this.asEnumerable().join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
                },
                groupJoin: function groupJoin(inner, resultSelector) {
                    var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
                    var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
                    var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

                    return this.asEnumerable().groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
                },
                defaultIfEmpty: function defaultIfEmpty() {
                    return this.asEnumerable().defaultIfEmpty();
                },
                all: function all() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().all(predicate);
                },
                any: function any() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().any(predicate);
                },
                isEmpty: function isEmpty() {
                    return this.asEnumerable().isEmpty();
                },
                sequenceEqual: function sequenceEqual(other) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().sequenceEqual(other, comparer);
                },
                first: function first() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().first(predicate);
                },
                firstOrDefault: function firstOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().firstOrDefault(defaultValue, predicate);
                },
                last: function last() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().last(predicate);
                },
                lastOrDefault: function lastOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().lastOrDefault(defaultValue, predicate);
                },
                single: function single() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().single(predicate);
                },
                singleOrDefault: function singleOrDefault(defaultValue) {
                    var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

                    return this.asEnumerable().singleOrDefault(defaultValue, predicate);
                },
                count: function count() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().count(predicate);
                },
                sum: function sum() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().sum(predicate);
                },
                max: function max() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().max(selector, comparer);
                },
                min: function min() {
                    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                    return this.asEnumerable().min(selector, comparer);
                },
                average: function average() {
                    var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

                    return this.asEnumerable().average(predicate);
                },
                aggregate: function aggregate(seed, func) {
                    var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

                    return this.asEnumerable().aggregate(seed, func, selector);
                },
                contains: function contains(value) {
                    var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                    return this.asEnumerable().contains(value, comparer);
                },
                indexOf: function indexOf(value) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().indexOf(value, start, comparer);
                },
                findIndex: function findIndex(predicate) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                    return this.asEnumerable().findIndex(predicate, start);
                },
                lastIndexOf: function lastIndexOf(value) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().lastIndexOf(value, start, comparer);
                },
                findLastIndex: function findLastIndex(predicate) {
                    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                    return this.asEnumerable().findLastIndex(predicate, start);
                },
                reverse: function reverse() {
                    return this.asEnumerable().reverse();
                },
                zip: function zip(other, resultSelector) {
                    return this.asEnumerable().zip(other, resultSelector);
                },
                toArray: function toArray() {
                    return this.asEnumerable().toArray();
                },
                toObject: function toObject() {
                    var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                    var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                    var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                    return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer).toObject();
                },
                forEach: function forEach() {
                    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;

                    return this.asEnumerable().forEach(action);
                }
            });
            if (type !== 'string') {
                defineProperties(prototype, {
                    concat: function concat() {
                        var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                        return this.asEnumerable().concat(other);
                    }
                });
            }
            if (type !== 'object') {
                defineProperties(prototype, {
                    toDictionary: function toDictionary() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                    },
                    toLookup: function toLookup() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                    }
                });
            } else {
                defineProperties(prototype, {
                    toDictionary: function toDictionary() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toDictionary(keySelector, elementSelector, comparer);
                    },
                    toLookup: function toLookup() {
                        var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
                        var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
                        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                        return this.asEnumerable().toLookup(keySelector, elementSelector, comparer);
                    }
                });
            }
        }
    }, {
        key: 'getEnumerator',
        value: function getEnumerator(enumerable) {
            return new IEnumerator(enumerable);
        }
    }, {
        key: 'repeat',
        value: function repeat(element) {
            var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return new RepeatEnumerable(element, count);
        }
    }, {
        key: 'range',
        value: function range(start, count) {
            return new RangeEnumerable(start, count);
        }
    }, {
        key: 'empty',
        value: function empty() {
            return new EmptyEnumerable();
        }
    }, {
        key: 'asEnumerable',
        value: function asEnumerable(object) {
            return object.asEnumerable ? object.asEnumerable() : new IteratorEnumerable(object);
        }
    }, {
        key: 'toArray',
        value: function toArray(source) {
            var array = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    array.push(element);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return array;
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var dictionary = new Dictionary(),
                index = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = source[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var element = _step2.value;

                    var key = keySelector(element, index);
                    if (dictionary.has(key, comparer)) {
                        throw KeysForMultiElementsException;
                    } else {
                        dictionary.set(key, elementSelector(element, index), comparer);
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return dictionary;
        }
    }, {
        key: 'toLookup',
        value: function toLookup(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var lookup = new Lookup(),
                index = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = source[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var element = _step3.value;

                    var key = keySelector(element, index);
                    if (lookup.has(key, comparer)) {
                        lookup.get(key, comparer).push(elementSelector(element, index));
                    } else {
                        lookup.set(key, [elementSelector(element, index)], comparer);
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return lookup;
        }
    }, {
        key: 'where',
        value: function where(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new WhereEnumerable(source, predicate);
        }
    }, {
        key: 'select',
        value: function select(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            return new SelectEnumerable(source, selector);
        }
    }, {
        key: 'concat',
        value: function concat(source) {
            var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            return new ConcatEnumerable(source, other);
        }
    }, {
        key: 'distinct',
        value: function distinct(source) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return new DistinctEnumerable(source, comparer);
        }
    }, {
        key: 'except',
        value: function except(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new ExceptEnumerable(source, other, comparer);
        }
    }, {
        key: 'union',
        value: function union(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new UnionEnumerable(source, other, comparer);
        }
    }, {
        key: 'intersect',
        value: function intersect(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return new IntersectEnumerable(source, other, comparer);
        }
    }, {
        key: 'ofType',
        value: function ofType(source, type) {
            return new OfTypeEnumerable(source, type);
        }
    }, {
        key: 'skip',
        value: function skip(source, count) {
            return new SkipEnumerable(source, count);
        }
    }, {
        key: 'skipWhile',
        value: function skipWhile(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new SkipWhileEnumerable(source, predicate);
        }
    }, {
        key: 'take',
        value: function take(source, count) {
            return new TakeEnumerable(source, count);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return new TakeWhileEnumerable(source, predicate);
        }
    }, {
        key: 'orderBy',
        value: function orderBy(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            return new OrderByEnumerable(source, keySelector, comparer);
        }
    }, {
        key: 'orderByDescending',
        value: function orderByDescending(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            return new OrderByDescendingEnumerable(source, keySelector, comparer);
        }
    }, {
        key: 'thenBy',
        value: function thenBy(orderedSource) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            if (orderedSource instanceof IOrderedEnumerable) {
                return new ThenByEnumerable(orderedSource, keySelector, comparer);
            } else {
                return new OrderByEnumerable(orderedSource, keySelector, comparer);
            }
        }
    }, {
        key: 'thenByDescending',
        value: function thenByDescending(orderedSource) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            if (orderedSource instanceof IOrderedEnumerable) {
                return new ThenByDescendingEnumerable(orderedSource, keySelector, comparer);
            } else {
                return new OrderByDescendingEnumerable(orderedSource, keySelector, comparer);
            }
        }
    }, {
        key: 'groupBy',
        value: function groupBy(source) {
            var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultGroupResultSelector;
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return new GroupingEnumerable(source, keySelector, elementSelector, resultSelector, comparer);
        }
    }, {
        key: 'selectMany',
        value: function selectMany(source) {
            var collectionSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

            return new SelectManyEnumerable(source, collectionSelector, resultSelector);
        }
    }, {
        key: 'join',
        value: function join(outer, inner) {
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
            var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

            if (typeof resultSelector === 'undefined' && core.array$join) {
                if (outer instanceof IEnumerable) {
                    return core.array$join.call(outer.toArray(), inner);
                } else {
                    return core.array$join.call(outer, inner);
                }
            } else {
                return new JoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
            }
        }
    }, {
        key: 'groupJoin',
        value: function groupJoin(outer, inner, resultSelector) {
            var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
            var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

            return new GroupJoinEnumerable(outer, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }, {
        key: 'reverse',
        value: function reverse(source) {
            return new ReverseEnumerable(source);
        }
    }, {
        key: 'zip',
        value: function zip(source, other, resultSelector) {
            return new ZipEnumerable(source, other, resultSelector);
        }
    }, {
        key: 'defaultIfEmpty',
        value: function defaultIfEmpty(source, defaultValue) {
            return Enumerable.isEmpty(source) ? new SingleEnumerable(defaultValue) : source;
        }
    }, {
        key: 'all',
        value: function all(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = source[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var element = _step4.value;

                    if (!predicate(element, index++)) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return true;
        }
    }, {
        key: 'any',
        value: function any(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = source[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var element = _step5.value;

                    if (predicate(element, index++)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(source) {
            return !Enumerable.any(source);
        }
    }, {
        key: 'sequenceEqual',
        value: function sequenceEqual(source, other) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            var sourceIterator = source[Symbol.iterator]();
            var otherIterator = other[Symbol.iterator]();
            var sourceElement = void 0,
                otherElement = void 0;
            do {
                sourceElement = sourceIterator.next();
                otherElement = otherIterator.next();
                if (sourceElement.done != otherElement.done) {
                    return false;
                } else if (!comparer(sourceElement.value, otherElement.value)) {
                    return false;
                }
            } while (!(sourceElement.done && otherElement.done));
            return true;
        }
    }, {
        key: 'first',
        value: function first(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = source[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var element = _step6.value;

                    if (predicate(element, index++)) {
                        return element;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            throw NoSuchElementsException;
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var index = 0;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = source[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var element = _step7.value;

                    if (predicate(element, index++)) {
                        return element;
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            return defaultValue;
        }
    }, {
        key: 'last',
        value: function last(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var last = void 0,
                has = false,
                index = 0;
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = source[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var element = _step8.value;

                    if (predicate(element, index++)) {
                        last = element;
                        has = true;
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            if (has) {
                return last;
            } else {
                throw NoSuchElementsException;
            }
        }
    }, {
        key: 'lastOrDefault',
        value: function lastOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var last = void 0,
                has = false,
                index = 0;
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = source[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var element = _step9.value;

                    if (predicate(element, index++)) {
                        last = element;
                        has = true;
                    }
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            if (has) {
                return last;
            } else {
                return defaultValue;
            }
        }
    }, {
        key: 'single',
        value: function single(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var single = void 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = source[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var element = _step10.value;

                    if (predicate(element, index++)) {
                        single = element;
                        count++;
                        if (count >= 2) {
                            break;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            if (count == 1) {
                return single;
            } else if (count == 0) {
                throw NoSuchElementsException;
            } else {
                throw TooManyElementsException;
            }
        }
    }, {
        key: 'singleOrDefault',
        value: function singleOrDefault(source, defaultValue) {
            var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPredicate;

            var single = void 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = source[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var element = _step11.value;

                    if (predicate(element, index++)) {
                        single = element;
                        count++;
                        if (count >= 2) {
                            break;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            if (count == 1) {
                return single;
            } else if (count == 0) {
                return defaultValue;
            } else {
                throw TooManyElementsException;
            }
        }
    }, {
        key: 'count',
        value: function count(source) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            var count = 0,
                index = 0;
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = source[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var element = _step12.value;

                    if (predicate(element, index++)) {
                        count++;
                    }
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            return count;
        }
    }, {
        key: 'aggregate',
        value: function aggregate(source, seed, func) {
            var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;

            var index = 0;
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = source[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var element = _step13.value;

                    seed = func(seed, element, index++);
                }
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                        _iterator13.return();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            return resultSelector(seed);
        }
    }, {
        key: 'sum',
        value: function sum(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            var sum = 0,
                index = 0;
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = source[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var element = _step14.value;

                    sum += parseFloat(selector(element, index++));
                }
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
                        _iterator14.return();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }

            return sum;
        }
    }, {
        key: 'max',
        value: function max(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            var max = false,
                first = true,
                index = 0;
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
                for (var _iterator15 = source[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    var element = _step15.value;

                    element = selector(element, index++);
                    if (first) {
                        max = element;
                    } else {
                        max = comparer(max, element) > 0 ? max : element;
                    }
                }
            } catch (err) {
                _didIteratorError15 = true;
                _iteratorError15 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion15 && _iterator15.return) {
                        _iterator15.return();
                    }
                } finally {
                    if (_didIteratorError15) {
                        throw _iteratorError15;
                    }
                }
            }

            if (first) {
                throw NoSuchElementsException;
            } else {
                return max;
            }
        }
    }, {
        key: 'min',
        value: function min(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

            var min = false,
                first = true,
                index = 0;
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
                for (var _iterator16 = source[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var element = _step16.value;

                    element = selector(element, index++);
                    if (first) {
                        min = element;
                    } else {
                        min = comparer(min, element) < 0 ? min : element;
                    }
                }
            } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion16 && _iterator16.return) {
                        _iterator16.return();
                    }
                } finally {
                    if (_didIteratorError16) {
                        throw _iteratorError16;
                    }
                }
            }

            if (first) {
                throw NoSuchElementsException;
            } else {
                return min;
            }
        }
    }, {
        key: 'average',
        value: function average(source) {
            var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            var sum = 0,
                count = 0,
                index = 0;
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
                for (var _iterator17 = source[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                    var element = _step17.value;

                    sum += parseFloat(selector(element, index++));
                    count++;
                }
            } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion17 && _iterator17.return) {
                        _iterator17.return();
                    }
                } finally {
                    if (_didIteratorError17) {
                        throw _iteratorError17;
                    }
                }
            }

            if (count != 0) {
                return sum / count;
            } else {
                throw NoSuchElementsException;
            }
        }
    }, {
        key: 'contains',
        value: function contains(source, value) {
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                for (var _iterator18 = source[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var element = _step18.value;

                    if (comparer(element, value)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                        _iterator18.return();
                    }
                } finally {
                    if (_didIteratorError18) {
                        throw _iteratorError18;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'elementAt',
        value: function elementAt(source, index) {
            if (index >= 0) {
                var _iteratorNormalCompletion19 = true;
                var _didIteratorError19 = false;
                var _iteratorError19 = undefined;

                try {
                    for (var _iterator19 = source[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                        var element = _step19.value;

                        if (index-- == 0) {
                            return element;
                        }
                    }
                } catch (err) {
                    _didIteratorError19 = true;
                    _iteratorError19 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion19 && _iterator19.return) {
                            _iterator19.return();
                        }
                    } finally {
                        if (_didIteratorError19) {
                            throw _iteratorError19;
                        }
                    }
                }
            }
            throw OutOfRangeException;
        }
    }, {
        key: 'elementAtOrDefault',
        value: function elementAtOrDefault(source, index, defaultValue) {
            if (index >= 0) {
                var _iteratorNormalCompletion20 = true;
                var _didIteratorError20 = false;
                var _iteratorError20 = undefined;

                try {
                    for (var _iterator20 = source[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                        var element = _step20.value;

                        if (index-- == 0) {
                            return element;
                        }
                    }
                } catch (err) {
                    _didIteratorError20 = true;
                    _iteratorError20 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion20 && _iterator20.return) {
                            _iterator20.return();
                        }
                    } finally {
                        if (_didIteratorError20) {
                            throw _iteratorError20;
                        }
                    }
                }
            }
            return defaultValue;
        }
    }, {
        key: 'indexOf',
        value: function indexOf(source, value) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var index = 0;
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                for (var _iterator21 = source[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    var element = _step21.value;

                    if (index >= start && comparer(element, value)) {
                        return index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion21 && _iterator21.return) {
                        _iterator21.return();
                    }
                } finally {
                    if (_didIteratorError21) {
                        throw _iteratorError21;
                    }
                }
            }

            return -1;
        }
    }, {
        key: 'findIndex',
        value: function findIndex(source, predicate) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var index = 0;
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
                for (var _iterator22 = source[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var element = _step22.value;

                    if (index >= start && predicate(element, index)) {
                        return index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError22 = true;
                _iteratorError22 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion22 && _iterator22.return) {
                        _iterator22.return();
                    }
                } finally {
                    if (_didIteratorError22) {
                        throw _iteratorError22;
                    }
                }
            }

            return -1;
        }
    }, {
        key: 'lastIndexOf',
        value: function lastIndexOf(source, value) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            var index = 0,
                lastIndex = -1;
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
                for (var _iterator23 = source[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                    var element = _step23.value;

                    if (index >= start && comparer(element, value)) {
                        lastIndex = index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion23 && _iterator23.return) {
                        _iterator23.return();
                    }
                } finally {
                    if (_didIteratorError23) {
                        throw _iteratorError23;
                    }
                }
            }

            return lastIndex;
        }
    }, {
        key: 'findLastIndex',
        value: function findLastIndex(source, predicate) {
            var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var index = 0,
                lastIndex = -1;
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
                for (var _iterator24 = source[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                    var element = _step24.value;

                    if (index >= start && predicate(element, index)) {
                        lastIndex = index;
                    }
                    index++;
                }
            } catch (err) {
                _didIteratorError24 = true;
                _iteratorError24 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion24 && _iterator24.return) {
                        _iterator24.return();
                    }
                } finally {
                    if (_didIteratorError24) {
                        throw _iteratorError24;
                    }
                }
            }

            return lastIndex;
        }
    }, {
        key: 'forEach',
        value: function forEach(source) {
            var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAction;

            var index = 0;
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
                for (var _iterator25 = source[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                    var element = _step25.value;

                    action(element, index++);
                }
            } catch (err) {
                _didIteratorError25 = true;
                _iteratorError25 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion25 && _iterator25.return) {
                        _iterator25.return();
                    }
                } finally {
                    if (_didIteratorError25) {
                        throw _iteratorError25;
                    }
                }
            }
        }
    }, {
        key: 'arrayComparer',
        value: function arrayComparer(array) {
            var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return _arrayComparer(array, last, comparer);
        }
    }, {
        key: 'predicateComparer',
        value: function predicateComparer(predicateArray) {
            var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return _predicateComparer(predicateArray, last);
        }
    }]);

    return Enumerable;
}();

;

module.exports = Enumerable;

var IEnumerator = _dereq_('./IEnumerator');

var IEnumerable = _dereq_('./IEnumerable');
var RepeatEnumerable = _dereq_('./enumerables/RepeatEnumerable');
var RangeEnumerable = _dereq_('./enumerables/RangeEnumerable');
var EmptyEnumerable = _dereq_('./enumerables/EmptyEnumerable');
var IteratorEnumerable = _dereq_('./enumerables/IteratorEnumerable');
var WhereEnumerable = _dereq_('./enumerables/WhereEnumerable');
var SelectEnumerable = _dereq_('./enumerables/SelectEnumerable');
var ConcatEnumerable = _dereq_('./enumerables/ConcatEnumerable');
var DistinctEnumerable = _dereq_('./enumerables/DistinctEnumerable');
var ExceptEnumerable = _dereq_('./enumerables/ExceptEnumerable');
var UnionEnumerable = _dereq_('./enumerables/UnionEnumerable');
var IntersectEnumerable = _dereq_('./enumerables/IntersectEnumerable');
var OfTypeEnumerable = _dereq_('./enumerables/OfTypeEnumerable');
var SkipEnumerable = _dereq_('./enumerables/SkipEnumerable');
var SkipWhileEnumerable = _dereq_('./enumerables/SkipWhileEnumerable');
var TakeEnumerable = _dereq_('./enumerables/TakeEnumerable');
var TakeWhileEnumerable = _dereq_('./enumerables/TakeWhileEnumerable');
var IOrderedEnumerable = _dereq_('./enumerables/IOrderedEnumerable');
var OrderByEnumerable = _dereq_('./enumerables/OrderByEnumerable');
var OrderByDescendingEnumerable = _dereq_('./enumerables/OrderByDescendingEnumerable');
var ThenByEnumerable = _dereq_('./enumerables/ThenByEnumerable');
var ThenByDescendingEnumerable = _dereq_('./enumerables/ThenByDescendingEnumerable');
var GroupingEnumerable = _dereq_('./enumerables/GroupingEnumerable');
var SelectManyEnumerable = _dereq_('./enumerables/SelectManyEnumerable');
var JoinEnumerable = _dereq_('./enumerables/JoinEnumerable');
var GroupJoinEnumerable = _dereq_('./enumerables/GroupJoinEnumerable');
var ReverseEnumerable = _dereq_('./enumerables/ReverseEnumerable');
var ZipEnumerable = _dereq_('./enumerables/ZipEnumerable');
var SingleEnumerable = _dereq_('./enumerables/SingleEnumerable');
var Dictionary = _dereq_('./enumerables/Dictionary');
var Lookup = _dereq_('./enumerables/Lookup');
},{"./IEnumerable":299,"./IEnumerator":300,"./core/core":303,"./core/exceptions/KeysForMultiElementsException":304,"./core/exceptions/NoSuchElementsException":305,"./core/exceptions/OutOfRangeException":306,"./core/exceptions/TooManyElementsException":307,"./enumerables/ConcatEnumerable":309,"./enumerables/Dictionary":310,"./enumerables/DistinctEnumerable":311,"./enumerables/EmptyEnumerable":312,"./enumerables/ExceptEnumerable":314,"./enumerables/GroupJoinEnumerable":315,"./enumerables/GroupingEnumerable":316,"./enumerables/IOrderedEnumerable":319,"./enumerables/IntersectEnumerable":320,"./enumerables/IteratorEnumerable":321,"./enumerables/JoinEnumerable":322,"./enumerables/Lookup":323,"./enumerables/OfTypeEnumerable":326,"./enumerables/OrderByDescendingEnumerable":327,"./enumerables/OrderByEnumerable":328,"./enumerables/RangeEnumerable":329,"./enumerables/RepeatEnumerable":330,"./enumerables/ReverseEnumerable":331,"./enumerables/SelectEnumerable":332,"./enumerables/SelectManyEnumerable":333,"./enumerables/SingleEnumerable":334,"./enumerables/SkipEnumerable":335,"./enumerables/SkipWhileEnumerable":336,"./enumerables/TakeEnumerable":338,"./enumerables/TakeWhileEnumerable":339,"./enumerables/ThenByDescendingEnumerable":340,"./enumerables/ThenByEnumerable":341,"./enumerables/UnionEnumerable":342,"./enumerables/WhereEnumerable":343,"./enumerables/ZipEnumerable":344,"./methods/arrayComparer":349,"./methods/defaultAction":350,"./methods/defaultComparer":351,"./methods/defaultEqualityComparer":352,"./methods/defaultGroupResultSelector":353,"./methods/defaultKeySelector":354,"./methods/defaultPredicate":355,"./methods/defaultSelector":356,"./methods/defaultValueSelector":357,"./methods/predicateComparer":360}],299:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var core = _dereq_('./core/core');

var defaultPredicate = _dereq_('./methods/defaultPredicate');
var defaultSelector = _dereq_('./methods/defaultSelector');
var defaultEqualityComparer = _dereq_('./methods/defaultEqualityComparer');
var defaultComparer = _dereq_('./methods/defaultComparer');
var defaultGroupResultSelector = _dereq_('./methods/defaultGroupResultSelector');
var defaultKeySelector = _dereq_('./methods/defaultKeySelector');
var defaultValueSelector = _dereq_('./methods/defaultValueSelector');
var defaultAction = _dereq_('./methods/defaultAction');

var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

var IEnumerable = function () {
    function IEnumerable(source) {
        _classCallCheck(this, IEnumerable);

        var type = source instanceof String || typeof source === 'string' ? 'string' : source instanceof Array || core.getType(source).endsWith(' Iterator') ? 'array' : source instanceof IEnumerable ? 'enumerable' : 'object';
        core.defineProperty(this, Symbol.toStringTag, 'IEnumerable');
        core.defineProperties(this, {
            getProtoType: function getProtoType() {
                return type === 'enumerable' ? source.getProtoType() : type;
            },
            toString: function toString() {
                return type === 'string' ? Enumerable.join(this, '') : type === 'array' ? '[' + Enumerable.join(this, ',') + ']' : type === 'enumerable' ? source.toString.call(this) : '[' + Enumerable.join(this, ',') + ']';
            }
        });
        if (hasProxy) {
            return new Proxy(this, {
                get: function get(target, prop) {
                    if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                        return target.elementAtOrDefault(prop);
                    } else {
                        return target[prop];
                    }
                },
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
                    if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) !== 'symbol' && !isNaN(prop) && parseInt(prop) == prop && !(prop in target)) {
                        return { writable: false, enumerable: true, configurable: true };
                    } else {
                        return Object.getOwnPropertyDescriptor(target, prop);
                    }
                },
                ownKeys: function ownKeys(target) {
                    return Enumerable.range(0, target.count()).select(function (i) {
                        return String(i);
                    }).concat(Reflect.ownKeys(target)).toArray();
                }
            });
        }
    }

    _createClass(IEnumerable, [{
        key: 'getEnumerator',
        value: function getEnumerator() {
            return Enumerable.getEnumerator(this);
        }
    }, {
        key: 'where',
        value: function where() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.where(this, predicate);
        }
    }, {
        key: 'select',
        value: function select() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

            return Enumerable.select(this, selector);
        }
    }, {
        key: 'elementAt',
        value: function elementAt(index) {
            return Enumerable.elementAt(this, index);
        }
    }, {
        key: 'elementAtOrDefault',
        value: function elementAtOrDefault(index, defaultValue) {
            return Enumerable.elementAtOrDefault(this, index, defaultValue);
        }
    }, {
        key: 'asEnumerable',
        value: function asEnumerable() {
            return this;
        }
    }, {
        key: 'concat',
        value: function concat() {
            var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return Enumerable.concat(this, other);
        }
    }, {
        key: 'distinct',
        value: function distinct() {
            var comparer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqualityComparer;

            return Enumerable.distinct(this, comparer);
        }
    }, {
        key: 'except',
        value: function except(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.except(this, other, comparer);
        }
    }, {
        key: 'union',
        value: function union(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.union(this, other, comparer);
        }
    }, {
        key: 'intersect',
        value: function intersect(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.intersect(this, other, comparer);
        }
    }, {
        key: 'ofType',
        value: function ofType(type) {
            return Enumerable.ofType(this, type);
        }
    }, {
        key: 'skip',
        value: function skip(count) {
            return Enumerable.skip(this, count);
        }
    }, {
        key: 'skipWhile',
        value: function skipWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

            return Enumerable.skipWhile(this, predicate);
        }
    }, {
        key: 'take',
        value: function take(count) {
            return Enumerable.take(this, count);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate();

            return Enumerable.takeWhile(this, predicate);
        }
    }, {
        key: 'orderBy',
        value: function orderBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.orderBy(this, keySelector, comparer);
        }
    }, {
        key: 'orderByDescending',
        value: function orderByDescending() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.orderByDescending(this, keySelector, comparer);
        }
    }, {
        key: 'groupBy',
        value: function groupBy() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var resultSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGroupResultSelector;
            var comparer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultEqualityComparer;

            return Enumerable.groupBy(this, keySelector, elementSelector, resultSelector, comparer);
        }
    }, {
        key: 'selectMany',
        value: function selectMany() {
            var collectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

            return Enumerable.selectMany(this, collectionSelector, resultSelector);
        }
    }, {
        key: 'join',
        value: function join(inner) {
            var resultSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return Enumerable.join(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }, {
        key: 'groupJoin',
        value: function groupJoin(inner, resultSelector) {
            var outerKeySelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
            var innerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
            var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

            return Enumerable.groupJoin(this, inner, resultSelector, outerKeySelector, innerKeySelector, comparer);
        }
    }, {
        key: 'defaultIfEmpty',
        value: function defaultIfEmpty() {
            return Enumerable.defaultIfEmpty(this);
        }
    }, {
        key: 'all',
        value: function all() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.all(this, predicate);
        }
    }, {
        key: 'any',
        value: function any() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.any(this, predicate);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return Enumerable.isEmpty(this);
        }
    }, {
        key: 'sequenceEqual',
        value: function sequenceEqual(other) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.sequenceEqual(this, other, comparer);
        }
    }, {
        key: 'first',
        value: function first() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.first(this, predicate);
        }
    }, {
        key: 'firstOrDefault',
        value: function firstOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.firstOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'last',
        value: function last() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.last(this, predicate);
        }
    }, {
        key: 'lastOrDefault',
        value: function lastOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.lastOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'single',
        value: function single() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.single(this, predicate);
        }
    }, {
        key: 'singleOrDefault',
        value: function singleOrDefault(defaultValue) {
            var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

            return Enumerable.singleOrDefault(this, defaultValue, predicate);
        }
    }, {
        key: 'count',
        value: function count() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.count(this, predicate);
        }
    }, {
        key: 'sum',
        value: function sum() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.sum(this, predicate);
        }
    }, {
        key: 'max',
        value: function max() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.max(this, selector, comparer);
        }
    }, {
        key: 'min',
        value: function min() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

            return Enumerable.min(this, selector, comparer);
        }
    }, {
        key: 'average',
        value: function average() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPredicate;

            return Enumerable.average(this, predicate);
        }
    }, {
        key: 'aggregate',
        value: function aggregate(seed, func) {
            var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;

            return Enumerable.aggregate(this, seed, func, selector);
        }
    }, {
        key: 'contains',
        value: function contains(value) {
            var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

            return Enumerable.contains(this, value, comparer);
        }
    }, {
        key: 'indexOf',
        value: function indexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.indexOf(this, value, start, comparer);
        }
    }, {
        key: 'findIndex',
        value: function findIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return Enumerable.findIndex(this, predicate, start);
        }
    }, {
        key: 'lastIndexOf',
        value: function lastIndexOf(value) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.lastIndexOf(this, value, start, comparer);
        }
    }, {
        key: 'findLastIndex',
        value: function findLastIndex(predicate) {
            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return Enumerable.findLastIndex(this, predicate, start);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return Enumerable.reverse(this);
        }
    }, {
        key: 'zip',
        value: function zip(other, resultSelector) {
            return Enumerable.zip(this, other, resultSelector);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            return Enumerable.toArray(this);
        }
    }, {
        key: 'toObject',
        value: function toObject() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return this.toDictionary(keySelector, elementSelector, comparer).toObject();
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'toLookup',
        value: function toLookup() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'forEach',
        value: function forEach() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;

            return Enumerable.forEach(this, action);
        }
    }, {
        key: 'length',
        get: function get() {
            return this.count();
        }
    }, {
        key: 'size',
        get: function get() {
            return this.count();
        }
    }]);

    return IEnumerable;
}();

;

module.exports = IEnumerable;

var Enumerable = _dereq_('./Enumerable');
},{"./Enumerable":298,"./core/core":303,"./methods/defaultAction":350,"./methods/defaultComparer":351,"./methods/defaultEqualityComparer":352,"./methods/defaultGroupResultSelector":353,"./methods/defaultKeySelector":354,"./methods/defaultPredicate":355,"./methods/defaultSelector":356,"./methods/defaultValueSelector":357}],300:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var core = _dereq_('./core/core');

var IEnumerator = function IEnumerator(enumerable) {
	_classCallCheck(this, IEnumerator);

	var iterator = void 0;
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
				throw 'Should execute moveNext() before';
			}
		}
	});
	this.reset();
};

;

module.exports = IEnumerator;
},{"./core/core":303}],301:[function(_dereq_,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IComparable = function () {
	function IComparable() {
		_classCallCheck(this, IComparable);
	}

	_createClass(IComparable, [{
		key: "compare",
		value: function compare(other) {
			return 0;
		}
	}]);

	return IComparable;
}();

module.exports = IComparable;
},{}],302:[function(_dereq_,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IEquatable = function () {
	function IEquatable() {
		_classCallCheck(this, IEquatable);
	}

	_createClass(IEquatable, [{
		key: "equals",
		value: function equals(other) {
			return false;
		}
	}]);

	return IEquatable;
}();

;

module.exports = IEquatable;
},{}],303:[function(_dereq_,module,exports){
'use strict';

var core = {
	getType: function getType(value) {
		if (typeof value === 'undefined') {
			return 'Undefined';
		} else {
			var type = value[Symbol.toStringTag] || Object.prototype.toString.call(value).replace(/^\[\w+\s(.+)]$/ig, '$1');
			if (type === 'Object') {
				return Function.prototype.toString.call(value.constructor).replace(/^(function|class)\s+([^({\s]*)\s*[({].+$/ig, '$2');
			} else {
				return type;
			}
		}
	},
	conflict: function conflict(prototype, property) {
		if (prototype.hasOwnProperty(property)) {
			console.warn(property + ' already in ' + this.getType(prototype) + ', set original function to o$' + property);
			Object.defineProperty(prototype, "o$" + property, {
				enumerable: false,
				writable: true,
				configurable: true,
				value: prototype[property]
			});
		}
	},
	defineProperty: function defineProperty(prototype, property, value) {
		var isGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		this.conflict(prototype, property);
		if (isGet && value instanceof Function) {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				configurable: false,
				get: value
			});
		} else {
			Object.defineProperty(prototype, property, {
				enumerable: false,
				writable: true,
				configurable: false,
				value: value
			});
		}
	},
	defineProperties: function defineProperties(prototype, properties) {
		var _this = this;

		var _loop = function _loop(property) {
			if (properties.hasOwnProperty(property)) {
				_this.defineProperty(prototype, property, function () {
					return properties[property];
				}, true);
			}
		};

		for (var property in properties) {
			_loop(property);
		}
	},

	"array$join": Array.prototype.join,
	"array$indexOf": Array.prototype.indexOf,
	"array$lastIndexOf": Array.prototype.lastIndexOf,
	"array$findIndex": Array.prototype.findIndex,
	"string$indexOf": String.prototype.indexOf,
	"string$lastIndexOf": String.prototype.lastIndexOf
};

module.exports = core;
},{}],304:[function(_dereq_,module,exports){
'use strict';

module.exports = 'Keys for multi elements';
},{}],305:[function(_dereq_,module,exports){
'use strict';

module.exports = 'No such elements';
},{}],306:[function(_dereq_,module,exports){
'use strict';

module.exports = 'Out of range';
},{}],307:[function(_dereq_,module,exports){
'use strict';

module.exports = 'Too many elements';
},{}],308:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IteratorEnumerable = _dereq_('./IteratorEnumerable');

var core = _dereq_('./../core/core');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var Enumerable = _dereq_('./../Enumerable');

var ArrayEnumerable = function (_IteratorEnumerable) {
    _inherits(ArrayEnumerable, _IteratorEnumerable);

    function ArrayEnumerable(array) {
        _classCallCheck(this, ArrayEnumerable);

        var _this = _possibleConstructorReturn(this, (ArrayEnumerable.__proto__ || Object.getPrototypeOf(ArrayEnumerable)).call(this, array));

        core.defineProperties(_this, {
            indexOf: function indexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer && core.array$indexOf && isNaN(value)) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf: function lastIndexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer && core.array$lastIndexOf && isNaN(value)) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex: function findIndex(predicate) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                if (start === 0 && core.array$findIndex) {
                    return core.array$findIndex.call(array, predicate);
                } else {
                    return Enumerable.findIndex(this, predicate, start);
                }
            }
        });
        return _this;
    }

    return ArrayEnumerable;
}(IteratorEnumerable);

;

module.exports = ArrayEnumerable;
},{"./../Enumerable":298,"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./IteratorEnumerable":321}],309:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var ConcatEnumerable = function (_IEnumerable) {
    _inherits(ConcatEnumerable, _IEnumerable);

    function ConcatEnumerable(source) {
        var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, ConcatEnumerable);

        var _this = _possibleConstructorReturn(this, (ConcatEnumerable.__proto__ || Object.getPrototypeOf(ConcatEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.delegateYield(source, 't0', 1);

                        case 1:
                            return _context.delegateYield(other, 't1', 2);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ConcatEnumerable;
}(IEnumerable);

;

module.exports = ConcatEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],310:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapEnumerable = _dereq_('./MapEnumerable');

var Dictionary = function (_MapEnumerable) {
    _inherits(Dictionary, _MapEnumerable);

    function Dictionary() {
        _classCallCheck(this, Dictionary);

        return _possibleConstructorReturn(this, (Dictionary.__proto__ || Object.getPrototypeOf(Dictionary)).call(this, new Map()));
    }

    _createClass(Dictionary, [{
        key: 'toObject',
        value: function toObject() {
            var object = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    object[entry.key] = entry.value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return object;
        }
    }]);

    return Dictionary;
}(MapEnumerable);

;

module.exports = Dictionary;
},{"./MapEnumerable":324}],311:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var DistinctEnumerable = function (_IEnumerable) {
    _inherits(DistinctEnumerable, _IEnumerable);

    function DistinctEnumerable(source) {
        var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

        _classCallCheck(this, DistinctEnumerable);

        var _this = _possibleConstructorReturn(this, (DistinctEnumerable.__proto__ || Object.getPrototypeOf(DistinctEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

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

                            if (Enumerable.contains(temp, element, comparer)) {
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
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
        }));
        return _this;
    }

    return DistinctEnumerable;
}(IEnumerable);

;

module.exports = DistinctEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352}],312:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var EmptyEnumerable = function (_IEnumerable) {
    _inherits(EmptyEnumerable, _IEnumerable);

    function EmptyEnumerable() {
        _classCallCheck(this, EmptyEnumerable);

        var _this = _possibleConstructorReturn(this, (EmptyEnumerable.__proto__ || Object.getPrototypeOf(EmptyEnumerable)).call(this, []));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return EmptyEnumerable;
}(IEnumerable);

;

module.exports = EmptyEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],313:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = function () {
    function Entry(key, value) {
        _classCallCheck(this, Entry);

        this.key = key;
        this.value = value;
    }

    _createClass(Entry, [{
        key: 'toString',
        value: function toString() {
            return '{' + this.key + ':' + this.value + '}';
        }
    }]);

    return Entry;
}();

;

module.exports = Entry;
},{}],314:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var ExceptEnumerable = function (_IEnumerable) {
    _inherits(ExceptEnumerable, _IEnumerable);

    function ExceptEnumerable(source, other) {
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

        _classCallCheck(this, ExceptEnumerable);

        var _this = _possibleConstructorReturn(this, (ExceptEnumerable.__proto__ || Object.getPrototypeOf(ExceptEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

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
                                _context.next = 16;
                                break;
                            }

                            element = _step.value;

                            if (Enumerable.contains(other, element, comparer)) {
                                _context.next = 13;
                                break;
                            }

                            if (Enumerable.contains(temp, element, comparer)) {
                                _context.next = 13;
                                break;
                            }

                            temp.push(element);
                            _context.next = 13;
                            return element;

                        case 13:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 16:
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 22:
                            _context.prev = 22;
                            _context.prev = 23;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 25:
                            _context.prev = 25;

                            if (!_didIteratorError) {
                                _context.next = 28;
                                break;
                            }

                            throw _iteratorError;

                        case 28:
                            return _context.finish(25);

                        case 29:
                            return _context.finish(22);

                        case 30:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 18, 22, 30], [23,, 25, 29]]);
        }));
        return _this;
    }

    return ExceptEnumerable;
}(IEnumerable);

;

module.exports = ExceptEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352}],315:[function(_dereq_,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');
var defaultSelector = _dereq_('./../methods/defaultSelector');

var IGrouping = _dereq_('./IGrouping');
var Entry = _dereq_('./Entry');

var GroupJoinEnumerable = function (_IEnumerable) {
    _inherits(GroupJoinEnumerable, _IEnumerable);

    function GroupJoinEnumerable(outer, inner, resultSelector) {
        var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
        var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
        var comparer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultEqualityComparer;

        _classCallCheck(this, GroupJoinEnumerable);

        var _this = _possibleConstructorReturn(this, (GroupJoinEnumerable.__proto__ || Object.getPrototypeOf(GroupJoinEnumerable)).call(this, outer));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var innerTemp, outerIndex, innerIndex, innerIterator, innerHasNext, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

            return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
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

                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context3.prev = 5;
                            _loop = regeneratorRuntime.mark(function _loop() {
                                var outerElement, outerKey;
                                return regeneratorRuntime.wrap(function _loop$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                outerElement = _step.value;
                                                outerKey = outerKeySelector(outerElement, outerIndex++);
                                                _context2.next = 4;
                                                return resultSelector(outerElement, new IGrouping(outerKey, _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
                                                    var index;
                                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                                        while (1) {
                                                            switch (_context.prev = _context.next) {
                                                                case 0:
                                                                    index = 0;

                                                                case 1:
                                                                    if (!(innerTemp.length > index || innerHasNext())) {
                                                                        _context.next = 9;
                                                                        break;
                                                                    }

                                                                    if (!(innerTemp.length > index)) {
                                                                        _context.next = 7;
                                                                        break;
                                                                    }

                                                                    if (!comparer(outerKey, innerTemp[index].key)) {
                                                                        _context.next = 6;
                                                                        break;
                                                                    }

                                                                    _context.next = 6;
                                                                    return innerTemp[index].value;

                                                                case 6:
                                                                    index++;

                                                                case 7:
                                                                    _context.next = 1;
                                                                    break;

                                                                case 9:
                                                                case 'end':
                                                                    return _context.stop();
                                                            }
                                                        }
                                                    }, _callee, this);
                                                }))));

                                            case 4:
                                                outerIndex++;

                                            case 5:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _loop, _this2);
                            });
                            _iterator = outer[Symbol.iterator]();

                        case 8:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context3.next = 13;
                                break;
                            }

                            return _context3.delegateYield(_loop(), 't0', 10);

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context3.next = 8;
                            break;

                        case 13:
                            _context3.next = 19;
                            break;

                        case 15:
                            _context3.prev = 15;
                            _context3.t1 = _context3['catch'](5);
                            _didIteratorError = true;
                            _iteratorError = _context3.t1;

                        case 19:
                            _context3.prev = 19;
                            _context3.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context3.prev = 22;

                            if (!_didIteratorError) {
                                _context3.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context3.finish(22);

                        case 26:
                            return _context3.finish(19);

                        case 27:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee2, this, [[5, 15, 19, 27], [20,, 22, 26]]);
        }));
        return _this;
    }

    return GroupJoinEnumerable;
}(IEnumerable);

;

module.exports = GroupJoinEnumerable;
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./../methods/defaultSelector":356,"./Entry":313,"./IGrouping":317}],316:[function(_dereq_,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultGroupResultSelector = _dereq_('./../methods/defaultGroupResultSelector');
var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');
var equalityPredicate = _dereq_('./../methods/equalityPredicate');

var IGrouping = _dereq_('./IGrouping');

var GroupingEnumerable = function (_IEnumerable) {
    _inherits(GroupingEnumerable, _IEnumerable);

    function GroupingEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var elementSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultSelector;
        var resultSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultGroupResultSelector;
        var comparer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultEqualityComparer;

        _classCallCheck(this, GroupingEnumerable);

        var _this = _possibleConstructorReturn(this, (GroupingEnumerable.__proto__ || Object.getPrototypeOf(GroupingEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee2() {
            var groupings, iterators, noneKey, it, hasNext;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            groupings = [];
                            iterators = new Map();
                            noneKey = Symbol('noneKey');
                            it = source[Symbol.iterator]();

                            hasNext = function hasNext() {
                                var next = it.next();
                                if (!next.done) {
                                    var key = keySelector(next.value);
                                    var element = elementSelector(next.value);
                                    var trueKey = Enumerable.where(iterators.keys(), equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                                    if (trueKey === noneKey) {
                                        iterators.set(key, []);
                                        groupings.push(new IGrouping(key, _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
                                            var array;
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            array = iterators.get(key);

                                                        case 1:
                                                            if (!(array.length > 0 || hasNext())) {
                                                                _context.next = 7;
                                                                break;
                                                            }

                                                            if (!(array.length > 0)) {
                                                                _context.next = 5;
                                                                break;
                                                            }

                                                            _context.next = 5;
                                                            return array.shift();

                                                        case 5:
                                                            _context.next = 1;
                                                            break;

                                                        case 7:
                                                        case 'end':
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, this);
                                        }))));
                                    }
                                    iterators.get(key).push(element);
                                }
                                return !next.done;
                            };

                        case 5:
                            if (!(groupings.length > 0 || hasNext())) {
                                _context2.next = 11;
                                break;
                            }

                            if (!(groupings.length > 0)) {
                                _context2.next = 9;
                                break;
                            }

                            _context2.next = 9;
                            return resultSelector(Enumerable.first(groupings).key, groupings.shift());

                        case 9:
                            _context2.next = 5;
                            break;

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
        return _this;
    }

    return GroupingEnumerable;
}(IEnumerable);

;

module.exports = GroupingEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./../methods/defaultGroupResultSelector":353,"./../methods/defaultSelector":356,"./../methods/equalityPredicate":359,"./IGrouping":317}],317:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var IGrouping = function (_IEnumerable) {
    _inherits(IGrouping, _IEnumerable);

    function IGrouping(key, iterable) {
        _classCallCheck(this, IGrouping);

        var _this = _possibleConstructorReturn(this, (IGrouping.__proto__ || Object.getPrototypeOf(IGrouping)).call(this, []));

        _this.key = key;
        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.delegateYield(iterable, 't0', 1);

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return IGrouping;
}(IEnumerable);

;

module.exports = IGrouping;
},{"./../IEnumerable":299,"./../core/core":303}],318:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultKeySelector = _dereq_('./../methods/defaultKeySelector');
var defaultValueSelector = _dereq_('./../methods/defaultValueSelector');
var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');
var defaultAction = _dereq_('./../methods/defaultAction');

var IMapEnumerable = function (_IEnumerable) {
    _inherits(IMapEnumerable, _IEnumerable);

    function IMapEnumerable() {
        _classCallCheck(this, IMapEnumerable);

        return _possibleConstructorReturn(this, (IMapEnumerable.__proto__ || Object.getPrototypeOf(IMapEnumerable)).call(this, {}));
    }

    _createClass(IMapEnumerable, [{
        key: 'toObject',
        value: function toObject() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return this.toDictionary(keySelector, elementSelector, comparer).toObject();
        }
    }, {
        key: 'toDictionary',
        value: function toDictionary() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toDictionary(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'toLookup',
        value: function toLookup() {
            var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKeySelector;
            var elementSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultValueSelector;
            var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

            return Enumerable.toLookup(this, keySelector, elementSelector, comparer);
        }
    }, {
        key: 'forEach',
        value: function forEach() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAction;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    action(entry.value, entry.key);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return IMapEnumerable;
}(IEnumerable);

;

module.exports = IMapEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultAction":350,"./../methods/defaultEqualityComparer":352,"./../methods/defaultKeySelector":354,"./../methods/defaultValueSelector":357}],319:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultComparer = _dereq_('./../methods/defaultComparer');

var IOrderedEnumerable = function (_IEnumerable) {
    _inherits(IOrderedEnumerable, _IEnumerable);

    function IOrderedEnumerable(source) {
        var orderByComparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

        _classCallCheck(this, IOrderedEnumerable);

        var _this = _possibleConstructorReturn(this, (IOrderedEnumerable.__proto__ || Object.getPrototypeOf(IOrderedEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
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
        core.defineProperties(_this, {
            thenBy: function thenBy() {
                var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return Enumerable.thenBy(this, keySelector, comparer);
            },
            thenByDescending: function thenByDescending() {
                var keySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return Enumerable.thenByDescending(this, keySelector, comparer);
            }
        });
        core.defineProperty(_this, IOrderedEnumerable.source, source);
        core.defineProperty(_this, IOrderedEnumerable.orderByComparer, orderByComparer);
        return _this;
    }

    return IOrderedEnumerable;
}(IEnumerable);

;
IOrderedEnumerable.source = Symbol('source');
IOrderedEnumerable.orderByComparer = Symbol('orderByComparer');

module.exports = IOrderedEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultComparer":351,"./../methods/defaultSelector":356}],320:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var IntersectEnumerable = function (_IEnumerable) {
    _inherits(IntersectEnumerable, _IEnumerable);

    function IntersectEnumerable(source, other) {
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

        _classCallCheck(this, IntersectEnumerable);

        var _this = _possibleConstructorReturn(this, (IntersectEnumerable.__proto__ || Object.getPrototypeOf(IntersectEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

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
                                _context.next = 16;
                                break;
                            }

                            element = _step.value;

                            if (!Enumerable.contains(other, element, comparer)) {
                                _context.next = 13;
                                break;
                            }

                            if (Enumerable.contains(temp, element, comparer)) {
                                _context.next = 13;
                                break;
                            }

                            temp.push(element);
                            _context.next = 13;
                            return element;

                        case 13:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 16:
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 22:
                            _context.prev = 22;
                            _context.prev = 23;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 25:
                            _context.prev = 25;

                            if (!_didIteratorError) {
                                _context.next = 28;
                                break;
                            }

                            throw _iteratorError;

                        case 28:
                            return _context.finish(25);

                        case 29:
                            return _context.finish(22);

                        case 30:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 18, 22, 30], [23,, 25, 29]]);
        }));
        return _this;
    }

    return IntersectEnumerable;
}(IEnumerable);

;

module.exports = IntersectEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352}],321:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var IteratorEnumerable = function (_IEnumerable) {
    _inherits(IteratorEnumerable, _IEnumerable);

    function IteratorEnumerable(iterable) {
        _classCallCheck(this, IteratorEnumerable);

        var _this = _possibleConstructorReturn(this, (IteratorEnumerable.__proto__ || Object.getPrototypeOf(IteratorEnumerable)).call(this, iterable));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.delegateYield(iterable, 't0', 1);

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return IteratorEnumerable;
}(IEnumerable);

;

module.exports = IteratorEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],322:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');
var defaultSelector = _dereq_('./../methods/defaultSelector');

var JoinEnumerable = function (_IEnumerable) {
    _inherits(JoinEnumerable, _IEnumerable);

    function JoinEnumerable(outer, inner, resultSelector) {
        var outerKeySelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultSelector;
        var innerKeySelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultSelector;
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
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./../methods/defaultSelector":356}],323:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dictionary = _dereq_('./Dictionary');

var Lookup = function (_Dictionary) {
    _inherits(Lookup, _Dictionary);

    function Lookup() {
        _classCallCheck(this, Lookup);

        return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).call(this));
    }

    return Lookup;
}(Dictionary);

;

module.exports = Lookup;
},{"./Dictionary":310}],324:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMapEnumerable = _dereq_('./IMapEnumerable');

var core = _dereq_('./../core/core');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');
var equalityPredicate = _dereq_('./../methods/equalityPredicate');

var Entry = _dereq_('./Entry');

var MapEnumerable = function (_IMapEnumerable) {
    _inherits(MapEnumerable, _IMapEnumerable);

    function MapEnumerable(map) {
        _classCallCheck(this, MapEnumerable);

        var _this = _possibleConstructorReturn(this, (MapEnumerable.__proto__ || Object.getPrototypeOf(MapEnumerable)).call(this));

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
                            _iterator = map.keys()[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            key = _step.value;
                            _context.next = 9;
                            return new Entry(key, map.get(key));

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
        core.defineProperties(_this, {
            get: function get(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityComparer;

                return map.get(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            set: function set(key, value) {
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                return map.set(map.keys().asEnumerable().singleOrDefault(key, equalityPredicate(key, comparer)), value);
            },
            has: function has(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return map.keys().asEnumerable().contains(key, comparer);
            },
            delete: function _delete(key) {
                var comparer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultComparer;

                return map.delete(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            keys: function keys() {
                return map.keys().asEnumerable();
            },
            values: function values() {
                return map.values.asEnumerable();
            },
            entries: function entries() {
                return map.entries().asEnumerable();
            }
        });
        return _this;
    }

    return MapEnumerable;
}(IMapEnumerable);

;

module.exports = MapEnumerable;
},{"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./../methods/equalityPredicate":359,"./Entry":313,"./IMapEnumerable":318}],325:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMapEnumerable = _dereq_('./IMapEnumerable');

var core = _dereq_('./../core/core');

var Entry = _dereq_('./Entry');

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
},{"./../core/core":303,"./Entry":313,"./IMapEnumerable":318}],326:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var isInstanceofString = function isInstanceofString(element) {
    return element instanceof String || typeof element === 'string';
};
var isInstanceofArray = function isInstanceofArray(element) {
    return element instanceof Array;
};
var isInstanceofObject = function isInstanceofObject(element) {
    return element instanceof Object;
};
var isInstanceofNumber = function isInstanceofNumber(element) {
    return element instanceof Number || typeof element === 'number';
};
var isInstanceofFunction = function isInstanceofFunction(element) {
    return element instanceof Function || typeof element === 'function';
};
var isInstanceof = function isInstanceof(type) {
    return function (element) {
        return element instanceof type;
    };
};

var OfTypeEnumerable = function (_IEnumerable) {
    _inherits(OfTypeEnumerable, _IEnumerable);

    function OfTypeEnumerable(source, type) {
        _classCallCheck(this, OfTypeEnumerable);

        var _this = _possibleConstructorReturn(this, (OfTypeEnumerable.__proto__ || Object.getPrototypeOf(OfTypeEnumerable)).call(this, source));

        var is = type === String ? isInstanceofString : type === Array ? isInstanceofArray : type === Object ? isInstanceofObject : type === Number ? isInstanceofNumber : type === Function ? isInstanceofFunction : isInstanceof(type);
        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

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
                                _context.next = 13;
                                break;
                            }

                            element = _step.value;

                            if (!is(element)) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 10;
                            return element;

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        }));
        return _this;
    }

    return OfTypeEnumerable;
}(IEnumerable);

;

module.exports = OfTypeEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],327:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = _dereq_('./IOrderedEnumerable');

var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultComparer = _dereq_('./../methods/defaultComparer');
var selectorComparer = _dereq_('./../methods/selectorComparer');
var descendingComparer = _dereq_('./../methods/descendingComparer');

var OrderByDescendingEnumerable = function (_IOrderedEnumerable) {
    _inherits(OrderByDescendingEnumerable, _IOrderedEnumerable);

    function OrderByDescendingEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, OrderByDescendingEnumerable);

        return _possibleConstructorReturn(this, (OrderByDescendingEnumerable.__proto__ || Object.getPrototypeOf(OrderByDescendingEnumerable)).call(this, source, descendingComparer(selectorComparer(keySelector, comparer))));
    }

    return OrderByDescendingEnumerable;
}(IOrderedEnumerable);

;

module.exports = OrderByDescendingEnumerable;
},{"./../methods/defaultComparer":351,"./../methods/defaultSelector":356,"./../methods/descendingComparer":358,"./../methods/selectorComparer":361,"./IOrderedEnumerable":319}],328:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = _dereq_('./IOrderedEnumerable');

var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultComparer = _dereq_('./../methods/defaultComparer');
var selectorComparer = _dereq_('./../methods/selectorComparer');

var OrderByEnumerable = function (_IOrderedEnumerable) {
    _inherits(OrderByEnumerable, _IOrderedEnumerable);

    function OrderByEnumerable(source) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, OrderByEnumerable);

        return _possibleConstructorReturn(this, (OrderByEnumerable.__proto__ || Object.getPrototypeOf(OrderByEnumerable)).call(this, source, selectorComparer(keySelector, comparer)));
    }

    return OrderByEnumerable;
}(IOrderedEnumerable);

;

module.exports = OrderByEnumerable;
},{"./../methods/defaultComparer":351,"./../methods/defaultSelector":356,"./../methods/selectorComparer":361,"./IOrderedEnumerable":319}],329:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var RangeEnumerable = function (_IEnumerable) {
    _inherits(RangeEnumerable, _IEnumerable);

    function RangeEnumerable(start, count) {
        _classCallCheck(this, RangeEnumerable);

        var _this = _possibleConstructorReturn(this, (RangeEnumerable.__proto__ || Object.getPrototypeOf(RangeEnumerable)).call(this, []));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var i, value;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
                            i++, value++;
                            _context.next = 1;
                            break;

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return RangeEnumerable;
}(IEnumerable);

;

module.exports = RangeEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],330:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var RepeatEnumerable = function (_IEnumerable) {
    _inherits(RepeatEnumerable, _IEnumerable);

    function RepeatEnumerable(element) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, RepeatEnumerable);

        var _this = _possibleConstructorReturn(this, (RepeatEnumerable.__proto__ || Object.getPrototypeOf(RepeatEnumerable)).call(this, []));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return RepeatEnumerable;
}(IEnumerable);

;

module.exports = RepeatEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],331:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var ReverseEnumerable = function (_IEnumerable) {
    _inherits(ReverseEnumerable, _IEnumerable);

    function ReverseEnumerable(source) {
        _classCallCheck(this, ReverseEnumerable);

        var _this = _possibleConstructorReturn(this, (ReverseEnumerable.__proto__ || Object.getPrototypeOf(ReverseEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var temp, length, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
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
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ReverseEnumerable;
}(IEnumerable);

;

module.exports = ReverseEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],332:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultSelector = _dereq_('./../methods/defaultSelector');

var SelectEnumerable = function (_IEnumerable) {
    _inherits(SelectEnumerable, _IEnumerable);

    function SelectEnumerable(source) {
        var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;

        _classCallCheck(this, SelectEnumerable);

        var _this = _possibleConstructorReturn(this, (SelectEnumerable.__proto__ || Object.getPrototypeOf(SelectEnumerable)).call(this, source));

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
                                _context.next = 13;
                                break;
                            }

                            element = _step.value;
                            _context.next = 10;
                            return selector(element, index++);

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 15, 19, 27], [20,, 22, 26]]);
        }));
        return _this;
    }

    return SelectEnumerable;
}(IEnumerable);

;

module.exports = SelectEnumerable;
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultSelector":356}],333:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultSelector = _dereq_('./../methods/defaultSelector');

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
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultSelector":356}],334:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var SingleEnumerable = function (_IEnumerable) {
	_inherits(SingleEnumerable, _IEnumerable);

	function SingleEnumerable(value) {
		_classCallCheck(this, SingleEnumerable);

		var _this = _possibleConstructorReturn(this, (SingleEnumerable.__proto__ || Object.getPrototypeOf(SingleEnumerable)).call(this, []));

		core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return value;

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
		return _this;
	}

	return SingleEnumerable;
}(IEnumerable);

module.exports = SingleEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],335:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var SkipEnumerable = function (_IEnumerable) {
    _inherits(SkipEnumerable, _IEnumerable);

    function SkipEnumerable(source, count) {
        _classCallCheck(this, SkipEnumerable);

        var _this = _possibleConstructorReturn(this, (SkipEnumerable.__proto__ || Object.getPrototypeOf(SkipEnumerable)).call(this, source));

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
                                _context.next = 15;
                                break;
                            }

                            element = _step.value;

                            if (!(index >= count)) {
                                _context.next = 11;
                                break;
                            }

                            _context.next = 11;
                            return element;

                        case 11:
                            index++;

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

    return SkipEnumerable;
}(IEnumerable);

;

module.exports = SkipEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],336:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultPredicate = _dereq_('./../methods/defaultPredicate');

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
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultPredicate":355}],337:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IteratorEnumerable = _dereq_('./IteratorEnumerable');

var core = _dereq_('./../core/core');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var Enumerable = _dereq_('./../Enumerable');

var StringEnumerable = function (_IteratorEnumerable) {
    _inherits(StringEnumerable, _IteratorEnumerable);

    function StringEnumerable(array) {
        _classCallCheck(this, StringEnumerable);

        var _this = _possibleConstructorReturn(this, (StringEnumerable.__proto__ || Object.getPrototypeOf(StringEnumerable)).call(this, array));

        core.defineProperties(_this, {
            indexOf: function indexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer && core.string$indexOf) {
                    return core.string$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf: function lastIndexOf(value) {
                var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

                if (comparer === defaultEqualityComparer && core.string$lastIndexOf) {
                    return core.string$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            }
        });
        return _this;
    }

    return StringEnumerable;
}(IteratorEnumerable);

;

module.exports = StringEnumerable;
},{"./../Enumerable":298,"./../core/core":303,"./../methods/defaultEqualityComparer":352,"./IteratorEnumerable":321}],338:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

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
},{"./../IEnumerable":299,"./../core/core":303}],339:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultPredicate = _dereq_('./../methods/defaultPredicate');

var TakeWhileEnumerable = function (_IEnumerable) {
    _inherits(TakeWhileEnumerable, _IEnumerable);

    function TakeWhileEnumerable(source) {
        var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPredicate;

        _classCallCheck(this, TakeWhileEnumerable);

        var _this = _possibleConstructorReturn(this, (TakeWhileEnumerable.__proto__ || Object.getPrototypeOf(TakeWhileEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var taking, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            taking = true, index = 0;
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

                            taking = taking && predicate(element, index++);

                            if (!taking) {
                                _context.next = 14;
                                break;
                            }

                            _context.next = 12;
                            return element;

                        case 12:
                            _context.next = 15;
                            break;

                        case 14:
                            return _context.abrupt('return');

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

    return TakeWhileEnumerable;
}(IEnumerable);

;

module.exports = TakeWhileEnumerable;
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultPredicate":355}],340:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = _dereq_('./IOrderedEnumerable');

var thenByComparer = _dereq_('./../methods/thenByComparer');
var selectorComparer = _dereq_('./../methods/selectorComparer');
var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultComparer = _dereq_('./../methods/defaultComparer');
var descendingComparer = _dereq_('./../methods/descendingComparer');

var ThenByDescendingEnumerable = function (_IOrderedEnumerable) {
    _inherits(ThenByDescendingEnumerable, _IOrderedEnumerable);

    function ThenByDescendingEnumerable(orderedSource) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, ThenByDescendingEnumerable);

        return _possibleConstructorReturn(this, (ThenByDescendingEnumerable.__proto__ || Object.getPrototypeOf(ThenByDescendingEnumerable)).call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], descendingComparer(selectorComparer(keySelector, comparer)))));
    }

    return ThenByDescendingEnumerable;
}(IOrderedEnumerable);

;

module.exports = ThenByDescendingEnumerable;
},{"./../methods/defaultComparer":351,"./../methods/defaultSelector":356,"./../methods/descendingComparer":358,"./../methods/selectorComparer":361,"./../methods/thenByComparer":362,"./IOrderedEnumerable":319}],341:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOrderedEnumerable = _dereq_('./IOrderedEnumerable');

var thenByComparer = _dereq_('./../methods/thenByComparer');
var selectorComparer = _dereq_('./../methods/selectorComparer');
var defaultSelector = _dereq_('./../methods/defaultSelector');
var defaultComparer = _dereq_('./../methods/defaultComparer');

var ThenByEnumerable = function (_IOrderedEnumerable) {
    _inherits(ThenByEnumerable, _IOrderedEnumerable);

    function ThenByEnumerable(orderedSource) {
        var keySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSelector;
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultComparer;

        _classCallCheck(this, ThenByEnumerable);

        return _possibleConstructorReturn(this, (ThenByEnumerable.__proto__ || Object.getPrototypeOf(ThenByEnumerable)).call(this, orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], selectorComparer(keySelector, comparer))));
    }

    return ThenByEnumerable;
}(IOrderedEnumerable);

;

module.exports = ThenByEnumerable;
},{"./../methods/defaultComparer":351,"./../methods/defaultSelector":356,"./../methods/selectorComparer":361,"./../methods/thenByComparer":362,"./IOrderedEnumerable":319}],342:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var Enumerable = _dereq_('./../Enumerable');

var defaultEqualityComparer = _dereq_('./../methods/defaultEqualityComparer');

var UnionEnumerable = function (_IEnumerable) {
    _inherits(UnionEnumerable, _IEnumerable);

    function UnionEnumerable(source, other) {
        var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;

        _classCallCheck(this, UnionEnumerable);

        var _this = _possibleConstructorReturn(this, (UnionEnumerable.__proto__ || Object.getPrototypeOf(UnionEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
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

                            if (Enumerable.contains(temp, element, comparer)) {
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

                            if (Enumerable.contains(temp, _element, comparer)) {
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
}(IEnumerable);

;

module.exports = UnionEnumerable;
},{"./../Enumerable":298,"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultEqualityComparer":352}],343:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var defaultPredicate = _dereq_('./../methods/defaultPredicate');

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
},{"./../IEnumerable":299,"./../core/core":303,"./../methods/defaultPredicate":355}],344:[function(_dereq_,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IEnumerable = _dereq_('./../IEnumerable');

var core = _dereq_('./../core/core');

var ZipEnumerable = function (_IEnumerable) {
    _inherits(ZipEnumerable, _IEnumerable);

    function ZipEnumerable(source, other, resultSelector) {
        _classCallCheck(this, ZipEnumerable);

        var _this = _possibleConstructorReturn(this, (ZipEnumerable.__proto__ || Object.getPrototypeOf(ZipEnumerable)).call(this, source));

        core.defineProperty(_this, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
            var sourceIterator, otherIterator, sourceElement, otherElement, index;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            sourceIterator = source[Symbol.iterator]();
                            otherIterator = other[Symbol.iterator]();
                            sourceElement = void 0, otherElement = void 0, index = 0;

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
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
        return _this;
    }

    return ZipEnumerable;
}(IEnumerable);

;

module.exports = ZipEnumerable;
},{"./../IEnumerable":299,"./../core/core":303}],345:[function(_dereq_,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined;
if (!g.regeneratorRuntime && typeof regeneratorRuntime === 'undefined') {
    _dereq_('babel-polyfill');
}

var core = _dereq_('./core/core');

var Enumerable = _dereq_('./Enumerable');

var IComparable = _dereq_('./core/IComparable');
var IEquatable = _dereq_('./core/IEquatable');

var MapEnumerable = _dereq_('./enumerables/MapEnumerable');
var ArrayEnumerable = _dereq_('./enumerables/ArrayEnumerable');
var StringEnumerable = _dereq_('./enumerables/StringEnumerable');
var IteratorEnumerable = _dereq_('./enumerables/IteratorEnumerable');
var ObjectEnumerable = _dereq_('./enumerables/ObjectEnumerable');

var extendArray = _dereq_('./linq-array');
var extendObject = _dereq_('./linq-object');
var extendString = _dereq_('./linq-string');

core.defineProperties(Map.prototype, {
    asEnumerable: function asEnumerable() {
        return new MapEnumerable(this);
    }
});
core.defineProperties(Array.prototype, {
    asEnumerable: function asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(Set.prototype, {
    asEnumerable: function asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(String.prototype, {
    asEnumerable: function asEnumerable() {
        return new StringEnumerable(this);
    }
});
core.defineProperties(Object.prototype, {
    asEnumerable: function asEnumerable() {
        var type = core.getType(this);
        if (type.endsWith(' Iterator')) {
            return new IteratorEnumerable(this);
        } else {
            return new ObjectEnumerable(this);
        }
    }
});

Enumerable.Config = {
    extends: {
        set array(value) {
            if (value) {
                extendArray();
            }
        },
        set object(value) {
            if (value) {
                extendObject();
            }
        },
        set string(value) {
            if (value) {
                extendString();
            }
        }
    }
};

Enumerable.IComparable = IComparable;
Enumerable.IEquatable = IEquatable;

module.exports = Enumerable;
}).call(this,typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {})
},{"./Enumerable":298,"./core/IComparable":301,"./core/IEquatable":302,"./core/core":303,"./enumerables/ArrayEnumerable":308,"./enumerables/IteratorEnumerable":321,"./enumerables/MapEnumerable":324,"./enumerables/ObjectEnumerable":325,"./enumerables/StringEnumerable":337,"./linq-array":346,"./linq-object":347,"./linq-string":348,"babel-polyfill":1}],346:[function(_dereq_,module,exports){
'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
var Enumerable = _dereq_('./Enumerable');

var core = _dereq_('./core/core');

module.exports = function () {
	Enumerable.extends(Array.prototype, 'array');

	(function (types, props) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var type = _step.value;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					var _loop = function _loop() {
						var prop = _step2.value;

						var original = type.prototype[prop];
						core.defineProperty(type.prototype, prop, function () {
							return Enumerable.asEnumerable(original.apply(this, arguments));
						});
					};

					for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						_loop();
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	})([Array, Map, Set, WeakMap, WeakSet], ['keys', 'values', 'entries']);
};
},{"./Enumerable":298,"./core/core":303}],347:[function(_dereq_,module,exports){
'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
var Enumerable = _dereq_('./Enumerable');

module.exports = function () {
  Enumerable.extends(Object.prototype, 'object');
};
},{"./Enumerable":298}],348:[function(_dereq_,module,exports){
'use strict';

/**
 * Created by wm123 on 2017/2/14.
 */
var Enumerable = _dereq_('./Enumerable');

module.exports = function () {
  Enumerable.extends(String.prototype, 'string');
};
},{"./Enumerable":298}],349:[function(_dereq_,module,exports){
'use strict';

var defaultEqualityComparer = _dereq_('./defaultEqualityComparer');

module.exports = function (array) {
	var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	var comparer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultEqualityComparer;
	return function (element, other) {
		var enumerable = array.asEnumerable(),
		    count = 0;
		var elementIndex = enumerable.indexOf(element, comparer);
		elementIndex = elementIndex == -1 && last ? count = count || enumerable.count() : elementIndex;
		var otherIndex = enumerable.indexOf(other, comparer);
		otherIndex = otherIndex == -1 && last ? count = count || enumerable.count() : otherIndex;
		return elementIndex - otherIndex;
	};
};
},{"./defaultEqualityComparer":352}],350:[function(_dereq_,module,exports){
"use strict";

module.exports = function (element, key) {};
},{}],351:[function(_dereq_,module,exports){
'use strict';

var IComparable = _dereq_('./../core/IComparable');
module.exports = function (element, other) {
  return element instanceof IComparable ? element.compare(other) : other instanceof IComparable ? -other.compare(element) : element > other ? 1 : element == other ? 0 : -1;
};
},{"./../core/IComparable":301}],352:[function(_dereq_,module,exports){
'use strict';

var IEquatable = _dereq_('./../core/IEquatable');
module.exports = function (element, other) {
  return element instanceof IEquatable ? element.equals(other) : other instanceof IEquatable ? other.equals(element) : element == other;
};
},{"./../core/IEquatable":302}],353:[function(_dereq_,module,exports){
"use strict";

module.exports = function (key, enumerable) {
  return enumerable;
};
},{}],354:[function(_dereq_,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element.key === 'undefined' ? element : element.key;
};
},{}],355:[function(_dereq_,module,exports){
"use strict";

module.exports = function (element, index) {
  return true;
};
},{}],356:[function(_dereq_,module,exports){
"use strict";

module.exports = function (element, index) {
  return element;
};
},{}],357:[function(_dereq_,module,exports){
'use strict';

module.exports = function (element, index) {
  return typeof element.key === 'undefined' ? element : element.value;
};
},{}],358:[function(_dereq_,module,exports){
"use strict";

module.exports = function (orderBy) {
  return function (element, other) {
    return -orderBy(element, other);
  };
};
},{}],359:[function(_dereq_,module,exports){
"use strict";

module.exports = function (value, comparer) {
  return function (element, index) {
    return comparer(element, value);
  };
};
},{}],360:[function(_dereq_,module,exports){
"use strict";

module.exports = function (array) {
	var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	return function (element, other) {
		var enumerable = array.asEnumerable(),
		    count = 0;
		var elementIndex = enumerable.findIndex(function (predicate) {
			return predicate(element);
		});
		elementIndex = elementIndex == -1 && last ? count = count || enumerable.count() : elementIndex;
		var otherIndex = enumerable.findIndex(function (predicate) {
			return predicate(other);
		});
		otherIndex = otherIndex == -1 && last ? count = count || enumerable.count() : otherIndex;
		return elementIndex - otherIndex;
	};
};
},{}],361:[function(_dereq_,module,exports){
"use strict";

module.exports = function (selector, comparer) {
  return function (element, other) {
    return comparer(selector(element), selector(other));
  };
};
},{}],362:[function(_dereq_,module,exports){
"use strict";

module.exports = function (orderByComparer, thenByComparer) {
    return function (element, other) {
        var compare = orderByComparer(element, other);
        return compare == 0 ? thenByComparer(element, other) : compare;
    };
};
},{}]},{},[345])
(345)
});