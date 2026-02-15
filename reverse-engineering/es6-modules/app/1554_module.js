/**
 * Webpack Module #1554
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor() {
      this.stack = [];
    }

    _checkRaw(e) {
      return e instanceof o.RawValue ? e.getValue() : "'".concat(e, "'");
    }

    add(e, t, n, i) {
      return this._add(e instanceof o.RawValue ? e : new o.RawValue(e), t, n, i);
    }

    _add(e, t, n) {
      let i = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : o.Connector.AND;
      return (this.stack.push({ field: e, operator: t, value: n, connector: i }), this);
    }

    group(e) {
      var t = new o();
      return (this.stack.push(t), e(t), this);
    }

    and(e, t, n) {
      return this.add(e, t, n, o.Connector.AND);
    }

    or(e, t, n) {
      return this.add(e, t, n, o.Connector.OR);
    }

    in(e, t) {
      return this._add(e, o.Connector.IN, t instanceof o.RawValue ? t : new o.RawValue(t));
    }

    build() {
      var e = this;
      return this.stack
        .map(function (t, n) {
          return t instanceof o
            ? ''.concat(0 !== n ? o.Connector.AND + ' ' : '', '(').concat(t.build(), ')')
            : ''
                .concat(0 !== n ? t.connector + ' ' : '')
                .concat(e._checkRaw(t.field), ' ')
                .concat(t.operator, ' ')
                .concat(e._checkRaw(t.value));
        })
        .join(' ');
    }

    static RawValue(e) {
      this.value = e;
    }

    static Connector = { AND: 'AND', IN: 'IN', OR: 'OR' };

  }
  (require(38),
    o.RawValue.prototype.getValue = function () {
      return this.value;
    },
    exports.exports = o);
}