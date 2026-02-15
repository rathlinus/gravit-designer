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

function (exports, module, require) {
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(50) /* GPattern */, a = require(47) /* GLocaleKey */, s = require(0) /* GObject */, l = require(108) /* GFont */, h = require(14) /* GPaintCanvas */, A = require(11) /* GUtil */, c = require(17) /* GRGBColor */;
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
          _tdu: false,
          _tds: false,
          _tlig: "auto",
          _tfrac: false,
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
  require(900) /* PaintLayer */(p), require(901) /* FillPaintLayer */(p), require(902) /* BorderPaintLayer */(p), require(904) /* PaintLayers */(p), require(905) /* Effects */(p), require(906) /* Effect */(p), p.prototype.getStylePropertySets = function () {
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
    for (var require = e.getStylePropertySets(), r = this.getStylePropertySets(), o = [], a = 0; a < require.length; ++a)
      for (var s = require[a], l = 0; l < r.length; ++l)
        if (r[l] === s) {
          o.push(s);
          break;
        }
    if (o.length) {
      var h = o.indexOf(p.PropertySet.FillPaintLayers) >= 0, A = o.indexOf(p.PropertySet.BorderPaintLayers) >= 0;
      if (h || A) {
        var c = this.getPaintLayers(), u = e.getPaintLayers(), d = false;
        t && c._beginBlockChanges([
          n._Change.BeforeChildRemove,
          n._Change.AfterChildRemove,
          n._Change.BeforeChildInsert,
          n._Change.AfterChildInsert
        ]);
        try {
          for (var g = [], f = c.getFirstChild(); null !== f; f = f.getNext())
            (f instanceof p.FillPaintLayer && h || f instanceof p.BorderPaintLayer && A) && (d || (this._stylePrepareGeometryChange(true), d = true), g.push(f));
          for (a = 0; a < g.length; a++)
            c.removeChild(g[a]);
          if (u)
            for (var m = u.getFirstChild(); null !== m; m = m.getNext())
              (m instanceof p.FillPaintLayer && h || m instanceof p.BorderPaintLayer && A) && (d || (this._stylePrepareGeometryChange(true), d = true), c.appendChild(m.clone()));
        } finally {
          t && c._endBlockChanges([
            n._Change.BeforeChildRemove,
            n._Change.AfterChildRemove,
            n._Change.BeforeChildInsert,
            n._Change.AfterChildInsert
          ]), d && this._styleFinishGeometryChange(true);
        }
      }
      if (o.indexOf(p.PropertySet.Effects) >= 0) {
        var y = this.getEffects(), _ = e.getEffects(), v = false;
        t && y._beginBlockChanges([
          n._Change.BeforeChildRemove,
          n._Change.AfterChildRemove,
          n._Change.BeforeChildInsert,
          n._Change.AfterChildInsert
        ]);
        try {
          for (; y.getFirstChild();)
            v || (this._stylePrepareGeometryChange(true), v = true), y.removeChild(y.getFirstChild());
          if (_)
            for (var b = _.getFirstChild(); null !== b; b = b.getNext())
              v || (this._stylePrepareGeometryChange(true), v = true), y.appendChild(b.clone());
        } finally {
          t && y._endBlockChanges([
            n._Change.BeforeChildRemove,
            n._Change.AfterChildRemove,
            n._Change.BeforeChildInsert,
            n._Change.AfterChildInsert
          ]), v && this._styleFinishGeometryChange(true);
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
        this.setProperties(C, P, false, true);
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
    for (var exports = this.getStylePropertySets(), module = false, require = 0; require < exports.length; ++require) {
      var n = p.PropertySetInfo[exports[require]];
      n.visualProperties && this._setDefaultProperties(n.visualProperties), n.geometryProperties && this._setDefaultProperties(n.geometryProperties), exports[require] === p.PropertySet.Effects ? this._effId = A.uuid() : exports[require] !== p.PropertySet.FillPaintLayers && exports[require] !== p.PropertySet.BorderPaintLayers || module || (this._layId = A.uuid(), module = true);
    }
  }, p.prototype._handleStyleChange = function (e, t) {
    if (e === n._Change.BeforePropertiesChange || e === n._Change.AfterPropertiesChange) {
      for (var require = false, o = false, a = [], s = [], l = 0; l < t.properties.length; ++l) {
        var h = t.properties[l];
        p.AllGeometryProperties.hasOwnProperty(h) ? (o = true, e === n._Change.BeforePropertiesChange ? this._stylePrepareGeometryChange() : (a.push(t.properties[l]), s.push(t.values[l]))) : p.AllVisualProperties.hasOwnProperty(h) && e === n._Change.AfterPropertiesChange && (require = true, a.push(t.properties[l]), s.push(t.values[l]));
      }
      !o && require ? (this._styleRepaint(), this._stylePropertiesUpdated(a, s)) : o && (this._styleFinishGeometryChange(), this._stylePropertiesUpdated(a, s));
    } else if (e === n._Change.Store)
      for (var A = this.getStylePropertySets(), c = false, u = 0; u < A.length; ++u) {
        if ((g = A[u]) === p.PropertySet.Effects)
          this._effects && null !== this._effects.getFirstChild() ? t.blob._eff = n.store(this._effects) : t.blob._effId = this._effId;
        else if (g === p.PropertySet.FillPaintLayers || g === p.PropertySet.BorderPaintLayers)
          !c && this._paintLayers && null !== this._paintLayers.getFirstChild() ? (t.blob._layers = n.store(this._paintLayers, t.options), c = true) : c || (t.blob._layId = this._layId);
        else {
          (f = p.PropertySetInfo[g]).visualProperties && this.storeProperties(t.blob, f.visualProperties, f.storeFilter), f.geometryProperties && this.storeProperties(t.blob, f.geometryProperties, f.storeFilter);
        }
      }
    else if (e === n._Change.Restore) {
      A = this.getStylePropertySets();
      var d = false;
      for (u = 0; u < A.length; ++u) {
        var g;
        if ((g = A[u]) === p.PropertySet.Effects)
          t.blob._eff ? (this._effects = n.restore(t.blob._eff), this._effects._setParent(this)) : t.blob._effId && (this._effId = t.blob._effId);
        else if (g === p.PropertySet.FillPaintLayers || g === p.PropertySet.BorderPaintLayers)
          !d && t.blob._layers ? (this._paintLayers = n.restore(t.blob._layers), this._paintLayers._setParent(this), d = true) : !d && t.blob._layId && (this._layId = t.blob._layId, d = true);
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
      var module = function (t) {
        var i = e.getPaintLayers();
        if (!i)
          return true;
        var n = i.getFirstChild();
        if (!(i = this.getPaintLayers()))
          return true;
        var r = i.getFirstChild();
        if (null === n && null !== r || null !== n && null === r)
          return false;
        for (; null !== n && null !== r;) {
          if (null === n && null !== r || null !== n && null === r)
            return false;
          if (null !== n && null !== r) {
            if (!A.equals(n, r))
              return false;
            for (n = n.getNext(), r = r.getNext(); null !== n && !(n instanceof t);)
              n = n.getNext();
            for (; null !== r && !(r instanceof t);)
              r = r.getNext();
            if (null === n && null !== r || null !== n && null === r)
              return false;
          }
        }
        return true;
      }.bind(this);
      if (e.getProperty("ps").indexOf(p.PropertySet.Style) >= 0) {
        var require = [];
        (l = p.PropertySetInfo[p.PropertySet.Style]).visualProperties && (require = require.concat(Object.keys(l.visualProperties))), l.geometryProperties && (require = require.concat(Object.keys(l.geometryProperties)));
        var n = true;
        if (require.forEach(function (t) {
            "_sdf" !== t && (n = n && this.getProperty(t) === e.getProperty(t));
          }.bind(this)), !n)
          return false;
      }
      if (e.getProperty("ps").indexOf(p.PropertySet.FillPaintLayers) >= 0 && !module(p.FillPaintLayer))
        return false;
      if (e.getProperty("ps").indexOf(p.PropertySet.BorderPaintLayers) >= 0 && !module(p.BorderPaintLayer))
        return false;
      if (e.getProperty("ps").indexOf(p.PropertySet.Effects) >= 0) {
        var r = e.getEffects().getFirstChild(), o = this.getEffects().getFirstChild();
        if (null === r && null !== o || null !== r && null === o)
          return false;
        for (; null !== r && null !== o;) {
          if (!A.equals(r, o))
            return false;
          if (r = r.getNext(), o = o.getNext(), null === r && null !== o || null !== r && null === o)
            return false;
        }
      }
      if (e.getProperty("ps").indexOf(p.PropertySet.Text) >= 0) {
        n = true;
        for (var a = [
              p.PropertySet.Text,
              p.PropertySet.Paragraph
            ], s = (require = [], 0); s < a.length; ++s) {
          var l;
          (l = p.PropertySetInfo[a[s]]).visualProperties && (require = require.concat(Object.keys(l.visualProperties))), l.geometryProperties && (require = require.concat(Object.keys(l.geometryProperties)));
        }
        return this.hasProperty("_tff") && require.forEach(function (t) {
          n = "_fc" === t ? n && c.equals(this.getProperty(t), e.getProperty(t)) : n && this.getProperty(t) === e.getProperty(t);
        }.bind(this)), n;
      }
    }
    return true;
  }, p.prototype.toString = function () {
    return "[Mixin GStylable]";
  }, exports.exports = p;
}
