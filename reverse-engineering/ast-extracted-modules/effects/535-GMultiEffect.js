/**
 * Module 535 - GMultiEffect
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
  var n = i(2), r = i(0), o = i(28), a = i(11), s = i(14), l = i(9);
  function h() {
    o.Effect.call(this);
    var e = n.getClassFromId(r.getTypeId(this)), t = e.__FX;
    if (!t || !t.length)
      throw new Error("Current multieffect has no subeffects defined");
    this._fx = [], t.forEach(function (e) {
      this._fx.push(new e());
    }.bind(this)), e.GeometryProperties && e.VisualProperties ? this._setDefaultProperties(e.GeometryProperties, e.VisualProperties) : e.VisualProperties ? this._setDefaultProperties(e.VisualProperties) : e.GeometryProperties && this._setDefaultProperties(e.GeometryProperties);
  }
  n.inherit("multiEffect", h, o.Effect), h.prototype._fx = null, h.__FX = null, h.register = function (e, t) {
    var i = n.getClassFromId(r.getTypeId(e));
    if (i.GeometryProperties = a.extend(!0, {}, h.GeometryProperties), i.__FX = t.slice(), "multiEffect" === n.getName(i))
      throw new Error("Multi effect cannot be instantiated");
    for (var o = 0; o < t.length; o++) {
      var s = t[o], l = n.getName(s);
      if (s.GeometryProperties)
        for (var A in (i.GeometryProperties || (i.GeometryProperties = {}), s.GeometryProperties))
          i.GeometryProperties[l + "&" + A] = s.GeometryProperties[A];
      if (s.VisualProperties)
        for (var A in (i.VisualProperties || (i.VisualProperties = {}), s.VisualProperties))
          i.VisualProperties[l + "&" + A] = s.VisualProperties[A];
    }
  }, h.equals = function (e, t) {
    if (e instanceof h && t instanceof h) {
      if (e._fx.length !== t._fx.length)
        return !1;
      for (var i = 0; i < e._fx.length; i++)
        if (!a.equals(e._fx[i], t._fx[i]))
          return !1;
      return !0;
    }
    return !1;
  }, h.GeometryProperties = {
    fxP: null,
    fxN: null
  }, h.prototype.isAffectedByChildren = function () {
    return this._fx.every(function (e) {
      return e.isAffectedByChildren();
    });
  }, h.prototype.isOverlayEffect = function () {
    return this._fx.every(function (e) {
      return e.isOverlayEffect();
    });
  }, h.prototype.getEffectType = function () {
    for (var e = 1; e < this._fx.length; e++)
      if (this._fx[e - 1].getEffectType() !== this._fx[e].getEffectType())
        return o.Effect.Type.Multi;
    return this._fx.length ? this._fx[0].getEffectType() : o.Effect.Type.Filter;
  }, h.prototype.getNodeNameTranslated = function () {
    return l.getValue("GMultiEffect", "name", this.getNodeName());
  }, h.prototype.getEffectPadding = function () {
    for (var e = 0, t = 0, i = 0, n = 0, r = 0; r < this._fx.length; r++) {
      var o = this._fx[r].getEffectPadding();
      o instanceof Array ? (e = Math.max(o[0], e), t = Math.max(o[1], t), n = Math.max(o[2], n), i = Math.max(o[3], i)) : (e = Math.max(o, e), t = Math.max(o, t), n = Math.max(o, n), i = Math.max(o, i));
    }
    return [
      e,
      n,
      t,
      i
    ];
  }, h.prototype.render = function (e, t, i, n, r, o) {
    for (var a = !1, l = 0; l < this._fx.length; l++)
      if (!this._fx[l].canApplyNativeEffect()) {
        a = !0;
        break;
      }
    a ? this._fx.forEach(function (a) {
      a.render(e, t, i, n, r, o);
    }) : (this._fx.forEach(function (a) {
      a.applyNativeEffect(e, t, i, n, r, o);
    }), (t || e).drawCanvas(e, 0, 0, 1, s.CompositeOperator.Copy), this._fx.forEach(function (n) {
      n.removeNativeEffect(e, t, i);
    }));
  }, h.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store)
      this.storeProperties(t.blob, h.GeometryProperties);
    else if (e === n._Change.Restore)
      this.restoreProperties(t.blob, h.GeometryProperties);
    else if (e == n._Change.BeforePropertiesChange) {
      for (var i = t.properties, a = t.values, s = {}, l = {}, A = 0; A < i.length; A++)
        for (var c = i[A].split("&"), p = c[0], u = 0; u < this._fx.length; u++)
          if (n.getName(this._fx[u]) === p) {
            s[p] || (s[p] = []), s[p].push(c[1]), l[p] || (l[p] = []), l[p].push(a[A]);
            break;
          }
      for (var d in s) {
        var g = null;
        for (u = 0; u < this._fx.length; u++)
          if (n.getName(this._fx[u]) === d) {
            g = this._fx[u];
            break;
          }
        g && g.setProperties(s[d], l[d], t.custom, t.force, t.temporary);
      }
    } else
      n._Change.AfterPropertiesChange;
    var f = n.getClassFromId(r.getTypeId(this));
    f.GeometryProperties && this._handleGeometryChangeForProperties(e, t, f.GeometryProperties), f.VisualProperties && this._handleVisualChangeForProperties(e, t, f.VisualProperties), o.Effect.prototype._handleChange.call(this, e, t);
  }, h.prototype.getFXArray = function () {
    return this._fx;
  }, h.prototype.toString = function () {
    return "[Object GMultiEffect]";
  }, h.prototype.destroy = function () {
    this._fx && this._fx.forEach(function (e) {
      e.destroy();
    });
  }, e.exports = h;
}
