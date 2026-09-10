/**
 * chunk.vendor.js Module #900
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(76),
        o = i(14),
        a = i(50),
        s = i(139),
        l = i(11),
        h = i(7),
        A = i(227);
      e.exports = function (e) {
        ((e.PaintLayer = function (t, i, n, r) {
          (this._setDefaultProperties(
            e.PaintLayer.GeometryProperties,
            e.PaintLayer.VisualProperties,
          ),
            this.setProperties(
              ["_pt", "_vs", "_op", "_bl"],
              [
                t,
                void 0 === n || n,
                void 0 === i ? 1 : i,
                void 0 === r ? o.BlendMode.Normal : r,
              ],
            ));
        }),
          n.inheritAndMix("paintLayer", e.PaintLayer, r, [
            n.Properties,
            n.Store,
          ]),
          (e.PaintLayer.VisualProperties = {
            _pt: null,
            _op: 1,
            _vs: !0,
            _bl: o.BlendMode.Normal,
          }),
          (e.PaintLayer.GeometryProperties = {
            _px: null,
          }),
          (e.PaintLayer.prototype.assignFrom = function (t) {
            (t instanceof e.PaintLayer &&
              this.transferProperties(t, [
                e.PaintLayer.VisualProperties,
                e.PaintLayer.GeometryProperties,
              ]),
              n.prototype.assignFrom.call(this, t));
          }),
          (e.PaintLayer.prototype.hasStyle = function () {
            return !!this.$_pt && this.$_op > 0 && this.$_vs;
          }),
          (e.PaintLayer.prototype.isSeparateLayer = function () {
            return !1;
          }),
          (e.PaintLayer.prototype.getTrackTempPropNames = function () {
            return this.getPatternPropNames();
          }),
          (e.PaintLayer.prototype.getPatternPropNames = function () {
            return ["_pt"];
          }),
          (e.PaintLayer.prototype.validateInsertion = function (e, t) {
            return "paintLayers" === n.getName(e);
          }),
          (e.PaintLayer.prototype._handleChange = function (t, i) {
            if (t === n._Change.Store)
              (this.storeProperties(
                i.blob,
                e.PaintLayer.GeometryProperties,
                function (e, t) {
                  return t && "_px" === e ? h.serialize(t) : t;
                },
              ),
                this.storeProperties(
                  i.blob,
                  e.PaintLayer.VisualProperties,
                  function (e, t) {
                    return t && "_pt" == e ? a.serialize(t, i.options) : t;
                  },
                ));
            else if (t === n._Change.Restore) {
              var o = function (e, t) {
                if (t) {
                  if ("_px" === e) return h.deserialize(t);
                  if ("_pt" === e) return a.deserialize(t);
                }
                return t;
              }.bind(this);
              (this.restoreProperties(
                i.blob,
                e.PaintLayer.GeometryProperties,
                o,
              ),
                this.restoreProperties(
                  i.blob,
                  e.PaintLayer.VisualProperties,
                  o,
                ));
            } else if (t === n._Change.BeforePropertiesChange) {
              if (i.properties.indexOf("_pt") >= 0 && !i.temporary)
                if (this._scene)
                  (l = this.$_pt) instanceof s &&
                    A.isDictionary(l._url) &&
                    this._scene.getDictionary().removeEntry(l._url);
            } else if (t === n._Change.AfterPropertiesChange) {
              var l;
              if (i.properties.indexOf("_pt") >= 0 && !i.temporary)
                if (this._scene)
                  if ((l = this.$_pt) instanceof s && !A.isDictionary(l._url)) {
                    var c = this._scene
                      .getDictionary()
                      .putValueIfAbsent(l._url);
                    c && (this.$_pt._url = c.getUrl());
                  }
            } else
              t === r._Change.SceneAttached &&
                this.$_pt instanceof s &&
                this.$_pt.setScene(this._scene);
            (this._handleVisualChangeForProperties(
              t,
              i,
              e.PaintLayer.VisualProperties,
            ),
              this._handleGeometryChangeForProperties(
                t,
                i,
                e.PaintLayer.GeometryProperties,
              ),
              n.prototype._handleChange.call(this, t, i));
          }),
          (e.PaintLayer.prototype._handleVisualChangeForProperties = function (
            e,
            t,
            i,
          ) {
            if (
              e == n._Change.AfterPropertiesChange &&
              (!this._blockedChanges || !this._blockedChanges[e]) &&
              l.containsObjectKey(t.properties, i)
            ) {
              var r = this.getOwnerStylable();
              return (r && r._styleRepaint(this), !0);
            }
            return !1;
          }),
          (e.PaintLayer.prototype._handleGeometryChangeForProperties =
            function (e, t, i) {
              if (
                (e == n._Change.BeforePropertiesChange ||
                  e == n._Change.AfterPropertiesChange) &&
                l.containsObjectKey(t.properties, i)
              ) {
                var r = this.getOwnerStylable();
                if (r)
                  switch (e) {
                    case n._Change.BeforePropertiesChange:
                      r._stylePrepareGeometryChange(this);
                      break;
                    case n._Change.AfterPropertiesChange:
                      r._styleFinishGeometryChange(this);
                  }
                return !0;
              }
              return !1;
            }),
          (e.PaintLayer.prototype.getOwnerStylable = function () {
            var e = this.getParent();
            if (e) {
              var t = e.getParent();
              if (t) return t;
            }
            return null;
          }),
          (e.PaintLayer.prototype.isMask = function () {
            return this.$_pt && this.$_pt instanceof s && this.$_pt.isMask();
          }),
          (e.PaintLayer.prototype.getBlendingForContext = function (e) {
            return this.$_bl === o.BlendMode.Normal ||
              (e.configuration.noWebGL && this.$_bl in o.WebGLBlendMode)
              ? null
              : this.$_bl;
          }));
      };
    }