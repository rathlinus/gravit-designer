/**
 * Module 275
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
  var n = require(2) /* GNode */, r = require(187) /* PolyLine */, o = require(5) /* GPoint */, a = require(39) /* PartInfo */, s = require(24) /* GEditorOptions */, l = require(154) /* LabelHolder */, h = require(0) /* GObject */, A = require(128) /* GShapeEditor */, c = require(141) /* module */, p = require(22) /* GElement */, u = require(28) /* GStylable */, d = require(162) /* GPathsGraph */, g = require(7) /* GTransform */, f = require(45) /* GPathBase */, m = require(82) /* SavePoint */, y = require(347) /* GPGEdge */, _ = require(63) /* GVertexTransformer */, v = require(36) /* PartsPropertyVals */, b = require(66) /* EdTransformOptions */, C = require(155) /* GPathBaseEditor */, w = require(12) /* GMath */, E = require(14) /* GPaintCanvas */, B = require(81) /* GEditorAnnotation */, x = require(59) /* GVertexInfo */, P = require(17) /* GRGBColor */, S = require(52) /* module */, T = require(64) /* GPlatform */, I = require(6) /* GRect */;
  function F(e) {
    A.call(this, e), this._ensureConsistentSelection();
  }
  h.inherit(F, A), v.exports(F, d), F.PartType = {
    Segment: 1,
    Anchor: 2,
    Point: 3,
    LeftHandle: 4,
    RightHandle: 5,
    Facet: 6
  }, F.SegmentData = {
    HitRes: 1,
    Handles: 2
  }, F.SelectionMode = {
    None: 0,
    Anchors: 1,
    Edge: 2,
    Facets: 3
  }, F.prototype._pathBaseInEdit = null, F.prototype._startAnchor = null, F.prototype._selectionMode = null, F.prototype._editMode = false, F.prototype._highlightPart = null, F.prototype._moveEdgesLinks = null, F.prototype._updateFirstPtELinks = null, F.prototype._updateLastPtELinks = null, F.prototype._transformSubType = null, F.prototype._constrainPair = null, F.prototype._constrainPainted = false, F.prototype._activeExtendingMode = false, F.prototype.getActiveExtendingMode = function () {
    return this._activeExtendingMode;
  }, F.prototype.setActiveExtendingMode = function (e) {
    this._activeExtendingMode = e;
  }, F.prototype.getPathBaseInEdit = function () {
    return this._pathBaseInEdit;
  }, F.prototype.setOutgoingPathBase = function (e, t) {
    this._startAnchor = e, this._initPBEditor(t);
  }, F.prototype.insertOutgoingPathBase = function (e) {
    if (this._startAnchor) {
      var module = this._pathBaseInEdit;
      this._closePBEditor(true), this.updatePartSelection(false, null), this._element.addGraphLine(module, new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(this._startAnchor)), e ? new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(e)) : null, null, true), this._startAnchor = null;
    }
  }, F.prototype.setEditMode = function (e, t) {
    (this._editMode !== e || t) && (this._editMode = e, this._partSelection && this._ensureConsistentSelection());
  }, F.prototype.getEditorStateData = function () {
    return {
      startAnchor: this._startAnchor,
      pbInEdit: this._pathBaseInEdit
    };
  }, F.prototype.restoreEditorStateData = function (e) {
    this._ensureConsistentSelection();
  }, F.prototype.getPathBasePreview = function (e) {
    return this._pbEditor ? this._pbEditor.getPathBasePreview() : null;
  }, F.prototype.initialSetup = function (e) {
    if (A.prototype.initialSetup.call(this, e), !(e && e instanceof d)) {
      var module = this.getElement().getPaintLayers().getBorderLayers().pop();
      module && module.setProperty("_blc", E.LineCap.Round);
    }
  }, F.prototype.getBBoxMargin = function () {
    var e = C.prototype.getBBoxMargin.call(this);
    return this._showAnnotations() ? Math.max(B.getAnnotationPaintMargin(s.annotationHandles.path.node.size), e) : e;
  }, F.prototype.getCustomBBox = function (e, t) {
    var i = A.prototype.getCustomBBox.call(this, e, t), r = this.getGraphPaintElement(), o = r.getTransform(), l = function (e) {
        e && !e.isEmpty() && (i = i ? i.united(e) : e);
      };
    if (this._showAnnotations() && !this.hasFlag(b.Flag.ResizeAll))
      for (var h = r.getAnchors().getFirstChild(); h; h = h.getNext()) {
        var c = o ? o.mapPoint(h.getPoint()) : h.getPoint();
        l(B.getAnnotationBBox(e, c, s.annotationHandles.path.graph.size, true));
      }
    else if (!(this.hasFlag(a.Flag.HideEditor) || this.hasFlag(a.Flag.Outline) || this.hasFlag(b.Flag.ResizeAll) && this.hasFlag(a.Flag.Selected)))
      for (h = r.getAnchors().getFirstChild(); h; h = h.getNext())
        if (h.hasFlag(n.Flag.Highlighted)) {
          c = o ? o.mapPoint(h.getPoint()) : h.getPoint();
          l(B.getAnnotationBBox(e, c, s.annotationHandles.path.graph.size, true));
        }
    return i;
  }, F.prototype.getBBox = function (e) {
    var t = null;
    if (this.hasFlag(a.Flag.Selected) || this.hasFlag(a.Flag.Highlighted)) {
      var require = this._transform ? this._transform.multiplied(e) : e, n = (this.getPaintElement(), function (e) {
          e && !e.isEmpty() && (t = t ? t.united(e) : e);
        });
      if (this._constrainPair && n(B.getAnnotationBBox(null, this._constrainPair[0], s.annotationHandles.path.constrain.size, true)), this._pbEditor) {
        n(this._pbEditor.getBBox(e));
        var r = this._element.getTransform();
        this._showAnnotations() && !this.hasFlag(b.Flag.ResizeAll) && this._iteratePoints(this._pbEditor.getPaintElement(), r, function (e) {
          e.leftHandlePosition && n(B.getAnnotationBBox(require, e.leftHandlePosition, s.annotationHandles.path.control.size, true)), e.rightHandlePosition && n(B.getAnnotationBBox(require, e.rightHandlePosition, s.annotationHandles.path.control.size, true)), n(B.getAnnotationBBox(require, e.position, s.annotationHandles.path.node.size, true));
        }.bind(this));
        var o = this._element.getGeometryBBox();
        o && (o = require.mapRect(o), t = t ? t.united(o) : o);
        var l = this.getBBoxMargin();
        t = t.expanded(l, l, l, l);
      } else
        n(A.prototype.getBBox.call(this, e));
    }
    return t;
  }, F.prototype.getElementSelectionBBox = function () {
    var e = null;
    if (this._partSelection && this._partSelection.length)
      for (var module = 0; module < this._partSelection.length; ++module) {
        var require = this._partSelection[module];
        if (require.type == F.PartType.Point || require.type == F.PartType.Anchor) {
          var n = this.getPointCoord(require.point), r = new I(n.getX(), n.getY(), 0, 0);
          e = e ? e.united(r) : r;
        } else if (require.type == F.PartType.Segment) {
          n = this.getPointCoord(require.apLeft), r = new I(n.getX(), n.getY(), 0, 0);
          e = e ? e.united(r) : r, n = this.getPointCoord(require.apRight), r = new I(n.getX(), n.getY(), 0, 0), e = e.united(r);
        }
      }
    return e || (e = this._element.getGeometryBBox()), e;
  }, F.prototype.movePart = function (e, t, i, n, r, a, s) {
    if (e === b.RESIZE_HANDLE_PART_ID || e === b.ROTATION_HANDLE_PART_ID)
      C.prototype.movePart.call(this, e, t, i, n, r, a, s);
    else {
      switch (this.requestInvalidation(), e.type) {
      case F.PartType.LeftHandle:
        this._movePreviewPointCoordinates(e.point, "hlx", "hly", i, n, a, r);
        break;
      case F.PartType.RightHandle:
        this._movePreviewPointCoordinates(e.point, "hrx", "hry", i, n, a, r);
        break;
      case F.PartType.Segment:
        if (t.type == F.SegmentData.Handles) {
          var l = this.getPathPointPreview(e.apLeft), h = this.getPathPointPreview(e.apRight), A = n.mapPoint(i), c = new o(t.hitRes.x, t.hitRes.y), p = this._element.getTransform();
          p && (c = p.mapPoint(c));
          var u = A.subtract(c), d = (new o(l.getProperty("x"), l.getProperty("y")), new o(h.getProperty("x"), h.getProperty("y")), new g().translated(u.getX() * t.cL, u.getY() * t.cL));
          this._transformPreviewPointCoordinates(e.apLeft, "hrx", "hry", d, t.apLhr);
          d = new g().translated(u.getX() * t.cR + 0.01, u.getY() * t.cR + 0.01);
          this._transformPreviewPointCoordinates(e.apRight, "hlx", "hly", d, t.apRhl);
        }
      }
      this.requestInvalidation();
    }
  }, F.prototype.hasSelectionEditing = function () {
    return true;
  }, F.prototype.resetPartMove = function (e, t) {
    this.releasePreview(), this.requestInvalidation();
  }, F.prototype._applyPartMove = function (e, t, i, n) {
    e === b.RESIZE_HANDLE_PART_ID || e === b.ROTATION_HANDLE_PART_ID ? C.prototype._applyPartMove.call(this, e, t, i, n) : e.type != F.PartType.LeftHandle && e.type != F.PartType.RightHandle && e.type != F.PartType.Segment || this._partsGeometryChanged([e]), this.resetPartMove(e, t);
  }, F.prototype.edTransform = function (e, t, i, r) {
    if (this._partSelection && this._partSelection.length > 0 && !this.hasFlag(b.Flag.ResizeAll)) {
      if (this._transformSubType = null, this.requestInvalidation(), this._selectionMode == F.SelectionMode.Edge) {
        this._createPathPreviewIfNecessary();
        for (var o = function (t) {
              this._transformPreviewPointCoordinates(t, "x", "y", e), t.getProperty("ah") || (null != t.getProperty("hlx") && null != t.getProperty("hly") && this._transformPreviewPointCoordinates(t, "hlx", "hly", e), null != t.getProperty("hrx") && null != t.getProperty("hry") && this._transformPreviewPointCoordinates(t, "hrx", "hry", e));
            }.bind(this), a = 0; a < this._partSelection.length; ++a) {
          var s = this._partSelection[a];
          s.type === F.PartType.Point ? o(s.point) : s.type === F.PartType.Segment && t && this._partIdAreEqual(s, t) && (this._transformSubType = i.type, i.type == F.SegmentData.HitRes && (o(s.apLeft), o(s.apRight)));
        }
      }
      if (this._selectionMode == F.SelectionMode.Anchors) {
        this._createPathPreviewIfNecessary();
        var l = this._element.getProperty("trf");
        if (l = l ? l.multiplied(e).multiplied(l.inverted()) : e, !this._moveEdgesLinks) {
          this._moveEdgesLinks = Object.create(null), this._updateFirstPtELinks = Object.create(null), this._updateLastPtELinks = Object.create(null);
          for (a = 0; a < this._partSelection.length; ++a) {
            for (var h = this._partSelection[a].point, A = h.getInEdges(), c = 0; c < A.length; ++c) {
              (d = A[c]).getSource().hasFlag(n.Flag.Selected) ? this._moveEdgesLinks[d.getId()] || (this._moveEdgesLinks[d.getId()] = d) : this._updateLastPtELinks[d.getId()] = d;
            }
            var p = h.getOutEdges();
            for (c = 0; c < p.length; ++c) {
              (d = p[c]).getDestination().hasFlag(n.Flag.Selected) ? this._moveEdgesLinks[d.getId()] || (this._moveEdgesLinks[d.getId()] = d) : this._updateFirstPtELinks[d.getId()] = d;
            }
          }
        }
        var u = Object.keys(this._moveEdgesLinks);
        if (u.length)
          for (a = 0; a < u.length; ++a) {
            var d, g = u[a], m = this._elementPreview.getEdges().getById(g);
            if ((d = this._element.getEdges().getById(g)) && m) {
              for (var y = d.getPathBase(), _ = new f(), v = y.getAnchorPoints().getFirstChild(); null != v; v = v.getNext())
                _.getAnchorPoints().appendChild(v._getTransformedCopy(l));
              _.getAnchorPoints().getFirstChild() && m.setPathBase(_);
            }
          }
        for (a = 0; a < this._partSelection.length; ++a) {
          var w = this._elementPreview.getAnchors().getById(this._partSelection[a].point.getId());
          for (A = w.getInEdges(), c = 0; c < A.length; ++c) {
            y = A[c].getPathBase();
            var E = this._element.getEdges().getById(A[c].getId()).getPathBase(), B = (v = y.getAnchorPoints().getLastChild(), E.getAnchorPoints().getLastChild()._getTransformedCopy(l));
            v.setProperties([
              "x",
              "y",
              "hlx",
              "hly"
            ], [
              B.getProperty("x"),
              B.getProperty("y"),
              B.getProperty("hlx"),
              B.getProperty("hly")
            ]);
          }
          for (p = w.getOutEdges(), c = 0; c < p.length; ++c) {
            y = p[c].getPathBase(), E = this._element.getEdges().getById(p[c].getId()).getPathBase(), v = y.getAnchorPoints().getFirstChild(), B = E.getAnchorPoints().getFirstChild()._getTransformedCopy(l);
            v.setProperties([
              "x",
              "y",
              "hrx",
              "hry"
            ], [
              B.getProperty("x"),
              B.getProperty("y"),
              B.getProperty("hrx"),
              B.getProperty("hry")
            ]);
          }
          var x = this._partSelection[a].point.getPoint();
          x = l.mapPoint(x), w.setProperties([
            "x",
            "y"
          ], [
            x.getX(),
            x.getY()
          ]);
        }
      }
      this.requestInvalidation();
    } else
      C.prototype.edTransform.call(this, e, t, i, r);
  }, F.prototype.resetTransform = function () {
    this.releasePreview(), this._selectionMode == F.SelectionMode.Anchors && (this._moveEdgesLinks = null, this._updateFirstPtELinks = null, this._updateLastPtELinks = null), this._transformSubType = null, C.prototype.resetTransform.call(this);
  }, F.prototype.canApplyTransform = function () {
    return this._partSelection && this._partSelection.length > 0 && !this.hasFlag(b.Flag.ResizeAll) || this._transform && !this._transform.isIdentity();
  }, F.prototype._applyTransform = function (e, t, i, n) {
    if (e instanceof f && this._partSelection && this._partSelection.length > 0 && !this.hasFlag(b.Flag.ResizeAll)) {
      e._beginBlockEvents([p.GeometryChangeEvent]), e.getAnchorPoints()._beginBlockCompositeEvents(false, true, false);
      for (var r = [], o = 0; o < this._partSelection.length; ++o) {
        (s = this._partSelection[o]).type === F.PartType.Point ? (o == this._partSelection.length - 1 && (e._endBlockEvents([p.GeometryChangeEvent]), e.getAnchorPoints()._endBlockCompositeEvents(false, true, false)), this._transferPreviewProperties(s.point, e), r.push(s)) : s.type === F.PartType.Segment && (this._transferPreviewProperties(s.apLeft, e), o == this._partSelection.length - 1 && (e._endBlockEvents([p.GeometryChangeEvent]), e.getAnchorPoints()._endBlockCompositeEvents(false, true, false)), this._transferPreviewProperties(s.apRight, e), (s.apLeft.getParent().getPreviousPoint(s.apLeft) || s.apRight.getParent().getNextPoint(s.apRight)) && (r.push({
          type: F.PartType.Point,
          point: s.apLeft
        }), r.push({
          type: F.PartType.Point,
          point: s.apRight
        })));
      }
      this.requestInvalidation(), this.resetTransform(), this.updatePartSelection(false, r);
    } else if (e instanceof f)
      this._transform && !this._transform.isIdentity() && C.prototype._applyTransform.call(this, e), this.resetTransform();
    else {
      if (this._partSelection && this._partSelection.length > 0 && !this.hasFlag(b.Flag.ResizeAll)) {
        var a = null;
        if (this._selectionMode == F.SelectionMode.Edge)
          for (o = 0; o < this._partSelection.length; ++o) {
            var s;
            if ((s = this._partSelection[o]).type == F.PartType.Segment || s.type == F.PartType.Point) {
              a = [s];
              break;
            }
          }
        else
          this._selectionMode == F.SelectionMode.Anchors && (a = this._partSelection.slice());
        a && a.length && this._partsGeometryChanged(a);
      } else
        this._transform && !this._transform.isIdentity() && A.prototype._applyTransform.call(this, e, t, i, n);
      this.resetTransform();
    }
  }, F.prototype.selectToolDragStartAction = function (e, t) {
    if (e.editor !== this)
      return null;
    var i = e;
    this._constrainPair = null;
    var r = e.isolated, l = e.selectable;
    if (e.id.type == F.PartType.Segment)
      if (t) {
        var h = e.id.edge;
        if (h) {
          var A = [
            {
              type: F.PartType.Anchor,
              point: h.getSource()
            },
            {
              type: F.PartType.Anchor,
              point: h.getDestination()
            }
          ];
          this.updatePartSelection(false, A), i.isolated = e.data.rightButton.isolated, i.selectable = e.data.rightButton.selectable;
        }
      } else {
        var c = e.data.hitRes, p = e.id.apLeft, u = e.id.apRight;
        if (p && u) {
          this.requestInvalidation(), this._pbEditor || this._initPBEditor(e.id.edge.getPathBase());
          var d = this._pbEditor.getPathBasePreview(), g = this.getPathPointPreview(p), m = this.getPathPointPreview(u);
          if (g && m)
            if (w.isEqualEps(c.slope, 0, 0.001))
              i = new a.PartInfo(this, {
                type: F.PartType.Point,
                edge: e.id.edge,
                point: p
              }, { apSelected: false }, false, true);
            else if (w.isEqualEps(c.slope, 1, 0.001))
              i = new a.PartInfo(this, {
                type: F.PartType.Point,
                edge: e.id.edge,
                point: u
              }, { apSelected: false }, false, true);
            else {
              var y, _, v = p.getProperty("x"), b = p.getProperty("y"), C = u.getProperty("x"), E = u.getProperty("y"), B = c;
              if (null !== p.getProperty("hrx") && null !== p.getProperty("hry") || null !== u.getProperty("hlx") && null !== u.getProperty("hly"))
                if (null === p.getProperty("hrx") || null === p.getProperty("hry")) {
                  var x = m.getProperty("hlx"), P = m.getProperty("hly");
                  H = v + 2 / 3 * (x - v), W = b + 2 / 3 * (P - b), y = C + 2 / 3 * (x - C), _ = E + 2 / 3 * (P - E), g.setProperties([
                    "ah",
                    "hrx",
                    "hry"
                  ], [
                    false,
                    H,
                    W
                  ]), m.setProperties([
                    "ah",
                    "hlx",
                    "hly"
                  ], [
                    false,
                    y,
                    _
                  ]), this.requestInvalidation(), (R = d.pathHitTest(new o(c.x, c.y), null, false, s.pickDistance)) && R.data && (B = R.data);
                } else if (null === u.getProperty("hlx") || null === u.getProperty("hly")) {
                  var S = g.getProperty("hrx"), I = g.getProperty("hry");
                  y = C + 2 / 3 * (S - C), _ = E + 2 / 3 * (I - E), H = v + 2 / 3 * (S - v), W = b + 2 / 3 * (I - b), g.setProperties([
                    "ah",
                    "hrx",
                    "hry"
                  ], [
                    false,
                    H,
                    W
                  ]), m.setProperties([
                    "ah",
                    "hlx",
                    "hly"
                  ], [
                    false,
                    y,
                    _
                  ]), this.requestInvalidation(), (R = d.pathHitTest(new o(c.x, c.y), null, false, s.pickDistance)) && R.data && (B = R.data);
                } else
                  c && (g.setProperty("ah", false), m.setProperty("ah", false), this.requestInvalidation(), H = g.getProperty("hrx"), W = g.getProperty("hry"), y = m.getProperty("hlx"), _ = m.getProperty("hly"));
              else {
                var R, D = (C - v) / 3, k = (E - b) / 3, G = D * c.slope, Q = D - G, M = k * c.slope, N = k - M;
                H = c.x - G, W = c.y - M, g.setProperties([
                  "ah",
                  "hrx",
                  "hry"
                ], [
                  false,
                  c.x - G,
                  c.y - M
                ]), y = c.x + Q, _ = c.y + N, m.setProperties([
                  "ah",
                  "hlx",
                  "hly"
                ], [
                  false,
                  c.x + Q,
                  c.y + N
                ]), this.requestInvalidation(), (R = d.pathHitTest(new o(c.x, c.y), null, false, s.pickDistance)) && R.data && (B = R.data);
              }
              var U = 3 * (1 - B.slope) * (1 - B.slope) * B.slope, V = 3 * B.slope * B.slope * (1 - B.slope);
              i = new a.PartInfo(this, {
                type: F.PartType.Segment,
                edge: e.id.edge,
                apLeft: p,
                apRight: u
              }, {
                type: F.SegmentData.Handles,
                cL: 1 / (U + V),
                apLhr: new o(H, W),
                cR: 1 / (U + V),
                apRhl: new o(y, _),
                hitRes: B
              }, r, l), this._transformSubType = i.data.type;
            }
          else
            i = null;
        }
      }
    else if (t && !e.isolated && e.id.type == F.PartType.Point) {
      var O = e.id.point, L = (F.PartType.Point, O.getProperty("tp"));
      if (O.hasFlag(n.Flag.Selected) || this.selectOnePoint(O), !f.isCornerType(L)) {
        this.requestInvalidation(), this._createPathPreviewIfNecessary(O);
        var Y = this.getPathPointPreview(O);
        if (Y) {
          var X = null;
          if (r = true, l = false, T.modifiers.optionKey) {
            var H = O.getProperty("hrx"), W = O.getProperty("hry");
            null === H || null === W ? (X = F.PartType.RightHandle, Y.setProperties([
              "ah",
              "hrx",
              "hry"
            ], [
              false,
              O.getProperty("x"),
              O.getProperty("y")
            ])) : (X = F.PartType.LeftHandle, Y.setProperties([
              "ah",
              "hlx",
              "hly"
            ], [
              false,
              O.getProperty("x"),
              O.getProperty("y")
            ])), i = new a.PartInfo(this, {
              type: X,
              edge: e.id.edge,
              point: O
            }, { apSelected: true }, r, l), this.updatePartSelection(true, [i.id]);
          } else {
            var Z = O.getProperty("x"), z = O.getProperty("y");
            if (L != f.AnchorPoint.Type.Connector)
              X = F.PartType.RightHandle, Y.setProperties([
                "tp",
                "ah",
                "hrx",
                "hry",
                "hlx",
                "hly"
              ], [
                f.AnchorPoint.Type.Mirror,
                false,
                Z,
                z,
                Z,
                z
              ]);
            else {
              var j = O.getPrevious();
              j && !f.isCornerType(j.getProperty("tp")) ? (X = F.PartType.LeftHandle, Y.setProperties([
                "ah",
                "hlx",
                "hly"
              ], [
                false,
                Z,
                z
              ])) : (X = F.PartType.RightHandle, Y.setProperties([
                "ah",
                "hrx",
                "hry"
              ], [
                false,
                Z,
                z
              ]));
            }
            i = new a.PartInfo(this, {
              type: X,
              edge: e.id.edge,
              point: O
            }, { apSelected: true }, r, l);
          }
        } else
          i = null;
      }
    }
    return i;
  }, F.prototype.getCursor = function (e, t) {
    return e.type == F.PartType.Segment ? S.SelectCurve : null;
  }, F.prototype.canHandleDblClick = function () {
    return true;
  }, F.prototype.handleDblClick = function (e, t) {
    if (e && e.type == F.PartType.Point && this.hasFlag(a.Flag.Detail) && !this._editMode) {
      this.requestInvalidation();
      var require = this.getPathPointPreview(e.point);
      if (require)
        return e.point.getProperty("tp") === f.AnchorPoint.Type.Asymmetric ? (require.setProperties([
          "tp",
          "ah"
        ], [
          f.AnchorPoint.Type.Symmetric,
          true
        ]), require.setProperties(["ah"], [false])) : require.setProperties([
          "tp",
          "ah"
        ], [
          f.AnchorPoint.Type.Asymmetric,
          false
        ]), this._partsGeometryChanged([e]), this.requestInvalidation(), true;
    }
    return false;
  }, F.prototype.getStylableParts = function () {
    if (this._partSelection && this._partSelection.length && !this.hasFlag(b.Flag.ResizeAll) && (this._selectionMode == F.SelectionMode.Edge || this._selectionMode == F.SelectionMode.Facets)) {
      for (var exports = [], module = 0; module < this._partSelection.length; ++module) {
        var require = this._selectionMode == F.SelectionMode.Edge ? this._partSelection[module].edge : this._partSelection[module].facet;
        if (require)
          if (this._selectionMode == F.SelectionMode.Facets)
            for (var n = require.getDirectedEdges().getFirstChild(); null != n; n = n.getNext()) {
              var r = n.getEdge();
              exports.push(r);
            }
          else
            exports.push(require);
      }
      return exports;
    }
  }, F.prototype._attach = function () {
    var e = this._element.getScene();
    null != e && (e.addEventListener(p.GeometryChangeEvent, this._geometryChange, this), e.addEventListener(n.AfterPropertiesChangeEvent, this._checkCustomStyle, this), e.addEventListener(n.AfterInsertEvent, this._checkCustomStyle, this), e.addEventListener(n.BeforeRemoveEvent, this._checkCustomStyle, this));
  }, F.prototype._detach = function () {
    this.requestInvalidation();
    for (var exports = this._element.getAnchors().getFirstChild(); null != exports; exports = exports.getNext())
      exports.removeFlag(n.Flag.Highlighted);
    this._closePBEditor(true), this._updatePartSelection(null);
    var t = this._element.getScene();
    null != t && (t.removeEventListener(p.GeometryChangeEvent, this._geometryChange, this), t.removeEventListener(n.AfterPropertiesChangeEvent, this._checkCustomStyle, this), t.removeEventListener(n.AfterInsertEvent, this._checkCustomStyle, this), t.removeEventListener(n.BeforeRemoveEvent, this._checkCustomStyle, this)), A.prototype._detach.call(this);
  }, F.prototype.hitAnchorPoint = function (e, t, i, n) {
    if (e) {
      var r = this._element.getTransform();
      return i && (r = r ? r.multiplied(i) : i), B.getAnnotationBBox(r, new o(e.getProperty("x"), e.getProperty("y")), s.annotationHandles.path.node.size).expanded(n, n, n, n).containsPoint(t);
    }
    return false;
  }, F.prototype._getPartInfoAt = function (e, t, i) {
    if (this._showAnnotations() && !this.hasFlag(b.Flag.ResizeAll)) {
      var r = this.getGraphPaintElement(), o = r.getTransform(), h = function (i, n) {
          return !!i && B.getAnnotationBBox(t, o ? o.mapPoint(i) : i, n).expanded(s.annotPickDistance, s.annotPickDistance, s.annotPickDistance, s.annotPickDistance).containsPoint(e);
        }.bind(this), A = function (e) {
          var t = null, i = true, r = false;
          if (h(e.rightHandlePosition, s.annotationHandles.path.control.size) ? t = F.PartType.RightHandle : h(e.leftHandlePosition, s.annotationHandles.path.control.size) ? t = F.PartType.LeftHandle : h(e.position, s.annotationHandles.path.graph.size) && (t = F.PartType.Point, i = false, r = true), t)
            return d = new a.PartInfo(this, {
              type: t,
              edge: c,
              point: e.anchorPoint
            }, { apSelected: e.anchorPoint.hasFlag(n.Flag.Selected) }, i, r), true;
        }.bind(this);
      if (!this._editMode && this._pathBaseInEdit && this._selectionMode == F.SelectionMode.Edge) {
        var c = this._pathBaseInEdit.getParent();
        if (this._iteratePoints(this._pathBaseInEdit, null, A), d)
          return d;
      }
      for (var p = r.getAnchors().getFirstChild(); p; p = p.getNext())
        if (h(p.getPoint(), s.annotationHandles.path.graph.size))
          return new a.PartInfo(this, {
            type: F.PartType.Anchor,
            point: p
          }, { apSelected: p.hasFlag(n.Flag.Selected) }, false, true);
      for (c = r.getEdges().getFirstChild(); c; c = c.getNext()) {
        var u = c.getPathBase(), d = null;
        if (this._iteratePoints(u, null, A), d)
          return d;
        if ((_ = u.pathHitTest(e, o ? o.multiplied(t) : t, false, s.pickDistance)) && !w.isEqualEps(_.data.slope, 0) && !w.isEqualEps(_.data.slope, 1)) {
          var g = _.data, f = u.getAnchorPoints().getChildByIndex(g.segment - 1), m = f ? u.getAnchorPoints().getNextPoint(f) : null;
          return new a.PartInfo(this, {
            type: F.PartType.Segment,
            edge: c,
            apLeft: f,
            apRight: m
          }, {
            type: F.SegmentData.HitRes,
            hitRes: g,
            rightButton: {
              isolated: false,
              selectable: true
            }
          }, true, false);
        }
      }
      for (var y = r.getFacets().getFirstChild(); y; y = y.getNext()) {
        var _;
        if (_ = y.getPath().hitTest(e, o ? o.multiplied(t) : t, null, false, 0, 0, true, null))
          return new a.PartInfo(this, {
            type: F.PartType.Facet,
            facet: y
          }, {}, false, true);
      }
    }
    if (this.hasFlag(b.Flag.ResizeAll)) {
      var v = l.prototype._getPartInfoAt.call(this, e, t, i);
      if (v && (v.id == b.RESIZE_HANDLE_PART_ID || v.id == b.ROTATION_HANDLE_PART_ID))
        return v;
    }
    return null;
  }, F.prototype.findPivots = function (e, t) {
    var i = v.prototype.findPivots.call(this), n = this._element.getTransform();
    if (this._pathBaseInEdit && this._startAnchor) {
      var r = this._pathBaseInEdit.getAnchorPoints().getFirstChild();
      if (r)
        for (r = r.getNext(); r; r = r.getNext()) {
          var a = new o(r.getProperty("x"), r.getProperty("y")), s = {
              point: n ? n.mapPoint(a) : a,
              ptType: r.getProperty("tp"),
              autoH: r.getProperty("ah")
            };
          i ? i.push(s) : i = [s];
        }
    }
    return i;
  }, F.prototype.splitEdge = function (e, t) {
    var i = null;
    if (e && e.editor == this)
      if (e.id.type == F.PartType.Segment || e.id.type == F.PartType.Point) {
        var n = [], r = [];
        if (e.id.type == F.PartType.Segment)
          r.push(new y.SplitPoint(e.data.hitRes.segment - 1, e.data.hitRes.slope, new o(e.data.hitRes.x, e.data.hitRes.y)));
        else {
          for (var a = 0, s = e.id.edge.getPathBase().getAnchorPoints().getFirstChild(); s && s != e.id.point; s = s.getNext(), ++a);
          r.push(new y.SplitPoint(a, 0, new o(e.id.point.getProperty("x"), e.id.point.getProperty("y"))));
        }
        t && this._element._beginBlockEvents([p.GeometryChangeEvent]), this._element.splitEdge(e.id.edge, r, true, [], n), t && this._element._endBlockEvents([p.GeometryChangeEvent]), n.length && (i = n[0]);
      } else
        e.id.type == F.PartType.Anchor && (i = e.id.point);
    return i;
  }, F.prototype._postPaint = function (e, t) {
    if (this._constrainPair && !this._constrainPainted) {
      var require = s.annotationHandles.path.constrain;
      t.canvas.strokeLine(this._constrainPair[0].getX(), this._constrainPair[0].getY(), this._constrainPair[1].getX(), this._constrainPair[1].getY(), 2 * s.outlineWidth, t.highlightOutlineColor, false), B.paintAnnotation(t, null, this._constrainPair[0], require.type, false, require.size, P.WHITE, t.highlightOutlineColor), this._constrainPair = null, this._constrainPainted = true;
    }
    if (this._showAnnotations() && !this.hasFlag(b.Flag.ResizeAll))
      for (var r = (h = this.getGraphPaintElement()).getTransform(), o = (require = s.annotationHandles.path.graph, h.getAnchors().getFirstChild()); o; o = o.getNext()) {
        var l = r ? r.mapPoint(o.getPoint()) : o.getPoint();
        B.paintAnnotation(t, e, l, require.type, o.hasFlag(n.Flag.Selected), require.size, t.selectionOutlineColor, P.WHITE), o.hasFlag(n.Flag.Highlighted) && B.paintAnnotation(t, e, l, require.type, true, require.size, t.highlightOutlineColor, P.WHITE);
      }
    else if (!this.hasFlag(a.Flag.HideEditor) && !this.hasFlag(a.Flag.Outline) && this._element.hasFlag(n.Flag.Highlighted) && (!this.hasFlag(b.Flag.ResizeAll) || !this.hasFlag(a.Flag.Selected))) {
      var h;
      for (r = (h = this.getGraphPaintElement()).getTransform(), require = s.annotationHandles.path.graph, o = h.getAnchors().getFirstChild(); o; o = o.getNext())
        if (o.hasFlag(n.Flag.Highlighted)) {
          l = r ? r.mapPoint(o.getPoint()) : o.getPoint();
          B.paintAnnotation(t, e, l, require.type, true, require.size, t.highlightOutlineColor, P.WHITE);
        }
    }
    if (this._pathBaseInEdit && this._pbEditor) {
      var A = this.getColor();
      this._selectionMode != F.SelectionMode.Edge || this.hasFlag(a.Flag.Highlighted) || this.setColor(t.selectionSecondOutlineColor);
      r = this._element.getTransform();
      var c = this._pbEditor.getPaintElement();
      !this._showAnnotations() || this.hasFlag(b.Flag.ResizeAll) || this._editMode || this._iteratePoints(c, r, function (i) {
        i.leftHandlePosition && this._paintControlHandle(e, t, i.position, i.leftHandlePosition), i.rightHandlePosition && this._paintControlHandle(e, t, i.position, i.rightHandlePosition);
        var r = s.annotationHandles.path.node;
        B.paintAnnotation(t, e, i.position, i.annotation, i.anchorPoint.hasFlag(n.Flag.Selected), r.size, t.selectionOutlineColor, P.WHITE);
      }.bind(this)), this.setColor(A);
    }
    this._highlightPart = null;
  }, F.prototype._partIdAreEqual = function (e, t) {
    var i = e.type === t.type;
    return !i || e.type != F.PartType.Point && e.type != F.PartType.Anchor ? i && e.type == F.PartType.Segment ? i = e.apLeft === t.apLeft && e.apRight == t.apRight : i && F.PartType.Facet && (i = e.facet == t.facet) : i = e.point === t.point, i;
  }, F.prototype._updatePartSelection = function (e) {
    if (!this.hasFlag(b.Flag.ResizeAll)) {
      this.requestInvalidation();
      var module = this._selectionMode, require = F.SelectionMode.None;
      e = e ? e.slice() : null;
      if (require = this._filterForSelMode(e), !this._startAnchor) {
        var r = this._partSelection, o = this._pathBaseInEdit ? this._pathBaseInEdit : null;
        if (this._partSelection = e, this._selectionMode = require, r && r.length)
          for (var a = 0; a < r.length; ++a) {
            var s = r[a], l = false;
            if (require == module && e)
              for (var h = 0; h < e.length; ++h)
                if (e[h].point === s.point && s.point || s.type == F.PartType.Segment && s.edge == e[h].edge || s.type == F.PartType.Facet && s.facet == e[h].facet) {
                  l = true;
                  break;
                }
            l || (s.point ? (s.point.removeFlag(n.Flag.Selected), s.type == F.PartType.Point && this._closePBEditor(false)) : s.type == F.PartType.Segment ? (s.edge.removeFlag(n.Flag.Selected), s.apLeft && s.apLeft.removeFlag(n.Flag.Selected), s.apRight && s.apRight.removeFlag(n.Flag.Selected), this._closePBEditor(false)) : s.type == F.PartType.Facet && s.facet.removeFlag(n.Flag.Selected));
          }
        if (e && e.length)
          switch (this._selectionMode) {
          case F.SelectionMode.Anchors:
            for (a = 0; a < e.length; ++a) {
              e[a].point.setFlag(n.Flag.Selected);
            }
            break;
          case F.SelectionMode.Edge:
            var A = e[0].edge;
            A.setFlag(n.Flag.Selected), this._initPBEditor(A.getPathBase());
            break;
          case F.SelectionMode.Facets:
            for (a = 0; a < e.length; ++a) {
              e[a].facet.setFlag(n.Flag.Selected);
            }
          }
      }
      if (this._startAnchor || this._selectionMode == F.SelectionMode.Edge && module == F.SelectionMode.Edge && this._pathBaseInEdit && o == this._pathBaseInEdit && !this._editMode) {
        var c = this._filterSelection(e);
        r = this._partSelection;
        if (this._partSelection = c, r)
          for (a = 0; a < r.length; ++a) {
            s = r[a], l = false;
            if (c)
              for (h = 0; h < c.length; ++h)
                if (c[h].point === s.point && s.point || s.type == F.PartType.Segment && s.type == c[h].type && s.apLeft == c[h].apLeft && s.apRight == c[h].apRight) {
                  l = true;
                  break;
                }
            l || (s.point ? s.point.removeFlag(n.Flag.Selected) : s.type == F.PartType.Segment && (s.apLeft.removeFlag(n.Flag.Selected), s.apRight.removeFlag(n.Flag.Selected)));
          }
        if (c)
          for (a = 0; a < c.length; ++a) {
            (s = c[a]).point ? s.point.setFlag(n.Flag.Selected) : s.type == F.PartType.Segment && (s.apLeft.setFlag(n.Flag.Selected), s.apRight.setFlag(n.Flag.Selected));
          }
      }
      this.requestInvalidation();
    }
  }, F.prototype._filterForSelMode = function (e) {
    var t = F.SelectionMode.None, i = null;
    if (e && e.length) {
      for (var n = false, r = 0; r < e.length && !n; ++r)
        switch (e[r].type) {
        case F.PartType.Anchor:
          t = F.SelectionMode.Anchors, i = F.PartType.Anchor, n = true;
          break;
        case F.PartType.Point:
          if (this._startAnchor || !e[r].edge)
            break;
        case F.PartType.Segment:
          t = F.SelectionMode.Edge, this._editMode && e[r].type == F.PartType.Point && (e[r].type = F.PartType.Segment), i = e[r].type;
          break;
        case F.PartType.Facet:
          t == F.SelectionMode.None && (t = F.SelectionMode.Facets, i = F.PartType.Facet);
        }
      if (i)
        for (r = e.length - 1; r >= 0; --r)
          e[r].type != i && e.splice(r, 1);
    }
    return t;
  }, F.prototype._paintControlHandle = function (e, t, i, n) {
    var r = i, o = n;
    e && (r = e.mapPoint(i), o = e.mapPoint(n)), t.canvas.strokeLine(r.getX(), r.getY(), o.getX(), o.getY(), s.outlineWidth, this.getColor() || t.selectionOutlineColor);
    var a = s.annotationHandles.path.control;
    B.paintAnnotation(t, e, n, a.type, false, a.size, t.selectionOutlineColor, t.selectionOutlineColor);
  }, F.prototype.getPaintElement = function () {
    return this._pbEditor ? this._pbEditor.getPaintElement() : this._elementPreview ? this._elementPreview : this._element;
  }, F.prototype.getGraphPaintElement = function () {
    return this._elementPreview ? this._elementPreview : this._element;
  }, F.prototype._paintOutline = function (e, t, i, r, o) {
    var l = this.getPaintElement(), h = this._element.getTransform();
    if (l instanceof d)
      A.prototype._paintOutline.call(this, e, t, i, r, o);
    else {
      var p = new _(this._element, e);
      (m = new c(p)) && (t.canvas.putVertices(m, false), t.canvas.strokeVertices(r || (this.hasFlag(a.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor), s.outlineWidth));
    }
    if (this._highlightPart && !i) {
      var u = null;
      if (this._highlightPart.edge ? this._highlightPart.edge.hasFlag(n.Flag.Selected) ? this._highlightPart = null : u = this._highlightPart.edge.getPathBase() : this._highlightPart.facet && (this._highlightPart.facet.hasFlag(n.Flag.Selected) ? this._highlightPart = null : u = this._highlightPart.facet.getPath()), u) {
        p = new _(u, h ? h.multiplied(e) : e);
        (m = new c(p)) && (t.canvas.putVertices(m, false), t.canvas.strokeVertices(t.highlightOutlineColor, s.outlineWidth)), this._highlightPart = null;
      }
    }
    if (l instanceof d) {
      if (this._selectionMode == F.SelectionMode.Facets && !this.hasFlag(a.Flag.Highlighted))
        for (var g = 0; g < this._partSelection.length; ++g) {
          var f = this._partSelection[g].facet;
          if (f)
            if (u = f.getPath()) {
              var m;
              p = new _(u, h ? h.multiplied(e) : e);
              (m = new c(p)) && (t.canvas.putVertices(m, false), t.canvas.strokeVertices(r || t.selectionSecondOutlineColor, s.outlineWidth));
            }
        }
    } else if (this._pbEditor) {
      var y = r || (this.hasFlag(a.Flag.Highlighted) ? t.highlightOutlineColor : t.selectionOutlineColor);
      r || this._selectionMode != F.SelectionMode.Edge || (y = t.selectionSecondOutlineColor), this._pbEditor._paintOutline(h ? h.multiplied(e) : e, t, i, y);
    }
  }, F.prototype._iteratePoints = function (e, t, i) {
    var r = e.getAnchorPoints(), a = e.getTransform();
    if (a)
      t = t ? a.multiplied(t) : a;
    for (var l = r.getFirstChild(); null != l; l = l.getNext()) {
      var h, A = r.getPreviousPoint(l), c = r.getNextPoint(l), p = l.getProperty("tp"), u = new o(l.getProperty("x"), l.getProperty("y")), d = {
          type: p,
          anchorPoint: l,
          position: u,
          annotation: s.annotationHandles.path.node.straightType,
          leftHandlePosition: null,
          rightHandlePosition: null
        };
      if (p !== f.AnchorPoint.Type.Asymmetric && p !== f.AnchorPoint.Type.Symmetric && p !== f.AnchorPoint.Type.Mirror && p !== f.AnchorPoint.Type.Connector || (d.annotation = s.annotationHandles.path.node.smoothType, true === l.getProperty("ah") && (d.annotation = s.annotationHandles.path.node.autoType)), l.hasFlag(n.Flag.Selected) || A && A.hasFlag(n.Flag.Selected))
        null !== (h = new o(l.getProperty("hlx"), l.getProperty("hly"))).getX() && null !== h.getY() && (d.leftHandlePosition = h);
      if (l.hasFlag(n.Flag.Selected) || c && c.hasFlag(n.Flag.Selected))
        null !== (h = new o(l.getProperty("hrx"), l.getProperty("hry"))).getX() && null !== h.getY() && (d.rightHandlePosition = h);
      if (t && (d.position = t.mapPoint(d.position), d.leftHandlePosition && (d.leftHandlePosition = t.mapPoint(d.leftHandlePosition)), d.rightHandlePosition && (d.rightHandlePosition = t.mapPoint(d.rightHandlePosition))), true === i(d))
        break;
    }
  }, F.prototype.getGraph = function () {
    return this._element;
  }, F.PointsSelectionType = {
    No: "N",
    First: "F",
    Last: "L",
    Middle: "M",
    Several: "S"
  }, F.prototype.getPointsSelectionType = function () {
    var e = F.PointsSelectionType.No;
    if (this._partSelection && !this.hasFlag(b.Flag.ResizeAll))
      if (this._partSelection.length > 1)
        e = F.PointsSelectionType.Several;
      else if (this._partSelection[0].point.hasFlag(n.Flag.Selected)) {
        var module = this._partSelection[0].point;
        e = module === this._element.getAnchorPoints().getLastChild() ? F.PointsSelectionType.Last : module === this._element.getAnchorPoints().getFirstChild() ? F.PointsSelectionType.First : F.PointsSelectionType.Middle;
      }
    return e;
  }, F.prototype.selectOnePoint = function (e) {
    this.updatePartSelection(false, [{
        type: F.PartType.Point,
        point: e
      }]);
  }, F.prototype.isPartSelectionUnderCollisionAllowed = function () {
    return true;
  }, F.prototype.updatePartSelectionUnderCollision = function (e, t, i) {
    var r = this._element.getAnchors(), o = this._element.getTransform(), a = [], s = [];
    this.requestInvalidation();
    for (var l = r.getFirstChild(); null != l; l = l.getNext()) {
      !i && l.hasFlag(n.Flag.Highlighted) && l.removeFlag(n.Flag.Highlighted);
      var h = l.getPoint();
      h = o ? o.mapPoint(h) : h, !x.hitTest(h.getX(), h.getY(), t, 0, true) || !i && e && l.hasFlag(n.Flag.Selected) ? !i || !l.hasFlag(n.Flag.Highlighted) || e && l.hasFlag(n.Flag.Selected) || s.push({
        type: F.PartType.Anchor,
        point: l
      }) : a.push({
        type: F.PartType.Anchor,
        point: l
      });
    }
    if (a.length && !this._element.hasFlag(n.Flag.Selected) && (i ? this._element.hasFlag(n.Flag.Highlighted) || this._element.setFlag(n.Flag.Highlighted) : this._element.setFlag(n.Flag.Selected)), i) {
      if (e && this._partSelection && this._partSelection.length)
        for (var A = 0; A < this._partSelection.length; ++A) {
          (c = this._partSelection[A]).type != F.PartType.Anchor || c.point.hasFlag(n.Flag.Highlighted) || c.point.setFlag(n.Flag.Highlighted);
        }
      if (a.length)
        for (A = 0; A < a.length; ++A) {
          (c = a[A]).type != F.PartType.Anchor || c.point.hasFlag(n.Flag.Highlighted) || c.point.setFlag(n.Flag.Highlighted);
        }
      if (s.length)
        for (A = 0; A < s.length; ++A) {
          var c;
          (c = s[A]).type == F.PartType.Anchor && c.point.hasFlag(n.Flag.Highlighted) && c.point.removeFlag(n.Flag.Highlighted);
        }
      this.requestInvalidation();
    } else
      this._element.hasFlag(n.Flag.Highlighted) && this._element.removeFlag(n.Flag.Highlighted), this.updatePartSelection(e, a);
    return this._partSelection && this._partSelection.length;
  }, F.prototype.isDeletePartsAllowed = function () {
    var e = false;
    if (this._partSelection && this._partSelection.length && !this.hasFlag(b.Flag.ResizeAll))
      if (this._selectionMode == F.SelectionMode.Edge)
        e = true;
      else if (this._selectionMode == F.SelectionMode.Anchors) {
        for (var module = 0, require = 0; require < this._partSelection.length; ++require)
          this._partSelection[require].type == F.PartType.Anchor && ++module;
        if (module) {
          for (var n = 0, r = this._element.getAnchors().getFirstChild(); null != r; r = r.getNext(), ++n);
          n > module && (e = true);
        }
      }
    return e;
  }, F.prototype.deletePartsSelected = function () {
    if (this._partSelection && this._partSelection.length && !this.hasFlag(b.Flag.ResizeAll))
      if (this.requestInvalidation(), this._selectionMode == F.SelectionMode.Edge)
        try {
          this._element.prepareFacetsUpdate();
          for (var exports = 0; exports < this._partSelection.length; ++exports) {
            var module = this._partSelection[exports];
            if (module.type == F.PartType.Segment || module.type == F.PartType.Point) {
              this._closePBEditor(false), this._element.removeEdge(module.edge);
              break;
            }
          }
          this._partSelection = null;
        } finally {
          this._element.finishFacetsUpdate();
        }
      else if (this._selectionMode == F.SelectionMode.Anchors)
        try {
          this._element.prepareFacetsUpdate();
          for (exports = 0; exports < this._partSelection.length; ++exports)
            this._partSelection[exports].type == F.PartType.Anchor && this._element.removeAnchor(this._partSelection[exports].point);
          this._partSelection = null;
        } finally {
          this._element.finishFacetsUpdate();
        }
  }, F.prototype.isAlignPartsAllowed = function () {
    var e = false;
    if (this._partSelection && this._partSelection.length && !this.hasFlag(b.Flag.ResizeAll) && this._selectionMode == F.SelectionMode.Anchors)
      for (var module = 0; module < this._partSelection.length && !e; ++module)
        this._partSelection[module].type == F.PartType.Anchor && (e = true);
    return e;
  }, F.prototype.alignParts = function (e, t, i) {
    if (this._partSelection && this._partSelection.length && !this.hasFlag(b.Flag.ResizeAll) && this._selectionMode == F.SelectionMode.Anchors) {
      this._createPathPreviewIfNecessary();
      var n = this._element.getTransform();
      this.requestInvalidation(), this._updateFirstPtELinks = Object.create(null), this._updateLastPtELinks = Object.create(null);
      for (var r = 0; r < this._partSelection.length; ++r)
        if (this._partSelection[r].type === F.PartType.Anchor) {
          var a = this._partSelection[r].point.getPoint();
          n && (a = n.mapPoint(a));
          var s = new o(null !== t ? t : a.getX(), null !== i ? i : a.getY());
          n && (s = n.inverted().mapPoint(s));
          for (var l = this._elementPreview.getAnchors().getById(this._partSelection[r].point.getId()), h = this._partSelection[r].point, A = h.getInEdges(), c = 0; c < A.length; ++c) {
            var p = A[c];
            this._updateLastPtELinks[p.getId()] = p;
          }
          var u = h.getOutEdges();
          for (c = 0; c < u.length; ++c) {
            p = u[c];
            this._updateFirstPtELinks[p.getId()] = p;
          }
          l && l.setProperties([
            "x",
            "y"
          ], [
            s.getX(),
            s.getY()
          ]);
        }
      this.applyTransform();
    }
  }, F.prototype.validateSelectionChange = function () {
    return true;
  }, F.prototype.constrainPosition = function (e, t, i) {
    var n = new o(i.getProperty("x"), i.getProperty("y")), r = this._element.getTransform();
    n = (r = r ? r.multiplied(t) : t).mapPoint(n);
    var a = m.convertToConstrain(n.getX(), n.getY(), e.getX(), e.getY(), s.cursorConstraint);
    return this._constrainPair = [
      n,
      a
    ], a;
  }, F.prototype._createPathPreviewIfNecessary = function (e) {
    return this._elementPreview || this._setElementPreview(this._element.clone()), this._elementPreview;
  }, F.prototype.releasePreview = function () {
    this._setElementPreview(null), this._constrainPair = null, this._pbEditor && this._pbEditor.releasePathBasePreview();
  }, F.prototype.getPathPointPreview = function (e) {
    return this._pbEditor ? this._pbEditor.getPointPreview(e) : null;
  }, F.prototype.getTransformFromNative = function (e) {
    var t = this._element.getTransform();
    return e && (t = t ? t.multiplied(e) : e), t || (t = new g()), t;
  }, F.prototype.movePoint = function (e, t, i, n) {
    var r = this.getTransformFromNative(i), a = r.inverted(), s = a.mapPoint(t);
    if (e.getProperty("ah"))
      e.setProperties([
        "x",
        "y"
      ], [
        s.getX(),
        s.getY()
      ]);
    else {
      var l = n || e, h = l.getProperty("hlx"), A = l.getProperty("hly"), c = l.getProperty("hrx"), p = l.getProperty("hry");
      if (null != h && null != A || null != c && null != p) {
        var u, d = r.mapPoint(new o(l.getProperty("x"), l.getProperty("y"))), g = t.getX() - d.getX(), f = t.getY() - d.getY();
        if (null != h && null != A)
          h = (u = a.mapPoint(r.mapPoint(new o(h, A)).translated(g, f))).getX(), A = u.getY();
        if (null != c && null != p)
          c = (u = a.mapPoint(r.mapPoint(new o(c, p)).translated(g, f))).getX(), p = u.getY();
      }
      e.setProperties([
        "x",
        "y",
        "hlx",
        "hly",
        "hrx",
        "hry"
      ], [
        s.getX(),
        s.getY(),
        h,
        A,
        c,
        p
      ]);
    }
  }, F.prototype.getPartSelection = function () {
    return this.hasFlag(b.Flag.ResizeAll) ? null : this._partSelection;
  }, F.prototype.getPointCoord = function (e) {
    var t = e.getProperty("x"), i = e.getProperty("y"), n = new o(t, i), r = this._element.getTransform();
    return r && (n = r.mapPoint(n)), n;
  }, F.prototype.highlightPart = function (e, t) {
    this.hasFlag(b.Flag.ResizeAll) || (e.type != F.PartType.Segment && e.type != F.PartType.Point || e.edge.hasFlag(n.Flag.Selected)) && (e.type != F.PartType.Anchor || e.point.hasFlag(n.Flag.Selected)) && (e.type != F.PartType.Facet || e.facet.hasFlag(n.Flag.Selected)) || (this._highlightPart = e, this.requestInvalidation());
  }, F.prototype._movePreviewPointCoordinates = function (e, t, i, n, r, a, s) {
    var l = n;
    if (a) {
      var h = r.inverted();
      l = this.constrainPosition(n, h, e);
    }
    l = r.mapPoint(l);
    var A = this._element.getTransform(), c = new o(e.getProperty(t), e.getProperty(i));
    A && (c = A.mapPoint(c)), this._transformPreviewPointCoordinates(e, t, i, new g(1, 0, 0, 1, l.getX() - c.getX(), l.getY() - c.getY()));
  }, F.prototype._transformPreviewPointCoordinates = function (e, t, i, n, r) {
    var a = this._element.getTransform(), s = this.getPathPointPreview(e);
    if (s) {
      if (r)
        var l = r;
      else
        l = new o(e.getProperty(t), e.getProperty(i));
      var h = n;
      a && (h = n.multiplied(a.inverted()), h = a.multiplied(h));
      var A = h.mapPoint(l), c = [
          t,
          i
        ], p = [
          A.getX(),
          A.getY()
        ];
      "hlx" !== t && "hrx" !== t && "hly" !== i && "hry" !== i || (c.push("ah"), p.push(false)), s.setProperties(c, p);
    }
  }, F.prototype._assignPreviewPointPropertiesToSourcePoint = function (e, t) {
    var i = this.getPathPointPreview(e);
    i && e.setProperties(t, i.getProperties(t));
  }, F.prototype._transferPreviewProperties = function (e, t) {
    if (t instanceof f) {
      var require = this._pathBaseInEdit.getAnchorPoints().getIndexOfChild(e), n = t.getAnchorPoints().getChildByIndex(require), r = this.getPathPointPreview(n);
      r && n.transferProperties(r, [f.AnchorPoint.GeometryProperties]);
    }
  }, F.prototype._filterSelection = function (e) {
    if (!e)
      return null;
    for (var module, require = [], n = 0; n < e.length; ++n)
      if (e[n].type != F.PartType.Point)
        require.push(e[n]);
      else {
        module = true;
        for (var r = 0; r < e.length; ++r)
          if (e[r].type == F.PartType.Segment && (e[n].point == e[r].apLeft || e[n].point == e[r].apRight)) {
            module = false;
            break;
          }
        module && require.push(e[n]);
      }
    return require;
  }, F.prototype._geometryChange = function (e) {
    e.type == p.GeometryChangeEvent.Type.Before && e.element == this._element ? this.requestInvalidation() : e.type == p.GeometryChangeEvent.Type.After && e.element == this._element && ((this._elementPreview || this._pbEditor) && (this.releasePreview(), this._pbEditor && (this._closePBEditor(true), this.setActiveExtendingMode(C.ExtendingMode.Off))), this.requestInvalidation());
  }, F.prototype._checkCustomStyle = function (e) {
    if (!e.temporary && e.node instanceof u.PaintLayer) {
      var module = this.getStylableParts();
      if (module)
        for (var require = 0; require < module.length; require++)
          if (module[require] === e.node.getOwnerStylable()) {
            module[require].setProperty("cSt", !!module[require].getPaintLayers().getBorderLayers().length);
            break;
          }
    }
  }, F.prototype._partsGeometryChanged = function (e) {
    this.requestInvalidation();
    try {
      this._element.prepareFacetsUpdate();
      var module = new r(), require = function (e, i, n) {
          var r = false, o = [];
          if (e._splitPathLineAtSelfIntersections(n, o), 1 == o.length) {
            for (var s = 0, l = n.getAnchorPoints().getFirstChild().getNext(); null != l; l = l.getNext(), ++s);
            for (var h = e.getEdges().getFirstChild(); null != h && !a; h = h.getNext())
              if (i != h.getId()) {
                var A = module.intersect(n, h.getPathBase(), false);
                if (A && A.length)
                  for (var c = 0; c < A.length && !r; ++c) {
                    var p = A[c];
                    1 == p.polySeg0.seg && w.isEqualEps(p.slope0, 0) || p.polySeg0.seg == s && w.isEqualEps(p.slope0, 1) || (r = true);
                  }
              }
          } else
            r = true;
          return r;
        }.bind(this);
      if (this._selectionMode == F.SelectionMode.Edge || 1 == e.length && e[0].type == F.PartType.Segment && this._transformSubType == F.SegmentData.Handles)
        for (var n = 0; n < e.length; ++n) {
          var o = e[n];
          if ((o.type == F.PartType.LeftHandle || o.type == F.PartType.RightHandle || o.type == F.PartType.Point || o.type == F.PartType.Segment) && this._pbEditor) {
            var a = false, s = o.edge, l = true, h = true;
            if (o.type == F.PartType.Segment && this._transformSubType != F.SegmentData.Handles) {
              var A = s.getPathBase().getAnchorPoints();
              A.getFirstChild() == o.apLeft && (l = false, a = true), A.getLastChild() == o.apRight && (h = false, a = true);
            } else
              o.type == F.PartType.Point && (s.getPathBase().getAnchorPoints().getFirstChild() == o.point ? (l = false, a = true) : s.getPathBase().getAnchorPoints().getLastChild() == o.point && (h = false, a = true));
            var c = this._pbEditor.getPaintElement();
            a || (a = require(this._element, s.getId(), c));
            var u = new f(false, c.cloneAnchorPoints());
            if (a) {
              var g = null, m = null;
              if (l) {
                var y = s.getSource();
                g = new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(y));
              }
              if (h) {
                var _ = s.getDestination();
                m = new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(_));
              }
              this._element.removeEdge(s), this._element.addGraphLine(u, g, m, s), this.requestInvalidation(), this._closePBEditor(true), this.updatePartSelection(false, null);
            } else
              s.setPathBase(u), this.requestInvalidation(), this._closePBEditor(false), this._initPBEditor(s.getPathBase()), this.requestInvalidation();
          }
        }
      else if (this._selectionMode == F.SelectionMode.Anchors && (this._moveEdgesLinks || this._updateLastPtELinks || this._updateFirstPtELinks)) {
        this._element._beginBlockEvents([p.GeometryChangeEvent]);
        var v = this._elementPreview, b = Object.create(null);
        for (var C in this._moveEdgesLinks) {
          var E = this._moveEdgesLinks[C];
          if (T = v.getEdges().getById(E.getId()))
            if (require(v, C, T.getPathBase()))
              b[C] = E, this._element.removeEdge(E);
            else {
              c = new f(false, T.getPathBase().cloneAnchorPoints());
              E.setPathBase(c);
            }
        }
        var B = function (e, t) {
          var i = v.getEdges().getById(e.getId());
          if (i) {
            var n = i.getPathBase(), r = e.getPathBase();
            if (t) {
              var o = n.getAnchorPoints().getFirstChild();
              r.getAnchorPoints().getFirstChild().setProperties([
                "x",
                "y",
                "hrx",
                "hry"
              ], [
                o.getProperty("x"),
                o.getProperty("y"),
                o.getProperty("hrx"),
                o.getProperty("hry")
              ]);
            } else {
              o = n.getAnchorPoints().getLastChild();
              r.getAnchorPoints().getLastChild().setProperties([
                "x",
                "y",
                "hlx",
                "hly"
              ], [
                o.getProperty("x"),
                o.getProperty("y"),
                o.getProperty("hlx"),
                o.getProperty("hly")
              ]);
            }
          }
        }.bind(this);
        for (var C in this._updateFirstPtELinks) {
          E = this._updateFirstPtELinks[C];
          (T = v.getEdges().getById(E.getId())) && (require(v, C, T.getPathBase()) ? (b[C] = E, this._element.removeEdge(E)) : B(E, true));
        }
        for (var C in this._updateLastPtELinks) {
          E = this._updateLastPtELinks[C];
          (T = v.getEdges().getById(E.getId())) && (require(v, C, T.getPathBase()) ? (b[C] = E, this._element.removeEdge(E)) : B(E, false));
        }
        var x = Object.keys(b);
        for (n = 0; n < e.length; ++n) {
          var P = e[n].point, S = v.getAnchors().getById(P.getId());
          n != e.length - 1 || x.length || this._element._endBlockEvents([p.GeometryChangeEvent]), S && P.setProperties([
            "x",
            "y"
          ], [
            S.getProperty("x"),
            S.getProperty("y")
          ]);
        }
        for (n = 0; n < x.length; ++n) {
          var T;
          E = b[x[n]];
          if (T = v.getEdges().getById(E.getId())) {
            c = new f(false, T.getPathBase().cloneAnchorPoints()), y = this._element.getAnchors().getById(E.getSourceId()), _ = this._element.getAnchors().getById(E.getDestinationId());
            n == x.length - 1 && this._element._endBlockEvents([p.GeometryChangeEvent]), this._element.addGraphLine(c, new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(y)), new d.GraphPosition(d.GraphPosition.PosType.Anchor, new d.GraphPosition.AnchorSpec(_)), E);
          }
        }
      }
    } finally {
      this._element.finishFacetsUpdate();
    }
  }, F.prototype._ensureConsistentSelection = function () {
    this._selectionMode = F.SelectionMode.None;
    for (var exports = [], module = this._element.getAnchors().getFirstChild(); null != module; module = module.getNext())
      module.hasFlag(n.Flag.Selected) && exports.push(new a.PartInfo(this, {
        type: F.PartType.Anchor,
        point: module
      }, null, false, true));
    for (var require = this._element.getEdges().getFirstChild(); null != require; require = require.getNext())
      require.hasFlag(n.Flag.Selected) && exports.push(new a.PartInfo(this, {
        type: F.PartType.Segment,
        edge: require,
        apLeft: null,
        apRight: null
      }, {}, false, true));
    for (var r = this._element.getFacets().getFirstChild(); null != r; r = r.getNext())
      r.hasFlag(n.Flag.Selected) && exports.push(new a.PartInfo(this, {
        type: F.PartType.Facet,
        facet: r
      }, {}, false, false));
    this.updatePartSelection(false, exports);
  }, F.prototype._initPBEditor = function (e) {
    this._pathBaseInEdit = e, this._pbEditor = v.openEditor(this._pathBaseInEdit, true), this._pbEditor.setFlag(a.Flag.Selected), this._pbEditor.removeFlag(b.Flag.ResizeAll), this._pbEditor.setCatchHandle(false), this._pbEditor.setFlag(a.Flag.HideEditor);
  }, F.prototype._closePBEditor = function (e) {
    this._pbEditor && this._pathBaseInEdit && (this.requestInvalidation(), this._pbEditor.requestInvalidation(), e && this._pbEditor.updatePartSelection(false, null), this._pbEditor = null, v.closeElementEditor(this._pathBaseInEdit), this._pathBaseInEdit = null, this.requestInvalidation());
  }, F.prototype.toString = function () {
    return "[Object GPathsGraphEditor]";
  }, exports.exports = F;
}
