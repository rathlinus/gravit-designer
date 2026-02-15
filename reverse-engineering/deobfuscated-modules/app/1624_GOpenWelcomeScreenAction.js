/**
 * Webpack Module #1624
 * Type: class
 * Name: GOpenWelcomeScreenAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(31) /* GAction */,
      a = require(18) /* module_18 */;
    function r() {}
    o.GObject.inherit(r, i),
      (r.ID = "open-welcome-screen"),
      (r.TITLE = new o.GLocaleKey("GOpenWelcomeScreenAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return a.CATEGORY_HELP;
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