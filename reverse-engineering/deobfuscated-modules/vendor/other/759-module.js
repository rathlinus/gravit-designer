/**
 * Module 759
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
  var n = require(334) /* AreaSelector */, r = require(159) /* GLayer */, o = require(0) /* GObject */;
  function a() {
    n.call(this), this._onlyLayers = true;
  }
  require(760) /* GLayerEditor */, o.inherit(a, n), a.prototype._onlyLayers = false, a.prototype.activate = function (e, t) {
    n.prototype.activate.call(this, e, t);
    var i = true;
    if (this._editor) {
      var o = this._editor.getSelection();
      if (o && o.length)
        for (var a = 0; a < o.length && i; ++a)
          i = o[a] instanceof r;
      if (!i) {
        this._editor && !t && this._editor.storeSelection();
        var s = this._scene.getActiveLayer();
        s ? this._editor.updateSelection(false, [s]) : this._editor.clearSelection();
      }
    }
    this._onlyLayers = i;
  }, a.prototype.deactivate = function (e, t) {
    !this._editor || t || this._onlyLayers || this._editor.restoreSelection(), n.prototype.deactivate.call(this, e, t);
  }, a.prototype._getSelectableElement = function (e, t) {
    for (var require = e; null !== require; require = require.getParent())
      if (require instanceof r)
        return require;
    return this._scene.getActiveLayer();
  }, a.prototype.toString = function () {
    return "[Object GLayerTool]";
  }, exports.exports = a;
}
