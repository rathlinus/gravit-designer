/**
 * Webpack Module #874
 * Type: class
 * Name: GDetachSymbolAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(3) /* module_3 */, require(34) /* module_34 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* module_18 */,
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "modify.detachsymbol"),
      (s.TITLE = new o.GLocaleKey("GDetachSymbolAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_MODIFY_SYMBOL;
      }),
      (s.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-detach-symbol" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [
          i.GKey.Constant.SHIFT,
          i.GKey.Constant.META,
          i.GKey.Constant.F8,
        ];
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          if (module && module.length)
            for (var require = module.length - 1; require >= 0; --require) {
              var i = module[require];
              if (
                i instanceof o.GSymbol &&
                !i.isMaster() &&
                i.getMasterSymbol()
              )
                return true;
            }
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = o.GNode.order(e.getIndividualSelection().slice());
        if (t.length && t[0].getScene()) {
          e.beginTransaction();
          try {
            for (var require = 0, i = 0; i < t.length; ++i) {
              var a = t[i];
              a instanceof o.GSymbol && a.detach() && require++;
            }
          } finally {
            e.commitTransaction(
              o.GLocale.get(
                new o.GLocaleKey("GDetachSymbolAction", "text.number-detached")
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