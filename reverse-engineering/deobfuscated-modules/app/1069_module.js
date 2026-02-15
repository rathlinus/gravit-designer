/**
 * Webpack Module #1069
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    function o() {
      for (var exports = arguments.length, module = new Array(exports), require = 0; require < exports; require++)
        module[require] = arguments[require];
      module && this._updateFromArguments(module);
    }
    require(19) /* module_19 */,
      require(26) /* module_26 */,
      (o.prototype._updateFromArguments = function () {
        for (var exports = arguments.length, module = new Array(exports), require = 0; require < exports; require++)
          module[require] = arguments[require];
        const o = new Map(...module);
        var i = false;
        const a = 0,
          r = 1,
          s = o.entries();
        let l = s.next();
        do {
          if (((i = l.done), l.value)) {
            const e = l.value[a],
              t = l.value[r];
            (this[e] = t), (l = s.next());
          }
        } while (!i);
      }),
      (o.prototype.has = function (e) {
        return this.hasOwnProperty(e);
      }),
      (o.prototype.delete = function (e) {
        this.isFrozen() || delete this[e];
      }),
      (o.prototype.set = function (e, t) {
        this.isFrozen() || (this[e] = t);
      }),
      (o.prototype.get = function (e) {
        return this[e];
      }),
      (o.prototype.isFrozen = function () {
        return Object.isFrozen(this);
      }),
      Object.freeze(o.prototype),
      (exports.exports = o);
  }