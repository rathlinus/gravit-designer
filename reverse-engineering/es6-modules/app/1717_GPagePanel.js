/**
 * Webpack Module #1717
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
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    r = (require(15) /* GEditor */, _interopRequireDefault(require(565) /* module_565 */)),
    s = require(67) /* GRichTooltipConfig */,
    GSettingChangedEvent = _interopRequireDefault(require(135) /* GSettingChangedEvent */),
    c = require(451) /* GVirtualTree */.GVirtualTree,
    d =
      (require(451) /* GVirtualTree */.GVirtualTreeNode,
      require(451) /* GVirtualTree */.GVirtualTreeNodeNamed),
    { VTREE_FREE_HEIGHT: u, VTREE_FREE_HEIGHT_TOUCH: p } = require(10) /* AppSettings */,
    g = (require(173) /* stub_requires_1 */, require(450)) /* module_450 */;
  function h() {}
  function f(e, t, n, _interopRequireDefault, GTools) {
    var GCore = true,
      r = $(this).data('gpagepanel');
    if (r.options.canDropCallback) {
      for (
        var s = e.id ? b.call(this, e.id) : $(this).data('gpagepanel').scene,
          GSettingChangedEvent = t ? b.call(this, t.id) : null,
          c = [],
          d = 0;
        d < _interopRequireDefault.length;
        ++d
      )
        c.push(b.call(this, _interopRequireDefault[d].id));
      var u = [];
      if ((GCore = r.options.canDropCallback(s, GSettingChangedEvent, c, u)))
        for (d = 0; d < u.length; ++d) {
          var p = u[d];
          GTools.push(_interopRequireDefault[p]);
        }
    }
    return GCore;
  }
  function m(e, t, n, _interopRequireDefault) {
    if (!n || !n.length || !e) return false;
    var GTools = true;
    if (gDesigner.getApplicationManager().isEditingEnabled()) {
      for (var GCore = 0; GCore < n.length && GTools; ++GCore)
        (GTools = !e.isLocked() && n[GCore] && n[GCore].validateInsertion(e, t)) &&
          _interopRequireDefault.push[GCore];
      return GTools;
    }
  }
  function y(e, t, n, _interopRequireDefault) {
    var GTools = $(this).data('gpagepanel');
    if (GTools.options.moveCallback) {
      for (
        var GCore = e.id ? b.call(this, e.id) : $(this).data('gpagepanel').scene,
          r = t ? b.call(this, t.id) : null,
          s = [],
          GSettingChangedEvent = 0;
        GSettingChangedEvent < _interopRequireDefault.length;
        ++GSettingChangedEvent
      )
        s.push(b.call(this, _interopRequireDefault[GSettingChangedEvent].id));
      GTools.options.moveCallback(GCore, r, s);
    }
  }
  function v(e) {
    var t = $(this).data('gpagepanel');
    if (t.options.clickCallback) {
      var require = b.call(this, e.id);
      t.options.clickCallback(require);
    }
  }
  function _(e, t) {
    var n = $(this).data('gpagepanel');
    (n.options.renderer && n.options.renderer(e.id, t), R.call(this));
  }
  function b(e) {
    var t = $(this).data('gpagepanel').pagesTreeNodeMap[e];
    return t ? t.node : null;
  }
  function w(e) {
    return $(this).data('gpagepanel').pagesTreeNodeMap[e];
  }
  function C(e) {
    var t = $(this).data('gpagepanel').pagesTreeNodeMapByNodes.get(e);
    return t ? t.treeNode : null;
  }
  function x(e) {
    var t = $(this).data('gpagepanel').pagesTreeNodeMap,
      n = $(this).data('gpagepanel').pagesTreeNodeMapByNodes;
    e.accept(
      function (e) {
        if (e instanceof GCore.GPage) {
          var _interopRequireDefault = n.get(e);
          _interopRequireDefault && (n.delete(e), (t[_interopRequireDefault.treeId] = null));
        }
      }.bind(this)
    );
  }
  function S(e, t) {
    var n = $(this).data('gpagepanel'),
      _interopRequireDefault = w.call(this, e),
      GSettingChangedEvent = _interopRequireDefault.node;
    if (GSettingChangedEvent) {
      if (!(GSettingChangedEvent instanceof GCore.GPage)) throw new Error('item not page');
      var c = GSettingChangedEvent.getProperty('lkt'),
        d = !!GSettingChangedEvent.getSlavePages().length,
        u =
          0 === GSettingChangedEvent.getProperty('w') &&
          0 === GSettingChangedEvent.getProperty('h'),
        p = $(t);
      p.attr('draggable', false)
        .on('mouseenter', function () {
          GSettingChangedEvent.getProperty('w') &&
            !GSettingChangedEvent.hasFlag(GCore.GElement.Flag.Hidden) &&
            GSettingChangedEvent.setFlag(GCore.GNode.Flag.Highlighted);
        })
        .on('mouseleave', function () {
          GSettingChangedEvent.getProperty('w') &&
            !GSettingChangedEvent.hasFlag(GCore.GElement.Flag.Hidden) &&
            GSettingChangedEvent.removeFlag(GCore.GNode.Flag.Highlighted);
        });
      var h = $('<span></span>').addClass('page-title-group');
      (h.appendTo(p), (_interopRequireDefault.element = h));
      var f = GSettingChangedEvent.getProperty('name');
      ((f = f || GSettingChangedEvent.getNodeNameTranslated()),
        d && !gDesigner.isTouchEnabled() && (f += ' (master)'));
      var m = $('<span></span>').html(f);
      m.addClass('page-title').appendTo(h);
      var y = this;
      (GSettingChangedEvent.hasFlag(GCore.GElement.Flag.PartialLocked) ||
        h
          .attr('draggable', true)
          .attr('data-drag-mode', r.default.PRESS_AND_HOLD)
          .on('dragstart', function (e) {
            if (n.options.startDraggingCallback) {
              var t = n.options.startDraggingCallback(GSettingChangedEvent);
              if (t && t.length) {
                $(this).addClass('g-dragging');
                var _interopRequireDefault = '',
                  GTools = t[0].getProperty('name');
                (GTools = GTools || t[0].getNodeNameTranslated()) &&
                  (_interopRequireDefault = GTools);
                for (var GCore = 1; GCore < t.length; ++GCore)
                  (GTools =
                    (GTools = t[GCore].getProperty('name')) || t[GCore].getNodeNameTranslated()) &&
                    (_interopRequireDefault += ', ' + GTools);
                _interopRequireDefault.length && $(m).html(_interopRequireDefault);
                var r = n.vtree,
                  s = [];
                for (GCore = 0; GCore < t.length; ++GCore) {
                  var c = C.call(y, t[GCore]);
                  c && s.push(c);
                }
                (r.setDragNodes(s),
                  setTimeout(
                    function () {
                      ($(this).removeClass('g-dragging'), $(m).html(f));
                    }.bind(this),
                    0
                  ));
              } else $(this).attr('draggable', false);
            }
          }),
        p.toggleClass('g-active', GSettingChangedEvent.hasFlag(GCore.GNode.Flag.Active)),
        n.blockHighlight ||
          p.toggleClass(
            'g-highlighted-row',
            GSettingChangedEvent.hasFlag(GCore.GNode.Flag.Highlighted)
          ),
        !c &&
          gDesigner.getApplicationManager().isEditingEnabled() &&
          $(h).gAutoEdit({
            textSelector: '> .page-title',
            getContainer: function () {
              return w.call(y, e).element;
            },
            submitCallback: function (e) {
              e &&
                '' !== e.trim() &&
                GTools.GEditor.tryRunTransaction(
                  GSettingChangedEvent,
                  function () {
                    GSettingChangedEvent.setProperty('name', e);
                  },
                  GCore.GLocale.get(new GCore.GLocaleKey('GPagePanel', 'action.rename-page'))
                );
            },
          }));
      var v = $('<span></span>').addClass('page-icon gravit-icon-page').insertBefore(m);
      gDesigner.isTouchEnabled() &&
        (u
          ? (v.toggleClass('gravit-icon-page-infinity', true),
            v.toggleClass('gravit-icon-page', false))
          : d &&
            (v.toggleClass('gravit-icon-page-master', true),
            v.toggleClass('gravit-icon-page', false)));
      var _ = c ? 'gravit-icon-lock' : 'gravit-icon-unlock';
      ((_ = gDesigner.isTouchEnabled() ? _ + '-small' : _),
        $('<span></span>')
          .addClass('page-action page-lock ' + _)
          .toggleClass('g-active', !!c)
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-lock'))
          )
          .on('click', function (e) {
            (gDesigner.stats('pages_change_lock'), e.stopPropagation());
            var t = GSettingChangedEvent.getProperty('lkt');
            ((t = t ? null : GCore.GBlock.LockType.Full),
              GTools.GEditor.tryRunTransaction(
                GSettingChangedEvent,
                function () {
                  if (
                    (GSettingChangedEvent.setProperty('lkt', t), t === GCore.GBlock.LockType.Full)
                  ) {
                    n.scene.setProperty('edit', false);
                    var e = gDesigner.getActiveDocument();
                    e && e.getEditor().clearSelection();
                  } else n.scene.setProperty('edit', true);
                },
                GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-lock'))
              ));
          })
          .appendTo(p)
          .gRichTooltip(
            s.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.page-toggle-lock-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.page-toggle-lock-tooltip-description')
              ),
              learnMore: '',
            })
          ));
      var b = false === GSettingChangedEvent.getProperty('vis');
      p.toggleClass('page-hiden', b);
      var x = b ? 'gravit-icon-hide' : 'gravit-icon-display';
      ((x = gDesigner.isTouchEnabled() ? x + '-small' : x),
        $('<span></span>')
          .addClass('page-action page-visibility ' + x)
          .toggleClass('g-active', b)
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-visibility'))
          )
          .on('click', function (e) {
            (gDesigner.stats('pages_change_visibility'), e.stopPropagation());
            var t = !GSettingChangedEvent.getProperty('vis');
            GTools.GEditor.tryRunTransaction(
              GSettingChangedEvent,
              function () {
                GSettingChangedEvent.setProperty('vis', t);
              },
              GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'action.toggle-visibility'))
            );
          })
          .appendTo(p)
          .gRichTooltip(
            s.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GCommonNames', 'text.page-toggle-visibility-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GCommonNames',
                  'text.page-toggle-visibility-tooltip-description'
                )
              ),
              learnMore: '',
            })
          ),
        p.contextmenu(
          { context: g.PagePanel },
          function (e) {
            ($(this).data('gpagepanel').scene.setActivePage(GSettingChangedEvent),
              $(gDesigner.getWindows().getHtmlElement()).trigger('contextmenu', e));
          }.bind(this)
        ));
    }
  }
  function E(e, t) {
    var n = new d(e);
    return ($(this).data('gpagepanel').vtree.insertNodeBefore(t, n), n);
  }
  function A(e, t) {
    var n = new d(e);
    return ($(this).data('gpagepanel').vtree.appendNode(t, n), n);
  }
  function T(e) {
    $(this).data('gpagepanel').vtree.removeNode(e);
  }
  function G(e) {
    var t,
      n,
      _interopRequireDefault = GCore.GUtil.uuid(),
      GTools = $(this).data('gpagepanel'),
      r = GTools.vtree;
    for (r.beginUpdate(), t = e.getNext(); t && !(t instanceof GCore.GPage); t = t.getNext());
    var s = t ? C.call(this, t) : null;
    ((n = s ? E.call(this, _interopRequireDefault, s) : A.call(this, _interopRequireDefault, null)),
      (GTools.pagesTreeNodeMap[_interopRequireDefault] = { node: e, treeNode: n, element: null }),
      GTools.pagesTreeNodeMapByNodes.set(e, {
        element: null,
        treeNode: n,
        treeId: _interopRequireDefault,
      }),
      r.endUpdate());
  }
  function P(e) {
    var t = C.call(this, e);
    t && (T.call(this, t), x.call(this, e));
  }
  function D(e) {
    !$(this).data('gpagepanel').blockHandlers &&
      e.node instanceof GCore.GPage &&
      G.call(this, e.node);
  }
  function L(e) {
    !$(this).data('gpagepanel').blockHandlers &&
      e.node instanceof GCore.GPage &&
      P.call(this, e.node);
  }
  function I(e) {
    if (
      !e.temporary &&
      !$(this).data('gpagepanel').blockHandlers &&
      (e.node instanceof GCore.GPage || e.node instanceof GCore.GScene)
    ) {
      if (e.node instanceof GCore.GScene && 1 === e.properties.length && 'pi' === e.properties[0])
        return;
      $(this).data('gpagepanel').vtree.requestInvalidation();
    }
  }
  function k(e) {
    if (!e) return;
    $(this).find('.page-row.g-active').removeClass('g-active');
    const module = w.call(this, e.id),
      require = module && module.element;
    require && $(require).closest('.page-row').addClass('g-active');
  }
  function O(e) {
    var t = $(this).data('gpagepanel'),
      n = $(this).data('gpagepanel').vtree;
    if (!t.blockHandlers && e.node instanceof GCore.GPage)
      if (
        e.flag === GCore.GElement.Flag.Hidden ||
        e.flag === GCore.GElement.Flag.PartialLocked ||
        e.flag === GCore.GElement.Flag.FullLocked ||
        e.flag === GCore.GNode.Flag.Active
      ) {
        var _interopRequireDefault = e.node.getScene(),
          GTools = _interopRequireDefault && _interopRequireDefault.getActivePage();
        if (GTools && GTools == e.node && e.set) {
          var r = C.call(this, e.node);
          (n.expandAndFocus(r, true),
            e.flag === GCore.GNode.Flag.Active ? k.call(this, r) : n.requestInvalidation());
        }
      } else t.blockHighlight || e.flag !== GCore.GNode.Flag.Highlighted || n.requestInvalidation();
  }
  function F(e) {
    'touch' === e.key && N._updateLayout.call(this);
  }
  function R() {
    gDesigner.isTouchEnabled() &&
      $(this)
        .parent()
        .css('height', parseInt($(this).find('.vscroller').css('height'), 10) + u + 'px');
  }
  function M() {
    var e = $(this).data('gpagepanel');
    (e.vtree.clean(),
      (e.pagesTreeNodeMap = {}),
      (e.pagesTreeNodeMapByNodes = new Map()),
      (e.scene = null));
  }
  GCore.GObject.inheritAndMix(h, GCore.GObject);
  var N = {
    init: function (e) {
      return (
        (e = $.extend(
          {
            nodeStyle: 'page-row',
            collapseStyle: 'page-arrow gravit-icon-down',
            freeHeight: u,
            insertIntoStyle: 'g-drop',
            upSeparatorSpan1Style: 'g-up-separator-span1',
            upSeparatorSpan2Style: 'g-up-separator-span2',
            downSeparatorSpan1Style: 'g-down-separator-span1',
            downSeparatorSpan2Style: 'g-down-separator-span2',
            renderer: S.bind(this),
            separatorRenderer: null,
            canDropCallback: m.bind(this),
            moveCallback: null,
            clickCallback: null,
            startDraggingCallback: null,
          },
          e
        )),
        this.each(function () {
          $(this)
            .addClass('g-page-panel')
            .data('gpagepanel', {
              vtree: new c(
                this,
                _.bind(this),
                e.nodeStyle,
                null,
                null,
                e.separatorRenderer ? e.separatorRenderer : null,
                e.freeHeight,
                e.insertIntoStyle,
                f.bind(this),
                y.bind(this),
                null,
                null,
                v.bind(this),
                null,
                e.upSeparatorSpan1Style,
                e.upSeparatorSpan2Style,
                e.downSeparatorSpan1Style,
                e.downSeparatorSpan2Style,
                false,
                0,
                21
              ),
              options: e,
              pagesTreeNodeMap: {},
              pagesTreeNodeMapByNodes: new Map(),
              scene: null,
              currentFocus: null,
            });
        })
      );
    },
    refresh: function () {
      $(this).data('gpagepanel').vtree.refresh();
    },
    relayout: function () {
      var e = $(this).data('gpagepanel'),
        t = e.vtree,
        n = e.currentFocus;
      (n && t.expandAndFocus(n), t.requestInvalidation());
    },
    scene: function (e) {
      var t = $(this),
        n = t.data('gpagepanel');
      if (!arguments.length) return n.scene;
      if (
        e !== n.scene &&
        (n.scene &&
          n.scene.hasMixin(GCore.GEventTarget) &&
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
          gDesigner.removeEventListener(GSettingChangedEvent.default, n.settingChangedEvent, this)),
        M.call(this),
        (n.scene = e),
        n.scene)
      ) {
        n.scene.hasMixin(GCore.GEventTarget) &&
          ((n.afterNodeInsertHandler = D.bind(this)),
          (n.beforeNodeRemoveHandler = L.bind(this)),
          (n.afterPropertiesChangeHandler = I.bind(this)),
          (n.afterFlagChangeHandler = O.bind(this)),
          (n.settingChangedEvent = F.bind(this)),
          gDesigner.addEventListener(GSettingChangedEvent.default, n.settingChangedEvent, this),
          n.scene.addEventListener(GCore.GNode.AfterInsertEvent, n.afterNodeInsertHandler, this),
          n.scene.addEventListener(GCore.GNode.BeforeRemoveEvent, n.beforeNodeRemoveHandler, this),
          n.scene.addEventListener(
            GCore.GNode.AfterPropertiesChangeEvent,
            n.afterPropertiesChangeHandler,
            this
          ),
          n.scene.addEventListener(
            GCore.GNode.AfterFlagChangeEvent,
            n.afterFlagChangeHandler,
            this
          ));
        for (
          var _interopRequireDefault = n.scene.getLastChild();
          null !== _interopRequireDefault;
          _interopRequireDefault = _interopRequireDefault.getPrevious()
        )
          _interopRequireDefault instanceof GCore.GPage && G.call(this, _interopRequireDefault);
        N._updateLayout.call(this);
      }
      return this;
    },
    blockHandlers: function (e) {
      $(this).data('gpagepanel').blockHandlers = !!e;
    },
    getLastVisitedDroppable: function () {
      return $(this).data('gpagepanel').vtree.getLastVisitedDroppable();
    },
    setBlockHighlight: function (e) {
      $(this).data('gpagepanel').blockHighlight = !!e;
    },
    resetVTreeRowHeight: function (e) {
      $(this).data('gpagepanel').vtree.resetRowHeight(e);
    },
    _updateLayout: function () {
      const exports = $(this).data('gpagepanel'),
        module = exports && exports.vtree;
      if (module) {
        const e = gDesigner.isTouchEnabled();
        (module.setFreeHeight(e ? p : u), module.setAnimatedDragEnabled(e));
      }
    },
  };
  ((exports.exports = h),
    ($.fn.gPagePanel = function (e) {
      return N[e]
        ? N[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
          ? void $.error('Method ' + e + ' does not exist on jQuery.myPlugin')
          : N.init.apply(this, arguments);
    }));
}
