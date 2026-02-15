/**
 * Webpack Module #1671
 * Type: class
 * Name: GModule
 */

function (exports, module, require) {
    "use strict";
    function o(e) {
      (this.id = e), (this._intervals = []), (this._timeouts = []);
    }
    require(3) /* polyfill_RegExp_toString */,
      require(4) /* stub_requires_668 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      (o.prototype.exports = null),
      (o.prototype.id = null),
      (o.prototype._intervals = null),
      (o.prototype._timeouts = null),
      (o.prototype.setTimeout = function () {
        let exports = setTimeout.apply(null, arguments);
        return this._timeouts.push(exports), exports;
      }),
      (o.prototype.setInterval = function () {
        let exports = setInterval.apply(null, arguments);
        return this._intervals.push(exports), exports;
      }),
      (o.prototype.unload = function () {
        this._timeouts.forEach((e) => clearTimeout(e)),
          this._intervals.forEach((e) => clearInterval(e)),
          (this._timeouts = []),
          (this._intervals = []);
      }),
      (o.prototype.toString = function () {
        return "[Object GModule]";
      }),
      (exports.exports = o);
  }