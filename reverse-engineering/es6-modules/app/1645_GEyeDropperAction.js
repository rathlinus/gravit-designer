/**
 * Webpack Module #1645
 * Type: class
 * Name: GEyeDropperAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13)) /* stub_requires_679 */;
  var GEditor = require(15) /* GEditor */,
    GCore = require(1) /* GCore */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GOutlineSidebar = require(198); /* Exports_GOutlineSidebar */
  const GAction = require(31); /* GAction */
  class c extends GAction {
    constructor(e) {
      (super(),
        (this._type = e),
        (this._title = new GCore.GLocaleKey('GEyeDropperAction', 'title.'.concat(e))),
        (this.pageX = 0),
        (this.pageY = 0));
    }
    getId() {
      return ''.concat(c.ID, '.').concat(this._type);
    }
    getTitle() {
      return this._title;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_EDIT;
    }
    getShortcut() {
      switch (this._type) {
        case c.Type.Fill:
          return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, 'C'];
        case c.Type.Border:
          return [
            GEditor.GKey.Constant.SHIFT,
            GEditor.GKey.Constant.META,
            GEditor.GKey.Constant.OPTION,
            'C',
          ];
        default:
          return null;
      }
    }
    getAdditionalShortcuts() {
      switch (this._type) {
        case c.Type.Fill:
          return [['I']];
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
        _interopRequireDefault = gDesigner
          .getRightSidebars()
          .getSidebar(GOutlineSidebar.SidebarsIds.GInspectorSidebar),
        GEditor = require && require.filter((e) => e && e.hasMixin(GCore.GStylable));
      if (!(GEditor && GEditor.length > 0)) return;
      const { pageX: MenuItemBuilder, pageY: GAction } = this._getLastCursorPoint();
      switch (this._type) {
        case c.Type.Fill:
          GEditor.find((e) => e.hasStyleFill() && !(e instanceof GCore.GText))
            ? _interopRequireDefault.openFillEyeDropper(MenuItemBuilder, GAction)
            : GEditor.find((e) => e instanceof GCore.GText)
              ? _interopRequireDefault.openTextColorEyeDropper(MenuItemBuilder, GAction)
              : GEditor.find((e) => !e.hasStyleBorder()) ||
                _interopRequireDefault.openBorderEyeDropper(MenuItemBuilder, GAction);
          break;
        case c.Type.Border:
          GEditor.find((e) => !e.hasStyleBorder()) ||
            _interopRequireDefault.openBorderEyeDropper(MenuItemBuilder, GAction);
      }
    }
    _getLastCursorPoint() {
      const exports = gDesigner.getCursorManager().getLastCursorPoint();
      return { pageX: (exports && exports.getX()) || 0, pageY: (exports && exports.getY()) || 0 };
    }
    toString() {
      return '[Object GEyeDropperAction]';
    }
  }
  ((c.ID = 'edit.eyedropper'),
    (c.Type = { Border: 'border', Fill: 'fill', Text: 'text' }),
    (exports.exports = c));
}
