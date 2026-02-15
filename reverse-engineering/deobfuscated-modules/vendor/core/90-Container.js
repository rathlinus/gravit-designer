/**
 * Module 90
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
  function i() {
  }
  i.prototype.write = function (e) {
  }, i.prototype.isEmpty = function () {
    return false;
  }, i.prototype.equals = function (e) {
    return this === e;
  }, i.prototype.toString = function () {
    return "[Object GPDFObject]";
  }, i.Container = function () {
  }, i.Container.prototype.accept = function () {
    throw new Error("Not Implemented");
  }, i.Container.prototype.toString = function () {
    return "[Object GPDFObject.Container]";
  }, exports.exports = i;
}
