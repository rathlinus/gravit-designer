/**
 * Module 909
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
  var n = require(2) /* GNode */, r = require(7) /* GTransform */;
  exports.exports = function (e) {
    e.Layout = function () {
    }, e.Layout.prototype._relayout = false, e.Layout.prototype._layoutTransform = null, e.Layout.prototype._relayoutNow = false, e.Layout.prototype._handleLayoutChange = function (t, i) {
      if (!this.isRecordedTransaction())
        if (t === e._Change.GeometrySizeChanged && this.getFirstChild() && !this._relayout)
          if (this._layoutTransform)
            this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null;
          else {
            var r = this.getGeometryBBox(), o = i[1];
            this._layoutAnchorContents(r, o, null);
          }
        else if (!(t === n._Change.AfterPropertiesChange && i.properties.indexOf("trf") >= 0) || this._relayout && this._layoutTransform)
          t === n._Change.Restore && (this._layoutTransform = null);
        else {
          var a, s = i.properties.indexOf("trf"), l = this.getProperty("trf"), h = i.values[s];
          h && (a = h.inverted()), l && (a = a ? a.multiplied(l) : l), this._layoutTransform = a;
        }
    }, e.Layout.prototype._layoutAnchorContents = function (t, i, n) {
      var o = n;
      if (!n) {
        var a = i.getWidth() > e.Transform.MinimalDimention ? i.getWidth() : e.Transform.MinimalDimention, s = i.getHeight() > e.Transform.MinimalDimention ? i.getHeight() : e.Transform.MinimalDimention, l = t.getWidth() > e.Transform.MinimalDimention ? t.getWidth() : e.Transform.MinimalDimention, h = t.getHeight() > e.Transform.MinimalDimention ? t.getHeight() : e.Transform.MinimalDimention;
        o = new r().translated(-i.getX(), -i.getY()).scaled(l / a, h / s).translated(t.getX(), t.getY());
      }
      for (var A = this.getFirstChild(); null !== A; A = A.getNext())
        A.hasMixin(e.Transform) && A.hasMixin(e.Anchor) && (A.getProperty("hacr") || A.getProperty("vacr")) && (A.dependentUpdate = true, A.relayoutAnchored(o), A.dependentUpdate = false);
      this._relayout = false;
    }, e.Layout.prototype.toString = function () {
      return "[Mixin GElement.Layout]";
    };
  };
}
