/**
 * Module 1097
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

function (exports, module) {
  exports.exports = function (e) {
    var t = {};
    function i(n) {
      if (t[n])
        return t[n].exports;
      var r = t[n] = {
        i: n,
        l: false,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, i), r.l = true, r.exports;
    }
    return i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        configurable: false,
        enumerable: true,
        get: n
      });
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 2);
  }([
    ,
    ,
    function (e, t, i) {
      e.exports = i(3);
    },
    function (e, t, i) {
      "use strict";
      function n(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }
      function r(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var a = {
          User: 0,
          Open: 1,
          Close: 2
        }, s = function e() {
          o(this, e), this.text = "", this.img = "", this.uid = "", this.email = "", this.name = "", this.time = 0, this.mtime = 0, this.sid = "", this.rmd = false, this.read = [], this.asgn = [], this.Guid = "";
        }, l = function (e) {
          function t() {
            o(this, t);
            var e = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.type = a.User, e["@"] = "cmt", e;
          }
          return r(t, e), t;
        }(s), h = {
          ELLIPSE_ANNOT: "ane",
          ARROW_ANNOT: "anarr",
          COMMENT_ANNOT: "anc",
          HIGHLIGHTER_ANNOT: "anh",
          PENCIL_ANNOT: "anp",
          RECTANGLE_ANNOT: "anr",
          TEXT_ANNOT: "ant",
          COLLABORATIVE_TXT: "ancotext"
        }, A = function (e) {
          function t(e) {
            o(this, t);
            var i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return i.rsv = undefined, i.$ = [], i.vis = true, i.targetGuid = "", i["@"] = e || h.RECTANGLE_ANNOT, i;
          }
          return r(t, e), t;
        }(s);
      e.exports = {
        CDAAnnotationsList: function e() {
          o(this, e), this.aid = "", this.rmd = false, this.sid = "", this.$ = [], this.pgid = "", this.Guid = "";
        },
        CDAAnnotation: A,
        CDAAnnotationBase: s,
        CDAComment: l,
        CDACommentType: a,
        CDAAnnotationType: h
      };
    }
  ]);
}
