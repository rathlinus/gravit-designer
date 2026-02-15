/**
 * Module 95 - GImage
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
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(0) /* GObject */, a = require(17) /* GRGBColor */, s = require(68) /* GColor */, l = require(56) /* GShape */, h = require(72) /* GEvent */, A = require(6) /* GRect */, c = require(12) /* GMath */, p = require(73) /* GRectangle */, u = require(14) /* GPaintCanvas */, d = require(22) /* GElement */, g = require(7) /* GTransform */, f = require(45) /* GPathBase */, m = require(112) /* module */, y = require(11) /* GUtil */, _ = require(932) /* module */, v = require(659) /* module */, b = require(227) /* GDictionary */, C = require(9) /* GLocale */, w = require(64) /* GPlatform */, E = require(103) /* module */, B = require(118) /* module */;
  require(111) /* GRendererCtx */;
  function x() {
    p.call(this), this._convertStatus = x.ConvertStatus.None, this._paintSharp = false, this._setDefaultProperties(x.MetaProperties, x.VisualProperties, x.GeometryProperties), this.setProperty("csc", true), this._updateImage();
  }
  n.inheritAndMix("image", x, p, [B]), x.options = { renderBox: true }, x.MetaProperties = {
    iw: null,
    ih: null,
    tmpUrl: null,
    storedUrl: null
  }, x.GeometryProperties = {
    px: 0,
    py: 0,
    pw: null,
    ph: null,
    itrf: null
  }, x.VisualProperties = {
    url: null,
    dblMode: false,
    ipfc: true
  }, x.Type = {
    PNG: "png",
    JPEG: "jpeg",
    GIF: "gif",
    BMP: "bmp"
  }, x._BOM = {
    png: [
      137,
      80,
      78,
      71,
      13,
      10,
      26,
      10
    ],
    jpeg: [
      255,
      216,
      255
    ],
    gif: [
      71,
      73,
      70,
      56
    ],
    bmp: [
      66,
      77
    ]
  }, x.ImageStatus = {
    Loaded: 0,
    Resolving: 1,
    Loading: 2,
    Delayed: 3,
    Error: 10
  }, x.ConvertStatus = {
    None: -1,
    Checking: 0,
    Converting: 1,
    Converted: 2,
    Failed: 3
  }, x.NO_IMAGE_WIDTH = 100, x.NO_IMAGE_HEIGHT = 100, x.NO_IMAGE_BACKGROUND = new a([
    240,
    240,
    240
  ]), x.NO_IMAGE_ERROR_STROKE = new a([
    255,
    0,
    0
  ]), x.StatusEvent = function (e, t) {
    this.image = e, this.status = t;
  }, o.inherit(x.StatusEvent, h), x.StatusEvent.prototype.image = null, x.StatusEvent.prototype.status = null, x.StatusEvent.prototype.toString = function () {
    return "[Event GImage.StatusEvent]";
  }, x.ConvertStatusEvent = function (e, t) {
    this.image = e, this.status = t;
  }, o.inherit(x.ConvertStatusEvent, h), x.ConvertStatusEvent.prototype.image = null, x.ConvertStatusEvent.prototype.status = null, x.ConvertStatusEvent.prototype.toString = function () {
    return "[Event GImage.ConvertStatusEvent]";
  }, x.prototype._status = null, x.prototype.getNodeNameTranslated = function () {
    return C.getValue("GImage", "name", this.getNodeName());
  }, x.prototype._convertStatus = x.ConvertStatus.None, x.prototype._type = null, x.prototype._image = null, x.prototype._imageCanvas = null, x.prototype._imageCanvasOffscreen = null, x.prototype._vertexIterator = 0, x.prototype._updatingUrl = false, x.prototype.getStatus = function () {
    return this._status;
  }, x.prototype.getConvertStatus = function () {
    return this._convertStatus;
  }, x.prototype.getImage = function () {
    return this._image;
  }, x.prototype.getType = function () {
    return this._type;
  }, x.prototype.isJPEG = function () {
    return !!this._type && this._type === x.Type.JPEG;
  }, x.prototype.getImageCanvas = function () {
    if (!this._imageCanvas && this._image) {
      var exports = document.createElement("canvas");
      return exports.width = this._image.naturalWidth, exports.height = this._image.naturalHeight, exports.getContext("2d").drawImage(this._image, 0, 0), exports;
    }
    return this._imageCanvas;
  }, x.prototype.validateInsertion = function (e, t) {
    return "imagegrid.images" === n.getName(e) || p.prototype.validateInsertion.call(this, e, t);
  }, x.prototype._calculateGeometryBBox = function (e) {
    var t = null;
    if (this._status === x.ImageStatus.Loaded)
      t = p.prototype._calculateGeometryBBox.call(this, e);
    else {
      var require = new A(this.$px, this.$py, this.$pw ? this.$pw : this.getWidth(), this.$ph ? this.$ph : this.getHeight());
      t = this.$trf ? this.$trf.mapRect(require) : require;
    }
    if (this.$dblMode) {
      var n = new A(0, 0, this.getWidth(), this.getHeight());
      this.$itrf && (n = this.$itrf.mapRect(n)), n && t && (t = t.united(n));
    }
    return t;
  }, x.prototype.getImageTransform = function () {
    return this.$itrf;
  }, x.prototype.setImageTransform = function (e, t, i) {
    this.setProperties(["itrf"], [e], false, t, i);
  }, x.prototype.transformImage = function (e) {
    this.$dblMode && e && !e.isIdentity() && this.setProperties(["itrf"], [this.$itrf ? this.$itrf.multiplied(e) : e]);
  }, x.prototype.preTransformImage = function (e) {
    this.$dblMode && e && !e.isIdentity() && this.setProperties(["itrf"], [this.$itrf ? e.multiplied(this.$itrf) : e]);
  }, x.prototype.transform = function (e, t, i) {
    this.$dblMode ? p.prototype.transform.call(this, e, t) : e && !e.isIdentity() && (this._layoutTransform = e, this._relayoutNow = !this._relayout, this._relayout = true, this.transformStyledCorners(this, e), this.setProperties([
      "trf",
      "itrf"
    ], [
      this.$trf ? this.$trf.multiplied(e) : e,
      this.$itrf ? this.$itrf.multiplied(e) : e
    ]), d.Transform.prototype.transform.call(this, e, t, i), this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null));
  }, x.prototype.assignPreTransformFrom = function (e, t) {
    if (t instanceof x) {
      var require = t.getTransform() || new g(), n = t.getImageTransform() || new g();
      this.setProperties([
        "trf",
        "itrf"
      ], [
        e.multiplied(require),
        e.multiplied(n)
      ]);
    } else
      d.Transform.prototype.assignPreTransformFrom.call(this, e, t);
  }, x.prototype.preTransform = function (e, t, i) {
    if (this.$dblMode)
      p.prototype.preTransform.call(this, e, false);
    else if (e && !e.isIdentity()) {
      var n = this.$trf && this.$trf.invertible() ? this.$trf.inverted().multiplied(e.multiplied(this.$trf)) : e;
      this.transformStyledCorners(this, n), this._layoutTransform = n, this._relayoutNow = !this._relayout, this._relayout = true, this.setProperties([
        "trf",
        "itrf"
      ], [
        this.$trf ? e.multiplied(this.$trf) : e,
        this.$itrf ? this.$itrf.multiplied(n) : n
      ]), d.Transform.prototype.preTransform.call(this, e, t, i), this._relayoutNow && (this._layoutAnchorContents(null, null, this._layoutTransform), this._layoutTransform = null, this._relayoutNow = false);
    }
  }, x.prototype.setBounds = function (e, t, i, n) {
    if (!this.$dblMode) {
      var r = i > d.Transform.MinimalDimention ? i : d.Transform.MinimalDimention, o = n > d.Transform.MinimalDimention ? n : d.Transform.MinimalDimention, a = this.getGeometryBBox(), s = a.getWidth(), l = a.getHeight(), h = s > 0 ? r / s : 0, A = l > 0 ? o / l : 0, c = new g().translated(-a.getX(), -a.getY()).scaled(h, A).translated(e, t);
      c.isIdentity() || this.setProperties([
        "trf",
        "itrf"
      ], [
        this.$trf ? this.$trf.multiplied(c) : c,
        this.$itrf ? this.$itrf.multiplied(c) : c
      ]);
    }
  }, x.prototype.setTransform = function (e) {
    this.setProperties([
      "trf",
      "itrf"
    ], [
      e,
      e
    ]);
  }, x.prototype._detailHitTest = function (e, t, i, n) {
    var r = null;
    if (this._imageCanvas) {
      var o = new g();
      this.$itrf && (o = o.multiplied(this.$itrf)), t && (o = o.multiplied(t));
      var a = o.inverted().mapPoint(e), s = a.getX(), l = a.getY();
      if (!isFinite(s) || !isFinite(l))
        return null;
      for (var h, A, c, u = 1 + 2 * (i = Math.floor(i + 0.5 * t.getScaleFactor())), d = this._imageCanvas.getContext("2d").getImageData(s - i, l - i, u, u), f = d ? d.data : [
            0,
            0,
            0
          ], y = Number.MAX_VALUE, _ = NaN, v = 3; v < f.length; v += 4)
        0 !== f[v] && (h = (i - (A = (v >> 2) % u)) * (i - A) + (i - (c = (v >> 2) / u)) * (i - c)) < y && (y = h, _ = v);
      if (Math.sqrt(y) > i)
        return null;
      r = f.slice(_ - 3, _ + 1);
    } else
      this._status === x.ImageStatus.Loaded && this._image && (r = [
        0,
        0,
        0,
        255
      ]);
    var b = p.prototype._detailHitTest.call(this, e, t, i, this.$dblMode || r || n);
    return r && (b || this.$dblMode) ? new m(this, { pixel: r }) : b;
  }, x.prototype._handleChange = function (e, t) {
    e === n._Change.Store ? (this.storeProperties(t.blob, x.VisualProperties, function (e, t) {
      return ("dblMode" !== e || !t) && t;
    }), this.storeProperties(t.blob, x.MetaProperties, function (e, i) {
      return "tmpUrl" !== e && "storedUrl" !== e || !t.options.save ? i : null;
    }), this.storeProperties(t.blob, x.GeometryProperties, function (e, t) {
      return "itrf" === e && t ? g.serialize(t) : t;
    }), this.$ipfc && (t.blob.ipfc = true)) : e == n._Change.BeforePropertiesChange ? t.properties.indexOf("url") >= 0 && this._scene && this._scene.getDictionary().removeEntry(this.$url) : e == n._Change.AfterPropertiesChange ? (t.properties.indexOf("tmpUrl") >= 0 && this._updateTemporaryImage(), t.properties.indexOf("url") >= 0 && !this._updatingUrl && (this._updatingUrl = true, this.$storedUrl = null, this._updateUrl(), this._updateImage(), this._updatingUrl = false), (t.properties.indexOf("px") >= 0 || t.properties.indexOf("py") >= 0 || t.properties.indexOf("pw") >= 0 || t.properties.indexOf("ph") >= 0) && this._updateImageRect(this.$px, this.$py, this.$pw ? this.$pw : this.getWidth(), this.$ph ? this.$ph : this.getHeight())) : e !== r._Change.SceneAttached && e !== n._Change.WorkspaceAttached || (this._updatingUrl = true, this._updateUrl(), this._scene && this._scene.addDestroyable(this), this._workspace && this._scene && this._status === x.ImageStatus.Delayed && this._updateImage(), this._updatingUrl = false), p.prototype._handleChange.call(this, e, t), this._handleGeometryChangeForProperties(e, t, x.GeometryProperties), this._handleGeometryChangeForProperties(e, t, x.VisualProperties), e === n._Change.Restore && (this.restoreProperties(t.blob, x.VisualProperties), this.restoreProperties(t.blob, x.GeometryProperties, function (e, t) {
      return "itrf" === e && t ? g.deserialize(t) : t;
    }), this.restoreProperties(t.blob, x.MetaProperties), this.setProperty("csc", true), t.blob.hasOwnProperty("ipfc") || this.setProperty("ipfc", false), !this.$trf || this.$itrf || this.$pw || this.$ph || this.setProperties(["itrf"], [this.$trf]), this._updatingUrl = true, this._updateUrl(), this._updateImage(), this._updatingUrl = false);
  }, x.prototype._updateUrl = function () {
    if (this._scene) {
      var exports = this._scene.getDictionary().getValue(this.$url);
      if (this.$storedUrl ? exports ? exports !== this.$storedUrl && (b.isDictionary(exports) ? this.$storedUrl = exports : exports = this.$storedUrl) : this.$url = this.$storedUrl : this.$storedUrl = exports, !b.isDictionary(this.$url)) {
        var module = this.$url;
        if (this._scene.getDictionary().getEntries().some(function (e) {
            return e.value === module;
          }))
          return;
        var require = this._scene.getDictionary().putValueIfAbsent(module);
        require && (null === exports && (this._status !== x.ImageStatus.Loaded || this._imageCanvas ? (this._imageCanvas = null, this._imageCanvasOffscreen = null) : (this._image = null, this._imageCanvasOffscreen = null)), this.setProperty("url", require.getUrl()));
      }
    }
  }, x.prototype._paintFillLayers = function (e, t, i) {
    this.$ipfc && !e.configuration.isOutline(e) && this._paintImageCanvas(e, e.canvas, null, null), y.each(i, function (i, n) {
      this._paintFill(e, t, n);
    }.bind(this)), this.$ipfc || e.configuration.isOutline(e) || this._paintImageCanvas(e, e.canvas, null, null);
  }, x.prototype._paintStyleSeparate = function (e, t, i, n, r, o) {
    this._status !== x.ImageStatus.Loaded || !this._imageCanvas && !this._image || this.hasStyleFill() || this.hasStyleBorder() || o ? l.prototype._paintStyleSeparate.call(this, e, t, i, n, r) : this._paintCompositedWithBackground(e.canvas, this._paintImageCanvas.bind(this, e));
  }, x.prototype._getProperImageCanvas = function (e) {
    if (E.isMultiThreaded(e.canvas.parent)) {
      if (this._imageCanvasOffscreen)
        return this._imageCanvasOffscreen;
      if (this._imageCanvas && E.isMultiThreaded(this._imageCanvas))
        return this._imageCanvasOffscreen = this._imageCanvas, this._imageCanvas;
      var module, require, n = this._imageCanvas || this._image;
      this._imageCanvas ? (module = this._imageCanvas.width, require = this._imageCanvas.height) : (module = this._image.naturalWidth, require = this._image.naturalHeight);
      var r = new OffscreenCanvas(module, require), o = r.getContext("2d");
      o.globalCompositeOperation = "copy", o.drawImage(n, 0, 0);
      var a = E.getRenderer(true, "2d", undefined, true, true);
      return this._imageCanvasOffscreen = a.canvas, a.canvas.$renderedBitmapSource = r, a.canvas.width = module, a.canvas.height = require, this._imageCanvasOffscreen;
    }
    return this._imageCanvas || this._image;
  }, x.prototype._paintImageCanvas = function (e, t, i, n) {
    if (this._imageCanvas || this._status === x.ImageStatus.Loaded && this._image) {
      var r = false, o = null;
      t.hasClip() && (this.$dblMode || this.$uf && (this.$tl_ct !== f.CornerType.Rounded || 0 === this.$tl_sx)) ? (t.putVertices(this), t.clipVertices(), r = true) : o = e.pushCanvas(e.canvas.createCanvas(this.getGeometryBBox(e.isIncludingInvisible())));
      var s = e.canvas.getTransform(true);
      this.$itrf && e.canvas.setTransform(s.preMultiplied(this.$itrf)), e.canvas.drawImage(this._getProperImageCanvas(e), 0, 0, false, i, n), e.canvas.setTransform(s), r ? t.resetClip() : (undefined !== e.canvas.putVertices(this) && (e.canvas.fillVertices(a.BLACK, 1, u.CompositeOperator.DestinationIn), o.drawCanvas(e.canvas)), e.canvas.finish(), e.popCanvas()), this.$dblMode && (s = t.getTransform(true), this.$itrf && t.setTransform(s.preMultiplied(this.$itrf)), t.drawImage(this._imageCanvas || this._image, 0, 0, false, i ? i / 2 : 0.5, n), t.setTransform(s));
    } else if (x.options.renderBox) {
      s = t.getTransform(true);
      this.$trf && t.setTransform(s.preMultiplied(this.$trf));
      this.getWidth(), this.getHeight();
      t.fillRect(this.$px, this.$py, this.$pw ? this.$pw : this.getWidth(), this.$ph ? this.$ph : this.getHeight(), x.NO_IMAGE_BACKGROUND), this._status === x.ImageStatus.Error && (t.strokeLine(this.$px, this.$py, this.$pw ? this.$pw : this.getWidth(), this.$ph ? this.$ph : this.getHeight(), 2, x.NO_IMAGE_ERROR_STROKE), t.strokeLine(this.$pw ? this.$pw : this.getWidth(), this.$py, this.$px, this.$ph ? this.$ph : this.getHeight(), 2, x.NO_IMAGE_ERROR_STROKE)), t.setTransform(s);
    }
  }, x.prototype.isReady = function () {
    return (this._image || this._imageCanvas) && this._status === x.ImageStatus.Loaded;
  }, x.prototype.getWidth = function () {
    return this._status === x.ImageStatus.Loaded && (this._image || this._imageCanvas) ? this._imageCanvas ? this._imageCanvas.width : this._image.naturalWidth : this.$iw ? this.$iw : x.NO_IMAGE_WIDTH;
  }, x.prototype.getHeight = function () {
    return this._status === x.ImageStatus.Loaded && (this._image || this._imageCanvas) ? this._imageCanvas ? this._imageCanvas.height : this._image.naturalHeight : this.$ih ? this.$ih : x.NO_IMAGE_HEIGHT;
  }, x.prototype._updateTemporaryImage = function () {
    if (this.$tmpUrl && this._status !== x.ImageStatus.Loaded) {
      var exports = new Image();
      exports.width = this.getWidth(), exports.height = this.getHeight(), this.$tmpUrl && this.$tmpUrl.match(/^(http|https|\/\/)/) ? exports.crossOrigin = "Anonymous" : exports.crossOrigin = null, exports.onload = function () {
        this._status !== x.ImageStatus.Loaded && 0 !== exports.naturalWidth && 0 !== exports.naturalHeight && (this._notifyChange(d._Change.PrepareGeometryUpdate), this._initImageCanvas(exports), this._updateImageRect(0, 0, exports.naturalWidth, exports.naturalHeight), this._notifyChange(d._Change.FinishGeometryUpdate));
      }.bind(this), exports.src = this.$tmpUrl;
    }
  }, x.prototype._updateImage = function () {
    this._sourceBBox = null, this._workspace && this._scene && this.$url ? (this._setStatus(x.ImageStatus.Resolving), this._workspace.resolveUrl(this.$url, this._resolvedImage.bind(this), this.getScene())) : this._setStatus(x.ImageStatus.Delayed);
  }, x.prototype.forceImageUpdate = function () {
    this.$url && 0 === this.$url.indexOf("data:") && (this._setStatus(x.ImageStatus.Resolving), this._resolvedImage(this.$url));
  }, x.prototype.getSelfCanvasUsedArea = function () {
    var e = new A(0, 0, this.getWidth(), this.getHeight());
    return this.$itrf && (e = this.$itrf.mapRect(e)), e;
  }, x.prototype._getType = function (e) {
    for (var module = new Uint8ClampedArray(e), require = Object.keys(x.Type).map(function (e) {
          return x.Type[e];
        }), n = 0; n < require.length; n++) {
      var r = x._BOM[require[n]], o = Array.from(module.slice(0, r.length));
      if (y.equals(o, r))
        return require[n];
    }
  }, x.prototype._resolvedImage = function (e) {
    var t = this._getDictImageEntry();
    if (t && t.cachedCanvas)
      this._updatedImage(t.cachedCanvas);
    else if (e)
      if (this._image && this._image.url === e)
        this._updatedImage();
      else {
        var n = /^data:.{0,255};base64,/i.exec(e);
        if (n && e.length > w.maxImgDataUrlLength)
          this._setStatus(x.ImageStatus.Error);
        else if (this.$storedUrl = e, this._setStatus(x.ImageStatus.Loading), n) {
          var r, o, a = e.substring(n.pop().length), s = 0;
          for (var l in x._BOM) {
            var h = x._BOM[l];
            s = Math.max(h.length, s);
          }
          a = a.substr(0, Math.min(2 * s, a.length));
          try {
            r = window.atob(a);
          } catch (e) {
            return void this._setStatus(x.ImageStatus.Error);
          }
          try {
            o = new Uint16Array(new ArrayBuffer(2 * r.length));
            for (var A = 0, c = r.length; A < c; A++)
              o[A] = r.charCodeAt(A);
          } catch (e) {
            return void this._setStatus(x.ImageStatus.Error);
          }
          this._type = this._getType(o), this._initImage(), this._image.src = e;
        } else {
          this._initImage(), e && e.match(/^(http|https|\/\/)/) && (this._image.crossOrigin = "Anonymous");
          var p, u = this;
          if (p = "undefined" == typeof navigator ? require(819) /* XMLHttpRequest */.XMLHttpRequest : window.XMLHttpRequest ? XMLHttpRequest : ActiveXObject("Microsoft.XMLHTTP"), 0 === e.indexOf("file://") && -1 !== e.indexOf("\\")) {
            var d = e.substr("file://".length).replace(/\\/g, "/");
            0 !== d.indexOf("/") && (d = "/" + d), e = "file://" + d;
          }
          var g = new p();
          g.responseType = "arraybuffer", g.open("GET", e, true), g.onreadystatechange = function (t) {
            if (this.readyState == this.DONE) {
              var require = t.target.response;
              u._type = u._getType(require), u._image.src = e;
            }
          }, g.send();
        }
      }
    else
      this._setStatus(x.ImageStatus.Error);
  }, x.prototype._updatedImage = function (e) {
    var t, i, n;
    if ("undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas)
      t = e.width, i = e.height, n = e;
    else {
      var r = this._getDictImageEntry();
      r && r.cachedCanvas ? (t = (n = r.cachedCanvas).width, i = n.height) : (t = this._image.naturalWidth, i = this._image.naturalHeight);
    }
    if (!n || n !== this._imageCanvas && n !== this._image) {
      if (this._notifyChange(d._Change.PrepareGeometryUpdate), 0 !== t && 0 !== i && t <= w.absoluteMaxImgLinearDimension && i <= w.absoluteMaxImgLinearDimension && t * i <= w.absoluteMaxImgAreaDots) {
        if (this.setProperties([
            "ih",
            "iw",
            "pw",
            "ph"
          ], [
            i,
            t,
            this.$pw ? this.$pw : t,
            this.$ph ? this.$ph : i
          ]), this._initImageCanvas(n || this._image), this.$pw && this.$ph && !this.$itrf && (!c.isEqualEps(this.$pw, t) || !c.isEqualEps(this.$ph, i) || !c.isEqualEps(this.$px, 0) || !c.isEqualEps(this.$py, 0))) {
          var o = this.$pw > d.Transform.MinimalDimention ? this.$pw : d.Transform.MinimalDimention, a = this.$ph > d.Transform.MinimalDimention ? this.$ph : d.Transform.MinimalDimention, s = t > 0 ? o / t : 0, l = i > 0 ? a / i : 0, h = new g().scaled(s, l).translated(this.$px, this.$py);
          h.isIdentity() || this.setProperties(["itrf"], [h]);
        }
        this._updateImageRect(this.$px, this.$py, this.$pw, this.$ph), n || this._checkColorProfile(this._image.src), this._setStatus(x.ImageStatus.Loaded), this._imageCanvas && this.destroyImage();
      } else
        this._setStatus(x.ImageStatus.Error), this.destroyImage();
      this._notifyChange(d._Change.FinishGeometryUpdate);
    }
  }, x.prototype._checkColorProfile = function (e, t) {
    if (this._type === x.Type.JPEG && this._imageCanvas) {
      var n = function (e) {
        var t = this._imageCanvas.getContext("2d"), i = t.createImageData(this._imageCanvas.width, this._imageCanvas.height);
        i.data.set(e, 0), t.putImageData(i, 0, 0), this._requestInvalidation();
      }.bind(this);
      this._setConvertStatus(x.ConvertStatus.Checking);
      var r = _.getDecoder(e);
      if (r && r.getColorSpace() === v.ColorSpace.CMYK) {
        this._setConvertStatus(x.ConvertStatus.Converting);
        var o = "assets/data/icc/";
        if ("undefined" == typeof navigator) {
          var a = require(286) /* module_286 */;
          o = "file://" + a.resolve(a.dirname(require.c[require.s].filename), o);
        }
        s.setCMYKProfile("USWebCoatedSWOPv2", o, function () {
          try {
            n(_.decodeCMYK(r)), this._setConvertStatus(x.ConvertStatus.Converted);
          } catch (e) {
            this._setConvertStatus(x.ConvertStatus.Failed);
          }
        }.bind(this));
      } else
        this._setConvertStatus(x.ConvertStatus.None);
    }
  }, x.prototype._setStatus = function (e) {
    e !== this._status && (this._status = e, this._canEventBeSent(x.StatusEvent) && this._sendEvent(new x.StatusEvent(this, this._status)));
  }, x.prototype._setConvertStatus = function (e) {
    e !== this._convertStatus && (this._convertStatus = e, this._canEventBeSent(x.ConvertStatusEvent) && this._sendEvent(new x.ConvertStatusEvent(this, this._convertStatus)));
  }, x.prototype.destroyImage = function () {
    this._image && (this._image.onload = null, this._image.onabort = null, this._image.onerror = null, this._image.src = "", this._image = null);
  }, x.prototype.destroy = function () {
    this.destroyImage(), this.$storedUrl = null, this.$tmpUrl = null, this._imageCanvasOffscreen && (E.destroy(this._imageCanvasOffscreen), this._imageCanvasOffscreen = null), this._imageCanvas = null;
  }, x.prototype._initImage = function () {
    this.destroyImage(), this._image = new Image(), this._image.onload = this._updatedImage.bind(this), this._image.onerror = this._updatedImage.bind(this), this._image.onabort = this._updatedImage.bind(this);
  }, x.prototype._getDictImageEntry = function () {
    if (this._scene && this.$url) {
      var exports = this._scene.getDictionary();
      if (exports)
        return exports.getEntry(this.$url);
    }
    return null;
  }, x.prototype._initImageCanvas = function (e) {
    if ("undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement) {
      if (e === this._imageCanvas)
        return;
      this._imageCanvas = e, this._imageCanvasOffscreen = null;
    } else {
      this._imageCanvas || (this._imageCanvas = document.createElement("canvas")), this._imageCanvas.width = e.width, this._imageCanvas.height = e.height;
      var module = this._getDictImageEntry();
      if (module) {
        if ("undefined" != typeof HTMLImageElement && module.cachedCanvas instanceof HTMLImageElement && !E.usingOffscreenCanvas())
          return this._imageCanvas = null, this._imageCanvasOffscreen = null, this._image = module.cachedCanvas, void this._resetFxCacheAndState();
        if (!this._scene.getDictionary().setCachedCanvas(module, this._imageCanvas))
          return this._scene.getDictionary().setCachedCanvas(module, e), this._imageCanvas = null, this._imageCanvasOffscreen = null, this._image = e, void this._resetFxCacheAndState();
      }
      this._imageCanvas.getContext("2d").drawImage(e, 0, 0, e.width, e.height);
    }
    this._resetFxCacheAndState();
  }, x.prototype._updateImageRect = function (e, t, i, n) {
    this._x = e, this._y = t, this._w = i, this._h = n, this.isRecordedTransaction() || this._invalidatePath();
  }, x.prototype.toFit = function (e) {
    var t = this.getWidth(), i = this.getHeight();
    if (t && i && (i *= n = this.getTransform() ? this.getTransform().getScaleFactor() : 1, (t *= n) > e.getWidth() || i > e.getHeight())) {
      var n = Math.min(e.getWidth() / t, e.getHeight() / i);
      this.transform(new g().scaled(n, n));
    }
  }, x.prototype.assignFrom = function (e) {
    e instanceof x && this.transferProperties(e, [
      x.GeometryProperties,
      x.VisualProperties,
      x.MetaProperties
    ]), p.prototype.assignFrom.call(this, e);
  }, x.prototype.toString = function () {
    return "[GImage]";
  }, exports.exports = x;
}
