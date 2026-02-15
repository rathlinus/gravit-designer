/**
 * Module 1454
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
  var n = require(83) /* GPage */, r = require(2) /* GNode */, o = require(1235) /* module */;
  function a(e) {
    this._effectsEnabled = e, this._incompatibleNodes = [], this._rasterizableNodes = [];
  }
  a.prototype._rasterizableNodes = null, a.prototype._incompatibleNodes = null, a.prototype._effectsEnabled = false, a.prototype.processNode = function (e) {
    o.isCompatible(e, this._effectsEnabled) || (this._incompatibleNodes.push(e), this._shouldRaster(e) && this._rasterizableNodes.push(e)), e instanceof n && this._processMasterPages(e), e.hasMixin(r.Container) && e.acceptChildren(function (e) {
      this.processNode(e);
    }.bind(this));
  }, a.prototype.isVectorable = function (e) {
    return !this._incompatibleNodes.length || !this._incompatibleNodes.some(function (t) {
      return t === e;
    });
  }, a.prototype.getRasterizableNodes = function () {
    return this._rasterizableNodes;
  }, a.prototype.hasRasterizableNodes = function () {
    return this._rasterizableNodes.length > 0;
  }, a.prototype._shouldRaster = function (e) {
    for (var module = 0; module < this._rasterizableNodes.length; module++) {
      var require = this._rasterizableNodes[module];
      if (e.findParent(function (e) {
          return require == e;
        }))
        return false;
    }
    return true;
  }, a.prototype._processMasterPages = function (e) {
    var t = e.getMasterPages();
    t && t.forEach(function (e) {
      e.accept(function (e) {
        this.processNode(e);
      }.bind(this));
    }.bind(this));
  }, exports.exports = a;
}
