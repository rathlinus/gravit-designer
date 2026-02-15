/**
 * Webpack Module #1342
 * Type: class
 * Name: GEnhancedTooltipsAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var i = require(1) /* module */,
      a = o(require(18) /* MenuItemBuilder */),
      r = o(require(31) /* GAction */);
    const s = "designer.settings.enhanced-tooltips.enabled";
    let l = true;
    function c() {
      gContainer.getProperty(s).then((e) => {
        "boolean" == typeof e && (l = e);
      });
    }
    i.GObject.inherit(c, r.default),
      (c.ID = "help.tooltip-visibility"),
      (c.TITLE = new i.GLocaleKey("GEnhancedTooltipsAction", "title")),
      (c.GroupID = "help/learn"),
      (c.StoragePropertyName = s),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return i.GLocale.get(c.TITLE);
      }),
      (c.prototype.getCategory = function () {
        return a.default.CATEGORY_HELP_LEARN;
      }),
      (c.prototype.getGroup = function () {
        return c.GroupID;
      }),
      (c.prototype.isCheckable = function () {
        return true;
      }),
      (c.prototype.isChecked = function () {
        return l;
      }),
      (c.prototype.isEnabled = function () {
        return true;
      }),
      (c.prototype.execute = function () {
        (l = !l), gContainer.setProperty(s, l);
      }),
      (c.prototype.statsValue = function () {
        return "".concat(c.ID, ".").concat(l ? "on" : "off");
      }),
      (c.prototype.toString = function () {
        return "[Object GEnhancedTooltipsAction]";
      }),
      (exports.exports = c);
  }