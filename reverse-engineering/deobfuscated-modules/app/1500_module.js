/**
 * Webpack Module #1500
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(356) /* module_356 */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(3) /* polyfill_RegExp_toString */,
      require(151) /* module_151 */,
      require(34) /* polyfill_String_replace */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      s = require(357) /* module_357 */,
      GMenu = _interopRequireDefault(require(238) /* GMenu */),
      GMenu2 = _interopRequireDefault(require(339) /* GMenu */),
      GMenuBar = _interopRequireDefault(require(1501) /* GMenuBar */),
      u = _interopRequireDefault(require(1502) /* module_1502 */),
      p = _interopRequireDefault(require(603) /* WindowEvent */),
      GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */),
      GDocumentStatusEvent = _interopRequireDefault(require(217) /* GDocumentStatusEvent */),
      f = _interopRequireDefault(require(86) /* module_86 */),
      m = _interopRequireDefault(require(119) /* module_119 */),
      GSaveAction = _interopRequireDefault(require(447) /* GSaveAction */),
      GGravitCloudAction = _interopRequireDefault(require(448) /* GGravitCloudAction */),
      GExportAction = _interopRequireDefault(require(861) /* GExportAction */),
      b = _interopRequireDefault(require(1254) /* GOpenSharedFileAction */),
      w = _interopRequireDefault(require(1256) /* GVersionsHistoryAction */),
      C = _interopRequireDefault(require(388) /* Item */),
      x = _interopRequireDefault(require(220) /* Item */),
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      TYPES = _interopRequireDefault(require(862) /* Exports_TYPES */),
      A = _interopRequireDefault(require(156) /* module_156 */),
      T = _interopRequireDefault(require(163) /* module_163 */),
      G = require(263) /* Exports_GRegex */,
      REARRANGE_TAB_ = require(1517) /* Exports_REARRANGE_TAB_ */;
    const barrel_panels = require(257) /* barrel_panels */;
    let L = null;
    AppSettings.LICENSE.UPGRADEABLE && (L = require(441) /* module_441 */);
    const GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      k = require(392) /* module_392 */,
      O = require(805) /* module_805 */,
      {
        InParenthesis: { NotNegativeNumberInTheEnd: F },
        NotNegativeNumber: R,
      } = G.GRegex.String,
      M = [
        {
          title: new GCore.GLocaleKey("GFilesPanel", "action.rename"),
          shortcut: null,
          callback: function (e, t) {
            const require = this,
              _interopRequireDefault = e.getDocument(),
              GEditor = _interopRequireDefault.getStorageItem();
            let s = true;
            if ((GEditor && (s = !(GEditor instanceof C.default.Item)), !s)) return false;
            const GMenu = () => {
              const s = t.find("input"),
                GMenu2 = e.getTitle();
              let GMenuBar = GMenu2;
              GEditor &&
                AppSettings.USE_EXTENSION_IN_FILENAME &&
                (GMenuBar += "." + GEditor.getExtension().toLowerCase()),
                s.off("focusout"),
                s.off("keypress");
              var u = t.find("span.cover");
              u.text(GMenuBar), s.css("width", u.outerWidth()), s.val(GMenu2);
              var p = s.val(),
                GDocumentStatusEvent = false;
              s.show(), u.hide(), s.focus();
              var f = async function () {
                try {
                  s.hide(), u.show();
                  let GMenuBar,
                    GDocumentStatusEvent = s.val().trim();
                  if (GDocumentStatusEvent && GDocumentStatusEvent !== GMenu2)
                    if (GEditor) {
                      if (
                        (require._updateSyncStatus(
                          t,
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GCommonNames",
                              "text.synchronizing"
                            )
                          ) + "...",
                          true
                        ),
                        GEditor instanceof x.default.Item)
                      ) {
                        let e = GEditor.getFile();
                        const GMenu2 = new TYPES.default();
                        try {
                          let _interopRequireDefault = 0;
                          if (GMenu2.supportsSaveCollisionFlow()) {
                            if (
                              (e.ext ||
                                (e.ext = AppSettings.FILE_FORMATS.find(
                                  (e) => e.default
                                ).ext.toUpperCase()),
                              (await GMenu2.fileExists(
                                GDocumentStatusEvent,
                                e.ext,
                                e.parent || GMenu2.getRootFolder()
                              )) &&
                                !(await ((e) => {
                                  let t;
                                  return (
                                    (t = GCore.GLocale.get(
                                      new GCore.GLocaleKey(
                                        "GFilesPanel",
                                        "text.file-already-exists-on-current-location"
                                      )
                                    ).replace("%filename", '"'.concat(e, '"'))),
                                    new Promise((e) => {
                                      GSystemDialog.default.confirm(
                                        t,
                                        (t) => e(!!t),
                                        null,
                                        null,
                                        false,
                                        true,
                                        true
                                      );
                                    })
                                  );
                                })(GDocumentStatusEvent)))
                            )
                              return require._updateSyncStatus(t, ""), GMenu();
                            if (GMenu2.requiresOverwriteCollisionHandling())
                              for (
                                GMenuBar = GDocumentStatusEvent;
                                await GMenu2.fileExists(
                                  GMenuBar,
                                  e.ext,
                                  e.parent || GMenu2.getRootFolder()
                                );

                              )
                                GMenuBar = "".concat(GDocumentStatusEvent, " (").concat(++_interopRequireDefault, ")");
                          }
                          GMenuBar || (GMenuBar = GDocumentStatusEvent), await GMenu2.renameItem(e, GMenuBar);
                        } catch (e) {
                          return (
                            console.log(">>>.error-renaming e", e),
                            s.val(p),
                            require._updateSyncStatus(
                              t,
                              GCore.GLocale.get(
                                new GCore.GLocaleKey(
                                  "GCommonNames",
                                  "text.failed-to-synch"
                                )
                              ),
                              false,
                              false,
                              true,
                              _interopRequireDefault.isCloudFile()
                            ),
                            void GSystemDialog.default.alert(
                              GCore.GLocale.get(
                                new GCore.GLocaleKey(
                                  "GFilesPanel",
                                  "text.error-renaming"
                                )
                              )
                            )
                          );
                        }
                        e.name = GMenuBar;
                      } else GMenuBar = GDocumentStatusEvent;
                      _interopRequireDefault.setTitle(GMenuBar),
                        GEditor.setFileName(GMenuBar),
                        gDesigner.trigger(
                          new GDocumentEvent.default(GDocumentEvent.default.Type.Modified, _interopRequireDefault)
                        ),
                        require._updateSyncStatus(t, ""),
                        u.text(
                          GMenuBar +
                            (AppSettings.USE_EXTENSION_IN_FILENAME
                              ? "." + GEditor.getExtension().toLowerCase()
                              : "")
                        ),
                        s.css("width", u.outerWidth());
                    } else e.getDocument().setTitle(GDocumentStatusEvent);
                  else s.val(p);
                } catch (e) {
                  throw e;
                }
              };
              s.on("focusout", function () {
                GDocumentStatusEvent || (f(), (GDocumentStatusEvent = true));
              }).on("keypress", function (e) {
                13 !== e.which || GDocumentStatusEvent || (f(), (GDocumentStatusEvent = true));
              });
            };
            return GMenu(), true;
          },
          stats: "header_contextmenu_rename",
          requiresPro: false,
          isEnabled: () => gDesigner.getApplicationManager().isEditingEnabled(),
          isVisible: (e) => {
            const module = e.getDocument().getStorageItem();
            return !(module && module instanceof C.default.Item);
          },
        },
        {
          separator: true,
          isVisible: (e) => {
            const module = e.getDocument().getStorageItem();
            return !(module && module instanceof C.default.Item);
          },
        },
        {
          title: GSaveAction.default.TITLE,
          shortcut: GSaveAction.default.SHORTCUT,
          id: GSaveAction.default.ID,
          needsAction: true,
          stats: "header_contextmenu_save",
          icon: () => gDesigner.getAction(GSaveAction.default.ID).getIcon(),
          requiresPro: false,
        },
        {
          title: new GCore.GLocaleKey("GSaveAsAction", "title"),
          shortcut: [GEditor.GKey.Constant.SHIFT, GEditor.GKey.Constant.META, "S"],
          id: () =>
            "".concat(GGravitCloudAction.default.ID, ".").concat(GGravitCloudAction.default.Actions.SaveAs),
          needsAction: true,
          requiresPro: false,
        },
        { separator: true },
        {
          title: new GCore.GLocaleKey("GToolbar", "text.share"),
          shortcut: null,
          callback: function () {
            gDesigner.getShareManager().share();
          },
          stats: "header_contextmenu_share",
          isEnabled: (e) => {
            const module = e.getDocument().getStorageItem();
            return (
              gDesigner.getApplicationManager().isShareEnabled() &&
              module instanceof x.default.Item
            );
          },
          requiresPro: false,
        },
        {
          title: new GCore.GLocaleKey("GOpenSharedFileAction", "title"),
          stats: "header_contextmenu_open-shared-file",
          id: () => b.default.ID,
          needsAction: true,
          requiresPro: false,
        },
        {
          title: new GCore.GLocaleKey("GVersionsHistoryAction", "title"),
          shortcut: null,
          stats: "header_contextmenu_version-history",
          icon: () => gDesigner.getAction(w.default.ID).getIcon(),
          id: w.default.ID,
          needsAction: true,
          requiresPro: true,
        },
        {
          title: GExportAction.default.TITLE,
          shortcut: GExportAction.default.SHORTCUT,
          stats: "header_contextmenu_advanced-export",
          icon: () => gDesigner.getAction(GExportAction.default.ID).getGroupIcon(),
          id: GExportAction.default.ID,
          needsAction: true,
          requiresPro: true,
        },
        {
          title: new GCore.GLocaleKey("GHeader", "action.context-menu.duplicate"),
          shortcut: null,
          callback: function (e) {
            const module = e.getDocument(),
              require = module.getStorageItem(),
              _interopRequireDefault = () => {
                const e = module.getScene(),
                  require = new T.default(e.clone(null, gDesigner.getWorkspace()));
                module.getFileFormatVersion() &&
                  require.setFileFormatVersion(module.getFileFormatVersion());
                const _interopRequireDefault = module.getTitle();
                let GCore;
                if (new RegExp(F).test(_interopRequireDefault)) {
                  const e = _interopRequireDefault.match(F),
                    t = parseInt(e[0].match(R)[0]);
                  GCore = _interopRequireDefault.replace(F, "(".concat(t + 1, ")"));
                } else GCore = "".concat(_interopRequireDefault, "(1)");
                const GEditor = gDesigner.getDocuments().indexOf(module);
                require.setTitle(GCore), gDesigner.addDocument(require, GEditor + 1);
              };
            require && require instanceof x.default.Item
              ? (() => {
                  const e = require.getFile().parent,
                    _interopRequireDefault = gDesigner.getDocuments().indexOf(module),
                    GCore = new TYPES.default();
                  GCore.setCurrentFolder(A.default.from({ id: e })),
                    GCore.copyPaste([require.getFile()]).then(function (e) {
                      let [{ id: module }] = e;
                      return GCore.openFile(module, _interopRequireDefault + 1);
                    });
                })()
              : _interopRequireDefault();
          },
          isEnabled: (e) => {
            if (!gDesigner.getApplicationManager().isSavingAsEnabled())
              return false;
            return !(
              e.getDocument().getStorageItem() instanceof C.default.Item
            );
          },
          stats: "header_contextmenu_duplicate",
          icon: "gravit-icon-duplicate",
          requiresPro: false,
        },
        { separator: true },
        {
          title: new GCore.GLocaleKey("GHeader", "action.context-menu.close-other"),
          shortcut: null,
          callback: function (e) {
            const module = gDesigner
              .getWindows()
              .getWindows()
              .slice()
              .filter((t) => t !== e);
            GSystemDialog.default.confirm(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GHeader",
                  "text.close-other-tabs-confirmation"
                )
              ),
              (e) => {
                e && N(module);
              },
              null,
              null,
              null,
              true,
              true
            );
          },
          isEnabled: (e) =>
            gDesigner
              .getWindows()
              .getWindows()
              .slice()
              .filter((t) => t !== e).length > 0,
          stats: "header_contextmenu_close-other",
          requiresPro: false,
        },
        {
          title: new GCore.GLocaleKey("GHeader", "action.context-menu.close-all"),
          shortcut: null,
          callback: function () {
            GSystemDialog.default.confirm(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GHeader", "text.close-all-tabs-confirmation")
              ),
              (e) => {
                e && N(gDesigner.getWindows().getWindows().slice());
              },
              null,
              null,
              null,
              true,
              true
            );
          },
          stats: "header_contextmenu_close-all",
          icon: "gravit-icon-close",
          requiresPro: false,
        },
      ];
    function N(e) {
      const module = gDesigner.getWindows();
      for (let require = 0, _interopRequireDefault = e.length; require < _interopRequireDefault; require++) {
        const _interopRequireDefault = e[require];
        module.removeWindow(_interopRequireDefault);
      }
    }
    function B(e) {
      (this._htmlElement = e),
        (this._menuBar = new GMenuBar.default(gDesigner.getMainMenu())),
        (this._menuBar.__which = "menubar"),
        (this._personaBar = new u.default());
    }
    (B.prototype._personaBar = null),
      (B.prototype._menuBar = null),
      (B.prototype._windows = null),
      (B.prototype._login = null),
      (B.prototype._busy = null),
      (B.prototype._contextMenu = null),
      (B.prototype.getMenuBar = function () {
        return this._menuBar;
      }),
      (B.prototype.init = function () {
        s.SHOW_BETA_BRANDING &&
          gDesigner.isBeta() &&
          $("<div></div>")
            .css({
              width: "40px",
              backgroundColor: "#29d029",
              color: "#fff",
              font: '400 1em "Helvetica Neue", Helvetica, Arial, sans-serif',
              lineHeight: "1.54em",
              textAlign: "center",
              borderRadius: "4px",
              marginLeft: "12px",
              marginRight: "-5px",
              padding: "2px",
            })
            .text("βETA")
            .appendTo(this._htmlElement),
          $("<div></div>")
            .addClass("section menu")
            .append(this._menuBar._htmlElement)
            .appendTo(this._htmlElement),
          AppSettings.LICENSE.UPGRADEABLE &&
            gDesigner.getLicense().canUpgrade() &&
            $("<div></div>")
              .addClass("section tryout")
              .append(
                $("<span></span>").text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCommonNames",
                      "text.try-out-coreldrawpp-pro"
                    )
                  )
                )
              )
              .on("click", () => gDesigner.activateTrialLicense())
              .appendTo(this._htmlElement),
          $("<div></div>")
            .addClass("section persona")
            .append(this._personaBar._htmlElement)
            .appendTo(this._htmlElement),
          (this._windows = $("<div></div>")
            .addClass("section windows")
            .append(this._createWindows())
            .appendTo(this._htmlElement)),
          AppSettings.ALLOW_REARRANGE_TABS &&
            (0, REARRANGE_TAB_.allowRearrangeTabs)(this._htmlElement),
          (this._busy = $("<div></div>")
            .addClass("section busy")
            .css({ display: "none", color: "$(BRAND_COLOR}" })
            .append($("<span>").addClass("txt").css({ marginRight: "4px" }))
            .append(
              $("<span>").css({
                border: "4px solid #f3f3f3",
                borderTop: "4px solid $(BRAND_COLOR}",
                borderRadius: "50%",
                width: "6px",
                height: "6px",
                animation: "spin 2s linear infinite",
              })
            )
            .appendTo(this._htmlElement)),
          this._createLoginTab().appendTo(this._htmlElement),
          this.updateLoginInfo(),
          this.checkUser(),
          gDesigner.addEventListener(GDocumentEvent.default, this._documentEvent, this),
          gDesigner.addEventListener(GSettingChangedEvent, this._settingChangedEvent, this),
          gDesigner
            .getWindows()
            .addEventListener(p.default.WindowEvent, this._windowEvent, this),
          gDesigner.addEventListener(O, this._userPropertiesChangedEvent, this),
          gDesigner.addEventListener(
            k,
            this._applicationStateChangedEvent,
            this
          ),
          $(document).on(
            "networkAvailable",
            function () {
              this.checkUser();
            }.bind(this)
          ),
          AppSettings.LICENSE.UPGRADEABLE &&
            gDesigner.addEventListener(L, this._licenseChangeEvent, this),
          (this._documentStatusEvent = this._documentStatusEvent.bind(this)),
          this._personaBar.init(),
          this._updateViewBasedOnPermissions();
      }),
      (B.prototype._updateViewBasedOnPermissions = function () {
        const exports = gDesigner
          .getApplicationManager()
          .isDocumentTabManagementEnabled();
        this._windows.find(".tabs").css("display", exports ? "" : "none"),
          (0, REARRANGE_TAB_.toggleRearrangeTabsVisibility)(this._htmlElement, exports);
      }),
      (B.prototype.relayout = function () {
        gDesigner.getApplicationManager().isInspectEnabled()
          ? this._htmlElement.removeClass("lone")
          : this._htmlElement.addClass("lone");
      }),
      (B.prototype._licenseChangeEvent = function (e) {
        AppSettings.LICENSE.UPGRADEABLE &&
          (e.license.isDefault() || this._htmlElement.find(".tryout").remove());
      }),
      (B.prototype._documentEvent = function (e) {
        AppSettings.ALLOW_REARRANGE_TABS && (0, REARRANGE_TAB_.updateTabsInterface)();
        var t = e.document || gDesigner.getActiveDocument(),
          n = this.getWindowTab(gDesigner.getWindows().getWindow(t)),
          _interopRequireDefault = e.type === GDocumentEvent.default.Type.StorageItemUpdated;
        if (
          _interopRequireDefault ||
          e.type === GDocumentEvent.default.Type.AutoSaveSynchronized ||
          e.type === GDocumentEvent.default.Type.Modified
        ) {
          _interopRequireDefault && this.updateWindowIcon($(".windows").find(".tab.g-active"));
          for (var GEditor = e.document.getWindows(), s = 0; s < GEditor.length; ++s)
            this._windows.find(".tab").each(function (t, n) {
              var _interopRequireDefault = $(n);
              if (_interopRequireDefault.data("window") === GEditor[s])
                return (
                  _interopRequireDefault
                    .find(".title")
                    .find(".cover")
                    .html(
                      GEditor[s].getTitleWithExtension() +
                        (e.document.isModified() ? "*" : "")
                    ),
                  _interopRequireDefault
                    .find(".title")
                    .find("input")
                    .val(
                      GEditor[s].getTitle() + (e.document.isModified() ? "*" : "")
                    ),
                  false
                );
            });
          (e.type !== GDocumentEvent.default.Type.Modified &&
            e.type !== GDocumentEvent.default.Type.AutoSaveSynchronized) ||
            (this._updateSyncStatus(n, ""),
            this.updateWindowIcon(n, false, true, t));
        } else
          e.type === GDocumentEvent.default.Type.SynchronismUpdated ||
          e.type === GDocumentEvent.default.Type.AutoSaveSynchronizing
            ? (t.isSynchronizing() ||
                e.type === GDocumentEvent.default.Type.AutoSaveSynchronizing) &&
              (this.updateWindowIcon(n, true, true, t),
              this._updateSyncStatus(
                n,
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.synchronizing")
                ) + "...",
                true
              ))
            : e.type === GDocumentEvent.default.Type.SynchronismUpdateFailed ||
              e.type === GDocumentEvent.default.Type.AutoSaveSynchronizationFailed
            ? this._updateSyncStatus(
                n,
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.failed-to-synch")
                ),
                false,
                false,
                true,
                t.isCloudFile()
              )
            : e.type === GDocumentEvent.default.Type.Activated
            ? e.document.addEventListener(GDocumentStatusEvent.default, this._documentStatusEvent)
            : e.type === GDocumentEvent.default.Type.Deactivated &&
              e.document.removeEventListener(
                GDocumentStatusEvent.default,
                this._documentStatusEvent
              );
      }),
      (B.prototype._documentStatusEvent = function (e) {
        e.status === f.default.Loaded &&
          this.updateWindowIcon($(".windows").find(".tab.g-active"));
      }),
      (B.prototype._settingChangedEvent = function (e) {
        "touch" !== e.key ||
          gDesigner.isTouchEnabled() ||
          this._menuBar.setMenu(gDesigner.getMainMenu());
      }),
      (B.prototype._userPropertiesChangedEvent = function (e) {
        this.updateLoginInfo(e.user);
      }),
      (B.prototype._applicationStateChangedEvent = function () {
        this._updateViewBasedOnPermissions();
      }),
      (B.prototype._windowEvent = function (e) {
        switch (e.type) {
          case p.default.WindowEvent.Type.Added:
            this._addWindowTab(e.window, e.index);
            break;
          case p.default.WindowEvent.Type.Removed:
            this._removeWindowTab(e.window);
            break;
          case p.default.WindowEvent.Type.Activated:
          case p.default.WindowEvent.Type.Deactivated:
            this._updateActiveWindowTab();
        }
      }),
      (B.prototype._addWindowTab = function (e, t) {
        var n = this,
          _interopRequireDefault = $("<div></div>").data("window", e).addClass("tab");
        const GCore = this._windows.find(".tabs").find(".tab");
        "number" == typeof t && t !== GCore.length
          ? _interopRequireDefault.insertBefore(GCore.eq(t))
          : _interopRequireDefault.appendTo(this._windows.find(".tabs")),
          _interopRequireDefault
            .append(
              $("<div />")
                .addClass("title")
                .append(
                  $("<span />")
                    .addClass("cover")
                    .html(e.getTitleWithExtension())
                )
                .append(
                  $("<input />")
                    .attr("type", "text")
                    .css("display", "none")
                    .val(e.getTitle())
                    .css("width", _interopRequireDefault.find(".cover").outerWidth())
                )
            )
            .on("click", function () {
              gDesigner.stats("header_change_tab", e.getTitleWithExtension()),
                gDesigner
                  .getWindows()
                  .activateWindow($(this).data("window"), true);
            }),
          _interopRequireDefault.on("contextmenu", function (t) {
            t.stopPropagation(), n.handleContextMenu(e, _interopRequireDefault);
          }),
          gDesigner.getLicense().isGuest() ||
            _interopRequireDefault.append(
              $("<span></span>")
                .addClass("close")
                .html("&#x2715;")
                .on("click", function (e) {
                  gDesigner.stats("header_remove_tab"),
                    e.stopPropagation(),
                    gDesigner
                      .getWindows()
                      .removeWindow(
                        $(this).parents(".tab").data("window"),
                        undefined,
                        undefined,
                        true
                      );
                })
            ),
          this.setWindowTabEnable(gDesigner.getLicense().canAccessFreemium());
      }),
      (B.prototype._createLoginTab = function () {
        var e = $("<div/>")
          .addClass("section login")
          .append($("<div/>").addClass("avatar"))
          .append($("<div/>").addClass("username").append($("<span/>")))
          .on("click", function () {
            gDesigner.stats("header_click_login"),
              "yes" !== $(this).attr("has-been-clicked") &&
                ($(this).attr("has-been-clicked", "yes"),
                gDesigner.getUser().then((t) => {
                  t && !gDesigner.isAnonymous()
                    ? e.gUserLogin()
                    : m.default.performLogin(),
                    $(this).attr("has-been-clicked", "no");
                }));
          });
        return e;
      }),
      (B.prototype.checkUser = function () {
        return gDesigner.getUser().then((e) => {
          this.updateLoginInfo(e);
        });
      }),
      (B.prototype.updateLoginInfo = function (e) {
        $(".login").css("display", e && e.isAnonymous() ? "none" : ""),
          $(".login .username")
            .find("span")
            .text(
              e
                ? e.getFullUserName()
                : GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.cloud-login")
                  )
            ),
          e
            ? e.hasOwnPictureAvatar()
              ? ($(".login .avatar").css(
                  "background-image",
                  'url("' + e.avatar + '")'
                ),
                $(".login .avatar").removeClass("gravit-user-bonhomme"),
                $(".login .avatar").css({ "background-color": "transparent" }),
                $(".login .avatar").text(""))
              : $(".login .avatar")
                  .addClass("gravit-user-bonhomme")
                  .text(e.getUserNameInitials())
                  .css({ "background-color": e.getUserColor() })
            : $(".login .avatar").css("background-image", "none"),
          $(".login .avatar").removeClass(e ? "header-cloud" : "user-avatar"),
          $(".login .avatar").addClass(e ? "user-avatar" : "header-cloud"),
          e ? $(".login").addClass("user") : $(".login").removeClass("user");
      }),
      (B.prototype._removeWindowTab = function (e) {
        this._windows.find(".tab").each(function (t, n) {
          var _interopRequireDefault = $(n);
          if (_interopRequireDefault.data("window") === e) return _interopRequireDefault.remove(), false;
        });
      }),
      (B.prototype._updateActiveWindowTab = function () {
        this._windows.find(".tab").each(function (e, t) {
          var n = $(t);
          n.toggleClass(
            "g-active",
            n.data("window") === gDesigner.getWindows().getActiveWindow()
          );
        });
      }),
      (B.prototype._createWindows = function () {
        return $("<div></div>").addClass("tabs");
      }),
      (B.prototype.getHeight = function () {
        return this._htmlElement[0].clientHeight;
      }),
      (B.prototype.updateWindowIcon = function (e, t, n, _interopRequireDefault) {
        var GCore = $(e).find(".header-cloud"),
          GEditor = _interopRequireDefault || gDesigner.getActiveDocument();
        (GEditor && (GEditor.isCloudFile() || GEditor.isExternalFile())) || t
          ? 0 === GCore.length &&
            $("<span/>")
              .addClass("header-cloud")
              .addClass(this._getCloudDocumentIconClass(GEditor))
              .insertBefore($(e).find(".close"))
          : n && GCore.length > 0
          ? GCore.fadeOut(2e3, function () {
              GCore.remove();
            })
          : GCore.remove();
      }),
      (B.prototype.showBusyIcon = function (e) {
        this._busy.find(".txt").text(e), this._busy.css({ display: "inherit" });
      }),
      (B.prototype.hideBusyIcon = function () {
        this._busy.css({ display: "none" });
      }),
      (B.prototype._updateSyncStatus = function (e, t, n, _interopRequireDefault, GCore, GEditor) {
        var AppSettings = $(e).find(".sync-status");
        const s = "." + barrel_panels["header-cloud"];
        if (
          ($(e).find(s).length > 0 &&
            (n
              ? $(e).find(s).addClass("animated")
              : $(e).find(s).removeClass("animated")),
          _interopRequireDefault && $(e).find(s).length > 0 && $(e).find(s).addClass("animated"),
          (AppSettings && 0 !== AppSettings.length) ||
            $("<span/>")
              .addClass("sync-status")
              .insertAfter($(e).find(".close")),
          $(e).find(".sync-status").text(t),
          GCore)
        ) {
          $(e)
            .find(".sync-status")
            .fadeOut(2e3, function () {
              $(e).find(".sync-status").remove();
            });
          var GMenu = $(e).find(s);
          GMenu.length > 0 &&
            !GEditor &&
            GMenu.fadeOut(2e3, function () {
              $(e).find(".close").css("margin-left", "0px"), GMenu.remove();
            });
        }
      }),
      (B.prototype.getWindowTab = function (e) {
        for (
          var module = this._windows.find(".tabs").find(".tab"), require = null, _interopRequireDefault = 0;
          _interopRequireDefault < module.length;
          ++_interopRequireDefault
        )
          if ($(module[_interopRequireDefault]).data("window") === e) {
            require = module[_interopRequireDefault];
            break;
          }
        return require;
      }),
      (B.prototype.handleContextMenu = function (e, t) {
        var n = t.outerWidth() - 10;
        t.addClass("context-pane-opened"),
          gDesigner.stats("header_contextmenu_tab", "Contextmenu"),
          gDesigner.getWindows().activateWindow(e),
          (this._contextMenu = this._createContextMenu(e, t)),
          this._contextMenu
            .gOverlay({
              padding: false,
              releaseOnClose: true,
              clazz: "g-header-context-overlay",
              bottomClazz: "from-bottom",
              customRight: n,
              offsetY: -13,
              closeCallback: () => {
                t.removeClass("context-pane-opened");
              },
            })
            .gOverlay("open", t);
      }),
      (B.prototype._createContextMenu = function (e, t) {
        const require = new GMenu.default(),
          _interopRequireDefault = this;
        return (
          M.map((GEditor) => {
            let AppSettings,
              s,
              {
                title: GMenu,
                callback: GMenuBar,
                shortcut: u,
                requiresPro: p,
                separator: GDocumentEvent,
                icon: GDocumentStatusEvent,
                id: f,
                needsAction: m,
                stats: GSaveAction,
                isEnabled: GGravitCloudAction,
                isVisible: GExportAction,
              } = GEditor;
            const b = GMenu instanceof GCore.GLocaleKey ? GCore.GLocale.get(GMenu) : GMenu;
            if ((f && (AppSettings = "function" == typeof f ? f() : f), GDocumentEvent)) {
              const t = require.createAddDivider();
              return (
                GExportAction instanceof Function
                  ? t.setVisible(GExportAction(e))
                  : "boolean" == typeof GExportAction && t.setVisible(GExportAction),
                t
              );
            }
            GMenuBar
              ? (s = require.createAddItem(b, () => {
                  GMenuBar.call(_interopRequireDefault, e, t);
                }))
              : ((s = require.createAddItem(b)),
                m && s.setAction(gDesigner.getAction(AppSettings))),
              u && s.setShortcutHint(u),
              p && s.setPro(p, AppSettings),
              GGravitCloudAction instanceof Function && s.setEnabled(GGravitCloudAction(e)),
              GExportAction instanceof Function
                ? s.setVisible(GExportAction(e))
                : "boolean" == typeof GExportAction && s.setVisible(GExportAction),
              GDocumentStatusEvent && ("function" == typeof GDocumentStatusEvent ? s.setIcon(GDocumentStatusEvent()) : s.setIcon(GDocumentStatusEvent)),
              s.addEventListener(GMenu2.default.BeforeActivateEvent, () => {
                !(function (e) {
                  e && gDesigner.stats(e);
                  _interopRequireDefault._contextMenu.gOverlay("close"),
                    (_interopRequireDefault._contextMenu = null),
                    require.clearItems();
                })(GSaveAction),
                  GGravitCloudAction && s.setEnabled(GGravitCloudAction(e));
              }),
              s.setCaption(b);
          }),
          require.getHtmlElement()
        );
      }),
      (B.prototype._getCloudDocumentIconClass = function (e) {
        var t = "",
          n = e.getStorageItem();
        switch (n ? n.toString() : null) {
          case "[Object GGoogleDriveStorage.Item]":
            t = barrel_panels["gravit-icon-googledrive-cloud-file"];
            break;
          case "[Object GSharePointStorage.Item]":
            t = barrel_panels["gravit-icon-sharepoint-cloud-file"];
            break;
          case "[Object GOneDriveBusinessStorage.Item]":
            t = barrel_panels["gravit-icon-onedrivebusiness-cloud-file"];
            break;
          default:
            t = barrel_panels["gravit-icon-cloud"];
        }
        return t;
      }),
      (B.prototype.setWindowTabEnable = function (e) {
        $(".tab > span").css("pointer-events", e ? "auto" : "none");
      }),
      (exports.exports = B);
  }