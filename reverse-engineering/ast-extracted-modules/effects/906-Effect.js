/**
 * Module 906
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
  var n = i(2), r = i(0), o = i(11), a = i(118);
  e.exports = function (e) {
    e.Effect = function () {
      this._setDefaultProperties(e.Effect.GeometryProperties);
    }, r.inheritAndMix(e.Effect, n, [
      n.Store,
      n.Properties,
      n.Multireference,
      a
    ]), e.Effect.Type = {
      PreEffect: 0,
      PostEffect: 1,
      Filter: 2,
      Multi: 3
    }, e.Effect.GeometryProperties = {
      vs: !0,
      ly: null
    }, e.Effect.prototype.assignFrom = function (t) {
      var i = [];
      t instanceof e.Effect && i.push(e.Effect.GeometryProperties);
      var o = n.getClassFromId(r.getTypeId(this)), a = n.getClassFromId(r.getTypeId(t));
      if (o && a && o === a) {
        var s = o.GeometryProperties, l = o.VisualProperties;
        s && i.push(s), l && i.push(l);
      }
      i.length && this.transferProperties(t, i), n.prototype.assignFrom.call(this, t);
    }, e.Effect.prototype.getEffectType = function () {
      throw new Error("Not Supported.");
    }, e.Effect.prototype.getEffectPadding = function () {
      return null;
    }, e.Effect.prototype.getAbsoluteEffectPadding = function () {
      var e = this.getEffectPadding();
      return "number" == typeof e ? Math.max(0, e) : e instanceof Array ? Math.max.apply(null, e) : 0;
    }, e.Effect.prototype.getAbsoluteEffectPadding = function () {
      var e = this.getEffectPadding();
      return "number" == typeof e ? Math.max(0, e) : e instanceof Array ? Math.max.apply(null, e) : 0;
    }, e.Effect.prototype.isOverlayEffect = function () {
      return !1;
    }, e.Effect.prototype.isAffectedByChildren = function () {
      var e = this.getEffectPadding();
      return !!e && (e instanceof Array ? Math.max.apply(this, this.getEffectPadding()) > 0 : e);
    }, e.Effect.prototype.isAffectedByContents = function () {
      return !1;
    }, e.Effect.prototype.isSingleton = function () {
      return !1;
    }, e.Effect.prototype.canApplyNativeEffect = function () {
      return !1;
    }, e.Effect.prototype.render = function (e, t, i, n) {
    }, e.Effect.prototype.applyNativeEffect = function (e, t, i, n) {
    }, e.Effect.prototype.removeNativeEffect = function (e, t, i) {
    }, e.Effect.prototype.validateInsertion = function (t, i) {
      return t instanceof e.Effects;
    }, e.Effect.prototype._handleChange = function (t, i) {
      if (t === n._Change.Store)
        this.storeProperties(i.blob, e.Effect.GeometryProperties);
      else if (t === n._Change.Restore)
        this.restoreProperties(i.blob, e.Effect.GeometryProperties);
      else if (t === n._Change.WorkspaceAttached) {
        (r = this.getScene()) && r.addDestroyable(this);
      } else if (t === n._Change.WorkspaceDetach) {
        var r;
        (r = this.getScene()) && r.destroy([this]);
      }
      this._handleGeometryChangeForProperties(t, i, e.Effect.GeometryProperties), n.prototype._handleChange.call(this, t, i);
    }, e.Effect.prototype.getOwnerStylable = function () {
      var t = this.getParent();
      if (t && t instanceof e.Effects) {
        var i = t.getParent();
        if (i && i.hasMixin(e))
          return i;
      }
      return null;
    }, e.Effect.prototype.getScene = function () {
      var e = this.getOwnerStylable();
      return e && e.getScene ? e.getScene() : null;
    }, e.Effect.prototype.isCacheable = function (e) {
      return !0;
    }, e.Effect.prototype._handleGeometryChangeForProperties = function (e, t, i) {
      if ((e == n._Change.BeforePropertiesChange || e == n._Change.AfterPropertiesChange) && o.containsObjectKey(t.properties, i)) {
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
    }, e.Effect.prototype._handleVisualChangeForProperties = function (e, t, i) {
      if (e == n._Change.AfterPropertiesChange && o.containsObjectKey(t.properties, i)) {
        var r = this.getOwnerStylable();
        return r && r._styleRepaint(this), !0;
      }
      return !1;
    }, e.Effect.prototype.toString = function () {
      return "[Object GStylable.Effect]";
    }, e.Effect.prototype.destroy = function () {
    };
  };
}
