/**
 * Webpack Module #1629
 * Type: class
 * Name: GSharePointCheckOutAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(8) /* module_8 */, require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = o(require(443) /* module_443 */);
    const { isExecutingOnMSTeamsSync: r } = a.default;
    var s = require(18) /* module_18 */,
      l = require(31) /* GAction */;
    const c = require(1152) /* module_1152 */,
      d = require(44) /* GSystemDialog */;
    function u() {}
    i.GObject.inherit(u, l),
      (u.ID = "file.sharepoint-checkout"),
      (u.TITLE = new i.GLocaleKey("GSharePointCheckOutAction", "title")),
      (u.prototype.getId = function () {
        return u.ID;
      }),
      (u.prototype.getTitle = function () {
        return u.TITLE;
      }),
      (u.prototype.getCategory = function () {
        return s.CATEGORY_FILE;
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
            return d.alert(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GSharePointCheckOutAction",
                  "text.already-checkout"
                )
              )
            );
          await e.checkOut(),
            d.alert(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GSharePointCheckOutAction",
                  "text.successul-checkout"
                )
              )
            );
        } catch (e) {
          d.alert(e.message);
        }
      }),
      (u.prototype.toString = function () {
        return "[Object GSharePointCheckOutAction]";
      }),
      (exports.exports = u);
  }