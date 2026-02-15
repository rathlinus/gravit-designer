/**
 * Webpack Module #1178
 * Type: class
 * Name: GDetachFromPathAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function r() {}
    GCore.GObject.inherit(r, GElementAction),
      (r.ID = "modify.detachFromPath"),
      (r.TITLE = new GCore.GLocaleKey("GDetachFromPathAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (r.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (r.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled()
          ? "gravit-icon-detach-from-path"
          : null;
      }),
      (r.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null;
        if (e)
          for (var module = 0; module < e.length; ++module)
            if (e[module] instanceof GCore.GText && e[module].hasPathAttached()) return true;
        return false;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getIndividualSelection() : null,
          MenuItemBuilder = [];
        if (n)
          for (var GElementAction = 0; GElementAction < n.length; ++GElementAction)
            n[GElementAction] instanceof GCore.GText && n[GElementAction].hasPathAttached() && MenuItemBuilder.push(n[GElementAction]);
        t.beginTransaction();
        try {
          var r = e.getScene();
          MenuItemBuilder.forEach(function (e) {
            r.visitLinks(e, function (t) {
              t instanceof GCore.GPathBase && r.unlink(e, t);
            });
          });
        } finally {
          t.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }),
      (r.prototype.toString = function () {
        return "[Object GDetachFromPathAction]";
      }),
      (exports.exports = r);
  }