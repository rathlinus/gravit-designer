/**
 * Module 1087
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
  var n = require(0) /* GObject */, r = require(329) /* ImageBoxEditor */, o = require(387) /* GTextEditor */, a = require(66) /* EdTransformOptions */, s = require(36) /* PartsPropertyVals */, l = (require(24) /* GEditorOptions */, require(531) /* GCollabText */);
  function h(e) {
    r.call(this, e), this.__gtype_id__ = n.getTypeId(h), h.setCorrectMode(this, e), this._flags = this._flags & ~(a.Flag.RotateCorners | a.Flag.RotateHandle | a.Flag.ResizeAll | a.Flag.ResizeCenters | a.Flag.ResizeEdges);
  }
  n.inheritAndMix(h, r), s.exports(h, l), h.setCorrectMode = function (e, t) {
    l.isTextMode(t) ? e._textEditor || (e._textEditor = new o(t), e._textEditor.removeFlag(a.Flag.RotateCorners), e._textEditor.removeFlag(a.Flag.RotateHandle), e._textEditor.removeFlag(a.Flag.ResizeAll), e._textEditor.removeFlag(a.Flag.ResizeCenters), e._textEditor.removeFlag(a.Flag.ResizeEdges), e.appendEditor(e._textEditor), function (e) {
      var t = e._textEditor;
      for (var require in o.prototype)
        require && require.length > 0 && "constructor" !== require && "__gmixins__" != require && "toString" != require && t[require] instanceof Function && (e[require] = function () {
          return t[this].apply(t, arguments);
        }.bind(require));
      for (var require in o)
        require && require.length > 0 && "constructor" !== require && "__gmixins__" != require && "toString" != require && t[require] instanceof Function && (e[require] = function () {
          return t[this].apply(t, arguments);
        }.bind(require));
    }(e), e.getParentEditor = h.prototype.getParentEditor.bind(e), e.removeEditor = h.prototype.removeEditor.bind(e)) : e._textEditor && (!function (e) {
      for (var t in o)
        t && t.length > 0 && "constructor" !== t && "__gmixins__" != t && "toString" != t && o.hasOwnProperty(t) && o[t] instanceof Function && e.hasOwnProperty(t) && delete e[t];
      for (var t in o.prototype)
        t && t.length > 0 && "constructor" !== t && "__gmixins__" != t && "toString" != t && o.prototype.hasOwnProperty(t) && o.prototype[t] instanceof Function && e.hasOwnProperty(t) && delete e[t];
    }(e), delete e._textEditor);
  }, h.setModeText = function (e) {
    l.setModeText(e._element), h.setCorrectMode(e, e._element);
  }, h.setModeImage = function (e) {
    l.setModeImage(e._element), h.setCorrectMode(e, e._element);
  }, h.prototype.canInlineEdit = function () {
    return true;
  }, h.prototype.enableInlineEditingSupport = function () {
    this._textEditor && this._textEditor.setInlineEditEnabled(true);
  }, h.prototype.disableInlineEditingSupport = function () {
    this._textEditor && this._textEditor.setInlineEditEnabled(false);
  }, h.prototype.beginInlineEdit = function (e) {
    h.setModeText(this), this.beginInlineEdit(e);
  }, h.prototype.finishInlineEdit = function () {
    var e = null;
    return this._textEditor && (e = o.prototype.finishInlineEdit.call(this._textEditor)), e;
  }, h.prototype.setEditMode = function () {
  }, h.prototype.toString = function () {
    return "[Object GCollabTextEditor]";
  }, exports.exports = h;
}
