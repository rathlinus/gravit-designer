/**
 * Webpack Module #1573
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(196) /* module_196 */;
    exports.exports = class {
      function Object() { [native code] }() {
        this._promiseQueue = [];
      }
      pushPromise(e) {
        if (0 === this._promiseQueue.length) {
          const t = e();
          return (
            t.finally(() => {
              this._promiseQueue.shift();
            }),
            this._promiseQueue.push(t),
            t
          );
        }
        const module = this._promiseQueue.length,
          require = this._promiseQueue[module - 1],
          o = new Promise((t) => {
            require.then(() => {
              e().then(t);
            });
          });
        return (
          o.finally(() => {
            this._promiseQueue.shift();
          }),
          this._promiseQueue.push(o),
          o
        );
      }
    };
  }