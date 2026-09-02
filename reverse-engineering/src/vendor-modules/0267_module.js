/**
 * chunk.vendor.js Module #267
 * Type: unknown
 */

function (e, t, i) {
      var n = i(230),
        r = i(0);

      function o() {}
      (r.inherit(o, r),
        (o.prototype.getLastValidCharSpacing = function () {
          return 0;
        }),
        (o.prototype.first = function () {
          return this.children()[0];
        }),
        (o.prototype.last = function () {
          return this.children()[this.children().length - 1];
        }),
        (o.prototype.next = function () {
          for (var e = this; ; ) {
            var t = e.parent();
            if (!t) return null;
            var i = t.children(),
              n = i[i.indexOf(e) + 1];
            if (n) {
              for (;;) {
                n.first || console.log("Error getting node");
                var r = n.first();
                if (!r) break;
                n = r;
              }
              return n;
            }
            e = t;
          }
        }),
        (o.prototype.previous = function () {
          var e = this.parent();
          if (!e) return null;
          var t = e.children(),
            i = t[t.indexOf(this) - 1];
          if (i) return i;
          var n = e.previous();
          return n ? n.last() : null;
        }),
        (o.prototype.byOrdinal = function (e) {
          var t = null;
          return this.children().some(function (i) {
            if (
              e >= i.ordinal &&
              e < i.ordinal + i.length &&
              (t = i.byOrdinal(e))
            )
              return !0;
          })
            ? t
            : this;
        }),
        (o.prototype.byCoordinate = function (e, t) {
          var i;
          if (
            (this.children().some(function (n) {
              if (n.bounds().contains(e, t) && (i = n.byCoordinate(e, t)))
                return !0;
            }),
            !i)
          ) {
            for (i = this.last(); i; ) {
              var n = i.last();
              if (!n) break;
              i = n;
            }
            var r = i.next();
            r && r.block && (i = r);
          }
          return i;
        }),
        (o.prototype.draw = function (e, t) {
          this.children().forEach(function (i) {
            i.draw(e, t);
          });
        }),
        (o.prototype.parentOfType = function (e) {
          var t = this.parent();
          return t && (t.type === e ? t : t.parentOfType(e));
        }),
        (o.prototype.bounds = function (e) {
          var t = this.children().length,
            i = t ? Number.MAX_VALUE : this._left,
            r = t ? Number.MAX_VALUE : this._top,
            o = t ? -Number.MAX_VALUE : 0,
            a = t ? -Number.MAX_VALUE : 0;
          return (
            this.children().forEach(function (t) {
              var n = t.bounds(e);
              (Number.isNaN(n.l) ||
                ((i = Math.min(i, n.l)),
                Number.isNaN(n.w) || (o = Math.max(o, n.l + n.w))),
                Number.isNaN(n.t) ||
                  ((r = Math.min(r, n.t)),
                  Number.isNaN(n.h) || (a = Math.max(a, n.t + n.h))));
            }),
            new n(i, r, o - i, a - r)
          );
        }),
        (o.prototype.children = function () {
          return [];
        }),
        (o.prototype.parent = function () {
          return null;
        }),
        (e.exports = o));
    }