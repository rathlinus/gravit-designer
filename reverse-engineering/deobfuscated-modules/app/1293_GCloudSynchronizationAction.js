/**
 * Webpack Module #1293
 * Type: class
 * Name: GCloudSynchronizationAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(3) /* module_3 */, require(34) /* module_34 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var o = require(1) /* module */;
    const { FILE_FORMATS: i, CLOUD_SYNC_FEATURE: { NEW_LAYOUT: a } = {} } =
        require(10) /* module_10 */,
      r = require(18) /* module_18 */,
      s = require(31) /* GAction */,
      l = require(119) /* module_119 */,
      c = require(448) /* GGravitCloudAction */,
      d = require(86) /* module_86 */,
      u = require(163) /* module_163 */,
      p = require(445) /* GSaveAsAction */,
      g = require(44) /* GSystemDialog */,
      h = i.find((e) => e.default).ext;
    function f() {}
    o.GObject.inherit(f, s),
      (f.ID = "sync"),
      (f.prototype.getId = function () {
        return f.ID;
      }),
      (f.prototype._getSyncInformation = function (e) {
        if (e.getScene()) {
          const t = e.getScene().lastModifiedDate();
          return t
            ? o.GLocale.get(
                new o.GLocaleKey(
                  "GCloudSynchronizationAction",
                  "text.last-synced-at"
                )
              ).replace(
                "%date",
                o.GLocale.toLocaleDate(t, {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })
              )
            : o.GLocale.get(
                new o.GLocaleKey("GDocumentChooser", "text.unavailable")
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
            return new o.GLocaleKey(
              "GCloudSynchronizationAction",
              "text.syncing"
            );
          if (exports.isCloudFile()) return this._getSyncInformation(exports);
          if (exports.isCloudSyncOn())
            return new o.GLocaleKey(
              "GCloudSynchronizationAction",
              "text.unsync-from-cloud"
            );
        }
        return new o.GLocaleKey(
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
        return r.CATEGORY_FILE;
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
            ? l.createFile(e, (t) => {
                e.getScene().setCloudSynchronization(t.id),
                  gDesigner.executeAction(
                    p.ID + "." + h,
                    [
                      null,
                      e,
                      () => {
                        l.renameFile(t, e.getTitle(), () => {
                          e.storeToCloud(e.getScene());
                        });
                      },
                    ],
                    undefined,
                    true
                  );
              })
            : e.isCloudFile()
            ? gDesigner.executeAction(p.ID + "." + h, undefined, undefined, true)
            : l.createFile(e, (t) => {
                e.getScene().setCloudSynchronization(t.id),
                  e.storeToCloud(e.getScene(), () => {
                    e.store(null, null, null, {
                      lastModifiedDate: e.getScene().getLastSavedTime(),
                    });
                  });
              })
          : e.isCloudFile()
          ? gDesigner.executeAction(p.ID + "." + h, undefined, undefined, true)
          : gDesigner.executeAction(
              c.ID + ".save-as",
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
                function (t, o) {
                  if (t !== require || o) {
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
                  g.alert(
                    o.GLocale.get(
                      new o.GLocaleKey("GDocument", "text.sync-to-cloud-error")
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
                : gDesigner.executeAction(p.ID + "." + h, undefined, undefined, true));
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