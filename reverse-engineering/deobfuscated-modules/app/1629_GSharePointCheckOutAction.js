/**
 * Webpack Module #1629
 * Type: class
 * Name: GSharePointCheckOutAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      a = _interopRequireDefault(require(443) /* module_443 */);
    const { isExecutingOnMSTeamsSync: r } = a.default;
    var MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    const c = require(1152) /* Item */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function u() {}
    GCore.GObject.inherit(u, GAction),
      (u.ID = "file.sharepoint-checkout"),
      (u.TITLE = new GCore.GLocaleKey("GSharePointCheckOutAction", "title")),
      (u.prototype.getId = function () {
        return u.ID;
      }),
      (u.prototype.getTitle = function () {
        return u.TITLE;
      }),
      (u.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (u.prototype.getGroup = function () {
        return "file";
      }),
      (u.prototype.isEnabled = function () {
        if (!r()) return false;
        const exports = gDesigner.getActiveDocument();
        if (!exports) return false;
        const module = exports.getStorageItem();
        return !!module && module instanceof c.Item;
      }),
      (u.prototype.isVisible = function () {
        return this.isEnabled();
      }),
      (u.prototype.execute = async function () {
        try {
          const e = gDesigner.getActiveDocument().getStorageItem();
          if ((await e.refreshCheckOutStatus(), e.isCheckedOutByMe()))
            return GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSharePointCheckOutAction",
                  "text.already-checkout"
                )
              )
            );
          await e.checkOut(),
            GSystemDialog.alert(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSharePointCheckOutAction",
                  "text.successul-checkout"
                )
              )
            );
        } catch (e) {
          GSystemDialog.alert(e.message);
        }
      }),
      (u.prototype.toString = function () {
        return "[Object GSharePointCheckOutAction]";
      }),
      (exports.exports = u);
  }