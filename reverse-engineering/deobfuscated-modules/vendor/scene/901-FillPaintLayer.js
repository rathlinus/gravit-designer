/**
 * Module 901
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
  var n = require(2) /* GNode */, r = require(11) /* GUtil */, o = require(118) /* module */;
  exports.exports = function (e) {
    e.FillPaintLayer = function (t, i, n, r) {
      e.PaintLayer.call(this, t, i, n, r);
    }, n.inheritAndMix("fillPaintLayer", e.FillPaintLayer, e.PaintLayer), e.FillPaintLayer.prototype._handleChange = function (t, i) {
      if (t == n._Change.Restore) {
        var a = {};
        a.blob = r.extend({}, i.blob), i = a;
        for (var s = [
              "_fpt",
              "_fvs",
              "_fop",
              "_fpx"
            ], l = 0; l < s.length; l++) {
          var h = s[l], A = h.replace(/f/g, "");
          i.blob.hasOwnProperty(h) && (i.blob[A] = i.blob[h]);
        }
      } else if (t === n._Change.AfterPropertiesChange) {
        if (p = this.getScene()) {
          if (-1 !== (l = i.properties.indexOf("_pt"))) {
            var c = i.values[l];
            c && c !== this.$_pt && c.hasMixin(o) && p.destroy([c]);
          }
          this.$_pt && this.$_pt.hasMixin(o) && p.addDestroyableIfAbsent(this.$_pt);
        }
      } else if (t === n._Change.WorkspaceAttached) {
        (p = this.getScene()) && this.$_pt && this.$_pt.hasMixin(o) && p.addDestroyable(this.$_pt);
      } else if (t === n._Change.WorkspaceDetach) {
        var p;
        (p = this.getScene()) && this.$_pt && this.$_pt.hasMixin(o) && p.destroy([this.$_pt]);
      }
      e.PaintLayer.prototype._handleChange.call(this, t, i);
    }, e.FillPaintLayer.prototype.isSeparateLayer = function () {
      return "color" === this.$_bl;
    }, e.FillPaintLayer.equals = function (e, t) {
      var i = true;
      return [
        "_bl",
        "_op",
        "_pt",
        "_px"
      ].forEach(function (n) {
        i = i && r.equals(e.getProperty(n), t.getProperty(n));
      }.bind(this)), i;
    }, e.FillPaintLayer.prototype.getScene = function () {
      var e = this.getOwnerStylable();
      return e && e.getScene ? e.getScene() : null;
    };
  };
}
