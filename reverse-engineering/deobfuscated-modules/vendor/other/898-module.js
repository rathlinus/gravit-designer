/**
 * Module 898
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
  var n = require(111) /* GRendererCtx */, r = Number.Infinity;
  function o(e, t, i) {
    this._jobId = e.__contextId, this._renderables = [], this._jobStart = Date.now(), this._expired = false, this._locked = 0, this._renderables = [], this.resuming = false, this.exiting = false, this.timeout = null, this.skipped = false, this.data = [], this.parameters = i ? Object.keys(i).reduce(function (e, t) {
      return e[t] = i[t], e;
    }, {}) : {}, this._timeLimit = t || r;
  }
  o.prototype._jobId = 0, o.prototype._renderables, o.prototype._expired, o.prototype._renderables, o.prototype._timeLimit, o.prototype._locked, o.prototype.resuming, o.prototype.exiting, o.prototype.timeout, o.prototype.data, o.prototype.skipped, o.prototype.parameters, o.prototype.initialRenderables, o.prototype.isExpired = function () {
    return !this._locked && (!!this._expired || Date.now() - this._jobStart > this._timeLimit && (this._expired = true, true));
  }, o.prototype.lock = function () {
    this._locked++;
  }, o.prototype.unlock = function () {
    if (this._locked--, this._locked < 0)
      throw new Error("GRenderJob: invalid lock");
  }, o.prototype.reset = function () {
    this._jobStart = Date.now(), this._expired = false, this._locked = 0, this.resuming = false, this.exiting = false, null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.data = [];
  }, o.prototype.addRenderable = function (e) {
    this._renderables.indexOf(e) < 0 && this._renderables.push(e);
  }, o.prototype.pushSave = function (e) {
    this.data.push(e);
  }, o.prototype.popSave = function () {
    return this.data.pop();
  }, o.prototype.getSave = function () {
    return this.hasSave() ? this.data[this.data.length - 1] : null;
  }, o.prototype.hasSave = function () {
    return this.data.length > 0;
  }, o.prototype.getId = function () {
    return this._jobId;
  }, o.prototype.disposeRenderables = function () {
    if (this.skipped) {
      var exports = this;
      this.initialRenderables.forEach(function (t) {
        exports.addRenderable(t);
      }), n.getPreservedContexts().forEach(function (t) {
        exports.addRenderable(t);
      });
    }
    this._renderables.forEach(function (e) {
      e.canvas && (e.__len > 0 && !n.finished(e) ? e.canvas.renderingSkipped = true : (e.__len > 0 || e.canvas.rendered) && (e.canvas.renderingSkipped = false), e.__persistent || (e.canvas.rendered = false), e.canvas.rendering = false, e.canvas.rendered = false, e.canvas.renderingName = null), n.dispose(e);
    }), this._renderables = [];
  }, exports.exports = o;
}
