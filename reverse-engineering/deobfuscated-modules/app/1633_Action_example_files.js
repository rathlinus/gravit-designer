/**
 * Webpack Module #1633
 * Type: action
 * Name: Action_example_files
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */;
    const GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GOfflineDialog = require(256) /* GOfflineDialog */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "example-files"),
      (s.TITLE = new GCore.GLocaleKey("GExampleFilesAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP_LEARN;
      }),
      (s.prototype.getGroup = function () {
        return "help/learn";
      }),
      (s.prototype.execute = function () {
        const exports = {
            closable: true,
            showCloudOptions: true,
            openFromCloud: true,
            nativeCloud: true,
            showExampleFiles: true,
          },
          module = () => gDesigner.openNewDocumentDialog(exports);
        gDesigner.isOffline() ? GOfflineDialog.openUnavailableFeature(module) : module();
      }),
      (s.prototype.toString = function () {
        return "[GObject GExampleFilesAction]";
      }),
      (exports.exports = s);
  }