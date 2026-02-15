/**
 * Module 366 - GComment
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
  var n = require(2) /* GNode */, r = require(76) /* module */, o = require(142) /* GDate */;
  function a() {
    r.call(this), this._setDefaultProperties(a.MetaProperties);
  }
  n.inheritAndMix("cmt", a, r, [
    n.Properties,
    n.Store
  ]), a.Type = {
    User: 0,
    Open: 1,
    Close: 2
  }, a.MetaProperties = {
    text: null,
    uid: null,
    time: 0,
    mtime: 0,
    seq: 0,
    name: "",
    img: null,
    email: null,
    type: a.Type.User,
    rmd: false,
    sid: null,
    read: null,
    asgn: null,
    Guid: null,
    atp: null
  }, a.prototype.validateInsertion = function (e, t) {
    var n = require(84) /* GAnnotation */;
    return e.hasMixin(n);
  }, a.prototype.isFillingCompleted = function () {
    return null !== this.$text;
  }, a.prototype.isEmptyTextAllowed = function () {
    return false;
  }, a.prototype.storeAction = function (e, t, i) {
    if (e && e.options && e.options.copy) {
      if ("time" === t || "mtime" === t)
        return o.now();
      if ("Guid" === t || "sid" === t)
        return null;
    }
    return i;
  }, a.prototype._handleChange = function (e, t) {
    if (e === n._Change.Store)
      this.storeProperties(t.blob, a.MetaProperties, a.prototype.storeAction.bind(this, t));
    else if (e === n._Change.Restore)
      this.restoreProperties(t.blob, a.MetaProperties);
    else if (e === n._Change.BeforePropertiesChange) {
      var require, r = t.properties.indexOf("uid"), s = t.properties.indexOf("read");
      if (r >= 0 && t.values[r])
        (require = s >= 0 ? t.values[s] : (this.getProperty("read") || []).slice()) && require.indexOf(t.values[r]) < 0 && (require.push(t.values[r]), s < 0 && (s = t.properties.length, t.properties.push("read"), t.values.push(require)));
      if (!t.custom && !this.isRestoring()) {
        var l = t.properties.indexOf("mtime");
        l < 0 ? (t.properties.push("mtime"), t.values.push(o.now())) : this.recordedTransaction && (t.values[l] = o.now());
      }
    }
    n.prototype._handleChange.call(this, e, t);
  }, a.prototype.toString = function () {
    return "[GComment]";
  }, exports.exports = a;
}
