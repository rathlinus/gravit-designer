/**
 * Webpack Module #1177
 * Type: class
 * Name: GResetInstanceAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = (require(15) /* module */, require(18) /* module_18 */),
      a = require(106) /* GElementAction */;
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
          var module = e.getEditor().getIndividualSelection();
          if (module && module.length)
            for (var require = module.length - 1; require >= 0; --require) {
              var i = module[require];
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
          for (var require = 0; require < t.length; ++require) {
            var i = t[require];
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
      (exports.exports = r);
  }