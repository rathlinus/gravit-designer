/**
 * Webpack Module #1503
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(20) /* module_20 */, require(3) /* module_3 */, require(271) /* module_271 */, require(34) /* module_34 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var o = require(53) /* module */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = require(40) /* module_40 */,
      s = require(10) /* module_10 */,
      l = require(86) /* module_86 */,
      c = require(217) /* GDocumentStatusEvent */,
      d = require(78) /* GDocumentEvent */,
      u = (require(173) /* module_173 */, require(445) /* GSaveAsAction */),
      p = require(255) /* module_255 */,
      g = (require(163) /* module_163 */, require(442) /* module_442 */);
    const h = s.FILE_FORMATS.find((e) => e.default).ext;
    function f(e, t) {
      (this._container = $("<div></div>").addClass("window")),
        (this._overlay = $("<div></div>")
          .addClass("window-overlay")
          .append(
            $("<div></div>")
              .addClass("window-overlay-container")
              .append($("<div></div>").addClass("window-overlay-content"))
          )),
        (this._document = e),
        this._document.addEventListener(
          c,
          this._documentStatusChanged,
          this,
          undefined,
          undefined,
          true
        ),
        gDesigner.addEventListener(d, this._documentEvent, this),
        this._container.on(
          "mousedown",
          function (e) {
            this._view && this._view.focus();
          }.bind(this)
        ),
        t && (this._isPreview = t),
        this._updateScene();
    }
    i.GObject.inherit(f, i.GEventTarget),
      (f.VIEW_MARGIN = 10),
      (f.prototype._requiresViewTransformation = true),
      (f.prototype._container = null),
      (f.prototype._document = null),
      (f.prototype._view = null),
      (f.prototype._overlay = null),
      (f.prototype._contextMenuClientPosition = null),
      (f.prototype._isPreview = false),
      (f.prototype.isPreview = function () {
        return this._isPreview;
      }),
      (f.prototype.getDocument = function () {
        return this._document;
      }),
      (f.prototype.getView = function () {
        return this._view;
      }),
      (f.prototype.getTitle = function () {
        var e = this._document.getTitle(),
          t = this._document._windows.indexOf(this);
        return t > 0 && (e += ":" + t.toString()), e;
      }),
      (f.prototype.getTitleWithExtension = function () {
        var e = this.getTitle();
        if (this._document.getStorageItem() && s.USE_EXTENSION_IN_FILENAME) {
          const t =
            "." + this._document.getStorageItem().getExtension().toLowerCase();
          if (!e.endsWith(t)) return e + t;
        }
        return e;
      }),
      (f.prototype.activate = function (e) {
        this._view &&
          (this._requiresViewTransformation &&
            ((1 === this._view.getZoom() &&
              0 === this._view.getScrollX() &&
              0 === this._view.getScrollY()) ||
              e) &&
            this.centerAndZoom(),
          (this._requiresViewTransformation = false),
          this._view.setRulers(gDesigner.getSetting("rulers_visible")),
          $("#mainframe").toggleClass(
            "rulers",
            gDesigner.getWindows().getActiveWindow().getView().hasRulers()
          ),
          (this._view.getViewConfiguration().guideLinesVisible =
            gDesigner.getSetting("guide_lines_visible")),
          (this._view.getViewConfiguration().symbolLabelsVisible =
            gDesigner.getSetting("symbol_labels_visible")),
          (this._view.getViewConfiguration().gridVisible = true),
          this._view.focus());
      }),
      (f.prototype.deactivate = function () {
        if (this._document) {
          var exports = this._document.getEditor();
          exports && exports.closeInlineEditor(), this._view.cleanCache();
        }
      }),
      (f.prototype.relayout = function (e, t, n, o) {
        if (this._view) {
          this._container.width(e),
            this._container.height(t),
            this._view.setViewOffset(n);
          var i = this._view.getWidth(),
            a = this._view.getHeight();
          this._view.resize(e, t, o, () => {
            i &&
              a &&
              (i != e || a != t) &&
              this._view.scrollBy((i - e) / 2, (a - t) / 2);
          });
        }
        this._overlay.css({
          left: (n ? n[0] : 0) + "px",
          top: (n ? n[1] : 0) + "px",
          right: (n ? n[2] : 0) + "px",
          bottom: (n ? n[3] : 0) + "px",
        });
      }),
      (f.prototype.release = function () {
        this._releaseScene(),
          this._releaseView(),
          this._document.removeEventListener(
            c,
            this._documentStatusChanged,
            this
          ),
          gDesigner.removeEventListener(d, this._documentEvent, this),
          p.getInstance().releaseDocumentListener(this._document.sessionId);
      }),
      (f.prototype.centerAndZoom = function () {
        var e = this._document.getScene(),
          t = e.getActivePage(),
          n = e.getPaintBBox();
        if (t)
          if (this._view.getViewConfiguration().multiPageView) {
            var o = t.getPosition(1),
              a = t.getPaintBBox(1);
            a && (n = a.translated(o.getX(), o.getY()));
          } else if (
            g.CDR_ORIGIN_PROPERTY_NAME &&
            t.getProperty(g.CDR_ORIGIN_PROPERTY_NAME, true)
          ) {
            var r = t.getContentBBox();
            n = r && !r.isEmpty() ? r : t.getPaintBBox();
          } else n = t.getPaintBBox();
        else
          e.isFixedSized() &&
            (n = new i.GRect(0, 0, e.getProperty("w"), e.getProperty("h")));
        var s = this._view.getViewBox(true);
        !n || n.isEmpty() || s.isEmpty()
          ? this._view.zoomAt(new i.GPoint(0, 0), 1)
          : n.getWidth() >= s.getWidth() || n.getHeight() >= s.getHeight()
          ? this._view.zoomAll(n, false)
          : this._view.zoomAtCenter(n.getSide(i.GRect.Side.CENTER), 1);
      }),
      (f.prototype.viewContainsMouse = function (e, t) {
        if (!this._view) return false;
        var n = this._view.getViewOffset(),
          o = n[0],
          i = n[1],
          a = this._view.getWidth() - n[2],
          r = this._view.getHeight() - n[3];
        return !(e < o || e > a || t < i || t > r);
      }),
      (f.prototype._releaseView = function () {
        this._view && (this._view.release(), (this._view = null));
      }),
      (f.prototype._releaseScene = function () {
        this._view &&
          this._view.getScene() &&
          (this._view
            .getScene()
            .removeEventListener(
              i.GNode.AfterPropertiesChangeEvent,
              this._sceneAfterPropertiesChanged,
              this
            ),
          this._view
            .getScene()
            .removeEventListener(
              i.GNode.AfterFlagChangeEvent,
              this._afterFlagChangeEvent,
              this
            ));
      }),
      (f.prototype.activateProgress = function (e, t) {
        return this._setOverlayContent(
          $("<div></div>")
            .append(
              $("<span></span>")
                .append($("<p></p>").addClass("text").text(e))
                .append(
                  $("<progress>")
                    .attr({ min: "0", max: "100" })
                    .css("width", "200px")
                    .val(0)
                )
                .append(
                  $("<p></p>").css("display", "none").addClass("progress-info")
                )
            )
            .append(
              $("<div></div>").append(
                $("<button></button>")
                  .addClass("cancel-loading")
                  .css("display", "none")
              )
            ),
          t
        );
      }),
      (f.prototype.deactivateProgress = function () {
        this._setOverlayContent(null);
      }),
      (f.prototype.activateCancelLoading = function (e) {
        var t = this;
        this._overlay
          .find(".cancel-loading")
          .text(
            i.GLocale.get(
              new i.GLocaleKey("GCommonNames", "text.cancel-loading")
            )
          )
          .on("click", function () {
            e(), t.deactivateProgress();
          })
          .css("display", "");
      }),
      (f.prototype._setOverlayContent = function (e, t) {
        if (e) {
          if (
            (this._overlay
              .appendTo(this._container)
              .find(".window-overlay-content")
              .empty()
              .append(e),
            t)
          ) {
            var require = this;
            this._overlay.on("click", function () {
              require._overlay.unbind("click", this), require._setOverlayContent(null);
            });
          }
        } else this._overlay.remove();
        return this._overlay;
      }),
      (f.prototype._documentEvent = function (e) {
        e.type === d.Type.StorageItemUpdated && this._updateViewConfiguration();
      }),
      (f.prototype._documentStatusChanged = function (e) {
        switch (e.status) {
          case l.Ready:
            this._updateScene(), gDesigner.saveStats();
            break;
          case l.Loading:
          case l.Saving:
          case l.Syncing:
          case l.Downloading:
            var module = i.GLocale.get(
                new i.GLocaleKey("GCommonNames", "text.loading")
              ),
              require = i.GLocale.get(
                new i.GLocaleKey("GCommonNames", "text.loading-file")
              );
            e.status === l.Saving
              ? ((module = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.saving")
                )),
                (require = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.saving-file")
                )))
              : e.status === l.Syncing
              ? ((module = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.synchronizing")
                )),
                (require = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.synchronizing-file")
                )))
              : e.status === l.Downloading &&
                ((module = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.downloading")
                )),
                (require = i.GLocale.get(
                  new i.GLocaleKey("GCommonNames", "text.downloading-file")
                )));
            let c =
              e.data && e.data.filename
                ? e.data.filename
                : this._document.getTitle();
            c && (require = require.replace("%name", c));
            let d = c
              ? require + "..."
              : i.GLocale.get(
                  new i.GLocaleKey("GDocument", "text.opening-your-image")
                );
            this.activateProgress(
              d,
              e.data && e.data.cancelHandlerHolder
                ? e.data.cancelHandlerHolder
                : null
            ),
              (e.data.text = (e, t) =>
                this._overlay.find(".text").text(c && !t ? require : e)),
              (e.data.progressInfo = (e) =>
                this._overlay
                  .find(".progress-info")
                  .text(e)
                  .css("display", e ? "" : "none"));
            var o = 0,
              a = new Date().getTime(),
              s = e.data.progress;
            e.data.progress = function (e) {
              var t,
                n,
                i = new Date().getTime();
              if (100 === e || (e - o >= 0.5 && i - a >= 40)) {
                a = i;
                var l = this._overlay.find("progress");
                l.val(e), (o = e);
                (t = l[0]),
                  (n = t.style.display),
                  (t.style.display = "none"),
                  t.offsetHeight,
                  (t.style.display = n),
                  t.offsetHeight,
                  l.hide(0, function () {
                    $(this).show(), $(this)[0].offsetHeight;
                  }),
                  s && (0, r.isFunction)(s) && s(e);
              }
            }.bind(this);
            break;
          case l.LoadCancelled:
          case l.DownloadCancelled:
          case l.SaveCancelled:
            this._setOverlayContent(null);
            break;
          case l.Saved:
            this._document.setErrored(false),
              gDesigner.intercomStats("File saved/exported"),
              this._setOverlayContent(null);
            break;
          case l.Loaded:
            this.centerAndZoom(), gDesigner.intercomStats("File opened");
            break;
          case l.SyncFailed:
          case l.Downloaded:
          case l.DownloadFailed:
            this._setOverlayContent(null);
            break;
          case l.LoadFailed:
            module = i.GLocale.get(
              new i.GLocaleKey("GCommonNames", "text.loading-failed")
            );
            !e.data ||
              !e.data.text ||
              e.data.text instanceof Function ||
              (module = e.data.text),
              this._setOverlayContent($("<span></span>").text(module));
            break;
          case l.SaveFailed:
            if (
              (this._document.setErrored(true),
              this._document.isCollaborativeTextEditing())
            )
              return;
            this._setOverlayContent(
              $("<span></span>")
                .css({
                  padding: "6px",
                  display: "inline-block",
                  backgroundColor: "#333",
                  borderRadius: "6px",
                })
                .append(
                  $("<p></p>")
                    .text(
                      "string" == typeof e.data
                        ? e.data
                        : i.GLocale.get(
                            new i.GLocaleKey(
                              "GCommonNames",
                              "text.unable-to-save"
                            )
                          )
                    )
                    .css({ lineHeight: "1.5em", margin: "10px" })
                )
                .append(
                  $("<button></button>")
                    .text(i.GLocale.get(new i.GLocaleKey("GLocale", "cancel")))
                    .on(
                      "click",
                      function () {
                        this._document.updateStatus(l.SaveCancelled),
                          this._setOverlayContent(null);
                      }.bind(this)
                    )
                    .css({ margin: "10px" })
                )
                .append(
                  $("<button></button>")
                    .text(
                      i.GLocale.get(
                        new i.GLocaleKey("GCommonNames", "text.try-again")
                      )
                    )
                    .on(
                      "click",
                      function () {
                        this._document &&
                          gDesigner.executeAction(
                            u.ID + "." + h,
                            [null, this._document, null],
                            "failedalertdialog"
                          );
                      }.bind(this)
                    )
                    .css({ margin: "10px" })
                )
            );
        }
      }),
      (f.prototype._updateScene = function () {
        if (
          !this._view ||
          this._document.getScene() !== this._view.getScene()
        ) {
          this._releaseScene(), this._releaseView();
          const e = this._document.getStatus();
          !this._document.getScene() ||
            (e !== l.Ready && e !== l.Locked) ||
            ((this._view = new o.GEditorWidget(this._document.getEditor())),
            this._updateViewConfiguration(),
            this._view.setViewMargin([
              f.VIEW_MARGIN,
              f.VIEW_MARGIN,
              f.VIEW_MARGIN,
              f.VIEW_MARGIN,
            ]),
            this._container.empty().append(this._view._htmlElement),
            this._updateWindowBackground(),
            this._view
              .getScene()
              .addEventListener(
                i.GNode.AfterPropertiesChangeEvent,
                this._sceneAfterPropertiesChanged,
                this,
                undefined,
                undefined,
                true
              ),
            this._view
              .getScene()
              .addEventListener(
                i.GNode.AfterFlagChangeEvent,
                this._afterFlagChangeEvent,
                this,
                undefined,
                undefined,
                true
              ),
            (this._requiresViewTransformation = true));
        }
      }),
      (f.prototype._updateViewConfiguration = function () {
        if (this._document && this._document.isCommercialProductFile()) {
          var exports = new Image();
          (exports.onload = () => {
            exports.naturalWidth > 0 &&
              exports.naturalHeight > 0 &&
              ((this._view.getViewConfiguration().watermark = exports),
              this._view.invalidate());
          }),
            (exports.src = "assets/img/brand/watermark.png");
        } else
          (this._view.getViewConfiguration().watermark = null),
            this._view.invalidate();
      }),
      (f.prototype._sceneAfterPropertiesChanged = function (e) {
        !e.temporary &&
          i.GUtil.containsOneOf(e.properties, ["w", "h"]) &&
          this._updateWindowBackground();
      }),
      (f.prototype._updateWindowBackground = function () {
        this._document.getScene().isFixedSized()
          ? (this._view._htmlElement.style.background = "")
          : (this._view._htmlElement.style.background = "white");
      }),
      (f.prototype.getVisibleBBox = function () {
        if (this._document.getScene().isFixedSized()) {
          var exports = this._document.getScene();
          return new i.GRect(0, 0, exports.getProperty("w"), exports.getProperty("h"));
        }
        return this._view
          ? new i.GRect(0, 0, this._view.getWidth(), this._view.getHeight())
          : null;
      }),
      (f.prototype._afterFlagChangeEvent = function (e) {
        e.node instanceof i.GPage &&
          e.flag === i.GNode.Flag.Active &&
          this._updateWindowBackground();
      }),
      (f.prototype.scrollIntoView = function (e) {
        if (e && !e.isEmpty()) {
          const t = this.getView(),
            n = t.getViewVisibleArea(),
            o = t.getWorldTransform().mapRect(e);
          if (!n.containsRect(o)) {
            let e = n.getSide(i.GRect.Side.CENTER),
              r = o.getSide(i.GRect.Side.CENTER).subtract(e);
            a.GPlatform.scheduleFrame(() => t.scrollBy(r.getX(), r.getY()));
          }
        }
      }),
      (exports.exports = f);
  }