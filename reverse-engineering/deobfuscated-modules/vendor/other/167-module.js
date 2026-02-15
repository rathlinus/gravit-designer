/**
 * Module 167
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
  var n = require(0) /* GObject */, r = require(505) /* module */;
  function o() {
  }
  n.inherit(o, r), o.prototype.key = null, o.prototype.keyUTF = null, o.prototype.timestamp = 0, o.prototype.preventDefault = null, o.prototype.stopPropagation = null, o.prototype.toString = function () {
    return "[Object GKeyEvent(" + this._paramsToString() + ")]";
  }, o.prototype._paramsToString = function () {
    return "key=" + this.key + (this.keyUTF ? " keyUTF:" + this.keyUTF : "") + (this.timestamp ? " timestamp:" + this.timestamp : "");
  }, o.Down = function () {
  }, n.inherit(o.Down, o), o.Down.prototype.toString = function () {
    return "[Object GKeyEvent.Down(" + this._paramsToString() + ")]";
  }, o.Release = function () {
  }, n.inherit(o.Release, o), o.Release.prototype.toString = function () {
    return "[Object GKeyEvent.Release(" + this._paramsToString() + ")]";
  }, o.Press = function () {
  }, n.inherit(o.Press, o), o.Press.prototype.toString = function () {
    return "[Object GKeyEvent.Press(" + this._paramsToString() + ")]";
  }, exports.exports = o;
}
