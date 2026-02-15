/**
 * Module 778
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
  var n = require(0) /* GObject */, r = require(280) /* GWorkspace */, o = require(779) /* EditorChangedEvent */, a = require(553) /* ToolChangedEvent */;
  function s() {
    r.call(this), this._styleEdManager = new o(), this._toolManager = new a();
  }
  n.inherit(s, r), s.prototype._styleEdManager = null, s.prototype._toolManager = null, s.prototype.getStyleEdManager = function () {
    return this._styleEdManager;
  }, s.prototype.getToolManager = function () {
    return this._toolManager;
  }, exports.exports = s;
}
