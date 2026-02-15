/**
 * Webpack Module #1603
 * Type: action
 * Name: Action_view_fast_view
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(3) /* module_3 */;
    var i = require(1) /* module */,
      a = o(require(1339) /* GPageProperties */),
      r = o(require(31) /* GAction */),
      s = o(require(18) /* module_18 */);
    function l() {}
    i.GObject.inherit(l, r.default),
      (l.ID = "view.fast-view"),
      (l.TITLE = new i.GLocaleKey("GFastViewAction", "title")),
      (l.GroupID = "view"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return i.GLocale.get(l.TITLE);
      }),
      (l.prototype.getCategory = function () {
        return s.default.CATEGORY_VIEW;
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
            !!require && require.paintMode === i.GScenePaintConfiguration.PaintMode.Fast
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
        if (t.paintMode === i.GScenePaintConfiguration.PaintMode.Fast) {
          var require = gDesigner.getActiveDocument().getScene().getActivePage();
          if (((t.defaultEffectDetailLevel = null), require && !require.isFixedSized()))
            e = i.GScenePaintConfiguration.PaintMode.Full;
          else
            e =
              (require.getProperty(a.default.CLIP_PROPERTY_NAME, true) ||
                a.default.CLIP_CONTENT_ENABLED) ===
              a.default.CLIP_CONTENT_ENABLED
                ? i.GScenePaintConfiguration.PaintMode.Output
                : i.GScenePaintConfiguration.PaintMode.Full;
        } else
          (t.defaultEffectDetailLevel = 0.5 / i.GPaintCanvas.getScreenDPI()),
            (e = i.GScenePaintConfiguration.PaintMode.Fast);
        gDesigner.setPaintMode(e),
          gDesigner.updateGEditorSceneConfigurationPaintMode(e);
      }),
      (l.prototype.toString = function () {
        return "[GAction GFastViewAction]";
      }),
      (exports.exports = l);
  }