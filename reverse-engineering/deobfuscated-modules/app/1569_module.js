/**
 * Webpack Module #1569
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(30) /* module_30 */, require(8) /* module_8 */;
    var i = o(require(11) /* GUtil */);
    require(1322) /* module_1322 */;
    const a = require(808) /* GApplicationStatusEvent */,
      r = require(1570) /* module_1570 */,
      s = require(392) /* module_392 */,
      l = require(1323) /* module_1323 */,
      c = require(441) /* module_441 */,
      {
        SHARE_ENGINE: d,
        HAS_ANNOTATIONS: u,
        ShareRoles: p,
        FileStatus: { APPROVED: g },
        FILE_REVIEW_ENABLED: h,
        LEGACY_SHARE_DIALOG: f,
      } = require(10) /* module_10 */;
    function m(e) {
      (this._state = new r()),
        d && gDesigner.addEventListener(l, this._shareStateChangedEvent, this),
        gDesigner.addEventListener(a, this._applicationStatusEvent, this),
        gDesigner.addEventListener(c, this._licenseChangedEvent, this),
        this._init(e);
    }
    (m.prototype._init = async function (e) {
      e && e();
    }),
      (m.prototype._shareStateChangedEvent = function (e) {
        const module = new r(Object.assign({}, this._state)),
          {
            owner: require,
            share: o,
            sharing: i,
            edit: a,
            inspect: s,
            copy: l,
            comment: c,
            isPrivate: d,
            role: p,
            realtimeCollaborators: g = [],
          } = e.state;
        require
          ? Object.assign(module, {
              edit: true,
              saveAs: true,
              export: true,
              inspect: true,
              copyPaste: true,
              comment: !!u,
            })
          : Object.assign(module, {
              edit: a,
              saveAs: l,
              export: l,
              copyPaste: l,
              inspect: s,
              comment: c,
            }),
          Object.assign(module, {
            isShareEnabled: o,
            isSharing: i,
            isPrivateSharing: d,
            role: p,
            realtimeCollaborators: g,
          }),
          this._setState(module, e.document);
      }),
      (m.prototype._setState = function (e, t) {
        i.default.equals(e, this._state, true) ||
          ((this._state = e), this._triggerAppStateEvent(t, e));
      }),
      (m.prototype._triggerAppStateEvent = function (e, t) {
        gDesigner.hasEventListeners(s) && gDesigner.trigger(new s(e, t));
      }),
      (m.prototype._applicationStatusEvent = function (e) {
        e.status === a.Status.Ready &&
          gDesigner.isAnonymous() &&
          gDesigner.addNotification({ anonymous: true });
      }),
      (m.prototype._licenseChangedEvent = function (e) {}),
      (m.prototype.isShareEnabled = function () {
        return !!this._state.isShareEnabled && d;
      }),
      (m.prototype.isShareEngineEnabled = function () {
        return d;
      }),
      (m.prototype.isSharing = function () {
        return !!this._state.isSharing && d;
      }),
      (m.prototype.isPrivateSharing = function () {
        return this._state.isPrivateSharing && !!d;
      }),
      (m.prototype.getRealtimeCollaborators = function () {
        return (d && this._state.realtimeCollaborators) || [];
      }),
      (m.prototype.isEditingEnabled = function () {
        return (
          !gDesigner.getLicense().isGuest() &&
          (this._state.edit || (!!f && this._state.inspect))
        );
      }),
      (m.prototype.isSavingAsEnabled = function () {
        return !gDesigner.getLicense().isGuest() && this._state.saveAs;
      }),
      (m.prototype.isSavingToCloudEnabled = function () {
        return !gDesigner.getLicense().isGuest() && this._state.edit;
      }),
      (m.prototype.isExportEnabled = function () {
        return !gDesigner.getLicense().isGuest() && this._state.export;
      }),
      (m.prototype.isInspectEnabled = function () {
        return this._state.inspect || this._state.edit;
      }),
      (m.prototype.isPagesInspectEnabled = function () {
        return this.isInspectEnabled();
      }),
      (m.prototype.isCommentingEnabled = function () {
        return this._state.comment && u;
      }),
      (m.prototype.isCommentingEditingEnabled = function () {
        if (!this.isCommentingEnabled()) return false;
        if (h) {
          var exports = true,
            module = gDesigner.getActiveDocument(),
            require = module && module.getStorageItem(),
            o = require && require.getFile();
          return o && o.status === g && (exports = false), exports;
        }
        return true;
      }),
      (m.prototype.isCopyPasteEnabled = function () {
        return this._state.copyPaste;
      }),
      (m.prototype.hasAccess = async function (e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
        const require = gDesigner.getShareManager().getRole();
        return !(!require || !((!module && require.is(p.Owner)) || (await require.can(e))));
      }),
      (m.prototype.hasPermission = function (e, t) {
        const require = gDesigner.getShareManager().getRole(e);
        return !(!require || !require.hasPermission(t));
      }),
      (m.prototype.hasRole = function (e) {
        const module = gDesigner.getShareManager().getRole();
        return !!module && module.is(e);
      }),
      (m.prototype.isFileFormatEnabledForSaveAs = function (e) {
        return this._state.saveAs;
      }),
      (m.prototype.isCreatingNewDocumentEnabled = function () {
        return !gDesigner.getLicense().isGuest();
      }),
      (m.prototype.isOpenFromCloudEnabled = function () {
        return !gDesigner.getLicense().isGuest();
      }),
      (m.prototype.isOnlyFileOpenFromCloudEnabled = function () {
        return false;
      }),
      (m.prototype.isOpenFromRecentFilesEnabled = function () {
        return true;
      }),
      (m.prototype.isDocumentTabManagementEnabled = function () {
        return this._state.isDocumentTabManagementEnabled;
      }),
      (m.prototype.isOpenFilesFromLocalEnabled = function () {
        return !gDesigner.getLicense().isGuest();
      }),
      (m.prototype.isReminderManagerEnabled = function (e) {
        return true;
      }),
      (m.prototype.isInAppPurchaseAvailable = function (e) {
        return true;
      }),
      (m.prototype.isLicenseUpgradeable = function (e) {
        return (e = e || gDesigner.getLicense()).canUpgrade();
      }),
      (m.prototype.isImportResourcesEnabled = function () {
        return this.isOpenFilesFromLocalEnabled();
      }),
      (exports.exports = m);
  }