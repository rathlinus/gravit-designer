/**
 * Module 82
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
  var n = require(2) /* GNode */, r = require(11) /* GUtil */, o = require(99) /* module */, a = require(5) /* GPoint */, s = require(87) /* GVertexSource */, l = require(104) /* GItem */, h = require(159) /* GLayer */, A = require(84) /* GAnnotation */, c = require(366) /* GComment */, p = require(506) /* GAnnotationsList */, u = require(179) /* GPathUtil */, d = require(739) /* GGuideLinesGuide */, g = require(60) /* GPath */, f = require(72) /* GEvent */, m = require(24) /* GEditorOptions */, y = require(113) /* GCompoundPath */, _ = require(153) /* GBBoxGuide */, v = require(740) /* GGridGuide */, b = require(1076) /* module */, C = require(741) /* GPointsGuide */, w = require(75) /* GEventTarget */, E = require(0) /* GObject */, B = require(70) /* GText */, x = require(268) /* GConnector */, P = require(6) /* GRect */, S = require(22) /* GElement */, T = require(162) /* GPathsGraph */, I = require(7) /* GTransform */, F = require(122) /* GGroup */, R = require(45) /* GPathBase */, D = require(233) /* GCompoundShape */, k = require(544) /* GFullPixelsGuide */, G = require(36) /* PartsPropertyVals */, Q = require(210) /* InvalidationRequestEvent */, M = require(742) /* GPageGuide */, N = require(743) /* GPageLabelGuide */, U = require(12) /* GMath */, V = require(160) /* GScene */, O = require(83) /* GPage */, L = require(216) /* GSymbol */, Y = require(69) /* GBlock */, X = require(63) /* GVertexTransformer */, H = require(28) /* GStylable */, W = require(66) /* EdTransformOptions */, Z = require(540) /* InvalidationRequestEvent */, z = require(1077) /* module */, j = require(9) /* GLocale */, J = require(47) /* GLocaleKey */, q = (require(56) /* GShape */, require(531) /* GCollabText */), K = require(471) /* GTransactionRecorder */, ee = require(140) /* module */;
  function te(e) {
    this._scene = e, this._scene.__graphic_editor__ = this, this._transactionStack = [], this._undoStates = [], this._redoStates = [], this._guides = new Q(this._scene);
    var t = new _(this._guides);
    t.setPriority(_.PRIORITY.DISTANCE_FIRST), this._guides.addGuide(t, true), this._guides.addGuide(new v(this._guides)), this._guides.addGuide(new d(this._guides)), this._guides.addGuide(new C(this._guides)), this._guides.addGuide(new M(this._guides)), this._guides.addGuide(new k(this._guides)), this._guides.addGuide(new N(this._guides)), this._guides.addGuide(new z(this._guides)), this._guides.addGuide(new b(this._guides)), this._distanceHelper = new Z(this._scene), this._scene.addEventListener(n.AfterInsertEvent, this._afterNodeInsert, this, undefined, undefined, true), this._scene.addEventListener(n.BeforeRemoveEvent, this._beforeNodeRemove, this, undefined, undefined, true), this._scene.addEventListener(n.BeforeFlagChangeEvent, this._beforeFlagChange, this, undefined, undefined, true), this._scene.addEventListener(n.AfterFlagChangeEvent, this._afterFlagChange, this, undefined, undefined, true), this._scene.addEventListener(S.GeometryChangeEvent, this._geometryChange, this, undefined, undefined, true);
    var i = this._scene.queryAll(":selected");
    if (i && i.length)
      for (var r = 0; r < i.length; ++r)
        this._tryAddToSelection(i[r]);
  }
  E.inherit(te, w), te._SavePoint = function (e, t, i) {
    this._oldId = t, this._newId = i, this._editor = e;
  }, te._SavePoint.prototype._editor = null, te._SavePoint.prototype._newId = null, te._SavePoint.prototype._oldId = null, te._SavePoint.prototype.rollback = function () {
    return this._editor.markSavePoint(this._oldId);
  }, te.ArrangeOrderType = {
    SendToFront: "send-front",
    BringForward: "bring-forward",
    SendBackward: "send-backward",
    SendToBack: "send-back"
  }, te.ArrangeAlignType = {
    AlignLeft: "align-left",
    AlignCenter: "align-center",
    AlignRight: "align-right",
    AlignTop: "align-top",
    AlignMiddle: "align-middle",
    AlignBottom: "align-bottom",
    AlignJustifyHorizontal: "align-justify-horizontal",
    AlignJustifyVertical: "align-justify-vertical"
  }, te.getEditor = function (e) {
    return e.__graphic_editor__ ? e.__graphic_editor__ : null;
  }, te.tryRunTransaction = function (e, t, i) {
    var n = null;
    if (e && e.getScene) {
      var r = e.getScene();
      n = r ? te.getEditor(r) : null;
    }
    n && n.beginTransaction();
    try {
      t();
    } finally {
      n && n.commitTransaction(i);
    }
  }, te.convertToConstrain = function (e, t, i, n, r) {
    var o, s, l, h, A = new I(1, 0, 0, 1, 0, 0);
    r && (A = A.rotated(r));
    var c = (A = A.translated(e, t)).inverted().mapPoint(new a(i, n)), p = c.getX(), u = c.getY();
    return o = Math.abs(p), s = Math.abs(u), U.isEqualEps(o, 0) || U.isEqualEps(s, 0) || U.isEqualEps(o - s, 0) ? (h = p, l = u) : o > s ? (h = p, l = s / o < 0.4142 ? 0 : 0 > u ? -o : o) : (l = u, h = o / s < 0.4142 ? 0 : 0 > p ? -s : s), A.mapPoint(new a(h, l));
  }, te.getGroupGeometryBBox = function (e, t, i) {
    if (!e)
      return null;
    for (var n = null, r = 0; r < e.length; r++) {
      var o = e[r];
      if (o instanceof S) {
        var a = null;
        if (i && o.hasMixin(S.Transform)) {
          var s = G.getEditor(o);
          a = s ? s.getPEGeometryBBox() : o.getGeometryBBox();
        } else
          a = o.getGeometryBBox();
        if (a) {
          if (t) {
            var l = te.getElementPage(o);
            if (l) {
              var h = l.getPosition(true);
              a = a.translated(h.getX(), h.getY());
            }
          }
          n = n ? n.united(a) : a;
        }
      }
    }
    return n;
  }, te.getGroupTransformBBox = function (e, t) {
    if (!e)
      return null;
    for (var require = null, n = 0; n < e.length; n++) {
      var r = e[n];
      if (r instanceof S) {
        var o = G.getEditor(r), a = null;
        if (a = o ? o.getElementSelectionBBox() : r.getGeometryBBox()) {
          var s = te.getElementPage(r);
          if (s) {
            var l = s.getPosition(true);
            a = a.translated(l.getX(), l.getY());
          }
          require = require ? require.united(a) : a;
        }
      }
    }
    return require && (require.getWidth() || require.getHeight()) ? require : te.getGroupGeometryBBox(e, t);
  }, te.getElementPage = function (e) {
    for (var module = e; module;) {
      if (module instanceof O)
        return module;
      module = module.getParent();
    }
    return null;
  }, te.getEditorPage = function (e) {
    var t = null;
    if (e instanceof G ? t = e : e.getParentEditor() instanceof G && (t = e.getParentEditor()), t) {
      var require = t.getElement();
      return te.getElementPage(require);
    }
    return null;
  }, te.validateBlockInsertion = function (e, t, i) {
    var r, o = e;
    if (!o) {
      if (!i || !i.getParent())
        return false;
      o = i.getParent();
    }
    if (!t)
      return false;
    if (i === t)
      return false;
    if (i ? r = i.getPrevious() : o.hasMixin(n.Container) && (r = o.getLastChild()), r === t && (r = r.getPrevious()), t.getProperty("plkt") & Y.ProgramLck.AlwaysBack && !(o instanceof O || o instanceof V || o.getProperty("plkt") & Y.ProgramLck.AlwaysBack))
      return false;
    if (r) {
      if (r.getProperty("plkt") & Y.ProgramLck.AlwaysBack) {
        var a = r.getNext();
        return a === t && (a = a.getNext()), !(a && a.getProperty("plkt") & Y.ProgramLck.AlwaysBack);
      }
      return !(t.getProperty("plkt") & Y.ProgramLck.AlwaysBack);
    }
    return !(i && i.getProperty("plkt") & Y.ProgramLck.AlwaysBack);
  }, te.FileDropEvent = function (e, t) {
    this.file = e, this.position = t;
  }, E.inherit(te.FileDropEvent, f), te.FileDropEvent.file = null, te.FileDropEvent.position = null, te.FileDropEvent.prototype.toString = function () {
    return "[Event GEditor.FileDropEvent]";
  }, te.CustomDropEvent = function (e, t) {
    this.data = e, this.position = t;
  }, E.inherit(te.CustomDropEvent, f), te.CustomDropEvent.data = null, te.CustomDropEvent.position = null, te.CustomDropEvent.prototype.toString = function () {
    return "[Event GEditor.CustomDropEvent]";
  }, te.ModifiedEvent = function (e, t) {
    this.data = e || null, e && t && (this.data = $.extend({ evtType: t }, e));
  }, E.inherit(te.ModifiedEvent, f), te.ModifiedEvent.Type = {
    Raw: 1,
    Undo: 2,
    Redo: 3
  }, te.ModifiedEvent.prototype.data = null, te.ModifiedEvent.prototype.toString = function () {
    return "[Event GEditor.ModifiedEvent]";
  }, te.MODIFIED_EVENT = new te.ModifiedEvent(), te.SelectionChangedEvent = function (e) {
    e && (this.data = e);
  }, E.inherit(te.SelectionChangedEvent, f), te.SelectionChangedEvent.prototype.toString = function () {
    return "[Event GEditor.SelectionChangedEvent]";
  }, te.SELECTION_CHANGED_EVENT = new te.SelectionChangedEvent(), te.InlineEditorEvent = function (e, t, i) {
    this.editor = e, this.type = t, this.data = i;
  }, E.inherit(te.InlineEditorEvent, f), te.InlineEditorEvent.Type = {
    BeforeOpen: 0,
    AfterOpen: 1,
    BeforeClose: 10,
    AfterClose: 11,
    TryOpen: 20,
    SelectionChanged: 100,
    TextEdited: 101
  }, te.InlineEditorEvent.prototype.editor = null, te.InlineEditorEvent.prototype.type = null, te.InlineEditorEvent.prototype.data = null, te.InlineEditorEvent.prototype.toString = function () {
    return "[Event GEditor.InlineEditorEvent]";
  }, te.InvalidationRequestEvent = function (e, t) {
    this.editor = e, this.args = t;
  }, E.inherit(te.InvalidationRequestEvent, f), te.InvalidationRequestEvent.prototype.editor = null, te.InvalidationRequestEvent.prototype.args = null, te.InvalidationRequestEvent.prototype.getEditorPage = function () {
    return this.args && this.args.pages ? this.args.pages.length > 1 ? this.args.pages[0].getScene() : this.args.pages[0] : this.editor ? te.getEditorPage(this.editor) : null;
  }, te.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GEditor.InvalidationRequestEvent]";
  }, te.EdGeometryChangeEvent = function () {
  }, E.inherit(te.EdGeometryChangeEvent, f), te.HotkeyEvent = function (e) {
    this.keys = e;
  }, E.inherit(te.HotkeyEvent, f), te.HotkeyEvent.keys = null, te.HotkeyEvent.toString = function () {
    return "[Event GEditor.HotkeyEvent]";
  }, te.prototype._scene = null, te.prototype._selection = null, te.prototype._lastCloneSelection = null, te.prototype._storedSelection = null, te.prototype._selectionUpdateCounter = 0, te.prototype._selectionDetail = false, te.prototype._selectionEdit = false, te.prototype._pathResize = true, te.prototype._transactionStack = null, te.prototype._startingScene = null, te.prototype._undoStates = null, te.prototype._redoStates = null, te.prototype._savePointId = null, te.prototype._guides = null, te.prototype._distanceHelper = null, te.prototype._keysOff = null, te.prototype._currentInlineEditorNode = null, te.prototype._selEditor = null, te.prototype._activatedPage = null, te.prototype._edTrfSettings = null, te.prototype._uid = null, te.prototype.getScene = function () {
    return this._scene;
  }, te.prototype.hasSelection = function () {
    return this._selection && this._selection.length > 0;
  }, te.prototype.getSelectionBBox = function (e) {
    if (this.hasSelection()) {
      for (var module = null, require = 0; require < this._selection.length; ++require) {
        var n = e ? this._selection[require].getGeometryBBox() : this._selection[require].getPaintBBox();
        n && n.getWidth() + n.getHeight() > 0 && (module = module ? module.united(n) : new P(n.getX(), n.getY(), n.getWidth(), n.getHeight()));
      }
      return module;
    }
    return null;
  }, te.prototype.getSelection = function () {
    return this._selection;
  }, te.prototype.hasSelectionDetail = function () {
    return this._selectionDetail;
  }, te.prototype.setSelectionDetail = function (e, t, n) {
    if (e !== this._selectionDetail || t) {
      this._selectionDetail = e;
      var r = require(39) /* PartInfo */;
      if (this._selection)
        for (var o = 0; o < this._selection.length; ++o) {
          var a = G.getEditor(this._selection[o]);
          if (a) {
            var s = require(329) /* ImageBoxEditor */;
            if (this._selectionDetail)
              a.setFlag(r.Flag.Detail), a instanceof s && "subselect" == m.selectDoubleClickBehavior && a.setEditMode(true, t, true, n ? n.getWorldTransform().getScaleFactor() : null);
            else {
              var l = require(235) /* GCompoundPathEditor */;
              (a.getPartSelection() || a instanceof l && a.hasPathPartSelection()) && a.updatePartSelection(false, null), a instanceof s && "subselect" == m.selectDoubleClickBehavior && a.setEditMode(false, t), a.removeFlag(r.Flag.Detail);
            }
          }
        }
      this.updateSelectionEditors();
    }
  }, te.prototype.hasSelectionEdit = function () {
    return this._selectionEdit;
  }, te.prototype.setSelectionEdit = function (e, t, n) {
    if (e !== this._selectionEdit || t) {
      this._selectionEdit = e;
      var r = require(66) /* EdTransformOptions */, o = require(127) /* GPathEditor */, a = require(235) /* GCompoundPathEditor */, s = require(275) /* GPathsGraphEditor */;
      if (this._selection)
        for (var l = 0; l < this._selection.length; ++l) {
          var h = G.getEditor(this._selection[l]);
          h && (h.hasSelectionEditing() ? h.setEditMode(e, t, true, n ? n.getWorldTransform().getScaleFactor() : null) : h instanceof o || h instanceof a || h instanceof s || (e ? h.removeFlag(r.Flag.ResizeAll) : h.setFlag(r.Flag.ResizeAll)));
        }
    }
  }, te.prototype.hasPathResize = function () {
    return this._pathResize;
  }, te.prototype.setPathResize = function (e, t) {
    if ((this._pathResize !== e || t) && (this._pathResize = e, this._selection))
      for (var n = require(127) /* GPathEditor */, r = require(235) /* GCompoundPathEditor */, o = require(275) /* GPathsGraphEditor */, a = require(66) /* EdTransformOptions */, s = 0; s < this._selection.length; ++s) {
        var l = G.getEditor(this._selection[s]);
        (l instanceof n && !y.isOwnedPath(this._selection[s]) || l instanceof r || l instanceof o) && (this._pathResize ? l.setFlag(a.Flag.ResizeAll) : l.removeFlag(a.Flag.ResizeAll));
      }
  }, te.prototype.getSelectionEditor = function () {
    return this._selEditor;
  }, te.prototype.hideSelection = function () {
    if (this._selection) {
      for (var exports = require(39) /* PartInfo */, module = require(154) /* LabelHolder */, n = 0; n < this._selection.length; ++n) {
        var r = G.getEditor(this._selection[n]);
        r instanceof module && r.setFlag(exports.Flag.HideEditor);
      }
      this._selEditor && this._selEditor.setFlag(exports.Flag.HideEditor);
    }
  }, te.prototype.resetHideSelection = function () {
    if (this._selection) {
      for (var exports = require(39) /* PartInfo */, module = require(154) /* LabelHolder */, n = 0; n < this._selection.length; ++n) {
        var r = G.getEditor(this._selection[n]);
        r instanceof module && r.removeFlag(exports.Flag.HideEditor);
      }
      this._selEditor && this._selEditor.removeFlag(exports.Flag.HideEditor);
    }
    this.updateSelectionEditors();
  }, te.prototype.getGuides = function () {
    return this._guides;
  }, te.prototype.getDistanceHelper = function () {
    return this._distanceHelper;
  }, te.prototype.activateDistanceHelper = function (e) {
    var t = true;
    if (e && this._keysOff && this._keysOff.length)
      for (var require = 0; require < this._keysOff.length && t; ++require)
        this._keysOff[require] == e && (t = false);
    return !!t && (this._distanceHelper.activateMeasurement(), true);
  }, te.prototype.keysOff = function (e) {
    if (e && e.length)
      if (this._keysOff)
        for (var module = 0; module < e.length; ++module) {
          for (var require = true, n = 0; n < this._keysOff.length && require; ++n)
            this._keysOff[n] == e[module] && (require = false);
          require && this._keysOff.push(e[module]);
        }
      else
        this._keysOff = e.slice();
  }, te.prototype.keysOn = function (e) {
    if (e && e.length && this._keysOff && this._keysOff.length) {
      for (var module = 0; module < e.length; ++module)
        for (var require = this._keysOff.length - 1; require >= 0; --require)
          this._keysOff[require] == e[module] && this._keysOff.splice(require, 1);
      this._keysOff.length || (this._keysOff = null);
    }
  }, te.prototype.getPathSelection = function () {
    var e, t = null;
    if (this.hasSelection())
      for (e = 0; e < this._selection.length; ++e)
        if (this._selection[e] instanceof g || this._selection[e] instanceof y) {
          if (t) {
            t = null;
            break;
          }
          t = this._selection[e];
        } else if (t) {
          t = null;
          break;
        }
    return t;
  }, te.prototype.getAlignExclusions = function (e, t) {
    var i = null, r = t || this._selection;
    if (r && r.length) {
      var o = [];
      e || (o = r.slice());
      for (var a = 0; a < r.length; ++a) {
        var s = r[a];
        s.hasMixin(n.Container) && s.acceptChildren(function (e) {
          if (!(e instanceof S))
            return false;
          o.push(e);
        }, false, true);
      }
      o.length && (i = o);
    }
    return i;
  }, te.prototype.getMappingScopes = function (e) {
    var t = e || this._selection, i = [];
    if (t && t.length)
      for (var n = 0; n < t.length; ++n) {
        var r, o = t[n];
        if (o.getParent())
          (r = o.findParent(function (e) {
            return e instanceof S;
          })) && (!i.length || i.indexOf(r) < 0) && i.push(r);
      }
    else
      (r = (r = this._scene.querySingle("layer:active")) || this._scene.getActivePage()) && i.push(r);
    return i;
  }, te.prototype.release = function () {
    te.MODIFIED_EVENT.sender = null, te.SELECTION_CHANGED_EVENT.sender = null, delete this._scene.__graphic_editor__, this._scene.removeEventListener(n.AfterInsertEvent, this._afterNodeInsert, this), this._scene.removeEventListener(n.BeforeRemoveEvent, this._beforeNodeRemove, this), this._scene.removeEventListener(n.BeforeFlagChangeEvent, this._beforeFlagChange, this), this._scene.removeEventListener(n.AfterFlagChangeEvent, this._afterFlagChange, this), this._scene.removeEventListener(S.GeometryChangeEvent, this._geometryChange, this);
  }, te.prototype.requestInvalidation = function (e, t) {
    this.hasEventListeners(te.InvalidationRequestEvent) && this.trigger(new te.InvalidationRequestEvent(e, t));
  }, te.prototype.centerSelection = function () {
    var e = null, t = this._scene.getActivePage();
    e = t ? t.isFixedSized() ? t.getGeometryBBox() : t.getPaintBBox() : this._scene.getPaintBBox(), this.arrangeAlign(te.ArrangeAlignType.AlignCenter, null, true, e, true), this.arrangeAlign(te.ArrangeAlignType.AlignMiddle, null, true, e, true);
  }, te.prototype.getAnnotationsExceptions = function (e) {
    var t = this._uid, i = [];
    function n(e) {
      if (e.getProperty("uid") === t)
        for (var n = e.getFirstChild(); null !== n; n = n.getNext())
          n instanceof c && i.push(n);
      else
        i.push(e);
    }
    for (var r = 0; r < e.length; r++) {
      var o;
      if (e[r] instanceof O && e[r].hasAnnotations() ? o = e[r].getAnnotations() : e[r] instanceof p && (o = e[r]), o)
        for (var a = o.getFirstChild(); null !== a; a = a.getNext())
          n(a);
      else
        e[r].hasMixin(A) ? n(e[r]) : e[r] instanceof c && i.push(e[r]);
    }
    return i;
  }, te.prototype.getLinkedElementsInSelection = function (e, t) {
    var i = [], r = this._scene, o = function (e) {
        var n;
        e instanceof B && e.hasPathAttached() && r.visitLinks(e, function (e) {
          if (e instanceof R)
            return n = [e], false;
        }), e instanceof x && (n = [
          e.getSrcPath(),
          e.getDstPath()
        ]), n && n.forEach(function (n) {
          for (var r = n; r;) {
            if (t.indexOf(r) >= 0) {
              i.push(e);
              break;
            }
            r = r.getParent();
          }
        });
      };
    return o(e), !i.length && e.hasMixin(n.Container) && e.acceptChildren(o), i;
  }, te.prototype.cloneSelection = function (e, t) {
    if (this._selection && this._selection.length > 0) {
      for (var require = this.getIndividualSelection(), r = [], o = [], a = 0; a < require.length; ++a) {
        var s = require[a];
        o = o.concat(this.getLinkedElementsInSelection(s, require)), s.hasMixin(n.Store) && r.push({
          element: s,
          transform: e ? new I(1, 0, 0, 1, m.cloneShift, m.cloneShift) : null
        });
      }
      o = o.concat(this.getAnnotationsExceptions(require));
      var l = [];
      if (t) {
        if (this._lastCloneSelection)
          for (a = 0; a < this._lastCloneSelection.length; ++a) {
            var h = this._lastCloneSelection[a], A = r[a].element;
            if (h.hasMixin(S.Transform) && A.hasMixin(S.Transform)) {
              var c = h.getTransform(), p = A.getTransform();
              if (p) {
                var u = c ? p.preMultiplied(c.inverted()) : p;
                u.isIdentity() || (r[a].transform = u);
              }
            }
          }
        var d = [];
      }
      for (a = 0; a < r.length; ++a) {
        s = r[a].element;
        var g = r[a].transform, f = s.clone({
            exceptions: o,
            copy: true,
            copyIgnoreProperties: m.propertiesExcludedFromCopying
          });
        if (f) {
          if (f instanceof O) {
            s.getParent().insertChild(f);
            var y = f.getPosition(true, true, true, true);
            f.setProperty("off", new I(1, 0, 0, 1, y.getX(), y.getY())), this._scene.renameClone(s, f);
          } else
            s.getParent().insertChild(f, s.getNext());
          f instanceof O || !g || !f.hasMixin(S.Transform) || f.transform(g, true), l.push(f), t && d.push(s);
        }
      }
      if (l.length > 0) {
        var _ = G.getEditor(this._scene), v = !!_ && _.isTransformBoxActive();
        this.updateSelection(false, l), l[0] instanceof O && this._scene.setActivePage(l[0]), (_ = G.getEditor(this._scene)) && v && _.setTransformBoxActive(true);
      }
      return t && (this._lastCloneSelection = d.slice()), l;
    }
    return null;
  }, te.prototype.deleteSelection = function (e) {
    var t = this.getIndividualSelection();
    if (t && (t = t.slice().filter(function (e) {
        return !(e.getProperty("plkt") & Y.ProgramLck.NoDelete);
      })), t && t.length > 0) {
      e || this.beginTransaction(), this._beginSelectionUpdate();
      try {
        for (var require = n.order(t, true), r = 0; r < require.length; ++r) {
          for (var o = require[r], a = o.getParent(); a && (!(a instanceof L) || a.isMaster());)
            a = a.getParent();
          if (a && o.hasMixin(n.Multireference))
            !!a._getMasterSibling(o.getMultireferenceId(), false, true) || (a = null);
          if (o instanceof Y && a && !this._selectionDetail)
            o.setProperties([
              "vis",
              "lkt"
            ], [
              false,
              Y.LockType.Full
            ]), o.removeFlag(n.Flag.Selected), o.removeFlag(n.Flag.Highlighted);
          else if (o instanceof l && !o.hasFlag(S.Flag.PartialLocked)) {
            var s = G.getEditor(o);
            if (a && o instanceof Y && !s.isDeletePartsAllowed())
              continue;
            for (a = o.getParent(), (s = G.getEditor(o)) && s.isDeletePartsAllowed() && !s.isRemovalBlocked() ? s.deletePartsSelected() : s && !s.isRemovalBlocked() && a && (o.removeFlag(n.Flag.Selected), a.removeChild(o)); (a instanceof D || a instanceof F) && !a.getFirstChild();) {
              var A = a.getParent();
              A && A.removeChild(a), a = A;
            }
          } else
            o instanceof h && !o.hasFlag(S.Flag.PartialLocked) && this._scene.deleteActiveLayer(o);
        }
      } finally {
        this._finishSelectionUpdate(), e || this.commitTransaction(j.get(new J("GEditor", "action.delete-selection")));
      }
    }
    return null;
  }, te.prototype.updateSelection = function (e, t) {
    this._beginSelectionUpdate();
    try {
      if (t && t.length && (t = t.filter(function (e) {
          var t = e.getProperty("plkt");
          return !(t & Y.ProgramLck.NoEdit && t & Y.ProgramLck.NoSizeChanges && t & Y.ProgramLck.NoMove && t & Y.ProgramLck.NoDelete && t & Y.ProgramLck.NoSelect);
        })), e) {
        if (t && t.length)
          for (r = 0; r < t.length; ++r)
            if (t[r].hasFlag(n.Flag.Selected)) {
              var require = t[r].hasMixin(n.Container) ? t[r].getInternalSelectedNodes() : null;
              t[r].removeFlag(n.Flag.Selected), require && require.length && require.forEach(function (e) {
                e.setFlag(n.Flag.Selected);
              });
            } else
              t[r].setFlag(n.Flag.Selected);
      } else if (this.clearSelection(t), t && t.length > 0)
        for (var r = 0; r < t.length; ++r)
          t[r].setFlag(n.Flag.Selected);
    } finally {
      this._finishSelectionUpdate();
    }
  }, te.prototype.updateSelectionUnderCollision = function (e, t, i, n, r) {
    var o = i;
    this._beginSelectionUpdate();
    try {
      for (var a = [], s = [], l = 0; l < t.length; ++l) {
        var h = t[l], A = G.openEditor(h);
        if (n) {
          var c = h.findParent(function (e) {
              return e instanceof O;
            }), p = (c = c || this._scene.getActivePage()).getPosition(n);
          o = new X(i, new I(1, 0, 0, 1, -p.getX(), -p.getY()));
        }
        r ? this._selectionDetail && A && A.isPartSelectionUnderCollisionAllowed() && A.updatePartSelectionUnderCollision(e, o) : A && A.isPartSelectionUnderCollisionAllowed() && this._selectionDetail ? A.updatePartSelectionUnderCollision(e, o) && s.push(h) : this._selectionDetail ? h.isFullUnderCollision(o) && a.push(h) : a.push(h);
      }
      if (!r)
        if (s && s.length)
          if (this._selection || (this._selection = []), e) {
            for (l = 0; l < s.length; ++l)
              this._selection.indexOf(s[l]) < 0 && this._tryAddToSelection(s[l]);
            this.updateSelection(e, a);
          } else
            a = a.concat(s), this.updateSelection(e, a);
        else
          this.updateSelection(e, a);
    } finally {
      this._finishSelectionUpdate();
    }
  }, te.prototype.highlightSelectablesUnderCollision = function (e, t, i, r, o) {
    var a, s, l, h = i, A = t.slice(), c = [], p = this, u = function (e) {
        var t = e.findParent(function (e) {
            return e instanceof O;
          }), n = (t = t || p._scene.getActivePage()).getPosition(r);
        return new X(i, new I(1, 0, 0, 1, -n.getX(), -n.getY()));
      };
    if (this._scene.acceptChildren(function (t) {
        if ((a = A.indexOf(t)) >= 0) {
          l = false, A.splice(a, 1);
          var i = t;
          o ? p._selectionDetail && (!e && t.hasFlag(n.Flag.Highlighted) || (s = G.openEditor(i)) && s.isPartSelectionUnderCollisionAllowed() && (r && (h = u(i)), s.updatePartSelectionUnderCollision(e, h, true))) : t.hasFlag(n.Flag.Highlighted) && !e || (p._selectionDetail && (s = G.openEditor(i)), p._selectionDetail && s && s.isPartSelectionUnderCollisionAllowed() ? (p._selectionDetail || (s = G.openEditor(i)), s && (r && (h = u(i)), s.updatePartSelectionUnderCollision(e, h, true))) : (p._selectionDetail && r && (h = u(i)), p._selectionDetail && !i.isFullUnderCollision(h) || (e && i.hasFlag(n.Flag.Selected) ? e && i.hasFlag(n.Flag.Selected) && (l = true, i.hasFlag(n.Flag.Highlighted) && (i.removeFlag(n.Flag.Highlighted), removeFlag++)) : i.setFlag(n.Flag.Highlighted)))), e && !o && (l || i.hasFlag(n.Flag.Highlighted) || c.push(i));
        } else
          t.hasFlag(n.Flag.Highlighted) && t.removeFlag(n.Flag.Highlighted);
        return true;
      }, false, true), !o && e && c.length)
      for (var d = 0; d < c.length; ++d) {
        c[d].setFlag(n.Flag.Highlighted);
      }
  }, te.prototype.clearSelection = function (e) {
    if (!r.equals(e, this._selection)) {
      this._beginSelectionUpdate();
      try {
        for (var module = 0; this._selection && module < this._selection.length;)
          if (e && e.indexOf(this._selection[module]) >= 0)
            module++;
          else {
            var require = this._selection[module].hasMixin(n.Container) ? this._selection[module].getInternalSelectedNodes() : null;
            this._selection[module].removeFlag(n.Flag.Selected), require && require.length && require.forEach(function (e) {
              e.setFlag(n.Flag.Selected);
            });
          }
      } finally {
        this._finishSelectionUpdate();
      }
    }
  }, te.prototype.clearInternalSelection = function (e, t) {
    var i = e.hasMixin(n.Container) ? e.getInternalSelectedNodes() : null;
    if (i && i.length) {
      if (r.equals(t, i))
        return false;
      this._beginSelectionUpdate();
      try {
        for (var o = 0; o < i.length; ++o)
          (!t || t.indexOf(i[o]) < 0) && i[o].removeFlag(n.Flag.Selected);
      } finally {
        return this._finishSelectionUpdate(), true;
      }
    }
    return false;
  }, te.prototype.storeSelection = function () {
    this._storedSelection = this._saveSelection();
  }, te.prototype.restoreSelection = function () {
    this._loadSelection(this._storedSelection);
  }, te.prototype.filterIndividualElements = function (e) {
    for (var module = [], require = function (e) {
          return !(e instanceof l && e.hasFlag(n.Flag.Selected));
        }, r = 0; r < e.length; ++r)
      e[r].hasMixin(n.Container) ? e[r].acceptChildren(require) && module.push(e[r]) : module.push(e[r]);
    return module;
  }, te.prototype.getIndividualSelection = function () {
    return this._selection ? this.filterIndividualElements(this._selection) : null;
  }, te.prototype.moveSelection = function (e, t, i, n, r, s, l, h) {
    if (!this._selection)
      return new a(0, 0);
    var c = this._selection.filter(function (e) {
      return !(e instanceof Y) || e instanceof Y && 0 == (e.getProperty("plkt") & Y.ProgramLck.NoMove);
    });
    if (!c.length)
      return new a(0, 0);
    var p = e;
    if (t) {
      var u = this.getAlignExclusions(s);
      u && this._guides.useExclusions(u);
      var d = this.getMappingScopes(), g = null;
      if (c.some(function (e) {
          return e.hasMixin(A);
        }) && (g = [_]), Q.options.zones && r && 1 == c.length && c[0].getGeometryBBox()) {
        var f = (v = c[0].getGeometryBBox()).getClosestSideName(r), m = v.getSide(f), y = m.add(e);
        this._guides.beginMap(d), y = this._guides.mapPoint(y, i ? o.DetailMap.Mode.DetailOnFilterOn : o.DetailMap.Mode.FilterOff, g), this._guides.finishMap(), p = y.subtract(m);
      } else {
        var v, b = this.filterIndividualElements(c);
        if (v = te.getGroupGeometryBBox(b, l)) {
          var C = v.translated(e.getX(), e.getY());
          this._guides.beginMap(d), C = this._guides.mapRect(C, g, !!l), this._guides.finishMap();
          var w = v.getSide(P.Side.TOP_LEFT);
          p = C.getSide(P.Side.TOP_LEFT).subtract(w);
        }
      }
    }
    var E = null;
    return l && ((E = new W.EdTransformOptions()).isMultiPage = true, E.doCollisionlessTransform = h), this.transformSelection(new I(1, 0, 0, 1, p.getX(), p.getY()), i, n, E), new a(p.getX(), p.getY());
  }, te.prototype.scaleSelection = function (e, t, i, n, r, o, a, s) {
    var l = this.getIndividualSelection(), h = te.getGroupGeometryBBox(l, s);
    if (h) {
      var A, c, p = h.getSide(P.Side.TOP_LEFT), u = h.getSide(P.Side.BOTTOM_RIGHT), d = h.getSide(P.Side.CENTER);
      A = i < 0 ? u.getX() : i > 0 ? p.getX() : d.getX(), c = n < 0 ? u.getY() : n > 0 ? p.getY() : d.getY();
      var g = new I(1, 0, 0, 1, -A, -c).multiplied(new I(e, 0, 0, t, 0, 0)).multiplied(new I(1, 0, 0, 1, A, c)), f = null;
      s && ((f = new W.EdTransformOptions()).isMultiPage = true), this.transformSelection(g, o, a, f);
    }
  }, te.prototype.transformSelection = function (e, t, i, n) {
    if (this._selection && this._selection.length) {
      this._selEditor && this._selEditor.edTransform(e, t, i, n);
      for (var r = this.filterIndividualElements(this._selection), o = this._scene ? this._scene.getActivePage() : null, a = o ? o.getPosition(true) : null, s = 0; s < r.length; ++s) {
        var l, h = r[s], A = G.getEditor(h);
        if (A)
          if (n && n.isMultiPage && (l = te.getElementPage(h))) {
            var c = l.getPosition(true);
            a && (c = c.subtract(a));
            var p = new I(1, 0, 0, 1, c.getX(), c.getY());
            A.edTransform(p.multiplied(e).multiplied(p.inverted()), t, i, n);
          } else
            A.edTransform(e, t, i, n);
      }
      this.hasEventListeners(te.EdGeometryChangeEvent) && this.trigger(new te.EdGeometryChangeEvent());
    }
  }, te.prototype.resizeSelection = function (e, t, n) {
    if (this._selection && this._selection.length) {
      if (this._selEditor)
        this._selEditor.resize(e, t, n);
      else {
        var r = this.filterIndividualElements(this._selection);
        if (!(r = r.filter(function (e) {
            return !(e instanceof Y) || e instanceof Y && 0 == (e.getProperty("plkt") & Y.ProgramLck.NoSizeChanges);
          })).length)
          return;
        for (var o = require(154) /* LabelHolder */, a = 0; a < r.length; ++a) {
          var s = r[a], l = G.getEditor(s);
          l && l instanceof o && l.resize(e, t, n);
        }
      }
      this.hasEventListeners(te.EdGeometryChangeEvent) && this.trigger(new te.EdGeometryChangeEvent());
    }
  }, te.prototype.applyResizeSelection = function (e, t, n) {
    if (this._selection && this._selection.length) {
      n || this.beginTransaction();
      try {
        for (var r = [], o = this.filterIndividualElements(this._selection), a = 0; a < o.length; ++a) {
          var s = o[a];
          r = r.concat(this.getLinkedElementsInSelection(s, o));
        }
        if (this._selEditor)
          this._selEditor.applyPartMove(e, t, null, r);
        else {
          o = this.filterIndividualElements(this._selection);
          var l = require(154) /* LabelHolder */;
          for (a = 0; a < o.length; ++a) {
            var h = o[a];
            r.length && r.indexOf(h);
            if (h) {
              var A = G.getEditor(h);
              A && A instanceof l && A.applyPartMove(e, t, null, r);
            }
          }
        }
      } finally {
        n || this.commitTransaction(j.get(new J("GEditor", "action.resize-selecion")));
      }
    }
  }, te.prototype.resetSelectionTransform = function () {
    if (this._selection && this._selection.length)
      for (var exports = 0; exports < this._selection.length; ++exports) {
        var module = this._selection[exports], require = G.getEditor(module);
        require && require.resetTransform();
      }
  }, te.prototype.applySelectionTransform = function (e, t, i, r) {
    if (this._selection && this._selection.length) {
      var o = this.filterIndividualElements(this._selection);
      this._guides.invalidate();
      for (var a = [], s = 0; s < o.length; ++s) {
        var l = o[s];
        (d = G.getEditor(l)) && (d.canApplyTransform() ? a.push(l) : d.resetTransform());
      }
      if (a && a.length > 0) {
        var h = [];
        if (e)
          var A = [];
        for (s = 0; s < a.length; ++s) {
          var c = a[s];
          h = h.concat(this.getLinkedElementsInSelection(c, a));
        }
        e && (h = h.concat(this.getAnnotationsExceptions(a))), t || this.beginTransaction();
        try {
          var p = [], u = [];
          for (s = 0; s < a.length; ++s) {
            var d;
            l = a[s];
            if (d = G.getEditor(l)) {
              var g = l, f = h.length && h.indexOf(g) >= 0 ? null : g;
              f && (e ? g.hasMixin(n.Store) ? (f = g.clone({
                exceptions: h,
                copy: true,
                copyIgnoreProperties: m.propertiesExcludedFromCopying
              })) && (g.getParent().insertChild(f, g.getNext()), f instanceof O && this._scene.renameClone(g, f), p.push(f), u = u.concat(this.getLinkedElementsInSelection(f, p)), A.push(g)) : f = null : g.hasFlag(S.Flag.PartialLocked) && (f = null)), f ? d.applyTransform(i ? g : f, r, e ? u : h) : d.resetTransform();
            }
          }
          this._selEditor && this._selEditor.resetTransform(), !i && p.length > 0 && this.updateSelection(false, p), e && (this._lastCloneSelection = A.slice());
        } finally {
          t || this.commitTransaction(e ? j.get(new J("GEditor", "action.transform-clone-selection")) : j.get(new J("GEditor", "action.transform-selection")));
        }
      }
    }
  }, te.prototype.setUID = function (e) {
    this._uid = e;
  }, te.prototype.insertElements = function (e, t, i, r, o, a, s) {
    (a = a || this._scene.querySingle("layer:active") || this._scene) instanceof h && a.isLocked() && (a = this._scene);
    var l = a === this._scene ? this._scene.getActivePage() : null;
    if (!l || !l.isLocked()) {
      var c = e.filter(function (e) {
        return e.hasMixin(A);
      });
      if (c.length) {
        if (e = c, !l)
          return;
        a = l = l.getAnnotations();
      } else {
        if (l)
          if (l.getProperty("plkt") & Y.ProgramLck.NoNewChildren)
            return;
        if (a instanceof Y)
          if (a.getProperty("plkt") & Y.ProgramLck.NoNewChildren)
            return;
      }
      var p = s || null, u = null, d = null, g = false;
      if (r && this.hasSelection())
        for (var f = n.order(this._selection.slice(), true), m = 0; m < f.length && !g; ++m)
          if (l && f[m].getParent() === l || !l && f[m].getParent() === a)
            p = f[m].getNext(), g = true;
          else if (!u) {
            u = f[m].getParent(), d = f[m].getNext();
            for (var y = 0; y < e.length && u; ++y)
              !u.isLocked() && e[y].validateInsertion(u, d) || (u = null, d = null);
            u && l && (u instanceof O ? u !== l && (u = null) : u.findParent(function (e) {
              return e instanceof O && e !== l;
            }) && (u = null));
          }
      !g && u && (a = u, p = d), e = e.filter(function (t) {
        if (t instanceof B)
          for (var i = 0; i < e.length; i++)
            if (e[i] instanceof R && e[i].hasReferencedText(t))
              return false;
        return true;
      }), i || this.beginTransaction();
      var _ = null;
      !t && this._selection && 1 === this._selection.length && this._selection[0].hasMixin(S.Stylable) && (_ = this._selection[0]);
      var v, b = this._scene;
      if (o) {
        v = [];
        var C = b.getSymbols();
        e.forEach(function (e) {
          e.accept(function (e) {
            e instanceof L && (e.getProperty("masterRef") !== e.getReferenceId() && e.getProperty("masterRef") !== e.getOldReferenceId() || C.concat(v).some(function (t) {
              if (t.getMultireferenceId() === e.getMultireferenceId()) {
                var i = b.getWorkspace().getReference(t.getProperty("masterRef"));
                if (i && i.getScene() && i.getScene() === b)
                  return true;
              }
              return false;
            }) || (e._master = true, v.push(e)), e._master || C.some(function (t) {
              if (t.getMultireferenceId() === e.getMultireferenceId())
                return e.getProperty("masterRef") !== t.getProperty("masterRef") && e.setProperty("masterRef", t.getProperty("masterRef")), true;
            }));
          });
        });
      }
      try {
        for (m = 0; m < e.length; ++m) {
          var w = e[m];
          if (a.insertChild(w, p), !t) {
            var E = G.createEditor(w, this._uid);
            E && E.initialSetup(_);
          }
        }
        v && (v.forEach(function (e) {
          var t = e.getProperty("masterRef"), i = e.getReferenceId();
          e.setProperty("masterRef", i), b.acceptChildren(function (e) {
            e instanceof L && e.getProperty("masterRef") === t && e.setProperty("masterRef", i);
          });
        }), b.acceptChildren(function (e) {
          e instanceof L && !e.isMaster() && e.getMasterSymbol() && !b.isLinked(e, e.getMasterSymbol()) && b.link(e.getMasterSymbol(), e);
        })), this.updateSelection(false, e);
      } finally {
        i || this.commitTransaction(j.get(new J("GEditor", "action.insert-elements")));
      }
    }
  }, te.prototype.exchangeElements = function (e, t, i) {
    i || this.beginTransaction();
    try {
      for (var r = e.getParent(), o = e.getNext(true), a = e.hasFlag(n.Flag.Selected), s = 0; s < t.length; ++s) {
        var l = t[s];
        l.getParent() && l.getParent().removeChild(l), r.insertChild(l, o), a && l.setFlag(n.Flag.Selected);
      }
      r.removeChild(e);
    } finally {
      i || this.commitTransaction(j.get(new J("GEditor", "action.change-elements")));
    }
  }, te.prototype.convertSelectionToPaths = function (e) {
    var t = [], i = [];
    if (this._selection && this._selection.length)
      for (var r = 0; r < this._selection.length; ++r) {
        var o = this._selection[r];
        o instanceof R && !(o instanceof g) || !(!o.hasMixin(s) || o instanceof y || o instanceof T) ? t.push(o) : i.push(o);
      }
    if (t.length) {
      e || this.beginTransaction(), this._beginSelectionUpdate();
      try {
        this.updateSelection(false, t);
        for (r = 0; r < t.length; ++r) {
          var a = t[r];
          a.removeFlag(n.Flag.Selected);
          var l = a.getParent(), h = a.getNext(true), A = null;
          if (a instanceof R) {
            l.removeChild(a);
            var c = a.cloneAnchorPoints();
            (A = new g(a.getProperty("closed"), a.getProperty("evenodd"), c)) && (A.assignFrom(a), a = null, l.insertChild(A, h), i.push(A));
          } else if (a instanceof B) {
            var p = a.getTextShapes();
            if (l.removeChild(a), p)
              for (var d = p.length - 1; d >= 0; d--)
                l.insertChild(p[d], h), i.push(p[d]);
          } else if (a.hasMixin(s)) {
            if (l.removeChild(a), A = u.createPathFromVertexSource(a)) {
              var f = a.$trf;
              a.$trf = null, A.assignFrom(a), a instanceof R && (A.$evenodd = a.getProperty("evenodd"), A.$closed = a.getProperty("closed")), a.$trf = f, a = null, l.insertChild(A, h), i.push(A);
            }
          } else
            l.removeChild(a);
        }
        t = null, this.updateSelection(false, i);
      } finally {
        this._finishSelectionUpdate(), e || this.commitTransaction(j.get(new J("GEditor", "action.convert-to-paths")));
      }
    }
  }, te.prototype.joinPaths = function () {
    var e = null;
    if (this._selection && this._selection.length) {
      for (var module = n.order(this.getSelection().slice()), require = [], r = 0; r < module.length; ++r) {
        ((l = module[r]) instanceof g || l instanceof y) && require.push(l);
      }
      if (require.length > 1) {
        e = new y();
        var o = require[require.length - 1], a = o.getParent(), s = o.getNext();
        for (r = 0; r < require.length; ++r) {
          var l;
          if ((l = require[r]) instanceof g)
            l.getParent().removeChild(l), e.getPaths().appendChild(l.clone());
          else {
            l.getParent().removeChild(l);
            for (var h, A = l.cloneSubPaths(), c = A.getFirstChild(); null !== c; c = h)
              h = c.getNext(), A.removeChild(c), e.getPaths().appendChild(c);
          }
        }
        a.insertChild(e, s);
      } else
        1 == require.length && (e = require[0]);
    }
    return e;
  }, te.prototype.splitCompoundPath = function (e) {
    var t = null;
    if (e instanceof y) {
      t = [];
      var require = e.getParent(), n = e.getNext();
      require && require.removeChild(e);
      for (var r, o = e.cloneSubPaths(), a = o.getFirstChild(); null !== a; a = r)
        r = a.getNext(), o.removeChild(a), require && require.insertChild(a, n), t.push(a);
    }
    return t;
  }, te.prototype.arrangeOrder = function (e, t, i) {
    var r = null;
    if (!t) {
      if (!this._selection || 0 === this._selection.length)
        return;
      t = r = this._selection.slice();
    }
    t = e === te.ArrangeOrderType.SendToFront || e === te.ArrangeOrderType.SendBackward ? n.order(t) : n.order(t, true), i || this.beginTransaction();
    try {
      for (var o = 0; o < t.length; ++o) {
        var a = t[o], s = a.getParent();
        switch (e) {
        case te.ArrangeOrderType.SendToFront:
          null !== a.getNext() && te.validateBlockInsertion(s, a) && (s.removeChild(a), s.appendChild(a));
          break;
        case te.ArrangeOrderType.BringForward:
          var l = a.getNext();
          if (null !== l) {
            for (var h = null; !h && l;)
              l instanceof S && (l.hasFlag(n.Flag.Selected) || (h = l)), l = l.getNext();
            if (null !== h) {
              var A = h.getNext();
              te.validateBlockInsertion(s, a, A) && (s.removeChild(a), s.insertChild(a, A));
            }
          }
          break;
        case te.ArrangeOrderType.SendBackward:
          var c = a.getPrevious();
          if (null !== c) {
            for (var p = null; !p && c;)
              c instanceof S && (c.hasFlag(n.Flag.Selected) || te.validateBlockInsertion(s, a, c) && (p = c)), c = c.getPrevious();
            null !== p && (s.removeChild(a), s.insertChild(a, p));
          }
          break;
        case te.ArrangeOrderType.SendToBack:
          if (null !== a.getPrevious()) {
            for (var u = s.getFirstChild(), d = null; !d && u;)
              te.validateBlockInsertion(s, a, u) && (d = u), u = u.getNext();
            d && (s.removeChild(a), s.insertChild(a, d));
          }
        }
      }
    } finally {
      i || this.commitTransaction(j.get(new J("GEditor", "action.arrange-order")));
    }
    r && this.updateSelection(false, r);
  }, te.prototype.arrangeAlign = function (e, t, i, n, r, o) {
    if (!t) {
      if (!this._selection || 0 === this._selection.length)
        return;
      t = this._selection.slice();
    }
    for (var a = t, s = (t = [], null), l = null, h = 0; h < a.length; ++h) {
      if ((p = a[h]).hasMixin(S.Transform)) {
        if (!(c = p.getGeometryBBox()) || c.getWidth() + c.getHeight() === 0)
          continue;
        s = s ? s.united(c) : c, t.push({
          bbox: c,
          element: p
        }), p.hasFlag(S.Flag.FullLocked) && (l = l ? l.united(c) : c);
      }
    }
    if (!n)
      for (h = 0; h < t.length; ++h)
        n = n ? n.united(t[h].bbox) : t[h].bbox;
    r || this.beginTransaction();
    var A = 1 === t.length;
    try {
      for (h = 0; h < t.length; ++h) {
        var c = i ? s : t[h].bbox, p = t[h].element, u = G.getEditor(p), d = p.getParent() && A && u && !u.isAlignPartsAllowed() && !o ? p.getParent().getGeometryBBox() : l || n;
        if (!d || d.getWidth() + d.getHeight() === 0 || p.hasFlag(S.Flag.FullLocked))
          return;
        switch (e) {
        case te.ArrangeAlignType.AlignLeft:
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignLeft, d.getX(), null) : d.getX() !== c.getX() && p.transform(new I(1, 0, 0, 1, d.getX() - c.getX(), 0), true);
          break;
        case te.ArrangeAlignType.AlignCenter:
          var g = d.getX() + d.getWidth() / 2;
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignCenter, g, null) : g !== c.getX() + c.getWidth() / 2 && p.transform(new I(1, 0, 0, 1, g - c.getX() - c.getWidth() / 2, 0), true);
          break;
        case te.ArrangeAlignType.AlignRight:
          var f = d.getX() + d.getWidth();
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignRight, f, null) : f !== c.getX() + c.getWidth() && p.transform(new I(1, 0, 0, 1, f - c.getWidth() - c.getX(), 0), true);
          break;
        case te.ArrangeAlignType.AlignTop:
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignTop, null, d.getY()) : d.getY() !== c.getY() && p.transform(new I(1, 0, 0, 1, 0, d.getY() - c.getY()), true);
          break;
        case te.ArrangeAlignType.AlignMiddle:
          g = d.getY() + d.getHeight() / 2;
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignMiddle, null, g) : g !== c.getY() + c.getHeight() / 2 && p.transform(new I(1, 0, 0, 1, 0, g - c.getY() - c.getHeight() / 2), true);
          break;
        case te.ArrangeAlignType.AlignBottom:
          var m = d.getY() + d.getHeight();
          u && u.isAlignPartsAllowed() ? u.alignParts(te.ArrangeAlignType.AlignBottom, null, m) : m !== c.getY() + c.getHeight() && p.transform(new I(1, 0, 0, 1, 0, m - c.getHeight() - c.getY()), true);
          break;
        case te.ArrangeAlignType.AlignJustifyHorizontal:
          d.getX() === c.getX() && c.getWidth() === d.getWidth() || p.transform(new I(1, 0, 0, 1, 0, 0).translated(-c.getX(), -c.getY()).scaled(d.getWidth() / c.getWidth(), 1).translated(c.getX(), c.getY()).translated(d.getX() - c.getX(), 0));
          break;
        case te.ArrangeAlignType.AlignJustifyVertical:
          d.getY() === c.getY() && c.getHeight() === d.getHeight() || p.transform(new I(1, 0, 0, 1, 0, 0).translated(-c.getX(), -c.getY()).scaled(1, d.getHeight() / c.getHeight()).translated(c.getX(), c.getY()).translated(0, d.getY() - c.getY()));
        }
      }
    } finally {
      r || this.commitTransaction(j.get(new J("GEditor", "action.arrange-alignment")));
    }
  }, te.prototype.updateByMousePosition = function (e, t, r, o) {
    var a = this._scene;
    if (o.multiPageView) {
      var s = a.getPaintBBox(o.multiPageView);
      if (s && !s.isEmpty()) {
        var l = 1;
        t && (s = t.mapRect(s), l = t.getScaleFactor());
        var h = m.pickDistance, A = a.getActivePage(), c = A.isScaleLabel() ? l : A.getScaleLabelFactor(), p = a.getLabelBBox(c).getHeight();
        if (A && !s.containsPoint(e)) {
          var u = s.getWidth();
          if (!new P(s.getX() - h, s.getY() - h - p, u + 2 * h, p + 2 * h).containsPoint(e))
            return void (r ? a.iteratePages(function (e) {
              e.hasFlag(n.Flag.Highlighted) && e.removeFlag(n.Flag.Highlighted);
            }) : this._activatedPage = null);
        }
        var d = null, g = new P(e.getX(), e.getY(), 0, 0);
        if (t && t.invertible()) {
          var f = t.inverted().mapPoint(e);
          g = new P(f.getX() - h, f.getY() - h - p, 2 * h, 2 * (p + h));
        } else
          g = new P(e.getX() - h, e.getY() - h, 2 * h, 2 * h);
        var y = a.retrieveChildrenInPaintBBox(g, ee.RETRIEVE_MODE_INTERSECT), _ = y.indexOf(A);
        _ >= 0 && y.splice(_, 1), y.sort(function (e, t) {
          return t.getElementIndex() - e.getElementIndex();
        }), _ >= 0 && y.unshift(A);
        for (var v = 0; v < y.length && !d; v++)
          d = y[v]._detailHitTest(e, t, h, false, null, !!o && o.multiPageView, !y[v].isScaleLabel());
        if (d && !r && (a.getActivePage() !== d.element && a.setActivePage(d.element), d.data.label && this.updateSelection(false, [d.element])), m.pageSelectable) {
          var b = require(331) /* GPageEditor */.MOVE_MASTER;
          a.iteratePages(function (e) {
            r && d && e === d.element && d.data.label && (b || !a.hasLinks(e)) ? e.setFlag(n.Flag.Highlighted) : e.removeFlag(n.Flag.Highlighted);
          });
        }
        r || (this._activatedPage = d && d.element);
      }
    }
  }, te.prototype.getActivatedPage = function () {
    return this._activatedPage;
  }, te.prototype.clearHighlighted = function () {
    this._scene.acceptChildren(function (e) {
      return e.hasFlag(n.Flag.Highlighted) && e.removeFlag(n.Flag.Highlighted), true;
    }, false, true);
  }, te.prototype.importStates = function (e, t) {
    if (!m.debugTransactions)
      return null;
    var i = JSON.parse(t), r = n.restore(i.startingScene, e), o = new te(r), a = function (e) {
        if (e instanceof Array)
          return e.map(a);
        if ("object" != typeof e)
          return e;
        if (e) {
          var t;
          try {
            t = n.restore(e);
          } catch (e) {
          }
          if (t)
            return t;
          for (var i in (t = {}, e))
            t[i] = a(e[i]);
          return t;
        }
        return null;
      }, s = function (e) {
        var t = e.elementSeq, i = e.elementInserted, n = e.elementAction, r = {
            parts: e.parts ? e.parts.map(a) : null,
            elementAction: i ? n : null,
            elementInserted: i
          };
        return Object.defineProperty(r, "element", {
          get: function () {
            return this.elementInserted ? this.elementNode || {} : (ie = null, o._seqIdToNode(t));
          }
        }), r;
      }, l = function (e) {
        var t = {};
        for (var i in e)
          if ("action" === i) {
            var r = e[i];
            switch (r.type) {
            case K.ActionType.Insert:
              t.node = r.node, t.parentSeq = r.parent, t.nextSeq = r.next, t.makeRecorded = r.makeRecorded, t.action = function () {
                ie = null;
                var e = n.restore(this.node), i = null === t.next ? null : o._seqIdToNode(this.nextSeq), r = o._seqIdToNode(this.parentSeq);
                t.makeRecorded && (this.insertedNode = e, e.recordedTransaction = true), r.insertChild(e, i);
              };
              break;
            case K.ActionType.PropertyChange:
              null !== r.node && (t.nodeSeq = r.node, Object.defineProperty(t, "node", {
                get: function () {
                  return ie = null, o._seqIdToNode(this.nodeSeq);
                }
              })), t.action = function () {
                var e = false, t = this.node;
                t instanceof S && !t.isRecordedTransaction() && (t.recordedTransaction = true, e = true), t.setProperties(this.properties, this.values, this.custom), e && (t.recordedTransaction = false);
              };
              break;
            case K.ActionType.FlagSet:
              null !== r.node && (t.nodeSeq = r.node), t.action = function () {
                o._seqIdToNode(this.nodeSeq).setFlag(n.Flag.Active);
              };
              break;
            case K.ActionType.FlagRemove:
              null !== r.node && (t.nodeSeq = r.node), t.action = function () {
                o._seqIdToNode(this.nodeSeq).removeFlag(n.Flag.Active);
              };
              break;
            case K.ActionType.BeginBlock:
              null !== r.node && (t.nodeSeq = r.node), t.action = function () {
                var e = o._seqIdToNode(this.nodeSeq), t = false;
                this.withInvalidation && (e instanceof S && !e.isRecordedTransaction() && (e.recordedTransaction = true, t = true), e._notifyChange(S._Change.PrepareGeometryUpdate), t && (e.recordedTransaction = false)), e._beginBlockChanges(this.changes);
              };
              break;
            case K.ActionType.EndBlock:
              null !== r.node && (t.nodeSeq = r.node), t.action = function () {
                var e = o._seqIdToNode(this.nodeSeq);
                e._endBlockChanges(this.changes), this.withInvalidation && (e instanceof S && !e.isRecordedTransaction() && (e.recordedTransaction = true, recordedSet = true), e._notifyChange(S._Change.FinishGeometryUpdate), recordedSet && (e.recordedTransaction = false));
              };
              break;
            case K.ActionType.BeginSelectionUpdate:
              t.action = function () {
                o._beginSelectionUpdate();
              };
              break;
            case K.ActionType.FinishSelectionUpdate:
              t.action = function () {
                o._finishSelectionUpdate();
              };
              break;
            case K.ActionType.Remove:
              t.nodeSeq = r.node, t.parentSeq = r.parent, t.action = function () {
                ie = null;
                var e = o._seqIdToNode(this.nodeSeq);
                o._seqIdToNode(this.parentSeq).removeChild(e);
              };
              break;
            case K.ActionType.Special:
              t.nodeSeq = r.node, t.data = r.data, t.action = function () {
                ie = null;
                var e = o._seqIdToNode(this.nodeSeq);
                e.getTransactionActionDeserialized(t.data).call(e);
              };
            }
          } else
            t[i] = a(e[i]);
        return t;
      };
    o._undoStates = [];
    for (var h = i.states, A = 0; A < h.length; A++)
      o._redoStates.push({
        id: h[A].id,
        name: h[A].name,
        action: o._transactionRedo.bind(o),
        revert: o._transactionUndo.bind(o),
        data: {
          selection: h[A].data.selection ? h[A].data.selection.map(s) : null,
          newSelection: h[A].data.newSelection ? h[A].data.newSelection.map(s) : null,
          actions: h[A].data.actions.map(l),
          relatedData: h[A].data.relatedData ? a(h[A].data.relatedData) : null
        }
      });
    return r;
  }, te.prototype.exportStates = function () {
    if (!m.debugTransactions)
      return null;
    var e = function (t) {
        if (t instanceof n)
          return n.store(t);
        if (t instanceof Array)
          return t.map(e);
        if ("object" != typeof t) {
          if ("function" == typeof t || t instanceof Date)
            throw new Error("error serializing");
          return t;
        }
        if (t) {
          if (ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof DataView)
            throw new Error("Invalid object encountered");
          var i = {};
          for (var r in t)
            i[r] = e(t[r]);
          return i;
        }
        return null;
      }, t = function (t) {
        return {
          elementInserted: t.elementInserted,
          elementAction: t.elementAction,
          elementSeq: t.elementSeq,
          parts: t.parts ? t.parts.map(e) : null
        };
      }, i = function (t) {
        var i = {};
        for (var n in t)
          if ("function" == typeof t[n]) {
            if ("action" === n) {
              var r = t[n];
              i.action = {
                node: r.type === K.ActionType.Insert ? r.nodeStored : r.node,
                type: r.type,
                parent: r.parent ? r.parent : null,
                makeRecorded: !!r.makeRecorded,
                next: r.next ? r.next : null,
                data: r.data ? e(r.data) : null
              };
            }
          } else
            i[n] = e(t[n]);
        return i;
      }, r = {};
    r.startingScene = this._startingScene;
    var o = this._undoStates;
    r.states = [];
    for (var a = 0; a < o.length; a++)
      r.states.push({
        id: o[a].id,
        name: o[a].name,
        data: {
          selection: o[a].data.selection ? o[a].data.selection.map(t) : null,
          newSelection: o[a].data.newSelection ? o[a].data.newSelection.map(t) : null,
          actions: o[a].data.actions.map(i),
          relatedData: e(o[a].data.relatedData)
        }
      });
    return JSON.stringify(r);
  }, te.prototype.beginTransaction = function () {
    G.getEditor(this._scene);
    var e = { selection: this._saveSelection() };
    "function" == typeof gdb_loaddesign && 0 === this._undoStates.length && m.debugTransactions && (this._startingScene = n.store(this._scene));
    var t = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
    if (t) {
      if (this._transactionStack.length) {
        var require = t.endTransaction();
        require && require.length && (this._transactionStack[this._transactionStack.length - 1].actions = require);
      }
      t.beginTransaction("function" == typeof gdb_loaddesign && m.debugTransactions);
    }
    return this._addDebugData("selection", e.selection), this._transactionStack.push(e), e;
  }, te.prototype._transactionRedo = function (e) {
    if (e.newSelection && e.newSelection.length)
      for (var module = 0; module < e.newSelection.length; ++module)
        e.newSelection[module].element.recordedTransaction = true;
    for (module = 0; module < e.actions.length; ++module)
      e.actions[module].action();
    if (this._fixDebugData(e.newSelection, e.actions), this._loadSelection(e.newSelection), e.newSelection && e.newSelection.length)
      for (module = 0; module < e.newSelection.length; ++module)
        e.newSelection[module].element.recordedTransaction = false;
  }, te.prototype._transactionUndo = function (e) {
    if (e.selection && e.selection.length)
      for (var module = 0; module < e.selection.length; ++module)
        e.selection[module].element.recordedTransaction = true;
    for (module = e.actions.length - 1; module >= 0; --module)
      e.actions[module].revert();
    if (this._loadSelection(e.selection), e.selection && e.selection.length)
      for (module = 0; module < e.selection.length; ++module)
        e.selection[module].element.recordedTransaction = false;
  }, te.prototype.commitTransaction = function (e, t) {
    if (!this._transactionStack.length)
      throw new Error("Nothing to commit, transaction stack is empty.");
    var i = null, n = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
    n && (this._debugBugged = this._debugBugged || n.getDebugBugged(), i = n.endTransaction());
    var r = this._transactionStack.pop();
    if (i || (i = r.actions ? r.actions.slice() : null), i && i.length > 0) {
      var o = {
        actions: i,
        selection: r.selection ? r.selection.slice() : null,
        newSelection: this._saveSelection()
      };
      t && (o.relatedData = t), this._addDebugData("selection", o.newSelection, o.actions), this.pushState(e, this._transactionRedo.bind(this), this._transactionUndo.bind(this), o);
    }
  }, te.prototype.pushState = function (e, t, i, n) {
    this._undoStates.length >= m.maxUndoSteps && this._undoStates.shift(), this._undoStates.push({
      id: r.uuid(),
      name: e || "",
      action: t,
      revert: i,
      data: n,
      createdAt: Date.now()
    }), this._redoStates = [], this.hasEventListeners(te.ModifiedEvent) && (n.relatedData ? this.trigger(new te.ModifiedEvent(n.relatedData, te.ModifiedEvent.Type.Raw)) : this.trigger(te.MODIFIED_EVENT));
  }, te.prototype.hasUndoState = function () {
    return this._undoStates.length > 0;
  }, te.prototype.getUndoStates = function () {
    return this._undoStates;
  }, te.prototype.getRedoStates = function () {
    return this._redoStates;
  }, te.prototype.hasRedoState = function () {
    return this._redoStates.length > 0;
  }, te.prototype.getUndoStateName = function () {
    return this._undoStates.length > 0 ? this._undoStates[this._undoStates.length - 1].name : null;
  }, te.prototype.getRedoStateName = function () {
    return this._redoStates.length > 0 ? this._redoStates[this._redoStates.length - 1].name : null;
  }, te.prototype.undoState = function () {
    if (this._undoStates.length > 0) {
      var exports = this._undoStates.pop();
      this._redoStates.push(exports), this._scene.trigger(new V.RecordedTransactionStartedEvent(this._scene)), exports.revert(exports.data), this._scene.trigger(new V.RecordedTransactionFinishedEvent(this._scene)), this.hasEventListeners(te.ModifiedEvent) && (exports.data.relatedData ? this.trigger(new te.ModifiedEvent(exports.data.relatedData, te.ModifiedEvent.Type.Undo)) : this.trigger(te.MODIFIED_EVENT));
    }
  }, te.prototype.redoState = function () {
    if (this._redoStates.length > 0) {
      var exports = this._redoStates.pop();
      this._undoStates.push(exports), this._scene.trigger(new V.RecordedTransactionStartedEvent(this._scene)), exports.action(exports.data), this._scene.trigger(new V.RecordedTransactionFinishedEvent(this._scene)), this.hasEventListeners(te.ModifiedEvent) && (exports.data.relatedData ? this.trigger(new te.ModifiedEvent(exports.data.relatedData, te.ModifiedEvent.Type.Redo)) : this.trigger(te.MODIFIED_EVENT));
    }
  }, te.prototype.getCurrentStateId = function () {
    return this._undoStates && this._undoStates.length ? this._undoStates[this._undoStates.length - 1].id : null;
  }, te.prototype.markSavePoint = function (e) {
    var t = this._savePointId;
    if (undefined !== e && "string" == typeof e) {
      for (var require = this._undoStates.length - 1; require >= 0; require--)
        if (this._undoStates[require].id === e) {
          this._savePointId = e;
          break;
        }
    } else
      this._savePointId = this._undoStates && this._undoStates.length ? this._undoStates[this._undoStates.length - 1].id : null;
    return new te._SavePoint(this, t, this._savePointId);
  }, te.prototype.isModified = function (e) {
    if (this.hasUndoState()) {
      if ("function" == typeof e) {
        for (var module, require = this._undoStates.length - 1; require >= 0; require--) {
          if ((module = this._undoStates[require]).id === this._savePointId)
            return false;
          if (module.data) {
            if (module.data.newSelection && module.data.newSelection.some(function (t) {
                return !e(t.element);
              }))
              return true;
            if (module.data.selection && module.data.selection.some(function (t) {
                return !e(t.element);
              }))
              return true;
            if (!module.data.newSelection && !module.data.selection && module.data.actions && module.data.actions.some(function (t) {
                if (t.isPropertyChangeAction && !e(t.node))
                  return true;
              }))
              return true;
          }
        }
        return false;
      }
      return this._undoStates[this._undoStates.length - 1].id !== this._savePointId;
    }
    return null !== this._savePointId;
  }, te.prototype.isElementModified = function (e, t) {
    t || (t = 2);
    var i = 0;
    if (this.hasUndoState())
      for (var n = this._undoStates.length - 1; n >= 0; --n) {
        var r = this._undoStates[n].data;
        if (r)
          for (var o = r.actions, a = o.length - 1; a >= 0; --a) {
            var s = o[a];
            if (s.isPropertyChangeAction && s.node === e) {
              if (++i < t)
                break;
              return true;
            }
          }
      }
    return false;
  }, te.prototype.isInlineEditing = function () {
    return !!this._currentInlineEditorNode;
  }, te.prototype.openInlineEditor = function (e, t, i) {
    if (!this._scene.getWorkspace().getToolManager().getTemporaryActiveTool()) {
      this.closeInlineEditor();
      var r = G.getEditor(e);
      if (r && e instanceof q && !q.isTextMode(e) && (e.removeFlag(n.Flag.Selected), G.closeElementEditor(e), q.setModeText(e), r = G.openEditor(e), e.setFlag(n.Flag.Selected)), r && (this.hasEventListeners(te.InlineEditorEvent) && this.trigger(new te.InlineEditorEvent(r, te.InlineEditorEvent.Type.TryOpen)), r.canInlineEdit()))
        return this.hasEventListeners(te.InlineEditorEvent) && this.trigger(new te.InlineEditorEvent(r, te.InlineEditorEvent.Type.BeforeOpen)), r.beginInlineEdit(t), r.adjustInlineEditForView(t, i), this._currentInlineEditorNode = e, this.hasEventListeners(te.InlineEditorEvent) && this.trigger(new te.InlineEditorEvent(r, te.InlineEditorEvent.Type.AfterOpen)), true;
    }
    return false;
  }, te.prototype.updateInlineEditorForView = function (e) {
    if (this._currentInlineEditorNode) {
      var module = G.getEditor(this._currentInlineEditorNode);
      module && module.isInlineEdit() && module.adjustInlineEditForView(e);
    }
  }, te.prototype.closeInlineEditor = function () {
    var e = false;
    return this._currentInlineEditorNode && (e = this._finishEditorInlineEdit(this._currentInlineEditorNode)) && (this._currentInlineEditorNode = null), e;
  }, te.prototype.getCurrentInlineEditorNode = function () {
    return this._currentInlineEditorNode;
  }, te.prototype._afterNodeInsert = function (e) {
    this._tryAddToSelection(e.node);
  }, te.prototype._beforeNodeRemove = function (e) {
    e.node instanceof S && (this._selection && this._selection.indexOf(e.node) >= 0 ? e.node.removeFlag(n.Flag.Selected) : this._closeEditor(e.node));
  }, te.prototype._beforeFlagChange = function (e) {
  }, te.prototype._afterFlagChange = function (e) {
    if (e.node instanceof S) {
      var module = require(39) /* PartInfo */;
      if (e.flag === n.Flag.Selected)
        e.set ? this._tryAddToSelection(e.node) : this._tryRemoveFromSelection(e.node);
      else if (e.flag == n.Flag.Highlighted) {
        var r;
        if (e.set)
          (r = G.openEditor(e.node, false, true)) && r.setFlag(module.Flag.Highlighted);
        else
          (r = G.openEditor(e.node, false, true)) && r.removeFlag(module.Flag.Highlighted), this._tryCloseEditor(e.node);
      }
    }
  }, te.prototype._geometryChange = function (e) {
    if (this._selection && this._selection.indexOf(e.element) >= 0)
      switch (e.type) {
      case S.GeometryChangeEvent.Type.Before:
      case S.GeometryChangeEvent.Type.After:
      case S.GeometryChangeEvent.Type.Child:
        var module = G.getEditor(e.element);
        module && module.requestInvalidation();
      }
  }, te.prototype._beginSelectionUpdate = function () {
    this._selectionUpdateCounter += 1;
    var e = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
    e && e.beginSelectionUpdate(this);
  }, te.prototype._finishSelectionUpdate = function () {
    0 == --this._selectionUpdateCounter && this._updatedSelection();
    var e = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
    e && e.finishSelectionUpdate(this);
  }, te.prototype._updatedSelection = function () {
    if (0 === this._selectionUpdateCounter) {
      this._lastCloneSelection = null, this.hasEventListeners(te.SelectionChangedEvent) && this.trigger(te.SELECTION_CHANGED_EVENT);
      var exports = this._scene.getWorkspace().getStyleEdManager();
      exports.isActivated() && exports.deactivateEditor(), this.updateSelectionEditors();
    }
  }, te.prototype.updateSelectionEditors = function () {
    var e = require(39) /* PartInfo */, t = this.getIndividualSelection();
    if (t && (t = t.filter(function (e) {
        var t = e.getProperty("plkt");
        return !(t & Y.ProgramLck.NoEdit && t & Y.ProgramLck.NoSizeChanges && t & Y.ProgramLck.NoMove);
      })), t && t.length > 1 && !this._selectionDetail)
      if (this._selEditor)
        this._selEditor.updateFromSelection();
      else {
        var n = require(745) /* GSelectionPositionEditor */;
        this._selEditor = new n(), this._selEditor.activate(this._scene, this), (r = G.getEditor(this._scene)).insertEditor(this._selEditor), this._selEditor.setFlag(e.Flag.Selected);
      }
    else if (this._selEditor || t && 1 == t.length && !this._selectionDetail) {
      var r = G.getEditor(this._scene);
      if (this._selEditor && (this._selEditor.requestInvalidation(), e.closeEditor(this._selEditor), delete this._selEditor, this._selEditor = null), t && t.length >= 1 && (!r || !r.isTransformBoxActive()))
        for (var o = 0; o < t.length; ++o) {
          var a = G.getEditor(t[o]);
          a && a.hasFlag(e.Flag.Outline) && a.removeFlag(e.Flag.Outline);
        }
    }
  }, te.prototype._tryAddToSelection = function (e) {
    if (e instanceof S && e.hasFlag(n.Flag.Selected)) {
      var module = G.openEditor(e), r = require(39) /* PartInfo */;
      if (module) {
        module.setFlag(r.Flag.Selected), this._selectionDetail && module.setFlag(r.Flag.Detail);
        var o = require(235) /* GCompoundPathEditor */, a = require(275) /* GPathsGraphEditor */, s = require(127) /* GPathEditor */, l = require(66) /* EdTransformOptions */, h = require(329) /* ImageBoxEditor */;
        module instanceof s && y.isOwnedPath(module.getElement()) && module.setCatchHandle(false), module instanceof s && !y.isOwnedPath(module.getElement()) || module instanceof o || module instanceof a ? (this._pathResize || module.removeFlag(l.Flag.ResizeAll), module instanceof a && this._selectionEdit && module.setEditMode(true)) : this._selectionEdit ? module instanceof h ? module.setEditMode(true) : module.removeFlag(l.Flag.ResizeAll) : this._selectionDetail && module instanceof h && "subselect" == m.selectDoubleClickBehavior && module.setEditMode(true), module.validateSelectionChange() && (this._selection || (this._selection = []), this._selection.push(e), this._updatedSelection());
      }
    }
  }, te.prototype._tryRemoveFromSelection = function (e) {
    if (e instanceof S) {
      var module = G.getEditor(e), n = require(39) /* PartInfo */;
      if (module && module.hasFlag(n.Flag.Selected) && (module.removeFlag(n.Flag.Selected), this._tryCloseEditor(e, true)), this._selection) {
        for (var r = -1, o = 0; o < this._selection.length; ++o) {
          this._selection[o] === e && (r = o);
        }
        r >= 0 && (this._selection.splice(r, 1), 0 == this._selection.length && (this._selection = null), this._updatedSelection());
      }
    }
  }, te.prototype._tryCloseEditor = function (e, t) {
    var n = G.getEditor(e), r = require(39) /* PartInfo */;
    if (n && !n.hasFlag(r.Flag.Selected) && !n.hasFlag(r.Flag.Highlighted) && (t || null == n.getEditors() || 0 == n.getEditors().length)) {
      var o = n.getParentEditor();
      this._closeEditor(e), o && this._tryCloseEditor(o.getElement());
    }
  }, te.prototype._finishEditorInlineEdit = function (e) {
    var t = G.getEditor(e);
    if (t && t.isInlineEdit()) {
      this.hasEventListeners(te.InlineEditorEvent) && this.trigger(new te.InlineEditorEvent(t, te.InlineEditorEvent.Type.BeforeClose));
      var require = null;
      this.beginTransaction();
      try {
        require = t.finishInlineEdit();
      } finally {
        this.commitTransaction(require || j.get(new J("GEditor", "action.inline-editing")));
      }
      return e === this._currentInlineEditorNode && (this._currentInlineEditorNode = null), this.hasEventListeners(te.InlineEditorEvent) && this.trigger(new te.InlineEditorEvent(t, te.InlineEditorEvent.Type.AfterClose)), true;
    }
    return false;
  }, te.prototype._closeEditor = function (e) {
    this._finishEditorInlineEdit(e), G.closeElementEditor(e);
  }, te.prototype._saveSelection = function () {
    if (!this._selection || 0 === this._selection.length)
      return null;
    for (var exports = [], module = 0; module < this._selection.length; ++module) {
      var require = this._selection[module], n = G.getEditor(require), r = n && n.getPartSelection(), o = n && n.getEditorStateData();
      o ? exports.push({
        element: require,
        parts: r ? r.slice() : null,
        data: o
      }) : exports.push({
        element: require,
        parts: r ? r.slice() : null
      });
    }
    return exports;
  }, te.prototype._loadSelection = function (e) {
    if (e && 0 !== e.length) {
      for (var module = [], require = 0; require < e.length; ++require)
        module.push(e[require].element);
      this.updateSelection(false, module);
      for (require = 0; require < e.length; ++require)
        if (e[require].parts || e[require].data) {
          var n = G.getEditor(e[require].element);
          n && (e[require].data && n.restoreEditorStateData(e[require].data), e[require].parts && n.updatePartSelection(false, e[require].parts));
        }
    } else
      this.clearSelection();
  }, te.prototype.selectFromPattern = function (e, t) {
    var i = [];
    return this._scene && this._scene.getActivePage() && this._scene.getActivePage().acceptChildren(function (t) {
      if (t.hasMixin(H) && !t.hasFlag(S.Flag.FullLocked)) {
        var n = t.getPaintLayers();
        if (n)
          for (var o = n.getFirstChild(); null !== o; o = o.getNext())
            if (o instanceof H.FillPaintLayer && o.getProperty("_pt") && r.equals(e, o.getProperty("_pt"))) {
              i.push(t);
              break;
            }
      }
    }, false, true), i.length > 0 && (t || this.updateSelection(false, i), i);
  }, te.prototype.blinkSelection = function (e, t) {
    if (this._selection && this._selection.length) {
      var require = this._selection.slice(), r = function () {
          this.clearHighlighted();
        }.bind(this), o = function () {
          for (var e = 0; e < require.length; ++e)
            require[e].setFlag(n.Flag.Highlighted);
        }, a = e / t;
      o();
      var s = setInterval(o, a), l = 0;
      setTimeout(function () {
        r(), l = setInterval(r, a);
      }, a / 2), setTimeout(function () {
        clearInterval(s), clearInterval(l), r();
      }.bind(this), e - a / 3);
    }
  }, te.prototype.getEdTransformSettings = function () {
    return this._edTrfSettings;
  }, te.prototype.setFullContentTransform = function (e) {
    this._edTrfSettings ? this._edTrfSettings.fullContentTransform = !!e : this._edTrfSettings = { fullContentTransform: !!e };
  }, te.prototype.clearEdTransformSettings = function () {
    this._edTrfSettings = null;
  }, te.prototype.toString = function () {
    return "[Object GEditor]";
  };
  var ie = null;
  te.prototype._getSeqId = function (e) {
    for (var module = e; !(module instanceof S);)
      module = module.getParent();
    if ("function" != typeof module.getScene)
      return -1;
    var i = module.getScene();
    if (!i)
      return -1;
    if (e === i)
      return -10;
    if (!ie) {
      var n = {};
      i.getSubnodeIds(n), ie = Object.values(n);
    }
    var r = ie.indexOf(e);
    if (r < 0)
      throw new Error("Couldn't determine node's sequence ID");
    return r;
  }, te.prototype._seqIdToNode = function (e) {
    if (-10 === e)
      return this._scene;
    if (e < 0)
      throw new Error("Invalid sequence ID");
    if (!ie) {
      var module = {};
      this._scene.getSubnodeIds(module), ie = Object.values(module);
    }
    if (ie.length <= e)
      throw new Error("Sequence ID too big");
    return ie[e];
  }, te.prototype._debugBugged = false, te.prototype._fixDebugData = function (e, t) {
    if ("function" == typeof gdb_loaddesign) {
      if (this._debugBugged || !m.debugTransactions)
        return;
      if (e && t)
        for (var require = 0; require < e.length; require++)
          if (e[require].elementInserted) {
            var n = e[require].elementAction;
            e[require].elementNode = t[n].insertedNode;
          }
    }
  }, te.prototype._addDebugData = function (e, t, i) {
    if ("function" == typeof gdb_loaddesign) {
      var n = this._scene.getWorkspace() ? this._scene.getWorkspace().getTransactionRecorder() : null;
      if (n && (this._debugBugged = this._debugBugged || n.getDebugBugged()), this._debugBugged || !m.debugTransactions)
        return;
      if (ie = null, "selection" === e && t)
        for (var r = 0; r < t.length; r++) {
          var o = false;
          if (i)
            for (var a = 0; a < i.length; a++)
              if (i[a].action.type === K.ActionType.Insert && i[a].action.node === t[r].element) {
                i[a].action.makeRecorded = true, o = true, t[r].elementInserted = true, t[r].elementAction = a;
                break;
              }
          if (!o) {
            var s = this._getSeqId(t[r].element);
            t[r].elementSeq = s;
          }
        }
    }
  }, exports.exports = te;
}
