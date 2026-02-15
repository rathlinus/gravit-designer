/**
 * Webpack Module #1602
 * Type: class
 * Name: GNewClipboardAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  require(53) /* GTools */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GDocument = require(163) /* GDocument */,
    s = (require(449) /* GFitAllAction */, require(31)) /* GAction */;
  class l extends s {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'document';
    }

    getShortcut() {
      return [
        GEditor.GKey.Constant.SHIFT,
        GEditor.GKey.Constant.CONTROL,
        GEditor.GKey.Constant.OPTION,
        'N',
      ];
    }

    isEnabled() {
      return (
        !!gDesigner.getApplicationManager().isCopyPasteEnabled() &&
        !!gDesigner.getActiveDocument() &&
        !!gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
      );
    }

    execute() {
      var e = GCore.GNode.deserialize(gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE));
      if (e && e.length > 0) {
        var module = e.filter(function (e) {
          return e instanceof GCore.GItem || e instanceof GCore.GLayer;
        });
        if (module.length > 0) {
          var require = gDesigner.createScene();
          (require.getActivePage().setProperties(['bck', 'w', 'h'], [GCore.GRGBColor.WHITE, 0, 0]),
            gDesigner.addDocument(new GDocument(require)));
          var GEditor = gDesigner.getActiveDocument().getEditor();
          GEditor.beginTransaction();
          try {
            GEditor.insertElements(module, true, true, true);
          } finally {
            (GEditor.commitTransaction('Paste'),
              gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, null));
          }
          gDesigner.getActiveDocument().getActiveWindow().centerAndZoom();
        }
      }
    }

    _getBBox(e) {
      var t = null;
      return (
        GCore.GUtil.each(e, function (e, n) {
          var GEditor = n.getPaintBBox();
          GEditor &&
            GEditor.getWidth() + GEditor.getHeight() > 0 &&
            (t = t
              ? t.united(GEditor)
              : new GCore.GRect(
                  GEditor.getX(),
                  GEditor.getY(),
                  GEditor.getWidth(),
                  GEditor.getHeight()
                ));
        }),
        t
      );
    }

    toString() {
      return '[Object GNewClipboardAction]';
    }

    static ID = 'file.new.clipboard';

    static TITLE = new GCore.GLocaleKey('GNewClipboardAction', 'title');

  }
  exports.exports = l;
}