/**
 * Webpack Module #870
 * Type: class
 * Name: GSplitAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* CollaborationMergeUtils */,
      r = require(67) /* GRichTooltipConfig */,
      s = require(18) /* MenuItemBuilder */,
      l = require(106) /* GElementAction */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GSplitAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GSplitAction", "tooltip-description")
          ),
          shortcut: c.SHORTCUT,
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(c, l),
      (c.ID = "modify.split"),
      (c.TITLE = new o.GLocaleKey("GSplitAction", "title")),
      (c.SHORTCUT = [i.GKey.Constant.SHIFT, i.GKey.Constant.META, "G"]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getIcon = function () {
        return "gravit-icon-ungroup";
      }),
      (c.prototype.getCategory = function () {
        return s.CATEGORY_MODIFY;
      }),
      (c.prototype.getGroup = function () {
        return "structure-group";
      }),
      (c.prototype.getShortcut = function () {
        return c.SHORTCUT;
      }),
      (c.prototype.isEnabled = function () {
        if (!l.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          if (module)
            for (var require = 0; require < module.length; ++require) {
              var i = module[require];
              if (
                i instanceof o.GGroup ||
                i instanceof o.GCompoundShape ||
                (i instanceof o.GSymbol && !i.getMasterSymbol()) ||
                (i instanceof o.GShape && null !== i.getFirstChild())
              )
                return true;
            }
        }
        return false;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = e.getIndividualSelection().slice();
        e.beginTransaction();
        try {
          var require,
            i,
            r = [],
            s = gDesigner.getActiveDocument().getScene();
          e.clearSelection();
          try {
            i = new Set();
            for (var l = 0; l < t.length; ++l)
              (((require = t[l]) instanceof o.GShape && null !== require.getFirstChild()) ||
                require instanceof o.GGroup ||
                require instanceof o.GCompoundShape ||
                (require instanceof o.GSymbol && !require.getMasterSymbol())) &&
                i.add(require.getParent());
            (0, a.blockChanges)(e, i, s);
            for (l = 0; l < t.length; ++l)
              if (
                (require = t[l]) instanceof o.GGroup ||
                require instanceof o.GCompoundShape ||
                (require instanceof o.GSymbol && !require.getMasterSymbol())
              ) {
                var d = require.getParent(),
                  u = require.getChildren();
                try {
                  require.beginUpdate();
                  for (var p = 0; p < u.length; ++p) {
                    var g = u[p];
                    require.removeChild(g), d.insertChild(g, require), r.push(g);
                  }
                } finally {
                  require.endUpdate();
                }
                d.removeChild(require);
              } else if (require instanceof o.GShape && null !== require.getFirstChild()) {
                (d = require.getParent()), (u = require.getChildren());
                try {
                  require.beginUpdate();
                  for (p = u.length - 1; p >= 0; --p) {
                    g = u[p];
                    require.removeChild(g), d.insertChild(g, require.getNext()), r.push(g);
                  }
                } finally {
                  require.endUpdate();
                }
                r.push(require);
              } else r.push(require);
          } finally {
            (0, a.releaseChanges)(e, i, s);
          }
          r.length > 0 && e.updateSelection(false, r);
        } finally {
          e.commitTransaction(o.GLocale.get(c.TITLE));
        }
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.toString = function () {
        return "[Object GSplitAction]";
      }),
      (exports.exports = c);
  }