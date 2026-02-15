/**
 * Webpack Module #1182
 * Type: class
 * Name: GPasteHereAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* module */,
      i = (require(15) /* module */, require(18) /* MenuItemBuilder */, require(31) /* GAction */);
    require(1313) /* URIListHandler */;
    function a() {
      this._targetPosition = null;
    }
    GCore.GObject.inherit(a, i),
      (a.ID = "edit.paste.here"),
      (a.TITLE = new GCore.GLocaleKey("GPasteHereAction", "title")),
      (a.prototype._targetPosition = null),
      (a.prototype.getId = function () {
        return a.ID;
      }),
      (a.prototype.getTitle = function () {
        return a.TITLE;
      }),
      (a.prototype.getIcon = function () {
        return null;
      }),
      (a.prototype.getCategory = function () {
        return null;
      }),
      (a.prototype.getGroup = function () {
        return null;
      }),
      (a.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-paste-here" : null;
      }),
      (a.prototype.getShortcut = function () {
        return null;
      }),
      (a.prototype.isAvailable = function (e) {
        return !!e && "context.menu" == e;
      }),
      (a.prototype.isEnabled = function () {
        if (document.queryCommandSupported("paste")) return true;
        var e = gDesigner.getClipboardMimeTypes();
        return (
          !!(e && e.indexOf(GCore.GNode.MIME_TYPE) >= 0) &&
          !!gDesigner.getActiveDocument()
        );
      }),
      (a.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          document.execCommand("paste") ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              GCore.GNode.deserialize(
                gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
              )
            ));
      }),
      (a.prototype.setPosition = function (e) {
        this._targetPosition = gDesigner
          .getWindows()
          .getActiveWindow()
          .getView()
          .getViewTransform(
            gDesigner.getActiveDocument().getScene().getActivePage()
          )
          .mapPoint(e);
      }),
      (a.prototype._paste = function (e, t) {
        if (e && e.length > 0) {
          for (var require = [], i = 0; i < e.length; ++i)
            e[i] instanceof GCore.GElement && require.push(e[i]);
          if (
            (require = gDesigner
              .getActiveDocument()
              .filterUnrestrictedCommercialFileElements(require)).length > 0
          ) {
            var a = gDesigner.getActiveDocument().getEditor();
            require.forEach((e) => {
              e instanceof GCore.GText &&
                !e.getProperty("content") &&
                (a.insertElements([e], false, true, true),
                e.getParent().removeChild(e));
            }),
              a.beginTransaction();
            try {
              var r;
              a.insertElements(require, !t, true, true, true),
                require.forEach((e) => {
                  var t = e.getGeometryBBox();
                  t && (r = r ? r.united(t) : t);
                });
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
              a.commitTransaction(
                GCore.GLocale.get(new GCore.GLocaleKey("GPaste", "action.paste"))
              );
            }
          }
        }
      }),
      (a.prototype.toString = function () {
        return "[Object GPasteHereAction]";
      }),
      (exports.exports = a);
  }