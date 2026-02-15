/**
 * Module 902
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
  var n = require(54) /* GVertexContainer */, r = require(2) /* GNode */, o = require(11) /* GUtil */, a = require(118) /* module */;
  exports.exports = function (e) {
    e.BorderPaintLayer = function (t, i, n, r) {
      e.PaintLayer.call(this, t, i, n, r), this._setDefaultProperties(e.BorderPaintLayer.VisualProperties, e.BorderPaintLayer.GeometryProperties, e.BorderPaintLayer.MetaProperties);
    }, r.inheritAndMix("borderPaintLayer", e.BorderPaintLayer, e.PaintLayer), e.BorderPaintLayer.VisualProperties = { _bds: null }, e.BorderPaintLayer.MetaProperties = { _bs: false }, e.BorderPaintLayer.GeometryProperties = {
      _bw: 1,
      _ba: e.BorderAlignment.Center,
      _blc: "square",
      _blj: "miter",
      _bml: 3,
      _bhm: null,
      _bhms: 1,
      _bhmo: false,
      _bhmi: 1,
      _btm: null,
      _btms: 1,
      _btmo: false,
      _btmi: 1
    }, e.BorderPaintLayer.prototype.assignFrom = function (t) {
      t instanceof e.BorderPaintLayer && this.transferProperties(t, [
        e.BorderPaintLayer.VisualProperties,
        e.BorderPaintLayer.GeometryProperties
      ]), e.PaintLayer.prototype.assignFrom.call(this, t);
    }, e.BorderPaintLayer.prototype.hasStyle = function () {
      return e.PaintLayer.prototype.hasStyle.call(this) && !!this.$_bw;
    }, e.BorderPaintLayer.prototype._handleChange = function (t, i) {
      if (t == r._Change.Restore) {
        var s = {};
        s.blob = o.extend({}, i.blob), i = s;
        for (var l = [
              "_bpt",
              "_bvs",
              "_bop",
              "_bpx"
            ], h = 0; h < l.length; h++) {
          var A = l[h], c = A.replace(/b/g, "");
          i.blob.hasOwnProperty(A) && (i.blob[c] = i.blob[A]);
        }
        "_bmo" in i.blob && (i.blob._btmo = i.blob._bmo, i.blob._bhmo = i.blob._bmo), "_bmi" in i.blob && (i.blob._btmi = i.blob._bmi ? 1 : 0, i.blob._bhmi = i.blob._bmi ? 1 : 0), "_btmi" in i.blob && "boolean" == typeof i.blob._btmi && (i.blob._btmi = i.blob._btmi ? 1 : 0), "_bhmi" in i.blob && "boolean" == typeof i.blob._bhmi && (i.blob._bhmi = i.blob._bhmi ? 1 : 0), this.restoreProperties(i.blob, e.BorderPaintLayer.VisualProperties), this.restoreProperties(i.blob, e.BorderPaintLayer.MetaProperties), this.restoreProperties(i.blob, e.BorderPaintLayer.GeometryProperties, function (e, t) {
          return ("_bhm" === e || "_btm" === e) && t && t instanceof Array ? n.deserialize(t) : t;
        });
      } else if (t == r._Change.Store)
        this.storeProperties(i.blob, e.BorderPaintLayer.VisualProperties), this.storeProperties(i.blob, e.BorderPaintLayer.MetaProperties), this.storeProperties(i.blob, e.BorderPaintLayer.GeometryProperties, function (e, t) {
          return ("_bhm" === e || "_btm" === e) && t && t instanceof n ? n.serialize(t) : t;
        });
      else if (t === r._Change.AfterPropertiesChange) {
        if (u = this.getScene()) {
          if (-1 !== (h = i.properties.indexOf("_pt"))) {
            var p = i.values[h];
            p && p !== this.$_pt && p.hasMixin(a) && u.destroy([p]);
          }
          this.$_pt && this.$_pt.hasMixin(a) && u.addDestroyableIfAbsent(this.$_pt);
        }
      } else if (t === r._Change.WorkspaceAttached) {
        (u = this.getScene()) && this.$_pt && this.$_pt.hasMixin(a) && u.addDestroyable(this.$_pt);
      } else if (t === r._Change.WorkspaceDetach) {
        var u;
        (u = this.getScene()) && this.$_pt && this.$_pt.hasMixin(a) && u.destroy([this.$_pt]);
      }
      e.PaintLayer.prototype._handleChange.call(this, t, i), this._handleVisualChangeForProperties(t, i, e.BorderPaintLayer.VisualProperties), this._handleGeometryChangeForProperties(t, i, o.extend({
        _vs: true,
        _pt: null
      }, e.BorderPaintLayer.GeometryProperties));
    }, e.BorderPaintLayer.equals = function (e, t) {
      var i = true;
      return [
        "_ba",
        "_bds",
        "_bhm",
        "_bhmi",
        "_bhmo",
        "_bhms",
        "_bl",
        "_blc",
        "_blj",
        "_bml",
        "_bs",
        "_btm",
        "_btmi",
        "_btmo",
        "_btms",
        "_bw",
        "_op",
        "_pt",
        "_px"
      ].forEach(function (n) {
        i = i && o.equals(e.getProperty(n), t.getProperty(n));
      }.bind(this)), i;
    }, e.BorderPaintLayer.prototype.getScene = function () {
      var e = this.getOwnerStylable();
      return e && e.getScene ? e.getScene() : null;
    };
  };
}
