/**
 * Webpack Module #1633
 * Type: action
 * Name: Action_example_files
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */;
    const i = require(31) /* GAction */,
      a = require(18) /* module_18 */,
      r = require(256) /* GOfflineDialog */;
    function s() {}
    o.GObject.inherit(s, i),
      (s.ID = "example-files"),
      (s.TITLE = new o.GLocaleKey("GExampleFilesAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_HELP_LEARN;
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
        gDesigner.isOffline() ? r.openUnavailableFeature(module) : module();
      }),
      (s.prototype.toString = function () {
        return "[GObject GExampleFilesAction]";
      }),
      (exports.exports = s);
  }