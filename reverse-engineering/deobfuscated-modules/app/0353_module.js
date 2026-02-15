/**
 * Webpack Module #353
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      globalThis = require(23) /* globalThis */,
      isCallable = require(29) /* isCallable */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      s = require(693) /* module_693 */,
      l = require(152) /* polyfill_TypedArrays */,
      c = require(324) /* polyfill_ArrayBuffer_DataView */,
      d = require(146) /* module_146 */,
      u = require(174) /* module_174 */,
      createProperty = require(100) /* createProperty */,
      g = require(694) /* module_694 */,
      toStringTagSupport = require(117) /* toStringTagSupport */,
      f = require(426) /* module_426 */,
      m = require(428) /* module_428 */,
      y = require(695) /* module_695 */,
      v = require(294) /* module_294 */,
      _ = require(61) /* module_61 */,
      b = require(131) /* module_131 */,
      toLength = require(46) /* toLength */,
      C = require(241) /* module_241 */,
      x = require(136) /* module_136 */,
      S = require(144) /* stub_requires_27 */,
      E = require(175) /* module_175 */,
      A = require(243) /* module_243 */.f,
      T = require(696) /* module_696 */,
      G = require(349) /* module_349 */.forEach,
      P = require(260) /* module_260 */,
      D = require(120) /* module_120 */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */,
      objectGetOwnPropertyDescriptor = require(222) /* objectGetOwnPropertyDescriptor */,
      k = require(698) /* module_698 */,
      internalState = require(80) /* internalState */,
      F = require(288) /* module_288 */,
      R = internalState.get,
      M = internalState.set,
      N = internalState.enforce,
      B = createPropertyDescriptor.f,
      U = objectGetOwnPropertyDescriptor.f,
      $ = globalThis.RangeError,
      j = c.ArrayBuffer,
      K = j.prototype,
      V = c.DataView,
      H = l.NATIVE_ARRAY_BUFFER_VIEWS,
      W = l.TYPED_ARRAY_TAG,
      z = l.TypedArray,
      q = l.TypedArrayPrototype,
      Y = l.isTypedArray,
      X = function (e, t) {
        D(e, t, {
          configurable: true,
          get: function () {
            return R(this)[t];
          },
        });
      },
      Q = function (e) {
        var t;
        return (
          S(K, e) || "ArrayBuffer" === (t = b(e)) || "SharedArrayBuffer" === t
        );
      },
      J = function (e, t) {
        return Y(e) && !C(t) && t in e && g(+t) && t >= 0;
      },
      Z = function (e, t) {
        return (t = v(t)), J(e, t) ? u(2, e[t]) : U(e, t);
      },
      ee = function (e, t, n) {
        return (
          (t = v(t)),
          !(J(e, t) && toLength(n) && _(n, "value")) ||
          _(n, "get") ||
          _(n, "set") ||
          n.configurable ||
          (_(n, "writable") && !n.writable) ||
          (_(n, "enumerable") && !n.enumerable)
            ? B(e, t, n)
            : ((e[t] = n.value), e)
        );
      };
    hasOwnProperty_wrapper
      ? (H ||
          ((objectGetOwnPropertyDescriptor.f = Z),
          (createPropertyDescriptor.f = ee),
          X(q, "buffer"),
          X(q, "byteOffset"),
          X(q, "byteLength"),
          X(q, "length")),
        core_export(
          { target: "Object", stat: true, forced: !H },
          { getOwnPropertyDescriptor: Z, defineProperty: ee }
        ),
        (exports.exports = function (e, t, n) {
          var hasOwnProperty_wrapper = e.match(/\d+/)[0] / 8,
            l = e + (n ? "Clamped" : "") + "Array",
            c = "get" + e,
            u = "set" + e,
            g = globalThis[l],
            v = g,
            _ = v && v.prototype,
            b = {},
            C = function (e, t) {
              B(e, t, {
                get: function () {
                  return (function (e, t) {
                    var n = R(e);
                    return n.view[c](t * hasOwnProperty_wrapper + n.byteOffset, true);
                  })(this, t);
                },
                set: function (e) {
                  return (function (e, t, core_export) {
                    var globalThis = R(e);
                    globalThis.view[u](t * hasOwnProperty_wrapper + globalThis.byteOffset, n ? y(core_export) : core_export, true);
                  })(this, t, e);
                },
                enumerable: true,
              });
            };
          H
            ? s &&
              ((v = t(function (e, t, n, core_export) {
                return (
                  d(e, _),
                  F(
                    toLength(t)
                      ? Q(t)
                        ? undefined !== core_export
                          ? new g(t, m(n, hasOwnProperty_wrapper), core_export)
                          : undefined !== n
                          ? new g(t, m(n, hasOwnProperty_wrapper))
                          : new g(t)
                        : Y(t)
                        ? k(v, t)
                        : isCallable(T, v, t)
                      : new g(f(t)),
                    e,
                    v
                  )
                );
              })),
              E && E(v, z),
              G(A(g), function (e) {
                e in v || createProperty(v, e, g[e]);
              }),
              (v.prototype = _))
            : ((v = t(function (e, t, n, core_export) {
                d(e, _);
                var globalThis,
                  s,
                  l,
                  c = 0,
                  u = 0;
                if (toLength(t)) {
                  if (!Q(t)) return Y(t) ? k(v, t) : isCallable(T, v, t);
                  (globalThis = t), (u = m(n, hasOwnProperty_wrapper));
                  var createProperty = t.byteLength;
                  if (undefined === core_export) {
                    if (createProperty % hasOwnProperty_wrapper) throw new $("Wrong length");
                    if ((s = createProperty - u) < 0) throw new $("Wrong length");
                  } else if ((s = toStringTagSupport(core_export) * hasOwnProperty_wrapper) + u > createProperty)
                    throw new $("Wrong length");
                  l = s / hasOwnProperty_wrapper;
                } else (l = f(t)), (globalThis = new j((s = l * hasOwnProperty_wrapper)));
                for (
                  M(e, {
                    buffer: globalThis,
                    byteOffset: u,
                    byteLength: s,
                    length: l,
                    view: new V(globalThis),
                  });
                  c < l;

                )
                  C(e, c++);
              })),
              E && E(v, z),
              (_ = v.prototype = x(q))),
            _.constructor !== v && createProperty(_, "constructor", v),
            (N(_).TypedArrayConstructor = v),
            W && createProperty(_, W, l);
          var S = v !== g;
          (b[l] = v),
            core_export({ global: true, constructor: true, forced: S, sham: !H }, b),
            "BYTES_PER_ELEMENT" in v || createProperty(v, "BYTES_PER_ELEMENT", hasOwnProperty_wrapper),
            "BYTES_PER_ELEMENT" in _ || createProperty(_, "BYTES_PER_ELEMENT", hasOwnProperty_wrapper),
            P(l);
        }))
      : (exports.exports = function () {});
  }