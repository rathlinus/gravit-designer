/**
 * Webpack Module #1692
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */,
      (function () {
        function exports() {
          return new Promise((e, t) => {
            const require = new FileReader();
            (require.onload = () => {
              e(require.result);
            }),
              (require.onerror = t),
              require.readAsArrayBuffer(this);
          });
        }
        "File" in self &&
          (File.prototype.arrayBuffer = File.prototype.arrayBuffer || exports),
          "Blob" in self &&
            (Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || exports);
      })();
  }