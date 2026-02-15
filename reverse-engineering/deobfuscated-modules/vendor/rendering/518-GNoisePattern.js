/**
 * Module 518 - GNoisePattern
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
  var n = require(50) /* GPattern */, r = require(17) /* GRGBColor */, o = require(265) /* GBackground */, a = require(139) /* GTexturePattern */, s = require(73) /* GRectangle */, l = require(661) /* GGLNoiseEffect */, h = require(7) /* GTransform */, A = require(28) /* GStylable */;
  require(14) /* GPaintCanvas */;
  function c(e) {
    a.call(this), a.ScaleSettings.stretch(this), this._node = new s(), this._node.transform(new h().scaled(5, 5)), this._node.getEffects().appendChild(new l()), this.setType(c.Type.Original), this.setAmount(e);
  }
  n.inherit("N", c, a), c.Type = {
    Original: "original",
    Black: "black",
    White: "white",
    Color: "color"
  }, c.prototype._type = c.Type.Original, c.prototype._amount = 1, c.equals = function (e, t) {
    return !e && e === t || a.equals(e, t) && e._amount === t._amount && e._type === t._type;
  }, c.prototype.setType = function (e) {
    switch (this._type = e, this._node.getPaintLayers().clearFillLayers(), e) {
    case c.Type.Original:
      this._node.getPaintLayers().appendChild(new A.FillPaintLayer(new o()));
      break;
    case c.Type.Black:
    case c.Type.Color:
      this._node.getPaintLayers().appendChild(new A.FillPaintLayer(r.WHITE));
      break;
    case c.Type.White:
      this._node.getPaintLayers().appendChild(new A.FillPaintLayer(r.BLACK));
    }
    this._node.getEffects().getFirstChild().setProperty("shp", {
      amount: this.getAmount(),
      colored: this._type === c.Type.Color,
      transparency: true
    });
  }, c.prototype.getType = function () {
    return this._type;
  }, c.prototype.getAverageColor = function () {
    return [
      128,
      128,
      128,
      1
    ];
  }, c.prototype.setAmount = function (e) {
    this._amount = undefined === e ? 1 : e, this._node.getEffects().getFirstChild().setProperty("shp", {
      amount: this._amount,
      colored: this._type === c.Type.Color,
      transparency: true
    });
  }, c.prototype.getAmount = function () {
    return this._amount;
  }, c.prototype.getTexture = function (e, t) {
    var i = this._node.clone();
    if (i.transform(new h().scaled(this._scaleX, this._scaleY), true), this._type === c.Type.Original) {
      var n = e.getBitmap().clone(e.getTransform().mapRect(t));
      if (n) {
        var r = new a(n.getHTMLElement());
        a.ScaleSettings.stretch(r);
        var o = i.getPaintLayers(), s = o.getFirstChild(), l = new A.FillPaintLayer(r);
        o.insertChild(l, s);
      }
    }
    return i.toBitmap(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
  }, c.prototype.clone = function () {
    var e = this.serialize(), t = new c();
    return t.deserialize(e), t;
  }, c.prototype._serializeToBlob = function () {
    var e = a.prototype._serializeToBlob.call(this);
    return e.amount = this.getAmount(), e.type = this.getType(), e;
  }, c.prototype._deserializeFromBlob = function (e, t) {
    a.prototype._deserializeFromBlob.call(this, e, t), this.setAmount(e.amount), this.setType(e.type || c.Type.Original);
  }, c.prototype._getRotatedTransform = function () {
    return null;
  }, c.prototype.isWebGL = function () {
    return true;
  }, c.prototype.toString = function () {
    return "[Object GNoisePattern]";
  }, exports.exports = c;
}
