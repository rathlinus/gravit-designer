/**
 * Webpack Module #1247
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.shouldShowExternalFileError = function (e) {
        return e instanceof s.Item && !e.hasFileSettings();
      }),
      (t.updateSaveOptions = function (e, t, n) {
        if (n.getFullName()) {
          const o = (0, i.getExtensionFromString)(
            n.getFullName(),
            a.FILE_FORMATS.map((e) => e.ext.toUpperCase())
          );
          if (o && "CDR" === o.toUpperCase())
            return (
              (e = new r.default(
                gDesigner.getSetting(
                  "default_cdr_unsupported_effects",
                  r.default.Unsupported.KeepEditable
                ),
                t.getDefaultCdrVersionForSave()
              )),
              ((e = t.updateSaveOptionsLastModifiedDate(e)).singleton =
                !t.isCloudFile()),
              e
            );
        }
        return e;
      }),
      n(38) /* module_38 */;
    var i = n(40) /* module_40 */,
      a = n(10) /* module_10 */,
      r = o(n(1248) /* module_1248 */);
    const s = n(388) /* module_388 */;
  }