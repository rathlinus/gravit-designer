/**
 * Webpack Module #1182
 * Type: class
 * Name: GPasteHereAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    i = (require(15) /* GEditor */, require(18) /* MenuItemBuilder */, require(31)) /* GAction */;
  require(1313) /* URIListHandler */;
  class a extends i {
    constructor() {
      super();
      this._targetPosition = null;
    }

    _targetPosition = null;

    getId() {
      return a.ID;
    }

    getTitle() {
      return a.TITLE;
    }

    getIcon() {
      return null;
    }

    getCategory() {
      return null;
    }

    getGroup() {
      return null;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-paste-here' : null;
    }

    getShortcut() {
      return null;
    }

    isAvailable(e) {
      return !!e && 'context.menu' == e;
    }

    isEnabled() {
      if (document.queryCommandSupported('paste')) return true;
      var e = gDesigner.getClipboardMimeTypes();
      return !!(e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) && !!gDesigner.getActiveDocument();
    }

    execute() {
      (gDesigner.getPaste().assignCallback(this._paste.bind(this)),
        document.execCommand('paste') ||
          (gDesigner.getPaste().assignCallback(null),
          this._paste(
            GCore.GNode.deserialize(gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE))
          )));
    }

    setPosition(e) {
      this._targetPosition = gDesigner
        .getWindows()
        .getActiveWindow()
        .getView()
        .getViewTransform(gDesigner.getActiveDocument().getScene().getActivePage())
        .mapPoint(e);
    }

    _paste(e, t) {
      if (e && e.length > 0) {
        for (var require = [], i = 0; i < e.length; ++i)
          e[i] instanceof GCore.GElement && require.push(e[i]);
        if (
          (require = gDesigner
            .getActiveDocument()
            .filterUnrestrictedCommercialFileElements(require)).length > 0
        ) {
          var a = gDesigner.getActiveDocument().getEditor();
          (require.forEach((e) => {
            e instanceof GCore.GText &&
              !e.getProperty('content') &&
              (a.insertElements([e], false, true, true), e.getParent().removeChild(e));
          }),
            a.beginTransaction());
          try {
            var r;
            (a.insertElements(require, !t, true, true, true),
              require.forEach((e) => {
                var t = e.getGeometryBBox();
                t && (r = r ? r.united(t) : t);
              }));
            var s = r ? r.getX() : null,
              l = r ? r.getY() : null,
              c = null;
            if (
              (!this._targetPosition ||
                null === s ||
                (GCore.GMath.isEqualEps(this._targetPosition.getX(), s) &&
                  GCore.GMath.isEqualEps(this._targetPosition.getY(), l)) ||
                (c = new GCore.GTransform(
                  1,
                  0,
                  0,
                  1,
                  this._targetPosition.getX() - s,
                  this._targetPosition.getY() - l
                )),
              c)
            )
              for (i = 0; i < require.length; ++i) {
                var d = require[i];
                d.hasMixin(GCore.GElement.Transform) && d.transform(c, true);
              }
          } finally {
            a.commitTransaction(GCore.GLocale.get(new GCore.GLocaleKey('GPaste', 'action.paste')));
          }
        }
      }
    }

    toString() {
      return '[Object GPasteHereAction]';
    }

    static ID = 'edit.paste.here';

    static TITLE = new GCore.GLocaleKey('GPasteHereAction', 'title');

  }
  exports.exports = a;
}