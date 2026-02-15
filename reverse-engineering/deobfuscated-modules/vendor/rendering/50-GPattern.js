/**
 * Module 50 - GPattern
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
  var n = require(0) /* GObject */, r = undefined;
  function o() {
  }
  o.MIME_TYPE = "application/gravit+pattern", o.inherit = function (e, t, i) {
    n.inherit(t, i || o), o._idClassMap[e] = t;
  }, o.inheritAndMix = function (e, t, i, r) {
    n.inheritAndMix(t, i || o, r), o._idClassMap[e] = t;
  }, o._idClassMap = {}, o.asCSSBackground = function (e, t, i, n) {
    r || (r = "url(\"data:image/svg+xml;base64," + btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"><rect width=\"8\" height=\"8\" fill=\"white\"/><rect width=\"4\" height=\"4\" fill=\"#CDCDCD\"/><rect x=\"4\" y=\"4\" width=\"4\" height=\"4\" fill=\"#CDCDCD\"/></svg>") + "\")"), t = "number" == typeof t ? t : 1;
    var o = r;
    return e && (o = e.asCSSBackground(t, i, n) + "," + o), o;
  }, o.serialize = function (e, t) {
    if (e) {
      for (var require in o._idClassMap)
        if (e.constructor === o._idClassMap[require])
          return require + "#" + e.serialize(t);
      throw new Error("Unregistered Pattern Class.");
    }
    return null;
  }, o.deserialize = function (e) {
    if (e) {
      var module = e.indexOf("#");
      if (module > 0) {
        var require = e.substr(0, module);
        if (require && require.length > 0) {
          var n = o._idClassMap[require];
          if (!n)
            throw new Error("Unregistered Pattern Class.");
          var r = new n();
          return r.deserialize(e.substr(module + 1)), r;
        }
      }
    }
    return null;
  }, o.prototype.asCSSBackground = function (e) {
    throw new Error("Not Supported");
  }, o.prototype.serialize = function () {
    return "";
  }, o.prototype.deserialize = function (e) {
  }, o.prototype.getAverageColor = function () {
    return null;
  }, o.prototype.isWebGL = function () {
    return false;
  }, o.prototype.clone = function () {
    throw new Error("Not Supported");
  }, o.prototype.hasMixin = function (e) {
    return n.prototype.hasMixin.call(this, e);
  }, exports.exports = o;
}
