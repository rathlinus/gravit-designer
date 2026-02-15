/**
 * Webpack Module #845
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.updateFileFn =
        module.syncImagesToCloud =
        module.listFilesFn =
        module.fetchRequest =
        module.default =
        module.createFileAndGetSignedPutUrlsFn =
          undefined),
      require(19) /* polyfill_Array_iterator */,
      require(180) /* module_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(96) /* polyfill_JSON_stringify */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(134) /* polyfill_String_startsWith */,
      require(218) /* module_218 */,
      require(189) /* module_189 */,
      require(190) /* module_190 */,
      require(191) /* module_191 */,
      require(192) /* module_192 */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(114) /* stub_requires_424 */;
    var i = o(require(227) /* GDictionary */);
    const a = require(435) /* Md5 */,
      r = (module.syncImagesToCloud = async function (e, t, n, o, r, s, l, c, d) {
        try {
          var u = new i.default();
          const S = o.length;
          for (var p = 0; p < S; ++p) {
            var g = o[p];
            if (g.cloud) {
              u.addEntry(new i.default.Entry(g.cloud, g.uuid, g.references));
              continue;
            }
            var h = /^data:.{0,255};base64,/i.exec(g.value);
            if (!h) continue;
            var f = a(g.value);
            let l = await e({ md5: f }),
              E = l ? l[0] : null;
            if (E)
              u.addEntry(
                new i.default.Entry(
                  i.default.CLOUD_PROTOCOL + "://id=" + E.id,
                  g.uuid,
                  g.references
                )
              );
            else if (g.references > 0) {
              for (var m = t, y = 0; y < n.length; ++y) {
                var v = n[y],
                  _ = i.default.PROTOCOL + "://" + g.uuid;
                if (
                  (v.url + "").startsWith(i.default.PROTOCOL) &&
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
                var o,
                  i = e.split(",");
                try {
                  o = atob(i[1]);
                } catch (e) {
                  o = "";
                }
                for (var a = o.length, r = new Uint8Array(a); a--; )
                  r[a] = o.charCodeAt(a);
                return new File([r], t, { type: n });
              }
              ({ urls: e, file: E } = await r(m, w));
              var x = C(b, c + "-" + E.id + ".txt", w);
              let o = {
                method: "PUT",
                headers: { "Cache-Control": "public, max-age=31536000" },
                body: x,
              };
              w &&
                (o.headers = Object.assign(o.headers, { "Content-Type": w }));
              if (!(await fetch(e.url, o)).ok)
                throw new Error("failed to upload");
              await s(x, E.id, f),
                u.addEntry(
                  new i.default.Entry(
                    i.default.CLOUD_PROTOCOL + "://id=" + E.id,
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
        var o = (n && n.method) || "GET",
          i = n && n.body && JSON.stringify(n.body),
          a = Object.assign(
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
        var c = { credentials: "include", headers: a, method: o };
        return (
          i && "GET" !== o && (c.body = i), fetch(e, c).then((e) => e.json())
        );
      };
    module.fetchRequest = s;
    module.listFilesFn = (e, t, n) => s("".concat(n, "/file"), t, { query: e });
    (module.createFileAndGetSignedPutUrlsFn = async function (e, t, n, o) {
      var i = { method: "POST", body: { name: e, type: t, trashed: null } };
      const a = await s("".concat(n, "/file"), o, i);
      var r = { method: "PUT", body: { id: a.id, type: t } };
      return {
        urls: await s("".concat(n, "/file/").concat(a.id, "/urls"), o, r),
        file: a,
      };
    }),
      (module.updateFileFn = async function (e, t, n, o, i, a, r) {
        const l = a && r ? await r(e) : null;
        return await s("".concat(o, "/file/").concat(t), i, {
          method: "PUT",
          body: { md5: n, trashed: false, sha256: l },
        });
      });
    module.default = { syncImagesToCloud: r };
  }