/**
 * Webpack Module #1533
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */, n(4) /* stub_requires_668 */, n(13) /* stub_requires_679 */;
    var o = n(1) /* GCore */;
    const i = n(156) /* GCloudStorageItem */,
      { FILE_FORMATS: a } = n(10) /* AppSettings */,
      r = a.find((e) => e.default),
      { COMMAND_SAVE: s } = n(591) /* module_591 */,
      l = n(1164) /* module_1164 */;
    e.exports = class extends l {
      constructor(e, t) {
        super(e, t);
      }
      async updateFileSceneAndMetadata(e, t, n, o) {
        const a = await this._requestWorkerToSave(e, t, n, o);
        return i.from(a);
      }
      _requestWorkerToSave(e, t, n, i) {
        return new Promise((a, l) => {
          const c = this._request(s.REQUEST, {
            id: e,
            file: t,
            metadata: i,
            scene: o.GNode.serialize(n, { save: !0 }),
            type: r.type,
          });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: o } = e.data;
              if ((t !== s.SUCCESS && t !== s.FAILED) || n !== c) return !1;
              t === s.SUCCESS ? a(o.file) : t === s.FAILED && l();
              return !0;
            }.bind(this),
            { once: !0 }
          );
        });
      }
    };
  }