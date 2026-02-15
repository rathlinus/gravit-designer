/**
 * Module 319 - GArrowAnnotation
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

function (e, t, i) {
  var n = i(2), r = i(60), o = i(84), a = i(0);
  i(142);
  function s() {
    r.call(this), this.initializeAnnotation();
  }
  n.inheritAndMix("anarr", s, r, [o]), s.prototype.validateInsertion = function (e, t) {
    return "annlst" === n.getName(e);
  }, s.prototype.isPaintable = function (e) {
    return !(e && !e.configuration.isElementAnnotationsVisible(this)) && r.prototype.isPaintable.call(this, e);
  }, s.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store) {
      var i = o.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var s = Object.keys(o.MetaProperties), l = t.options.recordedProperties || {}, h = {}, A = 0, c = s.length; A < c; A++) {
          var p = s[A];
          h[p] = l.hasOwnProperty(p) ? l[p] : o.MetaProperties[p];
        }
        i = h;
      }
      this.storeProperties(t.blob, i, this.storeAction.bind(this, t));
      var u = t.blob;
      t.options.separateSaving && (u.own = { "@": n._nodeClassToNameMap[a.getTypeId(this)] }, t.blob = u.own);
    } else
      e === n._Change.Restore ? this.restoreProperties(t.blob, o.MetaProperties, this.restoreAction.bind(this, t)) : e === n._Change.BeforePropertiesChange ? this.handleBeforePropertiesChange(t) : e == n._Change.AfterPropertiesChange && (t.properties.indexOf("rsv") >= 0 || t.properties.indexOf("rmd") >= 0) && this._requestInvalidation();
    r.prototype._handleChange.call(this, e, t);
  }, s.prototype._calculateMarkerVerticeBorderScale = function (e) {
    var t = Math.sqrt(e);
    return t + 0.02 * t * e;
  }, s.prototype.toString = function () {
    return "[GArrowAnnotation]";
  }, e.exports = s;
}
