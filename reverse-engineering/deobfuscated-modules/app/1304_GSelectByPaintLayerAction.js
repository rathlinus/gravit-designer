/**
 * Webpack Module #1304
 * Type: class
 * Name: GSelectByPaintLayerAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */, require(38) /* stub_requires_680 */;
    var GCore = require(1) /* GCore */,
      GSelectByAction = _interopRequireDefault(require(609) /* GSelectByAction */);
    function r(e) {
      (this._type = e), GSelectByAction.default.call(this, r.getId(e), r.getTitle(e));
    }
    GCore.GObject.inherit(r, GSelectByAction.default),
      (r.ID = "edit.select-by-paintlayer"),
      (r.getId = function (e) {
        return "".concat(r.ID, ".").concat(e);
      }),
      (r.getTitle = function (e) {
        return new GCore.GLocaleKey(
          "GSelectByPaintLayerAction",
          "title.".concat(e)
        );
      }),
      (r.Type = {
        Fill: "fill",
        Border: "border",
        FillAndBorder: "fill_border",
      }),
      (r.prototype._type = null),
      (r.prototype.getGroup = function () {
        return "edit/select-by-paintlayer";
      }),
      (r.prototype._getValue = function (e) {
        switch (this._type) {
          case r.Type.Fill:
            return this._getFillPatterns(e);
          case r.Type.Border:
            return this._getBorderPatterns(e);
          case r.Type.FillAndBorder: {
            const t = this._getFillPatterns(e),
              n = this._getBorderPatterns(e);
            return t === GSelectByAction.default.EmptyValue || n === GSelectByAction.default.EmptyValue
              ? GSelectByAction.default.EmptyValue
              : { fills: t, borders: n };
          }
          default:
            return GSelectByAction.default.EmptyValue;
        }
      }),
      (r.prototype._getFillPatterns = function (e) {
        if (e.hasMixin(GCore.GStylable)) {
          const t = e.getPaintLayers(),
            n = t && t.getFillLayers(true);
          if (n && n.length > 0) return n.map((e) => e.getProperty("_pt"));
        }
        return GSelectByAction.default.EmptyValue;
      }),
      (r.prototype._getBorderPatterns = function (e) {
        if (e.hasMixin(GCore.GStylable)) {
          const t = e.getPaintLayers(),
            n = t && t.getBorderLayers(true);
          if (n && n.length) return n.map((e) => e.getProperty("_pt"));
        }
        return GSelectByAction.default.EmptyValue;
      }),
      (r.prototype.toString = function () {
        return "[Object GSelectByPaintLayerAction]";
      }),
      (exports.exports = r);
  }