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
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      l = require(357) /* module_357 */,
      c = _interopRequireDefault(require(1492) /* module_1492 */),
      d = require(1246) /* Exports_GPersona */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      p = require(1247) /* module_1247 */,
      g = (function (e, t) {
        if ("function" == typeof WeakMap)
          var require = new WeakMap(),
            _interopRequireDefault = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var GTools,
            GCore,
            GEditor = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return GEditor;
          if ((GTools = t ? _interopRequireDefault : require)) {
            if (GTools.has(e)) return GTools.get(e);
            GTools.set(e, GEditor);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((GCore =
                (GTools = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (GCore.get || GCore.set)
                ? GTools(GEditor, t, GCore)
                : (GEditor[t] = e[t]));
          return GEditor;
        })(e, t);
      })(require(1739) /* module_1739 */),
      h = (_interopRequireDefault(require(1249) /* module_1249 */), _interopRequireDefault(require(1155) /* module_1155 */)),
      f = _interopRequireDefault(require(556) /* Item */),
      m = _interopRequireDefault(require(734) /* module_734 */),
      y = _interopRequireDefault(require(1494) /* module_1494 */),
      v = _interopRequireDefault(require(1496) /* module_1496 */),
      _ = _interopRequireDefault(require(1497) /* module_1497 */),
      b = _interopRequireDefault(require(1498) /* module_1498 */);
    var w = require(163) /* module_163 */,
      GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      GMenuOpenEvent = require(804) /* GMenuOpenEvent */,
      E = require(1500) /* module_1500 */,
      A = require(1521) /* module_1521 */,
      GInfo = require(1522) /* GInfo */,
      GOutlineSidebar = require(1260) /* GOutlineSidebar */,
      GInspectorSidebar = require(864) /* GInspectorSidebar */,
      GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
      L = require(1539) /* module_1539 */,
      I = require(395) /* module_395 */;
    require(1540) /* module_1540 */;
    var GToolbar = require(1541) /* GToolbar */,
      O = require(603) /* WindowEvent */,
      F = require(863) /* module_863 */,
      GDimensionProperties = require(1294) /* GDimensionProperties */,
      GSettingChangedEvent = require(135) /* GSettingChangedEvent */,
      GSwatchesChangedEvent = require(1151) /* GSwatchesChangedEvent */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GNewWindowAction = require(1296) /* GNewWindowAction */,
      GInstallToDesktopAction = require(1172) /* GInstallToDesktopAction */,
      GToggleSidebarAction = require(1170) /* GToggleSidebarAction */,
      GOutlineViewAction = require(1297) /* GOutlineViewAction */,
      H = (require(1298) /* GUseCouponAction */, require(255) /* barrel_sidebars */),
      barrel_editor_actions = require(590) /* barrel_editor_actions */,
      z = require(1544) /* module_1544 */,
      q = require(1560) /* module_1560 */,
      GInstallPwaDialog = require(1562) /* GInstallPwaDialog */,
      GContextMenu = require(1303) /* GContextMenu */;
    require(1563) /* module_1563 */;
    var Q = require(119) /* module_119 */,
      J = require(220) /* Item */,
      GContainer = require(85) /* GContainer */,
      ee = require(44) /* GSystemDialog */,
      te = require(1276) /* module_1276 */,
      ne = require(1564) /* module_1564 */,
      oe = require(1250) /* module_1250 */,
      GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
      URIListHandler = require(1313) /* URIListHandler */,
      re = require(860) /* module_860 */,
      se = require(441) /* module_441 */,
      le = require(292) /* module_292 */,
      ce = require(805) /* module_805 */,
      de = require(1321) /* module_1321 */,
      ue = require(392) /* module_392 */,
      pe = require(868) /* module_868 */,
      ge = require(1322) /* module_1322 */,
      he = require(1568) /* module_1568 */,
      fe = require(1569) /* module_1569 */,
      me = require(1571) /* module_1571 */,
      ye = require(1165) /* module_1165 */,
      ve = require(1572) /* module_1572 */,
      _e = require(846) /* module_846 */,
      be = require(337) /* stub_requires_1098 */,
      we = require(1325) /* module_1325 */,
      Ce = require(785) /* module_785 */,
      GOfflineDialog = require(256) /* GOfflineDialog */,
      Se = require(604) /* module_604 */,
      Ee = require(1326) /* module_1326 */,
      Ae = require(1328) /* module_1328 */,
      GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
      Ge = require(1188) /* module_1188 */,
      GSaveAction = require(447) /* GSaveAction */,
      De = require(86) /* module_86 */,
      Le = (require(18) /* MenuItemBuilder */, require(442) /* module_442 */);
    const {
      defaultLegacyUserSettings: { features: Ie },
    } = AppSettings.defaultUserSettings;
    var AppSettings2 = require(10) /* AppSettings */;
    const { gApi: Oe } = AppSettings2;
    var Fe = require(388) /* Item */,
      Re = require(1580) /* module_1580 */;
    const Me = require(1581) /* module_1581 */,
      Ne = require(1584) /* module_1584 */;
    var Be = require(1587) /* module_1587 */;
    require(607) /* module_607 */;
    const CollaborationMergeUtils2 = require(40) /* CollaborationMergeUtils */,
      $e = require(177) /* module_177 */,
      je = require(1338) /* module_1338 */,
      Ke = require(1173) /* module_1173 */,
      Ve = (require(1591) /* module_1591 */, require(1592) /* module_1592 */),
      He = require(1593) /* module_1593 */,
      We = require(1594) /* module_1594 */;
    var ze = require(1595) /* module_1595 */;
    require(1596) /* module_1596 */,
      ze.addKeycodes({ 173: "-" }),
      ze.addKeycodes({ 187: "=" }),
      ze.addKeycodes({ 61: "=" });
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
        (this._documentTouchHandler = new Me(document)),
        (this._editorTouchHandler = new Ne()),
        he.clearSingleton(),
        (this._cloudCommunicationManager = new he(this)),
        (this._cursorManager = new c.default()),
        document.addEventListener("gesturechange", function (e) {
          e.stopPropagation();
        }),
        window.addEventListener(
          "dragover",
          (e) => {
            e.preventDefault();
          },
          false
        ),
        window.addEventListener(
          "drop",
          (e) => {
            e.preventDefault();
            var t = this.getWindows().getActiveWindow(),
              n = t && t.getView();
            n && n.handleDropEvent(e);
          },
          false
        ),
        window.addEventListener(
          "wheel",
          (e) => {
            (GEditor.GPlatform.modifiers.ctrlKey || GEditor.GPlatform.modifiers.metaKey) &&
              e.preventDefault();
          },
          { passive: false }
        ),
        window.addEventListener("gesturestart", (e) => {
          e.preventDefault();
        }),
        window.addEventListener("gestureend", (e) => {
          e.preventDefault();
        }),
        window.addEventListener("gesturechange", (e) => {
          e.preventDefault();
          var t = e.scale;
          t > 1 ? (t *= -1) : (t = 2 - t);
          var n = new WheelEvent("wheel", {
              deltaY: t,
              clientX: e.clientX,
              clientY: e.clientY,
              ctrlKey: true,
            }),
            _interopRequireDefault = this.getWindows() && this.getWindows().getActiveWindow(),
            GTools = _interopRequireDefault && _interopRequireDefault.getView() && _interopRequireDefault.getView()._htmlElement;
          GTools && GTools.dispatchEvent(n);
        }),
        document.addEventListener(
          "keydown",
          function (e) {
            if (
              (document.activeElement &&
                $(document.activeElement).is(":button") &&
                (13 == e.keyCode || 32 == e.keyCode) &&
                (e.preventDefault(), document.activeElement.blur()),
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
          function (e) {
            return !$(e.target).is(":editable") ||
              this.propertyPanelHasContextMenu(e)
              ? (e.preventDefault(), false)
              : (e.stopPropagation(), true);
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
        this.addEventListener(le, this._userLoggedEvent, this),
        this.addEventListener(ce, this._userPropertiesChangedEvent, this),
        this.addEventListener(se, this._licenseChangedEvent, this),
        this.addEventListener(
          Ge.BeforeInstallUpdate,
          this._beforeInstallUpdate,
          this
        ),
        this.addEventListener(GApplicationStatusEvent, this._applicationStatusEvent, this),
        this.addEventListener(ue, this._applicationStateChangedEvent, this),
        this.addEventListener(pe, this._shareEvent, this),
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
        (this._settings[te.AUTO_SAVE_SETTING] = false),
        (this._settings[te.AUTO_SAVE_INTERVAL_SETTING] =
          AppSettings.AUTOSAVE_INTERVAL_DEFAULT),
        (this._settings.notifications_disabled = false),
        (this._settings.touch = false),
        (this._settings[I.getSettingNameForSidebar(I.Orientation.Left)] = true),
        (this._settings[I.getSettingNameForSidebar(I.Orientation.Right)] = true),
        $(document).on("networkAvailable", () => {
          this._initialized && gDesigner.updateRecentDocumentsAction();
        }),
        (this._paste = new URIListHandler());
      const exports = (e) => {
        this.hasEventListeners(GNetworkAvailabilityChangedEvent) && this.trigger(new GNetworkAvailabilityChangedEvent(e));
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
      (Je.prototype._persona = d.GPersona.GraphicDesign),
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
      (Je.prototype.propertyPanelHasContextMenu = function (e) {
        var t = false;
        return (
          e.composedPath &&
            e.composedPath() &&
            e.path.forEach((e) => {
              $(e).hasClass("properties-panel") &&
                (t = !!$(e).data("contextmenu"));
            }),
          t
        );
      }),
      (Je.prototype.getMouseOverContext = function () {
        return this._mouseOverContext;
      }),
      (Je.prototype.setMouseOverContext = function (e, t, n) {
        this._mouseOverContext = { context: e, prevEvt: t, contextCallback: n };
      }),
      (Je.prototype._pwaEvent = window.__pwaEvent__ || null),
      (Je.prototype.isAnonymous = function () {
        return this._anonymous;
      }),
      (Je.prototype.toggleLoading = function (e) {
        e
          ? $("body").addClass("g-loading")
          : $("body").removeClass("g-loading");
      }),
      (Je.prototype.setSupportedBrowsers = function (e) {
        this._supportedBrowsers = e;
      }),
      (Je.prototype.setSupportedTabletBrowsers = function (e) {
        this._supportedTabletBrowsers = e;
      }),
      (Je.prototype._initBrowserSupported = function (e) {
        var t = (t) =>
          t.some((t) =>
            t instanceof Object
              ? GCore.GSystem.operatingSystem == t.operatingSystem &&
                e == t.platform
              : e === t
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
      (Je.prototype.setUTM = function (e) {
        this._utm = e;
      }),
      (Je.prototype.getUTM = function () {
        return this._utm;
      }),
      (Je.prototype.getTranslationManager = function () {
        return this._translationManager;
      }),
      (Je.prototype.activatePersona = function (e) {
        var t = this._persona;
        t !== e &&
          ((this._persona = e),
          this.hasEventListeners(oe) && this.trigger(new oe(t, this._persona)));
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
      (Je.prototype.isPartVisible = function (e) {
        return "none" !== this.getPart(e).css("display");
      }),
      (Je.prototype.setPartVisible = function (e, t, n) {
        t != this.isPartVisible(e) &&
          (this.getPart(e).css(
            "display",
            t ? (n || "" === n ? n : "block") : "none"
          ),
          this.relayout());
      }),
      (Je.prototype.getPart = function (e) {
        return this._mainframe.find("#" + e.id);
      }),
      (Je.prototype.getActions = function () {
        return this._actions;
      }),
      (Je.prototype.getAction = function (e) {
        return this._actionsMap[e] || null;
      }),
      (Je.prototype.addMenu = function (e, t, n, _interopRequireDefault, GTools) {
        e = e || this._mainMenu;
        var GCore = new GMenu2(GMenu2.Type.Menu, GMenu);
        return (
          GCore.setCaption(t),
          GCore.setIcon(_interopRequireDefault),
          e.addItem(GCore),
          n && GCore.getMenu().addEventListener(GMenuOpenEvent, n),
          GTools && GCore.addEventListener(GMenu2.UpdateEvent, () => GTools(GCore)),
          GCore.getMenu()
        );
      }),
      (Je.prototype.addMenuSeparator = function (e, t) {
        var n = new GMenu2(GMenu2.Type.Divider, null, null, t);
        return e.addItem(n), n;
      }),
      (Je.prototype.addMenuItem = function (e, t, n, _interopRequireDefault, GTools, GCore, GEditor, AppSettings, l, c, d) {
        var CollaborationMergeUtils = new GMenu2(GMenu2.Type.Item);
        return (
          GCore && CollaborationMergeUtils.addEventListener(GMenu2.ActivateEvent, GCore),
          GTools &&
            (gDesigner.registerShortcut(
              GTools,
              function (e) {
                return GCore("shortcut", e);
              }.bind(this),
              GEditor
            ),
            CollaborationMergeUtils.setShortcutHint(GTools)),
          CollaborationMergeUtils.setIcon(n),
          CollaborationMergeUtils.setPro(AppSettings),
          CollaborationMergeUtils.setNoHover(d),
          c && CollaborationMergeUtils.addClass(c),
          this.updateMenuItem(CollaborationMergeUtils, t, true, false),
          e.addItem(CollaborationMergeUtils),
          l && CollaborationMergeUtils.setAction(l),
          CollaborationMergeUtils
        );
      }),
      (Je.prototype.updateMenuItem = function (e, t, n, _interopRequireDefault, GTools, GCore) {
        e.setCaption(t), e.setEnabled(n), e.setChecked(_interopRequireDefault), e.setPro(!!GTools, GCore);
      }),
      (Je.prototype.removeMenuItem = function (e, t) {
        e.removeItem(e.indexOf(t));
      }),
      (Je.prototype.getClipboardMimeTypes = function () {
        return this._clipboardMimeTypes
          ? Object.keys(this._clipboardMimeTypes)
          : null;
      }),
      (Je.prototype.getClipboardContent = function (e) {
        return this._clipboardMimeTypes &&
          this._clipboardMimeTypes.hasOwnProperty(e)
          ? this._clipboardMimeTypes[e]
          : null;
      }),
      (Je.prototype.setClipboardContent = function (e, t) {
        this._clipboardMimeTypes[e] = t;
      }),
      (Je.prototype.getSetting = function (e, t) {
        return this._settings.hasOwnProperty(e) ? this._settings[e] : t;
      }),
      (Je.prototype.setSetting = function (e, t) {
        if (this._settingsLoaded) {
          for (
            var require = e instanceof Array ? e : [e],
              _interopRequireDefault = e instanceof Array ? t : [t],
              GTools = false,
              GEditor = 0;
            GEditor < require.length;
            ++GEditor
          ) {
            (e = require[GEditor]), (t = _interopRequireDefault[GEditor]);
            if (
              !this._settings.hasOwnProperty(e) ||
              !GCore.GUtil.equals(this._settings[e], t, true)
            ) {
              var AppSettings = this._settings[e];
              (this._settings[e] = t),
                this.trigger(new GSettingChangedEvent(e, AppSettings || undefined, t)),
                (GTools = true);
            }
          }
          if (GTools)
            try {
              gContainer.setProperty("designer.settings", this._settings);
            } catch (e) {}
          return GTools;
        }
      }),
      (Je.prototype.getSwatches = function (e) {
        if (e.startsWith("document") && this.getActiveDocument()) {
          var module = this.getActiveDocument().getScene().getSwatches(),
            require = [];
          if (module)
            for (var _interopRequireDefault = module.getFirstChild(); null !== _interopRequireDefault; _interopRequireDefault = _interopRequireDefault.getNext()) {
              var GTools = GCore.GPattern.serialize(_interopRequireDefault.getProperty("_pt"));
              (((GTools.startsWith("C#") || GTools.startsWith("Y#")) &&
                "document" === e) ||
                (GTools.startsWith("L#") && "document-linear-gradient" === e) ||
                (GTools.startsWith("R#") && "document-radial-gradient" === e) ||
                (GTools.startsWith("A#") && "document-angular-gradient" === e) ||
                (GTools.startsWith("T#") && "document-texture-pattern" === e) ||
                (GTools.startsWith("N#") && "document-noise-pattern" === e)) &&
                require.push(_interopRequireDefault);
            }
          return require;
        }
        return this._swatches[e];
      }),
      (Je.prototype.setSwatches = function (e, t, n) {
        if (
          (!e.startsWith("document") || this.getActiveDocument()) &&
          (e.startsWith("document") || this._swatches.hasOwnProperty(e))
        ) {
          e.startsWith("document") || (this._swatches[e] = t);
          var _interopRequireDefault = e.startsWith("document"),
            GTools = e.startsWith("global"),
            GEditor = this.getActiveDocument().getScene();
          if (_interopRequireDefault) {
            if (n) GEditor.getSwatches().clearChildren();
            else {
              for (
                var AppSettings = this.getSwatches(e),
                  l = [],
                  c = GEditor.getSwatches().getFirstChild();
                null !== c;
                c = c.getNext()
              )
                for (var d = 0; d < AppSettings.length; ++d)
                  GCore.GUtil.equals(c, AppSettings[d]) && l.push(c);
              for (d = 0; d < l.length; ++d) GEditor.getSwatches().removeChild(l[d]);
            }
            for (d = 0; d < t.length; ++d) GEditor.getSwatches().appendChild(t[d]);
          } else if (GTools) {
            var CollaborationMergeUtils = this._swatches.global;
            CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = (CollaborationMergeUtils = CollaborationMergeUtils.concat(
              this._swatches["global-linear-gradient"]
            )).concat(this._swatches["global-angular-gradient"])).concat(
              this._swatches["global-radial-gradient"]
            )).concat(this._swatches["global-texture-pattern"])).concat(
              this._swatches["global-noise-pattern"]
            );
            var p = [];
            for (d = 0; d < CollaborationMergeUtils.length; ++d) p.push(GCore.GNode.serialize(CollaborationMergeUtils[d]));
            gContainer.setProperty("swatches", p);
          }
          this.trigger(new GSwatchesChangedEvent(e));
        }
      }),
      (Je.prototype.getAllSwatches = function (e) {
        var t = [];
        if (e.startsWith("document"))
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
        var e = this.createScene();
        e.getActivePage().setProperties(
          ["bck", "w", "h"],
          [GCore.GRGBColor.WHITE, 0, 0]
        );
        var t = new w(e);
        return this.addDocument(t), t;
      }),
      (Je.prototype.createScene = function (e) {
        var t = new GCore.GScene(this.getWorkspace(), e);
        return (
          undefined !== GTools.GEditorOptions.scaleBorderWidth &&
            t.setBorderScale(GTools.GEditorOptions.scaleBorderWidth),
          undefined !== GTools.GEditorOptions.scaleCorners &&
            t.setCornersScale(GTools.GEditorOptions.scaleCorners),
          t
        );
      }),
      (Je.prototype.createNewDocumentDialog = function () {
        this._newDocumentDialog = new z();
      }),
      (Je.prototype.openNewDocumentDialog = function (e) {
        const module = this.getApplicationManager();
        (module.isCreatingNewDocumentEnabled() || module.isOpenFromCloudEnabled()) &&
          (this._newDocumentDialog || (this._newDocumentDialog = new z()),
          0 === $(".g-new-document-dialog").length
            ? this._newDocumentDialog.open(e)
            : e &&
              e.openFromCloud &&
              this._newDocumentDialog
                .getDialogElement()
                .find(".option.cloud-option")
                .click());
      }),
      (Je.prototype.openCloudSaveDialog = function (e, t, n, _interopRequireDefault, GTools) {
        0 === $(".g-new-document-dialog").length &&
          (this._newDocumentDialog || (this._newDocumentDialog = new z()),
          this._newDocumentDialog.saveCloudFile(e, t, n, _interopRequireDefault, GTools));
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
          const e = this._user || { name: "", last_name: "", anonymous: "" };
          this._userNameConfigDialog = new q(e.name, e.last_name, e.anonymous);
        }
        exports &&
          0 === $(".g-username-config-dialog").length &&
          this._userNameConfigDialog.open();
      }),
      (Je.prototype.closeNewDocumentDialog = function () {
        this._newDocumentDialog && this._newDocumentDialog.close();
      }),
      (Je.prototype.addDocument = function (e, t) {
        undefined !== t
          ? this._documents.splice(t, 0, e)
          : this._documents.push(e),
          this.hasEventListeners(GDocumentEvent) && this.trigger(new GDocumentEvent(GDocumentEvent.Type.Added, e)),
          this._windows.addWindow(e, false, t);
      }),
      (Je.prototype.notifyDocumentModified = function (e) {
        this.hasEventListeners(GDocumentEvent) &&
          this.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, e, null));
      }),
      (Je.prototype._isNativeDesign = function (e) {
        return e === AppSettings.FILE_FORMATS.find((e) => e.default).ext.toUpperCase();
      }),
      (Je.prototype.isInitialized = function () {
        return this._initialized;
      }),
      (Je.prototype._canOpenDocument = function (e) {
        if (!this._initialized) return false;
        if (!this.isEnabledProFeatures()) {
          let t = w.FileTypes.find(
            (t) =>
              t.ext.toUpperCase() === (e.getExtension() || "").toUpperCase()
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
      (Je.prototype._processOpenDocument = function (e, t) {
        const require = e.getExtension(),
          _interopRequireDefault = this._isNativeDesign(require),
          GTools = new w(_interopRequireDefault ? e : null);
        if (GTools.isExtensionAvailableForLoading(require))
          return (
            this.addDocument(GTools, t),
            (GTools.fileExtension = require),
            GTools.load(e),
            this.trigger(new GDocumentEvent(GDocumentEvent.Type.Opened, GTools)),
            GTools
          );
        var GEditor = !!w.FileTypes.find(
          (e) =>
            e.ext.toUpperCase() === require.toUpperCase() && "image" === e.category
        )
          ? "text.suggestion-open-image"
          : "text.unsupported-file-extension";
        return ee.alert(GCore.GLocale.get(new GCore.GLocaleKey("GDocument", GEditor))), null;
      }),
      (Je.prototype.openDocumentWithReload = function (e, t) {
        if (this._canOpenDocument(e)) return this._processOpenDocument(e, t);
      }),
      (Je.prototype.openDocument = function (e, t) {
        if (!this._canOpenDocument(e)) return;
        if (e && (0, p.shouldShowExternalFileError)(e)) throw new m.default();
        const require = e.getExtension();
        if (this._isNativeDesign(require)) {
          const t = e.getUniqueId();
          if (null != t)
            for (var _interopRequireDefault = 0; _interopRequireDefault < this._documents.length; ++_interopRequireDefault) {
              const n = this._documents[_interopRequireDefault];
              if (
                n.getStorageItem() &&
                n.getStorageItem().getUniqueId() === t &&
                (!n.getStorageItem().getVersionId ||
                  !e.getVersionId ||
                  n.getStorageItem().getVersionId() === e.getVersionId())
              )
                return this.activateDocument(n), n;
            }
        }
        return this._processOpenDocument(e, t);
      }),
      (Je.prototype.addToRecentFiles = function (e) {
        function module(t, n) {
          let _interopRequireDefault =
            arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          gContainer.getProperty(t).then(function (GTools) {
            _interopRequireDefault && GTools && (GTools = JSON.parse(CollaborationMergeUtils2.base64StringToString(GTools))),
              GTools || (GTools = []);
            for (var GCore = 0; GCore < GTools.length; ++GCore) {
              let t = false;
              if (gContainer.getRuntime() === GContainer.Runtime.Electron)
                t = GTools[GCore] === n(e);
              else {
                let n = JSON.parse(GTools[GCore]),
                  _interopRequireDefault = e.getFile();
                t = n.file.id === _interopRequireDefault.id;
              }
              if (t) {
                GTools.splice(GCore, 1);
                break;
              }
            }
            GTools.unshift(n(e)),
              GTools.splice(10, GTools.length),
              _interopRequireDefault && (GTools = CollaborationMergeUtils2.stringToBase64String(JSON.stringify(GTools))),
              gContainer.setProperty(t, GTools),
              gDesigner.updateRecentDocumentsAction();
          });
        }
        e &&
          (e instanceof J.Item
            ? gDesigner.updateRecentDocumentsAction()
            : gContainer.getRuntime() === GContainer.Runtime.Electron
            ? module("recent_documents", (e) => e.getUniqueId())
            : e instanceof Fe.Item &&
              gDesigner.getUser().then((e) => {
                module(
                  "recent_external_".concat(e.getUID()),
                  (e) => {
                    const module =
                      e instanceof f.default.Item ? "googledrive" : null;
                    return JSON.stringify({ type: module, file: e.getFile() });
                  },
                  true
                );
              }));
      }),
      (Je.prototype.activateDocument = function (e, t) {
        if (e != this._activeDocument) {
          if (this._activeDocument) {
            var require = this._activeDocument;
            (this._activeDocument = null),
              require.deactivate(),
              this.hasEventListeners(GDocumentEvent) &&
                this.trigger(new GDocumentEvent(GDocumentEvent.Type.Deactivated, require)),
              require.getActiveWindow() === this._windows.getActiveWindow() &&
                this._windows.activateWindow(null);
          }
          e &&
            ((this._activeDocument = e),
            t || this._windows.activateWindow(e.getActiveWindow()),
            e.activate(),
            this.hasEventListeners(GDocumentEvent) &&
              this.trigger(new GDocumentEvent(GDocumentEvent.Type.Activated, e)));
        }
      }),
      (Je.prototype.replaceDocument = function (e, t, n) {
        var _interopRequireDefault = this._documents.indexOf(e);
        _interopRequireDefault < 0 || (this.addDocument(t, _interopRequireDefault), this.removeDocument(e, null, n));
      }),
      (Je.prototype.removeDocument = function (e, t, n) {
        var _interopRequireDefault = this._documents.indexOf(e);
        if (!(_interopRequireDefault < 0)) {
          var GTools = e.getWindows();
          if (GTools.length) {
            var GCore = function () {
              GTools.length > 0
                ? this._windows.removeWindow(GTools[0], GCore, n)
                : this.removeDocument(e, t);
            }.bind(this);
            GCore();
          } else
            e === this.getActiveDocument() && this.activateDocument(null),
              e.release(),
              this._documents.splice(_interopRequireDefault, 1),
              t && t(),
              this.hasEventListeners(GDocumentEvent) &&
                this.trigger(new GDocumentEvent(GDocumentEvent.Type.Removed, e)),
              0 === this._documents.length &&
                this.handleWelcomeScreenOpenWithUserPermissions();
        }
      }),
      (Je.prototype.handleWelcomeScreenOpenWithUserPermissions = function () {
        let exports = {
          closable: this.getApplicationManager().isCreatingNewDocumentEnabled(),
          showCloudOptions: true,
          closeCallback: (e) => {
            e && gDesigner.newInfiniteDocument();
          },
        };
        var t;
        this.getLicense().canAccessFreemium()
          ? this.openNewDocumentDialog(exports)
          : (this._newDocumentDialog || (this._newDocumentDialog = new z()),
            null === (t = this._newDocumentDialog) ||
              undefined === t ||
              t._newDocumentCustomSize());
      }),
      (Je.prototype.canExecuteAction = function (e, t) {
        var n = this.getAction(e);
        return !!n && n.isAvailable() && n.isEnabled.apply(n, t);
      }),
      (Je.prototype.canActivateTool = function (e) {
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
          return GTools === e && (require.includes(GCore) || _interopRequireDefault.includes(GEditor));
        });
      }),
      (Je.prototype.executeAction = function (e, t, n, _interopRequireDefault) {
        var GTools = this.getAction(e);
        if (!GTools)
          throw new Error(
            "Unable to execute action '" + e + "' - not registered."
          );
        var GCore = this._windows.getActiveWindow();
        if (!GCore || !GCore.isPreview()) {
          if (GTools.isAvailable() && GTools.isEnabled.apply(GTools, t)) {
            if (e === GSaveAction.ID)
              this.getPart(F.Toolbar)
                .find(".toolbar-button[data-action='" + e + "']")
                .find("button")
                .toggleClass("g-disabled", true);
            var GEditor = GTools.execute;
            if (("shortcut" === n && (GEditor = GTools.executeFromShortcut), !_interopRequireDefault)) {
              var AppSettings = GTools.isPro()
                ? gDesigner.isEnabledProFeatures(e)
                  ? "execute"
                  : "nonprotriespro"
                : "execute";
              this.stats(
                "action_" + AppSettings + "_" + (n || "button"),
                GTools.statsValue() || e
              );
            }
            var l = GEditor.apply(GTools, t);
            if (undefined !== l) return l;
          }
          return true;
        }
      }),
      (Je.prototype.setOpenSansDefaultFont = function () {
        var e = this._workspace.getFontManager();
        e.setDefaultFont(
          e.getFont("Open Sans", GCore.GFont.Style.Normal, GCore.GFont.Weight.Regular)
        ),
          e.setDefaultFontStyles([GCore.GFont.Style.Normal, GCore.GFont.Style.Italic]),
          e.setDefaultFontWeights([300, 400, 600, 700, 800]);
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
      (Je.prototype.setTouchEnabled = function (e) {
        this.setSetting("touch", !!e);
      }),
      (Je.prototype.init = function () {
        (this._shareManager = new ge()),
          (this._realtimeManager = new me()),
          (this._fileReviewManager = new ye()),
          (this._annotationsManager = new ve()),
          gContainer.registerFontProviders(),
          H.getInstance().init();
        var e = this._workspace.getFontManager();
        if (
          (e.addEventListener(
            GCore.GFontManager.ResolveFontEvent,
            this._fontManagerResolveFontEvent,
            this
          ),
          e.addEventListener(
            GCore.GFontManager.QueryFontFamilyEvent,
            this._fontManagerQueryFontFamilyEvent,
            this
          ),
          this.setOpenSansDefaultFont(),
          GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.Chinese ||
            GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.ChineseTaiwan)
        )
          H.getProviderInstance(barrel_editor_actions).hasFont("Noto Sans CS") &&
            (e.setDefaultFont(
              e.getFont(
                "Noto Sans CS",
                GCore.GFont.Style.Normal,
                GCore.GFont.Weight.Regular
              )
            ),
            e.setDefaultFontStyles([GCore.GFont.Style.Normal]),
            e.setDefaultFontWeights([100, 200, 300, 400, 500, 600, 800]));
        else if (GCore.GLocale.getLanguage() === GCore.GLocaleLanguage.Japanese) {
          H.getProviderInstance(barrel_editor_actions).hasFont("Noto Sans CJK JP") &&
            (e.setDefaultFont(
              e.getFont(
                "Noto Sans CJK JP",
                GCore.GFont.Style.Normal,
                GCore.GFont.Weight.Regular
              )
            ),
            e.setDefaultFontStyles([GCore.GFont.Style.Normal]),
            e.setDefaultFontWeights([400, 700]));
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
          gContainer.getProperty(GDimensionProperties._keepRatioName).then((e) => {
            (e = e || false),
              (GTools.GEditorOptions.preserveAspectRatio = e),
              (GTools.GEditorOptions.allowTextRatioPreservation = e);
          }),
          (GCore.GSceneOptions.scaleLabel = false),
          (GCore.GSceneOptions.defaultBorderPositionForLines = true),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadow = 4),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadowOffsetY = 2),
          (GTools.GEditorPaintConfiguration.prototype.pageDecoration.shadowBackground =
            "rgba(0,0,0,0.25)"),
          gContainer.getProperty(GOutlineViewAction.StoragePropertyName).then((e) => {
            e &&
              this.updateGEditorSceneConfigurationPaintMode(
                GCore.GScenePaintConfiguration.PaintMode.Outline
              );
          }),
          (GTools.GGridGuide.MIN_CELL_SPACE = 5);
        var t = $("body");
        t.attr("data-long-press-delay", AppSettings.LONG_PRESS_TIME_OUT),
          t.on("long-press", (e) => {
            const t = jQuery.Event("contextmenu", {
              pageX: e.detail.clientX,
              pageY: e.detail.clientY,
              clientX: e.detail.clientX,
              clientY: e.detail.clientY,
            });
            $(e.target).trigger(t);
          }),
          (this._mainframe = $("<div></div>")
            .attr("id", "mainframe")
            .css("display", "none")
            .prependTo(t));
        var n = (this._frame = $("<div></div>").appendTo(this._mainframe)),
          _interopRequireDefault = $("<div></div>").attr("id", F.Windows.id).appendTo(n);
        this._windows = new O(_interopRequireDefault);
        var c = $("<div></div>").attr("id", F.Info.id).appendTo(n);
        this._info = new GInfo(c);
        var d = $("<div></div>").attr("id", F.Header.id).appendTo(n);
        this._header = new E(d);
        var p = $("<div></div>").attr("id", F.Toolbar.id).appendTo(n);
        this._toolbar = new GToolbar(p);
        var g = $("<div></div>").attr("id", F.Banner.id).appendTo(n);
        this._banner = new _.default(g);
        var h = $("<div></div>").attr("id", F.Overlay.id).appendTo(n);
        this._overlay = new b.default(h);
        var f = $("<div></div>").attr("id", F.Panels.id).appendTo(n),
          m = $("<div></div>").attr("id", F.Footer.id).appendTo(n);
        (this._footer = new A(m)), (this._panels = new L(f));
        var y = $("<div></div>")
          .attr("id", F.LeftSidebars.id)
          .on("mousedown", () => {
            this._toggleSideBarAndAssistBarZIndex(true, false, false, false);
          })
          .appendTo(n);
        this._leftSidebars = new I(y, I.Orientation.Left, n);
        var v = $("<div></div>")
          .attr("id", F.RightSidebars.id)
          .on("mousedown", () => {
            this._toggleSideBarAndAssistBarZIndex(false, true, false, false);
          })
          .appendTo(n);
        (this._rightSidebars = new I(v, I.Orientation.Right, n)),
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
          (e, t) => (e.getId() === GNewWindowAction.ID && (GMenu = t), e)
        );
        var GMenu2 = gravit.sidebars.map((e) => new GToggleSidebarAction(e));
        if (
          (Array.prototype.splice.apply(this._actions, [GMenu, 0].concat(GMenu2)),
          this._createMainMenu(),
          gravit.tools)
        ) {
          for (
            var GMenuOpenEvent = (e) => {
                let { tool: t, pro: n = false, feature: _interopRequireDefault } = e;
                return () =>
                  !(!this.isEnabledProFeatures(_interopRequireDefault) && n) &&
                  !!this.canActivateTool(t, true) &&
                  (gDesigner.stats(
                    "tools_activate_shortcut",
                    GToolbar.getToolName(t) || "unknown_tool"
                  ),
                  this.getToolManager().tempToolKeyActivate(t));
              },
              GSettingChangedEvent = (e) => {
                let { tool: t, pro: n = false, feature: _interopRequireDefault } = e;
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
                z = GSettingChangedEvent(GDocumentEvent);
              GDocumentEvent.key && this.registerShortcut([GDocumentEvent.key], GInstallToDesktopAction, false, z),
                Array.isArray(GDocumentEvent.shortcuts) &&
                  GDocumentEvent.shortcuts.forEach((e) => {
                    this.registerShortcut(e, GInstallToDesktopAction, false, z);
                  });
            }
          }
          this.getToolManager().activateTool(gravit.tools[0].tool);
          var q = function () {
            var e = this.getToolManager();
            return (
              this.getRightSidebars().getActiveSidebar() == GAnnotationsSidebar.ID ||
                ((e.getActiveTool() &&
                  e.getActiveTool() instanceof GTools.GSelectTool) ||
                  e.activateTool(GTools.GPointerTool),
                e.getActiveTool() instanceof GTools.GSelectTool &&
                  e.getActiveTool().getEditMode() !==
                    GTools.GSelectTool.EditMode.Transform &&
                  e
                    .getActiveTool()
                    .setEditMode(GTools.GSelectTool.EditMode.Transform)),
              true
            );
          }.bind(this);
          this.registerShortcut(["Q"], q);
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
            O.WindowEvent,
            this._windowEvent,
            this
          ),
          this._leftSidebars.addEventListener(
            I.SidebarEvent,
            this._sidebarEvent,
            this
          ),
          this._rightSidebars.addEventListener(
            I.SidebarEvent,
            this._sidebarEvent,
            this
          ),
          (this._contextMenu = new GContextMenu(_interopRequireDefault)),
          this.updateLicenseInfo(),
          this._updateTitle({ saveToSessionHistory: false }),
          AppSettings.AUTO_SAVE_ENABLED && (this._autoSaveManager = te.getInstance()),
          this.getCursorManager().init(),
          this._updateLayout(),
          this._initAmplitudeProperties(),
          this._updateState();
      }),
      (Je.prototype._updateStyles = function (e) {
        switch (GEditor.GPlatform.webBrowser) {
          case GEditor.GPlatform.constructor.WebBrowser.Edge:
            e.addClass("g-edge");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Opera:
            e.addClass("g-opera");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Chrome:
            e.addClass("g-chrome");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Firefox:
            e.addClass("g-firefox");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.Safari:
            e.addClass("g-safari");
            break;
          case GEditor.GPlatform.constructor.WebBrowser.MSIE:
            e.addClass("g-msie");
        }
        switch (GCore.GSystem.hardware) {
          case GCore.GSystem.Hardware.Desktop:
            e.addClass("g-desktop");
            break;
          case GCore.GSystem.Hardware.Tablet:
            e.addClass("g-tablet");
            break;
          case GCore.GSystem.Hardware.Phone:
            e.addClass("g-phone");
        }
        switch (GCore.GSystem.operatingSystem) {
          case GCore.GSystem.OperatingSystem.Unix:
            e.addClass("g-os-unix");
            break;
          case GCore.GSystem.OperatingSystem.Windows:
            e.addClass("g-os-windows");
            break;
          case GCore.GSystem.OperatingSystem.OSX_IOS:
            e.addClass("g-os-osx_ios");
        }
        gContainer.getRuntime() === GContainer.Runtime.IPad && e.addClass("g-ipad");
      }),
      (Je.prototype.getContextMenu = function () {
        return this._contextMenu;
      }),
      (Je.prototype.getAutoSaveManager = function () {
        if (this._autoSaveManager) return this._autoSaveManager;
      }),
      (Je.prototype.isActiveDocument = function (e) {
        const module = this.getActiveDocument();
        return (
          !!module &&
          !!(e && e instanceof w) &&
          (module === e || !(!module.getId() || module.getId() !== e.getId()))
        );
      }),
      (Je.prototype._setActiveAssistantBar = function (e) {
        if (e) {
          if (!this._assistantBar) {
            const e = $("<div/>")
              .attr("id", F.AssistantBar.id)
              .on("mousedown", () => {
                this._toggleSideBarAndAssistBarZIndex(false, false, true, false);
              })
              .appendTo(this._frame);
            this._assistantBar = new Be(e);
          }
          this._assistantBar.activate();
        } else this._assistantBar && this._assistantBar.deactivate();
      }),
      (Je.prototype._toggleSideBarAndAssistBarZIndex = function (e, t, n, _interopRequireDefault) {
        gDesigner.isTouchEnabled() &&
          (this._leftSidebars.getHtmlElement().toggleClass("bring-to-front", e),
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
            .then((e) => {
              for (var module in ((e = e || {}), this._settings))
                e.hasOwnProperty(module) || (e[module] = this._settings[module]);
              for (var require in ((this._settings = e),
              (this._settingsLoaded = true),
              this._settings))
                this.trigger(new GSettingChangedEvent(require, undefined, this._settings[require], true));
            })
            .catch((e) => Promise.reject(e)),
          gContainer
            .getProperty("swatches")
            .then((e) => {
              if (
                ((this._swatches.global = []),
                (this._swatches["global-linear-gradient"] = []),
                (this._swatches["global-radial-gradient"] = []),
                (this._swatches["global-angular-gradient"] = []),
                (this._swatches["global-texture-pattern"] = []),
                (this._swatches["global-noise-pattern"] = []),
                e)
              )
                for (var module = 0; module < e.length; ++module) {
                  var require =
                      GCore.GNode.deserialize(e[module]) || GCore.GPattern.deserialize(e[module]),
                    _interopRequireDefault = require instanceof GCore.GSwatch ? require : new GCore.GSwatch(require);
                  this._addGlobalSwatch(_interopRequireDefault);
                }
              this.trigger(new GSwatchesChangedEvent("global"));
            })
            .catch((e) => Promise.reject(e)),
        ]);
      }),
      (Je.prototype._addGlobalSwatch = function (e) {
        var t = GCore.GPattern.serialize(e.getProperty("_pt"));
        t.startsWith("C#") || t.startsWith("Y#")
          ? this._swatches.global.push(e)
          : t.startsWith("L#")
          ? this._swatches["global-linear-gradient"].push(e)
          : t.startsWith("R#")
          ? this._swatches["global-radial-gradient"].push(e)
          : t.startsWith("A#")
          ? this._swatches["global-angular-gradient"].push(e)
          : t.startsWith("T#")
          ? this._swatches["global-texture-pattern"].push(e)
          : t.startsWith("N#") &&
            this._swatches["global-noise-pattern"].push(e);
      }),
      (Je.prototype.updateRecentDocumentsAction = function () {
        let exports = [];
        const module = gContainer.getProperty("recent_documents"),
          require = gDesigner.getUser();
        Promise.all([module, require])
          .then((e) => {
            let [module, require] = e;
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
                  (t = new f.default.Item(n, _interopRequireDefault.file))),
                  t && exports.push(t);
              }
            var AppSettings = function () {
              gContainer.updateRecentDocumentsAction(exports);
            };
            Q.getRecentStorageItems()
              .then(async function (t) {
                if (t.length > 0)
                  for (var require = 0; require < t.length; ++require)
                    exports.push(await J.from(gDesigner.getDefaultStorage(), t[require]));
              })
              .then(AppSettings)
              .catch(AppSettings);
          });
      }),
      (Je.prototype.removeExternalRecentFiles = function (e, t) {
        gDesigner
          .getUser()
          .then((e) =>
            e
              ? Promise.all([
                  e,
                  gContainer.getProperty("recent_external_".concat(e.getUID())),
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
                (_interopRequireDefault.type !== e ||
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
        var e,
          t,
          n = 0,
          _interopRequireDefault = 0;
        (e = this._getTopOffset(n, _interopRequireDefault)),
          (n = this._getLeftOffset(e)),
          (_interopRequireDefault = this._getRightOffset(e)),
          (t = this._getBottomOffset(n, _interopRequireDefault));
        const GTools = this.isTouchEnabled();
        this._header.relayout(),
          this._toolbar.relayout(),
          this._panels.relayout(),
          this._footer.relayout(),
          this._leftSidebars.relayout(),
          this._rightSidebars.relayout(),
          this._windows.relayout([GTools ? 0 : n, e, GTools ? 0 : _interopRequireDefault, t]);
      }),
      (Je.prototype.updateCollabTextPreviews = async function () {
        var e,
          t = this.getActiveDocument();
        t &&
          ((e = t.getEditor()) && e.closeInlineEditor(),
          await this._CDRIntegrationEngine.processCollabText(t));
      }),
      (Je.prototype._getTopOffset = function (e, t) {
        var n = 0,
          _interopRequireDefault = this.getPart(F.Info);
        n += this.isPartVisible(F.Info) ? _interopRequireDefault.outerHeight() : 0;
        var GTools = this.getPart(F.Header);
        GTools.css("top", n.toString() + "px"),
          (n += this.isPartVisible(F.Header) ? GTools.outerHeight() : 0);
        this.getPart(F.Overlay).css("top", n.toString() + "px");
        var GCore = this.getPart(F.Toolbar);
        GCore.css("left", e.toString() + "px"),
          GCore.css("top", n.toString() + "px"),
          GCore.css("right", t.toString() + "px"),
          (n += this.isPartVisible(F.Toolbar) ? GCore.outerHeight() : 0);
        const GEditor = this.getPart(F.Banner);
        return (
          GEditor.css("top", n.toString() + "px"),
          (n += this.isPartVisible(F.Banner) ? GEditor.outerHeight() : 0)
        );
      }),
      (Je.prototype._getLeftOffset = function (e) {
        var t = 0,
          n = this._leftSidebars.getSidebar(
            this._leftSidebars.getActiveSidebar()
          ),
          _interopRequireDefault = n ? n.getMinimumWidth() : 0,
          GTools = this.getPart(F.LeftSidebars),
          GCore = this.isPartVisible(F.LeftSidebars);
        return (
          GTools.outerWidth() < _interopRequireDefault && GCore && GTools.outerWidth(_interopRequireDefault),
          GTools.css("top", e.toString() + "px"),
          GTools.height(this._mainframe.height() - e),
          (t += GCore ? GTools.outerWidth() : 0)
        );
      }),
      (Je.prototype._getRightOffset = function (e) {
        var t = 0,
          n = this._rightSidebars.getSidebar(
            this._rightSidebars.getActiveSidebar()
          ),
          _interopRequireDefault = n ? n.getMinimumWidth() : 0,
          GTools = this.getPart(F.RightSidebars),
          GCore = this.isPartVisible(F.RightSidebars);
        return (
          GTools.outerWidth() < _interopRequireDefault && GCore && GTools.outerWidth(_interopRequireDefault),
          GTools.css("top", e.toString() + "px"),
          GTools.height(this._mainframe.height() - e),
          (t += GCore ? GTools.outerWidth() : 0)
        );
      }),
      (Je.prototype._getBottomOffset = function (e, t) {
        var n = 0,
          _interopRequireDefault = this.getPart(F.Panels);
        _interopRequireDefault.css("left", e.toString() + "px"),
          _interopRequireDefault.css("width", (this._mainframe.width() - e - t).toString() + "px");
        var GTools = this.getPart(F.Footer);
        return (
          GTools.css("left", e.toString() + "px"),
          GTools.css("width", (this._mainframe.width() - e - t).toString() + "px"),
          (n += this.isPartVisible(F.Panels) ? _interopRequireDefault.outerHeight() : 0),
          (n += this.isPartVisible(F.Footer) ? GTools.outerHeight() : 0)
        );
      }),
      (Je.prototype.positionIsOnCanvas = function (e, t) {
        var n,
          _interopRequireDefault,
          GTools = 0,
          GCore = 0;
        return (
          (n = this._getTopOffset(GTools, GCore)),
          (GTools = this._getLeftOffset(n)),
          (GCore = this._getRightOffset(n)),
          (_interopRequireDefault = this._getBottomOffset(GTools, GCore)),
          e > GTools &&
            e < window.innerWidth - GCore &&
            t > n &&
            t < window.innerHeight - _interopRequireDefault
        );
      }),
      (Je.prototype.updateGEditorSceneConfigurationPaintMode = function (e) {
        [
          GCore.GScenePaintConfiguration.PaintMode.Full,
          GCore.GScenePaintConfiguration.PaintMode.Outline,
          GCore.GScenePaintConfiguration.PaintMode.Fast,
        ].indexOf(e) < 0 ||
          (GTools.GEditorPaintConfiguration.prototype.paintMode = e);
      }),
      (Je.prototype.registerShortcut = function (e, t, n, _interopRequireDefault) {
        var AppSettings = function (e, t) {
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
              if (!((t && GEditor && GEditor.handleKeyDown(n) && (t || GEditor)) || true !== e(n)))
                return n.preventDefault(), n.stopPropagation(), false;
            };
          }.bind(this),
          l = n ? ze.bindGlobal : ze.bind;
        2 === e.length && e[0] === GEditor.GKey.Constant.META && "+" === e[1]
          ? (l(this._shortcutToMouseTrapShortcut(e), AppSettings(t, true)),
            l("mod+=", AppSettings(t, true), "keydown"),
            _interopRequireDefault && l("mod+=", AppSettings(_interopRequireDefault, false), "keyup"))
          : (l(this._shortcutToMouseTrapShortcut(e), AppSettings(t, true), "keydown"),
            _interopRequireDefault && l(this._shortcutToMouseTrapShortcut(e), AppSettings(_interopRequireDefault, false), "keyup"));
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
                      return AppSettings.some((e) => e.action.isVisible());
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
          let e = GEditor.getCategory();
          for (var AppSettings = [e]; (e = e.parent); ) AppSettings.push(e);
          AppSettings.reverse();
          var l = GEditor.getGroup(),
            c = GEditor.getGroupIcon(),
            d = (GEditor.getStyleClass(), l ? [""].concat(l.split("/")) : null);
          if (d && AppSettings && AppSettings.length !== d.length - 1)
            throw new Error(
              "The number of categories is different than the number of groups."
            );
          var CollaborationMergeUtils = module;
          if (AppSettings)
            for (var p = 0; p < AppSettings.length; ++p) {
              let e = AppSettings[p],
                t = d ? d[p] : null;
              for (
                var g = null, h = e.label.split("/")[p], f = 0;
                f < CollaborationMergeUtils.items.length;
                ++f
              )
                h == CollaborationMergeUtils.items[f].caption && (g = CollaborationMergeUtils.items[f]);
              g ||
                (_interopRequireDefault(
                  CollaborationMergeUtils,
                  (g = {
                    type: "menu",
                    caption: h,
                    items: [],
                    icon: c,
                    category: e,
                  }),
                  t
                ),
                CollaborationMergeUtils.items.push(g)),
                (CollaborationMergeUtils = g);
            }
          var m = { type: "item", action: GEditor };
          _interopRequireDefault(CollaborationMergeUtils, m, d ? d[d.length - 1] : null), CollaborationMergeUtils.items.push(m);
        }
        var y = function (e, t) {
            "menu" === e.type
              ? (e.menu = v(e, t))
              : "divider" === e.type
              ? (e.separator = this.addMenuSeparator(t, e.isVisible))
              : "item" === e.type &&
                ((e.item = this.addMenuItem(
                  t,
                  GCore.GLocale.get(e.action.getTitle()),
                  e.action.getIcon(),
                  e.action.isCheckable(),
                  e.action.getShortcut(),
                  function (t, n) {
                    if ("shortcut" === t)
                      return this._executeShortcutAction(e.action, n);
                  }.bind(this),
                  e.action.isShortcutGlobal(),
                  e.action.isPro(),
                  e.action,
                  e.action._sidebar
                    ? e.action.getStyleClass() + " hidepanel"
                    : e.action.getStyleClass(),
                  e.action.noHover()
                )),
                this.registerAdditionalShortcuts(e.action));
          }.bind(this),
          v = function (e, t) {
            const require = e.category
              ? (t) => {
                  t.setVisible(e.category.visible), t.setIcon(e.category.icon);
                }
              : null;
            for (
              var _interopRequireDefault = this.addMenu(
                  t,
                  e.caption,
                  function () {
                    for (var t = 0; t < e.items.length; ++t) {
                      var require = e.items[t];
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
                  e.icon,
                  require
                ),
                GTools = 0;
              GTools < e.items.length;
              ++GTools
            )
              y(e.items[GTools], _interopRequireDefault);
            return _interopRequireDefault;
          }.bind(this);
        for (GTools = 0; GTools < module.items.length; ++GTools)
          (g = module.items[GTools]), v(module.items[GTools], null);
        this._mainMenu.update();
      }),
      (Je.prototype._workspaceResolveUrlEvent = function (e) {
        Q.resolveImage(e, this.getActiveDocument());
      }),
      (Je.prototype._shareEvent = function (e) {
        e.type === pe.Type.Updated && this._updateSidebars();
      }),
      (Je.prototype._applicationStateChangedEvent = function (e) {
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
        if (I.isOrientationActiveInSetting(I.Orientation.Right)) {
          const e = this._rightSidebars.getSidebar(
            this._rightSidebars.getActiveSidebar()
          );
          (e && e.isVisible()) ||
            (_interopRequireDefault || module
              ? this._rightSidebars.setActiveSidebar(GInspectorSidebar.ID)
              : require
              ? this._rightSidebars.setActiveSidebar(GAnnotationsSidebar.ID)
              : this._rightSidebars.setActiveSidebar(null)),
            this.setPartVisible(F.RightSidebars, require || _interopRequireDefault || module),
            this._rightSidebars.relayout();
        }
        if (I.isOrientationActiveInSetting(I.Orientation.Left)) {
          const e = this._leftSidebars.getSidebar(
            this._leftSidebars.getActiveSidebar()
          );
          (e && e.isVisible()) ||
            (module
              ? this._leftSidebars.setActiveSidebar(GOutlineSidebar.ID)
              : this._leftSidebars.setActiveSidebar(null)),
            this.setPartVisible(F.LeftSidebars, module),
            this._leftSidebars.relayout();
        }
      }),
      (Je.prototype._fontManagerResolveFontEvent = function (e) {
        const module = Object.assign({}, e);
        try {
          H.resolveFont(module);
        } catch (t) {
          throw (e.failed(), t);
        }
      }),
      (Je.prototype._fontManagerQueryFontFamilyEvent = function (e) {
        try {
          H.resolveQueryFontFamily(e);
        } catch (t) {
          throw (e.failed(), t);
        }
      }),
      (Je.prototype._documentEvent = function (e) {
        switch (e.type) {
          case GDocumentEvent.Type.OwnerUpdated:
            if (e.document) {
              const t = e.document.getOwner();
              if (t) {
                const n = e.document.isCloudFile()
                    ? e.document.getStorageItem().getFile()
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
            this._updateTitle(), this._registerUsage(e.document);
            break;
          case GDocumentEvent.Type.Added:
            this._newDocumentDialog && this._newDocumentDialog.close();
        }
      }),
      (Je.prototype._registerUsage = function (e) {
        const module = e.getStorageItem();
        module &&
          module.isRegistrable() &&
          Oe.usage(module.getId()).catch((e) => {
            console.error("gApi.usage error", e);
          });
      }),
      (Je.prototype._windowEvent = function (e) {
        let module;
        switch (e.type) {
          case O.WindowEvent.Type.Added:
          case O.WindowEvent.Type.Removed:
            this._updateTitle();
            break;
          case O.WindowEvent.Type.Activated:
            1 === this._windows.getWindows().length && this._updateTheme(),
              this.getToolManager().setView(e.window.getView()),
              this._leftSidebars.setView(e.window.getView()),
              this._rightSidebars.setView(e.window.getView()),
              this._updateTitle(),
              (module = e.window.getView().getHtmlElement()),
              this._editorTouchHandler.activate(module);
            break;
          case O.WindowEvent.Type.Deactivated:
            (module = e.window.getView().getHtmlElement()),
              this._editorTouchHandler.deactivate(module),
              this.getToolManager().setView(null),
              this._leftSidebars.setView(null),
              this._rightSidebars.setView(null),
              this._updateTitle();
        }
      }),
      (Je.prototype._sidebarEvent = function (e) {
        e.type === I.SidebarEvent.Type.Activated && this.relayout();
      }),
      (Je.prototype._settingChangedEvent = function (e) {
        switch (e.key) {
          case "touch":
            e.restoring && e.newValue && !this.isTouchEnabled()
              ? this.setTouchEnabled(false)
              : this._updateLayout(),
              this._updateEditorOptions(),
              this._updateGTM();
            break;
          case "theme":
            this._setTheme(e.newValue);
            break;
          case "snap_disabled":
            GTools.GGuides.options.disabled = e.newValue;
            break;
          case "snap_zones":
            GTools.GGuides.options.zones = e.newValue;
            break;
          case "snap_guides":
            GTools.GGuides.options.guides = e.newValue;
            break;
          case "highlight_on_hover":
            GTools.GEditorOptions.highlightOnHover = e.newValue;
            break;
          case "dont_store_textpath":
            GCore.GText.dontStorePaths = e.newValue;
            break;
          case "decimals_num":
            GCore.GScene.decimalsNum = e.newValue;
            break;
          case "enable_steps_debug":
            GTools.GEditorOptions.debugTransactions = e.newValue;
            break;
          case "enable_cache":
            "function" == typeof gdb_loaddesign &&
              ((GCore.GRendererConfig.ENABLE_CACHE = e.newValue),
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
            e.newValue
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
      (Je.prototype._setTheme = function (e) {
        (e && "default" !== e) || (e = "light");
        var t = $('head > link[href$=".css"]'),
          n = t.attr("href").split(".");
        (n[2] = e),
          t.attr("href", n.join(".")),
          $(t).load(
            n.join("."),
            function () {
              var t = this._windows.getWindows();
              l.DESIGNER.GUIDELINE_COLOR
                ? (GTools.GEditorOptions.guideLineColor = l.DESIGNER.GUIDELINE_COLOR)
                : (GTools.GEditorOptions.guideLineColor =
                    "light" === e
                      ? new GCore.GRGBColor([107, 156, 228])
                      : new GCore.GRGBColor([227, 0, 97])),
                l.DESIGNER.GUIDELINEHINT_COLOR
                  ? (GTools.GEditorOptions.guideLineHintColor =
                      l.DESIGNER.GUIDELINEHINT_COLOR)
                  : (GTools.GEditorOptions.guideLineHintColor =
                      "light" === e ? "blue" : "#F790B6"),
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
        var e = this._windows.getActiveWindow();
        e &&
          e.getView() &&
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
                e && e.getView() && e.getView().invalidate();
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
          let e = GTools.getDocument();
          if (
            (e &&
              e.getOwner() &&
              !e.isDocumentFromTemplate() &&
              ((require = ""),
              (t = GCore.GLocale.get(
                new GCore.GLocaleKey("GDesigner", "text.design-by")
              )
                .replace("%name", e.getOwner().name)
                .replace("%appname", AppSettings2.DESIGNER.TITLE))),
            _interopRequireDefault)
          ) {
            let t = e.getStorageItem();
            e &&
              t &&
              (t instanceof J.Item ||
                (t.supportsShadowFile() && (await t.getCollaborativeFile()))) &&
              (e.getStorageItem().getToken()
                ? e.getFocusAnnotationId()
                  ? window.history.pushState(
                      null,
                      "Title",
                      "/?token=" +
                        t.getToken() +
                        "&annot=" +
                        e.getFocusAnnotationId()
                    )
                  : window.history.pushState(
                      null,
                      "Title",
                      "/?token=" + t.getToken()
                    )
                : t.getId() &&
                  (e.getFocusAnnotationId()
                    ? window.history.pushState(
                        null,
                        "Title",
                        "/?d=" +
                          t.getId() +
                          "&annot=" +
                          e.getFocusAnnotationId()
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
      (Je.prototype.addNotification = function (e, t) {
        this.hasEventListeners(de) && this.trigger(new de(e, t));
      }),
      (Je.prototype._shortcutToMouseTrapShortcut = function (e) {
        for (var module = "", require = 0; require < e.length; ++require) {
          require > 0 && (module += "+");
          var _interopRequireDefault = e[require];
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
      (Je.prototype.isGravitIME = function (e) {
        return e && e.className === GEditor.GSceneWidget.GRAVIT_IME;
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
        var e = GCore.GPaintCanvas.getScreenDPI(),
          t = this.getCanvasWidth() / 2,
          n = this.getCanvasHeight() / 2;
        return (
          (t +=
            "none" !== $("#left-sidebars").css("display")
              ? $("#left-sidebars").width()
              : 0),
          (n += this.getHeader().getHeight() + this.getToolbar().getHeight()),
          new GCore.GPoint(t * e, n * e)
        );
      }),
      (Je.prototype.getStylePreview = function (e, t) {
        return this._stylesPreview[e.getReferenceId()]
          ? t
            ? this._stylesPreview[e.getReferenceId()].textBitmap
            : this._stylesPreview[e.getReferenceId()].bitmap
          : this.createNewStylePreview(e, true, t);
      }),
      (Je.prototype.createStyleElement = function (e, t) {
        var n = new GCore.GRectangle(0, 0, 50, 50);
        if (
          t &&
          $.inArray(GCore.GStylable.PropertySet.Text, e.getProperty("ps")) >= 0
        ) {
          var _interopRequireDefault = new GCore.GText();
          _interopRequireDefault.setText("Ab"),
            _interopRequireDefault.assignStyleFrom(e),
            _interopRequireDefault.setProperty("_tfi", "20"),
            _interopRequireDefault.setBounds(7, 10, 50, 50),
            n.appendChild(_interopRequireDefault);
        } else
          n.assignStyleFrom(e),
            $.inArray(
              GCore.GStylable.PropertySet.FillPaintLayers,
              e.getProperty("ps")
            ) < 0 &&
              $.inArray(
                GCore.GStylable.PropertySet.BorderPaintLayers,
                e.getProperty("ps")
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
      (Je.prototype.createNewStylePreview = function (e, t, n) {
        var _interopRequireDefault = this.createStyleElement(e, false),
          GTools = this.createStyleElement(e, true);
        if (!gDesigner.getActiveDocument()) return null;
        var GEditor = gDesigner.getActiveDocument().getEditor().getSelection() || [];
        GEditor.length > 0 && GEditor[0].appendChild(GTools);
        var AppSettings = _interopRequireDefault.toBitmap().toImageDataUrl(GCore.GBitmap.ImageType.PNG),
          l = GTools.toBitmap().toImageDataUrl(GCore.GBitmap.ImageType.PNG);
        return (
          GEditor.length > 0 && GEditor[0].removeChild(GTools),
          t &&
            (this._stylesPreview[e.getReferenceId()] = {
              preview: _interopRequireDefault,
              bitmap: AppSettings,
              textBitmap: l,
            }),
          n ? l : AppSettings
        );
      }),
      (Je.prototype.setVersion = function (e) {
        this._version = e;
      }),
      (Je.prototype.getVersion = function () {
        return this._version;
      }),
      (Je.prototype.setVersionFriendlyName = function (e) {
        this._versionFriendlyName = e;
      }),
      (Je.prototype.getVersionFriendlyName = function () {
        return this._versionFriendlyName;
      }),
      (Je.prototype.setCommitSHA = function (e) {
        this._commitSHA = e;
      }),
      (Je.prototype.getCommitSHA = function () {
        return this._commitSHA;
      }),
      (Je.prototype.setBuildNum = function (e) {
        this._buildNum = e;
      }),
      (Je.prototype.getBuildNum = function () {
        return this._buildNum;
      }),
      (Je.prototype.setIsBeta = function (e) {
        this._isBeta = e;
      }),
      (Je.prototype.isBeta = function () {
        return this._isBeta;
      }),
      (Je.prototype.setStoreVendor = function (e) {
        this._storeVendor = e;
      }),
      (Je.prototype.getStoreVendor = function () {
        return this._storeVendor;
      }),
      (Je.prototype._userLoggedEvent = function (e) {
        let module = e.user,
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
          const e = GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "text.anonymous-user")
            ),
            n = (module && module.getFullUserName()) || e;
          GTools.GEditorOptions.userConfig = { userName: n, uid: -1 };
        }
      }),
      (Je.prototype._userPropertiesChangedEvent = function (e) {
        const { user: module } = e;
        module &&
          module.getUID() &&
          (GTools.GEditorOptions.userConfig = {
            userName: module.getFullUserName(),
            uid: module.getUID(),
          });
      }),
      (Je.prototype._beforeInstallUpdate = function (e) {
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
      (Je.prototype._licenseChangedEvent = async function (e) {
        e.license.isDefault() ||
          ((this._enabledSubscriptions = true),
          gContainer.setProperty("enabled_subscriptions", true)),
          "undefined" != typeof dataLayer &&
            (this._utm &&
              this._utm.forEach((e, t) => dataLayer.push({ [t]: e })),
            this._updateDataLayerWithLicenseData(),
            dataLayer.push({ event: "LICENSE_CHANGED_EVENT" })),
          e.license.isOffline() &&
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
                  onclick: (e) => e.gDialog("close"),
                },
              ],
              attachTimer: (e) => {
                const module = () => {
                  (this._reloading = false),
                    this.clearCountdown(e),
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
            .toggleClass("pro-legacy", e.license.isLegacy())
            .toggleClass(
              "pro-subscription",
              e.license.isPro() && !e.license.isExpired()
            )
            .toggleClass(
              "trial-expired",
              e.license.isTrial() && e.license.isExpired()
            ),
          this._toggleAdditionalSubscriptionClasses(e.license),
          this.isEnabledProFeatures() || this.setTouchEnabled(false),
          this._updateState();
      }),
      (Je.prototype._toggleAdditionalSubscriptionClasses = function () {}),
      (Je.prototype.signout = function (e, t) {
        if (this.isEnabledSubscriptions() && !e) {
          if (this.getDocuments().some((e) => e.isModified()))
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
          Ce.clear(),
          new Promise(async (e, n) => {
            await (0, CollaborationMergeUtils._tryAndCatch)(() => Oe.signout()),
              (this._user = null),
              this.hasEventListeners(le) && this.trigger(new le(null)),
              this.isEnabledSubscriptions() &&
                (t || ((this._reloading = true), location.reload())),
              e();
          })
        );
      }),
      (Je.prototype.isReloading = function () {
        return this._reloading;
      }),
      (Je.prototype.reload = function (e) {
        let {
          title: module,
          subtitle: require,
          icon: _interopRequireDefault,
          footer: GTools,
          buttons: GCore,
          attachTimer: GEditor,
        } = e;
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
                  const e = this.createCountdown(() => this.signout(true), 3e5);
                  GEditor && GEditor(e);
                },
              })
              .css({ zIndex: 9999 })));
      }),
      (Je.prototype.clearCountdown = function (e) {
        let { timeoutID: module, intervalID: require = 0 } = e;
        require && clearInterval(require),
          module && clearInterval(module),
          $(".g-timer[data-interval=".concat(require, "]")).remove();
      }),
      (Je.prototype.createCountdown = function (e, t) {
        let require = null;
        const _interopRequireDefault = AppSettings.DateAPI.addTime(new Date(), t),
          GTools = setInterval(() => {
            const e = _interopRequireDefault - Date.now();
            if (e < 0) return clearInterval(GTools), void (require && require.remove());
            const t = Math.floor((e % 36e5) / 6e4),
              GEditor = Math.floor((e % 6e4) / 1e3);
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
        return e && (GEditor = setTimeout(e, t)), { intervalID: GTools, timeoutID: GEditor };
      }),
      (Je.prototype.openDeactivatedUserDialog = async function (e) {
        const module = $(
          "<div>".concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GDocument", "text.account-deactivated")
            )
              .replace("%app", AppSettings2.DESIGNER.TITLE)
              .replace("%name", e.getFullUserName() || e.getEmail()),
            "</div>"
          )
        );
        module.find("a").on("click", (t) => {
          t.preventDefault();
          let require = $(t.target).closest(".g-dialog-content");
          return (
            Q.resendEmailConfirmation(e).then(() => require.gDialog("close")), false
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
        return new Promise(async (e, t) => {
          let require = await this.getCloudCommunicationManager().getUser();
          this._anonymous = !!require && require.isAnonymous();
          let _interopRequireDefault = await this.isOfflineAsync();
          if (!require && _interopRequireDefault) {
            const e = Ce.getUser();
            e && (require = new $e(e));
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
                void e(null)
              );
            if (require)
              if (!require || (this._user && $e.equals(this._user, require))) {
                if (this._user && require && !require.isDeactivated()) {
                  const e = { stats: undefined };
                  GCore.GUtil.equals(
                    Object.assign({}, this._user, e),
                    Object.assign({}, require, e),
                    true
                  ) ||
                    (this.hasEventListeners(ce) && this.trigger(new ce(require)));
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
                    this._utm.forEach((e, t) => dataLayer.push({ [t]: e })),
                  this._updateDataLayerWithLicenseData(),
                  dataLayer.push({ event: "USER_LOGGED_EVENT" })),
                  this.hasEventListeners(le) && this.trigger(new le(require));
            var GTools;
            this._user &&
              require &&
              this._user.getUID() === require.getUID() &&
              (GTools = this._user.stats),
              (this._user = require),
              this._user && !_interopRequireDefault && Ce.updateUser(this._user),
              GTools && (this._user.stats = GTools),
              e(this._user);
          } else e(null);
        });
      }),
      (Je.prototype.stats = function (e, t, n, _interopRequireDefault) {
        return y.default.pageStats(e, t, this._user, n, _interopRequireDefault);
      }),
      (Je.prototype.pageTracking = function (e, t) {
        return y.default.pageTracking(e, t);
      }),
      (Je.prototype.gtmEvent = function (e, t) {
        "undefined" != typeof dataLayer &&
          (t &&
            t.forEach((e) => {
              "object" == typeof e && dataLayer.push(e);
            }),
          dataLayer.push({ event: e }));
      }),
      (Je.prototype.intercomStats = function (e) {
        "function" == typeof Intercom && Intercom("trackEvent", e);
      }),
      (Je.prototype.saveStats = function () {
        if (this._user && this._user.stats) {
          var exports = CollaborationMergeUtils2.toMD5(JSON.stringify(this._user.stats || ""));
          Ye !== exports && (Oe.updateUser({ stats: this._user.stats }), (Ye = exports));
        }
      }),
      (Je.prototype.setEnv = function (e) {
        this._env = e;
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
      (Je.prototype.zoomAtViewCenter = function (e, t) {
        var n,
          _interopRequireDefault,
          GTools = this.getActiveDocument();
        if (!GTools || !(_interopRequireDefault = GTools.getEditor().getSelectionBBox())) {
          n = true;
          var GEditor = e.getScene();
          GEditor && (_interopRequireDefault = GEditor.getPaintBBox());
        }
        var AppSettings =
          _interopRequireDefault && !_interopRequireDefault.isEmpty()
            ? _interopRequireDefault.getSide(GCore.GRect.Side.CENTER)
            : new GCore.GPoint(0, 0);
        if (n && !e.getViewConfiguration().multiPageView) {
          var l = e.getViewTransform().mapPoint(this.getCanvasCenter());
          isNaN(l.getX()) || isNaN(l.getY()) || (AppSettings = l);
        }
        if (e.getViewConfiguration().multiPageView) {
          var c = e.getScene().getActivePage();
          c && (AppSettings = AppSettings.add(c.getPosition(true)));
        }
        e.zoomAtCenter(AppSettings, t);
      }),
      (Je.prototype.handleUnsavedDocuments = function () {
        return gDesigner.hasModifiedDocuments()
          ? this.getDocuments()
              .filter((e) => e.isModified())
              .reduce(
                (e, t) =>
                  e.then(
                    () =>
                      new Promise(async (e, n) => {
                        this.canUnloadDocument(t)
                          .then((_interopRequireDefault) => {
                            _interopRequireDefault
                              ? e()
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
                                      _interopRequireDefault && _interopRequireDefault === De.SaveCancelled ? n(t) : e();
                                    },
                                  ],
                                  "unsavedhandler"
                                );
                          })
                          .catch((e) => {
                            n(e);
                          });
                      })
                  ),
                Promise.resolve()
              )
          : Promise.resolve();
      }),
      (Je.prototype.canUnloadDocument = function (e) {
        let { changeActiveDocument: module = true } =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return new Promise((n, _interopRequireDefault) => {
          if (!e.isModified() && !e.isSynchronizing()) return n(true);
          module && this.getActiveDocument() !== e && this.activateDocument(e),
            gDesigner.canExecuteAction(GSaveAction.ID, [e]) || n(true),
            ee.advanced({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.document-modified")
              ).replace("%title", e.getTitle()),
              closeCallback: (e) =>
                e && _interopRequireDefault({ documentStatus: De.SaveCancelled }),
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
      (Je.prototype.exportSwatches = function (e) {
        for (
          var module = this.getAllSwatches(e), require = new GCore.GSwatches(), _interopRequireDefault = 0;
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
            (e) => {
              e.setSaveCounterMeasureEnabled(true),
                e.write(GEditor),
                e.setSaveCounterMeasureEnabled(false);
            },
            null
          );
        else if (AppSettings.canDownload()) {
          AppSettings.download("Swatches.gvswatch", (e) => {
            e &&
              (e.setSaveCounterMeasureEnabled(true),
              e.write(GEditor),
              e.setSaveCounterMeasureEnabled(false));
          });
        }
      }),
      (Je.prototype.importSwatches = function (e) {
        var t = this.getDefaultStorage(),
          n = e.startsWith("document");
        t.openPrompt(
          [{ ext: "gvswatch", mime: "text/plain" }],
          (t) => {
            t.read((t) => {
              try {
                for (
                  var _interopRequireDefault = this.getAllSwatches(e),
                    GTools = GCore.GNode.deserialize(pako.ungzip(t, { to: "string" })),
                    GEditor = [],
                    AppSettings = GTools.getFirstChild();
                  null !== AppSettings;
                  AppSettings = AppSettings.getNext()
                ) {
                  for (var l = true, c = 0; c < _interopRequireDefault.length; ++c)
                    if (GCore.GUtil.equals(AppSettings, _interopRequireDefault[c])) {
                      l = false;
                      break;
                    }
                  l && GEditor.push(AppSettings.clone());
                }
                if (((_interopRequireDefault = _interopRequireDefault.concat(GEditor)), n)) this.setSwatches(e, _interopRequireDefault, true);
                else {
                  for (c = 0; c < GEditor.length; ++c) this._addGlobalSwatch(GEditor[c]);
                  this.setSwatches(e, this._swatches[e]);
                }
              } catch (e) {
                console.warn("error importing swatches: " + e),
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
      (Je.prototype.calculateFontsSize = function (e) {
        var t = this;
        return new Promise(function (n, _interopRequireDefault) {
          var GTools = {},
            GCore = function (e) {
              return new Promise(function (n, _interopRequireDefault) {
                var GCore = new XMLHttpRequest();
                GCore.open("HEAD", t.getAssetsURL() + "" + e, true),
                  (GCore.onload = function () {
                    this.status >= 200 && this.status < 400
                      ? ((GTools[e] = parseInt(
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
          e.forEach((e) => {
            GEditor.push(GCore(e.preview));
            for (var t = 0; t < e.fonts.length; ++t) GEditor.push(GCore(e.fonts[t].url));
          }),
            Promise.all(GEditor).then(
              () => {
                n(GTools);
              },
              (e) => {
                _interopRequireDefault(e);
              }
            );
        });
      }),
      (Je.prototype.downloadFonts = function (e, t) {
        var n = this,
          _interopRequireDefault = 0,
          GTools = {},
          GEditor = Object.keys(t);
        if (GEditor.length) {
          for (var AppSettings = 0, l = 0; l < GEditor.length; ++l) AppSettings += t[GEditor[l]];
          _interopRequireDefault = AppSettings;
        }
        $("#right-sidebars").find(".fonts-download-progress").remove();
        var c = $("<div/>")
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
          d = function (e) {
            c
              .find(".info")
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    e ? "text.fonts-downloaded" : "text.error-downloading"
                  )
                )
              ),
              c.find(".count").remove(),
              c.append(
                $("<span/>")
                  .text("X")
                  .addClass("g-button")
                  .addClass("close")
                  .on("click", function () {
                    gDesigner.stats("font_downloaded_closebutton"), c.remove();
                  })
              );
          };
        return new Promise(function (t, GCore) {
          var GEditor = [];
          try {
            var AppSettings = function (e) {
                return new Promise(function (t, GCore) {
                  var GEditor = new XMLHttpRequest();
                  GEditor.open("GET", n.getAssetsURL() + "" + e, true),
                    (GEditor.responseType = "blob"),
                    (GEditor.onprogress = function (t) {
                      (GTools[e] = t.loaded),
                        (function () {
                          let e = Object.keys(GTools);
                          if (e.length) {
                            let n = 0;
                            for (var t = 0; t < e.length; ++t) n += GTools[e[t]];
                            let GCore = Math.round((n / _interopRequireDefault) * 100);
                            c.find(".count").text(
                              " (" + (GCore < 100 ? GCore : 100) + "%)"
                            );
                          }
                        })();
                    }),
                    (GEditor.onload = function () {
                      this.status >= 200 && this.status < 400
                        ? t({ blob: GEditor.response, url: e })
                        : GCore({ status: this.status, statusText: GEditor.statusText });
                    }),
                    (GEditor.onerror = function () {
                      GCore({ status: this.status, statusText: GEditor.statusText });
                    }),
                    GEditor.send();
                });
              },
              l = [],
              CollaborationMergeUtils = function (e) {
                GEditor.push(e);
              },
              p = function () {
                throw new Exception("error downloading fonts");
              };
            e.forEach((e) => {
              l.push(
                AppSettings(e.preview)
                  .then(function (e) {
                    CollaborationMergeUtils(e);
                  })
                  .catch(() => {
                    p();
                  })
              );
              for (var t = 0; t < e.fonts.length; ++t)
                l.push(
                  AppSettings(e.fonts[t].url)
                    .then(function (e) {
                      CollaborationMergeUtils(e);
                    })
                    .catch((e) => {
                      console.log(e), p();
                    })
                );
            }),
              Promise.all(l).then(
                () => {
                  d(true), t(GEditor);
                },
                (e) => {
                  console.log(e), d(false), GCore();
                }
              );
          } catch (e) {
            console.log(e), d(false), GCore();
          }
        });
      }),
      (Je.prototype.showCreateAccount = function () {
        return this._showCreateAccount;
      }),
      (Je.prototype.setShowCreateAccount = function (e) {
        this._showCreateAccount = e;
      }),
      (Je.prototype.getSignupOptions = function () {
        return this._signupOptions;
      }),
      (Je.prototype.setSignupOptions = function (e) {
        this._signupOptions = e;
      }),
      (Je.prototype.enterpriseLoginForm = function () {
        return false;
      }),
      (Je.prototype.setEnterpriseLoginForm = function (e) {}),
      (Je.prototype.runDeepLink = async function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if ((console.log("Called: " + e), e))
          try {
            const n = await this.getUser();
            if (0 === e.indexOf("purchase")) {
              let _interopRequireDefault;
              return (
                module.hasOwnProperty("newuser") && (this._showCreateAccount = true),
                AppSettings2.PURCHASE.URL_TO_PRODUCT &&
                  (_interopRequireDefault = AppSettings2.PURCHASE.URL_TO_PRODUCT[e]),
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
                this.openPaymentDialog(null, Object.assign(module, { flow: e }))
              );
            }
            if ("login_dialog" === e) this._user || Q.performLogin();
            else {
              if ("confirm_email" === e) {
                const { confirm_email: e, flow: _interopRequireDefault } = module;
                return this.getCloudCommunicationManager()
                  .confirmEmail(e)
                  .then(async () => {
                    let e = await this.getUser();
                    e &&
                      e.isEmailVerified() &&
                      this.executeWhenReady(() => {
                        const e = this.getLicense();
                        ee.custom({
                          title: GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GCommonNames",
                              "text.activating-your-account"
                            )
                          ),
                          subtitle:
                            (e.isPro() || e.isTrial()) &&
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
                  .catch((e) => {
                    if (!n) return Promise.reject(e);
                    this.executeWhenReady(() => ee.error(e));
                  });
              }
              if ("account" === e)
                n &&
                  !this.isAnonymous() &&
                  this.executeWhenReady(() => {
                    new Se(n).open();
                  });
              else if ("purchases" === e) {
                n &&
                  (await Oe.hasPurchases()) &&
                  this.executeWhenReady(() => {
                    new Se(n, "purchase").open();
                  });
              } else if ("newuser" === e) this._showCreateAccount = true;
              else if ("enterprise" === e)
                n || (this._enterpriseLoginForm = true);
              else if ("reset_trial" === e) {
                const e = () => {
                  Oe.license
                    .resetTrial()
                    .then(() => gDesigner.requestLicenseUpdate());
                };
                n
                  ? e()
                  : new h.default()
                      .listen(le)
                      .when((e) => !!e && !!e.user)
                      .do(e);
              } else if ("procoupon" === e)
                this.executeWhenReady(() => {
                  Q.activateCoupon(module.procoupon);
                });
              else if ("annot" === e)
                AppSettings.HAS_ANNOTATIONS &&
                  this.executeWhenReady(() => {
                    const { annot: e } = module;
                    this.setPartVisible(F.RightSidebars, true),
                      this._rightSidebars.setActiveSidebar(GAnnotationsSidebar.ID);
                  });
              else if (
                e === GContainer.DeepLinking.CreateShare &&
                "true" === module[GContainer.DeepLinking.CreateShare]
              )
                new h.default()
                  .listen(GApplicationStatusEvent)
                  .when(() => this._initialized)
                  .do(() => {
                    const e = (t) => {
                      if (t.type === pe.Type.Updated) {
                        const t = this.getActiveDocument();
                        t &&
                          t.getStatus() === De.Loaded &&
                          (t.isShareable() &&
                            !this.getApplicationManager().isSharing() &&
                            this.getShareManager().share(),
                          this.removeEventListener(pe, e, this));
                      }
                    };
                    this.addEventListener(pe, e, this);
                  });
              else if (
                e === GContainer.DeepLinking.ActivateTrial &&
                module[GContainer.DeepLinking.ActivateTrial]
              ) {
                const e = module[GContainer.DeepLinking.ActivateTrial];
                Oe.license.activateTrial(e).then(() => be.checkLicense());
              } else {
                if (e === GContainer.DeepLinking.SetPassword) return new Ve().execute(module);
                if (e === GContainer.DeepLinking.ResetPassword)
                  return new He().execute(module);
                if (e === GContainer.DeepLinking.PasswordlessToken)
                  return new We().execute(module);
              }
            }
            return Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
      }),
      (Je.prototype.openProOffer = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        Ee.openSubscriptionOffer(exports);
      }),
      (Je.prototype.handlePROFeatureInterruption = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (exports = $.extend({ campaign: "profeature" }, exports)),
          this.isAnonymous()
            ? new re(() => {}).open({
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
      (Je.prototype._applicationStatusEvent = function (e) {
        e.status === GApplicationStatusEvent.Status.Ready && (this._ready = true);
      }),
      (Je.prototype.executeWhenReady = function (e) {
        return new h.default()
          .listen(GApplicationStatusEvent)
          .when(() => this._ready)
          .do(e);
      }),
      (Je.prototype.isReady = function () {
        return this._ready;
      }),
      (Je.prototype.isInAppPurchaseAllowed = function () {
        return gInAppPurchase.canMakePayments();
      }),
      (Je.prototype.openPaymentDialog = async function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return (
          this.getAmplitudeHelper().logEvent(
            AppSettings.AmplitudeData.Events.ACCOUNT_CART_SCREEN
          ),
          gInAppPurchase.purchase(e, module)
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
      (Je.prototype.getTabByDocument = function (e) {
        return this.getHeader().getWindowTab(this.getWindows().getWindow(e));
      }),
      (Je.prototype.getOpacityIncrement = function () {
        return 1;
      }),
      (Je.prototype.registerAdditionalShortcuts = function (e) {
        var t = e.getAdditionalShortcuts();
        t &&
          t.length &&
          t.forEach((t) => {
            this.registerShortcut(
              t,
              (t) => this._executeShortcutAction(e, t),
              false
            );
          });
      }),
      (Je.prototype._executeShortcutAction = function (e, t) {
        const require = e.isKeyBoardEventRequiredToExecute() ? [t] : [undefined];
        return this.executeAction(e.getId(), require, "shortcut");
      }),
      (Je.prototype.getPaste = function () {
        return this._paste;
      }),
      (Je.prototype.getSubscriberUserType = function () {
        return this.getLicense().getSubscriberUserType();
      }),
      (Je.prototype.isLegacyFeature = function (e) {
        return !!e && Ie.includes(e);
      }),
      (Je.prototype.isEnabledProFeatures = function (e) {
        if (!this.isEnabledSubscriptions()) return true;
        const module = this.getLicense();
        return (
          !(module.isFree() || this.isAnonymous() || module.isGuest()) &&
          (!(!module.isLegacy() || !this.isLegacyFeature(e)) ||
            (!module.isExpired() && (!module.isOffline() || !module.isOfflinePeriodExpired())))
        );
      }),
      (Je.prototype.isProTooltipNeeded = function (e) {
        const module = this.getLicense();
        return (
          !(e && this.isLegacyFeature(e) && module.isLegacy()) &&
          !(module.isPro() && !module.isExpired())
        );
      }),
      (Je.prototype.preInit = async function (e) {
        const module = this;
        await (async function () {
          e || (e = Oe.isEnabledSubscriptions());
          if (await e.catch(() => false))
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
          await new Promise((e) => {
            module._applicationManager = new fe(e);
          });
      }),
      (Je.prototype.isEnabledSubscriptions = function () {
        return !!this.isInAppPurchaseAllowed() || !!this._enabledSubscriptions;
      }),
      (Je.prototype.setLicense = function (e) {
        !e ||
          (this._license && e.equals(this._license)) ||
          ((this._license = e),
          this.hasEventListeners(se) && this.trigger(new se(this._license))),
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
              .catch((e) => ee.alert(Oe.formatError(e)));
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
          we.reset("proOfferInTrial", exports ? undefined : gDesigner.now()),
          be.checkLicense()
        );
      }),
      (Je.prototype.now = function () {
        return new Date();
      }),
      (Je.prototype.isOffline = function (e) {
        if (!navigator.onLine) return (qe = true), (Xe = Date.now()), true;
        const module = e || AppSettings.OFFLINE_CHECK_MIN_WAIT;
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
          } catch (e) {
            n = true;
          }
          qe = n;
        }
        return (Xe = Date.now()), !navigator.onLine || n;
      }),
      (Je.prototype.setPaintMode = function (e) {
        var t = this.getWindows().getActiveWindow();
        if (t) {
          var require = t.getView();
          (require.getViewConfiguration().paintMode = e),
            GEditor.GPlatform.scheduleFrame(() => {
              require.invalidateAndResetCache(null),
                this.hasEventListeners(Ae) && this.trigger(new Ae(e));
            });
        }
      }),
      (Je.prototype.isOfflineAsync = async function () {
        if (!navigator.onLine) return (qe = true), (Xe = Date.now()), true;
        var e = !!qe,
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
                  (e = true), (t = true), n();
                }),
                  (GCore.onload = (_interopRequireDefault) => {
                    (e = false), (t = true), n();
                  });
                var GEditor = (Qe = setTimeout(() => {
                  GEditor === Qe && (Qe = null), t || ((e = true), n());
                }, GTools));
                try {
                  GCore.open("HEAD", Oe.url + "/connection/test", true),
                    (GCore.withCredentials = AppSettings.CONNECTION_TEST_WITH_CREDENTIALS),
                    (GCore.timeout = 2e3),
                    GCore.setRequestHeader("Accept", "text/plain"),
                    GCore.setRequestHeader("Content-Type", "text/plain"),
                    GCore.send();
                } catch (_interopRequireDefault) {
                  (e = true), (t = true), n();
                }
              }))();
          } finally {
            require && require.hideBusyIcon(), (qe = e);
          }
        }
        return (Xe = Date.now()), !navigator.onLine || e;
      }),
      (Je.prototype.getLinkerParam = function (e) {
        const module = window[window.GoogleAnalyticsObject];
        if (module) {
          const n = module.getAll && module.getAll();
          if (n)
            for (let module = 0; module < n.length; module++) {
              let _interopRequireDefault = n[module];
              if (!e || _interopRequireDefault.get("trackingId") === e) return _interopRequireDefault.get("linkerParam");
            }
        }
        return null;
      }),
      (Je.prototype.isLocalhost = function () {
        return "localhost" === window.location.hostname;
      }),
      (Je.prototype.getAppBaseUrl = function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        return v.default.getAppBaseUrl(exports);
      }),
      (Je.prototype.setPwaEvent = function (e) {
        if (!e || "beforeinstallprompt" !== e.type) return;
        if (
          ((this._pwaEvent = e),
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
          .then((e) => {
            e && module - e < AppSettings.DateAPI.daysToMilliseconds(30)
              ? gContainer.setProperty(
                  GInstallToDesktopAction.installPWA3timesAWeekPropName,
                  JSON.stringify([])
                )
              : gContainer
                  .getProperty(GInstallToDesktopAction.installPWA3timesAWeekPropName)
                  .then((e) => {
                    let require,
                      _interopRequireDefault = [];
                    if (e && e.length)
                      try {
                        require = JSON.parse(e);
                      } catch (e) {}
                    require || (require = []);
                    for (let e = 0, GTools = require.length; e < GTools; e++) {
                      const GTools = require[e];
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
      (Je.prototype.setItemDraggingState = function (e) {
        this._draggableItemIsDragging = e;
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
          new ne(this._amplitudeHelper);
      }),
      (Je.prototype._updateState = function () {
        var e, t, n, _interopRequireDefault, GTools, GCore, GEditor;
        const AppSettings = gDesigner.getLicense();
        null === (e = this._toolbar) ||
          undefined === e ||
          e.setEnabled(AppSettings.canAccessFreemium()),
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
        var e;
        const module =
            null === (e = this.getActiveDocument()) ||
            undefined === e ||
            null === (e = e.getEditor()) ||
            undefined === e
              ? undefined
              : e.getUndoStates(),
          require = (null == module ? undefined : module.length) && module[module.length - 1];
        return !!require && Date.now() - require.createdAt < AppSettings2.ACTIVE_USAGE_IDLE_TIME;
      }),
      (exports.exports = Je);
  }