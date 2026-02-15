/**
 * Webpack Module #1608
 * Type: class
 * Name: GImportFontsAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    i = (require(15) /* GEditor */, require(67)) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GCustomFontImporter = require(1245);
  class l extends GAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GImportFontsAction', 'text.try-this-feature-pro-tooltip-title')
      ),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey(
      'GImportFontsAction',
      'text.try-this-feature-pro-tooltip-description'
      )
      ),
      learnMore: '',
      upgradeToProStatsValue: 'font.import',
      middle: false,
      side: true,
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
      return MenuItemBuilder.CATEGORY_FILE_IMPORT;
    }

    getGroup() {
      return 'import/import-fonts';
    }

    isEnabled(e) {
      return (
        (e = e || gDesigner.getDefaultStorage()),
        !!gDesigner.getApplicationManager().isImportResourcesEnabled() &&
          e.canPromptOpen() &&
          'undefined' != typeof window &&
          window.indexedDB
      );
    }

    execute(e, t) {
      (e = e || new GCustomFontImporter()).import(t);
    }

    getTooltipArea() {
      return i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GImportFontsAction]';
    }

    static TOOLTIP_CONFIG = {
      [i.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: i.GRichTooltipConfig.from({
        title: GCore.GLocale.get(
          new GCore.GLocaleKey('GImportFontsAction', 'text.try-this-feature-pro-tooltip-title')
        ),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey(
            'GImportFontsAction',
            'text.try-this-feature-pro-tooltip-description'
          )
        ),
        learnMore: '',
        upgradeToProStatsValue: 'font.import',
        middle: false,
        side: true,
      }),
    };

    static ID = 'font.import';

    static TITLE = new GCore.GLocaleKey('GImportFontsAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}