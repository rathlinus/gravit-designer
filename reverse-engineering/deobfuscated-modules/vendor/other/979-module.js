/**
 * Module 979
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */;
  const n = /^prod/.test("production"), r = /^rc/.test("production"), o = /^trunk/.test("production"), a = /^test/.test("production"), s = /^beta/.test("production");
  class l {
    static getValue() {
      return "production";
    }
    static isProduction() {
      return n;
    }
    static isBeta() {
      return s;
    }
    static isTrunk() {
      return o;
    }
    static isReleaseCandidate() {
      return r;
    }
    static isDevelopment() {
      return !(n || o || a || r || s);
    }
    static isTest() {
      return a;
    }
  }
  class h {
    static isTrunk() {
      return o || r;
    }
    static isProduction() {
      return n || s;
    }
  }
  exports.exports = class {
    static get Behaviour() {
      return h;
    }
    static get Env() {
      return l;
    }
  };
}
