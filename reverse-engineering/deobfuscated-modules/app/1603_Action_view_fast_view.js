/**
 * Webpack Module #1603
 * Type: action
 * Name: Action_view_fast_view
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GPageProperties = _interopRequireDefault(require(1339) /* GPageProperties */),
      r = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */);
    function l() {}
    GCore.GObject.inherit(l, r.default),
      (l.ID = "view.fast-view"),
      (l.TITLE = new GCore.GLocaleKey("GFastViewAction", "title")),
      (l.GroupID = "view"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return GCore.GLocale.get(l.TITLE);
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }),
      (l.prototype.getGroup = function () {
        return l.GroupID;
      }),
      (l.prototype.isEnabled = function () {
        return !!gDesigner.getWindows().getActiveWindow();
      }),
      (l.prototype.isCheckable = function () {
        return true;
      }),
      (l.prototype.isChecked = function () {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getActiveWindow();
        if (module) {
          var require = module.getView().getViewConfiguration();
          return (
            !!require && require.paintMode === GCore.GScenePaintConfiguration.PaintMode.Fast
          );
        }
        return false;
      }),
      (l.prototype.execute = function () {
        var e,
          t = gDesigner
            .getActiveDocument()
            .getActiveWindow()
            .getView()
            .getViewConfiguration();
        if (t.paintMode === GCore.GScenePaintConfiguration.PaintMode.Fast) {
          var require = gDesigner.getActiveDocument().getScene().getActivePage();
          if (((t.defaultEffectDetailLevel = null), require && !require.isFixedSized()))
            e = GCore.GScenePaintConfiguration.PaintMode.Full;
          else
            e =
              (require.getProperty(GPageProperties.default.CLIP_PROPERTY_NAME, true) ||
                GPageProperties.default.CLIP_CONTENT_ENABLED) ===
              GPageProperties.default.CLIP_CONTENT_ENABLED
                ? GCore.GScenePaintConfiguration.PaintMode.Output
                : GCore.GScenePaintConfiguration.PaintMode.Full;
        } else
          (t.defaultEffectDetailLevel = 0.5 / GCore.GPaintCanvas.getScreenDPI()),
            (e = GCore.GScenePaintConfiguration.PaintMode.Fast);
        gDesigner.setPaintMode(e),
          gDesigner.updateGEditorSceneConfigurationPaintMode(e);
      }),
      (l.prototype.toString = function () {
        return "[GAction GFastViewAction]";
      }),
      (exports.exports = l);
  }