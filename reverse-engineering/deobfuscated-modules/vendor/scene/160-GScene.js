/**
 * Module 160 - GScene
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
  var n = require(50) /* GPattern */, r = require(2) /* GNode */, o = require(76) /* module */, a = require(915) /* module */, s = require(0) /* GObject */, l = require(11) /* GUtil */, h = require(72) /* GEvent */, A = require(132) /* GLength */, c = require(69) /* GBlock */, p = require(104) /* GItem */, u = require(22) /* GElement */, d = require(45) /* GPathBase */, g = require(83) /* GPage */, f = require(472) /* module */, m = require(6) /* GRect */, y = require(7) /* GTransform */, _ = require(63) /* GVertexTransformer */, v = require(511) /* GStyle */, b = require(658) /* GSceneDictionary */, C = require(933) /* Entry */, w = require(9) /* GLocale */, E = require(47) /* GLocaleKey */, B = require(207) /* GSceneOptions */, x = require(662) /* GSwatches */, P = require(517) /* GSwatch */, S = require(14) /* GPaintCanvas */, T = require(12) /* GMath */, I = require(118) /* module */, F = require(111) /* GRendererCtx */, R = require(103) /* module */, D = require(140) /* module */, k = require(59) /* GVertexInfo */, G = require(68) /* GColor */;
  function Q(e, t) {
    u.call(this), this._scene = this, this.$_links = {}, this._pendingActions = [], this._destroyables = [], this._workspace = e, this._dictionary = new b(this), this._symbolDictionary = new C(this), this._trfSettings = {
      borderScale: null,
      scaleCorners: null
    }, this._setDefaultProperties(Q.MetaProperties, Q.GeometryProperties, Q.VisualProperties), t || this.insertPage();
  }
  require(507) /* module */, r.inheritAndMix("scene", Q, u, [
    r.Container,
    r.Properties,
    r.Store,
    u.Accelerated
  ]), Q.AXONO_ANGLE1 = Math.PI / 6, Q.AXONO_ANGLE2 = -Q.AXONO_ANGLE1, Q.AXONO_GX = 20, Q.MIN_GRID_SIZE = 1, Q.decimalsNum = null, Q.GridMode = {
    Boxed: "box",
    Axonometric: "axo"
  }, Q.MetaProperties = {
    v: 10,
    lmd: 0,
    cid: null,
    cfs: false,
    can: false,
    asec: null,
    ut: A.Unit.PX,
    ur: 1,
    gx: 10,
    gy: 10,
    gm: null,
    lgm: null,
    gaw: Q.AXONO_GX,
    gah: null,
    ga1: null,
    ga2: null,
    hgl: null,
    vgl: null,
    name: null,
    _links: {},
    __ids: [],
    rb: false,
    cst: null,
    dpi: A.DPI,
    pi: 0,
    cm: G.ColorModes.RGB
  }, Q.inheritedPageProps = [
    "w",
    "h",
    "ml",
    "mt",
    "mr",
    "mb",
    "bl",
    "bck",
    "bop"
  ], Q.GeometryProperties = {
    pgx: 2,
    mp: false
  }, Q.VisualProperties = {
    lbs: 10,
    lbp: 7,
    lbc: null,
    mve: null
  }, Q.SingleMasterProperties = {
    mpg: null,
    ompg: null,
    empg: null
  }, Q.InvalidationRequestEvent = function (e, t) {
    this.area = e || null;
    for (var require = t; require;) {
      if (require instanceof g) {
        this.page = require;
        break;
      }
      require = require.getParent();
    }
  }, s.inherit(Q.InvalidationRequestEvent, h), Q.InvalidationRequestEvent.prototype.area = null, Q.InvalidationRequestEvent.prototype.page = null, Q.InvalidationRequestEvent.prototype.toString = function () {
    return "[Event GScene.InvalidationRequestEvent]";
  }, Q.InvalidationFinishedEvent = function (e, t, i) {
    this.scene = e, this.configuration = t, this.wasDirty = i;
  }, s.inherit(Q.InvalidationFinishedEvent, h), Q.InvalidationFinishedEvent.prototype.scene = null, Q.InvalidationFinishedEvent.prototype.configuration = null, Q.InvalidationFinishedEvent.prototype.wasDirty = null, Q.InvalidationFinishedEvent.prototype.toString = function () {
    return "[Event GScene.InvalidationFinishedEvent]";
  }, Q.RecordedTransactionStartedEvent = function (e) {
    this.scene = e;
  }, s.inherit(Q.RecordedTransactionStartedEvent, h), Q.RecordedTransactionStartedEvent.prototype.scene = null, Q.RecordedTransactionStartedEvent.prototype.toString = function () {
    return "[Event GScene.RecordedTransactionStartedEvent]";
  }, Q.RecordedTransactionFinishedEvent = function (e) {
    this.scene = e;
  }, s.inherit(Q.RecordedTransactionFinishedEvent, h), Q.RecordedTransactionFinishedEvent.prototype.scene = null, Q.RecordedTransactionFinishedEvent.prototype.toString = function () {
    return "[Event GScene.RecordedTransactionFinishedEvent]";
  }, Q.prototype._activePage = null, Q.prototype._linksLookup = null, Q.prototype._temporarilyDisabledLinks = null, Q.prototype._linksAreSane = true, Q.prototype._invalidateFrom = 0, Q.prototype._pendingActions = null, Q.prototype._callingPendingActions = false, Q.prototype._styles = null, Q.prototype._swatches = null, Q.prototype._duringRecordedTransaction = false, Q.prototype._lastInvalidationFinishedEvent = null, Q.prototype._pre310 = false, Q.prototype._trfSettings = null, Q.prototype._dictionary = null, Q.prototype._symbolDictionary = null, Q.prototype._destroyables = null, Q.prototype._savedScreenBBox = null, Q.prototype._referenceCounter = 0, Q.prototype._released = false, Q.prototype._lastTimeAnnotationsFromCloudModified = 0, Q.prototype.getDictionary = function () {
    return this._dictionary;
  }, Q.prototype.getSymbols = function () {
    return this._symbolDictionary.getSymbols();
  }, Q.prototype.isReleased = function () {
    return this._released;
  }, Q.prototype.releaseDictionaries = function () {
    this._released = true, this._dictionary.release(), this._symbolDictionary.release(), this.getWorkspace().cleanReferences(this);
  }, Q.prototype.getAnnotations = function () {
    var e = [];
    return this.iteratePages(function (t) {
      var i = t.getAnnotations();
      i && e.push(i);
    }, true), e;
  }, Q.prototype.hasAnnotations = function () {
    var e = false;
    return this.iteratePages(function (t) {
      e = e || t.hasAnnotations();
    }, true), e;
  }, Q.prototype.setAnnotations = function (e) {
    var t = [];
    if (this.iteratePages(function (e) {
        t.push(e);
      }, true), e.length !== t.length)
      throw "Invalid number of pages or annotations";
    for (var require = 0; require < t.length; require++)
      t[require].setAnnotations(e[require]);
  }, Q.prototype.cleanAnnotations = function () {
    this.iteratePages(function (e) {
      e.setAnnotations(null);
    }, true);
  }, Q.prototype.getLastTimeAnnotationsFromCloudModified = function () {
    return this._lastTimeAnnotationsFromCloudModified;
  }, Q.prototype.setLastTimeAnnotationsFromCloudModified = function (e) {
    this._lastTimeAnnotationsFromCloudModified = e;
  }, Q.prototype.removeSymbol = function (e) {
    this._symbolDictionary.removeEntry(e.getMultireferenceId(), true), this.visitLinks(e, function (e) {
      "symbol" === r.getName(e) && e.getParent().removeChild(e);
    }), e.getParent() && e.getParent().removeChild(e);
  }, Q.prototype.getSymbolImage = function (e) {
    var t = this._symbolDictionary.getEntry(e.getMultireferenceId());
    return t && t.value && t.value.image || e.getSymbolImage();
  }, Q.prototype.hasLinkedFiles = function () {
    for (var exports, module = this._dictionary.getEntries(), require = false, n = 0, r = module.length; n < r && !(require = (exports = module[n].value) && 0 === exports.indexOf("file://") && module[n].hasReferences()); n++);
    return require;
  }, Q.prototype.setCloudSynchronization = function (e) {
    this.setProperties([
      "cid",
      "cfs"
    ], [
      e,
      !!e
    ]);
  }, Q.prototype.isCloudSynchronization = function () {
    return !!this.$cid && this.$cfs;
  }, Q.prototype.setCloudAnnotations = function (e) {
    e ? this.setProperties([
      "cid",
      "can"
    ], [
      e,
      true
    ]) : this.setProperties(["can"], [false]);
  }, Q.prototype.isCloudAnnotations = function () {
    return !!this.$cid && (this.$can || this.$cfs);
  }, Q.prototype.lastModifiedDate = function () {
    return new Date(this.$lmd);
  }, Q.prototype.getLastSavedTime = function () {
    return this.$lmd;
  }, Q.prototype.getLabelBBox = function (e) {
    var t = this.getGeometryBBox(), i = (this.$lbs + this.$lbp) * (e || 1) * S.getScreenDPI();
    return new m(0, 0, t ? t.getWidth() : 0, i);
  }, Q.prototype._recreateLinksLookup = function () {
    if (this.$_links && this.$__ids) {
      var exports = {}, module = function (i) {
          if (i.hasMixin(r.Reference) && i.getOldReferenceId() && this.$_links.hasOwnProperty(i.getOldReferenceId()))
            this.$_links[i._referenceId] = this.$_links[i.getOldReferenceId()], delete this.$_links[i.getOldReferenceId()];
          else if (i.$rtxt) {
            var n = 0;
            this.acceptChildren(function (t) {
              if (t.hasMixin(r.Reference) && (t.getOldReferenceId() || t._referenceId) && i.$rtxt.indexOf(t.getOldReferenceId() || t._referenceId) >= 0) {
                var o = this.$_links[t._referenceId];
                if (this.$_links[t._referenceId] = (o || []).concat([i.getSceneId()]), i.hasEventListeners(f)) {
                  var a = this._workspace.getReference(t._referenceId);
                  i.trigger(new f(a, i, true));
                }
                var s = exports[t._referenceId];
                if (s || (s = []), s.push(i), exports[t._referenceId] = s, ++n === i.$rtxt.length)
                  return false;
              }
            }.bind(this)), delete i.$rtxt;
          }
          i instanceof d && i.getAnchorPoints() && i.getAnchorPoints().accept(module);
        }.bind(this), require = this.getProperty("mpg");
      require && require.accept(module), (require = this.getProperty("empg")) && require.accept(module), (require = this.getProperty("ompg")) && require.accept(module), this.acceptChildren(module);
      var n = this.$__ids, a = [];
      for (var s in (this.acceptChildren(function (e) {
          e instanceof o && a.push(e);
        }), this.$_links)) {
        var l = [], h = this.$_links[s];
        if (h) {
          var A = this._workspace.getReference(s);
          if (A) {
            if (A instanceof v) {
              h.length = 0;
              for (var c = 0; c < a.length; c++) {
                (_ = a[c]) instanceof u && _.hasProperty("sref") && _.getProperty("sref") && (A.getOldReferenceId() === _.getProperty("sref") && (_.$sref = A.getReferenceId()), A.getReferenceId() === _.getProperty("sref") && (l.push(_), h.push(_.getSceneId()), _.hasEventListeners(f) && _.trigger(new f(A, _, true))));
              }
            } else {
              for (var p, m = [], y = 0; y < h.length; y++) {
                p = false;
                for (c = 0; c < a.length; c++) {
                  var _;
                  if (n[c] === h[y])
                    if ((_ = a[c]).getWorkspace()) {
                      l.push(_), h[y] = _.getSceneId(), _.hasEventListeners(f) && _.trigger(new f(A, _, true)), p = true;
                      break;
                    }
                }
                p || m.push(y);
              }
              if (m.length) {
                console.warn("Inexistent links found, cleaning up...");
                for (y = m.length - 1; y >= 0; y--)
                  h.splice(m[y], 1);
              }
            }
            this._linksLookup || (this._linksLookup = {}), this._linksLookup[s] = l;
          } else
            console.warn("Invalid reference id."), delete this.$_links[s];
        }
      }
      for (var b in exports)
        this._linksLookup[b] = exports[b];
      if (this._linksAreSane = this._checkLinksSanity(), this._isRestoring)
        for (var s in this.$_links)
          this.visitLinks(s, function (e) {
            e instanceof g && e._invalidatePaintBoxForChildUpdate();
          });
    }
  }, Q.prototype._unsetSceneNode = function (e) {
    if (!this.$rb && (e._scene = this, !this._isRestoring && e.hasMixin(r.Reference))) {
      var module = function () {
        this.hasLinks(e) && this.visitLinks(e, function (t) {
          this.unlink(e, t);
        }.bind(this));
      }.bind(this);
      this._linksAreSane ? module() : this._pendingActions.push(module);
    }
  }, Q.prototype.link = function (e, t) {
    if (!this._isRestoring && !this.$rb) {
      var require = null;
      if (this._refreshLinks(), this.isLinked(t, e))
        this.setProperty("_links", JSON.parse(JSON.stringify(this.$_links || {})));
      else {
        require = "string" != typeof e ? e.getReferenceId() : e;
        var n = JSON.parse(JSON.stringify(this.$_links || {}));
        this._linksLookup || (this._linksLookup = {}), n.hasOwnProperty(require) || (n[require] = [], this._linksLookup[require] = []), n[require].push(t.getSceneId()), this.setProperty("_links", n), t instanceof g && (t._invalidatePaintBoxForChildUpdate(), this._invalidateArea(null, t));
      }
    }
  }, Q.prototype.unlink = function (e, t) {
    if (!this._isRestoring && !this.$rb && e) {
      var require = null;
      this._refreshLinks(), require = "string" != typeof e ? e.getReferenceId() : e;
      var n = JSON.parse(JSON.stringify(this.$_links || {}));
      this._linksLookup || (this._linksLookup = {});
      var r, o, a = false;
      if (n.hasOwnProperty(require))
        (o = (r = n[require]).indexOf(t.getSceneId())) >= 0 && (r.splice(o, 1), 0 === r.length && delete n[require], a = true);
      if (!a && this._temporarilyDisabledLinks)
        if (this._temporarilyDisabledLinks.hasOwnProperty(require))
          if (r = n[require])
            (o = r.indexOf(t.getSceneId())) >= 0 && (r.splice(o, 1), 0 === r.length && delete n[require]);
      a && this.setProperty("_links", n);
    }
  }, Q.prototype.visitReferences = function (e, t) {
    if (this._linksAreSane) {
      if (this._linksLookup)
        if ("string" == typeof e)
          for (var require in this._linksLookup) {
            this.$_links[require].indexOf(e) >= 0 && t(this._workspace.getReference(require));
          }
        else if (e)
          for (var require in this._linksLookup)
            this._linkLookupHasSceneNode(require, e) && t(this._workspace.getReference(require));
    } else
      this._pendingActions.push(function () {
        this.visitReferences(e, t);
      }.bind(this));
  }, Q.prototype.isLinked = function (e, t) {
    var i, n;
    if (i = e instanceof o ? e.getSceneId() : e, "string" == typeof t)
      n = t;
    else {
      if (!t || !t.hasMixin(r.Reference))
        return false;
      n = t.getReferenceId();
    }
    return !!this.$_links.hasOwnProperty(n) && !(this.$_links[n].indexOf(i) < 0);
  }, Q.prototype.visitLinks = function (e, t) {
    if (this._linksAreSane) {
      if (this._linksLookup) {
        var require = null;
        if ("string" == typeof e)
          require = e;
        else {
          if (!e)
            return;
          require = e.getReferenceId();
        }
        var n = this._linksLookup[require];
        if (n) {
          n = n.slice();
          for (var r = 0; r < n.length; ++r)
            if (false === t(n[r]))
              return;
        }
      }
    } else
      this._pendingActions.push(function () {
        this.visitLinks(e, t);
      }.bind(this));
  }, Q.prototype.hasLinks = function (e) {
    if (!e)
      return false;
    var t = null;
    return t = "string" == typeof e ? e : e.getReferenceId(), this.$_links.hasOwnProperty(t);
  }, Q.prototype._linkLookupHasSceneNode = function (e, t) {
    var i = this._linksLookup[e];
    if (i)
      for (var n = t.getSceneId(), r = i.length, a = 0; a < r; a++) {
        var s = i[a];
        if (s && s instanceof o && s.getSceneId() === n)
          return true;
      }
    return false;
  }, Q.prototype.hasReferences = function (e) {
    if (!e)
      return false;
    if ("string" == typeof e) {
      for (var module in this.$_links)
        if (this.$_links[module].indexOf(e) >= 0)
          return true;
    } else if (this._linksLookup)
      for (var module in this.$_links)
        if (this._linkLookupHasSceneNode(module, e))
          return true;
    return false;
  }, Q.prototype.linkCount = function (e) {
    var t = null;
    if (!this._linksAreSane)
      return -1;
    if ("string" == typeof e)
      t = e;
    else {
      if (!e)
        return 0;
      t = e.getReferenceId();
    }
    var i = this.$_links[t];
    return i ? i.length : 0;
  }, Q.prototype.refCount = function (e) {
    var t = 0;
    if (!this._linksAreSane)
      return -1;
    if ("string" == typeof e)
      for (var require in this.$_links)
        this.$_links[require].indexOf(e) >= 0 && t++;
    else if (e && this._linksLookup)
      for (var require in this.$_links)
        this._linkLookupHasSceneNode(require, e) >= 0 && t++;
    return t;
  }, Q.prototype.startBlockReferenceChanges = function () {
    this.setProperty("rb", true);
  }, Q.prototype.endBlockReferenceChanges = function (e) {
    this.setProperty("rb", false), e || (this._cleanupLinks(this.$_links), this._temporarilyDisabledLinks = null);
  }, Q.prototype._cleanupLinks = function (e) {
    var t = {};
    for (var require in e) {
      var n = this._linksLookup[require];
      if (n) {
        for (var r = e[require], o = r.length - 1; o >= 0; o--) {
          for (var a = r[o], s = false, l = 0; l < n.length; l++) {
            if (n[l].getSceneId() === a) {
              s = true;
              break;
            }
          }
          s || (t[require] || (t[require] = []), t[require].push(r[o]), r.splice(o, 1));
        }
        0 === r.length && delete e[require];
      } else
        t[require] = e[require], delete e[require];
    }
    return t;
  }, Q.prototype.isFixedSized = function () {
    var e = this.getActivePage();
    return !!e && e.isFixedSized();
  }, Q.prototype.hasGrid = function () {
    return this.$ga && this.$gx && this.$gy;
  }, Q.prototype.stringToLength = function (e) {
    return A.parseEquation(e, this.$ut);
  }, Q.prototype.stringToPoint = function (e) {
    var t = this.stringToLength(e);
    return t ? t.toPoint() : null;
  }, Q.prototype.lengthToString = function (e, t) {
    return l.formatNumber(e.toUnit(this.$ut), t);
  }, Q.prototype.getOptimalDecimalsCount = function (e) {
    if (null !== Q.decimalsNum)
      return Q.decimalsNum;
    var t = 0;
    switch (e = e || this.$ut) {
    case A.Unit.IN:
      t = 4;
      break;
    case A.Unit.CM:
      t = 3;
      break;
    case A.Unit.PT:
    case A.Unit.PX:
      t = 1;
      break;
    default:
      t = 2;
    }
    return t;
  }, Q.prototype.getIncrementValue = function (e) {
    var t = 1;
    return (e = e || this.$ut) != A.Unit.IN && e != A.Unit.CM || (t = 0.1), t;
  }, Q.prototype.pointToString = function (e, t) {
    return this.lengthToString(new A(e, null), t);
  }, Q.prototype.getElementsByBBox = function (e, t) {
    var i = [];
    return this.acceptChildren(function (n) {
      if (n instanceof u) {
        var r = n.getPaintBBox();
        r && !r.isEmpty() && (t && e.intersectsRect(r) || !t && e.containsRect(r)) && i.push(n);
      }
    }), i;
  }, Q.prototype.refreshPagesPositions = function () {
    try {
      var exports = 0;
      this.beginUpdate(), this._childrenPaintBBox = null;
      for (var module = this.getFirstChild(); null !== module; module = module.getNext(), exports++)
        module._paintBBox = null, module._childrenPaintBBox = null, module._geometryBBox = null, module._preTransformRect = null, this._isRestoring || module.refreshPosition();
    } finally {
      this.endUpdate();
    }
  }, Q.prototype.insertPage = function () {
    var e, t = this.queryCount("page"), i = ["name"], n = [w.get(new E("GScene", "page")) + " " + (t + 1).toString()], r = null;
    (this.$mpg || this.$ompg || this.$empg) && (r = (t + 1) % 2 == 0 ? this.$empg ? this.$empg : this.$mpg : this.$ompg ? this.$ompg : this.$mpg);
    var o = r || this.getActivePage();
    e = new g(), o && [
      g.VisualProperties,
      g.GeometryProperties
    ].forEach(function (e) {
      var t = Object.keys(e);
      i = i.concat(t), n = n.concat(o.getProperties(t));
    });
    var a = i.indexOf("off");
    return -1 !== a && (i.splice(a, 1), n.splice(a, 1)), e.setProperties(i, n), this.appendChild(e), r && this.link(r, e), e;
  }, Q.prototype.getNodeNameTranslated = function () {
    return w.getValue("GScene", "name", this.getNodeName());
  }, Q.prototype.iteratePages = function (e, t, i) {
    if (i) {
      for (var n = this.getLastChild(); null !== n; n = n.getPrevious())
        if (n instanceof g && (t || n.$vis) && false === e(n))
          return;
    } else
      for (n = this.getFirstChild(); null !== n; n = n.getNext())
        if (n instanceof g && (t || n.$vis) && false === e(n))
          return;
  }, Q.prototype.getActivePage = function () {
    if (this._activePage && !this._activePage.hasFlag(r.Flag.Active))
      for (var exports = this.getFirstChild(); null !== exports; exports = exports.getNext())
        if (exports instanceof g && exports.hasFlag(r.Flag.Active)) {
          this._activePage = exports;
          break;
        }
    return this._activePage;
  }, Q.prototype.setActivePage = function (e) {
    var t = this._activePage;
    if (t !== e && (t && (t.removeFlag(r.Flag.Active), t.setActiveLayer(null)), e && e instanceof g)) {
      var require = t ? this.getIndexOfChild(t) : 0, n = this.getIndexOfChild(e);
      this._activePage = e, e.setFlag(r.Flag.Active), this.setProperty("pi", n), this._invalidateArea(this._getInvalidationArea([
        require,
        n
      ]), null);
    }
  }, Q.prototype.deleteActivePage = function () {
    var e = this.getActivePage();
    if (e) {
      var module = this.getSuccessorActivePage(e);
      module && (this.setActivePage(module), e.getParent().removeChild(e));
    }
  }, Q.prototype.getSuccessorActivePage = function (e) {
    var t = null;
    if (e instanceof g) {
      for (var require = e.getPrevious(); null !== require; require = require.getPrevious())
        if (require instanceof g) {
          t = require;
          break;
        }
      if (!t)
        for (require = e.getNext(); null !== require; require = require.getNext())
          if (require instanceof g) {
            t = require;
            break;
          }
    }
    return t;
  }, Q.prototype.updateActivePageForElem = function (e) {
    if (e instanceof p) {
      var module = e.findParent(function (e) {
        return e instanceof g;
      });
      module && !module.hasFlag(r.Flag.Active) && this.setActivePage(module);
    } else
      e instanceof g && (e.hasFlag(r.Flag.Active) || e.hasFlag(r.Flag.Selected) || this.setActivePage(e));
  }, Q.prototype.getActiveLayer = function () {
    var e = this.getActivePage();
    return e ? e.getActiveLayer() : null;
  }, Q.prototype.setActiveLayer = function (e) {
    if (e) {
      var module = e.findParent(function (e) {
        return e instanceof g;
      });
      module && module.setActiveLayer(e);
    } else {
      if (this.getActiveLayer()) {
        var require = this.getActivePage();
        require && require.setActiveLayer(null);
      }
    }
  }, Q.prototype.updateActiveLayerForElem = function (e) {
    var t = e.findParent(function (e) {
      return e instanceof g;
    });
    t && t.updateActiveLayerForElem(e);
    for (var require = this.getFirstChild(); null !== require; require = require.getNext())
      require instanceof g && require !== t && require.setActiveLayer(null);
  }, Q.prototype.getSuccessorActiveLayer = function (e) {
    var t = this.getActivePage();
    return t ? t.getSuccessorActiveLayer(e) : null;
  }, Q.prototype.deleteActiveLayer = function (e) {
    var t = this.getActivePage();
    t && t.deleteActiveLayer(e);
  }, Q.prototype.getClipBBox = function () {
    var e = this.getActivePage();
    return e ? e.getClipBBox() : null;
  }, Q.prototype.getStyles = function () {
    if (this._styles)
      return this._styles;
    for (var exports = this.getLastChild(); null !== exports; exports = exports.getPrevious())
      if (exports instanceof a) {
        this._styles = exports;
        break;
      }
    this._styles || (this._styles = new a(), this.appendChild(this._styles));
    var t = this.getProperty("cm");
    return t && this._styles.setColorMode(t), this._styles;
  }, Q.prototype.getMarginBBox = function () {
    return null;
  }, Q.prototype.setScreenBox = function (e) {
    this._savedScreenBBox = e;
  }, Q.prototype.getScreenBox = function () {
    return this._savedScreenBBox;
  }, Q.prototype.setShadowExpandArea = function (e, t, i, n) {
    this._shadowExpand = null !== e ? {
      left: e,
      top: t,
      right: i,
      bottom: n
    } : null;
  }, Q.prototype.getShadowExpandArea = function () {
    return this._shadowExpand;
  }, Q.prototype._invalidateArea = function (e, t) {
    this.hasEventListeners(Q.InvalidationRequestEvent) && this.trigger(new Q.InvalidationRequestEvent(e, t));
  }, Q.prototype._finishPaint = function (e) {
    this.hasEventListeners(Q.InvalidationFinishedEvent) && this.trigger(new Q.InvalidationFinishedEvent(this, e.configuration, true));
  }, Q.prototype._paintChildren = function (e, t) {
    var i = false;
    if (e.configuration.clipArea && e.canvas.hasClip()) {
      var n = e.configuration.clipArea;
      e.canvas.clipRect(n.getX(), n.getY(), n.getWidth(), n.getHeight()), i = true;
    }
    var o = e.canvas.getOrigin(), a = e.canvas.getScale(), s = null, l = null, h = null;
    if (e.configuration.multiPageView) {
      var A = this.retrieveChildrenInPaintBBox(e.dirtyMatcher.getDirtyArea(), 2);
      B.pagesCanOverlap && (A = A.filter(function (e) {
        return e instanceof g;
      }).sort(function (e, t) {
        return e.hasFlag(r.Flag.Active) && !t.hasFlag(r.Flag.Active) ? 1 : t.hasFlag(r.Flag.Active) && !e.hasFlag(r.Flag.Active) ? -1 : e.getElementIndex() - t.getElementIndex();
      }));
      for (var c = 0; c < A.length; c++)
        node = A[c], node instanceof g && (h = node.getPosition(true), e.canvas.setOrigin(o.subtract(h.scale(a))), e.dirtyMatcher && (l = new y(1, 0, 0, 1, -h.getX(), -h.getY()), s ? e.dirtyMatcher.transform(l.preMultiplied(s.inverted())) : e.dirtyMatcher.transform(l), s = l), node.paint(e));
    } else
      this.getActivePage().paint(e, t);
    i && e.canvas.resetClip();
  }, Q.prototype._getBitmapPaintArea = function () {
    var e = this.getClipBBox();
    return e || u.prototype._getBitmapPaintArea.call(this);
  }, Q.prototype._paintToBitmap = function (e) {
    return e.configuration.clipToPage = true, u.prototype._paintToBitmap.call(this, e);
  }, Q.prototype.getPaintBBox = function (e, t, i) {
    if (!i && !this.isVisible())
      return null;
    return e ? this.getChildrenPaintBBox(e, null, i) : t ? this._calculatePaintBBox(t, i) : u.prototype.getPaintBBox.call(this, null, t, i);
  }, Q.prototype.hitTest = function (e, t, i, n, r, o, a, s, l, h, A, c) {
    var p = this.getActivePage();
    if (!A && p)
      return c ? u.prototype.hitTest.call(p.getAnnotations(), e, t, i, n, r, o, a, s, l, h) : u.prototype.hitTest.call(p, e, t, i, n, r, o, a, s, l, h);
    var d = this.getPaintBBox(A);
    if (!d || d.isEmpty())
      return null;
    if (t && (d = t.mapRect(d)), B.pagesCanOverlap && !d.expanded(o, o, o, o).containsPoint(e))
      return null;
    if (!B.pagesCanOverlap && !d.containsPoint(e))
      return null;
    var g = null, f = t ? t.inverted().mapPoint(e) : e, _ = new m(f.getX() - o / 2, f.getY() - o / 2, o, o), v = this.retrieveChildrenInPaintBBox(_, D.RETRIEVE_MODE_INTERSECT);
    if (B.pagesCanOverlap) {
      if (v && null != v[0] && v.length > 1) {
        var b = v.indexOf(p);
        b >= 0 && v.splice(b, 1), v = v.sort(function (e, t) {
          return t.getElementIndex() - e.getElementIndex();
        }), b >= 0 && v.unshift(p);
      }
    }
    if (0 == v.length && (v = null), v) {
      for (var C = 0; C < v.length; C++) {
        var w, E = v[C], x = E.getPosition(A), P = null;
        if (P = t ? t.preMultiplied(new y(1, 0, 0, 1, x.getX(), x.getY())) : new y(1, 0, 0, 1, x.getX(), x.getY()), c)
          return E.getAnnotations().hitTest(e, P, i, n, r, o, a, s, l, h);
        if (w = E.hitTest(e, P, i, n, r, o, a, s, l, h)) {
          g = (g || []).concat(w || []);
          break;
        }
      }
      !g && B.pagesCanOverlap && (g = v && v.length ? [v[0]] : null);
    }
    return g;
  }, Q.prototype.getCollisions = function (e, t, i, n, r, o, a) {
    var s = this.getActivePage(), l = [];
    if (a)
      return [];
    if (!o && s)
      return u.prototype.getCollisions.call(this.getActivePage(), e, t, i, n, r);
    if (o) {
      var h = t & u.CollisionFlag.PaintBBox, A = D.RETRIEVE_MODE_INTERSECT, c = k.calculateBounds(e, true), p = h ? this.retrieveChildrenInPaintBBox(c, A) : this.retrieveChildrenInGeometryBBox(c, A);
      p && p.forEach(function (a) {
        var s = a.getPosition(o), h = new y(1, 0, 0, 1, -s.getX(), -s.getY());
        l = l.concat(u.prototype.getCollisions.call(a, new _(e, h), t, i, n, r));
      });
    }
    return l;
  }, Q.prototype._getAccelElementOffset = function (e) {
    return e instanceof g ? e.getPosition(true) : null;
  }, Q.prototype.getGeometryBBox = function (e, t) {
    return t ? this.getChildrenGeometryBBox(e, t) : u.prototype.getGeometryBBox.call(this, e);
  }, Q.prototype._calculateChildrenPaintBBox = function (e, t, i) {
    if (!i && !this.isVisible())
      return null;
    for (var n = null, r = this.getFirstChild(); null != r; r = r.getNext())
      if (r instanceof g) {
        var o = r.getPaintBBox(null, t, i);
        if (o) {
          if (e) {
            var a = r.getPosition(true);
            0 === a.getX() && 0 === a.getY() || (o = o.translated(a.getX(), a.getY()));
          }
          n = n ? n.united(o) : o;
        }
      }
    return n || new m(0, 0, 0, 0);
  }, Q.prototype.getChildrenGeometryBBox = function (e, t) {
    if (!e && !this.isVisible())
      return null;
    for (var require = null, n = this.getFirstChild(); null != n; n = n.getNext())
      if (n instanceof u) {
        var r = n.getGeometryBBox(e);
        if (r && (r.getHeight() > 0 || r.getWidth() > 0)) {
          if (t) {
            var o = n.getPosition(true);
            0 === o.getX() && 0 === o.getY() || (r = r.translated(o.getX(), o.getY()));
          }
          require = require ? require.united(r) : r;
        }
      }
    return require || null;
  }, Q.prototype.insertChild = function (e, t) {
    return e instanceof a ? (this._isRestoring && (this._styles && this._styles.getParent() === this && (this.removeChild(this._styles), this._styles = e), e.repairSdf()), r.Container.prototype.insertChild.call(this, e, t)) : e instanceof x ? r.Container.prototype.insertChild.call(this, e, t) : e instanceof g ? (r.Container.prototype.insertChild.call(this, e, t), this.isEvenOddMaster() ? this.reassignMasterPages() : this.$mpg && this._fixSingleMpg(e, this.$mpg), void (this.getActivePage() || this.setActivePage(e))) : (this._activePage || (this._activePage = this.insertPage(), this.isEvenOddMaster() && this.reassignMasterPages(), this._activePage.setFlag(r.Flag.Active)), t instanceof g && (t = null), void this._activePage.insertChild(e, t));
  }, Q.prototype.renameClone = function (e, t) {
    if (e instanceof g && t instanceof g) {
      var require, n = e.getProperty("name") || "", r = /\s([0-9]+)(?:\.([0-9]+))?(?:\.([0-9]+))?$/, o = n.match(r), a = [], s = n.slice(0, o ? o.index : n.length);
      a = o ? o[3] ? [
        parseInt(o[1]),
        parseInt(o[2]),
        parseInt(o[3]) + 1
      ] : o[2] ? [
        parseInt(o[1]),
        parseInt(o[2]),
        1
      ] : [
        parseInt(o[1]),
        1
      ] : [1];
      this.iteratePages(function (i) {
        if (i !== e && i !== t) {
          var n = i.$name || "", o = n.match(r);
          n.slice(0, o ? o.index : n.length) === s && o && (1 === a.length ? a[0] = Math.max(a[0], parseInt(o[1]) + 1) : 2 === a.length ? a[0] !== parseInt(o[1]) || Number.isNaN(parseInt(o[2])) || (a[1] = Math.max(a[1], parseInt(o[2]) + 1)) : 3 === a.length && (a[0] !== parseInt(o[1]) || a[1] !== parseInt(o[2]) || Number.isNaN(parseInt(o[3])) || (a[2] = Math.max(a[2], parseInt(o[3]) + 1))));
        }
      }, true), require = s + " " + a.join("."), t.setProperty("name", require);
    }
  }, Q.prototype.removeChild = function (e) {
    r.Container.prototype.removeChild.call(this, e), e instanceof g && this.isEvenOddMaster() && this.reassignMasterPages();
  }, Q.prototype.getProperty = function (e, t, i, n) {
    var o = this.getActivePage();
    return Q.inheritedPageProps.indexOf(e) >= 0 ? o.getProperty(e, t, i, n) : r.Properties.prototype.getProperty.call(this, e, t, i, n);
  }, Q.prototype.isEvenOddMaster = function () {
    return !(!this.$ompg && !this.$empg);
  }, Q.prototype.reassignMasterPages = function () {
    if (!this.$rb && !this._isRestoring)
      for (var exports = true, module = this.getFirstChild(); null != module; module = module.getNext())
        if (module instanceof g) {
          var require = exports ? this.$ompg ? this.$ompg : this.$mpg : this.$empg ? this.$empg : this.$mpg;
          this._fixSingleMpg(module, require), exports = !exports;
        }
  }, Q.prototype._fixSingleMpg = function (e, t) {
    if (!this.$rb && !this._isRestoring) {
      var require = e.getProperty("plkt");
      if (!(require && require & c.ProgramLck.NoEdit))
        !!t && this.isLinked(e, t) || (this.visitReferences(e, function (t) {
          t instanceof g && this.unlink(t, e);
        }.bind(this)), t && this.link(t, e));
    }
  }, Q.prototype._refreshLinks = function () {
    if (!this.$rb && this._linksLookup) {
      var exports = this._temporarilyDisabledLinks;
      if (exports)
        for (var module in exports) {
          var require = this.$_links[module];
          if (require)
            exports[module].forEach(function (e) {
              require.indexOf(e) < 0 && require.push(e);
            });
          else
            this.$_links[module] = exports[module];
        }
      var n = null, r = this;
      for (var module in this.$_links) {
        var a = this._workspace.getReference(module), s = [], l = [], h = [];
        this._linksLookup.hasOwnProperty(module) && (h = this._linksLookup[module], l = h.map(function (e) {
          return e.getSceneId();
        })), (s = this.$_links[module]).forEach(function (e) {
          if (l.indexOf(e) < 0) {
            var module = c()[e];
            module && a && module.hasEventListeners(f) && module.trigger(new f(a, module, true));
          }
        }.bind(this)), h.forEach(function (e) {
          (!e._scene || s.indexOf(e.getSceneId()) < 0) && a && e.hasEventListeners(f) && e.trigger(new f(a, e, false));
        }.bind(this)), this._linksLookup[module] = s.map(function (e) {
          var t = c()[e];
          if (null === t && a) {
            var require = h[l.indexOf(e)];
            require && require.hasEventListeners(f) && require.trigger(new f(a, require, false));
          }
          return t;
        }.bind(this)).filter(function (e) {
          return !!e;
        });
      }
      for (var module in this._linksLookup)
        if (this.$_links.hasOwnProperty(module)) {
          (A = this._linksLookup[module]) && A.length || delete this._linksLookup[module];
        } else {
          var A = this._linksLookup[module];
          (a = this._workspace.getReference(module)) && A.forEach(function (e) {
            e.hasEventListeners(f) && e.trigger(new f(a, e, false));
          }.bind(this)), delete this._linksLookup[module];
        }
      this._temporarilyDisabledLinks = this._cleanupLinks(this.$_links);
    }
    function c() {
      return n || (n = {}, r.acceptChildren(function (e) {
        if (e instanceof o) {
          var module = e.getSceneId();
          module && (n[module] = e);
        }
      })), n;
    }
  }, Q.prototype._checkLinksSanity = function () {
    var e = this.$_links, t = this._linksLookup;
    if (!t)
      return true;
    for (var require in e) {
      if (!t.hasOwnProperty(require))
        return false;
      var n = e[require], r = t[require];
      if (!n || !r)
        return false;
      if (!n.length)
        return false;
      if (n.length !== r.length)
        return console.warn("Links: prop len != dyn len"), false;
      for (var a = r.map(function (e) {
            return e && e instanceof o ? e.getSceneId() : null;
          }), s = 0; s < n.length; s++) {
        var l = n[s];
        if (!l)
          return false;
        if (a.indexOf(l) < 0)
          return false;
      }
    }
    for (var require in t)
      if (!e.hasOwnProperty(require))
        return false;
    return true;
  }, Q.prototype._handleChange = function (e, t) {
    if (e === r._Change.PrepareRestore) {
      this._activePage && (this.removeChild(this.getActivePage()), this._activePage = null), t.blob.hasOwnProperty("dictionary") ? this._dictionary.deserialize(t.blob.dictionary) : this._pre310 = true, this._symbolDictionary.deserialize(t.blob.symbolDictionary);
      var a = t.blob.cst;
      a && a instanceof Array && (this.$cst = a), this._isRestoring = true;
    } else if (e === r._Change.Store)
      this.storeProperties(t.blob, Q.MetaProperties, function (e, n) {
        if ("__ids" === e) {
          var r = [];
          return this.acceptChildren(function (e) {
            e instanceof o && r.push(e.getSceneId());
          }), r;
        }
        if ("lmd" === e)
          return t.options && t.options.save ? (this.$lmd = isNaN(t.options.lastModifiedDate) ? Date.now() : t.options.lastModifiedDate, this.$lmd) : null;
        if ("cfs" === e || "cid" === e) {
          if (t.options && t.options.singleton)
            return null;
        } else if ("cst" === e) {
          if (require(70) /* GText */.dontStorePaths)
            return null;
        } else if ("pi" === e) {
          if (t.options && t.options.save)
            return this._activePage ? this.getIndexOfChild(this._activePage) : 0;
        }
        return n;
      }.bind(this)), this.storeProperties(t.blob, Q.GeometryProperties), this.storeProperties(t.blob, Q.VisualProperties, function (e, t) {
        return "lbc" === e && t ? n.serialize(t) : t;
      }), t.blob.dictionary = this._dictionary.serialize(), t.blob.symbolDictionary = this._symbolDictionary.serialize(), null != this.$mpg && (t.blob.mpg = r.serialize(this.$mpg)), null != this.$empg && (t.blob.empg = r.serialize(this.$empg)), null != this.$ompg && (t.blob.ompg = r.serialize(this.$ompg));
    else if (e === r._Change.Restore) {
      if (t.blob.hasOwnProperty("$")) {
        var s = t.blob.$, l = false;
        if (s.length)
          for (var h = 0; h < s.length; ++h) {
            var A = s[h];
            r._nameToNodeClassMap[A["@"]].toString() === g.toString() && (l = true);
          }
        l || (t.blob.hasOwnProperty("h") || (t.blob.h = 0), t.blob.hasOwnProperty("w") || (t.blob.w = 0));
      }
      this.restoreProperties(t.blob, Q.MetaProperties), this.restoreProperties(t.blob, Q.GeometryProperties);
      var c = Q.inheritedPageProps.reduce(function (e, i) {
        return t.blob.hasOwnProperty(i) && (e[i] = null), e;
      }, Q.VisualProperties);
      if (this.restoreProperties(t.blob, c, function (e, t) {
          return "bck" !== e && "lbc" !== e || !t ? t : n.deserialize(t);
        }), t.blob.hasOwnProperty("mpg"))
        (M = r.deserialize(t.blob.mpg)) && M instanceof g && this.setProperty("mpg", M);
      if (t.blob.hasOwnProperty("ompg"))
        (N = r.deserialize(t.blob.ompg)) && N instanceof g && this.setProperty("ompg", N);
      if (t.blob.hasOwnProperty("empg"))
        (U = r.deserialize(t.blob.empg)) && U instanceof g && this.setProperty("empg", U);
      this._recreateLinksLookup(), this._isRestoring = false;
      var p = this.getChildByIndex(this.getProperty("pi"));
      this.setActivePage(p), B.pagesPerRow || this.iteratePages(function (e) {
        if (!e.$off) {
          var t = e.getPosition(true, true, true);
          e.$off = new y().translated(t.getX(), t.getY());
        }
      }, true), this._pre310 = false;
    } else if (e === r._Change.BeforePropertiesChange) {
      [
        "gaw",
        "gx",
        "gy"
      ].forEach(function (e) {
        var i = t.properties.indexOf(e);
        i >= 0 && t.values[i] < Q.MIN_GRID_SIZE && (t.values[i] = Q.MIN_GRID_SIZE);
      });
      var d = t.properties.indexOf("gm");
      if (d >= 0) {
        var f = t.values[d];
        if (this.$lgm = f || this.$gm, f === Q.GridMode.Axonometric && this.$gm !== Q.GridMode.Axonometric) {
          var m = Q.AXONO_ANGLE1, _ = Q.AXONO_ANGLE2, v = Q.AXONO_GX, b = t.properties.indexOf("ga1"), C = t.properties.indexOf("ga2"), w = t.properties.indexOf("gaw");
          b < 0 && !this.$ga1 ? (t.properties.push("ga1"), t.values.push(Q.AXONO_ANGLE1)) : m = t.values[b], C < 0 && !this.$ga2 ? (t.properties.push("ga2"), t.values.push(Q.AXONO_ANGLE2)) : _ = t.values[C], !this.$gaw && w < 0 ? (t.properties.push("gaw"), t.values.push(Q.AXONO_GX)) : w >= 0 && (v = t.values[w]);
          var E = this._getAxonoGYVal(v, m, _), x = t.properties.indexOf("gah");
          null !== E && (x < 0 && this.$gah !== E ? (t.properties.push("gah"), t.values.push(E)) : x >= 0 && !T.isEqualEps(E, t.values[x], 1e-9) && (t.values[x] = E));
        } else
          f !== Q.GridMode.Axonometric && this.$gm === Q.GridMode.Axonometric && (this.$gy || (t.properties.push("gy"), t.values.push(this.$gx)));
      } else if (this.$gm === Q.GridMode.Axonometric && (t.properties.indexOf("ga1") >= 0 || t.properties.indexOf("ga2") >= 0 || t.properties.indexOf("gaw") >= 0)) {
        m = (b = t.properties.indexOf("ga1")) >= 0 ? t.values[b] : this.$ga1, _ = (C = t.properties.indexOf("ga2")) >= 0 ? t.values[C] : this.$ga2, v = (w = t.properties.indexOf("gaw")) >= 0 ? t.values[w] : this.$gaw, E = this._getAxonoGYVal(v, m, _), x = t.properties.indexOf("gah");
        null !== E && (x < 0 && this.$gah !== E ? (t.properties.push("gah"), t.values.push(E)) : x >= 0 && !T.isEqualEps(E, t.values[x], 1e-9) && (t.values[x] = E));
      }
      var P = [];
      if (t.properties.forEach(function (e) {
          P.push(Q.inheritedPageProps.indexOf(e));
        }), P.some(function (e) {
          return e >= 0;
        })) {
        var S = [], I = [];
        for (h = t.properties.length - 1; h >= 0; h--)
          P[h] >= 0 && (S = S.concat(t.properties.splice(h, 1)), I = I.concat(t.values.splice(h, 1)));
        this.getActivePage() && this.getActivePage().setProperties(S, I);
      }
      if ((R = t.properties.indexOf("_links")) >= 0 && this.$rb && (t.values.splice(R, 1), t.properties.splice(R, 1)), t.properties.indexOf("mpg") >= 0)
        (M = this.getProperty("mpg")) && M._detachFromParent(this);
      if (t.properties.indexOf("ompg") >= 0)
        (N = this.getProperty("ompg")) && N._detachFromParent(this);
      if (t.properties.indexOf("empg") >= 0)
        (U = this.getProperty("empg")) && U._detachFromParent(this);
    } else if (e === r._Change.AfterPropertiesChange) {
      if (t.properties.indexOf("mpg") >= 0)
        (M = this.getProperty("mpg")) && M._attachToParent(this);
      if (t.properties.indexOf("ompg") >= 0)
        (N = this.getProperty("ompg")) && N._attachToParent(this);
      if (t.properties.indexOf("empg") >= 0)
        (U = this.getProperty("empg")) && U._attachToParent(this);
      var F = t.properties.indexOf("ms"), R = t.properties.indexOf("_links");
      if (F >= 0 && (this.refreshPagesPositions(), mpIdx >= 0 && this._activePage && (this.getActivePage().removeFlag(r.Flag.Selected), this.getActivePage().removeFlag(r.Flag.Highlighted), this._invalidateArea(null, this.getActivePage()))), R >= 0 && this._checkSanityIfNecessary(), this._styles)
        t.properties.indexOf("cm") >= 0 && this._styles.setColorMode(this.getProperty("cm") || G.ColorModes.RGB);
    } else if (e === r._Change.BeforeChildRemove)
      this.isFixedSized() && (this._invalidateFrom = this.getIndexOfChild(t), this._invalidateArea(this._getInvalidationArea(this._invalidateFrom), null));
    else if (e === r._Change.AfterChildInsert || e === r._Change.AfterChildRemove) {
      var D;
      if (this._checkSanityIfNecessary(), this.isFixedSized())
        e === r._Change.AfterChildRemove ? (D = this._invalidateFrom, this._getInvalidationArea(D)) : (D = this.getIndexOfChild(t), this._getInvalidationArea(D));
      if (t instanceof g && !t.$off && !B.pagesPerRow) {
        var k = t.getPosition(true, true, true);
        t.setProperty("off", new y().translated(k.getX(), k.getY()));
      }
    } else if (e == u._Change.ChildGeometryUpdate)
      t && t[0] instanceof g && (t[1] = true, this._invalidateArea(t[2] || this._getInvalidationArea(this.getIndexOfChild(t[0]))));
    else if (e === r._Change.WorkspaceAttached || e === r._Change.WorkspaceDetach) {
      var M, N, U;
      (M = this.getProperty("mpg")) && M._setWorkspace(e === r._Change.WorkspaceDetach ? null : this._workspace), (N = this.getProperty("ompg")) && N._setWorkspace(e === r._Change.WorkspaceDetach ? null : this._workspace), (U = this.getProperty("empg")) && U._setWorkspace(e === r._Change.WorkspaceDetach ? null : this._workspace);
    }
    this._handleGeometryChangeForProperties(e, t, Q.GeometryProperties), this._handleVisualChangeForProperties(e, t, Q.VisualProperties), u.prototype._handleChange.call(this, e, t);
  }, Q.prototype._checkSanityIfNecessary = function () {
    if (!this._isRestoring && !this.$rb && (this._refreshLinks(), !this._callingPendingActions)) {
      var exports = this._linksAreSane;
      this._linksAreSane = this._checkLinksSanity(), this._linksAreSane ? (this._callingPendingActions = true, this._pendingActions.forEach(function (e) {
        e.call(this);
      }.bind(this)), this._pendingActions = [], this._callingPendingActions = false, exports || console.log("Links became sane.")) : console.warn("links are not sane!");
    }
  }, Q.prototype._getInvalidationArea = function (e, t) {
    var i = false, n = null, r = [];
    return e instanceof Array ? e.forEach(function (e) {
      e.$vis && r.push(e);
    }) : this.iteratePages(function (t) {
      e === this.getIndexOfChild(t) && (i = true), i && r.push(t);
    }.bind(this), false), r.forEach(function (e) {
      var i = e.getPaintBBox(), r = e.getPosition(!t);
      i = i.translated(r.getX(), r.getY());
      var o = this.getLabelBBox(e.getScaleLabelFactor()).getHeight();
      if (n = n ? n.united(i.expanded(0, o, 0, 0)) : i.expanded(0, o, 0, 0), t)
        return false;
    }.bind(this)), n;
  }, Q.prototype._getAxonoGYVal = function (e, t, i) {
    var n = null;
    return t != i && t >= 0 && t < Math.PI / 2 && i <= 0 && i > -Math.PI / 2 && (n = e * (Math.tan(t) + Math.tan(-i))), n;
  }, Q.prototype.getSwatches = function () {
    if (this._swatches)
      return this._swatches;
    for (var exports = this.getFirstChild(); null !== exports; exports = exports.getNext())
      if (exports instanceof x) {
        this._swatches = exports;
        break;
      }
    this._swatches || (this._swatches = new x(), this.appendChild(this._swatches));
    var t = this.getProperty("swatches", true);
    if (t) {
      for (var require = JSON.parse(t), r = 0; r < require.length; ++r) {
        var o = new P(n.deserialize(require[r]));
        this._swatches.appendChild(o);
      }
      this.setProperty("swatches", null, true);
    }
    return this._swatches;
  }, Q.prototype.getTransformSettings = function () {
    return this._trfSettings;
  }, Q.prototype.setBorderScale = function (e) {
    this._trfSettings.borderScale = e;
  }, Q.prototype.setCornersScale = function (e) {
    this._trfSettings.scaleCorners = e;
  }, Q.prototype.addDestroyable = function (e) {
    e && (e instanceof F ? this._destroyables.push(e) : e instanceof F.RendererCanvas ? this._destroyables.push(e.parent) : e.hasMixin(I) && this._destroyables.push(e));
  }, Q.prototype.addDestroyableIfAbsent = function (e) {
    -1 === this._destroyables.indexOf(e) && this.addDestroyable(e);
  }, Q.prototype.increaseReferenceCounter = function () {
    this._referenceCounter++;
  }, Q.prototype.decreaseReferenceCounter = function () {
    if (0 !== this._referenceCounter && (this._referenceCounter = this._referenceCounter - 1, 0 === this._referenceCounter)) {
      for (var exports = 0; exports < this._destroyables.length; exports++) {
        var module = this._destroyables[exports];
        module instanceof F ? R.destroy(module) : module.hasMixin(I) && module.destroy();
      }
      this._destroyables = [];
    }
  }, Q.prototype.getSymbolDictionary = function () {
    return this._symbolDictionary;
  }, Q.prototype.destroy = function (e) {
    if (e) {
      for (var module, require = 0; require < e.length; require++) {
        module = e[require];
        var n = this._destroyables.indexOf(module);
        n >= 0 && (this._destroyables[n] = null), module instanceof F ? R.destroy(module) : module.hasMixin(I) && module.destroy();
      }
      this._destroyables = this._destroyables.filter(function (e) {
        return !!e;
      });
    }
  }, exports.exports = Q;
}
