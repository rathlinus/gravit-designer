/**
 * Webpack Module #31
 * Type: class
 * Name: GAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(844) /* module_844 */);
    function s() {}
    i.GObject.inherit(s, i.GObject),
      (s.SHORTCUT_DELAY = 500),
      (s.getActionShortcutHint = function (e, t) {
        return e ? a.GKey.shortcutToString(e, t) : null;
      }),
      (s.prototype.getId = function () {
        throw new Error("Not Supported");
      }),
      (s.prototype.getTitle = function () {
        throw new Error("Not Supported");
      }),
      (s.prototype.getFullTitle = function () {
        return this.getTitle();
      }),
      (s.prototype.getInfo = function () {
        return null;
      }),
      (s.prototype.getIcon = function () {
        return r.default[this.getId()] || null;
      }),
      (s.prototype.getCategory = function () {
        return null;
      }),
      (s.prototype.getGroup = function () {
        return null;
      }),
      (s.prototype.getGroupIcon = function () {
        return null;
      }),
      (s.prototype.getShortcut = function () {
        return null;
      }),
      (s.prototype.getShortcutHint = function (e) {
        return s.getActionShortcutHint(this.getShortcut(), e);
      }),
      (s.prototype.isShortcutGlobal = function () {
        return false;
      }),
      (s.prototype.isRegisterShortcut = function () {
        return null;
      }),
      (s.prototype.getAdditionalShortcuts = function () {
        return null;
      }),
      (s.prototype.isEnabled = function () {
        return true;
      }),
      (s.prototype.isKeyBoardEventRequiredToExecute = function () {
        return false;
      }),
      (s.prototype.isCheckable = function () {
        return false;
      }),
      (s.prototype.isChecked = function () {
        return false;
      }),
      (s.prototype.isAvailable = function (e) {
        return true;
      }),
      (s.prototype.execute = function () {
        throw new Error("Not Supported");
      }),
      (s.prototype.executeFromShortcut = function (e) {
        return this.execute.apply(this, arguments);
      }),
      (s.prototype.isPro = function () {
        return false;
      }),
      (s.prototype.getTooltipArea = function () {
        return null;
      }),
      (s.prototype.getTooltipConfig = function (e) {
        return null;
      }),
      (s.prototype.isVisible = function () {
        return true;
      }),
      (s.prototype.noHover = function () {
        return false;
      }),
      (s.prototype.getStyleClass = function () {
        return null;
      }),
      (s.prototype.statsValue = function () {
        return null;
      }),
      (s.prototype.toString = function () {
        return "[Object GAction]";
      }),
      (exports.exports = s);
  }