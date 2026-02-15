/**
 * Webpack Module #448
 * Type: class
 * Name: GGravitCloudAction
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */, n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(18) /* module_18 */,
      r = n(31) /* GAction */,
      s = n(844) /* module_844 */,
      l = n(86) /* module_86 */,
      c = n(220) /* module_220 */,
      d = n(119) /* module_119 */,
      u = n(446) /* module_446 */;
    const p = n(256) /* GOfflineDialog */;
    function g(e) {
      (this._type = e),
        (this._title = new o.GLocaleKey("GGravitCloudAction", "title." + e));
    }
    (g.Actions = { New: "new", Save: "save", SaveAs: "save-as", Open: "open" }),
      o.GObject.inherit(g, r),
      (g.ID = "gravit-cloud"),
      (g.prototype._type = null),
      (g.prototype._title = null),
      (g.prototype.getId = function () {
        return g.getIdForAction(this._type);
      }),
      (g.getIdForAction = function (e) {
        return g.ID + "." + e;
      }),
      (g.prototype.getTitle = function () {
        return this._title;
      }),
      (g.prototype.getCategory = function () {
        return a.CATEGORY_FILE;
      }),
      (g.prototype.getGroup = function () {
        return this._type === g.Actions.Open ? "file-open" : "file";
      }),
      (g.prototype.getGroupIcon = function () {
        return s["gravit-cloud"];
      }),
      (g.prototype.getShortcut = function () {
        return this._type == g.Actions.Open
          ? [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "O"]
          : this._type == g.Actions.SaveAs
          ? [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "S"]
          : null;
      }),
      (g.prototype.isEnabled = function () {
        if (
          !gDesigner.getApplicationManager().isEditingEnabled() &&
          this._type === g.Actions.Save
        )
          return false;
        if (
          !gDesigner.getApplicationManager().isOpenFromCloudEnabled() &&
          this._type === g.Actions.Open
        )
          return false;
        if (
          !gDesigner.getApplicationManager().isSavingAsEnabled() &&
          this._type === g.Actions.SaveAs
        )
          return false;
        return (
          !(!gDesigner.getActiveDocument() && this._type !== g.Actions.Open) &&
          !!d.isOnline()
        );
      }),
      (g.prototype.execute = function (e, t, n) {
        const o = () =>
          new u(
            () => {
              this._executeAction(e, t, n);
            },
            () => {
              gDesigner.stats("action-cancelled_export", this._type);
            }
          );
        gDesigner.isOffline() ? p.openUnavailableFeature(o) : o();
      }),
      (g.prototype._executeAction = function (e, t, n) {
        var o = this;
        if ("open" === this._type) {
          let e = { closable: true, showCloudOptions: true, openFromCloud: true };
          gDesigner.openNewDocumentDialog(e);
        } else if ("save" === this._type) {
          var i = gDesigner.getActiveDocument();
          if (i.isCommercialProductFile())
            return void i.openPaywall(this.getId());
          var a = i.getStorageItem();
          a && a instanceof c.Item
            ? d.performSave(
                i,
                () => {
                  t && t(l.Saved);
                },
                () => {
                  t && t(l.SaveFailed);
                }
              )
            : o._saveAs(false, e, t);
        } else if ("new" === this._type) {
          let n = {
            closable: true,
            cb: function () {
              o._saveAs(true, e, t);
            },
          };
          gDesigner.openNewDocumentDialog(n);
        } else "save-as" === this._type && o._saveAs(false, e, t, n);
      }),
      (g.prototype._hasUnsupported = async function () {
        return false;
      }),
      (g.prototype._saveAs = async function (e, t, n, o) {
        var i = t || gDesigner.getActiveDocument();
        if (i.isCommercialProductFile()) i.openPaywall(this.getId());
        else {
          var a = i.getTitle();
          (!i.isDocumentFromTemplate() && (await this._hasUnsupported(i))) ||
            gDesigner.openCloudSaveDialog(
              i,
              function () {
                e && gDesigner.getWindows().removeWindow(i.getActiveWindow()),
                  n && n(l.SaveCancelled);
              },
              a,
              n,
              o
            );
        }
      }),
      (g.prototype.getIcon = function () {
        return gDesigner.getApplicationManager().isOpenFromCloudEnabled() &&
          this._type === g.Actions.Open
          ? gDesigner.isTouchEnabled()
            ? "gravit-icon-touch-file-open-cloud"
            : ""
          : gDesigner.getApplicationManager().isSavingAsEnabled() &&
            this._type === g.Actions.SaveAs
          ? gDesigner.isTouchEnabled()
            ? "gravit-icon-touch-file-save-as-cloud"
            : ""
          : undefined;
      }),
      (g.prototype.toString = function () {
        return "[Object GGravitCloudAction]";
      }),
      (e.exports = g);
  }