/**
 * Webpack Module #1623
 * Type: class
 * Name: GNewFromTemplateAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(18) /* module_18 */,
      a = n(31) /* GAction */,
      r = n(119) /* module_119 */;
    function s() {}
    o.GObject.inherit(s, a),
      (s.ID = "file.open-from-template"),
      (s.TITLE = new o.GLocaleKey("GNewFromTemplateAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return i.CATEGORY_FILE;
      }),
      (s.prototype.getGroup = function () {
        return "document";
      }),
      (s.prototype.isEnabled = function () {
        return (
          r.isOnline() &&
          !gDesigner.isOffline(6e5) &&
          gDesigner.getApplicationManager().isCreatingNewDocumentEnabled()
        );
      }),
      (s.prototype.execute = function () {
        gContainer.newDocumentActionPerformed(),
          gDesigner.openNewDocumentDialog({
            closable: true,
            showCloudOptions: true,
            defaultOption: "templates-option",
            newOrFromTemplate: true,
          });
      }),
      (s.prototype.toString = function () {
        return "[Object GNewFromTemplateAction]";
      }),
      (e.exports = s);
  }