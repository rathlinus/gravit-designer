/**
 * Webpack Module #152
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o,
    i,
    a,
    r = require(425) /* module_425 */,
    hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
    globalThis = require(23) /* globalThis */,
    anObject = require(35) /* anObject */,
    toLength = require(46) /* toLength */,
    u = require(61) /* module_61 */,
    DataModule_131 = require(131) /* DataModule_131 */,
    DataModule_185 = require(185) /* DataModule_185 */,
    createProperty = require(100) /* createProperty */,
    defineBuiltIn = require(79) /* defineBuiltIn */,
    m = require(120) /* module_120 */,
    y = require(144) /* stub_requires_27 */,
    DataModule_208 = require(208) /* DataModule_208 */,
    DataModule_175 = require(175) /* DataModule_175 */,
    wellKnownSymbol = require(43) /* wellKnownSymbol */,
    DataModule_258 = require(258) /* DataModule_258 */,
    internalState = require(80) /* internalState */,
    x = internalState.enforce,
    S = internalState.get,
    E = globalThis.Int8Array,
    A = E && E.prototype,
    T = globalThis.Uint8ClampedArray,
    G = T && T.prototype,
    P = E && DataModule_208(E),
    D = A && DataModule_208(A),
    L = Object.prototype,
    I = globalThis.TypeError,
    k = wellKnownSymbol('toStringTag'),
    O = DataModule_258('TYPED_ARRAY_TAG'),
    F = r && !!DataModule_175 && 'Opera' !== DataModule_131(globalThis.opera),
    R = false,
    M = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8,
    },
    N = { BigInt64Array: 8, BigUint64Array: 8 },
    B = function (e) {
      var t = DataModule_208(e);
      if (toLength(t)) {
        var require = S(t);
        return require && u(require, 'TypedArrayConstructor')
          ? require.TypedArrayConstructor
          : B(t);
      }
    },
    U = function (e) {
      if (!toLength(e)) return false;
      var t = DataModule_131(e);
      return u(M, t) || u(N, t);
    };
  for (o in M)
    (a = (i = globalThis[o]) && i.prototype) ? (x(a).TypedArrayConstructor = i) : (F = false);
  for (o in N) (a = (i = globalThis[o]) && i.prototype) && (x(a).TypedArrayConstructor = i);
  if (
    (!F || !anObject(P) || P === Function.prototype) &&
    ((P = function () {
      throw new I('Incorrect invocation');
    }),
    F)
  )
    for (o in M) globalThis[o] && DataModule_175(globalThis[o], P);
  if ((!F || !D || D === L) && ((D = P.prototype), F))
    for (o in M) globalThis[o] && DataModule_175(globalThis[o].prototype, D);
  if ((F && DataModule_208(G) !== D && DataModule_175(G, D), hasOwnProperty_wrapper && !u(D, k)))
    for (o in ((R = true),
    m(D, k, {
      configurable: true,
      get: function () {
        return toLength(this) ? this[O] : undefined;
      },
    }),
    M))
      globalThis[o] && createProperty(globalThis[o], O, o);
  exports.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: F,
    TYPED_ARRAY_TAG: R && O,
    aTypedArray: function (e) {
      if (U(e)) return e;
      throw new I('Target is not a typed array');
    },
    aTypedArrayConstructor: function (e) {
      if (anObject(e) && (!DataModule_175 || y(P, e))) return e;
      throw new I(DataModule_185(e) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (e, t, n, o) {
      if (hasOwnProperty_wrapper) {
        if (n)
          for (var i in M) {
            var a = globalThis[i];
            if (a && u(a.prototype, e))
              try {
                delete a.prototype[e];
              } catch (n) {
                try {
                  a.prototype[e] = t;
                } catch (e) {}
              }
          }
        (D[e] && !n) || defineBuiltIn(D, e, n ? t : (F && A[e]) || t, o);
      }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
      var o, i;
      if (hasOwnProperty_wrapper) {
        if (DataModule_175) {
          if (n)
            for (o in M)
              if ((i = globalThis[o]) && u(i, e))
                try {
                  delete i[e];
                } catch (e) {}
          if (P[e] && !n) return;
          try {
            return defineBuiltIn(P, e, n ? t : (F && P[e]) || t);
          } catch (e) {}
        }
        for (o in M) !(i = globalThis[o]) || (i[e] && !n) || defineBuiltIn(i, e, t);
      }
    },
    getTypedArrayConstructor: B,
    isView: function (e) {
      if (!toLength(e)) return false;
      var t = DataModule_131(e);
      return 'DataView' === t || u(M, t) || u(N, t);
    },
    isTypedArray: U,
    TypedArray: P,
    TypedArrayPrototype: D,
  };
}
