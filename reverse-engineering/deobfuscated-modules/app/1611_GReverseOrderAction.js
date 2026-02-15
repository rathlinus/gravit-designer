/**
 * Webpack Module #1611
 * Type: class
 * Name: GReverseOrderAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function r() {}
    GCore.GObject.inherit(r, GElementAction),
      (r.ID = "modify.reverse-order"),
      (r.TITLE = new GCore.GLocaleKey("GReverseOrderAction", "title")),
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
        return "structure/path";
      }),
      (r.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getSelection()
            : null,
          t = false;
        if (e)
          for (var require = 0; !t && require < e.length; ++require)
            e[require] instanceof GCore.GPath && (t = true);
        return t;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getSelection() : null,
          MenuItemBuilder = [];
        if (n)
          for (var GElementAction = 0; GElementAction < n.length; ++GElementAction) {
            var r = n[GElementAction];
            r instanceof GCore.GPath && MenuItemBuilder.push(r);
          }
        if (MenuItemBuilder.length) {
          t.beginTransaction();
          try {
            for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) MenuItemBuilder[GElementAction].reverseOrder();
          } finally {
            t.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (r.prototype.toString = function () {
        return "[Object GReverseOrderAction]";
      }),
      (exports.exports = r);
  }