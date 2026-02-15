/**
 * Webpack Module #809
 * Type: class
 * Name: GClipAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(3) /* polyfill_RegExp_toString */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    r = require(67) /* GRichTooltipConfig */,
    AppSettings = require(10) /* AppSettings */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class d extends GElementAction {
    constructor() {
      super();
      d.TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GClipAction', 'tooltip-title')),
      description: GCore.GLocale.get(new GCore.GLocaleKey('GClipAction', 'tooltip-description')),
      video: AppSettings.gApi.getRichTooltipVideoURL('Clip.mp4'),
      learnMore: '',
      }),
      };
    }

    getId() {
      return d.ID;
    }

    getTitle() {
      return d.TITLE;
    }

    getIcon() {
      return 'gravit-icon-clip-circle';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY;
    }

    getGroup() {
      return 'structure-group';
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getIndividualSelection();
        return module && module.length > 1;
      }
      return false;
    }

    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.META, 'M'];
    }

    execute(e, t) {
      var n = gDesigner.getActiveDocument().getEditor(),
        GEditor = gDesigner.getActiveDocument().getScene(),
        r = GCore.GNode.order(n.getIndividualSelection().slice(), e),
        AppSettings = r.shift();
      if (!AppSettings.isLocked()) {
        var MenuItemBuilder,
          GElementAction = AppSettings.getPaintBBox();
        t || n.beginTransaction();
        try {
          MenuItemBuilder = new Set();
          for (var d = 0; d < r.length; ++d) MenuItemBuilder.add(r[d].getParent());
          try {
            (0, CollaborationMergeUtils.blockChanges)(n, MenuItemBuilder, GEditor, AppSettings);
            for (d = 0; d < r.length; ++d) {
              var u = r[d];
              u.validateInsertion(AppSettings) &&
                u.getPaintBBox() &&
                GElementAction &&
                u.getPaintBBox().intersectsRect(GElementAction) &&
                (u.getParent().removeChild(u), AppSettings.appendChild(u));
            }
          } finally {
            ((0, CollaborationMergeUtils.releaseChanges)(n, MenuItemBuilder, GEditor, AppSettings),
              n.updateSelection(false, [AppSettings]));
          }
        } finally {
          t ||
            n.commitTransaction(
              GCore.GLocale.get(new GCore.GLocaleKey('GClipAction', 'text.clip-selecion'))
            );
        }
      }
    }

    getTooltipConfig(e) {
      return e && d.TOOLTIP_CONFIG[e];
    }

    toString() {
      return '[Object GClipAction]';
    }

    static TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GClipAction', 'tooltip-title')),
        description: GCore.GLocale.get(new GCore.GLocaleKey('GClipAction', 'tooltip-description')),
        video: AppSettings.gApi.getRichTooltipVideoURL('Clip.mp4'),
        learnMore: '',
      }),
    };

    static ID = 'modify.clip';

    static TITLE = new GCore.GLocaleKey('GClipAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = d;
}