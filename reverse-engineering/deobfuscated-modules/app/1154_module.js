/**
 * Webpack Module #1154
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.downloadActiveFile = function () {
        let exports =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : null,
          module =
            arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if (!window.gDesigner) return false;
        const require = window.gDesigner.getActiveDocument();
        if (!require) return false;
        if (!window.gContainer) return false;
        const o = window.gContainer.getStorage();
        if (!o) return false;
        exports = exports || require.getExtension();
        const i = "".concat(require.getTitle() || "Design", ".").concat(exports);
        return (
          o.download(i, (e) => {
            require.store(e, console.log, console.error, module);
          }),
          true
        );
      }),
      (module.downloadDataURI = function e(t, n, o, i) {
        if (t instanceof Blob) {
          var a = new FileReader();
          (a.onloadend = () => {
            r(a.result);
          }),
            a.readAsArrayBuffer(t);
        } else "string" == typeof t ? e(new Blob([t], i), n, o, i) : r(t);
        function r(e) {
          gContainer.download({ buffer: e, name: n, extension: o, mime: i });
        }
      }),
      require(19) /* module_19 */,
      require(180) /* module_180 */,
      require(181) /* module_181 */,
      require(20) /* module_20 */,
      require(34) /* module_34 */,
      require(247) /* module_247 */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */;
    var o = require(1) /* module */,
      i = require(1210) /* module_1210 */,
      a = /["\*\/:<>\?\\\|]/g,
      r = /[\0-\x1F\x80-\x9F]/g,
      s = /^\.+$/,
      l =
        /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\.(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
      c = /[ \.]+$/;
    (o.GUtil.sanitizeFilename = function (e, t) {
      return (
        (t = t || "_"),
        e
          .replace(a, t)
          .replace(r, t)
          .replace(s, t)
          .replace(l, t)
          .replace(c, t)
          .substr(0, 255)
      );
    }),
      (o.GUtil.dataUrlToBlob = function (e) {
        if (
          !/^data:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){0,255};ba[s\u017F]e64,/i.exec(
            e
          )
        ) {
          const t = e.split(","),
            n = t[0].split(":")[1],
            o = t[1];
          return new Blob([o], { type: n });
        }
        var t,
          n = e.split(";base64,"),
          o = n[0].split(":")[1];
        try {
          t = window.atob(n[1]);
        } catch (e) {
          t = "";
        }
        for (var i = t.length, a = new Uint8Array(i), r = 0; r < i; ++r)
          a[r] = t.charCodeAt(r);
        return new Blob([a], { type: o });
      }),
      (o.GUtil.readACVFile = function (e) {
        var t = new i(e),
          n = { rgb: [], r: [], g: [], b: [] };
        t.seek(4);
        var o = t.getUint16(),
          a = ["r", "g", "b"],
          r = null,
          s = null,
          l = null,
          c = null,
          d = null;
        for (
          n.rgb.push([0, t.getUint16()]), t.seek(t.tell() + 2), c = 1;
          c < o;
          c++
        )
          (l = t.getUint16()), (s = t.getUint16()), n.rgb.push([s, l]);
        for (c = 0; c < 3; c++)
          for (o = t.getUint16(), r = n[a[c]], d = 0; d < o; d++)
            (l = t.getUint16()), (s = t.getUint16()), r.push([s, l]);
        return n;
      });
  }