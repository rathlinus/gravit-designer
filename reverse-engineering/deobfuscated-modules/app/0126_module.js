/**
 * Webpack Module #126
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(29) /* isCallable */;
    o(
      { target: "URL", proto: true, enumerable: true },
      {
        toJSON: function () {
          return i(URL.prototype.toString, this);
        },
      }
    );
  }