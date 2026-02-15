/**
 * Webpack Module #1177
 * Type: class
 * Name: GResetInstanceAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = (n(15) /* module_15 */, n(18) /* module_18 */),
      a = n(106) /* GElementAction */;
    function r() {}
    o.GObject.inherit(r, a),
      (r.ID = "modify.resetinstance"),
      (r.TITLE = new o.GLocaleKey("GResetInstanceAction", "title")),
      (r.prototype.getId = function () {
        return r.ID;
      }),
      (r.prototype.getTitle = function () {
        return r.TITLE;
      }),
      (r.prototype.getCategory = function () {
        return i.CATEGORY_MODIFY_SYMBOL;
      }),
      (r.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (r.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-reset-instance" : null;
      }),
      (r.prototype.isEnabled = function () {
        if (!a.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var t = e.getEditor().getIndividualSelection();
          if (t && t.length)
            for (var n = t.length - 1; n >= 0; --n) {
              var i = t[n];
              if (!i.isLocked()) {
                if (i instanceof o.GSymbol && !i.isLocked() && !i.inSync())
                  return true;
                var r = null;
                if (
                  (r = i.findParent(function (e) {
                    return e instanceof o.GSymbol;
                  })) &&
                  !r.inSync(i, true)
                )
                  return true;
              }
            }
        }
        return false;
      }),
      (r.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = o.GNode.order(e.getIndividualSelection().slice());
        e.beginTransaction();
        try {
          for (var n = 0; n < t.length; ++n) {
            var i = t[n];
            if (
              (i instanceof o.GSymbol &&
                !i.isLocked() &&
                !i.inSync() &&
                i.synchronize(),
              !(i instanceof o.GSymbol))
            ) {
              var a = null;
              (a = i.findParent(function (e) {
                return e instanceof o.GSymbol;
              })) &&
                (a.inSync(i, true) || a.synchronize(i));
            }
          }
        } finally {
          e.commitTransaction(o.GLocale.get(r.TITLE));
        }
      }),
      (r.prototype.toString = function () {
        return "[Object GResetInstanceAction]";
      }),
      (e.exports = r);
  }