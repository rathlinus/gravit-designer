/**
 * Webpack Module #445
 * Type: class
 * Name: GSaveAsAction
 */

function (exports, module, require) {
    "use strict";
    require(32) /* module_32 */, require(33) /* module_33 */;
    var o = require(16) /* module_16 */,
      i = o(require(1504) /* module_1504 */);
    require(58) /* module_58 */,
      require(30) /* module_30 */,
      require(8) /* module_8 */,
      require(20) /* module_20 */,
      require(3) /* module_3 */,
      require(271) /* module_271 */,
      require(71) /* module_71 */,
      require(34) /* module_34 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(38) /* module_38 */;
    var a = require(1) /* module */,
      r = require(15) /* module */,
      s = require(67) /* GRichTooltipConfig */,
      l = o(require(1248) /* module_1248 */),
      c = require(10) /* module_10 */;
    function d(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function u(e) {
      for (var module = 1; module < arguments.length; module++) {
        var require = null != arguments[module] ? arguments[module] : {};
        module % 2
          ? d(Object(require), true).forEach(function (t) {
              (0, i.default)(e, t, require[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(require))
          : d(Object(require)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(require, t)
              );
            });
      }
      return e;
    }
    var p = require(163) /* module_163 */,
      g = require(18) /* module_18 */,
      h = require(31) /* GAction */,
      f = require(446) /* module_446 */,
      m = require(86) /* module_86 */;
    const y = require(44) /* GSystemDialog */,
      v = require(389) /* module_389 */;
    var _ = c.FILE_FORMATS.map((e) => e.ext);
    const b = c.FILE_FORMATS.find((e) => e.default).ext;
    function w(e) {
      let module =
        arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      (this._fileExt = e), (this._isNativeExt = !!_.includes(this._fileExt));
      var n = p.FileTypes.filter((t) => t.ext === e)[0];
      (this._title = n.title || n.name),
        (this._mime = n.mime),
        (this._options = module),
        (w.TOOLTIP_CONFIG = {
          [s.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: s.GRichTooltipConfig.from({
            title: a.GLocale.get(
              new a.GLocaleKey(
                "GSaveAsAction",
                "text.try-this-feature-pro-tooltip-title"
              )
            ),
            learnMore: "",
            upgradeToProStatsValue: "file.save-as.pdf.300",
            middle: false,
            side: true,
          }),
        });
    }
    a.GObject.inherit(w, h),
      (w.ID = "file.save-as"),
      (w.TOOLTIP_CONFIG = null),
      (w.DEFAULT_SAVE_OPTIONS = {}),
      (w.prototype._fileExt = null),
      (w.prototype._isNativeExt = false),
      (w.prototype._title = null),
      (w.prototype._mime = null),
      (w.prototype._options = null),
      (w.prototype.getId = function () {
        if ("pdf" === this._fileExt) {
          const e = this._options && this._options.dpi;
          if (e && 72 !== e) return w.ID + "." + this._fileExt + "." + e;
        }
        return w.ID + "." + this._fileExt;
      }),
      (w.prototype.getTitle = function () {
        if (this._isNativeExt)
          return gDesigner.getDefaultStorage().canSave()
            ? a.GLocale.get(this._title)
            : a.GLocale.get(
                new a.GLocaleKey("GDocument", "title.download-" + this._fileExt)
              );
        if ("pdf" === this._fileExt) {
          var exports = this._options.dpi ? this._options.dpi : 72;
          return a.GLocale.get(
            new a.GLocaleKey("GSaveAsAction", "text.dpi-value")
          )
            .replace("%dpiValue", exports)
            .replace(
              "%dpiString",
              a.GLocale.get(new a.GLocaleKey("GSaveAsAction", "text.dpi"))
            );
        }
        {
          const { dpi: exports = 72 } = this._options;
          return a.GLocale.get(
            new a.GLocaleKey(
              "GSaveAsAction",
              "pdf" === this._fileExt ? "text.save-pdf" : "text.save-common"
            )
          )
            .replace("%title", a.GLocale.get(this._title))
            .replace("%fileExtension", this._fileExt)
            .replace("%dpiValue", exports)
            .replace(
              "%dpiString",
              a.GLocale.get(new a.GLocaleKey("GSaveAsAction", "text.dpi"))
            );
        }
      }),
      (w.prototype.getCategory = function () {
        return this._isNativeExt
          ? g.CATEGORY_FILE
          : "pdf" === this._fileExt
          ? g.CATEGORY_FILE_EXPORT_PDF
          : g.CATEGORY_FILE_EXPORT;
      }),
      (w.prototype.getGroup = function () {
        return this._isNativeExt
          ? "file"
          : "pdf" === this._fileExt
          ? "export/file-type/" + this._fileExt
          : "export/file-type";
      }),
      (w.prototype.isPro = function () {
        return "pdf" === this._fileExt && 300 === this._options.dpi;
      }),
      (w.prototype.getTooltipArea = function () {
        return s.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
      }),
      (w.prototype.getTooltipConfig = function (e) {
        return (
          ("file.save-as.pdf.300" === this.getId() &&
            e &&
            w.TOOLTIP_CONFIG[e]) ||
          null
        );
      }),
      (w.prototype.getShortcut = function () {
        return this._isNativeExt
          ? [
              r.GKey.Constant.SHIFT,
              r.GKey.Constant.META,
              r.GKey.Constant.OPTION,
              "S",
            ]
          : null;
      }),
      (w.prototype.isEnabled = function (e, t) {
        return (
          !!gDesigner
            .getApplicationManager()
            .isFileFormatEnabledForSaveAs({ ext: this._fileExt }) &&
          !!gDesigner.getApplicationManager().isSavingAsEnabled() &&
          !!(t = t || gDesigner.getActiveDocument()) &&
          ((e =
            e ||
            (t.getStorageItem()
              ? t.getStorageItem().getStorage()
              : gDesigner.getDefaultStorage())).canPromptSave() ||
            e.canDownload())
        );
      }),
      (w.prototype.execute = function (e, t, n) {
        let o =
            arguments.length > 3 && undefined !== arguments[3]
              ? arguments[3]
              : w.DEFAULT_SAVE_OPTIONS,
          i = arguments.length > 4 ? arguments[4] : undefined;
        const a = t || gDesigner.getActiveDocument();
        if (a && a.isCommercialProductFile())
          return a.openPaywall(this.getId()), false;
        new f(
          () => {
            this._performSave(e, a, n, o, i);
          },
          () => {
            gDesigner.stats("action_cancelled_anonymous", this.getId());
          }
        );
      }),
      (w.prototype._performSave = async function (e, t, n) {
        let o =
            arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
          i = arguments.length > 4 ? arguments[4] : undefined,
          r = i;
        if (
          (t.isCloudFile() &&
            (this._fileExt === b &&
              t.getScene().setCloudSynchronization(t.getStorageItem().getId()),
            (o.lastModifiedDate = t.isModified()
              ? undefined
              : t.getScene().getLastSavedTime())),
          (e =
            e ||
            (t.getStorageItem()
              ? t.getStorageItem().getStorage()
              : gDesigner.getDefaultStorage())),
          !(await this._checkWriteAccess(e)))
        )
          return;
        o.referer = this.getId();
        const s = !e.canDownload() || this._fileExt !== v.PDF.ext;
        if (e.canPromptSave() && s) {
          const i = t.getStorageItem();
          !r && i && (r = i.getName()),
            r || (r = t.getTitle()),
            r &&
              !r.endsWith(this._fileExt) &&
              (r += ".".concat(this._fileExt.toLowerCase())),
            e.savePrompt(
              r,
              this._getFileTypes(t, e),
              async (e) => {
                _.includes((e.getExtension() || "").toLowerCase()) &&
                  t.setStorageItem(e);
                let i = this._fileExt !== b || !t.isCloudFile();
                await t.saveAnnotations(i),
                  (o = t.updateSaveOptionsLastModifiedDate(o)),
                  (o.singleton = !t.isCloudFile()),
                  (o = this._updateSaveOptions(o, t, e)),
                  t.store(
                    e,
                    n,
                    this._showError,
                    o instanceof l.default
                      ? o
                      : Object.assign({}, this._options, o)
                  );
              },
              () => {
                n && n({ documentStatus: m.SaveCancelled });
              }
            );
        } else if (e.canDownload()) {
          if (
            (r || (t.getStorageItem() && (r = t.getStorageItem().getName())),
            (r = r || t.getTitle() || "Design"),
            !this._isNativeExt && t.hasPagesWithInfiniteEmptyCanvas())
          )
            return void y.alert(
              a.GLocale.get(
                new a.GLocaleKey(
                  "GCommonNames",
                  "text.error-emtpy-infinite-canvas"
                )
              )
            );
          (o = t.updateSaveOptionsLastModifiedDate(o)),
            (o.singleton = !t.isCloudFile()),
            (o = u(u({}, w.DEFAULT_SAVE_OPTIONS), o)),
            e.download(r + "." + this._fileExt, (e) => {
              e &&
                t.store(
                  e,
                  n,
                  this._showError,
                  Object.assign({}, this._options, o, { filename: r })
                );
            });
        }
      }),
      (w.prototype._checkWriteAccess = async function (e) {
        const module = gContainer.getDefaultStorageDestination(this._fileExt);
        if (module) {
          const n = await e.getWritePermission(module),
            o = n.isAuthorized();
          return (
            !o && n.getStatusText() && this._showError(n.getStatusText()), o
          );
        }
        return true;
      }),
      (w.prototype._showError = function (e) {
        e && y.error(e, { showTitle: false });
      }),
      (w.prototype._getFileTypes = function () {
        return [{ ext: this._fileExt, mime: this._mime }];
      }),
      (w.prototype._updateSaveOptions = function (e) {
        return e;
      }),
      (w.prototype.toString = function () {
        return "[Object GSaveAsAction]";
      }),
      (exports.exports = w);
  }