/**
 * Webpack Module #1313
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(32) /* stub_requires_670 */, require(38) /* stub_requires_680 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      a = require(15) /* module */,
      GFontsProviderManager = require(255) /* GFontsProviderManager */,
      barrel_editor_actions = require(590) /* barrel_editor_actions */,
      GAnnotationsSidebar = require(567) /* GAnnotationsSidebar */;
    const c = ["text/xml", "text/plain"],
      d = [
        "image/svg+xml",
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "application/pdf",
      ],
      u = c.concat(d).concat(["text/uri-list"]);
    function p() {
      var e = navigator.userAgent.toLowerCase().indexOf("safari") >= 0;
      window.hasOwnProperty("ClipboardEvent")
        ? ((navigator.userAgent.toLowerCase().indexOf("firefox") >= 0 || e) &&
            (this._pasteArea = $("<div></div>")
              .css({
                overflow: "hidden",
                height: "1px",
                top: "-9999px",
                position: "absolute",
              })
              .prop("contenteditable", true)
              .prop("tabindex", -1)
              .appendTo($("body"))),
          document.addEventListener(
            "paste",
            this._documentPasteEvent.bind(this)
          ))
        : ((this._pasteArea = $("<div></div>")
            .css({
              overflow: "hidden",
              height: "1px",
              top: "-9999px",
              position: "absolute",
            })
            .prop("contenteditable", true)
            .prop("tabindex", -1)
            .appendTo($("body"))),
          this._pasteArea[0].addEventListener(
            "paste",
            this._documentPasteEvent.bind(this)
          )),
        this._pasteArea &&
          this._pasteArea.on("focus", () => {
            gDesigner.getWindows() &&
              (this._allowFocus ||
                (this._pasteArea.blur(),
                gDesigner.getWindows().getActiveWindow() &&
                  gDesigner.getWindows().getActiveWindow().getView().focus()));
          });
    }
    GCore.GObject.inherit(p, GCore.GObject),
      (p.URIListHandler = function () {}),
      (p.URIListHandler.prototype.handle = async function (e, t) {
        const require = (await e.text())
          .split("\n")
          .filter((e) => !(0 === e.indexOf("#")))
          .map((e) =>
            fetch(e).then((e) => (e.ok ? e.blob() : Promise.reject()))
          );
        (await Promise.all(require)).forEach((e) => {
          t[e.type] = e;
        });
      }),
      (p.TextHandler = function () {}),
      (p.TextHandler.prototype.handle = async function (e, t) {
        const require = await e.text();
        t[e.type] = require;
      });
    const g = {
      "text/plain": new p.TextHandler(),
      "text/xml": new p.TextHandler(),
      "text/uri-list": new p.URIListHandler(),
    };
    (p.prototype._pasteArea = null),
      (p.prototype._allowFocus = false),
      (p.prototype._callback = null),
      (p.prototype.pasteFromClipboard = async function () {
        if (!navigator.clipboard) return Promise.reject();
        if (navigator.permissions) {
          const e = await navigator.permissions.query({
            name: "clipboard-read",
            allowWithoutGesture: true,
          });
          if (!e || "denied" === e.state) return Promise.reject();
        }
        const exports = await navigator.clipboard.read();
        if (!exports) return Promise.reject();
        for (const module of exports) {
          const e = {};
          for (const require of module.types) {
            if (!u.includes(require)) continue;
            const GTools = await module.getType(require),
              GCore = g[require];
            GCore ? await GCore.handle(GTools, e) : (e[require] = GTools);
          }
          this.handlePasteData(e);
        }
      }),
      (p.prototype._documentPasteEvent = function (e) {
        if (!this._canTrigger()) return false;
        if (
          !document.activeElement ||
          !$(document.activeElement).is(":editable") ||
          (this._pasteArea && document.activeElement === this._pasteArea[0]) ||
          gDesigner.isGravitIME(document.activeElement)
        ) {
          var module = e.clipboardData;
          if (
            e.clipboardData &&
            e.clipboardData.items &&
            e.clipboardData.items.length
          ) {
            for (var require = module.items, GTools = {}, GFontsProviderManager = 0; GFontsProviderManager < require.length; GFontsProviderManager++) {
              var barrel_editor_actions = null;
              switch ((d = require[GFontsProviderManager].type)) {
                case "image/png":
                case "image/jpeg":
                case "image/gif":
                case "application/pdf":
                  barrel_editor_actions = require[GFontsProviderManager].getAsFile();
                  break;
                default:
                  barrel_editor_actions = module.getData(d) || null;
              }
              barrel_editor_actions && (GTools[d] = barrel_editor_actions);
            }
            this._handlePasteData(GTools),
              a.GPlatform.webBrowser ===
                a.GPlatform.constructor.WebBrowser.Firefox &&
                (e.stopPropagation(), e.preventDefault());
          } else if (this._pasteArea) {
            GTools = {};
            var GAnnotationsSidebar = 0;
            if (module.types && module.types.length) {
              var c = module.types;
              for (GFontsProviderManager = 0; GFontsProviderManager < c.length; GFontsProviderManager++) {
                var d;
                if (
                  "public.file-url" === (d = c[GFontsProviderManager]) &&
                  module.files &&
                  GAnnotationsSidebar < module.files.length
                ) {
                  var u = module.files[GAnnotationsSidebar++];
                  u && (GTools[u.type] = u);
                } else {
                  (barrel_editor_actions = module.getData(d)) && (GTools[d] = barrel_editor_actions);
                }
              }
            }
            setTimeout(
              function () {
                var e = this._pasteArea.children();
                if (1 === e.length && e.is("img")) {
                  var module = GCore.GUtil.dataUrlToBlob(e[0].src);
                  module && (GTools[module.type] = module);
                }
                this._handlePasteData(GTools), this._pasteArea.empty();
              }.bind(this),
              1
            );
          }
          this._pasteArea &&
            ((this._allowFocus = false),
            this._pasteArea.blur(),
            gDesigner.getWindows().getActiveWindow() &&
              gDesigner.getWindows().getActiveWindow().getView().focus());
        }
      }),
      (p.prototype._canTrigger = function () {
        var e = gDesigner.getActiveDocument();
        const module = e && e.getEditor();
        if (module && module.isInlineEditing()) {
          const e = this._filterForInlineEditing(module.getSelection());
          if (e && 1 === e.length && e[0] instanceof GCore.GText) return true;
        }
        return !(!e || gDesigner.getRightSidebars().getActiveSidebar() == GAnnotationsSidebar.ID);
      }),
      (p.prototype.handlePasteData = function (e) {
        return this._handlePasteData(e);
      }),
      (p.prototype._handlePasteData = function (e) {
        if (!this._canTrigger()) return false;
        for (
          var module = !this._callback,
            require = gDesigner.getActiveDocument(),
            a = require.getEditor(),
            GAnnotationsSidebar = 0;
          GAnnotationsSidebar < c.length;
          ++GAnnotationsSidebar
        ) {
          var u = e[c[GAnnotationsSidebar]];
          if (u)
            try {
              var p = $.parseXML(u);
              if (p) {
                if ("svg" === p.documentElement.nodeName) {
                  e["image/svg+xml"] = new Blob([u], { type: "image/svg+xml" });
                  break;
                }
                if (
                  "gravit" === p.documentElement.nodeName &&
                  p.documentElement.hasAttribute("mimeType")
                ) {
                  if (p.documentElement.hasAttribute("restricted")) {
                    let e = p.documentElement.getAttribute("restricted");
                    if (
                      e &&
                      "false" != e &&
                      (!require.getStorageItem() || require.getStorageItem().getId() != e)
                    )
                      return;
                  }
                  e[p.documentElement.getAttribute("mimeType")] = $("<div/>")
                    .html(p.documentElement.textContent)
                    .text();
                }
              }
            } catch (e) {}
          if (e[GCore.GNode.MIME_TYPE]) {
            var g = GCore.GNode.deserialize(e[GCore.GNode.MIME_TYPE]),
              h = g instanceof GCore.GPage,
              f = require.filterUnrestrictedCommercialFileElements(
                h ? g.getChildren() : g
              );
            if ((f && f.length > 0) || h) {
              var m = f.filter(function (e) {
                  return e instanceof GCore.GElement;
                }),
                y = f.filter(function (e) {
                  return e instanceof GCore.GStyle;
                }),
                v =
                  1 === f.length &&
                  f[0] instanceof GCore.GText &&
                  a.hasSelection() &&
                  a.getSelection()[0] instanceof GCore.GText &&
                  a.isInlineEditing();
              if (v || (0 == m.length && 1 == f.length && !h)) {
                var _ = f[0];
                a.beginTransaction();
                try {
                  if (v) {
                    if (!GTools.GInlineTextEditor.HANDLECOPYPASTE) {
                      var b = a.getSelection()[0];
                      GTools.GElementEditor.getEditor(b).processPaste(_);
                    }
                  } else if (
                    _ instanceof GCore.GStylable.FillPaintLayer ||
                    _ instanceof GCore.GStylable.BorderPaintLayer
                  ) {
                    m = a.getSelection();
                    0 != (m = this._filterForStyleExceptions(m)).length &&
                      (m.length > 1
                        ? m.forEach(function (e) {
                            var t =
                              _ instanceof GCore.GStylable.FillPaintLayer
                                ? new GCore.GStylable.FillPaintLayer()
                                : new GCore.GStylable.BorderPaintLayer();
                            t.assignFrom(_), e.getPaintLayers().appendChild(t);
                          })
                        : m[0].getPaintLayers().appendChild(_));
                  } else if (_ instanceof GCore.GStylable.Effect) {
                    m = a.getSelection();
                    0 != (m = this._filterForStyleExceptions(m)).length &&
                      (m.length > 1
                        ? m.forEach(function (e) {
                            var t = new GCore.GStylable.Effect();
                            t.assignFrom(_), e.getEffects().appendChild(t);
                          })
                        : m[0].getEffects().appendChild(_));
                  }
                } finally {
                  a.commitTransaction(
                    GCore.GLocale.get(new GCore.GLocaleKey("GPaste", "action.paste"))
                  );
                }
              } else {
                var w = require.getScene().getStyles();
                if (m.length > 0 || h) {
                  module && a.beginTransaction();
                  try {
                    for (var C = 0; C < y.length; ++C) {
                      let e = y[C],
                        t = e.getReferenceId(),
                        GTools = null;
                      for (
                        var x = w.getFirstChild();
                        null !== x;
                        x = x.getNext()
                      )
                        if (
                          x.arePropertiesEqual(e, ["ps", "defaultStyle"]) &&
                          x.equalsStyle(e)
                        ) {
                          GTools = x;
                          break;
                        }
                      GTools ||
                        ((GTools = new GCore.GStyle()),
                        GTools.setProperties(
                          ["name", "defaultStyle", "ps"],
                          [e.getProperty("name"), false, e.getProperty("ps")]
                        ),
                        GTools.assignStyleFrom(e),
                        require.getScene().getStyles().insertChild(GTools));
                      for (var S = 0; S < m.length; ++S) {
                        let e = m[S];
                        e.hasProperty("sref") &&
                          e.getProperty("sref") === t &&
                          e.setProperty("sref", GTools.getReferenceId());
                      }
                    }
                    if (!this.executeCallback(m)) {
                      var E = gDesigner.getActiveDocument().getScene();
                      h
                        ? (g.clearChildren(),
                          g.setProperty("off", null),
                          E.appendChild(g),
                          m.length > 0 &&
                            a.insertElements(m, true, true, false, true, g),
                          E.setActivePage(g))
                        : a.insertElements(m, true, true, true, true),
                        E.isFixedSized() || this._centerToView(true);
                    }
                  } finally {
                    module &&
                      a.commitTransaction(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GPaste", "action.paste")
                        )
                      );
                  }
                }
              }
            }
            return;
          }
          if (u) {
            var A,
              T = GFontsProviderManager.getProviderInstance(barrel_editor_actions),
              G =
                gDesigner.getWorkspace() &&
                gDesigner.getWorkspace().getFontManager() &&
                gDesigner.getWorkspace().getFontManager().getDefaultFont() &&
                gDesigner
                  .getWorkspace()
                  .getFontManager()
                  .getDefaultFont()
                  .getFamily();
            const e = this._filterForInlineEditing(a.getSelection());
            if (
              e &&
              e.length > 0 &&
              e[0] instanceof GCore.GText &&
              a.isInlineEditing()
            ) {
              if (!GTools.GInlineTextEditor.HANDLECOPYPASTE) {
                var P = e[0];
                return void GTools.GElementEditor.getEditor(P).processPaste(u);
              }
            } else {
              (P = new GCore.GText()).setText(u, true, true), module && a.beginTransaction();
              try {
                if (!this.executeCallback([P], true)) {
                  if (
                    (a.insertElements([P], false, true, true),
                    (A = T && T.getDefaultFamilyForString(u)) && A !== G)
                  ) {
                    var D = GCore.GOpenTypeFont.getDirectionForString(u);
                    D !== GCore.GTLDirectionTextTransformer.LTR
                      ? P.setProperties(["_tff", "dir", "_we"], [A, D, true])
                      : P.setProperties(["_tff", "_we"], [A, true]);
                  } else P.setProperty("_we", true);
                  GTools.GElementEditor.getEditor(P).invalidateTextWidth(),
                    this._centerToView();
                }
              } finally {
                return void (
                  module &&
                  a.commitTransaction(
                    GCore.GLocale.get(new GCore.GLocaleKey("GPaste", "action.paste"))
                  )
                );
              }
            }
          }
        }
        for (var L = 0; L < d.length; ++L) {
          var I = d[L];
          if (e[I]) {
            module && a.beginTransaction();
            try {
              require.placeOrImport(
                e[I],
                null,
                false,
                true,
                this.executeCallback.bind(this)
              );
            } finally {
              module &&
                a.commitTransaction(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GPaste", "action.paste-image")
                  )
                );
            }
            return;
          }
        }
      }),
      (p.prototype._filterForInlineEditing = function (e) {
        return e
          ? e.filter((e) => !(e instanceof GCore.GCollaborativeTextAnnotation))
          : null;
      }),
      (p.prototype._filterForStyleExceptions = function (e) {
        for (
          var module = [GCore.GPage, GCore.GGroup, GCore.GSymbol], require = [], GTools = 0;
          GTools < e.length;
          GTools++
        ) {
          for (var a = e[GTools], GFontsProviderManager = true, barrel_editor_actions = 0; barrel_editor_actions < module.length; barrel_editor_actions++) {
            if (a instanceof module[barrel_editor_actions]) {
              GFontsProviderManager = false;
              break;
            }
          }
          GFontsProviderManager && require.push(a);
        }
        return require;
      }),
      (p.prototype._centerToView = function (e) {
        var t,
          n,
          a = gDesigner.getActiveDocument().getEditor(),
          GFontsProviderManager = gDesigner.getActiveDocument().getScene(),
          barrel_editor_actions = gDesigner.getWindows().getActiveWindow(),
          GAnnotationsSidebar = GFontsProviderManager.getActivePage();
        if (
          ((n = GFontsProviderManager.isFixedSized() ? GAnnotationsSidebar.getGeometryBBox() : GFontsProviderManager.getPaintBBox()), barrel_editor_actions)
        ) {
          var c = barrel_editor_actions.getView(),
            d = c.getViewTransform(GAnnotationsSidebar),
            u = GCore.GPaintCanvas.getScreenDPI(),
            p = c.getViewBox().scaled(u, u);
          (t = d.mapRect(p)),
            GFontsProviderManager.isFixedSized() && (t = t.intersected(n)),
            t.isEmpty() && (t = n);
        } else t = n;
        a.arrangeAlign(
          GTools.GEditor.ArrangeAlignType.AlignCenter,
          null,
          true,
          t,
          true,
          e
        ),
          a.arrangeAlign(
            GTools.GEditor.ArrangeAlignType.AlignMiddle,
            null,
            true,
            t,
            true,
            e
          );
      }),
      (p.prototype.getArea = function () {
        return this._pasteArea;
      }),
      (p.prototype.setAllowFocus = function (e) {
        this._allowFocus = e;
      }),
      (p.prototype.getAllowFocus = function () {
        return this._allowFocus;
      }),
      (p.prototype.assignCallback = function (e) {
        this._callback = e;
      }),
      (p.prototype.executeCallback = function (e, t) {
        return (
          !!this._callback &&
          (this._callback(e, t), (this._callback = null), true)
        );
      }),
      (exports.exports = p);
  }