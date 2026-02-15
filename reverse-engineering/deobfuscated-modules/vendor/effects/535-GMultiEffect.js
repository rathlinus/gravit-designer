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

function (exports, module, require) {
  var n = require(2) /* GNode */, r = require(0) /* GObject */, o = require(28) /* GStylable */, a = require(11) /* GUtil */, s = require(14) /* GPaintCanvas */, l = require(9) /* GLocale */;
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
    if (i.GeometryProperties = a.extend(true, {}, h.GeometryProperties), i.__FX = t.slice(), "multiEffect" === n.getName(i))
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
        return false;
      for (var require = 0; require < e._fx.length; require++)
        if (!a.equals(e._fx[require], t._fx[require]))
          return false;
      return true;
    }
    return false;
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
    for (var exports = 1; exports < this._fx.length; exports++)
      if (this._fx[exports - 1].getEffectType() !== this._fx[exports].getEffectType())
        return o.Effect.Type.Multi;
    return this._fx.length ? this._fx[0].getEffectType() : o.Effect.Type.Filter;
  }, h.prototype.getNodeNameTranslated = function () {
    return l.getValue("GMultiEffect", "name", this.getNodeName());
  }, h.prototype.getEffectPadding = function () {
    for (var exports = 0, module = 0, require = 0, n = 0, r = 0; r < this._fx.length; r++) {
      var o = this._fx[r].getEffectPadding();
      o instanceof Array ? (exports = Math.max(o[0], exports), module = Math.max(o[1], module), n = Math.max(o[2], n), require = Math.max(o[3], require)) : (exports = Math.max(o, exports), module = Math.max(o, module), n = Math.max(o, n), require = Math.max(o, require));
    }
    return [
      exports,
      n,
      module,
      require
    ];
  }, h.prototype.render = function (e, t, i, n, r, o) {
    for (var a = false, l = 0; l < this._fx.length; l++)
      if (!this._fx[l].canApplyNativeEffect()) {
        a = true;
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
      for (var require = t.properties, a = t.values, s = {}, l = {}, A = 0; A < require.length; A++)
        for (var c = require[A].split("&"), p = c[0], u = 0; u < this._fx.length; u++)
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
  }, exports.exports = h;
}
