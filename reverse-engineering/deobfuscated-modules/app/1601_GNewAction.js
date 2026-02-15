/**
 * Webpack Module #1601
 * Type: class
 * Name: GNewAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "file.new"),
      (s.TITLE = new GCore.GLocaleKey("GNewAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.isEnabled = function () {
        return gDesigner.getApplicationManager().isCreatingNewDocumentEnabled();
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (s.prototype.getGroup = function () {
        return "document";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.OPTION, "N"];
      }),
      (s.prototype.getAdditionalShortcuts = function () {
        return [[GEditor.GKey.Constant.META, "N"]];
      }),
      (s.prototype.execute = function () {
        gContainer.newDocumentActionPerformed(),
          gDesigner.openNewDocumentDialog({
            closable: true,
            showCloudOptions: true,
            defaultOption: "start-option",
            newOrFromTemplate: true,
          });
      }),
      (s.prototype.toString = function () {
        return "[Object GNewAction]";
      }),
      (exports.exports = s);
  }