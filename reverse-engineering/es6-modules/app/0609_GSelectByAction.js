/**
 * Webpack Module #609
 * Type: class
 * Name: GSelectByAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GTools = require(53);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class s extends GElementAction {
    constructor(e, t) {
      super();
      (GElementAction.call(this), (this._id = e), (this._title = t));
    }

    _id = null;
    _title = null;

    getId() {
      return this._id;
    }

    getTitle() {
      return this._title;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT_SELECT_SAME;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      const exports = gDesigner.getActiveDocument(),
        module = exports && exports.getEditor(),
        require = module && module.getSelection();
      if (!require || !require.length) return false;
      return this._createPattern(require) !== s.EmptyPattern;
    }

    _createPattern(e) {
      const module = e && e.length;
      if (!module) return s.EmptyPattern;
      const require = this._getValue(e[0]);
      if (require === s.EmptyValue) return s.EmptyPattern;
      for (let GCore = 1; GCore < module; GCore++) {
        const t = e[GCore],
          GTools = this._getValue(t);
        if (GTools === s.EmptyValue) return s.EmptyPattern;
        if (!this._matches(require, GTools)) return s.EmptyPattern;
      }
      return require;
    }

    _matches(e, t) {
      return e !== s.EmptyPattern && t !== s.EmptyPattern && GCore.GUtil.equals(e, t, true);
    }

    _getValue(e) {
      throw 'Not implemented';
    }

    execute() {
      const exports = gDesigner.getActiveDocument(),
        module = exports && exports.getScene(),
        require = exports && exports.getEditor(),
        MenuItemBuilder = require && require.getSelection();
      if (!module || !MenuItemBuilder || !MenuItemBuilder.length) return;
      const GElementAction = this._createPattern(MenuItemBuilder);
      if (GElementAction === s.EmptyPattern) return;
      const l = [];
      (module.accept((e) => {
        if (e instanceof GCore.GElement && !e.hasMixin(GCore.GAnnotation)) {
          const t = this._createPattern([e]);
          this._matches(GElementAction, t) && l.push(e);
        }
      }),
        l.length > 0 &&
          GTools.GEditor.tryRunTransaction(
            module,
            () => {
              require.updateSelection(false, l);
            },
            GCore.GLocale.get(this.getTitle())
          ));
    }

    toString() {
      return '[Object GSelectByAction]';
    }

    static EmptyValue = {};

    static EmptyPattern = {};

  }
  exports.exports = s;
}