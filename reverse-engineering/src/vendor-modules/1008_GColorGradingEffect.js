/**
 * chunk.vendor.js Module #1008
 * Type: class
 * Name: GColorGradingEffect
 */

function (e, t, i) {
      var n = i(1009),
        r = i(2),
        o = i(28),
        a = i(9);

      function s() {
        (o.Effect.call(this), this._setDefaultProperties(s.VisualProperties));
      }
      (r.inherit("clGradingEffect", s, o.Effect),
        (s.equals = function (e, t) {
          return (
            e instanceof s &&
            t instanceof s &&
            e.arePropertiesEqual(t, Object.keys(s.VisualProperties))
          );
        }),
        (s.VisualProperties = {
          cp: null,
        }),
        (s.prototype.getEffectType = function () {
          return o.Effect.Type.Filter;
        }),
        (s.prototype.getNodeNameTranslated = function () {
          return a.getValue("GColorGradingEffect", "name", this.getNodeName());
        }),
        (s.prototype.render = function (e, t, i, r) {
          this.$cp && e.getBitmap().applyFilter(n, this.$cp);
        }),
        (s.prototype._handleChange = function (e, t) {
          (e === r._Change.Store
            ? this.storeProperties(t.blob, s.VisualProperties)
            : e === r._Change.Restore &&
              this.restoreProperties(t.blob, s.VisualProperties),
            this._handleVisualChangeForProperties(e, t, s.VisualProperties),
            o.Effect.prototype._handleChange.call(this, e, t));
        }),
        (s.prototype.toString = function () {
          return "[Object GColorGradingEffect]";
        }),
        (e.exports = s));
    }