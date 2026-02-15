/**
 * Webpack Module #811
 * Type: class
 * Name: GGroupAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(3) /* module_3 */, require(26) /* module_26 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(40) /* module_40 */,
      r = require(67) /* GRichTooltipConfig */,
      s = require(18) /* module_18 */,
      l = require(106) /* GElementAction */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GGroupAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GGroupAction", "tooltip-description")
          ),
          shortcut: c.SHORTCUT,
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(c, l),
      (c.ID = "modify.group"),
      (c.TITLE = new o.GLocaleKey("GGroupAction", "title")),
      (c.SHORTCUT = [i.GKey.Constant.META, "G"]),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getIcon = function () {
        return "gravit-icon-group";
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
          if (module && module.length > 0)
            for (var require = new o.GGroup(), i = module.length - 1; i >= 0; --i) {
              var a = module[i];
              if (
                a.validateInsertion(require) &&
                !a.getParent().isLocked() &&
                require.validateInsertion(a.getParent())
              )
                return true;
            }
        }
        return false;
      }),
      (c.prototype.execute = function () {
        var e = gDesigner.getActiveDocument().getEditor(),
          t = o.GNode.order(e.getIndividualSelection().slice());
        e.beginTransaction();
        try {
          for (var require = new o.GGroup(), i = [], r = 0; r < t.length; ++r) {
            (p = t[r]).validateInsertion(require) && i.push(p);
          }
          if (i.length > 0) {
            var s = i[i.length - 1],
              l = s.getParent(),
              c = s.getNext();
            if (!l.isLocked() && require.validateInsertion(l)) {
              l.insertChild(require, c);
              var d,
                u = gDesigner.getActiveDocument().getScene();
              try {
                d = new Set();
                for (r = 0; r < i.length; ++r) d.add(i[r].getParent());
                (0, a.blockChanges)(e, d, u, require);
                for (r = 0; r < i.length; ++r) {
                  var p;
                  (p = i[r]).getParent().removeChild(p), require.appendChild(p);
                }
              } finally {
                (0, a.releaseChanges)(e, d, u, require);
              }
            }
            e.updateSelection(false, [require]);
          }
        } finally {
          e.commitTransaction(
            o.GLocale.get(new o.GLocaleKey("GGroupAction", "title"))
          );
        }
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.toString = function () {
        return "[Object GGroupAction]";
      }),
      (exports.exports = c);
  }