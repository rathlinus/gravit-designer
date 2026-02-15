/**
 * Module 265 - GBackground
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
  var n = require(50) /* GPattern */, r = null;
  function o() {
  }
  n.inherit("B", o), o.equals = function (e, t) {
    return !e && e === t || !(!e || !t);
  }, o.prototype.getAverageColor = function () {
    return [
      0,
      0,
      0,
      0
    ];
  }, o.prototype.asCSSBackground = function (e) {
    return r || (r = "url(\"data:image/svg+xml;base64," + btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"20\" viewBox=\"0 0 5 10\"><rect width=\"110%\" x=\"-5%\" y=\"-5%\" height=\"110%\" fill=\"#545454\"/><line x1=\"-2\" y1=\"1\" x2=\"7\" y2=\"10\" stroke=\"#6e6e6e\" stroke-width=\"2\"/><line x1=\"-2\" y1=\"6\" x2=\"7\" y2=\"15\" stroke=\"#6e6e6e\" stroke-width=\"2\"/><line x1=\"-2\" y1=\"-4\" x2=\"7\" y2=\"5\" stroke=\"#6e6e6e\" stroke-width=\"2\"/></svg>") + "\")"), r;
  }, o.prototype.toString = function () {
    return "[Object GBackground]";
  }, exports.exports = o;
}
