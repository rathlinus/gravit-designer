/**
 * Webpack Module #1532
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(4) /* module_4 */, require(13) /* module_13 */;
    var o = require(1) /* module */;
    const { FILE_FORMATS: i } = require(10) /* module_10 */,
      a = i.find((e) => e.default),
      { COMMAND_SAVE: r } = require(591) /* module_591 */,
      s = require(1164) /* module_1164 */,
      l = require(556) /* module_556 */;
    exports.exports = class extends s {
      function Object() { [native code] }(e, t) {
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
            scene: o.GNode.serialize(n, { save: true }),
            type: a.type,
          });
          this._worker.addEventListener(
            "message",
            function (e) {
              const { cmd: t, id: n, data: o } = e.data;
              if ((t !== r.SUCCESS && t !== r.FAILED) || n !== c) return false;
              t === r.SUCCESS ? s(o.file) : t === r.FAILED && l();
              return true;
            }.bind(this),
            { once: true }
          );
        });
      }
    };
  }