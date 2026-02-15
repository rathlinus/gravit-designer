/**
 * Webpack Module #873
 * Type: class
 * Name: GSplitPathAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(18) /* module_18 */,
      r = require(106) /* GElementAction */;
    function s() {}
    o.GObject.inherit(s, r),
      (s.ID = "modify.split-path"),
      (s.TITLE = new o.GLocaleKey("GSplitPathAction", "title")),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_MODIFY_PATH;
      }),
      (s.prototype.getGroup = function () {
        return "structure/path";
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "J"];
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
              if (module[require] instanceof o.GCompoundPath) return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument().getEditor(),
          t = e.getSelection().slice();
        if (t && t.length) {
          e.beginTransaction();
          try {
            for (var require = [], i = 0; i < t.length; ++i) {
              var a = t[i];
              if (a instanceof o.GCompoundPath) {
                var s = new o.GRectangle();
                o.GElement.prototype.assignFrom.call(s, a);
                var l = e.splitCompoundPath(a);
                if (l && l.length)
                  for (var c = 0; c < l.length; ++c) {
                    var d = l[c];
                    o.GElement.prototype.assignFrom.call(d, s), require.push(d);
                  }
              }
            }
            require.length && e.updateSelection(false, require);
          } finally {
            e.commitTransaction(o.GLocale.get(this.getTitle()));
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GSplitPathAction]";
      }),
      (exports.exports = s);
  }