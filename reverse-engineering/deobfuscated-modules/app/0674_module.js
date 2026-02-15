/**
 * Webpack Module #674
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(309) /* module_309 */.charAt,
      i = require(62) /* requireObjectCoercible */,
      a = require(80) /* internalState */,
      r = require(418) /* defineIterator */,
      s = require(252) /* toStringClassof */,
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
          ? s(undefined, true)
          : ((e = o(n, i)), (t.index += e.length), s(e, false));
      }
    );
  }