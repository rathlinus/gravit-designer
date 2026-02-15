/**
 * Webpack Module #674
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(309) /* module_309 */.charAt,
      i = n(62) /* requireObjectCoercible */,
      a = n(80) /* internalState */,
      r = n(418) /* defineIterator */,
      s = n(252) /* toStringClassof */,
      l = a.set,
      c = a.getterFor("String Iterator");
    r(
      String,
      "String",
      function (e) {
        l(this, { type: "String Iterator", string: i(e), index: 0 });
      },
      function () {
        var e,
          t = c(this),
          n = t.string,
          i = t.index;
        return i >= n.length
          ? s(void 0, !0)
          : ((e = o(n, i)), (t.index += e.length), s(e, !1));
      }
    );
  }