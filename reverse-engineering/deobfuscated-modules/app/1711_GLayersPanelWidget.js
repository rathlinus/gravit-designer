/**
 * Webpack Module #1711
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(26) /* polyfill_DOMCollection_iterator */;
    require(53) /* GTools */;
    var GCore = require(1) /* GCore */,
      i = (require(15) /* GEditor */, require(40) /* CollaborationMergeUtils */, require(67) /* GRichTooltipConfig */, require(1351) /* GLayerItemUtils */),
      GVirtualTree = require(451) /* GVirtualTree */.GVirtualTree,
      r = (require(451) /* GVirtualTree */.GVirtualTreeNode, require(451) /* GVirtualTree */.GVirtualTreeNodeNamed),
      { VTREE_FREE_HEIGHT: s } = require(10) /* AppSettings */;
    require(173) /* stub_requires_1 */, require(450) /* module_450 */;
    function l() {}
    function c(e) {
      var t = $(this).data("gselectedpanel"),
        n = $(this).data("gselectedpanel").vtree;
      if (t.options.clickCallback) {
        var GCore = g.call(this, e.id);
        t.options.clickCallback(GCore);
      }
      n.requestInvalidation();
    }
    function d(e) {
      var t = g.call(this, e.id);
      t &&
        (e.expanded
          ? t.setFlag(GCore.GNode.Flag.Expanded)
          : t.removeFlag(GCore.GNode.Flag.Expanded));
    }
    function u(e, t) {
      var n = $(this).data("gselectedpanel");
      n.options.renderer && n.options.renderer(e.id, e.expanded, t);
    }
    function p(e) {
      var t = $(this);
      e.id === GVirtualTree.COLLAPSE_ID
        ? $(e).addClass(t.data("gselectedpanel").options.collapseStyle)
        : e.id === GVirtualTree.EXPAND_ID &&
          $(e).addClass(t.data("gselectedpanel").options.expandStyle);
    }
    function g(e) {
      var t = h.call(this, e);
      return t ? t.node : null;
    }
    function h(e) {
      return $(this).data("gselectedpanel").layersTreeNodeMap[e];
    }
    function f(e, t, n) {
      $(this).data("glayerpanel");
      var GCore = h.call(this, e),
        GVirtualTree = GCore ? GCore.node : null;
      if (GVirtualTree) {
        var { hasSelection: r } = (0, i.getLayerOrItemStatus)(GVirtualTree),
          { titleGroup: s } = (0, i.buildLayerItemContainer)(n, GVirtualTree, r, t);
        GCore.element = s;
      }
    }
    function m(e, t, n) {
      var { newNode: GCore, vtree: i } = y.call(this, e, n);
      return i.appendNode(t, GCore), GCore;
    }
    function y(e, t) {
      return {
        newNode: new r(e, t),
        vtree: $(this).data("gselectedpanel").vtree,
      };
    }
    function v() {
      var e = $(this).data("gselectedpanel"),
        t = e.vtree;
      t.beginUpdate();
      for (
        var {
            elementHits: require,
            filteredElementHits: i,
            submenus: GVirtualTree,
          } = e.selections,
          r = (t, n, GCore) => {
            (e.layersTreeNodeMap[GCore] = { element: null, node: n, treeNode: t }),
              e.layersTreeNodeMapByNodes.set(n, {
                element: null,
                treeNode: t,
                treeId: GCore,
              });
          },
          s = 0;
        s < i.length;
        s++
      ) {
        var l = GCore.GUtil.uuid(),
          c = i[s].element,
          d =
            (c instanceof GCore.GBlock ? c.getLabel() : c.getNodeNameTranslated(),
            "temp-" + require.indexOf(i[s]));
        if (GVirtualTree[d]) {
          r((p = m.call(this, l, null, true)), c, l);
          for (let e = 0; e < GVirtualTree[d].length; e++) {
            var u = GCore.GUtil.uuid();
            r(m.call(this, u, p, false), GVirtualTree[d][e], u);
          }
        } else {
          var p;
          r((p = m.call(this, l, null, false)), c, l);
        }
      }
      t.endUpdate();
    }
    function _() {
      var e = $(this).data("gselectedpanel");
      e.vtree.clean(),
        (e.layersTreeNodeMap = {}),
        (e.layersTreeNodeMapByNodes = new Map());
    }
    GCore.GObject.inheritAndMix(l, GCore.GObject);
    var b = {
      init: function (e) {
        return (
          (e = $.extend(
            {
              nodeStyle: "selected-row",
              expandStyle: "selected-arrow gravit-icon-right",
              collapseStyle: "selected-arrow gravit-icon-down",
              freeHeight: 0,
              insertIntoStyle: "g-drop",
              upSeparatorSpan1Style: "g-up-separator-span1",
              upSeparatorSpan2Style: "g-up-separator-span2",
              downSeparatorSpan1Style: "g-down-separator-span1",
              downSeparatorSpan2Style: "g-down-separator-span2",
              renderer: f.bind(this),
              toggleRenderer: p.bind(this),
              separatorRenderer: null,
              canDropCallback: () => false,
              moveCallback: null,
              isDuplicateEffectCallback: null,
              duplicateCallback: null,
              clickCallback: null,
              startDraggingCallback: null,
              patternChooserStatusChangeCallBack: null,
              bottomHeight: 3,
            },
            e
          )),
          this.each(function () {
            $(this)
              .addClass("g-selected-panel")
              .data("gselectedpanel", {
                vtree: new GVirtualTree(
                  this,
                  u.bind(this),
                  e.nodeStyle,
                  e.toggleRenderer ? e.toggleRenderer : null,
                  e.expandStyle == e.collapseStyle ? e.expandStyle : null,
                  e.separatorRenderer ? e.separatorRenderer : null,
                  e.freeHeight,
                  e.insertIntoStyle,
                  () => false,
                  null,
                  e.isDuplicateEffectCallback,
                  null,
                  c.bind(this),
                  d.bind(this),
                  e.upSeparatorSpan1Style,
                  e.upSeparatorSpan2Style,
                  e.downSeparatorSpan1Style,
                  e.downSeparatorSpan2Style,
                  false,
                  15,
                  21,
                  e.bottomHeight,
                  e.renderFinishCallback
                ),
                options: e,
                layersTreeNodeMap: {},
                layersTreeNodeMapByNodes: new Map(),
                selections: null,
                currentFocus: null,
              });
          })
        );
      },
      refresh: function () {
        $(this).data("gselectedpanel").vtree.refresh();
      },
      relayout: function () {
        $(this).data("gselectedpanel").vtree.requestInvalidation();
      },
      setSelections: function (e) {
        var t = $(this),
          n = t.data("gselectedpanel");
        return arguments.length
          ? (e !== n.selections &&
              (_.call(this), (n.selections = e), v.call(this)),
            this)
          : n.selections;
      },
    };
    (exports.exports = l),
      ($.fn.gSelectedPanel = function (e) {
        return b[e]
          ? b[e].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof e && e
          ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
          : b.init.apply(this, arguments);
      });
  }