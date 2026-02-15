/**
 * Module 638
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(891);
  function r(e, t, i, n) {
    this.project = e, this.type = t, this.content = i, this.data = n;
  }
  i(261).inherit(r, n), r.Type = { Warning: "Warning" }, r.prototype.type = null, r.prototype.content = null, r.prototype.toString = function () {
    return "[Object GTranslationNotificationEvent]";
  }, e.exports = r;
}
