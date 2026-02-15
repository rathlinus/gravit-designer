/**
 * Webpack Module #847
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.cdrFormatVersionToReleaseYear = function (e) {
        return parseFloat(e) + 2e3 - 2;
      }),
      (module.prepareCDRforSaving = module.default = undefined),
      (module.releaseYearToCdrFormatVersion = function (e) {
        return e && e >= 2020 ? e - 2e3 + 2 : 0;
      }),
      require(193) /* polyfill_Object_keys */,
      require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* GCore */,
      GDocumentStatusEvent = _interopRequireDefault(require(217) /* GDocumentStatusEvent */),
      r = _interopRequireDefault(require(86) /* module_86 */);
    const s = require(1101) /* module_1101 */,
      l = (module.prepareCDRforSaving = async function (e, t, n, _interopRequireDefault, l) {
        if (!gDesigner.getCDRIntegrationEngine()) return t(), false;
        const c = await gDesigner.getUser();
        n.userName = c
          ? c.getFullUserName()
          : GCore.GLocale.get(
              new GCore.GLocaleKey("GDocument", "text.default-export-author")
            );
        const d = (n) => {
          if (
            (n.status !== r.default.Saving &&
              e.removeEventListener(GDocumentStatusEvent.default, d),
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
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
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
          e.addEventListener(GDocumentStatusEvent.default, d),
          gDesigner.getCDRIntegrationEngine().saveCDRDocument(
            e,
            n,
            async (e) => {
              l(e);
            },
            t,
            _interopRequireDefault
          )
        );
      });
    module.default = { prepareCDRforSaving: l };
  }