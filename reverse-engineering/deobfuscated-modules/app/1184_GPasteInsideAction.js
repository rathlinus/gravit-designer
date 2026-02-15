/**
 * Webpack Module #1184
 * Type: class
 * Name: GPasteInsideAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(3) /* module_3 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */, require(26) /* module_26 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = (require(53) /* module */, require(18) /* module_18 */),
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "edit.paste.inside"),
      (s.TITLE = new o.GLocaleKey("GPasteInsideAction", "title")),
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
          i.GKey.Constant.OPTION,
          i.GKey.Constant.SHIFT,
          i.GKey.Constant.META,
          "V",
        ];
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module) {
            if (document.queryCommandSupported("paste")) return true;
            var require = gDesigner.getClipboardMimeTypes();
            if (require && require.indexOf(o.GNode.MIME_TYPE) >= 0)
              for (var i = 0; i < module.length; ++i)
                if (module[i].hasMixin(o.GNode.Container)) return true;
          }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        gDesigner.getPaste().assignCallback(this._paste.bind(this)),
          (!gDesigner.isTouchDevice() && document.execCommand("paste")) ||
            (gDesigner.getPaste().assignCallback(null),
            this._paste(
              o.GNode.deserialize(
                gDesigner.getClipboardContent(o.GNode.MIME_TYPE)
              )
            ));
      }),
      (s.prototype._paste = function (e, t) {
        if (e && e.length > 0) {
          for (var require = [], i = 0; i < e.length; ++i)
            e[i] instanceof o.GElement && require.push(e[i]);
          if (
            (require = gDesigner
              .getActiveDocument()
              .filterUnrestrictedCommercialFileElements(require)).length > 0
          ) {
            var a = gDesigner.getActiveDocument().getEditor(),
              r = [...a.getSelection()];
            require.forEach((e) => {
              e instanceof o.GText &&
                !e.getProperty("content") &&
                (a.insertElements([e], false, true, true),
                e.getParent().removeChild(e));
            }),
              a.beginTransaction();
            try {
              for (i = 0; i < r.length; ++i) {
                var s = r[i];
                if (s.hasMixin(o.GNode.Container) && !s.isLocked()) {
                  for (var l = [], c = 0; c < require.length; ++c)
                    require[c].validateInsertion(s) && l.push(require[c].clone());
                  a.insertElements(l, !t, true, false, true, s);
                  var d = s instanceof o.GElement ? s.getGeometryBBox() : null;
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
                        (o.GMath.isEqualEps(u, h) &&
                          o.GMath.isEqualEps(p, f)) ||
                        (m = new o.GTransform(1, 0, 0, 1, u - h, p - f)),
                      m)
                    )
                      for (c = 0; c < l.length; ++c) {
                        var y = l[c];
                        y.hasMixin(o.GElement.Transform) && y.transform(m, true);
                      }
                  }
                }
              }
            } finally {
              a.commitTransaction(o.GLocale.get(this.getTitle()));
            }
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GPasteInsideAction]";
      }),
      (exports.exports = s);
  }