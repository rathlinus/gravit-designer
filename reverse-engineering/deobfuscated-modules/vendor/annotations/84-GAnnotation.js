/**
 * Module 84 - GAnnotation
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
  var n = require(366) /* GComment */, r = require(2) /* GNode */, o = require(142) /* GDate */;
  function a() {
  }
  a.Flag = { Hidden: 1 << 21 }, a.MetaProperties = {
    vis: true,
    name: null,
    text: null,
    img: null,
    uid: null,
    email: null,
    time: 0,
    mtime: 0,
    seq: 0,
    loc: null,
    typ: 0,
    rsv: undefined,
    rmd: false,
    sid: null,
    read: null,
    asgn: null,
    Guid: null,
    atp: null
  }, a.IgnoredProperties = [
    "plkt",
    "lkt",
    "rtxt"
  ], a.prototype.addComment = function (e, t, i, r, a, s) {
    var l = new n(), h = this.getNextAnnotationSequence();
    return l.setProperties([
      "text",
      "uid",
      "time",
      "seq",
      "name",
      "img",
      "email",
      "type",
      "rmd"
    ], [
      e,
      t,
      o.now(),
      h,
      i,
      r,
      a,
      s || n.Type.User,
      true
    ]), this.appendChild(l), l.setProperty("rmd", false), l;
  }, a.prototype.isFillingCompleted = function () {
    return null !== this.$text;
  }, a.prototype.isEmptyTextAllowed = function () {
    return true;
  }, a.prototype.getNextAnnotationSequence = function () {
    var e = 0;
    return this.getLastChild() && (e = this.getLastChild().getProperty("seq") + 1), e;
  }, a.prototype.storeAction = function (e, t, i) {
    if (e && e.options && e.options.copy) {
      if ("rsv" === t)
        return false;
      if ("time" === t || "mtime" === t)
        return o.now();
      if ("Guid" === t || "sid" === t)
        return null;
    }
    return i;
  }, a.prototype.isPropertiesIgnorable = function (e) {
    return e.every(function (e) {
      return a.IgnoredProperties.indexOf(e) >= 0;
    });
  }, a.prototype.restoreAction = function (e, t, i) {
    if (e && e.options && e.options.copy) {
      if ("time" === t || "mtime" === t)
        return o.now();
      if ("rsv" === t)
        return false;
      if ("Guid" === t || "sid" === t)
        return null;
    }
    return i;
  }, a.prototype.initializeAnnotation = function () {
    this.addEventListener(r.BeforePropertiesChangeEvent, this.handleBeforePropertiesChangeEvent, this), this._setDefaultProperties(a.MetaProperties);
  }, a.prototype.handleBeforePropertiesChangeEvent = function (e) {
    e.node !== this && (e.custom || e.temporary || this.isPropertiesIgnorable(e.properties) || this.isRestoring() || e.node.isRestoring() || (e.properties.indexOf("mtime") < 0 || this.recordedTransaction || e.node.recordedTransaction) && this.setProperty("mtime", o.now()));
  }, a.prototype.handleBeforePropertiesChange = function (e) {
    if (!e.custom && !e.temporary && !this.isPropertiesIgnorable(e.properties)) {
      if (!this.isRestoring()) {
        var module = e.properties.indexOf("mtime");
        module < 0 ? (e.properties.push("mtime"), e.values.push(o.now())) : this.recordedTransaction && (e.values[module] = o.now());
      }
      this.updateReadUnreadStatus(e);
    }
  }, a.prototype.updateReadUnreadStatus = function (e) {
    var t, i = e.properties.indexOf("uid"), n = e.properties.indexOf("read");
    i >= 0 && e.values[i] && (t = n >= 0 ? e.values[n] : (this.getProperty("read") || []).slice()) && t.indexOf(e.values[i]) < 0 && (t.push(e.values[i]), n < 0 && (n = e.properties.length, e.properties.push("read"), e.values.push(t)));
    return e;
  }, a.prototype.initDefaultForLimitedRestore = function () {
  }, a.prototype.initSizeAndPosition = function () {
  }, require(914) /* Linkable */(a), exports.exports = a;
}
