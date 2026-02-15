/**
 * Webpack Module #1483
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(196) /* polyfill_Promise_finally */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var AppSettings = require(10) /* AppSettings */,
      a = require(231) /* module_231 */,
      GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      l = require(15) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      d = require(67) /* GRichTooltipConfig */,
      u = _interopRequireDefault(require(1484) /* module_1484 */),
      p = _interopRequireDefault(require(443) /* module_443 */),
      AppSettings2 = _interopRequireDefault(require(1485) /* AppSettings */),
      h = _interopRequireDefault(require(1486) /* module_1486 */),
      f = _interopRequireDefault(require(1487) /* module_1487 */);
    const {
        nodeEnv: m,
        isBeta: y,
        storeVendor: v,
        isCorel: _,
        isTeams: b,
      } = require(803) /* module_803 */,
      w = require(231) /* module_231 */,
      C = !v,
      x = require(859) /* module_859 */;
    require(1488) /* module_1488 */;
    require(1489) /* module_1489 */;
    const S = require(1490) /* module_1490 */;
    var E = require(1491) /* Je */,
      A = require(163) /* module_163 */,
      GAlignAction = require(866) /* GAlignAction */,
      GArrangeAction = require(869) /* GArrangeAction */,
      GAttachToPathAction = require(1176) /* GAttachToPathAction */,
      GCancelCropAction = require(1311) /* GCancelCropAction */,
      GClipAction = require(809) /* GClipAction */,
      GConnectLinesAction = require(1597) /* GConnectLinesAction */,
      GConvertToPathAction = require(810) /* GConvertToPathAction */,
      GConvertToRawPathAction = require(1320) /* GConvertToRawPathAction */,
      GCreateSymbolAction = require(608) /* GCreateSymbolAction */,
      GCropAction = require(1310) /* GCropAction */,
      GDetachSymbolAction = require(874) /* GDetachSymbolAction */,
      GResetInstanceAction = require(1177) /* GResetInstanceAction */,
      GCreateNestedCompoundAction = require(1316) /* GCreateNestedCompoundAction */,
      GCutCopyAction = require(1331) /* GCutCopyAction */,
      GDeleteAction = require(1332) /* GDeleteAction */,
      GDeselectAllAction = require(1334) /* GDeselectAllAction */,
      GDetachFromPathAction = require(1178) /* GDetachFromPathAction */,
      GDistributeAction = require(867) /* GDistributeAction */,
      GDuplicateAction = require(1315) /* GDuplicateAction */,
      GEditElementActon = require(1312) /* GEditElementActon */,
      GExportAction = require(861) /* GExportAction */,
      GFitAllAction = require(449) /* GFitAllAction */,
      GFitCurrentLayerAction = require(1598) /* GFitCurrentLayerAction */,
      GFitSelectionAction = require(566) /* GFitSelectionAction */,
      GGroupAction = require(811) /* GGroupAction */,
      GInvertSelectionAction = require(1599) /* GInvertSelectionAction */,
      GInstallToDesktopAction = require(1172) /* GInstallToDesktopAction */,
      GJoinPathsAction = require(1179) /* GJoinPathsAction */,
      GMagnificationAction = require(1167) /* GMagnificationAction */;
    const GMergeMainAction = require(812) /* GMergeMainAction */,
      GMergeSubAction = require(1600) /* GMergeSubAction */;
    var GNewAction = require(1601) /* GNewAction */,
      GNewClipboardAction = require(1602) /* GNewClipboardAction */,
      GNewWindowAction = require(1296) /* GNewWindowAction */,
      GOffsetAction = require(1317) /* GOffsetAction */,
      GOriginalViewAction = require(1282) /* GOriginalViewAction */,
      GOutlineAction = require(1185) /* GOutlineAction */,
      GOutlineViewAction = require(1297) /* GOutlineViewAction */,
      Action_view_fast_view = require(1603) /* Action_view_fast_view */,
      GPasteAction = require(877) /* GPasteAction */,
      GPasteInPlaceAction = require(1183) /* GPasteInPlaceAction */;
    const GPasteAndReplaceAction = require(876) /* GPasteAndReplaceAction */;
    var GPasteInsideAction = require(1184) /* GPasteInsideAction */,
      GPasteHereAction = require(1182) /* GPasteHereAction */,
      GPasteStyleAction = require(875) /* GPasteStyleAction */,
      GEnterLayerGroupAction = require(1605) /* GEnterLayerGroupAction */,
      GLockLayerAction = require(1606) /* GLockLayerAction */,
      GToggleLayerVisibilityAction = require(1607) /* GToggleLayerVisibilityAction */,
      GRenameLayerAction = require(1340) /* GRenameLayerAction */,
      GOpenAction = require(813) /* GOpenAction */,
      Se = require(1299) /* module_1299 */,
      GImportFontsAction = require(1608) /* GImportFontsAction */,
      GPrintAction = require(1609) /* GPrintAction */,
      GRedoAction = require(1284) /* GRedoAction */,
      GReverseOrderAction = require(1611) /* GReverseOrderAction */,
      GSaveAction = require(447) /* GSaveAction */,
      GSaveAllAction = require(1612) /* GSaveAllAction */,
      GSaveAsAction = require(445) /* GSaveAsAction */,
      GSelectAllAction = require(1333) /* GSelectAllAction */,
      GSelectByFontTypeAction = require(1180) /* GSelectByFontTypeAction */;
    const GSelectByPaintLayerAction = require(1304) /* GSelectByPaintLayerAction */,
      GSelectByBorderWidthAction = require(1305) /* GSelectByBorderWidthAction */,
      GSelectByTransparencyAction = require(1306) /* GSelectByTransparencyAction */,
      GSelectByBlendModeAction = require(1307) /* GSelectByBlendModeAction */,
      GSelectByShapeAction = require(1308) /* GSelectByShapeAction */,
      GSelectByEffectAction = require(1309) /* GSelectByEffectAction */;
    var GSettingsAction = require(1613) /* GSettingsAction */,
      $GShowGridAction = require(1285) /* GShowGridAction */,
      GShowGuideLinesAction = require(1169) /* GShowGuideLinesAction */,
      GShowSymbolLabelsAction = require(1286) /* GShowSymbolLabelsAction */,
      GShowRulersAction = require(1614) /* GShowRulersAction */,
      GShowSlicesAction = require(1615) /* GShowSlicesAction */,
      GSimplifyAction = require(1318) /* GSimplifyAction */,
      GSnapUnitAction = require(1295) /* GSnapUnitAction */,
      GSplitAction = require(870) /* GSplitAction */,
      GSplitLineAction = require(1319) /* GSplitLineAction */,
      GSplitPathAction = require(873) /* GSplitPathAction */,
      GToggleGuideAction = require(1287) /* GToggleGuideAction */,
      GToggleSnapAction = require(1288) /* GToggleSnapAction */,
      GToggleSnapZonesAction = require(1289) /* GToggleSnapZonesAction */,
      GPlaceImportAction = require(1283) /* GPlaceImportAction */,
      GLinkImageAction = require(1280) /* GLinkImageAction */,
      GTransformAction = require(871) /* GTransformAction */,
      GUndoAction = require(1171) /* GUndoAction */,
      GVectorizeBorderAction = require(872) /* GVectorizeBorderAction */,
      GVectorizeImageAction = require(1616) /* GVectorizeImageAction */,
      GConvertToImageAction = require(1314) /* GConvertToImageAction */,
      GZoomInAction = require(1290) /* GZoomInAction */,
      GZoomOutAction = require(1291) /* GZoomOutAction */,
      GPlayAction = require(1617) /* GPlayAction */,
      GShowEffectsAction = require(1619) /* GShowEffectsAction */,
      GToggleFullscreenAction = require(1335) /* GToggleFullscreenAction */,
      GGravitCloudAction = require(448) /* GGravitCloudAction */,
      GVersionsHistoryAction = require(1256) /* GVersionsHistoryAction */,
      GSwitchLanguageAction = require(1620) /* GSwitchLanguageAction */,
      GOpenLinkAction = require(1621) /* GOpenLinkAction */,
      GOpenQuickHelpScreenAction = require(1336) /* GOpenQuickHelpScreenAction */,
      GNewFromTemplateAction = require(1623) /* GNewFromTemplateAction */,
      GOpenRecentAction = require(843) /* GOpenRecentAction */,
      GMaskWithShapeAction = require(1181) /* GMaskWithShapeAction */,
      GOpenWelcomeScreenAction = require(1624) /* GOpenWelcomeScreenAction */,
      GEnhancedTooltipsAction = require(1342) /* GEnhancedTooltipsAction */,
      Ct = (require(1298) /* GUseCouponAction */, require(1625) /* GCheckForUpdatesAction */),
      xt = require(1626) /* module_1626 */,
      GCloudSynchronizationAction = require(1293) /* GCloudSynchronizationAction */,
      GCloudSynchronizationInfoAction = require(1627) /* GCloudSynchronizationInfoAction */,
      GShareAction = require(1628) /* GShareAction */,
      GSharePointCheckOutAction = require(1629) /* GSharePointCheckOutAction */,
      GSharePointCheckInAction = require(1630) /* GSharePointCheckInAction */,
      GQuitAction = require(1632) /* GQuitAction */,
      Action_example_files = require(1633) /* Action_example_files */,
      Lt = (require(1158) /* Action_help_purchase */, require(1634) /* GToggleTouchAction */),
      GOpenAccountSettingsAction = require(1635) /* GOpenAccountSettingsAction */,
      GLogoutAction = require(1636) /* GLogoutAction */,
      GToggleProBETALicenseAction = require(1637) /* GToggleProBETALicenseAction */;
    const GImportImageFromIOSAction = require(1638) /* GImportImageFromIOSAction */;
    var GOpenSharedFileAction = require(1254) /* GOpenSharedFileAction */,
      GTranslationToolAction = require(1639) /* GTranslationToolAction */,
      GSwitchWebcdrAction = require(1641) /* GSwitchWebcdrAction */;
    require(1642) /* GTogglePaintLayersVisibilityAction */;
    const GShowShortcutsAction = require(1643) /* GShowShortcutsAction */,
      GEyeDropperAction = require(1645) /* GEyeDropperAction */,
      $GShowSelectionHandlesAction = require(1646) /* GShowSelectionHandlesAction */,
      GChangeOpacityAction = require(1647) /* GChangeOpacityAction */,
      GCycleThroughLayersAction = require(1344) /* GCycleThroughLayersAction */,
      GChangeAnchorPointsJointTypeMainAction = require(1345) /* GChangeAnchorPointsJointTypeMainAction */,
      GChangeAnchorPointsJointTypeSubAction = require(1648) /* GChangeAnchorPointsJointTypeSubAction */,
      GCloseActiveWindowAction = require(1649) /* GCloseActiveWindowAction */,
      GToggleMultiPageModeAction = require(1650) /* GToggleMultiPageModeAction */,
      GChangeActivePageAction = require(1341) /* GChangeActivePageAction */,
      GChangeActiveWindowAction = require(1651) /* GChangeActiveWindowAction */,
      GSwapPaintLayersAction = require(1652) /* GSwapPaintLayersAction */,
      GCreateNewLayerAction = require(1653) /* GCreateNewLayerAction */;
    require(78) /* GDocumentEvent */, require(86) /* module_86 */;
    var GUnloadEvent = require(1346) /* GUnloadEvent */,
      Zt = (require(1347) /* module_1347 */, require(1160) /* GAppearanceProperties */),
      en = require(1261) /* module_1261 */,
      tn = require(1162) /* module_1162 */,
      GBoolOpProperties = require(1264) /* GBoolOpProperties */,
      GEffectProperties = require(1262) /* GEffectProperties */,
      GEllipseProperties = require(1265) /* GEllipseProperties */,
      GImageProperties = require(1266) /* GImageProperties */,
      GFrameProperties = require(1654) /* GFrameProperties */,
      GGroupFrameProperties = require(1655) /* GGroupFrameProperties */,
      GItemProperties = require(1656) /* GItemProperties */,
      GInspectorSidebar = require(864) /* GInspectorSidebar */,
      GOutlineSidebar = require(1260) /* GOutlineSidebar */,
      GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */,
      GPathProperties = require(1269) /* GPathProperties */,
      hn = require(1150) /* module_1150 */,
      fn = require(1657) /* module_1657 */,
      GPolygonProperties = require(1270) /* GPolygonProperties */,
      GRectangleProperties = require(1271) /* GRectangleProperties */,
      GPageProperties = require(1339) /* GPageProperties */,
      GSymbolProperties = require(1658) /* GSymbolProperties */,
      GSceneProperties = require(1659) /* GSceneProperties */,
      GSliceProperties = require(1272) /* GSliceProperties */,
      GTextProperties = require(1273) /* GTextProperties */,
      GDimensionProperties = require(1294) /* GDimensionProperties */,
      GTransformProperties = require(1660) /* GTransformProperties */,
      GAlignProperties = require(1274) /* GAlignProperties */,
      GSymbolsSidebar = require(1661) /* GSymbolsSidebar */,
      GLibrarySidebar = require(1662) /* GLibrarySidebar */,
      GSoftwareUpdatePanel = require(1665) /* GSoftwareUpdatePanel */,
      GNotificationPanel = require(1666) /* GNotificationPanel */,
      GCollaborativeTextPanel = require(1668) /* GCollaborativeTextPanel */,
      GDocumentNotificationsPanel = require(1669) /* GDocumentNotificationsPanel */,
      In = require(1670) /* module_1670 */,
      GContainer = require(85) /* GContainer */,
      On = require(1672) /* module_1672 */,
      Fn = (require(237) /* Item */, require(1673) /* module_1673 */),
      Rn = require(119) /* module_119 */,
      Mn = require(1674) /* module_1674 */,
      Nn = require(44) /* GSystemDialog */,
      Bn = require(860) /* module_860 */,
      Un = require(1675) /* module_1675 */,
      $n = require(337) /* stub_requires_1098 */,
      jn = require(1325) /* module_1325 */,
      Kn = require(785) /* module_785 */,
      GSoftwareUpdateManager = require(1676) /* GSoftwareUpdateManager */,
      GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
      Wn = require(292) /* module_292 */;
    const zn = AppSettings.FILE_FORMATS.find((GShowGridAction) => GShowGridAction.default).ext,
      qn = AppSettings.FILE_FORMATS.filter((GShowGridAction) => GShowGridAction.secondary).map((GShowGridAction) => GShowGridAction.ext);
    var Yn = require(1678) /* module_1678 */;
    const Xn = new (require(1343) /* module_1343 */)();
    Xn.init();
    const Qn = require(1684) /* module_1684 */,
      Jn = require(1686) /* module_1686 */,
      Zn = require(1687) /* module_1687 */,
      eo = require(1255) /* module_1255 */,
      {
        isExecutingOnMSTeams: to,
        isExecutingOnMSTeamsSync: no,
        isTeamsChannel: oo,
        getTeamsLocale: io,
      } = p.default;
    require(18) /* MenuItemBuilder */, require(1688) /* module_1688 */, require(1154) /* module_1154 */, require(1689) /* module_1689 */, require(1690) /* stub_requires_1 */, require(1691) /* module_1691 */, require(1693) /* GLongPressEvent */, require(1694) /* module_1694 */;
    var ao = window;
    const ro = !!/^trunk/.test("production") && !y;
    (ao.gApi = require(10) /* AppSettings */.gApi), (ao.gApi.webcdr = null);
    const so = async () => S.checkMaintenance();
    so(),
      ro &&
        ((ao.gApi.url = AppSettings.cloudTrunkURL),
        (ao.gApi.managementUrl =
          "https://cloud-management-trunk.herokuapp.com"),
        AppSettings.trunkWebsocketURL && (ao.gApi.websocketURL = AppSettings.trunkWebsocketURL),
        GCore.GTranslationEvents.addEventListener(
          GCore.GTranslationNotificationEvent,
          (GShowGridAction) => {
            let { project: module, type: require, content: _interopRequireDefault, data: AppSettings } = GShowGridAction;
            if (module === GCore.GTranslation.Projects.Designer)
              switch (require) {
                case GCore.GTranslationNotificationEvent.Type.Warning:
                  gContainer.getRuntime() === GContainer.Runtime.Electron
                    ? console.error(_interopRequireDefault)
                    : console.error({ content: _interopRequireDefault, data: AppSettings });
              }
          },
          undefined
        )),
      y &&
        (_ && b && AppSettings.cloudTeamsURL
          ? (ao.gApi.url = AppSettings.cloudTeamsURL)
          : AppSettings.cloudBetaURL && (ao.gApi.url = AppSettings.cloudBetaURL),
        AppSettings.betaWebsocketURL && (ao.gApi.websocketURL = AppSettings.betaWebsocketURL)),
      w.IS_PRODUCTION &&
        (AppSettings.cloudURL && (ao.gApi.url = AppSettings.cloudURL),
        AppSettings.websocketURL && (ao.gApi.websocketURL = AppSettings.websocketURL)),
      (ao.gApi.lang = GCore.GLocale.getLanguage());
    let lo = null;
    (ao.gravit = null),
      require(1738) /* module_1738 */,
      (ao.gDesigner = new E()),
      ao.gDesigner.getUser(),
      (ao.gQA = h.default);
    const co = ao.gDesigner.isOfflineAsync();
    ao.gInAppPurchase = Yn.newInAppPurchase(v);
    const { GA: { customDimensions: uo } = {} } = require(10) /* AppSettings */;
    gDesigner.addEventListener(Wn, (GShowGridAction) => {
      let { user: module } = GShowGridAction;
      module &&
        !gDesigner.isAnonymous() &&
        "undefined" != typeof dataLayer &&
        uo &&
        uo.forEach((GShowGridAction) => dataLayer.push({ [GShowGridAction]: undefined }));
    }),
      (gDesigner._translationManager = Xn);
    var po = $("<div></div>").addClass("g-drag-image").appendTo($("body"));
    (ao.gDragImage = function () {
      return po.empty().attr({ class: "g-drag-image", style: "" });
    }),
      (ao.gPatternChooser = null),
      (ao.gPatternChooserNormal = null),
      (ao.gPatternChooserTouch = null),
      (ao.gContainer = null);
    exports.exports = async function (GShowGridAction) {
      (ao.gContainer = GShowGridAction), (0, CollaborationMergeUtils._tryAndCatch)(() => $n.start());
      let module = null;
      const require = gDesigner.getUser();
      require.then((GShowGridAction) => {
        GShowGridAction && (module = AppSettings.gApi.isEnabledSubscriptions());
      }),
        (window.onerror = function (GShowGridAction, GShowSelectionHandlesAction, n, _interopRequireDefault, AppSettings) {
          Mn.isPluginError(AppSettings)
            ? Nn.alert(AppSettings.message)
            : ("production" === m ||
                "trunk" === m ||
                "lts" === m ||
                "rc" === m) &&
              Rn.isOnline();
        }),
        x.getRuntimeCode() === AppSettings.Runtime.WindowsStore.code && new Qn().init(),
        y && !_ && new Jn().init(),
        _
          ? (gContainer.setCookie({
              name: "_access_token",
              value: "b03f5f7f11d50a3a",
            }),
            gDesigner.setSupportedBrowsers([
              l.GPlatform.constructor.WebBrowser.Chrome,
              l.GPlatform.constructor.WebBrowser.Firefox,
              l.GPlatform.constructor.WebBrowser.Edge,
            ]),
            gDesigner.setSupportedTabletBrowsers([
              {
                operatingSystem: GCore.GSystem.OperatingSystem.Unix,
                platform: l.GPlatform.constructor.WebBrowser.Chrome,
              },
              {
                operatingSystem: GCore.GSystem.OperatingSystem.OSX_IOS,
                platform: l.GPlatform.constructor.WebBrowser.Safari,
              },
            ]))
          : (gDesigner.setSupportedBrowsers([
              l.GPlatform.constructor.WebBrowser.Chrome,
              l.GPlatform.constructor.WebBrowser.Firefox,
              l.GPlatform.constructor.WebBrowser.Safari,
              l.GPlatform.constructor.WebBrowser.Edge,
            ]),
            gDesigner.setSupportedTabletBrowsers([
              {
                operatingSystem: GCore.GSystem.OperatingSystem.Unix,
                platform: l.GPlatform.constructor.WebBrowser.Chrome,
              },
              {
                operatingSystem: GCore.GSystem.OperatingSystem.OSX_IOS,
                platform: l.GPlatform.constructor.WebBrowser.Safari,
              },
            ]));
      if (await so()) {
        if (gContainer.getRuntime() !== GContainer.Runtime.Electron || !(await require)) {
          $("<iframe></iframe>")
            .addClass("cross-frame")
            .attr("src", "assets/static/maintenance/index.html")
            .appendTo($("body"));
          const GShowGridAction = setInterval(async () => {
            (await so()) || (clearInterval(GShowGridAction), location.reload());
          }, 6e4);
          return;
        }
      }
      const _interopRequireDefault = x.getRuntimeCode();
      _interopRequireDefault && gContainer.setCookie({ name: "_ginst", value: _interopRequireDefault, url: AppSettings.gApi.url });
      const p = new URL(window.location.href).searchParams;
      if (
        (p &&
          p.has("pd") &&
          gContainer.setCookie({ name: "_gtpd", value: p.get("pd") }),
        p && p.has("newuser") && gDesigner.setShowCreateAccount(true),
        p && p.has("dt")
          ? gContainer.setCookie({ name: "_gdt", value: p.get("dt") })
          : gContainer.setCookie({ name: "_gdt", value: "" }),
        p && p.has("coupon")
          ? gContainer.setCookie({ name: "_gcoupon", value: p.get("coupon") })
          : gContainer.setCookie({ name: "_gcoupon", value: "" }),
        p &&
          p.has("recaptchaToken") &&
          gContainer.setCookie({
            name: "__grecaptchaToken",
            value: p.get("recaptchaToken"),
          }),
        p &&
          p.has("x-clickref") &&
          (gContainer.setCookie({
            name: "cb_prf_corelcorp",
            value: p.get("x-clickref"),
          }),
          gContainer.setCookie({ name: "dynPrice_xparamCookie", value: p })),
        p &&
          p.has("magiclink") &&
          (await gContainer
            .signWithMagicLink(p.get("magiclink"), p.get("d"), p.get("token"))
            .catch(() => null),
          (module = AppSettings.gApi.isEnabledSubscriptions())),
        p)
      ) {
        gDesigner.setUTM(
          new Map(
            Array.from(p.entries()).filter((GShowGridAction) => {
              let [GShowSelectionHandlesAction] = GShowGridAction;
              return /^utm/.test(GShowSelectionHandlesAction);
            })
          )
        );
        const GShowGridAction = ["firstName", "lastName", "email", "to"],
          GShowSelectionHandlesAction = Array.from(p.entries())
            .filter((GShowSelectionHandlesAction) => {
              let [require] = GShowSelectionHandlesAction;
              return GShowGridAction.includes(require);
            })
            .reduce((GShowGridAction, GShowSelectionHandlesAction) => {
              let [require, _interopRequireDefault] = GShowSelectionHandlesAction;
              return Object.assign(GShowGridAction, { [require]: _interopRequireDefault });
            }, {});
        Object.keys(GShowSelectionHandlesAction).length && gDesigner.setSignupOptions(GShowSelectionHandlesAction);
      }
      var h, b, w, S;
      gContainer.setCookie({
        name: "_gdesignerv",
        value: "3.15.0",
        url: AppSettings.gApi.url,
      }),
        gDesigner.setEnv(m),
        gContainer.getRuntime() === GContainer.Runtime.Electron ||
          _ ||
          AppSettings.gApi.initRecaptcha(),
        (async function (GShowGridAction, GShowSelectionHandlesAction) {
          const require = await gDesigner.getUser();
          (0, AppSettings2.default)(GShowGridAction, GShowSelectionHandlesAction, gDesigner.getAppBaseUrl(), require);
        })(gContainer.getRuntime(), v),
        !y ||
          (gContainer.getRuntime() !== GContainer.Runtime.Browser &&
            gContainer.getRuntime() !== GContainer.Runtime.PWA) ||
          ((h = window),
          (b = document),
          (h.hj =
            h.hj ||
            function () {
              (h.hj.q = h.hj.q || []).push(arguments);
            }),
          (h._hjSettings = { hjid: 754178, hjsv: 6 }),
          (w = b.getElementsByTagName("head")[0]),
          ((S = b.createElement("script")).async = 1),
          (S.src =
            "https://static.hotjar.com/c/hotjar-" +
            h._hjSettings.hjid +
            ".js?sv=" +
            h._hjSettings.hjsv),
          w.appendChild(S)),
        gDesigner.setStoreVendor(v),
        gDesigner.setVersion("3.15.0"),
        gDesigner.setCommitSHA("566771f4dff3952a55c0d9d3c130f7e787dfdfa7"),
        gDesigner.setBuildNum("8795"),
        gDesigner.setVersionFriendlyName("i015.3");
      let E,
        Wn = (0, CollaborationMergeUtils._tryAndCatch)(() => gDesigner.preInit(module)),
        Yn = gContainer.handleDeepLinking();
      Yn &&
        (E = await gDesigner
          .runDeepLink(Yn.link, Yn.options)
          .then(() => null)
          .catch((GShowGridAction) => GShowGridAction));
      const io = async () => {
        await new Promise((GShowGridAction) => gContainer.initLanguage(GShowGridAction)),
          gDesigner.hasEventListeners(GApplicationStatusEvent) &&
            gDesigner.trigger(new GApplicationStatusEvent(GApplicationStatusEvent.Status.Init)),
          gDesigner.setIsBeta(y),
          (gravit = {
            plugins: [],
            actions: [new GNewAction(), new GNewFromTemplateAction(), new GNewClipboardAction(), new GOpenAction(), new Se()]
              .concat([
                new GGravitCloudAction(GGravitCloudAction.Actions.Open),
                new GOpenRecentAction(),
                new GSaveAction(),
                new GSaveAsAction(zn),
                ...qn.map((GShowGridAction) => new GSaveAsAction(GShowGridAction)),
                new GGravitCloudAction(GGravitCloudAction.Actions.SaveAs),
                new GCloudSynchronizationAction(),
                new GCloudSynchronizationInfoAction(),
                new GCloseActiveWindowAction(),
                new GVersionsHistoryAction(),
                new GOpenSharedFileAction(),
              ])
              .concat([new GSaveAllAction()])
              .concat([
                new GPlaceImportAction(),
                new GImportImageFromIOSAction(GImportImageFromIOSAction.Source.PHOTOS),
                new GImportImageFromIOSAction(GImportImageFromIOSAction.Source.FILES),
                new GLinkImageAction(),
                new xt(new GImportFontsAction()),
                _ ? new xt(new GExportAction()) : new GExportAction(),
              ])
              .concat(
                A.FileTypes.filter(
                  (GShowGridAction) =>
                    GShowGridAction.store &&
                    "cdrapp" !== GShowGridAction.ext &&
                    "des" !== GShowGridAction.ext &&
                    "gvdesign" !== GShowGridAction.ext &&
                    "pdf" !== GShowGridAction.ext
                ).map((GShowGridAction) => new GSaveAsAction(GShowGridAction.ext))
              )
              .concat([
                new GSaveAsAction("pdf", { dpi: 72 }),
                new GSaveAsAction("pdf", { dpi: 96 }),
                new GSaveAsAction("pdf", { dpi: 150 }),
                new xt(new GSaveAsAction("pdf", { dpi: 300 })),
                _ ? new xt(new GExportAction({ format: "pdf" })) : new GExportAction({ format: "pdf" }),
              ])
              .concat(
                [
                  new GSharePointCheckOutAction(),
                  new GSharePointCheckInAction(),
                  new GShareAction(),
                  new GPrintAction(),
                  new GInstallToDesktopAction(),
                  new GQuitAction(),
                  new GUndoAction(),
                  new GRedoAction(),
                  new GCutCopyAction(true),
                  new GCutCopyAction(false),
                  new GPasteAction(),
                  new GPasteInPlaceAction(),
                  new GPasteAndReplaceAction(),
                  new GPasteInsideAction(),
                  new GPasteHereAction(),
                  new GPasteStyleAction(),
                  new GDeleteAction(),
                  new GDuplicateAction(),
                  new GEditElementActon(),
                  new GSelectAllAction(),
                  new GDeselectAllAction(),
                  new GInvertSelectionAction(),
                  new GSelectByFontTypeAction(),
                  new GSelectByPaintLayerAction(GSelectByPaintLayerAction.Type.Fill),
                  new GSelectByPaintLayerAction(GSelectByPaintLayerAction.Type.Border),
                  new GSelectByPaintLayerAction(GSelectByPaintLayerAction.Type.FillAndBorder),
                  new GSelectByBorderWidthAction(),
                  new GSelectByTransparencyAction(),
                  new GSelectByBlendModeAction(),
                  new GSelectByShapeAction(),
                  new GSelectByEffectAction(),
                  new GSettingsAction(),
                  new GEyeDropperAction(GEyeDropperAction.Type.Fill),
                  new GEyeDropperAction(GEyeDropperAction.Type.Border),
                  new GRenameLayerAction(),
                  new GChangeOpacityAction(),
                  new GArrangeAction(GTools.GEditor.ArrangeOrderType.SendToFront),
                  new GArrangeAction(GTools.GEditor.ArrangeOrderType.BringForward),
                  new GArrangeAction(GTools.GEditor.ArrangeOrderType.SendBackward),
                  new GArrangeAction(GTools.GEditor.ArrangeOrderType.SendToBack),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignLeft),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignCenter),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignRight),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignTop),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignMiddle),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignBottom),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignJustifyHorizontal),
                  new GAlignAction(GTools.GEditor.ArrangeAlignType.AlignJustifyVertical),
                  new GDistributeAction(GDistributeAction.Type.Horizontal),
                  new GDistributeAction(GDistributeAction.Type.Vertical),
                  new GSnapUnitAction(GSnapUnitAction.Type.FullUnit),
                  new GSnapUnitAction(GSnapUnitAction.Type.HalfUnit),
                  new GTransformAction(GTransformAction.Type.Rotate45Left),
                  new GTransformAction(GTransformAction.Type.Rotate90Left),
                  new GTransformAction(GTransformAction.Type.Rotate180Left),
                  new GTransformAction(GTransformAction.Type.Rotate45Right),
                  new GTransformAction(GTransformAction.Type.Rotate90Right),
                  new GTransformAction(GTransformAction.Type.Rotate180Right),
                  new GTransformAction(GTransformAction.Type.FlipVertical),
                  new GTransformAction(GTransformAction.Type.FlipHorizontal),
                  new GGroupAction(),
                  new GClipAction(),
                  new GSplitAction(),
                  new GMaskWithShapeAction(),
                  new GCropAction(),
                  new GCancelCropAction(),
                  new GMergeMainAction(GMergeSubAction),
                  new GMergeSubAction(GMergeSubAction.Type.Intersect),
                  new GMergeSubAction(GMergeSubAction.Type.Difference),
                  new GMergeSubAction(GMergeSubAction.Type.Subtract),
                  new GMergeSubAction(GMergeSubAction.Type.Union),
                  new GCreateNestedCompoundAction(),
                  new GJoinPathsAction(),
                  new GSplitPathAction(),
                  new GConvertToPathAction(),
                  new GConvertToRawPathAction(),
                  new GOutlineAction(),
                  new GOffsetAction(),
                  new GVectorizeBorderAction(),
                  new GVectorizeImageAction(),
                  new GAttachToPathAction(),
                  new GDetachFromPathAction(),
                  new GSimplifyAction(),
                  new GConnectLinesAction(),
                  new GSplitLineAction(),
                  new GReverseOrderAction(),
                  new GCreateSymbolAction(),
                  new GDetachSymbolAction(),
                  new GResetInstanceAction(),
                  new GConvertToImageAction(),
                  new GLockLayerAction(),
                  new GChangeAnchorPointsJointTypeMainAction(GChangeAnchorPointsJointTypeSubAction),
                  new GChangeAnchorPointsJointTypeSubAction(GChangeAnchorPointsJointTypeSubAction.Type.Straight),
                  new GChangeAnchorPointsJointTypeSubAction(GChangeAnchorPointsJointTypeSubAction.Type.Mirrored),
                  new GChangeAnchorPointsJointTypeSubAction(GChangeAnchorPointsJointTypeSubAction.Type.Disconnected),
                  new GChangeAnchorPointsJointTypeSubAction(GChangeAnchorPointsJointTypeSubAction.Type.Asymmetric),
                  new GChangeAnchorPointsJointTypeSubAction(GChangeAnchorPointsJointTypeSubAction.Type.Connector),
                  new GSwapPaintLayersAction(),
                  new GCreateNewLayerAction(),
                  new GOriginalViewAction(),
                  new GFitSelectionAction(),
                  new GFitCurrentLayerAction(),
                  new GFitAllAction(),
                  new GEnterLayerGroupAction(false),
                  new GEnterLayerGroupAction(true),
                  new GToggleLayerVisibilityAction(),
                  new GCycleThroughLayersAction(GCycleThroughLayersAction.Type.Next),
                  new GCycleThroughLayersAction(GCycleThroughLayersAction.Type.Previous),
                  new GToggleMultiPageModeAction(),
                  new GChangeActivePageAction(GChangeActivePageAction.Type.Next),
                  new GChangeActivePageAction(GChangeActivePageAction.Type.Previous),
                  new GChangeActiveWindowAction(GChangeActiveWindowAction.Type.Next),
                  new GChangeActiveWindowAction(GChangeActiveWindowAction.Type.Previous),
                ].concat(GMagnificationAction.ZOOM_LEVELS.map((GShowGridAction) => new GMagnificationAction(GShowGridAction)))
              )
              .concat([
                new GZoomInAction(),
                new GZoomOutAction(),
                new GOutlineViewAction(),
                new Action_view_fast_view(),
                new GShowRulersAction(),
                new GShowGuideLinesAction(),
                new GShowSymbolLabelsAction(),
                new $GShowGridAction(),
                new GShowSlicesAction(),
                new GShowEffectsAction(),
                new $GShowSelectionHandlesAction(),
                new GToggleSnapAction(),
                ...(AppSettings.HAS_SNAPZONES ? [new GToggleSnapZonesAction()] : []),
                new GToggleGuideAction(
                  GTools.GGridGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.snap-to-grid")
                  )
                ),
                new GToggleGuideAction(
                  GTools.GGuideLinesGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.snap-to-guide-lines")
                  )
                ),
                new GToggleGuideAction(
                  GTools.GFullPixelsGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.snap-to-full-pixels")
                  )
                ),
                new GToggleGuideAction(
                  GTools.GPointsGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCommonNames",
                      "text.snap-to-anchor-points"
                    )
                  )
                ),
                new GToggleGuideAction(
                  GTools.GBBoxGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.snap-to-shapes")
                  )
                ),
                new GToggleGuideAction(
                  GTools.GPageGuide.ID,
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GCommonNames", "text.snap-to-pages")
                  )
                ),
                new GNewWindowAction(),
                new GPlayAction(),
                new GToggleFullscreenAction(),
                new xt(new Lt()),
              ])
              .concat(
                GOpenLinkAction.Links.filter((GShowGridAction) => "eula" !== GShowGridAction.name).map((GShowGridAction) => new GOpenLinkAction(GShowGridAction)),
                _ ? [] : new GEnhancedTooltipsAction(),
                new Action_example_files(),
                new GOpenQuickHelpScreenAction()
              )
              .concat(
                ...(no()
                  ? []
                  : GContainer.GravitLanguages.map(
                      (GShowGridAction) => new GSwitchLanguageAction(GShowGridAction, Xn.getTranslationRealName(GShowGridAction))
                    ))
              )
              .concat([
                ...(_ ? [new GSwitchWebcdrAction("STAGING", ro), new GSwitchWebcdrAction("BETA", y)] : []),
                new GOpenWelcomeScreenAction(),
                ...(C ? [new Ct()] : []),
                ...ft.Links.filter((GShowGridAction) => "eula" === GShowGridAction.name).map(
                  (GShowGridAction) => new GOpenLinkAction(GShowGridAction)
                ),
                new GTranslationToolAction(),
                ...(_ ? [new GToggleProBETALicenseAction()] : []),
                new GShowShortcutsAction(),
              ])
              .concat([new GOpenAccountSettingsAction(), new GLogoutAction()]),
            sidebars: [
              new GInspectorSidebar(),
              ...(AppSettings.HAS_ANNOTATIONS ? [new GAnnotationsSidebar()] : []),
              new GOutlineSidebar(),
              new GLibrarySidebar(),
              new GSymbolsSidebar(),
            ],
            panels: [],
            footer: [new GSoftwareUpdatePanel(), new GNotificationPanel(), ...(_ ? [new GCollaborativeTextPanel(), new GDocumentNotificationsPanel()] : [])],
            tools: [
              {
                tool: GTools.GPointerTool,
                toolString: "GPointerTool",
                title: _
                  ? GCore.GLocale.get(
                      new GCore.GLocaleKey("GCommonNames", "tool.pointer")
                    )
                  : GCore.GLocale.get(new GCore.GLocaleKey("GPointerTool", "name")),
                group: "select",
                key: "V",
                icon: "gravit-icon-cursor-filled",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPointerTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPointerTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["V"],
                  video: ao.gApi.getRichTooltipVideoURL("Pointer_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GSubSelectTool,
                toolString: "GSubSelectTool",
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey("GSubSelectTool", "name")
                ),
                group: "select",
                key: "D",
                icon: _ ? "gravit-icon-cursor-subselect" : "gravit-icon-cursor",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GSubSelectTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GSubSelectTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["D"],
                  video: ao.gApi.getRichTooltipVideoURL("Subselect_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GLassoTool,
                toolString: "GLassoTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GLassoTool", "name")),
                group: "select",
                category: "special",
                key: "O",
                icon: "gravit-icon-rope",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLassoTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLassoTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["O"],
                  video: ao.gApi.getRichTooltipVideoURL("Lasso_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GLayerTool,
                toolString: "GLayerTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GLayerTool", "name")),
                group: "select",
                category: "special",
                icon: "gravit-icon-sheets",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLayerTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLayerTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GSliceTool,
                toolString: "GSliceTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GSliceTool", "name")),
                group: "select",
                category: "other",
                key: "S",
                icon: "gravit-icon-slice",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GSliceTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GSliceTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["S"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GPenTool,
                toolString: "GPenTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GPenTool", "name")),
                group: "path",
                key: "P",
                icon: "gravit-icon-pen",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPenTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPenTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["P"],
                  video: ao.gApi.getRichTooltipVideoURL("Pen_Too.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GBezigonTool,
                toolString: "GBezigonTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GBezigonTool", "name")),
                group: "path",
                key: "B",
                icon: "gravit-icon-pen-filled",
                pro: true,
                feature: "bezigon",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBezigonTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GBezigonTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["B"],
                  isPro: gDesigner.isProTooltipNeeded("bezigon"),
                  video: ao.gApi.getRichTooltipVideoURL("Bezigon_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GKnifeTool,
                toolString: "GKnifeTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GKnifeTool", "name")),
                group: "knife",
                category: "modify",
                key: "K",
                icon: "gravit-icon-scalpel",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GKnifeTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GKnifeTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["K"],
                  video: ao.gApi.getRichTooltipVideoURL("Knife_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GFreehandTool,
                toolString: "GFreehandTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GFreehandTool", "name")),
                group: "path",
                category: "hand",
                icon: "gravit-icon-free-hand-draw",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GFreehandTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GFreehandTool", "tooltip-description")
                  ),
                  middle: false,
                  video: ao.gApi.getRichTooltipVideoURL("Freehand_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GMagicTool,
                toolString: "GMagicTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GMagicTool", "name")),
                group: "knife",
                category: "modify",
                icon: "gravit-icon-freehand-shape",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GMagicTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GMagicTool", "tooltip-description")
                  ),
                  middle: false,
                  video: ao.gApi.getRichTooltipVideoURL(
                    "Freehand_Shaping_Tool.mp4"
                  ),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GLineTool,
                toolString: "GLineTool",
                title: GCore.GLocale.get(
                  _
                    ? new GCore.GLocaleKey("GCommonNames", "tool.line")
                    : new GCore.GLocaleKey("GLineTool", "name")
                ),
                group: "shape",
                key: "L",
                icon: "gravit-icon-line",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLineTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GLineTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["L"],
                  video: ao.gApi.getRichTooltipVideoURL("Line_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GRectangleTool,
                toolString: "GRectangleTool",
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey("GRectangleTool", "name")
                ),
                group: "shape",
                key: "R",
                shortcuts: [["M"]],
                icon: "gravit-icon-rectangle",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GRectangleTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GRectangleTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["R"],
                  video: ao.gApi.getRichTooltipVideoURL("Rectangle_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GEllipseTool,
                toolString: "GEllipseTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GEllipseTool", "name")),
                group: "shape",
                key: "E",
                icon: "gravit-icon-ellipse",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GEllipseTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GEllipseTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["E"],
                  video: ao.gApi.getRichTooltipVideoURL("Ellipse_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GPolygonTool,
                toolString: "GPolygonTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GPolygonTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-polygon",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPolygonTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GPolygonTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GTriangleTool,
                toolString: "GTriangleTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GTriangleTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-triangle",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GTriangleTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GTriangleTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GStarTool,
                toolString: "GStarTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GStarTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-star",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GStarTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GStarTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GTextTool,
                toolString: "GTextTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GTextTool", "name")),
                group: "insert",
                key: "T",
                icon: "gravit-icon-textbox",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GTextTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GTextTool", "tooltip-description")
                  ),
                  middle: false,
                  video: ao.gApi.getRichTooltipVideoURL("Text_Tool.mp4"),
                  shortcut: ["T"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GHandTool,
                toolString: "GHandTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GHandTool", "name")),
                group: "view",
                key: "H",
                icon: "gravit-icon-move",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GHandTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GHandTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["H"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: GTools.GZoomTool,
                toolString: "GZoomTool",
                title: GCore.GLocale.get(new GCore.GLocaleKey("GZoomTool", "name")),
                group: "view",
                key: "Z",
                icon: "gravit-icon-zoom-in",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: GCore.GLocale.get(
                    new GCore.GLocaleKey("GZoomTool", "tooltip-title")
                  ),
                  description: GCore.GLocale.get(
                    new GCore.GLocaleKey("GZoomTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["Z"],
                  learnMore:
                    "",
                }),
              },
            ],
            properties: [
              new GDimensionProperties(),
              new GAlignProperties(),
              new GTransformProperties(),
              new GPageProperties(),
              new GSceneProperties(),
              new GGroupFrameProperties(),
              new GFrameProperties(),
              new GItemProperties(),
              new GPolygonProperties(),
              new GPathProperties(),
              new GEllipseProperties(),
              new GTextProperties(),
              new GImageProperties(),
              new GRectangleProperties(),
              new GSliceProperties(),
              new GBoolOpProperties(),
              new GSymbolProperties(),
              new Zt(),
              new en(),
              new tn(),
              new GEffectProperties(),
            ],
          }),
          "function" != typeof window.gdb_initsavestepsaction ||
            y ||
            a.IS_RC ||
            window.gdb_initsavestepsaction(window.gravit.actions, GSaveAction),
          "function" == typeof window.gdb_initsetupsystemdateaction &&
            window.gdb_initsetupsystemdateaction(window.gravit.actions),
          "function" != typeof window.gdb_inittranslationtoolaction ||
            y ||
            a.IS_RC ||
            window.gdb_inittranslationtoolaction(window.gravit.actions, GSaveAction),
          "function" != typeof window.gdb_initrecordgravitaction ||
            y ||
            a.IS_RC ||
            window.gdb_initrecordgravitaction(window.gravit.actions, GSaveAction);
        let module = new In(GShowGridAction._storage);
        module.load(),
          module.init(gravit),
          (ao.gPatternChooserNormal = new hn()),
          (ao.gPatternChooserTouch = new fn()),
          gDesigner.isTouchEnabled()
            ? (ao.gPatternChooser = ao.gPatternChooserTouch)
            : (ao.gPatternChooser = ao.gPatternChooserNormal),
          gDesigner.init(),
          gDesigner.relayout(),
          await gDesigner.start().finally(() => {
            gDesigner.isTouchDevice() &&
              !gDesigner.isTouchEnabled() &&
              AppSettings.TOUCH_LAYOUT &&
              (gDesigner.stats("touch-dialog_open"),
              Nn.confirm(
                ""
                  .concat(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GSystemDialog",
                        "text.supported-touch-title"
                      )
                    ),
                    "<br>\n                         "
                  )
                  .concat(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GSystemDialog",
                        "text.supported-touch-footer"
                      )
                    )
                  ),
                (GShowGridAction) => {
                  gDesigner.stats(
                    "touch-dialog_click_".concat(GShowGridAction ? "ok" : "cancel")
                  ),
                    GShowGridAction && gDesigner.executeAction(Lt.ID, undefined, undefined, true);
                },
                GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "cancel")),
                {
                  text: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")),
                  pro: true,
                },
                false,
                false,
                false,
                "designer.settings.dont_show_supported_touch_dialog"
              ));
          }),
          "undefined" != typeof dataLayer &&
            dataLayer.push({ runtime1: gContainer.getRuntime() });
        var n = GShowGridAction.start();
        gContainer.getRuntime() === GContainer.Runtime.Electron &&
          gDesigner.getUser().then((GShowGridAction) => {
            GShowGridAction ||
              co.then((GShowGridAction) => {
                GShowGridAction || Rn.performLogin();
              });
          }),
          gDesigner.updateRecentDocumentsAction(),
          Fn.init();
        let _interopRequireDefault = gDesigner.getSetting("webcdr_choice", y ? "BETA" : "STAGING");
        if (
          (ro
            ? AppSettings.trunkwebcdr &&
              (a.IS_LOCALHOST
                ? (ao.gApi.webcdr =
                    _interopRequireDefault && "BETA" === _interopRequireDefault
                      ? AppSettings.cloudBetaURL + "/api/webcdr"
                      : AppSettings.cloudTrunkURL + "/api/webcdr")
                : (ao.gApi.webcdr =
                    _interopRequireDefault && "BETA" === _interopRequireDefault ? AppSettings.betaWebcdr : AppSettings.trunkwebcdr))
            : y
            ? (ao.gApi.webcdr =
                _interopRequireDefault && "BETA" === _interopRequireDefault ? AppSettings.betaWebcdr : AppSettings.stagingWebcdr)
            : AppSettings.webcdr && (ao.gApi.webcdr = AppSettings.webcdr),
          $("body").removeClass("loading"),
          (window.onbeforeunload = function (GShowGridAction) {
            gDesigner.isReloading() ||
              gContainer.canUnload(
                gDesigner.hasModifiedDocuments(),
                gDesigner.hasSynchronizingDocuments(),
                false
              ) ||
              (GShowGridAction.preventDefault(), (GShowGridAction.returnValue = ""));
          }),
          (window.onunload = function () {
            gDesigner.hasEventListeners(GUnloadEvent) && gDesigner.trigger(new GUnloadEvent());
          }),
          n)
        ) {
          let GShowGridAction = new A();
          if (
            gContainer.getRuntime() === GContainer.Runtime.Browser ||
            gContainer.getRuntime() === GContainer.Runtime.PWA ||
            gContainer.getRuntime() === GContainer.Runtime.IPad
          ) {
            let GShowSelectionHandlesAction = "";
            if (n.getType() === GContainer.OpenFileRequest.Type.DocumentOrToken)
              try {
                GShowSelectionHandlesAction = JSON.parse(n.getContent()).doc;
              } catch (GShowGridAction) {}
            else GShowSelectionHandlesAction = n.getContent();
            GShowGridAction.setTitle(GShowSelectionHandlesAction),
              Yn && GShowGridAction.setFocusAnnotationId(Yn.options.annot),
              gDesigner.addDocument(GShowGridAction);
          }
          gContainer.getRuntime() === GContainer.Runtime.Electron
            ? gContainer.openStorageFile(GShowGridAction, n, (GShowGridAction) => {
                GShowGridAction && gDesigner.openDocument(GShowGridAction);
              })
            : eo.handleOpenFileRequest(GShowGridAction, n),
            gDesigner.createNewDocumentDialog();
        } else
          f.default.isEnabled()
            ? gDesigner.handleWelcomeScreenOpenWithUserPermissions()
            : gDesigner.newInfiniteDocument();
        gDesigner.hasEventListeners(GApplicationStatusEvent) &&
          gDesigner.trigger(new GApplicationStatusEvent(GApplicationStatusEvent.Status.Ready)),
          (0, CollaborationMergeUtils.isSupportedScreenSize)()
            ? !(0, CollaborationMergeUtils.isSupportedScreenSize)(document.body.clientWidth) &&
              AppSettings.msTeamsMode &&
              (await oo()) &&
              Nn.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-windows-size-msteams"
                  )
                )
              )
            : AppSettings.msTeamsMode
            ? Nn.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-screen-size-msteams"
                  )
                )
              )
            : (gDesigner.stats("touch-dialog_unsupport-size"),
              Nn.showOneTimeDialog(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-screen-size"
                  )
                ).replace("%app", AppSettings.DESIGNER.TITLE),
                "designer.settings.dont_show_unsupported_screen_size_dialog"
              )),
          module.start(),
          await jn.start(),
          C &&
            (await (0, CollaborationMergeUtils._tryAndCatch)(() => {
              (gDesigner._softwareUpdateManager = new GSoftwareUpdateManager()),
                gDesigner._softwareUpdateManager.start();
            })),
          (ao.gMemoryManager = new Zn()),
          ao.gMemoryManager.start();
      };
      if (
        ("function" != typeof gdb_initSetupSystemDate ||
          y ||
          (await gdb_initSetupSystemDate()),
        await Wn,
        await (0, CollaborationMergeUtils._tryAndCatch)(() => Kn.init()),
        await null,
        _ || gDesigner.isEnabledSubscriptions())
      ) {
        const GShowGridAction = async () => {
          const GShowGridAction = await gDesigner.getUser();
          let module;
          if (
            GShowGridAction &&
            GShowGridAction.isAnonymous() &&
            Yn &&
            Yn.link === GContainer.DeepLinking.DirectLink
          ) {
            let GShowGridAction = Yn.options[GContainer.DeepLinking.DirectLink];
            module = JSON.parse((0, CollaborationMergeUtils.base64StringToString)(GShowGridAction)).signup;
          }
          if (!GShowGridAction || GShowGridAction.reload || GShowGridAction.deactivated || (GShowGridAction.isAnonymous() && module)) {
            const n = Yn && Yn.link;
            GShowGridAction &&
              !GShowGridAction.isAnonymous() &&
              (await (0, CollaborationMergeUtils._tryAndCatch)(() => gDesigner.signout(true, true)));
            const _interopRequireDefault = new URL(window.location.href).searchParams.get("token");
            if (_interopRequireDefault) {
              const { enterprise: GShowGridAction } = await AppSettings.gApi
                .checkEnterpriseToken(_interopRequireDefault)
                .catch({ enterprise: false });
              GShowGridAction && gDesigner.setEnterpriseLoginForm(true);
            }
            await gContainer.preLogin().catch((GShowGridAction) => {
              console.warn("gContainer preLogin error", GShowGridAction);
            }),
              new Bn(io).open({ flow: n, signup: module, version: "i015.3" }),
              On.setupInAppLinkReloadAppForOnce(),
              p &&
                p.has(GContainer.DeepLinking.PWADialog) &&
                gDesigner.executeWhenReady(() => {
                  gDesigner.showInstallPwaDialog(true);
                }),
              E && Nn.error(E);
          } else
            await io(),
              p &&
                p.has(GContainer.DeepLinking.PWADialog) &&
                gDesigner.executeWhenReady(() => {
                  gDesigner.showInstallPwaDialog();
                });
        };
        if (AppSettings.msTeamsMode)
          (await to())
            ? new u.default(io).load()
            : window.location.replace(window.location.origin);
        else if (navigator.onLine || gDesigner.isEnabledProFeatures("offline"))
          await GShowGridAction();
        else {
          const GShowSelectionHandlesAction = Nn.custom({
              icon: "clock",
              title: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.license-offline-title")
              ),
              subtitle: GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GCommonNames",
                  "text.license-offline-expired-subtitle"
                )
              ),
              closeable: false,
            }),
            n = () => {
              navigator.onLine &&
                (GShowGridAction(), GShowSelectionHandlesAction.gDialog("close"), $(window).off("online", n));
            };
          $(window).on("online", n);
        }
      } else await io();
      AppSettings.gApi.setHooks({
        onError: () => {
          lo ||
            so().then((GShowGridAction) => GShowGridAction && void (lo || ((lo = new Un()), lo.open())));
        },
      });
    };
  }