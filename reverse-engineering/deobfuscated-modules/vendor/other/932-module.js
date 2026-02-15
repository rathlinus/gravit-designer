/**
 * Module 932
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
  var n = require(250) /* module_250 */, r = require(659) /* module */;
  function o() {
  }
  o.getDecoder = function (e) {
    if ("string" == typeof e) {
      var module = /^data:.{0,255};base64,/i.exec(e);
      if (module) {
        var require = e.substring(module.pop().length);
        if (require.length && require.length % 4 == 0) {
          var o = n.toByteArray(require);
          return new r(o);
        }
        return null;
      }
    } else if (ArrayBuffer.isView(e))
      return new r(e);
    return null;
  }, o.decodeCMYK = function (e) {
    return "string" == typeof e && (e = o.getDecoder(e)), e && e.getColorSpace() === r.ColorSpace.CMYK ? e.getData() : null;
  }, exports.exports = o;
}
