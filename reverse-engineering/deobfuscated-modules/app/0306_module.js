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
      DataModule_307 = require(307) /* DataModule_307 */,
      DataModule_344 = require(344) /* DataModule_344 */,
      d = require(296) /* module_296 */,
      DataModule_136 = require(136) /* DataModule_136 */,
      internalState = require(80) /* internalState */.get,
      DataModule_458 = require(458) /* DataModule_458 */,
      DataModule_459 = require(459) /* DataModule_459 */,
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
      x = DataModule_344.BROKEN_CARET,
      S = undefined !== /()??/.exec("")[1];
    (C || S || x || DataModule_458 || DataModule_459) &&
      (y = function (e) {
        var t,
          n,
          o,
          i,
          uncurryThis,
          DataModule_344,
          d,
          DataModule_458 = this,
          DataModule_459 = internalState(DataModule_458),
          E = requireObjectCoercible(e),
          A = DataModule_459.raw;
        if (A)
          return (
            (A.lastIndex = DataModule_458.lastIndex),
            (t = isCallable(y, A, E)),
            (DataModule_458.lastIndex = A.lastIndex),
            t
          );
        var T = DataModule_459.groups,
          G = x && DataModule_458.sticky,
          P = isCallable(DataModule_307, DataModule_458),
          D = DataModule_458.source,
          L = 0,
          I = E;
        if (
          (G &&
            ((P = b(P, "y", "")),
            -1 === _(P, "g") && (P += "g"),
            (I = w(E, DataModule_458.lastIndex)),
            DataModule_458.lastIndex > 0 &&
              (!DataModule_458.multiline ||
                (DataModule_458.multiline && "\n" !== v(E, DataModule_458.lastIndex - 1))) &&
              ((D = "(?: " + D + ")"), (I = " " + I), L++),
            (n = new RegExp("^(?:" + D + ")", P))),
          S && (n = new RegExp("^" + D + "$(?!\\s)", P)),
          C && (o = DataModule_458.lastIndex),
          (i = isCallable(m, G ? n : DataModule_458, I)),
          G
            ? i
              ? ((i.input = w(i.input, L)),
                (i[0] = w(i[0], L)),
                (i.index = DataModule_458.lastIndex),
                (DataModule_458.lastIndex += i[0].length))
              : (DataModule_458.lastIndex = 0)
            : C && i && (DataModule_458.lastIndex = DataModule_458.global ? i.index + i[0].length : o),
          S &&
            i &&
            i.length > 1 &&
            isCallable(f, i[0], n, function () {
              for (uncurryThis = 1; uncurryThis < arguments.length - 2; uncurryThis++)
                undefined === arguments[uncurryThis] && (i[uncurryThis] = undefined);
            }),
          i && T)
        )
          for (i.groups = DataModule_344 = DataModule_136(null), uncurryThis = 0; uncurryThis < T.length; uncurryThis++)
            DataModule_344[(d = T[uncurryThis])[0]] = i[d[1]];
        return i;
      }),
      (exports.exports = y);
  }