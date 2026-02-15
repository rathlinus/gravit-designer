/**
 * Webpack Module #1645
 * Type: class
 * Name: GEyeDropperAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(4) /* module_4 */, require(41) /* module_41 */, require(13) /* module_13 */;
    var i = require(15) /* module */,
      a = require(1) /* module */,
      r = o(require(18) /* module_18 */),
      s = require(198) /* Exports_GOutlineSidebar */;
    const l = require(31) /* GAction */;
    class c extends l {
      constructor(e) {
        super(),
          (this._type = e),
          (this._title = new a.GLocaleKey(
            "GEyeDropperAction",
            "title.".concat(e)
          )),
          (this.pageX = 0),
          (this.pageY = 0);
      }
      getId() {
        return "".concat(c.ID, ".").concat(this._type);
      }
      getTitle() {
        return this._title;
      }
      getCategory() {
        return r.default.CATEGORY_EDIT;
      }
      getShortcut() {
        switch (this._type) {
          case c.Type.Fill:
            return [i.GKey.Constant.META, i.GKey.Constant.OPTION, "C"];
          case c.Type.Border:
            return [
              i.GKey.Constant.SHIFT,
              i.GKey.Constant.META,
              i.GKey.Constant.OPTION,
              "C",
            ];
          default:
            return null;
        }
      }
      getAdditionalShortcuts() {
        switch (this._type) {
          case c.Type.Fill:
            return [["I"]];
          default:
            return null;
        }
      }
      isVisible() {
        return false;
      }
      execute() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getEditor(),
          require = module && module.getSelection(),
          o = gDesigner
            .getRightSidebars()
            .getSidebar(s.SidebarsIds.GInspectorSidebar),
          i = require && require.filter((e) => e && e.hasMixin(a.GStylable));
        if (!(i && i.length > 0)) return;
        const { pageX: r, pageY: l } = this._getLastCursorPoint();
        switch (this._type) {
          case c.Type.Fill:
            i.find((e) => e.hasStyleFill() && !(e instanceof a.GText))
              ? o.openFillEyeDropper(r, l)
              : i.find((e) => e instanceof a.GText)
              ? o.openTextColorEyeDropper(r, l)
              : i.find((e) => !e.hasStyleBorder()) ||
                o.openBorderEyeDropper(r, l);
            break;
          case c.Type.Border:
            i.find((e) => !e.hasStyleBorder()) || o.openBorderEyeDropper(r, l);
        }
      }
      _getLastCursorPoint() {
        const exports = gDesigner.getCursorManager().getLastCursorPoint();
        return { pageX: (exports && exports.getX()) || 0, pageY: (exports && exports.getY()) || 0 };
      }
      toString() {
        return "[Object GEyeDropperAction]";
      }
    }
    (c.ID = "edit.eyedropper"),
      (c.Type = { Border: "border", Fill: "fill", Text: "text" }),
      (exports.exports = c);
  }