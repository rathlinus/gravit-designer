/**
 * Module 517 - GSwatch
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
  var n = require(188) /* GCMYKColor */, r = require(2) /* GNode */, o = require(76) /* module */, a = require(11) /* GUtil */, s = require(139) /* GTexturePattern */, l = require(518) /* GNoisePattern */, h = require(50) /* GPattern */;
  function A(e, t) {
    o.call(this), this._setDefaultProperties(A.visualProperties), this.setProperties([
      "_pt",
      "_op"
    ], [
      e,
      null == t ? 1 : t
    ]);
  }
  r.inheritAndMix("swatch", A, o, [
    r.Properties,
    r.Store
  ]), A.visualProperties = {
    _pt: null,
    _op: 1
  }, A.prototype.isCMYK = function () {
    return this.$_pt instanceof n;
  }, A.prototype._handleChange = function (e, t) {
    if (e === r._Change.Store)
      this.storeProperties(t.blob, A.visualProperties, function (e, i) {
        return i && "_pt" === e ? h.serialize(i, t.options) : i;
      });
    else if (e === r._Change.Restore) {
      var require = function (e, t) {
        return t && "_pt" === e ? h.deserialize(t) : t;
      }.bind(this);
      this.restoreProperties(t.blob, A.visualProperties, require);
    }
    r.prototype._handleChange.call(this, e, t);
  }, A.prototype.validateInsertion = function (e, t) {
    return "swatches" === r.getName(e);
  }, A.equals = function (e, t) {
    var i = true;
    if ([
        "_pt",
        "_op"
      ].forEach(function (n) {
        i = i && a.equals(e.getProperty(n), t.getProperty(n), true);
      }.bind(this)), i) {
      var n = e.getProperty("_pt"), r = t.getProperty("_pt");
      n instanceof l && r instanceof l ? i = n._type === r._type : n instanceof s && r instanceof s && (i = true, [
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
      ].forEach(function (e) {
        i = i && n[e] === r[e];
      }.bind(this)));
    }
    return i;
  }, A.prototype.toString = function () {
    return "[Mixin GSwatch]";
  }, exports.exports = A;
}
