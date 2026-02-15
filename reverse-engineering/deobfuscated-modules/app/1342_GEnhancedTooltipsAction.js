/**
 * Webpack Module #1342
 * Type: class
 * Name: GEnhancedTooltipsAction
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    n(3) /* module_3 */;
    var i = n(1) /* module_1 */,
      a = o(n(18) /* module_18 */),
      r = o(n(31) /* GAction */);
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
      (e.exports = c);
  }