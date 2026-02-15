/**
 * Webpack Module #96
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(110) /* module_110 */,
      a = require(200) /* module_200 */,
      r = require(29) /* module_29 */,
      s = require(27) /* module_27 */,
      l = require(21) /* module_21 */,
      c = require(35) /* module_35 */,
      d = require(241) /* module_241 */,
      u = require(157) /* module_157 */,
      p = require(666) /* module_666 */,
      g = require(295) /* module_295 */,
      h = String,
      f = i("JSON", "stringify"),
      m = s(/./.exec),
      y = s("".charAt),
      v = s("".charCodeAt),
      _ = s("".replace),
      b = s((1).toString),
      w = /[\uD800-\uDFFF]/g,
      C = /^[\uD800-\uDBFF]$/,
      x = /^[\uDC00-\uDFFF]$/,
      S =
        !g ||
        l(function () {
          var e = i("Symbol")("stringify detection");
          return (
            "[null]" !== f([e]) || "{}" !== f({ a: e }) || "{}" !== f(Object(e))
          );
        }),
      E = l(function () {
        return (
          '"\\udf06\\ud834"' !== f("\udf06\ud834") ||
          '"\\udead"' !== f("\udead")
        );
      }),
      A = function (e, t) {
        var n = u(arguments),
          o = p(t);
        if (c(o) || (undefined !== e && !d(e)))
          return (
            (n[1] = function (e, t) {
              if ((c(o) && (t = r(o, this, h(e), t)), !d(t))) return t;
            }),
            a(f, null, n)
          );
      },
      T = function (e, t, n) {
        var o = y(n, t - 1),
          i = y(n, t + 1);
        return (m(C, e) && !m(x, i)) || (m(x, e) && !m(C, o))
          ? "\\u" + b(v(e, 0), 16)
          : e;
      };
    f &&
      o(
        { target: "JSON", stat: true, arity: 3, forced: S || E },
        {
          stringify: function (e, t, n) {
            var o = u(arguments),
              i = a(S ? A : f, null, o);
            return E && "string" == typeof i ? _(i, w, T) : i;
          },
        }
      );
  }