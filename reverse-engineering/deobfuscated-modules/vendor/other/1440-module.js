/**
 * Module 1440
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
  var n = require(90) /* Container */, r = require(182) /* module */, o = require(0) /* GObject */, a = require(338) /* module */, s = function (e, t, i, n) {
      this.top = t, this.left = e, this.width = i, this.height = n;
    };
  s.prototype.left = null, s.prototype.top = null, s.prototype.width = null, s.prototype.height = null, o.inherit(s, n), s.prototype.relativeY = function (e) {
    return a.normalizeNumber(this.height - e);
  }, s.prototype.write = function (e) {
    var t = new r();
    t.push(this.top), t.push(this.left), t.push(this.width), t.push(this.height), t.write(e);
  }, exports.exports = s;
}
