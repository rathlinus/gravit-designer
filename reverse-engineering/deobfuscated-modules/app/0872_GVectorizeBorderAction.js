/**
 * Webpack Module #872
 * Type: class
 * Name: GVectorizeBorderAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GElementAction = require(106) /* GElementAction */;
    function l() {
      l.TOOLTIP_CONFIG = {
        [GRichTooltipConfig.TOOLTIP_AREA.TOOLBAR]: GRichTooltipConfig.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GVectorizeBorderAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GVectorizeBorderAction", "tooltip-description")
          ),
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(l, GElementAction),
      (l.ID = "modify.vectorize"),
      (l.TITLE = new GCore.GLocaleKey("GVectorizeBorderAction", "title")),
      (l.TOOLTIP_CONFIG = null),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        return l.TITLE;
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_MODIFY_PATH;
      }),
      (l.prototype.getGroup = function () {
        return "structure/modify";
      }),
      (l.prototype.getIcon = function () {
        return "gravit-icon-vectorize-border";
      }),
      (l.prototype.isEnabled = function () {
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
                GRichTooltipConfig = CollaborationMergeUtils ? CollaborationMergeUtils.getBorderLayers(true) : null;
              t = GRichTooltipConfig && GRichTooltipConfig.length >= 1;
            }
        return t;
      }),
      (l.prototype.execute = function () {
        var e,
          t = gDesigner.getActiveDocument(),
          n = t ? t.getEditor() : null,
          GRichTooltipConfig = (t && t.getScene(), n ? n.getIndividualSelection() : null),
          MenuItemBuilder = [];
        if (GRichTooltipConfig)
          for (var GElementAction = 0; GElementAction < GRichTooltipConfig.length; ++GElementAction) {
            var l = GRichTooltipConfig[GElementAction];
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
                var n, CollaborationMergeUtils = t.cloneSubPaths(), GRichTooltipConfig = CollaborationMergeUtils.getFirstChild();
                null !== GRichTooltipConfig;
                GRichTooltipConfig = n
              )
                (n = GRichTooltipConfig.getNext()),
                  CollaborationMergeUtils.removeChild(GRichTooltipConfig),
                  e.getPaths().appendChild(GRichTooltipConfig);
          };
          n.beginTransaction();
          try {
            var d,
              u = [],
              p = function (e) {
                var t = e.getProperty("_ba"),
                  n = e.getProperty("_bw");
                n = n || 1;
                var CollaborationMergeUtils,
                  GRichTooltipConfig = t == GCore.GStylable.BorderAlignment.Center ? 0.5 * n : n,
                  MenuItemBuilder = new GCore.GVertexOffsetter(
                    GCore.GPathUtil.makeClockWise(d),
                    GRichTooltipConfig,
                    t != GCore.GStylable.BorderAlignment.Outside,
                    t != GCore.GStylable.BorderAlignment.Inside,
                    0,
                    e.getProperty("_blc"),
                    e.getProperty("_bml")
                  );
                if (t == GCore.GStylable.BorderAlignment.Center)
                  CollaborationMergeUtils = GCore.GPathUtil.createPathFromVertexSource(MenuItemBuilder);
                else {
                  var GElementAction = GCore.GPathUtil.createPathFromVertexSource(d),
                    l = GCore.GPathUtil.createPathFromVertexSource(MenuItemBuilder);
                  GElementAction && ((CollaborationMergeUtils = new GCore.GCompoundPath()), c(CollaborationMergeUtils, GElementAction), l && c(CollaborationMergeUtils, l));
                }
                return (
                  CollaborationMergeUtils &&
                    (GCore.GElement.prototype.assignFrom.call(CollaborationMergeUtils, d),
                    CollaborationMergeUtils.getPaintLayers().clearLayers(),
                    e.$_pt &&
                      CollaborationMergeUtils
                        .getPaintLayers()
                        .appendChild(new GCore.GStylable.FillPaintLayer(e.$_pt))),
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
                m
                  ? (h.insertChild(m, f), u.push(m), h.removeChild(d))
                  : u.push(d);
              }
            } finally {
              (0, CollaborationMergeUtils.releaseChanges)(n, e), u.length && n.updateSelection(false, u);
            }
          } finally {
            n.commitTransaction(GCore.GLocale.get(this.getTitle()));
          }
        }
      }),
      (l.prototype.getTooltipConfig = function (e) {
        return (e && l.TOOLTIP_CONFIG[e]) || null;
      }),
      (l.prototype.toString = function () {
        return "[Object GVectorizeBorderAction]";
      }),
      (exports.exports = l);
  }