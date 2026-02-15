/**
 * Webpack Module #1491
 * Type: class
 * Name: Je
 */

function (exports, module, require) {
    "use strict";
    require(557) /* stub_requires_1102 */;
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(596) /* polyfill_Array_reverse */,
      require(96) /* polyfill_JSON_stringify */,
      require(30) /* polyfill_Object_assign */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(71) /* polyfill_String_includes */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      AppSettings = require(10) /* AppSettings */,
      l = require(357) /* module_357 */,
      DataModule_1492 = _interopRequireDefault(require(1492) /* DataModule_1492 */),
      GPersona = require(1246) /* Exports_GPersona */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      DataModule_1247 = require(1247) /* DataModule_1247 */,
      g = (function (GUserModel, t) {
        if ("function" == typeof WeakMap)
          var require = new WeakMap(),
            _interopRequireDefault = new WeakMap();
        return (function (GUserModel, t) {
          if (!t && GUserModel && GUserModel.__esModule) return GUserModel;
          var GTools,
            GCore,
            GEditor = { __proto__: null, default: GUserModel };
          if (null === GUserModel || ("object" != typeof GUserModel && "function" != typeof GUserModel))
            return GEditor;
          if ((GTools = t ? _interopRequireDefault : require)) {
            if (GTools.has(GUserModel)) return GTools.get(GUserModel);
            GTools.set(GUserModel, GEditor);
          }
          for (const t in GUserModel)
            "default" !== t &&
              {}.hasOwnProperty.call(GUserModel, t) &&
              ((GCore =
                (GTools = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(GUserModel, t)) &&
              (GCore.get || GCore.set)
                ? GTools(GEditor, t, GCore)
                : (GEditor[t] = GUserModel[t]));
          return GEditor;
        })(GUserModel, t);
      })(require(1739) /* AmplitudeSDK */),
      h = (_interopRequireDefault(require(1249) /* DataModule_1249 */), _interopRequireDefault(require(1155) /* module_1155 */)),
      GGoogleDriveItem = _interopRequireDefault(require(556) /* GGoogleDriveItem */),
      ExternalFileSettingsError = _interopRequireDefault(require(734) /* ExternalFileSettingsError */),
      GAnalyticsPageStats = _interopRequireDefault(require(1494) /* GAnalyticsPageStats */),
      DataModule_1496 = _interopRequireDefault(require(1496) /* DataModule_1496 */),
      GBanner = _interopRequireDefault(require(1497) /* GBanner */),
      b = _interopRequireDefault(require(1498) /* module_1498 */);
    var w = require(163) /* GDocument */,
      GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      GMenuOpenEvent = require(804) /* GMenuOpenEvent */,
      GDocumentTabBar = require(1500) /* GDocumentTabBar */,
      A = require(1521) /* module_1521 */,
      GInfo = require(1522) /* GInfo */,
      GOutlineSidebar = require(1260) /* GOutlineSidebar */,
      GInspectorSidebar = require(864) /* GInspectorSidebar */,
      GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
      GPanelTabContainer = require(1539) /* GPanelTabContainer */,
      GSidebarContainer = require(395) /* GSidebarContainer */;
    require(1540) /* GSidebarTouchToolbar */;
    var GToolbar = require(1541) /* GToolbar */,
      WindowEvent = require(603) /* WindowEvent */,
      F = require(863) /* module_863 */,
      GDimensionProperties = require(1294) /* GDimensionProperties */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      GSwatchesChangedEvent = require(1151) /* GSwatchesChangedEvent */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GNewWindowAction = require(1296) /* GNewWindowAction */,
      GInstallToDesktopAction = require(1172) /* GInstallToDesktopAction */,
      GToggleSidebarAction = require(1170) /* GToggleSidebarAction */,
      GOutlineViewAction = require(1297) /* GOutlineViewAction */,
      H = (require(1298) /* GUseCouponAction */, require(255) /* GFontsProviderManager */),
      barrel_editor_actions = require(590) /* barrel_editor_actions */,
      GNewDocumentDialog = require(1544) /* GNewDocumentDialog */,
      GUserNameConfigDialog = require(1560) /* GUserNameConfigDialog */,
      GInstallPwaDialog = require(1562) /* GInstallPwaDialog */,
      GContextMenu = require(1303) /* GContextMenu */;
    require(1563) /* GContextMenuTouch */;
    var GCloudStorage = require(119) /* GCloudStorage */,
      Item = require(220) /* Item */,
      GContainer = require(85) /* GContainer */,
      ee = require(44) /* GSystemDialog */,
      GAutoSaveManager = require(1276) /* GAutoSaveManager */,
      GAmplitudeEventTracker = require(1564) /* GAmplitudeEventTracker */,
      GEvent_oldPersona = require(1250) /* GEvent_oldPersona */,
      GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
      URIListHandler = require(1313) /* URIListHandler */,
      GEmbeddedLogin = require(860) /* GEmbeddedLogin */,
      GEvent_license = require(441) /* GEvent_license */,
      GEvent_user = require(292) /* GEvent_user */,
      GEvent_user_805 = require(805) /* GEvent_user_805 */,
      GEvent_notification = require(1321) /* GEvent_notification */,
      GEvent_document = require(392) /* GEvent_document */,
      GEvent_type_868 = require(868) /* GEvent_type_868 */,
      GShareManager = require(1322) /* GShareManager */,
      GCloudCommunicationManager = require(1568) /* GCloudCommunicationManager */,
      GAppStateManager = require(1569) /* GAppStateManager */,
      me = require(1571) /* module_1571 */,
      GFileReviewFlowManager = require(1165) /* GFileReviewFlowManager */,
      ve = require(1572) /* module_1572 */,
      _e = require(846) /* module_846 */,
      be = require(337) /* stub_requires_1098 */,
      GReminderManager = require(1325) /* GReminderManager */,
      DataModule_785 = require(785) /* DataModule_785 */,
      GOfflineDialog = require(256) /* GOfflineDialog */,
      GProfileDialog = require(604) /* GProfileDialog */,
      DataModule_1326 = require(1326) /* DataModule_1326 */,
      GEvent_paintMode = require(1328) /* GEvent_paintMode */,
      GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
      GEvent_1188 = require(1188) /* GEvent_1188 */,
      GSaveAction = require(447) /* GSaveAction */,
      De = require(86) /* module_86 */,
      Le = (require(18) /* MenuItemBuilder */, require(442) /* DataModule_442 */);
    const {
      defaultLegacyUserSettings: { features: Ie },
    } = AppSettings.defaultUserSettings;
    var AppSettings2 = require(10) /* AppSettings */;
    const { gApi: Oe } = AppSettings2;
    var Item2 = require(388) /* Item */,
      Re = require(1580) /* module_1580 */;
    const DataModule_1581 = require(1581) /* DataModule_1581 */,
      Ne = require(1584) /* module_1584 */;
    var GTouchToolbar = require(1587) /* GTouchToolbar */;
    require(607) /* module_607 */;
    const CollaborationMergeUtils2 = require(40) /* CollaborationMergeUtils */,
      $GUserModel = require(177) /* GUserModel */,
      je = require(1338) /* module_1338 */,
      Ke = require(1173) /* module_1173 */,
      Ve = (require(1591) /* GMSTeamsModeUserNotFoundError */, require(1592) /* GChangePasswordPanel_1592 */),
      He = require(1593) /* module_1593 */,
      We = require(1594) /* module_1594 */;
    var Mousetrap = require(1595) /* Mousetrap */;
    require(1596) /* module_1596 */,
      Mousetrap.addKeycodes({ 173: "-" }),
      Mousetrap.addKeycodes({ 187: "=" }),
      Mousetrap.addKeycodes({ 61: "=" });
    var qe,
      Ye,
      Xe = 0,
      Qe = null;
    function Je() {
      (this._settings = {}),
        (this._settingsLoaded = false),
        (this._swatches = {}),
        (this._workspace = new GTools.GEditorWorkspace()),
        (this._documents = []),
        (this._actions = []),
        (this._actionsMap = {}),
        (this._clipboardMimeTypes = {}),
        (this._license = undefined),
        (this._reloading = false),
        (this._mainMenu = new GMenu()),
        (this._enabledSubscriptions = false),
        (this._documentTouchHandler = new DataModule_1581(document)),
        (this._editorTouchHandler = new Ne()),
        GCloudCommunicationManager.clearSingleton(),
        (this._cloudCommunicationManager = new GCloudCommunicationManager(this)),
        (this._cursorManager = new DataModule_1492.default()),
        document.addEventListener("gesturechange", function (GUserModel) {
          GUserModel.stopPropagation();
        }),
        window.addEventListener(
          "dragover",
          (GUserModel) => {
            GUserModel.preventDefault();
          },
          false
        ),
        window.addEventListener(
          "drop",
          (GUserModel) => {
            GUserModel.preventDefault();
            var t = this.getWindows().getActiveWindow(),
              n = t && t.getView();
            n && n.handleDropEvent(GUserModel);
          },
          false
        ),
        window.addEventListener(
          "wheel",
          (GUserModel) => {
            (GEditor.GPlatform.modifiers.ctrlKey || GEditor.GPlatform.modifiers.metaKey) &&
              GUserModel.preventDefault();
          },
          { passive: false }
        ),
        window.addEventListener("gesturestart", (GUserModel) => {
          GUserModel.preventDefault();
        }),
        window.addEventListener("gestureend", (GUserModel) => {
          GUserModel.preventDefault();
        }),
        window.addEventListener("gesturechange", (GUserModel) => {
          GUserModel.preventDefault();
          var t = GUserModel.scale;
          t > 1 ? (t *= -1) : (t = 2 - t);
          var n = new WheelEvent("wheel", {
              deltaY: t,
              clientX: GUserModel.clientX,
              clientY: GUserModel.clientY,
              ctrlKey: true,
            }),
            _interopRequireDefault = this.getWindows() && this.getWindows().getActiveWindow(),
            GTools = _interopRequireDefault && _interopRequireDefault.getView() && _interopRequireDefault.getView()._htmlElement;
          GTools && GTools.dispatchEvent(n);
        }),
        document.addEventListener(
          "keydown",
          function (GUserModel) {
            if (
              (document.activeElement &&
                $(document.activeElement).is(":button") &&
                (13 == GUserModel.keyCode || 32 == GUserModel.keyCode) &&
                (GUserModel.preventDefault(), document.activeElement.blur()),
              this._windows)
            ) {
              var module = document.activeElement,
                require = this._windows.getActiveWindow(),
                _interopRequireDefault =
                  $(module).is("input") &&
                  "number" === $(module).attr("type") &&
                  !$(module).hasClass("g-disabled") &&
                  "true" !== $(module).attr("disabled");
              !require ||
                !require.getView() ||
                (module && ($(module).is(":editable") || _interopRequireDefault)) ||
                require.getView().focus();
            }
          }.bind(this),
          false
        ),
        document.addEventListener(
          "contextmenu",
          function (GUserModel) {
            return !$(GUserModel.target).is(":editable") ||
              this.propertyPanelHasContextMenu(GUserModel)
              ? (GUserModel.preventDefault(), false)
              : (GUserModel.stopPropagation(), true);
          }.bind(this),
          true
        ),
        this._workspace.addEventListener(
          GCore.GWorkspace.ResolveUrlEvent,
          this._workspaceResolveUrlEvent,
          this
        ),
        this.addEventListener(GDocumentEvent, this._documentEvent, this),
        this.addEventListener(GSettingChangedEvent, this._settingChangedEvent, this),
        this.addEventListener(GEvent_user, this._userLoggedEvent, this),
        this.addEventListener(GEvent_user_805, this._userPropertiesChangedEvent, this),
        this.addEventListener(GEvent_license, this._licenseChangedEvent, this),
        this.addEventListener(
          GEvent_1188.BeforeInstallUpdate,
          this._beforeInstallUpdate,
          this
        ),
        this.addEventListener(GApplicationStatusEvent, this._applicationStatusEvent, this),
        this.addEventListener(GEvent_document, this._applicationStateChangedEvent, this),
        this.addEventListener(GEvent_type_868, this._shareEvent, this),
        (this._settings.theme = "light"),
        (this._settings.snap_disabled = false),
        (this._settings.snap_zones = false),
        (this._settings.snap_guides = [
          GTools.GGuideLinesGuide.ID,
          GTools.GFullPixelsGuide.ID,
          GTools.GPointsGuide.ID,
          GTools.GBBoxGuide.ID,
          GTools.GPageGuide.ID,
          GTools.GGridGuide.ID,
        ]),
        (this._settings.rulers_visible = false),
        (this._settings.guide_lines_visible = true),
        (this._settings.symbol_labels_visible = true),
        (this._settings.grid_visible = true),
        (this._settings.page_labels_visible = true),
        (this._settings.highlight_on_hover = true),
        (this._settings.invert_selection = false),
        (this._settings.auto_expand_layers = true),
        (this._settings.system_fonts_enabled = true),
        (this._settings.symbols_panel_shown = false),
        (this._settings.decimals_num = null),
        (this._settings.enable_steps_debug = false),
        (this._settings.enable_cache = "function" == typeof gdb_loaddesign),
        (this._settings.ui_toolbar_alignment = true),
        (this._settings.eps_outline_fonts = true),
        (this._settings[GAutoSaveManager.AUTO_SAVE_SETTING] = false),
        (this._settings[GAutoSaveManager.AUTO_SAVE_INTERVAL_SETTING] =
          AppSettings.AUTOSAVE_INTERVAL_DEFAULT),
        (this._settings.notifications_disabled = false),
        (this._settings.touch = false),
        (this._settings[GSidebarContainer.getSettingNameForSidebar(GSidebarContainer.Orientation.Left)] = true),
        (this._settings[GSidebarContainer.getSettingNameForSidebar(GSidebarContainer.Orientation.Right)] = true),
        $(document).on("networkAvailable", () => {
          this._initialized && gDesigner.updateRecentDocumentsAction();
        }),
        (this._paste = new URIListHandler());
      const exports = (GUserModel) => {
        this.hasEventListeners(GNetworkAvailabilityChangedEvent) && this.trigger(new GNetworkAvailabilityChangedEvent(GUserModel));
      };
      $(window).on("online", () => exports(true)),
        $(window).on("offline", () => {
          "undefined" != typeof dataLayer &&
            dataLayer.push({ event: "NETWORK_DISCONNECTED_EVENT" }),
            exports(false);
        });
    }
    GCore.GObject.inherit(Je, GCore.GEventTarget),
      (Je.prototype._documentTouchHandler = null),
      (Je.prototype._editorTouchHandler = null),
      (Je.prototype._persona = GPersona.GPersona.GraphicDesign),
      (Je.prototype._paymentFlow = null),
      (Je.prototype._license = undefined),
      (Je.prototype._translationManager = undefined),
      (Je.prototype._initialized = false),
      (Je.prototype._ready = false),
      (Je.prototype._settings = null),
      (Je.prototype._settingsLoaded = false),
      (Je.prototype._softwareUpdateManager = null),
      (Je.prototype._swatches = null),
      (Je.prototype._workspace = null),
      (Je.prototype._CDRIntegrationEngine = null),
      (Je.prototype._documents = null),
      (Je.prototype._activeDocument = null),
      (Je.prototype._mainframe = null),
      (Je.prototype._frame = null),
      (Je.prototype._info = null),
      (Je.prototype._footer = null),
      (Je.prototype._header = null),
      (Je.prototype._toolbar = null),
      (Je.prototype._panels = null),
      (Je.prototype._leftSidebars = null),
      (Je.prototype._rightSidebars = null),
      (Je.prototype._windows = null),
      (Je.prototype._actions = null),
      (Je.prototype._actionsMap = null),
      (Je.prototype._clipboardMimeTypes = null),
      (Je.prototype._newDocumentDialog = null),
      (Je.prototype._userNameConfigDialog = null),
      (Je.prototype._contextMenu = null),
      (Je.prototype._stylesPreview = {}),
      (Je.prototype._version = null),
      (Je.prototype._commitSHA = null),
      (Je.prototype._buildNum = null),
      (Je.prototype._isBeta = null),
      (Je.prototype._storeVendor = null),
      (Je.prototype._env = null),
      (Je.prototype._user = null),
      (Je.prototype._fontsPath = null),
      (Je.prototype._paste = null),
      (Je.prototype._enabledSubscriptions = false),
      (Je.prototype._reloading = false),
      (Je.prototype._utm = null),
      (Je.prototype._location = null),
      (Je.prototype._supportedBrowsers = []),
      (Je.prototype._supportedTabletBrowsers = []),
      (Je.prototype._isBrowserSupported = true),
      (Je.prototype._showCreateAccount = false),
      (Je.prototype._signupOptions = null),
      (Je.prototype._enterpriseLoginForm = false),
      (Je.prototype._anonymous = false),
      (Je.prototype._assistantBar = null),
      (Je.prototype._mainMenu = null),
      (Je.prototype._mouseOverContext = {
        context: null,
        prevEvt: null,
        contextCallback: null,
      }),
      (Je.prototype._realtimeManager = null),
      (Je.prototype._fileReviewManager = null),
      (Je.prototype._shareManager = null),
      (Je.prototype._cloudCommunicationManager = null),
      (Je.prototype._annotationsManager = null),
      (Je.prototype._cursorManager = null),
      (Je.prototype._draggableItemIsDragging = false),
      (Je.prototype._amplitudeHelper = null),
      (Je.prototype._banner = null),
      (Je.prototype._overlay = null),
      (Je.prototype.getOverlay = function () {
        return this._overlay;
      }),
      (Je.prototype.getBanner = function () {
        return this._banner;
      }),
      (Je.prototype.getMainMenu = function () {
        return this._mainMenu;
      }),
      (Je.prototype.propertyPanelHasContextMenu = function (GUserModel) {
        var t = false;
        return (
          GUserModel.composedPath &&
            GUserModel.composedPath() &&
            GUserModel.path.forEach((GUserModel) => {
              $(GUserModel).hasClass("properties-panel") &&
                (t = !!$(GUserModel).data("contextmenu"));
            }),
          t
        );
      }),
      (Je.prototype.getMouseOverContext = function () {
        return this._mouseOverContext;
      }),
      (Je.prototype.setMouseOverContext = function (GUserModel, t, n) {
        this._mouseOverContext = { context: GUserModel, prevEvt: t, contextCallback: n };
      }),
      (Je.prototype._pwaEvent = window.__pwaEvent__ || null),
      (Je.prototype.isAnonymous = function () {
        return this._anonymous;
      }),
      (Je.prototype.toggleLoading = function (GUserModel) {
        GUserModel
          ? $("body").addClass("g-loading")
          : $("body").removeClass("g-loading");
      }),
      (Je.prototype.setSupportedBrowsers = function (GUserModel) {
        this._supportedBrowsers = GUserModel;
      }),
      (Je.prototype.setSupportedTabletBrowsers = function (GUserModel) {
        this._supportedTabletBrowsers = GUserModel;
      }),
      (Je.prototype._initBrowserSupported = function (GUserModel) {
        var t = (t) =>
          t.some((t) =>
            t instanceof Object
              ? GCore.GSystem.operatingSystem == t.operatingSystem &&
                GUserModel == t.platform
              : GUserModel === t
          );
        GCore.GSystem.hardware === GCore.GSystem.Hardware.Tablet
          ? (this._isBrowserSupported = t(this._supportedTabletBrowsers))
          : GCore.GSystem.hardware == GCore.GSystem.Hardware.Desktop
          ? (this._isBrowserSupported = t(this._supportedBrowsers))
          : (this._isBrowserSupported = false);
      }),
      (Je.prototype.isBrowserSupported = function () {
        return (
          gContainer.getRuntime() === GContainer.Runtime.IPad || this._isBrowserSupported
        );
      }),
      (Je.prototype.setUTM = function (GUserModel) {
        this._utm = GUserModel;
      }),
      (Je.prototype.getUTM = function () {
        return this._utm;
      }),
      (Je.prototype.getTranslationManager = function () {
        return this._translationManager;
      }),
      (Je.prototype.activatePersona = function (GUserModel) {
        var t = this._persona;
        t !== GUserModel &&
          ((this._persona = GUserModel),
          this.hasEventListeners(GEvent_oldPersona) && this.trigger(new GEvent_oldPersona(t, this._persona)));
      }),
      (Je.prototype.getActivePersona = function () {
        return this._persona;
      }),
      (Je.prototype.getDefaultStorage = function () {
        return gContainer.getStorage();
      }),
      (Je.prototype.getWorkspace = function () {
        return this._workspace;
      }),
      (Je.prototype.getCDRIntegrationEngine = function () {
        return this._CDRIntegrationEngine;
      }),
      (Je.prototype.getApplicationManager = function () {
        return this._applicationManager;
      }),
      (Je.prototype.getSoftwareUpdateManager = function () {
        return this._softwareUpdateManager;
      }),
      (Je.prototype.getShareManager = function () {
        return this._shareManager;
      }),
      (Je.prototype.getCloudCommunicationManager = function () {
        return this._cloudCommunicationManager;
      }),
      (Je.prototype.getAnnotationsManager = function () {
        return this._annotationsManager;
      }),
      (Je.prototype.getCursorManager = function () {
        return this._cursorManager;
      }),
      (Je.prototype.getRealtimeManager = function () {
        return this._realtimeManager;
      }),
      (Je.prototype.getFileReviewManager = function () {
        return this._fileReviewManager;
      }),
      (Je.prototype.getToolManager = function () {
        return this._workspace.getToolManager();
      }),
      (Je.prototype.getDocuments = function () {
        return this._documents;
      }),
      (Je.prototype.getActiveDocument = function () {
        return this._activeDocument ? this._activeDocument : null;
      }),
      (Je.prototype.getActiveView = function () {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getActiveWindow();
        return module && module.getView();
      }),
      (Je.prototype.getHeader = function () {
        return this._header;
      }),
      (Je.prototype.getInfo = function () {
        return this._info;
      }),
      (Je.prototype.getToolbar = function () {
        return this._toolbar;
      }),
      (Je.prototype.getPanels = function () {
        return this._panels;
      }),
      (Je.prototype.getLeftSidebars = function () {
        return this._leftSidebars;
      }),
      (Je.prototype.getRightSidebars = function () {
        return this._rightSidebars;
      }),
      (Je.prototype.getWindows = function () {
        return this._windows;
      }),
      (Je.prototype.isPartVisible = function (GUserModel) {
        return "none" !== this.getPart(GUserModel).css("display");
      }),
      (Je.prototype.setPartVisible = function (GUserModel, t, n) {
        t != this.isPartVisible(GUserModel) &&
          (this.getPart(GUserModel).css(
            "display",
            t ? (n || "" === n ? n : "block") : "none"
          ),
          this.relayout());
      }),
      (Je.prototype.getPart = function (GUserModel) {
        return this._mainframe.find("#" + GUserModel.id);
      }),
      (Je.prototype.getActions = function () {
        return this._actions;
      }),
      (Je.prototype.getAction = function (GUserModel) {
        return this._actionsMap[GUserModel] || null;
      }),
      (Je.prototype.addMenu = function (GUserModel, t, n, _interopRequireDefault, GTools) {
        GUserModel = GUserModel || this._mainMenu;
        var GCore = new GMenu2(GMenu2.Type.Menu, GMenu);
        return (
          GCore.setCaption(t),
          GCore.setIcon(_interopRequireDefault),
          GUserModel.addItem(GCore),
          n && GCore.getMenu().addEventListener(GMenuOpenEvent, n),
          GTools && GCore.addEventListener(GMenu2.UpdateEvent, () => GTools(GCore)),
          GCore.getMenu()
        );
      }),
      (Je.prototype.addMenuSeparator = function (GUserModel, t) {
        var n = new GMenu2(GMenu2.Type.Divider, null, null, t);
        return GUserModel.addItem(n), n;
      }),
      (Je.prototype.addMenuItem = function (GUserModel, t, n, _interopRequireDefault, GTools, GCore, GEditor, AppSettings, l, DataModule_1492, GPersona) {
        var CollaborationMergeUtils = new GMenu2(GMenu2.Type.Item);
        return (
          GCore && CollaborationMergeUtils.addEventListener(GMenu2.ActivateEvent, GCore),
          GTools &&
            (gDesigner.registerShortcut(
              GTools,
              function (GUserModel) {
                return GCore("shortcut", GUserModel);
              }.bind(this),
              GEditor
            ),
            CollaborationMergeUtils.setShortcutHint(GTools)),
          CollaborationMergeUtils.setIcon(n),
          CollaborationMergeUtils.setPro(AppSettings),
          CollaborationMergeUtils.setNoHover(GPersona),
          DataModule_1492 && CollaborationMergeUtils.addClass(DataModule_1492),
          this.updateMenuItem(CollaborationMergeUtils, t, true, false),
          GUserModel.addItem(CollaborationMergeUtils),
          l && CollaborationMergeUtils.setAction(l),
          CollaborationMergeUtils
        );
      }),
      (Je.prototype.updateMenuItem = function (GUserModel, t, n, _interopRequireDefault, GTools, GCore) {
        GUserModel.setCaption(t), GUserModel.setEnabled(n), GUserModel.setChecked(_interopRequireDefault), GUserModel.setPro(!!GTools, GCore);
      }),
      (Je.prototype.removeMenuItem = function (GUserModel, t) {
        GUserModel.removeItem(GUserModel.indexOf(t));
      }),
      (Je.prototype.getClipboardMimeTypes = function () {
        return this._clipboardMimeTypes
          ? Object.keys(this._clipboardMimeTypes)
          : null;
      }),
      (Je.prototype.getClipboardContent = function (GUserModel) {
        return this._clipboardMimeTypes &&
          this._clipboardMimeTypes.hasOwnProperty(GUserModel)
          ? this._clipboardMimeTypes[GUserModel]
          : null;
      }),
      (Je.prototype.setClipboardContent = function (GUserModel, t) {
        this._clipboardMimeTypes[GUserModel] = t;
      }),
      (Je.prototype.getSetting = function (GUserModel, t) {
        return this._settings.hasOwnProperty(GUserModel) ? this._settings[GUserModel] : t;
      }),
      (Je.prototype.setSetting = function (GUserModel, t) {
        if (this._settingsLoaded) {
          for (
            var require = GUserModel instanceof Array ? GUserModel : [GUserModel],
              _interopRequireDefault = GUserModel instanceof Array ? t : [t],
              GTools = false,
              GEditor = 0;
            GEditor < require.length;
            ++GEditor
          ) {
            (GUserModel = require[GEditor]), (t = _interopRequireDefault[GEditor]);
            if (
              !this._settings.hasOwnProperty(GUserModel) ||
              !GCore.GUtil.equals(this._settings[GUserModel], t, true)
            ) {
              var AppSettings = this._settings[GUserModel];
              (this._settings[GUserModel] = t),
                this.trigger(new GSettingChangedEvent(GUserModel, AppSettings || undefined, t)),
                (GTools = true);
            }
          }
          if (GTools)
            try {
              gContainer.setProperty("designer.settings", this._settings);
            } catch (GUserModel) {}
          return GTools;
        }
      }),
      (Je.prototype.getSwatches = function (GUserModel) {
        if (GUserModel.startsWith("document") && this.getActiveDocument()) {
          var module = this.getActiveDocument().getScene().getSwatches(),
            require = [];
          if (module)
            for (var _interopRequireDefault = module.getFirstChild(); null !== _interopRequireDefault; _interopRequireDefault = _interopRequireDefault.getNext()) {
              var GTools = GCore.GPattern.serialize(_interopRequireDefault.getProperty("_pt"));
              (((GTools.startsWith("C#") || GTools.startsWith("Y#")) &&
                "document" === GUserModel) ||
                (GTools.startsWith("L#") && "document-linear-gradient" === GUserModel) ||
                (GTools.startsWith("R#") && "document-radial-gradient" === GUserModel) ||
                (GTools.startsWith("A#") && "document-angular-gradient" === GUserModel) ||
                (GTools.startsWith("T#") && "document-texture-pattern" === GUserModel) ||
                (GTools.startsWith("N#") && "document-noise-pattern" === GUserModel)) &&
                require.push(_interopRequireDefault);
            }
          return require;
        }
        return this._swatches[GUserModel];
      }),
      (Je.prototype.setSwatches = function (GUserModel, t, n) {
        if (
          (!GUserModel.startsWith("document") || this.getActiveDocument()) &&
          (GUserModel.startsWith("document") || this._swatches.hasOwnProperty(GUserModel))
        ) {
          GUserModel.startsWith("document") || (this._swatches[GUserModel] = t);
          var _interopRequireDefault = GUserModel.startsWith("document"),
            GTools = GUserModel.startsWith("global"),
            GEditor = this.getActiveDocument().getScene();
          if (_interopRequireDefault) {
            if (n) GEditor.getSwatches().clearChildren();
            else {
              for (
                var AppSettings = this.getSwatches(GUserModel),
                  l = [],
                  DataModule_1492 = GEditor.getSwatches().getFirstChild();
                null !== DataModule_1492;
                DataModule_1492 = DataModule_1492.getNext()
              )
                for (var GPersona = 0; GPersona < AppSettings.length; ++GPersona)
                  GCore.GUtil.equals(DataModule_1492, AppSettings[GPersona]) && l.push(DataModule_1492);
              for (GPersona = 0; GPersona < l.length; ++GPersona) GEditor.getSwatches().removeChild(l[GPersona]);
            }
            for (GPersona = 0; GPersona < t.length; ++GPersona) GEditor.getSwatches().appendChild(t[GPersona]);
          } else if (GTools) {
            var CollaborationMergeUtils = this._swatches.global;
            CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = CollaborationMergeUtils.concat(
              this._swatches["global-linear-gradient"]
            )).concat(this._swatches["global-angular-gradient"])).concat(
              this._swatches["global-radial-gradient"]
            )).concat(this._swatches["global-texture-pattern"])).concat(
              this._swatches["global-noise-pattern"]
            );
            var DataModule_1247 = [];
            for (GPersona = 0; GPersona < CollaborationMergeUtils.length; ++GPersona) DataModule_1247.push(GCore.GNode.serialize(CollaborationMergeUtils[GPersona]));
            gContainer.setProperty("swatches", DataModule_1247);
          }
          this.trigger(new GSwatchesChangedEvent(GUserModel));
        }
      }),
      (Je.prototype.getAllSwatches = function (GUserModel) {
        var t = [];
        if (GUserModel.startsWith("document"))
          for (
            var require = this.getActiveDocument()
              .getScene()
              .getSwatches()
              .getFirstChild();
            null !== require;
            require = require.getNext()
          )
            t.push(require);
        else
          t = (t = (t = (t = (t = (t = t.concat(this._swatches.global)).concat(
            this._swatches["global-linear-gradient"]
          )).concat(this._swatches["global-angular-gradient"])).concat(
            this._swatches["global-radial-gradient"]
          )).concat(this._swatches["global-texture-pattern"])).concat(
            this._swatches["global-noise-pattern"]
          );
        return t;
      }),
      (Je.prototype.newInfiniteDocument = function () {
        var GUserModel = this.createScene();
        GUserModel.getActivePage().setProperties(
          ["bck", "w", "h"],
          [GCore.GRGBColor.WHITE, 0, 0]
        );
        var t = new w(GUserModel);
        return this.addDocument(t), t;
      }),
      (Je.prototype.createScene = function (GUserModel) {
        var t = new GCore.GScene(this.getWorkspace(), GUserModel);
        return (
          undefined !== GTools.GEditorOptions.scaleBorderWidth &&
            t.setBorderScale(GTools.GEditorOptions.scaleBorderWidth),
          undefined !== GTools.GEditorOptions.scaleCorners &&
            t.setCornersScale(GTools.GEditorOptions.scaleCorners),
          t
        );
      }),
      (Je.prototype.createNewDocumentDialog = function () {
        this._newDocumentDialog = new GNewDocumentDialog();
      }),
      (Je.prototype.openNewDocumentDialog = function (GUserModel) {
        const module = this.getApplicationManager();
        (module.isCreatingNewDocumentEnabled() || module.isOpenFromCloudEnabled()) &&
          (this._newDocumentDialog || (this._newDocumentDialog = new GNewDocumentDialog()),
          0 === $(".g-new-document-dialog").length
            ? this._newDocumentDialog.open(GUserModel)
            : GUserModel &&
              GUserModel.openFromCloud &&
              this._newDocumentDialog
                .getDialogElement()
                .find(".option.cloud-option")
                .click());
      }),
      (Je.prototype.openCloudSaveDialog = function (GUserModel, t, n, _interopRequireDefault, GTools) {
        0 === $(".g-new-document-dialog").length &&
          (this._newDocumentDialog || (this._newDocumentDialog = new GNewDocumentDialog()),
          this._newDocumentDialog.saveCloudFile(GUserModel, t, n, _interopRequireDefault, GTools));
      }),
      (Je.prototype._shouldOpenUserNameConfigDialog = function () {
        return (
          !(this._user && !this._user.canUpdateSelfAccountData()) &&
          !(
            this._user &&
            this._user.isAnonymous() &&
            !AppSettings.ANONYMOUS_SESSION_ENABLED
          ) &&
          (!this._user || !this._user.getFirstName())
        );
      }),
      (Je.prototype.openUserNameConfigDialog = function () {
        if (!AppSettings.ENABLE_COLLABORATION) return;
        let exports = this._shouldOpenUserNameConfigDialog();
        if (!this._userNameConfigDialog && exports) {
          const GUserModel = this._user || { name: "", last_name: "", anonymous: "" };
          this._userNameConfigDialog = new GUserNameConfigDialog(GUserModel.name, GUserModel.last_name, GUserModel.anonymous);
        }
        exports &&
          0 === $(".g-username-config-dialog").length &&
          this._userNameConfigDialog.open();
      }),
      (Je.prototype.closeNewDocumentDialog = function () {
        this._newDocumentDialog && this._newDocumentDialog.close();
      }),
      (Je.prototype.addDocument = function (GUserModel, t) {
        undefined !== t
          ? this._documents.splice(t, 0, GUserModel)
          : this._documents.push(GUserModel),
          this.hasEventListeners(GDocumentEvent) && this.trigger(new GDocumentEvent(GDocumentEvent.Type.Added, GUserModel)),
          this._windows.addWindow(GUserModel, false, t);
      }),
      (Je.prototype.notifyDocumentModified = function (GUserModel) {
        this.hasEventListeners(GDocumentEvent) &&
          this.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, GUserModel, null));
      }),
      (Je.prototype._isNativeDesign = function (GUserModel) {
        return GUserModel === AppSettings.FILE_FORMATS.find((GUserModel) => GUserModel.default).ext.toUpperCase();
      }),
      (Je.prototype.isInitialized = function () {
        return this._initialized;
      }),
      (Je.prototype._canOpenDocument = function (GUserModel) {
        if (!this._initialized) return false;
        if (!this.isEnabledProFeatures()) {
          let t = w.FileTypes.find(
            (t) =>
              t.ext.toUpperCase() === (GUserModel.getExtension() || "").toUpperCase()
          );
          if (t && t.pro)
            return (
              gDesigner.stats(
                "document_nonprotriespro_".concat(t.ext.toLowerCase())
              ),
              this.handlePROFeatureInterruption(),
              false
            );
        }
        return true;
      }),
      (Je.prototype._processOpenDocument = function (GUserModel, t) {
        const require = GUserModel.getExtension(),
          _interopRequireDefault = this._isNativeDesign(require),
          GTools = new w(_interopRequireDefault ? GUserModel : null);
        if (GTools.isExtensionAvailableForLoading(require))
          return (
            this.addDocument(GTools, t),
            (GTools.fileExtension = require),
            GTools.load(GUserModel),
            this.trigger(new GDocumentEvent(GDocumentEvent.Type.Opened, GTools)),
            GTools
          );
        var GEditor = !!w.FileTypes.find(
          (GUserModel) =>
            GUserModel.ext.toUpperCase() === require.toUpperCase() && "image" === GUserModel.category
        )
          ? "text.suggestion-open-image"
          : "text.unsupported-file-extension";
        return ee.alert(GCore.GLocale.get(new GCore.GLocaleKey("GDocument", GEditor))), null;
      }),
      (Je.prototype.openDocumentWithReload = function (GUserModel, t) {
        if (this._canOpenDocument(GUserModel)) return this._processOpenDocument(GUserModel, t);
      }),
      (Je.prototype.openDocument = function (GUserModel, t) {
        if (!this._canOpenDocument(GUserModel)) return;
        if (GUserModel && (0, DataModule_1247.shouldShowExternalFileError)(GUserModel)) throw new ExternalFileSettingsError.default();
        const require = GUserModel.getExtension();
        if (this._isNativeDesign(require)) {
          const t = GUserModel.getUniqueId();
          if (null != t)
            for (var _interopRequireDefault = 0; _interopRequireDefault < this._documents.length; ++_interopRequireDefault) {
              const n = this._documents[_interopRequireDefault];
              if (
                n.getStorageItem() &&
                n.getStorageItem().getUniqueId() === t &&
                (!n.getStorageItem().getVersionId ||
                  !GUserModel.getVersionId ||
                  n.getStorageItem().getVersionId() === GUserModel.getVersionId())
              )
                return this.activateDocument(n), n;
            }
        }
        return this._processOpenDocument(GUserModel, t);
      }),
      (Je.prototype.addToRecentFiles = function (GUserModel) {
        function module(t, n) {
          let _interopRequireDefault =
            arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          gContainer.getProperty(t).then(function (GTools) {
            _interopRequireDefault && GTools && (GTools = JSON.parse(CollaborationMergeUtils2.base64StringToString(GTools))),
              GTools || (GTools = []);
            for (var GCore = 0; GCore < GTools.length; ++GCore) {
              let t = false;
              if (gContainer.getRuntime() === GContainer.Runtime.Electron)
                t = GTools[GCore] === n(GUserModel);
              else {
                let n = JSON.parse(GTools[GCore]),
                  _interopRequireDefault = GUserModel.getFile();
                t = n.file.id === _interopRequireDefault.id;
              }
              if (t) {
                GTools.splice(GCore, 1);
                break;
              }
            }
            GTools.unshift(n(GUserModel)),
              GTools.splice(10, GTools.length),
              _interopRequireDefault && (GTools = CollaborationMergeUtils2.stringToBase64String(JSON.stringify(GTools))),
              gContainer.setProperty(t, GTools),
              gDesigner.updateRecentDocumentsAction();
          });
        }
        GUserModel &&
          (GUserModel instanceof Item.Item
            ? gDesigner.updateRecentDocumentsAction()
            : gContainer.getRuntime() === GContainer.Runtime.Electron
            ? module("recent_documents", (GUserModel) => GUserModel.getUniqueId())
            : GUserModel instanceof Item2.Item &&
              gDesigner.getUser().then((GUserModel) => {
                module(
                  "recent_external_".concat(GUserModel.getUID()),
                  (GUserModel) => {
                    const module =
                      GUserModel instanceof GGoogleDriveItem.default.Item ? "googledrive" : null;
                    return JSON.stringify({ type: module, file: GUserModel.getFile() });
                  },
                  true
                );
              }));
      }),
      (Je.prototype.activateDocument = function (GUserModel, t) {
        if (GUserModel != this._activeDocument) {
          if (this._activeDocument) {
            var require = this._activeDocument;
            (this._activeDocument = null),
              require.deactivate(),
              this.hasEventListeners(GDocumentEvent) &&
                this.trigger(new GDocumentEvent(GDocumentEvent.Type.Deactivated, require)),
              require.getActiveWindow() === this._windows.getActiveWindow() &&
                this._windows.activateWindow(null);
          }
          GUserModel &&
            ((this._activeDocument = GUserModel),
            t || this._windows.activateWindow(GUserModel.getActiveWindow()),
            GUserModel.activate(),
            this.hasEventListeners(GDocumentEvent) &&
              this.trigger(new GDocumentEvent(GDocumentEvent.Type.Activated, GUserModel)));
        }
      }),
      (Je.prototype.replaceDocument = function (GUserModel, t, n) {
        var _interopRequireDefault = this._documents.indexOf(GUserModel);
        _interopRequireDefault < 0 || (this.addDocument(t, _interopRequireDefault), this.removeDocument(GUserModel, null, n));
      }),
      (Je.prototype.removeDocument = function (GUserModel, t, n) {
        var _interopRequireDefault = this._documents.indexOf(GUserModel);
        if (!(_interopRequireDefault < 0)) {
          var GTools = GUserModel.getWindows();
          if (GTools.length) {
            var GCore = function () {
              GTools.length > 0
                ? this._windows.removeWindow(GTools[0], GCore, n)
                : this.removeDocument(GUserModel, t);
            }.bind(this);
            GCore();
          } else
            GUserModel === this.getActiveDocument() && this.activateDocument(null),
              GUserModel.release(),
              this._documents.splice(_interopRequireDefault, 1),
              t && t(),
              this.hasEventListeners(GDocumentEvent) &&
                this.trigger(new GDocumentEvent(GDocumentEvent.Type.Removed, GUserModel)),
              0 === this._documents.length &&
                this.handleWelcomeScreenOpenWithUserPermissions();
        }
      }),
      (Je.prototype.handleWelcomeScreenOpenWithUserPermissions = function () {
        let exports = {
          closable: this.getApplicationManager().isCreatingNewDocumentEnabled(),
          showCloudOptions: true,
          closeCallback: (GUserModel) => {
            GUserModel && gDesigner.newInfiniteDocument();
          },
        };
        var t;
        this.getLicense().canAccessFreemium()
          ? this.openNewDocumentDialog(exports)
          : (this._newDocumentDialog || (this._newDocumentDialog = new GNewDocumentDialog()),
            null === (t = this._newDocumentDialog) ||
              undefined === t ||
              t._newDocumentCustomSize());
      }),
      (Je.prototype.canExecuteAction = function (GUserModel, t) {
        var n = this.getAction(GUserModel);
        return !!n && n.isAvailable() && n.isEnabled.apply(n, t);
      }),
      (Je.prototype.canActivateTool = function (GUserModel) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
        if (
          !module ||
          !AppSettings.HAS_ANNOTATIONS ||
          this.getRightSidebars().getActiveSidebar() != GAnnotationsSidebar.ID
        )
          return true;
        const require = ["path", "shape", "knife", "insert"],
          _interopRequireDefault = ["special"];
        return !gravit.tools.some((t) => {
          let { tool: GTools, group: GCore, category: GEditor } = t;
          return GTools === GUserModel && (require.includes(GCore) || _interopRequireDefault.includes(GEditor));
        });
      }),
      (Je.prototype.executeAction = function (GUserModel, t, n, _interopRequireDefault) {
        var GTools = this.getAction(GUserModel);
        if (!GTools)
          throw new Error(
            "Unable to execute action '" + GUserModel + "' - not registered."
          );
        var GCore = this._windows.getActiveWindow();
        if (!GCore || !GCore.isPreview()) {
          if (GTools.isAvailable() && GTools.isEnabled.apply(GTools, t)) {
            if (GUserModel === GSaveAction.ID)
              this.getPart(F.Toolbar)
                .find(".toolbar-button[data-action='" + GUserModel + "']")
                .find("button")
                .toggleClass("g-disabled", true);
            var GEditor = GTools.execute;
            if (("shortcut" === n && (GEditor = GTools.executeFromShortcut), !_interopRequireDefault)) {
              var AppSettings = GTools.isPro()
                ? gDesigner.isEnabledProFeatures(GUserModel)
                  ? "execute"
                  : "nonprotriespro"
                : "execute";
              this.stats(
                "action_" + AppSettings + "_" + (n || "button"),
                GTools.statsValue() || GUserModel
              );
            }
            var l = GEditor.apply(GTools, t);
            if (undefined !== l) return l;
          }
          return true;
        }
      }),
      (Je.prototype.setOpenSansDefaultFont = function () {
        var GUserModel = this._workspace.getFontManager();
        GUserModel.setDefaultFont(
          GUserModel.getFont("Open Sans", GCore.GFont.Style.Normal, GCore.GFont.Weight.Regular)
        ),
          GUserModel.setDefaultFontStyles([GCore.GFont.Style.Normal, GCore.GFont.Style.Italic]),
          GUserModel.setDefaultFontWeights([300, 400, 600, 700, 800]);
      }),
      (Je.prototype.isTouchDevice = function () {
        return (
          AppSettings.TOUCH_LAYOUT &&
          ("ontouchstart" in window ||
            !!navigator.msMaxTouchPoints ||
            !!navigator.maxTouchPoints)
        );
      }),
      (Je.prototype.isTouchEnabled = function () {
        return (
          gContainer.getRuntime() === GContainer.Runtime.IPad ||
          (!!AppSettings.TOUCH_LAYOUT &&
            this.isEnabledProFeatures() &&
            !!this.getSetting("touch", false))
        );
      }),
      (Je.prototype.setTouchEnabled = function (GUserModel) {
        this.setSetting("touch", !!GUserModel);
      }),
      (Je.prototype.init = function () {
        (this._shareManager = new GShareManager()),
          (this._realtimeManager = new me()),
          (this._fileReviewManager = new GFileReviewFlowManager()),
          (this._annotationsManager = new ve()),
          gContainer.registerFontProviders(),
          H.getInstance().init();
        var GUserModel = this._workspace.getFontManager();
        if (
          (GUserModel.addEventListener(
            GCore.GFontManager.ResolveFontEvent,
            this._fontManagerResolveFontEvent,
            this
          ),
          GUserModel.addEventListener(
            GCore.GFontManager.QueryFontFamilyEvent,
            this._fontManagerQueryFontFamilyEvent,
            this
          ),
          this.setOpenSansDefaultFont(),
          GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.Chinese ||
            GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.ChineseTaiwan)
        )
          H.getProviderInstance(barrel_editor_actions).hasFont("Noto Sans CS") &&
            (GUserModel.setDefaultFont(
              GUserModel.getFont(
                "Noto Sans CS",
                GCore.GFont.Style.Normal,
                GCore.GFont.Weight.Regular
              )
            ),
            GUserModel.setDefaultFontStyles([GCore.GFont.Style.Normal]),
            GUserModel.setDefaultFontWeights([100, 200, 300, 400, 500, 600, 800]));
        else if (GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.Japanese) {
          H.getProviderInstance(barrel_editor_actions).hasFont("Noto Sans CJK JP") &&
            (GUserModel.setDefaultFont(
              GUserModel.getFont(
                "Noto Sans CJK JP",
                GCore.GFont.Style.Normal,
                GCore.GFont.Weight.Regular
              )
            ),
            GUserModel.setDefaultFontStyles([GCore.GFont.Style.Normal]),
            GUserModel.setDefaultFontWeights([400, 700]));
        }
        (this._CDRIntegrationEngine = Re.createCDRIntegrationEngine()),
          (GTools.GEditorOptions.selectDoubleClickBehavior = "subselect"),
          (GTools.GEditorOptions.coordinatesTooltip = true),
          (GTools.GEditorOptions.bboxPositionTooltip = false),
          (GTools.GEditorOptions.sizeTooltip = false),
          (GTools.GEditorOptions.angleTooltip = false),
          (GTools.GEditorOptions.showTooltips = true),
          (GTools.GEditorOptions.propertiesExcludedFromCopying =
            Le.PropertiesToExcludeFromCopying),
          (GTools.GEditorOptions.adaptiveResizeHandles = true),
          GTools.GSkewHorizontalAnnotation.setIcon(
            "assets/annotation/touch/skew-horizontal-handle.png"
          ),
          GTools.GSkewVerticalAnnotation.setIcon(
            "assets/annotation/touch/skew-vertical-handle.png"
          ),
          GTools.GPreserveAspectRatioAnnotation.setIcon(
            "assets/annotation/touch/preserve-aspect-ratio-handle.png"
          ),
          GTools.GRotateAnnotation.setIcon(
            "assets/annotation/touch/rotate-handle.png"
          ),
          l.DESIGNER.HIGHLIGHT_COLOR &&
            (GCore.GPaintContext.prototype.highlightOutlineColor =
              l.DESIGNER.HIGHLIGHT_COLOR),
          gContainer.getProperty(GDimensionProperties._keepRatioName).then((GUserModel) => {
            (GUserModel = GUserModel || false),
              (GTools.GEditorOptions.preserveAspectRatio = GUserModel),
              (GTools.GEditorOptions.allowTextRatioPreservation = GUserModel);
          }),
          (GCore.GSceneOptions.scaleLabel = false),
          (GCore.GSceneOptions.defaultBorderPositionForLines = true),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadow = 4),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadowOffsetY = 2),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadowBackground =
            "rgba(0,0,0,0.25)"),
          gContainer.getProperty(GOutlineViewAction.StoragePropertyName).then((GUserModel) => {
            GUserModel &&
              this.updateGEditorSceneConfigurationPaintMode(
                GCore.GScenePaintConfiguration.PaintMode.Outline
              );
          }),
          (GTools.GGridGuide.MIN_CELL_SPACE = 5);
        var t = $("body");
        t.attr("data-long-press-delay", AppSettings.LONG_PRESS_TIME_OUT),
          t.on("long-press", (GUserModel) => {
            const t = jQuery.Event("contextmenu", {
              pageX: GUserModel.detail.clientX,
              pageY: GUserModel.detail.clientY,
              clientX: GUserModel.detail.clientX,
              clientY: GUserModel.detail.clientY,
            });
            $(GUserModel.target).trigger(t);
          }),
          (this._mainframe = $("<div></div>")
            .attr("id", "mainframe")
            .css("display", "none")
            .prependTo(t));
        var n = (this._frame = $("<div></div>").appendTo(this._mainframe)),
          _interopRequireDefault = $("<div></div>").attr("id", F.Windows.id).appendTo(n);
        this._windows = new WindowEvent(_interopRequireDefault);
        var DataModule_1492 = $("<div></div>").attr("id", F.Info.id).appendTo(n);
        this._info = new GInfo(DataModule_1492);
        var GPersona = $("<div></div>").attr("id", F.Header.id).appendTo(n);
        this._header = new GDocumentTabBar(GPersona);
        var DataModule_1247 = $("<div></div>").attr("id", F.Toolbar.id).appendTo(n);
        this._toolbar = new GToolbar(DataModule_1247);
        var g = $("<div></div>").attr("id", F.Banner.id).appendTo(n);
        this._banner = new GBanner.default(g);
        var h = $("<div></div>").attr("id", F.Overlay.id).appendTo(n);
        this._overlay = new b.default(h);
        var GGoogleDriveItem = $("<div></div>").attr("id", F.Panels.id).appendTo(n),
          ExternalFileSettingsError = $("<div></div>").attr("id", F.Footer.id).appendTo(n);
        (this._footer = new A(ExternalFileSettingsError)), (this._panels = new GPanelTabContainer(GGoogleDriveItem));
        var GAnalyticsPageStats = $("<div></div>")
          .attr("id", F.LeftSidebars.id)
          .on("mousedown", () => {
            this._toggleSideBarAndAssistBarZIndex(true, false, false, false);
          })
          .appendTo(n);
        this._leftSidebars = new GSidebarContainer(GAnalyticsPageStats, GSidebarContainer.Orientation.Left, n);
        var DataModule_1496 = $("<div></div>")
          .attr("id", F.RightSidebars.id)
          .on("mousedown", () => {
            this._toggleSideBarAndAssistBarZIndex(false, true, false, false);
          })
          .appendTo(n);
        (this._rightSidebars = new GSidebarContainer(DataModule_1496, GSidebarContainer.Orientation.Right, n)),
          this._updateStyles(t),
          this._initBrowserSupported(GEditor.GPlatform.webBrowser),
          this.isBrowserSupported() ||
            ee.showOneTimeDialog(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GSystemDialog",
                  GCore.GSystem.hardware === GCore.GSystem.Hardware.Tablet
                    ? "text.unsupported-browser-touch"
                    : "text.unsupported-browser"
                )
              ).replace("%app", AppSettings2.DESIGNER.TITLE),
              "designer.settings.dont_show_unsupported_browser_dialog"
            );
        let w = (0, CollaborationMergeUtils.debounce)(
          function () {
            this.relayout(),
              setTimeout(() => {
                this._windows.getActiveWindow() &&
                  this._windows
                    .getActiveWindow()
                    .getView()
                    .invalidate(null, true);
              });
          }.bind(this),
          500
        );
        $(window).resize(
          function () {
            w();
          }.bind(this)
        );
        var GMenu = -1;
        this._actions = gravit.actions.map(
          (GUserModel, t) => (GUserModel.getId() === GNewWindowAction.ID && (GMenu = t), GUserModel)
        );
        var GMenu2 = gravit.sidebars.map((GUserModel) => new GToggleSidebarAction(GUserModel));
        if (
          (Array.prototype.splice.apply(this._actions, [GMenu, 0].concat(GMenu2)),
          this._createMainMenu(),
          gravit.tools)
        ) {
          for (
            var GMenuOpenEvent = (GUserModel) => {
                let { tool: t, pro: n = false, feature: _interopRequireDefault } = GUserModel;
                return () =>
                  !(!this.isEnabledProFeatures(_interopRequireDefault) && n) &&
                  !!this.canActivateTool(t, true) &&
                  (gDesigner.stats(
                    "tools_activate_shortcut",
                    GToolbar.getToolName(t) || "unknown_tool"
                  ),
                  this.getToolManager().tempToolKeyActivate(t));
              },
              GSettingChangedEvent = (GUserModel) => {
                let { tool: t, pro: n = false, feature: _interopRequireDefault } = GUserModel;
                return () =>
                  !this.isEnabledProFeatures(_interopRequireDefault) && n
                    ? (this.handlePROFeatureInterruption(), false)
                    : this.getToolManager().tempToolKeyRelease(t, 450);
              },
              GSwatchesChangedEvent = 0;
            GSwatchesChangedEvent < gravit.tools.length;
            ++GSwatchesChangedEvent
          ) {
            var GDocumentEvent = gravit.tools[GSwatchesChangedEvent];
            if (GDocumentEvent.key || GDocumentEvent.shortcuts) {
              var GInstallToDesktopAction = GMenuOpenEvent(GDocumentEvent),
                GNewDocumentDialog = GSettingChangedEvent(GDocumentEvent);
              GDocumentEvent.key && this.registerShortcut([GDocumentEvent.key], GInstallToDesktopAction, false, GNewDocumentDialog),
                Array.isArray(GDocumentEvent.shortcuts) &&
                  GDocumentEvent.shortcuts.forEach((GUserModel) => {
                    this.registerShortcut(GUserModel, GInstallToDesktopAction, false, GNewDocumentDialog);
                  });
            }
          }
          this.getToolManager().activateTool(gravit.tools[0].tool);
          var GUserNameConfigDialog = function () {
            var GUserModel = this.getToolManager();
            return (
              this.getRightSidebars().getActiveSidebar() == GAnnotationsSidebar.ID ||
                ((GUserModel.getActiveTool() &&
                  GUserModel.getActiveTool() instanceof GTools.GSelectTool) ||
                  GUserModel.activateTool(GTools.GPointerTool),
                GUserModel.getActiveTool() instanceof GTools.GSelectTool &&
                  GUserModel.getActiveTool().getEditMode() !==
                    GTools.GSelectTool.EditMode.Transform &&
                  GUserModel
                    .getActiveTool()
                    .setEditMode(GTools.GSelectTool.EditMode.Transform)),
              true
            );
          }.bind(this);
          this.registerShortcut(["Q"], GUserNameConfigDialog);
        }
        this._info.init(),
          this._header.init(),
          this._toolbar.init(),
          this._panels.init(),
          this._footer.init(),
          this._leftSidebars.init(),
          this._rightSidebars.init(),
          this._windows.init(),
          this._banner.init(),
          this._overlay.init(),
          this._leftSidebars.setActiveSidebar(GOutlineSidebar.ID),
          this._rightSidebars.setActiveSidebar(GInspectorSidebar.ID),
          this.setPartVisible(F.Panels, false),
          this.setPartVisible(F.Info, false),
          this._mainframe.css("display", ""),
          GCore.GColor.setCMYKProfile("USWebCoatedSWOPv2", "assets/data/icc/"),
          (this._initialized = true),
          this._windows.addEventListener(
            WindowEvent.WindowEvent,
            this._windowEvent,
            this
          ),
          this._leftSidebars.addEventListener(
            GSidebarContainer.SidebarEvent,
            this._sidebarEvent,
            this
          ),
          this._rightSidebars.addEventListener(
            GSidebarContainer.SidebarEvent,
            this._sidebarEvent,
            this
          ),
          (this._contextMenu = new GContextMenu(_interopRequireDefault)),
          this.updateLicenseInfo(),
          this._updateTitle({ saveToSessionHistory: false }),
          AppSettings.AUTO_SAVE_ENABLED && (this._autoSaveManager = GAutoSaveManager.getInstance()),
          this.getCursorManager().init(),
          this._updateLayout(),
          this._initAmplitudeProperties(),
          this._updateState();
      }),
      (Je.prototype._updateStyles = function (GUserModel) {
        switch (GEditor.GPlatform.webBrowser) {
          case GEditor.GPlatform.constructor.WebBrowser.Edge:
            GUserModel.addClass("g-edge");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Opera:
            GUserModel.addClass("g-opera");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Chrome:
            GUserModel.addClass("g-chrome");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Firefox:
            GUserModel.addClass("g-firefox");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Safari:
            GUserModel.addClass("g-safari");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.MSIE:
            GUserModel.addClass("g-msie");
        }
        switch (GCore.GSystem.hardware) {
          case GCore.GSystem.Hardware.Desktop:
            GUserModel.addClass("g-desktop");
            break;
          case GCore.GSystem.Hardware.Tablet:
            GUserModel.addClass("g-tablet");
            break;
          case GCore.GSystem.Hardware.Phone:
            GUserModel.addClass("g-phone");
        }
        switch (GCore.GSystem.operatingSystem) {
          case GCore.GSystem.OperatingSystem.Unix:
            GUserModel.addClass("g-os-unix");
            break;
          case GCore.GSystem.OperatingSystem.Windows:
            GUserModel.addClass("g-os-windows");
            break;
          case GCore.GSystem.OperatingSystem.OSX_IOS:
            GUserModel.addClass("g-os-osx_ios");
        }
        gContainer.getRuntime() === GContainer.Runtime.IPad && GUserModel.addClass("g-ipad");
      }),
      (Je.prototype.getContextMenu = function () {
        return this._contextMenu;
      }),
      (Je.prototype.getAutoSaveManager = function () {
        if (this._autoSaveManager) return this._autoSaveManager;
      }),
      (Je.prototype.isActiveDocument = function (GUserModel) {
        const module = this.getActiveDocument();
        return (
          !!module &&
          !!(GUserModel && GUserModel instanceof w) &&
          (module === GUserModel || !(!module.getId() || module.getId() !== GUserModel.getId()))
        );
      }),
      (Je.prototype._setActiveAssistantBar = function (GUserModel) {
        if (GUserModel) {
          if (!this._assistantBar) {
            const GUserModel = $("<div/>")
              .attr("id", F.AssistantBar.id)
              .on("mousedown", () => {
                this._toggleSideBarAndAssistBarZIndex(false, false, true, false);
              })
              .appendTo(this._frame);
            this._assistantBar = new GTouchToolbar(GUserModel);
          }
          this._assistantBar.activate();
        } else this._assistantBar && this._assistantBar.deactivate();
      }),
      (Je.prototype._toggleSideBarAndAssistBarZIndex = function (GUserModel, t, n, _interopRequireDefault) {
        gDesigner.isTouchEnabled() &&
          (this._leftSidebars.getHtmlElement().toggleClass("bring-to-front", GUserModel),
          this._rightSidebars.getHtmlElement().toggleClass("bring-to-front", t),
          this._assistantBar.getHtmlElement().toggleClass("bring-to-front", n),
          undefined !== _interopRequireDefault &&
            $(".g-notification-panel").toggleClass("bring-to-front", _interopRequireDefault));
      }),
      (Je.prototype.sendSideBarAndAssistBarToBack = function () {
        this._toggleSideBarAndAssistBarZIndex(false, false, false);
      }),
      (Je.prototype.start = function () {
        return Promise.all([
          gContainer
            .getProperty("designer.settings")
            .then((GUserModel) => {
              for (var module in ((GUserModel = GUserModel || {}), this._settings))
                GUserModel.hasOwnProperty(module) || (GUserModel[module] = this._settings[module]);
              for (var require in ((this._settings = GUserModel),
              (this._settingsLoaded = true),
              this._settings))
                this.trigger(new GSettingChangedEvent(require, undefined, this._settings[require], true));
            })
            .catch((GUserModel) => Promise.reject(GUserModel)),
          gContainer
            .getProperty("swatches")
            .then((GUserModel) => {
              if (
                ((this._swatches.global = []),
                (this._swatches["global-linear-gradient"] = []),
                (this._swatches["global-radial-gradient"] = []),
                (this._swatches["global-angular-gradient"] = []),
                (this._swatches["global-texture-pattern"] = []),
                (this._swatches["global-noise-pattern"] = []),
                GUserModel)
              )
                for (var module = 0; module < GUserModel.length; ++module) {
                  var require =
                      GCore.GNode.deserialize(GUserModel[module]) || GCore.GPattern.deserialize(GUserModel[module]),
                    _interopRequireDefault = require instanceof GCore.GSwatch ? require : new GCore.GSwatch(require);
                  this._addGlobalSwatch(_interopRequireDefault);
                }
              this.trigger(new GSwatchesChangedEvent("global"));
            })
            .catch((GUserModel) => Promise.reject(GUserModel)),
        ]);
      }),
      (Je.prototype._addGlobalSwatch = function (GUserModel) {
        var t = GCore.GPattern.serialize(GUserModel.getProperty("_pt"));
        t.startsWith("C#") || t.startsWith("Y#")
          ? this._swatches.global.push(GUserModel)
          : t.startsWith("L#")
          ? this._swatches["global-linear-gradient"].push(GUserModel)
          : t.startsWith("R#")
          ? this._swatches["global-radial-gradient"].push(GUserModel)
          : t.startsWith("A#")
          ? this._swatches["global-angular-gradient"].push(GUserModel)
          : t.startsWith("T#")
          ? this._swatches["global-texture-pattern"].push(GUserModel)
          : t.startsWith("N#") &&
            this._swatches["global-noise-pattern"].push(GUserModel);
      }),
      (Je.prototype.updateRecentDocumentsAction = function () {
        let exports = [];
        const module = gContainer.getProperty("recent_documents"),
          require = gDesigner.getUser();
        Promise.all([module, require])
          .then((GUserModel) => {
            let [module, require] = GUserModel;
            return require
              ? Promise.all([
                  module,
                  require,
                  gContainer.getProperty("recent_external_".concat(require.getUID())),
                ])
              : Promise.reject();
          })
          .then((t) => {
            let [require, _interopRequireDefault, GTools] = t;
            var GCore, GEditor;
            if (require)
              for (GCore = 0, GEditor = require.length; GCore < GEditor; ++GCore) {
                let t = gContainer.getStorage(),
                  _interopRequireDefault = new t.constructor.Item(t, require[GCore]);
                exports.push(_interopRequireDefault);
              }
            if (GTools)
              for (
                GTools = JSON.parse(CollaborationMergeUtils2.base64StringToString(GTools)), GCore = 0, GEditor = GTools.length;
                GCore < GEditor;
                ++GCore
              ) {
                let t,
                  n = gContainer.getStorage(),
                  _interopRequireDefault = JSON.parse(GTools[GCore]);
                "googledrive" === _interopRequireDefault.type &&
                  (_interopRequireDefault.file.hasOwnProperty("version") && delete _interopRequireDefault.file.version,
                  (t = new GGoogleDriveItem.default.Item(n, _interopRequireDefault.file))),
                  t && exports.push(t);
              }
            var AppSettings = function () {
              gContainer.updateRecentDocumentsAction(exports);
            };
            GCloudStorage.getRecentStorageItems()
              .then(async function (t) {
                if (t.length > 0)
                  for (var require = 0; require < t.length; ++require)
                    exports.push(await Item.from(gDesigner.getDefaultStorage(), t[require]));
              })
              .then(AppSettings)
              .catch(AppSettings);
          });
      }),
      (Je.prototype.removeExternalRecentFiles = function (GUserModel, t) {
        gDesigner
          .getUser()
          .then((GUserModel) =>
            GUserModel
              ? Promise.all([
                  GUserModel,
                  gContainer.getProperty("recent_external_".concat(GUserModel.getUID())),
                ])
              : Promise.reject()
          )
          .then((n) => {
            let [_interopRequireDefault, GTools] = n,
              GCore = GTools ? JSON.parse(CollaborationMergeUtils2.base64StringToString(GTools)) : [];
            GCore instanceof Array || (GCore = new Array());
            const GEditor = [];
            for (let n = 0, _interopRequireDefault = GCore.length; n < _interopRequireDefault; n++) {
              let _interopRequireDefault = JSON.parse(GCore[n]);
              _interopRequireDefault &&
                (_interopRequireDefault.type !== GUserModel ||
                  (_interopRequireDefault.file && _interopRequireDefault.file.settings && !_interopRequireDefault.file.settings.accountId) ||
                  (_interopRequireDefault.file &&
                    _interopRequireDefault.file.settings &&
                    _interopRequireDefault.file.settings.accountId !== t)) &&
                GEditor.push(JSON.stringify(_interopRequireDefault));
            }
            GCore.length > 0
              ? gContainer.setProperty(
                  "recent_external_".concat(_interopRequireDefault.getUID()),
                  CollaborationMergeUtils2.stringToBase64String(JSON.stringify(GEditor))
                )
              : gContainer.removeProperty(
                  "recent_external_".concat(_interopRequireDefault.getUID())
                ),
              gDesigner.updateRecentDocumentsAction();
          });
      }),
      (Je.prototype.relayout = function () {
        if (!this._initialized) return;
        var GUserModel,
          t,
          n = 0,
          _interopRequireDefault = 0;
        (GUserModel = this._getTopOffset(n, _interopRequireDefault)),
          (n = this._getLeftOffset(GUserModel)),
          (_interopRequireDefault = this._getRightOffset(GUserModel)),
          (t = this._getBottomOffset(n, _interopRequireDefault));
        const GTools = this.isTouchEnabled();
        this._header.relayout(),
          this._toolbar.relayout(),
          this._panels.relayout(),
          this._footer.relayout(),
          this._leftSidebars.relayout(),
          this._rightSidebars.relayout(),
          this._windows.relayout([GTools ? 0 : n, GUserModel, GTools ? 0 : _interopRequireDefault, t]);
      }),
      (Je.prototype.updateCollabTextPreviews = async function () {
        var GUserModel,
          t = this.getActiveDocument();
        t &&
          ((GUserModel = t.getEditor()) && GUserModel.closeInlineEditor(),
          await this._CDRIntegrationEngine.processCollabText(t));
      }),
      (Je.prototype._getTopOffset = function (GUserModel, t) {
        var n = 0,
          _interopRequireDefault = this.getPart(F.Info);
        n += this.isPartVisible(F.Info) ? _interopRequireDefault.outerHeight() : 0;
        var GTools = this.getPart(F.Header);
        GTools.css("top", n.toString() + "px"),
          (n += this.isPartVisible(F.Header) ? GTools.outerHeight() : 0);
        this.getPart(F.Overlay).css("top", n.toString() + "px");
        var GCore = this.getPart(F.Toolbar);
        GCore.css("left", GUserModel.toString() + "px"),
          GCore.css("top", n.toString() + "px"),
          GCore.css("right", t.toString() + "px"),
          (n += this.isPartVisible(F.Toolbar) ? GCore.outerHeight() : 0);
        const GEditor = this.getPart(F.Banner);
        return (
          GEditor.css("top", n.toString() + "px"),
          (n += this.isPartVisible(F.Banner) ? GEditor.outerHeight() : 0)
        );
      }),
      (Je.prototype._getLeftOffset = function (GUserModel) {
        var t = 0,
          n = this._leftSidebars.getSidebar(
            this._leftSidebars.getActiveSidebar()
          ),
          _interopRequireDefault = n ? n.getMinimumWidth() : 0,
          GTools = this.getPart(F.LeftSidebars),
          GCore = this.isPartVisible(F.LeftSidebars);
        return (
          GTools.outerWidth() < _interopRequireDefault && GCore && GTools.outerWidth(_interopRequireDefault),
          GTools.css("top", GUserModel.toString() + "px"),
          GTools.height(this._mainframe.height() - GUserModel),
          (t += GCore ? GTools.outerWidth() : 0)
        );
      }),
      (Je.prototype._getRightOffset = function (GUserModel) {
        var t = 0,
          n = this._rightSidebars.getSidebar(
            this._rightSidebars.getActiveSidebar()
          ),
          _interopRequireDefault = n ? n.getMinimumWidth() : 0,
          GTools = this.getPart(F.RightSidebars),
          GCore = this.isPartVisible(F.RightSidebars);
        return (
          GTools.outerWidth() < _interopRequireDefault && GCore && GTools.outerWidth(_interopRequireDefault),
          GTools.css("top", GUserModel.toString() + "px"),
          GTools.height(this._mainframe.height() - GUserModel),
          (t += GCore ? GTools.outerWidth() : 0)
        );
      }),
      (Je.prototype._getBottomOffset = function (GUserModel, t) {
        var n = 0,
          _interopRequireDefault = this.getPart(F.Panels);
        _interopRequireDefault.css("left", GUserModel.toString() + "px"),
          _interopRequireDefault.css("width", (this._mainframe.width() - GUserModel - t).toString() + "px");
        var GTools = this.getPart(F.Footer);
        return (
          GTools.css("left", GUserModel.toString() + "px"),
          GTools.css("width", (this._mainframe.width() - GUserModel - t).toString() + "px"),
          (n += this.isPartVisible(F.Panels) ? _interopRequireDefault.outerHeight() : 0),
          (n += this.isPartVisible(F.Footer) ? GTools.outerHeight() : 0)
        );
      }),
      (Je.prototype.positionIsOnCanvas = function (GUserModel, t) {
        var n,
          _interopRequireDefault,
          GTools = 0,
          GCore = 0;
        return (
          (n = this._getTopOffset(GTools, GCore)),
          (GTools = this._getLeftOffset(n)),
          (GCore = this._getRightOffset(n)),
          (_interopRequireDefault = this._getBottomOffset(GTools, GCore)),
          GUserModel > GTools &&
            GUserModel < window.innerWidth - GCore &&
            t > n &&
            t < window.innerHeight - _interopRequireDefault
        );
      }),
      (Je.prototype.updateGEditorSceneConfigurationPaintMode = function (GUserModel) {
        [
          GCore.GScenePaintConfiguration.PaintMode.Full,
          GCore.GScenePaintConfiguration.PaintMode.Outline,
          GCore.GScenePaintConfiguration.PaintMode.Fast,
        ].indexOf(GUserModel) < 0 ||
          (GTools.GEditorPaintConfiguration.prototype.paintMode = GUserModel);
      }),
      (Je.prototype.registerShortcut = function (GUserModel, t, n, _interopRequireDefault) {
        var AppSettings = function (GUserModel, t) {
            return (n) => {
              var _interopRequireDefault,
                GEditor,
                AppSettings = this.getActiveDocument();
              if (AppSettings && (_interopRequireDefault = AppSettings.getEditor()) && _interopRequireDefault.isInlineEditing()) {
                var l = _interopRequireDefault.getCurrentInlineEditorNode();
                GTools.GElementEditor &&
                  l instanceof GCore.GText &&
                  (GEditor = GTools.GElementEditor.getEditor(l));
              }
              if (!((t && GEditor && GEditor.handleKeyDown(n) && (t || GEditor)) || true !== GUserModel(n)))
                return n.preventDefault(), n.stopPropagation(), false;
            };
          }.bind(this),
          l = n ? Mousetrap.bindGlobal : Mousetrap.bind;
        2 === GUserModel.length && GUserModel[0] === GEditor.GKey.Constant.META && "+" === GUserModel[1]
          ? (l(this._shortcutToMouseTrapShortcut(GUserModel), AppSettings(t, true)),
            l("mod+=", AppSettings(t, true), "keydown"),
            _interopRequireDefault && l("mod+=", AppSettings(_interopRequireDefault, false), "keyup"))
          : (l(this._shortcutToMouseTrapShortcut(GUserModel), AppSettings(t, true), "keydown"),
            _interopRequireDefault && l(this._shortcutToMouseTrapShortcut(GUserModel), AppSettings(_interopRequireDefault, false), "keyup"));
      }),
      (Je.prototype._createMainMenu = function () {
        for (
          var exports = [],
            module = { items: [] },
            require = function (t) {
              for (var require = 0; require < exports.length; ++require)
                if (exports[require].item === t) return exports[require].group;
            },
            _interopRequireDefault = function (t, _interopRequireDefault, GTools) {
              if (t.items.length > 0) {
                var GCore = t.items[t.items.length - 1];
                if (require(GCore) !== GTools) {
                  var GEditor = { type: "divider" };
                  if ("item" === GCore.type && GCore.action) {
                    var AppSettings = (function (t) {
                      for (var _interopRequireDefault = require(t), GTools = [], GCore = 0; GCore < exports.length; ++GCore)
                        exports[GCore].group === _interopRequireDefault && GTools.push(t);
                      return GTools;
                    })(GCore);
                    GEditor.isVisible = function () {
                      return AppSettings.some((GUserModel) => GUserModel.action.isVisible());
                    };
                  }
                  t.items.push(GEditor);
                }
              }
              exports.push({ item: _interopRequireDefault, group: GTools });
            },
            GTools = 0;
          GTools < this._actions.length;
          ++GTools
        ) {
          var GEditor = this._actions[GTools];
          if (((this._actionsMap[GEditor.getId()] = GEditor), !GEditor.isAvailable())) continue;
          let GUserModel = GEditor.getCategory();
          for (var AppSettings = [GUserModel]; (GUserModel = GUserModel.parent); ) AppSettings.push(GUserModel);
          AppSettings.reverse();
          var l = GEditor.getGroup(),
            DataModule_1492 = GEditor.getGroupIcon(),
            GPersona = (GEditor.getStyleClass(), l ? [""].concat(l.split("/")) : null);
          if (GPersona && AppSettings && AppSettings.length !== GPersona.length - 1)
            throw new Error(
              "The number of categories is different than the number of groups."
            );
          var CollaborationMergeUtils = module;
          if (AppSettings)
            for (var DataModule_1247 = 0; DataModule_1247 < AppSettings.length; ++DataModule_1247) {
              let GUserModel = AppSettings[DataModule_1247],
                t = GPersona ? GPersona[DataModule_1247] : null;
              for (
                var g = null, h = GUserModel.label.split("/")[DataModule_1247], GGoogleDriveItem = 0;
                GGoogleDriveItem < CollaborationMergeUtils.items.length;
                ++GGoogleDriveItem
              )
                h == CollaborationMergeUtils.items[GGoogleDriveItem].caption && (g = CollaborationMergeUtils.items[GGoogleDriveItem]);
              g ||
                (_interopRequireDefault(
                  CollaborationMergeUtils,
                  (g = {
                    type: "menu",
                    caption: h,
                    items: [],
                    icon: DataModule_1492,
                    category: GUserModel,
                  }),
                  t
                ),
                CollaborationMergeUtils.items.push(g)),
                (CollaborationMergeUtils = g);
            }
          var ExternalFileSettingsError = { type: "item", action: GEditor };
          _interopRequireDefault(CollaborationMergeUtils, ExternalFileSettingsError, GPersona ? GPersona[GPersona.length - 1] : null), CollaborationMergeUtils.items.push(ExternalFileSettingsError);
        }
        var GAnalyticsPageStats = function (GUserModel, t) {
            "menu" === GUserModel.type
              ? (GUserModel.menu = DataModule_1496(GUserModel, t))
              : "divider" === GUserModel.type
              ? (GUserModel.separator = this.addMenuSeparator(t, GUserModel.isVisible))
              : "item" === GUserModel.type &&
                ((GUserModel.item = this.addMenuItem(
                  t,
                  GCore.GLocale.get(GUserModel.action.getTitle()),
                  GUserModel.action.getIcon(),
                  GUserModel.action.isCheckable(),
                  GUserModel.action.getShortcut(),
                  function (t, n) {
                    if ("shortcut" === t)
                      return this._executeShortcutAction(GUserModel.action, n);
                  }.bind(this),
                  GUserModel.action.isShortcutGlobal(),
                  GUserModel.action.isPro(),
                  GUserModel.action,
                  GUserModel.action._sidebar
                    ? GUserModel.action.getStyleClass() + " hidepanel"
                    : GUserModel.action.getStyleClass(),
                  GUserModel.action.noHover()
                )),
                this.registerAdditionalShortcuts(GUserModel.action));
          }.bind(this),
          DataModule_1496 = function (GUserModel, t) {
            const require = GUserModel.category
              ? (t) => {
                  t.setVisible(GUserModel.category.visible), t.setIcon(GUserModel.category.icon);
                }
              : null;
            for (
              var _interopRequireDefault = this.addMenu(
                  t,
                  GUserModel.caption,
                  function () {
                    for (var t = 0; t < GUserModel.items.length; ++t) {
                      var require = GUserModel.items[t];
                      "item" === require.type &&
                        this.updateMenuItem(
                          require.item,
                          GCore.GLocale.get(require.action.getTitle()),
                          require.action.isEnabled(),
                          !!require.action.isCheckable() && require.action.isChecked(),
                          require.action.isPro(),
                          require.action.getId()
                        );
                    }
                  }.bind(this),
                  GUserModel.icon,
                  require
                ),
                GTools = 0;
              GTools < GUserModel.items.length;
              ++GTools
            )
              GAnalyticsPageStats(GUserModel.items[GTools], _interopRequireDefault);
            return _interopRequireDefault;
          }.bind(this);
        for (GTools = 0; GTools < module.items.length; ++GTools)
          (g = module.items[GTools]), DataModule_1496(module.items[GTools], null);
        this._mainMenu.update();
      }),
      (Je.prototype._workspaceResolveUrlEvent = function (GUserModel) {
        GCloudStorage.resolveImage(GUserModel, this.getActiveDocument());
      }),
      (Je.prototype._shareEvent = function (GUserModel) {
        GUserModel.type === GEvent_type_868.Type.Updated && this._updateSidebars();
      }),
      (Je.prototype._applicationStateChangedEvent = function (GUserModel) {
        this._updateSidebars();
        const module = this.getActiveDocument();
        if (module && module.getStatus() === De.Ready) {
          this.getApplicationManager().isCommentingEnabled() &&
            this.openUserNameConfigDialog();
        }
      }),
      (Je.prototype._updateSidebars = function () {
        const exports = this.getApplicationManager(),
          module = exports.isInspectEnabled(),
          require = exports.isCommentingEnabled(),
          _interopRequireDefault = exports.isEditingEnabled();
        if (GSidebarContainer.isOrientationActiveInSetting(GSidebarContainer.Orientation.Right)) {
          const GUserModel = this._rightSidebars.getSidebar(
            this._rightSidebars.getActiveSidebar()
          );
          (GUserModel && GUserModel.isVisible()) ||
            (_interopRequireDefault || module
              ? this._rightSidebars.setActiveSidebar(GInspectorSidebar.ID)
              : require
              ? this._rightSidebars.setActiveSidebar(GAnnotationsSidebar.ID)
              : this._rightSidebars.setActiveSidebar(null)),
            this.setPartVisible(F.RightSidebars, require || _interopRequireDefault || module),
            this._rightSidebars.relayout();
        }
        if (GSidebarContainer.isOrientationActiveInSetting(GSidebarContainer.Orientation.Left)) {
          const GUserModel = this._leftSidebars.getSidebar(
            this._leftSidebars.getActiveSidebar()
          );
          (GUserModel && GUserModel.isVisible()) ||
            (module
              ? this._leftSidebars.setActiveSidebar(GOutlineSidebar.ID)
              : this._leftSidebars.setActiveSidebar(null)),
            this.setPartVisible(F.LeftSidebars, module),
            this._leftSidebars.relayout();
        }
      }),
      (Je.prototype._fontManagerResolveFontEvent = function (GUserModel) {
        const module = Object.assign({}, GUserModel);
        try {
          H.resolveFont(module);
        } catch (t) {
          throw (GUserModel.failed(), t);
        }
      }),
      (Je.prototype._fontManagerQueryFontFamilyEvent = function (GUserModel) {
        try {
          H.resolveQueryFontFamily(GUserModel);
        } catch (t) {
          throw (GUserModel.failed(), t);
        }
      }),
      (Je.prototype._documentEvent = function (GUserModel) {
        switch (GUserModel.type) {
          case GDocumentEvent.Type.OwnerUpdated:
            if (GUserModel.document) {
              const t = GUserModel.document.getOwner();
              if (t) {
                const n = GUserModel.document.isCloudFile()
                    ? GUserModel.document.getStorageItem().getFile()
                    : null,
                  _interopRequireDefault = n ? n.url_t || n.url : null,
                  GTools = GCore.GLocale.get(
                    new GCore.GLocaleKey("GDesigner", "text.preview-by")
                  )
                    .replace("%name", t.name)
                    .replace("%appname", AppSettings2.DESIGNER.TITLE);
                $('meta[name="description"]').attr("content", GTools),
                  $('meta[property="og:title"]').attr(
                    "content",
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GDesigner", "text.design-by")
                    )
                      .replace("%name", t.name)
                      .replace("%appname", AppSettings2.DESIGNER.TITLE)
                  ),
                  $('meta[property="og:description"]').attr("content", GTools),
                  _interopRequireDefault && $('meta[property="og:image"]').attr("content", _interopRequireDefault),
                  $('meta[property="og:url"]').attr("content", location.href),
                  $('meta[name="twitter:card"]').attr(
                    "content",
                    "summary_large_image"
                  ),
                  $('meta[property="og:site_name"]').attr(
                    "content",
                    AppSettings2.DESIGNER.TITLE
                  );
              }
            }
            this._updateTitle({ saveToSessionHistory: false });
            break;
          case GDocumentEvent.Type.StorageItemUpdated:
            this._updateTitle(), this._registerUsage(GUserModel.document);
            break;
          case GDocumentEvent.Type.Added:
            this._newDocumentDialog && this._newDocumentDialog.close();
        }
      }),
      (Je.prototype._registerUsage = function (GUserModel) {
        const module = GUserModel.getStorageItem();
        module &&
          module.isRegistrable() &&
          Oe.usage(module.getId()).catch((GUserModel) => {
            console.error("gApi.usage error", GUserModel);
          });
      }),
      (Je.prototype._windowEvent = function (GUserModel) {
        let module;
        switch (GUserModel.type) {
          case WindowEvent.WindowEvent.Type.Added:
          case WindowEvent.WindowEvent.Type.Removed:
            this._updateTitle();
            break;
          case WindowEvent.WindowEvent.Type.Activated:
            1 === this._windows.getWindows().length && this._updateTheme(),
              this.getToolManager().setView(GUserModel.window.getView()),
              this._leftSidebars.setView(GUserModel.window.getView()),
              this._rightSidebars.setView(GUserModel.window.getView()),
              this._updateTitle(),
              (module = GUserModel.window.getView().getHtmlElement()),
              this._editorTouchHandler.activate(module);
            break;
          case WindowEvent.WindowEvent.Type.Deactivated:
            (module = GUserModel.window.getView().getHtmlElement()),
              this._editorTouchHandler.deactivate(module),
              this.getToolManager().setView(null),
              this._leftSidebars.setView(null),
              this._rightSidebars.setView(null),
              this._updateTitle();
        }
      }),
      (Je.prototype._sidebarEvent = function (GUserModel) {
        GUserModel.type === GSidebarContainer.SidebarEvent.Type.Activated && this.relayout();
      }),
      (Je.prototype._settingChangedEvent = function (GUserModel) {
        switch (GUserModel.key) {
          case "touch":
            GUserModel.restoring && GUserModel.newValue && !this.isTouchEnabled()
              ? this.setTouchEnabled(false)
              : this._updateLayout(),
              this._updateEditorOptions(),
              this._updateGTM();
            break;
          case "theme":
            this._setTheme(GUserModel.newValue);
            break;
          case "snap_disabled":
            GTools.GGuides.options.disabled = GUserModel.newValue;
            break;
          case "snap_zones":
            GTools.GGuides.options.zones = GUserModel.newValue;
            break;
          case "snap_guides":
            GTools.GGuides.options.guides = GUserModel.newValue;
            break;
          case "highlight_on_hover":
            GTools.GEditorOptions.highlightOnHover = GUserModel.newValue;
            break;
          case "dont_store_textpath":
            GCore.GText.dontStorePaths = GUserModel.newValue;
            break;
          case "decimals_num":
            GCore.GScene.decimalsNum = GUserModel.newValue;
            break;
          case "enable_steps_debug":
            GTools.GEditorOptions.debugTransactions = GUserModel.newValue;
            break;
          case "enable_cache":
            "function" == typeof gdb_loaddesign &&
              ((GCore.GRendererConfig.ENABLE_CACHE = GUserModel.newValue),
              gDesigner.getActiveDocument() &&
                gDesigner.getActiveDocument().getActiveWindow() &&
                (gDesigner
                  .getActiveDocument()
                  .getActiveWindow()
                  .getView()
                  .cleanCache(),
                gDesigner
                  .getActiveDocument()
                  .getActiveWindow()
                  .getView()
                  .configureCache()));
            break;
          case "ui_toolbar_alignment":
            GUserModel.newValue
              ? this._frame.removeClass("ui-toolbar-center")
              : this._frame.addClass("ui-toolbar-center");
        }
      }),
      (Je.prototype._updateGTM = async function () {
        const exports = !!this.isTouchEnabled();
        je.updateProperty("touch", exports),
          je.fireEvent(je.Events.SETTING_CHANGED_EVENT);
      }),
      (Je.prototype._updateEditorOptions = function () {
        this.isTouchEnabled()
          ? this._applyTouchEditorOptions()
          : this._applyDefaultEditorOptions();
        const exports = this.getActiveDocument(),
          module = exports && exports.getActiveWindow(),
          require = module && module.getView();
        require && GEditor.GPlatform.scheduleFrame(() => require.invalidate(null, true));
      }),
      (Je.prototype._applyTouchEditorOptions = function () {
        const exports = GCore.GPaintCanvas.getScreenDPI();
        (GTools.GEditorOptions.distanceHelperBehaviour =
          GTools.GSelectTool._DistanceHelperBehaviour.Click),
          (GTools.GEditorOptions.resizeHandlesInDetailMode = false),
          (GTools.GEditorOptions.rotateHandleInDetailMode = false),
          (GTools.GEditorOptions.annotationHandles.suppressRedundantCorners = true),
          (GTools.GEditorOptions.annotationHandles.gradient.size = 16 * exports),
          (GTools.GEditorOptions.annotationHandles.gradient.sizeBig = 20 * exports),
          (GTools.GEditorOptions.annotationHandles.preserveAspectRatio.side =
            GCore.GRect.Side.BOTTOM_RIGHT),
          (GTools.GEditorOptions.annotationHandles.tranformBox.skew.enabled = true),
          (GTools.GEditorOptions.annotationHandles.tranformBox.rotate.enabled = true),
          (GTools.GEditorOptions.annotationHandles.preserveAspectRatio.enabled = true),
          (GCore.GPaintContext.prototype.transformBoxOutlineColor =
            GCore.GPaintContext.prototype.selectionOutlineColor),
          (GTools.GTransformBox.OUTSIDE_TOLERANCE = 0),
          (GTools.GEditorOptions.annotPickDistance = 4),
          (GTools.GEditorOptions.pickDistance = 20),
          (GTools.GEditorOptions.annotationHandles.tranformBox.size = 23 * exports),
          (GTools.GEditorOptions.annotationHandles.tranformBox.outlineWidth = 3 * exports),
          (GTools.GEditorOptions.annotationHandles.tranformBox.pivotSize = 23 * exports),
          (GTools.GEditorOptions.annotationHandles.tranformBox.pivotOutlineWidth =
            3 * exports),
          (GTools.GEditorOptions.annotationHandles.tranformBox.outsideStroke = true),
          (GTools.GEditorOptions.annotationHandles.tranformBox.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.rotateHandle = "bottom"),
          (GTools.GEditorOptions.annotationHandles.rotate.size = 23 * exports),
          (GTools.GEditorOptions.annotationHandles.rotate.iconSize = 23 * exports),
          (GTools.GEditorOptions.annotationHandles.rotate.outlineWidth = exports),
          (GTools.GEditorOptions.annotationHandles.rotate.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.annotationHandles.rotate.distance = 46 * exports),
          (GTools.GEditorOptions.annotationHandles.resize.size = 23 * exports),
          (GTools.GEditorOptions.annotationHandles.resize.outlineWidth = 3 * exports),
          (GTools.GEditorOptions.annotationHandles.resize.outsideStroke = true),
          (GTools.GEditorOptions.annotationHandles.resize.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.annotationHandles.rectangle.size = 22 * exports),
          (GTools.GEditorOptions.annotationHandles.rectangle.outlineWidth = 4 * exports),
          (GTools.GEditorOptions.annotationHandles.rectangle.outsideStroke = true),
          (GTools.GEditorOptions.annotationHandles.rectangle.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.annotationHandles.rectangle.maxNumberOfDetailedSegments = 1),
          (GTools.GEditorOptions.annotationHandles.polygon.size = 22 * exports),
          (GTools.GEditorOptions.annotationHandles.polygon.outlineWidth = 4 * exports),
          (GTools.GEditorOptions.annotationHandles.polygon.outsideStroke = true),
          (GTools.GEditorOptions.annotationHandles.polygon.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.annotationHandles.polygon.maxNumberOfDetailedSegments = 2),
          (GTools.GEditorOptions.annotationHandles.ellipse.size = 22 * exports),
          (GTools.GEditorOptions.annotationHandles.ellipse.outlineWidth = 4 * exports),
          (GTools.GEditorOptions.annotationHandles.ellipse.outsideStroke = true),
          (GTools.GEditorOptions.annotationHandles.ellipse.shadowColor =
            "transparent"),
          (GTools.GEditorOptions.annotationHandles.ellipse.maxNumberOfDetailedSegments = 2),
          (GTools.GEditorOptions.annotationHandles.path.node.size = 20 * exports),
          (GTools.GEditorOptions.annotationHandles.path.node.outlineWidth = 2 * exports),
          (GTools.GEditorOptions.annotationHandles.path.control.size = 10 * exports),
          GTools.GSkewHorizontalAnnotation.setIconVisible(true),
          GTools.GSkewVerticalAnnotation.setIconVisible(true),
          GTools.GPreserveAspectRatioAnnotation.setIconVisible(true),
          GTools.GRotateAnnotation.setIconVisible(true);
      }),
      (Je.prototype._applyDefaultEditorOptions = function () {
        const exports = GCore.GPaintCanvas.getScreenDPI();
        (GTools.GEditorOptions.distanceHelperBehaviour =
          GTools.GSelectTool._DistanceHelperBehaviour.Default),
          (GTools.GEditorOptions.resizeHandlesInDetailMode = true),
          (GTools.GEditorOptions.rotateHandleInDetailMode = true),
          (GTools.GEditorOptions.annotationHandles.suppressRedundantCorners = false),
          (GTools.GEditorOptions.annotationHandles.gradient.size = 9 * exports),
          (GTools.GEditorOptions.annotationHandles.gradient.sizeBig = 12 * exports),
          GTools.GSkewHorizontalAnnotation.setIconVisible(false),
          GTools.GSkewVerticalAnnotation.setIconVisible(false),
          GTools.GPreserveAspectRatioAnnotation.setIconVisible(false),
          GTools.GRotateAnnotation.setIconVisible(false),
          (GCore.GPaintContext.prototype.transformBoxOutlineColor = new GCore.GRGBColor(
            [23, 104, 196]
          )),
          (GTools.GTransformBox.OUTSIDE_TOLERANCE = 100),
          (GTools.GEditorOptions.annotPickDistance = 0),
          (GTools.GEditorOptions.pickDistance = 4),
          (GTools.GEditorOptions.annotationHandles.tranformBox.size = 10 * exports),
          (GTools.GEditorOptions.annotationHandles.tranformBox.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.tranformBox.pivotSize = null),
          (GTools.GEditorOptions.annotationHandles.tranformBox.pivotOutlineWidth =
            null),
          (GTools.GEditorOptions.annotationHandles.tranformBox.outsideStroke = false),
          (GTools.GEditorOptions.annotationHandles.tranformBox.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.tranformBox.skew.enabled = false),
          (GTools.GEditorOptions.annotationHandles.tranformBox.rotate.enabled = false),
          (GTools.GEditorOptions.annotationHandles.preserveAspectRatio.enabled = false),
          (GTools.GEditorOptions.rotateHandle = "top"),
          (GTools.GEditorOptions.annotationHandles.rotate.size = 10 * exports),
          (GTools.GEditorOptions.annotationHandles.rotate.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.rotate.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.rotate.distance = 16 * exports),
          (GTools.GEditorOptions.annotationHandles.resize.size = 10 * exports),
          (GTools.GEditorOptions.annotationHandles.resize.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.resize.outsideStroke = false),
          (GTools.GEditorOptions.annotationHandles.resize.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.rectangle.size = 8 * exports),
          (GTools.GEditorOptions.annotationHandles.rectangle.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.rectangle.outsideStroke = false),
          (GTools.GEditorOptions.annotationHandles.rectangle.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.polygon.size = 8 * exports),
          (GTools.GEditorOptions.annotationHandles.polygon.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.polygon.outsideStroke = false),
          (GTools.GEditorOptions.annotationHandles.polygon.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.ellipse.size = 8 * exports),
          (GTools.GEditorOptions.annotationHandles.ellipse.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.ellipse.outsideStroke = false),
          (GTools.GEditorOptions.annotationHandles.ellipse.shadowColor = null),
          (GTools.GEditorOptions.annotationHandles.path.node.size = 10 * exports),
          (GTools.GEditorOptions.annotationHandles.path.node.outlineWidth = null),
          (GTools.GEditorOptions.annotationHandles.path.control.size = 6 * exports);
      }),
      (Je.prototype._updateLayout = function () {
        $("body").toggleClass("g-touch", this.isTouchEnabled()),
          this.isTouchEnabled() ||
            (this._leftSidebars &&
              this._leftSidebars
                .getHtmlElement()
                .toggleClass("bring-to-front", false),
            this._rightSidebars &&
              this._rightSidebars
                .getHtmlElement()
                .toggleClass("bring-to-front", false),
            this._assistantBar &&
              this._assistantBar
                .getHtmlElement()
                .toggleClass("bring-to-front", false)),
          this._initialized &&
            (this._leftSidebars.getActiveSidebar() ||
              this._leftSidebars.setActiveSidebar(GOutlineSidebar.ID),
            this._rightSidebars.getActiveSidebar() ||
              this._rightSidebars.setActiveSidebar(GInspectorSidebar.ID),
            this._leftSidebars.setActiveTouchTool(null),
            this._rightSidebars.setActiveTouchTool(null),
            this._setActiveAssistantBar(this.isTouchEnabled())),
          this.relayout();
      }),
      (Je.prototype._setTheme = function (GUserModel) {
        (GUserModel && "default" !== GUserModel) || (GUserModel = "light");
        var t = $('head > link[href$=".css"]'),
          n = t.attr("href").split(".");
        (n[2] = GUserModel),
          t.attr("href", n.join(".")),
          $(t).load(
            n.join("."),
            function () {
              var t = this._windows.getWindows();
              l.DESIGNER.GUIDELINE_COLOR
                ? (GTools.GEditorOptions.guideLineColor = l.DESIGNER.GUIDELINE_COLOR)
                : (GTools.GEditorOptions.guideLineColor =
                    "light" === GUserModel
                      ? new GCore.GRGBColor([107, 156, 228])
                      : new GCore.GRGBColor([227, 0, 97])),
                l.DESIGNER.GUIDELINEHINT_COLOR
                  ? (GTools.GEditorOptions.guideLineHintColor =
                      l.DESIGNER.GUIDELINEHINT_COLOR)
                  : (GTools.GEditorOptions.guideLineHintColor =
                      "light" === GUserModel ? "blue" : "#F790B6"),
                l.DESIGNER.DISTANCEHELPER_COLOR &&
                  (GTools.GEditorOptions.distanceHelperColor =
                    l.DESIGNER.DISTANCEHELPER_COLOR),
                l.DESIGNER.HIGHLIGHTOUTLINE_COLOR &&
                  (GCore.GPaintContext.prototype.highlightOutlineColor =
                    new GCore.GRGBColor([197, 17, 98]));
              for (var n = 0; n < t.length; ++n) {
                var _interopRequireDefault = t[n].getView();
                _interopRequireDefault && (_interopRequireDefault.setRulers(!_interopRequireDefault.hasRulers()), _interopRequireDefault.setRulers(!_interopRequireDefault.hasRulers()));
              }
              this._updateTheme();
            }.bind(this)
          );
      }),
      (Je.prototype._updateTheme = function () {
        var GUserModel = this._windows.getActiveWindow();
        GUserModel &&
          GUserModel.getView() &&
          GEditor.GPlatform.scheduleFrame(
            function () {
              var t = GCore.GRGBColor.BLACK,
                n = getComputedStyle(
                  this._windows.getHtmlElement()[0]
                ).getPropertyValue("background-color"),
                _interopRequireDefault = GCore.GRGBColor.fromCSSColor(n);
              if (_interopRequireDefault) {
                var GTools = _interopRequireDefault.toScreen();
                t =
                  (299 * GTools[0] + 587 * GTools[1] + 114 * GTools[2]) / 1e3 >= 128
                    ? GCore.GRGBColor.BLACK
                    : GCore.GRGBColor.WHITE;
              }
              (GCore.GPaintContext.prototype.labelColor = t),
                GUserModel && GUserModel.getView() && GUserModel.getView().invalidate();
            }.bind(this)
          ),
          this.relayout();
      }),
      (Je.prototype._updateTitle = async function () {
        let { saveToSessionHistory: exports = true } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        var t = "";
        let require = AppSettings2.DESIGNER.TITLE;
        var _interopRequireDefault =
          gContainer.getRuntime() === GContainer.Runtime.Browser ||
          gContainer.getRuntime() === GContainer.Runtime.PWA;
        _interopRequireDefault && exports && window.history.pushState(null, "Title", "/");
        var GTools = this.getWindows().getActiveWindow();
        if (GTools) {
          t = GTools.getTitle() + " - ";
          let GUserModel = GTools.getDocument();
          if (
            (GUserModel &&
              GUserModel.getOwner() &&
              !GUserModel.isDocumentFromTemplate() &&
              ((require = ""),
              (t = GCore.GLocale.get(
                new GCore.GLocaleKey("GDesigner", "text.design-by")
              )
                .replace("%name", GUserModel.getOwner().name)
                .replace("%appname", AppSettings2.DESIGNER.TITLE))),
            _interopRequireDefault)
          ) {
            let t = GUserModel.getStorageItem();
            GUserModel &&
              t &&
              (t instanceof Item.Item ||
                (t.supportsShadowFile() && (await t.getCollaborativeFile()))) &&
              (GUserModel.getStorageItem().getToken()
                ? GUserModel.getFocusAnnotationId()
                  ? window.history.pushState(
                      null,
                      "Title",
                      "/?token=" +
                        t.getToken() +
                        "&annot=" +
                        GUserModel.getFocusAnnotationId()
                    )
                  : window.history.pushState(
                      null,
                      "Title",
                      "/?token=" + t.getToken()
                    )
                : t.getId() &&
                  (GUserModel.getFocusAnnotationId()
                    ? window.history.pushState(
                        null,
                        "Title",
                        "/?d=" +
                          t.getId() +
                          "&annot=" +
                          GUserModel.getFocusAnnotationId()
                      )
                    : window.history.pushState(
                        null,
                        "Title",
                        "/?d=" + t.getId()
                      )));
          }
        }
        (t += require), (document.title = (0, CollaborationMergeUtils.decodeHTML)(t));
      }),
      (Je.prototype.addNotification = function (GUserModel, t) {
        this.hasEventListeners(GEvent_notification) && this.trigger(new GEvent_notification(GUserModel, t));
      }),
      (Je.prototype._shortcutToMouseTrapShortcut = function (GUserModel) {
        for (var module = "", require = 0; require < GUserModel.length; ++require) {
          require > 0 && (module += "+");
          var _interopRequireDefault = GUserModel[require];
          if ("number" == typeof _interopRequireDefault)
            switch ((_interopRequireDefault = GEditor.GKey.transformKey(_interopRequireDefault))) {
              case GEditor.GKey.Constant.SPACE:
                module += "space";
                break;
              case GEditor.GKey.Constant.ENTER:
                module += "enter";
                break;
              case GEditor.GKey.Constant.TAB:
                module += "tab";
                break;
              case GEditor.GKey.Constant.BACKSPACE:
                module += "backspace";
                break;
              case GEditor.GKey.Constant.CONTROL:
                module += "ctrl";
                break;
              case GEditor.GKey.Constant.SHIFT:
                module += "shift";
                break;
              case GEditor.GKey.Constant.ALT_LEFT:
              case GEditor.GKey.Constant.ALT_RIGHT:
                module += "alt";
                break;
              case GEditor.GKey.Constant.LEFT:
                module += "left";
                break;
              case GEditor.GKey.Constant.UP:
                module += "up";
                break;
              case GEditor.GKey.Constant.RIGHT:
                module += "right";
                break;
              case GEditor.GKey.Constant.DOWN:
                module += "down";
                break;
              case GEditor.GKey.Constant.PAGE_UP:
                module += "pageup";
                break;
              case GEditor.GKey.Constant.PAGE_DOWN:
                module += "pagedown";
                break;
              case GEditor.GKey.Constant.HOME:
                module += "home";
                break;
              case GEditor.GKey.Constant.END:
                module += "end";
                break;
              case GEditor.GKey.Constant.INSERT:
                module += "ins";
                break;
              case GEditor.GKey.Constant.DELETE:
                module += "del";
                break;
              case GEditor.GKey.Constant.COMMAND:
                module += "meta";
                break;
              case GEditor.GKey.Constant.F1:
                module += "f1";
                break;
              case GEditor.GKey.Constant.F2:
                module += "f2";
                break;
              case GEditor.GKey.Constant.F3:
                module += "f3";
                break;
              case GEditor.GKey.Constant.F4:
                module += "f4";
                break;
              case GEditor.GKey.Constant.F5:
                module += "f5";
                break;
              case GEditor.GKey.Constant.F6:
                module += "f6";
                break;
              case GEditor.GKey.Constant.F7:
                module += "f7";
                break;
              case GEditor.GKey.Constant.F8:
                module += "f8";
                break;
              case GEditor.GKey.Constant.F9:
                module += "f9";
                break;
              case GEditor.GKey.Constant.F10:
                module += "f10";
                break;
              case GEditor.GKey.Constant.F11:
                module += "f11";
                break;
              case GEditor.GKey.Constant.F12:
                module += "f12";
                break;
              default:
                throw new Error("Unknown key code");
            }
          else module += _interopRequireDefault.toLowerCase();
        }
        return module;
      }),
      (Je.prototype.isGravitIME = function (GUserModel) {
        return GUserModel && GUserModel.className === GEditor.GSceneWidget.GRAVIT_IME;
      }),
      (Je.prototype.hasModifiedDocuments = function () {
        for (var exports = false, module = this.getDocuments(), require = 0; require < module.length; ++require)
          if (module[require].isModified()) {
            exports = true;
            break;
          }
        return exports;
      }),
      (Je.prototype.getCanvasWidth = function () {
        return (
          this.getWindows().getActiveWindow().getView().getWidth() -
          ("none" !== $("#right-sidebars").css("display")
            ? $("#right-sidebars").width()
            : 0) -
          ("none" !== $("#left-sidebars").css("display")
            ? $("#left-sidebars").width()
            : 0)
        );
      }),
      (Je.prototype.getCanvasHeight = function () {
        return (
          this.getWindows().getActiveWindow().getView().getHeight() -
          this.getHeader().getHeight() -
          this.getToolbar().getHeight()
        );
      }),
      (Je.prototype.getCanvasCenter = function () {
        var GUserModel = GCore.GPaintCanvas.getScreenDPI(),
          t = this.getCanvasWidth() / 2,
          n = this.getCanvasHeight() / 2;
        return (
          (t +=
            "none" !== $("#left-sidebars").css("display")
              ? $("#left-sidebars").width()
              : 0),
          (n += this.getHeader().getHeight() + this.getToolbar().getHeight()),
          new GCore.GPoint(t * GUserModel, n * GUserModel)
        );
      }),
      (Je.prototype.getStylePreview = function (GUserModel, t) {
        return this._stylesPreview[GUserModel.getReferenceId()]
          ? t
            ? this._stylesPreview[GUserModel.getReferenceId()].textBitmap
            : this._stylesPreview[GUserModel.getReferenceId()].bitmap
          : this.createNewStylePreview(GUserModel, true, t);
      }),
      (Je.prototype.createStyleElement = function (GUserModel, t) {
        var n = new GCore.GRectangle(0, 0, 50, 50);
        if (
          t &&
          $.inArray(GCore.GStylable.PropertySet.Text, GUserModel.getProperty("ps")) >= 0
        ) {
          var _interopRequireDefault = new GCore.GText();
          _interopRequireDefault.setText("Ab"),
            _interopRequireDefault.assignStyleFrom(GUserModel),
            _interopRequireDefault.setProperty("_tfi", "20"),
            _interopRequireDefault.setBounds(7, 10, 50, 50),
            n.appendChild(_interopRequireDefault);
        } else
          n.assignStyleFrom(GUserModel),
            $.inArray(
              GCore.GStylable.PropertySet.FillPaintLayers,
              GUserModel.getProperty("ps")
            ) < 0 &&
              $.inArray(
                GCore.GStylable.PropertySet.BorderPaintLayers,
                GUserModel.getProperty("ps")
              ) < 0 &&
              n
                .getPaintLayers()
                .appendChild(
                  new GCore.GStylable.FillPaintLayer(
                    new GCore.GRGBColor([235, 235, 235]),
                    1
                  )
                );
        return n;
      }),
      (Je.prototype.createNewStylePreview = function (GUserModel, t, n) {
        var _interopRequireDefault = this.createStyleElement(GUserModel, false),
          GTools = this.createStyleElement(GUserModel, true);
        if (!gDesigner.getActiveDocument()) return null;
        var GEditor = gDesigner.getActiveDocument().getEditor().getSelection() || [];
        GEditor.length > 0 && GEditor[0].appendChild(GTools);
        var AppSettings = _interopRequireDefault.toBitmap().toImageDataUrl(GCore.GBitmap.ImageType.PNG),
          l = GTools.toBitmap().toImageDataUrl(GCore.GBitmap.ImageType.PNG);
        return (
          GEditor.length > 0 && GEditor[0].removeChild(GTools),
          t &&
            (this._stylesPreview[GUserModel.getReferenceId()] = {
              preview: _interopRequireDefault,
              bitmap: AppSettings,
              textBitmap: l,
            }),
          n ? l : AppSettings
        );
      }),
      (Je.prototype.setVersion = function (GUserModel) {
        this._version = GUserModel;
      }),
      (Je.prototype.getVersion = function () {
        return this._version;
      }),
      (Je.prototype.setVersionFriendlyName = function (GUserModel) {
        this._versionFriendlyName = GUserModel;
      }),
      (Je.prototype.getVersionFriendlyName = function () {
        return this._versionFriendlyName;
      }),
      (Je.prototype.setCommitSHA = function (GUserModel) {
        this._commitSHA = GUserModel;
      }),
      (Je.prototype.getCommitSHA = function () {
        return this._commitSHA;
      }),
      (Je.prototype.setBuildNum = function (GUserModel) {
        this._buildNum = GUserModel;
      }),
      (Je.prototype.getBuildNum = function () {
        return this._buildNum;
      }),
      (Je.prototype.setIsBeta = function (GUserModel) {
        this._isBeta = GUserModel;
      }),
      (Je.prototype.isBeta = function () {
        return this._isBeta;
      }),
      (Je.prototype.setStoreVendor = function (GUserModel) {
        this._storeVendor = GUserModel;
      }),
      (Je.prototype.getStoreVendor = function () {
        return this._storeVendor;
      }),
      (Je.prototype._userLoggedEvent = function (GUserModel) {
        let module = GUserModel.user,
          require = this.getHeader();
        if ((require && require.updateLoginInfo(module), module && module.getUID()))
          this.executeWhenReady(() => {
            this.updateRecentDocumentsAction();
          }),
            (GTools.GEditorOptions.userConfig = {
              userName: module.getFullUserName(),
              uid: module.getUID(),
            });
        else {
          const GUserModel = GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "text.anonymous-user")
            ),
            n = (module && module.getFullUserName()) || GUserModel;
          GTools.GEditorOptions.userConfig = { userName: n, uid: -1 };
        }
      }),
      (Je.prototype._userPropertiesChangedEvent = function (GUserModel) {
        const { user: module } = GUserModel;
        module &&
          module.getUID() &&
          (GTools.GEditorOptions.userConfig = {
            userName: module.getFullUserName(),
            uid: module.getUID(),
          });
      }),
      (Je.prototype._beforeInstallUpdate = function (GUserModel) {
        this._reloading = true;
      }),
      (Je.prototype._updateDataLayerWithLicenseData = function () {
        if (this._user && "undefined" != typeof dataLayer) {
          dataLayer.push({ userType: this.getSubscriberUserType() });
          const GEditor = this.getLicense();
          var exports = GEditor.getExpirationDate() || new Date(0),
            module = Math.floor(exports.getTime() / 1e3),
            require = GEditor.getCreationDate() || new Date(0),
            _interopRequireDefault = Math.floor(require.getTime() / 1e3),
            GTools = AppSettings.DateAPI.diff(require, exports),
            GCore = AppSettings.DateAPI.millisecondsToDays(GTools);
          AppSettings.DateAPI.eq(require, new Date(0)) && (_interopRequireDefault = "0000000000"),
            AppSettings.DateAPI.eq(exports, new Date(0)) && ((GCore = 0), (module = "0000000000")),
            dataLayer.push({ expirationDate: module }),
            dataLayer.push({ licenseDuration: GCore }),
            dataLayer.push({ creationDate: _interopRequireDefault });
        }
      }),
      (Je.prototype._licenseChangedEvent = async function (GUserModel) {
        GUserModel.license.isDefault() ||
          ((this._enabledSubscriptions = true),
          gContainer.setProperty("enabled_subscriptions", true)),
          "undefined" != typeof dataLayer &&
            (this._utm &&
              this._utm.forEach((GUserModel, t) => dataLayer.push({ [t]: GUserModel })),
            this._updateDataLayerWithLicenseData(),
            dataLayer.push({ event: "LICENSE_CHANGED_EVENT" })),
          GUserModel.license.isOffline() &&
            !this.isEnabledProFeatures("offline") &&
            this.reload({
              icon: "clock",
              title: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.license-offline-title")
              ),
              subtitle: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GCommonNames",
                  "text.license-offline-subtitle"
                )
              ),
              footer: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.license-offline-footer")
              )
                .replace(
                  "%close",
                  $("<span/>")
                    .addClass("link")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.license-offline-footer-highlight"
                        )
                      )
                    )
                    .prop("outerHTML")
                )
                .replace("%time", 5),
              buttons: [
                {
                  label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")),
                  onclick: (GUserModel) => GUserModel.gDialog("close"),
                },
              ],
              attachTimer: (GUserModel) => {
                const module = () => {
                  (this._reloading = false),
                    this.clearCountdown(GUserModel),
                    $(window).off("online", module);
                };
                navigator.onLine && module(), $(window).on("online", module);
              },
            }),
          $("body")
            .toggleClass(
              "pro-expired",
              this.isEnabledSubscriptions() && !this.isEnabledProFeatures()
            )
            .toggleClass(
              "pro-license",
              this.isEnabledSubscriptions() && this.isEnabledProFeatures()
            )
            .toggleClass("pro-legacy", GUserModel.license.isLegacy())
            .toggleClass(
              "pro-subscription",
              GUserModel.license.isPro() && !GUserModel.license.isExpired()
            )
            .toggleClass(
              "trial-expired",
              GUserModel.license.isTrial() && GUserModel.license.isExpired()
            ),
          this._toggleAdditionalSubscriptionClasses(GUserModel.license),
          this.isEnabledProFeatures() || this.setTouchEnabled(false),
          this._updateState();
      }),
      (Je.prototype._toggleAdditionalSubscriptionClasses = function () {}),
      (Je.prototype.signout = function (GUserModel, t) {
        if (this.isEnabledSubscriptions() && !GUserModel) {
          if (this.getDocuments().some((GUserModel) => GUserModel.isModified()))
            return (
              ee.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.save-before-logging-out"
                  )
                )
              ),
              Promise.reject(undefined)
            );
        }
        return (
          DataModule_785.clear(),
          new Promise(async (GUserModel, n) => {
            await (0, CollaborationMergeUtils._tryAndCatch)(() => Oe.signout()),
              (this._user = null),
              this.hasEventListeners(GEvent_user) && this.trigger(new GEvent_user(null)),
              this.isEnabledSubscriptions() &&
                (t || ((this._reloading = true), location.reload())),
              GUserModel();
          })
        );
      }),
      (Je.prototype.isReloading = function () {
        return this._reloading;
      }),
      (Je.prototype.reload = function (GUserModel) {
        let {
          title: module,
          subtitle: require,
          icon: _interopRequireDefault,
          footer: GTools,
          buttons: GCore,
          attachTimer: GEditor,
        } = GUserModel;
        this._initialized &&
          (this._reloading ||
            ((this._reloading = true),
            ee
              .custom({
                icon: _interopRequireDefault,
                title: module,
                subtitle: require,
                footer: GTools,
                buttons: GCore,
                closeCallback: () => {
                  const GUserModel = this.createCountdown(() => this.signout(true), 3e5);
                  GEditor && GEditor(GUserModel);
                },
              })
              .css({ zIndex: 9999 })));
      }),
      (Je.prototype.clearCountdown = function (GUserModel) {
        let { timeoutID: module, intervalID: require = 0 } = GUserModel;
        require && clearInterval(require),
          module && clearInterval(module),
          $(".g-timer[data-interval=".concat(require, "]")).remove();
      }),
      (Je.prototype.createCountdown = function (GUserModel, t) {
        let require = null;
        const _interopRequireDefault = AppSettings.DateAPI.addTime(new Date(), t),
          GTools = setInterval(() => {
            const GUserModel = _interopRequireDefault - Date.now();
            if (GUserModel < 0) return clearInterval(GTools), void (require && require.remove());
            const t = Math.floor((GUserModel % 36e5) / 6e4),
              GEditor = Math.floor((GUserModel % 6e4) / 1e3);
            require ||
              (require = $("<time></time>")
                .attr("data-interval", GTools)
                .addClass("g-timer")
                .appendTo($("body"))),
              require.text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.countdown-timer")
                )
                  .replace("%minutes", t)
                  .replace("%seconds", GEditor)
              );
          }, 1e3);
        let GEditor = null;
        return GUserModel && (GEditor = setTimeout(GUserModel, t)), { intervalID: GTools, timeoutID: GEditor };
      }),
      (Je.prototype.openDeactivatedUserDialog = async function (GUserModel) {
        const module = $(
          "<div>".concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GDocument", "text.account-deactivated")
            )
              .replace("%app", AppSettings2.DESIGNER.TITLE)
              .replace("%name", GUserModel.getFullUserName() || GUserModel.getEmail()),
            "</div>"
          )
        );
        module.find("a").on("click", (t) => {
          t.preventDefault();
          let require = $(t.target).closest(".g-dialog-content");
          return (
            GCloudStorage.resendEmailConfirmation(GUserModel).then(() => require.gDialog("close")), false
          );
        }),
          ee.custom({
            className: "g-deactivated-user-dialog",
            subtitle: module,
            icon: "email",
          });
      }),
      (Je.prototype.getSyncUser = function () {
        return this._user;
      }),
      (Je.prototype.getUser = function () {
        return new Promise(async (GUserModel, t) => {
          let require = await this.getCloudCommunicationManager().getUser();
          this._anonymous = !!require && require.isAnonymous();
          let _interopRequireDefault = await this.isOfflineAsync();
          if (!require && _interopRequireDefault) {
            const GUserModel = DataModule_785.getUser();
            GUserModel && (require = new $GUserModel(GUserModel));
          }
          if (
            !require ||
            "lts" !== gDesigner.getEnv() ||
            this.isEnabledProFeatures()
          ) {
            if (require && require.reload)
              return (
                this.reload({
                  title:
                    "We are currently doing some important maintenance work. Please save your design in the next five minutes to avoid loss of progress!",
                }),
                void GUserModel(null)
              );
            if (require)
              if (!require || (this._user && $GUserModel.equals(this._user, require))) {
                if (this._user && require && !require.isDeactivated()) {
                  const GUserModel = { stats: undefined };
                  GCore.GUtil.equals(
                    Object.assign({}, this._user, GUserModel),
                    Object.assign({}, require, GUserModel),
                    true
                  ) ||
                    (this.hasEventListeners(GEvent_user_805) && this.trigger(new GEvent_user_805(require)));
                }
              } else
                "undefined" == typeof dataLayer ||
                  require.isAnonymous() ||
                  require.isDeactivated() ||
                  (dataLayer.push({ userId: require.getUID() }),
                  dataLayer.push({ userEmail: require.getEmail() }),
                  dataLayer.push({ userName: require.name || "" }),
                  dataLayer.push({ userLogin: require.login }),
                  this._utm &&
                    this._utm.forEach((GUserModel, t) => dataLayer.push({ [t]: GUserModel })),
                  this._updateDataLayerWithLicenseData(),
                  dataLayer.push({ event: "USER_LOGGED_EVENT" })),
                  this.hasEventListeners(GEvent_user) && this.trigger(new GEvent_user(require));
            var GTools;
            this._user &&
              require &&
              this._user.getUID() === require.getUID() &&
              (GTools = this._user.stats),
              (this._user = require),
              this._user && !_interopRequireDefault && DataModule_785.updateUser(this._user),
              GTools && (this._user.stats = GTools),
              GUserModel(this._user);
          } else GUserModel(null);
        });
      }),
      (Je.prototype.stats = function (GUserModel, t, n, _interopRequireDefault) {
        return GAnalyticsPageStats.default.pageStats(GUserModel, t, this._user, n, _interopRequireDefault);
      }),
      (Je.prototype.pageTracking = function (GUserModel, t) {
        return GAnalyticsPageStats.default.pageTracking(GUserModel, t);
      }),
      (Je.prototype.gtmEvent = function (GUserModel, t) {
        "undefined" != typeof dataLayer &&
          (t &&
            t.forEach((GUserModel) => {
              "object" == typeof GUserModel && dataLayer.push(GUserModel);
            }),
          dataLayer.push({ event: GUserModel }));
      }),
      (Je.prototype.intercomStats = function (GUserModel) {
        "function" == typeof Intercom && Intercom("trackEvent", GUserModel);
      }),
      (Je.prototype.saveStats = function () {
        if (this._user && this._user.stats) {
          var exports = CollaborationMergeUtils2.toMD5(JSON.stringify(this._user.stats || ""));
          Ye !== exports && (Oe.updateUser({ stats: this._user.stats }), (Ye = exports));
        }
      }),
      (Je.prototype.setEnv = function (GUserModel) {
        this._env = GUserModel;
      }),
      (Je.prototype.getEnv = function () {
        return this._env;
      }),
      (Je.prototype.hasSynchronizingDocuments = function () {
        for (var exports = false, module = this.getDocuments(), require = 0; require < module.length; ++require)
          if (module[require].isSynchronizing()) {
            exports = true;
            break;
          }
        return exports;
      }),
      (Je.prototype.zoomAtViewCenter = function (GUserModel, t) {
        var n,
          _interopRequireDefault,
          GTools = this.getActiveDocument();
        if (!GTools || !(_interopRequireDefault = GTools.getEditor().getSelectionBBox())) {
          n = true;
          var GEditor = GUserModel.getScene();
          GEditor && (_interopRequireDefault = GEditor.getPaintBBox());
        }
        var AppSettings =
          _interopRequireDefault && !_interopRequireDefault.isEmpty()
            ? _interopRequireDefault.getSide(GCore.GRect.Side.CENTER)
            : new GCore.GPoint(0, 0);
        if (n && !GUserModel.getViewConfiguration().multiPageView) {
          var l = GUserModel.getViewTransform().mapPoint(this.getCanvasCenter());
          isNaN(l.getX()) || isNaN(l.getY()) || (AppSettings = l);
        }
        if (GUserModel.getViewConfiguration().multiPageView) {
          var DataModule_1492 = GUserModel.getScene().getActivePage();
          DataModule_1492 && (AppSettings = AppSettings.add(DataModule_1492.getPosition(true)));
        }
        GUserModel.zoomAtCenter(AppSettings, t);
      }),
      (Je.prototype.handleUnsavedDocuments = function () {
        return gDesigner.hasModifiedDocuments()
          ? this.getDocuments()
              .filter((GUserModel) => GUserModel.isModified())
              .reduce(
                (GUserModel, t) =>
                  GUserModel.then(
                    () =>
                      new Promise(async (GUserModel, n) => {
                        this.canUnloadDocument(t)
                          .then((_interopRequireDefault) => {
                            _interopRequireDefault
                              ? GUserModel()
                              : this.executeAction(
                                  GSaveAction.ID,
                                  [
                                    t,
                                    function () {
                                      let t =
                                        arguments.length > 0 &&
                                        undefined !== arguments[0]
                                          ? arguments[0]
                                          : {};
                                      const { documentStatus: _interopRequireDefault = null } = t;
                                      _interopRequireDefault && _interopRequireDefault === De.SaveCancelled ? n(t) : GUserModel();
                                    },
                                  ],
                                  "unsavedhandler"
                                );
                          })
                          .catch((GUserModel) => {
                            n(GUserModel);
                          });
                      })
                  ),
                Promise.resolve()
              )
          : Promise.resolve();
      }),
      (Je.prototype.canUnloadDocument = function (GUserModel) {
        let { changeActiveDocument: module = true } =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return new Promise((n, _interopRequireDefault) => {
          if (!GUserModel.isModified() && !GUserModel.isSynchronizing()) return n(true);
          module && this.getActiveDocument() !== GUserModel && this.activateDocument(GUserModel),
            gDesigner.canExecuteAction(GSaveAction.ID, [GUserModel]) || n(true),
            ee.advanced({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.document-modified")
              ).replace("%title", GUserModel.getTitle()),
              closeCallback: (GUserModel) =>
                GUserModel && _interopRequireDefault({ documentStatus: De.SaveCancelled }),
              buttons: [
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.dont-save")
                  ),
                  onclick: () => {
                    n(true);
                  },
                  closeOnClick: true,
                  position: "left",
                  shortcut: "n",
                },
                {
                  label: GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.cancel")
                  ),
                  onclick: () => _interopRequireDefault({ documentStatus: De.SaveCancelled }),
                  closeOnClick: true,
                  shortcut: "esc",
                },
                {
                  label:
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "text.save")
                    ) + "...",
                  onclick: () => {
                    n(false);
                  },
                  shortcut: this._shortcutToMouseTrapShortcut(
                    GEditor.GKey.Constant.ENTER
                  ),
                  highlighted: true,
                  closeOnClick: true,
                },
              ],
            });
        });
      }),
      (Je.prototype.exportSwatches = function (GUserModel) {
        for (
          var module = this.getAllSwatches(GUserModel), require = new GCore.GSwatches(), _interopRequireDefault = 0;
          _interopRequireDefault < module.length;
          ++_interopRequireDefault
        ) {
          var GTools = module[_interopRequireDefault].clone();
          require.appendChild(GTools);
        }
        var GEditor = pako.gzip(GCore.GNode.serialize(require), { level: 9 }),
          AppSettings = this.getDefaultStorage();
        if (AppSettings.canPromptSave())
          AppSettings.savePrompt(
            null,
            [{ ext: "gvswatch", mime: "application/gzip" }],
            (GUserModel) => {
              GUserModel.setSaveCounterMeasureEnabled(true),
                GUserModel.write(GEditor),
                GUserModel.setSaveCounterMeasureEnabled(false);
            },
            null
          );
        else if (AppSettings.canDownload()) {
          AppSettings.download("Swatches.gvswatch", (GUserModel) => {
            GUserModel &&
              (GUserModel.setSaveCounterMeasureEnabled(true),
              GUserModel.write(GEditor),
              GUserModel.setSaveCounterMeasureEnabled(false));
          });
        }
      }),
      (Je.prototype.importSwatches = function (GUserModel) {
        var t = this.getDefaultStorage(),
          n = GUserModel.startsWith("document");
        t.openPrompt(
          [{ ext: "gvswatch", mime: "text/plain" }],
          (t) => {
            t.read((t) => {
              try {
                for (
                  var _interopRequireDefault = this.getAllSwatches(GUserModel),
                    GTools = GCore.GNode.deserialize(pako.ungzip(t, { to: "string" })),
                    GEditor = [],
                    AppSettings = GTools.getFirstChild();
                  null !== AppSettings;
                  AppSettings = AppSettings.getNext()
                ) {
                  for (var l = true, DataModule_1492 = 0; DataModule_1492 < _interopRequireDefault.length; ++DataModule_1492)
                    if (GCore.GUtil.equals(AppSettings, _interopRequireDefault[DataModule_1492])) {
                      l = false;
                      break;
                    }
                  l && GEditor.push(AppSettings.clone());
                }
                if (((_interopRequireDefault = _interopRequireDefault.concat(GEditor)), n)) this.setSwatches(GUserModel, _interopRequireDefault, true);
                else {
                  for (DataModule_1492 = 0; DataModule_1492 < GEditor.length; ++DataModule_1492) this._addGlobalSwatch(GEditor[DataModule_1492]);
                  this.setSwatches(GUserModel, this._swatches[GUserModel]);
                }
              } catch (GUserModel) {
                console.warn("error importing swatches: " + GUserModel),
                  ee.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCommonNames",
                        "text.fail-import-swatch"
                      )
                    )
                  );
              }
            });
          },
          false
        );
      }),
      (Je.prototype.getFontsPath = function () {
        return this._fontsPath;
      }),
      (Je.prototype.calculateFontsSize = function (GUserModel) {
        var t = this;
        return new Promise(function (n, _interopRequireDefault) {
          var GTools = {},
            GCore = function (GUserModel) {
              return new Promise(function (n, _interopRequireDefault) {
                var GCore = new XMLHttpRequest();
                GCore.open("HEAD", t.getAssetsURL() + "" + GUserModel, true),
                  (GCore.onload = function () {
                    this.status >= 200 && this.status < 400
                      ? ((GTools[GUserModel] = parseInt(
                          GCore.getResponseHeader("Content-Length")
                        )),
                        n())
                      : _interopRequireDefault({ status: this.status, statusText: GCore.statusText });
                  }),
                  (GCore.onerror = function () {
                    _interopRequireDefault({ status: this.status, statusText: GCore.statusText });
                  }),
                  GCore.send();
              });
            },
            GEditor = [];
          GUserModel.forEach((GUserModel) => {
            GEditor.push(GCore(GUserModel.preview));
            for (var t = 0; t < GUserModel.fonts.length; ++t) GEditor.push(GCore(GUserModel.fonts[t].url));
          }),
            Promise.all(GEditor).then(
              () => {
                n(GTools);
              },
              (GUserModel) => {
                _interopRequireDefault(GUserModel);
              }
            );
        });
      }),
      (Je.prototype.downloadFonts = function (GUserModel, t) {
        var n = this,
          _interopRequireDefault = 0,
          GTools = {},
          GEditor = Object.keys(t);
        if (GEditor.length) {
          for (var AppSettings = 0, l = 0; l < GEditor.length; ++l) AppSettings += t[GEditor[l]];
          _interopRequireDefault = AppSettings;
        }
        $("#right-sidebars").find(".fonts-download-progress").remove();
        var DataModule_1492 = $("<div/>")
            .addClass("fonts-download-progress")
            .append(
              $("<span/>")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.downloading-fonts")
                  )
                )
                .addClass("info")
            )
            .append($("<span/>").addClass("count").text(" (0%)"))
            .appendTo($("#right-sidebars")),
          GPersona = function (GUserModel) {
            DataModule_1492
              .find(".info")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    GUserModel ? "text.fonts-downloaded" : "text.error-downloading"
                  )
                )
              ),
              DataModule_1492.find(".count").remove(),
              DataModule_1492.append(
                $("<span/>")
                  .text("X")
                  .addClass("g-button")
                  .addClass("close")
                  .on("click", function () {
                    gDesigner.stats("font_downloaded_closebutton"), DataModule_1492.remove();
                  })
              );
          };
        return new Promise(function (t, GCore) {
          var GEditor = [];
          try {
            var AppSettings = function (GUserModel) {
                return new Promise(function (t, GCore) {
                  var GEditor = new XMLHttpRequest();
                  GEditor.open("GET", n.getAssetsURL() + "" + GUserModel, true),
                    (GEditor.responseType = "blob"),
                    (GEditor.onprogress = function (t) {
                      (GTools[GUserModel] = t.loaded),
                        (function () {
                          let GUserModel = Object.keys(GTools);
                          if (GUserModel.length) {
                            let n = 0;
                            for (var t = 0; t < GUserModel.length; ++t) n += GTools[GUserModel[t]];
                            let GCore = Math.round((n / _interopRequireDefault) * 100);
                            DataModule_1492.find(".count").text(
                              " (" + (GCore < 100 ? GCore : 100) + "%)"
                            );
                          }
                        })();
                    }),
                    (GEditor.onload = function () {
                      this.status >= 200 && this.status < 400
                        ? t({ blob: GEditor.response, url: GUserModel })
                        : GCore({ status: this.status, statusText: GEditor.statusText });
                    }),
                    (GEditor.onerror = function () {
                      GCore({ status: this.status, statusText: GEditor.statusText });
                    }),
                    GEditor.send();
                });
              },
              l = [],
              CollaborationMergeUtils = function (GUserModel) {
                GEditor.push(GUserModel);
              },
              DataModule_1247 = function () {
                throw new Exception("error downloading fonts");
              };
            GUserModel.forEach((GUserModel) => {
              l.push(
                AppSettings(GUserModel.preview)
                  .then(function (GUserModel) {
                    CollaborationMergeUtils(GUserModel);
                  })
                  .catch(() => {
                    DataModule_1247();
                  })
              );
              for (var t = 0; t < GUserModel.fonts.length; ++t)
                l.push(
                  AppSettings(GUserModel.fonts[t].url)
                    .then(function (GUserModel) {
                      CollaborationMergeUtils(GUserModel);
                    })
                    .catch((GUserModel) => {
                      console.log(GUserModel), DataModule_1247();
                    })
                );
            }),
              Promise.all(l).then(
                () => {
                  GPersona(true), t(GEditor);
                },
                (GUserModel) => {
                  console.log(GUserModel), GPersona(false), GCore();
                }
              );
          } catch (GUserModel) {
            console.log(GUserModel), GPersona(false), GCore();
          }
        });
      }),
      (Je.prototype.showCreateAccount = function () {
        return this._showCreateAccount;
      }),
      (Je.prototype.setShowCreateAccount = function (GUserModel) {
        this._showCreateAccount = GUserModel;
      }),
      (Je.prototype.getSignupOptions = function () {
        return this._signupOptions;
      }),
      (Je.prototype.setSignupOptions = function (GUserModel) {
        this._signupOptions = GUserModel;
      }),
      (Je.prototype.enterpriseLoginForm = function () {
        return false;
      }),
      (Je.prototype.setEnterpriseLoginForm = function (GUserModel) {}),
      (Je.prototype.runDeepLink = async function (GUserModel) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if ((console.log("Called: " + GUserModel), GUserModel))
          try {
            const n = await this.getUser();
            if (0 === GUserModel.indexOf("purchase")) {
              let _interopRequireDefault;
              return (
                module.hasOwnProperty("newuser") && (this._showCreateAccount = true),
                AppSettings2.PURCHASE.URL_TO_PRODUCT &&
                  (_interopRequireDefault = AppSettings2.PURCHASE.URL_TO_PRODUCT[GUserModel]),
                _interopRequireDefault &&
                  (Object.assign(module, { productId: _interopRequireDefault }),
                  n
                    ? await Oe.updateUserSettings({
                        subscription: { annual: { productId: _interopRequireDefault } },
                      })
                    : gContainer.setCookie({
                        name: "_gproductid",
                        value: _interopRequireDefault || "",
                        url: Oe.url,
                      })),
                this.openPaymentDialog(null, Object.assign(module, { flow: GUserModel }))
              );
            }
            if ("login_dialog" === GUserModel) this._user || GCloudStorage.performLogin();
            else {
              if ("confirm_email" === GUserModel) {
                const { confirm_email: GUserModel, flow: _interopRequireDefault } = module;
                return this.getCloudCommunicationManager()
                  .confirmEmail(GUserModel)
                  .then(async () => {
                    let GUserModel = await this.getUser();
                    GUserModel &&
                      GUserModel.isEmailVerified() &&
                      this.executeWhenReady(() => {
                        const GUserModel = this.getLicense();
                        ee.custom({
                          title: GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GCommonNames",
                              "text.activating-your-account"
                            )
                          ),
                          subtitle:
                            (GUserModel.isPro() || GUserModel.isTrial()) &&
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GCommonNames",
                                "text.activating-your-account-subtitle"
                              )
                            ),
                          icon: "ok",
                        }),
                          _interopRequireDefault && "confirm_email" !== _interopRequireDefault && this.runDeepLink(_interopRequireDefault, module);
                      });
                  })
                  .catch((GUserModel) => {
                    if (!n) return Promise.reject(GUserModel);
                    this.executeWhenReady(() => ee.error(GUserModel));
                  });
              }
              if ("account" === GUserModel)
                n &&
                  !this.isAnonymous() &&
                  this.executeWhenReady(() => {
                    new GProfileDialog(n).open();
                  });
              else if ("purchases" === GUserModel) {
                n &&
                  (await Oe.hasPurchases()) &&
                  this.executeWhenReady(() => {
                    new GProfileDialog(n, "purchase").open();
                  });
              } else if ("newuser" === GUserModel) this._showCreateAccount = true;
              else if ("enterprise" === GUserModel)
                n || (this._enterpriseLoginForm = true);
              else if ("reset_trial" === GUserModel) {
                const GUserModel = () => {
                  Oe.license
                    .resetTrial()
                    .then(() => gDesigner.requestLicenseUpdate());
                };
                n
                  ? GUserModel()
                  : new h.default()
                      .listen(GEvent_user)
                      .when((GUserModel) => !!GUserModel && !!GUserModel.user)
                      .do(GUserModel);
              } else if ("procoupon" === GUserModel)
                this.executeWhenReady(() => {
                  GCloudStorage.activateCoupon(module.procoupon);
                });
              else if ("annot" === GUserModel)
                AppSettings.HAS_ANNOTATIONS &&
                  this.executeWhenReady(() => {
                    const { annot: GUserModel } = module;
                    this.setPartVisible(F.RightSidebars, true),
                      this._rightSidebars.setActiveSidebar(GAnnotationsSidebar.ID);
                  });
              else if (
                GUserModel === GContainer.DeepLinking.CreateShare &&
                "true" === module[GContainer.DeepLinking.CreateShare]
              )
                new h.default()
                  .listen(GApplicationStatusEvent)
                  .when(() => this._initialized)
                  .do(() => {
                    const GUserModel = (t) => {
                      if (t.type === GEvent_type_868.Type.Updated) {
                        const t = this.getActiveDocument();
                        t &&
                          t.getStatus() === De.Loaded &&
                          (t.isShareable() &&
                            !this.getApplicationManager().isSharing() &&
                            this.getShareManager().share(),
                          this.removeEventListener(GEvent_type_868, GUserModel, this));
                      }
                    };
                    this.addEventListener(GEvent_type_868, GUserModel, this);
                  });
              else if (
                GUserModel === GContainer.DeepLinking.ActivateTrial &&
                module[GContainer.DeepLinking.ActivateTrial]
              ) {
                const GUserModel = module[GContainer.DeepLinking.ActivateTrial];
                Oe.license.activateTrial(GUserModel).then(() => be.checkLicense());
              } else {
                if (GUserModel === GContainer.DeepLinking.SetPassword) return new Ve().execute(module);
                if (GUserModel === GContainer.DeepLinking.ResetPassword)
                  return new He().execute(module);
                if (GUserModel === GContainer.DeepLinking.PasswordlessToken)
                  return new We().execute(module);
              }
            }
            return Promise.resolve();
          } catch (GUserModel) {
            return Promise.reject(GUserModel);
          }
      }),
      (Je.prototype.openProOffer = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        DataModule_1326.openSubscriptionOffer(exports);
      }),
      (Je.prototype.handlePROFeatureInterruption = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (exports = $.extend({ campaign: "profeature" }, exports)),
          this.isAnonymous()
            ? new GEmbeddedLogin(() => {}).open({
                anonymous: true,
                signup: true,
                animate: true,
                options: exports,
              })
            : this.openProOffer(exports);
      }),
      (Je.prototype.handleShareFilePROFeatureInterruption = function () {
        this.handlePROFeatureInterruption({ shareFile: true });
      }),
      (Je.prototype._applicationStatusEvent = function (GUserModel) {
        GUserModel.status === GApplicationStatusEvent.Status.Ready && (this._ready = true);
      }),
      (Je.prototype.executeWhenReady = function (GUserModel) {
        return new h.default()
          .listen(GApplicationStatusEvent)
          .when(() => this._ready)
          .do(GUserModel);
      }),
      (Je.prototype.isReady = function () {
        return this._ready;
      }),
      (Je.prototype.isInAppPurchaseAllowed = function () {
        return gInAppPurchase.canMakePayments();
      }),
      (Je.prototype.openPaymentDialog = async function (GUserModel) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return (
          this.getAmplitudeHelper().logEvent(
            AppSettings.AmplitudeData.Events.ACCOUNT_CART_SCREEN
          ),
          gInAppPurchase.purchase(GUserModel, module)
        );
      }),
      (Je.prototype.getWebURL = function () {
        return gContainer.getRuntime() === GContainer.Runtime.Browser ||
          gContainer.getRuntime() === GContainer.Runtime.PWA
          ? location.origin
          : gDesigner.getAssetsURL();
      }),
      (Je.prototype.getAssetsURL = function () {
        return "production" === this.getEnv()
          ? AppSettings.prodURL
          : this.isBeta()
          ? AppSettings.betaURL
          : "lts" === this.getEnv()
          ? AppSettings.ltsURL
          : "rc" === this.getEnv()
          ? AppSettings.rcURL
          : "https://app-" + this.getEnv().split(".")[0] + "." + AppSettings.domain + "/";
      }),
      (Je.prototype.getTabByDocument = function (GUserModel) {
        return this.getHeader().getWindowTab(this.getWindows().getWindow(GUserModel));
      }),
      (Je.prototype.getOpacityIncrement = function () {
        return 1;
      }),
      (Je.prototype.registerAdditionalShortcuts = function (GUserModel) {
        var t = GUserModel.getAdditionalShortcuts();
        t &&
          t.length &&
          t.forEach((t) => {
            this.registerShortcut(
              t,
              (t) => this._executeShortcutAction(GUserModel, t),
              false
            );
          });
      }),
      (Je.prototype._executeShortcutAction = function (GUserModel, t) {
        const require = GUserModel.isKeyBoardEventRequiredToExecute() ? [t] : [undefined];
        return this.executeAction(GUserModel.getId(), require, "shortcut");
      }),
      (Je.prototype.getPaste = function () {
        return this._paste;
      }),
      (Je.prototype.getSubscriberUserType = function () {
        return this.getLicense().getSubscriberUserType();
      }),
      (Je.prototype.isLegacyFeature = function (GUserModel) {
        return !!GUserModel && Ie.includes(GUserModel);
      }),
      (Je.prototype.isEnabledProFeatures = function (GUserModel) {
        if (!this.isEnabledSubscriptions()) return true;
        const module = this.getLicense();
        return (
          !(module.isFree() || this.isAnonymous() || module.isGuest()) &&
          (!(!module.isLegacy() || !this.isLegacyFeature(GUserModel)) ||
            (!module.isExpired() && (!module.isOffline() || !module.isOfflinePeriodExpired())))
        );
      }),
      (Je.prototype.isProTooltipNeeded = function (GUserModel) {
        const module = this.getLicense();
        return (
          !(GUserModel && this.isLegacyFeature(GUserModel) && module.isLegacy()) &&
          !(module.isPro() && !module.isExpired())
        );
      }),
      (Je.prototype.preInit = async function (GUserModel) {
        const module = this;
        await (async function () {
          GUserModel || (GUserModel = Oe.isEnabledSubscriptions());
          if (await GUserModel.catch(() => false))
            return (
              (module._enabledSubscriptions = true),
              void gContainer.setProperty(
                "enabled_subscriptions",
                module._enabledSubscriptions
              )
            );
          module._enabledSubscriptions = await gContainer
            .getProperty("enabled_subscriptions")
            .catch(() => false);
        })(),
          await new Promise((GUserModel) => {
            module._applicationManager = new GAppStateManager(GUserModel);
          });
      }),
      (Je.prototype.isEnabledSubscriptions = function () {
        return !!this.isInAppPurchaseAllowed() || !!this._enabledSubscriptions;
      }),
      (Je.prototype.setLicense = function (GUserModel) {
        !GUserModel ||
          (this._license && GUserModel.equals(this._license)) ||
          ((this._license = GUserModel),
          this.hasEventListeners(GEvent_license) && this.trigger(new GEvent_license(this._license))),
          this.updateLicenseInfo();
      }),
      (Je.prototype.updateLicenseInfo = async function () {
        let exports = this._license,
          module = $(".license-info");
        const require = module.data("type");
        (require && require === exports.getLicenseType()) || (module.remove(), (module = null));
      }),
      (Je.prototype.getLicense = function () {
        return navigator.onLine
          ? this._license || _e.newDefaultLicense()
          : _e.newOfflineLicense();
      }),
      (Je.prototype.getLicenseAsync = async function () {
        return (await this.isOfflineAsync())
          ? _e.newOfflineLicense()
          : this._license || _e.newDefaultLicense();
      }),
      (Je.prototype.activateTrialLicense = async function () {
        const exports = async () => {
          this.toggleLoading(true);
          try {
            await Oe.license
              .activateTrial()
              .then(() => gDesigner.requestLicenseUpdate())
              .catch((GUserModel) => ee.alert(Oe.formatError(GUserModel)));
          } finally {
            this.toggleLoading(false);
          }
        };
        gDesigner.isOffline() ? GOfflineDialog.openUnavailableFeature(exports) : exports();
      }),
      (Je.prototype.requestLicenseUpdate = function () {
        let { showProOfferInTrial: exports = AppSettings.LICENSE.UPGRADEABLE } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return (
          GReminderManager.reset("proOfferInTrial", exports ? undefined : gDesigner.now()),
          be.checkLicense()
        );
      }),
      (Je.prototype.now = function () {
        return new Date();
      }),
      (Je.prototype.isOffline = function (GUserModel) {
        if (!navigator.onLine) return (qe = true), (Xe = Date.now()), true;
        const module = GUserModel || AppSettings.OFFLINE_CHECK_MIN_WAIT;
        var n = !!qe;
        if (Date.now() - Xe > module) {
          n = false;
          var _interopRequireDefault = new XMLHttpRequest();
          _interopRequireDefault.onerror = function () {
            console.log("OFFLINE!!!"), (n = true);
          };
          try {
            _interopRequireDefault.open("HEAD", Oe.url + "/connection/test", false),
              (_interopRequireDefault.withCredentials = AppSettings.CONNECTION_TEST_WITH_CREDENTIALS),
              _interopRequireDefault.setRequestHeader("Accept", "text/plain"),
              _interopRequireDefault.setRequestHeader("Content-Type", "text/plain"),
              _interopRequireDefault.send();
          } catch (GUserModel) {
            n = true;
          }
          qe = n;
        }
        return (Xe = Date.now()), !navigator.onLine || n;
      }),
      (Je.prototype.setPaintMode = function (GUserModel) {
        var t = this.getWindows().getActiveWindow();
        if (t) {
          var require = t.getView();
          (require.getViewConfiguration().paintMode = GUserModel),
            GEditor.GPlatform.scheduleFrame(() => {
              require.invalidateAndResetCache(null),
                this.hasEventListeners(GEvent_paintMode) && this.trigger(new GEvent_paintMode(GUserModel));
            });
        }
      }),
      (Je.prototype.isOfflineAsync = async function () {
        if (!navigator.onLine) return (qe = true), (Xe = Date.now()), true;
        var GUserModel = !!qe,
          t = false;
        if (null === Qe && Date.now() - Xe > 3100) {
          var require = this.getHeader();
          require &&
            require.showBusyIcon(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.checking-connectivity")
              )
            );
          try {
            await (() =>
              new Promise((n, _interopRequireDefault) => {
                let GTools;
                GTools = this._initialized ? 3e3 : 2e4;
                var GCore = new XMLHttpRequest();
                (GCore.onerror = (_interopRequireDefault) => {
                  (GUserModel = true), (t = true), n();
                }),
                  (GCore.onload = (_interopRequireDefault) => {
                    (GUserModel = false), (t = true), n();
                  });
                var GEditor = (Qe = setTimeout(() => {
                  GEditor === Qe && (Qe = null), t || ((GUserModel = true), n());
                }, GTools));
                try {
                  GCore.open("HEAD", Oe.url + "/connection/test", true),
                    (GCore.withCredentials = AppSettings.CONNECTION_TEST_WITH_CREDENTIALS),
                    (GCore.timeout = 2e3),
                    GCore.setRequestHeader("Accept", "text/plain"),
                    GCore.setRequestHeader("Content-Type", "text/plain"),
                    GCore.send();
                } catch (_interopRequireDefault) {
                  (GUserModel = true), (t = true), n();
                }
              }))();
          } finally {
            require && require.hideBusyIcon(), (qe = GUserModel);
          }
        }
        return (Xe = Date.now()), !navigator.onLine || GUserModel;
      }),
      (Je.prototype.getLinkerParam = function (GUserModel) {
        const module = window[window.GoogleAnalyticsObject];
        if (module) {
          const n = module.getAll && module.getAll();
          if (n)
            for (let module = 0; module < n.length; module++) {
              let _interopRequireDefault = n[module];
              if (!GUserModel || _interopRequireDefault.get("trackingId") === GUserModel) return _interopRequireDefault.get("linkerParam");
            }
        }
        return null;
      }),
      (Je.prototype.isLocalhost = function () {
        return "localhost" === window.location.hostname;
      }),
      (Je.prototype.getAppBaseUrl = function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        return DataModule_1496.default.getAppBaseUrl(exports);
      }),
      (Je.prototype.setPwaEvent = function (GUserModel) {
        if (!GUserModel || "beforeinstallprompt" !== GUserModel.type) return;
        if (
          ((this._pwaEvent = GUserModel),
          this._waitingPwaDialog &&
            !this._installPwaDialog &&
            (this.showInstallPwaDialog(this._waitingPwaDialogDarkBackground),
            (this._waitingPwaDialog = null),
            (this._waitingPwaDialogDarkBackground = null)),
          window.screen.availWidth < 1024)
        )
          return;
        const module = gDesigner.now().getTime();
        gContainer
          .getProperty(GInstallToDesktopAction.closedInstallPWADialogDatePropName)
          .then((GUserModel) => {
            GUserModel && module - GUserModel < AppSettings.DateAPI.daysToMilliseconds(30)
              ? gContainer.setProperty(
                  GInstallToDesktopAction.installPWA3timesAWeekPropName,
                  JSON.stringify([])
                )
              : gContainer
                  .getProperty(GInstallToDesktopAction.installPWA3timesAWeekPropName)
                  .then((GUserModel) => {
                    let require,
                      _interopRequireDefault = [];
                    if (GUserModel && GUserModel.length)
                      try {
                        require = JSON.parse(GUserModel);
                      } catch (GUserModel) {}
                    require || (require = []);
                    for (let GUserModel = 0, GTools = require.length; GUserModel < GTools; GUserModel++) {
                      const GTools = require[GUserModel];
                      module - GTools < AppSettings.DateAPI.daysToMilliseconds(7) && _interopRequireDefault.push(GTools);
                    }
                    2 === _interopRequireDefault.length &&
                      (gDesigner._ready
                        ? gDesigner.showInstallPwaDialog()
                        : this.executeWhenReady(() => {
                            gDesigner.showInstallPwaDialog();
                          })),
                      _interopRequireDefault.push(module),
                      _interopRequireDefault.length > 2 && (_interopRequireDefault = _interopRequireDefault.slice(-2)),
                      gContainer.setProperty(
                        GInstallToDesktopAction.installPWA3timesAWeekPropName,
                        JSON.stringify(_interopRequireDefault)
                      );
                  });
          });
      }),
      (Je.prototype.showInstallPwaDialog = function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        if (!this._installPwaDialog) {
          this._shouldWaitForPWAEvent()
            ? ((this._waitingPwaDialog = true),
              (this._waitingPwaDialogDarkBackground = exports))
            : ((this._installPwaDialog = new GInstallPwaDialog(exports)),
              this._installPwaDialog.open());
        }
      }),
      (Je.prototype._shouldWaitForPWAEvent = function () {
        return !this.hasPwaEvent() && !!Ke.isSupported();
      }),
      (Je.prototype.closeInstallPwaDialog = function () {
        this._installPwaDialog &&
          (this._installPwaDialog.close(), (this._installPwaDialog = null));
      }),
      (Je.prototype.getPwaEvent = function () {
        return this._pwaEvent;
      }),
      (Je.prototype.hasPwaEvent = function () {
        return !!this._pwaEvent;
      }),
      (Je.prototype.draggableItemIsDragging = function () {
        return this._draggableItemIsDragging;
      }),
      (Je.prototype.setItemDraggingState = function (GUserModel) {
        this._draggableItemIsDragging = GUserModel;
      }),
      (Je.prototype.hasDocuments = function () {
        return !!this.getDocuments().length;
      }),
      (Je.prototype.getAmplitudeHelper = function () {
        return this._amplitudeHelper;
      }),
      (Je.prototype._initAmplitudeProperties = async function () {
        const exports = await this.getUser();
        (this._amplitudeHelper = new AppSettings.AmplitudeHelper(g, {
          userId: null == exports ? undefined : exports.id,
          apiKey: window.AMPLITUDE_API_KEY,
        })),
          new GAmplitudeEventTracker(this._amplitudeHelper);
      }),
      (Je.prototype._updateState = function () {
        var GUserModel, t, n, _interopRequireDefault, GTools, GCore, GEditor;
        const AppSettings = gDesigner.getLicense();
        null === (GUserModel = this._toolbar) ||
          undefined === GUserModel ||
          GUserModel.setEnabled(AppSettings.canAccessFreemium()),
          null === (t = this._leftSidebars) ||
            undefined === t ||
            t.setEnabled(this._leftSidebars, AppSettings.canAccessFreemium()),
          null === (n = this._rightSidebars) ||
            undefined === n ||
            n.setEnabled(this._rightSidebars, AppSettings.canAccessFreemium()),
          null === (_interopRequireDefault = this._banner) ||
            undefined === _interopRequireDefault ||
            _interopRequireDefault.setEnabled(AppSettings.canAccessFreemium()),
          null === (GTools = this._overlay) ||
            undefined === GTools ||
            GTools.setEnabled(AppSettings.canAccessFreemium()),
          null === (GCore = this._mainMenu) ||
            undefined === GCore ||
            GCore.setEnabled(AppSettings.canAccessFreemium()),
          null === (GEditor = this._header) ||
            undefined === GEditor ||
            GEditor.setWindowTabEnable(AppSettings.canAccessFreemium()),
          this.relayout();
      }),
      (Je.prototype.isUserActivelyUsingApp = function () {
        var GUserModel;
        const module =
            null === (GUserModel = this.getActiveDocument()) ||
            undefined === GUserModel ||
            null === (GUserModel = GUserModel.getEditor()) ||
            undefined === GUserModel
              ? undefined
              : GUserModel.getUndoStates(),
          require = (null == module ? undefined : module.length) && module[module.length - 1];
        return !!require && Date.now() - require.createdAt < AppSettings2.ACTIVE_USAGE_IDLE_TIME;
      }),
      (exports.exports = Je);
  }