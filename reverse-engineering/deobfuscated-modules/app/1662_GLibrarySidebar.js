/**
 * Webpack Module #1662
 * Type: class
 * Name: GLibrarySidebar
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
      GSidebar = require(806) /* GSidebar */,
      GSidebarContainer = require(395) /* GSidebarContainer */,
      GLibraryAssetsPanel = require(1663) /* GLibraryAssetsPanel */,
      GCloudStorage = require(119) /* GCloudStorage */;
    const GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */;
    function u() {
      GSidebar.call(this);
    }
    GCore.GObject.inherit(u, GSidebar),
      (u.ID = "library"),
      (u.TITLE = new GCore.GLocaleKey("GLibrarySidebar", "title")),
      (u.prototype._initialized = false),
      (u.prototype._libraryPanel = null),
      (u.prototype._libraryPanelInstance = null),
      (u.prototype._htmlElement = null),
      (u.prototype.getId = function () {
        return u.ID;
      }),
      (u.prototype.getTitle = function () {
        return u.TITLE;
      }),
      (u.prototype.isEnabled = function () {
        return GCloudStorage.isOnline();
      }),
      (u.prototype.isVisible = function () {
        return !!gDesigner.getApplicationManager().isEditingEnabled();
      }),
      (u.prototype.getOrientation = function () {
        return GSidebarContainer.Orientation.Left;
      }),
      (u.prototype.getMinimumWidth = function () {
        return 250;
      }),
      (u.prototype.getDefaultWidth = function () {
        return 250;
      }),
      (u.prototype.isResizeable = function () {
        return true;
      }),
      (u.prototype.resize = function () {
        this._libraryPanelInstance.resize();
      }),
      (u.prototype.relayout = function () {
        (this._libraryPanel && !this._libraryPanel.hasClass("unavailable")) ||
          !this.isEnabled() ||
          this._addLibraryPanel(this._htmlElement);
      }),
      (u.prototype.init = function (e) {
        GSidebar.prototype.init.call(this, e),
          (this._htmlElement = e),
          this._addLibraryPanel(e),
          $(document).on(
            "networkAvailable",
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
          );
      }),
      (u.prototype._networkAvailabilityChangedEvent = function (e) {
        this._libraryPanel.toggleClass("offline", !e.connected),
          this._initialized || this._addLibraryPanel(this._htmlElement);
      }),
      (u.prototype._addLibraryPanel = function (e) {
        this._libraryPanel ||
          ($("<div></div>")
            .addClass("toolbar library-toolbar g-touch-only")
            .append(
              $("<label/>").text(
                GCore.GLocale.get(new GCore.GLocaleKey("GLibrarySidebar", "title"))
              )
            )
            .appendTo(e),
          (this._libraryPanel = $("<div/>")
            .append(
              $("<div/>")
                .addClass("overlay")
                .append(
                  $("<div/>")
                    .addClass("box")
                    .append(
                      $("<span/>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GOfflineDialog",
                            "title.unavailable-feature"
                          )
                        )
                      )
                    )
                )
            )
            .addClass("library-container")
            .css("overflow", "auto")
            .appendTo(e))),
          this._libraryPanel.toggleClass("offline", gDesigner.isOffline()),
          GCloudStorage.isOnline()
            ? (this._libraryPanel.hasClass("unavailable") &&
                (this._libraryPanel.removeClass("unavailable"),
                this._libraryPanel.empty()),
              gDesigner.isOffline() ||
                ((this._libraryPanelInstance = new GLibraryAssetsPanel(this._libraryPanel)),
                (this._initialized = true)))
            : (this._libraryPanel.addClass("unavailable"),
              $("<span/>")
                .addClass("span-unavailable")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GLibrarySidebar", "text.connect")
                  )
                )
                .appendTo(this._libraryPanel));
      }),
      (u.prototype.getTouchTools = function () {
        return [
          new GTouchTool.default({
            id: "libraries",
            sidebar: this.getId(),
            icon: "gravit-icon-touch-libraries-panel",
            panel: ".library-container",
          }),
        ];
      }),
      (u.prototype.toString = function () {
        return "[Object GLibrarySidebar]";
      }),
      (exports.exports = u);
  }