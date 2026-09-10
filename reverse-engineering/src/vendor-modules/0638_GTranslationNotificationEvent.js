/**
 * chunk.vendor.js Module #638
 * Type: class
 * Name: GTranslationNotificationEvent
 */

function (e, t, i) {
      var n = i(891);

      function r(e, t, i, n) {
        ((this.project = e),
          (this.type = t),
          (this.content = i),
          (this.data = n));
      }
      (i(261).inherit(r, n),
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