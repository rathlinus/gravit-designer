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

function (e, t, i) {
  var n = i(2), r = i(76), o = i(142);
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
    rmd: !1,
    sid: null,
    read: null,
    asgn: null,
    Guid: null,
    atp: null
  }, a.prototype.validateInsertion = function (e, t) {
    var n = i(84);
    return e.hasMixin(n);
  }, a.prototype.isFillingCompleted = function () {
    return null !== this.$text;
  }, a.prototype.isEmptyTextAllowed = function () {
    return !1;
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
      var i, r = t.properties.indexOf("uid"), s = t.properties.indexOf("read");
      if (r >= 0 && t.values[r])
        (i = s >= 0 ? t.values[s] : (this.getProperty("read") || []).slice()) && i.indexOf(t.values[r]) < 0 && (i.push(t.values[r]), s < 0 && (s = t.properties.length, t.properties.push("read"), t.values.push(i)));
      if (!t.custom && !this.isRestoring()) {
        var l = t.properties.indexOf("mtime");
        l < 0 ? (t.properties.push("mtime"), t.values.push(o.now())) : this.recordedTransaction && (t.values[l] = o.now());
      }
    }
    n.prototype._handleChange.call(this, e, t);
  }, a.prototype.toString = function () {
    return "[GComment]";
  }, e.exports = a;
}
