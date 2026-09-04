/**
 * chunk.vendor.js Module #967
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = function (e) {
        e.marketing = {
          listFiles: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e.GET("/marketing/api/v1/list", t);
          },
        };
      };
    }