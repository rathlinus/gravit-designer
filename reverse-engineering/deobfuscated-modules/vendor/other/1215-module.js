/**
 * Module 1215
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

function (exports, module) {
  var i = function () {
    this._abort = false;
  };
  i.prototype._abort = false, i.prototype.getPosition = function () {
    return 0;
  }, i.prototype.writeSpace = function () {
    this.write(" ");
  }, i.prototype.writeln = function (e) {
    e && this.write(e), this.write("\n");
  }, i.prototype.write = function () {
    this._checkAbort(), this._write.apply(this, arguments);
  }, i.prototype.writeBuffer = function () {
    this._checkAbort(), this._writeBuffer.apply(this, arguments);
  }, i.prototype.concat = function () {
    this._checkAbort(), this._concat.apply(this, arguments);
  }, i.prototype._checkAbort = function () {
    if (this._abort)
      throw new Error("AbortError");
  }, i.prototype.asArray = function () {
  }, i.prototype._write = function () {
  }, i.prototype._writeBuffer = function () {
  }, i.prototype._concat = function () {
  }, i.prototype.abort = function () {
    this._abort = true;
  }, exports.exports = i;
}
