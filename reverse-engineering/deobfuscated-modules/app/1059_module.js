/**
 * Webpack Module #1059
 * Type: unknown
 */

function (exports, module, require) {
    var CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(98) /* CryptoJSCipherBase */,
      (CryptoJSCore.pad.ZeroPadding = {
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
      CryptoJSCore.pad.ZeroPadding);
  }