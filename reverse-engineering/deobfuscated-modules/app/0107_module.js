/**
 * Webpack Module #107
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */;
    var o,
      i,
      a = require(25) /* core_export */,
      r = require(29) /* isCallable */,
      s = require(35) /* anObject */,
      l = require(37) /* toString_default */,
      c = require(62) /* requireObjectCoercible */,
      d =
        ((o = false),
        ((i = /[ac]/).exec = function () {
          return (o = true), /./.exec.apply(this, arguments);
        }),
        true === i.test("abc") && o),
      u = /./.test;
    a(
      { target: "RegExp", proto: true, forced: !d },
      {
        test: function (e) {
          var t = l(this),
            n = c(e),
            o = t.exec;
          if (!s(o)) return r(u, t, n);
          var i = r(o, t, n);
          return null !== i && (l(i), true);
        },
      }
    );
  }