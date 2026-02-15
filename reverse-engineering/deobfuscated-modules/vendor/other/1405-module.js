/**
 * Module 1405
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
  var n = require(0) /* GObject */, r = (require(9) /* GLocale */, require(47) /* GLocaleKey */, require(64) /* GPlatform */);
  function o() {
  }
  n.inherit(o, n), o.import = function (e, t) {
    var i = new FileReader();
    i.onload = function () {
      var e = i.result;
      if (e.length > r.maxImgDataUrlLength)
        t("Size limit exceeded");
      else {
        var n = new Image();
        n.onload = function () {
          var i = n.naturalWidth, o = n.naturalHeight;
          o > r.maxImgLinearDimension || i > r.maxImgLinearDimension || i * o > r.maxImgAreaDots ? t("Size limit exceeded") : t(null, e, i, o);
        }, n.src = e;
      }
    }, i.onerror = function () {
      i.abort(), console.log("File error");
    }, e instanceof Uint8Array && (e = new Blob([e])), i.readAsDataURL(e);
  }, exports.exports = o;
}
