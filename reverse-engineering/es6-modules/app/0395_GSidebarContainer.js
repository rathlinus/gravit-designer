/**
 * Webpack Module #395
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(57) /* polyfill_parseInt */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GView = require(394) /* GView */,
    GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
    s = require(863) /* module_863 */,
    { SidebarsIds: l } = require(198) /* Exports_GOutlineSidebar */,
    GEvent_type = require(807);
  class d extends GCore.GEventTarget {
    constructor(e, t, n) {
      super();
      ((this._htmlElement = e),
      (this._orientation = t),
      (this._frame = n),
      (this._sidebarWidths = {}),
      (this._canResize = false),
      (this._isResizing = false));
    }

    _htmlElement = null;
    _orientation = null;
    _sidebars = null;
    _activeSidebar = null;
    _activeTouchTool = null;
    _touchToolbar = null;
    _sidebarWidths = null;
    _sidebarsSelector = null;

    getActiveSidebar() {
      return this._activeSidebar;
    }

    setActiveSidebar(e) {
      if ((e || this.setActiveTouchTool(null), e !== this._activeSidebar)) {
        if (e) {
          var module = this.getSidebar(e);
          if ((!module || !module.isVisible()) && ((e = null), this._activeSidebar)) {
            const e = this.getSidebar(this._activeSidebar);
            if (e && e.isVisible()) return;
          }
        }
        for (var require = this._activeSidebar, GCore = 0; GCore < this._sidebars.length; ++GCore) {
          var GEditor = this._sidebars[GCore],
            GView = GEditor.sidebar.getId();
          if (GView === e) {
            ((this._activeSidebar = GView),
              GEditor.container.css('display', ''),
              GEditor.sidebar.activate(),
              this._sidebarWidths[GView]
                ? this._htmlElement.css('width', this._sidebarWidths[GView] + 'px')
                : this._htmlElement.css('width', GEditor.sidebar.getDefaultWidth() + 'px'),
              this.relayout(),
              this.hasEventListeners(d.SidebarEvent) &&
                this.trigger(new d.SidebarEvent(d.SidebarEvent.Type.Activated, GEditor.sidebar)));
            const e = GEditor.sidebar.getTouchTools();
            if (e) {
              const t =
                e.find((e) => {
                  let { def: t } = e;
                  return !!t;
                }) || e[0];
              t && this.setActiveTouchTool(t);
            }
          } else
            (GEditor.container.css('display', 'none'),
              GView === require &&
                (GEditor.sidebar.deactivate(),
                (this._activeSidebar = e),
                this.hasEventListeners(d.SidebarEvent) &&
                  this.trigger(
                    new d.SidebarEvent(d.SidebarEvent.Type.Deactivated, GEditor.sidebar)
                  )));
          this._updateBadge(GEditor.sidebar);
        }
        (this._htmlElement.find('.sidebar-option').removeClass('active'),
          this._htmlElement.find('.sidebar-option.sidebar-' + e).addClass('active'),
          this._activeSidebar &&
            !this._getSidebarInfo(this._activeSidebar) &&
            this.setActiveSidebar(this._sidebars[0].sidebar.getId()));
      }
    }

    setActiveTouchTool(e) {
      (this._activeTouchTool && e && this._activeTouchTool.id === e.id) ||
        (this._htmlElement.find('[g-touch-tool]').removeClass('g-active'),
        this._htmlElement.find('.sidebar-container').removeClass('g-active'),
        this._activeTouchTool && this._activeTouchTool.deactivate(),
        e
          ? (this._htmlElement.find('.sidebar-'.concat(e.sidebar)).addClass('g-active'),
            this._htmlElement.find('[g-touch-tool="'.concat(e.id, '"]')).addClass('g-active'),
            (this._activeTouchTool = e))
          : (this._activeTouchTool = null),
        this._activeTouchTool && this._activeTouchTool.activate());
    }

    showSidebar(e) {
      if (this.getSidebar(e) && this._activeSidebar !== e) {
        null === this._activeSidebar && this.setActiveSidebar(e);
        var module = this._htmlElement.find('.sidebar-option.sidebar-' + e);
        module.is(':hidden') && module.show();
      }
    }

    hideSidebar(e) {
      if (this.getActiveSidebar() === e) {
        for (var module = null, require = 0; require < this._sidebars.length && !module; ++require)
          if (this._sidebars[require].sidebar.getId() !== e) {
            var GCore = this._sidebars[require].sidebar.getId();
            this._htmlElement.find('.sidebar-option.sidebar-' + GCore).is(':visible') &&
              (module = GCore);
          }
        this.setActiveSidebar(module);
      }
      var GEditor = this._htmlElement.find('.sidebar-option.sidebar-' + e);
      GEditor.is(':visible') && GEditor.hide();
    }

    setSidebarEnabled(e, t) {
      var n = this._getSidebarInfo(e);
      if (n)
        if (t)
          (n.container.find('.g-disabled-overlay').remove(), n.container.removeClass('g-disabled'));
        else {
          var GCore = n.container.find('.g-disabled-overlay');
          (0 === GCore.length &&
            (GCore = $('<div></div>').addClass('g-disabled-overlay').appendTo(n.container)),
            n.container.addClass('g-disabled'));
        }
    }

    init() {
      this._sidebars = [];
      var e = function (e, t) {
          (t > 1 &&
            !this._sidebarsSelector &&
            ((this._sidebarsSelector = $('<div/>')
              .addClass('sidebar-selector')
              .css('display', 'none')
              .appendTo(this._htmlElement)),
            this._htmlElement.css('width', e.getDefaultWidth() + 'px')),
            this._sidebarsSelector &&
              $('<div/>')
                .addClass('sidebar-option sidebar-' + e.getId())
                .append([
                  $('<span/>').addClass('sidebar-title').text(GCore.GLocale.get(e.getTitle())),
                  $('<span/>').addClass('g-badge').hide(),
                ])
                .on('click', this._tryActivateSidebar.bind(this, e))
                .appendTo(this._sidebarsSelector));
          var n = $('<div></div>')
            .addClass(
              'sidebar-container sidebar-' + e.getId() + (this._sidebarsSelector ? ' multiple' : '')
            )
            .css('display', 'none')
            .appendTo(this._htmlElement);
          (e.init(n),
            this._sidebars.push({ container: n, sidebar: e }),
            n.find('button').each(function (e, t) {
              $(t).on('mousedown', function (e) {
                e.preventDefault();
              });
            }));
          const GEditor = gDesigner.getLicense();
          (e.addEventListener(
            GView.UpdateEvent,
            function () {
              (this.setSidebarEnabled(e.getId(), e.isEnabled() && GEditor.canAccessFreemium()),
                this._updateTouchToolbar(),
                this._updateBadge(e));
            }.bind(this)
          ),
            e.getId() === l.GInspectorSidebar &&
              e.addEventListener(
                d.SidebarEvent,
                function (e) {
                  [d.SidebarEvent.Type.ChildAdded, d.SidebarEvent.Type.ChildRemoved].includes(
                    e.type
                  ) && this._updateTouchToolbar();
                }.bind(this)
              ),
            this.setSidebarEnabled(e.getId(), e.isEnabled()));
        }.bind(this),
        t = [];
      for (let e = 0; e < window.gravit.sidebars.length; ++e) {
        let n = window.gravit.sidebars[e];
        n.getOrientation() === this._orientation && t.push(n);
      }
      if (window.gravit.sidebars)
        for (let require = 0; require < t.length; ++require) {
          let GCore = t[require];
          GCore.getOrientation() === this._orientation && e(GCore, t.length);
        }
      (gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
        (this._mouseDownHandler = this._documentMouseDown.bind(this)),
        (this._mouseMoveHandler = this._documentMouseMove.bind(this)),
        (this._mouseReleaseHandler = this._resizeMouseUp.bind(this)),
        document.addEventListener('mousemove', this._mouseMoveHandler),
        document.addEventListener('mousedown', this._mouseDownHandler),
        document.addEventListener('mouseup', this._mouseReleaseHandler, true),
        document.addEventListener('dragstart', this._mouseMoveHandler),
        document.addEventListener('drag', this._mouseMoveHandler),
        document.addEventListener('dragend', this._mouseMoveHandler, true),
        this._updateTouchToolbar());
    }

    setView(e) {
      e !== this._view &&
        (this._view &&
          (this._view.removeEventListener(GEditor.GMouseEvent.Down, this._mouseDownHandler, this),
          this._view.removeEventListener(GEditor.GMouseEvent.Move, this._mouseMoveHandler, this),
          this._view.removeEventListener(
            GEditor.GMouseEvent.DragStart,
            this._mouseMoveHandler,
            this
          ),
          this._view.removeEventListener(GEditor.GMouseEvent.Drag, this._mouseMoveHandler, this),
          this._view.removeEventListener(GEditor.GMouseEvent.DragEnd, this._mouseMoveHandler, this),
          this._view.removeEventListener(
            GEditor.GMouseEvent.Release,
            this._mouseReleaseHandler,
            this
          )),
        (this._view = e),
        this._view &&
          (this._view.addEventListener(GEditor.GMouseEvent.Down, this._mouseDownHandler, this),
          this._view.addEventListener(GEditor.GMouseEvent.Move, this._mouseMoveHandler, this),
          this._view.addEventListener(GEditor.GMouseEvent.DragStart, this._mouseMoveHandler, this),
          this._view.addEventListener(GEditor.GMouseEvent.Drag, this._mouseMoveHandler, this),
          this._view.addEventListener(GEditor.GMouseEvent.DragEnd, this._mouseMoveHandler, this),
          this._view.addEventListener(
            GEditor.GMouseEvent.Release,
            this._mouseReleaseHandler,
            this
          )));
    }

    _isActiveSidebarDeactivatable() {
      return !(
        this.getSidebar(this._activeSidebar) &&
        !this.getSidebar(this._activeSidebar).isDeactivatable()
      );
    }

    _tryActivateSidebar(e) {
      return (
        !!this._isActiveSidebarDeactivatable() &&
        (gDesigner.stats('sidebars_activate_sidebar', (e && e.getId()) || 'unkn'),
        this.setActiveSidebar(e.getId()),
        this.setSidebarEnabled(e.getId(), e.isEnabled()),
        true)
      );
    }

    disableContextSensitive() {
      this._updateTouchToolbar({ disableContextSensitive: true });
    }

    enableContextSensitive() {
      this._updateTouchToolbar();
    }

    _documentMouseMove(e) {
      if (this._htmlElement && this._htmlElement[0])
        if (this._isResizing) {
          var module;
          (e instanceof MouseEvent
            ? (module = e.pageX)
            : ((e.isImmediatePropagationStopped = true),
              (module = e.client.getX() / GCore.GPaintCanvas.getScreenDPI())),
            e.stopPropagation instanceof Function && e.stopPropagation(),
            (this._newWidth =
              this._orientation === d.Orientation.Left ? module : window.innerWidth - module),
            this._newWidth < this._minimumWidth && (this._newWidth = this._minimumWidth),
            this._htmlElement.css('width', this._newWidth + 'px'));
          var require = this.getSidebar(this._activeSidebar);
          require && require.resize();
        } else {
          var GEditor =
              this._orientation === d.Orientation.Left
                ? this._htmlElement[0].offsetWidth
                : window.innerWidth - this._htmlElement[0].offsetWidth,
            GView =
              GCore.GMath.isEqualEps(e.pageX, GEditor, 3 * GCore.GPaintCanvas.getScreenDPI()) &&
              this._orientation !== d.Orientation.Right;
          (GView || this._canResize) &&
            (GView && !this._canResize
              ? (this._frame.addClass('resize'), (this._canResize = GView))
              : this._canResize &&
                !GView &&
                (this._frame.removeClass('resize'), (this._canResize = GView)));
        }
    }

    _documentMouseDown(e) {
      var t = this.getSidebar(this._activeSidebar);
      this._canResize &&
        t &&
        t.isResizeable() &&
        ((this._isResizing = true),
        (this._minimumWidth = t.getMinimumWidth()),
        e instanceof GEditor.GMouseEvent && (e.isImmediatePropagationStopped = true),
        e.stopPropagation instanceof Function && e.stopPropagation());
    }

    _resizeMouseUp(e) {
      if (this._isResizing) {
        (e instanceof GEditor.GMouseEvent && (e.isImmediatePropagationStopped = true),
          e.stopPropagation instanceof Function && e.stopPropagation(),
          (this._isResizing = false));
        var module = this.getSidebar(this._activeSidebar);
        module && gDesigner.setSetting('sidebars_width_' + module.getId(), this._newWidth);
      }
    }

    relayout() {
      if (this._activeSidebar) {
        let e = this.getSidebar(this._activeSidebar);
        e && (this._htmlElement.css('width', e.getSettingWidth() + 'px'), e.relayout());
      }
      for (var exports = 0, module = 0, require = 0; require < this._sidebars.length; ++require) {
        let GEditor = this._sidebars[require];
        var GCore = GEditor.sidebar.getId();
        (GEditor.sidebar.isVisible()
          ? (exports++, this._htmlElement.find('.sidebar-option.sidebar-' + GCore).show())
          : this._htmlElement.find('.sidebar-option.sidebar-' + GCore).hide(),
          GEditor.sidebar.isEnabled() && module++,
          this._updateBadge(GEditor.sidebar));
      }
      if (exports > 0) {
        let n = this._htmlElement.find('.sidebar-container');
        (this._sidebarsSelector &&
          module > 0 &&
          (this._sidebarsSelector.css('display', ''),
          this._sidebarsSelector.toggleClass('singleton', 1 === exports),
          n.hasClass('multiple') || n.addClass('multiple')),
          this._orientation === d.Orientation.Right &&
            n.css(
              'bottom',
              $('.license-info:visible').length > 0
                ? parseInt($('.license-info:visible').outerHeight(), 10)
                : 0
            ));
      } else
        (this._sidebarsSelector && this._sidebarsSelector.css('display', 'none'),
          this._htmlElement.find('.sidebar-container').removeClass('multiple'));
      this._updateTouchToolbar();
    }

    _getSidebarInfo(e) {
      if (e && this._sidebars)
        for (var module = 0; module < this._sidebars.length; ++module) {
          if (this._sidebars[module].sidebar.getId() === e) return this._sidebars[module];
        }
      return null;
    }

    _settingChanged(e) {
      if (e.key === 'sidebars_' + this._orientation + '_active') {
        if (gDesigner.isTouchEnabled() && e.restoring) return;
        (this.setActiveSidebar(e.newValue ? e.newValue : null),
          gDesigner.setPartVisible(this.getSidebarsPart(), !!e.newValue));
      } else if (
        0 === e.key.indexOf('sidebars_width_') &&
        this._orientation !== d.Orientation.Right
      ) {
        var module = e.key.substr('sidebars_width_'.length);
        ((this._sidebarWidths[module] = e.newValue),
          module === this._activeSidebar &&
            (this._htmlElement.css('width', e.newValue + 'px'), gDesigner.relayout()));
      } else
        'touch' === e.key &&
          (this._updateTouchToolbar(),
          this._htmlElement.find('.appearance-properties-panel').removeClass('display-none'));
    }

    _updateBadge(e) {
      if (this._sidebarsSelector) {
        var module = this._sidebarsSelector.find('.sidebar-option.sidebar-' + e.getId()),
          require = module.find('.g-badge');
        e.updateBadge(require)
          ? (module.addClass('content-width'), require.show())
          : (module.removeClass('content-width'), require.hide());
      }
    }

    getSidebar(e) {
      var t = null;
      if (e) {
        var require = this._getSidebarInfo(e);
        require && (t = require.sidebar);
      }
      return t;
    }

    getSidebarsPart() {
      switch (this._orientation) {
        case d.Orientation.Left:
          return s.LeftSidebars;
        case d.Orientation.Right:
          return s.RightSidebars;
      }
    }

    addClassName(e) {
      this._htmlElement.find('.sidebar-container').addClass(e);
    }

    removeClassName(e) {
      this._htmlElement.find('.sidebar-container').removeClass(e);
    }

    getHtmlElement() {
      return this._htmlElement;
    }

    setEnabled(e, t) {
      ($('.sidebar-selector > div')[t ? 'removeClass' : 'addClass']('g-disabled'),
        e._sidebars.forEach((e) => {
          e.container[t ? 'removeClass' : 'addClass']('g-disabled');
        }));
    }

    static Orientation = { Left: 'left', Right: 'right' };

    static SidebarEvent = GEvent_type;

    static setOrientationStateInSetting(e, t) {
      gDesigner.setSetting(d.getSettingNameForSidebar(e), t);
    }

    static isOrientationActiveInSetting(e) {
      return gDesigner.getSetting(d.getSettingNameForSidebar(e));
    }

    static getSettingNameForSidebar(e) {
      return 'sidebars_' + e + '_active';
    }

  }
  exports.exports = d;
}