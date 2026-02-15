/**
 * Webpack Module #1184
 * Type: class
 * Name: GPasteInsideAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      a = (require(53) /* module */, require(18) /* MenuItemBuilder */),
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "edit.paste.inside"),
      (s.TITLE = new GCore.GLocaleKey("GPasteInsideAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT_PASTE;
      }),
      (s.prototype.getGroup = function () {
        return "ccp/paste";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-paste-inside" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [
          GEditor.GKey.Constant.OPTION,
          GEditor.GKey.Constant.SHIFT,
          GEditor.GKey.Constant.META,
          "V",
        ];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module) {
            if (document.queryCommandSupported("paste")) return true;
            var require = gDesigner.getClipboardMimeTypes();
            if (require && require.indexOf(GCore.GNode.MIME_TYPE) >= 0)
              for (var GEditor = 0; GEditor < module.length; ++GEditor)
                if (module[GEditor].hasMixin(GCore.GNode.Container)) return true;
          }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          (!gDesigner.isTouchDevice() && document.execCommand("paste")) ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              GCore.GNode.deserialize(
                gDesigner.getClipboardContent(GCore.GNode.MIME_TYPE)
              )
            ));
      }),
      (s.prototype._paste = function (e, t) {
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
            require.forEach((e) => {
              e instanceof GCore.GText &&
                !e.getProperty("content") &&
                (a.insertElements([e], false, true, true),
                e.getParent().removeChild(e));
            }),
              a.beginTransaction();
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
                        (GCore.GMath.isEqualEps(u, h) &&
                          GCore.GMath.isEqualEps(p, f)) ||
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
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteInsideAction]";
      }),
      (exports.exports = s);
  }