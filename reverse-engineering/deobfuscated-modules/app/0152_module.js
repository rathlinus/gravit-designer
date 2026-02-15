/**
 * Webpack Module #152
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      a,
      r = require(425) /* module_425 */,
      s = require(49) /* module_49 */,
      l = require(23) /* module_23 */,
      c = require(35) /* module_35 */,
      d = require(46) /* module_46 */,
      u = require(61) /* module_61 */,
      p = require(131) /* module_131 */,
      g = require(185) /* module_185 */,
      h = require(100) /* module_100 */,
      f = require(79) /* module_79 */,
      m = require(120) /* module_120 */,
      y = require(144) /* module_144 */,
      v = require(208) /* module_208 */,
      _ = require(175) /* module_175 */,
      b = require(43) /* module_43 */,
      w = require(258) /* module_258 */,
      C = require(80) /* module_80 */,
      x = C.enforce,
      S = C.get,
      E = l.Int8Array,
      A = E && E.prototype,
      T = l.Uint8ClampedArray,
      G = T && T.prototype,
      P = E && v(E),
      D = A && v(A),
      L = Object.prototype,
      I = l.TypeError,
      k = b("toStringTag"),
      O = w("TYPED_ARRAY_TAG"),
      F = r && !!_ && "Opera" !== p(l.opera),
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
        var t = v(e);
        if (d(t)) {
          var require = S(t);
          return require && u(require, "TypedArrayConstructor")
            ? require.TypedArrayConstructor
            : B(t);
        }
      },
      U = function (e) {
        if (!d(e)) return false;
        var t = p(e);
        return u(M, t) || u(N, t);
      };
    for (o in M)
      (a = (i = l[o]) && i.prototype)
        ? (x(a).TypedArrayConstructor = i)
        : (F = false);
    for (o in N)
      (a = (i = l[o]) && i.prototype) && (x(a).TypedArrayConstructor = i);
    if (
      (!F || !c(P) || P === Function.prototype) &&
      ((P = function () {
        throw new I("Incorrect invocation");
      }),
      F)
    )
      for (o in M) l[o] && _(l[o], P);
    if ((!F || !D || D === L) && ((D = P.prototype), F))
      for (o in M) l[o] && _(l[o].prototype, D);
    if ((F && v(G) !== D && _(G, D), s && !u(D, k)))
      for (o in ((R = true),
      m(D, k, {
        configurable: true,
        get: function () {
          return d(this) ? this[O] : undefined;
        },
      }),
      M))
        l[o] && h(l[o], O, o);
    exports.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: F,
      TYPED_ARRAY_TAG: R && O,
      aTypedArray: function (e) {
        if (U(e)) return e;
        throw new I("Target is not a typed array");
      },
      aTypedArrayConstructor: function (e) {
        if (c(e) && (!_ || y(P, e))) return e;
        throw new I(g(e) + " is not a typed array constructor");
      },
      exportTypedArrayMethod: function (e, t, n, o) {
        if (s) {
          if (n)
            for (var i in M) {
              var a = l[i];
              if (a && u(a.prototype, e))
                try {
                  delete a.prototype[e];
                } catch (n) {
                  try {
                    a.prototype[e] = t;
                  } catch (e) {}
                }
            }
          (D[e] && !n) || f(D, e, n ? t : (F && A[e]) || t, o);
        }
      },
      exportTypedArrayStaticMethod: function (e, t, n) {
        var o, i;
        if (s) {
          if (_) {
            if (n)
              for (o in M)
                if ((i = l[o]) && u(i, e))
                  try {
                    delete i[e];
                  } catch (e) {}
            if (P[e] && !n) return;
            try {
              return f(P, e, n ? t : (F && P[e]) || t);
            } catch (e) {}
          }
          for (o in M) !(i = l[o]) || (i[e] && !n) || f(i, e, t);
        }
      },
      getTypedArrayConstructor: B,
      isView: function (e) {
        if (!d(e)) return false;
        var t = p(e);
        return "DataView" === t || u(M, t) || u(N, t);
      },
      isTypedArray: U,
      TypedArray: P,
      TypedArrayPrototype: D,
    };
  }