/**
 * Module 63 - GVertexTransformer
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
  var n = i(87), r = i(48);
  function o(e, t) {
    this._source = e, this._transform = t;
  }
  i(0).inherit(o, n), o.transformVertex = function (e, t) {
    if (t)
      switch (e.command) {
      case r.Command.Move:
      case r.Command.Line:
      case r.Command.Curve:
      case r.Command.Curve2:
        t.map(e);
        break;
      case r.Command.Close:
        break;
      default:
        throw new Error("Unknown vertex command: " + e.command.toString());
      }
  }, o.prototype._source = null, o.prototype._transform = null, o.prototype.getTransform = function () {
    return this._transform;
  }, o.prototype.setTransform = function (e) {
    this._transform = e;
  }, o.prototype.rewindVertices = function (e) {
    return this._source.rewindVertices(e);
  }, o.prototype.readVertex = function (e) {
    return !!this._source.readVertex(e) && (o.transformVertex(e, this._transform), !0);
  }, o.prototype.hasVertexForRead = function () {
    return this._source.hasVertexForRead();
  }, o.prototype.toString = function () {
    return "[Object GVertexTransformer]";
  }, e.exports = o;
}
