/**
 * Webpack Module #1253
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */,
      require(180) /* module_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(8) /* polyfill_bundle_ES6 */,
      require(91) /* polyfill_String_trim */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(38) /* stub_requires_680 */;
    var GCore = require(1) /* module */,
      i = require(797) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      AppSettings = require(10) /* AppSettings */,
      s = require(237) /* Item */,
      l = require(163) /* module_163 */,
      c = require(442) /* module_442 */;
    const d = require(389) /* module_389 */;
    function u() {}
    (window.pako = require(165) /* module_165 */),
      require(1514) /* module_1514 */,
      require(1515) /* module_1515 */,
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
            var AppSettings = e.getProperty(c.EXPORT_PROPERTY_NAME, true);
            if (AppSettings && AppSettings instanceof Array && AppSettings.length)
              for (var d = s(e), u = 0; u < AppSettings.length; ++u) {
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
                        name: d,
                      }
                    )
                  );
              }
          }
          if (n && e.hasMixin(GCore.GNode.Container))
            for (var g = e.getFirstChild(); null !== g; g = g.getNext())
              g instanceof GCore.GElement && l(g);
        }
        for (var d = 0; d < i.length; ++d) {
          l(i[d]);
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
            c = e.format;
          if ("png" === c || "jpg" === c) {
            var u = null,
              p = null;
            switch (c) {
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
          } else if ("svg" === c)
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
            if (c !== d.PDF.ext) throw new Error("Unknown format.");
            gDesigner.getUser().then(function (c) {
              var u;
              u =
                c && c.getFullUserName()
                  ? c.getFullUserName()
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
                    !e && n && t(new Blob([n], { type: d.PDF.mime })),
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
            var c = null,
              d = t;
            if ((c = e[l].name)) {
              if (c.indexOf("/") >= 0) {
                var p = c.split("/"),
                  g = [];
                for (let e = 0; e < p.length; ++e) {
                  var h = GCore.GUtil.sanitizeFilename(p[e].trim());
                  h && g.push(h);
                }
                if (g.length > 1) {
                  c = g.pop();
                  var f = "";
                  for (let e = 0; e < g.length; ++e) {
                    var m = g[e];
                    f && (f += "/");
                    var y = CollaborationMergeUtils[(f += m.toLowerCase())];
                    if (y) d = y;
                    else
                      try {
                        (d = await d.addDirectory(m)), (CollaborationMergeUtils[f] = d);
                      } catch (e) {}
                  }
                } else g.length && (c = g[0]);
              } else c = GCore.GUtil.sanitizeFilename(c.trim());
              c &&
                d &&
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
                  })(d, u.generateExportName(e[l], c, s)),
                  i
                );
            }
          }
      }),
      (u.export = function (e, t, n, i, CollaborationMergeUtils, AppSettings, c, p, g, h) {
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
              (y.format !== d.PDF.ext ||
                AppSettings ||
                ((v = false),
                ((y = GCore.GUtil.extend({}, y)).name = n),
                (y.element = e.map((e) => e.element)))),
            v)
          )
            if (t instanceof s && t.canChooseDirectory())
              t.chooseDirectory(
                (t) => {
                  u.exportToDirectory(e, t, i, c);
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
                    c
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
                c
              );
            }
          else
            u.exportExportable(
              y,
              function (e) {
                const n =
                  t instanceof s && t.canDownload() && _ && _.ext === d.PDF.ext;
                m(e, u.generateExportName(y), i, _, n, h);
              },
              c,
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