/**
 * Webpack Module #869
 * Type: class
 * Name: GArrangeAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = require(15) /* GEditor */,
    AppSettings = require(10) /* AppSettings */,
    s = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class d extends GAction {
    constructor(e) {
      super();
      ((this._type = e),
      (this._title = new GCore.GLocaleKey('GArrangeAction', 'title.' + e)),
      (d.TOOLTIP_CONFIG = {
      [s.TOOLTIP_AREA.TOOLBAR]: {
      [GTools.GEditor.ArrangeOrderType.BringForward]: s.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GArrangeAction', 'bring-forward-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GArrangeAction', 'bring-forward-tooltip-description')
      ),
      shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.BringForward],
      video: AppSettings.gApi.getRichTooltipVideoURL('Bring_Forward.mp4'),
      learnMore: '',
      }),
      [GTools.GEditor.ArrangeOrderType.SendBackward]: s.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GArrangeAction', 'send-backward-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GArrangeAction', 'send-backward-tooltip-description')
      ),
      shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.SendBackward],
      video: AppSettings.gApi.getRichTooltipVideoURL('Send_Backward.mp4'),
      learnMore: '',
      }),
      },
      }));
    }

    _type = null;
    _title = null;

    getId() {
      return d.ID + '.' + this._type;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_ARRANGE;
    }

    getGroup() {
      return 'arrange/arrange';
    }

    getShortcut() {
      return d.SHORTCUT[this._type] || null;
    }

    isEnabled(e) {
      return (
        (e =
          e ||
          (gDesigner.getActiveDocument()
            ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
            : null)) && e.length > 0
      );
    }

    execute(e) {
      gDesigner.getActiveDocument().getEditor().arrangeOrder(this._type, e, false);
    }

    getTooltipConfig(e) {
      return (e && d.TOOLTIP_CONFIG[e] && d.TOOLTIP_CONFIG[e][this._type]) || null;
    }

    toString() {
      return '[Object GArrangeAction]';
    }

    static TOOLTIP_CONFIG = {
        [s.TOOLTIP_AREA.TOOLBAR]: {
          [GTools.GEditor.ArrangeOrderType.BringForward]: s.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GArrangeAction', 'bring-forward-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GArrangeAction', 'bring-forward-tooltip-description')
            ),
            shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.BringForward],
            video: AppSettings.gApi.getRichTooltipVideoURL('Bring_Forward.mp4'),
            learnMore: '',
          }),
          [GTools.GEditor.ArrangeOrderType.SendBackward]: s.GRichTooltipConfig.from({
            title: GCore.GLocale.get(
              new GCore.GLocaleKey('GArrangeAction', 'send-backward-tooltip-title')
            ),
            description: GCore.GLocale.get(
              new GCore.GLocaleKey('GArrangeAction', 'send-backward-tooltip-description')
            ),
            shortcut: d.SHORTCUT[GTools.GEditor.ArrangeOrderType.SendBackward],
            video: AppSettings.gApi.getRichTooltipVideoURL('Send_Backward.mp4'),
            learnMore: '',
          }),
        },
      };

    static SHORTCUT = {
      [GTools.GEditor.ArrangeOrderType.SendToFront]: [
        a.GKey.Constant.SHIFT,
        a.GKey.Constant.META,
        a.GKey.Constant.UP,
      ],
      [GTools.GEditor.ArrangeOrderType.BringForward]: [a.GKey.Constant.META, a.GKey.Constant.UP],
      [GTools.GEditor.ArrangeOrderType.SendBackward]: [a.GKey.Constant.META, a.GKey.Constant.DOWN],
      [GTools.GEditor.ArrangeOrderType.SendToBack]: [
        a.GKey.Constant.SHIFT,
        a.GKey.Constant.META,
        a.GKey.Constant.DOWN,
      ],
    };

    static TOOLTIP_CONFIG = null;

    static ID = 'arrange.order';

  }
  exports.exports = d;
}