/**
 * Module 320 - GPencilAnnotation
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
  var n = require(2) /* GNode */, r = require(60) /* GPath */, o = require(84) /* GAnnotation */, a = require(0) /* GObject */, s = require(6) /* GRect */;
  function l() {
    r.call(this), this.initializeAnnotation();
  }
  n.inheritAndMix("anp", l, r, [o]), l.prototype.validateInsertion = function (e) {
    return "annlst" === n.getName(e);
  }, l.prototype.isPaintable = function (e) {
    return !(e && !e.configuration.isElementAnnotationsVisible(this)) && r.prototype.isPaintable.call(this, e);
  }, l.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store) {
      var require = o.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var l = Object.keys(o.MetaProperties), h = t.options.recordedProperties || {}, A = {}, c = 0, p = l.length; c < p; c++) {
          var u = l[c];
          A[u] = h.hasOwnProperty(u) ? h[u] : o.MetaProperties[u];
        }
        require = A;
      }
      this.storeProperties(t.blob, require, this.storeAction.bind(this, t));
      var d = t.blob;
      if (t.options.separateSaving) {
        d.own = { "@": n._nodeClassToNameMap[a.getTypeId(this)] }, t.blob = d.own;
        var g = this.getGeometryBBox();
        t.blob.bbox = g ? s.serialize(g) : null;
      }
    } else
      e === n._Change.Restore ? this.restoreProperties(t.blob, o.MetaProperties, this.restoreAction.bind(this, t)) : e === n._Change.BeforePropertiesChange ? this.handleBeforePropertiesChange(t) : e === n._Change.AfterPropertiesChange && (t.properties.indexOf("rsv") >= 0 || t.properties.indexOf("rmd") >= 0) && this._requestInvalidation();
    r.prototype._handleChange.call(this, e, t);
  }, l.prototype.toString = function () {
    return "[GPencilAnnotation]";
  }, exports.exports = l;
}
