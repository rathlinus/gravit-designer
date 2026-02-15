/**
 * Webpack Module #877
 * Type: class
 * Name: GPasteAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  require(53) /* GTools */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  require(44) /* GSystemDialog */;
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getIcon() {
      return 'gravit-icon-paste';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT_PASTE;
    }

    getGroup() {
      return 'ccp/paste';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'V'];
    }

    isEnabled() {
      return !!gDesigner.getActiveDocument();
    }

    executeFromShortcut() {
      var e = gDesigner.getPaste(),
        t = null;
      return (
        e && (e.assignCallback(null), (t = e.getArea())),
        (document.activeElement &&
          $(document.activeElement).is(':editable') &&
          !gDesigner.isGravitIME(document.activeElement)) ||
          (t && (e.setAllowFocus(true), t.focus())),
        false
      );
    }

    execute() {
      gDesigner
        .getPaste()
        .pasteFromClipboard()
        .catch((e) => {
          this._pasteFromInternalClipboard();
        });
    }

    _pasteFromInternalClipboard() {
      gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE) &&
        (gDesigner.getPaste().assignCallback(null),
        gDesigner.getPaste().handlePasteData({
          [GCore.GNode.MIME_TYPE]: gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE),
        }));
    }

    toString() {
      return '[Object GPasteAction]';
    }

    static ID = 'paste.paste';

    static TITLE = new GCore.GLocaleKey('GPasteAction', 'title');

  }
  exports.exports = s;
}