/**
 * Module 28 - GStylable
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
  var n = i(2), r = i(76), o = i(50), a = i(47), s = i(0), l = i(108), h = i(14), A = i(11), c = i(17);
  function p() {
  }
  for (var u in (s.inherit(p, s), p.prototype._effects = null, p.prototype._paintLayers = null, p.prototype._layId = null, p.prototype._effId = null, p.StyleLayer = {
      Fill: "F",
      Border: "B"
    }, p.StyleLayerName = {
      "": new a("GStylable", "layer.element"),
      F: new a("GStylable", "layer.fill"),
      B: new a("GStylable", "layer.border")
    }, p.BorderAlignment = {
      Center: "C",
      Outside: "O",
      Inside: "I"
    }, p.BorderMarker = {
      Circle: "C",
      Bullet: "B",
      Diamond: "D",
      Line: "L",
      LineDouble: "LD",
      Arrow: "A",
      ArrowFat: "AF",
      ArrowLine: "AL",
      ArrowDoubleLine: "ADL",
      ArrowLineBar: "ALB",
      ArrowPointer: "AP"
    }, p.ParagraphAlignment = {
      Left: "l",
      Center: "c",
      Right: "r",
      Justify: "j"
    }, p.TypographyScript = {
      Subscript: "sub",
      Superscript: "super"
    }, p.TextTransformation = {
      Uppercase: "u",
      Lowercase: "l",
      Capitalize: "c",
      SmallCaps: "s"
    }, p.PropertySet = {
      Style: "S",
      Effects: "E",
      Text: "T",
      Paragraph: "P",
      FillPaintLayers: "FL",
      BorderPaintLayers: "BL"
    }, p.PropertySetInfo = {
      S: {
        visualProperties: {
          _sdf: null,
          _sbl: h.BlendMode.Normal,
          _sfop: 1,
          _stop: 1
        }
      },
      E: {},
      FL: {},
      BL: {},
      T: {
        geometryProperties: {
          _tff: null,
          _tfi: 20,
          _tfw: l.Weight.Regular,
          _tfs: l.Style.Normal,
          _tcs: null,
          _tws: null,
          _ttrf: null,
          _ttsc: null,
          _tlsc: null,
          _tv: null,
          _tdu: !1,
          _tds: !1,
          _tlig: "auto",
          _tfrac: !1,
          _tstyls: null,
          _tlocl: null
        },
        visualProperties: { _fc: null },
        storeFilter: function (e, t) {
          return t && "_fc" === e ? o.serialize(t) : t;
        },
        restoreFilter: function (e, t) {
          if (t) {
            if ("_fc" === e)
              return o.deserialize(t);
            if ("_tff" === e)
              return l.getFontFamilyCorrected(t);
          }
          return t;
        }
      },
      P: {
        geometryProperties: {
          _pal: null,
          _plh: 1,
          _pas: "0",
          _pai: 0
        }
      }
    }, p.AllVisualProperties = {}, p.AllGeometryProperties = {}, p.PropertySetInfo)) {
    var d = p.PropertySetInfo[u];
    if (d.visualProperties)
      for (var g in d.visualProperties)
        p.AllVisualProperties[g] = d.visualProperties[g];
    if (d.geometryProperties)
      for (var g in d.geometryProperties)
        p.AllGeometryProperties[g] = d.geometryProperties[g];
  }
  i(900)(p), i(901)(p), i(902)(p), i(904)(p), i(905)(p), i(906)(p), p.prototype.getStylePropertySets = function () {
    return [
      p.PropertySet.Style,
      p.PropertySet.BorderPaintLayers,
      p.PropertySet.FillPaintLayers,
      p.PropertySet.Effects
    ];
  }, p.prototype.getEffects = function () {
    return this.getStylePropertySets().indexOf(p.PropertySet.Effects) >= 0 ? (this._effects || (this._effects = new p.Effects(), this._effects._multiReferenceId = this._effId || A.uuid(), this._effects._setParent(this)), this._effects) : null;
  }, p.prototype.getPaintLayers = function () {
    return this.getStylePropertySets().indexOf(p.PropertySet.BorderPaintLayers) >= 0 || this.getStylePropertySets().indexOf(p.PropertySet.FillPaintLayers) >= 0 ? (this._paintLayers || (this._paintLayers = new p.PaintLayers(), this._paintLayers._multiReferenceId = this._layId || A.uuid(), this._paintLayers._setParent(this)), this._paintLayers) : null;
  }, p.prototype.assignStyleFrom = function (e, t) {
    for (var i = e.getStylePropertySets(), r = this.getStylePropertySets(), o = [], a = 0; a < i.length; ++a)
      for (var s = i[a], l = 0; l < r.length; ++l)
        if (r[l] === s) {
          o.push(s);
          break;
        }
    if (o.length) {
      var h = o.indexOf(p.PropertySet.FillPaintLayers) >= 0, A = o.indexOf(p.PropertySet.BorderPaintLayers) >= 0;
      if (h || A) {
        var c = this.getPaintLayers(), u = e.getPaintLayers(), d = !1;
        t && c._beginBlockChanges([
          n._Change.BeforeChildRemove,
          n._Change.AfterChildRemove,
          n._Change.BeforeChildInsert,
          n._Change.AfterChildInsert
        ]);
        try {
          for (var g = [], f = c.getFirstChild(); null !== f; f = f.getNext())
            (f instanceof p.FillPaintLayer && h || f instanceof p.BorderPaintLayer && A) && (d || (this._stylePrepareGeometryChange(!0), d = !0), g.push(f));
          for (a = 0; a < g.length; a++)
            c.removeChild(g[a]);
          if (u)
            for (var m = u.getFirstChild(); null !== m; m = m.getNext())
              (m instanceof p.FillPaintLayer && h || m instanceof p.BorderPaintLayer && A) && (d || (this._stylePrepareGeometryChange(!0), d = !0), c.appendChild(m.clone()));
        } finally {
          t && c._endBlockChanges([
            n._Change.BeforeChildRemove,
            n._Change.AfterChildRemove,
            n._Change.BeforeChildInsert,
            n._Change.AfterChildInsert
          ]), d && this._styleFinishGeometryChange(!0);
        }
      }
      if (o.indexOf(p.PropertySet.Effects) >= 0) {
        var y = this.getEffects(), _ = e.getEffects(), v = !1;
        t && y._beginBlockChanges([
          n._Change.BeforeChildRemove,
          n._Change.AfterChildRemove,
          n._Change.BeforeChildInsert,
          n._Change.AfterChildInsert
        ]);
        try {
          for (; y.getFirstChild();)
            v || (this._stylePrepareGeometryChange(!0), v = !0), y.removeChild(y.getFirstChild());
          if (_)
            for (var b = _.getFirstChild(); null !== b; b = b.getNext())
              v || (this._stylePrepareGeometryChange(!0), v = !0), y.appendChild(b.clone());
        } finally {
          t && y._endBlockChanges([
            n._Change.BeforeChildRemove,
            n._Change.AfterChildRemove,
            n._Change.BeforeChildInsert,
            n._Change.AfterChildInsert
          ]), v && this._styleFinishGeometryChange(!0);
        }
      }
      for (var C = [], w = 0; w < o.length; ++w) {
        var E = p.PropertySetInfo[o[w]], B = [];
        E.visualProperties && (B = B.concat(Object.keys(E.visualProperties))), E.geometryProperties && (B = B.concat(Object.keys(E.geometryProperties)));
        for (a = 0; a < B.length; ++a) {
          var x = B[a];
          "_sdf" !== x && C.push(x);
        }
      }
      if (C.length > 0) {
        var P = e.getProperties(C);
        this.setProperties(C, P, !1, !0);
      }
    }
  }, p.prototype.hasStyleBorder = function () {
    var e = this.getPaintLayers();
    return e && e.hasStyleBorder();
  }, p.prototype.hasStyleFill = function () {
    var e = this.getPaintLayers();
    return e && e.hasStyleFill();
  }, p.prototype.getStyleLayers = function () {
    var e = this.getStylePropertySets(), t = e.indexOf(p.PropertySet.FillPaintLayers), i = e.indexOf(p.PropertySet.BorderPaintLayers), n = null;
    return (t || i) && (n = [], t && n.push(p.StyleLayer.Fill), i && n.push(p.StyleLayer.Border)), n;
  }, p.prototype.getStyleBorderPadding = function (e) {
    return e.$_ba === p.BorderAlignment.Center ? e.$_bw / 2 : e.$_ba === p.BorderAlignment.Outside ? e.$_bw : 0;
  }, p.prototype._setStyleDefaultProperties = function () {
    for (var e = this.getStylePropertySets(), t = !1, i = 0; i < e.length; ++i) {
      var n = p.PropertySetInfo[e[i]];
      n.visualProperties && this._setDefaultProperties(n.visualProperties), n.geometryProperties && this._setDefaultProperties(n.geometryProperties), e[i] === p.PropertySet.Effects ? this._effId = A.uuid() : e[i] !== p.PropertySet.FillPaintLayers && e[i] !== p.PropertySet.BorderPaintLayers || t || (this._layId = A.uuid(), t = !0);
    }
  }, p.prototype._handleStyleChange = function (e, t) {
    if (e === n._Change.BeforePropertiesChange || e === n._Change.AfterPropertiesChange) {
      for (var i = !1, o = !1, a = [], s = [], l = 0; l < t.properties.length; ++l) {
        var h = t.properties[l];
        p.AllGeometryProperties.hasOwnProperty(h) ? (o = !0, e === n._Change.BeforePropertiesChange ? this._stylePrepareGeometryChange() : (a.push(t.properties[l]), s.push(t.values[l]))) : p.AllVisualProperties.hasOwnProperty(h) && e === n._Change.AfterPropertiesChange && (i = !0, a.push(t.properties[l]), s.push(t.values[l]));
      }
      !o && i ? (this._styleRepaint(), this._stylePropertiesUpdated(a, s)) : o && (this._styleFinishGeometryChange(), this._stylePropertiesUpdated(a, s));
    } else if (e === n._Change.Store)
      for (var A = this.getStylePropertySets(), c = !1, u = 0; u < A.length; ++u) {
        if ((g = A[u]) === p.PropertySet.Effects)
          this._effects && null !== this._effects.getFirstChild() ? t.blob._eff = n.store(this._effects) : t.blob._effId = this._effId;
        else if (g === p.PropertySet.FillPaintLayers || g === p.PropertySet.BorderPaintLayers)
          !c && this._paintLayers && null !== this._paintLayers.getFirstChild() ? (t.blob._layers = n.store(this._paintLayers, t.options), c = !0) : c || (t.blob._layId = this._layId);
        else {
          (f = p.PropertySetInfo[g]).visualProperties && this.storeProperties(t.blob, f.visualProperties, f.storeFilter), f.geometryProperties && this.storeProperties(t.blob, f.geometryProperties, f.storeFilter);
        }
      }
    else if (e === n._Change.Restore) {
      A = this.getStylePropertySets();
      var d = !1;
      for (u = 0; u < A.length; ++u) {
        var g;
        if ((g = A[u]) === p.PropertySet.Effects)
          t.blob._eff ? (this._effects = n.restore(t.blob._eff), this._effects._setParent(this)) : t.blob._effId && (this._effId = t.blob._effId);
        else if (g === p.PropertySet.FillPaintLayers || g === p.PropertySet.BorderPaintLayers)
          !d && t.blob._layers ? (this._paintLayers = n.restore(t.blob._layers), this._paintLayers._setParent(this), d = !0) : !d && t.blob._layId && (this._layId = t.blob._layId, d = !0);
        else {
          var f;
          (f = p.PropertySetInfo[g]).visualProperties && this.restoreProperties(t.blob, f.visualProperties, f.restoreFilter), f.geometryProperties && this.restoreProperties(t.blob, f.geometryProperties, f.restoreFilter);
        }
      }
      var m = this.getPaintLayers();
      m && m._notifyChange(e, t);
    } else
      e === n._Change.ParentAttached || e === n._Change.ParentDetach ? (this._effects && (this._effects._detachFromParent(this), e === n._Change.ParentAttached && this._effects._attachToParent(this)), this._paintLayers && (this._paintLayers._detachFromParent(this), e === n._Change.ParentAttached && this._paintLayers._attachToParent(this))) : e !== r._Change.SceneAttached && e !== r._Change.SceneDetached || (this._effects && (this._effects._detachFromParent(this), e == r._Change.SceneAttached && this._effects._attachToParent(this)), this._paintLayers && (this._paintLayers._detachFromParent(this), e === r._Change.SceneAttached && this._paintLayers._attachToParent(this)));
  }, p.prototype._stylePrepareGeometryChange = function (e) {
  }, p.prototype._styleFinishGeometryChange = function (e) {
  }, p.prototype._styleRepaint = function (e) {
  }, p.prototype._stylePropertiesUpdated = function (e, t) {
  }, p.prototype.equalsStyle = function (e) {
    if (e) {
      var t = function (t) {
        var i = e.getPaintLayers();
        if (!i)
          return !0;
        var n = i.getFirstChild();
        if (!(i = this.getPaintLayers()))
          return !0;
        var r = i.getFirstChild();
        if (null === n && null !== r || null !== n && null === r)
          return !1;
        for (; null !== n && null !== r;) {
          if (null === n && null !== r || null !== n && null === r)
            return !1;
          if (null !== n && null !== r) {
            if (!A.equals(n, r))
              return !1;
            for (n = n.getNext(), r = r.getNext(); null !== n && !(n instanceof t);)
              n = n.getNext();
            for (; null !== r && !(r instanceof t);)
              r = r.getNext();
            if (null === n && null !== r || null !== n && null === r)
              return !1;
          }
        }
        return !0;
      }.bind(this);
      if (e.getProperty("ps").indexOf(p.PropertySet.Style) >= 0) {
        var i = [];
        (l = p.PropertySetInfo[p.PropertySet.Style]).visualProperties && (i = i.concat(Object.keys(l.visualProperties))), l.geometryProperties && (i = i.concat(Object.keys(l.geometryProperties)));
        var n = !0;
        if (i.forEach(function (t) {
            "_sdf" !== t && (n = n && this.getProperty(t) === e.getProperty(t));
          }.bind(this)), !n)
          return !1;
      }
      if (e.getProperty("ps").indexOf(p.PropertySet.FillPaintLayers) >= 0 && !t(p.FillPaintLayer))
        return !1;
      if (e.getProperty("ps").indexOf(p.PropertySet.BorderPaintLayers) >= 0 && !t(p.BorderPaintLayer))
        return !1;
      if (e.getProperty("ps").indexOf(p.PropertySet.Effects) >= 0) {
        var r = e.getEffects().getFirstChild(), o = this.getEffects().getFirstChild();
        if (null === r && null !== o || null !== r && null === o)
          return !1;
        for (; null !== r && null !== o;) {
          if (!A.equals(r, o))
            return !1;
          if (r = r.getNext(), o = o.getNext(), null === r && null !== o || null !== r && null === o)
            return !1;
        }
      }
      if (e.getProperty("ps").indexOf(p.PropertySet.Text) >= 0) {
        n = !0;
        for (var a = [
              p.PropertySet.Text,
              p.PropertySet.Paragraph
            ], s = (i = [], 0); s < a.length; ++s) {
          var l;
          (l = p.PropertySetInfo[a[s]]).visualProperties && (i = i.concat(Object.keys(l.visualProperties))), l.geometryProperties && (i = i.concat(Object.keys(l.geometryProperties)));
        }
        return this.hasProperty("_tff") && i.forEach(function (t) {
          n = "_fc" === t ? n && c.equals(this.getProperty(t), e.getProperty(t)) : n && this.getProperty(t) === e.getProperty(t);
        }.bind(this)), n;
      }
    }
    return !0;
  }, p.prototype.toString = function () {
    return "[Mixin GStylable]";
  }, e.exports = p;
}
