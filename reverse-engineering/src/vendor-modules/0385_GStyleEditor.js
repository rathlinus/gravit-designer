/**
 * chunk.vendor.js Module #385
 * Type: class
 * Name: GStyleEditor
 */

function (e, t, i) {
      var n = i(82),
        r = i(0),
        o = i(52),
        a = i(128),
        s = i(751),
        l = i(545),
        h = i(331),
        A = i(39);

      function c() {}
      (r.inherit(c, A),
        (c.options = {
          snapDistance: 5,
        }),
        (c.prototype._manager = null),
        (c.prototype.getCursor = function (e, t) {
          return o.Default;
        }),
        (c.prototype.activate = function (e) {
          var t = e.parentEditor;
          return (
            (t instanceof a ||
              t instanceof h ||
              t instanceof l ||
              t instanceof s) &&
            (t.insertEditor(this),
            this.setFlag(A.Flag.Selected),
            this.requestInvalidation(),
            !0)
          );
        }),
        (c.prototype.deactivate = function () {
          (this._parentEditor &&
            (this.updatePartSelection(!1, null, !0),
            this.removeFlag(A.Flag.Selected),
            this.requestInvalidation(),
            this._parentEditor.removeEditor(this, !0)),
            this._manager.notifyDeactivated(this));
        }),
        (c.prototype.validateAlreadyActive = function (e) {
          return e.parentEditor === this._parentEditor;
        }),
        (c.prototype.isDeactivatable = function () {
          return null != this._parentEditor;
        }),
        (c.prototype.getEditObj = function () {
          return null;
        }),
        (c.prototype.updateCursor = function () {
          this._manager &&
            this == this._manager.getActiveEditor() &&
            this._manager.updateActiveEditorCursor();
        }),
        (c.prototype.getBBox = function (e) {
          return this.getCustomBBox(e);
        }),
        (c.prototype.requestInvalidation = function (e) {
          var t = this._manager.getScene();
          t && n.getEditor(t).requestInvalidation(this, e);
        }),
        (c.prototype.movePart = function (e, t, i, n, r, o, a) {
          (A.prototype.movePart.call(this, e, t, i, n, r, o, a),
            this._manager.blockEditorUpdate());
        }),
        (c.prototype._applyPartMove = function (e, t, i, n) {
          (this._manager.releaseEditorUpdate(),
            A.prototype._applyPartMove.call(this, e, t, i, n));
        }),
        (c.prototype.toString = function () {
          return "[Object GStyleEditor]";
        }),
        (e.exports = c));
    }