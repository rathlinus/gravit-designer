/**
 * Webpack Module #1628
 * Type: class
 * Name: GShareAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "file.share"),
      (r.TITLE = new GCore.GLocaleKey("GShareAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE_SHARE;
      }),
      (r.prototype.getGroup = function () {
        return "file-share/share";
      }),
      (r.prototype.isEnabled = function () {
        return gDesigner.getApplicationManager().isShareEnabled();
      }),
      (r.prototype.isVisible = function () {
        return true;
      }),
      (r.prototype.execute = function () {
        gDesigner.getShareManager().share();
      }),
      (r.prototype.toString = function () {
        return "[Object GShareAction]";
      }),
      (exports.exports = r);
  }