/**
 * Webpack Module #1253
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */,
      require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(8) /* polyfill_bundle_ES6 */,
      require(91) /* polyfill_String_trim */,
      require(218) /* module_218 */,
      require(189) /* DataModule_189 */,
      require(190) /* DataModule_190 */,
      require(191) /* module_191 */,
      require(192) /* DataModule_192 */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(38) /* stub_requires_680 */;
    var GCore = require(1) /* GCore */,
      i = require(797) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      AppSettings = require(10) /* AppSettings */,
      s = require(237) /* Item */,
      l = require(163) /* GDocument */,
      DataModule_442 = require(442) /* DataModule_442 */;
    const GDocument_389 = require(389) /* GDocument_389 */;
    function u() {}
    (window.pako = require(165) /* module_165 */),
      require(1514) /* ZipJSBrowser */,
      require(1515) /* ZipJSFileSystem */,
      require(1516) /* module_1516 */,
      (zip.useWebWorkers = false),
      (u.generateExportables = function (e, t, n) {
        var i = e instanceof Array ? e : [e];
        e instanceof GCore.GScene &&
          (i = e
            .getChildren()
            .filter((e) => e instanceof GCore.GPage && e.isVisible()));
        var CollaborationMergeUtils = [],
          AppSettings = {};
        function s(e) {
          var t = e.getProperty("name");
          if (!t) {
            var n = GCore.GObject.getTypeId(e);
            AppSettings.hasOwnProperty(n) || (AppSettings[n] = 0), (t = e.getNodeNameTranslated());
            var i = ++AppSettings[n];
            i > 1 && (t += "_" + i);
          }
          return t;
        }
        function l(e) {
          if (t)
            CollaborationMergeUtils.push(
              GCore.GUtil.extend({}, t, {
                element: e,
                name: 1 === i.length && t.name ? t.name : s(e),
              })
            );
          else if (e.hasMixin(GCore.GNode.Properties)) {
            var AppSettings = e.getProperty(DataModule_442.EXPORT_PROPERTY_NAME, true);
            if (AppSettings && AppSettings instanceof Array && AppSettings.length)
              for (var GDocument_389 = s(e), u = 0; u < AppSettings.length; ++u) {
                var p = AppSettings[u];
                p.fm &&
                  CollaborationMergeUtils.push(
                    GCore.GUtil.extend(
                      {},
                      {
                        size: p.sz,
                        suffix: p.sf,
                        format: p.fm,
                        element: e,
                        name: GDocument_389,
                      }
                    )
                  );
              }
          }
          if (n && e.hasMixin(GCore.GNode.Container))
            for (var g = e.getFirstChild(); null !== g; g = g.getNext())
              g instanceof GCore.GElement && l(g);
        }
        for (var GDocument_389 = 0; GDocument_389 < i.length; ++GDocument_389) {
          l(i[GDocument_389]);
        }
        return CollaborationMergeUtils;
      }),
      (u._validateCommercialDocument = function () {
        const exports = gDesigner.getActiveDocument();
        return !exports || !exports.isCommercialProductFile() || (exports.openPaywall(), false);
      }),
      (u.exportExportable = function (e, t, n, s) {
        if (this._validateCommercialDocument()) {
          var l = e.element,
            DataModule_442 = e.format;
          if ("png" === DataModule_442 || "jpg" === DataModule_442) {
            var u = null,
              p = null;
            switch (DataModule_442) {
              case "png":
                u = GCore.GBitmap.ImageType.PNG;
                break;
              case "jpg":
                (u = GCore.GBitmap.ImageType.JPEG),
                  (p = (e.jpegQuality || 100) / 100);
            }
            var g = GCore.GLength.DPI,
              h = i.GBitmapExport.export(
                e.element,
                e.size,
                e.backgroundColor,
                e.configuration,
                g,
                e.backgroundOpacity,
                true
              );
            h && h.toImageBlob(u, t, p);
          } else if ("svg" === DataModule_442)
            i.GSVGExport.export(
              l,
              {
                convertTextToPath: e.convertTextToPath,
                decimalPlacesPrecision: CollaborationMergeUtils.watchDog.check(
                  e.decimalPlacesPrecision,
                  3
                ),
                preserveEditingCapabilities: CollaborationMergeUtils.watchDog.check(
                  e.preserveEditingCapabilities,
                  false
                ),
                backgroundColor: e.backgroundColor,
                backgroundOpacity: e.backgroundOpacity,
                sceneBackground:
                  !e.configuration ||
                  e.configuration.sceneBackground ||
                  !!e.backgroundColor,
                layerNamesAsId: CollaborationMergeUtils.watchDog.check(e.layerNamesAsId, false),
              },
              function (e, n) {
                !e && n && t(new Blob([n], { type: "image/svg+xml" }));
              }
            );
          else {
            if (DataModule_442 !== GDocument_389.PDF.ext) throw new Error("Unknown format.");
            gDesigner.getUser().then(function (DataModule_442) {
              var u;
              u =
                DataModule_442 && DataModule_442.getFullUserName()
                  ? DataModule_442.getFullUserName()
                  : GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GDocument",
                        "text.default-export-author"
                      )
                    );
              var p = {
                  dpi: CollaborationMergeUtils.watchDog.check(
                    GCore.GUtil.parseNumber(e.size),
                    GCore.GUtil.parseNumber("72dpi")
                  ),
                  colorSpace: e.colorSpace,
                  jpegQuality: e.jpegQuality || AppSettings.JPEG_EXPORT_QUALITY_DEFAULT,
                  configuration: e.configuration,
                  backgroundColor: e.backgroundColor,
                  backgroundOpacity: e.backgroundOpacity,
                  convertTextToPath: e.convertTextToPath,
                  progress: n,
                  user: u,
                  title: gDesigner.getWindows().getActiveWindow().getTitle(),
                  downsampleImages: e.downsampleImages,
                },
                g = i.GPDFExport.export(
                  l,
                  p,
                  function (e, n) {
                    !e && n && t(new Blob([n], { type: GDocument_389.PDF.mime })),
                      s &&
                        (g.isAbort()
                          ? s.close && s.close()
                          : e && s.error && s.error(e));
                  },
                  null,
                  s
                );
              s && (s.abort = () => g && g.abort());
            });
          }
        }
      }),
      (u.generateExportName = function (e, t, n) {
        var i = GCore.GUtil.sanitizeFilename(t || e.name) + (e.suffix || "");
        if (n) {
          var CollaborationMergeUtils = n.filter(function (t) {
            return t.name === i && t.format === e.format;
          });
          n.push({ name: i, format: e.format }),
            CollaborationMergeUtils.length && (i += "(" + (CollaborationMergeUtils.length + 1) + ")");
        }
        return (i += "." + e.format);
      }),
      (u.exportToDirectory = async function (e, t, n, i) {
        if (this._validateCommercialDocument())
          for (var CollaborationMergeUtils = {}, AppSettings = 0, s = [], l = 0; l < e.length; ++l) {
            var DataModule_442 = null,
              GDocument_389 = t;
            if ((DataModule_442 = e[l].name)) {
              if (DataModule_442.indexOf("/") >= 0) {
                var p = DataModule_442.split("/"),
                  g = [];
                for (let e = 0; e < p.length; ++e) {
                  var h = GCore.GUtil.sanitizeFilename(p[e].trim());
                  h && g.push(h);
                }
                if (g.length > 1) {
                  DataModule_442 = g.pop();
                  var f = "";
                  for (let e = 0; e < g.length; ++e) {
                    var m = g[e];
                    f && (f += "/");
                    var y = CollaborationMergeUtils[(f += m.toLowerCase())];
                    if (y) GDocument_389 = y;
                    else
                      try {
                        (GDocument_389 = await GDocument_389.addDirectory(m)), (CollaborationMergeUtils[f] = GDocument_389);
                      } catch (e) {}
                  }
                } else g.length && (DataModule_442 = g[0]);
              } else DataModule_442 = GCore.GUtil.sanitizeFilename(DataModule_442.trim());
              DataModule_442 &&
                GDocument_389 &&
                u.exportExportable(
                  e[l],
                  (function (t, GCore) {
                    return function (i) {
                      var CollaborationMergeUtils = new FileReader();
                      if (
                        ((CollaborationMergeUtils.onload = () => {
                          t.addFile(GCore)
                            .then((t) => {
                              t.write(new Uint8Array(CollaborationMergeUtils.result), () => {
                                ++AppSettings === e.length && n && n();
                              });
                            })
                            .catch(() => {
                              ++AppSettings === e.length && n && n();
                            });
                        }),
                        i instanceof Blob || i instanceof File)
                      )
                        try {
                          CollaborationMergeUtils.readAsArrayBuffer(i);
                        } catch (t) {
                          ++AppSettings === e.length && n && n();
                        }
                      else ++AppSettings === e.length && n && n();
                    };
                  })(GDocument_389, u.generateExportName(e[l], DataModule_442, s)),
                  i
                );
            }
          }
      }),
      (u.export = function (e, t, n, i, CollaborationMergeUtils, AppSettings, DataModule_442, p, g, h) {
        if (this._validateCommercialDocument()) {
          var f = (e, t, n) => {
              var GCore = new FileReader();
              (GCore.onload = () => {
                t.write(new Uint8Array(GCore.result), () => (n ? n() : undefined), g);
              }),
                GCore.readAsArrayBuffer(e);
            },
            m = (e, n, GCore, i, AppSettings, l) => {
              t instanceof s.Item
                ? f(e, t, GCore)
                : t instanceof s &&
                  (!AppSettings && t.canPromptSave()
                    ? t.savePrompt(
                        n,
                        [i],
                        (t) => {
                          f(e, t, GCore);
                        },
                        CollaborationMergeUtils,
                        l
                      )
                    : t.canDownload() &&
                      t.download(
                        n,
                        (t) => {
                          f(e, t, GCore);
                        },
                        l
                      ));
            },
            y = e[0],
            v = e.length > 1,
            _ = l.FileTypes.find((e) => e.ext === y.format);
          if (
            (v &&
              (y.format !== GDocument_389.PDF.ext ||
                AppSettings ||
                ((v = false),
                ((y = GCore.GUtil.extend({}, y)).name = n),
                (y.element = e.map((e) => e.element)))),
            v)
          )
            if (t instanceof s && t.canChooseDirectory())
              t.chooseDirectory(
                (t) => {
                  u.exportToDirectory(e, t, i, DataModule_442);
                },
                CollaborationMergeUtils,
                () => {
                  var t = new u.ZipDirectory();
                  u.exportToDirectory(
                    e,
                    t,
                    () => {
                      t.exportBlob((e) => {
                        m(e, n + ".zip", i, _, true, h);
                      });
                    },
                    DataModule_442
                  );
                }
              );
            else {
              var b = new u.ZipDirectory();
              u.exportToDirectory(
                e,
                b,
                () => {
                  b.exportBlob((e) => {
                    m(
                      e,
                      n + ".zip",
                      i,
                      { ext: "zip", mime: "application/zip" },
                      false,
                      h
                    );
                  });
                },
                DataModule_442
              );
            }
          else
            u.exportExportable(
              y,
              function (e) {
                const n =
                  t instanceof s && t.canDownload() && _ && _.ext === GDocument_389.PDF.ext;
                m(e, u.generateExportName(y), i, _, n, h);
              },
              DataModule_442,
              p
            );
        }
      }),
      (u.ZipDirectory = function (e, t) {
        s.Directory.call(this, e),
          (this._zipRoot = t ? null : new zip.fs.FS()),
          (this._zipDirectory = t || this._zipRoot.root);
      }),
      GCore.GObject.inherit(u.ZipDirectory, s.Directory),
      (u.ZipDirectory.prototype.addDirectory = async function (e) {
        return new u.ZipDirectory(
          this._storage,
          this._zipDirectory.addDirectory(e)
        );
      }),
      (u.ZipDirectory.prototype.addFile = async function (e) {
        return {
          _zipDirectory: this._zipDirectory,
          _name: e,
          write: function (e, t) {
            if ((this._zipDirectory.addBlob(this._name, new Blob([e])), t))
              return t();
          },
        };
      }),
      (u.ZipDirectory.prototype.exportBlob = function (e) {
        this._zipDirectory.exportBlob(e);
      }),
      (exports.exports = u);
  }