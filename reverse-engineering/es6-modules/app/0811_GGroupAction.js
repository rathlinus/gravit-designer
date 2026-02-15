/**
 * Webpack Module #811
 * Type: class
 * Name: GGroupAction
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
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class c extends GElementAction {
    constructor() {
      super();
      c.TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GGroupAction', 'tooltip-title')),
      description: GCore.GLocale.get(new GCore.GLocaleKey('GGroupAction', 'tooltip-description')),
      shortcut: c.SHORTCUT,
      learnMore: '',
      }),
      };
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return c.TITLE;
    }

    getIcon() {
      return 'gravit-icon-group';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY;
    }

    getGroup() {
      return 'structure-group';
    }

    getShortcut() {
      return c.SHORTCUT;
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument();
      if (e) {
        var module = e.getEditor().getIndividualSelection();
        if (module && module.length > 0)
          for (
            var require = new GCore.GGroup(), GEditor = module.length - 1;
            GEditor >= 0;
            --GEditor
          ) {
            var CollaborationMergeUtils = module[GEditor];
            if (
              CollaborationMergeUtils.validateInsertion(require) &&
              !CollaborationMergeUtils.getParent().isLocked() &&
              require.validateInsertion(CollaborationMergeUtils.getParent())
            )
              return true;
          }
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor(),
        t = GCore.GNode.order(e.getIndividualSelection().slice());
      e.beginTransaction();
      try {
        for (var require = new GCore.GGroup(), GEditor = [], r = 0; r < t.length; ++r) {
          (p = t[r]).validateInsertion(require) && GEditor.push(p);
        }
        if (GEditor.length > 0) {
          var MenuItemBuilder = GEditor[GEditor.length - 1],
            GElementAction = MenuItemBuilder.getParent(),
            c = MenuItemBuilder.getNext();
          if (!GElementAction.isLocked() && require.validateInsertion(GElementAction)) {
            GElementAction.insertChild(require, c);
            var d,
              u = gDesigner.getActiveDocument().getScene();
            try {
              d = new Set();
              for (r = 0; r < GEditor.length; ++r) d.add(GEditor[r].getParent());
              (0, CollaborationMergeUtils.blockChanges)(e, d, u, require);
              for (r = 0; r < GEditor.length; ++r) {
                var p;
                ((p = GEditor[r]).getParent().removeChild(p), require.appendChild(p));
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(e, d, u, require);
            }
          }
          e.updateSelection(false, [require]);
        }
      } finally {
        e.commitTransaction(GCore.GLocale.get(new GCore.GLocaleKey('GGroupAction', 'title')));
      }
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GGroupAction]';
    }

    static TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GGroupAction', 'tooltip-title')),
        description: GCore.GLocale.get(new GCore.GLocaleKey('GGroupAction', 'tooltip-description')),
        shortcut: c.SHORTCUT,
        learnMore: '',
      }),
    };

    static ID = 'modify.group';

    static TITLE = new GCore.GLocaleKey('GGroupAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.META, 'G'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}