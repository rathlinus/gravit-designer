/**
 * Webpack Module #1184
 * Type: class
 * Name: GPasteInsideAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = (require(53) /* GTools */, require(18)) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return a.CATEGORY_EDIT_PASTE;
    }

    getGroup() {
      return 'ccp/paste';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-paste-inside' : null;
    }

    getShortcut() {
      return [
        GEditor.GKey.Constant.OPTION,
        GEditor.GKey.Constant.SHIFT,
        GEditor.GKey.Constant.META,
        'V',
      ];
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getSelection();
        if (module) {
          if (document.queryCommandSupported('paste')) return true;
          var require = gDesigner.getClipboardMimeTypes();
          if (require && require.indexOf(GCore.GNode.MIME_TYPE) >= 0)
            for (var GEditor = 0; GEditor < module.length; ++GEditor)
              if (module[GEditor].hasMixin(GCore.GNode.Container)) return true;
        }
      }
      return false;
    }

    execute() {
      (gDesigner.getPaste().assignCallback(this._paste.bind(this)),
        (!gDesigner.isTouchDevice() && document.execCommand('paste')) ||
          (gDesigner.getPaste().assignCallback(null),
          this._paste(
            GCore.GNode.deserialize(gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE))
          )));
    }

    _paste(e, t) {
      if (e && e.length > 0) {
        for (var require = [], GEditor = 0; GEditor < e.length; ++GEditor)
          e[GEditor] instanceof GCore.GElement && require.push(e[GEditor]);
        if (
          (require = gDesigner
            .getActiveDocument()
            .filterUnrestrictedCommercialFileElements(require)).length > 0
        ) {
          var a = gDesigner.getActiveDocument().getEditor(),
            GElementAction = [...a.getSelection()];
          (require.forEach((e) => {
            e instanceof GCore.GText &&
              !e.getProperty('content') &&
              (a.insertElements([e], false, true, true), e.getParent().removeChild(e));
          }),
            a.beginTransaction());
          try {
            for (GEditor = 0; GEditor < GElementAction.length; ++GEditor) {
              var s = GElementAction[GEditor];
              if (s.hasMixin(GCore.GNode.Container) && !s.isLocked()) {
                for (var l = [], c = 0; c < require.length; ++c)
                  require[c].validateInsertion(s) && l.push(require[c].clone());
                a.insertElements(l, !t, true, false, true, s);
                var d = s instanceof GCore.GElement ? s.getGeometryBBox() : null;
                if (d) {
                  var u = d.getX(),
                    p = d.getY(),
                    g = null;
                  l.forEach((e) => {
                    var t = e.getGeometryBBox();
                    t && (g = g ? g.united(t) : t);
                  });
                  var h = g ? g.getX() : null,
                    f = g ? g.getY() : null,
                    m = null;
                  if (
                    (null === u ||
                      null === h ||
                      (GCore.GMath.isEqualEps(u, h) && GCore.GMath.isEqualEps(p, f)) ||
                      (m = new GCore.GTransform(1, 0, 0, 1, u - h, p - f)),
                    m)
                  )
                    for (c = 0; c < l.length; ++c) {
                      var y = l[c];
                      y.hasMixin(GCore.GElement.Transform) && y.transform(m, true);
                    }
                }
              }
            }
          } finally {
            a.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }
    }

    toString() {
      return '[Object GPasteInsideAction]';
    }

    static ID = 'edit.paste.inside';

    static TITLE = new GCore.GLocaleKey('GPasteInsideAction', 'title');

  }
  exports.exports = s;
}