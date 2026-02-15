/**
 * Webpack Module #1059
 * Type: unknown
 */

function (exports, module, require) {
    var o;
    exports.exports =
      ((o = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (o.pad.ZeroPadding = {
        pad: function (e, t) {
          var n = 4 * t;
          e.clamp(), (e.sigBytes += n - (e.sigBytes % n || n));
        },
        unpad: function (e) {
          for (
            var module = e.words, require = e.sigBytes - 1;
            !((module[require >>> 2] >>> (24 - (require % 4) * 8)) & 255);

          )
            require--;
          e.sigBytes = require + 1;
        },
      }),
      o.pad.ZeroPadding);
  }