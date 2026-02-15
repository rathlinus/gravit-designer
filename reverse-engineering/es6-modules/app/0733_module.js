/**
 * Webpack Module #733
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  const { GObject: o, GEventTarget: i, GEvent: a } = require(1);
  class r {
    _role = null;

    setRole(e) {
      ((this._role = e),
        this.hasEventListeners(r.RoleChangedEvent) &&
          this.trigger(new r.RoleChangedEvent(e, this)));
    }

    getRole() {
      return this._role;
    }

    static RoleChangedEvent(e, t) {
      ((this.role = e), (this.target = t));
    }

  }
  (o.inheritAndMix(r, o, [i]),
    o.inherit(r.RoleChangedEvent, a),
    exports.exports = r);
}