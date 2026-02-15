/**
 * Webpack Module #1069
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor() {
      for (
      var exports = arguments.length, module = new Array(exports), require = 0;
      require < exports;
      require++
      )
      module[require] = arguments[require];
      module && this._updateFromArguments(module);
    }

    _updateFromArguments() {
      for (
        var exports = arguments.length, module = new Array(exports), require = 0;
        require < exports;
        require++
      )
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
          ((this[e] = t), (l = s.next()));
        }
      } while (!i);
    }

    has(e) {
      return this.hasOwnProperty(e);
    }

    delete(e) {
      this.isFrozen() || delete this[e];
    }

    set(e, t) {
      this.isFrozen() || (this[e] = t);
    }

    get(e) {
      return this[e];
    }

    isFrozen() {
      return Object.isFrozen(this);
    }

  }
  (require(19),
    require(26),
    Object.freeze(o.prototype),
    exports.exports = o);
}