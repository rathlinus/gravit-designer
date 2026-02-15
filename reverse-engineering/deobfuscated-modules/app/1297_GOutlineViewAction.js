/**
 * Webpack Module #1297
 * Type: class
 * Name: GOutlineViewAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(18) /* module_18 */),
      s = o(require(31) /* GAction */),
      l = o(require(442) /* module_442 */);
    function c() {}
    i.GObject.inherit(c, s.default),
      (c.ID = "view.outline-view"),
      (c.TITLE = new i.GLocaleKey("GOutlineViewAction", "title")),
      (c.GroupID = "view"),
      (c.StoragePropertyName = "designer.settings.outline-view.enabled"),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return i.GLocale.get(c.TITLE);
      }),
      (c.prototype.getCategory = function () {
        return r.default.CATEGORY_VIEW;
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
            !!t && t.paintMode === i.GScenePaintConfiguration.PaintMode.Outline
          );
        }
        return false;
      }),
      (c.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (c.prototype.getShortcut = function () {
        return [a.GKey.Constant.OPTION, "Y"];
      }),
      (c.prototype.execute = function () {
        let exports;
        if (
          gDesigner
            .getWindows()
            .getActiveWindow()
            .getView()
            .getViewConfiguration().paintMode ===
          i.GScenePaintConfiguration.PaintMode.Outline
        ) {
          var module = gDesigner.getActiveDocument();
          if (module) {
            var require = module.getScene().getActivePage();
            if (require && !require.isFixedSized())
              exports = i.GScenePaintConfiguration.PaintMode.Full;
            else
              exports =
                (require.getProperty(l.default.PAGE_CLIP_PROPERTY_NAME, true) ||
                  l.default.PAGE_CLIP_CONTENT_ENABLED) ===
                l.default.PAGE_CLIP_CONTENT_ENABLED
                  ? i.GScenePaintConfiguration.PaintMode.Output
                  : i.GScenePaintConfiguration.PaintMode.Full;
          } else exports = i.GScenePaintConfiguration.PaintMode.Output;
        } else exports = i.GScenePaintConfiguration.PaintMode.Outline;
        gDesigner.setPaintMode(exports),
          gDesigner.updateGEditorSceneConfigurationPaintMode(exports);
      }),
      (c.prototype.toString = function () {
        return "[Object GOutlineViewAction]";
      }),
      (exports.exports = c);
  }