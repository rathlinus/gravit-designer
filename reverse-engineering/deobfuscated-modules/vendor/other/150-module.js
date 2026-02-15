/**
 * Module 150
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

function (exports, module, require) {
  var n = require(0) /* GObject */, r = require(72) /* GEvent */, o = require(514) /* GModifiers */, a = function () {
      this.changed = new o();
    };
  n.inherit(a, r), a.prototype.changed = null, a.prototype.toString = function () {
    return "[Object GModifiersChangedEvent]";
  }, exports.exports = a;
}
