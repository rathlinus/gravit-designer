/**
 * Webpack Module #1289
 * Type: class
 * Name: GToggleSnapZonesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function s() {
      s.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GToggleSnapZonesAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GToggleSnapZonesAction", "tooltip-description")
          ),
          middle: false,
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(s, GAction),
      (s.ID = "view.toggle-snapzones"),
      (s.TITLE = new GCore.GLocaleKey("GToggleSnapZonesAction", "title")),
      (s.TOOLTIP_CONFIG = null),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_VIEW_SNAP;
      }),
      (s.prototype.getGroup = function () {
        return "snap/enable";
      }),
      (s.prototype.isCheckable = function () {
        return true;
      }),
      (s.prototype.isChecked = function () {
        return gDesigner.getSetting("snap_zones");
      }),
      (s.prototype.execute = function () {
        gDesigner.setSetting("snap_zones", !gDesigner.getSetting("snap_zones"));
      }),
      (s.prototype.getTooltipConfig = function (e) {
        return (e && s.TOOLTIP_CONFIG[e]) || null;
      }),
      (s.prototype.toString = function () {
        return "[Object GToggleSnapZonesAction]";
      }),
      (exports.exports = s);
  }