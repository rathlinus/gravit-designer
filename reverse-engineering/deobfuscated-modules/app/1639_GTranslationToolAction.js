/**
 * Webpack Module #1639
 * Type: class
 * Name: GTranslationToolAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */;
    const i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */,
      r = require(1640) /* module_1640 */,
      { IS_TRUNK: s, IS_LOCALHOST: l } = require(231) /* module_231 */;
    function c() {}
    o.GObject.inherit(c, a),
      (c.ID = "help.translationtool"),
      (c.TITLE = new o.GLocaleKey("GTranslationToolAction", "title")),
      (c.prototype._translationTool = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return o.GLocale.get(c.TITLE) + " [DEVELOPMENT]";
      }),
      (c.prototype.getCategory = function () {
        return i.CATEGORY_HELP;
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
        this._translationTool || (this._translationTool = new r()),
          this._translationTool.init();
      }),
      (c.prototype.toString = function () {
        return "[Object GTranslationToolAction]";
      }),
      (exports.exports = c);
  }