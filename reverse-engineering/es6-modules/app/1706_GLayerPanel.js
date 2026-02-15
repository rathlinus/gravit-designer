/**
 * Webpack Module #1706
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(19) /* polyfill_Array_iterator */,
    require(57) /* polyfill_parseInt */,
    require(91) /* polyfill_String_trim */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(97) /* stub_requires_684 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    r = require(15) /* GEditor */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    l = require(67) /* GRichTooltipConfig */,
    GLayerItemUtils = require(1351) /* GLayerItemUtils */,
    d = _interopRequireDefault(require(565) /* module_565 */),
    GSettingChangedEvent = _interopRequireDefault(require(135) /* GSettingChangedEvent */),
    p = require(451) /* GVirtualTree */.GVirtualTree,
    g = require(451) /* GVirtualTree */.GVirtualTreeNodeNamed,
    { VTREE_FREE_HEIGHT: h, VTREE_FREE_HEIGHT_TOUCH: f } = require(10) /* AppSettings */,
    m = require(450) /* module_450 */,
    y = ['name'];
  function v() {}
  function _(e, t, n, _interopRequireDefault, GTools) {
    var GCore = true,
      r = $(this).data('glayerpanel');
    if (r.options.canDropCallback) {
      for (
        var CollaborationMergeUtils = e.id
            ? T.call(this, e.id)
            : r.scene
              ? r.scene.getActivePage()
              : null,
          l = n ? T.call(this, n.id) : null,
          GLayerItemUtils = [],
          d = 0;
        d < _interopRequireDefault.length;
        ++d
      )
        GLayerItemUtils.push(T.call(this, _interopRequireDefault[d].id));
      var GSettingChangedEvent = [];
      if (
        (GCore = r.options.canDropCallback(
          CollaborationMergeUtils,
          l,
          GLayerItemUtils,
          GSettingChangedEvent
        ))
      )
        for (d = 0; d < GSettingChangedEvent.length; ++d) {
          var p = GSettingChangedEvent[d];
          GTools.push(_interopRequireDefault[p]);
        }
    }
    return GCore;
  }
  function b(e, t, n, _interopRequireDefault) {
    if (!n || !n.length || !e) return false;
    if (!gDesigner.isEnabledProFeatures()) {
      if ((0, CollaborationMergeUtils.isSymbolInstance)(e)) return false;
      if (n.some((e) => e instanceof GCore.GSymbol) && (0, CollaborationMergeUtils.isSymbol)(e))
        return false;
    }
    for (var r = true, l = 0; l < n.length && r; ++l)
      (r =
        !e.isLocked() &&
        n[l].validateInsertion(e, t) &&
        GTools.GEditor.validateBlockInsertion(e, n[l], t)) && _interopRequireDefault.push[l];
    return r;
  }
  function w(e, t, n, _interopRequireDefault) {
    var GTools = $(this).data('glayerpanel');
    if (GTools.options.moveCallback) {
      for (
        var GCore = e.id ? T.call(this, e.id) : GTools.scene ? GTools.scene.getActivePage() : null,
          r = n ? T.call(this, n.id) : null,
          CollaborationMergeUtils = [],
          l = 0;
        l < _interopRequireDefault.length;
        ++l
      )
        CollaborationMergeUtils.push(T.call(this, _interopRequireDefault[l].id));
      GTools.options.moveCallback(GCore, r, CollaborationMergeUtils);
    }
  }
  function C(e, t, n, _interopRequireDefault) {
    var GTools = $(this).data('glayerpanel');
    if (GTools.options.duplicateCallback) {
      for (
        var GCore = e.id ? T.call(this, e.id) : GTools.scene ? GTools.scene.getActivePage() : null,
          r = n ? T.call(this, n.id) : null,
          CollaborationMergeUtils = [],
          l = 0;
        l < _interopRequireDefault.length;
        ++l
      )
        CollaborationMergeUtils.push(T.call(this, _interopRequireDefault[l].id));
      GTools.options.duplicateCallback(GCore, r, CollaborationMergeUtils);
    }
  }
  function x(e) {
    var t = $(this).data('glayerpanel');
    if (t.options.clickCallback) {
      var require = T.call(this, e.id);
      t.options.clickCallback(require);
    }
  }
  function S(e) {
    var t = T.call(this, e.id);
    t &&
      (e.expanded ? t.setFlag(GCore.GNode.Flag.Expanded) : t.removeFlag(GCore.GNode.Flag.Expanded));
  }
  function E(e, t) {
    var n = $(this).data('glayerpanel');
    (n && n.options && n.options.renderer && n.options.renderer(e.id, e.expanded, t), Y.call(this));
  }
  function A(e) {
    var t = $(this);
    e.id === p.COLLAPSE_ID
      ? $(e).addClass(t.data('glayerpanel').options.collapseStyle)
      : e.id === p.EXPAND_ID && $(e).addClass(t.data('glayerpanel').options.expandStyle);
  }
  function T(e) {
    var t = $(this).data('glayerpanel').layersTreeNodeMap[e];
    return t ? t.node : null;
  }
  function G(e) {
    return $(this).data('glayerpanel').layersTreeNodeMap[e];
  }
  function P(e) {
    var t = $(this).data('glayerpanel').layersTreeNodeMapByNodes.get(e);
    return t ? t.treeId : null;
  }
  function D(e) {
    var t = $(this).data('glayerpanel').layersTreeNodeMapByNodes.get(e);
    return t ? t.treeNode : null;
  }
  function L(e) {
    var t = $(this).data('glayerpanel').layersTreeNodeMap,
      n = $(this).data('glayerpanel').layersTreeNodeMapByNodes;
    e.accept(
      function (e) {
        if (e instanceof GCore.GLayer || e instanceof GCore.GItem) {
          var _interopRequireDefault = n.get(e);
          _interopRequireDefault && (n.delete(e), (t[_interopRequireDefault.treeId] = null));
        }
      }.bind(this)
    );
  }
  function I(e, t, n) {
    var _interopRequireDefault = $(this).data('glayerpanel'),
      r = G.call(this, e),
      CollaborationMergeUtils = r ? r.node : null;
    if (CollaborationMergeUtils) {
      var {
          parentHidden: GSettingChangedEvent,
          isHidden: p,
          lockType: g,
          isOutlined: h,
          hasSelection: f,
        } = (0, GLayerItemUtils.getLayerOrItemStatus)(CollaborationMergeUtils),
        {
          container: y,
          title: v,
          titleGroup: _,
        } = (0, GLayerItemUtils.buildLayerItemContainer)(n, CollaborationMergeUtils, f, t);
      r.element = _;
      var b = this;
      if (
        (CollaborationMergeUtils.hasFlag(GCore.GElement.Flag.PartialLocked) ||
          _.attr('draggable', true)
            .attr('data-drag-mode', d.default.PRESS_AND_HOLD)
            .on('dragstart', function (e) {
              if (_interopRequireDefault.options.startDraggingCallback) {
                var t =
                  _interopRequireDefault.options.startDraggingCallback(CollaborationMergeUtils);
                if (t && t.length) {
                  var n = '',
                    GTools = t[0].getProperty('name');
                  (GTools = GTools || t[0].getNodeNameTranslated()) && (n = GTools);
                  for (var GCore = 1; GCore < t.length; ++GCore)
                    (GTools =
                      (GTools = t[GCore].getProperty('name')) ||
                      t[GCore].getNodeNameTranslated()) && (n += ', ' + GTools);
                  n.length && $(v).html(n);
                  var r = _interopRequireDefault.vtree,
                    l = [];
                  for (GCore = 0; GCore < t.length; ++GCore) {
                    var GLayerItemUtils = D.call(b, t[GCore]);
                    GLayerItemUtils && l.push(GLayerItemUtils);
                  }
                  (r.setDragNodes(l),
                    setTimeout(
                      function () {
                        $(v).html(GTools);
                      }.bind(this),
                      0
                    ));
                } else $(this).attr('draggable', false);
              }
            }),
        !_interopRequireDefault.blockHighlight)
      ) {
        var w = CollaborationMergeUtils.hasFlag(GCore.GNode.Flag.Highlighted);
        (w ||
          t ||
          !CollaborationMergeUtils.hasMixin(GCore.GNode.Container) ||
          (w = CollaborationMergeUtils.acceptChildren(
            function (e) {
              return e.hasFlag(GCore.GNode.Flag.Highlighted);
            },
            false,
            true
          )),
          y.toggleClass('g-highlighted-row', w));
      }
      !g &&
        gDesigner.getActiveDocument() &&
        gDesigner.getApplicationManager().isEditingEnabled() &&
        $(_).gAutoEdit({
          textSelector: '> .layer-title',
          getContainer: function () {
            return G.call(b, e).element;
          },
          submitCallback: function (e) {
            e &&
              '' !== e.trim() &&
              GTools.GEditor.tryRunTransaction(
                CollaborationMergeUtils,
                function () {
                  CollaborationMergeUtils.setProperty('name', e);
                },
                GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.rename-layer'))
              );
          },
        });
      var C = R(CollaborationMergeUtils);
      C &&
        !C.inSync(CollaborationMergeUtils, true) &&
        $('<span></span>')
          .addClass('layer-action layer-synchronize gravit-icon-refresh')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.reset-instance'))
          )
          .on('click', function (e) {
            (gDesigner.stats('layers_click_symbol-reset'),
              e.stopPropagation(),
              GTools.GEditor.tryRunTransaction(
                CollaborationMergeUtils,
                function () {
                  C.synchronize(CollaborationMergeUtils);
                },
                GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.reset-instance'))
              ));
          })
          .appendTo(y);
      var x = g ? 'gravit-icon-lock' : 'gravit-icon-unlock';
      ((x = gDesigner.isTouchEnabled() ? x + '-small' : x),
        $('<span></span>')
          .addClass('layer-action layer-lock ' + x)
          .toggleClass('g-active', !!g)
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-lock'))
          )
          .on('click', function (e) {
            (e.stopPropagation(), J.toggleLockStatusOfLayerOrItem(CollaborationMergeUtils));
          })
          .appendTo(y)
          .gRichTooltip(
            l.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.layer-toggle-lock-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.layer-toggle-lock-tooltip-description')
              ),
              learnMore: '',
            })
          ),
        y.toggleClass('layer-hidden', p));
      var S = p ? 'gravit-icon-hide' : 'gravit-icon-display';
      if (
        ((S = gDesigner.isTouchEnabled() ? S + '-small' : S),
        $('<span></span>')
          .addClass('layer-action layer-visibility ' + S)
          .toggleClass('g-active', p)
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-visibility'))
          )
          .on('click', function (e) {
            (e.stopPropagation(), J.toggleHideStatusOfLayerOrItem(CollaborationMergeUtils));
          })
          .appendTo(y)
          .gRichTooltip(
            l.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.layer-toggle-visibility-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GCommonNames',
                  'text.layer-toggle-visibility-tooltip-description'
                )
              ),
              learnMore: '',
            })
          ),
        CollaborationMergeUtils instanceof GCore.GLayer)
      ) {
        $('<span></span>')
          .addClass('layer-action layer-outline gravit-icon-' + (h ? 'ellipse' : 'circle'))
          .toggleClass('g-active', h)
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.toggle-outline'))
          )
          .on('click', function (e) {
            (gDesigner.stats('layers_toggle_outline'), e.stopPropagation());
            var t = $(this);
            GSettingChangedEvent ||
              GTools.GEditor.tryRunTransaction(
                CollaborationMergeUtils,
                function () {
                  (CollaborationMergeUtils.setProperty(
                    'otl',
                    !CollaborationMergeUtils.getProperty('otl')
                  ),
                    t.toggleClass(
                      'gravit-icon-ellipse',
                      CollaborationMergeUtils.getProperty('otl')
                    ),
                    t.toggleClass(
                      'gravit-icon-circle',
                      !CollaborationMergeUtils.getProperty('otl')
                    ));
                },
                GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.toggle-outline'))
              );
          })
          .gRichTooltip(
            l.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.layer-toggle-outline-tooltip-title')
              ),
              learnMore: '',
            })
          )
          .appendTo(y);
        $('<span></span>')
          .addClass('layer-color')
          .gPatternChooser({
            types: [GCore.GColor],
            hasOpacity: false,
            asButton: false,
            simplified: true,
          })
          .gPatternChooser('value', CollaborationMergeUtils.getProperty('cls'))
          .on('patternchange', function (e, t, n, _interopRequireDefault) {
            _interopRequireDefault ||
              GTools.GEditor.tryRunTransaction(
                CollaborationMergeUtils,
                function () {
                  var e = CollaborationMergeUtils.getProperty('cls');
                  (CollaborationMergeUtils.setProperty('cls', t),
                    CollaborationMergeUtils.acceptChildren(function (n) {
                      if (n instanceof GCore.GLayer) {
                        var _interopRequireDefault = n.getProperty('cls');
                        GCore.GUtil.equals(_interopRequireDefault, e) && n.setProperty('cls', t);
                      }
                    }));
                },
                GCore.GLocale.get(new GCore.GLocaleKey('GLayerPanel', 'action.change-layer-color'))
              );
          })
          .on('chooseropen', function () {
            _interopRequireDefault.options.patternChooserStatusChangeCallBack(true);
          })
          .on('chooserclose', function (e, t, n) {
            _interopRequireDefault.options.patternChooserStatusChangeCallBack(false);
          })
          .appendTo(y);
      }
      y.contextmenu(
        { context: m.LayerPanel },
        function (e) {
          if (
            $.inArray(
              CollaborationMergeUtils,
              gDesigner.getActiveDocument().getEditor().getSelection()
            ) < 0
          ) {
            var t = $(this).data('glayerpanel');
            t.options.clickCallback && t.options.clickCallback(CollaborationMergeUtils);
          }
          $(gDesigner.getWindows().getHtmlElement()).trigger('contextmenu', e);
        }.bind(this)
      );
    }
  }
  function k(e, t, n) {
    var _interopRequireDefault = new g(e);
    return (
      n && (_interopRequireDefault.expanded = true),
      $(this).data('glayerpanel').vtree.insertNodeBefore(t, _interopRequireDefault),
      _interopRequireDefault
    );
  }
  function O(e, t, n) {
    var _interopRequireDefault = new g(e);
    return (
      n && (_interopRequireDefault.expanded = true),
      $(this).data('glayerpanel').vtree.appendNode(t, _interopRequireDefault),
      _interopRequireDefault
    );
  }
  function F(e) {
    $(this).data('glayerpanel').vtree.removeNode(e);
  }
  function R(e) {
    do {
      if (e instanceof GCore.GSymbol) return e.isMaster() ? null : e;
      e = e.getParent();
    } while (e);
    return null;
  }
  function M(e, t) {
    var n = GCore.GUtil.uuid(),
      _interopRequireDefault = $(this).data('glayerpanel'),
      GTools = _interopRequireDefault.vtree;
    if (
      !t &&
      e.getParent() &&
      e.getParent().hasMixin(GCore.GNode.Container) &&
      !(e.getParent() instanceof GCore.GScene) &&
      !(e.getParent() instanceof GCore.GPage) &&
      !P.call(this, e.getParent())
    )
      return;
    GTools.beginUpdate();
    const r = (function (e) {
      let t = e.getPrevious();
      for (; t && !(t instanceof GCore.GElement); ) t = t.getPrevious();
      return t;
    })(e);
    var CollaborationMergeUtils,
      l = r ? D.call(this, r) : null;
    if (l) CollaborationMergeUtils = k.call(this, n, l, e.hasFlag(GCore.GNode.Flag.Expanded));
    else {
      var GLayerItemUtils = e.getParent(),
        d =
          !GLayerItemUtils ||
          GLayerItemUtils instanceof GCore.GScene ||
          GLayerItemUtils instanceof GCore.GPage
            ? null
            : D.call(this, GLayerItemUtils);
      CollaborationMergeUtils = O.call(this, n, d, e.hasFlag(GCore.GNode.Flag.Expanded));
    }
    if (
      ((_interopRequireDefault.layersTreeNodeMap[n] = {
        element: null,
        node: e,
        treeNode: CollaborationMergeUtils,
      }),
      _interopRequireDefault.layersTreeNodeMapByNodes.set(e, {
        element: null,
        treeNode: CollaborationMergeUtils,
        treeId: n,
      }),
      e.hasMixin(GCore.GNode.Container))
    )
      for (
        var GSettingChangedEvent = e.getFirstChild();
        null !== GSettingChangedEvent;
        GSettingChangedEvent = GSettingChangedEvent.getNext()
      )
        (GSettingChangedEvent instanceof GCore.GLayer ||
          GSettingChangedEvent instanceof GCore.GItem) &&
          M.call(this, GSettingChangedEvent, t);
    GTools.endUpdate();
  }
  function N(e) {
    var t = D.call(this, e);
    t && (F.call(this, t), L.call(this, e));
  }
  function B(e, t) {
    return !e.blockHandlers || !(!e.ignoreBlock || e.ignoreBlock !== t);
  }
  function U(e) {
    $(this).data('glayerpanel');
    var t = e.targetNode;
    if (
      t instanceof GCore.GLayer ||
      (t instanceof GCore.GItem &&
        !(
          t instanceof GCore.GPathBase &&
          t.getParent() &&
          (t.getParent() instanceof GCore.GPGEdge ||
            t.getParent() instanceof GCore.GCompoundPath.Paths)
        ))
    )
      switch (e.type) {
        case GCore.GSymbol.AfterSiblingUpdate.INSERT:
          M.call(this, t);
          break;
        case GCore.GSymbol.AfterSiblingUpdate.REMOVE:
          N.call(this, t);
      }
  }
  function j(e) {
    B($(this).data('glayerpanel'), e.node) &&
      (e.node instanceof GCore.GLayer ||
        (e.node instanceof GCore.GItem &&
          !(
            e.node instanceof GCore.GPathBase &&
            e.node.getParent() &&
            (e.node.getParent() instanceof GCore.GPGEdge ||
              e.node.getParent() instanceof GCore.GCompoundPath.Paths)
          ) &&
          !(function (e) {
            var t = e.getScene();
            if (t) {
              var require = e.getPage(),
                _interopRequireDefault = t.getActivePage();
              if (_interopRequireDefault && require && require !== _interopRequireDefault)
                return true;
            }
            return false;
          })(e.node))) &&
      M.call(this, e.node);
  }
  function K(e) {
    B($(this).data('glayerpanel'), e.node) &&
      (e.node instanceof GCore.GLayer || e.node instanceof GCore.GItem) &&
      N.call(this, e.node);
  }
  function V(e) {
    e.temporary ||
      (!$(this).data('glayerpanel').blockHandlers &&
        (e.properties.some((e) => y.indexOf(e) >= 0) || R(e.node)) &&
        (e.node instanceof GCore.GLayer || e.node instanceof GCore.GItem) &&
        $(this).data('glayerpanel').vtree.requestInvalidation());
  }
  function H() {
    $(this).data('glayerpanel').vtree.requestInvalidation();
  }
  function W(e) {
    'touch' === e.key && J._updateLayout.call(this);
  }
  function z(e) {
    var t = $(this).data('glayerpanel'),
      n = $(this).data('glayerpanel').vtree;
    let { onlyUpdateStyle: _interopRequireDefault } = t;
    if (B(t, e.node)) {
      var GTools = false;
      if (e.node instanceof GCore.GLayer || e.node instanceof GCore.GItem)
        if (
          e.flag === GCore.GElement.Flag.Hidden ||
          e.flag === GCore.GElement.Flag.PartialLocked ||
          e.flag === GCore.GElement.Flag.FullLocked ||
          e.flag === GCore.GNode.Flag.Selected ||
          e.flag === GCore.GNode.Flag.Active
        ) {
          var r = e.node.getPage(),
            CollaborationMergeUtils = e.node.getScene(),
            l = CollaborationMergeUtils && CollaborationMergeUtils.getActivePage();
          (l && r && l !== r) ||
            ((GTools = true),
            _interopRequireDefault ||
              (_interopRequireDefault = e.flag === GCore.GNode.Flag.Active));
        } else if (!t.blockHighlight && e.flag === GCore.GNode.Flag.Highlighted) {
          var GLayerItemUtils = e.node,
            d = function (e) {
              var t = D.call(this, e);
              return t && t.isVisible();
            }.bind(this);
          (d(GLayerItemUtils) || GLayerItemUtils.findParent(d)) && (GTools = true);
        }
      if (
        gDesigner.getSetting('auto_expand_layers') &&
        e.flag === GCore.GNode.Flag.Selected &&
        e.node &&
        e.node.hasFlag(GCore.GNode.Flag.Selected)
      ) {
        var GSettingChangedEvent = D.call(this, e.node);
        GSettingChangedEvent &&
          (n.expandAndFocus(GSettingChangedEvent, GTools)
            ? (t.currentFocus = GSettingChangedEvent)
            : (GTools = true));
      }
      (e.node instanceof GCore.GPage &&
        e.flag === GCore.GNode.Flag.Active &&
        (X.call(this), q.call(this), (GTools = false)),
        GTools &&
          (_interopRequireDefault
            ? setTimeout((t) => {
                Q.call(this, e.node);
              })
            : n.requestInvalidation()));
    }
  }
  function q() {
    var e = $(this).data('glayerpanel');
    if ((e.vtree.beginUpdate(), e.scene && e.scene.getActivePage()))
      for (
        var module = e.scene.getActivePage().getFirstChild();
        null !== module;
        module = module.getNext()
      )
        (module instanceof GCore.GLayer || module instanceof GCore.GItem) &&
          M.call(this, module, true);
    (e.vtree.endUpdate(), Y.call(this));
  }
  function Y() {
    gDesigner.isTouchEnabled() &&
      $(this)
        .parent()
        .css('height', parseInt($(this).find('.vscroller').css('height'), 10) + h + 'px');
  }
  function X() {
    var e = $(this).data('glayerpanel');
    (e.vtree.clean(), (e.layersTreeNodeMap = {}), (e.layersTreeNodeMapByNodes = new Map()));
  }
  function Q(e) {
    $(this).data('glayerpanel');
    var t = P.call(this, e);
    if (!t) return null;
    var n = G.call(this, t);
    if (!n) return null;
    var _interopRequireDefault = n.element,
      GTools = _interopRequireDefault.parent(),
      r = false;
    if (e.hasMixin(GCore.GNode.Container))
      for (
        var CollaborationMergeUtils = e.getFirstChild();
        null !== CollaborationMergeUtils && !r;
        CollaborationMergeUtils = CollaborationMergeUtils.getNext()
      )
        CollaborationMergeUtils instanceof GCore.GItem &&
          CollaborationMergeUtils.hasFlag(GCore.GNode.Flag.Selected) &&
          (r = true);
    (e.getParent() && e instanceof GCore.GItem && Q.call(this, e.getParent()),
      GTools.toggleClass('g-active', e.hasFlag(GCore.GNode.Flag.Active))
        .toggleClass('g-selected', e.hasFlag(GCore.GNode.Flag.Selected))
        .toggleClass('g-has-selection', r),
      _interopRequireDefault.toggleClass('g-selected', e.hasFlag(GCore.GNode.Flag.Selected)));
  }
  GCore.GObject.inheritAndMix(v, GCore.GObject);
  var J = {
    init: function (e) {
      return (
        (e = $.extend(
          {
            nodeStyle: 'layer-row',
            expandStyle: 'layer-arrow gravit-icon-right',
            collapseStyle: 'layer-arrow gravit-icon-down',
            freeHeight: h,
            insertIntoStyle: 'g-drop',
            upSeparatorSpan1Style: 'g-up-separator-span1',
            upSeparatorSpan2Style: 'g-up-separator-span2',
            downSeparatorSpan1Style: 'g-down-separator-span1',
            downSeparatorSpan2Style: 'g-down-separator-span2',
            renderer: I.bind(this),
            expandRenderer: A.bind(this),
            separatorRenderer: null,
            canDropCallback: b.bind(this),
            moveCallback: null,
            isDuplicateEffectCallback: null,
            duplicateCallback: null,
            clickCallback: null,
            startDraggingCallback: null,
            patternChooserStatusChangeCallBack: null,
          },
          e
        )),
        this.each(function () {
          $(this)
            .addClass('g-layer-panel')
            .data('glayerpanel', {
              vtree: new p(
                this,
                E.bind(this),
                e.nodeStyle,
                e.expandRenderer ? e.expandRenderer : null,
                e.expandStyle == e.collapseStyle ? e.expandStyle : null,
                e.separatorRenderer ? e.separatorRenderer : null,
                e.freeHeight,
                e.insertIntoStyle,
                _.bind(this),
                w.bind(this),
                e.isDuplicateEffectCallback,
                C.bind(this),
                x.bind(this),
                S.bind(this),
                e.upSeparatorSpan1Style,
                e.upSeparatorSpan2Style,
                e.downSeparatorSpan1Style,
                e.downSeparatorSpan2Style,
                false,
                15,
                21
              ),
              options: e,
              layersTreeNodeMap: {},
              layersTreeNodeMapByNodes: new Map(),
              scene: null,
              currentFocus: null,
            });
        })
      );
    },
    refresh: function () {
      $(this).data('glayerpanel').vtree.refresh();
    },
    relayout: function () {
      var e = $(this).data('glayerpanel'),
        t = e.vtree,
        n = e.currentFocus;
      (n && t.expandAndFocus(n), t.requestInvalidation());
    },
    scene: function (e) {
      var t = $(this),
        n = t.data('glayerpanel');
      if (!arguments.length) return n.scene;
      if (e !== n.scene) {
        if (n.scene && n.scene.hasMixin(GCore.GEventTarget))
          (n.scene.removeEventListener(
            GCore.GNode.AfterInsertEvent,
            n.afterNodeInsertHandler,
            this
          ),
            n.scene.removeEventListener(
              GCore.GNode.BeforeRemoveEvent,
              n.beforeNodeRemoveHandler,
              this
            ),
            n.scene.removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              n.afterPropertiesChangeHandler,
              this
            ),
            n.scene.removeEventListener(
              GCore.GNode.AfterFlagChangeEvent,
              n.afterFlagChangeHandler,
              this
            ),
            n.scene.removeEventListener(
              GCore.GSymbol.AfterSiblingUpdate,
              n.afterSiblingUpdate,
              this
            ),
            gDesigner.removeEventListener(
              GSettingChangedEvent.default,
              n.settingChangedEvent,
              this
            ),
            (_interopRequireDefault = n.scene.getWorkspace()) &&
              _interopRequireDefault
                .getFontManager()
                .removeEventListener(
                  GCore.GFontManager.FontAvailableEvent,
                  n.fontAvailableEvent,
                  this
                ));
        if ((X.call(this), (n.scene = e), n.scene)) {
          var _interopRequireDefault;
          if (n.scene.hasMixin(GCore.GEventTarget))
            ((n.afterNodeInsertHandler = j.bind(this)),
              (n.beforeNodeRemoveHandler = K.bind(this)),
              (n.afterPropertiesChangeHandler = V.bind(this)),
              (n.afterFlagChangeHandler = z.bind(this)),
              (n.afterSiblingUpdate = U.bind(this)),
              (n.fontAvailableEvent = H.bind(this)),
              (n.settingChangedEvent = W.bind(this)),
              n.scene.addEventListener(
                GCore.GSymbol.AfterSiblingUpdate,
                n.afterSiblingUpdate,
                this
              ),
              n.scene.addEventListener(
                GCore.GNode.AfterInsertEvent,
                n.afterNodeInsertHandler,
                this
              ),
              n.scene.addEventListener(
                GCore.GNode.BeforeRemoveEvent,
                n.beforeNodeRemoveHandler,
                this
              ),
              n.scene.addEventListener(
                GCore.GNode.AfterPropertiesChangeEvent,
                n.afterPropertiesChangeHandler,
                this
              ),
              n.scene.addEventListener(
                GCore.GNode.AfterFlagChangeEvent,
                n.afterFlagChangeHandler,
                this
              ),
              gDesigner.addEventListener(GSettingChangedEvent.default, n.settingChangedEvent, this),
              (_interopRequireDefault = n.scene.getWorkspace()) &&
                _interopRequireDefault
                  .getFontManager()
                  .addEventListener(
                    GCore.GFontManager.FontAvailableEvent,
                    n.fontAvailableEvent,
                    this
                  ));
          (q.call(this), J._updateLayout.call(this));
        }
      }
      return this;
    },
    blockHandlers: function (e) {
      $(this).data('glayerpanel').blockHandlers = !!e;
    },
    onlyUpdateStyle: function (e) {
      $(this).data('glayerpanel').onlyUpdateStyle = !!e;
    },
    ignoreBlock: function (e) {
      $(this).data('glayerpanel').ignoreBlock = e;
    },
    setBlockHighlight: function (e) {
      $(this).data('glayerpanel').blockHighlight = !!e;
    },
    getLastVisitedDroppable: function () {
      return $(this).data('glayerpanel').vtree.getLastVisitedDroppable();
    },
    getTreeNode: function (e) {
      var t = null;
      return ($(this).data('glayerpanel') && (t = D.call(this, e)), t);
    },
    getItem: function (e) {
      return T.call(this, e.id);
    },
    getTitleOfLayer: function (e) {
      return e.children('.layer-title-group');
    },
    getSelected: function () {
      return $(this).children('.g-selected');
    },
    toggleLockStatusOfLayerOrItem: function (e) {
      gDesigner.stats('layers_change_locktype');
      const { parentLockType: module } = (0, GLayerItemUtils.getLayerOrItemStatus)(e);
      if (!module || module === GCore.GBlock.LockType.Partial) {
        let n = e.getProperty('lkt');
        const _interopRequireDefault = e.getProperty('plkt');
        if (
          (n
            ? _interopRequireDefault &
                (GCore.GBlock.ProgramLck.NoEdit |
                  GCore.GBlock.ProgramLck.NoMove |
                  GCore.GBlock.ProgramLck.NoNewChildren |
                  GCore.GBlock.ProgramLck.NoDelete) || (n = null)
            : (n = GCore.GBlock.LockType.Full),
          module !== GCore.GBlock.LockType.Partial || null !== n)
        ) {
          const t = [];
          if (r.GPlatform.modifiers.optionKey) {
            for (
              let _interopRequireDefault = e.getParent().getFirstChild();
              null != _interopRequireDefault;
              _interopRequireDefault = _interopRequireDefault.getNext()
            ) {
              const e = _interopRequireDefault.getProperty('lkt');
              n === e ||
                (e === GCore.GBlock.LockType.Full && n === GCore.GBlock.LockType.Partial) ||
                t.push(_interopRequireDefault);
            }
          } else t.push(e);
          t.length &&
            GTools.GEditor.tryRunTransaction(
              e,
              function () {
                for (let e = 0; e < t.length; ++e)
                  (n === GCore.GBlock.LockType.Full &&
                    t[e].accept((e) => {
                      e.removeFlag(GCore.GNode.Flag.Selected);
                    }),
                    t[e].setProperty('lkt', n));
              },
              GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-lock'))
            );
        }
      }
    },
    toggleHideStatusOfLayerOrItem: function (e) {
      gDesigner.stats('layers_toggle_visibility');
      const { parentHidden: module } = (0, GLayerItemUtils.getLayerOrItemStatus)(e);
      if (!module) {
        const t = !e.getProperty('vis'),
          n = [];
        if (r.GPlatform.modifiers.optionKey) {
          for (
            let _interopRequireDefault = e.getParent().getFirstChild();
            null != _interopRequireDefault;
            _interopRequireDefault = _interopRequireDefault.getNext()
          ) {
            const e = _interopRequireDefault.getProperty('vis');
            null !== e && e !== t && n.push(_interopRequireDefault);
          }
        } else n.push(e);
        GTools.GEditor.tryRunTransaction(
          e,
          function () {
            for (let e = 0; e < n.length; ++e)
              (n[e].removeFlag(GCore.GNode.Flag.Highlighted), n[e].setProperty('vis', t));
          },
          GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-visibility'))
        );
      }
    },
    resetVTreeRowHeight: function (e) {
      $(this).data('glayerpanel').vtree.resetRowHeight(e);
    },
    getCurrentFocusedNode: function () {
      return $(this).data('glayerpanel').currentFocus;
    },
    setCurrentFocusedNode: function (e) {
      $(this).data('glayerpanel').currentFocus = e;
    },
    _updateLayout: function () {
      const exports = $(this).data('glayerpanel'),
        module = exports && exports.vtree;
      if (module) {
        const e = gDesigner.isTouchEnabled();
        (module.setFreeHeight(e ? f : h), module.setAnimatedDragEnabled(e));
      }
    },
  };
  ((exports.exports = v),
    ($.fn.gLayerPanel = function (e) {
      return J[e]
        ? J[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
          ? void $.error('Method ' + e + ' does not exist on jQuery.myPlugin')
          : J.init.apply(this, arguments);
    }));
}
