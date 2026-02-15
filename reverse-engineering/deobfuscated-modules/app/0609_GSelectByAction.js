/**
 * Webpack Module #609
 * Type: class
 * Name: GSelectByAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(53) /* module */;
    const a = require(18) /* module_18 */,
      r = require(106) /* GElementAction */;
    function s(e, t) {
      r.call(this), (this._id = e), (this._title = t);
    }
    o.GObject.inherit(s, r),
      (s.EmptyValue = {}),
      (s.EmptyPattern = {}),
      (s.prototype._id = null),
      (s.prototype._title = null),
      (s.prototype.getId = function () {
        return this._id;
      }),
      (s.prototype.getTitle = function () {
        return this._title;
      }),
      (s.prototype.getCategory = function () {
        return a.CATEGORY_EDIT_SELECT_SAME;
      }),
      (s.prototype.isEnabled = function () {
        if (!r.prototype.isEnabled.call(this)) return false;
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection();
        if (!require || !require.length) return false;
        return this._createPattern(require) !== s.EmptyPattern;
      }),
      (s.prototype._createPattern = function (e) {
        const module = e && e.length;
        if (!module) return s.EmptyPattern;
        const require = this._getValue(e[0]);
        if (require === s.EmptyValue) return s.EmptyPattern;
        for (let o = 1; o < module; o++) {
          const t = e[o],
            i = this._getValue(t);
          if (i === s.EmptyValue) return s.EmptyPattern;
          if (!this._matches(require, i)) return s.EmptyPattern;
        }
        return require;
      }),
      (s.prototype._matches = function (e, t) {
        return (
          e !== s.EmptyPattern &&
          t !== s.EmptyPattern &&
          o.GUtil.equals(e, t, true)
        );
      }),
      (s.prototype._getValue = function (e) {
        throw "Not implemented";
      }),
      (s.prototype.execute = function () {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getScene(),
          require = exports && exports.getEditor(),
          a = require && require.getSelection();
        if (!module || !a || !a.length) return;
        const r = this._createPattern(a);
        if (r === s.EmptyPattern) return;
        const l = [];
        module.accept((e) => {
          if (e instanceof o.GElement && !e.hasMixin(o.GAnnotation)) {
            const t = this._createPattern([e]);
            this._matches(r, t) && l.push(e);
          }
        }),
          l.length > 0 &&
            i.GEditor.tryRunTransaction(
              module,
              () => {
                require.updateSelection(false, l);
              },
              o.GLocale.get(this.getTitle())
            );
      }),
      (s.prototype.toString = function () {
        return "[Object GSelectByAction]";
      }),
      (exports.exports = s);
  }