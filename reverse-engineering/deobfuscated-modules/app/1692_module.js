/**
 * Webpack Module #1692
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */,
      (function () {
        function e() {
          return new Promise((e, t) => {
            const n = new FileReader();
            (n.onload = () => {
              e(n.result);
            }),
              (n.onerror = t),
              n.readAsArrayBuffer(this);
          });
        }
        "File" in self &&
          (File.prototype.arrayBuffer = File.prototype.arrayBuffer || e),
          "Blob" in self &&
            (Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || e);
      })();
  }