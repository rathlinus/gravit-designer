/**
 * Webpack Module #324
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    uncurryThis = require(27) /* uncurryThis */,
    hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    r = require(425) /* module_425 */,
    GURABLE = require(199) /* Exports_GURABLE */,
    createProperty = require(100) /* createProperty */,
    c = require(120) /* module_120 */,
    d = require(232) /* module_232 */,
    tryCall = require(21) /* tryCall */,
    DataModule_146 = require(146) /* DataModule_146 */,
    lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
    toStringTagSupport = require(117) /* toStringTagSupport */,
    DataModule_426 = require(426) /* DataModule_426 */,
    m = require(687) /* module_687 */,
    y = require(691) /* module_691 */,
    DataModule_208 = require(208) /* DataModule_208 */,
    DataModule_175 = require(175) /* DataModule_175 */,
    b = require(427) /* module_427 */,
    w = require(157) /* stub_requires_27 */,
    C = require(288) /* module_288 */,
    copyConstructorProperties = require(341) /* copyConstructorProperties */,
    setToStringTag = require(137) /* setToStringTag */,
    internalState = require(80) /* internalState */,
    A = GURABLE.PROPER,
    T = GURABLE.CONFIGURABLE,
    G = internalState.getterFor('ArrayBuffer'),
    P = internalState.getterFor('DataView'),
    D = internalState.set,
    L = globalThis.ArrayBuffer,
    I = L,
    k = I && I.prototype,
    O = globalThis.DataView,
    F = O && O.prototype,
    R = Object.prototype,
    M = globalThis.Array,
    N = globalThis.RangeError,
    B = uncurryThis(b),
    U = uncurryThis([].reverse),
    $ = y.pack,
    j = y.unpack,
    K = function (e) {
      return [255 & e];
    },
    V = function (e) {
      return [255 & e, (e >> 8) & 255];
    },
    H = function (e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    W = function (e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    z = function (e) {
      return $(m(e), 23, 4);
    },
    q = function (e) {
      return $(e, 52, 8);
    },
    Y = function (e, t, n) {
      c(e.prototype, t, {
        configurable: true,
        get: function () {
          return n(this)[t];
        },
      });
    },
    X = function (e, t, n, globalThis) {
      var uncurryThis = P(e),
        hasOwnProperty_wrapper = DataModule_426(n),
        r = !!globalThis;
      if (hasOwnProperty_wrapper + t > uncurryThis.byteLength) throw new N('Wrong index');
      var GURABLE = uncurryThis.bytes,
        createProperty = hasOwnProperty_wrapper + uncurryThis.byteOffset,
        c = w(GURABLE, createProperty, createProperty + t);
      return r ? c : U(c);
    },
    Q = function (e, t, n, globalThis, uncurryThis, hasOwnProperty_wrapper) {
      var r = P(e),
        GURABLE = DataModule_426(n),
        createProperty = globalThis(+uncurryThis),
        c = !!hasOwnProperty_wrapper;
      if (GURABLE + t > r.byteLength) throw new N('Wrong index');
      for (
        var d = r.bytes, tryCall = GURABLE + r.byteOffset, DataModule_146 = 0;
        DataModule_146 < t;
        DataModule_146++
      )
        d[tryCall + DataModule_146] = createProperty[c ? DataModule_146 : t - DataModule_146 - 1];
    };
  if (r) {
    var J = A && 'ArrayBuffer' !== L.name;
    (tryCall(function () {
      L(1);
    }) &&
    tryCall(function () {
      new L(-1);
    }) &&
    !tryCall(function () {
      return (new L(), new L(1.5), new L(NaN), 1 !== L.length || (J && !T));
    })
      ? J && T && createProperty(L, 'name', 'ArrayBuffer')
      : (((I = function (e) {
          return (DataModule_146(this, k), C(new L(DataModule_426(e)), this, I));
        }).prototype = k),
        (k.constructor = I),
        copyConstructorProperties(I, L)),
      DataModule_175 && DataModule_208(F) !== R && DataModule_175(F, R));
    var Z = new O(new I(2)),
      ee = uncurryThis(F.setInt8);
    (Z.setInt8(0, 2147483648),
      Z.setInt8(1, 2147483649),
      (!Z.getInt8(0) && Z.getInt8(1)) ||
        d(
          F,
          {
            setInt8: function (e, t) {
              ee(this, e, (t << 24) >> 24);
            },
            setUint8: function (e, t) {
              ee(this, e, (t << 24) >> 24);
            },
          },
          { unsafe: true }
        ));
  } else
    ((k = (I = function (e) {
      DataModule_146(this, k);
      var t = DataModule_426(e);
      (D(this, { type: 'ArrayBuffer', bytes: B(M(t), 0), byteLength: t }),
        hasOwnProperty_wrapper || ((this.byteLength = t), (this.detached = false)));
    }).prototype),
      (F = (O = function (e, t, n) {
        (DataModule_146(this, F), DataModule_146(e, k));
        var globalThis = G(e),
          uncurryThis = globalThis.byteLength,
          r = lengthOfArrayLike(t);
        if (r < 0 || r > uncurryThis) throw new N('Wrong offset');
        if (r + (n = undefined === n ? uncurryThis - r : toStringTagSupport(n)) > uncurryThis)
          throw new N('Wrong length');
        (D(this, {
          type: 'DataView',
          buffer: e,
          byteLength: n,
          byteOffset: r,
          bytes: globalThis.bytes,
        }),
          hasOwnProperty_wrapper ||
            ((this.buffer = e), (this.byteLength = n), (this.byteOffset = r)));
      }).prototype),
      hasOwnProperty_wrapper &&
        (Y(I, 'byteLength', G), Y(O, 'buffer', P), Y(O, 'byteLength', P), Y(O, 'byteOffset', P)),
      d(F, {
        getInt8: function (e) {
          return (X(this, 1, e)[0] << 24) >> 24;
        },
        getUint8: function (e) {
          return X(this, 1, e)[0];
        },
        getInt16: function (e) {
          var t = X(this, 2, e, arguments.length > 1 && arguments[1]);
          return (((t[1] << 8) | t[0]) << 16) >> 16;
        },
        getUint16: function (e) {
          var t = X(this, 2, e, arguments.length > 1 && arguments[1]);
          return (t[1] << 8) | t[0];
        },
        getInt32: function (e) {
          return W(X(this, 4, e, arguments.length > 1 && arguments[1]));
        },
        getUint32: function (e) {
          return W(X(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
        },
        getFloat32: function (e) {
          return j(X(this, 4, e, arguments.length > 1 && arguments[1]), 23);
        },
        getFloat64: function (e) {
          return j(X(this, 8, e, arguments.length > 1 && arguments[1]), 52);
        },
        setInt8: function (e, t) {
          Q(this, 1, e, K, t);
        },
        setUint8: function (e, t) {
          Q(this, 1, e, K, t);
        },
        setInt16: function (e, t) {
          Q(this, 2, e, V, t, arguments.length > 2 && arguments[2]);
        },
        setUint16: function (e, t) {
          Q(this, 2, e, V, t, arguments.length > 2 && arguments[2]);
        },
        setInt32: function (e, t) {
          Q(this, 4, e, H, t, arguments.length > 2 && arguments[2]);
        },
        setUint32: function (e, t) {
          Q(this, 4, e, H, t, arguments.length > 2 && arguments[2]);
        },
        setFloat32: function (e, t) {
          Q(this, 4, e, z, t, arguments.length > 2 && arguments[2]);
        },
        setFloat64: function (e, t) {
          Q(this, 8, e, q, t, arguments.length > 2 && arguments[2]);
        },
      }));
  (setToStringTag(I, 'ArrayBuffer'),
    setToStringTag(O, 'DataView'),
    (exports.exports = { ArrayBuffer: I, DataView: O }));
}
