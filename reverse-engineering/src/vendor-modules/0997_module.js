/**
 * chunk.vendor.js Module #997
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(89);
      t.parse = function (e, t, i, r) {
        for (
          var o = new n.Parser(e, t),
            a = r ? o.parseUShort : o.parseULong,
            s = [],
            l = 0;
          l < i + 1;
          l += 1
        ) {
          var h = a.call(o);
          (r && (h *= 2), s.push(h));
        }
        return s;
      };
    }