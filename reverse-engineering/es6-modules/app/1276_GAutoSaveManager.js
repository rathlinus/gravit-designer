/**
 * Webpack Module #1276
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(193) /* polyfill_Object_keys */,
    require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(20) /* polyfill_RegExp_exec */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GCore = require(1);
  const {
      gApi: i,
      AUTO_SAVE_ENABLED: a,
      AUTOSAVE_INTERVAL_DEFAULT: r,
      CloudIntegration: s,
      DESIGNER: l,
      EXTERNAL_APP: c,
    } = require(10) /* AppSettings */,
    { buildDialogDocumentHasUpdates: d } = require(40) /* CollaborationMergeUtils */,
    GContainer = require(85) /* GContainer */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GGoogleDriveItem = require(556) /* GGoogleDriveItem */,
    GGravitCloudAction = require(448) /* GGravitCloudAction */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
    GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
    v = require(1530) /* module_1530 */,
    DataModule_1534 = require(1534) /* DataModule_1534 */,
    b = require(86) /* module_86 */,
    GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
    { SETUP: C, CODES: x } = require(591) /* DataModule_591 */,
    Action_edit_settings = require(1277);
  class E {
    constructor() {
      if (
      ((this._pendingSyncDialog = new Set()),
      (this._pendingFormatNotSupportDialog = new Set()),
      (this._pendingEntriesNotCreatedWarning = new Set()),
      (this._documentsMap = new Map()),
      (this._savingQueue = new DataModule_1534()),
      this._savingQueue.onNext(this._processDocumentSave.bind(this)),
      E._instance && console.warn('[GAutoSaveManager] Already initiated'),
      (this._autoSaveWorker = new Worker('./autosave.worker.js')),
      !this._autoSaveWorker)
      )
      return (console.warn('[GAutoSaveManager] Worker initiation failed'), Promise.reject());
      (this._autoSaveWorker.postMessage({
      cmd: C.ENDPOINT,
      data: { url: i.url },
      }),
      (this._autoSaveModel = new v(this._autoSaveWorker)),
      this._updateStatus(
      gDesigner.getSetting(E.AUTO_SAVE_SETTING) ? E.Status.Stopped : E.Status.Disabled
      ),
      this._setInterval(gDesigner.getSetting(E.AUTO_SAVE_INTERVAL_SETTING)),
      gContainer.getProperty(E.AUTO_SAVE_WARN_DIALOG_SHOWN).then((e) => {
      this._warnDialogShown = !!e;
      }),
      gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
      gDesigner.addEventListener(GSettingChangedEvent, this._settingsChangedEvent, this),
      gDesigner.addEventListener(
      GNetworkAvailabilityChangedEvent,
      this._networkAvailabilityChangedEvent,
      this
      ));
    }

    _timerId = null;
    _warnDialogShown = false;
    _fileUpdatedWarningShowing = false;
    _warnDialogTimer = null;
    _status = E.Status.Stopped;
    _documentsMap = null;
    _pendingSyncDialog = null;
    _pendingFormatNotSupportDialog = null;
    _pendingEntriesNotCreatedWarning = null;
    _savingQueue = null;
    _syncDialogShown = {};
    _formatNotSupportDialogShown = {};
    _noEntriesCreatedWaringShown = {};
    _offlineAlert = null;
    _interval = null;
    _autoSaveWorker = null;

    _updateStatus(e) {
      this._status = e;
    }

    getStatus() {
      return this._status;
    }

    _setInterval(e) {
      const module = parseFloat(e) || r;
      this._interval = 60 * module * 1e3;
    }

    async _shouldHandle(e) {
      return !e.isCloudFile() || (await e.canSaveToCloud()) || e.isExternalFile();
    }

    async _processDocumentSave(e) {
      if (!(await this._shouldHandle(e))) return;
      if (!this._warnDialogShown) {
        this._warnDialogTimer && clearTimeout(this._warnDialogTimer);
        if (!(await this._showWarnDialog())) return;
      }
      if (
        (this._resetDocumentTimeout(e, this.getStatus() === E.Status.Enabled),
        gDesigner.isOffline())
      )
        return (this._toggleOfflineAlert(true), Promise.reject(x.AUTOSAVE_OFFLINE_NOT_AVAILABLE));
      this._offlineAlert && this._toggleOfflineAlert(false);
      const module = [b.Saving, b.Syncing, b.Loading].includes(e.getStatus());
      return this._autoSaveModel.has(e) || module
        ? x.AUTOSAVE_ALREADY_SAVING
        : e.isCloudFile() || e.isExternalFile()
          ? this._isCDRFile(e)
            ? (this._executeDocumentFormatNotSupportedDialog(e),
              x.AUTOSAVE_CLOUD_SYNCHRONIZM_NOT_AVAILABLE)
            : e.isWebFile() || e.isCloudSyncOn() || e.isExternalFile()
              ? e.isExternalFile() && !(await this._executeExternalFileWarningDialog(e))
                ? x.AUTOSAVE_CLOUD_SYNCHRONIZM_NOT_AVAILABLE
                : e.isModified()
                  ? (await e.isUpdateAvailable())
                    ? (this._executeDocumentConflictResolutionDialog(e), x.AUTOSAVE_FILE_CONFLICT)
                    : this._runAndScheduleAutoSave(e)
                  : x.AUTOSAVE_NOT_MODIFIED
              : x.AUTOSAVE_LOCAL_FILES_WITHOUT_CID_NOT_AVAILABLE
          : (this._executeDocumentSyncDialog(e), x.AUTOSAVE_CLOUD_SYNCHRONIZM_NOT_AVAILABLE);
    }

    _executeDocumentSyncDialog(e) {
      this._syncDialogShown[e.sessionId] ||
        (gDesigner.isActiveDocument(e) ? this._showSyncDialog(e) : this._pendingSyncDialog.add(e));
    }

    _executeDocumentFormatNotSupportedDialog(e) {
      this._formatNotSupportDialogShown[e.sessionId] ||
        (gDesigner.isActiveDocument(e)
          ? this._showFormatNotSupportedDialog(e)
          : this._pendingFormatNotSupportDialog.add(e));
    }

    _executeDocumentConflictResolutionDialog(e) {
      gDesigner.isActiveDocument(e) &&
        (this._dialogResolveDocumentConflicts &&
          this._dialogResolveDocumentConflicts.gDialog('isOpen') &&
          this._dialogResolveDocumentConflicts.gDialog('close'),
        (this._dialogResolveDocumentConflicts = d.call(
          this,
          e,
          function (e) {
            e.reload();
          }.bind(this),
          function (e) {
            this._runAndScheduleAutoSave(e);
          }.bind(this)
        )));
    }

    async _executeExternalFileWarningDialog(e) {
      return e.getStorageItem() &&
        (await e.getStorageItem().hasUpdates()) &&
        !this._fileUpdatedWarningShowing
        ? this._showExternalFileUpdatedOutAppWarningDialog(e)
        : !!this._noEntriesCreatedWaringShown[e.sessionId] ||
            (gDesigner.isActiveDocument(e)
              ? this._showNoEntriesCreatedInVersionHistoryForExternalFileWarningDialog(e)
              : (this._pendingEntriesNotCreatedWarning.add(e), false));
    }

    _runAndScheduleAutoSave(e) {
      return this._handleAutoSave(e).finally(() => {
        this._resetDocumentTimeout(e, this.getStatus() === E.Status.Enabled);
      });
    }

    _handleAutoSave(e) {
      return (
        gDesigner.isActiveDocument(e) && this._showNotification(),
        this._autoSaveModel.save(e).catch((t) => {
          (console.warn('[GAutoSaveManager][Failed to auto save]', t),
            gDesigner.isActiveDocument(e) && this._showNotification(true));
        })
      );
    }

    _resetDocumentTimeout(e) {
      let module = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
      const require = this._documentsMap.get(e);
      (require.timeoutId && (clearTimeout(require.timeoutId), (require.timeoutId = null)),
        module &&
          (require.timeoutId = setTimeout(() => {
            this._savingQueue.has(e) || (this._savingQueue.add(e), this._savingQueue.process());
          }, this._interval)),
        this._documentsMap.set(e, require));
    }

    _resetAllDocumentsTimeout() {
      let exports = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
      for (let module of this._documentsMap.values())
        this._resetDocumentTimeout(module.doc, exports);
    }

    disable() {
      this.getStatus() !== E.Status.Disabled &&
        (this._resetAllDocumentsTimeout(false), this._updateStatus(E.Status.Disabled));
    }

    enable() {
      a &&
        this.getStatus() !== E.Status.Enabled &&
        !gDesigner.isOffline() &&
        gDesigner.getSetting(E.AUTO_SAVE_SETTING) &&
        (this._resetAllDocumentsTimeout(), this._updateStatus(E.Status.Enabled));
    }

    _removeDocument(e) {
      this._documentsMap.has(e) &&
        (this._resetDocumentTimeout(e, false),
        this._savingQueue.delete(e),
        this._documentsMap.delete(e),
        this._syncDialogShown[e.sessionId] && delete this._syncDialogShown[e.sessionId],
        this._formatNotSupportDialogShown[e.sessionId] &&
          delete this._formatNotSupportDialogShown[e.sessionId],
        this._noEntriesCreatedWaringShown[e.sessionId] &&
          delete this._noEntriesCreatedWaringShown[e.sessionId]);
    }

    _addDocument(e) {
      this._documentsMap.has(e) ||
        (this._documentsMap.set(e, { doc: e }),
        this._resetDocumentTimeout(e, this.getStatus() === E.Status.Enabled),
        (this._syncDialogShown[e.sessionId] = false),
        (this._formatNotSupportDialogShown[e.sessionId] = false),
        (this._noEntriesCreatedWaringShown[e.sessionId] = false));
    }

    _documentEvent(e) {
      if (!e.document.isLockedByVersionHistory())
        switch (e.type) {
          case GDocumentEvent.Type.Added:
            (this._addDocument(e.document),
              e.document.addEventListener(
                GDocumentStatusEvent,
                this._handleDocumentStatusEvent,
                this,
                undefined,
                undefined,
                true
              ),
              this.enable());
            break;
          case GDocumentEvent.Type.Removed:
            (this._removeDocument(e.document),
              e.document.removeEventListener(
                GDocumentStatusEvent,
                this._handleDocumentStatusEvent,
                this
              ));
            break;
          case GDocumentEvent.Type.SynchronismUpdated: {
            let t = true;
            (e.document.isWebFile() ||
              (e.document.isCloudSyncOn()
                ? this.enable()
                : ((t = false), this._removeDocument(e.document))),
              t && this._addDocument(e.document));
            break;
          }
          case GDocumentEvent.Type.Activated:
            (this._documentsMap.has(e.document) ||
              (this._addDocument(e.document),
              e.document.addEventListener(
                GDocumentStatusEvent,
                this._handleDocumentStatusEvent,
                this,
                undefined,
                undefined,
                true
              ),
              this.enable()),
              e.document.isCloudSynchronismAvailable() ||
                this._syncDialogShown[e.document.sessionId] ||
                !this._pendingSyncDialog.has(e.document) ||
                (this._showSyncDialog(e.document), this._pendingSyncDialog.delete(e.document)),
              !this._noEntriesCreatedWaringShown[e.document.sessionId] &&
                this._pendingEntriesNotCreatedWarning.has(e.document) &&
                (this._processDocumentSave(e.document),
                this._pendingEntriesNotCreatedWarning.delete(e.document)),
              this._shouldFormatNotSupportedDialogAppearForUser(e.document) &&
                (this._showFormatNotSupportedDialog(e.document),
                this._pendingFormatNotSupportDialog.delete(e.document)),
              this._warnDialogTimer && clearTimeout(this._warnDialogTimer),
              this._shouldWarningDialogAppearForUser() &&
                (this._warnDialogTimer = setTimeout(() => {
                  this._showWarnDialog(true).then((e) => {
                    e && this._savingQueue.process();
                  });
                }, this._interval)));
            break;
          case GDocumentEvent.Type.BeforeReload:
            this._removeDocument(e.document);
        }
    }

    _shouldWarningDialogAppearForUser() {
      return (
        !this._warnDialogShown && !gDesigner.getLicense().isGuest() && !gDesigner.isAnonymous()
      );
    }

    _shouldFormatNotSupportedDialogAppearForUser(e) {
      return (
        !gDesigner.getLicense().isGuest() &&
        !gDesigner.isAnonymous() &&
        this._pendingFormatNotSupportDialog.has(e) &&
        e.isCloudFile() &&
        this._isCDRFile(e) &&
        !this._formatNotSupportDialogShown[e.sessionId]
      );
    }

    _handleDocumentStatusEvent(e) {
      e.status === b.Loaded && this._addDocument(e.sender);
    }

    _settingsChangedEvent(e) {
      e.previousValue !== e.newValue &&
        (e.key === E.AUTO_SAVE_SETTING
          ? e.newValue
            ? this.enable()
            : this.disable()
          : e.key === E.AUTO_SAVE_INTERVAL_SETTING &&
            (this._setInterval(e.newValue),
            this._resetAllDocumentsTimeout(this.getStatus() === E.Status.Enabled)));
    }

    _networkAvailabilityChangedEvent(e) {
      e.connected
        ? (this._toggleOfflineAlert(false), this.enable())
        : (this._toggleOfflineAlert(true), this.disable());
    }

    _toggleOfflineAlert(e) {
      if (e) {
        let e = GCore.GLocale.get(new GCore.GLocaleKey('GAutoSave', 'text.alert-offline'));
        (gContainer.getRuntime() === GContainer.Runtime.Electron &&
          GCore.GLocale.get(new GCore.GLocaleKey('GAutoSave', 'text.alert-offline-desktop')),
          this._offlineAlert ||
            (this._offlineAlert = GSystemDialog.alert(e, () => {
              this._offlineAlert = null;
            })));
      } else
        (this._offlineAlert &&
          0 !== this._offlineAlert.length &&
          this._offlineAlert.gDialog('close'),
          (this._offlineAlert = null));
    }

    _showWarnDialog() {
      let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
      return this._warnDialogShown || (exports && this.getStatus() === E.Status.Enabled)
        ? Promise.resolve()
        : this.getStatus() === E.Status.Enabled
          ? Promise.resolve(true)
          : new Promise((e) => {
              GSystemDialog.custom({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey('GAutoSave', 'text.dialog-inform-warn-feature.title')
                ),
                subtitle: $('<span />')
                  .text(
                    ''.concat(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GAutoSave', 'text.dialog-inform-warn-feature.text')
                      ),
                      ' '
                    )
                  )
                  .append(
                    $('<a />')
                      .attr('href', '')
                      .attr('target', '_blank')
                      .text(
                        GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.learn-more'))
                      )
                  ),
                className: 'g-auto-save-warn-dialog',
                icon: 'autosave',
                closeable: false,
                buttons: [
                  {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        'GAutoSave',
                        'text.dialog-inform-warn-feature.cancel-button'
                      )
                    ),
                    closeOnClick: true,
                    shortcut: GSystemDialog.Shortcut.Esc,
                    onclick: () => {
                      (gDesigner.setSetting(E.AUTO_SAVE_SETTING, false),
                        (this._warnDialogShown = true),
                        gContainer.setProperty(E.AUTO_SAVE_WARN_DIALOG_SHOWN, true),
                        gDesigner.stats('settings_toggle_auto-save-disabled'),
                        e(false));
                    },
                  },
                  {
                    label: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        'GAutoSave',
                        'text.dialog-inform-warn-feature.enable-button'
                      )
                    ),
                    className: 'primary',
                    closeOnClick: true,
                    shortcut: GSystemDialog.Shortcut.Enter,
                    onclick: () => {
                      (gDesigner.setSetting(E.AUTO_SAVE_SETTING, true),
                        (this._warnDialogShown = true),
                        gContainer.setProperty(E.AUTO_SAVE_WARN_DIALOG_SHOWN, true),
                        gDesigner.stats('settings_toggle_auto-save-enabled'),
                        e(true));
                    },
                  },
                ],
              });
            });
    }

    _showFormatNotSupportedDialog(e) {
      gDesigner.getSetting(E.REMINDER_FOR_CDR_DES_FILE, true) &&
        (GSystemDialog.custom({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey(
              'GAutoSave',
              'text.dialog-auto-save-is-not-available-for-cdr-and-des.text'
            )
          ),
          className: 'g-auto-save-format-not-support-warn-dialog',
          icon: 'info',
          closeable: false,
          buttons: [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GAutoSave',
                  'text.dialog-auto-save-is-not-available-for-cdr-and-des.save-as-button'
                )
              ),
              closeOnClick: true,
              onclick: () => {
                gDesigner.executeAction(
                  GGravitCloudAction.getIdForAction(GGravitCloudAction.Actions.SaveAs),
                  e
                );
              },
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GAutoSave',
                  'text.dialog-auto-save-is-not-available-for-cdr-and-des.keep-cdr-button'
                )
              ),
              closeOnClick: true,
              className: 'primary',
              shortcut: GSystemDialog.Shortcut.Enter,
            },
          ],
          dontShowAgainCb: (e) => {
            (gDesigner.setSetting(E.REMINDER_FOR_CDR_DES_FILE, !e),
              gDesigner.stats(
                'settings_toggle_auto-save-not-support-for-cdr-des-reminder-enabled',
                !e
              ));
          },
        }),
        (this._formatNotSupportDialogShown[e.sessionId] = true));
    }

    _showSyncDialog(e) {
      if (gDesigner.getSetting(E.DISABLE_WARNING_SETTING_NAME)) return;
      let module, require, i;
      (e.hasCloudReference()
        ? ((module = GCore.GLocale.get(
            new GCore.GLocaleKey('GAutoSave', 'text.alert-cloud-reference-sync')
          )),
          (require = GCore.GLocale.get(
            new GCore.GLocaleKey('GAutoSave', 'text.alert-cloud-reference-sync-sub-text')
          )),
          (i = [
            {
              label: GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')),
              closeOnClick: true,
              shortcut: GSystemDialog.Shortcut.Enter,
            },
          ]))
        : ((module = GCore.GLocale.get(new GCore.GLocaleKey('GAutoSave', 'text.alert-sync'))),
          (require = GCore.GLocale.get(
            new GCore.GLocaleKey('GAutoSave', 'text.alert-sync-sub-text')
          )),
          (i = [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GAutoSave', 'text.alert-button.cancel')
              ),
              closeOnClick: true,
              shortcut: GSystemDialog.Shortcut.Esc,
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GAutoSave', 'text.alert-button.save-to-cloud')
              ),
              className: 'primary',
              closeOnClick: true,
              shortcut: GSystemDialog.Shortcut.Enter,
              onclick: () => {
                gDesigner.executeAction(
                  GGravitCloudAction.getIdForAction(GGravitCloudAction.Actions.SaveAs),
                  e
                );
              },
            },
          ])),
        (this._syncDialogShown[e.sessionId] = true),
        GSystemDialog.custom({
          title: module.replace('%title', e.getTitle()),
          subtitle: require.replace('%title', e.getTitle()),
          className: 'g-auto-save-sync-dialog',
          icon: 'info',
          closeable: false,
          buttons: i,
          dontShowAgainCb: (e) => {
            (gDesigner.setSetting(E.DISABLE_WARNING_SETTING_NAME, !!e),
              gDesigner.stats('settings_toggle_auto-save-warning-enabled', !e));
          },
        }));
    }

    _showNoEntriesCreatedInVersionHistoryForExternalFileWarningDialog(e) {
      return new Promise((t) => {
        gDesigner.getSetting(E.DISABLE_EXTERNAL_FILE_NO_ENTRIES_CREATED_WARING, false)
          ? t(true)
          : ((this._noEntriesCreatedWaringShown[e.sessionId] = true),
            GSystemDialog.custom({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GAutoSave', 'text.dialog-no-entries-created-waring.title')
              ).replace('%storage', this._getExternalStorageName(e)),
              subtitle: GCore.GLocale.get(
                new GCore.GLocaleKey('GAutoSave', 'text.dialog-no-entries-created-waring.subtitle')
              ),
              className: 'g-auto-save-no-entries-created-in-version-history-warn-dialog',
              icon: 'info',
              closeable: false,
              buttons: [
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      'GAutoSave',
                      'text.dialog-no-entries-created-waring.go-settings'
                    )
                  ),
                  closeOnClick: true,
                  onclick: () => {
                    (gDesigner.executeAction(Action_edit_settings.ID), t(false));
                  },
                },
                {
                  label: GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'ok')),
                  closeOnClick: true,
                  className: 'primary',
                  shortcut: GSystemDialog.Shortcut.Enter,
                  onclick: () => {
                    t(true);
                  },
                },
              ],
              dontShowAgainCb: (e) => {
                (gDesigner.setSetting(E.DISABLE_EXTERNAL_FILE_NO_ENTRIES_CREATED_WARING, !!e),
                  gDesigner.stats(
                    'settings_toggle_auto-save-no-entries-created-warning-enabled',
                    !e
                  ));
              },
            }));
      });
    }

    _showExternalFileUpdatedOutAppWarningDialog(e) {
      return (
        GSystemDialog.custom({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey('GAutoSave', 'text.dialog-file-updated-out-app-waring.title')
          )
            .replace('%file-name', e.getTitle() + '.' + e.getExtension().toLowerCase())
            .replace('%app-name', l.TITLE),
          className: 'g-auto-save-file-updated-out-app-warn-dialog',
          icon: 'info',
          closeable: false,
          buttons: [
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GAutoSave',
                  'text.dialog-file-updated-out-app-waring.do-not-reload'
                )
              ),
              closeOnClick: true,
              onclick: () => {
                this._fileUpdatedWarningShowing = false;
              },
            },
            {
              label: GCore.GLocale.get(
                new GCore.GLocaleKey('GAutoSave', 'text.dialog-file-updated-out-app-waring.reload')
              ),
              closeOnClick: true,
              className: 'primary',
              shortcut: GSystemDialog.Shortcut.Enter,
              onclick: () => {
                ((this._fileUpdatedWarningShowing = false), e.reload());
              },
            },
          ],
        }),
        (this._fileUpdatedWarningShowing = true),
        false
      );
    }

    _getExternalStorageName(e) {
      if (!e) return '';
      const module = e.getStorageItem();
      return module && module instanceof GGoogleDriveItem.Item
        ? s.cloudOptions.find((e) => e.type === c.GOOGLEDRIVE).name
        : '';
    }

    _shouldHideNotifications() {
      return gContainer.getProperty(E.AUTO_SAVE_HIDE_NOTIFICATION_PROP_NAME);
    }

    async _showNotification(e) {
      if (this._autoSaveModel.isSaving() || (await this._shouldHideNotifications())) return;
      let module = '';
      module = e
        ? GCore.GLocale.get(new GCore.GLocaleKey('GAutoSave', 'text.failed-auto-saving'))
        : GCore.GLocale.get(
            E.ALTERNATE_STRINGS[Math.floor(Math.random() * E.ALTERNATE_STRINGS.length)]
          );
      let require = {
        custom: true,
        class: 'g-auto-save-notification',
        enter: 'enter',
        exit: 'exit',
        timeout: 5e3,
        content: [
          e
            ? null
            : $('<div/>')
                .addClass('spinner')
                .append([
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                  $('<div/>'),
                ]),
          $('<div/>').addClass('message').text(module),
        ],
        closeCallback: function () {
          gContainer.setProperty(E.AUTO_SAVE_HIDE_NOTIFICATION_PROP_NAME, true);
        },
      };
      gDesigner.addNotification(require);
    }

    _isCDRFile(e) {
      return false;
    }

    static ALTERNATE_STRINGS = [
    new GCore.GLocaleKey('GAutoSave', 'text.notification-message-1'),
    new GCore.GLocaleKey('GAutoSave', 'text.notification-message-2'),
    new GCore.GLocaleKey('GAutoSave', 'text.notification-message-3'),
  ];

    static DISABLE_EXTERNAL_FILE_NO_ENTRIES_CREATED_WARING = 'disable-external-file-no-entries-created-waring';

    static DISABLE_WARNING_SETTING_NAME = 'autosave-prompt-for-local-files-disabled';

    static REMINDER_FOR_CDR_DES_FILE = 'autosave-prompt-for-reminding-not-support-cdr-des';

    static AUTO_SAVE_SETTING = 'auto_save';

    static AUTO_SAVE_INTERVAL_SETTING = 'auto_save_interval';

    static AUTO_SAVE_WARN_DIALOG_SHOWN = 'designer.settings.auto-save-warn-dialog-shown';

    static AUTO_SAVE_HIDE_NOTIFICATION_PROP_NAME = 'designer.settings.auto-save-hide-notification';

    static Status = { Stopped: -1, Enabled: 0, Disabled: 1 };

    static _instance = null;

    static _instance = new E();

    static getInstance() {
      return (E._instance || (E._instance = new E()), E._instance);
    }

  }
  exports.exports = E;
}