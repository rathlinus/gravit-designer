/**
 * Webpack Module #1168
 * Type: class
 * Name: GSubAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* GCore */,
      GAction = _interopRequireDefault(require(31) /* GAction */);
    class r extends GAction.default {
      static getSubActionId(e, t) {
        return "".concat(e, ".").concat(t);
      }
      constructor(e) {
        super(), (this._type = e), (this._title = null);
      }
      getId() {
        return r.getSubActionId(this._getMainActionId(), this._type);
      }
      _getMainActionId() {
        throw new Error("Not implemented.");
      }
      getTitle() {
        return this._title;
      }
      getMainAction() {
        const exports = this._getMainActionId();
        return gDesigner.getAction(exports);
      }
      isVisible() {
        return false;
      }
      isEnabled() {
        return this.getMainAction().isEnabled();
      }
      getShortcutSubKey() {
        return null;
      }
      getShortcutHint(e) {
        const module = this.getMainAction().getShortcut(),
          require = this.getShortcutSubKey(),
          _interopRequireDefault = GAction.default.getActionShortcutHint(module, e);
        return _interopRequireDefault && require
          ? GCore.GLocale.getValue("GSubAction", "shortcut-hint-template")
              .replace("%mainShortcutHint", _interopRequireDefault)
              .replace("%shortcutSubKeyHint", require)
          : null;
      }
      toString() {
        return "[Object GSubAction]";
      }
    }
    (r.Type = {}), (exports.exports = r);
  }