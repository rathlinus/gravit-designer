/**
 * Webpack Module #1547
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(557) /* stub_requires_1102 */, require(26) /* polyfill_DOMCollection_iterator */;
    var o = require(16) /* _interopRequireDefault */;
    require(96) /* polyfill_JSON_stringify */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* module_356 */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(3) /* polyfill_RegExp_toString */,
      require(271) /* polyfill_String_endsWith */,
      require(34) /* polyfill_String_replace */,
      require(851) /* module_851 */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(322) /* stub_requires_669 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(1300) /* module_1300 */),
      s = require(1163) /* module_1163 */,
      l = require(40) /* CollaborationMergeUtils */,
      c = require(593) /* module_593 */,
      d = o(require(44) /* GSystemDialog */),
      u = (function (e, t) {
        if ("function" == typeof WeakMap)
          var require = new WeakMap(),
            o = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            a,
            r = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((i = t ? o : require)) {
            if (i.has(e)) return i.get(e);
            i.set(e, r);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((a =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (a.get || a.set)
                ? i(r, t, a)
                : (r[t] = e[t]));
          return r;
        })(e, t);
      })(require(862) /* Exports_TYPES */),
      p = require(858) /* Exports_GFilesPanel */;
    const g = require(156) /* module_156 */,
      { CLOUD_DIALOG: h } = require(10) /* AppSettings */,
      { GPlatform: f } = require(15) /* module */,
      m = require(85) /* GContainer */,
      { GRegex: y } = require(263) /* Exports_GRegex */,
      v = function () {
        r.default.apply(this, arguments),
          (this._lockEnter = false),
          this.panel.addClass("full-width");
      };
    i.GObject.inherit(v, r.default);
    var _ = require(238) /* GMenu */,
      b = require(339) /* GMenu */;
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
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "text.search-placeholder")
                )
              )
              .on("keyup", function (t) {
                t.stopPropagation();
                var o = $(this).val().trim();
                o !== n &&
                  ((n = $(this).val()),
                  gDesigner.stats("filespanel-view_execute_search", o),
                  e.filesPanel.search(o));
                var i = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".clear-search-icon"),
                  a = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-icon");
                o.length ? (i.show(), a.hide()) : (i.hide(), a.show());
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
                if (a.GKey.translateCode(t.key) === a.GKey.Constant.TAB) {
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
                var o = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-field"),
                  i = e.panel
                    .find(".header")
                    .find(".search-container")
                    .find(".search-icon");
                o.val(""),
                  (n = ""),
                  e.filesPanel.updateFilesList(false, false),
                  gDesigner.stats("filespanel-view_clear_search-field"),
                  $(this).hide(),
                  o.focus(),
                  i.show();
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
        const o = this.filesPanel.getAvailableFileTypesFilter();
        "function" == typeof u.default &&
          this.filesPanel.drive instanceof u.default &&
          o &&
          o.length > 1 &&
          this.renderFileTypeFilterButton(t),
          this.renderGridStyleButtons(t),
          this._buildContextMenu(),
          this._buildAdditionalContextMenu();
      }),
      (v.prototype._permissionChanged = function () {
        r.default.prototype._permissionChanged.call(this);
        const exports = this.panel.find(".header").find(".new-folder");
        if (this._isCreateFolderEnabled())
          exports.attr(
            "data-title",
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.new-folder-tooltip")
            )
          ),
            exports.removeClass("g-disabled");
        else {
          const t = i.GLocale.get(
            new i.GLocaleKey("GFilesPanel", "text.option-isnt-available"),
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
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.search-not-found")
            )
          )
          .appendTo(e);
      }),
      (v.prototype.createFooter = function (e) {
        var t = $("<div/>").addClass("footer").appendTo(this.panel);
        if (this.filesPanel.isSaveMode()) {
          var require = $("<div />").addClass("save-form-container").appendTo(t);
          const a = $("<div/>").addClass("input-container").appendTo(require);
          var o = $("<input/>")
            .addClass("file-name")
            .val(
              e
                ? (0, l.decodeHTML)(e)
                : i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.untitled")
                  )
            )
            .appendTo(a);
          const r = f.webBrowser === f.constructor.WebBrowser.Safari,
            s = gContainer.getRuntime() === m.Runtime.IPad;
          (r || s) &&
            o.on("click", () => {
              o.focus();
            }),
            $("<div/>")
              .addClass("g-button")
              .addClass("cloud-button")
              .addClass("cancel")
              .attr(
                "data-title",
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.cancel-tooltip")
                )
              )
              .html(i.GLocale.get(new i.GLocaleKey("GLocale", "cancel")))
              .on(
                "click",
                function (e) {
                  e.stopPropagation(), this.filesPanel.handleCancelSave();
                }.bind(this)
              )
              .appendTo(a),
            this.filesPanel.setKeyListener((e, t) => {
              if (13 === e && !this._lockEnter) {
                const e = this._getSelectedExtension(),
                  n = this._getSaveOptions();
                if (!this.filesPanel._canDownload(e)) return;
                t.preventDefault(), this.filesPanel.handleSave(o.val(), e, n);
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
                      i.GLocale.get(new i.GLocaleKey("GSaveAction", "title"))
                    )
                )
                .on(
                  "click",
                  function (e) {
                    e.stopPropagation();
                    const t = this._getSelectedExtension(),
                      require = this._getSaveOptions();
                    this.filesPanel._canDownload(t) &&
                      this.filesPanel.handleSave(o.val(), t, require);
                  }.bind(this)
                )
                .appendTo(a),
            this._setSelectedExtension(u.DEFAULT_TYPE.ext),
            this.panel
              .find(".g-items-container")
              .addClass("g-items-container-footer"),
            o.focus();
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
        return (0, l.getExtensionFromString)(exports, module) || u.DEFAULT_TYPE.ext;
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
        const o = this._removeCDRExtensionFromFileName(e.name);
        var a = this,
          r = this.filesPanel.isItemSelected(e),
          c = this.filesPanel.isItemInClipboard(e),
          d = null;
        d = module
          ? this.panel.find(".g-recent-files-list")
          : require
          ? this.panel.find(".g-example-files-list")
          : this.panel.find(".g-files-list");
        var u = $("<div/>")
          .attr("draggable", e.hasPermission(g.Permission.CutPaste))
          .attr("id", e.id)
          .addClass("g-gravit-file")
          .addClass("g-cloud-element")
          .addClass(e.id)
          .addClass(r ? "selected" : "")
          .addClass(c && this.filesPanel.isClipboardModeCut() ? "cut" : "")
          .data("node", e)
          .attr("data-title", e._rootPath ? e._rootPath : o)
          .on("dragstart", function (t) {
            if (a._isDuringRenaming())
              return t.stopPropagation(), void t.preventDefault();
            $(this).addClass("dragging"),
              $(".g-tooltip").toggleClass("visible", false);
            const require = t.dataTransfer || t.originalEvent.dataTransfer,
              o = document.createElement("div"),
              i = $(o);
            i.addClass("drag-ghost-item"),
              i.text(e.name),
              document.getElementById(e.id).appendChild(o),
              require.setDragImage(o, 30, 15),
              require.setData("text/plain", JSON.stringify(e));
          })
          .on("drag", function (e) {
            if (a._isDuringRenaming())
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
                !a._isDuringRenaming())
              )
                return this.filesPanel.handleFileDblClick(e), false;
            }.bind(this)
          )
          .on(
            "click",
            function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                a._isDuringRenaming() ||
                  (this.filesPanel.handleFileClick(e, u),
                  this._updateFileInfoPanel(e, u, module));
            }.bind(this)
          )
          .on(
            "contextmenu",
            function (t) {
              t.stopPropagation(), a._handleFileContextMenu(e, u, t);
            }.bind(this)
          );
        e.example && u.addClass("g-gravit-example-file");
        var f = d.find("#".concat(e.id));
        f.length ? $(f).replaceWith(u) : u.appendTo(d);
        var m,
          y,
          v = $("<div />").addClass("image-container").appendTo(u);
        this.filesPanel.getSortType() === p.GFilesPanelSortTypes.CREATED
          ? ((m = (0, s.dateToFilePreviewFormat)(
              e.created ? e.created : e.updated
            )),
            (y = i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.created")
            )))
          : ((m = (0, s.dateToFilePreviewFormat)(
              e.updated ? e.updated : e.created
            )),
            (y = i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "text.updated")
            )));
        var _ = e instanceof g && e.getSize(),
          b = "";
        if (_ && h.SHOW_FILE_SIZE_INFO) {
          var w = (0, l.getSizeInfo)(_);
          w.gb
            ? (b += (b ? "" : " ") + "".concat(w.gb, " GB"))
            : w.mb
            ? (b += (b ? "" : " ") + "".concat(w.mb, " MB"))
            : w.kb
            ? (b += (b ? "" : " ") + "".concat(w.kb, " KB"))
            : (b += (b ? "" : " ") + "< 1 KB");
        }
        var C = null;
        e instanceof g && (C = e.getPreviewURL()),
          C || (C = e.url_t || e.url_s),
          C
            ? v.css("background-image", 'url("'.concat(C, '")'))
            : v.addClass("default-preview");
        var x = $("<div/>").addClass("name-container").appendTo(u);
        $("<div />")
          .addClass("file-name-container")
          .append($("<div />").addClass("name").text(o))
          .append(
            $("<input />")
              .attr("type", "text")
              .css("display", "none")
              .addClass("file-name")
              .val(o)
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
                .concat(m)
                .concat(b ? ", " + b : "")
            )
            .text(
              ""
                .concat(y, " ")
                .concat(m)
                .concat(b ? ", " + b : "")
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
                  t.stopPropagation(), a._handleFileContextMenu(e, u, t);
                }.bind(this)
              )
              .on("dblclick", function (e) {
                e.stopPropagation();
              })
              .on("mouseover", function (e) {
                e.stopPropagation();
              })
              .appendTo(S),
          e.hasPermission(g.Permission.Open) &&
            !this.filesPanel.isSaveMode() &&
            $("<button />")
              .addClass("open-design-button g-button cloud-button")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey("GFilesPanel", "action.open-design")
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
        var o = $(e).find(".file-name-container");
        o.attr("data-ending", "..." + require.substr(require.length - 4));
        var i = o.find(".name");
        i.text(require),
          ((e) => e && e.offsetWidth < e.scrollWidth)(i[0]) &&
            o.addClass("ending");
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
              function (n, o) {
                if ($(o).data("node").id === e.id)
                  return (
                    (t = $(o).data("node")),
                    setTimeout(() => {
                      this.panel
                        .find(".g-items-container")
                        .scrollTop($(o).position().top);
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
          o = module.find(".back");
        this.getSearchValue()
          ? (require.addClass("g-disabled"),
            o.addClass("g-hidden"),
            this.panel.find(".g-files-list").find(".g-gravit-file").length <
              1 && this._showNoResultsInfo())
          : this._isCreateFolderEnabled() && require.removeClass("g-disabled"),
          this.filesPanel.isRootFolder()
            ? o.addClass("g-hidden")
            : o.removeClass("g-hidden"),
          e &&
            this.filesPanel.isSaveMode() &&
            this.panel.find(".footer").find("input.file-name").select();
      }),
      (v.prototype._showNoResultsInfo = function () {
        this.panel.find(".g-search-no-results").show();
      }),
      (v.prototype._checkItemPermission = function (e, t) {
        return (e instanceof Array ? e : [e]).every((e) =>
          e instanceof g
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
        const o = this._removeCDRExtensionFromFileName(e.name),
          r = this;
        r.toggleLoading(false);
        var s = t.find("input");
        s.off("focusout"), s.off("keypress");
        var l = t.find("div.name");
        t.addClass("renaming"),
          $(t).attr("data-title", o),
          l.text(o),
          s.css("width", l.outerWidth()),
          s.val(o),
          $(t).find(".file-name-container").removeClass("ending"),
          s.css("width", l.outerWidth());
        var c = s.val(),
          u = false;
        s.show(), l.hide(), s.focus();
        const p = (t) => {
          let n;
          return (
            (n =
              e.getType() === g.Type.File
                ? i.GLocale.get(
                    new i.GLocaleKey(
                      "GFilesPanel",
                      "text.file-already-exists-on-current-location"
                    )
                  ).replace("%filename", '"'.concat(t, '"'))
                : i.GLocale.get(
                    new i.GLocaleKey(
                      "GFilesPanel",
                      "text.folder-already-exists-on-current-location"
                    )
                  ).replace("%foldername", '"'.concat(t, '"'))),
            new Promise((e) => {
              d.default.confirm(n, (t) => e(!!t), null, null, false, true, true);
            })
          );
        };
        var h = async function () {
          try {
            s.hide(), l.show();
            let o,
              a = s.val();
            if (e.getType() === g.Type.File && !r._isUserInputValidFileName(a))
              return (
                d.default.alert(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GFilesPanel",
                      "text.new-file-name-invalid"
                    )
                  )
                ),
                void s.val(c)
              );
            if (a.trim() && a.trim() !== e.name) {
              r.toggleLoading(true);
              try {
                let i = 0;
                const s = e.ext || e.extension;
                if (r.filesPanel.drive.supportsSaveCollisionFlow())
                  if (e.getType() === g.Type.File) {
                    if (
                      (await r.filesPanel.drive.fileExists(
                        a,
                        s,
                        e.parent || r.filesPanel.drive.getRootFolder()
                      )) &&
                      !(await p(a))
                    )
                      return r._renameFile(e, t, n);
                    if (r.filesPanel.drive.requiresOverwriteCollisionHandling())
                      for (
                        o = a;
                        await r.filesPanel.drive.fileExists(
                          o,
                          s,
                          e.parent || r.filesPanel.drive.getRootFolder()
                        );

                      )
                        o = "".concat(a, " (").concat(++i, ")");
                  } else {
                    if (
                      (await r.filesPanel.drive.folderExists(
                        a,
                        e.parent || r.filesPanel.drive.getRootFolder()
                      )) &&
                      !(await p(a))
                    )
                      return r._renameFile(e, t, n);
                    if (r.filesPanel.drive.requiresOverwriteCollisionHandling())
                      for (
                        o = a;
                        await r.filesPanel.drive.folderExists(
                          o,
                          e.parent || r.filesPanel.drive.getRootFolder()
                        );

                      )
                        o = "".concat(a, " (").concat(++i, ")");
                  }
                o || (o = a), await r.filesPanel.renameItem(e, o);
              } catch (e) {
                return (
                  r.toggleLoading(false),
                  e && e.badName
                    ? void d.default.alert(e.message)
                    : (s.val(c),
                      void d.default.alert(
                        i.GLocale.get(
                          new i.GLocaleKey("GFilesPanel", "text.error-renaming")
                        )
                      ))
                );
              }
              !(function (t) {
                const n = gDesigner.getWindows(),
                  o = n && n.getWindows();
                if (!o || !o.length) return;
                for (let n = 0, i = o.length; n < i; n++) {
                  let i = o[n].getDocument();
                  if (i && i.getId() === e.id) {
                    i.setTitle(t);
                    break;
                  }
                }
              })(o),
                (e.name = o),
                s.css("width", l.outerWidth());
              const u = (t) => {
                ($(t).data("node").name = o),
                  $(t).attr("data-title", o),
                  $(t).find("div.name").text(o),
                  r._updateFileNamePreview(t, e);
              };
              e.getType() === g.Type.Folder
                ? u(t)
                : $.each(r._rightSide.find(".".concat(e.id)), (e, t) => {
                    u(t);
                  }),
                r._fileInfoPanelIsOpen && r._updateFileInfoPanel(e, t, false),
                r.filesPanel._triggerFileRenamed(e),
                r.toggleLoading(false),
                n && n();
            } else s.val(c);
          } catch (e) {
            throw (console.log("err changing the name", e), e);
          }
        };
        s.on("focusout", function () {
          u || (h(), (u = true)), t.removeClass("renaming");
        }).on("keypress", function (e) {
          const n = e.which || e.charCode || e.keyCode;
          a.GKey.translateKey(n) !== a.GKey.Constant.ENTER ||
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
              i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "text.selection-multiple")
              )
                .replace("%selection", t)
                .replace(
                  "%multiple",
                  i.GLocale.get(
                    new i.GLocaleKey("GFilesPanel", "text.multiple")
                  )
                )
            )
          : e.setCaption(t);
      }),
      (v.prototype._isFolderSelected = function () {
        var e = this.filesPanel.getSelection();
        return 1 === e.length && e[0].getType() === g.Type.Folder;
      }),
      (v.prototype._getNativeMenuItems = function () {
        return [
          {
            caption: i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.open")
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
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.Open)
                );
            },
          },
          {
            caption: i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.rename")
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
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.Rename)
                );
            },
          },
          {
            caption: i.GLocale.get(new i.GLocaleKey("GPasteAction", "title")),
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
                  this._checkItemPermission(t, g.Permission.CutPaste) ||
                    (0, c.hasRootFolderInSelections)(this.filesPanel.drive, t)
                );
            },
          },
          {
            caption: i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.copy")
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
                i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.copy"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.Copy)
                );
            },
          },
          {
            caption: i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.cut")
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
                i.GLocale.get(new i.GLocaleKey("GFilesPanel", "action.cut"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.CutPaste)
                );
            },
          },
          {
            caption: i.GLocale.get(new i.GLocaleKey("GDeleteAction", "title")),
            click: () => {
              this.filesPanel.handleDelete();
            },
            update: (e) => {
              var t = this.filesPanel.getSelection();
              this._updateMenuItemCaption(
                e.sender,
                i.GLocale.get(new i.GLocaleKey("GDeleteAction", "title"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.Delete)
                );
            },
          },
          {
            caption: i.GLocale.get(
              new i.GLocaleKey("GUnshareWithMeAction", "title")
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
                i.GLocale.get(new i.GLocaleKey("GUnshareWithMeAction", "title"))
              ),
                e.sender.setEnabled(t.length > 0),
                e.sender.setVisible(
                  !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                    this._checkItemPermission(t, g.Permission.UnshareWithMe)
                );
            },
          },
        ];
      }),
      (v.prototype._buildContextMenu = function () {
        (this._contextMenu = new _(null, "g-file-panel-context-menu")),
          this._setContextMenuActiveRangeSize();
        this._getNativeMenuItems().forEach((e) => {
          this._contextMenu
            .createAddItem(e.caption, e.click)
            .addEventListener(b.UpdateEvent, e.update.bind(this));
        }),
          this._createContextMenuDownloadMenu();
      }),
      (v.prototype._buildAdditionalContextMenu = function () {}),
      (v.prototype._createContextMenuDownloadMenu = async function () {
        this._contextMenu
          .createAddItem(
            i.GLocale.get(
              new i.GLocaleKey("GFilesPanel", "action.download-title")
            ),
            () => {
              1 === this.filesPanel.getSelection().length
                ? gDesigner.stats("filespanel-view_download_file")
                : gDesigner.stats("filespanel-view_download_multiple-files"),
                this.filesPanel.handleDownload();
            }
          )
          .addEventListener(b.UpdateEvent, (e) => {
            var t = this.filesPanel.getSelection();
            this._updateMenuItemCaption(
              e.sender,
              i.GLocale.get(
                new i.GLocaleKey("GFilesPanel", "action.download-title")
              ),
              t
            ),
              e.sender.setEnabled(t.length > 0),
              e.sender.setVisible(
                !(0, c.hasRootFolderInSelections)(this.filesPanel.drive, t) &&
                  this._checkItemPermission(t, g.Permission.Download) &&
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