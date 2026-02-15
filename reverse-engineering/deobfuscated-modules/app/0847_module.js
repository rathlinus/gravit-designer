/**
 * Webpack Module #847
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.cdrFormatVersionToReleaseYear = function (e) {
        return parseFloat(e) + 2e3 - 2;
      }),
      (module.prepareCDRforSaving = module.default = undefined),
      (module.releaseYearToCdrFormatVersion = function (e) {
        return e && e >= 2020 ? e - 2e3 + 2 : 0;
      }),
      require(193) /* module_193 */,
      require(8) /* module_8 */;
    var i = require(1) /* module */,
      a = o(require(217) /* GDocumentStatusEvent */),
      r = o(require(86) /* module_86 */);
    const s = require(1101) /* module_1101 */,
      l = (module.prepareCDRforSaving = async function (e, t, n, o, l) {
        if (!gDesigner.getCDRIntegrationEngine()) return t(), false;
        const c = await gDesigner.getUser();
        n.userName = c
          ? c.getFullUserName()
          : i.GLocale.get(
              new i.GLocaleKey("GDocument", "text.default-export-author")
            );
        const d = (n) => {
          if (
            (n.status !== r.default.Saving &&
              e.removeEventListener(a.default, d),
            n.status === r.default.SaveFailed)
          ) {
            let e = "unexpected";
            try {
              if (
                n.data &&
                n.data instanceof s &&
                n.data.errCode == s.Type.TooBigFileSize
              ) {
                e = "expected.too-big-file-size";
                let n = new Error(
                  this.getTitle() +
                    ": " +
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GCommonNames",
                        "text.file-too-large-cannot-be-processed"
                      )
                    )
                );
                (n.code = 507), t(n);
              }
            } finally {
              gDesigner.stats("filespanel_export_cdr-failed", e);
            }
          } else
            n.status === r.default.Saved &&
              gDesigner.stats("filespanel_export_cdr-ok");
        };
        return (
          e.addEventListener(a.default, d),
          gDesigner.getCDRIntegrationEngine().saveCDRDocument(
            e,
            n,
            async (e) => {
              l(e);
            },
            t,
            o
          )
        );
      });
    module.default = { prepareCDRforSaving: l };
  }