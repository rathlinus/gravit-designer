/**
 * Webpack Module #107
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(20) /* polyfill_RegExp_exec */;
    var o,
      i,
      a = n(25) /* core_export */,
      r = n(29) /* isCallable */,
      s = n(35) /* anObject */,
      l = n(37) /* toString_default */,
      c = n(62) /* requireObjectCoercible */,
      d =
        ((o = !1),
        ((i = /[ac]/).exec = function () {
          return (o = !0), /./.exec.apply(this, arguments);
        }),
        !0 === i.test("abc") && o),
      u = /./.test;
    a(
      { target: "RegExp", proto: !0, forced: !d },
      {
        test: function (e) {
          var t = l(this),
            n = c(e),
            o = t.exec;
          if (!s(o)) return r(u, t, n);
          var i = r(o, t, n);
          return null !== i && (l(i), !0);
        },
      }
    );
  }