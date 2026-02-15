/**
 * Webpack Module #1629
 * Type: class
 * Name: GSharePointCheckOutAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(8) /* polyfill_bundle_ES6 */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    a = _interopRequireDefault(require(443) /* module_443 */);
  const { isExecutingOnMSTeamsSync: r } = a.default;
  var MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  const c = require(1152) /* Item */,
    GSystemDialog = require(44);
  class u extends GAction {
    constructor() {
      super();
    }

    getId() {
      return u.ID;
    }

    getTitle() {
      return u.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'file';
    }

    isEnabled() {
      if (!r()) return false;
      const exports = gDesigner.getActiveDocument();
      if (!exports) return false;
      const module = exports.getStorageItem();
      return !!module && module instanceof c.Item;
    }

    isVisible() {
      return this.isEnabled();
    }

    async execute() {
      try {
        const e = gDesigner.getActiveDocument().getStorageItem();
        if ((await e.refreshCheckOutStatus(), e.isCheckedOutByMe()))
          return GSystemDialog.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GSharePointCheckOutAction', 'text.already-checkout')
            )
          );
        (await e.checkOut(),
          GSystemDialog.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GSharePointCheckOutAction', 'text.successul-checkout')
            )
          ));
      } catch (e) {
        GSystemDialog.alert(e.message);
      }
    }

    toString() {
      return '[Object GSharePointCheckOutAction]';
    }

    static ID = 'file.sharepoint-checkout';

    static TITLE = new GCore.GLocaleKey('GSharePointCheckOutAction', 'title');

  }
  exports.exports = u;
}