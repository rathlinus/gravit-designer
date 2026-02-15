/**
 * Webpack Module #31
 * Type: class
 * Name: GAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GActionIconMap = _interopRequireDefault(require(844) /* GActionIconMap */);
  class s extends GCore.GObject {
    constructor() {
      super();
    }

    getId() {
      throw new Error('Not Supported');
    }

    getTitle() {
      throw new Error('Not Supported');
    }

    getFullTitle() {
      return this.getTitle();
    }

    getInfo() {
      return null;
    }

    getIcon() {
      return GActionIconMap.default[this.getId()] || null;
    }

    getCategory() {
      return null;
    }

    getGroup() {
      return null;
    }

    getGroupIcon() {
      return null;
    }

    getShortcut() {
      return null;
    }

    getShortcutHint(e) {
      return s.getActionShortcutHint(this.getShortcut(), e);
    }

    isShortcutGlobal() {
      return false;
    }

    isRegisterShortcut() {
      return null;
    }

    getAdditionalShortcuts() {
      return null;
    }

    isEnabled() {
      return true;
    }

    isKeyBoardEventRequiredToExecute() {
      return false;
    }

    isCheckable() {
      return false;
    }

    isChecked() {
      return false;
    }

    isAvailable(e) {
      return true;
    }

    execute() {
      throw new Error('Not Supported');
    }

    executeFromShortcut(e) {
      return this.execute.apply(this, arguments);
    }

    isPro() {
      return false;
    }

    getTooltipArea() {
      return null;
    }

    getTooltipConfig(e) {
      return null;
    }

    isVisible() {
      return true;
    }

    noHover() {
      return false;
    }

    getStyleClass() {
      return null;
    }

    statsValue() {
      return null;
    }

    toString() {
      return '[Object GAction]';
    }

    static SHORTCUT_DELAY = 500;

    static getActionShortcutHint(e, t) {
      return e ? GEditor.GKey.shortcutToString(e, t) : null;
    }

  }
  exports.exports = s;
}