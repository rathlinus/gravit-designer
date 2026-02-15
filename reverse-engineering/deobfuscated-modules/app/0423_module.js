/**
 * Webpack Module #423
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */,
      i = require(43) /* wellKnownSymbol */,
      a = require(49) /* hasOwnProperty_wrapper */,
      r = require(74) /* createNonEnumerableProperty */,
      s = i("iterator");
    exports.exports = !o(function () {
      var e = new URL("b?a=1&b=2&c=3", "https://a"),
        t = e.searchParams,
        n = new URLSearchParams("a=1&a=2&b=3"),
        o = "";
      return (
        (e.pathname = "c%20d"),
        t.forEach(function (e, n) {
          t.delete("b"), (o += n + e);
        }),
        n.delete("a", 2),
        n.delete("b", undefined),
        (r &&
          (!e.toJSON ||
            !n.has("a", 1) ||
            n.has("a", 2) ||
            !n.has("a", undefined) ||
            n.has("b"))) ||
          (!t.size && (r || !a)) ||
          !t.sort ||
          "https://a/c%20d?a=1&c=3" !== e.href ||
          "3" !== t.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !t[s] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("https://тест").host ||
          "#%D0%B1" !== new URL("https://a#б").hash ||
          "a1c3" !== o ||
          "x" !== new URL("https://x", undefined).host
      );
    });
  }