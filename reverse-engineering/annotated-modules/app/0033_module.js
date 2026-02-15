/**
 * Webpack Module #33
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(23) /* globalThis */,
      i = n(421) /* domIterables */,
      a = n(422) /* domTokenListPrototype */,
      r = n(671) /* arrayForEach */,
      s = n(100) /* createProperty */,
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