/**
 * Webpack Module #1641
 * Type: class
 * Name: GSwitchWebcdrAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  var r = require(219) /* GLocale */,
    GContainer = require(85);
  const { IS_TRUNK: l, IS_LOCALHOST: c, IS_BETA: d } = require(231);
  class u extends GAction {
    constructor(e) {
      super();
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      ((this._serverName = e), (this._isDefault = !!module));
    }

    getId() {
      return u.ID + '.' + this._serverName;
    }

    isCheckable() {
      return true;
    }

    isChecked() {
      let exports = gDesigner.getSetting('webcdr_choice');
      return (!!exports && exports === this._serverName) || (!exports && this._isDefault);
    }

    getTitle() {
      return this._serverName;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_HELP_SWITCHWEBCDR;
    }

    getGroup() {
      return 'help/switchwebcdr';
    }

    isEnabled() {
      return true;
    }

    isVisible() {
      return !!(l || d || c);
    }

    execute() {
      (gDesigner.setSetting('webcdr_choice', this._serverName), this._reloadApp());
    }

    _reloadApp() {
      gContainer.getRuntime() === GContainer.Runtime.Browser ||
      gContainer.getRuntime() === GContainer.Runtime.PWA
        ? location.reload()
        : new r(
            GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.restart-app'))
          ).open();
    }

    toString() {
      return '[Object GSwitchWebcdrAction]';
    }

    static ID = 'help.switchwebcdr';

    static TITLE = new GCore.GLocaleKey('GSwitchWebcdrAction', 'title');

  }
  exports.exports = u;
}