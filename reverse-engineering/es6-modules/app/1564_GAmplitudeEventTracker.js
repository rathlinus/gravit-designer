/**
 * Webpack Module #1564
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(557) /* stub_requires_1102 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(8) /* polyfill_bundle_ES6 */, require(271)) /* polyfill_String_endsWith */;
  var i = (function (e, t) {
      if ('function' == typeof WeakMap)
        var require = new WeakMap(),
          _interopRequireDefault = new WeakMap();
      return (function (e, t) {
        if (!t && e && e.__esModule) return e;
        var i,
          GDocument_389,
          GCore = { __proto__: null, default: e };
        if (null === e || ('object' != typeof e && 'function' != typeof e)) return GCore;
        if ((i = t ? _interopRequireDefault : require)) {
          if (i.has(e)) return i.get(e);
          i.set(e, GCore);
        }
        for (const t in e)
          'default' !== t &&
            {}.hasOwnProperty.call(e, t) &&
            ((GDocument_389 =
              (i = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) &&
            (GDocument_389.get || GDocument_389.set)
              ? i(GCore, t, GDocument_389)
              : (GCore[t] = e[t]));
        return GCore;
      })(e, t);
    })(require(10) /* AppSettings */),
    GDocument_389 = _interopRequireDefault(require(389) /* GDocument_389 */),
    GCore = require(1); /* GCore */
  const GDocumentEvent = require(78) /* GDocumentEvent */,
    GEvent_license = require(441) /* GEvent_license */,
    {
      PRODUCT_NAME: c,
      PRODUCT_APP_NAME: d,
      PRODUCT_BUILD_NUMBER: u,
      PRODUCT_LANGUAGE: p,
      PRODUCT_ENVIRONMENT: g,
    } = i.AmplitudeData.UserProperties;
  exports.exports = class {
    constructor(e) {
      (gDesigner.addEventListener(GDocumentEvent, this._handleDocumentEvent, this),
        gDesigner.addEventListener(GEvent_license, this._handleLicenseChangedEvent, this),
        (this._amplitudeHelper = e),
        this._updateUserProperties());
    }
    _updateUserProperties() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : gDesigner.getLicense();
      this._amplitudeHelper.updateUserProperties(
        {
          [c]: i.default.DESIGNER.TITLE,
          [d]: i.default.DESIGNER.TITLE,
          [u]: gDesigner.getVersion(),
          [p]: GCore.GLocale.lookupLocale(GCore.GLocale.getLanguage()).toUpperCase(),
          [g]: 'production',
        },
        exports
      );
    }
    _handleLicenseChangedEvent(e) {
      this._updateUserProperties(e.license);
    }
    async _handleDocumentEvent(e) {
      switch (e.type) {
        case GDocumentEvent.Type.Opened:
          this._amplitudeHelper.logEvent(i.AmplitudeData.Events.DOCUMENT_OPENED, {
            DOCUMENT_FILE_FORMAT: this._getDocumentOpenedFileFormat(e).toLowerCase(),
            DOCUMENT_SOURCE: this._getSource(e.document),
            DOCUMENT_RECENT: gContainer.isRecentDocument(e.document._storageItem),
          });
          break;
        case GDocumentEvent.Type.Saving:
          const { referer: module } = e.data;
          this._isSimplifiedExporting(module) ? this._documentExported(e) : this._documentSaved(e);
      }
    }
    _documentExported(e) {
      this._amplitudeHelper.logEvent(i.AmplitudeData.Events.DOCUMENT_EXPORTED, {
        DOCUMENT_EXPORT_TYPE: i.AmplitudeData.ExportTypes.Simple,
        DOCUMENT_FILE_FORMAT: e.data.ext,
      });
    }
    _documentSaved(e) {
      this._amplitudeHelper.logEvent(i.AmplitudeData.Events.DOCUMENT_SAVED, {
        DOCUMENT_FILE_FORMAT: this._getDocumentSavedFileFormat(e).toLowerCase(),
        DOCUMENT_DESTINATION: this._getSource(e.document),
      });
    }
    _isSimplifiedExporting(e) {
      return !!e && !e.endsWith(GDocument_389.default.GVDESIGN.ext);
    }
    _getDocumentOpenedFileFormat(e) {
      return e.document.fileExtension || e.document.getExtension();
    }
    _getDocumentSavedFileFormat(e) {
      return e.data.ext || e.document.getExtension();
    }
    _getSource(e) {
      return e.isCloudFile() ? 'cloud' : 'local';
    }
  };
}
