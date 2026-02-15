/**
 * Webpack Module #869
 * Type: class
 * Name: GArrangeAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      AppSettings = require(10) /* AppSettings */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */;
    function d(e) {
      (this._type = e),
        (this._title = new GCore.GLocaleKey("GArrangeAction", "title." + e)),
        (d.TOOLTIP_CONFIG = {
          [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: {
            [GTools.GEditor.ArrangeOrderType.BringForward]:
              GRichTooltipConfig.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GArrangeAction",
                    "bring-forward-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GArrangeAction",
                    "bring-forward-tooltip-description"
                  )
                ),
                shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.BringForward],
                video: AppSettings.gApi.getRichTooltipVideoURL("Bring_Forward.mp4"),
                learnMore:
                  "",
              }),
            [GTools.GEditor.ArrangeOrderType.SendBackward]:
              GRichTooltipConfig.GRichTooltipConfig.from({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GArrangeAction",
                    "send-backward-tooltip-title"
                  )
                ),
                description: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GArrangeAction",
                    "send-backward-tooltip-description"
                  )
                ),
                shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.SendBackward],
                video: AppSettings.gApi.getRichTooltipVideoURL("Send_Backward.mp4"),
                learnMore:
                  "",
              }),
          },
        });
    }
    GCore.GObject.inherit(d, GAction),
      (d.SHORTCUT = {
        [GTools.GEditor.ArrangeOrderType.SendToFront]: [
          GEditor.GKey.Constant.SHIFT,
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.UP,
        ],
        [GTools.GEditor.ArrangeOrderType.BringForward]: [
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.UP,
        ],
        [GTools.GEditor.ArrangeOrderType.SendBackward]: [
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.DOWN,
        ],
        [GTools.GEditor.ArrangeOrderType.SendToBack]: [
          GEditor.GKey.Constant.SHIFT,
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.DOWN,
        ],
      }),
      (d.TOOLTIP_CONFIG = null),
      (d.ID = "arrange.order"),
      (d.prototype._type = null),
      (d.prototype._title = null),
      (d.prototype.getId = function () {
        return d.ID + "." + this._type;
      }),
      (d.prototype.getTitle = function () {
        return this._title;
      }),
      (d.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_ARRANGE;
      }),
      (d.prototype.getGroup = function () {
        return "arrange/arrange";
      }),
      (d.prototype.getShortcut = function () {
        return d.SHORTCUT[this._type] || null;
      }),
      (d.prototype.isEnabled = function (e) {
        return (
          (e =
            e ||
            (gDesigner.getActiveDocument()
              ? gDesigner
                  .getActiveDocument()
                  .getEditor()
                  .getIndividualSelection()
              : null)) && e.length > 0
        );
      }),
      (d.prototype.execute = function (e) {
        gDesigner
          .getActiveDocument()
          .getEditor()
          .arrangeOrder(this._type, e, false);
      }),
      (d.prototype.getTooltipConfig = function (e) {
        return (
          (e && d.TOOLTIP_CONFIG[e] && d.TOOLTIP_CONFIG[e][this._type]) || null
        );
      }),
      (d.prototype.toString = function () {
        return "[Object GArrangeAction]";
      }),
      (exports.exports = d);
  }