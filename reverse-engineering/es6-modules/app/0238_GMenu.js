/**
 * Webpack Module #238
 * Type: class
 * Name: GMenu
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    GMenuCloseEvent = require(1156) /* GMenuCloseEvent */,
    r = require(444) /* module_444 */,
    s = require(339) /* GMenu */,
    GMenuManager = require(1157) /* GMenuManager */,
    GMenuOpenEvent = require(804) /* GMenuOpenEvent */,
    GAction = require(31);
  class u extends GCore.GEventTarget {
    constructor(e, t) {
      super();
      ((this._parent = e),
      (this._htmlElement = $('<ul></ul>').addClass('g-menu')),
      this._htmlElement.on('mouseover', this._mouseOver.bind(this)),
      this._htmlElement.on('mouseout', this._mouseOut.bind(this)));
      const require = (e) => {
      e.cancelable ||
      (e.stopImmediatePropagation(), 'touchmove' === e.type && this.closeMenus(true));
      },
      GCore = !!(0, CollaborationMergeUtils.isPassiveSupported)() && {
      capture: false,
      passive: true,
      };
      (this._htmlElement[0].addEventListener('touchstart', require, GCore),
      this._htmlElement[0].addEventListener('touchmove', require, GCore),
      this._htmlElement[0].addEventListener('touchend', require, GCore),
      t && this._htmlElement.addClass(t));
    }

    _parent = null;
    _htmlElement = null;
    _items = null;
    _hovered = false;
    _tooltipType = null;
    _rangeLeftX = null;
    _rangeLeftY = null;
    _rangeRightX = null;
    _rangeRightY = null;

    getParent() {
      return this._parent;
    }

    setTooltipType(e) {
      if (e && 'string' == typeof e) return ((this._tooltipType = e), this);
    }

    isHovered(e) {
      if (this._hovered) return true;
      if (e) {
        for (var module = 0; module < this.getItemCount(); ++module) {
          var require = this.getItem(module);
          if (
            require instanceof s &&
            require.getType() === s.Type.Menu &&
            require.getMenu().isHovered(true)
          )
            return true;
        }
        return false;
      }
      return false;
    }

    createMenuItem(e) {
      return e ? new s(s.Type.Menu, u) : new s();
    }

    createDivider() {
      return new s(s.Type.Divider);
    }

    setActiveItem(e) {
      let module = this.getActiveItem();
      (module && module.changeActiveState(false), e.changeActiveState(true));
    }

    getActiveItem() {
      let exports = null;
      for (let require = 0; require < this._items.length; require++) {
        var module = this._items[require];
        if (module.isActive()) {
          exports = module;
          break;
        }
      }
      return exports;
    }

    isRootMenu() {
      return !(this._parent && this._parent instanceof s);
    }

    isSubMenu() {
      return !!(this._parent && this._parent instanceof s) && !this._parent.isRootItem();
    }

    createAddDivider() {
      return this.createInsertDivider(this.getItemCount());
    }

    createInsertDivider(e) {
      var t = new s(s.Type.Divider);
      return (this.insertItem(e, t), t);
    }

    createAddItem(e, t, n, GCore, CollaborationMergeUtils) {
      return this.createInsertItem(this.getItemCount(), e, t, n, GCore, CollaborationMergeUtils);
    }

    createInsertItem(e, t, n, GCore, CollaborationMergeUtils, GMenuCloseEvent) {
      var r = new s(null, null, GMenuCloseEvent);
      return (
        t instanceof GAction
          ? r.setAction(t, this._tooltipType)
          : (r.setCaption(t),
            n && r.addEventListener(s.ActivateEvent, n),
            GCore && r.addEventListener(s.EnterEvent, GCore),
            CollaborationMergeUtils && r.addEventListener(s.LeaveEvent, CollaborationMergeUtils)),
        this.insertItem(e, r),
        r
      );
    }

    addItem(e) {
      return this.insertItem(this.getItemCount(), e);
    }

    insertItem(e, t) {
      (null == this._items && (this._items = []),
        e + 1 < this._items.length
          ? (this._items.splice(e, 0, t), this._items[e + 1]._htmlElement.before(t._htmlElement))
          : (this._items.push(t), this._htmlElement.append(t._htmlElement)),
        (t._parent = this));
    }

    removeItem(e) {
      e >= 0 &&
        e < this.getItemCount() &&
        ((this._items[e]._parent = null),
        this._items[e]._htmlElement.detach(),
        this._items.splice(e, 1));
    }

    clearItems() {
      if (this._items) {
        for (var exports = 0; exports < this._items.length; ++exports)
          ((this._items[exports]._parent = null), this._items[exports]._htmlElement.detach());
        this._items = [];
      }
    }

    getItem(e) {
      return e >= 0 && e < this.getItemCount() ? this._items[e] : null;
    }

    getItemCount() {
      return this._items ? this._items.length : 0;
    }

    indexOf(e) {
      return this._items ? this._items.indexOf(e) : -1;
    }

    findItem(e) {
      for (var module = 0; module < this.getItemCount(); ++module) {
        var require = this.getItem(module);
        if (e == require.getCaption()) return require;
      }
      return null;
    }

    update() {
      for (var exports = 0; exports < this.getItemCount(); ++exports) {
        this.getItem(exports).update();
      }
    }

    isOpen() {
      return !!this._htmlElement.parent().length;
    }

    open(e, t, n, GCore) {
      ((t = 'number' == typeof t ? t : r.Position.Center),
        (n = 'number' == typeof n ? n : r.Position.Center));
      const CollaborationMergeUtils = e && 'number' == typeof e.x && 'number' == typeof e.y,
        GMenuCloseEvent = this._htmlElement.hasClass('g-touch'),
        s = !CollaborationMergeUtils && $(e).hasClass('g-menu-button');
      if (
        (this._htmlElement.toggleClass('g-menu-button', !!s),
        this.isOpen() ||
          (this.update(),
          this._htmlElement.appendTo($('body')),
          this.isSubMenu() || GMenuManager.setActiveMenu(this, false, GCore),
          this.trigger(GMenuOpenEvent.EVENT)),
        this._htmlElement.parent().is('body'))
      ) {
        var GAction = this._htmlElement.outerWidth(),
          u = this._htmlElement.outerHeight(),
          p = $(window).width(),
          g = $(window).height(),
          h = { x: 0, y: 0, width: 0, height: 0 };
        if (CollaborationMergeUtils) ((h.x = e.x), (h.y = e.y));
        else {
          var f = $(e),
            m = f.offset();
          ((h.x = m.left), (h.y = m.top), (h.width = f.outerWidth()), (h.height = f.outerHeight()));
        }
        var y = 0;
        switch (t) {
          case r.Position.Left_Top:
            (y = h.x - GAction) < 0 && (y = h.x + h.width);
            break;
          case r.Position.Center:
            y = h.x;
            break;
          case r.Position.Right_Bottom:
            (y = h.x + h.width) + GAction > p && (y = h.x - GAction);
        }
        var v = 0;
        switch (n) {
          case r.Position.Left_Top:
            (v = h.y - u) < 0 && (v = h.y + h.height);
            break;
          case r.Position.Center:
            v = h.y;
            break;
          case r.Position.Right_Bottom:
            (v = h.y + h.height) + u > g && (v = h.y - u);
        }
        const GCore = this._rangeLeftX ? this._rangeLeftX : 0;
        y < GCore && (y = GCore);
        const GMenuManager = this._rangeRightX ? this._rangeRightX : p;
        y + GAction >= GMenuManager && (y = GMenuManager - GAction);
        const GMenuOpenEvent = this._rangeLeftY ? this._rangeLeftY : 0;
        v < GMenuOpenEvent && (v = GMenuOpenEvent);
        const _ = this._rangeRightY ? this._rangeRightY : g;
        if (
          (v + u >= _ && (v = _ - u),
          this._htmlElement.find('.g-menu-arrow').remove(),
          GMenuCloseEvent && s)
        ) {
          const e = $('<div/>').addClass('g-menu-arrow').prependTo(this._htmlElement);
          let t = h.width / 2 - 14;
          (t < 0 && (y - 14 > 0 ? ((y -= 14), (t += 14)) : e.remove()),
            e.css('left', ''.concat(t, 'px')));
        }
        switch ((this._htmlElement.css('left', y), this._htmlElement.css('top', v), t)) {
          case r.Position.Left_Top:
            this._htmlElement.addClass('g-menu-left');
            break;
          case r.Position.Right_Bottom:
            this._htmlElement.addClass('g-menu-right');
        }
        switch (n) {
          case r.Position.Left_Top:
            this._htmlElement.addClass('g-menu-top');
            break;
          case r.Position.Right_Bottom:
            this._htmlElement.addClass('g-menu-bottom');
        }
      }
    }

    close() {
      this.isOpen() &&
        this._htmlElement.parent().is('body') &&
        (this.closeMenus(true),
        this._htmlElement.removeClass('g-menu-left g-menu-right g-menu-top g-menu-bottom'),
        this._htmlElement.detach(),
        this === GMenuManager._activeMenu && GMenuManager.setActiveMenu(null, true),
        this.trigger(GMenuCloseEvent.EVENT));
    }

    setTouchMode(e) {
      this._htmlElement.toggleClass('g-touch', !!e);
    }

    closeMenus() {
      let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
      for (var module = 0; module < this.getItemCount(); ++module) {
        var require = this.getItem(module);
        require instanceof s &&
          require.getType() === s.Type.Menu &&
          (!require.isForcedAsOpened() || exports) &&
          require.getMenu().close();
      }
    }

    _mouseOver(e) {
      this._hovered = true;
    }

    _mouseOut(e) {
      ((this._hovered = false),
        this.isSubMenu() &&
          setTimeout(
            function () {
              this.isHovered(true) || this.closeMenus();
            }.bind(this),
            150
          ));
    }

    getHtmlElement() {
      return this._htmlElement;
    }

    detach() {
      (this.closeMenus(true),
        this._htmlElement.find('.g-hover').removeClass('g-hover'),
        this._htmlElement.removeClass('g-menu-root'),
        this._htmlElement.detach(),
        (this._parent = null));
    }

    addClass(e) {
      this._htmlElement.addClass(e);
    }

    setActiveRangeSize(e, t, n, GCore) {
      ((this._rangeLeftX = e),
        (this._rangeLeftY = t),
        (this._rangeRightX = this._rangeLeftX + GCore),
        (this._rangeRightY = this._rangeLeftY + n));
    }

    toString() {
      return '[Object GMenu]';
    }

    setEnabled(e) {
      ['file', 'edit', 'modify', 'view'].forEach((t) => {
        $(
          '.g-menu-item-menu:contains("'.concat(
            GCore.GLocale.get(new GCore.GLocaleKey('GCategory', 'category.'.concat(t))),
            '")'
          )
        )
          [e ? 'removeClass' : 'addClass']('g-disabled')
          [e ? 'on' : 'off']('click');
      });
    }

  }
  exports.exports = u;
}