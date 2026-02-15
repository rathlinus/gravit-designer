/**
 * Webpack Module #872
 * Type: class
 * Name: GVectorizeBorderAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(3) /* polyfill_RegExp_toString */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    a = require(67) /* GRichTooltipConfig */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GElementAction = require(106);
  class l extends GElementAction {
    constructor() {
      super();
      l.TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
      title: GCore.GLocale.get(new GCore.GLocaleKey('GVectorizeBorderAction', 'tooltip-title')),
      description: GCore.GLocale.get(
      new GCore.GLocaleKey('GVectorizeBorderAction', 'tooltip-description')
      ),
      learnMore: '',
      }),
      };
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_MODIFY_PATH;
    }

    getGroup() {
      return 'structure/modify';
    }

    getIcon() {
      return 'gravit-icon-vectorize-border';
    }

    isEnabled() {
      if (!GElementAction.prototype.isEnabled.call(this)) return false;
      var e = gDesigner.getActiveDocument()
          ? gDesigner.getActiveDocument().getEditor().getIndividualSelection()
          : null,
        t = false;
      if (e)
        for (var require = 0; !t && require < e.length; ++require)
          if (
            !(e[require] instanceof GCore.GImage) &&
            e[require].hasMixin(GCore.GVertexSource) &&
            e[require].hasMixin(GCore.GStylable)
          ) {
            var CollaborationMergeUtils = e[require].getPaintLayers(),
              a = CollaborationMergeUtils ? CollaborationMergeUtils.getBorderLayers(true) : null;
            t = a && a.length >= 1;
          }
      return t;
    }

    execute() {
      var e,
        t = gDesigner.getActiveDocument(),
        n = t ? t.getEditor() : null,
        a = (t && t.getScene(), n ? n.getIndividualSelection() : null),
        MenuItemBuilder = [];
      if (a)
        for (var GElementAction = 0; GElementAction < a.length; ++GElementAction) {
          var l = a[GElementAction];
          !l.hasMixin(GCore.GVertexSource) ||
            l instanceof GCore.GImage ||
            !l.hasMixin(GCore.GStylable) ||
            MenuItemBuilder.push(l);
        }
      if (MenuItemBuilder.length) {
        var c = function (e, t) {
          if (t instanceof GCore.GPath) e.getPaths().appendChild(t);
          else
            for (
              var n,
                CollaborationMergeUtils = t.cloneSubPaths(),
                a = CollaborationMergeUtils.getFirstChild();
              null !== a;
              a = n
            )
              ((n = a.getNext()),
                CollaborationMergeUtils.removeChild(a),
                e.getPaths().appendChild(a));
        };
        n.beginTransaction();
        try {
          var d,
            u = [],
            p = function (e) {
              var t = e.getProperty('_ba'),
                n = e.getProperty('_bw');
              n = n || 1;
              var CollaborationMergeUtils,
                a = t == GCore.GStylable.BorderAlignment.Center ? 0.5 * n : n,
                MenuItemBuilder = new GCore.GVertexOffsetter(
                  GCore.GPathUtil.makeClockWise(d),
                  a,
                  t != GCore.GStylable.BorderAlignment.Outside,
                  t != GCore.GStylable.BorderAlignment.Inside,
                  0,
                  e.getProperty('_blc'),
                  e.getProperty('_bml')
                );
              if (t == GCore.GStylable.BorderAlignment.Center)
                CollaborationMergeUtils =
                  GCore.GPathUtil.createPathFromVertexSource(MenuItemBuilder);
              else {
                var GElementAction = GCore.GPathUtil.createPathFromVertexSource(d),
                  l = GCore.GPathUtil.createPathFromVertexSource(MenuItemBuilder);
                GElementAction &&
                  ((CollaborationMergeUtils = new GCore.GCompoundPath()),
                  c(CollaborationMergeUtils, GElementAction),
                  l && c(CollaborationMergeUtils, l));
              }
              return (
                CollaborationMergeUtils &&
                  (GCore.GElement.prototype.assignFrom.call(CollaborationMergeUtils, d),
                  CollaborationMergeUtils.getPaintLayers().clearLayers(),
                  e.$_pt &&
                    CollaborationMergeUtils.getPaintLayers().appendChild(
                      new GCore.GStylable.FillPaintLayer(e.$_pt)
                    )),
                CollaborationMergeUtils
              );
            };
          e = new Set();
          for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) {
            var g = MenuItemBuilder[GElementAction].getParent();
            g && e.add(g);
          }
          try {
            (0, CollaborationMergeUtils.blockChanges)(n, e);
            for (GElementAction = 0; GElementAction < MenuItemBuilder.length; ++GElementAction) {
              var h = (d = MenuItemBuilder[GElementAction]).getParent(),
                f = d.getNext(),
                m = null,
                y = d.getPaintLayers().getBorderLayers(true);
              if (y.length > 1)
                GCore.GUtil.each(y, function (e, t) {
                  var n = p(t);
                  n && (m || (m = new GCore.GGroup()), m.appendChild(n));
                });
              else if (1 == y.length) {
                var v = y.pop();
                m = p(v);
              }
              m ? (h.insertChild(m, f), u.push(m), h.removeChild(d)) : u.push(d);
            }
          } finally {
            ((0, CollaborationMergeUtils.releaseChanges)(n, e),
              u.length && n.updateSelection(false, u));
          }
        } finally {
          n.commitTransaction(GCore.GLocale.get(this.getTitle()));
        }
      }
    }

    getTooltipConfig(e) {
      return (e && l.TOOLTIP_CONFIG[e]) || null;
    }

    toString() {
      return '[Object GVectorizeBorderAction]';
    }

    static TOOLTIP_CONFIG = {
      [a.TOOLTIP_AREA.TOOLBAR]: a.GRichTooltipConfig.from({
        title: GCore.GLocale.get(new GCore.GLocaleKey('GVectorizeBorderAction', 'tooltip-title')),
        description: GCore.GLocale.get(
          new GCore.GLocaleKey('GVectorizeBorderAction', 'tooltip-description')
        ),
        learnMore: '',
      }),
    };

    static ID = 'modify.vectorize';

    static TITLE = new GCore.GLocaleKey('GVectorizeBorderAction', 'title');

    static TOOLTIP_CONFIG = null;

  }
  exports.exports = l;
}