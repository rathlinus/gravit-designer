/**
 * Webpack Module #136
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o,
      toString_default = require(37) /* toString_default */,
      a = require(617) /* module_617 */,
      r = require(301) /* module_301 */,
      s = require(259) /* module_259 */,
      l = require(406) /* stub_requires_110 */,
      c = require(242) /* module_242 */,
      d = require(300) /* module_300 */,
      u = d("IE_PROTO"),
      p = function () {},
      g = function (e) {
        return "<script>" + e + "</script>";
      },
      h = function (e) {
        e.write(g("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      f = function () {
        try {
          o = new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        f =
          "undefined" != typeof document
            ? document.domain && o
              ? h(o)
              : (((t = c("iframe")).style.display = "none"),
                l.appendChild(t),
                (t.src = String("javascript:")),
                (e = t.contentWindow.document).open(),
                e.write(g("document.F=Object")),
                e.close(),
                e.F)
            : h(o);
        for (var require = r.length; require--; ) delete f.prototype[r[require]];
        return f();
      };
    (s[u] = true),
      (exports.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((p.prototype = toString_default(e)),
                (n = new p()),
                (p.prototype = null),
                (n[u] = e))
              : (n = f()),
            undefined === t ? n : a.f(n, t)
          );
        });
  }