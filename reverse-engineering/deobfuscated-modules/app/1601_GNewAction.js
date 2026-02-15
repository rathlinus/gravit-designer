/**
 * Webpack Module #1601
 * Type: class
 * Name: GNewAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(31) /* GAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "file.new"),
      (s.TITLE = new o.GLocaleKey("GNewAction", "title")),
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
        return a.CATEGORY_FILE;
      }),
      (s.prototype.getGroup = function () {
        return "document";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.OPTION, "N"];
      }),
      (s.prototype.getAdditionalShortcuts = function () {
        return [[i.GKey.Constant.META, "N"]];
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