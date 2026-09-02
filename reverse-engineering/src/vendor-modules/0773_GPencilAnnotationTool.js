/**
 * chunk.vendor.js Module #773
 * Type: class
 * Name: GPencilAnnotationTool
 */

function (e, t, i) {
      i(7);
      var n = i(335),
        r = i(320),
        o = i(0),
        a = i(36),
        s = i(212),
        l = i(52);

      function h() {
        n.call(this, !0, !0);
      }
      (i(774),
        o.inheritAndMix(h, n, [s]),
        (h.prototype._getRelatedItemClass = function () {
          return r;
        }),
        (h.prototype._createAndAppendPath = function () {
          var e = new (this._getRelatedItemClass())();
          return (
            this._editor.insertElements([e], !1, !0, !0),
            e.getScene() ? ((this._pathEditor = a.openEditor(e)), e) : null
          );
        }),
        (h.prototype._mouseRelease = function (e) {
          (n.prototype._mouseRelease.call(this, e),
            this._manager.notifyJobDone(this));
        }),
        (h.prototype._escAction = function () {}),
        (h.prototype._enterAction = function () {}),
        (h.prototype.getCursor = function () {
          return l.CrossFreehand;
        }),
        (h.prototype.toString = function () {
          return "[Object GPencilAnnotationTool]";
        }),
        (e.exports = h));
    }