/**
 * Webpack Module #1289
 * Type: class
 * Name: GToggleSnapZonesAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(67) /* GRichTooltipConfig */,
      a = require(18) /* MenuItemBuilder */,
      r = require(31) /* GAction */;
    function s() {
      s.TOOLTIP_CONFIG = {
        [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GToggleSnapZonesAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GToggleSnapZonesAction", "tooltip-description")
          ),
          middle: false,
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(s, r),
      (s.ID = "view.toggle-snapzones"),
      (s.TITLE = new o.GLocaleKey("GToggleSnapZonesAction", "title")),
      (s.TOOLTIP_CONFIG = null),
      (s.prototype.getId = function () {
        return s.ID;
      }),
      (s.prototype.getTitle = function () {
        return s.TITLE;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_VIEW_SNAP;
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