/**
 * Webpack Module #877
 * Type: class
 * Name: GPasteAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    require(53) /* GTools */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    require(44) /* GSystemDialog */;
    function s() {}
    GCore.GObject.inherit(s, GAction),
      (s.ID = "paste.paste"),
      (s.TITLE = new GCore.GLocaleKey("GPasteAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getIcon = function () {
        return "gravit-icon-paste";
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.META, "V"];
      }),
      (s.prototype.isEnabled = function () {
        return !!gDesigner.getActiveDocument();
      }),
      (s.prototype.executeFromShortcut = function () {
        var e = gDesigner.getPaste(),
          t = null;
        return (
          e && (e.assignCallback(null), (t = e.getArea())),
          (document.activeElement &&
            $(document.activeElement).is(":editable") &&
            !gDesigner.isGravitIME(document.activeElement)) ||
            (t && (e.setAllowFocus(true), t.focus())),
          false
        );
      }),
      (s.prototype.execute = function () {
        gDesigner
          .getPaste()
          .pasteFromClipboard()
          .catch((e) => {
            this._pasteFromInternalClipboard();
          });
      }),
      (s.prototype._pasteFromInternalClipboard = function () {
        gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE) &&
          (gDesigner.getPaste().assignCallback(null),
          gDesigner.getPaste().handlePasteData({
            [GCore.GNode.MIME_TYPE]: gDesigner.getClipboardContent(
              GCore.GNode.MIME_TYPE
            ),
          }));
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteAction]";
      }),
      (exports.exports = s);
  }