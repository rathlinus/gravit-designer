/**
 * Webpack Module #1247
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.shouldShowExternalFileError = function (e) {
        return e instanceof s.Item && !e.hasFileSettings();
      }),
      (module.updateSaveOptions = function (e, t, n) {
        if (n.getFullName()) {
          const _interopRequireDefault = (0, CollaborationMergeUtils.getExtensionFromString)(
            n.getFullName(),
            AppSettings.FILE_FORMATS.map((e) => e.ext.toUpperCase())
          );
          if (_interopRequireDefault && "CDR" === _interopRequireDefault.toUpperCase())
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
      require(38) /* stub_requires_680 */;
    var CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      AppSettings = require(10) /* AppSettings */,
      r = _interopRequireDefault(require(1248) /* module_1248 */);
    const s = require(388) /* Item */;
  }