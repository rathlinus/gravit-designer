/**
 * Webpack Module #1044
 * Type: unknown
 */

function (exports, module, require) {
    var CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      (function () {
        if ("function" == typeof ArrayBuffer) {
          var exports = CryptoJSCore.lib.WordArray,
            module = exports.init;
          (exports.init = function (e) {
            if (
              (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
              (e instanceof Int8Array ||
                ("undefined" != typeof Uint8ClampedArray &&
                  e instanceof Uint8ClampedArray) ||
                e instanceof Int16Array ||
                e instanceof Uint16Array ||
                e instanceof Int32Array ||
                e instanceof Uint32Array ||
                e instanceof Float32Array ||
                e instanceof Float64Array) &&
                (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
              e instanceof Uint8Array)
            ) {
              for (var require = e.byteLength, CryptoJSCore = [], i = 0; i < require; i++)
                CryptoJSCore[i >>> 2] |= e[i] << (24 - (i % 4) * 8);
              module.call(this, CryptoJSCore, require);
            } else module.apply(this, arguments);
          }).prototype = exports;
        }
      })(),
      CryptoJSCore.lib.WordArray);
  }