/**
 * Webpack Module #1297
 * Type: class
 * Name: GOutlineViewAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GAction = _interopRequireDefault(require(31) /* GAction */),
      l = _interopRequireDefault(require(442) /* module_442 */);
    function c() {}
    GCore.GObject.inherit(c, GAction.default),
      (c.ID = "view.outline-view"),
      (c.TITLE = new GCore.GLocaleKey("GOutlineViewAction", "title")),
      (c.GroupID = "view"),
      (c.StoragePropertyName = "designer.settings.outline-view.enabled"),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return GCore.GLocale.get(c.TITLE);
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }),
      (c.prototype.getGroup = function () {
        return c.GroupID;
      }),
      (c.prototype.isCheckable = function () {
        return true;
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-out-line" : null;
      }),
      (c.prototype.isChecked = function () {
        const exports = gDesigner.getWindows().getActiveWindow();
        if (exports) {
          const t = exports.getView().getViewConfiguration();
          return (
            !!t && t.paintMode === GCore.GScenePaintConfiguration.PaintMode.Outline
          );
        }
        return false;
      }),
      (c.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (c.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.OPTION, "Y"];
      }),
      (c.prototype.execute = function () {
        let exports;
        if (
          gDesigner
            .getWindows()
            .getActiveWindow()
            .getView()
            .getViewConfiguration().paintMode ===
          GCore.GScenePaintConfiguration.PaintMode.Outline
        ) {
          var module = gDesigner.getActiveDocument();
          if (module) {
            var require = module.getScene().getActivePage();
            if (require && !require.isFixedSized())
              exports = GCore.GScenePaintConfiguration.PaintMode.Full;
            else
              exports =
                (require.getProperty(l.default.PAGE_CLIP_PROPERTY_NAME, true) ||
                  l.default.PAGE_CLIP_CONTENT_ENABLED) ===
                l.default.PAGE_CLIP_CONTENT_ENABLED
                  ? GCore.GScenePaintConfiguration.PaintMode.Output
                  : GCore.GScenePaintConfiguration.PaintMode.Full;
          } else exports = GCore.GScenePaintConfiguration.PaintMode.Output;
        } else exports = GCore.GScenePaintConfiguration.PaintMode.Outline;
        gDesigner.setPaintMode(exports),
          gDesigner.updateGEditorSceneConfigurationPaintMode(exports);
      }),
      (c.prototype.toString = function () {
        return "[Object GOutlineViewAction]";
      }),
      (exports.exports = c);
  }