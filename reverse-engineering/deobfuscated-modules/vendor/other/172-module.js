/**
 * Module 172
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
  var n = require(84) /* GAnnotation */, r = require(366) /* GComment */, o = require(24) /* GEditorOptions */, a = require(142) /* GDate */, s = require(2) /* GNode */, l = require(82) /* SavePoint */;
  function h() {
  }
  h.TransactionType = {
    RemoveAnnotation: "remove-synchronized-annotations",
    AddAnnotation: "add-synchronized-annotations"
  }, h.prototype._annotationSetup = function (e, t, i) {
    var r = -1, s = this._element, l = this._element.getParent();
    if (!l || !s.hasMixin(n))
      throw new Error("Annotation setup without valid annotation");
    for (var h = l.getFirstChild(); null !== h; h = h.getNext())
      r = Math.max(r, h.getProperty("seq") || 0);
    this._element.$rmd = true, this._element.setProperties([
      "name",
      "uid",
      "time",
      "seq",
      "loc",
      "typ",
      "rmd"
    ], [
      e || o.userConfig.userName || s.getProperty("name"),
      this._uid || n.MetaProperties.uid,
      a.now(),
      r + 1,
      t || n.MetaProperties.loc,
      i || n.MetaProperties.typ,
      false
    ]);
  }, h.createRemoveAnnotationTransactionData = function (e, t) {
    return {
      nodes: e,
      parent: t,
      type: h.TransactionType.RemoveAnnotation
    };
  }, h.createAddAnnotationTransactionData = function (e, t) {
    return {
      nodes: e,
      parent: t,
      type: h.TransactionType.AddAnnotation
    };
  }, h.removeAnnotations = function (e, t, i, o, a) {
    var A = t.getScene();
    if (A) {
      var c = l.getEditor(A);
      if (c) {
        o = false !== o;
        try {
          o && c.beginTransaction(), e.forEach(function (e) {
            e.setProperties([
              "rmd",
              "vis",
              "mtime"
            ], [
              true,
              false,
              Date.now()
            ]), (e.hasMixin(n) || e instanceof r) && (e.removeFlag(s.Flag.Selected), e.removeFlag(s.Flag.Highlighted)), a && t.removeChild(e);
          });
        } finally {
          o && c.commitTransaction(i, h.createRemoveAnnotationTransactionData(e, t));
        }
      }
    }
  }, exports.exports = h;
}
