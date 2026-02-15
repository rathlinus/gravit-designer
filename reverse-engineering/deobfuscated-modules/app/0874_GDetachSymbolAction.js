/**
 * Webpack Module #874
 * Type: class
 * Name: GDetachSymbolAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "modify.detachsymbol"),
      (s.TITLE = new GCore.GLocaleKey("GDetachSymbolAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_SYMBOL;
      }),
      (s.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-detach-symbol" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [
          GEditor.GKey.Constant.SHIFT,
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.F8,
        ];
      }),
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          if (module && module.length)
            for (var require = module.length - 1; require >= 0; --require) {
              var GEditor = module[require];
              if (
                GEditor instanceof GCore.GSymbol &&
                !GEditor.isMaster() &&
                GEditor.getMasterSymbol()
              )
                return true;
            }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = GCore.GNode.order(e.getIndividualSelection().slice());
        if (t.length && t[0].getScene()) {
          e.beginTransaction();
          try {
            for (var require = 0, GEditor = 0; GEditor < t.length; ++GEditor) {
              var MenuItemBuilder = t[GEditor];
              MenuItemBuilder instanceof GCore.GSymbol && MenuItemBuilder.detach() && require++;
            }
          } finally {
            e.commitTransaction(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GDetachSymbolAction", "text.number-detached")
              ).replace("%number", require > 1 ? "s" : "")
            );
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GDetachSymbolAction]";
      }),
      (exports.exports = s);
  }