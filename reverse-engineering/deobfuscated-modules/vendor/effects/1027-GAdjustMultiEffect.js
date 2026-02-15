/**
 * Module 1027 - GAdjustMultiEffect
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
  var n = require(535) /* GMultiEffect */, r = require(282) /* GGLBlurEffect */, o = require(731) /* GGLDotScreenEffect */, a = require(728) /* GGLSepiaEffect */, s = require(2) /* GNode */, l = require(9) /* GLocale */;
  function h() {
    n.call(this);
  }
  s.inherit("adjustMultiEffect", h, n), h.prototype.getNodeNameTranslated = function () {
    return l.getValue("GAdjustMultiEffect", "name", this.getNodeName());
  }, h.prototype.toString = function () {
    return "[Object GAdjustMultiEffect]";
  }, n.register(h, [
    o,
    a,
    r
  ]), exports.exports = h;
}
