/**
 * Webpack Module #1534
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {
      this._queue = new Set();
    }
    require(19) /* polyfill_Array_iterator */,
      require(8) /* polyfill_bundle_ES6 */,
      require(26) /* polyfill_DOMCollection_iterator */,
      (o.prototype._queue = null),
      (o.prototype._isProcessing = false),
      (o.prototype._onNext = null),
      (o.prototype.add = function (e) {
        return this._queue.add(e), this;
      }),
      (o.prototype.delete = function (e) {
        return this._queue.delete(e), this;
      }),
      (o.prototype.has = function (e) {
        return this._queue.has(e);
      }),
      (o.prototype.onNext = async function (e) {
        this._onNext = e;
      }),
      (o.prototype.process = async function () {
        if (!this._isProcessing)
          return (
            (this._isProcessing = true),
            await this._processQueue(),
            (this._isProcessing = false),
            this
          );
      }),
      (o.prototype._processQueue = async function () {
        const exports = this._queue.values().next().value;
        exports &&
          (await this._onNext(exports).catch((e) => {
            console.error("[GQueue] - It should never get here", e);
          }),
          this._queue.delete(exports),
          await this._processQueue());
      }),
      (exports.exports = o);
  }