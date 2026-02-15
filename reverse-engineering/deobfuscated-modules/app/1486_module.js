/**
 * Webpack Module #1486
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */;
    n(30) /* module_30 */, n(4) /* module_4 */, n(41) /* module_41 */;
    var i = n(1154) /* module_1154 */,
      a = o(n(389) /* module_389 */),
      r = o(n(163) /* module_163 */),
      s = o(n(1245) /* module_1245 */),
      l = n(1) /* module_1 */;
    e.exports = {
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
        let t =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const n = gDesigner.getDefaultStorage(),
          o = Object.assign({ disableFileSystemAccessAPI: true, silent: true }, t);
        n.openPrompt(
          r.default.FileTypes.filter((e) => e.load),
          (t) => {
            gDesigner.openDocument(t), e && e();
          },
          false,
          o
        );
      },
      debugImportFont: function (e) {
        let t =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const n = Object.assign(
            { disableFileSystemAccessAPI: true, silent: true },
            t
          ),
          o = new s.default();
        o.import(e, n);
      },
    };
  }