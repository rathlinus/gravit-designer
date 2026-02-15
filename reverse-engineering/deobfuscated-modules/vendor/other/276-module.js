/**
 * Module 276
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
  var n = require(82) /* SavePoint */, r = require(138) /* GGradient */, o = require(2) /* GNode */, a = require(83) /* GPage */, s = require(0) /* GObject */, l = require(28) /* GStylable */, h = require(11) /* GUtil */, A = require(56) /* GShape */, c = require(122) /* GGroup */, p = require(24) /* GEditorOptions */, u = require(6) /* GRect */, d = require(160) /* GScene */, g = require(7) /* GTransform */, f = require(385) /* GStyleEditor */, m = require(12) /* GMath */, y = require(64) /* GPlatform */, _ = require(81) /* GEditorAnnotation */, v = require(5) /* GPoint */, b = require(52) /* module */, C = require(39) /* PartInfo */, w = require(17) /* GRGBColor */, E = require(14) /* GPaintCanvas */, B = require(9) /* GLocale */, x = require(47) /* GLocaleKey */;
  function P() {
    f.call(this);
  }
  s.inherit(P, f), P.DEFAULT_EPS = 0.000001, P.STOP_HANDLE_PART_ID = h.uuid(), P.PLUS_STOP_PART_ID = h.uuid(), P.alignHandlePoint = function (e, t) {
    var i = t % 2 != 0, n = Math.floor(e.getX()), r = Math.floor(e.getY());
    return i && (n += 0.5, r += 0.5), new v(n, r);
  }, P.prototype._gradient = null, P.prototype._componentOfEffect = false, P.prototype._propName = null, P.prototype._propHolder = null, P.prototype._snapPoints = null, P.prototype.activate = function (e) {
    if (e.propName && e.propHolder instanceof o) {
      var module = e.propHolder.getProperty(e.propName, false, null, e.propTemporary);
      if (module instanceof r)
        return this._propName = e.propName, this._propHolder = e.propHolder, this._gradient = module.clone(), this._componentOfEffect = e.propHolder instanceof l.Effect, this._snapPoints = null, f.prototype.activate.call(this, e);
    }
    return false;
  }, P.prototype.deactivate = function () {
    f.prototype.deactivate.call(this), this._gradient = null, this._propName = null, this._propHolder = null, this._componentOfEffect = false, this._snapPoints = null;
  }, P.prototype.validateAlreadyActive = function (e) {
    return !(this._propHolder !== e.propHolder || this._propName !== e.propName || !h.equals(this._gradient, e.propHolder.getProperty(e.propName))) && f.prototype.validateAlreadyActive.call(this, e);
  }, P.prototype.getEditObj = function () {
    return this._gradient;
  }, P.prototype._partIdAreEqual = function (e, t) {
    if (e && t) {
      if (e.type === t.type && e.type === P.STOP_HANDLE_PART_ID && e.idx == t.idx)
        return true;
      if (e.type === t.type && e.type === P.PLUS_STOP_PART_ID && e.pos == t.pos)
        return true;
      if (!e.type && !t.type && e == t)
        return true;
    }
    return false;
  }, P.prototype.getCursor = function (e, t) {
    return e && e.type === P.STOP_HANDLE_PART_ID ? b.SelectDot : e && e.type === P.PLUS_STOP_PART_ID ? b.SelectPlus : null;
  }, P.prototype.getCustomBBox = function (e, t) {
    var i = null;
    return this._gradient.getStops().length && this._iterateAnnotations(function (t, n) {
      var r = _.getAnnotationBBox(e, t, p.annotationHandles.gradient.size, true);
      i = i ? i.united(r) : r;
    }.bind(this)), i;
  }, P.prototype.getObjectNameModified = function () {
    return B.get(new x("GGradientStyleEditor", "text.gradient"));
  }, P.prototype._applyPartMove = function (e, t, i, n) {
    this._manager.preparePermanentChange(), this._snapPoints = null, this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false, false), f.prototype._applyPartMove.call(this, e, t, i, n);
  }, P.prototype.movePart = function (e, t, i, n, r, o, a) {
    f.prototype.movePart.call(this, e, t, i, n, r, o, a), y.modifiers.metaKey || this._snapPoints || (this._snapPoints = this._getSnapPoints(n.inverted()));
  }, P.prototype.updatePartSelection = function (e, t, i) {
    var n = t && t.length ? t[0] : null, r = null;
    if (n && n.type === P.PLUS_STOP_PART_ID) {
      var o = n.pos, a = this._prepareNewStop(o), s = this._gradient.getStops();
      s.push(a);
      var l = s.length - 1;
      this._gradient.sortStops(), this._manager.blockEditorUpdate(), this._manager.beginTransaction();
      try {
        this._propHolder.setProperty(this._propName, this._gradient.clone(), false, false);
      } finally {
        this._manager.commitTransaction(B.get(new x("GGradientStyleEditor", "action.add-gradient-stop")), this.getEditorData()), this._manager.releaseEditorUpdate();
      }
      for (var h = 0; h < s.length; ++h)
        s[h] == a && (l = h);
      n = (r = new C.PartInfo(this, {
        type: P.STOP_HANDLE_PART_ID,
        idx: l
      }, { noEditorSelectionChangedEvent: true }, true, true)).id, P.prototype.updatePartSelection.call(this, false, [r.id], i);
    } else
      f.prototype.updatePartSelection.call(this, false, n ? [n] : null);
    if (i || this._manager.handleEditorPartUpdate(n), r)
      return r;
  }, P.prototype.getEditorData = function () {
    var e = { chooserOn: true };
    if (this._propHolder instanceof l.FillPaintLayer)
      (module = this._propHolder.getParent()) && (e.fillLayerIndex = module.getIndexOfChild(this._propHolder));
    else if (this._propHolder instanceof l.BorderPaintLayer) {
      (module = this._propHolder.getParent()) && (e.borderLayerIndex = module.getIndexOfChild(this._propHolder));
    } else if (this._propHolder instanceof a)
      e.pagePattern = true;
    else if (this._componentOfEffect) {
      var module;
      (module = this._propHolder.getParent()) && (e.effectIndex = module.getIndexOfChild(this._propHolder));
    }
    return this._partSelection && this._partSelection.length && null != this._partSelection[0].idx && (e.activeStopIdx = this._partSelection[0].idx), e;
  }, P.prototype._paintCross = function (e, t) {
    var i = p.annotationHandles.gradient, n = (i.size, Math.floor(e.getX()) + 0.5), r = Math.floor(e.getY()) + 0.5;
    i.outlineWidth % 2 != 0 && (n += 0.5, r += 0.5);
    var o = i.size / 2;
    t.canvas.strokeLine(n - o, r - o, n + o, r + o, i.outlineWidth + 2 * E.getScreenDPI(), new w(w.parseCSSColor(i.lineShadowColor)), false, 0.6), t.canvas.strokeLine(n + o, r - o, n - o, r + o, i.outlineWidth + 2 * E.getScreenDPI(), new w(w.parseCSSColor(i.lineShadowColor)), false, 0.6), t.canvas.strokeLine(n - o, r - o, n + o, r + o, i.outlineWidth, w.WHITE), t.canvas.strokeLine(n + o, r - o, n - o, r + o, i.outlineWidth, w.WHITE);
  }, P.prototype._prepareNewStop = function (e) {
    for (var module = this._gradient.getStops(), require = null, n = null, r = 0; r < module.length; ++r) {
      var o = module[r].position;
      o < e && (!require || o > require.position) && (require = module[r]), o > e && (!n || o < n.position) && (n = module[r]);
    }
    var a = new w(module[0].color.getValue()), s = module[0].opacity;
    if (require && n) {
      var l = n.position - require.position, h = l ? (e - require.position) / l : 1, A = l ? (n.position - e) / l : 0, c = require.color.getValue(), p = n.color.getValue(), u = require.opacity, d = n.opacity;
      a = new w([
        Math.round(c[0] * A + p[0] * h),
        Math.round(c[1] * A + p[1] * h),
        Math.round(c[2] * A + p[2] * h)
      ]), s = u * A + d * h;
    } else
      n || (a = new w(module[module.length - 1].color.getValue()), s = module[module.length - 1].opacity);
    return {
      position: e,
      color: a,
      opacity: s
    };
  }, P.prototype._iterateAnnotations = function (e) {
    var t = this._getAnnotationPoints();
    if (t)
      for (var require = 0; require < t.length; ++require)
        if (e(t[require], require))
          return;
  }, P.prototype._getAnnotationPoints = function () {
    return null;
  }, P.prototype._getCompositeTransform = function (e) {
    var t = e && this._gradient.getTransform() ? this._gradient.getTransform() : new g(), i = this._getBBoxElem();
    if (i)
      if (!this._componentOfEffect && i instanceof A) {
        var n = null;
        (o = i.getPatternBBox()) && (n = g.getNativeRectTransformation(o)), t = n ? t.multiplied(n) : t;
        var r = i.getTransform();
        t = r ? t.multiplied(r) : t;
      } else {
        var o;
        n = null;
        (o = i.getGeometryBBox()) && (n = g.getNativeRectTransformation(o)), t = n ? t.multiplied(n) : t;
      }
    return t;
  }, P.prototype._getSnapPoints = function (e) {
    var t = [], i = this._getBBoxElem(), n = null, r = i.getSourceBBox();
    if (r && !r.isEmpty() ? n = i.getTransform() || new g() : (n = new g(), r = i.getGeometryBBox()), e && (n = n.multiplied(e)), r && !r.isEmpty())
      for (var o = [
            u.Side.TOP_LEFT,
            u.Side.TOP_RIGHT,
            u.Side.BOTTOM_LEFT,
            u.Side.BOTTOM_RIGHT,
            u.Side.RIGHT_CENTER,
            u.Side.LEFT_CENTER,
            u.Side.TOP_CENTER,
            u.Side.BOTTOM_CENTER,
            u.Side.CENTER
          ], a = 0; a < o.length; ++a) {
        var s = o[a], l = n.mapPoint(r.getSide(s));
        t.push(l);
      }
    return t;
  }, P.prototype._snapPosition = function (e) {
    var t = e;
    if (this._snapPoints)
      for (var require = 0; require < this._snapPoints.length; ++require) {
        var n = this._snapPoints[require];
        if (m.ptSqrDist(n.getX(), n.getY(), e.getX(), e.getY()) <= f.options.snapDistance * f.options.snapDistance) {
          t = n;
          break;
        }
      }
    return t;
  }, P.prototype._constrainPosition = function (e, t, i, r) {
    if (!i && !r)
      return null;
    var o = null, a = r;
    if (i) {
      var s = this._getBBoxElem(), l = s.getSourceBBox();
      l ? o = s.getTransform() || new g() : (o = new g(), l = s.getGeometryBBox()), l && (a = l.getSide(i)), t && (o = o.multiplied(t));
    } else
      o = t || new g();
    return a = o.mapPoint(a), n.convertToConstrain(a.getX(), a.getY(), e.getX(), e.getY(), p.cursorConstraint);
  }, P.prototype._getBBoxElem = function () {
    var e = this._propHolder instanceof A || this._propHolder instanceof d ? this._propHolder : null;
    if (!e)
      for (var module = this._propHolder.getParent(); !e && module; module = module.getParent())
        e = module instanceof A || module instanceof d || module instanceof c ? module : null;
    return e;
  }, P.prototype._synchIdx = function (e) {
    var t = this._gradient.getStops();
    if (t && t.length && e && e.type == P.STOP_HANDLE_PART_ID && null != e.idx && e.idx < t.length && this._partSelection && this._partSelection.length && this._partIdAreEqual(e, this._partSelection[0])) {
      var require = t[e.idx];
      this._gradient.sortStops();
      for (var n = 0; n < t.length; ++n)
        t[n] == require && n != e.idx && (e.idx = n, this._partSelection[0].idx = n);
    }
  }, P.prototype.toString = function () {
    return "[Object GGradientStyleEditor]";
  }, exports.exports = P;
}
