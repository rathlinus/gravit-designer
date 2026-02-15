/**
 * Webpack Module #448
 * Type: class
 * Name: GGravitCloudAction
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GActionIconMap = require(844) /* GActionIconMap */,
    l = require(86) /* module_86 */,
    c = require(220) /* Item */,
    GCloudStorage = require(119) /* GCloudStorage */,
    GLoginPanel = require(446);
  const GOfflineDialog = require(256);
  class g extends GAction {
    constructor(e) {
      super();
      ((this._type = e), (this._title = new GCore.GLocaleKey('GGravitCloudAction', 'title.' + e)));
    }

    _type = null;
    _title = null;

    getId() {
      return g.getIdForAction(this._type);
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return this._type === g.Actions.Open ? 'file-open' : 'file';
    }

    getGroupIcon() {
      return GActionIconMap['gravit-cloud'];
    }

    getShortcut() {
      return this._type == g.Actions.Open
        ? [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'O']
        : this._type == g.Actions.SaveAs
          ? [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'S']
          : null;
    }

    isEnabled() {
      if (!gDesigner.getApplicationManager().isEditingEnabled() && this._type === g.Actions.Save)
        return false;
      if (
        !gDesigner.getApplicationManager().isOpenFromCloudEnabled() &&
        this._type === g.Actions.Open
      )
        return false;
      if (!gDesigner.getApplicationManager().isSavingAsEnabled() && this._type === g.Actions.SaveAs)
        return false;
      return (
        !(!gDesigner.getActiveDocument() && this._type !== g.Actions.Open) &&
        !!GCloudStorage.isOnline()
      );
    }

    execute(e, t, n) {
      const GCore = () =>
        new GLoginPanel(
          () => {
            this._executeAction(e, t, n);
          },
          () => {
            gDesigner.stats('action-cancelled_export', this._type);
          }
        );
      gDesigner.isOffline() ? GOfflineDialog.openUnavailableFeature(GCore) : GCore();
    }

    _executeAction(e, t, n) {
      var GCore = this;
      if ('open' === this._type) {
        let e = { closable: true, showCloudOptions: true, openFromCloud: true };
        gDesigner.openNewDocumentDialog(e);
      } else if ('save' === this._type) {
        var GEditor = gDesigner.getActiveDocument();
        if (GEditor.isCommercialProductFile()) return void GEditor.openPaywall(this.getId());
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
      } else if ('new' === this._type) {
        let n = {
          closable: true,
          cb: function () {
            GCore._saveAs(true, e, t);
          },
        };
        gDesigner.openNewDocumentDialog(n);
      } else 'save-as' === this._type && GCore._saveAs(false, e, t, n);
    }

    async _hasUnsupported() {
      return false;
    }

    async _saveAs(e, t, n, GCore) {
      var GEditor = t || gDesigner.getActiveDocument();
      if (GEditor.isCommercialProductFile()) GEditor.openPaywall(this.getId());
      else {
        var MenuItemBuilder = GEditor.getTitle();
        (!GEditor.isDocumentFromTemplate() && (await this._hasUnsupported(GEditor))) ||
          gDesigner.openCloudSaveDialog(
            GEditor,
            function () {
              (e && gDesigner.getWindows().removeWindow(GEditor.getActiveWindow()),
                n && n(l.SaveCancelled));
            },
            MenuItemBuilder,
            n,
            GCore
          );
      }
    }

    getIcon() {
      return gDesigner.getApplicationManager().isOpenFromCloudEnabled() &&
        this._type === g.Actions.Open
        ? gDesigner.isTouchEnabled()
          ? 'gravit-icon-touch-file-open-cloud'
          : ''
        : gDesigner.getApplicationManager().isSavingAsEnabled() && this._type === g.Actions.SaveAs
          ? gDesigner.isTouchEnabled()
            ? 'gravit-icon-touch-file-save-as-cloud'
            : ''
          : undefined;
    }

    toString() {
      return '[Object GGravitCloudAction]';
    }

    static Actions = { New: 'new', Save: 'save', SaveAs: 'save-as', Open: 'open' };

    static ID = 'gravit-cloud';

    static getIdForAction(e) {
      return g.ID + '.' + e;
    }

  }
  exports.exports = g;
}