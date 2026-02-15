/**
 * Webpack Module #1289
 * Type: class
 * Name: GToggleSnapZonesAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor() {
      super();
      s.TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GToggleSnapZonesAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GToggleSnapZonesAction', 'tooltip-description')
      ),
      middle: false,
      learnMore: '',
      }),
      };
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW_SNAP;
    }

    getGroup() {
      return 'snap/enable';
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return gDesigner.getSetting('snap_zones');
    }

    execute() {
      gDesigner.setSetting('snap_zones', !gDesigner.getSetting('snap_zones'));
    }

    getTooltipConfig(e) {
      return (e && s.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GToggleSnapZonesAction]';
    }

    static TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GToggleSnapZonesAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GToggleSnapZonesAction', 'tooltip-description')
        ),
        middle: false,
        learnMore: '',
      }),
    };

    static ID = 'view.toggle-snapzones';

    static TITLE = new GCore.GLocaleKey('GToggleSnapZonesAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = s;
}