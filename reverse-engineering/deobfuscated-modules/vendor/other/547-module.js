/**
 * Module 547
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
  var n = require(179) /* GPathUtil */, r = require(2) /* GNode */, o = require(236) /* GShapeTool */, a = require(0) /* GObject */, s = require(60) /* GPath */, l = require(162) /* GPathsGraph */, h = require(56) /* GShape */, A = require(52) /* module */, c = (require(73) /* GRectangle */, require(70) /* GText */), p = require(5) /* GPoint */, u = require(24) /* GEditorOptions */, d = require(6) /* GRect */, g = require(215) /* GTLPathTextTransformer */, f = require(113) /* GCompoundPath */, m = require(7) /* GTransform */, y = require(45) /* GPathBase */, _ = require(548) /* GPointerTool */, v = require(95) /* GImage */, b = require(9) /* GLocale */, C = require(47) /* GLocaleKey */, w = require(416) /* module */, E = require(108) /* GFont */;
  function B() {
    o.call(this, true, true);
  }
  require(387) /* GTextEditor */, a.inherit(B, o), B.prototype._textUnderMouse = null, B.prototype._pathUnderMouse = null, B.prototype._pathHit = null, B.prototype._justCreatedText = null, B.prototype._defaultMeasure = null, B.prototype.deactivate = function (e, t) {
    o.prototype.deactivate.call(this, e, t), this._pathUnderMouse && (this._pathUnderMouse.removeFlag(r.Flag.Highlighted), this._pathUnderMouse = null);
  }, B.prototype.getCursor = function () {
    return this._textUnderMouse ? A.Text : this._shape ? o.prototype.getCursor.call(this) : A.Cross;
  }, B.prototype._getRelatedItemClass = function () {
    return c;
  }, B.prototype._mouseRelease = function (e) {
    var t = this._editor, i = this._view;
    if (t.getGuides().invalidate(), this._textUnderMouse)
      this._manager.activateTool(_), this._textUnderMouse.hasFlag(r.Flag.Selected) || (_.prototype._mouseDown.call(this._manager.getActiveTool(), e), _.prototype._mouseRelease.call(this._manager.getActiveTool(), e)), t.openInlineEditor(this._textUnderMouse, i, e.client);
    else if (o.prototype._mouseRelease.call(this, e), this._pathUnderMouse && (this._pathUnderMouse.removeFlag(r.Flag.Highlighted), this._pathUnderMouse = null), this._justCreatedText) {
      var n = this._justCreatedText;
      this._justCreatedText = null, setTimeout(function () {
        t.openInlineEditor(n, i);
      }, 10);
    }
  }, B.prototype._mouseMove = function (e) {
    if (this._textUnderMouse && (this._textUnderMouse = null, this.updateCursor()), this._pathUnderMouse && (this._pathUnderMouse.removeFlag(r.Flag.Highlighted), this._pathUnderMouse = null), !this._shape) {
      var module = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), null, false, -1, 0, false, null, false, false, this._view.getViewConfiguration().multiPageView);
      module && module.length && module[0].element instanceof c && module[0].element instanceof s || (module = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), null, false, -1, u.pickDistance, false, null, false, false, this._view.getViewConfiguration().multiPageView)), module && module.length && (module[0].element instanceof c ? (this._textUnderMouse = module[0].element, this.updateCursor()) : !(module[0].element instanceof h) || module[0].element instanceof v || module[0].element instanceof f || module[0].element instanceof l || null === module[0].data.vertex.x || (this._pathUnderMouse = module[0].element, this._pathHit = new p(module[0].data.vertex.x, module[0].data.vertex.y), this._pathUnderMouse.setFlag(r.Flag.Highlighted)));
    }
  }, B.prototype._createShape = function () {
    var e = new c();
    return e.setProperties([
      "w",
      "h",
      "aw",
      "ah"
    ], [
      1,
      1,
      false,
      false
    ]), e;
  }, B.prototype._updateShape = function (e, t, i, n) {
    return !!t && (n ? e.setProperty("trf", new m(t.getWidth(), 0, 0, t.getHeight(), t.getX(), t.getY())) : e.setProperty("trf", new m(t.getWidth() / 2, 0, 0, t.getHeight() / 2, t.getX() + t.getWidth() / 2, t.getY() + t.getHeight() / 2)), true);
  }, B.prototype._insertShape = function (e, t) {
    var i = false;
    if (t)
      e && (this._fakeShape = e, o.prototype._insertShape.call(this, e, false, true));
    else {
      if (this._fakeShape) {
        var n = this._fakeShape.getParent();
        n && n.removeChild(this._fakeShape), this._fakeShape = null;
      }
      var r = new c(), a = e && e.getProperty("trf");
      if (a) {
        var s = 0, l = this._getDefaultMeasure(r);
        l && (s = l.height);
        var h = a.getMatrix(), A = h[0] < 4, p = h[3] <= s;
        r.setProperties([
          "aw",
          "ah"
        ], [
          A,
          p
        ]), r.transformSourceBBox(a, !A, !p);
      } else
        r.setProperties([
          "aw",
          "ah"
        ], [
          false,
          false
        ]);
      r.setText(b.get(new C("GTextTool", "your-text-here")), 1, 1), i = this._insertText(r), this._justCreatedText = r;
    }
    return i;
  }, B.prototype._showMousePositionInlineHint = function () {
    return true;
  }, B.prototype._showAreaInlineHint = function () {
    return true;
  }, B.prototype._hasCenterCross = function () {
    return true;
  }, B.prototype._createShapeManually = function (e) {
    var t = new c(), i = new m(1, 0, 0, 1, e.getX(), e.getY());
    t.transformSourceBBox(i), t.setText(b.get(new C("GTextTool", "your-text-here")), 1, 1);
    try {
      if (this._editor.beginTransaction(), this._insertText(t, true), this._pathUnderMouse) {
        var r = null;
        if (this._pathUnderMouse instanceof y)
          r = this._pathUnderMouse;
        else if ((r = n.createPathFromVertexSource(this._pathUnderMouse)) instanceof s) {
          var o = this._pathUnderMouse, a = o.$trf;
          o.$trf = null, r.assignFrom(o), o instanceof y && (r.$evenodd = o.getProperty("evenodd"), r.$closed = o.getProperty("closed")), o.$trf = a;
          var l = o.getParent(), h = o.getNext(true);
          l.removeChild(o), l.insertChild(r, h);
        } else
          r = null;
        if (r) {
          var A = r.clone();
          this._scene.link(t, r);
          var p = new g(null, A);
          p.getMatrix(0, 0, new d());
          var u = this._view.getWorldTransform(this._view.getScene().getActivePage()).inverted().mapPoint(this._pathHit), f = m.getNativeRectTransformation(r.getGeometryBBox()).getTranslation(), _ = p.inverseTransform(u.subtract(f));
          t.setProperties([
            "tpthl",
            "tpths"
          ], [
            _.getX(),
            g.OUTSIDE
          ]);
        }
      }
    } finally {
      this._editor.commitTransaction(b.get(new C("GTextTool", "action.insert-text")));
    }
    this._justCreatedText = t;
  }, B.prototype._insertText = function (e, t) {
    return o.prototype._insertShape.call(this, e, false, t, b.get(new C("GTextTool", "action.insert-text")));
  }, B.prototype._getDefaultMeasure = function (e) {
    if (!this._defaultMeasure) {
      var module = this._scene && this._scene.getWorkspace(), require = module && module.getFontManager();
      if (require) {
        var n = [];
        n.push(e.getProperty("_tfs") === E.Style.Normal ? "normal" : "italic"), n.push(e.getProperty("_tfw")), n.push(e.getProperty("_tfi") + "px"), n.push(e.getProperty("_tff"));
        var r = "font: " + n.join(" ");
        this._defaultMeasure = new w(b.get(new C("GTextTool", "your-text-here")), r, null, require);
      }
    }
    return this._defaultMeasure;
  }, B.prototype.toString = function () {
    return "[Object GTextTool]";
  }, exports.exports = B;
}
