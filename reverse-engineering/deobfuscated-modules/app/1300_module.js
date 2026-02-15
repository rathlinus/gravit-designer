/**
 * Webpack Module #1300
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(58) /* module_58 */,
      require(19) /* module_19 */,
      require(596) /* module_596 */,
      require(328) /* module_328 */,
      require(8) /* module_8 */,
      require(20) /* module_20 */,
      require(71) /* module_71 */,
      require(34) /* module_34 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(97) /* module_97 */,
      require(33) /* module_33 */,
      require(26) /* module_26 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(85) /* GContainer */),
      s = require(858) /* module_858 */,
      l = o(require(802) /* CloudException */),
      c = o(require(44) /* GSystemDialog */),
      d = require(40) /* module_40 */,
      u = o(require(177) /* module_177 */),
      p = require(10) /* module_10 */,
      g = o(require(355) /* module_355 */),
      h = require(519) /* module_519 */;
    const f = require(1548) /* module_1548 */,
      m = require(1166) /* module_1166 */,
      y = require(1549) /* module_1549 */,
      v = require(1174) /* module_1174 */;
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
        ((gContainer.getRuntime() === r.default.Runtime.Electron &&
          i.GSystem.operatingSystem === i.GSystem.OperatingSystem.Windows) ||
          i.GSystem.operatingSystem === i.GSystem.OperatingSystem.Unix) &&
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
                e.loadChildrenOnDemand((t, n, o) =>
                  this.filesPanel.drive
                    .fetchFolders(this.filesPanel.getSort(), t, n, o)
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
        var o = this.filesPanel.isItemSelected(e),
          i = this.filesPanel.isItemInClipboard(e),
          r = false,
          s = new f(e, t, this.filesPanel.drive.isRootFolder(e))
            .onClick((e, t) => {
              a.GPlatform.modifiers.metaKey
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
                : u().then(() => s.toggleState());
            })
            .onContext(function (e, t, o) {
              gDesigner.stats("filespanel-view_context_cloudfolder"),
                n.resetSelection(),
                n._addToSelection(t),
                n._openContextMenuForEventPosition(o);
            })
            .onFileDrop((e, t) => {
              this.filesPanel.performFileMove(e, t);
            })
            .setRefreshHandler(u)
            .onFolderStateClick(() => {
              u().then(() => {
                if (
                  (s.toggleState(), !s.isRootFolder() && !r && s.isStateOpen())
                ) {
                  var e = s.getChildren();
                  e && e.length && ((r = true), e.forEach((e) => e.refresh()));
                }
              });
            });
        this._cloudFolders.push(s);
        const l = this.filesPanel.drive.isRootFolder(e),
          c = t && this.filesPanel.drive.isRootFolder(t.getFolder());
        var d;
        function u() {
          return s.isLoading() || (s.getChildren() && s.getChildren().length)
            ? d || Promise.resolve()
            : (s.setLoading(true),
              (d = n.filesPanel.drive
                .fetchFolders(n.filesPanel.getSort(), e)
                .then((t) => {
                  s.setLoading(false),
                    s.setChildren(t.map((e) => n._factoryFolder(e, s))),
                    s.update();
                  const o = n.filesPanel.drive.getCurrentFolder();
                  if ((o && "id" in o && o.id === e.id) || o === e) {
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
          (l || c || this.filesPanel.drive.containsInPreviousPath(e)) &&
            (l && this.filesPanel.drive.resetPreviousSelectedFolderPath(),
            this.filesPanel.drive.removeLoadedFolderFromPreviousPath(e),
            u()),
          l && s.toggleState(),
          s
            .getHTMLElement()
            .addClass(o ? "selected" : "")
            .addClass(i ? "cut" : ""),
          s
        );
      }),
      (b.prototype.navigateToFolder = async function (e) {
        try {
          const f = this.filesPanel.drive;
          this.toggleLoading(true),
            (e = "string" == typeof e ? await f.getFolder(e) : e);
          var module = async (e, t) => {
            this.filesPanel.navigateToFolder(e);
            for (
              var require = this._cloudFolders.find((t) => t.getFolder().id === e.id),
                o = 0;
              !(
                require ||
                (await (0, d.sleep)(100),
                (require = this._cloudFolders.find((t) => t.getFolder().id === e.id)),
                ++o > 30)
              );

            );
            if ((this.manageOpenFolder(null, e, require), require)) {
              var i = require.getHTMLContainer();
              0 === i[0].offsetTop && t && (i = t.getHTMLContainer()),
                setTimeout(() => {
                  this.panel
                    .find(".g-left-side")
                    .animate({ scrollTop: $(i).position().top }, 150);
                });
            }
          };
          if (
            (e.family === p.EXTERNAL_APP.ONEDRIVEBUSINESS &&
              (f.isRootFolder(e) || f.isRootFolder(e.parent))) ||
            f.isRootFolder(e.relativeUrl ? e.relativeUrl : e.parent)
          )
            module(e);
          else {
            for (var require, o = [e], i = e, a = false; !require; )
              if (
                (i = await f
                  .getFolder(i.parent)
                  .catch(
                    (t) => (
                      t.status === p.gApi.HTTP_STATUS_CODES.NOT_FOUND &&
                        i.id === e.id &&
                        (a = true),
                      null
                    )
                  ))
              ) {
                if ((o.push(i), o.length > h.MAX_FOLDER_DEPTH_FOR_CLOUD))
                  return Promise.reject(p.gApi.HTTP_STATUS_CODES.NOT_FOUND);
                f.isRootFolder(i.parent) && (require = true);
              } else {
                if (a)
                  return Promise.reject(p.gApi.HTTP_STATUS_CODES.NOT_FOUND);
                require = true;
              }
            var r = o.reverse(),
              s = this._cloudFolders,
              l = null,
              c = null,
              u = null;
            for (l = c = r.shift(); l; ) {
              u = s.find((e) => e.getFolder().id === l.id);
              for (
                var g = 0;
                !(
                  u ||
                  (await (0, d.sleep)(100),
                  (u = s.find((e) => e.getFolder().id === l.id)),
                  ++g > 300)
                );

              );
              u
                ? (await u.refresh(),
                  (s = u.getChildren()),
                  u.toggleState(),
                  (l = r.shift()) ? (c = l) : module(c, u))
                : (l = null);
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
        e.type === l.default.DriveEvent.Type.FileDeleted &&
          this._getFileInfoPanelFileId() === e.data.id &&
          this._closeFileInfoPanel();
      }),
      (b.prototype._getFileInfoPanelFileId = function () {
        return $(".g-file-detail-container").data("fileId");
      }),
      (b.prototype._registerDriveEvent = function () {
        gDesigner.addEventListener(
          l.default.DriveEvent,
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
        var o = $("<div />").addClass("g-main").appendTo(n);
        const a = (0, d.throttle)(this._loadFoldersOnDemand.bind(this), 100);
        let r = 0;
        var s = $("<div />")
          .addClass("g-left-side")
          .scroll((e) => {
            if (t.filesPanel.drive.isLoadFoldersOnDemandSupported()) {
              const t = $(e.target).scrollTop();
              t > r && a(), (r = t);
            }
          })
          .appendTo(o);
        (this._rightSide = $("<div />")
          .addClass("g-right-side")
          .on("contextmenu", (e) => {
            t.resetSelection(), t._openContextMenuForEventPosition(e);
          })
          .appendTo(o)),
          (this._fileInfoPanel = b._createFileInfoPanel()),
          this._fileInfoPanel.appendTo(o);
        var l = $("<div />").addClass("g-folders-list").addClass("main"),
          c = $("<div />")
            .addClass("g-folders-list")
            .addClass("fixed-bottom")
            .addClass("custom-folders"),
          u = $("<div/>").addClass("g-files-list"),
          p = $("<div/>").addClass("g-empty-panel").hide();
        const g = $("<div/>").addClass("g-example-files-list").hide(),
          h = $("<div/>").addClass("g-recent-files-list");
        (_ = function (e) {
          e.stopPropagation(),
            t.filesPanel.getSelection().length &&
              (t.resetSelection(),
              t._updateFileInfoPanel(null),
              gDesigner.stats("filespanel-view_clear_selection"));
        }),
          this.panel.on("click", _);
        const f = (0, d.debounce)(
          () => this.filesPanel.buildDepth(false, false),
          100
        );
        $(this._rightSide).scroll(
          function (e) {
            var t = $(e.currentTarget);
            Math.floor(t[0].scrollHeight - t.scrollTop()) ===
              Math.floor(t.outerHeight()) &&
              $(u).children().length > 0 &&
              f();
          }.bind(this)
        ),
          this.createHeader(this.panel),
          n.appendTo(this.panel),
          l.appendTo(s),
          c.appendTo(s),
          $("<div />")
            .addClass("g-files-top-line g-recent-files")
            .attr(
              "data-title",
              i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "text.title-recent-files")
              )
            )
            .appendTo(this._rightSide),
          p.appendTo(this._rightSide),
          g.appendTo(this._rightSide),
          h.appendTo(this._rightSide);
        const m = $("<div />")
          .addClass("g-files-top-line g-all-files")
          .addClass("g-recent-files-separator")
          .attr(
            "data-title",
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.title-all-files")
            )
          )
          .hide()
          .appendTo(this._rightSide);
        this.hasPermission(b.Permission.RecentFilesShowMore) &&
          m.append(
            $("<div />")
              .addClass("g-recent-files-show-more")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanelViewBase", "text.show-more")
                )
              )
              .on("click", function () {
                h.addClass("extended-list"), $(this).hide(), t.updateLayout();
              })
              .on("mouseover", function (e) {
                e.stopPropagation(), e.preventDefault();
              })
          ),
          u.appendTo(this._rightSide),
          this.createFooter(this.filesPanel.getDefaultFilename()),
          this._permissionChanged();
      }),
      (b.prototype.updateLayout = function () {
        const exports = this.panel.find(".g-files-list");
        if (exports.hasClass("list-view")) {
          const t = (e, t) => {
            let require, o, i;
            ({
              columnsAmount: o,
              total: require,
              totalRows: i,
            } = this._getGridData(e)),
              t && e.css("max-height", "");
            const a = e.hasClass("extended-list");
            if (!require) return void e.addClass("single-row");
            if (!o || isNaN(o)) return;
            const r = a ? 6 : 2;
            t && !a && i > 2
              ? this.panel.find(".g-recent-files-show-more").show()
              : this.panel.find(".g-recent-files-show-more").hide(),
              t && i > r && (i = r),
              1 === i ? e.addClass("single-row") : e.removeClass("single-row"),
              e.find(".g-gravit-file").each(function (e) {
                1 !== i &&
                  $(this).toggleClass(
                    "last-row-file",
                    (function (e) {
                      return e >= (i - 1) * o;
                    })(e)
                  );
              });
          };
          t(exports), t(this.panel.find(".g-recent-files-list"), true);
        } else {
          const e = this.panel.find(".g-recent-files-list"),
            t = e.hasClass("extended-list"),
            { totalRows: require, firstHeight: o } = this._getGridData(e);
          if (require > 1 && !t) {
            const t = o + 10;
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
          o = module.eq(0).width(),
          i = module.eq(0).height();
        let a = 1;
        o && !isNaN(o) && (a = Math.floor(e.width() / o));
        return {
          total: require,
          totalRows: require % a > 0 ? Math.floor(require / a) + 1 : Math.floor(require / a),
          columnsAmount: a,
          firstHeight: i,
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
        const o = !module.find(".g-recent-files-list").is(":empty") && !!e;
        module.find(".g-recent-files").toggle(o),
          this.panel.find(".g-recent-files-separator").toggle(o);
      }),
      (b.prototype.toggleFolders = function (e) {
        this.panel.toggleClass("full-width", !!e);
        this.panel.find(".g-left-side").toggleClass("g-no-display", !e),
          this.panel.closest(".cloud-dialog").toggleClass("no-folders", !e);
      }),
      (b.prototype.createTopBar = function (e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
          require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        e = new u.default(e);
        var o = this.filesPanel.getCloudSettings(),
          a = this.filesPanel.getCloudSettingsById(
            this.filesPanel.getCurrentDriveId()
          ),
          r = this,
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
                      i.GLocale.get(
                        new i.GLocaleKey(
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
                      i.GLocale.get(
                        new i.GLocaleKey(
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
                      i.GLocale.get(
                        new i.GLocaleKey("GFilesPanel", "action.close-window")
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
        var l = $("<div />")
          .addClass("g-files-top-cloud-menu")
          .append($("<div />").addClass("g-files-top-cloud-menu-icon"))
          .on("click", function () {
            r._cloudPane(this),
              gDesigner.stats("filespanel-view_open_cloud-pane");
          })
          .appendTo(s);
        switch (a.type) {
          case "sharepoint":
          case "sharepoint-native":
            l.addClass("sharepoint").append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(a.name)
            );
            break;
          case "onedrivebusiness":
          case "onedrivebusiness-native":
            l.addClass("onedrivebusiness").append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(a.name)
            );
            break;
          case "googledrive-native":
          case "googledrive":
            l.addClass(a.className).append(
              $("<div />").addClass("g-files-top-cloud-menu-name").text(a.name)
            );
            break;
          default:
            l.addClass("gravit-cloud");
        }
        (o && 0 !== o.length) ||
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
                    i.GLocale.get(
                      new i.GLocaleKey(
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
        const d = this.filesPanel.drive.getActions();
        d &&
          d.length &&
          d.forEach((e) => {
            let { title: module, icon: require, execute: o } = e;
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
                  o(this.filesPanel.getContextSource()).catch((e) => {
                    "string" == typeof e
                      ? c.default.alert(e)
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
                    i.GLocale.get(
                      new i.GLocaleKey(
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
            o = this.filesPanel.getCloudSettingsById(
              this.filesPanel.getCurrentDriveId()
            ),
            a = $("<div />")
              .addClass("head")
              .append($("<div />").addClass("cloud-pane-head-icon"))
              .on("click", () => {
                gDesigner.stats("filespanel-view_close_cloud-pane"),
                  require.gOverlay("close");
              })
              .appendTo(require);
          switch (o.type) {
            case "sharepoint":
            case "sharepoint-native":
              a.addClass("sharepoint").append(
                $("<div />").addClass("cloud-pane-head-name").text(o.name)
              );
              break;
            case "googledrive":
            case "googledrive-native":
              a.addClass("google-drive").append(
                $("<div />").addClass("cloud-pane-head-name").text(o.name)
              );
              break;
            default:
              a.addClass("native");
          }
          if (module && module.length) {
            for (
              var r = $("<div />").addClass("items-container"),
                s = 0,
                l = module.length;
              s < l;
              s++
            )
              try {
                var d,
                  u = module[s],
                  p = false,
                  h = [];
                if (
                  u.id === o.id &&
                  (d = this.filesPanel.drive.supportsCorporateStorage())
                ) {
                  try {
                    h = await this.filesPanel.drive.getCorporateStorages();
                  } catch (e) {
                    console.error(e);
                  }
                  p = h.length > 0;
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
                            e && e instanceof g.default && (module = e),
                              c.default.alert(
                                module ||
                                  i.GLocale.get(
                                    new i.GLocaleKey(
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
                    .appendTo(r);
                  if (
                    (d &&
                      p &&
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
                    d && p)
                  ) {
                    var o = this.filesPanel.drive.getCorporateStorage(),
                      a = [
                        {
                          default: true,
                          name: i.GLocale.get(
                            new i.GLocaleKey(
                              "GFilesPanelViewBase",
                              "text.my-drive"
                            )
                          ),
                          active: !o,
                          data: null,
                        },
                      ];
                    (a = a.concat(
                      h.map((e) => ({
                        active: o && e.id === o.id,
                        default: false,
                        name: e.name,
                        data: e,
                      }))
                    )),
                      this._corporateStoragesPane(module, a, async (e) => {
                        await this.filesPanel.drive.setCorporateStorage(e.data),
                          this.filesPanel.drive.setCurrentFolder(null),
                          this.filesPanel.updateFilesList(),
                          require.gOverlay("close");
                      });
                  } else
                    module.hover(() => {
                      this._closeCorporateSubMenu();
                    });
                })(u);
              } catch (e) {
                console.error(e);
              }
            r.appendTo(require);
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
                        i.GLocale.get(
                          new i.GLocaleKey(
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
          c.default.alert(
            i.GLocale.get(
              new i.GLocaleKey("GCommonNames", "text.loading-failed")
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
                  i.GLocale.get(
                    new i.GLocaleKey(
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
                    i.GLocale.get(
                      new i.GLocaleKey(
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
                  .on("click", (o) => {
                    o.preventDefault(),
                      o.stopPropagation(),
                      gDesigner.stats(
                        "filespanel-view_disconnect_cloud-account",
                        e.name
                      ),
                      module.filesPanel.deleteCloudDrive(e).then(async () => {
                        try {
                          module.filesPanel.getCurrentDriveId() === e.id &&
                            (module.toggleLoading(true),
                            module.filesPanel.drive instanceof l.default &&
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
                    i.GLocale.get(
                      new i.GLocaleKey(
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
                    i.GLocale.get(
                      new i.GLocaleKey(
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
                  .on("click", async function (o) {
                    o.preventDefault(), o.stopPropagation();
                    var i = require.find("#cloud-account-name").val();
                    let a = [];
                    i || a.push("cloud-account-name"),
                      a.length
                        ? a.forEach((e) => {
                            require.find("#".concat(e)).addClass("error");
                          })
                        : (gDesigner.stats(
                            "filespanel-view_save_edit-cloud-account-dialog",
                            e.name
                          ),
                          await module.filesPanel.updateCloudAccountName(e.id, i),
                          require.gDialog("close"));
                  })
                  .text(
                    i.GLocale.get(
                      new i.GLocaleKey(
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
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GFilesPanelViewBase",
                        "text.add-new-cloud-drive"
                      )
                    )
                  )
              ),
            o = $("<div />").addClass("vendor-options");
          require.gDialog({
            releaseOnClose: true,
            closable: true,
            className: "g-cloud-account-options",
          });
          for (var a = 0, r = t.length; a < r; a++) {
            !(function (t) {
              o.append(
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
                        i.GLocale.get(
                          new i.GLocaleKey(
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
            })(t[a]);
          }
          require.append(o), require.gDialog("open");
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
                } catch (o) {
                  return (
                    t.filesPanel.deleteCloudDrive(e).then(() => {
                      if (require) throw o.message;
                      c.default.alert(o.message);
                    }),
                    Promise.reject(o)
                  );
                }
              });
            })({
              type: "googledrive",
              deletable: false,
              className: "google-drive",
              name: i.GLocale.get(
                new i.GLocaleKey(
                  "GFilesPanelViewBase",
                  "text.personal-google-drive"
                )
              ),
            }).then(() => {
              const e = this.filesPanel.drive;
              e &&
                e.hasEventListeners(l.default.DriveEvent) &&
                e.trigger(
                  new l.default.DriveEvent(
                    this.filesPanel.getContextSource(),
                    l.default.DriveEvent.Type.Added
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
        e instanceof u.default || (e = new u.default(e)),
          (module = e.getUserReference()),
          module && this.panel.find(".g-files-top-account-name").html(module);
      }),
      (b.prototype._corporateStoragesPane = async function (e, t, n) {
        const o = () => {
          for (
            var o = $("<div/>")
                .addClass("corporate-storages-pane")
                .on("click", () => {
                  gDesigner.stats(
                    "filespanel-view_close_corporate-storages-pane"
                  ),
                    o.gOverlay("close");
                }),
              i = $("<div />").addClass("storage-container"),
              a = 0,
              s = t.length;
            a < s;
            a++
          ) {
            var l = t[a];
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
                .appendTo(i)[0]
                .addEventListener(
                  "mousedown",
                  () => {
                    o.gOverlay("close"),
                      gDesigner.stats(
                        "filespanel-view_select_corporate-storage"
                      ),
                      n(e);
                  },
                  true
                );
            }).call(this, l);
          }
          i.appendTo(o),
            this._closeCorporateSubMenu(),
            e.addClass("active"),
            o
              .gOverlay({
                padding: false,
                releaseOnClose: true,
                clazz: "cloud-corporate-storage-pane-overlay",
                offsetX: e.outerWidth() - 11,
                offsetY: -e.outerHeight(),
                closeCallback: () => {
                  e.removeClass("active"),
                    gContainer.getRuntime() === r.default.Runtime.IPad &&
                      e.gOverlay("close");
                },
              })
              .gOverlay("open", e, this.panel),
            (this._corporateSubMenu = o);
        };
        gContainer.getRuntime() === r.default.Runtime.IPad
          ? e.click(() => {
              e.gOverlay("open"), o();
            })
          : e.hover(o);
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
                  i.GLocale.get(new i.GLocaleKey("GFilesPanel", "text.updated"))
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
                    i.GLocale.get(new i.GLocaleKey("GFilesPanel", "text.name"))
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
                    i.GLocale.get(
                      new i.GLocaleKey("GFilesPanel", "text.created")
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
                  i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.ascending")
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
                  i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.descending")
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
        const o = $(n);
        e
          ? this.filesPanel.addFileTypeToSelectedFilter(t)
          : this.filesPanel.deleteFileTypeFromSelectedFilter(t),
          this.filesPanel.sort(),
          0 !== this.filesPanel.getSelectedFilterForFileTypes().length
            ? o.hasClass("g-check") || o.addClass("g-check")
            : o.hasClass("g-check") && o.removeClass("g-check");
      }),
      (b.prototype._createFilterFileTypeOverlay = function (e) {
        var t = $("<div/>").addClass("context-pane");
        const require = this.filesPanel.getAvailableFileTypesFilter();
        if (!require || !require.length) return;
        var o = this;
        return (
          require.forEach((n) => {
            !(function (t, n) {
              const a = $('<input type="checkbox"/>').on("click", function (n) {
                n.stopImmediatePropagation(),
                  o._handleFilterItemClick(a[0].checked, t.type, e);
              });
              $("<div/>")
                .addClass("context-button")
                .addClass("sort-option")
                .addClass(t.id)
                .append(a)
                .append(
                  $("<label/>")
                    .addClass("label")
                    .css("cursor", "pointer")
                    .text(i.GLocale.get(t.name))
                )
                .on("click", function (n) {
                  n.preventDefault(),
                    n.stopImmediatePropagation(),
                    (a[0].checked = !a[0].checked),
                    o._handleFilterItemClick(a[0].checked, t.type, e);
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
                i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.clear"))
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
              const o = $(n),
                i = o.data("node");
              ((i && "id" in i && (i.id === t.id || i.id === t)) || i === t) &&
                o.addClass("opened");
            });
        if (n && !n.isRootFolder()) {
          var o = n.getChildren();
          o && o.length && o.forEach((e) => e.refresh());
        }
      }),
      (b.prototype._isMultiSelectionEnabled = function () {
        return this.filesPanel.isMultiSelectionEnabled();
      }),
      (b.prototype.manageSelection = function (e, t) {
        if (
          (this.panel.find(".g-gravit-file").removeClass("last-selected"),
          a.GPlatform.modifiers.metaKey)
        )
          e.hasClass("selected")
            ? (e.removeClass("selected"),
              this.filesPanel.removeFromSelection(t))
            : this._addToSelection(e);
        else if (
          this._isMultiSelectionEnabled() &&
          a.GPlatform.modifiers.shiftKey
        ) {
          var require = $(e),
            o = require.nextAll(".g-cloud-element.selected"),
            i = require.prevAll(".g-cloud-element.selected"),
            r = i.length > 0 ? i[0] : null,
            s = o.length > 0 ? o[0] : null;
          if (!r || !s) {
            this.resetSelection();
            var l = [],
              c = null;
            if (
              (r
                ? ((c = $(r)), (l = $(r).nextUntil(e)))
                : ((c = $(s)), (l = $(e).nextUntil(s))),
              l.length > 0)
            )
              for (var d = 0; d < l.length; ++d) {
                let e = $(l[d]);
                this._addToSelection(e);
              }
            this._addToSelection(e), this._addToSelection(c);
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
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.new-folder")
                )
              )
          )
          .attr(
            "data-title",
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.new-folder-tooltip")
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
              i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.sort"))
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
              i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.filter"))
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
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.back-tooltip")
            )
          )
          .append($("<span/>").addClass("icon").addClass("gravit-icon-w-back"))
          .append(
            $("<span/>")
              .addClass("label")
              .text(
                i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.back"))
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
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.my-cloud-tooltip")
            )
          )
          .append($("<span/>").addClass("icon").addClass("gravit-icon-w-back"))
          .append(
            $("<span/>")
              .addClass("label")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.my-cloud")
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
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.card-view-button")
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
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.list-view-button")
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
        const o = this.filesPanel.getSelection();
        if (!e || !this._user || (o && 1 !== o.length))
          this._closeFileInfoPanel();
        else {
          o[0].id !== e.id && (e = o[0]);
          try {
            this._openFileInfoPanel(),
              this._fileInfoPanel.toggleClass("loading", true),
              this._fileInfoPanel.empty();
            const o = $("<div/>")
                .addClass("g-file-detail-container")
                .appendTo(this._fileInfoPanel),
              i = y.getRenderForFile(e);
            await i.render(o, e),
              i.addEventListener(v, (o) =>
                this._detailRenderEventListener(o, e, t, n)
              );
          } finally {
            this._fileInfoPanel.toggleClass("loading", false),
              this._scrollToTheFile(t, n),
              n && this._expandRecentListIfFileWasHidden(t);
          }
        }
      }),
      (b.prototype._detailRenderEventListener = function (e, t, n, o) {
        switch (e.type) {
          case v.Type.DoubleClickFile:
            this.filesPanel.handleFileDblClick(e.data);
            break;
          case v.Type.Reload:
            this._updateFileInfoPanel(t, n, o);
            break;
          case v.Type.UnshareWithMe:
            this._closeFileInfoPanel(), this.filesPanel.updateFilesList();
        }
      }),
      (b.prototype._scrollToTheFile = function (e) {
        const module = this._rightSide.height() / 3,
          require = e[0],
          o = require.offsetTop - module > 0 ? require.offsetTop - module : 0;
        this._rightSide.animate({ scrollTop: o + "px" }, 400);
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
        if (a.GPlatform.modifiers.metaKey || a.GPlatform.modifiers.ctrlKey) {
          var module = this.panel.find(".search-container > input.search-field");
          module.length > 0 && (e.preventDefault(), module.focus());
        }
      }),
      (b.prototype._handlePasteShortcut = function (e) {
        function module() {
          e.preventDefault(), e.stopPropagation();
        }
        (a.GPlatform.modifiers.metaKey || a.GPlatform.modifiers.ctrlKey) &&
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
            l.default.DriveEvent,
            this._handleDriveEvent,
            this
          );
      }),
      (b.prototype._setContextMenuActiveRangeSize = function (e) {
        const module = e || this._contextMenu,
          require = $(".frame.cloud-frame"),
          o = require.offset();
        o &&
          (module.setActiveRangeSize(o.left, o.top, require.height(), require.width()),
          this._downloadContextMenu &&
            this._downloadContextMenu.setActiveRangeSize(
              o.left,
              o.top,
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