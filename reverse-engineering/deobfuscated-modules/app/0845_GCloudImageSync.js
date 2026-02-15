/**
 * Webpack Module #845
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.updateFileFn =
        module.syncImagesToCloud =
        module.listFilesFn =
        module.fetchRequest =
        module.default =
        module.createFileAndGetSignedPutUrlsFn =
          undefined),
      require(19) /* polyfill_Array_iterator */,
      require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(96) /* polyfill_JSON_stringify */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(134) /* polyfill_String_startsWith */,
      require(218) /* module_218 */,
      require(189) /* DataModule_189 */,
      require(190) /* DataModule_190 */,
      require(191) /* module_191 */,
      require(192) /* DataModule_192 */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(114) /* stub_requires_424 */;
    var GDictionary = _interopRequireDefault(require(227) /* GDictionary */);
    const Md5 = require(435) /* Md5 */,
      r = (module.syncImagesToCloud = async function (e, t, n, _interopRequireDefault, r, s, l, c, d) {
        try {
          var u = new GDictionary.default();
          const S = _interopRequireDefault.length;
          for (var p = 0; p < S; ++p) {
            var g = _interopRequireDefault[p];
            if (g.cloud) {
              u.addEntry(new GDictionary.default.Entry(g.cloud, g.uuid, g.references));
              continue;
            }
            var h = /^data:.{0,255};base64,/i.exec(g.value);
            if (!h) continue;
            var f = Md5(g.value);
            let l = await e({ md5: f }),
              E = l ? l[0] : null;
            if (E)
              u.addEntry(
                new GDictionary.default.Entry(
                  GDictionary.default.CLOUD_PROTOCOL + "://id=" + E.id,
                  g.uuid,
                  g.references
                )
              );
            else if (g.references > 0) {
              for (var m = t, y = 0; y < n.length; ++y) {
                var v = n[y],
                  _ = GDictionary.default.PROTOCOL + "://" + g.uuid;
                if (
                  (v.url + "").startsWith(GDictionary.default.PROTOCOL) &&
                  v.url === _
                ) {
                  v.name && (m = v.name);
                  break;
                }
              }
              var b = g.value,
                w = h[1] || "application/octet-stream";
              let e;
              function C(e, t, n) {
                var _interopRequireDefault,
                  GDictionary = e.split(",");
                try {
                  _interopRequireDefault = atob(GDictionary[1]);
                } catch (e) {
                  _interopRequireDefault = "";
                }
                for (var Md5 = _interopRequireDefault.length, r = new Uint8Array(Md5); Md5--; )
                  r[Md5] = _interopRequireDefault.charCodeAt(Md5);
                return new File([r], t, { type: n });
              }
              ({ urls: e, file: E } = await r(m, w));
              var x = C(b, c + "-" + E.id + ".txt", w);
              let _interopRequireDefault = {
                method: "PUT",
                headers: { "Cache-Control": "public, max-age=31536000" },
                body: x,
              };
              w &&
                (_interopRequireDefault.headers = Object.assign(_interopRequireDefault.headers, { "Content-Type": w }));
              if (!(await fetch(e.url, _interopRequireDefault)).ok)
                throw new Error("failed to upload");
              await s(x, E.id, f),
                u.addEntry(
                  new GDictionary.default.Entry(
                    GDictionary.default.CLOUD_PROTOCOL + "://id=" + E.id,
                    g.uuid,
                    g.references
                  )
                ),
                d && d(p / S);
            }
          }
          return l && l(u);
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      s = (e, t, n) => {
        var _interopRequireDefault = (n && n.method) || "GET",
          GDictionary = n && n.body && JSON.stringify(n.body),
          Md5 = Object.assign(
            {
              "Content-Type": "application/json",
              Accept: "json",
              Authorization: t || "",
            },
            n && n.headers
          );
        if (n && n.query) {
          var r = n.query,
            s = new URLSearchParams();
          for (var l in r) s.append(l, r[l]);
          e = e + "/?" + s.toString();
        }
        var c = { credentials: "include", headers: Md5, method: _interopRequireDefault };
        return (
          GDictionary && "GET" !== _interopRequireDefault && (c.body = GDictionary), fetch(e, c).then((e) => e.json())
        );
      };
    module.fetchRequest = s;
    module.listFilesFn = (e, t, n) => s("".concat(n, "/file"), t, { query: e });
    (module.createFileAndGetSignedPutUrlsFn = async function (e, t, n, _interopRequireDefault) {
      var GDictionary = { method: "POST", body: { name: e, type: t, trashed: null } };
      const Md5 = await s("".concat(n, "/file"), _interopRequireDefault, GDictionary);
      var r = { method: "PUT", body: { id: Md5.id, type: t } };
      return {
        urls: await s("".concat(n, "/file/").concat(Md5.id, "/urls"), _interopRequireDefault, r),
        file: Md5,
      };
    }),
      (module.updateFileFn = async function (e, t, n, _interopRequireDefault, GDictionary, Md5, r) {
        const l = Md5 && r ? await r(e) : null;
        return await s("".concat(_interopRequireDefault, "/file/").concat(t), GDictionary, {
          method: "PUT",
          body: { md5: n, trashed: false, sha256: l },
        });
      });
    module.default = { syncImagesToCloud: r };
  }