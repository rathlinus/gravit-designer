/**
 * Webpack Module #877
 * Type: class
 * Name: GPasteAction
 */

function (e, t, n) {
    "use strict";
    n(3) /* polyfill_RegExp_toString */;
    n(53) /* GTools */;
    var o = n(1) /* GCore */,
      i = n(15) /* GEditor */,
      a = n(18) /* MenuItemBuilder */,
      r = n(31) /* GAction */;
    n(44) /* GSystemDialog */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "paste.paste"),
      (s.TITLE = new o.GLocaleKey("GPasteAction", "title")),
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
        return a.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "V"];
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
            (t && (e.setAllowFocus(!0), t.focus())),
          !1
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
        gDesigner.getClipboardContent(o.GNode.MIME_TYPE) &&
          (gDesigner.getPaste().assignCallback(null),
          gDesigner.getPaste().handlePasteData({
            [o.GNode.MIME_TYPE]: gDesigner.getClipboardContent(
              o.GNode.MIME_TYPE
            ),
          }));
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteAction]";
      }),
      (e.exports = s);
  }