/**
 * Webpack Module #339
 * Type: class
 * Name: GMenu
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    a = require(67) /* GRichTooltipConfig */,
    GMenuActivateEvent = require(1499) /* GMenuActivateEvent */,
    GMenuCloseEvent = require(1156) /* GMenuCloseEvent */,
    l = require(444) /* module_444 */,
    GMenuManager = require(1157) /* GMenuManager */,
    GMenuOpenEvent = require(804);
  class u extends GCore.GEventTarget {
    constructor(e, t, n, GCore) {
      super();
      ((this._htmlElement = $('<li></li>').addClass('g-menu-item')),
      (this._category = e || u.Type.Item),
      (this._componentId = n || null),
      (this._pro = false),
      (this._visible = true),
      (this._feature = null),
      (this._detachBound = this._detach.bind(this)),
      this._category === u.Type.Divider
      ? ((this._isVisible = GCore), this._htmlElement.addClass('g-menu-item-divider'))
      : (this._htmlElement
      .append($('<span></span>').addClass('g-menu-item-icon').css('display', 'none'))
      .append($('<span></span>').addClass('g-menu-item-caption'))
      .append($('<span></span>').addClass('g-menu-item-info'))
      .append($('<span></span>').addClass('g-menu-item-shortcut').css('display', 'none'))
      .append(
      $('<span></span>')
      .addClass('g-menu-item-detach')
      .addClass('gravit-icon-detach')
      .css('display', 'none')
      )
      .append($('<span></span>').addClass('g-menu-item-tail')),
      this._category === u.Type.Menu &&
      (this._htmlElement.addClass('g-menu-item-menu'), this.setMenu(new t(this)))),
      this._htmlElement.on('mouseover', this._mouseOver.bind(this)),
      this._htmlElement.on('mouseout', this._mouseOut.bind(this)),
      this._htmlElement.on('mousedown', this._mouseDown.bind(this)),
      this._htmlElement.on('mouseup', this._mouseUp.bind(this)));
    }

    _parent = null;
    _category = null;
    _menu = null;
    _icon = null;
    _forcedAsOpened = false;
    _caption = null;
    _shortcutHint = null;
    _action = null;
    _data = null;
    _noHover = false;
    _pro = false;
    _visible = true;
    _feature = null;
    _info = null;
    _uuid = null;
    _detached = false;
    _detachBound = null;
    _isVisible = null;
    _proFeatureInterruption = true;

    getUUID() {
      return (this._uuid || (this._uuid = GCore.GUtil.uuid()), this._uuid);
    }

    getParent() {
      return this._parent;
    }

    getType() {
      return this._category;
    }

    getIcon() {
      return this._icon;
    }

    isForcedAsOpened() {
      return this._forcedAsOpened;
    }

    setPro(e, t) {
      ((this._pro = !!e),
        (this._feature = t),
        this._htmlElement.gPro({ pro: this._pro, feature: t }));
      let require = false;
      const GCore = gDesigner.getLicense(),
        GEditor = GCore.isLegacy() && gDesigner.isLegacyFeature(t),
        GMenuActivateEvent =
          !GEditor && (GCore.isFree() || gDesigner.isAnonymous() || GCore.isExpired());
      if (
        (this._pro && (require = GCore.isTrial() && !GEditor),
        (!require && !GMenuActivateEvent) || !this._action)
      )
        return;
      let GMenuCloseEvent = this._action.getTooltipConfig(this._action.getTooltipArea());
      GMenuCloseEvent &&
        this._htmlElement.gRichTooltip(
          a.GRichTooltipConfig.from(
            Object.assign({}, GMenuCloseEvent.getConfig(), {
              isPro: !gDesigner.isEnabledProFeatures() || !(GCore.isPro() && !GCore.isExpired()),
            })
          )
        );
    }

    isPro() {
      return !!this._pro;
    }

    getFeature() {
      return this._feature;
    }

    setIcon(e) {
      if (e !== this._icon) {
        this._icon = e;
        var module = this._htmlElement.find('.g-menu-item-icon');
        (module.empty(),
          this._icon
            ? ('string' == typeof this._icon
                ? module.append($('<i></i>').addClass(e))
                : module.append(this._icon),
              module.css('display', ''),
              this._htmlElement.addClass('has-icon'))
            : (module.css('display', 'none'), this._htmlElement.removeClass('has-icon')));
      }
    }

    getCaption() {
      return this._caption;
    }

    setCaption(e) {
      if (e !== this._caption) {
        this._caption = e;
        var module = this._htmlElement.find('.g-menu-item-caption');
        (module.empty(),
          !this._caption ||
          this._caption instanceof GCore.GLocaleKey ||
          'string' == typeof this._caption
            ? module.html(this._caption ? GCore.GLocale.get(this._caption) : '')
            : module.append(this._caption));
      }
    }

    getInfo() {
      return this._info;
    }

    setInfo(e) {
      if (e !== this._info) {
        this._info = e;
        const t = this._htmlElement.find('.g-menu-item-info').empty();
        (this._htmlElement.css('display', this._info ? '' : 'none'),
          this._info &&
            (this._info instanceof GCore.GLocaleKey || 'string' == typeof this._info
              ? t.text(this._info ? GCore.GLocale.get(this._info) : '')
              : t.append(this._info)));
      }
    }

    getShortcutHint() {
      return this._shortcutHint;
    }

    setShortcutHint(e) {
      this._shortcutHint = e;
      var t = this._htmlElement.find('.g-menu-item-shortcut');
      this._shortcutHint && this._shortcutHint.length > 0
        ? (t.text(GEditor.GKey.shortcutToString(e)),
          t.css('display', ''),
          this._htmlElement.addClass('has-shortcut'))
        : (t.empty(), t.css('display', 'none'), this._htmlElement.removeClass('has-shortcut'));
    }

    getAction() {
      return this._action;
    }

    updateEnabled() {
      this._action && this.setEnabled(!!this._action.isEnabled());
    }

    setAction(e, t) {
      if (e !== this._action) {
        if (this._action) {
          let t = e.getShortcut();
          t && t === this.getShortcutHint() && this.setShortcutHint(null);
        }
        if (((this._action = e), this._action)) {
          let n = e.getShortcut();
          if (
            (n && this.setShortcutHint(n),
            this.setCaption(this._action.getTitle()),
            this.setInfo(this._action.getInfo()),
            this.setIcon(this._action.getIcon()),
            this.setEnabled(true === this._action.isEnabled()),
            this.setVisible(this._action.isVisible()),
            t)
          ) {
            let e = this._action.getTooltipConfig(t);
            e &&
              this.setTooltipConfig(
                a.GRichTooltipConfig.from(Object.assign({}, e.getConfig(), { side: true }))
              );
          }
        }
      }
      this.setPro(this._action && this._action.isPro(), this._action && this._action.getId());
    }

    isChecked() {
      return this._htmlElement.hasClass('g-menu-item-checked');
    }

    isCheckable() {
      return !!this._action && this._action.isCheckable();
    }

    setChecked(e) {
      e != this.isChecked() &&
        (e
          ? this._htmlElement.addClass('g-menu-item-checked')
          : this._htmlElement.removeClass('g-menu-item-checked'));
    }

    isEnabled() {
      return !this._htmlElement.hasClass('g-disabled');
    }

    setEnabled(e) {
      e != this.isEnabled() &&
        (e
          ? this._htmlElement.removeClass('g-disabled')
          : this._htmlElement.addClass('g-disabled'));
    }

    setDetachable(e) {
      const module = this._htmlElement.find('.g-menu-item-detach').css('display', e ? '' : 'none');
      e
        ? (module.on('click', this._detachBound),
          module[0].addEventListener('mousedown', this._stopPropagationEventListener, true),
          module[0].addEventListener('mouseup', this._stopPropagationEventListener, true))
        : (module.off('click', this._detachBound),
          module[0].removeEventListener('mousedown', this._stopPropagationEventListener, true),
          module[0].removeEventListener('mouseup', this._stopPropagationEventListener, true));
    }

    _stopPropagationEventListener(e) {
      e.stopPropagation();
    }

    _detach(e) {
      if (e.button == GEditor.GMouseEvent.BUTTON_LEFT) {
        (e.stopPropagation(), e.preventDefault(), (this._detached = true));
        const t = this._parent;
        (t && (t.removeItem(t.indexOf(this)), t.close()),
          this.hasEventListeners(u.DetachEvent) && this.trigger(new u.DetachEvent()));
      }
    }

    setVisible(e) {
      ((this._visible = !!e), this._htmlElement.css('display', e ? '' : 'none'));
    }

    isVisible() {
      return this._visible;
    }

    getData() {
      return this._data;
    }

    setData(e) {
      this._data = e;
    }

    setNoHover(e) {
      this._noHover = e;
    }

    addClass(e) {
      this._htmlElement.addClass(e);
    }

    isRootItem() {
      return (
        this._parent &&
        'function' == typeof this._parent.toString &&
        '[Object GMenu]' === this._parent.toString() &&
        null != this._parent._parent &&
        !(this._parent._parent instanceof u)
      );
    }

    isRootMenuBarItem() {
      return (
        this.isRootItem() &&
        this._parent._parent &&
        'function' == typeof this._parent._parent.toString &&
        '[Object GMenuBar]' === this._parent._parent.toString()
      );
    }

    getMenuBar() {
      return this.isRootMenuBarItem() ? this._parent._parent : null;
    }

    getMenu() {
      return this._menu;
    }

    setMenu(e) {
      e &&
        e !== this._menu &&
        this._category === u.Type.Menu &&
        ((this._menu = e),
        (this._menu._parent = this),
        this._menu.addEventListener(GMenuOpenEvent.EVENT, this._menuOpen.bind(this)),
        this._menu.addEventListener(GMenuCloseEvent.EVENT, this._menuClose.bind(this)));
    }

    update() {
      (this._action &&
        (this.setCaption(this._action.getTitle()),
        this.setEnabled(this._action.isEnabled()),
        this.setChecked(this._action.isChecked()),
        this.setPro(this._action.isPro(), this._action.getId()),
        this.setIcon(this._icon || this._action.getIcon()),
        this.setInfo(this._action.getInfo()),
        this.setVisible(this._action.isVisible())),
        this.getType() === u.Type.Divider && this._isVisible && this.setVisible(this._isVisible()),
        this.hasEventListeners(u.UpdateEvent) && this.trigger(u.UPDATE_EVENT));
    }

    activate() {
      let exports = false;
      const module = () => {
        let exports,
          module = this.getParent();
        for (; module && ((exports = module), module !== module.getParent()); )
          module = module.getParent();
        return exports;
      };
      if (
        (this.hasEventListeners(u.BeforeActivateEvent) && this.trigger(u.BEFORE_ACTIVATE_EVENT),
        this._action && this._action.isAvailable(this._componentId) && this._action.isEnabled())
      ) {
        let GEditor = module();
        var require = 'execute';
        (this._action.isPro() &&
          !gDesigner.isEnabledProFeatures(this._action.getId()) &&
          (require = 'nonprotriespro'),
          this._action.execute(),
          (exports = true));
        var GCore = this._action.statsValue() || this._action.getId();
        GEditor && 'context' === GEditor.__which
          ? gDesigner.stats('action_' + require + '_context', GCore)
          : GEditor && 'menubar' === GEditor.__which
            ? gDesigner.stats('action_' + require + '_menu', GCore)
            : GEditor && 'assistantbar' === GEditor.__which
              ? gDesigner.stats('action_' + require + '_assistantbar', GCore)
              : GEditor && 'touchmenu' === GEditor.__which
                ? gDesigner.stats('action_' + require + '_touchmenu', GCore)
                : gDesigner.stats('action_' + require + '_toolbar', GCore);
      }
      if (this.isEnabled()) {
        if (
          this.isPro() &&
          this._proFeatureInterruption &&
          !gDesigner.isEnabledProFeatures(this._feature)
        ) {
          if (!exports) {
            let e = module();
            (e && 'context' === e.__which
              ? gDesigner.stats('action_nonprotriespro_context', this._feature)
              : e && 'menubar' === e.__which
                ? gDesigner.stats('action_nonprotriespro_menu', this._feature)
                : e && 'assistantbar' === e.__which
                  ? gDesigner.stats('action_nonprotriespro_assistantbar', this._feature)
                  : e && 'touchmenu' === e.__which
                    ? gDesigner.stats('action_nonprotriespro_touchmenu', this._feature)
                    : gDesigner.stats('action_nonprotriespro_toolbar', this._feature),
              gDesigner.handlePROFeatureInterruption());
          }
          return false;
        }
        (this.hasEventListeners(u.ActivateEvent) && this.trigger(u.ACTIVATE_EVENT),
          this._parent &&
            this._parent.hasEventListeners(GMenuActivateEvent) &&
            this._parent.trigger(new GMenuActivateEvent(this)));
      }
    }

    setTooltipConfig(e) {
      this._htmlElement.gRichTooltip(e);
    }

    setProFeatureInterruption(e) {
      this._proFeatureInterruption = e;
    }

    _mouseOver(e) {
      (this._parent &&
        this._category === u.Type.Menu &&
        this._parent.getActiveItem() !== this &&
        !this.isRootItem() &&
        this._parent.closeMenus(true),
        this._parent &&
          'function' == typeof this._parent.toString &&
          '[Object GMenu]' === this._parent.toString() &&
          !this.isRootItem() &&
          this._parent.closeMenus(),
        this.isEnabled() &&
          (this._category == u.Type.Menu &&
            GCore.GSystem.hardware === GCore.GSystem.Hardware.Desktop &&
            (!this.isRootItem() || (this.isRootMenuBarItem() && this.getMenuBar().isActive())) &&
            this._openMenu(),
          this._category != u.Type.Divider &&
            (this._noHover || this._htmlElement.addClass('g-hover'),
            this.hasEventListeners(u.EnterEvent) && this.trigger(u.ENTER_EVENT))));
    }

    isActive() {
      return this._htmlElement.hasClass('g-active');
    }

    changeActiveState(e) {
      e ? this._htmlElement.addClass('g-active') : this._htmlElement.removeClass('g-active');
    }

    _mouseOut(e) {
      if (
        this._category === u.Type.Menu &&
        (this.isRootItem() || GCore.GSystem.hardware !== GCore.GSystem.Hardware.Desktop)
      )
        return (e.stopPropagation(), void e.preventDefault());
      this.isEnabled() &&
        this._category != u.Type.Divider &&
        (this._noHover || this._htmlElement.removeClass('g-hover'),
        this.hasEventListeners(u.LeaveEvent) && this.trigger(u.LEAVE_EVENT));
    }

    _mouseDown(e) {
      e.cancelable &&
        (this.isEnabled()
          ? e.button == GEditor.GMouseEvent.BUTTON_LEFT
            ? (e.stopPropagation(),
              e.preventDefault(),
              this._category === u.Type.Menu &&
                (this._forcedAsOpened
                  ? (this.getMenu().close(), (this._forcedAsOpened = false))
                  : (this._parent &&
                      (this._parent.closeMenus(true), this._parent.setActiveItem(this)),
                    this._openMenu(),
                    (this._forcedAsOpened = true))))
            : (e.button, GEditor.GMouseEvent.BUTTON_MIDDLE, e.stopPropagation(), e.preventDefault())
          : gDesigner.isTouchEnabled() &&
            e.button === GEditor.GMouseEvent.BUTTON_LEFT &&
            e.stopPropagation());
    }

    _mouseUp(e) {
      if (
        e.cancelable &&
        (e.stopPropagation(),
        e.preventDefault(),
        e.button != GEditor.GMouseEvent.BUTTON_MIDDLE &&
          e.button != GEditor.GMouseEvent.BUTTON_RIGHT &&
          !this._detached &&
          this._category !== u.Type.Menu)
      ) {
        if ((this.isRootMenuBarItem() || this._mouseOut(e), this._category == u.Type.Item)) {
          let e = this.activate();
          this.isEnabled() && false !== e && GMenuManager.triggerGlobalActivation(this);
        }
        this.isRootMenuBarItem() || GMenuManager.setActiveMenu(null);
      }
    }

    _openMenu() {
      this.getMenu().open(
        this._htmlElement,
        this.isRootItem() ? l.Position.Center : l.Position.Right_Bottom,
        this.isRootItem() ? l.Position.Right_Bottom : l.Position.Center
      );
    }

    _menuOpen() {
      (this._htmlElement.addClass('g-active'),
        this.isRootItem() && this._parent._parent._htmlElement.addClass('g-active'));
    }

    _menuClose() {
      ((this._forcedAsOpened = false),
        this._htmlElement.removeClass('g-active'),
        this.isRootItem() && this._parent._parent._htmlElement.removeClass('g-active'));
    }

    toString() {
      return '[Object GMenuItem]';
    }

    static Type = { Item: 0, Menu: 1, Divider: 2 };

    static EnterEvent() {}

    static ENTER_EVENT = new u.EnterEvent();

    static LeaveEvent() {}

    static LEAVE_EVENT = new u.LeaveEvent();

    static ActivateEvent() {}

    static ACTIVATE_EVENT = new u.ActivateEvent();

    static BeforeActivateEvent() {}

    static BEFORE_ACTIVATE_EVENT = new u.BeforeActivateEvent();

    static UpdateEvent() {}

    static UPDATE_EVENT = new u.UpdateEvent();

    static DetachEvent() {}

  }
  (GCore.GObject.inherit(u.EnterEvent, GCore.GEvent),
    u.EnterEvent.prototype.toString = function () {
      return '[Object GMenuItem.EnterEvent]';
    },
    GCore.GObject.inherit(u.LeaveEvent, GCore.GEvent),
    u.LeaveEvent.prototype.toString = function () {
      return '[Object GMenuItem.LeaveEvent]';
    },
    GCore.GObject.inherit(u.ActivateEvent, GCore.GEvent),
    u.ActivateEvent.prototype.toString = function () {
      return '[Object GMenuItem.ActivateEvent]';
    },
    GCore.GObject.inherit(u.BeforeActivateEvent, GCore.GEvent),
    u.BeforeActivateEvent.prototype.toString = function () {
      return '[Object GMenuItem.BeforeActivateEvent]';
    },
    GCore.GObject.inherit(u.UpdateEvent, GCore.GEvent),
    u.UpdateEvent.prototype.toString = function () {
      return '[Object GMenuItem.UpdateEvent]';
    },
    GCore.GObject.inherit(u.DetachEvent, GCore.GEvent),
    u.DetachEvent.prototype.toString = function () {
      return '[Object GMenuItem.DetachEvent]';
    },
    exports.exports = u);
}