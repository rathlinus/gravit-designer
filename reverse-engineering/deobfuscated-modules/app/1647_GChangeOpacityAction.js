/**
 * Webpack Module #1647
 * Type: class
 * Name: GChangeOpacityAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      r = require(15) /* GEditor */,
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
    class c extends GAction.default {
      constructor() {
        super(),
          (this._opacityLevel = null),
          (this._timeoutId = null),
          (this._currentValue = "");
      }
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getFullTitle() {
        return GCore.GLocale.getValue("GChangeOpacityAction", "full-title").replace(
          "%value",
          "100% (10%, 20%, 25%, 26%, 30%, 40%, ... 90%)"
        );
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_EDIT;
      }
      isVisible() {
        return false;
      }
      getAdditionalShortcuts() {
        return [
          r.GKey.Constant.Digit0,
          r.GKey.Constant.Digit1,
          r.GKey.Constant.Digit2,
          r.GKey.Constant.Digit3,
          r.GKey.Constant.Digit4,
          r.GKey.Constant.Digit5,
          r.GKey.Constant.Digit6,
          r.GKey.Constant.Digit7,
          r.GKey.Constant.Digit8,
          r.GKey.Constant.Digit9,
        ].map((e) => [r.GKey.Constant.SHIFT, e]);
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = exports && exports.getScene(),
          _interopRequireDefault = module && module.getSelection();
        require &&
          _interopRequireDefault &&
          (GTools.GEditor.tryRunTransaction(
            require,
            () => {
              _interopRequireDefault.forEach((e) => {
                e.hasMixin(GCore.GStylable) &&
                  e.setProperty("_stop", this._opacityLevel);
              });
            },
            GCore.GLocale.get(c.TITLE)
          ),
          this._setOpacityLevel());
      }
      executeFromShortcut(e) {
        const module = r.GKey.translateCode(e.code),
          require = this._currentValue;
        this._setCurrentValue(module),
          require
            ? this._processDefinedCurrentValue()
            : (this._timeoutId = setTimeout(() => {
                this._processDefinedCurrentValue();
              }, GAction.default.SHORTCUT_DELAY));
      }
      isKeyBoardEventRequiredToExecute() {
        return true;
      }
      getShortcutHint(e) {
        const module = [r.GKey.Constant.SHIFT, "0 (1, 2, 25, 26, 3, 4, ... 9)"];
        return GAction.default.getActionShortcutHint(module, e);
      }
      _processDefinedCurrentValue() {
        this._clearTimeout(),
          this._currentValue.length > 1 &&
            "0" === this._currentValue[0] &&
            (this._currentValue = this._currentValue.replace("0", "."));
        const exports = GCore.GUtil.parseNumber(this._currentValue);
        if ("number" == typeof exports && !isNaN(exports)) {
          const t = this._getOpacityLevel(exports);
          this._setOpacityLevel(t), this.execute.apply(this);
        }
        this._setCurrentValue();
      }
      _getOpacityLevel(e) {
        return 0 === e ? 1 : e < 10 ? e / 10 : e < 100 ? e / 100 : 1;
      }
      _setCurrentValue(e) {
        e ? (this._currentValue += e) : (this._currentValue = "");
      }
      _setOpacityLevel() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
        this._opacityLevel = exports;
      }
      _clearTimeout() {
        this._timeoutId && clearTimeout(this._timeoutId);
      }
      toString() {
        return "[Object GChangeOpacityAction]";
      }
    }
    (c.ID = "edit.change-opacity"),
      (c.TITLE = new GCore.GLocaleKey("GChangeOpacityAction", "title")),
      (exports.exports = c);
  }