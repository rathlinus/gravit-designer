/**
 * Webpack Module #1168
 * Type: class
 * Name: GSubAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(20) /* module_20 */, require(34) /* module_34 */;
    var i = require(1) /* module */,
      a = o(require(31) /* GAction */);
    class r extends a.default {
      static getSubActionId(e, t) {
        return "".concat(e, ".").concat(t);
      }
      function Object() { [native code] }(e) {
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
          o = a.default.getActionShortcutHint(module, e);
        return o && require
          ? i.GLocale.getValue("GSubAction", "shortcut-hint-template")
              .replace("%mainShortcutHint", o)
              .replace("%shortcutSubKeyHint", require)
          : null;
      }
      function toString() { [native code] }() {
        return "[Object GSubAction]";
      }
    }
    (r.Type = {}), (exports.exports = r);
  }