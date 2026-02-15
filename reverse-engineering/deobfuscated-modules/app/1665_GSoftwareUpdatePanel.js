/**
 * Webpack Module #1665
 * Type: class
 * Name: GSoftwareUpdatePanel
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */;
    const GPanel = require(606) /* GPanel */,
      GView = require(394) /* GView */,
      r = require(1188) /* module_1188 */,
      GContainer = require(85) /* GContainer */,
      GSystemDialog = require(44) /* GSystemDialog */,
      { SOFTWARE_UPDATE: c, DateAPI: d } = require(10) /* AppSettings */;
    function u() {}
    GCore.GObject.inherit(u, GPanel),
      (u.ID = "software-update-panel"),
      (u.prototype._mustBeOpened = null),
      (u.prototype.init = function (e) {
        (this._htmlElement = e),
          this._htmlElement.addClass("software-update-panel"),
          $("<div></div>")
            .addClass("g-btn-close")
            .append($("<span></span>").addClass("gravit-icon-close"))
            .on("click", () => this._hide())
            .appendTo(this._htmlElement),
          this._updatePanelState(false);
      }),
      (u.prototype._hide = function () {
        this._updatePanelState(false);
      }),
      (u.prototype._changePanelVisibility = function (e) {
        e
          ? this._htmlElement.removeClass("g-hide")
          : this._htmlElement.addClass("g-hide");
      }),
      (u.prototype._updatePanelState = function (e) {
        e !== this._mustBeOpened &&
          (this._changePanelVisibility(e),
          (this._mustBeOpened = e),
          this.trigger(GView.UPDATE_EVENT));
      }),
      (u.prototype._updateContent = function (e) {
        this._htmlElement.find(".content").remove(),
          this._htmlElement.append(
            $("<div></div>").addClass("content").append(e)
          );
      }),
      (u.prototype.activate = function () {
        this._addEventListeners();
      }),
      (u.prototype.deactivate = function () {
        this._removeEventListeners();
      }),
      (u.prototype._addEventListeners = function () {
        gDesigner.addEventListener(
          r.AfterUpdate,
          this._handleAfterUpdate,
          this
        ),
          gDesigner.addEventListener(
            r.DownloadComplete,
            this._handleDownloadComplete,
            this
          ),
          gDesigner.addEventListener(
            r.Downloading,
            this._handleDownloadInProgress,
            this
          ),
          gDesigner.addEventListener(
            r.UpdateAvailable,
            this._handleUpdateAvailable,
            this
          ),
          gDesigner.addEventListener(
            r.UpdateError,
            this._handleUpdateError,
            this
          ),
          gDesigner.addEventListener(
            r.UpdateNotAvailable,
            this._handleUpdateNotAvailable,
            this
          );
      }),
      (u.prototype._handleAfterUpdate = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = e.currentVersion,
          require = GCore.GLocale.get(
            new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.after-update")
          ).replace("%currentVersion", module);
        this._updateContent(
          $("<div></div>")
            .addClass("message")
            .addClass("featured")
            .append(require)
            .append(
              c.SHOW_CHANGE_LOG
                ? $("<a></a>")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GSoftwareUpdatePanel",
                          "text.see-release-notes"
                        )
                      )
                    )
                    .click((e) => {
                      gContainer.openExternalLink(
                        e,
                        gDesigner
                          .getSoftwareUpdateManager()
                          .getReleaseNotesLink()
                      );
                    })
                : ""
            )
        ),
          this._updatePanelState(true);
      }),
      (u.prototype._handleUpdateNotAvailable = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = e.currentVersion,
          require = GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GSoftwareUpdatePanel",
              "text.update-not-available"
            )
          ).replace("%currentVersion", module);
        this._updateContent($("<div></div>").addClass("message").append(require)),
          this._updatePanelState(true);
      }),
      (u.prototype._handleDownloadComplete = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = e.newVersion,
          require = e.forceUpdate,
          GPanel = GCore.GLocale.get(
            new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.download-ready")
          ).replace("%newVersion", module);
        var GView = false;
        this._updateContent(
          $("<div></div>")
            .addClass("message")
            .addClass("featured")
            .html(GPanel)
            .click(async () => {
              GView ||
                ((await gContainer.canUnload(
                  gDesigner.hasModifiedDocuments(),
                  gDesigner.hasSynchronizingDocuments()
                )) &&
                  ((GView = true),
                  gDesigner.getSoftwareUpdateManager().installUpdate(),
                  this._updateContent(
                    $("<div></div>")
                      .addClass("message")
                      .addClass("featured")
                      .append(
                        $("<span/>")
                          .addClass("gravit-icon-rotate-right-flat")
                          .addClass("icon")
                          .addClass("spin")
                      )
                      .append(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GSoftwareUpdatePanel",
                            "text.updating"
                          )
                        )
                      )
                  )));
            })
        ),
          this._updatePanelState(true),
          require && this._createForceUpdateMessageDialog();
      }),
      (u.prototype._handleDownloadInProgress = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = e.percent,
          require = e.newVersion;
        var GPanel = this._htmlElement.find(".progress-content");
        const GView = GCore.GLocale.get(
          new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.download-progress")
        ).replace("%newVersion", require);
        GPanel.length ||
          (this._updateContent(
            $("<div></div>")
              .addClass("message")
              .text(GView)
              .append(
                $("<div></div>")
                  .addClass("progress-content")
                  .append(
                    $("<div></div>")
                      .addClass("progress-element")
                      .append($("<div></div>").addClass("progress-bar"))
                  )
                  .append($("<div></div>").addClass("percent"))
              )
          ),
          (GPanel = this._htmlElement.find(".progress-content")));
        GPanel.find(".progress-bar").css({ width: "".concat(module, "%") }),
          GPanel.find(".percent").text(module);
      }),
      (u.prototype._shouldShowMessages = function (e) {
        return !e.isSilent;
      }),
      (u.prototype._handleUpdateAvailable = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = e.currentVersion,
          require = e.newVersion,
          GPanel = e.forceUpdate;
        if (e.isSilent && !GPanel) return;
        !GPanel ||
          (gContainer.getRuntime() !== GContainer.Runtime.Browser &&
            gContainer.getRuntime() !== GContainer.Runtime.PWA) ||
          this._createForceUpdateMessageDialog();
        const GView = GCore.GLocale.get(
            new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.update-available")
          )
            .replace("%newVersion", require)
            .replace("%currentVersion", module),
          r = $("<span/>")
            .addClass("gravit-icon-rotate-right-flat")
            .addClass("icon");
        this._updateContent(
          $("<div></div>")
            .addClass("message")
            .addClass("featured")
            .append(r)
            .append(GView)
            .append(
              $("<a></a>")
                .append(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.update-now")
                  )
                )
                .click(() => {
                  r.addClass("spin"), this._installAfterDocumentUnload();
                })
            )
        ),
          this._updatePanelState(true);
      }),
      (u.prototype._installAfterDocumentUnload = async function () {
        if (
          await gContainer.canUnload(
            gDesigner.hasModifiedDocuments(),
            gDesigner.hasSynchronizingDocuments()
          )
        )
          switch (gContainer.getRuntime()) {
            case GContainer.Runtime.Browser:
            case GContainer.Runtime.PWA:
              gDesigner.getSoftwareUpdateManager().installUpdate();
              break;
            case GContainer.Runtime.Electron:
              gDesigner.getSoftwareUpdateManager().downloadUpdate();
          }
        else
          GSystemDialog.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GSoftwareUpdatePanel",
                "text.dialog-unsaved-documents"
              )
            )
          );
      }),
      (u.prototype._createForceUpdateMessageDialog = function () {
        let exports,
          module = false;
        const require = d.minutesToMilliseconds(5),
          GPanel = () => {
            module ||
              ((module = true),
              exports.gDialog("close"),
              gDesigner.createCountdown(() => {
                gDesigner.getSoftwareUpdateManager().installUpdate();
              }, require));
          };
        (exports = $("<div></div>").gDialog({
          releaseOnClose: true,
          className: "g-force-update-app-dialog",
          closeCallback: GPanel,
        })),
          $("<div></div>")
            .addClass("g-btn-close")
            .append($("<span></span>").addClass("gravit-icon-close"))
            .on("click", () => GPanel())
            .appendTo(exports),
          $("<div></div>").addClass("logo").appendTo(exports),
          $("<div></div>")
            .addClass("content")
            .append(
              $("<span></span>")
                .addClass("title")
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GSoftwareUpdatePanel",
                      "text.force-new-version-available"
                    )
                  ).replace(
                    "%newVersion",
                    gDesigner.getSoftwareUpdateManager().getNewVersion()
                  )
                )
            )
            .append(
              $("<span></span>")
                .addClass("subtitle")
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GSoftwareUpdatePanel",
                      "text.force-message-avoid-losing-progress"
                    )
                  )
                )
            )
            .append(
              $("<span></span>")
                .addClass("update-information")
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GSoftwareUpdatePanel",
                      "text.force-update-information-time"
                    )
                  ).replace("%minutes", 5)
                )
            )
            .append(
              $("<div></div>")
                .addClass("buttons")
                .append(
                  $("<button></button>")
                    .append(
                      $("<span></span>").text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.ok")
                        )
                      )
                    )
                    .on("click", () => GPanel())
                )
            )
            .appendTo(exports),
          exports.gDialog("open", false);
      }),
      (u.prototype._handleUpdateError = function (e) {
        if (!this._shouldShowMessages(e)) return;
        const module = GCore.GLocale.get(
          new GCore.GLocaleKey("GSoftwareUpdatePanel", "text.update-error")
        );
        this._updateContent($("<div></div>").addClass("message").append(module)),
          this._updatePanelState(true);
      }),
      (u.prototype._removeEventListeners = function () {
        gDesigner.removeEventListener(r.AfterUpdate, this._handleAfterUpdate),
          gDesigner.removeEventListener(
            r.DownloadComplete,
            this._handleDownloadComplete
          ),
          gDesigner.removeEventListener(
            r.Downloading,
            this._handleDownloadInProgress
          ),
          gDesigner.removeEventListener(
            r.UpdateAvailable,
            this._handleUpdateAvailable
          ),
          gDesigner.removeEventListener(r.UpdateError, this._handleUpdateError),
          gDesigner.removeEventListener(
            r.UpdateNotAvailable,
            this._handleUpdateNotAvailable
          );
      }),
      (u.prototype.getTitle = function () {
        return GCore.GLocale.get(new GCore.GLocaleKey("GSoftwareUpdatePanel", "title"));
      }),
      (u.prototype.isEnabled = function () {
        return !!this._mustBeOpened;
      }),
      (u.prototype.toString = function () {
        return "[Object GSoftwareUpdatePanel]";
      }),
      (u.prototype.getId = function () {
        return u.ID;
      }),
      (exports.exports = u);
  }