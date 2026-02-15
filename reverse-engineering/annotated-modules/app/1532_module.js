/**
 * Webpack Module #1532
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */, n(4) /* stub_requires_668 */, n(13) /* stub_requires_679 */;
    var o = n(1) /* module */;
    const { FILE_FORMATS: i } = n(10) /* AppSettings */,
      a = i.find((e) => e.default),
      { COMMAND_SAVE: r } = n(591) /* module_591 */,
      s = n(1164) /* module_1164 */,
      l = n(556) /* Item */;
    e.exports = class extends s {
      constructor(e, t) {
        super(e, t);
      }
      async updateFileSceneAndMetadata(e, t, n, o) {
        const i = await this._requestWorkerToSave(e, t, n, o);
        return l.convertToCloudItem(i);
      }
      _requestWorkerToSave(e, t, n, i) {
        return new Promise((s, l) => {
          const c = this._request(r.REQUEST, {
            id: e,
            file: t,
            metadata: i,
            scene: o.GNode.serialize(n, { save: !0 }),
            type: a.type,
          });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: o } = e.data;
              if ((t !== r.SUCCESS && t !== r.FAILED) || n !== c) return !1;
              t === r.SUCCESS ? s(o.file) : t === r.FAILED && l();
              return !0;
            }.bind(this),
            { once: !0 }
          );
        });
      }
    };
  }