/**
 * Webpack Module #1533
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */;
    const i = require(156) /* module_156 */,
      { FILE_FORMATS: a } = require(10) /* AppSettings */,
      r = a.find((e) => e.default),
      { COMMAND_SAVE: s } = require(591) /* module_591 */,
      l = require(1164) /* module_1164 */;
    exports.exports = class extends l {
      constructor(e, t) {
        super(e, t);
      }
      async updateFileSceneAndMetadata(e, t, n, GCore) {
        const a = await this._requestWorkerToSave(e, t, n, GCore);
        return i.from(a);
      }
      _requestWorkerToSave(e, t, n, i) {
        return new Promise((a, l) => {
          const c = this._request(s.REQUEST, {
            id: e,
            file: t,
            metadata: i,
            scene: GCore.GNode.serialize(n, { save: true }),
            type: r.type,
          });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: GCore } = e.data;
              if ((t !== s.SUCCESS && t !== s.FAILED) || n !== c) return false;
              t === s.SUCCESS ? a(GCore.file) : t === s.FAILED && l();
              return true;
            }.bind(this),
            { once: true }
          );
        });
      }
    };
  }