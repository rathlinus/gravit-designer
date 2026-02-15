/**
 * Module 317 - GEllipseAnnotation
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
  var n = require(0) /* GObject */, r = require(2) /* GNode */, o = require(214) /* GEllipse */, a = require(84) /* GAnnotation */;
  require(142) /* GDate */;
  function s() {
    o.call(this), this.initializeAnnotation();
  }
  r.inheritAndMix("ane", s, o, [a]), s.prototype.validateInsertion = function (e, t) {
    return "annlst" === r.getName(e);
  }, s.prototype.isPaintable = function (e) {
    return !(e && !e.configuration.isElementAnnotationsVisible(this)) && o.prototype.isPaintable.call(this, e);
  }, s.prototype._handleChange = function (e, t) {
    if (e === r._Change.Store) {
      var require = a.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var s = Object.keys(a.MetaProperties), l = t.options.recordedProperties || {}, h = {}, A = 0, c = s.length; A < c; A++) {
          var p = s[A];
          h[p] = l.hasOwnProperty(p) ? l[p] : a.MetaProperties[p];
        }
        require = h;
      }
      this.storeProperties(t.blob, require, this.storeAction.bind(this, t));
      var u = t.blob;
      t.options.separateSaving && (u.own = { "@": r._nodeClassToNameMap[n.getTypeId(this)] }, t.blob = u.own);
    } else
      e === r._Change.Restore ? this.restoreProperties(t.blob, a.MetaProperties, this.restoreAction.bind(this, t)) : e === r._Change.BeforePropertiesChange ? this.handleBeforePropertiesChange(t) : e == r._Change.AfterPropertiesChange && (t.properties.indexOf("rsv") >= 0 || t.properties.indexOf("rmd") >= 0) && this._requestInvalidation();
    o.prototype._handleChange.call(this, e, t);
  }, s.prototype.toString = function () {
    return "[GEllipseAnnotation]";
  }, exports.exports = s;
}
