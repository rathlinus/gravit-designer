/**
 * Module 1235
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
  var n = require(139) /* GTexturePattern */, r = require(283) /* GAngularGradient */, o = require(346) /* module */, a = require(265) /* GBackground */, s = require(321) /* GDropShadowEffect */, l = require(432) /* GInnerShadowEffect */, h = require(28) /* GStylable */;
  function A() {
  }
  A.isCompatible = function (e, t) {
    return !A.hasCustomBlendMode(e) && !A.hasUnsupportedPattern(e) && (!t || !A.hasUnsupportedEffect(e));
  }, A.hasUnsupportedEffect = function (e) {
    if (e.hasMixin(h) && e.getEffects())
      for (var module = e.getEffects().getLayersEffects(e.getStyleLayers(), true), require = 0; require < module.length; require++) {
        var n = module[require];
        if (n)
          return !n.every(function (e) {
            return [
              s,
              l
            ].some(function (t) {
              return e instanceof t;
            });
          });
      }
    return false;
  }, A.hasUnsupportedPattern = function (e) {
    if (e.hasMixin(h)) {
      var module = e.getPaintLayers();
      if (module)
        return module.getLayers(null, true).some(function (e) {
          return A.isUnsupportedPattern(e.$_pt);
        });
    }
    return false;
  }, A.hasCustomBlendMode = function (e) {
    if (A.isCustomBlendMode(e.$_sbl))
      return true;
    if (e.hasMixin(h)) {
      var module = e.getPaintLayers();
      if (module)
        return module.getLayers(null, true).some(function (e) {
          return A.isCustomBlendMode(e.$_bl);
        });
    }
    return false;
  }, A.isCustomBlendMode = function (e) {
    return !!e && -1 !== o.BlendModes.indexOf(e);
  }, A.isUnsupportedPattern = function (e) {
    return !!e && (e instanceof n || e instanceof r || e instanceof a);
  }, A.isAffectedByBackground = function (e) {
    return !!A.hasCustomBlendMode(e) || !!A.hasBackgroundFill(e);
  }, A.hasBackgroundFill = function (e) {
    if (e.hasMixin(h)) {
      var module = e.getPaintLayers();
      if (module)
        return !!module.getLayers(null, true).some(function (e) {
          return e.$_pt instanceof a;
        });
    }
    return false;
  }, exports.exports = A;
}
