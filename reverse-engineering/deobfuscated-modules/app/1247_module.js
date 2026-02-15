/**
 * Webpack Module #1247
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.shouldShowExternalFileError = function (e) {
        return e instanceof s.Item && !e.hasFileSettings();
      }),
      (module.updateSaveOptions = function (e, t, n) {
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
      require(38) /* module_38 */;
    var i = require(40) /* module_40 */,
      a = require(10) /* module_10 */,
      r = o(require(1248) /* module_1248 */);
    const s = require(388) /* module_388 */;
  }