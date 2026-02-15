/**
 * Webpack Module #1662
 * Type: class
 * Name: GLibrarySidebar
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
    GSidebar = require(806) /* GSidebar */,
    GSidebarContainer = require(395) /* GSidebarContainer */,
    GLibraryAssetsPanel = require(1663) /* GLibraryAssetsPanel */,
    GCloudStorage = require(119);
  const GNetworkAvailabilityChangedEvent = require(291);
  class u extends GSidebar {
    constructor() {
      super();
      GSidebar.call(this);
    }

    _initialized = false;
    _libraryPanel = null;
    _libraryPanelInstance = null;
    _htmlElement = null;

    getId() {
      return u.ID;
    }

    getTitle() {
      return u.TITLE;
    }

    isEnabled() {
      return GCloudStorage.isOnline();
    }

    isVisible() {
      return !!gDesigner.getApplicationManager().isEditingEnabled();
    }

    getOrientation() {
      return GSidebarContainer.Orientation.Left;
    }

    getMinimumWidth() {
      return 250;
    }

    getDefaultWidth() {
      return 250;
    }

    isResizeable() {
      return true;
    }

    resize() {
      this._libraryPanelInstance.resize();
    }

    relayout() {
      (this._libraryPanel && !this._libraryPanel.hasClass('unavailable')) ||
        !this.isEnabled() ||
        this._addLibraryPanel(this._htmlElement);
    }

    init(e) {
      (GSidebar.prototype.init.call(this, e),
        (this._htmlElement = e),
        this._addLibraryPanel(e),
        $(document).on(
          'networkAvailable',
          function () {
            this.relayout();
            var e = gDesigner.getLeftSidebars(),
              t = e.getActiveSidebar();
            t === this.getId() && e.setSidebarEnabled(t, this.isEnabled());
          }.bind(this)
        ),
        gDesigner.addEventListener(
          GNetworkAvailabilityChangedEvent,
          this._networkAvailabilityChangedEvent,
          this
        ));
    }

    _networkAvailabilityChangedEvent(e) {
      (this._libraryPanel.toggleClass('offline', !e.connected),
        this._initialized || this._addLibraryPanel(this._htmlElement));
    }

    _addLibraryPanel(e) {
      (this._libraryPanel ||
        ($('<div></div>')
          .addClass('toolbar library-toolbar g-touch-only')
          .append(
            $('<label/>').text(GCore.GLocale.get(new GCore.GLocaleKey('GLibrarySidebar', 'title')))
          )
          .appendTo(e),
        (this._libraryPanel = $('<div/>')
          .append(
            $('<div/>')
              .addClass('overlay')
              .append(
                $('<div/>')
                  .addClass('box')
                  .append(
                    $('<span/>').text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GOfflineDialog', 'title.unavailable-feature')
                      )
                    )
                  )
              )
          )
          .addClass('library-container')
          .css('overflow', 'auto')
          .appendTo(e))),
        this._libraryPanel.toggleClass('offline', gDesigner.isOffline()),
        GCloudStorage.isOnline()
          ? (this._libraryPanel.hasClass('unavailable') &&
              (this._libraryPanel.removeClass('unavailable'), this._libraryPanel.empty()),
            gDesigner.isOffline() ||
              ((this._libraryPanelInstance = new GLibraryAssetsPanel(this._libraryPanel)),
              (this._initialized = true)))
          : (this._libraryPanel.addClass('unavailable'),
            $('<span/>')
              .addClass('span-unavailable')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLibrarySidebar', 'text.connect')))
              .appendTo(this._libraryPanel)));
    }

    getTouchTools() {
      return [
        new GTouchTool.default({
          id: 'libraries',
          sidebar: this.getId(),
          icon: 'gravit-icon-touch-libraries-panel',
          panel: '.library-container',
        }),
      ];
    }

    toString() {
      return '[Object GLibrarySidebar]';
    }

    static ID = 'library';

    static TITLE = new GCore.GLocaleKey('GLibrarySidebar', 'title');

  }
  exports.exports = u;
}