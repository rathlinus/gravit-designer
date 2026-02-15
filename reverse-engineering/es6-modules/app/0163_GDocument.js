/**
 * Webpack Module #163
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(19) /* polyfill_Array_iterator */,
    require(328) /* polyfill_Array_sort */,
    require(180) /* DataModule_180 */,
    require(181) /* polyfill_ArrayBuffer_slice */,
    require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(196) /* polyfill_Promise_finally */,
    require(20) /* polyfill_RegExp_exec */,
    require(71) /* polyfill_String_includes */,
    require(151) /* DataModule_151 */,
    require(34) /* polyfill_String_replace */,
    require(851) /* DataModule_851 */,
    require(1388) /* module_1388 */,
    require(218) /* module_218 */,
    require(189) /* DataModule_189 */,
    require(190) /* DataModule_190 */,
    require(191) /* module_191 */,
    require(192) /* DataModule_192 */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    r = require(15) /* GEditor */,
    s = require(1201) /* module */,
    l = require(797) /* module */,
    AppSettings = require(10) /* AppSettings */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    DataModule_1468 = _interopRequireDefault(require(1468) /* DataModule_1468 */),
    p = _interopRequireDefault(require(1470) /* module_1470 */),
    g = _interopRequireDefault(require(1471) /* module_1471 */),
    GUserModel = _interopRequireDefault(require(177) /* GUserModel */),
    f = require(165);
  const m = require(1472);
  var y = require(388) /* Item */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    _ = require(86) /* module_86 */,
    GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
    GEvent_storageItem = require(336) /* GEvent_storageItem */,
    C = require(237) /* Item */,
    GMissingFontsDialog = require(841) /* GMissingFontsDialog */,
    GPaywallDialog = require(1473) /* GPaywallDialog */,
    E = require(219) /* GLocale */,
    GUnsupportedFeaturesDialog = require(1238) /* GUnsupportedFeaturesDialog */,
    GDocumentChooser = require(1475) /* GDocumentChooser */,
    GFontsProviderManager = require(255) /* GFontsProviderManager */,
    GCloudStorage = require(119) /* GCloudStorage */,
    D = require(220) /* Item */,
    GContainer = require(85);
  const GEvent_license = require(441) /* GEvent_license */,
    GEvent_document = require(392) /* GEvent_document */,
    GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
    GEvent_user = require(292) /* GEvent_user */,
    GSystemDialog = require(44) /* GSystemDialog */,
    DataModule_442 = require(442) /* DataModule_442 */,
    GDocument_389 = require(389) /* GDocument_389 */,
    B = AppSettings.FILE_FORMATS.find((e) => e.default),
    U = AppSettings.FILE_FORMATS.filter((e) => e.secondary),
    $ = require(393) /* GCollaborationEvent */,
    DataModule_436 = require(436);
  require(1152) /* Item */;
  class K extends GCore.GEventTarget {
    constructor(e) {
      super();
      ((this._storageItem = e instanceof C.Item ? e : null),
      (this._windows = []),
      (this._activeWindow = null),
      this._updateStatus(_.Init),
      (this.sessionId = GCore.GUtil.uuid()),
      e instanceof GCore.GScene ? this.setScene(e) : this.setScene(gDesigner.createScene()),
      this._storageItem &&
      gDesigner.hasEventListeners(GDocumentEvent) &&
      gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.StorageItemUpdated, this)),
      (this._activeStylesList = { Fill: null, Border: null, Effect: null }),
      (this._lockedSymbolInstances = false));
    }

    _status = null;
    _errored = false;
    _storageItem = null;
    _isUpdateAvailable = false;
    _tempCloudStorageItem = null;
    _documentColors = null;
    _scene = null;
    _editor = null;
    _windows = null;
    _activeWindow = null;
    _synchronizing = false;
    _title = null;
    _reservedId = null;
    _trashed = null;
    _fontImporter = null;
    _paywall = null;
    _lockedSymbolInstances = false;
    _lockedByVersionHistory = false;
    _editable = true;
    _annotationsEditable = AppSettings.HAS_ANNOTATIONS;
    _owner = null;
    _cloudSynchronismFlag = false;
    _documentFromTemplate = false;
    _isShared = false;
    _focusAnnotationId = null;
    _failedDocumentIdOrToken = null;
    _lastDownloadSize = 0;
    _lastDownloadSize = 0;
    hasUTS = undefined;
    _activeStylesList = null;
    _annotationFocused = false;
    _colorModeElms = null;

    updateActiveStylesList(e, t) {
      this._activeStylesList.hasOwnProperty(e) && (this._activeStylesList[e] = t);
    }

    getActiveStylesList() {
      return this._activeStylesList;
    }

    clearActiveStylesList() {
      Object.keys(this._selectedStylesList).forEach((e) => {
        this._selectedStylesList[e] = null;
      });
    }

    setFocusAnnotationId(e) {
      this._focusAnnotationId = e;
    }

    getFocusAnnotationId() {
      return this._focusAnnotationId;
    }

    setFailedDocumentIdOrToken(e) {
      this._failedDocumentIdOrToken = e;
    }

    getFailedDocumentIdOrToken() {
      return this._failedDocumentIdOrToken;
    }

    setAnnotationFocused() {
      let exports = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
      this._annotationFocused = exports;
    }

    isAnnotationFocused() {
      return this._annotationFocused;
    }

    setColorModeElms(e) {
      this._colorModeElms = e;
    }

    getColorModeElms() {
      return this._colorModeElms;
    }

    setDocumentFromTemplate(e) {
      this._documentFromTemplate = e;
    }

    isDocumentFromTemplate() {
      return this._documentFromTemplate;
    }

    setIsShared(e) {
      this._isShared = e;
    }

    isShared() {
      return this._isShared;
    }

    openPaywall(e) {
      (this._paywall && this._paywall.close(),
        (this._paywall = new GPaywallDialog(this, this.getStorageItem(), e)),
        this._paywall.open());
    }

    getStatus() {
      return this._status;
    }

    isNew() {
      return !this._storageItem;
    }

    isModified() {
      return (
        !!this._editor &&
        (!!this._errored ||
          !!this._editor.isModified(
            AppSettings.HAS_ANNOTATIONS
              ? (e) => e.hasMixin(GCore.GAnnotation) || e instanceof GCore.GComment
              : null
          ) ||
          !(
            !this._editable ||
            !this.getScene() ||
            (this.getStorageItem() && this.getStorageItem().getVersionId()) ||
            !(
              this.getScene().getLastTimeAnnotationsFromCloudModified() -
                this.getScene().getLastSavedTime() >
              0
            )
          ))
      );
    }

    getStorageItem() {
      return this._storageItem;
    }

    getExtension() {
      const exports = this.getStorageItem();
      return exports ? exports.getExtension() : B.ext;
    }

    hasCDR() {
      return !!(
        DataModule_442.CDR_ORIGIN_PROPERTY_NAME &&
        this._scene &&
        this._scene.getProperty(DataModule_442.CDR_ORIGIN_PROPERTY_NAME, true)
      );
    }

    getTempCloudStorageItem() {
      return this._tempCloudStorageItem || this._storageItem;
    }

    getStorage() {
      return this._storageItem ? this._storageItem.getStorage() : null;
    }

    setStorageItem(e) {
      e !== this._storageItem &&
        ((this._storageItem = e),
        this._storageItem &&
          this.getFileFormatVersion() &&
          this._storageItem.storeFileFormatVersion(this.getFileFormatVersion()),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.StorageItemUpdated, this)));
    }

    getScene() {
      return this._scene;
    }

    setScene(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      if (e !== this._scene || module) {
        var require = false;
        (gDesigner.getActiveDocument() === this &&
          (gDesigner.activateDocument(null), (require = true)),
          this._updateScene(e),
          this._updateStatus(_.Ready, e),
          require && gDesigner.activateDocument(this));
      }
    }

    setFileFormatVersion() {}

    async saveFileFormatVersion() {}

    getFileFormatVersion() {
      return null;
    }

    getDocumentColors(e) {
      var t = Object.keys(this._documentColors);
      t.sort(
        function (e, t) {
          return this._documentColors[t] - this._documentColors[e];
        }.bind(this)
      );
      var n = t.map(
        function (e) {
          return GCore.GPattern.deserialize(e);
        }.bind(this)
      );
      return ('number' == typeof e && e > 0 && (n = n.slice(0, e)), n);
    }

    _applicationStateChangedEvent(e) {
      e.document === this && this._scene && this._checkPermissionsAndUpdateState();
    }

    _networkAvailabilityChangedEvent() {
      this._checkPermissionsAndUpdateState();
    }

    _checkPermissionsAndUpdateState() {
      const exports = gDesigner.getApplicationManager().isInspectEnabled(),
        module = gDesigner.getApplicationManager().isCommentingEnabled();
      (exports === this._editable && module === this._annotationsEditable) ||
        ((this._editable = exports), (this._annotationsEditable = module), this._updateState());
    }

    _resolvedMissingEntryEvent(e) {
      try {
        const t = this.isCloudFile() ? this.getStorageItem().getId() : null;
        DataModule_1468.default.register({
          message: 'DICTIONARY_MISSING_ENTRY',
          data: { entry: e.entry.uuid, file_id: t },
        });
      } catch (e) {
        console.error(e);
      }
    }

    _updateScene(e) {
      if (
        (this._scene &&
          (this._editor.release(),
          this._editor.removeEventListener(GTools.GEditor.FileDropEvent, this._dropFileEvent, this),
          this._editor.removeEventListener(GTools.GEditor.ModifiedEvent, this._modifiedEvent, this),
          this._editor.removeAllEventListeners(),
          this._scene
            .getDictionary()
            .removeEventListener(
              GCore.GSceneDictionary.ResolvedMissingEntryEvent,
              this._resolvedMissingEntryEvent,
              this
            ),
          this._scene.removeEventListener(
            GCore.GNode.AfterInsertEvent,
            this._afterInsertNodeEvent,
            this
          ),
          this._scene.removeEventListener(
            GCore.GNode.AfterRemoveEvent,
            this._afterRemoveNodeEvent,
            this
          ),
          this._scene.removeEventListener(
            GCore.GNode.BeforeRemoveEvent,
            this._beforeRemoveNodeEvent,
            this
          ),
          this._scene.removeEventListener(
            GCore.GNode.BeforePropertiesChangeEvent,
            this._beforePropertiesChangeEvent,
            this
          ),
          this._scene.removeEventListener(
            GCore.GNode.AfterPropertiesChangeEvent,
            this._afterPropertiesChangeEvent,
            this
          ),
          this._scene.removeEventListener(
            GCore.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this
          ),
          this._scene.removeAllEventListeners(),
          this._scene.iteratePages((e) => {
            e.removeAllEventListeners();
          }, true),
          this._scene.getDictionary().removeAllEventListeners(),
          this._scene.getSymbolDictionary().removeAllEventListeners(),
          gDesigner.removeEventListener(GEvent_license, this._licenseChangedEvent, this),
          gDesigner.removeEventListener(GEvent_document, this._applicationStateChangedEvent, this),
          gDesigner.removeEventListener(
            GNetworkAvailabilityChangedEvent,
            this._networkAvailabilityChangedEvent,
            this
          ),
          gDesigner.removeEventListener(GEvent_user, this._userLoggedEvent, this),
          gDesigner.removeEventListener(GDocumentEvent, this._handleDocumentEvent, this),
          gDesigner.removeEventListener(GEvent_storageItem, this._handleStorageItemEvent, this),
          this.removeEventListener($, this._collaborationEvent, this),
          this.removeEventListener(GDocumentStatusEvent, this._handleDocumentStatusEvent, this),
          (this._editor = null),
          (this._scene = null)),
        (this._documentColors = {}),
        (this._scene = e),
        this._scene)
      ) {
        this._editor = GTools.GEditor.getEditor(e) || new GTools.GEditor(e);
        const t = gDesigner.getSyncUser();
        (t && this._editor.setUID(t.getUID()),
          this._editor.addEventListener(
            GTools.GEditor.FileDropEvent,
            this._dropFileEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._editor.addEventListener(
            GTools.GEditor.ModifiedEvent,
            this._modifiedEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene
            .getDictionary()
            .addEventListener(
              GCore.GSceneDictionary.ResolvedMissingEntryEvent,
              this._resolvedMissingEntryEvent,
              this,
              undefined,
              undefined,
              true
            ),
          this._scene.addEventListener(
            GCore.GNode.AfterInsertEvent,
            this._afterInsertNodeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene.addEventListener(
            GCore.GNode.AfterRemoveEvent,
            this._afterRemoveNodeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene.addEventListener(
            GCore.GNode.BeforeRemoveEvent,
            this._beforeRemoveNodeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene.addEventListener(
            GCore.GNode.BeforePropertiesChangeEvent,
            this._beforePropertiesChangeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene.addEventListener(
            GCore.GNode.AfterPropertiesChangeEvent,
            this._afterPropertiesChangeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          this._scene.addEventListener(
            GCore.GNode.AfterFlagChangeEvent,
            this._afterFlagChangeEvent,
            this,
            undefined,
            undefined,
            true
          ),
          gDesigner.addEventListener(GEvent_license, this._licenseChangedEvent, this),
          gDesigner.addEventListener(GEvent_document, this._applicationStateChangedEvent, this),
          gDesigner.addEventListener(
            GNetworkAvailabilityChangedEvent,
            this._networkAvailabilityChangedEvent,
            this
          ),
          gDesigner.addEventListener(GEvent_user, this._userLoggedEvent, this),
          gDesigner.addEventListener(GDocumentEvent, this._handleDocumentEvent, this),
          gDesigner.addEventListener(GEvent_storageItem, this._handleStorageItemEvent, this),
          this.addEventListener($, this._collaborationEvent, this, undefined, undefined, true),
          this.addEventListener(
            GDocumentStatusEvent,
            this._handleDocumentStatusEvent,
            this,
            undefined,
            undefined,
            true
          ),
          e.acceptChildren((e) => {
            if (e.hasMixin(GCore.GElement.Stylable) && e.getPaintLayers())
              for (var t = e.getPaintLayers().getFirstChild(); null !== t; t = t.getNext())
                this._updateDocumentColorsFromElement(t, ['_pt']);
          }),
          this._updateState());
      }
    }

    _userLoggedEvent(e) {
      const { user: module } = e;
      module && this._editor && this._editor.setUID(new GUserModel.default(module).getUID());
    }

    _handleDocumentEvent() {}

    _handleStorageItemEvent() {}

    async _collaborationEvent(e) {
      if (this.isLockedByVersionHistory()) return;
      const { type: module, data: require } = e;
      switch (module) {
        case $.Type.ReviewStatusChanged:
          this.isCollaborative() &&
            this.getStorageItem().setCollaborativeFileStatus(require.status);
          break;
        case $.Type.FileUpdate:
          if (
            require &&
            require.metadata &&
            require.metadata.sessionId &&
            require.metadata.sessionId === this.sessionId
          )
            return;
          ((this._isUpdateAvailable = true),
            (this._isIgnoringCurrentUpdate = false),
            gDesigner.hasEventListeners(GDocumentEvent) &&
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.UpdateAvailable, this)));
      }
    }

    async _handleDocumentStatusEvent(e) {
      switch (e.status) {
        case _.Loaded:
          ((this._isUpdateAvailable = false), (this._isIgnoringCurrentUpdate = false));
          break;
        case _.Ready:
          this._checkPermissionsAndUpdateState();
          break;
        case _.Saved:
          ((this._isUpdateAvailable = false),
            (this._isIgnoringCurrentUpdate = false),
            this._handleDocumentStatusSavedEventForRealtimeNotification(e));
          break;
        case _.Saving:
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Saving, this, e.data));
      }
    }

    async _handleDocumentStatusSavedEventForRealtimeNotification(e) {
      e.data && (e.data.hasOwnProperty('collabTextUpdate') || e.data.hasOwnProperty('sendEmail'))
        ? this.publish({
            collabTextUpdate: e.data.collabTextUpdate,
            sendEmail: e.data.sendEmail,
          })
        : this.publish();
    }

    async isUpdateAvailable() {
      if (this._isUpdateAvailable) return true;
      const exports = this.getStorageItem();
      return (
        !(
          !exports ||
          (!exports.hasVersionControl() && !this.isCloudFile()) ||
          this._synchronizing
        ) && exports.hasUpdates()
      );
    }

    isIgnoringCurrentUpdate() {
      return this._isIgnoringCurrentUpdate;
    }

    ignoreCurrentUpdate() {
      this._isIgnoringCurrentUpdate = true;
    }

    getEditor() {
      return this._editor;
    }

    getWindows() {
      return this._windows;
    }

    getActiveWindow() {
      return this._activeWindow;
    }

    setOwner(e) {
      (this._owner && this._owner.id) !== (e && e.id) &&
        ((this._owner = e),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.OwnerUpdated, this)));
    }

    getOwner() {
      return this._owner;
    }

    async canSaveToCloud() {
      if (!this._owner) return true;
      const exports = await gDesigner.getUser();
      return (
        !!exports &&
        (this._owner.id === exports.getUID() ||
          gDesigner.getApplicationManager().hasPermission(this, AppSettings.SharePermissions.EDIT))
      );
    }

    setTitle(e) {
      e !== this._title &&
        ((this._title = e),
        this.isCloudFile() && this.getStorageItem().setFileName(e),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, this)));
    }

    getTitle() {
    return (
      this.isNew() && (V[this.sessionId] = V[this.sessionId] ? V[this.sessionId] : H++),
      this.isNew()
        ? this._title ||
          GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.default-document-name')) +
            '-' +
            V[this.sessionId]
        : this._storageItem.getName()
    );
  }

    insertElement(e, t, n, _interopRequireDefault) {
      var GTools = this.getScene();
      if (GTools.isFixedSized() && e.hasMixin(GCore.GElement.Transform)) {
        var r = e.getGeometryBBox();
        if (!r) return;
        var s = r.getWidth(),
          l = r.getHeight(),
          AppSettings = GTools.getProperty('w'),
          CollaborationMergeUtils = GTools.getProperty('h'),
          DataModule_1468 = new GCore.GTransform();
        if (n && (s > AppSettings || l > CollaborationMergeUtils)) {
          var p = 1,
            g = 1;
          (s > AppSettings && (p = AppSettings / s),
            l > CollaborationMergeUtils && (g = CollaborationMergeUtils / l),
            p < g ? (g = p) : (p = g),
            (DataModule_1468 = DataModule_1468.translated(-r.getX(), -r.getY())
              .scaled(p, g)
              .translated(r.getX(), r.getY())),
            (s *= p),
            (l *= g));
        }
        (t &&
          (DataModule_1468 = DataModule_1468.translated(
            (AppSettings - s) / 2 - r.getX(),
            (CollaborationMergeUtils - l) / 2 - r.getY()
          )),
          e.transform(DataModule_1468, true));
        var GUserModel = DataModule_1468.getScaleFactor(),
          f = function (e) {
            if (
              e instanceof GCore.GItem &&
              e.hasMixin(GCore.GElement.Stylable) &&
              e.hasStyleBorder()
            ) {
              var t = e.getPaintLayers();
              t &&
                GCore.GUtil.each(t.getBorderLayers(), function (e, t) {
                  t && t.setProperty('_bw', t.$_bw * GUserModel);
                });
            }
          };
        (e.beginUpdate(),
          f(e),
          e.hasMixin(GCore.GNode.Container) && e.acceptChildren(f),
          e.endUpdate());
      }
      this._editor.insertElements([e], true, _interopRequireDefault, e instanceof GCore.GItem);
    }

    loadFromData(e) {
      var t = { progress: null, checkAnnotations: false };
      (this._updateStatus(_.Loading, t), this._loadDataIntoDocument(e, t));
    }

    async _loadDataIntoDocument(e, t) {
      (t.progress && t.progress(5), await (0, CollaborationMergeUtils.sleep)(10));
      const require = GCloudStorage.unzipData(e);
      return (
        t.progress && t.progress(10),
        await (0, CollaborationMergeUtils.sleep)(10),
        this.deserializeData(require, t)
      );
    }

    deserializeData(e, t) {
      const require = this.getActiveWindow();
      return (
        require && require.centerAndZoom(),
        this._updateCloudSynchronism(this.isCloudFile()),
        new Promise(async (n, _interopRequireDefault) => {
          (t || ((t = { progress: null }), this._updateStatus(_.Loading, t)),
            t.progress && t.progress(15));
          const GTools = await new Promise((n, _interopRequireDefault) => {
            try {
              GCore.GNode.deserializeAsync(e, gDesigner.getWorkspace(), t.progress, null, n);
            } catch (e) {
              _interopRequireDefault(e);
            }
          }).catch(_interopRequireDefault);
          ((e = null),
            GTools &&
              (!this.isCloudFile() &&
              !this.isExternalFile() &&
              GTools &&
              GTools.isCloudSynchronization()
                ? this.loadFromCloud(
                    GTools,
                    t,
                    () => {
                      this._updateCloudSynchronism(true);
                    },
                    () => {
                      (this._updateCloudSynchronism(false),
                        gDesigner.isOffline() || GTools.setProperty('cfs', false));
                    },
                    false
                  )
                : GTools
                  ? (this.isExternalFile() && GTools.setProperty('cfs', false),
                    this._updateScene(GTools),
                    !this.isCloudFile() && t.checkAnnotations && this.loadCloudAnnotations(),
                    this._updateStatus(_.Loaded),
                    this.setScene(GTools, true))
                  : this._updateStatus(_.LoadFailed),
              n()));
        })
      );
    }

    loadFromCloud(e, t, n, _interopRequireDefault) {
      let GTools = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4];
      ((t = t || { progress: null }), this._updateStatus(_.Syncing, t));
      var GCore = () => {
        this.chooseLatestDocument(
          e,
          (e) => {
            (this.setScene(e),
              t.checkAnnotations && this.loadCloudAnnotations(),
              this._updateStatus(_.Loaded),
              n && n(e));
          },
          (n) => {
            (this.setScene(e),
              t.checkAnnotations && this.loadCloudAnnotations(),
              this._updateStatus(_.SyncFailed),
              _interopRequireDefault && _interopRequireDefault(n));
          },
          null,
          (GTools &&
            (() => {
              this._updateStatus(_.LoadCancelled);
            })) ||
            undefined
        );
      };
      GCore();
    }

    async storeToCloud(e, t, n) {
      let _interopRequireDefault =
          arguments.length > 3 && undefined !== arguments[3] && arguments[3],
        GTools = arguments.length > 4 ? arguments[4] : undefined;
      var r = GTools || {};
      this.isModified() || Object.assign(r, { lastModifiedDate: e.getLastSavedTime() });
      const s = () => {
          (this._updateCloudSynchronism(false),
            n
              ? n.apply(null, arguments)
              : new E(
                  GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.sync-to-cloud-error'))
                ).open());
        },
        l = () => {
          (this._updateCloudSynchronism(true), t && t.apply(null, arguments));
        };
      this.isExternalFile()
        ? this.performCloudSave(l, s, r, _interopRequireDefault)
        : GCloudStorage.performSave(
            this,
            l,
            s,
            r,
            await D.from(gDesigner.getDefaultStorage(), e.getProperty('cid'), this.getTitle()),
            _interopRequireDefault
          );
    }

    saveAnnotations(e, t) {
      return GCloudStorage.saveDocumentAnnotations(this, e, t);
    }

    loadCloudAnnotations() {
      return GCloudStorage.getCloudAnnotations(this);
    }

    async performCloudSave(e, t, n) {
      let _interopRequireDefault =
        arguments.length > 3 && undefined !== arguments[3] && arguments[3];
      var GTools = this;
      let r = false;
      if (this.isCommercialProductFile()) this.openPaywall();
      else {
        var s = this.getStorageItem(),
          l = (n) => {
            (_interopRequireDefault ||
              (n && 507 === n.code
                ? (GSystemDialog.alert(n.message), n.noFailCall && (r = true))
                : GSystemDialog.confirm(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GCommonNames', 'text.save-to-cloud-failed')
                    ),
                    (n) => {
                      n
                        ? gDesigner.executeAction(
                            'file.save-as.'.concat(B.ext),
                            [null, this],
                            'savefailed'
                          )
                        : 'function' != typeof t || r
                          ? 'function' == typeof e && e(false)
                          : ((r = true), t());
                    },
                    GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'no')),
                    GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'yes'))
                  )),
              n && console.log(n),
              this.setSynchronizing(false),
              this._updateStatus(_.SyncFailed),
              this._updateStatus(_.SaveFailed),
              gDesigner.trigger(
                new GDocumentEvent(GDocumentEvent.Type.SynchronismUpdateFailed, this)
              ),
              this.setErrored(true),
              t && !r && ((r = true), t()));
          };
        try {
          this.setSynchronizing(true);
          var AppSettings = async () => {
            const t = !GTools.isCloudFile() || s.getType() !== B.type;
            (await this.saveAnnotations(t),
              (n = this.updateSaveOptionsLastModifiedDate(n)),
              s.write(
                this,
                function () {
                  (GTools.setSynchronizing(false),
                    GTools.setErrored(false),
                    GTools._updateStatus(_.Saved, {}),
                    gDesigner.hasEventListeners(GDocumentEvent) &&
                      gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, GTools)));
                  try {
                    GTools.isCloudFile() && gDesigner.updateRecentDocumentsAction();
                  } finally {
                    e && e();
                  }
                },
                function (e) {
                  l(e);
                },
                null,
                n
              ));
          };
          if (s.hasVersionControl() && (await s.hasUpdates())) {
            var CollaborationMergeUtils = this.getScene(),
              DataModule_1468 = await s.getLatestFileVersion(),
              p = await new Promise((e, t) => {
                DataModule_1468.read(
                  (t) => e(t),
                  (e) => t(e)
                );
              }),
              g = GCore.GNode.deserialize(GCloudStorage.unzipData(p), gDesigner.getWorkspace());
            return new GDocumentChooser(
              CollaborationMergeUtils,
              g,
              this.getTitle(),
              DataModule_1468.getName(),
              (e) => {
                if (e === CollaborationMergeUtils) AppSettings();
                else {
                  this.setSynchronizing(false);
                  const t = new K(DataModule_1468);
                  (t.setScene(e), gDesigner.replaceDocument(this, t, true));
                }
              },
              () => {
                (this.setSynchronizing(false),
                  GTools.setErrored(false),
                  this._updateStatus(_.SaveCancelled, {}),
                  e && e());
              }
            ).open();
          }
          AppSettings();
        } catch (e) {
          l(e);
        }
      }
    }

    async chooseLatestDocument(e, t, n, _interopRequireDefault, GTools) {
      var r = (e) => {
        (n && n(e), (e instanceof Error || 'string' == typeof e) && console.error(e));
      };
      let s;
      try {
        s = await AppSettings.gApi.getFile(e.getProperty('cid'));
      } catch (e) {
        return void r(e);
      }
      GCloudStorage.loadDesignData(
        e.getProperty('cid'),
        undefined,
        undefined,
        undefined,
        undefined,
        s.autosave
      )
        .then(async (n) => {
          var s = n.data,
            l = n.file;
          ((this._tempCloudStorageItem = await D.from(
            gDesigner.getDefaultStorage(),
            e.getProperty('cid')
          )),
            (_interopRequireDefault =
              _interopRequireDefault ||
              function (e, t) {
                return (
                  e.lastModifiedDate().getTime() !== t.lastModifiedDate().getTime() &&
                  (0, CollaborationMergeUtils.isDifferent)(e, t)
                );
              }));
          var AppSettings = GCore.GNode.deserialize(
            GCloudStorage.unzipData(s),
            gDesigner.getWorkspace()
          );
          AppSettings
            ? _interopRequireDefault(e, AppSettings)
              ? new GDocumentChooser(
                  e,
                  AppSettings,
                  this.getTitle(),
                  l.name,
                  (n) => {
                    ((this._tempCloudStorageItem = null),
                      n === e
                        ? this.storeToCloud(n)
                        : n.setProperties(['cid', 'cfs'], e.getProperties(['cid', 'cfs'])),
                      t(n, true));
                  },
                  GTools
                ).open()
              : t(e)
            : r();
        })
        .catch(r);
    }

    isCloudSynchronismAvailable() {
      return this._cloudSynchronismFlag;
    }

    _updateCloudSynchronism(e) {
      this._cloudSynchronismFlag !== e &&
        ((this._cloudSynchronismFlag = e),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.CloudSynchronismUpdated, this)));
    }

    isCloudFile() {
      return this.getStorageItem() instanceof D.Item;
    }

    isCollaborative() {
      return this.getStorageItem() && this.getStorageItem().hasMixin(DataModule_436);
    }

    isShareable() {
      const exports = this.getStorageItem();
      return (
        (this.isCloudFile() && exports && exports.getId()) ||
        (exports && exports.getId() && exports.supportsShadowFile() && exports.supportsSharing())
      );
    }

    isExternalFile() {
      return this.getStorageItem() instanceof y.Item;
    }

    isEditingEnabled() {
      const exports = this.getStorageItem();
      return !exports || exports.isEditingEnabled();
    }

    getId() {
      return this.isCloudFile() || this.isExternalFile()
        ? this.getStorageItem().getId()
        : this.getCloudReferenceId()
          ? this.getCloudReferenceId()
          : null;
    }

    getToken() {
      return this.isCollaborative() ? this.getStorageItem().getToken() : null;
    }

    getAnnotationsId() {
      if (!AppSettings.HAS_ANNOTATIONS) return null;
      var e = this.getId();
      if (!e) {
        var module = this.getScene();
        (e = module.isCloudAnnotations() ? module.getProperty('cid') : null) ||
          (e = this.getReservedId());
      }
      return e;
    }

    async getAnnotationsToken(e) {
      if (!AppSettings.HAS_ANNOTATIONS) return null;
      var t = null;
      let require = location.search.match(
        /token=(?:[\0-%'-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/
      );
      require && (t = require[0].slice(6));
      var _interopRequireDefault = null,
        GTools = this.getScene(),
        GCore = this.getId(),
        r = GTools.getProperty('cid'),
        s = this.getReservedId();
      return (
        !t || (e !== GCore && e !== s)
          ? e === r &&
            e !== GCore &&
            e !== s &&
            (_interopRequireDefault = GTools.getProperty('asec'))
          : (_interopRequireDefault = t),
        _interopRequireDefault
      );
    }

    updateSaveOptionsLastModifiedDate(e, t) {
      return (
        e ? (e.save = true) : (e = { save: true }),
        AppSettings.HAS_ANNOTATIONS &&
          this._scene &&
          this._scene.getLastTimeAnnotationsFromCloudModified() &&
          (e.lastModifiedDate = this._scene.getLastTimeAnnotationsFromCloudModified()),
        t && !e.lastModifiedDate && (e.lastModifiedDate = t),
        e
      );
    }

    isWebFile() {
      const exports = this.getStorageItem();
      return exports
        ? exports instanceof D.Item
        : gContainer.getRuntime() === GContainer.Runtime.Browser ||
            gContainer.getRuntime() === GContainer.Runtime.PWA;
    }

    isCommercialProductFile() {
      return this.getStorageItem() && this.getStorageItem() instanceof D.CommercialProduct;
    }

    restrictElements(e) {
      return (
        e.forEach((e) => {
          e.setProperty('restricted', this.getStorageItem().getId(), true);
        }),
        e
      );
    }

    filterUnrestrictedCommercialFileElements(e) {
      return (
        e &&
        e.filter((e) => {
          let module = e.getProperty('restricted', true) || false;
          if (!module) return true;
          let require = this.getStorageItem();
          return require && require.getId() === module;
        })
      );
    }

    hasCloudReference() {
      return !this.isCloudFile() && !!this._getCloudSceneId();
    }

    getCloudReferenceId() {
      return (this.hasCloudReference() && this._getCloudSceneId()) || null;
    }

    _getCloudSceneId() {
      return this.getScene() && this.getScene().getProperty('cid');
    }

    isCloudSyncOn() {
      return (
        this.hasCloudReference() && this.getScene() && this.getScene().isCloudSynchronization()
      );
    }

    isExtensionAvailableForLoading(e) {
      return e && !!K.FileTypes.find((t) => t.load && t.ext.toUpperCase() === e.toUpperCase());
    }

    async reload() {
      let exports;
      if (
        (gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.BeforeReload, this)),
        this.isCloudFile())
      ) {
        const t = await AppSettings.gApi.getFile(this.getId());
        ((exports = await D.from(
          gDesigner.getDefaultStorage(),
          t,
          undefined,
          undefined,
          t.autosave
        )),
          this.getEditor() && this.getEditor().markSavePoint(),
          this.setStorageItem(exports));
      } else exports = this.getStorageItem();
      this.load(exports);
    }

    load(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      if ('lts' !== gDesigner.getEnv() || gDesigner.isEnabledProFeatures()) {
        var require = e || this._storageItem;
        if (require) {
          var _interopRequireDefault = require.getName(),
            GTools = require.getExtension();
          ((module = Object.assign(
            {},
            {
              progress: null,
              filename: _interopRequireDefault,
              ext: GTools ? GTools.toLowerCase() : null,
            },
            module
          )),
            this._updateStatus(_.Loading, module));
          var r = (e) => {
              let module = false;
              GFontsProviderManager.getInstance().query(
                (n) => {
                  var _interopRequireDefault = [];
                  (n.faces.slice().map((e) => {
                    for (var module = [e.family], n = 0; n < e.fonts.length; n++)
                      e.fonts[n].family &&
                        module.indexOf(e.fonts[n].family) < 0 &&
                        module.push(e.fonts[n].family);
                    _interopRequireDefault = _interopRequireDefault.concat(module);
                  }),
                    s.GPDFImport.updateFontFamilies(_interopRequireDefault),
                    module || ((module = true), e()));
                },
                '%',
                true
              );
            },
            l = function (e, _interopRequireDefault, r, s) {
              if (e)
                return (
                  new E(
                    GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.image-too-big'))
                  ).open(),
                  void this._updateStatus(_.LoadFailed)
                );
              module.progress(100);
              var l = gDesigner.createScene(),
                AppSettings = l.getActivePage(),
                CollaborationMergeUtils = new GCore.GImage();
              (CollaborationMergeUtils.setProperties(
                ['iw', 'ih', 'url'],
                [r, s, _interopRequireDefault]
              ),
                AppSettings.setProperties(
                  ['w', 'h', 'bck'],
                  [r, s, 'PNG' !== GTools ? GCore.GRGBColor.WHITE : null]
                ),
                AppSettings.appendChild(CollaborationMergeUtils),
                require.getName() && this.setTitle(require.getName()),
                this.setScene(l),
                this._updateStatus(_.Loaded),
                gDesigner.gtmEvent('DOCUMENT_IMPORT_EVENT'));
            }.bind(this);
          require.read(
            async (e) => {
              if ('GVDESIGN' === GTools || GTools === B.ext.toUpperCase()) {
                (gDesigner.stats('document_open_'.concat(GTools.toLowerCase())),
                  (module.checkAnnotations = true));
                const _interopRequireDefault = GFontsProviderManager.getInstance();
                _interopRequireDefault.setShowMissingFontsDialog(false);
                const GCore = new p.default();
                (GCore.start(),
                  this._loadDataIntoDocument(e, module).finally(async () => {
                    try {
                      const e = gDesigner.getWorkspace().getFontManager();
                      await new g.default(e).waitForAllPendingFonts();
                      const t = GCore.getMissingFonts();
                      t && t.length && new GMissingFontsDialog(this, t).open();
                    } finally {
                      (GCore.stop(), _interopRequireDefault.setShowMissingFontsDialog(true));
                    }
                  }),
                  gDesigner.addToRecentFiles(require),
                  gDesigner.gtmEvent('DOCUMENT_OPEN_EVENT'));
              } else if (U.length && U.find((e) => e.ext.toUpperCase() === GTools)) {
                await this._handleSecondaryFormatRead(require, e, module);
                var _interopRequireDefault = gDesigner.getWindows().getActiveWindow().getView();
                if (
                  _interopRequireDefault &&
                  this.hasCDR() &&
                  !_interopRequireDefault.getViewConfiguration().multiPageView
                ) {
                  var AppSettings = this._scene.getActivePage();
                  if (AppSettings) {
                    var CollaborationMergeUtils = AppSettings.getContentBBox();
                    if (CollaborationMergeUtils && !CollaborationMergeUtils.isEmpty()) {
                      var DataModule_1468 = CollaborationMergeUtils.getSide(
                        GCore.GRect.Side.CENTER
                      );
                      _interopRequireDefault.zoomAtCenter(DataModule_1468);
                    }
                  }
                }
                gDesigner.gtmEvent('DOCUMENT_OPEN_EVENT');
              } else if ('SVG' === GTools || 'SVGZ' === GTools)
                (gDesigner.stats('document_open_svg'),
                  s.GSVGImport.import(
                    e,
                    { fontProvider: J },
                    gDesigner.getWorkspace().getFontManager(),
                    (e, t, _interopRequireDefault) => {
                      if (t) {
                        let e;
                        if (t instanceof GCore.GPage)
                          ((e = gDesigner.createScene(true)), e.appendChild(t), e.setActivePage(t));
                        else {
                          e = gDesigner.createScene();
                          var GTools = e.getActivePage(),
                            r = null,
                            s = [];
                          if (t instanceof GCore.GGroup)
                            for (var l = 1 === t.getChildren().length; t.getFirstChild(); ) {
                              var AppSettings = t.getFirstChild();
                              if (
                                (t.removeChild(AppSettings),
                                GTools.appendChild(AppSettings),
                                l && AppSettings.hasMixin(GCore.GStylable))
                              ) {
                                var CollaborationMergeUtils = t.getEffects();
                                CollaborationMergeUtils &&
                                  CollaborationMergeUtils.getChildren().length &&
                                  CollaborationMergeUtils.getChildren().forEach(function (e) {
                                    AppSettings.getEffects().appendChild(e.clone());
                                  });
                              }
                              if (
                                !AppSettings.hasMixin(GCore.GStylable) ||
                                null === AppSettings.getPaintLayers() ||
                                AppSettings instanceof GCore.GImage ||
                                AppSettings.hasStyleBorder() ||
                                AppSettings.hasStyleFill()
                              )
                                (s.push(AppSettings),
                                  AppSettings.getPaintBBox() &&
                                    (r = r
                                      ? r.united(AppSettings.getPaintBBox())
                                      : AppSettings.getPaintBBox()));
                            }
                          else (s.push(t), GTools.appendChild(t), (r = t.getPaintBBox()));
                          (GCore.GUtil.each(s, function () {}),
                            GTools.setProperties(
                              ['w', 'h'],
                              [
                                _interopRequireDefault ? _interopRequireDefault.width : 0,
                                _interopRequireDefault ? _interopRequireDefault.height : 0,
                              ]
                            ),
                            _interopRequireDefault.unit &&
                              e.setProperty('ut', _interopRequireDefault.unit));
                        }
                        (this._updateStatus(_.Loaded),
                          require.getName() && this.setTitle(require.getName()),
                          this.setScene(e),
                          gDesigner.gtmEvent('DOCUMENT_IMPORT_EVENT'));
                      } else this._updateStatus(_.LoadFailed);
                      var DataModule_1468 = gDesigner.getWindows().getActiveWindow().getView();
                      ((DataModule_1468.getViewConfiguration().paintMode =
                        GCore.GScenePaintConfiguration.PaintMode.Output),
                        DataModule_1468.invalidate());
                    }
                  ));
              else if ('EPS' === GTools)
                (gDesigner.stats('document_open_eps'),
                  this._preProcessFonts(
                    GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.keep-fonts-eps'))
                  ),
                  s.GEPSImport.import(
                    e,
                    gDesigner.getSetting('eps_outline_fonts', true),
                    gDesigner.getWorkspace().getFontManager(),
                    (e, t, _interopRequireDefault, GTools) => {
                      if ((this._postProcessFonts(), e || !t)) {
                        (e && new E(e).open(), this._updateStatus(_.LoadFailed));
                        var r = gDesigner.getWindows().getActiveWindow().getView();
                        return (
                          (r.getViewConfiguration().paintMode =
                            GCore.GScenePaintConfiguration.PaintMode.Output),
                          void r.invalidate()
                        );
                      }
                      var s = gDesigner.createScene(),
                        l = s.getActivePage(),
                        AppSettings = null;
                      ('production' !== gDesigner.getEnv() &&
                        'lts' !== gDesigner.getEnv() &&
                        ((z = 0), console.time('optimization time')),
                        Q(t),
                        'production' !== gDesigner.getEnv() &&
                          'lts' !== gDesigner.getEnv() &&
                          (console.timeEnd('optimization time'),
                          console.log('Nodes removed: ' + z)));
                      var CollaborationMergeUtils = [];
                      for (
                        s._beginBlockChanges([
                          GCore.GNode._Change.BeforeChildRemove,
                          GCore.GNode._Change.AfterChildRemove,
                          GCore.GNode._Change.BeforeChildInsert,
                          GCore.GNode._Change.AfterChildInsert,
                        ]),
                          t._blockUpdateChanges();
                        t.getFirstChild();
                      ) {
                        var DataModule_1468 = t.getFirstChild();
                        (t.removeChild(DataModule_1468),
                          l.appendChild(DataModule_1468),
                          CollaborationMergeUtils.push(DataModule_1468),
                          DataModule_1468.getPaintBBox() &&
                            (AppSettings = AppSettings
                              ? AppSettings.united(DataModule_1468.getPaintBBox())
                              : DataModule_1468.getPaintBBox()));
                      }
                      (l.acceptChildren(function (e) {
                        e instanceof GCore.GText && e.hasFontsToResolve() && e.toFakeText();
                      }),
                        t._releaseUpdateChanges(),
                        GCore.GUtil.each(CollaborationMergeUtils, function (e, t) {
                          t.transform(
                            new GCore.GTransform().translated(
                              -AppSettings.getX(),
                              -AppSettings.getY()
                            )
                          );
                        }),
                        _interopRequireDefault
                          ? l.setProperties(
                              ['w', 'h'],
                              [
                                _interopRequireDefault ? _interopRequireDefault.width : 0,
                                _interopRequireDefault ? _interopRequireDefault.height : 0,
                              ]
                            )
                          : l.trimToContent(),
                        l.setProperty('bck', GTools || GCore.GRGBColor.WHITE),
                        s._endBlockChanges([
                          GCore.GNode._Change.BeforeChildRemove,
                          GCore.GNode._Change.AfterChildRemove,
                          GCore.GNode._Change.BeforeChildInsert,
                          GCore.GNode._Change.AfterChildInsert,
                        ]),
                        this._updateStatus(_.Loaded),
                        require.getName() && this.setTitle(require.getName()),
                        this.setScene(s),
                        gDesigner.gtmEvent('DOCUMENT_IMPORT_EVENT'));
                    },
                    function (e) {
                      new E(e).open();
                    },
                    function (e) {
                      module && module.progress && module.progress(e);
                    },
                    this.initCancelHandler.bind(this)
                  ));
              else if ('PDF' === GTools || 'AI' === GTools) {
                ('PDF' === GTools
                  ? gDesigner.stats('document_open_pdf')
                  : gDesigner.stats('document_open_ai'),
                  this._preProcessFonts());
                var GUserModel = 0,
                  f = function (e) {
                    new E(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GDocument', 'text.ai-not-pdf-compatible')
                      ),
                      e
                    ).open();
                  };
                r(() =>
                  s.GPDFImport.import(
                    e,
                    {},
                    gDesigner.getWorkspace().getFontManager(),
                    (e, t, _interopRequireDefault) => {
                      if ((this._postProcessFonts(), e)) new E(e).open();
                      else {
                        var GTools = gDesigner.createScene(true);
                        (GTools._beginBlockChanges([
                          GCore.GNode._Change.BeforeChildRemove,
                          GCore.GNode._Change.AfterChildRemove,
                          GCore.GNode._Change.BeforeChildInsert,
                          GCore.GNode._Change.AfterChildInsert,
                        ]),
                          GCore.GUtil.each(t, function (e, t) {
                            (t.setProperty(
                              'name',
                              GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.page')) +
                                ' ' +
                                (e + 1)
                            ),
                              'production' !== gDesigner.getEnv() &&
                                'lts' !== gDesigner.getEnv() &&
                                (console.time('optimization time'), (z = 0)),
                              Q(t),
                              'production' !== gDesigner.getEnv() &&
                                'lts' !== gDesigner.getEnv() &&
                                (console.timeEnd('optimization time'),
                                console.log('Nodes removed: ' + z)),
                              GTools.appendChild(t));
                          }),
                          GTools._endBlockChanges([
                            GCore.GNode._Change.BeforeChildRemove,
                            GCore.GNode._Change.AfterChildRemove,
                            GCore.GNode._Change.BeforeChildInsert,
                            GCore.GNode._Change.AfterChildInsert,
                          ]),
                          GTools.setActivePage(t[0]),
                          this._updateStatus(_.Loaded),
                          require.getName() && this.setTitle(require.getName()),
                          this.setScene(GTools),
                          _interopRequireDefault instanceof Array &&
                            _interopRequireDefault.length &&
                            new GMissingFontsDialog(this, _interopRequireDefault, null, (e) => {
                              e ||
                                GTools.acceptChildren((e) => {
                                  e instanceof GCore.GText && e.toFakeText();
                                });
                            }).open());
                        var r = gDesigner.getWindows().getActiveWindow().getView();
                        ((r.getViewConfiguration().paintMode =
                          GCore.GScenePaintConfiguration.PaintMode.Output),
                          r.invalidate(),
                          gDesigner.gtmEvent('DOCUMENT_IMPORT_EVENT'));
                      }
                    },
                    function (e, n) {
                      ((GUserModel = Math.max(GUserModel, (e / n) * 100)),
                        module.progress(GUserModel));
                    },
                    f
                  )
                );
              } else if ('SKETCH' === GTools)
                (gDesigner.stats('document_open_sketch'),
                  this._preProcessFonts(),
                  s.GSketchImport.import(
                    e,
                    {
                      progress: module.progress,
                      fontProvider: J,
                      workspace: gDesigner.getWorkspace(),
                    },
                    (e) => {
                      this._postProcessFonts();
                      var t = (e = e || {}).pages,
                        _interopRequireDefault = e.v50error;
                      if (t && Array.isArray(t)) {
                        e.replacedFonts && new GMissingFontsDialog(this, e.replacedFonts).open();
                        var GTools = gDesigner.createScene(true);
                        (GTools._beginBlockChanges([
                          GCore.GNode._Change.BeforeChildRemove,
                          GCore.GNode._Change.AfterChildRemove,
                          GCore.GNode._Change.BeforeChildInsert,
                          GCore.GNode._Change.AfterChildInsert,
                        ]),
                          t.forEach((e) => {
                            GTools.appendChild(e);
                          }),
                          GTools._endBlockChanges([
                            GCore.GNode._Change.BeforeChildRemove,
                            GCore.GNode._Change.AfterChildRemove,
                            GCore.GNode._Change.BeforeChildInsert,
                            GCore.GNode._Change.AfterChildInsert,
                          ]),
                          GTools.setActivePage(t[0]),
                          this._updateStatus(_.Loaded),
                          require.getName() && this.setTitle(require.getName()),
                          this.setScene(GTools),
                          gDesigner.gtmEvent('DOCUMENT_IMPORT_EVENT'));
                      } else if (_interopRequireDefault)
                        (new E(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey('GDocument', 'text.unsupported-sketch-version-50+')
                          )
                        ).open(),
                          this._updateStatus(_.LoadFailed));
                      else {
                        var r = { text: 'string' == typeof e ? e : null };
                        this._updateStatus(_.LoadFailed, r);
                      }
                    }
                  ));
              else if (
                'JPG' === GTools ||
                'JPEG' === GTools ||
                'PNG' === GTools ||
                'HEIC' === GTools
              )
                if (
                  (gDesigner.stats('document_open_'.concat(GTools.toLowerCase())),
                  'HEIC' === GTools)
                ) {
                  const t = new Blob([e]);
                  m.getInstance()
                    .then((e) => e.parse(t))
                    .then((e) => s.GBitmapImport.import(e, l))
                    .catch((e) => console.log('Heic conversion error', e));
                } else s.GBitmapImport.import(e, l);
              else this._updateStatus(_.LoadFailed);
            },
            (e) => {
              (e &&
                (console.log(e),
                new E(
                  GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.error-reading-file'))
                ).open()),
                this._updateStatus(_.LoadFailed));
            },
            module.progress
          );
        }
      }
    }

    async _handleSecondaryFormatRead(e, t) {
      this._updateStatus(_.LoadFailed, t);
    }

    async _handleSecondaryFormatSave(e, t, n) {
      n && n(GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.cannot-save')));
    }

    async store(e, t, n) {
      let _interopRequireDefault =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      const GTools = !_interopRequireDefault.export;
      var r = (e) => {
        (GTools && (this._updateStatus(_.SaveFailed, e), this._updateStatus(_.Ready)), n && n(e));
      };
      if ('lts' === gDesigner.getEnv() && !gDesigner.isEnabledProFeatures()) return r();
      if ((gContainer.verifyEnoughMemoryToSave(this), !this._scene)) return r();
      var s = e || this._storageItem;
      if (!s) throw new Error('Unable to save, no storage item available.');
      var CollaborationMergeUtils = s.getExtension(),
        DataModule_1468 = {
          progress: null,
          filename: _interopRequireDefault.filename,
          ext: CollaborationMergeUtils && CollaborationMergeUtils.toLowerCase(),
          referer: _interopRequireDefault.referer,
        };
      GTools && this._updateStatus(_.Saving, DataModule_1468);
      var p = () => {
          (GTools && (this._updateStatus(_.Saved), this._updateStatus(_.Ready)),
            (CollaborationMergeUtils !== B.ext.toUpperCase() &&
              -1 === U.findIndex((e) => e.ext.toUpperCase() === CollaborationMergeUtils)) ||
            !this._editor
              ? gDesigner.gtmEvent('DOCUMENT_EXPORT_EVENT')
              : (gDesigner.gtmEvent('DOCUMENT_SAVE_EVENT'), GTools && this._editor.markSavePoint()),
            GTools &&
              gDesigner.hasEventListeners(GDocumentEvent) &&
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, this)));
          try {
            CollaborationMergeUtils === B.ext.toUpperCase() && gDesigner.addToRecentFiles(s);
          } finally {
            t && t();
          }
        },
        g = (e) => {
          s.write(e, p, r, DataModule_1468.progress, this);
        };
      const GUserModel = [
          GDocument_389.JPEG.ext.toUpperCase(),
          GDocument_389.JPG.ext.toUpperCase(),
          GDocument_389.PNG.ext.toUpperCase(),
        ],
        m = [GDocument_389.JPEG.ext.toUpperCase(), GDocument_389.JPG.ext.toUpperCase()];
      if (CollaborationMergeUtils === B.ext.toUpperCase()) {
        var y = this._scene,
          GDocumentStatusEvent = 0;
        (y.acceptChildren(function () {
          GDocumentStatusEvent++;
        }),
          DataModule_1468.progress &&
            DataModule_1468.progress instanceof Function &&
            DataModule_1468.progress(10),
          W(function () {
            var e;
            try {
              e = GCore.GNode.serialize(
                y,
                GCore.GUtil.extend({ save: true }, _interopRequireDefault || {})
              );
            } catch (e) {
              return (
                console.error(e),
                void r(GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.cannot-save')))
              );
            }
            null === e || '' === e || e.length < GDocumentStatusEvent
              ? r(GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.cannot-save')))
              : (DataModule_1468.progress &&
                  DataModule_1468.progress instanceof Function &&
                  DataModule_1468.progress(50),
                W(function () {
                  var t = new Uint8Array(f.gzip(e, { level: 9 }).buffer);
                  (DataModule_1468.progress &&
                    DataModule_1468.progress instanceof Function &&
                    DataModule_1468.progress(75),
                    t.byteLength > 20 + GDocumentStatusEvent ? g(t) : r('GZIP compression fail'));
                }));
          }));
      } else if (U && U.find((e) => e.ext.toUpperCase() === CollaborationMergeUtils))
        await this._handleSecondaryFormatSave(DataModule_1468, g, r, _interopRequireDefault);
      else if ('SVG' === CollaborationMergeUtils || 'SVGZ' === CollaborationMergeUtils) {
        const { exportOptions: e = {} } = _interopRequireDefault;
        l.GSVGExport.export(this._scene.getActivePage(), e, (e, t) => {
          if (e || !t) return r();
          if (
            !_interopRequireDefault.suppressMessages &&
            !gDesigner.getSetting('disable_warning_unsupported_features', false)
          ) {
            let e = l.GSVGExport.getUnsupportedFeatures(this._scene.getActivePage());
            e && e.length && new GUnsupportedFeaturesDialog(e).open();
          }
          if ('SVGZ' === CollaborationMergeUtils) g(new Uint8Array(f.gzip(t, { level: 9 }).buffer));
          else if ('function' == typeof TextEncoder) g(new TextEncoder('utf-8').encode(t));
          else {
            var n = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (e, t) {
                return String.fromCharCode('0x' + t);
              }),
              GTools = new Uint8Array(n.length);
            (Array.prototype.forEach.call(n, function (e, t) {
              GTools[t] = e.charCodeAt(0);
            }),
              g(GTools));
          }
        });
      } else if (GUserModel.includes(CollaborationMergeUtils)) {
        var GEvent_storageItem = GCore.GLength.DPI,
          C = this._scene.getActivePage();
        l.GBitmapExport.export(
          C,
          null,
          m.includes(CollaborationMergeUtils) ? GCore.GRGBColor.WHITE : null,
          null,
          GEvent_storageItem,
          1,
          true
        ).toImageBuffer(CollaborationMergeUtils, (e) => g(new Uint8Array(e)));
      } else if ('PDF' === CollaborationMergeUtils) {
        var GMissingFontsDialog = this;
        gDesigner.getUser().then(function (e) {
          var t;
          ((t =
            e && e.getFullUserName()
              ? e.getFullUserName()
              : GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.default-export-author'))),
            l.GPDFExport.export(
              GMissingFontsDialog._scene,
              {
                dpi: _interopRequireDefault.dpi || 72,
                progress: DataModule_1468.progress,
                user: t,
                jpegQuality:
                  _interopRequireDefault.jpegQuality || AppSettings.JPEG_EXPORT_QUALITY_DEFAULT,
                title: GMissingFontsDialog.getTitle(),
              },
              (e, t) => {
                if (e || !t)
                  return r(
                    GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.pdf-export-error'))
                  );
                var n = new FileReader();
                ((n.onload = () => g(new Uint8Array(n.result))),
                  n.readAsArrayBuffer(new Blob([t])));
              },
              null,
              { message: (e) => DataModule_1468.progressInfo && DataModule_1468.progressInfo(e) }
            ));
        });
      } else r();
    }

    initCancelHandler(e) {
      this._activeWindow && this._activeWindow.activateCancelLoading(e);
    }

    placeOrImport(e, t, n, _interopRequireDefault, GTools) {
      var l = (e, _interopRequireDefault) => {
          if (
            (_interopRequireDefault &&
              e instanceof GCore.GBlock &&
              e.setProperty('name', _interopRequireDefault),
            t && e.hasMixin(GCore.GElement.Transform))
          ) {
            var r = e.getGeometryBBox(),
              s = r && r.getX() ? r.getX() : 0,
              l = r && r.getY() ? r.getY() : 0,
              AppSettings = t.center ? -r.getWidth() / 2 : 0,
              CollaborationMergeUtils = t.center ? -r.getHeight() / 2 : 0;
            e.transform(
              new GCore.GTransform(
                1,
                0,
                0,
                1,
                t.x - s + AppSettings,
                t.y - l + CollaborationMergeUtils
              ),
              true
            );
          }
          (GTools && GTools([e])) || this.insertElement(e, !t, true, n);
        },
        AppSettings = (e, t) => {
          s.GBitmapImport.import(e, function (e, n, _interopRequireDefault, GTools) {
            if (e)
              new E(
                GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.image-too-big'))
              ).open();
            else {
              var r = new GCore.GImage();
              (r.setProperties(['iw', 'ih', 'url'], [_interopRequireDefault, GTools, n]), l(r, t));
            }
          });
        };
      const CollaborationMergeUtils = (e, t) => {
        let _interopRequireDefault = t
            ? ''.concat(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GCommonNames', 'text.loading-file')
                ).replace('%name', t),
                '...'
              )
            : GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.opening-your-image')),
          GTools = this._activateProgress(_interopRequireDefault);
        try {
          (this._preProcessFonts(
            GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.keep-fonts-eps'))
          ),
            s.GEPSImport.import(
              e,
              gDesigner.getSetting('eps_outline_fonts', true),
              gDesigner.getWorkspace().getFontManager(),
              (e, _interopRequireDefault, GTools, r) => {
                if (
                  (this._deactivateProgress(),
                  this._postProcessFonts(),
                  !e && _interopRequireDefault)
                ) {
                  ('production' !== gDesigner.getEnv() &&
                    'lts' !== gDesigner.getEnv() &&
                    ((z = 0), console.time('optimization time')),
                    Q(_interopRequireDefault),
                    'production' !== gDesigner.getEnv() &&
                      'lts' !== gDesigner.getEnv() &&
                      (console.timeEnd('optimization time'), console.log('Nodes removed: ' + z)));
                  var s = _interopRequireDefault,
                    l = _interopRequireDefault.getPaintBBox();
                  if (r) {
                    ((s = new GCore.GRectangle()).setBounds(0, 0, l.getWidth(), l.getHeight()),
                      s._blockUpdateChanges());
                    var AppSettings = new GCore.GStylable.FillPaintLayer();
                    for (
                      AppSettings.setProperties(['_pt'], [r]),
                        s.getPaintLayers().appendChild(AppSettings);
                      _interopRequireDefault.getFirstChild();
                    ) {
                      var CollaborationMergeUtils = _interopRequireDefault.getFirstChild();
                      (_interopRequireDefault.removeChild(CollaborationMergeUtils),
                        CollaborationMergeUtils.transform(
                          new GCore.GTransform().translated(-l.getX(), -l.getY())
                        ),
                        s.appendChild(CollaborationMergeUtils));
                    }
                    (s._releaseUpdateChanges(), s._invalidateGeometryForChildUpdate(true));
                  } else s.transform(new GCore.GTransform().translated(-l.getX(), -l.getY()));
                  (s.setProperty(
                    'name',
                    t || GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.image'))
                  ),
                    n || this._editor.beginTransaction());
                  try {
                    (this._scene.appendChild(s),
                      s.acceptChildren(function (e) {
                        e instanceof GCore.GText && e.hasFontsToResolve() && e.toFakeText();
                      }));
                  } finally {
                    n ||
                      this._editor.commitTransaction(
                        GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.import-from-eps'))
                      );
                  }
                } else e && new E(e).open();
              },
              (e) => {
                (this._deactivateProgress(), new E(e).open());
              },
              GTools,
              this.initCancelHandler.bind(this)
            ));
        } catch (e) {
          throw (this._deactivateProgress(), e);
        }
      };
      var DataModule_1468 = (e, t, _interopRequireDefault) => {
          let GTools = t
              ? ''.concat(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GCommonNames', 'text.loading-file')
                  ).replace('%name', t),
                  '...'
                )
              : GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.opening-your-image')),
            r = this._activateProgress(GTools);
          try {
            (this._preProcessFonts(),
              s.GPDFImport.import(
                e,
                { startPage: 1 },
                gDesigner.getWorkspace().getFontManager(),
                (e, GTools) => {
                  if ((this._deactivateProgress(), this._postProcessFonts(), e)) new E(e).open();
                  else if (GTools && GTools.length) {
                    n || this._editor.beginTransaction();
                    try {
                      var r = GTools.shift();
                      ('production' !== gDesigner.getEnv() &&
                        'lts' !== gDesigner.getEnv() &&
                        (console.time('optimization time'), (z = 0)),
                        Q(r),
                        'production' !== gDesigner.getEnv() &&
                          'lts' !== gDesigner.getEnv() &&
                          (console.timeEnd('optimization time'),
                          console.log('Nodes removed: ' + z)));
                      var s = r.getGeometryBBox(),
                        l = new GCore.GRectangle();
                      (l.setProperty(
                        'name',
                        t || GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.image'))
                      ),
                        l.setBounds(s.getX(), s.getY(), s.getWidth(), s.getHeight()),
                        l.beginUpdate(),
                        r.getChildren().forEach((e) => {
                          (r.removeChild(e), l.appendChild(e));
                        }),
                        this._scene.appendChild(l),
                        l.acceptChildren((e) => {
                          e instanceof GCore.GText && e.toFakeText();
                        }),
                        l.endUpdate());
                    } finally {
                      n ||
                        this._editor.commitTransaction(
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              'GDocument',
                              _interopRequireDefault
                                ? 'text.import-from-ai'
                                : 'text.import-from-pdf'
                            )
                          )
                        );
                    }
                  }
                },
                (e) => r(e),
                function (e) {
                  new E(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GDocument', 'text.ai-not-pdf-compatible')
                    ),
                    e
                  ).open();
                }
              ));
          } catch (e) {
            throw (this._deactivateProgress(), e);
          }
        },
        p = (e, t, n) => {
          t = t && t.toUpperCase();
          var _interopRequireDefault = r.GPlatform.maxPngDataSize;
          switch (
            (('JPG' !== t && 'JPEG' !== t) ||
              (GCore.GSystem.operatingSystem !== GCore.GSystem.OperatingSystem.OSX_IOS &&
                (_interopRequireDefault >>= 2)),
            t)
          ) {
            case 'JPG':
            case 'JPEG':
            case 'HEIC':
            case 'GIF':
            case 'PNG':
              if (e.size > _interopRequireDefault)
                return void new E(
                  GCore.GLocale.get(new GCore.GLocaleKey('GDocument', 'text.image-too-big'))
                ).open();
              'HEIC' === t
                ? m
                    .getInstance()
                    .then((t) => t.parse(e))
                    .then((e) => AppSettings(e, n))
                    .catch(() => console.log('HEIC conversion failed'))
                : AppSettings(e, n);
              break;
            case 'SVG':
            case 'SVGZ':
              ((e, t) => {
                s.GSVGImport.import(
                  e,
                  { fontProvider: J },
                  gDesigner.getWorkspace().getFontManager(),
                  (e, n) => {
                    n && l(n, t);
                  }
                );
              })(e, n);
              break;
            case 'PDF':
              DataModule_1468(e, n, false);
              break;
            case 'AI':
              GDocument_389.getFileTypesArray().includes(GDocument_389.AI) &&
                DataModule_1468(e, n, true);
              break;
            case 'EPS':
              CollaborationMergeUtils(e, n);
          }
        };
      if (e instanceof C.Item)
        e.read((t) => {
          var n = e.getExtension(),
            _interopRequireDefault = e.getName();
          p(new Blob([t]), n, _interopRequireDefault);
        });
      else {
        var g = null,
          GUserModel = null;
        if (!_interopRequireDefault && e.name) {
          var f = e.name.lastIndexOf('.');
          f >= 0 && ((g = e.name.substr(f + 1)), (GUserModel = e.name.substr(0, f)));
        }
        if (!g && e.type)
          for (var y = 0; y < K.FileTypes.length; ++y)
            if (K.FileTypes[y].mime === e.type) {
              g = K.FileTypes[y].ext;
              break;
            }
        if (!gDesigner.isEnabledProFeatures()) {
          let e = K.FileTypes.find((e) => e.ext.toUpperCase() === g.toUpperCase());
          if (e && e.pro) return void gDesigner.handlePROFeatureInterruption();
        }
        p(e, g, GUserModel);
      }
    }

    _preProcessFonts(e) {
      if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
        let e = gContainer.getSystemFontsProvider();
        e && GFontsProviderManager.enableProviders([e], true);
      }
      let module = GFontsProviderManager.getInstance();
      module && (e && (module.keepFontsMessage = e), module.setShowMissingFontsDialog(false));
    }

    _postProcessFonts() {
      if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
        let e = gContainer.getSystemFontsProvider();
        e && GFontsProviderManager.disableProviders([e], true);
      }
      let exports = GFontsProviderManager.getInstance();
      exports && exports.setShowMissingFontsDialog(true);
    }

    _activateProgress(e) {
      if (this._activeWindow) {
        let t = this._activeWindow.activateProgress(e, true).find('progress');
        return (e) => t.val(e);
      }
      return (e) => console.info('progress', e);
    }

    _deactivateProgress() {
      this._activeWindow && this._activeWindow.deactivateProgress();
    }

    activate() {
      this._updateState();
    }

    isCollaborativeTextEditing() {
      return false;
    }

    getCollaborativeTextController() {
      return null;
    }

    deactivate() {}

    release() {
      (this._scene && this.setScene(null),
        this.getStorageItem() && this.getStorageItem().release(),
        this.removeAllEventListeners(true));
    }

    publish(e) {
      const module = this._storageItem && this._storageItem.getExtension(),
        require = !!U.find((e) => e.ext.toUpperCase() === module);
      let _interopRequireDefault = false,
        GTools = true;
      return (
        e && ((_interopRequireDefault = e.collabTextUpdate), (GTools = e.sendEmail)),
        this.getId() && AppSettings.gApi.realtime && AppSettings.gApi.realtime.publishFile
          ? AppSettings.gApi.realtime.publishFile(
              this.getId(),
              { sessionId: this.sessionId },
              require,
              _interopRequireDefault,
              GTools
            )
          : Promise.resolve()
      );
    }

    _afterInsertNodeEvent(e) {
      if (e.node instanceof GCore.GGroup && e.node.getFirstChild())
        this._updateDocumentColorsFromGroup(e.node);
      else if (e.node instanceof GCore.GElement && e.node.hasMixin(GCore.GElement.Stylable))
        this._updateDocumentColors(e.node);
      else if (e.node instanceof GCore.GStylable.PaintLayer) {
        if ((this._updateDocumentColorsFromElement(e.node, ['_pt']), this.hasCDR())) {
          var module = e.node.getParent();
          module &&
            (e.node instanceof GCore.GStylable.FillPaintLayer
              ? module.getFillLayers(true).length > 1 &&
                GSystemDialog.showCDRUnsupportedObjectWarning()
              : e.node instanceof GCore.GStylable.BorderPaintLayer &&
                module.getBorderLayers(true).length > 1 &&
                GSystemDialog.showCDRUnsupportedObjectWarning());
        }
      } else
        e.node instanceof GCore.GStylable.Effect &&
          this.hasCDR() &&
          GSystemDialog.showCDRUnsupportedObjectWarning(e.node);
      this._updateSymbolLock(this._scene.getActivePage());
    }

    _beforeRemoveNodeEvent(e) {
      this._updateSymbolLock(e.node, true);
    }

    _afterRemoveNodeEvent(e) {
      (e.node instanceof GCore.GGroup && e.node.getFirstChild()
        ? this._updateDocumentColorsFromGroup(e.node, true)
        : e.node instanceof GCore.GElement && e.node.hasMixin(GCore.GElement.Stylable)
          ? this._updateDocumentColors(e.node, true)
          : e.node instanceof GCore.GStylable.PaintLayer &&
            this._updateDocumentColorsFromElement(e.node, ['_pt'], true),
        e.node instanceof GCore.GText &&
          this._updateDocumentColorsFromElement(e.node, ['content'], true));
    }

    _beforePropertiesChangeEvent(e) {
      e.node instanceof GCore.GSymbol &&
        null === e.values[e.properties.indexOf('masterRef')] &&
        this._updateSymbolLock(e.node, true);
    }

    _afterPropertiesChangeEvent(e) {
      if (!e.temporary) {
        const t = (t) => {
          if (this.hasCDR() && !e.node.hasMixin(GCore.GAnnotation) && e.properties.includes(t)) {
            const n = e.node.getProperty(t);
            n &&
              n !== GCore.GPaintCanvas.BlendMode.Normal &&
              GSystemDialog.showCDRUnsupportedObjectWarning();
          }
        };
        if (
          (e.node instanceof GCore.GStylable.PaintLayer
            ? (this._handlePropertiesChangedForDocumentColorsElement(
                e.node,
                ['_pt'],
                e.properties,
                e.values
              ),
              t('_bl'))
            : (e.node.hasMixin(GCore.GStylable) && t('_sbl'),
              e.node instanceof GCore.GText &&
                this._handlePropertiesChangedForDocumentColorsElement(
                  e.node,
                  ['content'],
                  e.properties,
                  e.values
                )),
          !gDesigner.isEnabledProFeatures())
        ) {
          -1 !== e.properties.indexOf('lkt') &&
            (0, CollaborationMergeUtils.isSymbolInstance)(e.node) &&
            (e.node instanceof GCore.GSymbol
              ? e.node.acceptChildren(
                  (e) => e instanceof GCore.GElement && e.setFlag(GCore.GElement.Flag.FullLocked)
                )
              : e.node.setFlag(GCore.GElement.Flag.FullLocked));
        }
      }
    }

    _afterFlagChangeEvent(e) {
      const module = e.node;
      e.flag === GCore.GNode.Flag.Selected &&
        module instanceof GCore.GCollabText &&
        gDesigner.stats('document_canvas_select-collab-text');
    }

    _licenseChangedEvent() {
      this._updateSymbolLock(this._scene);
    }

    lock() {}

    unlock() {}

    isLocked() {
      return false;
    }

    lockByVersionHistory() {
      this._lockedByVersionHistory = true;
    }

    isLockedByVersionHistory() {
      return this._lockedByVersionHistory;
    }

    _updateState() {
      if (this._scene) {
        if (this._editable)
          this._scene.accept((e) => {
            if (e instanceof GCore.GElement) {
              e.setProperty('plkt', GCore.GBlock.ProgramLck.NoLock);
              const t = e.getProperty('_lkt', true);
              undefined !== t && e.setProperty('lkt', t);
            }
          });
        else if (
          (this._scene.accept((e) => {
            if (e instanceof GCore.GElement) {
              (undefined === e.getProperty('_lkt', true) &&
                e.setProperty('_lkt', e.getProperty('lkt') || null, true),
                e.setProperty('lkt', GCore.GBlock.LockType.Full));
            }
          }),
          this._annotationsEditable)
        ) {
          const e =
            GCore.GBlock.ProgramLck.NoSizeChanges |
            GCore.GBlock.ProgramLck.NoEdit |
            GCore.GBlock.ProgramLck.NoMove |
            GCore.GBlock.ProgramLck.NoOrigChildrenEdit |
            GCore.GBlock.ProgramLck.NoNewChildren |
            GCore.GBlock.ProgramLck.NoDelete |
            GCore.GBlock.ProgramLck.NoDirectVisibilityChange |
            GCore.GBlock.ProgramLck.NoSelect;
          this._scene.iteratePages((t) => {
            (t.acceptChildren((t) => {
              (t instanceof GCore.GElement && t.setProperty('plkt', e),
                t.hasMixin(GCore.GAnnotation) &&
                  (t.setProperty('lkt', null),
                  t.setProperty('plkt', e & ~GCore.GBlock.ProgramLck.NoSelect)));
            }),
              t.setProperty('plkt', e),
              t.setProperty('lkt', null));
          }, true);
        }
        this._updateSymbolLock(this._scene);
      }
    }

    _updateSymbolLock(e, t) {
      if (!this._editable) return;
      const require = !t;
      if ((e = e || this._scene)) {
        const _interopRequireDefault = (t) => {
          e.accept((e) => {
            if ((0, CollaborationMergeUtils.isSymbolInstance)(e)) {
              if (e instanceof GCore.GSymbol && null === e.getProperty('masterRef')) return false;
              !(e instanceof GCore.GSymbol) && e instanceof GCore.GElement && t(e);
            }
          });
        };
        gDesigner.isEnabledProFeatures()
          ? this._lockedSymbolInstances &&
            (_interopRequireDefault((e) =>
              e.setProperty('lkt', e.getProperty('lkt'), require, true)
            ),
            (this._lockedSymbolInstances = false))
          : (_interopRequireDefault((e) => {
              (t
                ? e.hasFlag(GCore.GElement.Flag.FullLocked) &&
                  e.removeFlag(GCore.GElement.Flag.FullLocked)
                : e.setFlag(GCore.GElement.Flag.FullLocked),
                e.setProperty('_pro', require, true));
            }),
            (this._lockedSymbolInstances = true));
      }
    }

    _modifiedEvent(e) {
      gDesigner.hasEventListeners(GDocumentEvent) &&
        gDesigner.trigger(
          new GDocumentEvent(GDocumentEvent.Type.Modified, this, e.data ? e.data : null)
        );
    }

    _dropFileEvent(e) {
      var t = null;
      if (e.file.name) {
        var require = e.file.name.lastIndexOf('.');
        require >= 0 && (t = e.file.name.substr(require + 1));
      }
      if (!t && e.file.type)
        for (
          var _interopRequireDefault = 0;
          _interopRequireDefault < K.FileTypes.length;
          ++_interopRequireDefault
        )
          if (K.FileTypes[_interopRequireDefault].mime === e.file.type) {
            t = K.FileTypes[_interopRequireDefault].ext;
            break;
          }
      (gDesigner.stats('document_drop_file', t),
        this.placeOrImport(e.file, {
          x: e.position.getX(),
          y: e.position.getY(),
        }));
    }

    _updateStatus(e, t) {
      e !== this._status &&
        ((this._status = e),
        this.hasEventListeners(GDocumentStatusEvent) &&
          this.trigger(new GDocumentStatusEvent(e, t)),
        GFontsProviderManager.getInstance().trigger(new GDocumentStatusEvent(e, t)),
        this._status === _.Loaded && this.isCommercialProductFile() && this.openPaywall());
    }

    updateStatus(e, t) {
      this._updateStatus(e, t || {});
    }

    _extractUsedDocumentRef(e) {
      return (e && 0 === e.indexOf('document://') && (e = e.substr('document://'.length)), null);
    }

    _addDocumentColors(e) {
      for (var module = 0; module < e.length; ++module) {
        var require = GCore.GPattern.serialize(e[module]);
        this._documentColors.hasOwnProperty(require)
          ? (this._documentColors[require] += 1)
          : (this._documentColors[require] = 1);
      }
    }

    _clearDocumentColors(e) {
      for (var module = 0; module < e.length; ++module) {
        var require = GCore.GPattern.serialize(e[module]);
        this._documentColors.hasOwnProperty(require) &&
          0 == --this._documentColors[require] &&
          delete this._documentColors[require];
      }
    }

    _updateDocumentColors(e, t) {
      var n = e.getPaintLayers();
      n &&
        GCore.GUtil.each(
          n.getLayers(),
          function (e, n) {
            t
              ? this._updateDocumentColorsFromElement(n, ['_pt'], t)
              : this._updateDocumentColorsFromElement(n, ['_pt']);
          }.bind(this)
        );
    }

    _updateDocumentColorsFromGroup(e, t) {
      for (
        var require = e.getChildren(), _interopRequireDefault = 0;
        _interopRequireDefault < require.length;
        _interopRequireDefault++
      ) {
        var GTools = require[_interopRequireDefault];
        GTools instanceof GCore.GGroup || !GTools.hasMixin(GCore.GElement.Stylable)
          ? this._updateDocumentColorsFromGroup(GTools, t)
          : this._updateDocumentColors(GTools, t);
      }
    }

    _updateDocumentColorsFromElement(e, t, n) {
      for (var _interopRequireDefault = [], GTools = 0; GTools < t.length; ++GTools) {
        var r = e.getProperty(t[GTools]);
        if (r) {
          var s = function (n, GTools, r) {
            if (n instanceof GCore.GColor) _interopRequireDefault.push(n);
            else if (n instanceof GCore.GGradient)
              for (var l = n.getStops(), AppSettings = 0; AppSettings < l.length; ++AppSettings)
                _interopRequireDefault.push(l[AppSettings].color);
            else if ('content' === t[r] && e instanceof GCore.GText && GTools) {
              var CollaborationMergeUtils = e.getTLCore().getRichContent();
              if (CollaborationMergeUtils && CollaborationMergeUtils.length) {
                var DataModule_1468 = e._getGravitValue(
                  'fontColor',
                  CollaborationMergeUtils[0].fontColor
                );
                s(DataModule_1468, false, r);
              }
            }
          };
          s(r, true, GTools);
        }
      }
      _interopRequireDefault.length &&
        (n
          ? this._clearDocumentColors(_interopRequireDefault)
          : this._addDocumentColors(_interopRequireDefault));
    }

    _handlePropertiesChangedForDocumentColorsElement(e, t, n, _interopRequireDefault) {
      for (var GTools = [], r = [], s = [], l = 0; l < t.length; ++l) {
        var AppSettings = n.indexOf(t[l]);
        if (AppSettings >= 0) {
          (GTools.push(AppSettings), r.push(t[l]));
          var CollaborationMergeUtils = function (t, _interopRequireDefault, GTools) {
            if (t instanceof GCore.GColor) s.push(t);
            else if (t instanceof GCore.GGradient)
              for (var r = t.getStops(), l = 0; l < r.length; ++l) s.push(r[l].color);
            else if (
              'content' === n[GTools] &&
              e instanceof GCore.GText &&
              t &&
              _interopRequireDefault
            ) {
              var AppSettings = JSON.parse(t);
              if (AppSettings[0] && AppSettings[0].fontColor) {
                var DataModule_1468 = e._getGravitValue('fontColor', AppSettings[0].fontColor);
                CollaborationMergeUtils(DataModule_1468, false, GTools);
              }
            }
          };
          CollaborationMergeUtils(_interopRequireDefault[AppSettings], true, AppSettings);
        }
      }
      (s.length && this._clearDocumentColors(s),
        r.length && this._updateDocumentColorsFromElement(e, r));
    }

    setSynchronizing(e) {
      e !== this._synchronizing &&
        ((this._synchronizing = e),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.SynchronismUpdated, this)));
    }

    isSynchronizing() {
      return this._synchronizing;
    }

    setErrored(e) {
      e !== this._errored &&
        ((this._errored = !!e),
        gDesigner.hasEventListeners(GDocumentEvent) &&
          gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, this)));
    }

    buildPreview() {
      return new Promise((e) => {
        for (
          var module = null, require = this._scene.getFirstChild();
          null !== require;
          require = require.getNext()
        )
          if (require instanceof GCore.GPage) {
            module = require;
            break;
          }
        if (module) {
          var _interopRequireDefault = module._getBitmapPaintArea(),
            GTools = l.GBitmapExport.convertSizeToScale(
              _interopRequireDefault.getWidth(),
              _interopRequireDefault.getHeight(),
              _interopRequireDefault.getWidth() > _interopRequireDefault.getHeight()
                ? '600w'
                : '600h'
            );
          module
            .toBitmap(GTools.getX(), GTools.getY(), 2, GCore.GRGBColor.WHITE)
            .toImageBlob('image/jpeg', e);
        }
      });
    }

    hasPagesWithInfiniteEmptyCanvas() {
      for (var exports = this._scene.getFirstChild(); null !== exports; exports = exports.getNext())
        if (exports instanceof GCore.GPage && !exports.getGeometryBBox()) return true;
      return false;
    }

    setReservedId(e) {
      this._reservedId = e;
    }

    getReservedId() {
      return this._reservedId;
    }

    getLastDownloadSize() {
      return this._lastDownloadSize;
    }

    setLastDownloadSize(e) {
      this._lastDownloadSize = e;
    }

    static FileTypes = GDocument_389.getFileTypesArray();

    static waitToRendererProcess = W;

  }
  var V = {},
    H = 1;
  function W(e) {
    setTimeout(e, 10);
  };
  var z,
    q = Object.keys(GCore.GShape.GeometryProperties)
      .concat(Object.keys(GCore.GShape.MetaProperties))
      .concat(Object.keys(GCore.GItem.MetaProperties))
      .concat(Object.keys(GCore.GBlock.VisualProperties))
      .concat(Object.keys(GCore.GBlock.MetaProperties))
      .concat(Object.keys(GCore.GElement.Anchor.MetaProperties));
  function Y(e, t) {
    if (e.constructor !== t.constructor) return false;
    if (!(e instanceof GCore.GShape)) return false;
    if (!t.getFirstChild()) return false;
    if (!e.arePropertiesEqual(t, q)) return false;
    var n = t.$ps;
    return (
      (t.$ps = e.getStylePropertySets()),
      GCore.GStylable.prototype.equalsStyle.call(e, t) ? ((t.$ps = n), true) : ((t.$ps = n), false)
    );
  };
  function X(e, t) {
    if (!e.arePropertiesEqual(t, Object.keys(GCore.GPath.GeometryProperties))) return false;
    for (
      var require = Object.keys(GCore.GPathBase.AnchorPoint.GeometryProperties),
        _interopRequireDefault = e.getAnchorPoints(),
        GTools = t.getAnchorPoints(),
        r = _interopRequireDefault.getFirstChild(),
        s = GTools.getFirstChild();
      r && s;
      r = r.getNext(), s = s.getNext()
    )
      if (!r.arePropertiesEqual(s, require)) return false;
    return null === r && null === s;
  };
  function Q(e) {
    e._blockUpdateChanges();
    let module = e.getFirstChild();
    for (; module; ) {
      var require = module.getNext();
      if (require) {
        if (!Y(module, require)) {
          module = require;
          continue;
        }
        if (!(module instanceof GCore.GPath)) {
          module = require;
          continue;
        }
        if (!X(module, require)) {
          module = require;
          continue;
        }
        (e.removeChild(require), module._blockUpdateChanges());
        for (
          var _interopRequireDefault = require.getFirstChild();
          null !== _interopRequireDefault;
          _interopRequireDefault = _interopRequireDefault.getNext()
        )
          (require.removeChild(_interopRequireDefault), module.appendChild(_interopRequireDefault));
        (module._releaseUpdateChanges(), z++);
      } else module = require;
    }
    for (module = e.getFirstChild(); null !== module; module = module.getNext()) Q(module);
    e._releaseUpdateChanges();
  };
  var J = {
    queryFirst: function (e, t) {
      const require = (e, t) => {
        let require,
          _interopRequireDefault,
          GTools,
          GCore,
          r,
          s,
          l,
          AppSettings,
          CollaborationMergeUtils,
          DataModule_1468,
          p,
          g = e.length,
          GUserModel = t.length;
        if (0 === g) return GUserModel;
        if (0 === GUserModel) return g;
        for (
          g > GUserModel && ((require = e), (e = t), (t = require)),
            s = new Int8Array(g + 1),
            _interopRequireDefault = 0;
          _interopRequireDefault <= g;
          _interopRequireDefault++
        )
          s[_interopRequireDefault] = _interopRequireDefault;
        for (
          _interopRequireDefault = 1;
          _interopRequireDefault <= GUserModel;
          _interopRequireDefault++
        ) {
          for (
            GCore = _interopRequireDefault, p = t[_interopRequireDefault - 1], GTools = 1;
            GTools <= g;
            GTools++
          )
            (p === e[GTools - 1]
              ? (r = s[GTools - 1])
              : ((l = GCore + 1),
                (AppSettings = s[GTools] + 1),
                (CollaborationMergeUtils = l - ((l - AppSettings) & ((AppSettings - l) >> 7))),
                (DataModule_1468 = s[GTools - 1] + 1),
                (r =
                  CollaborationMergeUtils -
                  ((CollaborationMergeUtils - DataModule_1468) &
                    ((DataModule_1468 - CollaborationMergeUtils) >> 7)))),
              (s[GTools - 1] = GCore),
              (GCore = r));
          s[g] = GCore;
        }
        return s[g];
      };
      var _interopRequireDefault = 0,
        GTools = [];
      (e.fontName && GTools.push(e.fontName),
        GTools.length
          ? GTools[0] !== e.fontFamily && GTools.push(e.fontFamily)
          : GTools.push(e.fontFamily));
      var GCore = function (r) {
        var s;
        r.faces.length
          ? ((s = (function (t) {
              var _interopRequireDefault = {
                  family: t[0].fonts[0].family || t[0].family,
                  weight: t[0].fonts[0].weight,
                  style: t[0].fonts[0].style,
                },
                GTools =
                  e.fontName ||
                  e.fontFamily ||
                  gDesigner.getWorkspace().getFontManager().getDefaultFont().getFamily(),
                GCore = require(_interopRequireDefault.family, GTools),
                r = 0,
                s = _interopRequireDefault.family;
              for (let e = 0; e < t.length; e++) {
                var l = t[e];
                let _interopRequireDefault;
                if (l.families)
                  for (var AppSettings = 0; AppSettings < l.families.length; AppSettings++)
                    ((_interopRequireDefault = require(l.families[AppSettings], GTools)),
                      _interopRequireDefault < GCore &&
                        ((GCore = _interopRequireDefault), (r = e), (s = l.families[AppSettings])));
                else
                  ((_interopRequireDefault = require(l.family, GTools)),
                    _interopRequireDefault < GCore &&
                      ((GCore = _interopRequireDefault), (r = e), (s = l.family)));
              }
              _interopRequireDefault = null;
              var CollaborationMergeUtils = t[r];
              for (let t = 0; t < CollaborationMergeUtils.fonts.length; t++) {
                var DataModule_1468 = CollaborationMergeUtils.fonts[t];
                if (!DataModule_1468.family || DataModule_1468.family === s) {
                  if (
                    DataModule_1468.style === e.fontStyle &&
                    DataModule_1468.weight === e.fontWeight
                  ) {
                    _interopRequireDefault = {
                      family: DataModule_1468.family || CollaborationMergeUtils.family,
                      weight: DataModule_1468.weight,
                      style: DataModule_1468.style,
                    };
                    break;
                  }
                  _interopRequireDefault ||
                    (_interopRequireDefault = {
                      family: DataModule_1468.family || CollaborationMergeUtils.family,
                      weight: DataModule_1468.weight,
                      style: DataModule_1468.style,
                    });
                }
              }
              return _interopRequireDefault;
            })(r.faces)),
            t(s))
          : _interopRequireDefault < GTools.length - 1
            ? (_interopRequireDefault++,
              setTimeout(() =>
                GFontsProviderManager.getInstance().query(GCore, GTools[_interopRequireDefault])
              ))
            : t(null);
      };
      GFontsProviderManager.getInstance().query(GCore, GTools[_interopRequireDefault]);
    },
  };
  exports.exports = K;
}