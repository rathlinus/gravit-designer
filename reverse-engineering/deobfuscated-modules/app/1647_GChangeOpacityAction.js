/**
 * Webpack Module #1647
 * Type: class
 * Name: GChangeOpacityAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(20) /* module_20 */, require(34) /* module_34 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */;
    var i = require(1) /* module */,
      a = require(53) /* module */,
      r = require(15) /* module */,
      s = o(require(31) /* GAction */),
      l = o(require(18) /* module_18 */);
    class c extends s.default {
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
        return i.GLocale.getValue("GChangeOpacityAction", "full-title").replace(
          "%value",
          "100% (10%, 20%, 25%, 26%, 30%, 40%, ... 90%)"
        );
      }
      getCategory() {
        return l.default.CATEGORY_EDIT;
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
          o = module && module.getSelection();
        require &&
          o &&
          (a.GEditor.tryRunTransaction(
            require,
            () => {
              o.forEach((e) => {
                e.hasMixin(i.GStylable) &&
                  e.setProperty("_stop", this._opacityLevel);
              });
            },
            i.GLocale.get(c.TITLE)
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
              }, s.default.SHORTCUT_DELAY));
      }
      isKeyBoardEventRequiredToExecute() {
        return true;
      }
      getShortcutHint(e) {
        const module = [r.GKey.Constant.SHIFT, "0 (1, 2, 25, 26, 3, 4, ... 9)"];
        return s.default.getActionShortcutHint(module, e);
      }
      _processDefinedCurrentValue() {
        this._clearTimeout(),
          this._currentValue.length > 1 &&
            "0" === this._currentValue[0] &&
            (this._currentValue = this._currentValue.replace("0", "."));
        const exports = i.GUtil.parseNumber(this._currentValue);
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
      (c.TITLE = new i.GLocaleKey("GChangeOpacityAction", "title")),
      (exports.exports = c);
  }