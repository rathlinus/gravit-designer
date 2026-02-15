/**
 * Module 904
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
  var n = i(2), r = i(76), o = i(11);
  e.exports = function (e) {
    e.PaintLayers = function () {
    }, n.inheritAndMix("paintLayers", e.PaintLayers, r, [
      n.Container,
      n.Store
    ]), e.PaintLayers.PropertySetInfo = {
      F: {
        $class: e.FillPaintLayer,
        _fpt: null,
        _fop: 1,
        _fvs: !0,
        _fpx: null
      },
      B: {
        $class: e.BorderPaintLayer,
        _bop: 1,
        _bvs: !0,
        _bpt: null,
        _bpx: null,
        _bw: 1,
        _ba: e.BorderAlignment.Center,
        _bds: null,
        _blc: "square",
        _blj: "miter",
        _bml: 3,
        _bmo: !1,
        _bmi: !0,
        _bhm: null,
        _bhms: 1,
        _btm: null,
        _btms: 1
      }
    }, e.PaintLayers.prototype.hasStyleFill = function () {
      return !!this.getFillLayers(!0).length;
    }, e.PaintLayers.prototype.hasStyleBorder = function () {
      return !!this.getBorderLayers(!0).length;
    }, e.PaintLayers.prototype.getLayers = function (e, t) {
      var i = this.getChildren();
      return (e || t) && (i = i.filter(function (i) {
        return (!e || i instanceof e) && (!t || i.hasStyle());
      })), i;
    }, e.PaintLayers.prototype.getFillLayers = function (t) {
      return this.getLayers(e.FillPaintLayer, t);
    }, e.PaintLayers.prototype.getBorderLayers = function (t) {
      return this.getLayers(e.BorderPaintLayer, t);
    }, e.PaintLayers.prototype.clearLayers = function () {
      this.removeLayers(this.getLayers());
    }, e.PaintLayers.prototype.clearFillLayers = function () {
      this.removeLayers(this.getFillLayers());
    }, e.PaintLayers.prototype.clearBorderLayers = function () {
      this.removeLayers(this.getBorderLayers());
    }, e.PaintLayers.prototype.removeLayers = function (e) {
      o.each(e, function (e, t) {
        this.removeChild(t);
      }.bind(this));
    }, e.PaintLayers.prototype.hasFillMaskLayers = function () {
      var e = this.getFillLayers(!0);
      if (e.filter(function (e) {
          return e.isMask();
        }).length > 1)
        return !0;
      for (var t = 1; t < e.length; t++) {
        var i = e[t - 1], n = e[t];
        if (i && n && i.isMask() && !n.isMask())
          return !0;
      }
      return !1;
    }, e.PaintLayers.prototype.hasSeparateFillLayer = function () {
      for (var e = this.getFillLayers(!0), t = 0; t < e.length; t++)
        if (e[t].isSeparateLayer())
          return !0;
      return !1;
    }, e.PaintLayers.prototype._handleChange = function (t, i) {
      var r = this.getParent();
      if (r && (t != n._Change.BeforeChildInsert && t !== n._Change.BeforeChildRemove || r._stylePrepareGeometryChange(i), t != n._Change.AfterChildInsert && t !== n._Change.AfterChildRemove || r._styleFinishGeometryChange(i)), t == n._Change.Restore) {
        var a = Object.keys(e.PaintLayers.PropertySetInfo);
        o.each(a, function (r, o) {
          var a = e.PaintLayers.PropertySetInfo[o];
          for (var s in a)
            if (i.blob.hasOwnProperty(s)) {
              this._beginBlockChanges([
                n._Change.BeforeChildInsert,
                n._Change.AfterChildInsert
              ]);
              try {
                var l = this.getLayers(a.$class).pop();
                l || this.appendChild(l = new a.$class()), l._beginBlockChanges([
                  n._Change.BeforePropertiesChange,
                  n._Change.AfterPropertiesChange
                ]);
                try {
                  l._handleChange(t, i);
                } finally {
                  l._endBlockChanges([
                    n._Change.BeforePropertiesChange,
                    n._Change.AfterPropertiesChange
                  ]);
                }
              } finally {
                this._endBlockChanges([
                  n._Change.BeforeChildInsert,
                  n._Change.AfterChildInsert
                ]);
              }
              break;
            }
        }.bind(this));
      }
      n.prototype._handleChange.call(this, t, i);
    }, e.PaintLayers.prototype.resetMultireference = function () {
      n.Multireference.prototype.resetMultireference.call(this), this.getParent() && (this.getParent()._layId = this.getMultireferenceId());
    };
  };
}
