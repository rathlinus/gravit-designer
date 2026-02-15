/**
 * Webpack Module #427
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(93) /* stub_requires_92 */,
      i = require(244) /* module_244 */,
      a = require(101) /* stub_requires_117 */;
    exports.exports = function (e) {
      for (
        var module = o(this),
          require = a(module),
          r = arguments.length,
          s = i(r > 1 ? arguments[1] : undefined, require),
          l = r > 2 ? arguments[2] : undefined,
          c = undefined === l ? require : i(l, require);
        c > s;

      )
        module[s++] = e;
      return module;
    };
  }