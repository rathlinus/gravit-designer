/**
 * Webpack Module #681
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_65 = require(65) /* DataModule_65 */,
      i = require(93) /* stub_requires_92 */,
      DataModule_240 = require(240) /* DataModule_240 */,
      r = require(101) /* stub_requires_117 */,
      s = TypeError,
      l = "Reduce of empty array with no initial value",
      c = function (e) {
        return function (t, n, c, d) {
          var u = i(t),
            p = DataModule_240(u),
            g = r(u);
          if ((DataModule_65(n), 0 === g && c < 2)) throw new s(l);
          var h = e ? g - 1 : 0,
            f = e ? -1 : 1;
          if (c < 2)
            for (;;) {
              if (h in p) {
                (d = p[h]), (h += f);
                break;
              }
              if (((h += f), e ? h < 0 : g <= h)) throw new s(l);
            }
          for (; e ? h >= 0 : g > h; h += f) h in p && (d = n(d, p[h], h, u));
          return d;
        };
      };
    exports.exports = { left: c(false), right: c(true) };
  }