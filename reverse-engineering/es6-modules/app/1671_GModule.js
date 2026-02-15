/**
 * Webpack Module #1671
 * Type: class
 * Name: GModule
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e) {
      ((this.id = e), (this._intervals = []), (this._timeouts = []));
    }

    exports = null;
    id = null;
    _intervals = null;
    _timeouts = null;

    setTimeout() {
      let exports = setTimeout.apply(null, arguments);
      return (this._timeouts.push(exports), exports);
    }

    setInterval() {
      let exports = setInterval.apply(null, arguments);
      return (this._intervals.push(exports), exports);
    }

    unload() {
      (this._timeouts.forEach((e) => clearTimeout(e)),
        this._intervals.forEach((e) => clearInterval(e)),
        (this._timeouts = []),
        (this._intervals = []));
    }

    toString() {
      return '[Object GModule]';
    }

  }
  (require(3),
    require(4),
    require(32),
    require(33),
    exports.exports = o);
}