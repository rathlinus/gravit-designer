/**
 * Module 139 - GTexturePattern
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
  var n = i(50), r = i(7), o = i(11), a = i(6), s = i(345), l = i(2), h = i(280), A = i(75), c = i(227), p = i(111), u = i(205);
  function d(e, t, i) {
    this._sizeMode = d.SizeMode.Auto, this._repeatMode = t || d.RepeatMode.None, this._angle = 0, this._tileSize = 1, this._mask = !1, this._invalidate = !1, this.setTexture(e);
  }
  d.UpdateEvent = function (e) {
    this.texture = e;
  }, d.prototype.texture = null, d.PositionMode = {
    Auto: "auto",
    Top: "top",
    Left: "left",
    Center: "center",
    Right: "right",
    Bottom: "bottom"
  }, d.RepeatMode = {
    Both: "repeat",
    Horizontal: "repeat-x",
    Vertical: "repeat-y",
    None: "no-repeat"
  }, d.SizeMode = {
    Auto: "auto",
    Contain: "contain",
    Cover: "cover",
    Percent: "percent",
    Length: "length"
  }, d.ScaleMode = {
    Fill: "fill",
    Fit: "fit",
    Stretch: "stretch",
    Tile: "tile"
  }, d.ScaleSettings = {
    fill: function (e) {
      e.setRepeatMode(d.RepeatMode.None), e.setSizeMode(d.SizeMode.Cover), e.setPosition(d.PositionMode.Center);
    },
    fit: function (e) {
      e.setRepeatMode(d.RepeatMode.None), e.setSizeMode(d.SizeMode.Contain), e.setPosition(d.PositionMode.Center);
    },
    stretch: function (e) {
      e.setRepeatMode(d.RepeatMode.None), e.setSizeMode(d.SizeMode.Percent), e.setPosition(d.PositionMode.Center), e.setWidth(100), e.setHeight(100);
    },
    tile: function (e) {
      e.setRepeatMode(d.RepeatMode.Both), e.setSizeMode(d.SizeMode.Auto), e.setPosition(d.PositionMode.Auto);
    }
  }, n.inheritAndMix("T", d, n, [A]), d.prototype._transform = void 0, d.prototype._url = null, d.prototype._image = null, d.prototype._node = null, d.prototype._repeatMode = d.RepeatMode.None, d.prototype._sizeMode = d.SizeMode.Auto, d.prototype._scaleMode = d.ScaleMode.Tile, d.prototype._width = null, d.prototype._height = null, d.prototype._position = d.PositionMode.Auto, d.prototype._tileSize = 1, d.prototype._mask = !1, d.prototype._angle = 0, d.prototype._scaleX = 1, d.prototype._scaleY = 1, d.prototype._cloned = !1, d.prototype._scene = null, d.prototype._storedUrl = null, d.prototype._cachedBitmap = null, d.prototype._invalidate = !1, d.equals = function (e, t) {
    if (!e && e === t)
      return !0;
    var i = !0;
    return [
      "_url",
      "_repeatMode",
      "_sizeMode",
      "_width",
      "_height",
      "_position",
      "_mask",
      "_angle",
      "_scaleMode",
      "_tileSize"
    ].forEach(function (n) {
      i = i && e[n] === t[n];
    }.bind(this)), !(!i || (e._transform || e._transform !== t._transform) && !r.equals(e._transform, t._transform) || e._node && e._node !== t._node);
  }, d.prototype.isReady = function () {
    return !!this._node || !(!this._image || 0 === this._image.naturalWidth || 0 === this._image.naturalHeight);
  }, d.prototype.setTexture = function (e) {
    this._url && this._scene && c.isDictionary(this._url) && this._scene.getDictionary().removeEntry(this._url), e && (this._invalidate = !0, this._cachedBitmap && !this._cloned && this._scene && this._cachedBitmap._canvasContext instanceof p && this._scene.addDestroyable(this._cachedBitmap._canvasContext), this._cachedBitmap = null, "string" == typeof e ? o.equals(e, this._url) || (this._url = e, this._node = null, this._initializeImage()) : e instanceof HTMLCanvasElement || e instanceof p.RendererCanvas || e instanceof u.RendererCanvas ? (this._node = null, this._url = null, this._initializeImage(e)) : (this._url = null, this._image = null, this._node = e.clone()));
  }, d.prototype.getTexture = function () {
    if (!this._invalidate && this._cachedBitmap)
      return this._cachedBitmap;
    if (this._image)
      return this._image;
    if (!this._node)
      return null;
    var e = new r().scaled(this._scaleX, this._scaleY), t = this._node.clone();
    t._paintSharp = !1, t.transform(e);
    var i = [];
    if ("image" === l.getName(t) && i.push(t), t.hasMixin(l.Container) && t.acceptChildren(function (e) {
        "image" === l.getName(e) && i.push(e);
      }), i.length) {
      var n = l._nameToNodeClassMap.image, o = l._nameToNodeClassMap.scene, a = new h(), A = new o(a);
      if (A.addEventListener(n.StatusEvent, function (e) {
          e.status !== n.ImageStatus.Loaded && e.status !== n.ImageStatus.Error || (i.pop(), i.length || (this._invalidate = !1, this._cachedBitmap = t.toBitmap(), this.requestInvalidation()));
        }.bind(this), this), t._setWorkspace(a), A.appendChild(t), this._cachedBitmap) {
        var c = t.getPaintBBox(), u = new s(c.getWidth(), c.getHeight());
        return u.getHTMLElement().getContext("2d").drawImage(this._cachedBitmap.getHTMLElement(), 0, 0, u.getWidth(), u.getHeight()), u;
      }
    } else
      this._invalidate = !1, this._cachedBitmap = t.toBitmap(), this._scene && this._cachedBitmap && this._cachedBitmap._canvasContext instanceof p && this._scene.addDestroyable(this._cachedBitmap._canvasContext);
    return this._cachedBitmap;
  }, d.prototype.requestInvalidation = function () {
    this.trigger(new d.UpdateEvent(this));
  }, d.prototype.setScene = function (e) {
    if (this._scene = e, this._scene && this._url) {
      var t = this._scene.getDictionary().getValue(this._url);
      if ((!t || this._storedUrl && t !== this._storedUrl) && (this._url = this._storedUrl), !this._url || !this._initializeImage()) {
        var n = i(14).createChessboard(8, "#fcc", "#cfc"), r = new s(n);
        this._url = r.toImageDataUrl(s.ImageType.PNG), d.ScaleSettings.tile(this), this._initializeImage();
      }
    }
  }, d.prototype.setTileSize = function (e) {
    this._tileSize = e;
  }, d.prototype.getTileSize = function () {
    return this._tileSize;
  }, d.prototype.getAngle = function () {
    return this._angle;
  }, d.prototype.setAngle = function (e) {
    this._angle = e;
  }, d.prototype.isMask = function () {
    return !!this._mask;
  }, d.prototype.setMask = function (e) {
    this._mask = e;
  }, d.prototype.setPosition = function (e) {
    this._position = e;
  }, d.prototype.getPosition = function () {
    return this._position;
  }, d.prototype.getTextureBBox = function () {
    return this._image ? new a(0, 0, this._image.width, this._image.height) : this._node ? this._node.getPaintBBox() : null;
  }, d.prototype.setWidth = function (e) {
    this._width = e;
  }, d.prototype.getWidth = function () {
    return this._width;
  }, d.prototype.setHeight = function (e) {
    this._height = e;
  }, d.prototype.getHeight = function () {
    return this._height;
  }, d.prototype.setScaleMode = function (e) {
    this._scaleMode = e;
  }, d.prototype.getScaleMode = function () {
    return this._scaleMode;
  }, d.prototype.setSizeMode = function (e) {
    this._sizeMode = e;
  }, d.prototype.getSizeMode = function () {
    return this._sizeMode || d.SizeMode.Auto;
  }, d.prototype.setRepeatMode = function (e) {
    this._repeatMode = e;
  }, d.prototype.getRepeatMode = function () {
    return this._repeatMode;
  }, d.prototype.getTransform = function () {
    return this._transform;
  }, d.prototype.setTransform = function (e) {
    this._transform = e;
  }, d.prototype.serialize = function (e) {
    return JSON.stringify(this._serializeToBlob(e));
  }, d.prototype.deserialize = function (e) {
    var t = JSON.parse(e);
    t && this._deserializeFromBlob(t);
  }, d.prototype._serializeToBlob = function (e) {
    var t = {};
    return this._transform && (t.t = r.serialize(this._transform)), t.u = this._url, t.r = this._repeatMode, t.s = this._sizeMode, t.w = this._width, t.h = this._height, t.p = this._position, t.m = this._mask, t.a = this._angle, t.sm = this._scaleMode, t.ts = this._tileSize, this._node && (t.n = l.serialize(this._node)), e && e.save || (t.surl = this._storedUrl), t;
  }, d.prototype._deserializeFromBlob = function (e) {
    this._transform = e.hasOwnProperty("t") ? r.deserialize(e.t) : null, this._url = e.u, this._repeatMode = e.r, this._sizeMode = e.s || d.SizeMode.Auto, this._width = e.w, this._height = e.h, this._position = e.p || d.PositionMode.Auto, this._mask = e.m, this._angle = e.a || 0, this._scaleMode = e.sm || d.ScaleMode.Tile, this._tileSize = e.ts || 1, e.n && (this._node = l.deserialize(e.n)), this._storedUrl = e.surl, this._initializeImage();
  }, d.prototype._initializeImage = function (e) {
    var t = !0;
    if (e)
      this._image = e;
    else if (this._url)
      if (this._image = new Image(), this._scene) {
        if (!c.isDictionary(this._url)) {
          var i = this._scene.getDictionary().putValueIfAbsent(this._url);
          i && (this._url = i.getUrl());
        }
        this._scene.getWorkspace().resolveUrl(this._url, this._resolvedImage.bind(this), this._scene);
      } else
        c.isDictionary(this._url) ? t = !1 : this._resolvedImage(this._url);
    else
      t = !1;
    return t;
  }, d.prototype._resolvedImage = function (e) {
    this._storedUrl = e, this._image && this._image.src === e || (this._image.onload = this._updatedImage.bind(this), e && e.match(/^(http|https|\/\/)/) ? this._image.crossOrigin = "Anonymous" : this._image.crossOrigin = null, this._image.src = e);
  }, d.prototype._updatedImage = function () {
    this._image && 0 !== this._image.naturalWidth && 0 !== this._image.naturalHeight && (this._invalidate = !0, this._cachedBitmap = null, this.requestInvalidation());
  }, d.prototype.createTextureTransform = function (e, t, i) {
    var n = new r();
    if (!e || e.isEmpty())
      return n;
    var o = this.getTextureBBox();
    if (!o || o.isEmpty())
      return n;
    var s = t.mapRect(e);
    !this._image && i && i > 1 && (n = n.scaled(1 / i, 1 / i));
    var l = o.getWidth(), h = o.getHeight(), A = 1, c = 1;
    switch (this.getScaleMode() == d.ScaleMode.Tile && (A = c = this.getTileSize()), this.getSizeMode()) {
    case d.SizeMode.Contain:
      A = c = Math.min(s.getWidth() / o.getWidth(), s.getHeight() / o.getHeight());
      break;
    case d.SizeMode.Cover:
      A = c = Math.max(s.getWidth() / o.getWidth(), s.getHeight() / o.getHeight());
      break;
    case d.SizeMode.Percent:
      A = this.getWidth() / 100 * s.getWidth() / o.getWidth(), c = this.getHeight() / 100 * s.getHeight() / o.getHeight();
      break;
    case d.SizeMode.Length:
      A = this.getWidth() / o.getWidth(), c = this.getHeight() / o.getHeight();
    }
    var p = function (e, t) {
      if (1 !== e) {
        var i = Math.round(e * t) / t;
        if (0 != i)
          return i;
      }
      return e;
    };
    A = p(A, o.getWidth()), c = p(c, o.getHeight()), A && c && (this._image && (n = n.scaled(A, c)), l *= A, h *= c), A = (A || 1) * Math.max(1, i || 1), c = (c || 1) * Math.max(1, i || 1), A === this._scaleX && c === this._scaleY || (this._invalidate = !0), this._scaleX = A, this._scaleY = c;
    var u = t.decomposed(), g = this._getRotatedTransform(t) || new r();
    if (!g.isIdentity()) {
      var f = u.translate.multiplied(g).decomposed().translate.inverted().getTranslation(), m = g.multiplied(u.translate).translated(f.getX(), f.getY());
      s = t.multiplied(m.inverted()).mapRect(e);
    }
    switch (this.getPosition()) {
    case d.PositionMode.Auto:
      n = n.translated(s.getX(), s.getY());
      break;
    case d.PositionMode.Top:
      n = n.translated(s.getSide(a.Side.CENTER).getX() - l / 2, s.getY());
      break;
    case d.PositionMode.Left:
      n = n.translated(s.getX(), s.getSide(a.Side.CENTER).getY() - h / 2);
      break;
    case d.PositionMode.Bottom:
      n = n.translated(s.getSide(a.Side.CENTER).getX() - l / 2, s.getSide(a.Side.BOTTOM_LEFT).getY() - h);
      break;
    case d.PositionMode.Right:
      n = n.translated(s.getSide(a.Side.TOP_RIGHT).getX() - l, s.getSide(a.Side.CENTER).getY() - h / 2);
      break;
    case d.PositionMode.Center:
      n = n.translated(s.getSide(a.Side.CENTER).getX() - l / 2, s.getSide(a.Side.CENTER).getY() - h / 2);
    }
    var y = s.getSide(a.Side.CENTER);
    return n.translated(-y.getX(), -y.getY()).multiplied(g).rotated(this.getAngle()).translated(y.getX(), y.getY()).multiplied(t.inverted());
  }, d.prototype.clone = function () {
    var e = this.serialize(), t = new d();
    return t.deserialize(e), t._cachedBitmap = this._cachedBitmap, this._cachedBitmap && (this._cloned = !0), t._invalidate = !0, t.setScene(this._scene), t;
  }, d.prototype.asCSSBackground = function (e) {
    var t = this._storedUrl || this._url;
    return c.isDictionary(t) && (t = ""), this._node && (t = "image" === l.getName(this._node) ? this._node.getProperty("storedUrl") || "" : this._node.toBitmap().toImageDataUrl(s.ImageType.PNG)), "url(\"" + t + "\")";
  }, d.prototype.getAverageColor = function () {
    return [
      128,
      128,
      128,
      1
    ];
  }, d.prototype.getRawUrl = function () {
    return this._storedUrl;
  }, d.prototype.getUrl = function () {
    return this._url;
  }, d.prototype._getRotatedTransform = function (e) {
    var t = e.decomposed();
    return t.rotate.multiplied(t.skew);
  }, d.prototype.toString = function () {
    return "[Object GTexturePattern]";
  }, e.exports = d;
}
