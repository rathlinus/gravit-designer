/**
 * Webpack Module #1374
 * Type: class
 * Name: GBrowserContainer
 */

function (e, t, n) {
    "use strict";
    n(58) /* polyfill_Array_includes */,
      n(19) /* polyfill_Array_iterator */,
      n(96) /* polyfill_JSON_stringify */,
      n(8) /* polyfill_bundle_ES6 */,
      n(20) /* polyfill_RegExp_exec */,
      n(3) /* polyfill_RegExp_toString */,
      n(4) /* stub_requires_668 */,
      n(13) /* stub_requires_679 */,
      n(26) /* polyfill_DOMCollection_iterator */,
      n(125) /* stub_requires_673 */,
      n(126) /* polyfill_URL_toJSON */,
      n(114) /* stub_requires_424 */;
    var o = n(0) /* GObject */,
      i = n(9) /* GLocale */,
      a = n(47) /* GLocaleKey */,
      r = n(85) /* GContainer */,
      s = n(1195) /* Item */;
    const l = n(1378) /* GMarketingFileStorageItem */;
    var c = n(255) /* GFontsProviderManager */,
      d = n(1379) /* GGoogleFontsProvider */,
      u = n(1380) /* GFontLauncherProvider */,
      p = n(1118) /* GCustomFontsProvider */,
      g = n(1199) /* GLocalFontsProvider */,
      h = n(220) /* Item */,
      f = n(1385) /* Item */,
      m = n(1386) /* Item */,
      y = n(119) /* GCloudStorage */,
      v = n(163) /* GDocument */,
      _ = n(86) /* module_86 */,
      b = n(1153) /* GPresets */,
      w = n(44) /* GSystemDialog */,
      C = n(10) /* AppSettings */.LOCAL_FONTS_API_ENABLED;
    const x = n(1482) /* DataModule_1482 */,
      { base64StringToString: S } = n(40) /* CollaborationMergeUtils */;
    function E() {
      (this._storage = new s()),
        "serviceWorker" in navigator &&
          setTimeout(function () {
            navigator.serviceWorker.register("/cacher.js").then(function (e) {
              e.update && e.update();
            });
          }, 15e3);
    }
    o.inheritAndMix(E, r, [x]),
      (E.prototype.getRuntime = function () {
        return window.matchMedia("(display-mode: standalone)").matches
          ? r.Runtime.PWA
          : r.Runtime.Browser;
      }),
      (E.prototype.getStorage = function () {
        return this._storage;
      }),
      (E.prototype.getSystemFontsProvider = function () {
        return u;
      }),
      (E.prototype.supportsLocalFonts = function () {
        return C;
      }),
      (E.prototype.registerFontProviders = function () {
        if (
          (r.prototype.registerFontProviders.call(this),
          c.registerProvider(p),
          c.registerProvider(d),
          this.supportsLocalFonts())
        )
          try {
            c.registerProvider(g);
          } catch (e) {
            console.error("Local Fonts Access API is not available");
          }
        window.GSystemFontsProvider = u;
      }),
      (E.prototype.openExternalLink = function (e, t) {
        e && e.preventDefault(), window.open(t, "_blank");
      }),
      (E.prototype.start = function () {
        var e,
          t,
          n,
          o = new URL(window.location.href),
          i = null;
        if (o.searchParams) {
          if (o.searchParams.get("token") && o.searchParams.get("d"))
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.DocumentOrToken,
              JSON.stringify({
                token: o.searchParams.get(r.OpenFileRequest.Type.Token),
                doc: o.searchParams.get("d"),
              })
            );
          else if (o.searchParams.get("token"))
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.Token,
              o.searchParams.get(r.OpenFileRequest.Type.Token)
            );
          else if (o.searchParams.get("d"))
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.Document,
              o.searchParams.get("d")
            );
          else if (o.searchParams.get("storeContent"))
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.StoreContent,
              o.searchParams.get(r.OpenFileRequest.Type.StoreContent)
            );
          else if (o.searchParams.get(r.OpenFileRequest.Type.ExternalAsset))
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.ExternalAsset,
              o.searchParams.get(r.OpenFileRequest.Type.ExternalAsset)
            );
          else if (o.searchParams.get("directlink")) {
            t = o.searchParams.get("directlink");
            try {
              (e = JSON.parse(S(decodeURIComponent(t))).type) ===
              r.OpenFileRequest.Type.Preset
                ? (i = new r.OpenFileRequest(r.OpenFileRequest.Type.Preset, t))
                : e === r.OpenFileRequest.Type.Template &&
                  (i = new r.OpenFileRequest(
                    r.OpenFileRequest.Type.Template,
                    t
                  ));
            } catch (e) {
              "function" == typeof gdb_showScene &&
                console.warn("Invalid parameters.");
            }
          }
        } else {
          for (
            var a =
                /[&\?]((?:[\0-"\$-<>-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)=((?:[\0-"\$%'-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)/g,
              s = {};
            (n = a.exec(window.location.href));

          )
            s[n[1]] = n[2];
          if (s.token && s.d)
            i = new r.OpenFileRequest(r.OpenFileRequest.Type.DocumentOrToken, {
              token: s[r.OpenFileRequest.Type.Token],
              doc: s.d,
            });
          else if (s.token)
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.Token,
              s[r.OpenFileRequest.Type.Token]
            );
          else if (s.d)
            i = new r.OpenFileRequest(r.OpenFileRequest.Type.Document, s.d);
          else if (s.storeContent)
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.StoreContent,
              s[r.OpenFileRequest.Type.StoreContent]
            );
          else if (s[r.OpenFileRequest.Type.ExternalAsset])
            i = new r.OpenFileRequest(
              r.OpenFileRequest.Type.StoreContent,
              s[r.OpenFileRequest.Type.ExternalAsset]
            );
          else if (s.directlink) {
            t = s.directlink;
            try {
              (e = JSON.parse(S(decodeURIComponent(t))).type) ===
              r.OpenFileRequest.Type.Preset
                ? (i = new r.OpenFileRequest(r.OpenFileRequest.Type.Preset, t))
                : e === r.OpenFileRequest.Type.Template &&
                  (i = new r.OpenFileRequest(
                    r.OpenFileRequest.Type.Template,
                    t
                  ));
            } catch (e) {
              "function" == typeof gdb_showScene &&
                console.warn("Invalid parameters.");
            }
          }
        }
        return i;
      }),
      (E.prototype.copyToClipboard = function (e) {
        if (navigator.clipboard) return navigator.clipboard.writeText(e);
        try {
          var t = (function () {
              if (window.getSelection) {
                var e = window.getSelection();
                if (e.getRangeAt && e.rangeCount) return e.getRangeAt(0);
              } else if (document.selection && document.selection.createRange)
                return document.selection.createRange();
            })(),
            n = document.createElement("textArea");
          return (
            (n.value = e),
            document.body.appendChild(n),
            n.select(),
            document.execCommand("copy"),
            document.body.removeChild(n),
            (function (e) {
              if (e)
                if (window.getSelection) {
                  var t = window.getSelection();
                  t.removeAllRanges(), t.addRange(e);
                } else document.selection && e.select && e.select();
            })(t),
            Promise.resolve()
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (E.prototype.openStorageFile = function (e, t, n) {
        E.openStorageFile(e, t, n, this._storage);
      }),
      (E.openStorageFile = function (e, t, n, o) {
        var s = { progress: null };
        e.updateStatus(_.Loading, s),
          (async function () {
            try {
              let d,
                u = t.getType(),
                p = t.getContent();
              if (u === r.OpenFileRequest.Type.StoreContent)
                (d = await gApi.getProviderContentDetails(p)),
                  d && n(new f.Item(o, d.id, d.name, d), { loadingData: s });
              else if (u === r.OpenFileRequest.Type.ExternalAsset)
                (d = await gApi.getProviderContentDetails(p)),
                  d && n(new m.Item(o, d.id, d.name, d, p), { loadingData: s });
              else if (u === r.OpenFileRequest.Type.Preset) {
                let e = JSON.parse(S(decodeURIComponent(p))),
                  t =
                    e &&
                    (function (e) {
                      let t = b.getPresets(),
                        n = null,
                        o = null;
                      for (let i of t) {
                        let t = i.layouts.find((t) =>
                          t.template ? t.template === e : t.id === e
                        );
                        if (t) {
                          (n = i.name), (o = t);
                          break;
                        }
                      }
                      return { presetCategory: n, presetLayout: o };
                    })(e.id);
                t &&
                  t.presetLayout &&
                  (t.presetLayout.template
                    ? ((d = await gApi
                        .getPresetTemplate({ type: t.presetLayout.template })
                        .catch(() => null)),
                      d &&
                        n(
                          new l(o, d.data, "".concat(e.id, ".gvdesign"), d.id),
                          { content: e, file: d, preset: t, loadingData: s }
                        ))
                    : n(t, {
                        content: e,
                        category: t.presetCategory,
                        loadingData: s,
                      }));
              } else if (u === r.OpenFileRequest.Type.Template) {
                let e = JSON.parse(S(decodeURIComponent(p))),
                  { file: t, data: i } = await y.loadDesignData(e.id),
                  a = v.FileTypes.find((e) => e.mime === t.type).ext;
                t &&
                  i &&
                  n(new l(o, i, "".concat(t.name, ".").concat(a), t.id), {
                    content: e,
                    file: t,
                    category: t.path,
                    loadingData: s,
                  });
              } else {
                let t;
                if (u === r.OpenFileRequest.Type.DocumentOrToken) {
                  let e = JSON.parse(p);
                  (d = await gApi.getShare(e.token, !0).catch(() => null)),
                    d
                      ? (t = e.token)
                      : (d = await gApi.getFile(e.doc).catch(() => null));
                } else
                  u === r.OpenFileRequest.Type.Document
                    ? (d = await gApi.getFile(p).catch(() => null))
                    : u === r.OpenFileRequest.Type.Token &&
                      ((t = p),
                      (d = await gApi.getShare(t, !0).catch(() => null)));
                if (d)
                  n(new h.Item(o, d.id, d.name, d, null, t, d.autosave), {
                    loadingData: s,
                  });
                else {
                  (s.text = i.get(new a("GContainer", "text.load-failed"))),
                    e.updateStatus(_.LoadFailed, s),
                    e.setFailedDocumentIdOrToken(p),
                    n(null);
                  var c = [];
                  gDesigner.getShareManager().isPermissionRequestEnabled() &&
                    c.push({
                      label: i.get(
                        new a("GShareManager", "text.file-request-access")
                      ),
                      onclick: (e) => {
                        gDesigner.stats(
                          "permission-dialog_no-access_request-access"
                        ),
                          gApi
                            .requestPermission(p, {
                              access: !0,
                              isToken: u === r.OpenFileRequest.Type.Token,
                            })
                            .then(() => {
                              e.gDialog("close"),
                                w.alert(
                                  i.get(
                                    new a(
                                      "GShareManager",
                                      "text.sent-request-email"
                                    )
                                  )
                                );
                            })
                            .catch(() => {
                              w.error(
                                i.get(
                                  new a(
                                    "GShareManager",
                                    "text.cannot-request-access"
                                  )
                                )
                              );
                            });
                      },
                    }),
                    c.push({
                      label: i.get(new a("GLocale", "ok")),
                      onclick: (e) => {
                        gDesigner.stats("permission-dialog_no-access_click-ok"),
                          e.gDialog("close");
                      },
                      highlighted: !0,
                    }),
                    w.custom({
                      icon: "error",
                      className: "g-file-can-not-be-found-dialog",
                      closeable: !1,
                      closeCallback: () =>
                        gDesigner.removeDocument(e, null, !0),
                      title: i.get(
                        new a(
                          "GShareManager",
                          "text.file-can-not-be-accessed-title"
                        )
                      ),
                      subtitle: i.get(
                        new a(
                          "GShareManager",
                          "text.file-can-not-be-accessed-info"
                        )
                      ),
                      buttons: c,
                    });
                }
              }
            } catch (t) {
              console.log(t),
                setTimeout(function () {
                  e.updateStatus(_.LoadFailed, s);
                }, 10),
                e.updateStatus(_.LoadFailed, s),
                n(null);
            }
          })();
      }),
      (E.prototype.handleDeepLinking = function (e) {
        const t = r.prototype.handleDeepLinking.call(this, e),
          n = [
            r.DeepLinking.DirectLink,
            r.DeepLinking.FocusAnnot,
            r.DeepLinking.CreateShare,
          ];
        return (
          t &&
            !n.includes(t.link) &&
            window.history.pushState(null, null, window.location.pathname),
          t
        );
      }),
      (E.prototype.toString = function () {
        return "[Object GBrowserContainer]";
      }),
      (e.exports = E);
  }