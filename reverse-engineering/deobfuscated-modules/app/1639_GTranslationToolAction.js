/**
 * Webpack Module #1639
 * Type: class
 * Name: GTranslationToolAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GTranslationToolDialog = require(1640) /* GTranslationToolDialog */,
      { IS_TRUNK: s, IS_LOCALHOST: l } = require(231) /* module_231 */;
    function c() {}
    GCore.GObject.inherit(c, GAction),
      (c.ID = "help.translationtool"),
      (c.TITLE = new GCore.GLocaleKey("GTranslationToolAction", "title")),
      (c.prototype._translationTool = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return GCore.GLocale.get(c.TITLE) + " [DEVELOPMENT]";
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (c.prototype.getGroup = function () {
        return "help";
      }),
      (c.prototype.isEnabled = function () {
        return true;
      }),
      (c.prototype.isVisible = function () {
        return !(!s && !l);
      }),
      (c.prototype.execute = function () {
        this._translationTool || (this._translationTool = new GTranslationToolDialog()),
          this._translationTool.init();
      }),
      (c.prototype.toString = function () {
        return "[Object GTranslationToolAction]";
      }),
      (exports.exports = c);
  }