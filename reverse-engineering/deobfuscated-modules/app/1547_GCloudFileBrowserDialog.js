/**
 * Webpack Module #1547
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(557) /* stub_requires_1102 */, require(26) /* polyfill_DOMCollection_iterator */;
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* polyfill_RegExp_constructor */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(3) /* polyfill_RegExp_toString */,
      require(271) /* polyfill_String_endsWith */,
      require(34) /* polyfill_String_replace */,
      require(851) /* DataModule_851 */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(322) /* stub_requires_669 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GCloudFileBrowser = _interopRequireDefault(require(1300) /* GCloudFileBrowser */),
      DataModule_1163 = require(1163) /* DataModule_1163 */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      DataModule_593 = require(593) /* DataModule_593 */,
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      u = (function (e, t) {
        if ("function" == typeof WeakMap)
          var require = new WeakMap(),
            _interopRequireDefault = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var GCore,
            GEditor,
            GCloudFileBrowser = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return GCloudFileBrowser;
          if ((GCore = t ? _interopRequireDefault : require)) {
            if (GCore.has(e)) return GCore.get(e);
            GCore.set(e, GCloudFileBrowser);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((GEditor =
                (GCore = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (GEditor.get || GEditor.set)
                ? GCore(GCloudFileBrowser, t, GEditor)
                : (GCloudFileBrowser[t] = e[t]));
          return GCloudFileBrowser;
        })(e, t);
      })(require(862) /* Exports_TYPES */),
      p = require(858) /* Exports_GFilesPanel */;
    const GCloudStorageItem = require(156) /* GCloudStorageItem */,
      { CLOUD_DIALOG: h } = require(10) /* AppSettings */,
      { GPlatform: f } = require(15) /* GEditor */,
      GContainer = require(85) /* GContainer */,
      { GRegex: y } = require(263) /* Exports_GRegex */,
      v = function () {
        GCloudFileBrowser.default.apply(this, arguments),
          (this._lockEnter = false),
          this.panel.addClass("full-width");
      };
    GCore.GObject.inherit(v, GCloudFileBrowser.default);
    var GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */;
    (v.prototype._lockEnter = false),
      (v.prototype.filesPanel = null),
      (v.prototype.createHeader = function () {
        var e = this,
          t = $("<div/>").addClass("header").appendTo(this.panel);
        this.renderNewFolderButton(t, () => {
          var t = e.filesPanel.drive.getCurrentFolder();
          if (!t || e.filesPanel.drive.isRootFolder())
            return e.filesPanel.updateFilesList();
          e._cloudFolders.forEach((e) => {
            e.getFolder().id === (t.id || t) && e.refresh();
          });
        });
        var n = "";
        $("<div />")
          .addClass("search-container")
          .append(
            $("<input />")
              .addClass("search-field")
              .attr("type", "text")
              .attr("size", "12")
              .attr(
                "placeholder",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "text.search-placeholder")
                )
              )
              .on("keyup", function (t) {
                t.stopPropagation();
                var _interopRequireDefault = $(this).val().trim();
                _interopRequireDefault !== n &&
                  ((n = $(this).val()),
                  gDesigner.stats("filespanel-view_execute_search", _interopRequireDefault),
                  e.filesPanel.search(_interopRequireDefault));
                var GCore = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".clear-search-icon"),
                  GEditor = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-icon");
                _interopRequireDefault.length ? (GCore.show(), GEditor.hide()) : (GCore.hide(), GEditor.show());
              })
              .on("focusin", function () {
                e.panel
                  .find(".header")
                  .find(".search-container")
                  .toggleClass("g-active", true);
              })
              .on("focusout", function () {
                e.panel
                  .find(".header")
                  .find(".search-container")
                  .toggleClass("g-active", false);
              })
              .on("input:reset", function () {
                $(this).val(""),
                  (n = ""),
                  e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".clear-search-icon")
                    .hide();
              })
              .on("keydown", function (t) {
                if (GEditor.GKey.translateCode(t.key) === GEditor.GKey.Constant.TAB) {
                  var n = $(this).val().trim();
                  e.filesPanel.search(n),
                    t.preventDefault(),
                    t.stopPropagation();
                }
              })
          )
          .append(
            $("<div />")
              .addClass("clear-search-icon")
              .append(
                $("<span />").addClass("icon").addClass("gravit-icon-close")
              )
              .on("click", function (t) {
                t.stopPropagation();
                var _interopRequireDefault = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-field"),
                  GCore = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-icon");
                _interopRequireDefault.val(""),
                  (n = ""),
                  e.filesPanel.updateFilesList(false, false),
                  gDesigner.stats("filespanel-view_clear_search-field"),
                  $(this).hide(),
                  _interopRequireDefault.focus(),
                  GCore.show();
              })
              .hide()
          )
          .append(
            $("<div />")
              .addClass("search-icon")
              .append(
                $("<span />").addClass("icon").addClass("gravit-icon-magnifier")
              )
              .on("click", function (t) {
                t.stopPropagation(),
                  gDesigner.stats("filespanel-view_search_focus"),
                  e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-field")
                    .focus();
              })
          )
          .appendTo(t),
          $("<div/>").addClass("fake").appendTo(t),
          this.renderSortButton(t);
        const _interopRequireDefault = this.filesPanel.getAvailableFileTypesFilter();
        "function" == typeof u.default &&
          this.filesPanel.drive instanceof u.default &&
          _interopRequireDefault &&
          _interopRequireDefault.length > 1 &&
          this.renderFileTypeFilterButton(t),
          this.renderGridStyleButtons(t),
          this._buildContextMenu(),
          this._buildAdditionalContextMenu();
      }),
      (v.prototype._permissionChanged = function () {
        GCloudFileBrowser.default.prototype._permissionChanged.call(this);
        const exports = this.panel.find(".header").find(".new-folder");
        if (this._isCreateFolderEnabled())
          exports.attr(
            "data-title",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.new-folder-tooltip")
            )
          ),
            exports.removeClass("g-disabled");
        else {
          const t = GCore.GLocale.get(
            new GCore.GLocaleKey("GFilesPanel", "text.option-isnt-available"),
            "This option isn’t available for Cloud Drives"
          );
          exports.attr("data-title", t), exports.addClass("g-disabled");
        }
      }),
      (v.prototype.addSearchBar = function (e) {
        $("<div />")
          .addClass("g-search-no-results")
          .hide()
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.search-not-found")
            )
          )
          .appendTo(e);
      }),
      (v.prototype.createFooter = function (e) {
        var t = $("<div/>").addClass("footer").appendTo(this.panel);
        if (this.filesPanel.isSaveMode()) {
          var require = $("<div />").addClass("save-form-container").appendTo(t);
          const GEditor = $("<div/>").addClass("input-container").appendTo(require);
          var _interopRequireDefault = $("<input/>")
            .addClass("file-name")
            .val(
              e
                ? (0, CollaborationMergeUtils.decodeHTML)(e)
                : GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.untitled")
                  )
            )
            .appendTo(GEditor);
          const GCloudFileBrowser = f.webBrowser === f.constructor.WebBrowser.Safari,
            DataModule_1163 = gContainer.getRuntime() === GContainer.Runtime.IPad;
          (GCloudFileBrowser || DataModule_1163) &&
            _interopRequireDefault.on("click", () => {
              _interopRequireDefault.focus();
            }),
            $("<div/>")
              .addClass("g-button")
              .addClass("cloud-button")
              .addClass("cancel")
              .attr(
                "data-title",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.cancel-tooltip")
                )
              )
              .html(GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "cancel")))
              .on(
                "click",
                function (e) {
                  e.stopPropagation(), this.filesPanel.handleCancelSave();
                }.bind(this)
              )
              .appendTo(GEditor),
            this.filesPanel.setKeyListener((e, t) => {
              if (13 === e && !this._lockEnter) {
                const e = this._getSelectedExtension(),
                  n = this._getSaveOptions();
                if (!this.filesPanel._canDownload(e)) return;
                t.preventDefault(), this.filesPanel.handleSave(_interopRequireDefault.val(), e, n);
              }
            }),
            gDesigner.getApplicationManager().isSavingToCloudEnabled() &&
              gDesigner.getApplicationManager().isSavingAsEnabled() &&
              $("<div/>")
                .addClass("g-button")
                .addClass("cloud-button")
                .addClass("primary")
                .addClass("save")
                .append(
                  $("<span/>").addClass("icon").addClass("gravit-icon-w-save")
                )
                .append(
                  $("<span/>")
                    .addClass("label")
                    .text(
                      GCore.GLocale.get(new GCore.GLocaleKey("GSaveAction", "title"))
                    )
                )
                .on(
                  "click",
                  function (e) {
                    e.stopPropagation();
                    const t = this._getSelectedExtension(),
                      require = this._getSaveOptions();
                    this.filesPanel._canDownload(t) &&
                      this.filesPanel.handleSave(_interopRequireDefault.val(), t, require);
                  }.bind(this)
                )
                .appendTo(GEditor),
            this._setSelectedExtension(u.DEFAULT_TYPE.ext),
            this.panel
              .find(".g-items-container")
              .addClass("g-items-container-footer"),
            _interopRequireDefault.focus();
        } else t.hide();
      }),
      (v.prototype._getSelectedExtension = function () {
        const exports = this.panel
          .find(".save-form-container")
          .find("option:selected")
          .val();
        if (!exports)
          return (
            (this.filesPanel.getDefaultSaveFormat() &&
              this.filesPanel.getDefaultSaveFormat().ext) ||
            u.DEFAULT_TYPE.ext
          );
        const module = this.filesPanel.getPossibleExtensions();
        return (0, CollaborationMergeUtils.getExtensionFromString)(exports, module) || u.DEFAULT_TYPE.ext;
      }),
      (v.prototype._getSelectedVersion = function () {
        const exports = this.panel
          .find(".save-form-container")
          .find("option:selected")
          .val();
        if (!exports) return Number(this.filesPanel.getDefaultVersionForSave());
        const module = this._getVersionFromValue(exports);
        return Number(module || this.filesPanel.getDefaultVersionForSave());
      }),
      (v.prototype._setSelectedExtension = function (e) {
        this.panel
          .find(
            'select.file-extension > option[value="'.concat(
              e.toUpperCase(),
              '"]'
            )
          )
          .prop("selected", true);
      }),
      (v.prototype._removeCDRExtensionFromFileName = function (e) {
        return e.endsWith(".cdr") ? e.replace(new RegExp(".cdr$"), "") : e;
      }),
      (v.prototype.addFile = function (e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
          require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
        const _interopRequireDefault = this._removeCDRExtensionFromFileName(e.name);
        var GEditor = this,
          GCloudFileBrowser = this.filesPanel.isItemSelected(e),
          DataModule_593 = this.filesPanel.isItemInClipboard(e),
          GSystemDialog = null;
        GSystemDialog = module
          ? this.panel.find(".g-recent-files-list")
          : require
          ? this.panel.find(".g-example-files-list")
          : this.panel.find(".g-files-list");
        var u = $("<div/>")
          .attr("draggable", e.hasPermission(GCloudStorageItem.Permission.CutPaste))
          .attr("id", e.id)
          .addClass("g-gravit-file")
          .addClass("g-cloud-element")
          .addClass(e.id)
          .addClass(GCloudFileBrowser ? "selected" : "")
          .addClass(DataModule_593 && this.filesPanel.isClipboardModeCut() ? "cut" : "")
          .data("node", e)
          .attr("data-title", e._rootPath ? e._rootPath : _interopRequireDefault)
          .on("dragstart", function (t) {
            if (GEditor._isDuringRenaming())
              return t.stopPropagation(), void t.preventDefault();
            $(this).addClass("dragging"),
              $(".g-tooltip").toggleClass("visible", false);
            const require = t.dataTransfer || t.originalEvent.dataTransfer,
              _interopRequireDefault = document.createElement("div"),
              GCore = $(_interopRequireDefault);
            GCore.addClass("drag-ghost-item"),
              GCore.text(e.name),
              document.getElementById(e.id).appendChild(_interopRequireDefault),
              require.setDragImage(_interopRequireDefault, 30, 15),
              require.setData("text/plain", JSON.stringify(e));
          })
          .on("drag", function (e) {
            if (GEditor._isDuringRenaming())
              return e.stopPropagation(), void e.preventDefault();
            $(".g-tooltip").toggleClass("visible", false);
          })
          .on("dragend", function () {
            $(this).removeClass("dragging");
          })
          .on(
            "dblclick",
            function (t) {
              if (
                (t.stopPropagation(),
                t.preventDefault(),
                !GEditor._isDuringRenaming())
              )
                return this.filesPanel.handleFileDblClick(e), false;
            }.bind(this)
          )
          .on(
            "click",
            function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                GEditor._isDuringRenaming() ||
                  (this.filesPanel.handleFileClick(e, u),
                  this._updateFileInfoPanel(e, u, module));
            }.bind(this)
          )
          .on(
            "contextmenu",
            function (t) {
              t.stopPropagation(), GEditor._handleFileContextMenu(e, u, t);
            }.bind(this)
          );
        e.example && u.addClass("g-gravit-example-file");
        var f = GSystemDialog.find("#".concat(e.id));
        f.length ? $(f).replaceWith(u) : u.appendTo(GSystemDialog);
        var GContainer,
          y,
          v = $("<div />").addClass("image-container").appendTo(u);
        this.filesPanel.getSortType() === p.GFilesPanelSortTypes.CREATED
          ? ((GContainer = (0, DataModule_1163.dateToFilePreviewFormat)(
              e.created ? e.created : e.updated
            )),
            (y = GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.created")
            )))
          : ((GContainer = (0, DataModule_1163.dateToFilePreviewFormat)(
              e.updated ? e.updated : e.created
            )),
            (y = GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "text.updated")
            )));
        var GMenu = e instanceof GCloudStorageItem && e.getSize(),
          GMenu2 = "";
        if (GMenu && h.SHOW_FILE_SIZE_INFO) {
          var w = (0, CollaborationMergeUtils.getSizeInfo)(GMenu);
          w.gb
            ? (GMenu2 += (GMenu2 ? "" : " ") + "".concat(w.gb, " GB"))
            : w.mb
            ? (GMenu2 += (GMenu2 ? "" : " ") + "".concat(w.mb, " MB"))
            : w.kb
            ? (GMenu2 += (GMenu2 ? "" : " ") + "".concat(w.kb, " KB"))
            : (GMenu2 += (GMenu2 ? "" : " ") + "< 1 KB");
        }
        var C = null;
        e instanceof GCloudStorageItem && (C = e.getPreviewURL()),
          C || (C = e.url_t || e.url_s),
          C
            ? v.css("background-image", 'url("'.concat(C, '")'))
            : v.addClass("default-preview");
        var x = $("<div/>").addClass("name-container").appendTo(u);
        $("<div />")
          .addClass("file-name-container")
          .append($("<div />").addClass("name").text(_interopRequireDefault))
          .append(
            $("<input />")
              .attr("type", "text")
              .css("display", "none")
              .addClass("file-name")
              .val(_interopRequireDefault)
              .css("width", $(this).parent().find(".name").outerWidth())
          )
          .appendTo(x),
          this._updateFileNamePreview(u, e),
          $("<div />")
            .addClass("file-updated")
            .attr(
              "data-title",
              ""
                .concat(y, " ")
                .concat(GContainer)
                .concat(GMenu2 ? ", " + GMenu2 : "")
            )
            .text(
              ""
                .concat(y, " ")
                .concat(GContainer)
                .concat(GMenu2 ? ", " + GMenu2 : "")
            )
            .appendTo(u);
        var S = $("<div />").addClass("file-top-tile").appendTo(u);
        return (
          this._isContextMenuAvailableForFile(e) &&
            $("<div />")
              .addClass("file-context")
              .append(
                $("<span />")
                  .addClass("icon")
                  .addClass("gravit-icon-w-kebab")
                  .on("mouseover", function (e) {
                    e.stopPropagation();
                  })
              )
              .on(
                "click",
                function (t) {
                  t.stopPropagation(), GEditor._handleFileContextMenu(e, u, t);
                }.bind(this)
              )
              .on("dblclick", function (e) {
                e.stopPropagation();
              })
              .on("mouseover", function (e) {
                e.stopPropagation();
              })
              .appendTo(S),
          e.hasPermission(GCloudStorageItem.Permission.Open) &&
            !this.filesPanel.isSaveMode() &&
            $("<button />")
              .addClass("open-design-button g-button cloud-button")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GFilesPanel", "action.open-design")
                )
              )
              .on("click", (t) => {
                t.stopPropagation(),
                  e.example ||
                    gDesigner.stats("filespanel-view_open_cloudfile"),
                  this.filesPanel.openFile(e);
              })
              .appendTo(S),
          u
        );
      }),
      (v.prototype._handleFileContextMenu = function (e, t, n) {
        this._isContextMenuAvailableForFile(e) &&
          (gDesigner.stats("filespanel-view_context_cloudfile"),
          this.filesPanel.isItemSelected(e) || this.resetSelection(true),
          this._addToSelection(t),
          this._openContextMenuForEventPosition(n));
      }),
      (v.prototype._updateFileNamePreview = function (e, t) {
        const require = this._removeCDRExtensionFromFileName(t.name);
        var _interopRequireDefault = $(e).find(".file-name-container");
        _interopRequireDefault.attr("data-ending", "..." + require.substr(require.length - 4));
        var GCore = _interopRequireDefault.find(".name");
        GCore.text(require),
          ((e) => e && e.offsetWidth < e.scrollWidth)(GCore[0]) &&
            _interopRequireDefault.addClass("ending");
      }),
      (v.prototype.addFolder = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        this._factoryFolder(e, module)
          .getHTMLContainer()
          .appendTo(this.panel.find(".g-folders-list.main"));
      }),
      (v.prototype.addCustomFolder = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        this._factoryFolder(e, module)
          .getHTMLContainer()
          .appendTo(this.panel.find(".g-folders-list.custom-folders")),
          "shared_files_with_me" === e.id &&
            ("shared_files_with_me" ===
            this.filesPanel.drive.getCurrentFolder().id
              ? this.hideFileTypeFilterButton()
              : this.displayFileTypeFilterButton());
      }),
      (v.prototype.scrollToSelectedElement = function (e) {
        var t = null;
        return (
          this.panel
            .find(".g-files-list")
            .find(".g-gravit-file")
            .each(
              function (n, _interopRequireDefault) {
                if ($(_interopRequireDefault).data("node").id === e.id)
                  return (
                    (t = $(_interopRequireDefault).data("node")),
                    setTimeout(() => {
                      this.panel
                        .find(".g-items-container")
                        .scrollTop($(_interopRequireDefault).position().top);
                    }),
                    false
                  );
              }.bind(this)
            ),
          t
        );
      }),
      (v.prototype.updateControls = function (e) {
        this.panel.find(".g-gravit-folder").length > 0
          ? this.panel.find(".g-folders-list").show()
          : this.panel.find(".g-folders-list").hide();
        const module = this.panel.find(".header"),
          require = module.find(".new-folder"),
          _interopRequireDefault = module.find(".back");
        this.getSearchValue()
          ? (require.addClass("g-disabled"),
            _interopRequireDefault.addClass("g-hidden"),
            this.panel.find(".g-files-list").find(".g-gravit-file").length <
              1 && this._showNoResultsInfo())
          : this._isCreateFolderEnabled() && require.removeClass("g-disabled"),
          this.filesPanel.isRootFolder()
            ? _interopRequireDefault.addClass("g-hidden")
            : _interopRequireDefault.removeClass("g-hidden"),
          e &&
            this.filesPanel.isSaveMode() &&
            this.panel.find(".footer").find("input.file-name").select();
      }),
      (v.prototype._showNoResultsInfo = function () {
        this.panel.find(".g-search-no-results").show();
      }),
      (v.prototype._checkItemPermission = function (e, t) {
        return (e instanceof Array ? e : [e]).every((e) =>
          e instanceof GCloudStorageItem
            ? e.hasPermission(t)
            : (console.error("Wrong check for file permission", e), true)
        );
      }),
      (v.prototype._openContextMenuForEventPosition = function (e) {
        var t = e.pageX,
          n = e.pageY;
        this._contextMenu.open({ x: t, y: n });
      }),
      (v.prototype._renameFile = function (e, t, n) {
        const _interopRequireDefault = this._removeCDRExtensionFromFileName(e.name),
          GCloudFileBrowser = this;
        GCloudFileBrowser.toggleLoading(false);
        var DataModule_1163 = t.find("input");
        DataModule_1163.off("focusout"), DataModule_1163.off("keypress");
        var CollaborationMergeUtils = t.find("div.name");
        t.addClass("renaming"),
          $(t).attr("data-title", _interopRequireDefault),
          CollaborationMergeUtils.text(_interopRequireDefault),
          DataModule_1163.css("width", CollaborationMergeUtils.outerWidth()),
          DataModule_1163.val(_interopRequireDefault),
          $(t).find(".file-name-container").removeClass("ending"),
          DataModule_1163.css("width", CollaborationMergeUtils.outerWidth());
        var DataModule_593 = DataModule_1163.val(),
          u = false;
        DataModule_1163.show(), CollaborationMergeUtils.hide(), DataModule_1163.focus();
        const p = (t) => {
          let n;
          return (
            (n =
              e.getType() === GCloudStorageItem.Type.File
                ? GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFilesPanel",
                      "text.file-already-exists-on-current-location"
                    )
                  ).replace("%filename", '"'.concat(t, '"'))
                : GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFilesPanel",
                      "text.folder-already-exists-on-current-location"
                    )
                  ).replace("%foldername", '"'.concat(t, '"'))),
            new Promise((e) => {
              GSystemDialog.default.confirm(n, (t) => e(!!t), null, null, false, true, true);
            })
          );
        };
        var h = async function () {
          try {
            DataModule_1163.hide(), CollaborationMergeUtils.show();
            let _interopRequireDefault,
              GEditor = DataModule_1163.val();
            if (e.getType() === GCloudStorageItem.Type.File && !GCloudFileBrowser._isUserInputValidFileName(GEditor))
              return (
                GSystemDialog.default.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GFilesPanel",
                      "text.new-file-name-invalid"
                    )
                  )
                ),
                void DataModule_1163.val(DataModule_593)
              );
            if (GEditor.trim() && GEditor.trim() !== e.name) {
              GCloudFileBrowser.toggleLoading(true);
              try {
                let GCore = 0;
                const DataModule_1163 = e.ext || e.extension;
                if (GCloudFileBrowser.filesPanel.drive.supportsSaveCollisionFlow())
                  if (e.getType() === GCloudStorageItem.Type.File) {
                    if (
                      (await GCloudFileBrowser.filesPanel.drive.fileExists(
                        GEditor,
                        DataModule_1163,
                        e.parent || GCloudFileBrowser.filesPanel.drive.getRootFolder()
                      )) &&
                      !(await p(GEditor))
                    )
                      return GCloudFileBrowser._renameFile(e, t, n);
                    if (GCloudFileBrowser.filesPanel.drive.requiresOverwriteCollisionHandling())
                      for (
                        _interopRequireDefault = GEditor;
                        await GCloudFileBrowser.filesPanel.drive.fileExists(
                          _interopRequireDefault,
                          DataModule_1163,
                          e.parent || GCloudFileBrowser.filesPanel.drive.getRootFolder()
                        );

                      )
                        _interopRequireDefault = "".concat(GEditor, " (").concat(++GCore, ")");
                  } else {
                    if (
                      (await GCloudFileBrowser.filesPanel.drive.folderExists(
                        GEditor,
                        e.parent || GCloudFileBrowser.filesPanel.drive.getRootFolder()
                      )) &&
                      !(await p(GEditor))
                    )
                      return GCloudFileBrowser._renameFile(e, t, n);
                    if (GCloudFileBrowser.filesPanel.drive.requiresOverwriteCollisionHandling())
                      for (
                        _interopRequireDefault = GEditor;
                        await GCloudFileBrowser.filesPanel.drive.folderExists(
                          _interopRequireDefault,
                          e.parent || GCloudFileBrowser.filesPanel.drive.getRootFolder()
                        );

                      )
                        _interopRequireDefault = "".concat(GEditor, " (").concat(++GCore, ")");
                  }
                _interopRequireDefault || (_interopRequireDefault = GEditor), await GCloudFileBrowser.filesPanel.renameItem(e, _interopRequireDefault);
              } catch (e) {
                return (
                  GCloudFileBrowser.toggleLoading(false),
                  e && e.badName
                    ? void GSystemDialog.default.alert(e.message)
                    : (DataModule_1163.val(DataModule_593),
                      void GSystemDialog.default.alert(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GFilesPanel", "text.error-renaming")
                        )
                      ))
                );
              }
              !(function (t) {
                const n = gDesigner.getWindows(),
                  _interopRequireDefault = n && n.getWindows();
                if (!_interopRequireDefault || !_interopRequireDefault.length) return;
                for (let n = 0, GCore = _interopRequireDefault.length; n < GCore; n++) {
                  let GCore = _interopRequireDefault[n].getDocument();
                  if (GCore && GCore.getId() === e.id) {
                    GCore.setTitle(t);
                    break;
                  }
                }
              })(_interopRequireDefault),
                (e.name = _interopRequireDefault),
                DataModule_1163.css("width", CollaborationMergeUtils.outerWidth());
              const u = (t) => {
                ($(t).data("node").name = _interopRequireDefault),
                  $(t).attr("data-title", _interopRequireDefault),
                  $(t).find("div.name").text(_interopRequireDefault),
                  GCloudFileBrowser._updateFileNamePreview(t, e);
              };
              e.getType() === GCloudStorageItem.Type.Folder
                ? u(t)
                : $.each(GCloudFileBrowser._rightSide.find(".".concat(e.id)), (e, t) => {
                    u(t);
                  }),
                GCloudFileBrowser._fileInfoPanelIsOpen && GCloudFileBrowser._updateFileInfoPanel(e, t, false),
                GCloudFileBrowser.filesPanel._triggerFileRenamed(e),
                GCloudFileBrowser.toggleLoading(false),
                n && n();
            } else DataModule_1163.val(DataModule_593);
          } catch (e) {
            throw (console.log("err changing the name", e), e);
          }
        };
        DataModule_1163.on("focusout", function () {
          u || (h(), (u = true)), t.removeClass("renaming");
        }).on("keypress", function (e) {
          const n = e.which || e.charCode || e.keyCode;
          GEditor.GKey.translateKey(n) !== GEditor.GKey.Constant.ENTER ||
            u ||
            (gDesigner.stats("filespanel-view_update_cloudfile-name"),
            h(),
            (u = true)),
            t.removeClass("renaming");
        });
      }),
      (v.prototype._updateMenuItemCaption = function (e, t) {
        this.filesPanel.getSelection().length > 1
          ? e.setCaption(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "text.selection-multiple")
              )
                .replace("%selection", t)
                .replace(
                  "%multiple",
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GFilesPanel", "text.multiple")
                  )
                )
            )
          : e.setCaption(t);
      }),
      (v.prototype._isFolderSelected = function () {
        var e = this.filesPanel.getSelection();
        return 1 === e.length && e[0].getType() === GCloudStorageItem.Type.Folder;
      }),
      (v.prototype._getNativeMenuItems = function () {
        return [
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.open")
            ),
            click: () => {
              if (this._isFolderSelected()) {
                gDesigner.stats("filespanel-view_open_cloudfolder");
                var exports = this.filesPanel.getSelection(),
                  module = this._getSelectedFolderUIElement();
                this.filesPanel.navigateToFolder(exports[0]),
                  this.filesPanel.manageOpenFolder(module, exports[0]),
                  this._expandSelectedFolder();
              } else {
                gDesigner.stats("filespanel-view_opencontext_cloud");
                exports = this.filesPanel.getSelection();
                this.filesPanel.openFile.call(this.filesPanel, exports[0]);
              }
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              e.sender.setEnabled(1 === t.length),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.Open)
                );
            },
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.rename")
            ),
            click: () => {
              var e = this.filesPanel.getSelection();
              gDesigner.stats("filespanel-view_rename_cloud");
              const module = this._isFolderSelected()
                ? $(".g-gravit-folder.selected")
                : this._rightSide.find(".selected").eq(0);
              this._renameFile(e[0], module);
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              e.sender.setEnabled(1 === t.length),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.Rename)
                );
            },
          },
          {
            caption: GCore.GLocale.get(new GCore.GLocaleKey("GPasteAction", "title")),
            click: () => {
              this.filesPanel.isClipboardModeCut()
                ? this.filesPanel.performCutPaste()
                : this.filesPanel.performCopyPaste();
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              const require =
                this.filesPanel.isClipboardModeCut() ||
                this.filesPanel.isClipboardModeCopy();
              e.sender.setEnabled(require),
                e.sender.setVisible(
                  this._checkItemPermission(t, GCloudStorageItem.Permission.CutPaste) ||
                    (0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t)
                );
            },
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.copy")
            ),
            click: () => {
              this.filesPanel.performCopyPaste(
                p.GFilesPanelClipboardModes.DEFAULT
              );
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              this._updateMenuItemCaption(
                e.sender,
                GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.copy"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.Copy)
                );
            },
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.cut")
            ),
            click: () => {
              this.filesPanel.performCutPaste(
                p.GFilesPanelClipboardModes.DEFAULT
              );
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              this._updateMenuItemCaption(
                e.sender,
                GCore.GLocale.get(new GCore.GLocaleKey("GFilesPanel", "action.cut"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.CutPaste)
                );
            },
          },
          {
            caption: GCore.GLocale.get(new GCore.GLocaleKey("GDeleteAction", "title")),
            click: () => {
              this.filesPanel.handleDelete();
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              this._updateMenuItemCaption(
                e.sender,
                GCore.GLocale.get(new GCore.GLocaleKey("GDeleteAction", "title"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.Delete)
                );
            },
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GUnshareWithMeAction", "title")
            ),
            click: async () => {
              if (gDesigner.getShareManager().isShareProRestricted())
                gDesigner.handleShareFilePROFeatureInterruption();
              else {
                const e = await gDesigner.getUser();
                if (!e) return;
                const t = this.filesPanel.getSelection()[0].getId(),
                  n = e.getUID();
                console.log(
                  "About to call unshare with item id: %s and user id: %s",
                  t,
                  n
                ),
                  await gApi.unshareWithUser(t, n),
                  this._closeFileInfoPanel(),
                  this.filesPanel.updateFilesList();
              }
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              this._updateMenuItemCaption(
                e.sender,
                GCore.GLocale.get(new GCore.GLocaleKey("GUnshareWithMeAction", "title"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, GCloudStorageItem.Permission.UnshareWithMe)
                );
            },
          },
        ];
      }),
      (v.prototype._buildContextMenu = function () {
        (this._contextMenu = new GMenu(null, "g-file-panel-context-menu")),
          this._setContextMenuActiveRangeSize();
        this._getNativeMenuItems().forEach((e) => {
          this._contextMenu
            .createAddItem(e.caption, e.click)
            .addEventListener(GMenu2.UpdateEvent, e.update.bind(this));
        }),
          this._createContextMenuDownloadMenu();
      }),
      (v.prototype._buildAdditionalContextMenu = function () {}),
      (v.prototype._createContextMenuDownloadMenu = async function () {
        this._contextMenu
          .createAddItem(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GFilesPanel", "action.download-title")
            ),
            () => {
              1 === this.filesPanel.getSelection().length
                ? gDesigner.stats("filespanel-view_download_file")
                : gDesigner.stats("filespanel-view_download_multiple-files"),
                this.filesPanel.handleDownload();
            }
          )
          .addEventListener(GMenu2.UpdateEvent, (e) => {
            var t = this.filesPanel.getSelection();
            this._updateMenuItemCaption(
              e.sender,
              GCore.GLocale.get(
                new GCore.GLocaleKey("GFilesPanel", "action.download-title")
              ),
              t
            ),
              e.sender.setEnabled(t.length > 0),
              e.sender.setVisible(
                !(0, DataModule_593.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                  this._checkItemPermission(t, GCloudStorageItem.Permission.Download) &&
                  !this._isFolderSelected()
              );
          });
      }),
      (v.prototype.toggleFolders = function (e) {
        this.panel.find(".g-left-side").toggleClass("g-no-display", !e);
      }),
      (v.prototype.getSearchValue = function () {
        const exports = this.panel
          .find(".header")
          .find(".search-container")
          .find(".search-field")
          .val();
        return exports ? exports.trim() : "";
      }),
      (v.prototype.focusFileNameInput = function (e) {
        this.setFileNameInputValue(e.name),
          this.panel.find(".footer").find("input.file-name").focus().select();
      }),
      (v.prototype.setFileNameInputValue = function (e) {
        this.panel.find(".footer").find("input.file-name").val(e);
      }),
      (v.prototype._isDuringRenaming = function () {
        return !!this.panel.find(".g-gravit-file.selected.renaming").length;
      }),
      (v.prototype._expandSelectedFolder = function () {
        $(".g-gravit-folder.opened .folder-state-icon.closed").click();
      }),
      (v.prototype.setLockEnterState = function (e) {
        this._lockEnter = e;
      }),
      (v.prototype._isUserInputValidFileName = function (e) {
        return y.String.ValidFileName.test(e);
      }),
      (v.prototype._getSelectedFolderUIElement = function () {
        return $(".g-gravit-folder.g-cloud-element.selected");
      }),
      (exports.exports = v);
  }