/**
 * Webpack Module #810
 * Type: class
 * Name: GConvertToPathAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GConvertToPathAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GConvertToPathAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.converttopath"),
      (l.TITLE = new GCore.GLocaleKey("GConvertToPathAction", "title")),
      (l.SHORTCUT = [GEditor.GKey.Constant.META, GEditor.GKey.Constant.SHIFT, "P"]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
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
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getSelection();
          if (module)
            for (var require = 0; require < module.length; ++require)
              if (
                !(module[require] instanceof GCore.GPath) &&
                !(module[require] instanceof GCore.GImage) &&
                !(module[require] instanceof GCore.GPathsGraph) &&
                (module[require] instanceof GCore.GPathBase ||
                  (module[require].hasMixin(GCore.GVertexSource) &&
                    !(module[require] instanceof GCore.GCompoundPath)))
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
      (exports.exports = l);
  }