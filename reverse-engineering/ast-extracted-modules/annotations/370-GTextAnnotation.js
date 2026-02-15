/**
 * Module 370 - GTextAnnotation
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
  i(0);
  var n = i(2), r = i(70), o = i(84), a = i(7), s = i(17), l = i(9), h = i(47);
  i(142);
  function A() {
    r.call(this), this.initializeAnnotation();
    var e = new a(1, 0, 0, 1, 0, 0);
    this.transformSourceBBox(e), this.setText(l.get(new h("GTextAnnotation", "text.new-annotation")), 1, 1), this.setProperties(["_fc"], [s.BLACK]);
  }
  n.inheritAndMix("ant", A, r, [o]), A.prototype.validateInsertion = function (e, t) {
    return "annlst" === n.getName(e);
  }, A.prototype.isPaintable = function (e) {
    return !(e && !e.configuration.isElementAnnotationsVisible(this)) && r.prototype.isPaintable.call(this, e);
  }, A.prototype.isEmptyTextAllowed = function () {
    return !1;
  }, A.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store) {
      var i = o.MetaProperties;
      if (this.recordedTransaction || t.options.recordedTransaction) {
        for (var a = Object.keys(o.MetaProperties), s = t.options.recordedProperties || {}, l = {}, h = 0, A = a.length; h < A; h++) {
          var c = a[h];
          l[c] = s.hasOwnProperty(c) ? s[c] : o.MetaProperties[c];
        }
        i = l;
      }
      this.storeProperties(t.blob, i, this.storeAction.bind(this, t));
    } else
      e === n._Change.Restore ? this.restoreProperties(t.blob, o.MetaProperties, this.restoreAction.bind(this, t)) : e === n._Change.BeforePropertiesChange && this.handleBeforePropertiesChange(t);
    r.prototype._handleChange.call(this, e, t);
  }, A.prototype.toString = function () {
    return "[GTextAnnotation]";
  }, e.exports = A;
}
