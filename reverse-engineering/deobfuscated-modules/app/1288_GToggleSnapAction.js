/**
 * Webpack Module #1288
 * Type: class
 * Name: GToggleSnapAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(15) /* module */,
      a = require(67) /* GRichTooltipConfig */,
      r = require(18) /* module_18 */,
      s = require(31) /* GAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
          title: o.GLocale.get(
            new o.GLocaleKey("GToggleSnapAction", "tooltip-title")
          ),
          description: o.GLocale.get(
            new o.GLocaleKey("GToggleSnapAction", "tooltip-description")
          ),
          shortcut: l.SHORTCUT,
          middle: false,
          learnMore:
            "",
        }),
      };
    }
    o.GObject.inherit(l, s),
      (l.ID = "view.toggle-snap"),
      (l.TITLE = new o.GLocaleKey("GToggleSnapAction", "title")),
      (l.SHORTCUT = [i.GKey.Constant.SHIFT, i.GKey.Constant.F10]),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return r.CATEGORY_VIEW_SNAP;
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
            title: o.GLocale.get(
              new o.GLocaleKey("GToggleSnapAction", "tootlip-title-action")
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