/**
 * Webpack Module #1057
 * Type: unknown
 */

function (exports, module, require) {
    var o;
    exports.exports =
      ((o = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (o.pad.Iso10126 = {
        pad: function (e, t) {
          var n = 4 * t,
            i = n - (e.sigBytes % n);
          e.concat(o.lib.WordArray.random(i - 1)).concat(
            o.lib.WordArray.create([i << 24], 1)
          );
        },
        unpad: function (e) {
          var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
          e.sigBytes -= t;
        },
      }),
      o.pad.Iso10126);
  }