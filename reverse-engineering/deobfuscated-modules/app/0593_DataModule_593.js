/**
 * Webpack Module #593
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o(e) {
      return pako.gzip(e, { level: 9 }).buffer;
    }
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.gzip = o),
      (module.hasRootFolderInSelections = function (e, t) {
        if (!e || !(t || []).length) return false;
        t instanceof Array || (t = [t]);
        return t.some((t) => e.isRootFolder(t));
      }),
      (module.readResponseWithProgress = async function (e, t, n) {
        const i = e.body.getReader(),
          a = parseInt(e.headers.get("Content-Length")) || 0;
        let r = 0;
        return new Promise((e) => {
          const s = new ReadableStream({
            start: (l) =>
              (function c() {
                return i.read().then((d) => {
                  let { done: u, value: p } = d;
                  if (u) return l.close(), i.releaseLock(), void e(s);
                  if ("function" == typeof t) {
                    r += (function (e) {
                      if (n) return new Uint8Array(o(e)).length;
                      return e.length;
                    })(p);
                    const e = Math.floor((r / a) * 100);
                    t(e);
                  }
                  return l.enqueue(p), c();
                });
              })(),
          });
        }).then((e) => new Response(e));
      }),
      require(19) /* polyfill_Array_iterator */,
      require(180) /* DataModule_180 */,
      require(181) /* polyfill_ArrayBuffer_slice */,
      require(57) /* polyfill_parseInt */,
      require(8) /* polyfill_bundle_ES6 */,
      require(218) /* module_218 */,
      require(189) /* DataModule_189 */,
      require(190) /* DataModule_190 */,
      require(191) /* module_191 */,
      require(192) /* DataModule_192 */,
      require(4) /* stub_requires_668 */,
      require(97) /* stub_requires_684 */;
  }