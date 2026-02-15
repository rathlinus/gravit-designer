/**
 * Webpack Module #33
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(421) /* domIterables */,
      a = require(422) /* domTokenListPrototype */,
      r = require(671) /* arrayForEach */,
      s = require(100) /* createProperty */,
      l = function (e) {
        if (e && e.forEach !== r)
          try {
            s(e, "forEach", r);
          } catch (t) {
            e.forEach = r;
          }
      };
    for (var c in i) i[c] && l(o[c] && o[c].prototype);
    l(a);
  }