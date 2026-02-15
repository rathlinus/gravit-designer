/**
 * Webpack Module #1566
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(196) /* polyfill_Promise_finally */,
      require(3) /* polyfill_RegExp_toString */,
      require(91) /* polyfill_String_trim */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var GCore = require(1) /* GCore */;
    const {
        gApi: i,
        IS_TRUNK: a,
        IS_BETA: r,
        NODE_ENV: s,
        trunkURL: l,
        betaURL: c,
        ltsURL: d,
        rcURL: u,
        prodURL: p,
        HAS_ANNOTATIONS: g,
      } = require(10) /* AppSettings */,
      { sleep: h, watchDog: f } = require(40) /* CollaborationMergeUtils */,
      GSystemDialog = require(44) /* GSystemDialog */,
      GContainer = require(85) /* GContainer */,
      v = [
        {
          id: "copy",
          label: new GCore.GLocaleKey("GShareDialog", "text.allow-to-save-label"),
          info: new GCore.GLocaleKey("GShareDialog", "text.allow-to-save-info"),
          pro: false,
          sharePermissions: { copy: true, comment: !!g },
          analyticsRef: "save",
        },
        {
          id: "inspect",
          label: new GCore.GLocaleKey(
            "GShareDialog",
            "text.allow-to-inspect-label"
          ),
          info: new GCore.GLocaleKey("GShareDialog", "text.allow-to-inspect-info"),
          pro: true,
          default: true,
          sharePermissions: { inspect: true, comment: !!g },
          analyticsRef: "inspect",
        },
      ];
    exports.exports = class {
      constructor(e, t) {
        (this._user = e),
          (this._dialog = $("<div/>")
            .append(
              $("<div/>")
                .addClass("header")
                .append(
                  $("<span/>")
                    .addClass("title")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GShareDialog", "text.title")
                      )
                    )
                )
                .append(
                  $("<div/>")
                    .addClass("share-switch")
                    .append(
                      $("<span/>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GShareDialog", "text.switch-on")
                        )
                      )
                    )
                    .append(
                      $("<div/>")
                        .addClass("editor")
                        .append(
                          $("<label/>")
                            .addClass("g-switch")
                            .append(
                              $("<input>")
                                .attr("type", "checkbox")
                                .on("change", (e) => {
                                  const t = $(e.target)
                                    .closest("input")
                                    .is(":checked");
                                  gDesigner.stats(
                                    "sharedialog_click_sharing",
                                    t
                                  );
                                  let require = { access: t };
                                  t &&
                                    this._lastSharePermissions &&
                                    (require = Object.assign(
                                      {},
                                      this._lastSharePermissions,
                                      require
                                    )),
                                    this._toggleLoading(true),
                                    this._setSharePermissions(require)
                                      .catch(this._handleException)
                                      .finally(() => {
                                        this._toggleLoading(false);
                                      });
                                })
                            )
                            .append($("<div></div>"))
                        )
                    )
                )
            )
            .append(
              $("<span/>")
                .addClass("subtitle")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GShareDialog", "text.subtitle-on")
                  )
                )
            )
            .append(
              $("<div/>")
                .addClass("share-link")
                .append(
                  $("<div/>")
                    .addClass("share-input")
                    .append(
                      $("<input>").attr("type", "text").attr("readonly", true)
                    )
                    .append(
                      $("<div/>")
                        .addClass("share-copied")
                        .append(
                          $("<span/>").text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey("GShareDialog", "text.copied")
                            )
                          )
                        )
                    )
                )
                .append(
                  $("<div/>")
                    .addClass("share-copy")
                    .addClass("g-highlight-button")
                    .addClass("highlighted")
                    .append(
                      $("<span/>")
                        .addClass("icon")
                        .addClass("gravit-icon-share-copy")
                    )
                    .append(
                      $("<span/>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GShareDialog", "text.copy")
                        )
                      )
                    )
                    .on("click", async (e) => {
                      const t = $(e.target).closest(".share-link"),
                        require = t.find("input").val();
                      require &&
                        require.trim().length &&
                        (gDesigner.stats("sharedialog_click_copy"),
                        gContainer
                          .copyToClipboard(require.trim())
                          .then(async () => {
                            const e = t.find(".share-copied");
                            e.addClass("visible"),
                              await h(2e3),
                              e.removeClass("visible");
                          })
                          .catch((e) => {
                            GSystemDialog.alert(
                              (e && e.message) ||
                                GCore.GLocale.get(
                                  new GCore.GLocaleKey(
                                    "GShareDialog",
                                    "text.failed-copying-to-clipboard"
                                  )
                                )
                            );
                          }));
                    })
                )
            )
            .append(
              $("<div/>")
                .addClass("share-settings")
                .append(
                  v.map((e) => {
                    let {
                      id: t,
                      label: require,
                      info: i,
                      sharePermissions: a,
                      shareBy: r,
                      pro: s,
                      default: l,
                      analyticsRef: c,
                    } = e;
                    const d = $("<div/>")
                        .attr("id", t)
                        .addClass("share-setting-container"),
                      u = (e) => {
                        this._toggleLoading(true);
                        const t = $(e.target).closest("input").is(":checked");
                        gDesigner.stats("sharedialog_click_${analyticsRef}", t);
                        const require = Object.entries(a).reduce(
                            (e, n) => ((e[n[0]] = n[1] && t), e),
                            {}
                          ),
                          GCore = Object.assign(this._getSharePermissions(), require, {
                            access: true,
                          });
                        (this._lastSharePermissions = GCore),
                          this._setSharePermissions(GCore)
                            .catch(this._handleException)
                            .finally(() => {
                              this._toggleLoading(false);
                            });
                      },
                      p = () =>
                        gDesigner.stats(
                          "sharedialog_nonprotriespro_".concat(c)
                        );
                    return (
                      $("<label/>")
                        .addClass("share-setting-input")
                        .append(
                          $("<input>")
                            .attr("type", "checkbox")
                            .on("click", s ? f.trap(u, null, p) : u)
                            .on(
                              "mousedown",
                              s ? f.trap(null, null, p) : () => {}
                            )
                        )
                        .append(
                          $("<div/>")
                            .addClass("share-setting-panel")
                            .append(
                              $("<span/>")
                                .addClass("title")
                                .text(GCore.GLocale.get(require))
                                .append(s ? $("<span></span>").gPro() : "")
                            )
                            .append(
                              $("<span/>")
                                .addClass("subtitle")
                                .text(GCore.GLocale.get(i))
                            )
                        )
                        .appendTo(d),
                      r && this._buildShareByInput(r).appendTo(d),
                      d
                    );
                  })
                )
            )
            .gDialog({
              releaseOnClose: true,
              className: "g-share-dialog-legacy",
            })),
          $("<div/>")
            .addClass("g-btn-close")
            .append($("<span />").addClass("gravit-icon-close"))
            .on("click", () => this.close())
            .appendTo(this._dialog),
          this._toggleLoading(true),
          i
            .getFile(t.getId(), true)
            .then(async (e) => {
              if (
                ((this._file = e),
                this._updateProperties(),
                this._shareList && this._shareList.length)
              )
                this._lastSharePermissions = this._getSharePermissions();
              else {
                const e = v
                  .map((e) => {
                    let { sharePermissions: t } = e;
                    return t;
                  })
                  .reduce((e, t) => Object.assign({}, t, e), {});
                (this._lastSharePermissions = e),
                  await this._setSharePermissions(
                    Object.assign(e, { access: true })
                  );
              }
            })
            .catch(this._handleException)
            .finally(() => {
              this._toggleLoading(false);
            });
      }
      _handleException(e) {
        GSystemDialog.alert(i.formatError(e));
      }
      _isSharingByLink() {
        return true;
      }
      _getSharePermissions() {
        if (this._shareList) {
          const e = this._shareList.reduce((e, t) => Object.assign(e, t), {});
          return (
            v
              .filter((e) => {
                let { pro: module } = e;
                return !!module;
              })
              .forEach((t) => {
                let { sharePermissions: require } = t;
                Object.entries(require).forEach((t) => {
                  let [require, GCore] = t;
                  Object.assign(e, { [require]: f.check(e[require], GCore) });
                });
              }),
            e
          );
        }
        return {};
      }
      async _setSharePermissions(e) {
        e && Object.keys(e).length
          ? (delete e.role,
            this._isSharingByLink() &&
              (this._shareList && this._shareList.length
                ? await Promise.all(
                    this._shareList.map((t) => {
                      let { token: require } = t;
                      return i.updateShare(require, e);
                    })
                  )
                : await i.createShare(this._file.id, e)))
          : this._isSharingByLink() &&
            (await Promise.all(
              this._shareList.map((e) => {
                let { token: module } = e;
                return i.deleteShare(module);
              })
            )),
          (this._file = await i.getFile(this._file.id, true)),
          this._updateProperties();
      }
      _updateProperties() {
        const exports = this._file.link_accesses || [];
        this._shareList = exports;
        const module = this._shareList.length && !!this._shareList[0].access,
          require = this._shareList.length && !!this._shareList[0].copy,
          i = this._shareList.length && !!this._shareList[0].inspect;
        this._dialog.toggleClass("share-on", !!module),
          this._dialog
            .find(".subtitle")
            .first()
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GShareDialog",
                  "text.subtitle-".concat(module ? "on" : "off")
                )
              )
            ),
          this._dialog
            .find(".share-switch > span")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GShareDialog",
                  "text.switch-".concat(module ? "on" : "off")
                )
              )
            ),
          this._dialog.find(".share-switch input").prop("checked", module),
          this._dialog
            .find("#copy > .share-setting-input > input")
            .prop("checked", require),
          this._dialog
            .find("#inspect > .share-setting-input > input")
            .prop("checked", i);
        let a = "";
        if (this._shareList && this._shareList.length) {
          const e = new URL(this._getOrigin()),
            t = e.searchParams;
          this._isSharingByLink()
            ? t.set("token", this._shareList[0].token)
            : t.set("d", this._file.id),
            (a = e.toString());
        }
        this._dialog.find(".share-link > .share-input > input").val(a);
      }
      _getOrigin() {
        return gContainer.getRuntime() === GContainer.Runtime.Browser ||
          gContainer.getRuntime() === GContainer.Runtime.PWA
          ? location.origin
          : a
          ? l
          : r
          ? c
          : "rc" === s
          ? u
          : "lts" === s
          ? d
          : p;
      }
      _buildShareByInput(e) {
        if ("user" === e)
          return $("<div/>")
            .css("display", "none")
            .addClass("share-emails")
            .gShareUserInput();
      }
      _toggleLoading(e) {
        this._dialog.toggleClass("g-loading", !!e);
      }
      open() {
        this._dialog.gDialog("open", true);
      }
      close() {
        this._dialog.gDialog("close");
      }
    };
  }