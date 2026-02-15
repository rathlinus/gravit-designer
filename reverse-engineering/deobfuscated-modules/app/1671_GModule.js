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
    require(3) /* module_3 */,
      require(4) /* module_4 */,
      require(32) /* module_32 */,
      require(33) /* module_33 */,
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