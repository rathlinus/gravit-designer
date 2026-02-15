/**
 * Webpack Module #1247
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(16) /* _interopRequireDefault */;
    Object.defineProperty(t, "__esModule", { value: !0 }),
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
      n(38) /* stub_requires_680 */;
    var i = n(40) /* CollaborationMergeUtils */,
      a = n(10) /* AppSettings */,
      r = o(n(1248) /* module_1248 */);
    const s = n(388) /* Item */;
  }