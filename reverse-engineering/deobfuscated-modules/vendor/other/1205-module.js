/**
 * Module 1205
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
  var n = require(0) /* GObject */, r = require(95) /* GImage */, o = require(439) /* module */, a = require(601) /* module */;
  function s() {
    o.apply(this, arguments);
  }
  n.inherit(s, o), s.prototype._clones = null, s.prototype._deferredTransform = null, s.prototype.parse = function () {
    this._getReference(this._data.image._ref).then(function (e) {
      var t = new window.FileReader();
      t.readAsDataURL(e), t.onload = function () {
        this._node.setProperty("url", t.result), this._clones && this._clones.forEach(function (e) {
          e._node.setProperty("url", t.result);
        });
      }.bind(this);
    }.bind(this)), this._node.__sketchNode__ = this, this._node.addEventListener(r.StatusEvent, this._imageStatusEvent, this);
  }, s.prototype.transform = function (e) {
    e = this._deferredTransform ? this._deferredTransform.multiplied(e) : e, this._node.getStatus() !== r.ImageStatus.Loaded ? this._deferredTransform = e : (o.prototype.transform.call(this, e), this._deferredTransform = null);
  }, s.prototype.clone = function () {
    var e = o.prototype.clone.apply(this, arguments);
    return e._node.addEventListener(r.StatusEvent, e._imageStatusEvent, e), this._clones || (this._clones = []), this._clones.push(e), e;
  }, s.prototype._imageStatusEvent = function (e) {
    if (e.image === this._node) {
      if (e.status === r.ImageStatus.Loaded) {
        o.prototype.parse.call(this, true);
        var module = this._node.getGeometryBBox();
        module ? this.transform(a.getTransformation(module, this._getGeometryBBox())) : this.transform(this._deferredTransform);
      }
      e.status !== r.ImageStatus.Error && e.status !== r.ImageStatus.Loaded || this._node.removeEventListener(r.StatusEvent, this._imageStatusEvent, this);
    }
  }, s.prototype._getRelatedNodeClass = function () {
    return r;
  }, exports.exports = s;
}
