/**
 * Webpack Module #870
 * Type: class
 * Name: GSplitAction
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
      title: GCore.GLocale.get(new GCore.GLocaleKey('GSplitAction', 'tooltip-title')),
      description: GCore.GLocale.get(new GCore.GLocaleKey('GSplitAction', 'tooltip-description')),
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
      return 'gravit-icon-ungroup';
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
        if (module)
          for (var require = 0; require < module.length; ++require) {
            var GEditor = module[require];
            if (
              GEditor instanceof GCore.GGroup ||
              GEditor instanceof GCore.GCompoundShape ||
              (GEditor instanceof GCore.GSymbol && !GEditor.getMasterSymbol()) ||
              (GEditor instanceof GCore.GShape && null !== GEditor.getFirstChild())
            )
              return true;
          }
      }
      return false;
    }

    execute() {
      var e = gDesigner.getActiveDocument().getEditor(),
        t = e.getIndividualSelection().slice();
      e.beginTransaction();
      try {
        var require,
          GEditor,
          r = [],
          MenuItemBuilder = gDesigner.getActiveDocument().getScene();
        e.clearSelection();
        try {
          GEditor = new Set();
          for (var GElementAction = 0; GElementAction < t.length; ++GElementAction)
            (((require = t[GElementAction]) instanceof GCore.GShape &&
              null !== require.getFirstChild()) ||
              require instanceof GCore.GGroup ||
              require instanceof GCore.GCompoundShape ||
              (require instanceof GCore.GSymbol && !require.getMasterSymbol())) &&
              GEditor.add(require.getParent());
          (0, CollaborationMergeUtils.blockChanges)(e, GEditor, MenuItemBuilder);
          for (GElementAction = 0; GElementAction < t.length; ++GElementAction)
            if (
              (require = t[GElementAction]) instanceof GCore.GGroup ||
              require instanceof GCore.GCompoundShape ||
              (require instanceof GCore.GSymbol && !require.getMasterSymbol())
            ) {
              var d = require.getParent(),
                u = require.getChildren();
              try {
                require.beginUpdate();
                for (var p = 0; p < u.length; ++p) {
                  var g = u[p];
                  (require.removeChild(g), d.insertChild(g, require), r.push(g));
                }
              } finally {
                require.endUpdate();
              }
              d.removeChild(require);
            } else if (require instanceof GCore.GShape && null !== require.getFirstChild()) {
              ((d = require.getParent()), (u = require.getChildren()));
              try {
                require.beginUpdate();
                for (p = u.length - 1; p >= 0; --p) {
                  g = u[p];
                  (require.removeChild(g), d.insertChild(g, require.getNext()), r.push(g));
                }
              } finally {
                require.endUpdate();
              }
              r.push(require);
            } else r.push(require);
        } finally {
          (0, CollaborationMergeUtils.releaseChanges)(e, GEditor, MenuItemBuilder);
        }
        r.length > 0 && e.updateSelection(false, r);
      } finally {
        e.commitTransaction(GCore.GLocale.get(c.TITLE));
      }
    }

    getTooltipConfig(e) {
      return (e && c.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GSplitAction]';
    }

    static TOOLTIP_CONFIG = {
      [r.TOOLTIP_AREA.TOOLBAR]: r.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GSplitAction', 'tooltip-title')),
        description: GCore.GLocale.get(new GCore.GLocaleKey('GSplitAction', 'tooltip-description')),
        shortcut: c.SHORTCUT,
        learnMore: '',
      }),
    };

    static ID = 'modify.split';

    static TITLE = new GCore.GLocaleKey('GSplitAction', 'title');

    static SHORTCUT = [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, 'G'];

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = c;
}