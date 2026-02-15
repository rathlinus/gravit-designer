/**
 * Module 1096
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
    }, i.p = "", i(i.s = 0);
  }([
    function (e, t, i) {
      e.exports = i(1);
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
      var a = function e() {
          o(this, e), this.CDA = {
            vis: true,
            StrokeOpacity: 1,
            FillOpacity: 1
          }, this.CDGS = {};
        }, s = function e() {
          o(this, e), this.AuthType = A.GSUITE, this.Avatar = "", this.AvatarUrl = "", this.Email = "", this.Name = "", this.OnlineId = "";
        }, l = function e() {
          o(this, e), this.Properties = new s();
        }, h = function e() {
          o(this, e), this.CreationTime = 0, this.ModificationTime = 0, this.Guid = "", this.ServerId = "", this.IsResolved = false, this.Removed = undefined, this.ReadBy = null, this.UsersAssigned = [], this.Text = "", this.Meta = new a();
        }, A = {
          GSUITE: "GSuite",
          CDAVERIFIED: "CDA"
        }, c = {
          COMMON: "Common",
          REOPENED: "Reopened",
          RESOLVED: "Resolved"
        }, p = function (e) {
          function t() {
            var e, i, r;
            o(this, t);
            for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
              s[l] = arguments[l];
            return i = r = n(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.Type = c.COMMON, n(r, i);
          }
          return r(t, e), t;
        }(h), u = function e() {
          o(this, e), this.ArrowEnd = false, this.ArrowStart = false, this.PtAccuracy = 0, this.TopLeftX = 0, this.TopLeftY = 0, this.Width = 0, this.Height = 0, this.Curves = [], this.FillColor = null, this.StrokeColor = null, this.StrokeWidth = 1, this.TargetGuid = "";
        }, d = function e() {
          o(this, e), this.Author = new l(), this.Properties = new h();
        }, g = function (e) {
          function t() {
            var e, i, r;
            o(this, t);
            for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
              s[l] = arguments[l];
            return i = r = n(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.Shape = new u(), n(r, i);
          }
          return r(t, e), t;
        }(d), f = function (e) {
          function t() {
            var e, i, r;
            o(this, t);
            for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
              s[l] = arguments[l];
            return i = r = n(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.Properties = new p(), n(r, i);
          }
          return r(t, e), t;
        }(d), m = function e() {
          o(this, e);
        }, y = function e() {
          o(this, e), this.Guid = "", this.CdaId = "", this.Removed = false, this.ServerId = "", this.AnnotationsListId = "";
        }, _ = function e() {
          o(this, e), this.Version = "1", this.SyncTime = 0, this.FileId = "", this.Pages = [];
        };
      e.exports = {
        UTSRoot: function e() {
          o(this, e), this.Comments = new _();
        },
        Comments: _,
        Page: function e() {
          o(this, e), this.Properties = new y(), this.Thread = [];
        },
        Thread: function e() {
          o(this, e), this.Properties = new m(), this.Annotation = new g(), this.Comments = [];
        },
        ThreadProperties: m,
        Comment: f,
        Annotation: g,
        AnnotationBase: d,
        Shape: u,
        ShapeType: {
          HOTSPOT: "Hotspot",
          ELLIPSE: "Ellipse",
          RECTANGLE: "Rectangle",
          ARROW: "Arrow",
          HIGHLIGHTER: "Highlighter",
          PENCIL: "Pencil",
          COLLABORATIVE_TEXT: "CollaborativeText"
        },
        CommentProperties: p,
        CommentType: c,
        AuthType: A,
        AnnotationProperties: h,
        Author: l,
        AuthorProperties: s,
        Meta: a,
        PageProperties: y
      };
    }
  ]);
}
