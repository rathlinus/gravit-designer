/**
 * Webpack Module #1486
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(30) /* polyfill_Object_assign */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GFileDownloadUtils = require(1154) /* GFileDownloadUtils */,
      a = _interopRequireDefault(require(389) /* module_389 */),
      GDocument = _interopRequireDefault(require(163) /* GDocument */),
      GCustomFontImporter = _interopRequireDefault(require(1245) /* GCustomFontImporter */),
      GCore = require(1) /* GCore */;
    exports.exports = {
      debugDownloadPNG: function () {
        (0, GFileDownloadUtils.downloadActiveFile)(a.default.PNG.ext);
      },
      debugDownloadPDF: function (e) {
        (0, GFileDownloadUtils.downloadActiveFile)(a.default.PDF.ext, {
          dpi: e || GCore.GLength.DPI,
        });
      },
      debugDownloadSVG: function () {
        (0, GFileDownloadUtils.downloadActiveFile)(a.default.SVG.ext);
      },
      debugDownloadJPEG: function () {
        (0, GFileDownloadUtils.downloadActiveFile)(a.default.JPG.ext);
      },
      debugOpenFile: function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = gDesigner.getDefaultStorage(),
          _interopRequireDefault = Object.assign({ disableFileSystemAccessAPI: true, silent: true }, module);
        require.openPrompt(
          GDocument.default.FileTypes.filter((e) => e.load),
          (t) => {
            gDesigner.openDocument(t), e && e();
          },
          false,
          _interopRequireDefault
        );
      },
      debugImportFont: function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = Object.assign(
            { disableFileSystemAccessAPI: true, silent: true },
            module
          ),
          _interopRequireDefault = new GCustomFontImporter.default();
        _interopRequireDefault.import(e, require);
      },
    };
  }