/**
 * Webpack Module #1058
 * Type: unknown
 */

function (exports, module, require) {
    var o;
    exports.exports =
      ((o = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (o.pad.Iso97971 = {
        pad: function (e, t) {
          e.concat(o.lib.WordArray.create([2147483648], 1)),
            o.pad.ZeroPadding.pad(e, t);
        },
        unpad: function (e) {
          o.pad.ZeroPadding.unpad(e), e.sigBytes--;
        },
      }),
      o.pad.Iso97971);
  }