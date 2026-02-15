/**
 * Webpack Module #1534
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor() {
      this._queue = new Set();
    }

    _queue = null;
    _isProcessing = false;
    _onNext = null;

    add(e) {
      return (this._queue.add(e), this);
    }

    delete(e) {
      return (this._queue.delete(e), this);
    }

    has(e) {
      return this._queue.has(e);
    }

    async onNext(e) {
      this._onNext = e;
    }

    async process() {
      if (!this._isProcessing)
        return (
          (this._isProcessing = true),
          await this._processQueue(),
          (this._isProcessing = false),
          this
        );
    }

    async _processQueue() {
      const exports = this._queue.values().next().value;
      exports &&
        (await this._onNext(exports).catch((e) => {
          console.error('[GQueue] - It should never get here', e);
        }),
        this._queue.delete(exports),
        await this._processQueue());
    }

  }
  (require(19),
    require(8),
    require(26),
    exports.exports = o);
}