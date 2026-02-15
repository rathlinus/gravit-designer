/**
 * Webpack Module #1626
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const GAction = require(31);
  class a extends GAction {
    constructor(e) {
      super();
      this._action = e;
    }

    _action = null;

    getId() {
      return this._action.getId();
    }

    getTitle() {
      return this._action.getTitle();
    }

    getIcon() {
      return this._action.getIcon();
    }

    getCategory() {
      return this._action.getCategory();
    }

    getGroup() {
      return this._action.getGroup();
    }

    getGroupIcon() {
      return this._action.getGroupIcon();
    }

    getShortcut() {
      return this._action.getShortcut();
    }

    isShortcutGlobal() {
      return this._action.isShortcutGlobal();
    }

    isRegisterShortcut() {
      return this._action.isRegisterShortcut();
    }

    getAdditionalShortcuts() {
      return this._action.getAdditionalShortcuts();
    }

    isEnabled() {
      return this._action.isEnabled();
    }

    isCheckable() {
      return this._action.isCheckable();
    }

    isChecked() {
      return this._action.isChecked();
    }

    isAvailable(e) {
      return this._action.isAvailable(e);
    }

    execute() {
      if (gDesigner.isEnabledProFeatures(this._action.getId()))
        return this._action.execute.apply(this._action, arguments);
      gDesigner.handlePROFeatureInterruption();
    }

    executeFromShortcut() {
      return this.execute.apply(this, arguments);
    }

    isPro() {
      return true;
    }

    getTooltipArea() {
      return this._action.getTooltipArea();
    }

    getTooltipConfig(e) {
      return this._action.getTooltipConfig(e);
    }

    statsValue() {
      return this._action.statsValue();
    }

    toString() {
      return this._action.toString();
    }

  }
  exports.exports = a;
}