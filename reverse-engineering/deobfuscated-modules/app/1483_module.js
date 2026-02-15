/**
 * Webpack Module #1483
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(58) /* module_58 */,
      require(19) /* module_19 */,
      require(168) /* module_168 */,
      require(30) /* module_30 */,
      require(8) /* module_8 */,
      require(196) /* module_196 */,
      require(20) /* module_20 */,
      require(107) /* module_107 */,
      require(34) /* module_34 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(169) /* module_169 */,
      require(33) /* module_33 */,
      require(26) /* module_26 */,
      require(125) /* module_125 */,
      require(126) /* module_126 */,
      require(114) /* module_114 */;
    var i = require(10) /* module_10 */,
      a = require(231) /* module_231 */,
      r = require(53) /* module */,
      s = require(1) /* module */,
      l = require(15) /* module */,
      c = require(40) /* module_40 */,
      d = require(67) /* GRichTooltipConfig */,
      u = o(require(1484) /* module_1484 */),
      p = o(require(443) /* module_443 */),
      g = o(require(1485) /* module_1485 */),
      h = o(require(1486) /* module_1486 */),
      f = o(require(1487) /* module_1487 */);
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
      T = require(866) /* GAlignAction */,
      G = require(869) /* GArrangeAction */,
      P = require(1176) /* GAttachToPathAction */,
      D = require(1311) /* GCancelCropAction */,
      L = require(809) /* GClipAction */,
      I = require(1597) /* GConnectLinesAction */,
      k = require(810) /* GConvertToPathAction */,
      O = require(1320) /* GConvertToRawPathAction */,
      F = require(608) /* GCreateSymbolAction */,
      R = require(1310) /* GCropAction */,
      M = require(874) /* GDetachSymbolAction */,
      N = require(1177) /* GResetInstanceAction */,
      B = require(1316) /* GCreateNestedCompoundAction */,
      U = require(1331) /* GCutCopyAction */,
      j = require(1332) /* GDeleteAction */,
      K = require(1334) /* GDeselectAllAction */,
      V = require(1178) /* GDetachFromPathAction */,
      H = require(867) /* GDistributeAction */,
      W = require(1315) /* GDuplicateAction */,
      z = require(1312) /* GEditElementActon */,
      q = require(861) /* GExportAction */,
      Y = require(449) /* GFitAllAction */,
      X = require(1598) /* GFitCurrentLayerAction */,
      Q = require(566) /* GFitSelectionAction */,
      J = require(811) /* GGroupAction */,
      Z = require(1599) /* GInvertSelectionAction */,
      ee = require(1172) /* GInstallToDesktopAction */,
      te = require(1179) /* GJoinPathsAction */,
      ne = require(1167) /* GMagnificationAction */;
    const oe = require(812) /* GMergeMainAction */,
      ie = require(1600) /* GMergeSubAction */;
    var ae = require(1601) /* GNewAction */,
      re = require(1602) /* GNewClipboardAction */,
      se = require(1296) /* GNewWindowAction */,
      le = require(1317) /* GOffsetAction */,
      ce = require(1282) /* GOriginalViewAction */,
      de = require(1185) /* GOutlineAction */,
      ue = require(1297) /* GOutlineViewAction */,
      pe = require(1603) /* Action_view_fast_view */,
      ge = require(877) /* GPasteAction */,
      he = require(1183) /* GPasteInPlaceAction */;
    const fe = require(876) /* GPasteAndReplaceAction */;
    var me = require(1184) /* GPasteInsideAction */,
      ye = require(1182) /* GPasteHereAction */,
      ve = require(875) /* GPasteStyleAction */,
      _e = require(1605) /* GEnterLayerGroupAction */,
      be = require(1606) /* GLockLayerAction */,
      we = require(1607) /* GToggleLayerVisibilityAction */,
      Ce = require(1340) /* GRenameLayerAction */,
      xe = require(813) /* GOpenAction */,
      Se = require(1299) /* module_1299 */,
      Ee = require(1608) /* GImportFontsAction */,
      Ae = require(1609) /* GPrintAction */,
      Te = require(1284) /* GRedoAction */,
      Ge = require(1611) /* GReverseOrderAction */,
      Pe = require(447) /* GSaveAction */,
      De = require(1612) /* GSaveAllAction */,
      Le = require(445) /* GSaveAsAction */,
      Ie = require(1333) /* GSelectAllAction */,
      ke = require(1180) /* GSelectByFontTypeAction */;
    const Oe = require(1304) /* GSelectByPaintLayerAction */,
      Fe = require(1305) /* GSelectByBorderWidthAction */,
      Re = require(1306) /* GSelectByTransparencyAction */,
      Me = require(1307) /* GSelectByBlendModeAction */,
      Ne = require(1308) /* GSelectByShapeAction */,
      Be = require(1309) /* GSelectByEffectAction */;
    var Ue = require(1613) /* GSettingsAction */,
      $e = require(1285) /* GShowGridAction */,
      je = require(1169) /* GShowGuideLinesAction */,
      Ke = require(1286) /* GShowSymbolLabelsAction */,
      Ve = require(1614) /* GShowRulersAction */,
      He = require(1615) /* GShowSlicesAction */,
      We = require(1318) /* GSimplifyAction */,
      ze = require(1295) /* GSnapUnitAction */,
      qe = require(870) /* GSplitAction */,
      Ye = require(1319) /* GSplitLineAction */,
      Xe = require(873) /* GSplitPathAction */,
      Qe = require(1287) /* GToggleGuideAction */,
      Je = require(1288) /* GToggleSnapAction */,
      Ze = require(1289) /* GToggleSnapZonesAction */,
      et = require(1283) /* GPlaceImportAction */,
      tt = require(1280) /* GLinkImageAction */,
      nt = require(871) /* GTransformAction */,
      ot = require(1171) /* GUndoAction */,
      it = require(872) /* GVectorizeBorderAction */,
      at = require(1616) /* GVectorizeImageAction */,
      rt = require(1314) /* GConvertToImageAction */,
      st = require(1290) /* GZoomInAction */,
      lt = require(1291) /* GZoomOutAction */,
      ct = require(1617) /* GPlayAction */,
      dt = require(1619) /* GShowEffectsAction */,
      ut = require(1335) /* GToggleFullscreenAction */,
      pt = require(448) /* GGravitCloudAction */,
      gt = require(1256) /* GVersionsHistoryAction */,
      ht = require(1620) /* GSwitchLanguageAction */,
      ft = require(1621) /* GOpenLinkAction */,
      mt = require(1336) /* GOpenQuickHelpScreenAction */,
      yt = require(1623) /* GNewFromTemplateAction */,
      vt = require(843) /* GOpenRecentAction */,
      _t = require(1181) /* GMaskWithShapeAction */,
      bt = require(1624) /* GOpenWelcomeScreenAction */,
      wt = require(1342) /* GEnhancedTooltipsAction */,
      Ct = (require(1298) /* GUseCouponAction */, require(1625) /* GCheckForUpdatesAction */),
      xt = require(1626) /* module_1626 */,
      St = require(1293) /* GCloudSynchronizationAction */,
      Et = require(1627) /* GCloudSynchronizationInfoAction */,
      At = require(1628) /* GShareAction */,
      Tt = require(1629) /* GSharePointCheckOutAction */,
      Gt = require(1630) /* GSharePointCheckInAction */,
      Pt = require(1632) /* GQuitAction */,
      Dt = require(1633) /* Action_example_files */,
      Lt = (require(1158) /* Action_help_purchase */, require(1634) /* GToggleTouchAction */),
      It = require(1635) /* GOpenAccountSettingsAction */,
      kt = require(1636) /* GLogoutAction */,
      Ot = require(1637) /* GToggleProBETALicenseAction */;
    const Ft = require(1638) /* GImportImageFromIOSAction */;
    var Rt = require(1254) /* GOpenSharedFileAction */,
      Mt = require(1639) /* GTranslationToolAction */,
      Nt = require(1641) /* GSwitchWebcdrAction */;
    require(1642) /* GTogglePaintLayersVisibilityAction */;
    const Bt = require(1643) /* GShowShortcutsAction */,
      Ut = require(1645) /* GEyeDropperAction */,
      $t = require(1646) /* GShowSelectionHandlesAction */,
      jt = require(1647) /* GChangeOpacityAction */,
      Kt = require(1344) /* GCycleThroughLayersAction */,
      Vt = require(1345) /* GChangeAnchorPointsJointTypeMainAction */,
      Ht = require(1648) /* GChangeAnchorPointsJointTypeSubAction */,
      Wt = require(1649) /* GCloseActiveWindowAction */,
      zt = require(1650) /* GToggleMultiPageModeAction */,
      qt = require(1341) /* GChangeActivePageAction */,
      Yt = require(1651) /* GChangeActiveWindowAction */,
      Xt = require(1652) /* GSwapPaintLayersAction */,
      Qt = require(1653) /* GCreateNewLayerAction */;
    require(78) /* GDocumentEvent */, require(86) /* module_86 */;
    var Jt = require(1346) /* GUnloadEvent */,
      Zt = (require(1347) /* module_1347 */, require(1160) /* GAppearanceProperties */),
      en = require(1261) /* module_1261 */,
      tn = require(1162) /* module_1162 */,
      nn = require(1264) /* GBoolOpProperties */,
      on = require(1262) /* GEffectProperties */,
      an = require(1265) /* GEllipseProperties */,
      rn = require(1266) /* GImageProperties */,
      sn = require(1654) /* GFrameProperties */,
      ln = require(1655) /* GGroupFrameProperties */,
      cn = require(1656) /* GItemProperties */,
      dn = require(864) /* GInspectorSidebar */,
      un = require(1260) /* GOutlineSidebar */,
      pn = require(567) /* GAnnotationsSidebar */,
      gn = require(1269) /* GPathProperties */,
      hn = require(1150) /* module_1150 */,
      fn = require(1657) /* module_1657 */,
      mn = require(1270) /* GPolygonProperties */,
      yn = require(1271) /* GRectangleProperties */,
      vn = require(1339) /* GPageProperties */,
      _n = require(1658) /* GSymbolProperties */,
      bn = require(1659) /* GSceneProperties */,
      wn = require(1272) /* GSliceProperties */,
      Cn = require(1273) /* GTextProperties */,
      xn = require(1294) /* GDimensionProperties */,
      Sn = require(1660) /* GTransformProperties */,
      En = require(1274) /* GAlignProperties */,
      An = require(1661) /* GSymbolsSidebar */,
      Tn = require(1662) /* GLibrarySidebar */,
      Gn = require(1665) /* GSoftwareUpdatePanel */,
      Pn = require(1666) /* GNotificationPanel */,
      Dn = require(1668) /* GCollaborativeTextPanel */,
      Ln = require(1669) /* GDocumentNotificationsPanel */,
      In = require(1670) /* module_1670 */,
      kn = require(85) /* GContainer */,
      On = require(1672) /* module_1672 */,
      Fn = (require(237) /* module_237 */, require(1673) /* module_1673 */),
      Rn = require(119) /* module_119 */,
      Mn = require(1674) /* module_1674 */,
      Nn = require(44) /* GSystemDialog */,
      Bn = require(860) /* module_860 */,
      Un = require(1675) /* module_1675 */,
      $n = require(337) /* module_337 */,
      jn = require(1325) /* module_1325 */,
      Kn = require(785) /* module_785 */,
      Vn = require(1676) /* GSoftwareUpdateManager */,
      Hn = require(808) /* GApplicationStatusEvent */,
      Wn = require(292) /* module_292 */;
    const zn = i.FILE_FORMATS.find((e) => e.default).ext,
      qn = i.FILE_FORMATS.filter((e) => e.secondary).map((e) => e.ext);
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
    require(18) /* module_18 */, require(1688) /* module_1688 */, require(1154) /* module_1154 */, require(1689) /* module_1689 */, require(1690) /* module_1690 */, require(1691) /* module_1691 */, require(1693) /* GLongPressEvent */, require(1694) /* module_1694 */;
    var ao = window;
    const ro = !!/^trunk/.test("production") && !y;
    (ao.gApi = require(10) /* module_10 */.gApi), (ao.gApi.webcdr = null);
    const so = async () => S.checkMaintenance();
    so(),
      ro &&
        ((ao.gApi.url = i.cloudTrunkURL),
        (ao.gApi.managementUrl =
          "https://cloud-management-trunk.herokuapp.com"),
        i.trunkWebsocketURL && (ao.gApi.websocketURL = i.trunkWebsocketURL),
        s.GTranslationEvents.addEventListener(
          s.GTranslationNotificationEvent,
          (e) => {
            let { project: module, type: require, content: o, data: i } = e;
            if (module === s.GTranslation.Projects.Designer)
              switch (require) {
                case s.GTranslationNotificationEvent.Type.Warning:
                  gContainer.getRuntime() === kn.Runtime.Electron
                    ? console.error(o)
                    : console.error({ content: o, data: i });
              }
          },
          undefined
        )),
      y &&
        (_ && b && i.cloudTeamsURL
          ? (ao.gApi.url = i.cloudTeamsURL)
          : i.cloudBetaURL && (ao.gApi.url = i.cloudBetaURL),
        i.betaWebsocketURL && (ao.gApi.websocketURL = i.betaWebsocketURL)),
      w.IS_PRODUCTION &&
        (i.cloudURL && (ao.gApi.url = i.cloudURL),
        i.websocketURL && (ao.gApi.websocketURL = i.websocketURL)),
      (ao.gApi.lang = s.GLocale.getLanguage());
    let lo = null;
    (ao.gravit = null),
      require(1738) /* module_1738 */,
      (ao.gDesigner = new E()),
      ao.gDesigner.getUser(),
      (ao.gQA = h.default);
    const co = ao.gDesigner.isOfflineAsync();
    ao.gInAppPurchase = Yn.newInAppPurchase(v);
    const { GA: { customDimensions: uo } = {} } = require(10) /* module_10 */;
    gDesigner.addEventListener(Wn, (e) => {
      let { user: module } = e;
      module &&
        !gDesigner.isAnonymous() &&
        "undefined" != typeof dataLayer &&
        uo &&
        uo.forEach((e) => dataLayer.push({ [e]: undefined }));
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
    exports.exports = async function (e) {
      (ao.gContainer = e), (0, c._tryAndCatch)(() => $n.start());
      let module = null;
      const require = gDesigner.getUser();
      require.then((e) => {
        e && (module = i.gApi.isEnabledSubscriptions());
      }),
        (window.onerror = function (e, t, n, o, i) {
          Mn.isPluginError(i)
            ? Nn.alert(i.message)
            : ("production" === m ||
                "trunk" === m ||
                "lts" === m ||
                "rc" === m) &&
              Rn.isOnline();
        }),
        x.getRuntimeCode() === i.Runtime.WindowsStore.code && new Qn().init(),
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
                operatingSystem: s.GSystem.OperatingSystem.Unix,
                platform: l.GPlatform.constructor.WebBrowser.Chrome,
              },
              {
                operatingSystem: s.GSystem.OperatingSystem.OSX_IOS,
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
                operatingSystem: s.GSystem.OperatingSystem.Unix,
                platform: l.GPlatform.constructor.WebBrowser.Chrome,
              },
              {
                operatingSystem: s.GSystem.OperatingSystem.OSX_IOS,
                platform: l.GPlatform.constructor.WebBrowser.Safari,
              },
            ]));
      if (await so()) {
        if (gContainer.getRuntime() !== kn.Runtime.Electron || !(await require)) {
          $("<iframe></iframe>")
            .addClass("cross-frame")
            .attr("src", "assets/static/maintenance/index.html")
            .appendTo($("body"));
          const e = setInterval(async () => {
            (await so()) || (clearInterval(e), location.reload());
          }, 6e4);
          return;
        }
      }
      const o = x.getRuntimeCode();
      o && gContainer.setCookie({ name: "_ginst", value: o, url: i.gApi.url });
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
          (module = i.gApi.isEnabledSubscriptions())),
        p)
      ) {
        gDesigner.setUTM(
          new Map(
            Array.from(p.entries()).filter((e) => {
              let [t] = e;
              return /^utm/.test(t);
            })
          )
        );
        const e = ["firstName", "lastName", "email", "to"],
          t = Array.from(p.entries())
            .filter((t) => {
              let [require] = t;
              return e.includes(require);
            })
            .reduce((e, t) => {
              let [require, o] = t;
              return Object.assign(e, { [require]: o });
            }, {});
        Object.keys(t).length && gDesigner.setSignupOptions(t);
      }
      var h, b, w, S;
      gContainer.setCookie({
        name: "_gdesignerv",
        value: "3.15.0",
        url: i.gApi.url,
      }),
        gDesigner.setEnv(m),
        gContainer.getRuntime() === kn.Runtime.Electron ||
          _ ||
          i.gApi.initRecaptcha(),
        (async function (e, t) {
          const require = await gDesigner.getUser();
          (0, g.default)(e, t, gDesigner.getAppBaseUrl(), require);
        })(gContainer.getRuntime(), v),
        !y ||
          (gContainer.getRuntime() !== kn.Runtime.Browser &&
            gContainer.getRuntime() !== kn.Runtime.PWA) ||
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
        Wn = (0, c._tryAndCatch)(() => gDesigner.preInit(module)),
        Yn = gContainer.handleDeepLinking();
      Yn &&
        (E = await gDesigner
          .runDeepLink(Yn.link, Yn.options)
          .then(() => null)
          .catch((e) => e));
      const io = async () => {
        await new Promise((e) => gContainer.initLanguage(e)),
          gDesigner.hasEventListeners(Hn) &&
            gDesigner.trigger(new Hn(Hn.Status.Init)),
          gDesigner.setIsBeta(y),
          (gravit = {
            plugins: [],
            actions: [new ae(), new yt(), new re(), new xe(), new Se()]
              .concat([
                new pt(pt.Actions.Open),
                new vt(),
                new Pe(),
                new Le(zn),
                ...qn.map((e) => new Le(e)),
                new pt(pt.Actions.SaveAs),
                new St(),
                new Et(),
                new Wt(),
                new gt(),
                new Rt(),
              ])
              .concat([new De()])
              .concat([
                new et(),
                new Ft(Ft.Source.PHOTOS),
                new Ft(Ft.Source.FILES),
                new tt(),
                new xt(new Ee()),
                _ ? new xt(new q()) : new q(),
              ])
              .concat(
                A.FileTypes.filter(
                  (e) =>
                    e.store &&
                    "cdrapp" !== e.ext &&
                    "des" !== e.ext &&
                    "gvdesign" !== e.ext &&
                    "pdf" !== e.ext
                ).map((e) => new Le(e.ext))
              )
              .concat([
                new Le("pdf", { dpi: 72 }),
                new Le("pdf", { dpi: 96 }),
                new Le("pdf", { dpi: 150 }),
                new xt(new Le("pdf", { dpi: 300 })),
                _ ? new xt(new q({ format: "pdf" })) : new q({ format: "pdf" }),
              ])
              .concat(
                [
                  new Tt(),
                  new Gt(),
                  new At(),
                  new Ae(),
                  new ee(),
                  new Pt(),
                  new ot(),
                  new Te(),
                  new U(true),
                  new U(false),
                  new ge(),
                  new he(),
                  new fe(),
                  new me(),
                  new ye(),
                  new ve(),
                  new j(),
                  new W(),
                  new z(),
                  new Ie(),
                  new K(),
                  new Z(),
                  new ke(),
                  new Oe(Oe.Type.Fill),
                  new Oe(Oe.Type.Border),
                  new Oe(Oe.Type.FillAndBorder),
                  new Fe(),
                  new Re(),
                  new Me(),
                  new Ne(),
                  new Be(),
                  new Ue(),
                  new Ut(Ut.Type.Fill),
                  new Ut(Ut.Type.Border),
                  new Ce(),
                  new jt(),
                  new G(r.GEditor.ArrangeOrderType.SendToFront),
                  new G(r.GEditor.ArrangeOrderType.BringForward),
                  new G(r.GEditor.ArrangeOrderType.SendBackward),
                  new G(r.GEditor.ArrangeOrderType.SendToBack),
                  new T(r.GEditor.ArrangeAlignType.AlignLeft),
                  new T(r.GEditor.ArrangeAlignType.AlignCenter),
                  new T(r.GEditor.ArrangeAlignType.AlignRight),
                  new T(r.GEditor.ArrangeAlignType.AlignTop),
                  new T(r.GEditor.ArrangeAlignType.AlignMiddle),
                  new T(r.GEditor.ArrangeAlignType.AlignBottom),
                  new T(r.GEditor.ArrangeAlignType.AlignJustifyHorizontal),
                  new T(r.GEditor.ArrangeAlignType.AlignJustifyVertical),
                  new H(H.Type.Horizontal),
                  new H(H.Type.Vertical),
                  new ze(ze.Type.FullUnit),
                  new ze(ze.Type.HalfUnit),
                  new nt(nt.Type.Rotate45Left),
                  new nt(nt.Type.Rotate90Left),
                  new nt(nt.Type.Rotate180Left),
                  new nt(nt.Type.Rotate45Right),
                  new nt(nt.Type.Rotate90Right),
                  new nt(nt.Type.Rotate180Right),
                  new nt(nt.Type.FlipVertical),
                  new nt(nt.Type.FlipHorizontal),
                  new J(),
                  new L(),
                  new qe(),
                  new _t(),
                  new R(),
                  new D(),
                  new oe(ie),
                  new ie(ie.Type.Intersect),
                  new ie(ie.Type.Difference),
                  new ie(ie.Type.Subtract),
                  new ie(ie.Type.Union),
                  new B(),
                  new te(),
                  new Xe(),
                  new k(),
                  new O(),
                  new de(),
                  new le(),
                  new it(),
                  new at(),
                  new P(),
                  new V(),
                  new We(),
                  new I(),
                  new Ye(),
                  new Ge(),
                  new F(),
                  new M(),
                  new N(),
                  new rt(),
                  new be(),
                  new Vt(Ht),
                  new Ht(Ht.Type.Straight),
                  new Ht(Ht.Type.Mirrored),
                  new Ht(Ht.Type.Disconnected),
                  new Ht(Ht.Type.Asymmetric),
                  new Ht(Ht.Type.Connector),
                  new Xt(),
                  new Qt(),
                  new ce(),
                  new Q(),
                  new X(),
                  new Y(),
                  new _e(false),
                  new _e(true),
                  new we(),
                  new Kt(Kt.Type.Next),
                  new Kt(Kt.Type.Previous),
                  new zt(),
                  new qt(qt.Type.Next),
                  new qt(qt.Type.Previous),
                  new Yt(Yt.Type.Next),
                  new Yt(Yt.Type.Previous),
                ].concat(ne.ZOOM_LEVELS.map((e) => new ne(e)))
              )
              .concat([
                new st(),
                new lt(),
                new ue(),
                new pe(),
                new Ve(),
                new je(),
                new Ke(),
                new $e(),
                new He(),
                new dt(),
                new $t(),
                new Je(),
                ...(i.HAS_SNAPZONES ? [new Ze()] : []),
                new Qe(
                  r.GGridGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey("GCommonNames", "text.snap-to-grid")
                  )
                ),
                new Qe(
                  r.GGuideLinesGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey("GCommonNames", "text.snap-to-guide-lines")
                  )
                ),
                new Qe(
                  r.GFullPixelsGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey("GCommonNames", "text.snap-to-full-pixels")
                  )
                ),
                new Qe(
                  r.GPointsGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey(
                      "GCommonNames",
                      "text.snap-to-anchor-points"
                    )
                  )
                ),
                new Qe(
                  r.GBBoxGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey("GCommonNames", "text.snap-to-shapes")
                  )
                ),
                new Qe(
                  r.GPageGuide.ID,
                  s.GLocale.get(
                    new s.GLocaleKey("GCommonNames", "text.snap-to-pages")
                  )
                ),
                new se(),
                new ct(),
                new ut(),
                new xt(new Lt()),
              ])
              .concat(
                ft.Links.filter((e) => "eula" !== e.name).map((e) => new ft(e)),
                _ ? [] : new wt(),
                new Dt(),
                new mt()
              )
              .concat(
                ...(no()
                  ? []
                  : kn.GravitLanguages.map(
                      (e) => new ht(e, Xn.getTranslationRealName(e))
                    ))
              )
              .concat([
                ...(_ ? [new Nt("STAGING", ro), new Nt("BETA", y)] : []),
                new bt(),
                ...(C ? [new Ct()] : []),
                ...ft.Links.filter((e) => "eula" === e.name).map(
                  (e) => new ft(e)
                ),
                new Mt(),
                ...(_ ? [new Ot()] : []),
                new Bt(),
              ])
              .concat([new It(), new kt()]),
            sidebars: [
              new dn(),
              ...(i.HAS_ANNOTATIONS ? [new pn()] : []),
              new un(),
              new Tn(),
              new An(),
            ],
            panels: [],
            footer: [new Gn(), new Pn(), ...(_ ? [new Dn(), new Ln()] : [])],
            tools: [
              {
                tool: r.GPointerTool,
                toolString: "GPointerTool",
                title: _
                  ? s.GLocale.get(
                      new s.GLocaleKey("GCommonNames", "tool.pointer")
                    )
                  : s.GLocale.get(new s.GLocaleKey("GPointerTool", "name")),
                group: "select",
                key: "V",
                icon: "gravit-icon-cursor-filled",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GPointerTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GPointerTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["V"],
                  video: ao.gApi.getRichTooltipVideoURL("Pointer_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GSubSelectTool,
                toolString: "GSubSelectTool",
                title: s.GLocale.get(
                  new s.GLocaleKey("GSubSelectTool", "name")
                ),
                group: "select",
                key: "D",
                icon: _ ? "gravit-icon-cursor-subselect" : "gravit-icon-cursor",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GSubSelectTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GSubSelectTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["D"],
                  video: ao.gApi.getRichTooltipVideoURL("Subselect_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GLassoTool,
                toolString: "GLassoTool",
                title: s.GLocale.get(new s.GLocaleKey("GLassoTool", "name")),
                group: "select",
                category: "special",
                key: "O",
                icon: "gravit-icon-rope",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GLassoTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GLassoTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["O"],
                  video: ao.gApi.getRichTooltipVideoURL("Lasso_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GLayerTool,
                toolString: "GLayerTool",
                title: s.GLocale.get(new s.GLocaleKey("GLayerTool", "name")),
                group: "select",
                category: "special",
                icon: "gravit-icon-sheets",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GLayerTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GLayerTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GSliceTool,
                toolString: "GSliceTool",
                title: s.GLocale.get(new s.GLocaleKey("GSliceTool", "name")),
                group: "select",
                category: "other",
                key: "S",
                icon: "gravit-icon-slice",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GSliceTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GSliceTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["S"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GPenTool,
                toolString: "GPenTool",
                title: s.GLocale.get(new s.GLocaleKey("GPenTool", "name")),
                group: "path",
                key: "P",
                icon: "gravit-icon-pen",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GPenTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GPenTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["P"],
                  video: ao.gApi.getRichTooltipVideoURL("Pen_Too.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GBezigonTool,
                toolString: "GBezigonTool",
                title: s.GLocale.get(new s.GLocaleKey("GBezigonTool", "name")),
                group: "path",
                key: "B",
                icon: "gravit-icon-pen-filled",
                pro: true,
                feature: "bezigon",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GBezigonTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GBezigonTool", "tooltip-description")
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
                tool: r.GKnifeTool,
                toolString: "GKnifeTool",
                title: s.GLocale.get(new s.GLocaleKey("GKnifeTool", "name")),
                group: "knife",
                category: "modify",
                key: "K",
                icon: "gravit-icon-scalpel",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GKnifeTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GKnifeTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["K"],
                  video: ao.gApi.getRichTooltipVideoURL("Knife_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GFreehandTool,
                toolString: "GFreehandTool",
                title: s.GLocale.get(new s.GLocaleKey("GFreehandTool", "name")),
                group: "path",
                category: "hand",
                icon: "gravit-icon-free-hand-draw",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GFreehandTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GFreehandTool", "tooltip-description")
                  ),
                  middle: false,
                  video: ao.gApi.getRichTooltipVideoURL("Freehand_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GMagicTool,
                toolString: "GMagicTool",
                title: s.GLocale.get(new s.GLocaleKey("GMagicTool", "name")),
                group: "knife",
                category: "modify",
                icon: "gravit-icon-freehand-shape",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GMagicTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GMagicTool", "tooltip-description")
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
                tool: r.GLineTool,
                toolString: "GLineTool",
                title: s.GLocale.get(
                  _
                    ? new s.GLocaleKey("GCommonNames", "tool.line")
                    : new s.GLocaleKey("GLineTool", "name")
                ),
                group: "shape",
                key: "L",
                icon: "gravit-icon-line",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GLineTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GLineTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["L"],
                  video: ao.gApi.getRichTooltipVideoURL("Line_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GRectangleTool,
                toolString: "GRectangleTool",
                title: s.GLocale.get(
                  new s.GLocaleKey("GRectangleTool", "name")
                ),
                group: "shape",
                key: "R",
                shortcuts: [["M"]],
                icon: "gravit-icon-rectangle",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GRectangleTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GRectangleTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["R"],
                  video: ao.gApi.getRichTooltipVideoURL("Rectangle_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GEllipseTool,
                toolString: "GEllipseTool",
                title: s.GLocale.get(new s.GLocaleKey("GEllipseTool", "name")),
                group: "shape",
                key: "E",
                icon: "gravit-icon-ellipse",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GEllipseTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GEllipseTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["E"],
                  video: ao.gApi.getRichTooltipVideoURL("Ellipse_Tool.mp4"),
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GPolygonTool,
                toolString: "GPolygonTool",
                title: s.GLocale.get(new s.GLocaleKey("GPolygonTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-polygon",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GPolygonTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GPolygonTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GTriangleTool,
                toolString: "GTriangleTool",
                title: s.GLocale.get(new s.GLocaleKey("GTriangleTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-triangle",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GTriangleTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GTriangleTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GStarTool,
                toolString: "GStarTool",
                title: s.GLocale.get(new s.GLocaleKey("GStarTool", "name")),
                group: "shape",
                category: "polygon",
                icon: "gravit-icon-star",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GStarTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GStarTool", "tooltip-description")
                  ),
                  middle: false,
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GTextTool,
                toolString: "GTextTool",
                title: s.GLocale.get(new s.GLocaleKey("GTextTool", "name")),
                group: "insert",
                key: "T",
                icon: "gravit-icon-textbox",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GTextTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GTextTool", "tooltip-description")
                  ),
                  middle: false,
                  video: ao.gApi.getRichTooltipVideoURL("Text_Tool.mp4"),
                  shortcut: ["T"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GHandTool,
                toolString: "GHandTool",
                title: s.GLocale.get(new s.GLocaleKey("GHandTool", "name")),
                group: "view",
                key: "H",
                icon: "gravit-icon-move",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GHandTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GHandTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["H"],
                  learnMore:
                    "",
                }),
              },
              {
                tool: r.GZoomTool,
                toolString: "GZoomTool",
                title: s.GLocale.get(new s.GLocaleKey("GZoomTool", "name")),
                group: "view",
                key: "Z",
                icon: "gravit-icon-zoom-in",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GZoomTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GZoomTool", "tooltip-description")
                  ),
                  middle: false,
                  shortcut: ["Z"],
                  learnMore:
                    "",
                }),
              },
            ],
            properties: [
              new xn(),
              new En(),
              new Sn(),
              new vn(),
              new bn(),
              new ln(),
              new sn(),
              new cn(),
              new mn(),
              new gn(),
              new an(),
              new Cn(),
              new rn(),
              new yn(),
              new wn(),
              new nn(),
              new _n(),
              new Zt(),
              new en(),
              new tn(),
              new on(),
            ],
          }),
          "function" != typeof window.gdb_initsavestepsaction ||
            y ||
            a.IS_RC ||
            window.gdb_initsavestepsaction(window.gravit.actions, Pe),
          "function" == typeof window.gdb_initsetupsystemdateaction &&
            window.gdb_initsetupsystemdateaction(window.gravit.actions),
          "function" != typeof window.gdb_inittranslationtoolaction ||
            y ||
            a.IS_RC ||
            window.gdb_inittranslationtoolaction(window.gravit.actions, Pe),
          "function" != typeof window.gdb_initrecordgravitaction ||
            y ||
            a.IS_RC ||
            window.gdb_initrecordgravitaction(window.gravit.actions, Pe);
        let module = new In(e._storage);
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
              i.TOUCH_LAYOUT &&
              (gDesigner.stats("touch-dialog_open"),
              Nn.confirm(
                ""
                  .concat(
                    s.GLocale.get(
                      new s.GLocaleKey(
                        "GSystemDialog",
                        "text.supported-touch-title"
                      )
                    ),
                    "<br>\n                         "
                  )
                  .concat(
                    s.GLocale.get(
                      new s.GLocaleKey(
                        "GSystemDialog",
                        "text.supported-touch-footer"
                      )
                    )
                  ),
                (e) => {
                  gDesigner.stats(
                    "touch-dialog_click_".concat(e ? "ok" : "cancel")
                  ),
                    e && gDesigner.executeAction(Lt.ID, undefined, undefined, true);
                },
                s.GLocale.get(new s.GLocaleKey("GLocale", "cancel")),
                {
                  text: s.GLocale.get(new s.GLocaleKey("GLocale", "ok")),
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
        var n = e.start();
        gContainer.getRuntime() === kn.Runtime.Electron &&
          gDesigner.getUser().then((e) => {
            e ||
              co.then((e) => {
                e || Rn.performLogin();
              });
          }),
          gDesigner.updateRecentDocumentsAction(),
          Fn.init();
        let o = gDesigner.getSetting("webcdr_choice", y ? "BETA" : "STAGING");
        if (
          (ro
            ? i.trunkwebcdr &&
              (a.IS_LOCALHOST
                ? (ao.gApi.webcdr =
                    o && "BETA" === o
                      ? i.cloudBetaURL + "/api/webcdr"
                      : i.cloudTrunkURL + "/api/webcdr")
                : (ao.gApi.webcdr =
                    o && "BETA" === o ? i.betaWebcdr : i.trunkwebcdr))
            : y
            ? (ao.gApi.webcdr =
                o && "BETA" === o ? i.betaWebcdr : i.stagingWebcdr)
            : i.webcdr && (ao.gApi.webcdr = i.webcdr),
          $("body").removeClass("loading"),
          (window.onbeforeunload = function (e) {
            gDesigner.isReloading() ||
              gContainer.canUnload(
                gDesigner.hasModifiedDocuments(),
                gDesigner.hasSynchronizingDocuments(),
                false
              ) ||
              (e.preventDefault(), (e.returnValue = ""));
          }),
          (window.onunload = function () {
            gDesigner.hasEventListeners(Jt) && gDesigner.trigger(new Jt());
          }),
          n)
        ) {
          let e = new A();
          if (
            gContainer.getRuntime() === kn.Runtime.Browser ||
            gContainer.getRuntime() === kn.Runtime.PWA ||
            gContainer.getRuntime() === kn.Runtime.IPad
          ) {
            let t = "";
            if (n.getType() === kn.OpenFileRequest.Type.DocumentOrToken)
              try {
                t = JSON.parse(n.getContent()).doc;
              } catch (e) {}
            else t = n.getContent();
            e.setTitle(t),
              Yn && e.setFocusAnnotationId(Yn.options.annot),
              gDesigner.addDocument(e);
          }
          gContainer.getRuntime() === kn.Runtime.Electron
            ? gContainer.openStorageFile(e, n, (e) => {
                e && gDesigner.openDocument(e);
              })
            : eo.handleOpenFileRequest(e, n),
            gDesigner.createNewDocumentDialog();
        } else
          f.default.isEnabled()
            ? gDesigner.handleWelcomeScreenOpenWithUserPermissions()
            : gDesigner.newInfiniteDocument();
        gDesigner.hasEventListeners(Hn) &&
          gDesigner.trigger(new Hn(Hn.Status.Ready)),
          (0, c.isSupportedScreenSize)()
            ? !(0, c.isSupportedScreenSize)(document.body.clientWidth) &&
              i.msTeamsMode &&
              (await oo()) &&
              Nn.alert(
                s.GLocale.get(
                  new s.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-windows-size-msteams"
                  )
                )
              )
            : i.msTeamsMode
            ? Nn.alert(
                s.GLocale.get(
                  new s.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-screen-size-msteams"
                  )
                )
              )
            : (gDesigner.stats("touch-dialog_unsupport-size"),
              Nn.showOneTimeDialog(
                s.GLocale.get(
                  new s.GLocaleKey(
                    "GSystemDialog",
                    "text.unsupported-screen-size"
                  )
                ).replace("%app", i.DESIGNER.TITLE),
                "designer.settings.dont_show_unsupported_screen_size_dialog"
              )),
          module.start(),
          await jn.start(),
          C &&
            (await (0, c._tryAndCatch)(() => {
              (gDesigner._softwareUpdateManager = new Vn()),
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
        await (0, c._tryAndCatch)(() => Kn.init()),
        await null,
        _ || gDesigner.isEnabledSubscriptions())
      ) {
        const e = async () => {
          const e = await gDesigner.getUser();
          let module;
          if (
            e &&
            e.isAnonymous() &&
            Yn &&
            Yn.link === kn.DeepLinking.DirectLink
          ) {
            let e = Yn.options[kn.DeepLinking.DirectLink];
            module = JSON.parse((0, c.base64StringToString)(e)).signup;
          }
          if (!e || e.reload || e.deactivated || (e.isAnonymous() && module)) {
            const n = Yn && Yn.link;
            e &&
              !e.isAnonymous() &&
              (await (0, c._tryAndCatch)(() => gDesigner.signout(true, true)));
            const o = new URL(window.location.href).searchParams.get("token");
            if (o) {
              const { enterprise: e } = await i.gApi
                .checkEnterpriseToken(o)
                .catch({ enterprise: false });
              e && gDesigner.setEnterpriseLoginForm(true);
            }
            await gContainer.preLogin().catch((e) => {
              console.warn("gContainer preLogin error", e);
            }),
              new Bn(io).open({ flow: n, signup: module, version: "i015.3" }),
              On.setupInAppLinkReloadAppForOnce(),
              p &&
                p.has(kn.DeepLinking.PWADialog) &&
                gDesigner.executeWhenReady(() => {
                  gDesigner.showInstallPwaDialog(true);
                }),
              E && Nn.error(E);
          } else
            await io(),
              p &&
                p.has(kn.DeepLinking.PWADialog) &&
                gDesigner.executeWhenReady(() => {
                  gDesigner.showInstallPwaDialog();
                });
        };
        if (i.msTeamsMode)
          (await to())
            ? new u.default(io).load()
            : window.location.replace(window.location.origin);
        else if (navigator.onLine || gDesigner.isEnabledProFeatures("offline"))
          await e();
        else {
          const t = Nn.custom({
              icon: "clock",
              title: s.GLocale.get(
                new s.GLocaleKey("GCommonNames", "text.license-offline-title")
              ),
              subtitle: s.GLocale.get(
                new s.GLocaleKey(
                  "GCommonNames",
                  "text.license-offline-expired-subtitle"
                )
              ),
              closeable: false,
            }),
            n = () => {
              navigator.onLine &&
                (e(), t.gDialog("close"), $(window).off("online", n));
            };
          $(window).on("online", n);
        }
      } else await io();
      i.gApi.setHooks({
        onError: () => {
          lo ||
            so().then((e) => e && void (lo || ((lo = new Un()), lo.open())));
        },
      });
    };
  }