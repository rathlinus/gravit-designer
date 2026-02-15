/**
 * Webpack Module #1281
 * Type: class
 * Name: GMainAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    var i = require(15) /* module */,
      a = o(require(31) /* GAction */),
      r = o(require(1168) /* GSubAction */);
    class s extends a.default {
      constructor(e) {
        super(), (this.Type = e.Type);
        const module = Object.values(this.Type);
        (this._subActionIds = module.map((e) =>
          r.default.getSubActionId(this.getId(), e)
        )),
          (this._timeoutId = null),
          (this._shortcutSubKeyHandlerBind =
            this._shortcutSubKeyHandler.bind(this));
      }
      executeFromShortcut() {
        this._setShortcutSubKeyListener();
      }
      execute() {}
      getSubActions() {
        return this._subActionIds
          ? this._subActionIds.map((e) => gDesigner.getAction(e))
          : null;
      }
      getShortcutSubKeys() {
        const exports = this.getSubActions();
        return exports ? exports.map((e) => e.getShortcutSubKey()).filter((e) => e) : null;
      }
      getShortcutHint(e) {
        return null;
      }
      _setShortcutSubKeyListener() {
        this._resetShortcutSubKeyListener(),
          document.addEventListener(
            "keydown",
            this._shortcutSubKeyHandlerBind,
            true
          ),
          (this._timeoutId = setTimeout(() => {
            this._resetShortcutSubKeyListener(), this.execute();
          }, a.default.SHORTCUT_DELAY));
      }
      _executeFromShortcutSubKey(e) {
        const module = this.getSubActions();
        if (!module) return;
        const require = module.find((t) => t.getShortcutSubKey() === e);
        require && require.execute();
      }
      _shortcutSubKeyHandler(e) {
        const module = i.GKey.translateCode(e.code),
          require = this.getShortcutSubKeys();
        this._resetShortcutSubKeyListener(),
          module &&
            require &&
            require.includes(module) &&
            (e.preventDefault(),
            e.stopPropagation(),
            this._executeFromShortcutSubKey(module));
      }
      _resetShortcutSubKeyListener() {
        this._timeoutId &&
          (document.removeEventListener(
            "keydown",
            this._shortcutSubKeyHandlerBind,
            true
          ),
          clearTimeout(this._timeoutId),
          (this._timeoutId = null));
      }
      toString() {
        return "[Object GMainAction]";
      }
    }
    exports.exports = s;
  }