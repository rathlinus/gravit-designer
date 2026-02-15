/**
 * Webpack Module #1543
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(168) /* polyfill_Array_reduce */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(169) /* stub_requires_683 */;
    const GFitAllAction = require(449) /* GFitAllAction */,
      GFitSelectionAction = require(566) /* GFitSelectionAction */,
      GSaveAction = require(447) /* GSaveAction */,
      GUndoAction = require(1171) /* GUndoAction */,
      GMagnificationAction = require(1167) /* GMagnificationAction */,
      GOpenAction = require(813) /* GOpenAction */,
      GGravitCloudAction = require(448) /* GGravitCloudAction */,
      GSaveAsAction = require(445) /* GSaveAsAction */,
      GCloudSynchronizationAction = require(1293) /* GCloudSynchronizationAction */,
      GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      barrel_panels = require(257) /* barrel_panels */,
      GContainer = require(85) /* GContainer */,
      { GSystem: m, GMath: y } = require(1) /* GCore */,
      { FILE_FORMATS: v } = require(10) /* AppSettings */;
    exports.exports = function (e) {
      (e.prototype._windowButton = null),
        (e.prototype._nativeButton = null),
        (e.prototype._touchSection = null),
        (e.prototype._updateTouchUI = function () {
          this._touchSection ||
            (this._touchSection = this._createTouchSection().prependTo(
              this._htmlElement
            )),
            this._windowButton ||
              (this._windowButton = this._createWindowButton()
                .hide()
                .insertBefore(this._exportButton)),
            this._nativeButton ||
              (gContainer.getRuntime() === GContainer.Runtime.Electron &&
                m.operatingSystem !== m.OperatingSystem.OSX_IOS &&
                (this._nativeButton = this._createNativeButton().appendTo(
                  this._htmlElement.find(".export-section")
                )));
          !gDesigner.getApplicationManager().isEditingEnabled()
            ? this._updateTouchSimpleUI()
            : this._updateTouchFullUI(),
            this._updateActiveWindow(),
            this._updateZoomFromWindow(true),
            this._updateActions(),
            this._updateContextTools(),
            this._updateViewBasedOnPermissions();
        }),
        (e.prototype._updateViewBasedOnPermissions = function () {
          this._windowButton &&
            (gDesigner.getApplicationManager().isDocumentTabManagementEnabled()
              ? this._windowButton.show()
              : this._windowButton.hide());
        }),
        (e.prototype._updateTouchFullUI = function () {
          this._htmlElement.find(".menu-section > .zoom-button").length ||
            (this._touchZoomButton && (this._touchZoomButton = null),
            this._initTouchZoomButton(),
            this._touchZoomButton.insertBefore(".menu-section > .snap-button"));
        }),
        (e.prototype._updateTouchSimpleUI = function () {
          this._updateTouchZoomButtonSimpleUI(),
            this._updateZoomFromWindow(true),
            this._updateTouchPageButton();
        }),
        (e.prototype._updateTouchZoomButtonSimpleUI = function () {
          const e = this._htmlElement.find(".view-section > .zoom-button");
          e.is(this._touchZoomButton) ||
            ((this._touchZoomButton = null),
            this._initTouchZoomButton(),
            e.replaceWith(this._touchZoomButton));
        }),
        (e.prototype._updateTouchPageButton = function () {
          this._pageButton &&
            (this._pageButton.gPageButton("reinit"),
            this._pageButton.addClass("dropdown"));
        }),
        (e.prototype._initTouchZoomButton = function () {
          const e = $("<button />")
              .addClass("dropdown-button")
              .append($("<span></span>").addClass("gravit-icon-down")),
            module = new GMenu(undefined, "g-zoom-menu");
          this._touchZoomButton = $("<div/>")
            .addClass("zoom-button")
            .addClass("toolbar-button")
            .addClass("action-button")
            .addClass("g-menu-button")
            .addClass("dropdown")
            .append(
              $("<div />")
                .addClass("action-button")
                .append($("<span />").addClass("caption").text("100%"))
            )
            .append(e)
            .gMenuButton({
              menu: () => (
                module.clearItems(),
                [
                  gDesigner.getAction(GFitAllAction.ID),
                  gDesigner.getAction(GFitSelectionAction.ID),
                  gDesigner.getAction("".concat(GMagnificationAction.ID, ".50")),
                  gDesigner.getAction("".concat(GMagnificationAction.ID, ".100")),
                  gDesigner.getAction("".concat(GMagnificationAction.ID, ".200")),
                  gDesigner.getAction("".concat(GMagnificationAction.ID, ".400")),
                ].reduce((e, t) => (e.createAddItem(t), e), module)
              ),
              getActiveItem: () => {
                var e = gDesigner.getWindows().getActiveWindow(),
                  n = 100 * (e && e.getView()).getZoom(),
                  GFitAllAction = n && y.round(n, false, 0),
                  GFitSelectionAction = GFitAllAction && gDesigner.getAction("".concat(GMagnificationAction.ID, ".").concat(GFitAllAction)),
                  GSaveAction = GFitSelectionAction && GFitSelectionAction.getTitle();
                return GSaveAction && module.findItem(GSaveAction);
              },
              reference: e,
            });
        }),
        (e.prototype._getTouchMenubarIcon = function () {
          return gContainer.getRuntime() === GContainer.Runtime.IPad
            ? "gravit-icon-touch-menubar-ipad"
            : "gravit-icon-touch-menubar";
        }),
        (e.prototype._createTouchSection = function () {
          return (
            this._touchZoomButton || this._initTouchZoomButton(),
            $("<div></div>")
              .addClass("section menu-section g-touch-only")
              .append(
                this._createLabelButton({
                  icon: this._getTouchMenubarIcon(),
                  menu: () => {
                    const e = gDesigner.getMainMenu();
                    return e.detach(), e;
                  },
                }).addClass("menubar-toolbar-button")
              )
              .append(
                this._createLabelButton({
                  icon: "gravit-icon-open",
                  split: true,
                  menu: () => this._createOpenMenu(),
                  click: () => gDesigner.executeAction(GOpenAction.ID),
                }).addClass("open-toolbar-button")
              )
              .append(this._createSaveButtonGroup())
              .append(
                this._createLabelButton({
                  action: gDesigner.getAction(GUndoAction.ID),
                  icon: "gravit-icon-undo",
                  split: true,
                  menu: () => this._createQuickHistoryUndoRedoMenu(),
                  click: () => gDesigner.executeAction(GUndoAction.ID),
                }).addClass("undo-toolbar-button")
              )
              .append(this._touchZoomButton)
              .append(this._createSnapButton())
          );
        }),
        (e.prototype._createSaveButtonGroup = function () {
          const e = gDesigner.getAction(GSaveAction.ID);
          return this._createLabelButton({
            icon: "gravit-icon-save",
            split: true,
            menu: [
              gDesigner.getAction(
                "".concat(GSaveAsAction.ID, ".").concat(v.find((e) => e.default).ext)
              ),
              gDesigner.getAction(
                "".concat(GGravitCloudAction.ID, ".").concat(GGravitCloudAction.Actions.SaveAs)
              ),
              gDesigner.getAction(GCloudSynchronizationAction.ID),
            ].reduce((e, t) => (e.createAddItem(t), e), new GMenu()),
            click: () => gDesigner.executeAction(GSaveAction.ID),
          })
            .addClass("save-toolbar-button")
            .attr("data-action", e.getId())
            .data("action", e);
        }),
        (e.prototype._createWindowButton = function () {
          const e = new GMenu();
          return this._createLabelButton({
            caption: " ",
            menu: () => {
              e.clearItems();
              const module = gDesigner.getWindows();
              return module
                .getWindows()
                .reduce(
                  (e, n) => (this._createAndAppendWindowTabToMenu(module, e, n), e),
                  e
                );
            },
            getActiveItem: () => this._findActiveWindowItemInMenu(e),
          })
            .addClass("window-button")
            .addClass("g-touch-only");
        }),
        (e.prototype._createAndAppendWindowTabToMenu = function (e, t, n) {
          const GFitAllAction = this._getWindowTitle(n),
            GFitSelectionAction = t.createAddItem(GFitAllAction, () => {
              e.activateWindow(n, true);
            });
          GFitSelectionAction.setDetachable(true),
            GFitSelectionAction.addEventListener(GMenu2.DetachEvent, () => {
              e.removeWindow(n);
            });
          const GSaveAction = n.getDocument();
          GSaveAction &&
            (GSaveAction.isCloudFile() || GSaveAction.isExternalFile()) &&
            GFitSelectionAction.setIcon(barrel_panels["gravit-icon-cloud"]);
        }),
        (e.prototype._findActiveWindowItemInMenu = function (e) {
          const module = gDesigner.getWindows(),
            require = module && module.getActiveWindow(),
            GFitAllAction = this._getWindowTitle(require);
          return GFitAllAction && e.findItem(GFitAllAction);
        }),
        (e.prototype._createNativeButton = function () {
          const e = (e) =>
            $("<button/>")
              .addClass("native-button")
              .append($("<span/>").addClass(e));
          return this._createLabelButton({
            caption: "",
            icon: "gravit-icon-3-dots",
            click: (t) => {
              $("<div/>")
                .append(
                  $("<div/>")
                    .addClass("container")
                    .append(
                      e("gravit-icon-minimize").on("click", () =>
                        gContainer.minimizeWindow()
                      )
                    )
                    .append(
                      e("gravit-icon-maximize").on("click", () =>
                        gContainer.maximizeWindow()
                      )
                    )
                    .append(
                      e("gravit-icon-close").on("click", () =>
                        gContainer.closeWindow()
                      )
                    )
                )
                .gOverlay({
                  releaseOnClose: true,
                  clazz: "g-toolbar-native-button-overlay",
                })
                .gOverlay("open", $(t.target));
            },
          })
            .addClass("native-button")
            .addClass("g-touch-only");
        }),
        (e.prototype._updateActiveWindow = function () {
          if (gDesigner.isTouchEnabled() && this._windowButton)
            if (
              gDesigner.getApplicationManager().isDocumentTabManagementEnabled()
            ) {
              const GFitAllAction =
                gDesigner.getWindows() &&
                gDesigner.getWindows().getActiveWindow();
              if (GFitAllAction) {
                const GFitSelectionAction = GFitAllAction.getDocument();
                var e = this._getWindowTitle(GFitAllAction),
                  module = "..." + e.substr(e.length - 3);
                const GSaveAction = this._windowButton
                  .show()
                  .toggleClass("syncing", GFitSelectionAction && GFitSelectionAction.isSynchronizing())
                  .find(".action-button .caption")
                  .text(e);
                this._windowButton.find(".subicon").remove(),
                  this._windowButton.find(".ending").remove();
                var require = GSaveAction[0].offsetWidth < GSaveAction[0].scrollWidth;
                this._windowButton.toggleClass("text-overflow", require),
                  require &&
                    $("<span/>")
                      .addClass("ending")
                      .attr("data-ending", module)
                      .insertBefore(
                        this._windowButton.find(".gravit-icon-down")
                      ),
                  this._windowButton.find(".subicon").remove(),
                  GFitSelectionAction &&
                    (GFitSelectionAction.isCloudFile() || GFitSelectionAction.isExternalFile()) &&
                    $("<span/>")
                      .addClass("subicon")
                      .addClass(barrel_panels["gravit-icon-cloud-window"])
                      .insertBefore(
                        this._windowButton.find(".gravit-icon-down")
                      );
              } else this._windowButton.hide();
            } else this._windowButton.hide();
        }),
        (e.prototype._getWindowTitle = function (e) {
          const module = e && e.getDocument();
          return (
            e &&
            ""
              .concat(e.getTitleWithExtension())
              .concat(module && module.isModified() ? "*" : "")
          );
        });
    };
  }