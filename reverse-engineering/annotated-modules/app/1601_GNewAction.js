/**
 * Webpack Module #1601
 * Type: class
 * Name: GNewAction
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* GCore */,
      i = n(15) /* GEditor */,
      a = n(18) /* MenuItemBuilder */,
      r = n(31) /* GAction */;
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
            closable: !0,
            showCloudOptions: !0,
            defaultOption: "start-option",
            newOrFromTemplate: !0,
          });
      }),
      (s.prototype.toString = function () {
        return "[Object GNewAction]";
      }),
      (e.exports = s);
  }