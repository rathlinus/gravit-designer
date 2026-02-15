/**
 * Webpack Module #1342
 * Type: class
 * Name: GEnhancedTooltipsAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GAction = _interopRequireDefault(require(31) /* GAction */);
    const s = "designer.settings.enhanced-tooltips.enabled";
    let l = true;
    function c() {
      gContainer.getProperty(s).then((e) => {
        "boolean" == typeof e && (l = e);
      });
    }
    GCore.GObject.inherit(c, GAction.default),
      (c.ID = "help.tooltip-visibility"),
      (c.TITLE = new GCore.GLocaleKey("GEnhancedTooltipsAction", "title")),
      (c.GroupID = "help/learn"),
      (c.StoragePropertyName = s),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return GCore.GLocale.get(c.TITLE);
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.default.CATEGORY_HELP_LEARN;
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