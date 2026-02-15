/**
 * Webpack Module #674
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_309 = require(309) /* DataModule_309 */.charAt,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      internalState = require(80) /* internalState */,
      defineIterator = require(418) /* defineIterator */,
      toStringClassof = require(252) /* toStringClassof */,
      l = internalState.set,
      c = internalState.getterFor("String Iterator");
    defineIterator(
      String,
      "String",
      function (e) {
        l(this, { type: "String Iterator", string: requireObjectCoercible(e), index: 0 });
      },
      function () {
        var e,
          t = c(this),
          n = t.string,
          requireObjectCoercible = t.index;
        return requireObjectCoercible >= n.length
          ? toStringClassof(undefined, true)
          : ((e = DataModule_309(n, requireObjectCoercible)), (t.index += e.length), toStringClassof(e, false));
      }
    );
  }