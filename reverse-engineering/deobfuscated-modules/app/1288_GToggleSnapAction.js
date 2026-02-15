/**
 * Webpack Module #1288
 * Type: class
 * Name: GToggleSnapAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GToggleSnapAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GToggleSnapAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
          middle: false,
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(l, GAction),
      (l.ID = "view.toggle-snap"),
      (l.TITLE = new GCore.GLocaleKey("GToggleSnapAction", "title")),
      (l.SHORTCUT = [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.F10]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW_SNAP;
      }),
      (l.prototype.getGroup = function () {
        return "snap/enable";
      }),
      (l.prototype.getShortcut = function () {
        return l.SHORTCUT;
      }),
      (l.prototype.isCheckable = function () {
        return true;
      }),
      (l.prototype.isChecked = function () {
        return !gDesigner.getSetting("snap_disabled");
      }),
      (l.prototype.execute = function () {
        gDesigner.setSetting(
          "snap_disabled",
          !gDesigner.getSetting("snap_disabled")
        );
      }),
      (l.prototype.getTooltipConfig = function (e) {
        if (!e) return null;
        const module = l.TOOLTIP_CONFIG[e];
        return (
          module.setConfig({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey("GToggleSnapAction", "tootlip-title-action")
            ),
          }),
          module
        );
      }),
      (l.prototype.toString = function () {
        return "[Object GToggleSnapAction]";
      }),
      (exports.exports = l);
  }