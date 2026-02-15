/**
 * Webpack Module #96
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(110) /* module_110 */,
      advanceStringIndex = require(200) /* advanceStringIndex */,
      isCallable = require(29) /* isCallable */,
      uncurryThis = require(27) /* uncurryThis */,
      tryCall = require(21) /* tryCall */,
      anObject = require(35) /* anObject */,
      DataModule_241 = require(241) /* DataModule_241 */,
      u = require(157) /* stub_requires_27 */,
      DataModule_666 = require(666) /* DataModule_666 */,
      DataModule_295 = require(295) /* DataModule_295 */,
      h = String,
      f = i("JSON", "stringify"),
      m = uncurryThis(/./.exec),
      y = uncurryThis("".charAt),
      v = uncurryThis("".charCodeAt),
      _ = uncurryThis("".replace),
      b = uncurryThis((1).toString),
      w = /[\uD800-\uDFFF]/g,
      C = /^[\uD800-\uDBFF]$/,
      x = /^[\uDC00-\uDFFF]$/,
      S =
        !DataModule_295 ||
        tryCall(function () {
          var e = i("Symbol")("stringify detection");
          return (
            "[null]" !== f([e]) || "{}" !== f({ a: e }) || "{}" !== f(Object(e))
          );
        }),
      E = tryCall(function () {
        return (
          '"\\udf06\\ud834"' !== f("\udf06\ud834") ||
          '"\\udead"' !== f("\udead")
        );
      }),
      A = function (e, t) {
        var n = u(arguments),
          core_export = DataModule_666(t);
        if (anObject(core_export) || (undefined !== e && !DataModule_241(e)))
          return (
            (n[1] = function (e, t) {
              if ((anObject(core_export) && (t = isCallable(core_export, this, h(e), t)), !DataModule_241(t))) return t;
            }),
            advanceStringIndex(f, null, n)
          );
      },
      T = function (e, t, n) {
        var core_export = y(n, t - 1),
          i = y(n, t + 1);
        return (m(C, e) && !m(x, i)) || (m(x, e) && !m(C, core_export))
          ? "\\u" + b(v(e, 0), 16)
          : e;
      };
    f &&
      core_export(
        { target: "JSON", stat: true, arity: 3, forced: S || E },
        {
          stringify: function (e, t, n) {
            var core_export = u(arguments),
              i = advanceStringIndex(S ? A : f, null, core_export);
            return E && "string" == typeof i ? _(i, w, T) : i;
          },
        }
      );
  }