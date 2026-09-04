/**
 * chunk.vendor.js Module #759
 * Type: class
 * Name: GLayerTool
 */

function (e, t, i) {
      var n = i(334),
        r = i(159),
        o = i(0);

      function a() {
        (n.call(this), (this._onlyLayers = !0));
      }
      (i(760),
        o.inherit(a, n),
        (a.prototype._onlyLayers = !1),
        (a.prototype.activate = function (e, t) {
          n.prototype.activate.call(this, e, t);
          var i = !0;
          if (this._editor) {
            var o = this._editor.getSelection();
            if (o && o.length)
              for (var a = 0; a < o.length && i; ++a) i = o[a] instanceof r;
            if (!i) {
              this._editor && !t && this._editor.storeSelection();
              var s = this._scene.getActiveLayer();
              s
                ? this._editor.updateSelection(!1, [s])
                : this._editor.clearSelection();
            }
          }
          this._onlyLayers = i;
        }),
        (a.prototype.deactivate = function (e, t) {
          (!this._editor ||
            t ||
            this._onlyLayers ||
            this._editor.restoreSelection(),
            n.prototype.deactivate.call(this, e, t));
        }),
        (a.prototype._getSelectableElement = function (e, t) {
          for (var i = e; null !== i; i = i.getParent())
            if (i instanceof r) return i;
          return this._scene.getActiveLayer();
        }),
        (a.prototype.toString = function () {
          return "[Object GLayerTool]";
        }),
        (e.exports = a));
    }