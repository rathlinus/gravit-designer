/**
 * Module 905
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
  var n = i(2);
  e.exports = function (e) {
    e.Effects = function () {
    }, n.inheritAndMix("effects", e.Effects, n, [
      n.Container,
      n.Store,
      n.Multireference
    ]), e.Effects.prototype.getLayersEffects = function (e, t) {
      if (e && e.length) {
        for (var i = [], n = 0; n <= e.length; ++n) {
          var r = n < e.length ? e[n] : null;
          i.push(this.getEffectsForLayer(r, t));
        }
        return i;
      }
      return [this.getEffectsForLayer(null, t)];
    }, e.Effects.prototype.getEffectsForLayer = function (t, i) {
      t = t || null;
      for (var n = null, r = [], o = [], a = [], s = this.getFirstChild(); null !== s; s = s.getNext())
        if (s instanceof e.Effect) {
          var l = s.getProperty("ly");
          if (i && !1 === s.getProperty("vs"))
            continue;
          if (l === t)
            switch (s.getEffectType()) {
            case e.Effect.Type.PreEffect:
              r.push(s);
              break;
            case e.Effect.Type.Filter:
            case e.Effect.Type.Multi:
              o.push(s);
              break;
            case e.Effect.Type.PostEffect:
              a.push(s);
            }
        }
      return (r.length || o.length || a.length) && (n = r.concat(o).concat(a)), n;
    }, e.Effects.prototype.insertChild = function (t, i) {
      if (t instanceof e.Effect && t.getEffectType() === e.Effect.Type.PreEffect)
        for (var r = i || this.getLastChild(); null !== r; r = r.getPrevious())
          if (r instanceof e.Effect) {
            if (r.getEffectType() === e.Effect.Type.PreEffect) {
              i = r.getNext();
              break;
            }
            r.getEffectType() === e.Effect.Type.PostEffect && (i = r);
          }
      n.Container.prototype.insertChild.call(this, t, i);
    }, e.Effects.prototype._handleChange = function (t, i) {
      var r = this.getParent();
      r && r.hasMixin(e) && ((t == n._Change.BeforeChildInsert || t === n._Change.BeforeChildRemove) && i instanceof e.Effect && r._stylePrepareGeometryChange(i), (t == n._Change.AfterChildInsert || t === n._Change.AfterChildRemove) && i instanceof e.Effect && r._styleFinishGeometryChange(i)), n.prototype._handleChange.call(this, t, i);
    }, e.Effects.prototype.getEffectsBBox = function (e, t, i) {
      var n = this.getEffectsPadding(i, t);
      return n ? e.expanded(n[0], n[1], n[2], n[3]) : e;
    }, e.Effects.prototype.getEffectsPadding = function (t, i, n) {
      var r = this.getEffectsForLayer(i, !0) || [], o = r.length;
      if (this.getParent() && this.getParent().findParent(function (t) {
          if (t.hasMixin(e)) {
            var n = t.getEffects();
            n && (r = r.concat(n.getEffectsForLayer(i, !0) || []));
          }
        }), !r.length)
        return null;
      for (var a = [
            0,
            0,
            0,
            0
          ], s = [
            0,
            0,
            0,
            0
          ], l = null, h = 0; h < r.length; ++h) {
        var A, c = r[h];
        if (n && !n(c))
          break;
        if (A = h >= o ? c.getAbsoluteEffectPadding(t) : c.getEffectPadding(t)) {
          switch (A instanceof Array || (A = [
              A,
              A,
              A,
              A
            ]), c.getEffectType()) {
          case e.Effect.Type.PreEffect:
          case e.Effect.Type.PostEffect:
            s = [
              Math.max(s[0], A[0]),
              Math.max(s[1], A[1]),
              Math.max(s[2], A[2]),
              Math.max(s[3], A[3])
            ];
            break;
          case e.Effect.Type.Multi:
          case e.Effect.Type.Filter:
            l && l.getEffectType() !== e.Effect.Type.Filter && l.getEffectType() !== e.Effect.Type.Multi && (a = [
              a[0] + s[0],
              a[1] + s[1],
              a[2] + s[2],
              a[3] + s[3]
            ], s = [
              0,
              0,
              0,
              0
            ]), a = [
              a[0] + A[0],
              a[1] + A[1],
              a[2] + A[2],
              a[3] + A[3]
            ];
          }
          l = c;
        }
      }
      return l && l.getEffectType() !== e.Effect.Type.Filter && l.getEffectType() !== e.Effect.Type.Multi && (a = [
        a[0] + s[0],
        a[1] + s[1],
        a[2] + s[2],
        a[3] + s[3]
      ]), a;
    }, e.Effects.prototype.resetMultireference = function () {
      n.Multireference.prototype.resetMultireference.call(this), this.getParent() && (this.getParent()._effId = this.getMultireferenceId());
    };
  };
}
