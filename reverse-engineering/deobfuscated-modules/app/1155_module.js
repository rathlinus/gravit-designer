/**
 * Webpack Module #1155
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }), (module.default = undefined);
    class o {
      constructor() {
        (this._condition = () => true), (this._finished = false);
      }
      _do(e, t) {
        if (
          !this._abort &&
          !this._finished &&
          (this._condition(t) || e) &&
          (this._eventClass &&
            gDesigner.removeEventListener(this._eventClass, this._do, this),
          this._runnable)
        )
          try {
            this._runnable instanceof o
              ? this._runnable._do(e, t)
              : this._runnable();
          } finally {
            this._finished = true;
          }
      }
      listen(e) {
        return (
          (this._eventClass = e),
          gDesigner.addEventListener(e, this._listenEvent, this),
          this
        );
      }
      _listenEvent(e) {
        this._do(false, e);
      }
      when(e) {
        return (this._condition = e || this._condition), this;
      }
      do(e, t) {
        return (this._runnable = e), this._do(t), this;
      }
      abort() {
        return (
          (this._abort = true),
          this._eventClass &&
            gDesigner.removeEventListener(
              this._eventClass,
              this._listenEvent,
              this
            ),
          this._runnable instanceof o && this._runnable.abort(),
          this
        );
      }
    }
    module.default = o;
  }