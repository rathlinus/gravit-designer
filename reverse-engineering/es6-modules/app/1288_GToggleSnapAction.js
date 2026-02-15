/**
 * Webpack Module #1288
 * Type: class
 * Name: GToggleSnapAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class l extends GAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GToggleSnapAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GToggleSnapAction', 'tooltip-description')
      ),
      shortcut: l.SHORTCUT,
      middle: false,
      learnMore: '',
      }),
      };
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_SNAP;
    }

    getGroup() {
      return 'snap/enable';
    }

    getShortcut() {
      return l.SHORTCUT;
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return !gDesigner.getSetting('snap_disabled');
    }

    execute() {
      gDesigner.setSetting('snap_disabled', !gDesigner.getSetting('snap_disabled'));
    }

    getTooltipConfig(e) {
      if (!e) return null;
      const module = l.TOOLTIP_CONFIG[e];
      return (
        module.setConfig({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey('GToggleSnapAction', 'tootlip-title-action')
          ),
        }),
        module
      );
    }

    toString() {
      return '[Object GToggleSnapAction]';
    }

    static TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GToggleSnapAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GToggleSnapAction', 'tooltip-description')
        ),
        shortcut: l.SHORTCUT,
        middle: false,
        learnMore: '',
      }),
    };

    static ID = 'view.toggle-snap';

    static TITLE = new GCore.GLocaleKey('GToggleSnapAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.F10];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}