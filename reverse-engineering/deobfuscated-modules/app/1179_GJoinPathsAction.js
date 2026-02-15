/**
 * Webpack Module #1179
 * Type: class
 * Name: GJoinPathsAction
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
      (s.ID = "modify.join-paths"),
      (s.TITLE = new o.GLocaleKey("GJoinPathsAction", "title")),
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
      (s.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-join-paths" : null;
      }),
      (s.prototype.getShortcut = function () {
        return [i.GKey.Constant.META, "J"];
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module && module.length > 1)
            for (var require = 0, i = 0; i < module.length; ++i)
              if (
                !(module[i] instanceof o.GImage) &&
                ((module[i] instanceof o.GPathBase ||
                  module[i].hasMixin(o.GVertexSource)) &&
                  require++,
                2 === require)
              )
                return true;
        }
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = e.getSelection();
        if (t && t.length) {
          e.beginTransaction();
          try {
            var require = new o.GRectangle();
            o.GElement.prototype.assignFrom.call(require, t[0]),
              e.convertSelectionToPaths(true);
            var i = e.joinPaths();
            i &&
              (o.GElement.prototype.assignFrom.call(i, require),
              e.updateSelection(false, [i]));
          } finally {
            e.commitTransaction(o.GLocale.get(this.getTitle()));
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GJoinPathsAction]";
      }),
      (exports.exports = s);
  }