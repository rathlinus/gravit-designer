/**
 * Webpack Module #1597
 * Type: class
 * Name: GConnectLinesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function s() {}
    GCore.GObject.inherit(s, GElementAction),
      (s.ID = "modify.connect-lines"),
      (s.TITLE = new GCore.GLocaleKey("GConnectLinesAction", "title")),
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
      (s.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getSelection()
          : null;
        if (e)
          for (var module = 0; module < e.length; ++module)
            if (e[module] instanceof GCore.GPath) return true;
        return false;
      }),
      (s.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e ? e.getEditor() : null,
          n = t ? t.getSelection() : null,
          MenuItemBuilder = [],
          GElementAction = null;
        if (n)
          for (var s = 0; s < n.length; ++s) {
            var l = n[s];
            l instanceof GCore.GPath &&
              (GElementAction
                ? GElementAction === l.getParent() && MenuItemBuilder.push(l)
                : (GElementAction = l.getParent()) && MenuItemBuilder.push(l));
          }
        if (MenuItemBuilder.length) {
          t.beginTransaction();
          try {
            if (1 == MenuItemBuilder.length) MenuItemBuilder[0].setProperty("closed", true);
            else
              try {
                (0, CollaborationMergeUtils.blockChanges)(t, null, null, GElementAction);
                var c,
                  d = (MenuItemBuilder = GCore.GNode.order(MenuItemBuilder))[MenuItemBuilder.length - 1],
                  u = d.getProperty("trf"),
                  p = u ? u.inverted() : null,
                  g = d.getNext(),
                  h = [];
                for (s = 0; s < MenuItemBuilder.length - 1; ++s)
                  (c = MenuItemBuilder[s]).removeFlag(GCore.GNode.Flag.Selected),
                    c.setProperty("closed", false),
                    GElementAction.removeChild(c),
                    (u = (u = c.getProperty("trf"))
                      ? p
                        ? u.multiplied(p)
                        : u
                      : p),
                    (h = h.concat(c.getAnchorPoints().serialize(u)));
                d.removeFlag(GCore.GNode.Flag.Selected),
                  GElementAction.removeChild(d),
                  (h = h.concat(d.getAnchorPoints().serialize()));
                var f = new GCore.GPath();
                f.getAnchorPoints().deserialize(h),
                  f.assignFrom(d),
                  GElementAction.insertChild(f, g);
              } finally {
                (0, CollaborationMergeUtils.releaseChanges)(t, null, null, GElementAction),
                  t.updateSelection(false, [f]);
              }
          } finally {
            t.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (s.prototype.toString = function () {
        return "[Object GConnectLinesAction]";
      }),
      (exports.exports = s);
  }