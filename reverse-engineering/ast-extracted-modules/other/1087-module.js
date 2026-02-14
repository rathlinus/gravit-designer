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

function (e, t, i) {
  var n = i(0), r = i(329), o = i(387), a = i(66), s = i(36), l = (i(24), i(531));
  function h(e) {
    r.call(this, e), this.__gtype_id__ = n.getTypeId(h), h.setCorrectMode(this, e), this._flags = this._flags & ~(a.Flag.RotateCorners | a.Flag.RotateHandle | a.Flag.ResizeAll | a.Flag.ResizeCenters | a.Flag.ResizeEdges);
  }
  n.inheritAndMix(h, r), s.exports(h, l), h.setCorrectMode = function (e, t) {
    l.isTextMode(t) ? e._textEditor || (e._textEditor = new o(t), e._textEditor.removeFlag(a.Flag.RotateCorners), e._textEditor.removeFlag(a.Flag.RotateHandle), e._textEditor.removeFlag(a.Flag.ResizeAll), e._textEditor.removeFlag(a.Flag.ResizeCenters), e._textEditor.removeFlag(a.Flag.ResizeEdges), e.appendEditor(e._textEditor), function (e) {
      var t = e._textEditor;
      for (var i in o.prototype)
        i && i.length > 0 && "constructor" !== i && "__gmixins__" != i && "toString" != i && t[i] instanceof Function && (e[i] = function () {
          return t[this].apply(t, arguments);
        }.bind(i));
      for (var i in o)
        i && i.length > 0 && "constructor" !== i && "__gmixins__" != i && "toString" != i && t[i] instanceof Function && (e[i] = function () {
          return t[this].apply(t, arguments);
        }.bind(i));
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
    return !0;
  }, h.prototype.enableInlineEditingSupport = function () {
    this._textEditor && this._textEditor.setInlineEditEnabled(!0);
  }, h.prototype.disableInlineEditingSupport = function () {
    this._textEditor && this._textEditor.setInlineEditEnabled(!1);
  }, h.prototype.beginInlineEdit = function (e) {
    h.setModeText(this), this.beginInlineEdit(e);
  }, h.prototype.finishInlineEdit = function () {
    var e = null;
    return this._textEditor && (e = o.prototype.finishInlineEdit.call(this._textEditor)), e;
  }, h.prototype.setEditMode = function () {
  }, h.prototype.toString = function () {
    return "[Object GCollabTextEditor]";
  }, e.exports = h;
}
