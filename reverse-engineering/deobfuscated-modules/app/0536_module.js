/**
 * Webpack Module #536
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    exports.exports = class {
      function Object() { [native code] }(e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
        (this._factory = e), (this._timeout = module), (this._lastCheckTime = 0);
      }
      get() {
        if (this._timeout) {
          const e = Date.now();
          this._lastCheckTime || (this._lastCheckTime = e);
          e - this._lastCheckTime >= this._timeout &&
            (this.reset(), (this._lastCheckTime = e));
        }
        return (
          this._promise ||
            (this._promise = this._factory.apply(this._factory, arguments)),
          this._promise
        );
      }
      reset() {
        this._promise = null;
      }
      setCacheValue(e) {
        this.reset(),
          (this._lastCheckTime = Date.now()),
          (this._promise = Promise.resolve(e));
      }
    };
  }