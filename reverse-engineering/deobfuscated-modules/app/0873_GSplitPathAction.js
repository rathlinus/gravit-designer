/**
 * Webpack Module #873
 * Type: class
 * Name: GSplitPathAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "modify.split-path"),
      (s.TITLE = new GCore.GLocaleKey("GSplitPathAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (s.prototype.getGroup = function () {
        return "structure/path";
      }),
      (s.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "J"];
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-split-path" : null;
      }),
      (s.prototype.isEnabled = function () {
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module)
            for (var require = 0; require < module.length; ++require)
              if (module[require] instanceof GCore.GCompoundPath) return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument().getEditor(),
          t = e.getSelection().slice();
        if (t && t.length) {
          e.beginTransaction();
          try {
            for (var require = [], GEditor = 0; GEditor < t.length; ++GEditor) {
              var MenuItemBuilder = t[GEditor];
              if (MenuItemBuilder instanceof GCore.GCompoundPath) {
                var s = new GCore.GRectangle();
                GCore.GElement.prototype.assignFrom.call(s, MenuItemBuilder);
                var l = e.splitCompoundPath(MenuItemBuilder);
                if (l && l.length)
                  for (var c = 0; c < l.length; ++c) {
                    var d = l[c];
                    GCore.GElement.prototype.assignFrom.call(d, s), require.push(d);
                  }
              }
            }
            require.length && e.updateSelection(false, require);
          } finally {
            e.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GSplitPathAction]";
      }),
      (exports.exports = s);
  }