/**
 * Webpack Module #119
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */,
      require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(107) /* polyfill_RegExp_test */,
      require(34) /* polyfill_String_replace */,
      require(134) /* polyfill_String_startsWith */,
      require(218) /* module_218 */,
      require(189) /* DataModule_189 */,
      require(190) /* DataModule_190 */,
      require(191) /* module_191 */,
      require(192) /* DataModule_192 */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(38) /* stub_requires_680 */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var AppSettings = require(10) /* AppSettings */,
      GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      GCloudImageSync = require(845) /* GCloudImageSync */;
    const l = require(1092) /* module_1092 */;
    var GDocumentEvent = require(78) /* GDocumentEvent */,
      GSystemDialog = require(44) /* GSystemDialog */;
    const GLoginDialog = require(1093) /* GLoginDialog */;
    var GContainer = require(85) /* GContainer */,
      g = require(219) /* GLocale */,
      GAnnotationsUtils = require(358) /* GAnnotationsUtils */;
    const f = require(86) /* module_86 */,
      m = (require(156) /* GCloudStorageItem */, require(256) /* GOfflineDialog */),
      y = require(337) /* stub_requires_1098 */,
      Md5 = require(435) /* Md5 */,
      _ = require(165) /* module_165 */;
    var b = AppSettings.FILE_FORMATS.find((e) => e.default),
      w = AppSettings.FILE_FORMATS.filter((e) => e.secondary),
      C = AppSettings.FOLDER_FORMAT;
    const x = require(555) /* module_555 */,
      S = 10,
      E = 80,
      A = 90,
      T = 100;
    class G {
      static convertToCloudItem(e) {
        const module = (e) => l.createFrom(e);
        return e instanceof Array ? e.map(module) : module(e);
      }
      static _getAuthorizationToken() {
        return null;
      }
      static syncCloudImages(e, t, n, GEditor) {
        return new Promise((l, GDocumentEvent) => {
          try {
            var GSystemDialog = e.getScene(),
              GLoginDialog = GSystemDialog.getDictionary().getEntries(),
              GContainer = [];
            GSystemDialog.acceptChildren((e) => {
              e instanceof GCore.GImage &&
                GContainer.push({
                  name: e.getProperty("name"),
                  url: e.getProperty("url"),
                });
            });
            const GAnnotationsUtils = G._getAuthorizationToken();
            var g = AppSettings.gApi.url;
            (0, GCloudImageSync.syncImagesToCloud)(
              (e) => (0, GCloudImageSync.listFilesFn)(e, GAnnotationsUtils, g),
              GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.untitled-image")
              ),
              GContainer,
              GLoginDialog,
              async (e, t) =>
                (0, GCloudImageSync.createFileAndGetSignedPutUrlsFn)(e, t, g, GAnnotationsUtils),
              async (e, t, n) =>
                (0, GCloudImageSync.updateFileFn)(
                  e,
                  t,
                  n,
                  g,
                  GAnnotationsUtils,
                  AppSettings.COMPUTE_SHA256_FOR_FILES,
                  CollaborationMergeUtils.getFileSHA256Digest
                ),
              (e) => {
                try {
                  var t = GSystemDialog.getDictionary().merge(e);
                  try {
                    var AppSettings = GCore.GNode.serialize(
                      GSystemDialog,
                      GCore.GUtil.extend({ save: true }, n)
                    );
                  } finally {
                    GSystemDialog.getDictionary().merge(t);
                  }
                  l([AppSettings]);
                } catch (e) {
                  GDocumentEvent(e);
                }
              },
              t,
              GEditor
            );
          } catch (e) {
            GDocumentEvent(e);
          }
        });
      }
      static resolveImage(e, t) {
        function require(e, t) {
          let require = e.url,
            AppSettings = e.scene;
          if (AppSettings && AppSettings.isReleased()) return false;
          let CollaborationMergeUtils = AppSettings && AppSettings.getDictionary() && AppSettings.getDictionary().getEntry(require);
          return (
            !CollaborationMergeUtils ||
            !/^data:.{0,255};base64,/i.exec(CollaborationMergeUtils.value) ||
            (CollaborationMergeUtils.value.length > GEditor.GPlatform.maxImgDataUrlLength &&
              new g(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GDocument", "text.image-in-design-too-big")
                )
              ).open(),
            e.resolved(CollaborationMergeUtils.value),
            false)
          );
        }
        !(async function () {
          let CollaborationMergeUtils = e.url,
            GCloudImageSync =
              e.scene &&
              e.scene.getDictionary() &&
              e.scene.getDictionary().getEntry(CollaborationMergeUtils);
          if (require(e))
            if ("string" == typeof CollaborationMergeUtils && CollaborationMergeUtils.startsWith("123rf://")) {
              var l = CollaborationMergeUtils.slice(8),
                GDocumentEvent = "ec23d185aa5ffb6495e02635803bb081";
              (function (e) {
                var t = "https://www.123rfapis.com/?method=download&id=" + e;
                t += "&dl_type=png";
                const require = Math.floor(Date.now() / 1e3);
                t += "&current_time=" + require;
                var AppSettings = (function (e, t, n) {
                  return Md5(GDocumentEvent + "759561ac90761219f6415da66f18a154" + e + t + n);
                })(e, "png", require);
                return (
                  (t += "&sign=" + AppSettings),
                  (t += "&api_key=" + GDocumentEvent),
                  new Promise((e, n) => {
                    var AppSettings = new XMLHttpRequest();
                    AppSettings.open("GET", t),
                      (AppSettings.onload = function () {
                        if (this.status >= 200 && this.status < 300) {
                          var t = JSON.parse(this.response);
                          e(t.download_url);
                        } else n();
                      }),
                      AppSettings.send();
                  })
                );
              })(l).then(
                (n) => {
                  if (n) {
                    var AppSettings = new XMLHttpRequest();
                    AppSettings.open("GET", n),
                      (AppSettings.responseType = "arraybuffer"),
                      (AppSettings.onload = function () {
                        if (this.status < 200 || this.status >= 400)
                          alert(
                            "There was a problem downloading requested image"
                          );
                        else {
                          var n = new Blob([this.response], { type: "image" });
                          if (n.size > GEditor.GPlatform.maxPngDataSize)
                            new g(
                              GCore.GLocale.get(
                                new GCore.GLocaleKey(
                                  "GDocument",
                                  "text.image-in-design-too-big"
                                )
                              )
                            ).open();
                          else {
                            var AppSettings = new FileReader();
                            (AppSettings.onload = function () {
                              if (
                                this.result.length >
                                GEditor.GPlatform.maxImgDataUrlLength
                              )
                                return void new g(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      "GDocument",
                                      "text.image-in-design-too-big"
                                    )
                                  )
                                ).open();
                              let n =
                                e.scene &&
                                e.scene.getDictionary() &&
                                e.scene.getDictionary().getEntry(e.url);
                              n &&
                                t &&
                                ((n.cloud = n.value), (n.value = this.result)),
                                e.resolved(this.result);
                            }),
                              (AppSettings.onerror = function () {
                                new g(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      "GDocument",
                                      "text.image-in-design-too-big"
                                    )
                                  )
                                ).open();
                              }),
                              AppSettings.readAsDataURL(n);
                          }
                        }
                      }),
                      AppSettings.send();
                  } else
                    alert("There was a problem downloading the image selected");
                },
                () => {
                  alert("There was a problem downloading requested image");
                }
              );
            } else if (
              /^(dictionary|gravit|document|asset|magenta)/.test(CollaborationMergeUtils) &&
              (CollaborationMergeUtils.startsWith(GCore.GDictionary.PROTOCOL) &&
                ((CollaborationMergeUtils =
                  e.scene && e.scene.getDictionary()
                    ? e.scene.getDictionary().getValue(e.url)
                    : null),
                "string" == typeof CollaborationMergeUtils &&
                  CollaborationMergeUtils.startsWith(GCore.GDictionary.CLOUD_PROTOCOL) &&
                  (GCloudImageSync =
                    e.scene &&
                    e.scene.getDictionary() &&
                    e.scene.getDictionary().getEntry(e.url))),
              "string" == typeof CollaborationMergeUtils)
            ) {
              const n = await gDesigner.getUser(),
                GCore = CollaborationMergeUtils.startsWith("magenta"),
                GEditor =
                  e.scene && t.getScene() !== e.scene
                    ? t.getTempCloudStorageItem()
                    : t.getStorageItem();
              var GSystemDialog = GEditor && GEditor.getId();
              if (!n.isAnonymous() && !GSystemDialog && t) {
                (GSystemDialog = (await AppSettings.gApi.createFile({ trashed: null })).id),
                  t.setReservedId(GSystemDialog);
              }
              const l = CollaborationMergeUtils.slice(CollaborationMergeUtils.indexOf("://") + 3),
                GDocumentEvent = new URLSearchParams(l);
              let GContainer,
                g,
                GAnnotationsUtils = l;
              if (GDocumentEvent.has("id"))
                (GAnnotationsUtils = GDocumentEvent.get("id")), (GContainer = GDocumentEvent.get("width")), (g = GDocumentEvent.get("height"));
              else if (GDocumentEvent.has("url")) {
                const e = new URL(GDocumentEvent.get("url")).pathname.slice(1).split("/");
                GAnnotationsUtils = "public" == e[0] ? e[2] : e[1];
              } else GAnnotationsUtils = CollaborationMergeUtils.slice(CollaborationMergeUtils.indexOf("://") + 3);
              return gDesigner.isAnonymous() && GCore
                ? AppSettings.gApi.getFile(GAnnotationsUtils).then((n) => {
                    GLoginDialog(
                      n.url,
                      GContainer,
                      g,
                      (n) => {
                        GCloudImageSync && t && ((GCloudImageSync.cloud = GCloudImageSync.value), (GCloudImageSync.value = n)),
                          e.resolved(n);
                      },
                      true
                    );
                  })
                : AppSettings.gApi.resolveUrls(GSystemDialog, GAnnotationsUtils).then((n) => {
                    GLoginDialog(
                      n[0][1],
                      GContainer,
                      g,
                      (n) => {
                        GCloudImageSync && t && ((GCloudImageSync.cloud = GCloudImageSync.value), (GCloudImageSync.value = n)),
                          e.resolved(n);
                      },
                      GCore
                    );
                  });
            }
          function GLoginDialog(t, AppSettings, CollaborationMergeUtils, GCloudImageSync, l) {
            if (!require(e)) return;
            const GDocumentEvent = new Image();
            GDocumentEvent.crossOrigin = "Anonymous";
            AppSettings && (GDocumentEvent.width = AppSettings),
              CollaborationMergeUtils && (GDocumentEvent.height = CollaborationMergeUtils),
              (GDocumentEvent.onload = function () {
                if (!require(e)) return void (GDocumentEvent.onload = null);
                const t = document.createElement("CANVAS"),
                  GSystemDialog = t.getContext("2d");
                l &&
                  ([GDocumentEvent.width, GDocumentEvent.height] = (function (e, t, n) {
                    const AppSettings = e.width / t,
                      GCore = e.height / n;
                    return AppSettings < 1 || GCore < 1
                      ? [e.width, e.height]
                      : AppSettings > GCore
                      ? [t, (t * e.height) / e.width]
                      : [(n * e.width) / e.height, n];
                  })(GDocumentEvent, AppSettings || 1080, CollaborationMergeUtils || 1080));
                let GLoginDialog = false;
                (GDocumentEvent.width > GEditor.GPlatform.maxImgLinearDimension ||
                  GDocumentEvent.height > GEditor.GPlatform.maxImgLinearDimension ||
                  GDocumentEvent.width * GDocumentEvent.height > GEditor.GPlatform.maxImgAreaDots) &&
                  (new g(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GDocument",
                        "text.image-in-design-too-big"
                      )
                    )
                  ).open(),
                  (GLoginDialog = true)),
                  (t.width = GDocumentEvent.width),
                  (t.height = GDocumentEvent.height),
                  GSystemDialog.drawImage(GDocumentEvent, 0, 0, GDocumentEvent.width, GDocumentEvent.height);
                var GContainer = t.toDataURL();
                GContainer.length > GEditor.GPlatform.maxImgDataUrlLength &&
                  !GLoginDialog &&
                  (new g(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GDocument",
                        "text.image-in-design-too-big"
                      )
                    )
                  ).open(),
                  (GLoginDialog = true)),
                  (GDocumentEvent.onload = null),
                  GCloudImageSync(GContainer);
              }),
              (GDocumentEvent.src = t);
          }
        })();
      }
      static createFolder(e, t) {
        return new Promise((n, GCore) => {
          var GEditor = this;
          !(async function () {
            try {
              var CollaborationMergeUtils = GEditor.definePath(t);
              await AppSettings.gApi.createFile({
                name: e,
                type: C,
                parent: CollaborationMergeUtils,
                trashed: false,
              }),
                n();
            } catch (e) {
              GCore(e);
            }
          })();
        });
      }
      static definePath(e) {
        return e ? e.id : null;
      }
      static fileExists(e) {
        return AppSettings.gApi
          .getFile(e)
          .then(() => true)
          .catch((e) => {
            if (e.status === AppSettings.HTTP_STATUS_CODES.NOT_FOUND) return false;
            throw e;
          });
      }
      static changePathTree(e, t) {
        return new Promise((n, GCore) => {
          !(async function () {
            try {
              for (var GEditor = 0; GEditor < e.length; ++GEditor) {
                var CollaborationMergeUtils = e[GEditor],
                  GCloudImageSync = CollaborationMergeUtils.parent;
                t !== GCloudImageSync &&
                  CollaborationMergeUtils.id !== t &&
                  (await AppSettings.gApi.updateFile(CollaborationMergeUtils.id, { parent: t }));
              }
              n();
            } catch (e) {
              GCore(e);
            }
          })();
        });
      }
      static performSignup() {
        return this.performLogin(GLoginDialog.Forms.SignUp);
      }
      static performLogin(e) {
        return new Promise((t, n) => {
          try {
            const n = () => {
              new GLoginDialog((e) => {
                gDesigner.getUser(), t(e);
              }, e).open();
            };
            gDesigner
              .getUser()
              .then((e) => {
                !e || gDesigner.isAnonymous() ? n() : t(e);
              })
              .catch(() => {
                n();
              });
          } catch (e) {
            n(e);
          }
        });
      }
      static createFile(e, t) {
        !(async function () {
          var n = null;
          let GCore = e.getScene().getActivePage().getGeometryBBox(),
            GEditor = 0,
            CollaborationMergeUtils = 0;
          GCore && ((GEditor = GCore.getWidth()), (CollaborationMergeUtils = GCore.getHeight()));
          const GCloudImageSync = {
            name: e.getTitle(),
            parent: null,
            type: b.type,
            app: "designer",
            unit: e.getScene().getProperty("ut"),
            width: GEditor,
            height: CollaborationMergeUtils,
            trashed: null,
          };
          e.getReservedId()
            ? (await AppSettings.gApi.updateFile(e.getReservedId(), GCloudImageSync),
              (n = e.getReservedId()))
            : (n = await AppSettings.gApi.createFile(GCloudImageSync)),
            t(n);
        })();
      }
      static loadDesignData(e, t, n, GCore, GEditor, CollaborationMergeUtils) {
        return new Promise(async (GCloudImageSync, l) => {
          try {
            let GContainer;
            if (e && CollaborationMergeUtils) {
              let t = (GEditor = await AppSettings.gApi.getFile(e)).url;
              if (n) {
                t = (await AppSettings.gApi.getAutoSave(e, n)).url;
              } else GEditor.autosave && (t = GEditor.autosave_url);
              (GContainer = GEditor.url), (GEditor.url = t);
            } else if (e && !GEditor)
              if (GCore) GEditor = await AppSettings.gApi.getShare(GCore);
              else {
                var GDocumentEvent = n ? "/version/" + n : "";
                GEditor = t
                  ? await AppSettings.gApi.getFile(e + GDocumentEvent + "?edit")
                  : await AppSettings.gApi.getFile(e + GDocumentEvent);
              }
            else if (t) {
              const t = GEditor ? GEditor.id : e;
              t &&
                (await AppSettings.gApi.file.registerAccess(t).catch((e) => {
                  console.error("Could not register access", e);
                }));
            }
            const g = (e) =>
              fetch(e).then(function (e) {
                if (!e.ok)
                  throw new Error("failed to download, status = " + e.status);
                return e.blob();
              });
            var GSystemDialog = await g(GEditor.url).catch((e) => {
                if (!GContainer) throw e;
                return g(GContainer);
              }),
              GLoginDialog = new FileReader();
            (GLoginDialog.onload = function () {
              GCloudImageSync({ data: new Uint8Array(this.result), file: GEditor });
            }),
              (GLoginDialog.onerror = l),
              GLoginDialog.readAsArrayBuffer(
                new Blob([GSystemDialog], { type: "application/octet-stream" })
              );
          } catch (e) {
            l(e);
          }
        });
      }
      static getDesigneDataSize(e) {
        return new Promise(async (t, n) => {
          try {
            var GCore = await AppSettings.gApi.getFile(e);
            return await fetch(GCore.url, { method: "HEAD" }).then(function (e) {
              var n = e.headers.get("Content-Length");
              t(n);
            });
          } catch (e) {
            n(e);
          }
        });
      }
      static renameFile(e, t, n) {
        !(async function () {
          try {
            await AppSettings.gApi.updateFile(e.id, { name: t }), n(true);
          } catch (e) {
            console.error(e), n(false);
          }
        })();
      }
      static _checkSecondaryFormatSanity() {
        return true;
      }
      static performSave(e, t, n, GEditor, CollaborationMergeUtils) {
        let GCloudImageSync = arguments.length > 5 && undefined !== arguments[5] && arguments[5];
        if (e.hasPagesWithInfiniteEmptyCanvas())
          return void (n
            ? n({
                code: 507,
                message: GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                ),
                noFailCall: true,
              })
            : GSystemDialog.alert(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GCommonNames",
                    "text.error-emtpy-infinite-canvas"
                  )
                )
              ));
        var l = GEditor;
        function GLoginDialog() {
          let GEditor = false;
          if (e.isCommercialProductFile()) return void e.openPaywall();
          var GLoginDialog = CollaborationMergeUtils || e.getStorageItem();
          const GContainer =
            GLoginDialog &&
            w.length &&
            w.find((e) => e.ext.toUpperCase() === GLoginDialog.getExtension());
          if (GContainer && !G._checkSecondaryFormatSanity(e)) return void (n && n());
          const g = e.getEditor().markSavePoint();
          var m = function (AppSettings) {
            g.rollback(),
              GCloudImageSync ||
                (AppSettings && 507 === AppSettings.code
                  ? GSystemDialog.alert(AppSettings.message)
                  : GSystemDialog.confirm(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GCommonNames",
                          "text.save-to-cloud-failed"
                        )
                      ),
                      function (AppSettings) {
                        AppSettings
                          ? (gDesigner.stats(
                              "savealert_save-failed_click-save-local"
                            ),
                            gDesigner.executeAction(
                              "file.save-as.".concat(b.ext),
                              [null, e],
                              undefined,
                              true
                            ))
                          : (gDesigner.stats(
                              "savealert_save-failed_dont-save-local"
                            ),
                            "function" != typeof n || GEditor
                              ? "function" == typeof t && t(false)
                              : ((GEditor = true), n()));
                      },
                      GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "no")),
                      GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "yes"))
                    )),
              AppSettings && console.log(AppSettings),
              e.updateStatus(f.SaveFailed),
              e.setSynchronizing(false),
              e.setErrored(true),
              gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.SynchronismUpdateFailed, e)),
              n && !GEditor && ((GEditor = true), n());
          };
          try {
            const n = {};
            e.setSynchronizing(true), e.updateStatus(f.Saving, n);
            const { progress: GEditor } = n,
              CollaborationMergeUtils = (e) => {
                GEditor && GEditor(e);
              };
            !(async function (t) {
              var n = null;
              try {
                let t = {
                  unit: e.getScene().getProperty("ut"),
                  width: 0,
                  height: 0,
                };
                if (AppSettings.HAS_ANNOTATIONS)
                  if (GContainer) {
                    let t = true;
                    await GAnnotationsUtils.saveDocumentAnnotations(e, t);
                    l = e.updateSaveOptionsLastModifiedDate(l);
                  } else
                    try {
                      let n = (await GAnnotationsUtils.getCloudAnnotationsForDocument(e))
                        .annotationsCollection;
                      e.getScene().iteratePages((e) => {
                        !!GAnnotationsUtils.findAnnotationsListForPage(e, n) ||
                          n.push(GCore.GNode.store(e.getAnnotations()));
                      }, true),
                        (t.annotations = n);
                    } catch (e) {
                      console.warn("Annotations couldn't be updated on server");
                    }
                let n = e.getScene().getActivePage().getGeometryBBox();
                n && ((t.width = n.getWidth()), (t.height = n.getHeight())),
                  await AppSettings.gApi.updateFile(GLoginDialog._id, t);
              } catch (e) {
                n = e;
              }
              t(n);
            })(function (n) {
              CollaborationMergeUtils(S),
                n
                  ? m(n)
                  : GLoginDialog.write(
                      e,
                      function () {
                        CollaborationMergeUtils(A),
                          e.setSynchronizing(false),
                          e.setErrored(false),
                          gDesigner.hasEventListeners(GDocumentEvent) &&
                            gDesigner.trigger(new GDocumentEvent(GDocumentEvent.Type.Modified, e));
                        var n = (n, AppSettings) => {
                          try {
                            n &&
                              (e.updateStatus(f.Saved, l),
                              gDesigner.updateRecentDocumentsAction(),
                              e
                                .getStorageItem()
                                .setFileAutoSaveLastModifiedDate(
                                  new Date(AppSettings.autosave_updated)
                                ),
                              e
                                .getStorageItem()
                                .setFileLastModifiedDate(new Date(AppSettings.updated)));
                          } finally {
                            CollaborationMergeUtils(T), t && t();
                          }
                        };
                        AppSettings.gApi
                          .getFile(GLoginDialog._id + "?edit")
                          .then((e) => n(true, e))
                          .catch(n);
                      },
                      function (e) {
                        m(e);
                      },
                      (e) => {
                        CollaborationMergeUtils(x.calculateProgress(S, E, e / 100));
                      },
                      l
                    );
            });
          } catch (e) {
            m(e);
          }
        }
        const GContainer = () => {
          gDesigner.getUser().then((e) => {
            !e || gDesigner.isAnonymous() ? G.performLogin().then(GLoginDialog) : GLoginDialog();
          });
        };
        gDesigner.isOffline() ? m.openUnavailableFeature(GContainer) : GContainer();
      }
      static async updateFileThumbnail(e, t, n, GCore) {
        var GEditor = await AppSettings.gApi.signedPutUrls(e, { type_t: n, commit: GCore }),
          CollaborationMergeUtils = new XMLHttpRequest();
        CollaborationMergeUtils.open("PUT", GEditor.url_t);
        var GCloudImageSync = {
          "Content-Type": n,
          "Cache-Control": "public,max-age=31600000",
        };
        for (var l in GCloudImageSync) CollaborationMergeUtils.setRequestHeader(l, GCloudImageSync[l]);
        CollaborationMergeUtils.send(t);
      }
      static async saveDocumentAnnotations(e, t, n) {
        return (
          !!AppSettings.HAS_ANNOTATIONS &&
          (gDesigner.isOffline()
            ? (console.warn("Failed to record annotations"), false)
            : gDesigner
                .getUser()
                .then(
                  (AppSettings) =>
                    !(!AppSettings || gDesigner.isAnonymous()) &&
                    GAnnotationsUtils.saveDocumentAnnotations(e, t, undefined, n)
                ))
        );
      }
      static async getCloudAnnotations(e) {
        if (AppSettings.HAS_ANNOTATIONS) {
          if (!gDesigner.isOffline())
            return gDesigner.getUser().then((e) => {
              e && gDesigner.isAnonymous();
            });
          console.warn("Failed to get annotations");
        }
      }
      static isOnline() {
        return (
          "undefined" != typeof window &&
          undefined !== window.gApi &&
          window.gApi.url
        );
      }
      static getRecentStorageItems() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0]
            ? arguments[0]
            : AppSettings.FILE_FORMATS;
        var t = this;
        return new Promise((n, GCore) => {
          !(async function () {
            const GEditor = exports.map((e) => e.type).join("|");
            try {
              if (t.isOnline()) {
                var CollaborationMergeUtils = await AppSettings.gApi.listFiles({
                  type: GEditor,
                  accessed: "true",
                  sort: "-accessed",
                  parent: "*",
                  limit: "10",
                });
                n(CollaborationMergeUtils);
              }
            } catch (e) {}
            GCore([]);
          })();
        });
      }
      static unzipData(e) {
        var t = null;
        try {
          t = _.ungzip(e, { to: "string" });
        } catch (GEditor) {
          if ("undefined" == typeof TextDecoder && e.length > 1e7) {
            for (var require = [], AppSettings = e.length, GCore = 0; GCore < AppSettings; GCore += 32768)
              require.push(String.fromCharCode.apply(null, e.subarray(GCore, GCore + 32768)));
            t = require.join("");
          } else
            try {
              t =
                "undefined" == typeof TextDecoder
                  ? new FakeTextEncoding.TextDecoder("utf-8").decode(e)
                  : new TextDecoder("utf-8").decode(e);
            } catch (e) {
              console.warn("Couldn't unzip data. Data corrupted?");
            }
        }
        return t;
      }
      static resendEmailConfirmation(e) {
        let module, require;
        if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
          const e = gContainer.getPlatform();
          ("darwin" !== e && "win32" !== e) || (module = "designer://"),
            (require = gDesigner.getAssetsURL());
        } else require = location.origin;
        return AppSettings.gApi
          .resendEmailConfirmation({
            appUrl: module,
            webUrl: require,
            email: e.getEmail(),
            force: true,
            origin: location.origin,
          })
          .then(() => {
            let e = {},
              module = new Promise((t) => (e.resolve = t));
            return (
              GSystemDialog.custom({
                title: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.email-sent-title")
                ),
                subtitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GCommonNames", "text.email-sent-info")
                ),
                icon: "ok",
                closeCallback: () => e.resolve(),
              }),
              module
            );
          })
          .catch((e) =>
            GSystemDialog.custom({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey("GCommonNames", "text.something-wrong")
              ),
              subtitle: AppSettings.gApi.formatError(e),
            })
          );
      }
      static createUint8ArrayFromBlob(e) {
        return new Promise((t, n) => {
          const AppSettings = new FileReader();
          (AppSettings.onload = function () {
            t(new Uint8Array(this.result));
          }),
            (AppSettings.onerror = n),
            AppSettings.readAsArrayBuffer(e);
        });
      }
      static getFileDataForVersionOrAutoSave(e, t, n) {
        return t && !n ? AppSettings.gApi.getFile(e, false, t) : AppSettings.gApi.getFile(e);
      }
      static async activateCoupon(e) {
        try {
          const t = await AppSettings.gApi.coupon.activate(e);
          await y.checkLicense(),
            gDesigner.addNotification({ message: t.message });
        } catch (e) {
          if (!e.ok && e.code)
            switch (e.code) {
              case AppSettings.gApi.ERROR_CODES.ERR_SUBSCRIPTION_COULD_NOT_BE_DEACTIVATED:
                const e = $(
                  "<div>".concat(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GCloudUtil",
                        "text.err-subscription-could-not-be-deactivated"
                      )
                    ),
                    "</div>"
                  )
                );
                return (
                  e
                    .find("a")
                    .addClass("link")
                    .attr("href", "javascript:void(0)")
                    .on(
                      "click",
                      (e) => (
                        e.preventDefault(),
                        gDesigner.runDeepLink("purchases"),
                        false
                      )
                    ),
                  GSystemDialog.alert(e)
                );
              case AppSettings.gApi.ERROR_CODES.ERR_SUBSCRIPTION_IS_ACTIVE:
                const { nextBillingDate: module } =
                  await AppSettings.gApi.subscription.getNextBillingDate();
                return GSystemDialog.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCloudUtil",
                      "text.err-subscription-is-active"
                    )
                  ).replace("%date", AppSettings.DateAPI.format(module))
                );
              case AppSettings.gApi.ERROR_CODES.ERR_SUBSCRIPTION_IS_NOT_EXPIRED:
                return GSystemDialog.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCloudUtil",
                      "text.err-subscription-is-not-expired"
                    )
                  ).replace(
                    "%date",
                    AppSettings.DateAPI.format(gDesigner.getLicense().getExpirationDate())
                  )
                );
              case AppSettings.gApi.ERROR_CODES.ERR_SUBSCRIPTION_IS_LIFETIME:
                return GSystemDialog.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey(
                      "GCloudUtil",
                      "text.err-subscription-is-lifetime"
                    )
                  )
                );
            }
          gDesigner.addNotification({ message: AppSettings.gApi.formatError(e) });
        }
      }
    }
    exports.exports = G;
  }