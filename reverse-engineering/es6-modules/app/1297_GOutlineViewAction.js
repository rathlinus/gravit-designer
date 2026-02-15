/**
 * Webpack Module #1297
 * Type: class
 * Name: GOutlineViewAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GAction = _interopRequireDefault(require(31) /* GAction */),
    DataModule_442 = _interopRequireDefault(require(442) /* DataModule_442 */);
  class c extends GAction.default {
    constructor() {
      super();
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return GCore.GLocale.get(c.TITLE);
    }

    getCategory() {
      return MenuItemBuilder.default.CATEGORY_VIEW;
    }

    getGroup() {
      return c.GroupID;
    }

    isCheckable() {
      return true;
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-out-line' : null;
    }

    isChecked() {
      const exports = gDesigner.getWindows().getActiveWindow();
      if (exports) {
        const t = exports.getView().getViewConfiguration();
        return !!t && t.paintMode === GCore.GScenePaintConfiguration.PaintMode.Outline;
      }
      return false;
    }

    isEnabled() {
      return !!gDesigner.getWindows().getActiveWindow();
    }

    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, 'Y'];
    }

    execute() {
      let exports;
      if (
        gDesigner.getWindows().getActiveWindow().getView().getViewConfiguration().paintMode ===
        GCore.GScenePaintConfiguration.PaintMode.Outline
      ) {
        var module = gDesigner.getActiveDocument();
        if (module) {
          var require = module.getScene().getActivePage();
          if (require && !require.isFixedSized())
            exports = GCore.GScenePaintConfiguration.PaintMode.Full;
          else
            exports =
              (require.getProperty(DataModule_442.default.PAGE_CLIP_PROPERTY_NAME, true) ||
                DataModule_442.default.PAGE_CLIP_CONTENT_ENABLED) ===
              DataModule_442.default.PAGE_CLIP_CONTENT_ENABLED
                ? GCore.GScenePaintConfiguration.PaintMode.Output
                : GCore.GScenePaintConfiguration.PaintMode.Full;
        } else exports = GCore.GScenePaintConfiguration.PaintMode.Output;
      } else exports = GCore.GScenePaintConfiguration.PaintMode.Outline;
      (gDesigner.setPaintMode(exports),
        gDesigner.updateGEditorSceneConfigurationPaintMode(exports));
    }

    toString() {
      return '[Object GOutlineViewAction]';
    }

    static ID = 'view.outline-view';

    static TITLE = new GCore.GLocaleKey('GOutlineViewAction', 'title');

    static GroupID = 'view';

    static StoragePropertyName = 'designer.settings.outline-view.enabled';

  }
  exports.exports = c;
}