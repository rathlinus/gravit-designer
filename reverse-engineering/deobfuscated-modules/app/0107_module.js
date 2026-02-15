/**
 * Webpack Module #107
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */;
    var o,
      i,
      core_export = require(25) /* core_export */,
      isCallable = require(29) /* isCallable */,
      anObject = require(35) /* anObject */,
      toString_default = require(37) /* toString_default */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      d =
        ((o = false),
        ((i = /[ac]/).exec = function () {
          return (o = true), /./.exec.apply(this, arguments);
        }),
        true === i.test("abc") && o),
      u = /./.test;
    core_export(
      { target: "RegExp", proto: true, forced: !d },
      {
        test: function (e) {
          var t = toString_default(this),
            n = requireObjectCoercible(e),
            o = t.exec;
          if (!anObject(o)) return isCallable(u, t, n);
          var i = isCallable(o, t, n);
          return null !== i && (toString_default(i), true);
        },
      }
    );
  }