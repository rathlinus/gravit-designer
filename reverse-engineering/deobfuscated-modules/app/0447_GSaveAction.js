/**
 * Webpack Module #447
 * Type: class
 * Name: GSaveAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      r = require(1247) /* module_1247 */,
      AppSettings = require(10) /* AppSettings */,
      l = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GSaveAsAction = require(445) /* GSaveAsAction */,
      GGravitCloudAction = require(448) /* GGravitCloudAction */,
      g = require(86) /* module_86 */,
      h = require(119) /* module_119 */,
      f = require(1510) /* module_1510 */,
      m = require(1511) /* module_1511 */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      v = require(1512) /* Item */;
    var GContainer = require(85) /* GContainer */,
      b = "." + AppSettings.FILE_FORMATS.find((e) => e.default).ext;
    function w() {
      w.TOOLTIP_CONFIG = {
        [l.TOOLTIP_AREA.TOOLBAR]: l.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GSaveAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GSaveAction", "tooltip-description")
          ),
          shortcut: w.SHORTCUT,
          learnMore: "",
        }),
      };
    }
    GCore.GObject.inherit(w, GAction),
      (w.ID = "file.save"),
      (w.TITLE = new GCore.GLocaleKey("GSaveAction", "title")),
      (w.SHORTCUT = [GEditor.GKey.Constant.META, "S"]),
      (w.TOOLTIP_CONFIG = null),
      (w.prototype.getId = function () {
        return w.ID;
      }),
      (w.prototype.getTitle = function () {
        return w.TITLE;
      }),
      (w.prototype.getIcon = function () {
        return "gravit-icon-save";
      }),
      (w.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (w.prototype.getGroup = function () {
        return "file";
      }),
      (w.prototype.getShortcut = function () {
        return w.SHORTCUT;
      }),
      (w.prototype.isShortcutGlobal = function () {
        return true;
      }),
      (w.prototype.isEnabled = function (e) {
        return (
          !!gDesigner.getApplicationManager().isEditingEnabled() &&
          !(
            !(e = e || gDesigner.getActiveDocument()) ||
            (!e.isModified() && !e.isNew())
          ) &&
          !e.isSynchronizing() &&
          (!(
            e.isNew() ||
            !e.getStorageItem() ||
            !e.getStorageItem().getStorage().canSave()
          ) ||
            gDesigner.canExecuteAction(GSaveAsAction.ID + b, [null, e], undefined, true))
        );
      }),
      (w.prototype.execute = function (e, t, n) {
        const GCore = e || gDesigner.getActiveDocument();
        if (GCore && GCore.isCommercialProductFile())
          return GCore.openPaywall(this.getId()), false;
        gContainer.getRuntime() === GContainer.Runtime.IPad && (n = true),
          this._save(GCore, t, n);
      }),
      (w.prototype._performSave = async function (e, t) {
        (await e.isUpdateAvailable())
          ? CollaborationMergeUtils.buildDialogDocumentHasUpdates.call(
              this,
              e,
              function () {
                e.reload();
              },
              function () {
                h.performSave(e, t);
              }
            )
          : h.performSave(e, t);
      }),
      (w.prototype._save = async function (e, t, n) {
        if (gDesigner.getDefaultStorage().canSave()) {
          if (!e.getScene().hasLinkedFiles()) return this._saveDesktop(e, t, n);
          new m(() => {
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
              return gDesigner.executeAction(
                GSaveAsAction.ID + b,
                [null, e, t],
                undefined,
                true
              );
            if (!(await e.canSaveToCloud())) return this._saveToCloud(e, t);
            e.chooseLatestDocument(
              e.getScene(),
              (n) => {
                n !== e.getScene()
                  ? (e.setScene(n), t && t())
                  : e.storeToCloud(e.getScene(), t);
              },
              () => this._saveToCloud(e, t),
              (e, t) =>
                t.lastModifiedDate().getTime() > e.lastModifiedDate().getTime(),
              () => {
                t && t();
              }
            );
          }
        }
      }),
      (w.prototype._saveDesktop = async function (e, t) {
        let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        if (e.isNew()) {
          if (require) return this._saveToCloud(e, t);
          new f(
            async function (n) {
              if (n === f.file()) {
                if (await GGravitCloudAction.prototype._hasUnsupported.call(this, e)) return;
                return gDesigner.executeAction(
                  GSaveAsAction.ID + b,
                  [null, e, t],
                  undefined,
                  true
                );
              }
              if (n === f.cloud()) return this._saveToCloud(e, t);
            }.bind(this),
            {
              closeCallback: (e) =>
                e && t && t({ documentStatus: g.SaveCancelled }),
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
              (e, t) =>
                t.lastModifiedDate().getTime() > e.lastModifiedDate().getTime()
            );
          } else
            e.isExternalFile()
              ? e.storeToCloud(e.getScene(), t)
              : e.store(e.getStorageItem(), t);
        else if (e.isExternalFile()) e.storeToCloud(e.getScene(), t);
        else {
          const n = e.getStorageItem();
          let GCore = {};
          n instanceof v.Item && (GCore = (0, r.updateSaveOptions)(GCore, e, n)),
            e.store(n, t, null, GCore);
        }
      }),
      (w.prototype._saveToCloud = function (e, t) {
        return gDesigner.executeAction(
          GGravitCloudAction.ID + ".save-as",
          [
            e,
            (n) => {
              n === g.Loaded
                ? gDesigner.removeDocument(e, null, true)
                : n === g.Saved
                ? t && t({ documentStatus: g.Saved })
                : n === g.SaveCancelled &&
                  t &&
                  t({ documentStatus: g.SaveCancelled });
            },
          ],
          undefined,
          true
        );
      }),
      (w.prototype.getTooltipConfig = function (e) {
        return (e && w.TOOLTIP_CONFIG[e]) || null;
      }),
      (w.prototype.toString = function () {
        return "[Object GSaveAction]";
      }),
      (exports.exports = w);
  }