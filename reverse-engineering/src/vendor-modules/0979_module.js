/**
 * chunk.vendor.js Module #979
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(20), i(107));
      const n = /^prod/.test("production"),
        r = /^rc/.test("production"),
        o = /^trunk/.test("production"),
        a = /^test/.test("production"),
        s = /^beta/.test("production");
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
      e.exports = class {
        static get Behaviour() {
          return h;
        }
        static get Env() {
          return l;
        }
      };
    }