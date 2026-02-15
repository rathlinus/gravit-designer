/**
 * Webpack Module #809
 * Type: class
 * Name: GClipAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      AppSettings = require(10) /* AppSettings */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function d() {
      d.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GClipAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GClipAction", "tooltip-description")
          ),
          video: AppSettings.gApi.getRichTooltipVideoURL("Clip.mp4"),
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(d, GElementAction),
      (d.ID = "modify.clip"),
      (d.TITLE = new GCore.GLocaleKey("GClipAction", "title")),
      (d.TOOLTIP_CONFIG = null),
      (d.prototype.getId = function () {
        return d.ID;
      }),
      (d.prototype.getTitle = function () {
        return d.TITLE;
      }),
      (d.prototype.getIcon = function () {
        return "gravit-icon-clip-circle";
      }),
      (d.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY;
      }),
      (d.prototype.getGroup = function () {
        return "structure-group";
      }),
      (d.prototype.isEnabled = function () {
        if (!GElementAction.prototype.isEnabled.call(this)) return false;
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor().getIndividualSelection();
          return module && module.length > 1;
        }
        return false;
      }),
      (d.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.META, "M"];
      }),
      (d.prototype.execute = function (e, t) {
        var n = gDesigner.getActiveDocument().getEditor(),
          GEditor = gDesigner.getActiveDocument().getScene(),
          GRichTooltipConfig = GCore.GNode.order(n.getIndividualSelection().slice(), e),
          AppSettings = GRichTooltipConfig.shift();
        if (!AppSettings.isLocked()) {
          var MenuItemBuilder,
            GElementAction = AppSettings.getPaintBBox();
          t || n.beginTransaction();
          try {
            MenuItemBuilder = new Set();
            for (var d = 0; d < GRichTooltipConfig.length; ++d) MenuItemBuilder.add(GRichTooltipConfig[d].getParent());
            try {
              (0, CollaborationMergeUtils.blockChanges)(n, MenuItemBuilder, GEditor, AppSettings);
              for (d = 0; d < GRichTooltipConfig.length; ++d) {
                var u = GRichTooltipConfig[d];
                u.validateInsertion(AppSettings) &&
                  u.getPaintBBox() &&
                  GElementAction &&
                  u.getPaintBBox().intersectsRect(GElementAction) &&
                  (u.getParent().removeChild(u), AppSettings.appendChild(u));
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(n, MenuItemBuilder, GEditor, AppSettings), n.updateSelection(false, [AppSettings]);
            }
          } finally {
            t ||
              n.commitTransaction(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GClipAction", "text.clip-selecion")
                )
              );
          }
        }
      }),
      (d.prototype.getTooltipConfig = function (e) {
        return e && d.TOOLTIP_CONFIG[e];
      }),
      (d.prototype.toString = function () {
        return "[Object GClipAction]";
      }),
      (exports.exports = d);
  }