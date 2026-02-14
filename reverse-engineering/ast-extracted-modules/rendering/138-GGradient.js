/**
 * Module 138 - GGradient
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
  var n = i(50), r = i(0), o = i(17), a = i(11), s = i(7), l = i(12);
  function h(e, t, i, n, r) {
    if (e) {
      this._stops = [];
      for (var a = 0; a < e.length; ++a) {
        var s = e[a], l = {
            position: Math.max(0, Math.min(1, s.position)),
            color: s.color,
            opacity: s.opacity
          };
        this._stops.push(l);
      }
      this._stops.sort(function (e, t) {
        return e.position < t.position ? -1 : e.position > t.position ? 1 : 0;
      });
    } else
      this._stops = [
        {
          color: o.WHITE,
          position: 0,
          opacity: 1
        },
        {
          color: o.BLACK,
          position: 1,
          opacity: 1
        }
      ];
    this._scale = "number" == typeof t ? t : 1, this._fx = "number" == typeof i ? i : 0.5, this._fy = "number" == typeof n ? n : 0.5, this._transform = r || null;
  }
  r.inherit(h, n), h.equals = function (e, t, i) {
    if (!(e && t || e !== t))
      return !0;
    if (!i) {
      if (!s.equals(e._transform, t._transform))
        return !1;
      if (e._scale !== t._scale || e._fx !== t._fx || e._fy !== t._fy)
        return !1;
    }
    if (e._stops.length !== t._stops.length)
      return !1;
    for (var n = e._stops, r = t._stops, o = 0; o < n.length; ++o) {
      if (n[o].position !== r[o].position)
        return !1;
      if (n[o].opacity !== r[o].opacity)
        return !1;
      if (!a.equals(n[o].color, r[o].color))
        return !1;
    }
    return !0;
  }, h.prototype._transform = void 0, h.prototype._stops = null, h.prototype._scale = null, h.prototype._fx = null, h.prototype._fy = null, h.prototype.getStops = function () {
    return this._stops;
  }, h.prototype.getAverageColor = function () {
    for (var e = this._stops, t = e.length, i = 0, n = 0, r = 0, o = 0, a = 0; a < t; a++) {
      var s = e[a].opacity, l = e[a].color.toScreen();
      i += l[0], n += l[1], r += l[2], o += s;
    }
    return [
      i /= t,
      n /= t,
      r /= t,
      o /= t
    ];
  }, h.prototype.getClonedStops = function () {
    return this._stops.map(function (e) {
      return {
        position: e.position,
        color: e.color,
        opacity: e.opacity
      };
    });
  }, h.prototype.serialize = function () {
    return JSON.stringify(this._serializeToBlob());
  }, h.prototype.deserialize = function (e) {
    var t = JSON.parse(e);
    t && this._deserializeFromBlob(t);
  }, h.prototype.getScale = function () {
    return this._scale;
  }, h.prototype.getTransform = function () {
    return this._transform;
  }, h.prototype.setTransform = function (e) {
    this._transform = e;
  }, h.prototype.toScreenCSS = function (e, t) {
    for (var i = this.getStops(), n = [], r = 0; r < i.length; ++r) {
      var o = i[r], a = o.opacity;
      "number" == typeof e && (a *= e), n.push(o.color.toScreenCSS(a, t) + " " + Math.round(100 * o.position) + "%");
    }
    return n.join(", ");
  }, h.prototype.sortStops = function () {
    this._stops.sort(function (e, t) {
      return e.position < t.position ? -1 : e.position > t.position ? 1 : 0;
    });
  }, h.prototype._serializeToBlob = function () {
    var e = {};
    this._scale && 1 !== this._scale && (e.s = this._scale), this._transform && (e.t = s.serialize(this._transform)), l.isEqualEps(this._fx, 0.5) || (e.fx = this._fx), l.isEqualEps(this._fy, 0.5) || (e.fy = this._fy), e.x = [];
    for (var t = 0; t < this._stops.length; ++t) {
      var i = this._stops[t], r = {
          p: i.position,
          c: n.serialize(i.color),
          o: i.opacity
        };
      1 !== i.opacity && (r.o = i.opacity), e.x.push(r);
    }
    return e;
  }, h.prototype._deserializeFromBlob = function (e) {
    this._scale = e.hasOwnProperty("s") ? e.s : 1, this._fx = e.hasOwnProperty("fx") ? e.fx : 0.5, this._fy = e.hasOwnProperty("fy") ? e.fy : 0.5, this._transform = e.hasOwnProperty("t") ? s.deserialize(e.t) : null, this._stops = [];
    for (var t = null, i = 0; i < e.x.length; ++i) {
      var r = e.x[i], o = { position: Math.min(1, Math.max(0, r.p)) }, a = !1;
      r.hasOwnProperty("c") && (o.color = n.deserialize(r.c), r.hasOwnProperty("o") ? (o.opacity = r.o, a = !0) : o.opacity = 1, this._stops.push(o)), !a && r.hasOwnProperty("o") && (o.opacity = r.o, t || (t = []), t.push(o));
    }
    if (t)
      for (i = 0; i < t.length; ++i)
        for (var h = t[i].position, A = t[i].opacity, c = 0; c < this._stops.length; ++c)
          l.isEqualEps(this._stops[c].position, h) && (this._stops[c].opacity = A);
  }, h.prototype.toString = function () {
    return "[Object GGradient]";
  }, e.exports = h;
}
