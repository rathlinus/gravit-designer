/**
 * Webpack Module #1627
 * Type: class
 * Name: GCloudSynchronizationInfoAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(3) /* module_3 */, require(34) /* module_34 */;
    var o = require(1) /* module */;
    const i = require(18) /* module_18 */,
      a = require(31) /* GAction */,
      r = require(85) /* GContainer */,
      { CLOUD_SYNC_FEATURE: { NEW_LAYOUT: s } = {} } = require(10) /* module_10 */;
    function l() {}
    o.GObject.inherit(l, a),
      (l.ID = "sync.info"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        const exports = gDesigner.getActiveDocument();
        if (exports && exports.getScene()) {
          const t = exports.getScene().lastModifiedDate();
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
        return o.GLocale.get(
          new o.GLocaleKey("GDocumentChooser", "text.unavailable")
        );
      }),
      (l.prototype.getCategory = function () {
        return i.CATEGORY_FILE;
      }),
      (l.prototype.getGroup = function () {
        return "file";
      }),
      (l.prototype.isVisible = function () {
        const exports = gDesigner.getActiveDocument();
        return exports && exports.isCloudSyncOn() && exports.isCloudSynchronismAvailable();
      }),
      (l.prototype.isEnabled = function () {
        return false;
      }),
      (l.prototype.isAvailable = function () {
        return (
          !!s &&
          gContainer.getRuntime() === r.Runtime.Electron &&
          o.GSystem.operatingSystem === o.GSystem.OperatingSystem.OSX_IOS
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GCloudSynchronizationInfoAction]";
      }),
      (exports.exports = l);
  }