/**
 * Webpack Module #1634
 * Type: class
 * Name: GToggleTouchAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  const { TOUCH_LAYOUT: s } = require(10) /* AppSettings */,
    GContainer = require(85);
  class c extends GAction {
    constructor() {
      super();
      c.TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GToggleTouchAction', 'text.try-this-feature-pro-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GToggleTouchAction',
      'text.try-this-feature-pro-tooltip-description'
      )
      ),
      learnMore: '',
      upgradeToProStatsValue: 'view.toggle-touch',
      middle: false,
      side: true,
      }),
      };
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return gDesigner.isTouchEnabled() ? c.TITLE_DISABLE : c.TITLE;
    }

    getGroup() {
      return 'touch';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    isCheckable() {
      return true;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-touch-disable' : null;
    }

    execute() {
      gDesigner.setTouchEnabled(!gDesigner.isTouchEnabled());
    }

    getTooltipArea() {
      return i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e]) || null;
    }

    isAvailable() {
      return (
        !!s &&
        !gDesigner.getLicense().isGuest() &&
        gContainer.getRuntime() !== GContainer.Runtime.IPad
      );
    }

    statsValue() {
      return ''.concat(c.ID, '.').concat(gDesigner.isTouchEnabled() ? 'on' : 'off');
    }

    toString() {
      return '[Object GToggleTouchAction]';
    }

    static TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
        title: GCore.GLocale.get(
          new GCore.GLocaleKey('GToggleTouchAction', 'text.try-this-feature-pro-tooltip-title')
        ),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey(
            'GToggleTouchAction',
            'text.try-this-feature-pro-tooltip-description'
          )
        ),
        learnMore: '',
        upgradeToProStatsValue: 'view.toggle-touch',
        middle: false,
        side: true,
      }),
    };

    static ID = 'view.toggle-touch';

    static TITLE = new GCore.GLocaleKey('GToggleTouchAction', 'title');

    static TITLE_DISABLE = new GCore.GLocaleKey('GToggleTouchAction', 'title-disable');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}