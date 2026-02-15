/**
 * Webpack Module #1627
 * Type: class
 * Name: GCloudSynchronizationInfoAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GContainer = require(85) /* GContainer */,
      { CLOUD_SYNC_FEATURE: { NEW_LAYOUT: s } = {} } = require(10) /* AppSettings */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = "sync.info"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        const exports = gDesigner.getActiveDocument();
        if (exports && exports.getScene()) {
          const t = exports.getScene().lastModifiedDate();
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
        return GCore.GLocale.get(
          new GCore.GLocaleKey("GDocumentChooser", "text.unavailable")
        );
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
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
          gContainer.getRuntime() === GContainer.Runtime.Electron &&
          GCore.GSystem.operatingSystem === GCore.GSystem.OperatingSystem.OSX_IOS
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GCloudSynchronizationInfoAction]";
      }),
      (exports.exports = l);
  }