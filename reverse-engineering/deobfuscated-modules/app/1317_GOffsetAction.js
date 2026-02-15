/**
 * Webpack Module #1317
 * Type: class
 * Name: GOffsetAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GOutlineAction = require(1185) /* GOutlineAction */;
    function a() {}
    GCore.GObject.inherit(a, GOutlineAction),
      (a.ID = "modify.offset"),
      (a.TITLE = new GCore.GLocaleKey("GOffsetAction", "title")),
      (a.prototype.getId = function () {
        return a.ID;
      }),
      (a.prototype.getTitle = function () {
        return a.TITLE;
      }),
      (a.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (a.prototype.getShortcut = function () {
        return null;
      }),
      (a.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-expand-shrink" : null;
      }),
      (a.prototype._dialogPromptMessage = function () {
        return GCore.GLocale.get(
          new GCore.GLocaleKey("GOffsetAction", "text.dialog-prompt-message")
        );
      }),
      (a.prototype._makeOffsetter = function (e, t) {
        var n;
        if (t.hasMixin(GCore.GStylable)) {
          var GOutlineAction = t.getPaintLayers();
          if (GOutlineAction) {
            var a = GOutlineAction.getBorderLayers(true).pop();
            a && (n = a.$_blc);
          }
        }
        return (
          (t = GCore.GPathUtil.makeClockWise(t)),
          e > 0
            ? new GCore.GVertexOffsetter(t, e, false, true, 0, n)
            : new GCore.GVertexOffsetter(t, -e, true, false, 0, n)
        );
      }),
      (a.prototype._dialogAlertMessage = function () {
        return GCore.GLocale.get(
          new GCore.GLocaleKey("GOffsetAction", "text.invalid-value")
        );
      }),
      (a.prototype.toString = function () {
        return "[Object GOffsetAction]";
      }),
      (exports.exports = a);
  }