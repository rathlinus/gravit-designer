/**
 * Webpack Module #126
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(29) /* isCallable */;
    o(
      { target: "URL", proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return i(URL.prototype.toString, this);
        },
      }
    );
  }