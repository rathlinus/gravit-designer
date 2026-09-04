/**
 * Webpack Module #813
 * Type: class
 * Name: GOpenAction
 */

function (e, t, n) {
    "use strict";
    n(3), n(4), n(41);
    var o = n(1),
      i = n(15),
      a = n(18),
      r = n(31),
      s = n(163);
    const l = n(446);
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
            // Under Electron, use the native OS Open dialog instead of the
            // browser's File System Access picker below — real fs access
            // means a real path, which feeds Recent Files (see
            // public/index.html's window.__gravitOpenFromComputer); the FSA
            // API never exposes one. Plain-browser/server.js builds (no
            // window.gravitOpenFile) keep the original behavior unchanged.
            if (window.gravitOpenFile && window.__gravitOpenFromComputer) {
              return void window.__gravitOpenFromComputer(t);
            }
            (e = e || gDesigner.getDefaultStorage()).openPrompt(
              s.FileTypes.filter((e) => e.load),
              (e) => {
                gDesigner.openDocument(e), t && t();
              },
              !0
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
      (e.exports = c);
  }