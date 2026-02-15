/**
 * Webpack Module #1300
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(596) /* polyfill_Array_reverse */,
      require(328) /* polyfill_Array_sort */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(71) /* polyfill_String_includes */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GContainer = _interopRequireDefault(require(85) /* GContainer */),
      s = require(858) /* Exports_GFilesPanel */,
      CloudException = _interopRequireDefault(require(802) /* CloudException */),
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GUserModel = _interopRequireDefault(require(177) /* GUserModel */),
      AppSettings = require(10) /* AppSettings */,
      AppError = _interopRequireDefault(require(355) /* AppError */),
      AppSettings2 = require(519) /* AppSettings */;
    const GCloudFolderItem = require(1548) /* GCloudFolderItem */,
      m = require(1166) /* module_1166 */,
      y = require(1549) /* module_1549 */,
      GEvent_type_1174 = require(1174) /* GEvent_type_1174 */;
    let _ = null;
    const b = function (e, t) {
      (this.panel = e),
        (this.filesPanel = t),
        (this._cloudFolders = []),
        (this._permissions = [
          b.Permission.CreateFolder,
          b.Permission.RecentFilesShowMore,
        ]),
        (this._bindedHandleShortcut = this.handleShortcut.bind(this)),
        gDesigner.getUser().then((e) => {
          this._user = e;
        }),
        (this._isLoadingFolders = false),
        ((gContainer.getRuntime() === GContainer.default.Runtime.Electron &&
          GCore.GSystem.operatingSystem === GCore.GSystem.OperatingSystem.Windows) ||
          GCore.GSystem.operatingSystem === GCore.GSystem.OperatingSystem.Unix) &&
          this.panel.closest(".g-dialog-container").addClass("cross-controls");
    };
    (b.prototype.filesPanel = null),
      (b.prototype._cloudFolders = null),
      (b.prototype._isLoadingFolders = false),
      (b.prototype._fileInfoPanel = null),
      (b.prototype._rightSide = null),
      (b.prototype._user = null),
      (b.prototype._contextMenu = null),
      (b.prototype._downloadContextMenu = null),
      (b.prototype._fileInfoPanelIsOpen = false),
      (b.prototype._fileTypeFilterButton = null),
      (b.prototype._sortButton = null),
      (b.prototype._loadFoldersOnDemand = async function () {
        if (!this._isLoadingFolders) {
          this._isLoadingFolders = true;
          try {
            const e = this._cloudFolders
              .filter((e) => e.isStateOpen() && !e.isDone())
              .map((e) =>
                e.loadChildrenOnDemand((t, n, _interopRequireDefault) =>
                  this.filesPanel.drive
                    .fetchFolders(this.filesPanel.getSort(), t, n, _interopRequireDefault)
                    .then((t) => t.map((t) => this._factoryFolder(t, e)))
                )
              );
            e.length && (await Promise.all(e));
          } finally {
            this._isLoadingFolders = false;
          }
        }
      }),
      (b.prototype._factoryFolder = function (e, t) {
        var n = this;
        e = this.filesPanel.updateCloudItemForUserPermission(e);
        var _interopRequireDefault = this.filesPanel.isItemSelected(e),
          GCore = this.filesPanel.isItemInClipboard(e),
          GContainer = false,
          s = new GCloudFolderItem(e, t, this.filesPanel.drive.isRootFolder(e))
            .onClick((e, t) => {
              GEditor.GPlatform.modifiers.metaKey
                ? this.filesPanel.manageSelection(e, t)
                : this.filesPanel.drive.getCurrentFolder() !== e &&
                  (this.filesPanel.handleFolderClick(e, t),
                  "shared_files_with_me" === e.id
                    ? this.hideFileTypeFilterButton()
                    : this.displayFileTypeFilterButton()),
                n._closeFileInfoPanel();
            })
            .onDoubleClick(() => {
              s.getChildren() && s.getChildren().length
                ? s.toggleState()
                : GUserModel().then(() => s.toggleState());
            })
            .onContext(function (e, t, _interopRequireDefault) {
              gDesigner.stats("filespanel-view_context_cloudfolder"),
                n.resetSelection(),
                n._addToSelection(t),
                n._openContextMenuForEventPosition(_interopRequireDefault);
            })
            .onFileDrop((e, t) => {
              this.filesPanel.performFileMove(e, t);
            })
            .setRefreshHandler(GUserModel)
            .onFolderStateClick(() => {
              GUserModel().then(() => {
                if (
                  (s.toggleState(), !s.isRootFolder() && !GContainer && s.isStateOpen())
                ) {
                  var e = s.getChildren();
                  e && e.length && ((GContainer = true), e.forEach((e) => e.refresh()));
                }
              });
            });
        this._cloudFolders.push(s);
        const CloudException = this.filesPanel.drive.isRootFolder(e),
          GSystemDialog = t && this.filesPanel.drive.isRootFolder(t.getFolder());
        var CollaborationMergeUtils;
        function GUserModel() {
          return s.isLoading() || (s.getChildren() && s.getChildren().length)
            ? CollaborationMergeUtils || Promise.resolve()
            : (s.setLoading(true),
              (CollaborationMergeUtils = n.filesPanel.drive
                .fetchFolders(n.filesPanel.getSort(), e)
                .then((t) => {
                  s.setLoading(false),
                    s.setChildren(t.map((e) => n._factoryFolder(e, s))),
                    s.update();
                  const _interopRequireDefault = n.filesPanel.drive.getCurrentFolder();
                  if ((_interopRequireDefault && "id" in _interopRequireDefault && _interopRequireDefault.id === e.id) || _interopRequireDefault === e) {
                    n.manageOpenFolder(null, e, s);
                    let t = s;
                    do {
                      t.isStateOpen() || t.toggleState();
                    } while ((t = t.getParent()));
                  }
                })
                .catch(
                  (e) => (
                    console.log(e && e.stack, e),
                    n.toggleLoading(false),
                    s.setLoading(false),
                    Promise.reject(e)
                  )
                )));
        }
        return (
          (CloudException || GSystemDialog || this.filesPanel.drive.containsInPreviousPath(e)) &&
            (CloudException && this.filesPanel.drive.resetPreviousSelectedFolderPath(),
            this.filesPanel.drive.removeLoadedFolderFromPreviousPath(e),
            GUserModel()),
          CloudException && s.toggleState(),
          s
            .getHTMLElement()
            .addClass(_interopRequireDefault ? "selected" : "")
            .addClass(GCore ? "cut" : ""),
          s
        );
      }),
      (b.prototype.navigateToFolder = async function (e) {
        try {
          const GCloudFolderItem = this.filesPanel.drive;
          this.toggleLoading(true),
            (e = "string" == typeof e ? await GCloudFolderItem.getFolder(e) : e);
          var module = async (e, t) => {
            this.filesPanel.navigateToFolder(e);
            for (
              var require = this._cloudFolders.find((t) => t.getFolder().id === e.id),
                _interopRequireDefault = 0;
              !(
                require ||
                (await (0, CollaborationMergeUtils.sleep)(100),
                (require = this._cloudFolders.find((t) => t.getFolder().id === e.id)),
                ++_interopRequireDefault > 30)
              );

            );
            if ((this.manageOpenFolder(null, e, require), require)) {
              var GCore = require.getHTMLContainer();
              0 === GCore[0].offsetTop && t && (GCore = t.getHTMLContainer()),
                setTimeout(() => {
                  this.panel
                    .find(".g-left-side")
                    .animate({ scrollTop: $(GCore).position().top }, 150);
                });
            }
          };
          if (
            (e.family === AppSettings.EXTERNAL_APP.ONEDRIVEBUSINESS &&
              (GCloudFolderItem.isRootFolder(e) || GCloudFolderItem.isRootFolder(e.parent))) ||
            GCloudFolderItem.isRootFolder(e.relativeUrl ? e.relativeUrl : e.parent)
          )
            module(e);
          else {
            for (var require, _interopRequireDefault = [e], GCore = e, GEditor = false; !require; )
              if (
                (GCore = await GCloudFolderItem
                  .getFolder(GCore.parent)
                  .catch(
                    (t) => (
                      t.status === AppSettings.gApi.HTTP_STATUS_CODES.NOT_FOUND &&
                        GCore.id === e.id &&
                        (GEditor = true),
                      null
                    )
                  ))
              ) {
                if ((_interopRequireDefault.push(GCore), _interopRequireDefault.length > AppSettings2.MAX_FOLDER_DEPTH_FOR_CLOUD))
                  return Promise.reject(AppSettings.gApi.HTTP_STATUS_CODES.NOT_FOUND);
                GCloudFolderItem.isRootFolder(GCore.parent) && (require = true);
              } else {
                if (GEditor)
                  return Promise.reject(AppSettings.gApi.HTTP_STATUS_CODES.NOT_FOUND);
                require = true;
              }
            var GContainer = _interopRequireDefault.reverse(),
              s = this._cloudFolders,
              CloudException = null,
              GSystemDialog = null,
              GUserModel = null;
            for (CloudException = GSystemDialog = GContainer.shift(); CloudException; ) {
              GUserModel = s.find((e) => e.getFolder().id === CloudException.id);
              for (
                var AppError = 0;
                !(
                  GUserModel ||
                  (await (0, CollaborationMergeUtils.sleep)(100),
                  (GUserModel = s.find((e) => e.getFolder().id === CloudException.id)),
                  ++AppError > 300)
                );

              );
              GUserModel
                ? (await GUserModel.refresh(),
                  (s = GUserModel.getChildren()),
                  GUserModel.toggleState(),
                  (CloudException = GContainer.shift()) ? (GSystemDialog = CloudException) : module(GSystemDialog, GUserModel))
                : (CloudException = null);
            }
          }
          this.toggleLoading(false);
        } catch (e) {
          return this.toggleLoading(false), e;
        }
      }),
      (b.prototype.relayout = function () {
        this.initLayout(true);
      }),
      (b.prototype.hasPermission = function (e) {
        return this._permissions.includes(e);
      }),
      (b.prototype._handleDriveEvent = function (e) {
        e.type === CloudException.default.DriveEvent.Type.FileDeleted &&
          this._getFileInfoPanelFileId() === e.data.id &&
          this._closeFileInfoPanel();
      }),
      (b.prototype._getFileInfoPanelFileId = function () {
        return $(".g-file-detail-container").data("fileId");
      }),
      (b.prototype._registerDriveEvent = function () {
        gDesigner.addEventListener(
          CloudException.default.DriveEvent,
          this._handleDriveEvent,
          this
        );
      }),
      (b.prototype.initLayout = function (e) {
        window.addEventListener("keydown", this._bindedHandleShortcut, true),
          this._registerDriveEvent();
        var t = this;
        "native" ===
          this.filesPanel.getCloudSettingsById(
            this.filesPanel.getCurrentDriveId()
          ).type && this.panel.addClass("native-cloud"),
          e && (this.panel.off("click", _), this.panel.empty()),
          this.createTopBar(this.filesPanel.getUser()),
          this.panel
            .find(".g-files-top-buttons")
            .toggleClass(
              "g-cdgs",
              !this.filesPanel.getUISettings().dialogControls
            ),
          this.panel
            .find(".g-files-top-account")
            .toggleClass(
              "g-cdgs",
              !this.filesPanel.getUISettings().dialogControls
            );
        var n = $("<div />").addClass("g-items-container");
        this.addSearchBar(n);
        var _interopRequireDefault = $("<div />").addClass("g-main").appendTo(n);
        const GEditor = (0, CollaborationMergeUtils.throttle)(this._loadFoldersOnDemand.bind(this), 100);
        let GContainer = 0;
        var s = $("<div />")
          .addClass("g-left-side")
          .scroll((e) => {
            if (t.filesPanel.drive.isLoadFoldersOnDemandSupported()) {
              const t = $(e.target).scrollTop();
              t > GContainer && GEditor(), (GContainer = t);
            }
          })
          .appendTo(_interopRequireDefault);
        (this._rightSide = $("<div />")
          .addClass("g-right-side")
          .on("contextmenu", (e) => {
            t.resetSelection(), t._openContextMenuForEventPosition(e);
          })
          .appendTo(_interopRequireDefault)),
          (this._fileInfoPanel = b._createFileInfoPanel()),
          this._fileInfoPanel.appendTo(_interopRequireDefault);
        var CloudException = $("<div />").addClass("g-folders-list").addClass("main"),
          GSystemDialog = $("<div />")
            .addClass("g-folders-list")
            .addClass("fixed-bottom")
            .addClass("custom-folders"),
          GUserModel = $("<div/>").addClass("g-files-list"),
          AppSettings = $("<div/>").addClass("g-empty-panel").hide();
        const AppError = $("<div/>").addClass("g-example-files-list").hide(),
          AppSettings2 = $("<div/>").addClass("g-recent-files-list");
        (_ = function (e) {
          e.stopPropagation(),
            t.filesPanel.getSelection().length &&
              (t.resetSelection(),
              t._updateFileInfoPanel(null),
              gDesigner.stats("filespanel-view_clear_selection"));
        }),
          this.panel.on("click", _);
        const GCloudFolderItem = (0, CollaborationMergeUtils.debounce)(
          () => this.filesPanel.buildDepth(false, false),
          100
        );
        $(this._rightSide).scroll(
          function (e) {
            var t = $(e.currentTarget);
            Math.floor(t[0].scrollHeight - t.scrollTop()) ===
              Math.floor(t.outerHeight()) &&
              $(GUserModel).children().length > 0 &&
              GCloudFolderItem();
          }.bind(this)
        ),
          this.createHeader(this.panel),
          n.appendTo(this.panel),
          CloudException.appendTo(s),
          GSystemDialog.appendTo(s),
          $("<div />")
            .addClass("g-files-top-line g-recent-files")
            .attr(
              "data-title",
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "text.title-recent-files")
              )
            )
            .appendTo(this._rightSide),
          AppSettings.appendTo(this._rightSide),
          AppError.appendTo(this._rightSide),
          AppSettings2.appendTo(this._rightSide);
        const m = $("<div />")
          .addClass("g-files-top-line g-all-files")
          .addClass("g-recent-files-separator")
          .attr(
            "data-title",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.title-all-files")
            )
          )
          .hide()
          .appendTo(this._rightSide);
        this.hasPermission(b.Permission.RecentFilesShowMore) &&
          m.append(
            $("<div />")
              .addClass("g-recent-files-show-more")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanelViewBase", "text.show-more")
                )
              )
              .on("click", function () {
                AppSettings2.addClass("extended-list"), $(this).hide(), t.updateLayout();
              })
              .on("mouseover", function (e) {
                e.stopPropagation(), e.preventDefault();
              })
          ),
          GUserModel.appendTo(this._rightSide),
          this.createFooter(this.filesPanel.getDefaultFilename()),
          this._permissionChanged();
      }),
      (b.prototype.updateLayout = function () {
        const exports = this.panel.find(".g-files-list");
        if (exports.hasClass("list-view")) {
          const t = (e, t) => {
            let require, _interopRequireDefault, GCore;
            ({
              columnsAmount: _interopRequireDefault,
              total: require,
              totalRows: GCore,
            } = this._getGridData(e)),
              t && e.css("max-height", "");
            const GEditor = e.hasClass("extended-list");
            if (!require) return void e.addClass("single-row");
            if (!_interopRequireDefault || isNaN(_interopRequireDefault)) return;
            const GContainer = GEditor ? 6 : 2;
            t && !GEditor && GCore > 2
              ? this.panel.find(".g-recent-files-show-more").show()
              : this.panel.find(".g-recent-files-show-more").hide(),
              t && GCore > GContainer && (GCore = GContainer),
              1 === GCore ? e.addClass("single-row") : e.removeClass("single-row"),
              e.find(".g-gravit-file").each(function (e) {
                1 !== GCore &&
                  $(this).toggleClass(
                    "last-row-file",
                    (function (e) {
                      return e >= (GCore - 1) * _interopRequireDefault;
                    })(e)
                  );
              });
          };
          t(exports), t(this.panel.find(".g-recent-files-list"), true);
        } else {
          const e = this.panel.find(".g-recent-files-list"),
            t = e.hasClass("extended-list"),
            { totalRows: require, firstHeight: _interopRequireDefault } = this._getGridData(e);
          if (require > 1 && !t) {
            const t = _interopRequireDefault + 10;
            e.css("max-height", t + "px");
          } else e.css("max-height", "1000px");
        }
        this._updateContextMenu();
      }),
      (b.prototype._updateContextMenu = function () {
        this._setContextMenuActiveRangeSize();
      }),
      (b.prototype._getGridData = function (e) {
        const module = e.find(".g-gravit-file"),
          require = module.length,
          _interopRequireDefault = module.eq(0).width(),
          GCore = module.eq(0).height();
        let GEditor = 1;
        _interopRequireDefault && !isNaN(_interopRequireDefault) && (GEditor = Math.floor(e.width() / _interopRequireDefault));
        return {
          total: require,
          totalRows: require % GEditor > 0 ? Math.floor(require / GEditor) + 1 : Math.floor(require / GEditor),
          columnsAmount: GEditor,
          firstHeight: GCore,
        };
      }),
      (b.prototype.toggleLoading = function (e) {
        e
          ? this.panel
              .closest(".g-dialog-content")
              .find(".cloud-frame")
              .addClass("loading")
          : this.panel
              .closest(".g-dialog-content")
              .find(".cloud-frame")
              .removeClass("loading");
      }),
      (b.prototype.toggleRecentFiles = function (e) {
        const module = this.panel.find(".g-right-side");
        module.toggleClass("g-show-recent-files", !!e);
        const require = !module.find(".g-files-list").is(":empty") && !!e;
        module.find(".g-all-files").toggle(require);
        const _interopRequireDefault = !module.find(".g-recent-files-list").is(":empty") && !!e;
        module.find(".g-recent-files").toggle(_interopRequireDefault),
          this.panel.find(".g-recent-files-separator").toggle(_interopRequireDefault);
      }),
      (b.prototype.toggleFolders = function (e) {
        this.panel.toggleClass("full-width", !!e);
        this.panel.find(".g-left-side").toggleClass("g-no-display", !e),
          this.panel.closest(".cloud-dialog").toggleClass("no-folders", !e);
      }),
      (b.prototype.createTopBar = function (e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
          require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        e = new GUserModel.default(e);
        var _interopRequireDefault = this.filesPanel.getCloudSettings(),
          GEditor = this.filesPanel.getCloudSettingsById(
            this.filesPanel.getCurrentDriveId()
          ),
          GContainer = this,
          s = $("<div />")
            .addClass("g-files-top-bar")
            .addClass(require ? "default" : "")
            .append(
              $("<div />")
                .addClass("g-files-top-buttons")
                .append(
                  $("<div />")
                    .addClass("g-button")
                    .addClass("cloud-button")
                    .addClass("maximize-button")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFilesPanel",
                          "action.maximize-window"
                        )
                      )
                    )
                    .on("click", (e) => {
                      e.stopPropagation(),
                        this.filesPanel.handleMaximizePanel();
                    })
                    .append(
                      $("<span/>")
                        .addClass("icon")
                        .addClass("gravit-icon-maximize-dialog")
                    )
                )
                .append(
                  $("<div />")
                    .addClass("g-button")
                    .addClass("cloud-button")
                    .addClass("minimize-button")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GFilesPanel",
                          "action.minimize-window"
                        )
                      )
                    )
                    .css("display", "none")
                    .on("click", (e) => {
                      e.stopPropagation(),
                        this.filesPanel.handleMinimizePanel();
                    })
                    .append(
                      $("<span/>")
                        .addClass("icon")
                        .addClass("gravit-icon-minimize-dialog")
                    )
                )
                .append(
                  $("<div/>")
                    .addClass("g-button")
                    .addClass("cloud-button")
                    .addClass("close-button")
                    .attr(
                      "data-title",
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GFilesPanel", "action.close-window")
                      )
                    )
                    .on("click", (e) => {
                      e.stopPropagation(), this.filesPanel.handleClosePanel();
                    })
                    .append(
                      $("<span/>")
                        .addClass("icon")
                        .addClass("gravit-icon-close")
                    )
                )
            )
            .append(
              $("<div />")
                .addClass("g-files-top-account")
                .append(
                  $("<div />")
                    .addClass("g-files-top-account-name")
                    .html(e.getUserReference())
                )
                .append(new m(e).build().addClass("g-files-top-avatar"))
            );
        if (
          (module
            ? this.panel.find(".g-files-top-bar").replaceWith(s)
            : s.appendTo(this.panel),
          require)
        )
          return void this._createRefreshButton(s, require);
        var CloudException = $("<div />")
          .addClass("g-files-top-cloud-menu")
          .append($("<div />").addClass("g-files-top-cloud-menu-icon"))
          .on("click", function () {
            GContainer._cloudPane(this),
              gDesigner.stats("filespanel-view_open_cloud-pane");
          })
          .appendTo(s);
        switch (GEditor.type) {
          case "sharepoint":
          case "sharepoint-native":
            CloudException.addClass("sharepoint").append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(GEditor.name)
            );
            break;
          case "onedrivebusiness":
          case "onedrivebusiness-native":
            CloudException.addClass("onedrivebusiness").append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(GEditor.name)
            );
            break;
          case "googledrive-native":
          case "googledrive":
            CloudException.addClass(GEditor.className).append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(GEditor.name)
            );
            break;
          default:
            CloudException.addClass("gravit-cloud");
        }
        (_interopRequireDefault && 0 !== _interopRequireDefault.length) ||
          s.append(
            $("<div />")
              .addClass("g-files-top-add-cloud-account-button")
              .append(
                $("<div />")
                  .addClass("icon-container")
                  .append(
                    $("<span />")
                      .addClass("icon")
                      .addClass("gravit-icon-plus-add")
                  )
              )
              .append(
                $("<div />")
                  .addClass("text")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.connect-cloud-drive"
                      )
                    )
                  )
              )
              .on(
                "click",
                function () {
                  this._newCloudAccountDialog();
                }.bind(this)
              )
          );
        const CollaborationMergeUtils = this.filesPanel.drive.getActions();
        CollaborationMergeUtils &&
          CollaborationMergeUtils.length &&
          CollaborationMergeUtils.forEach((e) => {
            let { title: module, icon: require, execute: _interopRequireDefault } = e;
            return $("<div/>")
              .addClass("g-files-top-cloud-refresh-content")
              .append(
                $("<div/>")
                  .addClass("container")
                  .append(require ? $("<div/>").addClass("icon").addClass(require) : "")
                  .append($("<div/>").addClass("text").text(module))
              )
              .appendTo(s)
              .click(() => {
                gDesigner.stats("filespanel-view_execute_action", module),
                  _interopRequireDefault(this.filesPanel.getContextSource()).catch((e) => {
                    "string" == typeof e
                      ? GSystemDialog.default.alert(e)
                      : console.error(e);
                  });
              });
          }),
          this._createRefreshButton(s, require);
      }),
      (b.prototype.updateTopBar = function () {
        this.createTopBar(this.filesPanel.getUser(), true);
      }),
      (b.prototype._createRefreshButton = function (e, t) {
        $("<div/>")
          .addClass("g-files-top-cloud-refresh-content")
          .addClass(t ? "default" : "")
          .append(
            $("<div/>")
              .addClass("container")
              .append(
                $("<div/>").addClass("icon").addClass("gravit-icon-refresh")
              )
              .append(
                $("<div/>")
                  .addClass("text")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.refresh-drive-content"
                      )
                    )
                  )
              )
          )
          .appendTo(e)
          .click(() => {
            gDesigner.stats("filespanel-view_refresh_file-list"),
              this.filesPanel.updateFilesList();
          });
      }),
      (b.prototype._cloudPane = async function (e) {
        try {
          var module = this.filesPanel.getCloudSettings(),
            require = $("<div/>")
              .addClass("cloud-pane")
              .on("click", () => {
                gDesigner.stats("filespanel-view_close_cloud-pane"),
                  require.gOverlay("close");
              }),
            _interopRequireDefault = this.filesPanel.getCloudSettingsById(
              this.filesPanel.getCurrentDriveId()
            ),
            GEditor = $("<div />")
              .addClass("head")
              .append($("<div />").addClass("cloud-pane-head-icon"))
              .on("click", () => {
                gDesigner.stats("filespanel-view_close_cloud-pane"),
                  require.gOverlay("close");
              })
              .appendTo(require);
          switch (_interopRequireDefault.type) {
            case "sharepoint":
            case "sharepoint-native":
              GEditor.addClass("sharepoint").append(
                $("<div />").addClass("cloud-pane-head-name").text(_interopRequireDefault.name)
              );
              break;
            case "googledrive":
            case "googledrive-native":
              GEditor.addClass("google-drive").append(
                $("<div />").addClass("cloud-pane-head-name").text(_interopRequireDefault.name)
              );
              break;
            default:
              GEditor.addClass("native");
          }
          if (module && module.length) {
            for (
              var GContainer = $("<div />").addClass("items-container"),
                s = 0,
                CloudException = module.length;
              s < CloudException;
              s++
            )
              try {
                var CollaborationMergeUtils,
                  GUserModel = module[s],
                  AppSettings = false,
                  AppSettings2 = [];
                if (
                  GUserModel.id === _interopRequireDefault.id &&
                  (CollaborationMergeUtils = this.filesPanel.drive.supportsCorporateStorage())
                ) {
                  try {
                    AppSettings2 = await this.filesPanel.drive.getCorporateStorages();
                  } catch (e) {
                    console.error(e);
                  }
                  AppSettings = AppSettings2.length > 0;
                }
                ((e) => {
                  const module = $("<div />")
                    .addClass("item")
                    .addClass(
                      e.id === this.filesPanel.getCurrentDriveId()
                        ? "selected"
                        : ""
                    )
                    .addClass("cloud-".concat(e.type))
                    .append(
                      $("<div />")
                        .addClass("icon-container")
                        .append(
                          $("<span />")
                            .addClass("icon")
                            .addClass(
                              (e.className &&
                                "".concat(e.className, "-icon")) ||
                                ""
                            )
                        )
                    )
                    .append($("<div />").addClass("name").text(e.name))
                    .on(
                      "click",
                      async function () {
                        if (e.id !== this.filesPanel.getCurrentDriveId()) {
                          gDesigner.stats(
                            "filespanel-view_open_cloud-drive",
                            e.name
                          ),
                            this.toggleLoading(true);
                          try {
                            await this.filesPanel.setCloudDrive(e);
                          } catch (e) {
                            var module;
                            e && e instanceof AppError.default && (module = e),
                              GSystemDialog.default.alert(
                                module ||
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      "GCommonNames",
                                      "text.loading-failed"
                                    )
                                  )
                              ),
                              console.error(">>>failed to set cloud drive", e);
                          }
                        }
                        require.gOverlay("close");
                      }.bind(this)
                    )
                    .appendTo(GContainer);
                  if (
                    (CollaborationMergeUtils &&
                      AppSettings &&
                      module.append(
                        $("<div />")
                          .addClass("corporate-storage-list")
                          .addClass("arrow-open-right")
                      ),
                    e.deletable &&
                      module.append(
                        $("<div />")
                          .addClass("account-settings-container")
                          .append(
                            $("<span />")
                              .addClass("edit-account")
                              .addClass("icon")
                              .addClass("gravit-icon-context-icon")
                          )
                          .on("click", (t) => {
                            t.preventDefault(),
                              t.stopPropagation(),
                              this._editCloudPane(e),
                              gDesigner.stats(
                                "filespanel-view_open_edit-cloud-account-dialog"
                              ),
                              this._closeCorporateSubMenu(),
                              require.gOverlay("close");
                          })
                      ),
                    CollaborationMergeUtils && AppSettings)
                  ) {
                    var _interopRequireDefault = this.filesPanel.drive.getCorporateStorage(),
                      GEditor = [
                        {
                          default: true,
                          name: GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GFilesPanelViewBase",
                              "text.my-drive"
                            )
                          ),
                          active: !_interopRequireDefault,
                          data: null,
                        },
                      ];
                    (GEditor = GEditor.concat(
                      AppSettings2.map((e) => ({
                        active: _interopRequireDefault && e.id === _interopRequireDefault.id,
                        default: false,
                        name: e.name,
                        data: e,
                      }))
                    )),
                      this._corporateStoragesPane(module, GEditor, async (e) => {
                        await this.filesPanel.drive.setCorporateStorage(e.data),
                          this.filesPanel.drive.setCurrentFolder(null),
                          this.filesPanel.updateFilesList(),
                          require.gOverlay("close");
                      });
                  } else
                    module.hover(() => {
                      this._closeCorporateSubMenu();
                    });
                })(GUserModel);
              } catch (e) {
                console.error(e);
              }
            GContainer.appendTo(require);
          }
          module.some((e) => ["googledrive"].includes(e.type)) ||
            $("<div/>")
              .addClass("new-item")
              .append(
                $("<div />")
                  .addClass("icon-container")
                  .append(
                    $("<span />")
                      .addClass("icon")
                      .addClass("gravit-icon-plus-add")
                  )
              )
              .append(
                $("<div />")
                  .addClass("text-container")
                  .append(
                    $("<div />")
                      .addClass("item-text")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GFilesPanelViewBase",
                            "text.connect-new-cloud-drive"
                          )
                        )
                      )
                  )
              )
              .on(
                "click",
                function () {
                  this._newCloudAccountDialog(), require.gOverlay("close");
                }.bind(this)
              )
              .appendTo(require),
            require
              .gOverlay({
                padding: false,
                releaseOnClose: true,
                clazz: "cloud-pane-overlay",
                offsetX: 10,
                offsetY: -40,
                closeCallback: () => {
                  this._closeCorporateSubMenu();
                },
              })
              .gOverlay("open", e, this.panel);
        } catch (e) {
          GSystemDialog.default.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "text.loading-failed")
            )
          );
        }
      }),
      (b.prototype._editCloudPane = function (e) {
        const module = this;
        if (e) {
          var require = $("<div />")
            .addClass("edit-account-dialog-content")
            .on("keypress", function (e) {
              13 === e.keyCode &&
                $(this)
                  .closest(".edit-account-dialog")
                  .find(".vendor-form-save")
                  .click();
            })
            .append(
              $("<div />")
                .addClass("g-btn-close")
                .append($("<span />").addClass("gravit-icon-close"))
                .on("click", () => {
                  gDesigner.stats(
                    "filespanel-view_close_edit-cloud-account-dialog",
                    e.name
                  ),
                    require.gDialog("close");
                })
            )
            .append(
              $("<div />")
                .addClass("title")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFilesPanelViewBase",
                      "text.edit-drive-title"
                    )
                  )
                )
            )
            .append(
              $("<label />")
                .append(
                  $("<div />").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.add-new-account-field-name"
                      )
                    )
                  )
                )
                .append(
                  $("<input />")
                    .attr("type", "text")
                    .attr("tabindex", 1)
                    .attr("name", "name")
                    .val(e.name)
                    .attr("id", "cloud-account-name")
                )
            )
            .gDialog({
              className: "edit-account-dialog",
              closable: true,
              buttons: [
                $("<button />")
                  .addClass("cloud-button")
                  .addClass("edit-account-disconnect-button")
                  .attr("tabindex", 4)
                  .on("click", (_interopRequireDefault) => {
                    _interopRequireDefault.preventDefault(),
                      _interopRequireDefault.stopPropagation(),
                      gDesigner.stats(
                        "filespanel-view_disconnect_cloud-account",
                        e.name
                      ),
                      module.filesPanel.deleteCloudDrive(e).then(async () => {
                        try {
                          module.filesPanel.getCurrentDriveId() === e.id &&
                            (module.toggleLoading(true),
                            module.filesPanel.drive instanceof CloudException.default &&
                              (await module.filesPanel.drive.uninstall()),
                            module.filesPanel.setCloudDrive(
                              module.filesPanel.getCloudSettingsById(1)
                            ));
                        } catch (e) {
                          console.error(">>>e", e);
                        }
                        require.gDialog("close");
                      });
                  })
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.button-edit-cloud-drive-disconnect"
                      )
                    )
                  ),
                $("<button />")
                  .addClass("vendor-form-cancel")
                  .addClass("cloud-button")
                  .attr("tabindex", 3)
                  .on("click", function (t) {
                    t.preventDefault(),
                      t.stopPropagation(),
                      gDesigner.stats(
                        "filespanel-view_close_edit-cloud-account-dialog",
                        e.name
                      ),
                      require.gDialog("close");
                  })
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.button-add-cloud-drive-cancel"
                      )
                    )
                  ),
                $("<button />")
                  .addClass("vendor-form-save")
                  .addClass("cloud-button")
                  .addClass("primary")
                  .attr("tabindex", 2)
                  .on("click", async function (_interopRequireDefault) {
                    _interopRequireDefault.preventDefault(), _interopRequireDefault.stopPropagation();
                    var GCore = require.find("#cloud-account-name").val();
                    let GEditor = [];
                    GCore || GEditor.push("cloud-account-name"),
                      GEditor.length
                        ? GEditor.forEach((e) => {
                            require.find("#".concat(e)).addClass("error");
                          })
                        : (gDesigner.stats(
                            "filespanel-view_save_edit-cloud-account-dialog",
                            e.name
                          ),
                          await module.filesPanel.updateCloudAccountName(e.id, GCore),
                          require.gDialog("close"));
                  })
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.button-add-cloud-drive-save"
                      )
                    )
                  ),
              ],
            });
          require.gDialog("open", true), require.find("#cloud-account-name").focus();
        } else console.error("vendor object is missing");
      }),
      (b.prototype._newCloudAccountDialog = async function () {
        var e = this,
          t = await this.filesPanel.getCreateCloudAccountOptions();
        if (
          (gDesigner.stats(
            "filespanel-view_open_add-cloud-drive-account-dialog"
          ),
          !(t.length < 1))
        ) {
          var require = $("<div />")
              .append(
                $("<div></div>")
                  .addClass("g-btn-close")
                  .append($("<span></span>").addClass("gravit-icon-close"))
                  .on("click", () => {
                    gDesigner.stats(
                      "filespanel-view_close_new-cloud-account-dialog"
                    ),
                      require.gDialog("close");
                  })
              )
              .append(
                $("<div />")
                  .addClass("title")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.add-new-cloud-drive"
                      )
                    )
                  )
              ),
            _interopRequireDefault = $("<div />").addClass("vendor-options");
          require.gDialog({
            releaseOnClose: true,
            closable: true,
            className: "g-cloud-account-options",
          });
          for (var GEditor = 0, GContainer = t.length; GEditor < GContainer; GEditor++) {
            !(function (t) {
              _interopRequireDefault.append(
                $("<div />")
                  .addClass("vendor-option")
                  .addClass(
                    t.pro && !gDesigner.isEnabledProFeatures() ? "pro" : ""
                  )
                  .addClass(t.type)
                  .append(
                    $("<div />")
                      .addClass("icon")
                      .addClass(
                        (t.className && "".concat(t.className, "-icon")) || ""
                      )
                  )
                  .append(
                    $("<div />")
                      .addClass("name")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GFilesPanelViewBase",
                            "text.connect-cloud-drive-text"
                          )
                        ).replace("%name", t.name)
                      )
                  )
                  .on("click", function () {
                    if (t.pro && !gDesigner.isEnabledProFeatures())
                      return (
                        gDesigner.stats(
                          "filespanel-view_nonprotriespro_clouddriver",
                          t.type
                        ),
                        gDesigner.handlePROFeatureInterruption()
                      );
                    require.gDialog("close"), e._addCloudDriveDialog(t);
                  })
              );
            })(t[GEditor]);
          }
          require.append(_interopRequireDefault), require.gDialog("open");
        }
      }),
      (b.prototype._addCloudDriveDialog = function (e) {
        var t = this;
        if (e) {
          if (
            (gDesigner.stats(
              "filespanel-view_open_add-cloud-drive-account-form-dialog",
              e.type
            ),
            "googledrive" === e.type)
          )
            return (function (e) {
              let require =
                arguments.length > 1 && undefined !== arguments[1] && arguments[1];
              return t.filesPanel.saveNewCloudAccount(e).then(async () => {
                try {
                  await t.filesPanel.setCloudDrive(e);
                } catch (_interopRequireDefault) {
                  return (
                    t.filesPanel.deleteCloudDrive(e).then(() => {
                      if (require) throw _interopRequireDefault.message;
                      GSystemDialog.default.alert(_interopRequireDefault.message);
                    }),
                    Promise.reject(_interopRequireDefault)
                  );
                }
              });
            })({
              type: "googledrive",
              deletable: false,
              className: "google-drive",
              name: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GFilesPanelViewBase",
                  "text.personal-google-drive"
                )
              ),
            }).then(() => {
              const e = this.filesPanel.drive;
              e &&
                e.hasEventListeners(CloudException.default.DriveEvent) &&
                e.trigger(
                  new CloudException.default.DriveEvent(
                    this.filesPanel.getContextSource(),
                    CloudException.default.DriveEvent.Type.Added
                  )
                );
            });
        } else console.error("vendor object is missing");
      }),
      (b.prototype._closeCorporateSubMenu = function () {
        this._corporateSubMenu &&
          (this._corporateSubMenu.gOverlay("close"),
          (this._corporateSubMenu = null));
      }),
      (b.prototype.updateUserDetails = function (e) {
        let module;
        e instanceof GUserModel.default || (e = new GUserModel.default(e)),
          (module = e.getUserReference()),
          module && this.panel.find(".g-files-top-account-name").html(module);
      }),
      (b.prototype._corporateStoragesPane = async function (e, t, n) {
        const _interopRequireDefault = () => {
          for (
            var _interopRequireDefault = $("<div/>")
                .addClass("corporate-storages-pane")
                .on("click", () => {
                  gDesigner.stats(
                    "filespanel-view_close_corporate-storages-pane"
                  ),
                    _interopRequireDefault.gOverlay("close");
                }),
              GCore = $("<div />").addClass("storage-container"),
              GEditor = 0,
              s = t.length;
            GEditor < s;
            GEditor++
          ) {
            var CloudException = t[GEditor];
            (function (e) {
              $("<div />")
                .addClass("item")
                .addClass(e.active ? "selected" : "")
                .append(
                  $("<div />")
                    .addClass("icon-container")
                    .append($("<span />").addClass("icon"))
                )
                .append($("<div />").addClass("name").text(e.name))
                .appendTo(GCore)[0]
                .addEventListener(
                  "mousedown",
                  () => {
                    _interopRequireDefault.gOverlay("close"),
                      gDesigner.stats(
                        "filespanel-view_select_corporate-storage"
                      ),
                      n(e);
                  },
                  true
                );
            }).call(this, CloudException);
          }
          GCore.appendTo(_interopRequireDefault),
            this._closeCorporateSubMenu(),
            e.addClass("active"),
            _interopRequireDefault
              .gOverlay({
                padding: false,
                releaseOnClose: true,
                clazz: "cloud-corporate-storage-pane-overlay",
                offsetX: e.outerWidth() - 11,
                offsetY: -e.outerHeight(),
                closeCallback: () => {
                  e.removeClass("active"),
                    gContainer.getRuntime() === GContainer.default.Runtime.IPad &&
                      e.gOverlay("close");
                },
              })
              .gOverlay("open", e, this.panel),
            (this._corporateSubMenu = _interopRequireDefault);
        };
        gContainer.getRuntime() === GContainer.default.Runtime.IPad
          ? e.click(() => {
              e.gOverlay("open"), _interopRequireDefault();
            })
          : e.hover(_interopRequireDefault);
      }),
      (b.prototype._sortPane = function (e) {
        var t = $("<div/>").addClass("context-pane");
        undefined !== this.filesPanel.drive.SORT_TYPES.UPDATED &&
          $("<div/>")
            .addClass("context-button")
            .addClass("sort-option")
            .addClass("updated")
            .append($("<span/>").addClass("icon"))
            .append(
              $("<span/>")
                .addClass("label")
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "text.updated"))
                )
            )
            .on(
              "click",
              function () {
                gDesigner.stats(
                  "filespanel-view_sort-by_cloud",
                  s.GFilesPanelSortTypes.UPDATED
                ),
                  this.filesPanel.setSortType("updated"),
                  this.filesPanel.sort(),
                  t.gOverlay("close");
              }.bind(this)
            )
            .appendTo(t),
          undefined !== this.filesPanel.drive.SORT_TYPES.NAME &&
            $("<div/>")
              .addClass("context-button")
              .addClass("sort-option")
              .addClass("name")
              .append($("<span/>").addClass("icon"))
              .append(
                $("<span/>")
                  .addClass("label")
                  .text(
                    GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "text.name"))
                  )
              )
              .on(
                "click",
                function () {
                  gDesigner.stats(
                    "filespanel-view_sort-by_cloud",
                    s.GFilesPanelSortTypes.NAME
                  ),
                    this.filesPanel.setSortType("name"),
                    this.filesPanel.sort(),
                    t.gOverlay("close");
                }.bind(this)
              )
              .appendTo(t),
          undefined !== this.filesPanel.drive.SORT_TYPES.CREATED &&
            $("<div/>")
              .addClass("context-button")
              .addClass("sort-option")
              .addClass("created")
              .append($("<span/>").addClass("icon"))
              .append(
                $("<span/>")
                  .addClass("label")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GFilesPanel", "text.created")
                    )
                  )
              )
              .on(
                "click",
                function () {
                  gDesigner.stats(
                    "filespanel-view_sort-by_cloud",
                    s.GFilesPanelSortTypes.CREATED
                  ),
                    this.filesPanel.setSortType("created"),
                    this.filesPanel.sort(),
                    t.gOverlay("close");
                }.bind(this)
              )
              .appendTo(t),
          $("<hr/>").appendTo(t),
          $("<div/>")
            .addClass("context-button")
            .addClass("sort-option")
            .addClass("ascending")
            .append($("<span/>").addClass("icon"))
            .append(
              $("<span/>")
                .addClass("label")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.ascending")
                  )
                )
            )
            .on(
              "click",
              function () {
                gDesigner.stats("filespanel-view_sort-type_cloud", "ascending"),
                  this.filesPanel.setSortDirection(
                    s.GFilesPanelSortDirections.ASCEND
                  ),
                  this.filesPanel.sort(),
                  t.gOverlay("close");
              }.bind(this)
            )
            .appendTo(t),
          $("<div/>")
            .addClass("context-button")
            .addClass("sort-option")
            .addClass("descending")
            .append($("<span/>").addClass("icon"))
            .append(
              $("<span/>")
                .addClass("label")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.descending")
                  )
                )
            )
            .on(
              "click",
              function () {
                gDesigner.stats(
                  "filespanel-view_sort-type_cloud",
                  "descending"
                ),
                  this.filesPanel.setSortDirection(
                    s.GFilesPanelSortDirections.DESCEND
                  ),
                  this.filesPanel.sort(),
                  t.gOverlay("close");
              }.bind(this)
            )
            .appendTo(t),
          t
            .gOverlay({
              padding: false,
              releaseOnClose: true,
              clazz: "context-overlay",
              offsetX: -70,
              offsetY: 8,
            })
            .gOverlay("open", e, this.panel),
          this._updateSortStates();
      }),
      (b.prototype._handleFilterItemClick = function (e, t, n) {
        const _interopRequireDefault = $(n);
        e
          ? this.filesPanel.addFileTypeToSelectedFilter(t)
          : this.filesPanel.deleteFileTypeFromSelectedFilter(t),
          this.filesPanel.sort(),
          0 !== this.filesPanel.getSelectedFilterForFileTypes().length
            ? _interopRequireDefault.hasClass("g-check") || _interopRequireDefault.addClass("g-check")
            : _interopRequireDefault.hasClass("g-check") && _interopRequireDefault.removeClass("g-check");
      }),
      (b.prototype._createFilterFileTypeOverlay = function (e) {
        var t = $("<div/>").addClass("context-pane");
        const require = this.filesPanel.getAvailableFileTypesFilter();
        if (!require || !require.length) return;
        var _interopRequireDefault = this;
        return (
          require.forEach((n) => {
            !(function (t, n) {
              const GEditor = $('<input type="checkbox"/>').on("click", function (n) {
                n.stopImmediatePropagation(),
                  _interopRequireDefault._handleFilterItemClick(GEditor[0].checked, t.type, e);
              });
              $("<div/>")
                .addClass("context-button")
                .addClass("sort-option")
                .addClass(t.id)
                .append(GEditor)
                .append(
                  $("<label/>")
                    .addClass("label")
                    .css("cursor", "pointer")
                    .text(GCore.GLocale.get(t.name))
                )
                .on("click", function (n) {
                  n.preventDefault(),
                    n.stopImmediatePropagation(),
                    (GEditor[0].checked = !GEditor[0].checked),
                    _interopRequireDefault._handleFilterItemClick(GEditor[0].checked, t.type, e);
                })
                .appendTo(n);
            })(n, t);
          }),
          t.append($("<hr>")),
          $("<div/>")
            .addClass("context-button")
            .addClass("sort-option")
            .addClass("clear-option")
            .append(
              $("<span>").text(
                GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.clear"))
              )
            )
            .on(
              "click",
              function () {
                if (
                  0 === this.filesPanel.getSelectedFilterForFileTypes().length
                )
                  return;
                const e = t.find("input[type=checkbox]");
                for (let t = 0; t < e.length; t++) e[t].checked = false;
                this.filesPanel.clearAllFileTypesFromSelectedFilter(),
                  this.clearFileTypeFilterState(),
                  this.filesPanel.sort();
              }.bind(this)
            )
            .appendTo(t),
          t
            .gOverlay({
              padding: false,
              releaseOnClose: true,
              clazz: "context-overlay",
              offsetX: -70,
              offsetY: 8,
            })
            .gOverlay("open", e, this.panel),
          this._updateFilterFileTypeStates(),
          t
        );
      }),
      (b.prototype._updateSortStates = function () {
        var e = this.panel.closest(".g-dialog-container");
        e.find(".sort-option").removeClass("sort-selected"),
          e
            .find(".sort-option." + this.filesPanel.getSortType())
            .addClass("sort-selected"),
          this.filesPanel.getSortDirection()
            ? e.find(".sort-option.ascending").addClass("sort-selected")
            : e.find(".sort-option.descending").addClass("sort-selected");
      }),
      (b.prototype._updateFileTypeFilterButtonColor = function (e) {
        0 !== this.filesPanel.getSelectedFilterForFileTypes().length &&
          $(e).addClass("g-check");
      }),
      (b.prototype._updateFilterFileTypeStates = function () {
        var e = this.panel.closest(".g-dialog-container");
        if (!e.length) return;
        this.filesPanel.getSelectedFilterForFileTypes().forEach((t) => {
          const require = this.filesPanel
            .getAvailableFileTypesFilter()
            .find((e) => e.type === t);
          e
            .find(".sort-option.".concat(require.id))
            .find("input[type=checkbox]")[0].checked = true;
        });
      }),
      (b.prototype._addToSelection = function (e) {
        var t = e.data("node");
        t && (e.addClass("selected"), this.filesPanel.addToSelection(t));
      }),
      (b.prototype.resetSelection = function () {
        this.panel.find(".g-gravit-folder").removeClass("selected"),
          this.panel
            .find(".g-gravit-file")
            .removeClass("selected")
            .removeClass("last-selected"),
          this.filesPanel.resetSelection();
      }),
      (b.prototype.manageOpenFolder = function (e, t, n) {
        (this.panel.find(".g-gravit-folder").removeClass("opened"), e)
          ? $(e).addClass("opened")
          : t &&
            this.panel.find(".g-gravit-folder").each((e, n) => {
              const _interopRequireDefault = $(n),
                GCore = _interopRequireDefault.data("node");
              ((GCore && "id" in GCore && (GCore.id === t.id || GCore.id === t)) || GCore === t) &&
                _interopRequireDefault.addClass("opened");
            });
        if (n && !n.isRootFolder()) {
          var _interopRequireDefault = n.getChildren();
          _interopRequireDefault && _interopRequireDefault.length && _interopRequireDefault.forEach((e) => e.refresh());
        }
      }),
      (b.prototype._isMultiSelectionEnabled = function () {
        return this.filesPanel.isMultiSelectionEnabled();
      }),
      (b.prototype.manageSelection = function (e, t) {
        if (
          (this.panel.find(".g-gravit-file").removeClass("last-selected"),
          GEditor.GPlatform.modifiers.metaKey)
        )
          e.hasClass("selected")
            ? (e.removeClass("selected"),
              this.filesPanel.removeFromSelection(t))
            : this._addToSelection(e);
        else if (
          this._isMultiSelectionEnabled() &&
          GEditor.GPlatform.modifiers.shiftKey
        ) {
          var require = $(e),
            _interopRequireDefault = require.nextAll(".g-cloud-element.selected"),
            GCore = require.prevAll(".g-cloud-element.selected"),
            GContainer = GCore.length > 0 ? GCore[0] : null,
            s = _interopRequireDefault.length > 0 ? _interopRequireDefault[0] : null;
          if (!GContainer || !s) {
            this.resetSelection();
            var CloudException = [],
              GSystemDialog = null;
            if (
              (GContainer
                ? ((GSystemDialog = $(GContainer)), (CloudException = $(GContainer).nextUntil(e)))
                : ((GSystemDialog = $(s)), (CloudException = $(e).nextUntil(s))),
              CloudException.length > 0)
            )
              for (var CollaborationMergeUtils = 0; CollaborationMergeUtils < CloudException.length; ++CollaborationMergeUtils) {
                let e = $(CloudException[CollaborationMergeUtils]);
                this._addToSelection(e);
              }
            this._addToSelection(e), this._addToSelection(GSystemDialog);
          }
        } else
          this.resetSelection(),
            this._addToSelection(e),
            e.addClass("last-selected");
      }),
      (b.prototype.addToClipboard = function (e) {
        let module = "";
        (module = this.filesPanel.isClipboardModeCopy(e) ? "copy" : "cut"),
          this.panel.find(".g-gravit-folder.selected").addClass(module),
          this.panel.find(".g-gravit-file.selected").addClass(module),
          this.resetSelection();
      }),
      (b.prototype.resetClipboard = function (e) {
        let module = "";
        this.filesPanel.isClipboardModeCopy(e)
          ? (module = "copy")
          : this.filesPanel.isClipboardModeCut(e) && (module = "cut"),
          this.panel.find(".g-gravit-folder").removeClass(module),
          this.panel.find(".g-gravit-file").removeClass(module);
      }),
      (b.prototype.shouldFilesBeRequested = function () {
        var e = this.panel.find(".g-right-side");
        return (
          Math.floor(e[0].scrollHeight - e.scrollTop()) ===
          Math.floor(e.outerHeight())
        );
      }),
      (b.prototype.clearFilesAndFolders = function () {
        (this._cloudFolders = []),
          this.clearFiles(),
          this.panel.find(".g-folders-list").empty();
      }),
      (b.prototype.clearFiles = function () {
        this.panel.find(".g-files-list").empty(),
          this.panel.find(".g-recent-files-list").empty(),
          this.panel.find(".g-search-no-results").hide(),
          this.toggleRecentFiles(false);
      }),
      (b.prototype._showCDRWarningUnsupportedObjects = function () {
        this.panel
          .find(".save-form-container")
          .addClass("warning")
          .find(".warning-container")
          .css("display", "");
      }),
      (b.prototype.minimizeWindow = function () {
        this.panel.closest(".g-dialog-container").removeClass("fullscreen"),
          this.panel.find(".g-files-top-bar").find(".maximize-button").show(),
          this.panel.find(".g-files-top-bar").find(".minimize-button").hide();
      }),
      (b.prototype.maximizeWindow = function () {
        this.panel.closest(".g-dialog-container").addClass("fullscreen"),
          this.panel.find(".g-files-top-bar").find(".maximize-button").hide(),
          this.panel.find(".g-files-top-bar").find(".minimize-button").show();
      }),
      (b.prototype.toListView = function () {
        this.panel.find(".g-files-list").addClass("list-view"),
          this.panel.find(".g-recent-files-list").addClass("list-view"),
          this.panel
            .find(".header")
            .find(".g-button.list-view")
            .addClass("g-selected"),
          this.panel
            .find(".header")
            .find(".g-button.card-view")
            .removeClass("g-selected"),
          this.updateLayout();
      }),
      (b.prototype.toCardView = function () {
        this.panel.find(".g-files-list").removeClass("list-view"),
          this.panel.find(".g-recent-files-list").removeClass("list-view"),
          this.panel
            .find(".header")
            .find(".g-button.card-view")
            .addClass("g-selected"),
          this.panel
            .find(".header")
            .find(".g-button.list-view")
            .removeClass("g-selected"),
          this.updateLayout();
      }),
      (b.prototype.toggleEmptyPanel = function (e) {
        if (e) {
          const e = this.filesPanel.drive.getDefaultEmptyMessage();
          e &&
            this.panel
              .find(".g-empty-panel")
              .empty()
              .prepend(
                $("<div/>")
                  .append($("<span/>").html(e.title))
                  .append(
                    e.buttons
                      ? e.buttons.map((e) =>
                          $("<button/>")
                            .addClass("g-highlight-button highlighted")
                            .text(e.title)
                            .on(
                              "click",
                              () => (
                                gDesigner.stats(
                                  "filespanel-view_execute_action",
                                  e.title
                                ),
                                e.execute(this.filesPanel.getContextSource())
                              )
                            )
                        )
                      : ""
                  )
              )
              .show();
        } else this.panel.find(".g-empty-panel").hide();
      }),
      (b.prototype.toggleExampleFiles = function (e) {
        e
          ? this.panel.find(".g-example-files-list").show()
          : this.panel.find(".g-example-files-list").hide();
      }),
      (b.prototype.removeExampleFiles = function () {
        this.panel.find(".g-gravit-example-file").remove();
      }),
      (b.prototype.renderNewFolderButton = function (e, t) {
        var n = $("<div/>").addClass("header-left-actions");
        $("<div/>")
          .addClass("g-button")
          .addClass("cloud-button")
          .addClass("new-folder")
          .append(
            $("<span/>").addClass("icon").addClass("gravit-icon-w-newfolder")
          )
          .append(
            $("<span/>")
              .addClass("label")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.new-folder")
                )
              )
          )
          .attr(
            "data-title",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.new-folder-tooltip")
            )
          )
          .on("click", (e) => {
            e.stopPropagation();
            const n = $(e.currentTarget).hasClass("g-disabled");
            this._isCreateFolderEnabled() &&
              !n &&
              this.filesPanel.handleNewFolder(t);
          })
          .appendTo(n),
          n.appendTo(e);
      }),
      (b.prototype._isCreateFolderEnabled = function () {
        return (
          !gDesigner.getApplicationManager().isOnlyFileOpenFromCloudEnabled() &&
          this.hasPermission(b.Permission.CreateFolder)
        );
      }),
      (b.prototype.renderSortButton = function (e) {
        var t = this,
          n = $("<div/>")
            .addClass("g-button")
            .addClass("cloud-button")
            .addClass("sort")
            .css("margin-left", "5px")
            .append(
              $("<span/>").addClass("icon").addClass("gravit-icon-w-sort")
            )
            .attr(
              "data-title",
              GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.sort"))
            )
            .on("click", function (e) {
              e.stopPropagation(),
                gDesigner.stats("filespanel-view_sort_cloud"),
                t._sortPane(this);
            });
        (this._sortButton = n), n.appendTo(e);
      }),
      (b.prototype.renderFileTypeFilterButton = function (e) {
        var t = this,
          n = $("<div/>")
            .addClass("g-button")
            .addClass("cloud-button")
            .addClass("filter-button")
            .addClass("sort")
            .append(
              $("<span/>").addClass("icon").addClass("gravit-icon-filter-view")
            )
            .attr(
              "data-title",
              GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.filter"))
            )
            .on("click", function (e) {
              e.stopPropagation(), t._createFilterFileTypeOverlay(this);
            });
        n.appendTo(e),
          (this._fileTypeFilterButton = n),
          this._updateFileTypeFilterButtonColor(n);
      }),
      (b.prototype.clearFileTypeFilterState = function () {
        this._fileTypeFilterButton &&
          this._fileTypeFilterButton.removeClass("g-check");
      }),
      (b.prototype.hideFileTypeFilterButton = function () {
        this._fileTypeFilterButton &&
          (this._fileTypeFilterButton.css("display", "none"),
          this._sortButton.css("marginLeft", "15px"));
      }),
      (b.prototype.displayFileTypeFilterButton = function () {
        this._fileTypeFilterButton &&
          (this._fileTypeFilterButton.css("display", "block"),
          this._sortButton.css("marginLeft", "5px"));
      }),
      (b.prototype.renderToParentFolderButton = function (e) {
        $("<div/>")
          .addClass("g-button")
          .addClass("cloud-button")
          .addClass("back")
          .addClass("g-hidden")
          .attr(
            "data-title",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.back-tooltip")
            )
          )
          .append($("<span/>").addClass("icon").addClass("gravit-icon-w-back"))
          .append(
            $("<span/>")
              .addClass("label")
              .text(
                GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.back"))
              )
          )
          .on(
            "click",
            function (e) {
              e.stopPropagation(), this.filesPanel.handleBack();
            }.bind(this)
          )
          .appendTo(e);
      }),
      (b.prototype.renderToRootFolderButton = function (e) {
        $("<div/>")
          .addClass("g-button")
          .addClass("cloud-button")
          .addClass("back")
          .addClass("g-hidden")
          .attr(
            "data-title",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.my-cloud-tooltip")
            )
          )
          .append($("<span/>").addClass("icon").addClass("gravit-icon-w-back"))
          .append(
            $("<span/>")
              .addClass("label")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.my-cloud")
                )
              )
          )
          .on(
            "click",
            function (e) {
              e.stopPropagation(), this.filesPanel.navigateToRoot();
            }.bind(this)
          )
          .appendTo(e);
      }),
      (b.prototype.renderGridStyleButtons = function (e) {
        var t = this;
        $("<div />")
          .addClass("grid-styles-container")
          .append(
            $("<div />")
              .addClass("g-button")
              .addClass("cloud-button")
              .addClass("style-button")
              .addClass("card-view")
              .addClass("g-selected")
              .attr(
                "data-title",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.card-view-button")
                )
              )
              .append(
                $("<span />").addClass("icon").addClass("gravit-icon-card-view")
              )
              .on("click", function (e) {
                e.stopPropagation(),
                  $(this).hasClass("g-selected") ||
                    (gDesigner.stats("filespanel-view_view-files_card"),
                    t.filesPanel.toCardView());
              })
          )
          .append(
            $("<div />")
              .addClass("g-button")
              .addClass("cloud-button")
              .addClass("style-button")
              .addClass("list-view")
              .attr(
                "data-title",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.list-view-button")
                )
              )
              .append(
                $("<span />").addClass("icon").addClass("gravit-icon-list-view")
              )
              .on("click", function (e) {
                e.stopPropagation(),
                  $(this).hasClass("g-selected") ||
                    (gDesigner.stats("filespanel-view_view-files_list"),
                    t.filesPanel.toListView());
              })
          )
          .appendTo(e);
      }),
      (b.prototype._getSaveOptions = function () {
        return {};
      }),
      (b.prototype.addSearchBar = function () {}),
      (b.prototype.getSearchValue = function () {}),
      (b.prototype.updateControls = function () {}),
      (b.prototype.updateToolControls = function () {}),
      (b.prototype.createHeader = function () {}),
      (b.prototype.createFooter = function () {}),
      (b.prototype.addFile = function () {}),
      (b.prototype.addFolder = function () {}),
      (b.prototype.focusFileNameInput = function () {}),
      (b.prototype.scrollToSelectedElement = function () {}),
      (b.Permission = {
        CreateFolder: "create-folder",
        RecentFilesShowMore: "recent-files-show-more",
      }),
      (b.prototype._permissions = []),
      (b.prototype.hasPermission = function (e) {
        return this._permissions.includes(e);
      }),
      (b.prototype.setPermission = function (e) {
        let module =
          !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
        if (this._permissionSupported(e)) {
          if (module) this.hasPermission(e) || this._permissions.push(e);
          else if (this.hasPermission(e)) {
            var require = this._permissions.indexOf(e);
            this._permissions.splice(require, 1);
          }
          this._permissionChanged();
        } else console.warn("Permission not supported: " + e);
      }),
      (b._createFileInfoPanel = function () {
        return $("<div/>")
          .on("click", (e) => {
            e.stopPropagation(), e.preventDefault();
          })
          .addClass("g-file-info-panel");
      }),
      (b.prototype._closeFileInfoPanel = function () {
        this._rightSide.toggleClass("show-info-panel", false),
          this._fileInfoPanel.toggleClass("g-active", false),
          (this._fileInfoPanelIsOpen = false);
      }),
      (b.prototype._openFileInfoPanel = function () {
        this._rightSide.toggleClass("show-info-panel", true),
          this._fileInfoPanel.toggleClass("g-active", true),
          (this._fileInfoPanelIsOpen = true);
      }),
      (b.prototype._updateFileInfoPanel = async function (e, t, n) {
        const _interopRequireDefault = this.filesPanel.getSelection();
        if (!e || !this._user || (_interopRequireDefault && 1 !== _interopRequireDefault.length))
          this._closeFileInfoPanel();
        else {
          _interopRequireDefault[0].id !== e.id && (e = _interopRequireDefault[0]);
          try {
            this._openFileInfoPanel(),
              this._fileInfoPanel.toggleClass("loading", true),
              this._fileInfoPanel.empty();
            const _interopRequireDefault = $("<div/>")
                .addClass("g-file-detail-container")
                .appendTo(this._fileInfoPanel),
              GCore = y.getRenderForFile(e);
            await GCore.render(_interopRequireDefault, e),
              GCore.addEventListener(GEvent_type_1174, (_interopRequireDefault) =>
                this._detailRenderEventListener(_interopRequireDefault, e, t, n)
              );
          } finally {
            this._fileInfoPanel.toggleClass("loading", false),
              this._scrollToTheFile(t, n),
              n && this._expandRecentListIfFileWasHidden(t);
          }
        }
      }),
      (b.prototype._detailRenderEventListener = function (e, t, n, _interopRequireDefault) {
        switch (e.type) {
          case GEvent_type_1174.Type.DoubleClickFile:
            this.filesPanel.handleFileDblClick(e.data);
            break;
          case GEvent_type_1174.Type.Reload:
            this._updateFileInfoPanel(t, n, _interopRequireDefault);
            break;
          case GEvent_type_1174.Type.UnshareWithMe:
            this._closeFileInfoPanel(), this.filesPanel.updateFilesList();
        }
      }),
      (b.prototype._scrollToTheFile = function (e) {
        const module = this._rightSide.height() / 3,
          require = e[0],
          _interopRequireDefault = require.offsetTop - module > 0 ? require.offsetTop - module : 0;
        this._rightSide.animate({ scrollTop: _interopRequireDefault + "px" }, 400);
      }),
      (b.prototype._expandRecentListIfFileWasHidden = function (e) {
        const module = this.panel.find(".g-recent-files-list"),
          require = this._getGridData(module);
        module.find(".g-gravit-file").index(e) >= require.columnsAmount &&
          (this.panel.find(".g-recent-files-show-more").hide(),
          module.css("max-height", "max-content"));
      }),
      (b.prototype._permissionSupported = function (e) {
        return Object.values(b.Permission).includes(e);
      }),
      (b.prototype.handleShortcut = function (e) {
        switch (e.which) {
          case 70:
            this._forceSearchInput(e);
            break;
          case 86:
            this._handlePasteShortcut(e);
            break;
          case 27:
            this._handleEscShortcut(e);
        }
      }),
      (b.prototype._forceSearchInput = function (e) {
        if (GEditor.GPlatform.modifiers.metaKey || GEditor.GPlatform.modifiers.ctrlKey) {
          var module = this.panel.find(".search-container > input.search-field");
          module.length > 0 && (e.preventDefault(), module.focus());
        }
      }),
      (b.prototype._handlePasteShortcut = function (e) {
        function module() {
          e.preventDefault(), e.stopPropagation();
        }
        (GEditor.GPlatform.modifiers.metaKey || GEditor.GPlatform.modifiers.ctrlKey) &&
          (this.filesPanel.isClipboardModeCut()
            ? (module(), this.filesPanel.performCutPaste())
            : this.filesPanel.isClipboardModeCopy() &&
              (module(), this.filesPanel.performCopyPaste()));
      }),
      (b.prototype._handleEscShortcut = function (e) {
        this._fileInfoPanelIsOpen &&
          (this._closeFileInfoPanel(), e.preventDefault(), e.stopPropagation());
      }),
      (b.prototype.handleParentClose = function () {
        window.removeEventListener(
          "keydown",
          this._bindedHandleSearchShortcut,
          true
        ),
          gDesigner.removeEventListener(
            CloudException.default.DriveEvent,
            this._handleDriveEvent,
            this
          );
      }),
      (b.prototype._setContextMenuActiveRangeSize = function (e) {
        const module = e || this._contextMenu,
          require = $(".frame.cloud-frame"),
          _interopRequireDefault = require.offset();
        _interopRequireDefault &&
          (module.setActiveRangeSize(_interopRequireDefault.left, _interopRequireDefault.top, require.height(), require.width()),
          this._downloadContextMenu &&
            this._downloadContextMenu.setActiveRangeSize(
              _interopRequireDefault.left,
              _interopRequireDefault.top,
              require.height(),
              require.width()
            ));
      }),
      (b.prototype._permissionChanged = function () {}),
      (b.prototype._isContextMenuAvailableForFile = function (e) {
        return this.filesPanel._isContextMenuAvailableForFile(e);
      }),
      (exports.exports = b);
  }