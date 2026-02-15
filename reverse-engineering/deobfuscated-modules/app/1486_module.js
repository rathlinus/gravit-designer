/**
 * Webpack Module #1486
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(30) /* module_30 */, require(4) /* module_4 */, require(41) /* module_41 */;
    var i = require(1154) /* module_1154 */,
      a = o(require(389) /* module_389 */),
      r = o(require(163) /* module_163 */),
      s = o(require(1245) /* module_1245 */),
      l = require(1) /* module */;
    exports.exports = {
      debugDownloadPNG: function () {
        (0, i.downloadActiveFile)(a.default.PNG.ext);
      },
      debugDownloadPDF: function (e) {
        (0, i.downloadActiveFile)(a.default.PDF.ext, {
          dpi: e || l.GLength.DPI,
        });
      },
      debugDownloadSVG: function () {
        (0, i.downloadActiveFile)(a.default.SVG.ext);
      },
      debugDownloadJPEG: function () {
        (0, i.downloadActiveFile)(a.default.JPG.ext);
      },
      debugOpenFile: function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = gDesigner.getDefaultStorage(),
          o = Object.assign({ disableFileSystemAccessAPI: true, silent: true }, module);
        require.openPrompt(
          r.default.FileTypes.filter((e) => e.load),
          (t) => {
            gDesigner.openDocument(t), e && e();
          },
          false,
          o
        );
      },
      debugImportFont: function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = Object.assign(
            { disableFileSystemAccessAPI: true, silent: true },
            module
          ),
          o = new s.default();
        o.import(e, require);
      },
    };
  }