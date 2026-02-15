/**
 * Webpack Module #26
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(421) /* domIterables */,
      a = require(422) /* domTokenListPrototype */,
      r = require(19) /* polyfill_Array_iterator */,
      s = require(100) /* createProperty */,
      l = require(137) /* setToStringTag */,
      c = require(43) /* wellKnownSymbol */("iterator"),
      d = r.values,
      u = function (e, t) {
        if (e) {
          if (e[c] !== d)
            try {
              s(e, c, d);
            } catch (t) {
              e[c] = d;
            }
          if ((l(e, t, true), i[t]))
            for (var require in r)
              if (e[require] !== r[require])
                try {
                  s(e, require, r[require]);
                } catch (t) {
                  e[require] = r[require];
                }
        }
      };
    for (var p in i) u(o[p] && o[p].prototype, p);
    u(a, "DOMTokenList");
  }