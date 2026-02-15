/**
 * Webpack Module #447
 * Type: class
 * Name: GSaveAction
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    DataModule_1247 = require(1247) /* DataModule_1247 */,
    AppSettings = require(10) /* AppSettings */,
    l = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GSaveAsAction = require(445) /* GSaveAsAction */,
    GGravitCloudAction = require(448) /* GGravitCloudAction */,
    g = require(86) /* module_86 */,
    GCloudStorage = require(119) /* GCloudStorage */,
    GCommonNames = require(1510) /* GCommonNames */,
    GWarnLinkedImageDialog = require(1511);
  const GSystemDialog = require(44) /* GSystemDialog */,
    v = require(1512);
  var GContainer = require(85) /* GContainer */,
    b = '.' + AppSettings.FILE_FORMATS.find((e) => e.default).ext;
  class w extends GAction {
    constructor() {
      super();
      w.TOOLTIP_CONFIG = {
      [l.TOOLTIP_AREA.TOOLBAR]: l.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GSaveAction', 'tooltip-title')),
      description: GCore.GLocale.get(new GCore.GLocaleKey('GSaveAction', 'tooltip-description')),
      shortcut: w.SHORTCUT,
      learnMore: '',
      }),
      };
    }

    getId() {
      return w.ID;
    }

    getTitle() {
      return w.TITLE;
    }

    getIcon() {
      return 'gravit-icon-save';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'file';
    }

    getShortcut() {
      return w.SHORTCUT;
    }

    isShortcutGlobal() {
      return true;
    }

    isEnabled(e) {
      return (
        !!gDesigner.getApplicationManager().isEditingEnabled() &&
        !(!(e = e || gDesigner.getActiveDocument()) || (!e.isModified() && !e.isNew())) &&
        !e.isSynchronizing() &&
        (!(e.isNew() || !e.getStorageItem() || !e.getStorageItem().getStorage().canSave()) ||
          gDesigner.canExecuteAction(GSaveAsAction.ID + b, [null, e], undefined, true))
      );
    }

    execute(e, t, n) {
      const GCore = e || gDesigner.getActiveDocument();
      if (GCore && GCore.isCommercialProductFile()) return (GCore.openPaywall(this.getId()), false);
      (gContainer.getRuntime() === GContainer.Runtime.IPad && (n = true), this._save(GCore, t, n));
    }

    async _performSave(e, t) {
      (await e.isUpdateAvailable())
        ? CollaborationMergeUtils.buildDialogDocumentHasUpdates.call(
            this,
            e,
            function () {
              e.reload();
            },
            function () {
              GCloudStorage.performSave(e, t);
            }
          )
        : GCloudStorage.performSave(e, t);
    }

    async _save(e, t, n) {
      if (gDesigner.getDefaultStorage().canSave()) {
        if (!e.getScene().hasLinkedFiles()) return this._saveDesktop(e, t, n);
        new GWarnLinkedImageDialog(() => {
          this._saveDesktop(e, t, n);
        }).open();
      } else {
        if (e.isNew()) return this._saveToCloud(e, t);
        if (e.isCloudFile() && e.getId()) {
          if (!(await e.canSaveToCloud())) return this._saveToCloud(e, t);
          await this._performSave(e, t);
        } else if (e.isExternalFile()) e.storeToCloud(e.getScene(), t);
        else {
          if (!e.hasCloudReference()) return this._saveToCloud(e, t);
          if (!e.isCloudSyncOn())
            return gDesigner.executeAction(GSaveAsAction.ID + b, [null, e, t], undefined, true);
          if (!(await e.canSaveToCloud())) return this._saveToCloud(e, t);
          e.chooseLatestDocument(
            e.getScene(),
            (n) => {
              n !== e.getScene() ? (e.setScene(n), t && t()) : e.storeToCloud(e.getScene(), t);
            },
            () => this._saveToCloud(e, t),
            (e, t) => t.lastModifiedDate().getTime() > e.lastModifiedDate().getTime(),
            () => {
              t && t();
            }
          );
        }
      }
    }

    async _saveDesktop(e, t) {
      let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      if (e.isNew()) {
        if (require) return this._saveToCloud(e, t);
        new GCommonNames(
          async function (n) {
            if (n === GCommonNames.file()) {
              if (await GGravitCloudAction.prototype._hasUnsupported.call(this, e)) return;
              return gDesigner.executeAction(GSaveAsAction.ID + b, [null, e, t], undefined, true);
            }
            if (n === GCommonNames.cloud()) return this._saveToCloud(e, t);
          }.bind(this),
          {
            closeCallback: (e) => e && t && t({ documentStatus: g.SaveCancelled }),
          }
        ).open();
      } else if (e.isCloudFile()) {
        if (!(await e.canSaveToCloud())) return this._saveToCloud(e, t);
        await this._performSave(e, t);
      } else if (e.hasCloudReference())
        if (e.isCloudSyncOn()) {
          if (!(await e.canSaveToCloud())) return this._saveToCloud(e, t);
          e.chooseLatestDocument(
            e.getScene(),
            (n) => {
              n !== e.getScene()
                ? (e.setScene(n),
                  e.store(e.getStorageItem(), t, null, {
                    lastModifiedDate: n.getLastSavedTime(),
                  }))
                : e.store(e.getStorageItem(), () => {
                    e.storeToCloud(e.getScene(), t);
                  });
            },
            (n) => {
              n && 404 === n.status
                ? e.store(e.getStorageItem(), t)
                : GSystemDialog.alert(AppSettings.gApi.formatError(n));
            },
            (e, t) => t.lastModifiedDate().getTime() > e.lastModifiedDate().getTime()
          );
        } else
          e.isExternalFile() ? e.storeToCloud(e.getScene(), t) : e.store(e.getStorageItem(), t);
      else if (e.isExternalFile()) e.storeToCloud(e.getScene(), t);
      else {
        const n = e.getStorageItem();
        let GCore = {};
        (n instanceof v.Item && (GCore = (0, DataModule_1247.updateSaveOptions)(GCore, e, n)),
          e.store(n, t, null, GCore));
      }
    }

    _saveToCloud(e, t) {
      return gDesigner.executeAction(
        GGravitCloudAction.ID + '.save-as',
        [
          e,
          (n) => {
            n === g.Loaded
              ? gDesigner.removeDocument(e, null, true)
              : n === g.Saved
                ? t && t({ documentStatus: g.Saved })
                : n === g.SaveCancelled && t && t({ documentStatus: g.SaveCancelled });
          },
        ],
        undefined,
        true
      );
    }

    getTooltipConfig(e) {
      return (e && w.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GSaveAction]';
    }

    static TOOLTIP_CONFIG = {
      [l.TOOLTIP_AREA.TOOLBAR]: l.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GSaveAction', 'tooltip-title')),
        description: GCore.GLocale.get(new GCore.GLocaleKey('GSaveAction', 'tooltip-description')),
        shortcut: w.SHORTCUT,
        learnMore: '',
      }),
    };

    static ID = 'file.save';

    static TITLE = new GCore.GLocaleKey('GSaveAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.META, 'S'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = w;
}