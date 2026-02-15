/**
 * Webpack Module #445
 * Type: class
 * Name: GSaveAsAction
 */

function (exports, module, require) {
  'use strict';
  (require(32) /* stub_requires_670 */, require(33)) /* polyfill_DOMCollection_forEach */;
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    i = _interopRequireDefault(require(1504) /* module_1504 */);
  (require(58) /* polyfill_Array_includes */,
    require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(271) /* polyfill_String_endsWith */,
    require(71) /* polyfill_String_includes */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(38)) /* stub_requires_680 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    s = require(67) /* GRichTooltipConfig */,
    l = _interopRequireDefault(require(1248) /* module_1248 */),
    AppSettings = require(10);
  function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var _interopRequireDefault = Object.getOwnPropertySymbols(e);
      (t &&
        (_interopRequireDefault = _interopRequireDefault.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, _interopRequireDefault));
    }
    return n;
  };
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
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(require, t));
            });
    }
    return e;
  };
  var p = require(163) /* GDocument */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GLoginPanel = require(446) /* GLoginPanel */,
    m = require(86);
  const GSystemDialog = require(44) /* GSystemDialog */,
    GDocument_389 = require(389);
  var _ = AppSettings.FILE_FORMATS.map((e) => e.ext);
  const b = AppSettings.FILE_FORMATS.find((e) => e.default).ext;
  class w extends GAction {
    constructor(e) {
      super();
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      ((this._fileExt = e), (this._isNativeExt = !!_.includes(this._fileExt)));
      var n = p.FileTypes.filter((t) => t.ext === e)[0];
      ((this._title = n.title || n.name),
      (this._mime = n.mime),
      (this._options = module),
      (w.TOOLTIP_CONFIG = {
      [s.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: s.GRichTooltipConfig.from({
      title: GCore.GLocale.get(
      new GCore.GLocaleKey('GSaveAsAction', 'text.try-this-feature-pro-tooltip-title')
      ),
      learnMore: '',
      upgradeToProStatsValue: 'file.save-as.pdf.300',
      middle: false,
      side: true,
      }),
      }));
    }

    _fileExt = null;
    _isNativeExt = false;
    _title = null;
    _mime = null;
    _options = null;

    getId() {
      if ('pdf' === this._fileExt) {
        const e = this._options && this._options.dpi;
        if (e && 72 !== e) return w.ID + '.' + this._fileExt + '.' + e;
      }
      return w.ID + '.' + this._fileExt;
    }

    getTitle() {
      if (this._isNativeExt)
        return gDesigner.getDefaultStorage().canSave()
          ? GCore.GLocale.get(this._title)
          : GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'title.download-' + this._fileExt));
      if ('pdf' === this._fileExt) {
        var exports = this._options.dpi ? this._options.dpi : 72;
        return GCore.GLocale.get(new GCore.GLocaleKey('GSaveAsAction', 'text.dpi-value'))
          .replace('%dpiValue', exports)
          .replace(
            '%dpiString',
            GCore.GLocale.get(new GCore.GLocaleKey('GSaveAsAction', 'text.dpi'))
          );
      }
      {
        const { dpi: exports = 72 } = this._options;
        return GCore.GLocale.get(
          new GCore.GLocaleKey(
            'GSaveAsAction',
            'pdf' === this._fileExt ? 'text.save-pdf' : 'text.save-common'
          )
        )
          .replace('%title', GCore.GLocale.get(this._title))
          .replace('%fileExtension', this._fileExt)
          .replace('%dpiValue', exports)
          .replace(
            '%dpiString',
            GCore.GLocale.get(new GCore.GLocaleKey('GSaveAsAction', 'text.dpi'))
          );
      }
    }

    getCategory() {
      return this._isNativeExt
        ? MenuItemBuilder.CATEGORY_FILE
        : 'pdf' === this._fileExt
          ? MenuItemBuilder.CATEGORY_FILE_EXPORT_PDF
          : MenuItemBuilder.CATEGORY_FILE_EXPORT;
    }

    getGroup() {
      return this._isNativeExt
        ? 'file'
        : 'pdf' === this._fileExt
          ? 'export/file-type/' + this._fileExt
          : 'export/file-type';
    }

    isPro() {
      return 'pdf' === this._fileExt && 300 === this._options.dpi;
    }

    getTooltipArea() {
      return s.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON;
    }

    getTooltipConfig(e) {
      return ('file.save-as.pdf.300' === this.getId() && e && w.TOOLTIP_CONFIG[e]) || null;
    }

    getShortcut() {
      return this._isNativeExt
        ? [
            GEditor.GKey.Constant.SHIFT,
            GEditor.GKey.Constant.META,
            GEditor.GKey.Constant.OPTION,
            'S',
          ]
        : null;
    }

    isEnabled(e, t) {
      return (
        !!gDesigner.getApplicationManager().isFileFormatEnabledForSaveAs({ ext: this._fileExt }) &&
        !!gDesigner.getApplicationManager().isSavingAsEnabled() &&
        !!(t = t || gDesigner.getActiveDocument()) &&
        ((e =
          e ||
          (t.getStorageItem()
            ? t.getStorageItem().getStorage()
            : gDesigner.getDefaultStorage())).canPromptSave() ||
          e.canDownload())
      );
    }

    execute(e, t, n) {
      let _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3]
            ? arguments[3]
            : w.DEFAULT_SAVE_OPTIONS,
        i = arguments.length > 4 ? arguments[4] : undefined;
      const GCore = t || gDesigner.getActiveDocument();
      if (GCore && GCore.isCommercialProductFile()) return (GCore.openPaywall(this.getId()), false);
      new GLoginPanel(
        () => {
          this._performSave(e, GCore, n, _interopRequireDefault, i);
        },
        () => {
          gDesigner.stats('action_cancelled_anonymous', this.getId());
        }
      );
    }

    async _performSave(e, t, n) {
      let _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
        i = arguments.length > 4 ? arguments[4] : undefined,
        GEditor = i;
      if (
        (t.isCloudFile() &&
          (this._fileExt === b && t.getScene().setCloudSynchronization(t.getStorageItem().getId()),
          (_interopRequireDefault.lastModifiedDate = t.isModified()
            ? undefined
            : t.getScene().getLastSavedTime())),
        (e =
          e ||
          (t.getStorageItem() ? t.getStorageItem().getStorage() : gDesigner.getDefaultStorage())),
        !(await this._checkWriteAccess(e)))
      )
        return;
      _interopRequireDefault.referer = this.getId();
      const s = !e.canDownload() || this._fileExt !== GDocument_389.PDF.ext;
      if (e.canPromptSave() && s) {
        const i = t.getStorageItem();
        (!GEditor && i && (GEditor = i.getName()),
          GEditor || (GEditor = t.getTitle()),
          GEditor &&
            !GEditor.endsWith(this._fileExt) &&
            (GEditor += '.'.concat(this._fileExt.toLowerCase())),
          e.savePrompt(
            GEditor,
            this._getFileTypes(t, e),
            async (e) => {
              _.includes((e.getExtension() || '').toLowerCase()) && t.setStorageItem(e);
              let i = this._fileExt !== b || !t.isCloudFile();
              (await t.saveAnnotations(i),
                (_interopRequireDefault =
                  t.updateSaveOptionsLastModifiedDate(_interopRequireDefault)),
                (_interopRequireDefault.singleton = !t.isCloudFile()),
                (_interopRequireDefault = this._updateSaveOptions(_interopRequireDefault, t, e)),
                t.store(
                  e,
                  n,
                  this._showError,
                  _interopRequireDefault instanceof l.default
                    ? _interopRequireDefault
                    : Object.assign({}, this._options, _interopRequireDefault)
                ));
            },
            () => {
              n && n({ documentStatus: m.SaveCancelled });
            }
          ));
      } else if (e.canDownload()) {
        if (
          (GEditor || (t.getStorageItem() && (GEditor = t.getStorageItem().getName())),
          (GEditor = GEditor || t.getTitle() || 'Design'),
          !this._isNativeExt && t.hasPagesWithInfiniteEmptyCanvas())
        )
          return void GSystemDialog.alert(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GCommonNames', 'text.error-emtpy-infinite-canvas')
            )
          );
        ((_interopRequireDefault = t.updateSaveOptionsLastModifiedDate(_interopRequireDefault)),
          (_interopRequireDefault.singleton = !t.isCloudFile()),
          (_interopRequireDefault = u(u({}, w.DEFAULT_SAVE_OPTIONS), _interopRequireDefault)),
          e.download(GEditor + '.' + this._fileExt, (e) => {
            e &&
              t.store(
                e,
                n,
                this._showError,
                Object.assign({}, this._options, _interopRequireDefault, { filename: GEditor })
              );
          }));
      }
    }

    async _checkWriteAccess(e) {
      const module = gContainer.getDefaultStorageDestination(this._fileExt);
      if (module) {
        const n = await e.getWritePermission(module),
          _interopRequireDefault = n.isAuthorized();
        return (
          !_interopRequireDefault && n.getStatusText() && this._showError(n.getStatusText()),
          _interopRequireDefault
        );
      }
      return true;
    }

    _showError(e) {
      e && GSystemDialog.error(e, { showTitle: false });
    }

    _getFileTypes() {
      return [{ ext: this._fileExt, mime: this._mime }];
    }

    _updateSaveOptions(e) {
      return e;
    }

    toString() {
      return '[Object GSaveAsAction]';
    }

    static TOOLTIP_CONFIG = {
        [s.TOOLTIP_AREA.MAIN_MENU.TRY_PRO_COMMON]: s.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey('GSaveAsAction', 'text.try-this-feature-pro-tooltip-title')
          ),
          learnMore: '',
          upgradeToProStatsValue: 'file.save-as.pdf.300',
          middle: false,
          side: true,
        }),
      };

    static ID = 'file.save-as';

    static TOOLTIP_CONFIG = null;

    static DEFAULT_SAVE_OPTIONS = {};

  }
  exports.exports = w;
}