/**
 * Webpack Module #448
 * Type: class
 * Name: GGravitCloudAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GActionIconMap = require(844) /* GActionIconMap */,
      l = require(86) /* module_86 */,
      c = require(220) /* Item */,
      GCloudStorage = require(119) /* GCloudStorage */,
      u = require(446) /* module_446 */;
    const GOfflineDialog = require(256) /* GOfflineDialog */;
    function g(e) {
      (this._type = e),
        (this._title = new GCore.GLocaleKey("GGravitCloudAction", "title." + e));
    }
    (g.Actions = { New: "new", Save: "save", SaveAs: "save-as", Open: "open" }),
      GCore.GObject.inherit(g, GAction),
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
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (g.prototype.getGroup = function () {
        return this._type === g.Actions.Open ? "file-open" : "file";
      }),
      (g.prototype.getGroupIcon = function () {
        return GActionIconMap["gravit-cloud"];
      }),
      (g.prototype.getShortcut = function () {
        return this._type == g.Actions.Open
          ? [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "O"]
          : this._type == g.Actions.SaveAs
          ? [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "S"]
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
          !!GCloudStorage.isOnline()
        );
      }),
      (g.prototype.execute = function (e, t, n) {
        const GCore = () =>
          new u(
            () => {
              this._executeAction(e, t, n);
            },
            () => {
              gDesigner.stats("action-cancelled_export", this._type);
            }
          );
        gDesigner.isOffline() ? GOfflineDialog.openUnavailableFeature(GCore) : GCore();
      }),
      (g.prototype._executeAction = function (e, t, n) {
        var GCore = this;
        if ("open" === this._type) {
          let e = { closable: true, showCloudOptions: true, openFromCloud: true };
          gDesigner.openNewDocumentDialog(e);
        } else if ("save" === this._type) {
          var GEditor = gDesigner.getActiveDocument();
          if (GEditor.isCommercialProductFile())
            return void GEditor.openPaywall(this.getId());
          var MenuItemBuilder = GEditor.getStorageItem();
          MenuItemBuilder && MenuItemBuilder instanceof c.Item
            ? GCloudStorage.performSave(
                GEditor,
                () => {
                  t && t(l.Saved);
                },
                () => {
                  t && t(l.SaveFailed);
                }
              )
            : GCore._saveAs(false, e, t);
        } else if ("new" === this._type) {
          let n = {
            closable: true,
            cb: function () {
              GCore._saveAs(true, e, t);
            },
          };
          gDesigner.openNewDocumentDialog(n);
        } else "save-as" === this._type && GCore._saveAs(false, e, t, n);
      }),
      (g.prototype._hasUnsupported = async function () {
        return false;
      }),
      (g.prototype._saveAs = async function (e, t, n, GCore) {
        var GEditor = t || gDesigner.getActiveDocument();
        if (GEditor.isCommercialProductFile()) GEditor.openPaywall(this.getId());
        else {
          var MenuItemBuilder = GEditor.getTitle();
          (!GEditor.isDocumentFromTemplate() && (await this._hasUnsupported(GEditor))) ||
            gDesigner.openCloudSaveDialog(
              GEditor,
              function () {
                e && gDesigner.getWindows().removeWindow(GEditor.getActiveWindow()),
                  n && n(l.SaveCancelled);
              },
              MenuItemBuilder,
              n,
              GCore
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
      (exports.exports = g);
  }