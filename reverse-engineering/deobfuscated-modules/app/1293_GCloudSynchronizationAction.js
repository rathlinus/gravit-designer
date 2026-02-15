/**
 * Webpack Module #1293
 * Type: class
 * Name: GCloudSynchronizationAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */;
    const { FILE_FORMATS: i, CLOUD_SYNC_FEATURE: { NEW_LAYOUT: a } = {} } =
        require(10) /* AppSettings */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GCloudStorage = require(119) /* GCloudStorage */,
      GGravitCloudAction = require(448) /* GGravitCloudAction */,
      d = require(86) /* module_86 */,
      u = require(163) /* GDocument */,
      GSaveAsAction = require(445) /* GSaveAsAction */,
      GSystemDialog = require(44) /* GSystemDialog */,
      h = i.find((e) => e.default).ext;
    function f() {}
    GCore.GObject.inherit(f, GAction),
      (f.ID = "sync"),
      (f.prototype.getId = function () {
        return f.ID;
      }),
      (f.prototype._getSyncInformation = function (e) {
        if (e.getScene()) {
          const t = e.getScene().lastModifiedDate();
          return t
            ? GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GCloudSynchronizationAction",
                  "text.last-synced-at"
                )
              ).replace(
                "%date",
                GCore.GLocale.toLocaleDate(t, {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })
              )
            : GCore.GLocale.get(
                new GCore.GLocaleKey("GDocumentChooser", "text.unavailable")
              );
        }
      }),
      (f.prototype.isAvailable = function () {
        return !!a;
      }),
      (f.prototype.getTitle = function () {
        const exports = gDesigner.getActiveDocument();
        if (exports) {
          if (exports.isSynchronizing())
            return new GCore.GLocaleKey(
              "GCloudSynchronizationAction",
              "text.syncing"
            );
          if (exports.isCloudFile()) return this._getSyncInformation(exports);
          if (exports.isCloudSyncOn())
            return new GCore.GLocaleKey(
              "GCloudSynchronizationAction",
              "text.unsync-from-cloud"
            );
        }
        return new GCore.GLocaleKey(
          "GCloudSynchronizationAction",
          "text.sync-to-cloud"
        );
      }),
      (f.prototype.getIcon = function () {
        const exports = gDesigner.getActiveDocument();
        if (exports) {
          if (exports.isSynchronizing()) return "gravit-icon-cloud-syncing";
          if (exports.isCloudSyncOn() || exports.isCloudFile())
            return "gravit-icon-cloud-synced";
        }
        return "gravit-icon-cloud-unsynced";
      }),
      (f.prototype.getInfo = function () {
        const exports = gDesigner.getActiveDocument();
        return exports && exports.isCloudSyncOn() && !exports.isSynchronizing()
          ? this._getSyncInformation(exports)
          : null;
      }),
      (f.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (f.prototype.getGroup = function () {
        return "file";
      }),
      (f.prototype.isVisible = function () {
        const exports = gDesigner.getActiveDocument();
        return (
          !!exports &&
          !exports.isWebFile() &&
          !exports.isExternalFile() &&
          !exports.isNew() &&
          (!exports.isCloudSyncOn() || exports.isCloudSynchronismAvailable())
        );
      }),
      (f.prototype.isEnabled = function () {
        const exports = gDesigner.getActiveDocument();
        return (
          !!exports &&
          !exports.isCloudFile() &&
          ((!exports.getScene().getProperty("cfs") &&
            !exports.getScene().getProperty("cid")) ||
            exports.getScene().isCloudSynchronization())
        );
      }),
      (f.prototype._performCloudSync = function (e) {
        gDesigner.getDefaultStorage().canSave()
          ? e.isNew()
            ? GCloudStorage.createFile(e, (t) => {
                e.getScene().setCloudSynchronization(t.id),
                  gDesigner.executeAction(
                    GSaveAsAction.ID + "." + h,
                    [
                      null,
                      e,
                      () => {
                        GCloudStorage.renameFile(t, e.getTitle(), () => {
                          e.storeToCloud(e.getScene());
                        });
                      },
                    ],
                    undefined,
                    true
                  );
              })
            : e.isCloudFile()
            ? gDesigner.executeAction(GSaveAsAction.ID + "." + h, undefined, undefined, true)
            : GCloudStorage.createFile(e, (t) => {
                e.getScene().setCloudSynchronization(t.id),
                  e.storeToCloud(e.getScene(), () => {
                    e.store(null, null, null, {
                      lastModifiedDate: e.getScene().getLastSavedTime(),
                    });
                  });
              })
          : e.isCloudFile()
          ? gDesigner.executeAction(GSaveAsAction.ID + "." + h, undefined, undefined, true)
          : gDesigner.executeAction(
              GGravitCloudAction.ID + ".save-as",
              [
                e,
                (t) => {
                  t === d.Loaded && gDesigner.removeDocument(e, null, true);
                },
                true,
              ],
              undefined,
              true
            );
      }),
      (f.prototype._toggleCloudSync = function (e) {
        const module = !e.isCloudSyncOn(),
          require = e.getScene();
        require.setProperty("cfs", module),
          require.getProperty("cfs")
            ? e.chooseLatestDocument(
                require,
                function (t, GCore) {
                  if (t !== require || GCore) {
                    const n = new u(e.getStorageItem());
                    n.setScene(t), gDesigner.replaceDocument(e, n);
                  } else
                    e.storeToCloud(t, () => {
                      gDesigner.getDefaultStorage().canSave() &&
                        e.store(null, null, null, {
                          lastModifiedDate: require.getLastSavedTime(),
                        });
                    });
                },
                function () {
                  GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GDocument", "text.sync-to-cloud-error")
                    )
                  );
                },
                function (e, t) {
                  return (
                    t.lastModifiedDate().getTime() >
                    e.lastModifiedDate().getTime()
                  );
                }
              )
            : e.isCloudFile() ||
              (gDesigner.getDefaultStorage().canSave()
                ? e.store()
                : gDesigner.executeAction(GSaveAsAction.ID + "." + h, undefined, undefined, true));
      }),
      (f.prototype.statsValue = function () {
        return gDesigner.getActiveDocument().isCloudSyncOn()
          ? f.ID + ".unsync-from-cloud"
          : f.ID + ".sync-to-cloud";
      }),
      (f.prototype.execute = function (e) {
        (e = e || gDesigner.getActiveDocument()) &&
          (e.hasCloudReference()
            ? this._toggleCloudSync(e)
            : this._performCloudSync(e));
      }),
      (f.prototype.toString = function () {
        return "[Object GCloudSynchronizationAction]";
      }),
      (exports.exports = f);
  }