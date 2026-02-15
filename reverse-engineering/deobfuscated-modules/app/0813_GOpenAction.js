/**
 * Webpack Module #813
 * Type: class
 * Name: GOpenAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* MenuItemBuilder */,
      r = require(31) /* GAction */,
      s = require(163) /* module_163 */;
    const l = require(446) /* module_446 */;
    function c() {}
    o.GObject.inherit(c, r),
      (c.ID = "file.open"),
      (c.TITLE = new o.GLocaleKey("GOpenAction", "title")),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return a.CATEGORY_FILE;
      }),
      (c.prototype.getGroup = function () {
        return "file-open";
      }),
      (c.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "O"];
      }),
      (c.prototype.isEnabled = function (e) {
        return (
          (e = e || gDesigner.getDefaultStorage()).canPromptOpen() &&
          gDesigner.getApplicationManager().isOpenFilesFromLocalEnabled()
        );
      }),
      (c.prototype.isAvailable = function () {
        return (
          i.GPlatform.webBrowser !== i.GPlatform.constructor.WebBrowser.Safari
        );
      }),
      (c.prototype.execute = function (e, t) {
        new l(
          () => {
            (e = e || gDesigner.getDefaultStorage()).openPrompt(
              s.FileTypes.filter((e) => e.load),
              (e) => {
                gDesigner.openDocument(e), t && t();
              },
              false
            );
          },
          () => {
            gDesigner.stats("action-cancelled_anonymous", this.getId());
          }
        );
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-touch-file-open" : "";
      }),
      (c.prototype.toString = function () {
        return "[Object GOpenAction]";
      }),
      (exports.exports = c);
  }