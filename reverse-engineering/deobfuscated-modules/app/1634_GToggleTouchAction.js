/**
 * Webpack Module #1634
 * Type: class
 * Name: GToggleTouchAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var o = require(1) /* module */,
      i = require(67) /* GRichTooltipConfig */,
      a = require(18) /* MenuItemBuilder */,
      r = require(31) /* GAction */;
    const { TOUCH_LAYOUT: s } = require(10) /* AppSettings */,
      l = require(85) /* GContainer */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey(
              "GToggleTouchAction",
              "text.try-this-feature-pro-tooltip-title"
            )
          ),
          description: o.GLocale.get(
            new o.GLocaleKey(
              "GToggleTouchAction",
              "text.try-this-feature-pro-tooltip-description"
            )
          ),
          learnMore:
            "",
          upgradeToProStatsValue: "view.toggle-touch",
          middle: false,
          side: true,
        }),
      };
    }
    o.GObject.inherit(c, r),
      (c.ID = "view.toggle-touch"),
      (c.TITLE = new o.GLocaleKey("GToggleTouchAction", "title")),
      (c.TITLE_DISABLE = new o.GLocaleKey(
        "GToggleTouchAction",
        "title-disable"
      )),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return gDesigner.isTouchEnabled() ? c.TITLE_DISABLE : c.TITLE;
      }),
      (c.prototype.getGroup = function () {
        return "touch";
      }),
      (c.prototype.getCategory = function () {
        return a.CATEGORY_VIEW;
      }),
      (c.prototype.isCheckable = function () {
        return true;
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-touch-disable" : null;
      }),
      (c.prototype.execute = function () {
        gDesigner.setTouchEnabled(!gDesigner.isTouchEnabled());
      }),
      (c.prototype.getTooltipArea = function () {
        return i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.isAvailable = function () {
        return (
          !!s &&
          !gDesigner.getLicense().isGuest() &&
          gContainer.getRuntime() !== l.Runtime.IPad
        );
      }),
      (c.prototype.statsValue = function () {
        return ""
          .concat(c.ID, ".")
          .concat(gDesigner.isTouchEnabled() ? "on" : "off");
      }),
      (c.prototype.toString = function () {
        return "[Object GToggleTouchAction]";
      }),
      (exports.exports = c);
  }