/**
 * Webpack Module #1483
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    n(58) /* polyfill_Array_includes */,
      n(19) /* polyfill_Array_iterator */,
      n(168) /* polyfill_Array_reduce */,
      n(30) /* polyfill_Object_assign */,
      n(8) /* polyfill_bundle_ES6 */,
      n(196) /* polyfill_Promise_finally */,
      n(20) /* polyfill_RegExp_exec */,
      n(107) /* polyfill_RegExp_test */,
      n(34) /* polyfill_String_replace */,
      n(4) /* stub_requires_668 */,
      n(41) /* stub_requires_682 */,
      n(13) /* stub_requires_679 */,
      n(32) /* stub_requires_670 */,
      n(38) /* stub_requires_680 */,
      n(169) /* stub_requires_683 */,
      n(33) /* polyfill_DOMCollection_forEach */,
      n(26) /* polyfill_DOMCollection_iterator */,
      n(125) /* stub_requires_673 */,
      n(126) /* polyfill_URL_toJSON */,
      n(114) /* stub_requires_424 */;
    var i = n(10) /* AppSettings */,
      a = n(231) /* module_231 */,
      r = n(53) /* module */,
      s = n(1) /* module */,
      l = n(15) /* module */,
      c = n(40) /* CollaborationMergeUtils */,
      d = n(67) /* GRichTooltipConfig */,
      u = o(n(1484) /* module_1484 */),
      p = o(n(443) /* module_443 */),
      g = o(n(1485) /* AppSettings */),
      h = o(n(1486) /* module_1486 */),
      f = o(n(1487) /* module_1487 */);
    const {
        nodeEnv: m,
        isBeta: y,
        storeVendor: v,
        isCorel: _,
        isTeams: b,
      } = n(803) /* module_803 */,
      w = n(231) /* module_231 */,
      C = !v,
      x = n(859) /* module_859 */;
    n(1488) /* module_1488 */;
    n(1489) /* module_1489 */;
    const S = n(1490) /* module_1490 */;
    var E = n(1491) /* Je */,
      A = n(163) /* module_163 */,
      T = n(866) /* GAlignAction */,
      G = n(869) /* GArrangeAction */,
      P = n(1176) /* GAttachToPathAction */,
      D = n(1311) /* GCancelCropAction */,
      L = n(809) /* GClipAction */,
      I = n(1597) /* GConnectLinesAction */,
      k = n(810) /* GConvertToPathAction */,
      O = n(1320) /* GConvertToRawPathAction */,
      F = n(608) /* GCreateSymbolAction */,
      R = n(1310) /* GCropAction */,
      M = n(874) /* GDetachSymbolAction */,
      N = n(1177) /* GResetInstanceAction */,
      B = n(1316) /* GCreateNestedCompoundAction */,
      U = n(1331) /* GCutCopyAction */,
      j = n(1332) /* GDeleteAction */,
      K = n(1334) /* GDeselectAllAction */,
      V = n(1178) /* GDetachFromPathAction */,
      H = n(867) /* GDistributeAction */,
      W = n(1315) /* GDuplicateAction */,
      z = n(1312) /* GEditElementActon */,
      q = n(861) /* GExportAction */,
      Y = n(449) /* GFitAllAction */,
      X = n(1598) /* GFitCurrentLayerAction */,
      Q = n(566) /* GFitSelectionAction */,
      J = n(811) /* GGroupAction */,
      Z = n(1599) /* GInvertSelectionAction */,
      ee = n(1172) /* GInstallToDesktopAction */,
      te = n(1179) /* GJoinPathsAction */,
      ne = n(1167) /* GMagnificationAction */;
    const oe = n(812) /* GMergeMainAction */,
      ie = n(1600) /* GMergeSubAction */;
    var ae = n(1601) /* GNewAction */,
      re = n(1602) /* GNewClipboardAction */,
      se = n(1296) /* GNewWindowAction */,
      le = n(1317) /* GOffsetAction */,
      ce = n(1282) /* GOriginalViewAction */,
      de = n(1185) /* GOutlineAction */,
      ue = n(1297) /* GOutlineViewAction */,
      pe = n(1603) /* Action_view_fast_view */,
      ge = n(877) /* GPasteAction */,
      he = n(1183) /* GPasteInPlaceAction */;
    const fe = n(876) /* GPasteAndReplaceAction */;
    var me = n(1184) /* GPasteInsideAction */,
      ye = n(1182) /* GPasteHereAction */,
      ve = n(875) /* GPasteStyleAction */,
      _e = n(1605) /* GEnterLayerGroupAction */,
      be = n(1606) /* GLockLayerAction */,
      we = n(1607) /* GToggleLayerVisibilityAction */,
      Ce = n(1340) /* GRenameLayerAction */,
      xe = n(813) /* GOpenAction */,
      Se = n(1299) /* module_1299 */,
      Ee = n(1608) /* GImportFontsAction */,
      Ae = n(1609) /* GPrintAction */,
      Te = n(1284) /* GRedoAction */,
      Ge = n(1611) /* GReverseOrderAction */,
      Pe = n(447) /* GSaveAction */,
      De = n(1612) /* GSaveAllAction */,
      Le = n(445) /* GSaveAsAction */,
      Ie = n(1333) /* GSelectAllAction */,
      ke = n(1180) /* GSelectByFontTypeAction */;
    const Oe = n(1304) /* GSelectByPaintLayerAction */,
      Fe = n(1305) /* GSelectByBorderWidthAction */,
      Re = n(1306) /* GSelectByTransparencyAction */,
      Me = n(1307) /* GSelectByBlendModeAction */,
      Ne = n(1308) /* GSelectByShapeAction */,
      Be = n(1309) /* GSelectByEffectAction */;
    var Ue = n(1613) /* GSettingsAction */,
      $e = n(1285) /* GShowGridAction */,
      je = n(1169) /* GShowGuideLinesAction */,
      Ke = n(1286) /* GShowSymbolLabelsAction */,
      Ve = n(1614) /* GShowRulersAction */,
      He = n(1615) /* GShowSlicesAction */,
      We = n(1318) /* GSimplifyAction */,
      ze = n(1295) /* GSnapUnitAction */,
      qe = n(870) /* GSplitAction */,
      Ye = n(1319) /* GSplitLineAction */,
      Xe = n(873) /* GSplitPathAction */,
      Qe = n(1287) /* GToggleGuideAction */,
      Je = n(1288) /* GToggleSnapAction */,
      Ze = n(1289) /* GToggleSnapZonesAction */,
      et = n(1283) /* GPlaceImportAction */,
      tt = n(1280) /* GLinkImageAction */,
      nt = n(871) /* GTransformAction */,
      ot = n(1171) /* GUndoAction */,
      it = n(872) /* GVectorizeBorderAction */,
      at = n(1616) /* GVectorizeImageAction */,
      rt = n(1314) /* GConvertToImageAction */,
      st = n(1290) /* GZoomInAction */,
      lt = n(1291) /* GZoomOutAction */,
      ct = n(1617) /* GPlayAction */,
      dt = n(1619) /* GShowEffectsAction */,
      ut = n(1335) /* GToggleFullscreenAction */,
      pt = n(448) /* GGravitCloudAction */,
      gt = n(1256) /* GVersionsHistoryAction */,
      ht = n(1620) /* GSwitchLanguageAction */,
      ft = n(1621) /* GOpenLinkAction */,
      mt = n(1336) /* GOpenQuickHelpScreenAction */,
      yt = n(1623) /* GNewFromTemplateAction */,
      vt = n(843) /* GOpenRecentAction */,
      _t = n(1181) /* GMaskWithShapeAction */,
      bt = n(1624) /* GOpenWelcomeScreenAction */,
      wt = n(1342) /* GEnhancedTooltipsAction */,
      Ct = (n(1298) /* GUseCouponAction */, n(1625) /* GCheckForUpdatesAction */),
      xt = n(1626) /* module_1626 */,
      St = n(1293) /* GCloudSynchronizationAction */,
      Et = n(1627) /* GCloudSynchronizationInfoAction */,
      At = n(1628) /* GShareAction */,
      Tt = n(1629) /* GSharePointCheckOutAction */,
      Gt = n(1630) /* GSharePointCheckInAction */,
      Pt = n(1632) /* GQuitAction */,
      Dt = n(1633) /* Action_example_files */,
      Lt = (n(1158) /* Action_help_purchase */, n(1634) /* GToggleTouchAction */),
      It = n(1635) /* GOpenAccountSettingsAction */,
      kt = n(1636) /* GLogoutAction */,
      Ot = n(1637) /* GToggleProBETALicenseAction */;
    const Ft = n(1638) /* GImportImageFromIOSAction */;
    var Rt = n(1254) /* GOpenSharedFileAction */,
      Mt = n(1639) /* GTranslationToolAction */,
      Nt = n(1641) /* GSwitchWebcdrAction */;
    n(1642) /* GTogglePaintLayersVisibilityAction */;
    const Bt = n(1643) /* GShowShortcutsAction */,
      Ut = n(1645) /* GEyeDropperAction */,
      $t = n(1646) /* GShowSelectionHandlesAction */,
      jt = n(1647) /* GChangeOpacityAction */,
      Kt = n(1344) /* GCycleThroughLayersAction */,
      Vt = n(1345) /* GChangeAnchorPointsJointTypeMainAction */,
      Ht = n(1648) /* GChangeAnchorPointsJointTypeSubAction */,
      Wt = n(1649) /* GCloseActiveWindowAction */,
      zt = n(1650) /* GToggleMultiPageModeAction */,
      qt = n(1341) /* GChangeActivePageAction */,
      Yt = n(1651) /* GChangeActiveWindowAction */,
      Xt = n(1652) /* GSwapPaintLayersAction */,
      Qt = n(1653) /* GCreateNewLayerAction */;
    n(78) /* GDocumentEvent */, n(86) /* module_86 */;
    var Jt = n(1346) /* GUnloadEvent */,
      Zt = (n(1347) /* module_1347 */, n(1160) /* GAppearanceProperties */),
      en = n(1261) /* module_1261 */,
      tn = n(1162) /* module_1162 */,
      nn = n(1264) /* GBoolOpProperties */,
      on = n(1262) /* GEffectProperties */,
      an = n(1265) /* GEllipseProperties */,
      rn = n(1266) /* GImageProperties */,
      sn = n(1654) /* GFrameProperties */,
      ln = n(1655) /* GGroupFrameProperties */,
      cn = n(1656) /* GItemProperties */,
      dn = n(864) /* GInspectorSidebar */,
      un = n(1260) /* GOutlineSidebar */,
      pn = n(567) /* GAnnotationsSidebar */,
      gn = n(1269) /* GPathProperties */,
      hn = n(1150) /* module_1150 */,
      fn = n(1657) /* module_1657 */,
      mn = n(1270) /* GPolygonProperties */,
      yn = n(1271) /* GRectangleProperties */,
      vn = n(1339) /* GPageProperties */,
      _n = n(1658) /* GSymbolProperties */,
      bn = n(1659) /* GSceneProperties */,
      wn = n(1272) /* GSliceProperties */,
      Cn = n(1273) /* GTextProperties */,
      xn = n(1294) /* GDimensionProperties */,
      Sn = n(1660) /* GTransformProperties */,
      En = n(1274) /* GAlignProperties */,
      An = n(1661) /* GSymbolsSidebar */,
      Tn = n(1662) /* GLibrarySidebar */,
      Gn = n(1665) /* GSoftwareUpdatePanel */,
      Pn = n(1666) /* GNotificationPanel */,
      Dn = n(1668) /* GCollaborativeTextPanel */,
      Ln = n(1669) /* GDocumentNotificationsPanel */,
      In = n(1670) /* module_1670 */,
      kn = n(85) /* GContainer */,
      On = n(1672) /* module_1672 */,
      Fn = (n(237) /* Item */, n(1673) /* module_1673 */),
      Rn = n(119) /* module_119 */,
      Mn = n(1674) /* module_1674 */,
      Nn = n(44) /* GSystemDialog */,
      Bn = n(860) /* module_860 */,
      Un = n(1675) /* module_1675 */,
      $n = n(337) /* stub_requires_1098 */,
      jn = n(1325) /* module_1325 */,
      Kn = n(785) /* module_785 */,
      Vn = n(1676) /* GSoftwareUpdateManager */,
      Hn = n(808) /* GApplicationStatusEvent */,
      Wn = n(292) /* module_292 */;
    const zn = i.FILE_FORMATS.find((e) => e.default).ext,
      qn = i.FILE_FORMATS.filter((e) => e.secondary).map((e) => e.ext);
    var Yn = n(1678) /* module_1678 */;
    const Xn = new (n(1343) /* module_1343 */)();
    Xn.init();
    const Qn = n(1684) /* module_1684 */,
      Jn = n(1686) /* module_1686 */,
      Zn = n(1687) /* module_1687 */,
      eo = n(1255) /* module_1255 */,
      {
        isExecutingOnMSTeams: to,
        isExecutingOnMSTeamsSync: no,
        isTeamsChannel: oo,
        getTeamsLocale: io,
      } = p.default;
    n(18) /* MenuItemBuilder */, n(1688) /* module_1688 */, n(1154) /* module_1154 */, n(1689) /* module_1689 */, n(1690) /* stub_requires_1 */, n(1691) /* module_1691 */, n(1693) /* GLongPressEvent */, n(1694) /* module_1694 */;
    var ao = window;
    const ro = !!/^trunk/.test("production") && !y;
    (ao.gApi = n(10) /* AppSettings */.gApi), (ao.gApi.webcdr = null);
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
            let { project: t, type: n, content: o, data: i } = e;
            if (t === s.GTranslation.Projects.Designer)
              switch (n) {
                case s.GTranslationNotificationEvent.Type.Warning:
                  gContainer.getRuntime() === kn.Runtime.Electron
                    ? console.error(o)
                    : console.error({ content: o, data: i });
              }
          },
          void 0
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
      n(1738) /* module_1738 */,
      (ao.gDesigner = new E()),
      ao.gDesigner.getUser(),
      (ao.gQA = h.default);
    const co = ao.gDesigner.isOfflineAsync();
    ao.gInAppPurchase = Yn.newInAppPurchase(v);
    const { GA: { customDimensions: uo } = {} } = n(10) /* AppSettings */;
    gDesigner.addEventListener(Wn, (e) => {
      let { user: t } = e;
      t &&
        !gDesigner.isAnonymous() &&
        "undefined" != typeof dataLayer &&
        uo &&
        uo.forEach((e) => dataLayer.push({ [e]: void 0 }));
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
    e.exports = async function (e) {
      (ao.gContainer = e), (0, c._tryAndCatch)(() => $n.start());
      let t = null;
      const n = gDesigner.getUser();
      n.then((e) => {
        e && (t = i.gApi.isEnabledSubscriptions());
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
        if (gContainer.getRuntime() !== kn.Runtime.Electron || !(await n)) {
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
        p && p.has("newuser") && gDesigner.setShowCreateAccount(!0),
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
          (t = i.gApi.isEnabledSubscriptions())),
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
              let [n] = t;
              return e.includes(n);
            })
            .reduce((e, t) => {
              let [n, o] = t;
              return Object.assign(e, { [n]: o });
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
          const n = await gDesigner.getUser();
          (0, g.default)(e, t, gDesigner.getAppBaseUrl(), n);
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
        Wn = (0, c._tryAndCatch)(() => gDesigner.preInit(t)),
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
                  new U(!0),
                  new U(!1),
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
                  new _e(!1),
                  new _e(!0),
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                pro: !0,
                feature: "bezigon",
                richTooltipConfig: d.GRichTooltipConfig.from({
                  title: s.GLocale.get(
                    new s.GLocaleKey("GBezigonTool", "tooltip-title")
                  ),
                  description: s.GLocale.get(
                    new s.GLocaleKey("GBezigonTool", "tooltip-description")
                  ),
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
                  middle: !1,
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
        let t = new In(e._storage);
        t.load(),
          t.init(gravit),
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
                    e && gDesigner.executeAction(Lt.ID, void 0, void 0, !0);
                },
                s.GLocale.get(new s.GLocaleKey("GLocale", "cancel")),
                {
                  text: s.GLocale.get(new s.GLocaleKey("GLocale", "ok")),
                  pro: !0,
                },
                !1,
                !1,
                !1,
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
                !1
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
          t.start(),
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
          let t;
          if (
            e &&
            e.isAnonymous() &&
            Yn &&
            Yn.link === kn.DeepLinking.DirectLink
          ) {
            let e = Yn.options[kn.DeepLinking.DirectLink];
            t = JSON.parse((0, c.base64StringToString)(e)).signup;
          }
          if (!e || e.reload || e.deactivated || (e.isAnonymous() && t)) {
            const n = Yn && Yn.link;
            e &&
              !e.isAnonymous() &&
              (await (0, c._tryAndCatch)(() => gDesigner.signout(!0, !0)));
            const o = new URL(window.location.href).searchParams.get("token");
            if (o) {
              const { enterprise: e } = await i.gApi
                .checkEnterpriseToken(o)
                .catch({ enterprise: !1 });
              e && gDesigner.setEnterpriseLoginForm(!0);
            }
            await gContainer.preLogin().catch((e) => {
              console.warn("gContainer preLogin error", e);
            }),
              new Bn(io).open({ flow: n, signup: t, version: "i015.3" }),
              On.setupInAppLinkReloadAppForOnce(),
              p &&
                p.has(kn.DeepLinking.PWADialog) &&
                gDesigner.executeWhenReady(() => {
                  gDesigner.showInstallPwaDialog(!0);
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
              closeable: !1,
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