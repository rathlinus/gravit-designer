/**
 * Webpack Module #409
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      a,
      r,
      s = require(23) /* module_23 */,
      l = require(200) /* module_200 */,
      c = require(124) /* module_124 */,
      d = require(35) /* module_35 */,
      u = require(61) /* module_61 */,
      p = require(21) /* module_21 */,
      g = require(406) /* module_406 */,
      h = require(157) /* module_157 */,
      f = require(242) /* module_242 */,
      m = require(303) /* module_303 */,
      y = require(410) /* module_410 */,
      v = require(245) /* module_245 */,
      _ = s.setImmediate,
      b = s.clearImmediate,
      w = s.process,
      C = s.Dispatch,
      x = s.Function,
      S = s.MessageChannel,
      E = s.String,
      A = 0,
      T = {};
    p(function () {
      o = s.location;
    });
    var G = function (e) {
        if (u(T, e)) {
          var module = T[e];
          delete T[e], module();
        }
      },
      P = function (e) {
        return function () {
          G(e);
        };
      },
      D = function (e) {
        G(e.data);
      },
      L = function (e) {
        s.postMessage(E(e), o.protocol + "//" + o.host);
      };
    (_ && b) ||
      ((_ = function (e) {
        m(arguments.length, 1);
        var t = d(e) ? e : x(e),
          n = h(arguments, 1);
        return (
          (T[++A] = function () {
            l(t, undefined, n);
          }),
          i(A),
          A
        );
      }),
      (b = function (e) {
        delete T[e];
      }),
      v
        ? (i = function (e) {
            w.nextTick(P(e));
          })
        : C && C.now
        ? (i = function (e) {
            C.now(P(e));
          })
        : S && !y
        ? ((r = (a = new S()).port2),
          (a.port1.onmessage = D),
          (i = c(r.postMessage, r)))
        : s.addEventListener &&
          d(s.postMessage) &&
          !s.importScripts &&
          o &&
          "file:" !== o.protocol &&
          !p(L)
        ? ((i = L), s.addEventListener("message", D, false))
        : (i =
            "onreadystatechange" in f("script")
              ? function (e) {
                  g.appendChild(f("script")).onreadystatechange = function () {
                    g.removeChild(this), G(e);
                  };
                }
              : function (e) {
                  setTimeout(P(e), 0);
                })),
      (exports.exports = { set: _, clear: b });
  }