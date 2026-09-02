/**
 * chunk.vendor.js Module #104
 * Type: unknown
 */

function (e, t, i) {
      var n = i(6),
        r = i(2),
        o = i(0),
        a = i(69),
        s = i(22),
        l = i(28),
        h = i(11),
        A = i(12);

      function c() {
        (a.call(this),
          this._setDefaultProperties(c.MetaProperties),
          this._setDefaultProperties(s.Anchor.MetaProperties));
      }
      (o.inheritAndMix(c, a, [s.Anchor]),
        (c.MetaProperties = {
          clk: !1,
        }),
        (c.prototype.skipBorderUpdate = !1),
        (c.prototype.validateInsertion = function (e, t) {
          return (
            "layer" === r.getName(e) ||
            e instanceof c ||
            "page" === r.getName(e)
          );
        }),
        (c.prototype.assignFrom = function (e) {
          (e instanceof c &&
            this.transferProperties(e, [
              c.MetaProperties,
              s.Anchor.MetaProperties,
            ]),
            a.prototype.assignFrom.call(this, e));
        }),
        (c.prototype.getCenter = function (e) {
          var t = this.getGeometryBBox();
          return t ? t.getSide(n.Side.CENTER) : null;
        }),
        (c.prototype._handleChange = function (e, t) {
          (e === r._Change.Store
            ? this.storeProperties(t.blob, c.MetaProperties)
            : e === r._Change.Restore
              ? this.restoreProperties(t.blob, c.MetaProperties)
              : e === r._Change.AfterPropertiesChange &&
                t.properties.indexOf("trf") >= 0 &&
                this._scene &&
                !this.isRecordedTransaction() &&
                !this.skipBorderUpdate &&
                this._handleBorderScale(t),
            a.prototype._handleChange.call(this, e, t),
            s.Anchor.prototype._handleAnchorChange.call(this, e, t));
        }),
        (c.prototype._handleBorderScale = function (e) {
          var t = this._scene ? this._scene.getTransformSettings() : null;
          if (this.hasMixin(l) && (!t || !1 !== t.borderScale)) {
            var i = this._layoutTransform;
            if (!i) {
              var n = e.properties.indexOf("trf"),
                r = this.getProperty("trf"),
                o = e.values[n];
              (o && (i = o.inverted()), r && (i = i ? i.multiplied(r) : r));
            }
            if (i) {
              var a,
                s = i.decomposed().scale.getMatrix();
              if (
                ((a = Math.sqrt(Math.abs(s[0] * s[3]))),
                !A.isEqualEps(a, 1, 1e-8))
              ) {
                var c = this.getPaintLayers();
                c &&
                  h.each(c.getBorderLayers(), function (e, i) {
                    (i.$_bs || (t && !0 === t.borderScale)) &&
                      i.setProperty("_bw", i.$_bw * a);
                  });
              }
            }
          }
        }),
        (e.exports = c));
    }