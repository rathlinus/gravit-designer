/**
 * Webpack Module #126
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(29) /* module_29 */;
    o(
      { target: "URL", proto: true, enumerable: true },
      {
        toJSON: function () {
          return i(URL.prototype.toString, this);
        },
      }
    );
  }