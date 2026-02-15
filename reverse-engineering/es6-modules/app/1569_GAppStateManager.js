/**
 * Webpack Module #1569
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(30) /* polyfill_Object_assign */, require(8)) /* polyfill_bundle_ES6 */;
  var GUtil = _interopRequireDefault(require(11) /* GUtil */);
  require(1322) /* GShareManager */;
  const GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
    DataModule_1570 = require(1570) /* DataModule_1570 */,
    GEvent_document = require(392) /* GEvent_document */,
    GEvent_document_1323 = require(1323) /* GEvent_document_1323 */,
    GEvent_license = require(441) /* GEvent_license */,
    {
      SHARE_ENGINE: d,
      HAS_ANNOTATIONS: u,
      ShareRoles: p,
      FileStatus: { APPROVED: g },
      FILE_REVIEW_ENABLED: h,
      LEGACY_SHARE_DIALOG: f,
    } = require(10);
  class m {
    constructor(e) {
      ((this._state = new DataModule_1570()),
      d && gDesigner.addEventListener(GEvent_document_1323, this._shareStateChangedEvent, this),
      gDesigner.addEventListener(GApplicationStatusEvent, this._applicationStatusEvent, this),
      gDesigner.addEventListener(GEvent_license, this._licenseChangedEvent, this),
      this._init(e));
    }

    async _init(e) {
    e && e();
  }

    _shareStateChangedEvent(e) {
      const module = new DataModule_1570(Object.assign({}, this._state)),
        {
          owner: require,
          share: _interopRequireDefault,
          sharing: GUtil,
          edit: GApplicationStatusEvent,
          inspect: GEvent_document,
          copy: GEvent_document_1323,
          comment: GEvent_license,
          isPrivate: d,
          role: p,
          realtimeCollaborators: g = [],
        } = e.state;
      (require
        ? Object.assign(module, {
            edit: true,
            saveAs: true,
            export: true,
            inspect: true,
            copyPaste: true,
            comment: !!u,
          })
        : Object.assign(module, {
            edit: GApplicationStatusEvent,
            saveAs: GEvent_document_1323,
            export: GEvent_document_1323,
            copyPaste: GEvent_document_1323,
            inspect: GEvent_document,
            comment: GEvent_license,
          }),
        Object.assign(module, {
          isShareEnabled: _interopRequireDefault,
          isSharing: GUtil,
          isPrivateSharing: d,
          role: p,
          realtimeCollaborators: g,
        }),
        this._setState(module, e.document));
    }

    _setState(e, t) {
      GUtil.default.equals(e, this._state, true) ||
        ((this._state = e), this._triggerAppStateEvent(t, e));
    }

    _triggerAppStateEvent(e, t) {
      gDesigner.hasEventListeners(GEvent_document) && gDesigner.trigger(new GEvent_document(e, t));
    }

    _applicationStatusEvent(e) {
      e.status === GApplicationStatusEvent.Status.Ready &&
        gDesigner.isAnonymous() &&
        gDesigner.addNotification({ anonymous: true });
    }

    _licenseChangedEvent(e) {}

    isShareEnabled() {
      return !!this._state.isShareEnabled && d;
    }

    isShareEngineEnabled() {
      return d;
    }

    isSharing() {
      return !!this._state.isSharing && d;
    }

    isPrivateSharing() {
      return this._state.isPrivateSharing && !!d;
    }

    getRealtimeCollaborators() {
      return (d && this._state.realtimeCollaborators) || [];
    }

    isEditingEnabled() {
      return (
        !gDesigner.getLicense().isGuest() && (this._state.edit || (!!f && this._state.inspect))
      );
    }

    isSavingAsEnabled() {
      return !gDesigner.getLicense().isGuest() && this._state.saveAs;
    }

    isSavingToCloudEnabled() {
      return !gDesigner.getLicense().isGuest() && this._state.edit;
    }

    isExportEnabled() {
      return !gDesigner.getLicense().isGuest() && this._state.export;
    }

    isInspectEnabled() {
      return this._state.inspect || this._state.edit;
    }

    isPagesInspectEnabled() {
      return this.isInspectEnabled();
    }

    isCommentingEnabled() {
      return this._state.comment && u;
    }

    isCommentingEditingEnabled() {
      if (!this.isCommentingEnabled()) return false;
      if (h) {
        var exports = true,
          module = gDesigner.getActiveDocument(),
          require = module && module.getStorageItem(),
          _interopRequireDefault = require && require.getFile();
        return (
          _interopRequireDefault && _interopRequireDefault.status === g && (exports = false),
          exports
        );
      }
      return true;
    }

    isCopyPasteEnabled() {
      return this._state.copyPaste;
    }

    async hasAccess(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      const require = gDesigner.getShareManager().getRole();
      return !(!require || !((!module && require.is(p.Owner)) || (await require.can(e))));
    }

    hasPermission(e, t) {
      const require = gDesigner.getShareManager().getRole(e);
      return !(!require || !require.hasPermission(t));
    }

    hasRole(e) {
      const module = gDesigner.getShareManager().getRole();
      return !!module && module.is(e);
    }

    isFileFormatEnabledForSaveAs(e) {
      return this._state.saveAs;
    }

    isCreatingNewDocumentEnabled() {
      return !gDesigner.getLicense().isGuest();
    }

    isOpenFromCloudEnabled() {
      return !gDesigner.getLicense().isGuest();
    }

    isOnlyFileOpenFromCloudEnabled() {
      return false;
    }

    isOpenFromRecentFilesEnabled() {
      return true;
    }

    isDocumentTabManagementEnabled() {
      return this._state.isDocumentTabManagementEnabled;
    }

    isOpenFilesFromLocalEnabled() {
      return !gDesigner.getLicense().isGuest();
    }

    isReminderManagerEnabled(e) {
      return true;
    }

    isInAppPurchaseAvailable(e) {
      return true;
    }

    isLicenseUpgradeable(e) {
      return (e = e || gDesigner.getLicense()).canUpgrade();
    }

    isImportResourcesEnabled() {
      return this.isOpenFilesFromLocalEnabled();
    }

  }
  exports.exports = m;
}