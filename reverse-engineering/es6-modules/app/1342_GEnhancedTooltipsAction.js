/**
 * Webpack Module #1342
 * Type: class
 * Name: GEnhancedTooltipsAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GAction = _interopRequireDefault(require(31) /* GAction */);
  const s = 'designer.settings.enhanced-tooltips.enabled';
  let l = true;
  class c extends GAction.default {
    constructor() {
      super();
      gContainer.getProperty(s).then((e) => {
      'boolean' == typeof e && (l = e);
      });
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return GCore.GLocale.get(c.TITLE);
    }

    getCategory() {
      return MenuItemBuilder.default.CATEGORY_HELP_LEARN;
    }

    getGroup() {
      return c.GroupID;
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      return l;
    }

    isEnabled() {
      return true;
    }

    execute() {
      ((l = !l), gContainer.setProperty(s, l));
    }

    statsValue() {
      return ''.concat(c.ID, '.').concat(l ? 'on' : 'off');
    }

    toString() {
      return '[Object GEnhancedTooltipsAction]';
    }

    static ID = 'help.tooltip-visibility';

    static TITLE = new GCore.GLocaleKey('GEnhancedTooltipsAction', 'title');

    static GroupID = 'help/learn';

    static StoragePropertyName = s;

  }
  exports.exports = c;
}