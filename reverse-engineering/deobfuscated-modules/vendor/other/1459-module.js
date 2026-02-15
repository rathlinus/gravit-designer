/**
 * Module 1459
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
  var n = require(68) /* GColor */, r = require(11) /* GUtil */, o = require(1460) /* module */, a = require(321) /* GDropShadowEffect */, s = require(51) /* GWebGLEffect */, l = require(1461) /* module */, h = require(432) /* GInnerShadowEffect */, A = require(729) /* GOverlayEffect */, c = require(249) /* GBlurEffect */, p = require(1462) /* module */, u = require(1463) /* module */, d = require(1464) /* module */, g = require(282) /* GGLBlurEffect */, f = (require(852) /* module */, function () {
    });
  f.getEffectMarkup = function (e, t, i) {
    var f = new p();
    r.each(e.getEffects().getChildren(), function (t, i) {
      if (0 != i.getProperty("vs")) {
        if (i instanceof s && i instanceof g) {
          var r = new c();
          r.setProperty("r", i.getProperty("shp").radius), r.setProperty("vs", i.getProperty("vs")), r.setProperty("ly", i.getProperty("ly")), i = r;
        }
        i instanceof c ? o.apply(f, i, e) : i instanceof a ? l.apply(f, i, e) : i instanceof h ? u.apply(f, i, e) : i instanceof A && i.getProperty("pat") instanceof n ? d.apply(f, i, e) : console.warn("Unhandled filter: " + i);
      }
    });
    var m = e.getProperty("_sfop");
    if (1 != m && f.setFillOpacity(m), 0 === f.filters.length && 1 == m)
      return "";
    var y = r.uuid();
    t.filter = "url(#" + y + ")", f.setId(y), f.toXml(i);
  }, exports.exports = f;
}
