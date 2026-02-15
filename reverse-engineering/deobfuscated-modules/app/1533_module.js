/**
 * Webpack Module #1533
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var o = require(1) /* module */;
    const i = require(156) /* module_156 */,
      { FILE_FORMATS: a } = require(10) /* module_10 */,
      r = a.find((e) => e.default),
      { COMMAND_SAVE: s } = require(591) /* module_591 */,
      l = require(1164) /* module_1164 */;
    exports.exports = class extends l {
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
            scene: o.GNode.serialize(n, { save: true }),
            type: r.type,
          });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: o } = e.data;
              if ((t !== s.SUCCESS && t !== s.FAILED) || n !== c) return false;
              t === s.SUCCESS ? a(o.file) : t === s.FAILED && l();
              return true;
            }.bind(this),
            { once: true }
          );
        });
      }
    };
  }