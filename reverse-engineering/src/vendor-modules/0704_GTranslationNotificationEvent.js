/**
 * chunk.vendor.js Module #704
 * Type: class
 * Name: GTranslationNotificationEvent
 */

function (e, t, i) {
      "use strict";
      i(3);
      var n = i(947);

      function r(e, t, i, n) {
        ((this.project = e),
          (this.type = t),
          (this.content = i),
          (this.data = n));
      }
      (i(269).inherit(r, n),
        (r.Type = {
          Warning: "Warning",
        }),
        (r.prototype.type = null),
        (r.prototype.content = null),
        (r.prototype.toString = function () {
          return "[Object GTranslationNotificationEvent]";
        }),
        (e.exports = r));
    }