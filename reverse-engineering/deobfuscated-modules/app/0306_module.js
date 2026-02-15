/**
 * Webpack Module #306
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      i,
      isCallable = require(29) /* isCallable */,
      uncurryThis = require(27) /* uncurryThis */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      l = require(307) /* module_307 */,
      c = require(344) /* module_344 */,
      d = require(296) /* module_296 */,
      u = require(136) /* module_136 */,
      internalState = require(80) /* internalState */.get,
      g = require(458) /* module_458 */,
      h = require(459) /* module_459 */,
      f = d("native-string-replace", String.prototype.replace),
      m = RegExp.prototype.exec,
      y = m,
      v = uncurryThis("".charAt),
      _ = uncurryThis("".indexOf),
      b = uncurryThis("".replace),
      w = uncurryThis("".slice),
      C =
        ((i = /b*/g),
        isCallable(m, (o = /a/), "a"),
        isCallable(m, i, "a"),
        0 !== o.lastIndex || 0 !== i.lastIndex),
      x = c.BROKEN_CARET,
      S = undefined !== /()??/.exec("")[1];
    (C || S || x || g || h) &&
      (y = function (e) {
        var t,
          n,
          o,
          i,
          uncurryThis,
          c,
          d,
          g = this,
          h = internalState(g),
          E = requireObjectCoercible(e),
          A = h.raw;
        if (A)
          return (
            (A.lastIndex = g.lastIndex),
            (t = isCallable(y, A, E)),
            (g.lastIndex = A.lastIndex),
            t
          );
        var T = h.groups,
          G = x && g.sticky,
          P = isCallable(l, g),
          D = g.source,
          L = 0,
          I = E;
        if (
          (G &&
            ((P = b(P, "y", "")),
            -1 === _(P, "g") && (P += "g"),
            (I = w(E, g.lastIndex)),
            g.lastIndex > 0 &&
              (!g.multiline ||
                (g.multiline && "\n" !== v(E, g.lastIndex - 1))) &&
              ((D = "(?: " + D + ")"), (I = " " + I), L++),
            (n = new RegExp("^(?:" + D + ")", P))),
          S && (n = new RegExp("^" + D + "$(?!\\s)", P)),
          C && (o = g.lastIndex),
          (i = isCallable(m, G ? n : g, I)),
          G
            ? i
              ? ((i.input = w(i.input, L)),
                (i[0] = w(i[0], L)),
                (i.index = g.lastIndex),
                (g.lastIndex += i[0].length))
              : (g.lastIndex = 0)
            : C && i && (g.lastIndex = g.global ? i.index + i[0].length : o),
          S &&
            i &&
            i.length > 1 &&
            isCallable(f, i[0], n, function () {
              for (uncurryThis = 1; uncurryThis < arguments.length - 2; uncurryThis++)
                undefined === arguments[uncurryThis] && (i[uncurryThis] = undefined);
            }),
          i && T)
        )
          for (i.groups = c = u(null), uncurryThis = 0; uncurryThis < T.length; uncurryThis++)
            c[(d = T[uncurryThis])[0]] = i[d[1]];
        return i;
      }),
      (exports.exports = y);
  }