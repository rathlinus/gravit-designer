/**
 * Webpack Module #1528
 * Type: class
 * Name: GVersionHistoryProperties
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      AppSettings = require(10) /* AppSettings */,
      DataModule_1163 = require(1163) /* DataModule_1163 */,
      GProperties = _interopRequireDefault(require(123) /* GProperties */),
      GEvent_fileId = _interopRequireDefault(require(1159) /* GEvent_fileId */),
      Item = _interopRequireDefault(require(220) /* Item */),
      GDocument = _interopRequireDefault(require(163) /* GDocument */),
      GLocale = _interopRequireDefault(require(219) /* GLocale */),
      GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */),
      g = _interopRequireDefault(require(86) /* module_86 */),
      GDocumentStatusEvent = _interopRequireDefault(require(217) /* GDocumentStatusEvent */),
      GEvent_storageItem = _interopRequireDefault(require(336) /* GEvent_storageItem */),
      GRichTooltipConfig = _interopRequireDefault(require(67) /* GRichTooltipConfig */);
    function y() {}
    GCore.GObject.inherit(y, GProperties.default),
      (y.ID = "version-history"),
      (y.TITLE = new GCore.GLocaleKey("GVersionHistoryProperties", "title")),
      (y.prototype._relayoutBindedToActiveDocument = null),
      (y.prototype._panel = null),
      (y.prototype._toolbar = null),
      (y.prototype._loadingIndicator = null),
      (y.prototype._previewOverlay = null),
      (y.prototype._fileId = null),
      (y.prototype._enabledInputs = null),
      (y.prototype._previousDoc = null),
      (y.prototype._previewDoc = null),
      (y.prototype.isGroup = function (e) {
        return true;
      }),
      (y.prototype.isAvailable = function (e) {
        return false;
      }),
      (y.prototype.init = function (e, t) {
        (this._panel = e), (this._toolbar = t);
        t.addClass("filled"),
          t.addClass("version-history-toolbar"),
          $("<label/>")
            .addClass("version-history-toolbar")
            .append(
              $("<span />")
                .addClass("pro")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GVersionHistoryProperties", "title")
                  )
                )
            )
            .appendTo(t),
          $("<button/>")
            .append($("<span></span>").addClass("gravit-icon-detach"))
            .on(
              "click",
              function () {
                gDesigner.stats("version-history-panel_close_panel"),
                  this.close();
              }.bind(this)
            )
            .appendTo(t),
          (this._loadingIndicator = $("<div/>")
            .addClass("version-history-panel-loading g-loading")
            .appendTo(e)),
          (this._versionsContainer = $("<div/>")
            .addClass("section")
            .append([
              $("<div/>")
                .addClass("title")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GVersionHistoryProperties",
                      "text.title-manual-save"
                    )
                  )
                )
                .gRichTooltip(
                  GRichTooltipConfig.default.from({
                    title: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GVersionHistoryProperties",
                        "text.title-manual-save-tooltip-title"
                      )
                    ),
                    middle: false,
                    marginLeft: 10,
                  })
                ),
              $("<div/>").addClass("content"),
            ]));
        var n = $("<div/>")
          .addClass("container")
          .append(this._versionsContainer)
          .appendTo(e);
        AppSettings.AUTO_SAVE_ENABLED &&
          (this._autoSaveContainer = $("<div/>")
            .addClass("section")
            .append([
              $("<div/>")
                .addClass("title")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GVersionHistoryProperties",
                      "text.title-auto-save"
                    )
                  )
                )
                .gRichTooltip(
                  GRichTooltipConfig.default.from({
                    title: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GVersionHistoryProperties",
                        "text.title-auto-save-tooltip-title"
                      )
                    ),
                    middle: false,
                    marginLeft: 10,
                  })
                ),
              $("<div/>").addClass("content"),
            ])
            .appendTo(n)),
          gDesigner.addEventListener(GEvent_fileId.default, this._handleEvent, this);
      }),
      (y.prototype._handleEvent = function (e) {
        e.type === GEvent_fileId.default.Type.Enable
          ? this._updateVersionHistory(e.fileId)
          : e.type === GEvent_fileId.default.Type.Close && this.close();
      }),
      (y.prototype._updateVersionHistory = function (e) {
        this._versionsContainer.find(".content").empty(),
          AppSettings.AUTO_SAVE_ENABLED &&
            this._autoSaveContainer.find(".content").empty(),
          this._toggleLoading(true);
        var t = this;
        this._fileId = e;
        const require = [
          AppSettings.gApi.listVersions(this._fileId, "tf").then((e) => {
            const { f: t, t: require } = e;
            let _interopRequireDefault = [];
            for (let e = 0, t = require ? require.length : 0; e < t; e++)
              require[e]
                ? _interopRequireDefault.push(AppSettings.gApi.getFile(this._fileId, false, require[e].versionId, "t"))
                : _interopRequireDefault.push(null);
            return Promise.all(_interopRequireDefault).then((e) => {
              let require = [];
              for (let _interopRequireDefault = 0, GCore = t.length; _interopRequireDefault < GCore; _interopRequireDefault++) {
                let GCore = {
                  version: t[_interopRequireDefault],
                  thumbnail: e[_interopRequireDefault] || {
                    name: gDesigner.getWindows().getActiveWindow().getTitle(),
                    url_t: "assets/icon/versus.svg",
                  },
                };
                require.push(GCore);
              }
              return Promise.resolve(require);
            });
          }),
        ];
        AppSettings.AUTO_SAVE_ENABLED &&
          require.push(
            AppSettings.gApi.listAutoSaves(this._fileId).then((e) => {
              let t = [],
                require = [];
              for (let t = 0, _interopRequireDefault = e.versions.length; t < _interopRequireDefault; t++)
                require.push(
                  e.versions_t && e.versions_t[t]
                    ? AppSettings.gApi.getAutoSaveThumbnail(
                        this._fileId,
                        e.versions_t[t].versionId
                      )
                    : null
                );
              return Promise.all(require).then((n) => {
                for (let _interopRequireDefault = 0, GCore = e.versions.length; _interopRequireDefault < GCore; _interopRequireDefault++) {
                  let GCore = {
                    version: e.versions[_interopRequireDefault],
                    thumbnail: {
                      name: gDesigner.getWindows().getActiveWindow().getTitle(),
                      url_t:
                        (n && n[_interopRequireDefault] && n[_interopRequireDefault].url) || "assets/icon/versus.svg",
                    },
                    autosave: true,
                  };
                  t.push(GCore);
                }
                return t;
              });
            })
          ),
          Promise.all(require)
            .then((e) => {
              let [require, _interopRequireDefault] = e;
              t._renderVersionsList(require, _interopRequireDefault), this._toggleLoading(false);
            })
            .catch(
              (e) => (
                new GLocale.default(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GVersionHistoryProperties",
                      "error-loading"
                    )
                  )
                ).open(),
                this._toggleLoading(false),
                false
              )
            );
      }),
      (y.prototype._renderVersionsList = function (e, t) {
        const require = gDesigner.isEnabledProFeatures(),
          _interopRequireDefault = this,
          GProperties = gDesigner.getActiveDocument().getStorageItem(),
          GEvent_fileId = GProperties && GProperties.getVersionId && GProperties.getVersionId(),
          Item = !!GEvent_fileId;
        let GDocument,
          GLocale = this._versionsContainer.find(".content");
        AppSettings.AUTO_SAVE_ENABLED && (GDocument = this._autoSaveContainer.find(".content"));
        const g = e.find((e) => e.version.latest);
        let GDocumentStatusEvent = g,
          GRichTooltipConfig = false;
        if (AppSettings.AUTO_SAVE_ENABLED && t && t.length) {
          const e = t.find((e) => e.version.latest);
          AppSettings.DateAPI.lt(g.version.modified, e.version.modified, false) &&
            ((GDocumentStatusEvent = e), (GRichTooltipConfig = true));
        }
        const y = (e, t, AppSettings) => {
          let { version: GProperties, thumbnail: GDocument, autosave: GLocale } = e;
          return $("<div />")
            .addClass("version-history-item")
            .addClass(
              (Item ? GEvent_fileId === GProperties.versionId : ((GRichTooltipConfig && GLocale) || (!GRichTooltipConfig && !GLocale)) && GProperties.latest)
                ? "vhi-initial"
                : ""
            )
            .addClass(require || GProperties.latest ? "" : "vhi-disabled")
            .addClass(
              (Item ? GEvent_fileId === GProperties.versionId : GProperties.versionId === GDocumentStatusEvent.version.versionId)
                ? "vhi-active"
                : ""
            )
            .append(
              $("<div />")
                .addClass("vhi-thumbnail")
                .css("background-image", "url(" + GDocument.url_t + ")")
            )
            .append(
              $("<div />")
                .addClass("vhi-info")
                .append(
                  $("<div />")
                    .addClass("vhi-title")
                    .text(
                      GProperties.versionId === GDocumentStatusEvent.version.versionId
                        ? GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GVersionHistoryProperties",
                              "text.current-version"
                            )
                          )
                        : GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GVersionHistoryProperties",
                              "text.version"
                            )
                          ).replace("%version", AppSettings - t)
                    )
                )
                .append(
                  $("<div />")
                    .addClass("vhi-updated")
                    .text((0, DataModule_1163.dateToVersionFormat)(GProperties.modified))
                )
            )
            .append(
              $("<div />")
                .addClass("vhi-settings")
                .addClass("gravit-icon-settings")
                .on("click", function (e) {
                  e.stopPropagation(),
                    (require || GProperties.latest) &&
                      ($(this).find(".vhi-settings-list").toggle(),
                      gDesigner.stats(
                        "version-history-panel_click_setting-icon"
                      ));
                })
                .on("dblclick", function (e) {
                  e.stopPropagation();
                })
                .append(
                  $("<div />")
                    .addClass("vhi-settings-list")
                    .append(
                      $("<div />")
                        .addClass("vhi-settings-item g-menu-item-menu")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GVersionHistoryProperties",
                              "preview"
                            )
                          )
                        )
                        .on("click", function (e) {
                          e.stopPropagation(),
                            gDesigner.stats(
                              "version-history-panel_show-preview_from-settings-menu"
                            ),
                            gDesigner.intercomStats(
                              "Preview version from history"
                            ),
                            _interopRequireDefault._showPreview(
                              GProperties.versionId,
                              GDocument.name,
                              $(this).closest(".version-history-item"),
                              GLocale
                            ),
                            $(this).parent(".vhi-settings-list").hide();
                        })
                    )
                    .append(
                      $("<div />")
                        .addClass("vhi-settings-item g-menu-item-menu")
                        .text(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GVersionHistoryProperties",
                              "restore"
                            )
                          )
                        )
                        .on("click", function (e) {
                          e.stopPropagation(),
                            gDesigner.stats(
                              "version-history-panel_restore-version_from-settings-menu"
                            ),
                            gDesigner.intercomStats(
                              "Open version from history"
                            ),
                            _interopRequireDefault._applyVersion(GProperties.versionId, GDocument.name, GLocale),
                            $(this).parent(".vhi-settings-list").hide();
                        })
                    )
                )
            )
            .on("click", function (e) {
              if ($(this).hasClass("vhi-disabled"))
                return (
                  gDesigner.stats("version-history-panel_click_disabled"),
                  gDesigner.handlePROFeatureInterruption(),
                  false
                );
              var t = this;
              setTimeout(function () {
                var e = parseInt($(t).data("dblclicked"), 10);
                e
                  ? $(t).data("dblclicked", e - 1)
                  : (gDesigner.stats(
                      "version-history-panel_show-preview_from-main-panel"
                    ),
                    _interopRequireDefault._showPreview(GProperties.versionId, GDocument.name, $(t), GLocale),
                    gDesigner.intercomStats("Preview version from history"));
              }, 500);
            })
            .on("dblclick", function (e) {
              if ($(this).hasClass("vhi-disabled"))
                return (
                  gDesigner.stats("version-history-panel_dblclick_disabled"),
                  gDesigner.handlePROFeatureInterruption(),
                  false
                );
              $(this).data("dblclicked", 2),
                gDesigner.stats("version-history-panel_apply-version"),
                _interopRequireDefault._applyVersion(GProperties.versionId, GDocument.name, GLocale),
                gDesigner.intercomStats("Open version from history");
            })
            .on("mouseenter", function () {
              (require || GProperties.latest) && $(this).addClass("show-icon");
            })
            .on("mouseleave", function () {
              $(this).removeClass("show-icon"),
                $(this).find(".vhi-settings-list").hide();
            });
        };
        function v(e) {
          for (let t = 0, require = e.length; t < require; t++) {
            let _interopRequireDefault = e[t],
              GCore = null;
            (GCore = _interopRequireDefault.autosave ? GDocument : GLocale), GCore.append(y(_interopRequireDefault, t, require));
          }
        }
        GLocale.empty(),
          GDocument && GDocument.empty(),
          v(e),
          AppSettings.AUTO_SAVE_ENABLED && v(t),
          this._updatePanelHeight(),
          gDesigner.addEventListener(GDocumentEvent.default, this._documentEvent, this),
          gDesigner.addEventListener(
            GEvent_storageItem.default,
            this._storageEventHandler,
            this
          );
      }),
      (y.prototype._updatePanelHeight = function () {
        let exports =
          parseInt(
            this._panel.closest(".sidebar-inspector").outerHeight(),
            10
          ) - parseInt(this._toolbar.outerHeight(), 10);
        this._panel.css("height", exports);
      }),
      (y.prototype._documentStatusEventHandler = function (e) {
        let { status: module } = e;
        module === g.default.LoadFailed && this._closePreview();
      }),
      (y.prototype._documentEvent = function (e) {
        let { document: module, type: require } = e;
        if (require === GDocumentEvent.default.Type.AutoSaveSynchronized)
          return void this._updateVersionHistory(this._fileId);
        if (this._loadingPreview) return;
        const _interopRequireDefault = module.getStorageItem() instanceof Item.default.Item,
          GCore = module.getScene();
        ((_interopRequireDefault && module.getStorageItem().getId() !== this._fileId) ||
          (!_interopRequireDefault && GCore && GCore.getProperty("cid") !== this._fileId)) &&
          this.close();
      }),
      (y.prototype._storageEventHandler = function (e) {
        let { type: module, storageItem: require } = e;
        module === GEvent_storageItem.default.Type.VersionUpdate &&
          require instanceof Item.default.Item &&
          this._fileId === require.getId() &&
          this._updateVersionHistory(this._fileId);
      }),
      (y.prototype._showPreview = async function (e, t, n, _interopRequireDefault) {
        var AppSettings = gDesigner.getActiveDocument();
        if (AppSettings.isModified())
          return (
            new GLocale.default(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GVersionsHistoryAction",
                  "unsaved-modifications"
                )
              )
            ).open(),
            false
          );
        this._loadingPreview = true;
        var DataModule_1163 = new GDocument.default(
          await Item.default.from(
            gDesigner.getDefaultStorage(),
            this._fileId,
            t,
            e,
            !!_interopRequireDefault
          )
        );
        DataModule_1163.lockByVersionHistory(),
          this._previewDoc
            ? (gDesigner.replaceDocument(this._previewDoc, DataModule_1163),
              this._previewDoc.removeEventListener(
                GDocumentStatusEvent.default,
                this._documentStatusEventHandler,
                this
              ),
              (this._previewDoc = DataModule_1163))
            : ((this._previousDoc = AppSettings),
              (this._previewDoc = DataModule_1163),
              gDesigner.replaceDocument(this._previousDoc, DataModule_1163)),
          DataModule_1163.addEventListener(GDocumentStatusEvent.default, this._documentStatusEventHandler, this),
          DataModule_1163.load(null, {
            progress: (e) => {
              100 == e &&
                ((this._loadingPreview = false),
                gDesigner.trigger(
                  new GDocumentEvent.default(GDocumentEvent.default.Type.StorageItemUpdated, DataModule_1163)
                ));
            },
          }),
          this._enabledInputs ||
            ((this._enabledInputs = {
              allEnabledButtons: $("button:not([disabled=true])"),
              allEnabledInput: $("input:not([disabled=true])"),
              allEnabledTextarea: $("textarea:not([disabled=true])"),
            }),
            this._enabledInputs.allEnabledButtons.attr("disabled", true),
            this._enabledInputs.allEnabledInput.attr("disabled", true),
            this._enabledInputs.allEnabledTextarea.attr("disabled", true)),
          $(".version-history-item.vhi-active").removeClass("vhi-active"),
          n.addClass("vhi-active"),
          this._previewOverlay ||
            ((this._previewOverlay = $("<div />")
              .css({
                position: "absolute",
                zIndex: 9999,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              })
              .data("versionId", e)
              .data("title", t)
              .appendTo($("body"))),
            this._relayout(e, t, _interopRequireDefault),
            this._relayoutBindedToActiveDocument &&
              window.removeEventListener(
                "resize",
                this._relayoutBindedToActiveDocument
              ),
            (this._relayoutBindedToActiveDocument = this._relayout.bind(
              this,
              e,
              t,
              _interopRequireDefault
            )),
            window.addEventListener(
              "resize",
              this._relayoutBindedToActiveDocument
            ));
      }),
      (y.prototype._relayout = function (e, t, n) {
        if (this._previewOverlay) {
          var _interopRequireDefault = $("#toolbar");
          (this._buttonsToolbar = $("<div />")
            .addClass("vhp-preview-overlay")
            .css({
              position: _interopRequireDefault.css("position"),
              top: _interopRequireDefault.css("top"),
              left: _interopRequireDefault.css("left"),
              right: _interopRequireDefault.css("right"),
              bottom: _interopRequireDefault.css("bottom"),
              background: _interopRequireDefault.css("background") || _interopRequireDefault.css("background-color"),
              border: _interopRequireDefault.css("border"),
            })
            .append(
              $("<button />")
                .addClass("edit-version")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GVersionHistoryProperties",
                      "edit-version"
                    )
                  )
                )
                .on(
                  "click",
                  function () {
                    gDesigner.stats("version-history-panel_edit-version"),
                      gDesigner.intercomStats("Open version from history"),
                      this._applyVersion(e, t, n);
                  }.bind(this)
                )
            )
            .append(
              $("<button />")
                .addClass("close-preview")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GVersionHistoryProperties",
                      "close-preview"
                    )
                  )
                )
                .on(
                  "click",
                  function () {
                    gDesigner.stats("version-history-panel_close_preview"),
                      this._closePreview();
                  }.bind(this)
                )
            )),
            this._previewOverlay.empty().append(this._buttonsToolbar),
            this._panel.addClass("z-index-top"),
            this._toolbar.addClass("z-index-top");
        }
        this._updatePanelHeight();
      }),
      (y.prototype._closePreview = function () {
        this._enabledInputs &&
          (this._enabledInputs.allEnabledButtons.removeAttr("disabled"),
          this._enabledInputs.allEnabledInput.removeAttr("disabled"),
          this._enabledInputs.allEnabledTextarea.removeAttr("disabled"),
          (this._enabledInputs = null)),
          this._previousDoc &&
            (gDesigner.openDocument(this._previousDoc.getStorageItem()),
            (this._previousDoc = null)),
          this._previewDoc &&
            (this._previewDoc.removeEventListener(
              GDocumentStatusEvent.default,
              this._documentStatusEventHandler,
              this
            ),
            this._previewDoc !== gDesigner.getActiveDocument() &&
              gDesigner.removeDocument(this._previewDoc),
            (this._previewDoc = null),
            $(".version-history-item.vhi-active").removeClass("vhi-active"),
            $(".version-history-item.vhi-initial").addClass("vhi-active")),
          this._previewOverlay &&
            (window.removeEventListener(
              "resize",
              this._relayoutBindedToActiveDocument
            ),
            this._panel.removeClass("z-index-top"),
            this._toolbar.removeClass("z-index-top"),
            this._previewOverlay.remove(),
            (this._previewOverlay = null));
      }),
      (y.prototype._applyVersion = async function (e, t, n) {
        gDesigner.stats("version-history-panel_open_version", this._fileId);
        var _interopRequireDefault = gDesigner.getActiveDocument();
        if (_interopRequireDefault.isModified())
          return (
            new GLocale.default(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GVersionsHistoryAction",
                  "unsaved-modifications"
                )
              )
            ).open(),
            false
          );
        var AppSettings = gDesigner.openDocumentWithReload(
          await Item.default.from(
            gDesigner.getDefaultStorage(),
            this._fileId,
            t,
            e,
            n
          )
        );
        gDesigner.activateDocument(AppSettings),
          this._previousDoc && (this._previousDoc = null),
          this._previewDoc || gDesigner.removeDocument(_interopRequireDefault),
          this.close();
      }),
      (y.prototype._toggleLoading = function (e) {
        var t = this._panel.find(".container");
        e
          ? (t.hide(), this._loadingIndicator.show())
          : (t.show(), this._loadingIndicator.hide());
      }),
      (y.prototype.close = function () {
        gDesigner.stats("version-history-panel_close_panel", this._fileId),
          this._closePreview(),
          gDesigner.trigger(new GEvent_fileId.default(GEvent_fileId.default.Type.Disable)),
          gDesigner.removeEventListener(GDocumentEvent.default, this._documentEvent, this),
          gDesigner.removeEventListener(
            GEvent_storageItem.default,
            this._storageEventHandler,
            this
          );
      }),
      (y.prototype.toString = function () {
        return "[Object GVersionHistoryProperties]";
      }),
      (exports.exports = y);
  }