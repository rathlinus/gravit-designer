/**
 * Webpack Module #810
 * Type: class
 * Name: GConvertToPathAction
 */

function (exports, module, require) {
    "use strict";
    n(3) /* module_3 */;
    var o = n(1) /* module_1 */,
      i = n(15) /* module_15 */,
      a = n(67) /* GRichTooltipConfig */,
      r = n(18) /* module_18 */,
      s = n(106) /* GElementAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GConvertToPathAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GConvertToPathAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(l, s),
      (l.ID = "modify.converttopath"),
      (l.TITLE = new o.GLocaleKey("GConvertToPathAction", "title")),
      (l.SHORTCUT = [i.GKey.Constant.META, i.GKey.Constant.SHIFT, "P"]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_MODIFY_PATH;
      }),
      (l.prototype.getIcon = function () {
        return "gravit-icon-convert-to-path";
      }),
      (l.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (l.prototype.getShortcut = function () {
        return l.SHORTCUT;
      }),
      (l.prototype.isEnabled = function () {
        if (!s.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var t = e.getEditor().getSelection();
          if (t)
            for (var n = 0; n < t.length; ++n)
              if (
                !(t[n] instanceof o.GPath) &&
                !(t[n] instanceof o.GImage) &&
                !(t[n] instanceof o.GPathsGraph) &&
                (t[n] instanceof o.GPathBase ||
                  (t[n].hasMixin(o.GVertexSource) &&
                    !(t[n] instanceof o.GCompoundPath)))
              )
                return true;
        }
        return false;
      }),
      (l.prototype.execute = function () {
        gDesigner.getActiveDocument().getEditor().convertSelectionToPaths();
      }),
      (l.prototype.getTooltipConfig = function (e) {
        return (e && l.TOOLTIP_CONFIG[e]) || null;
      }),
      (l.prototype.toString = function () {
        return "[Object GConvertToPathAction]";
      }),
      (e.exports = l);
  }