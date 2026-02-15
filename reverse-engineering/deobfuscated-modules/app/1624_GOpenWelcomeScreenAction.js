/**
 * Webpack Module #1624
 * Type: class
 * Name: GOpenWelcomeScreenAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */;
    function r() {}
    GCore.GObject.inherit(r, GAction),
      (r.ID = "open-welcome-screen"),
      (r.TITLE = new GCore.GLocaleKey("GOpenWelcomeScreenAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
      }),
      (r.prototype.getGroup = function () {
        return "help";
      }),
      (r.prototype.isEnabled = function () {
        return (
          (!gDesigner._newDocumentDialog ||
            !gDesigner._newDocumentDialog.isOpen()) &&
          gDesigner.getApplicationManager().isCreatingNewDocumentEnabled() &&
          gDesigner.getLicense().canAccessFreemium()
        );
      }),
      (r.prototype.execute = function () {
        gDesigner.openNewDocumentDialog({ closable: true, showCloudOptions: true });
      }),
      (r.prototype.toString = function () {
        return "[Object GOpenWelcomeScreenAction]";
      }),
      (exports.exports = r);
  }