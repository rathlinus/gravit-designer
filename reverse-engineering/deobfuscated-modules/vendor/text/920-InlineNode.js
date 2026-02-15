/**
 * Module 920
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
  var n = require(0) /* GObject */, r = require(230) /* module */, o = require(921) /* module */, a = require(653) /* module */, s = require(267) /* module */, l = require(161) /* GTLUtil */, h = require(368) /* module */, A = require(654) /* module */;
  function c() {
    throw new Error("GTLCodes class cannot be instantiated");
  }
  c.codeFactory = function (e, t, i) {
    var n = c[e.$];
    return n ? new n(e, t, i) : null;
  }, c.InlineNode = function (e, t, i, n, r, o) {
    e && e.draw && e.measure ? (this.inline = e, this._parent = t, this.ordinal = i, this.length = n, this.formatting = r, this.measured = e.measure(r), this._spacing = o || 0) : console.warn("There is a bug somewhere, inline should not be null");
  }, n.inherit(c.InlineNode, s), c.InlineNode.prototype.type = "inline", c.InlineNode.prototype.inline = null, c.InlineNode.prototype._parent = null, c.InlineNode.prototype._spacing = 0, c.InlineNode.prototype.ordinal = null, c.InlineNode.prototype.length = null, c.InlineNode.prototype.formatting = null, c.InlineNode.prototype.measured = null, c.InlineNode.prototype.parent = function () {
    return this._parent;
  }, c.InlineNode.prototype.draw = function (e) {
    this.inline.draw(e, this.left, this.baseline, this.measured.width, this.measured.ascent, this.measured.descent, this.formatting);
  }, c.InlineNode.prototype.position = function (e, t, i) {
    this.left = e, this.baseline = t, i && (this._bounds = i);
  }, c.InlineNode.prototype.bounds = function (e) {
    if (e && this.inline) {
      if (this.inline._bbox)
        return new r(this.left, this.baseline + this.inline._bbox.getY(), this.measured.width, this.inline._bbox.getHeight());
      if (!(Number.isNaN(this.measured.minX) || Number.isNaN(this.measured.maxX) || Number.isNaN(this.measured.minY) || Number.isNaN(this.measured.maxY)))
        return new r(this.left + this.measured.minX, this.baseline + this.measured.minY, this.measured.maxX - this.measured.minX, this.measured.maxY - this.measured.minY);
    }
    return this._bounds || new r(this.left, this.baseline - this.measured.ascent, this.measured.width + this._spacing, this.measured.ascent + this.measured.descent);
  }, c.InlineNode.prototype.byCoordinate = function (e, t) {
    return e <= this.bounds().center().x ? this : this.next();
  }, c.ListEnd = function (e) {
    Object.keys(e).forEach(function (t) {
      this[t] = e[t];
    }.bind(this));
  }, c.ListEnd.prototype.eof = true, c.ListEnd.prototype.measure = function () {
    return {
      width: 0,
      ascent: 0,
      descent: 0,
      maxY: 0,
      maxX: 0,
      height: 0
    };
  }, c.ListEnd.prototype.draw = function (e, t, i) {
  }, c.ListNext = function () {
    c.ListEnd.apply(this, arguments);
  }, n.inherit(c.ListNext, c.ListEnd), c.ListStart = function (e, t, i) {
    this.obj = e, this.data = t, this.allCodes = i, Object.keys(e).forEach(function (t) {
      this[t] = e[t];
    }.bind(this));
  }, c.ListStart.prototype.obj = null, c.ListStart.prototype.data = null, c.ListStart.prototype.allCodes = null, c.ListStart.prototype.block = function (e, t, i, n, r, s, l) {
    var p, u, d, g, f = [], m = {}, y = new o("list", r, e, t), _ = 0, v = 10, b = isNaN(s.listDepth) ? 0 : s.listDepth, C = function (r) {
        var s = "number" != typeof r.fontSize || isNaN(r.fontSize) ? 20 : r.fontSize;
        _ = 25 * s / 20 * (b + 1), v = 10 * s / 20, p = new o("item", y, undefined, undefined, b);
        var A = f[f.length - 1] || y.uuid, C = m[A] || {
            children: [],
            uuid: A
          };
        C.children.push(p.uuid), m[A] = C, m[p.uuid] = {
          uuid: p.uuid,
          parent: A,
          children: []
        };
        for (var w = [], E = m[p.uuid]; C;)
          w.unshift(C.children.indexOf(E.uuid)), E = C, C = m[C.parent || ""];
        var B = this.allCodes((r.listMarker ? { $: r.listMarker } : null) || g || { $: "Number" }, {
          node: p,
          pathNumber: w
        }) || this.allCodes({ $: "Number" }, {
          node: p,
          pathNumber: w
        });
        g || (g = B.obj), (d = new c.InlineNode(B, p, n, 1, r, v)).block = true, u = new a(e + _ + v + d.measured.width, t, i, n + 1, p, function (e) {
          return e.$ === h.List.Close;
        }, d.measured.ascent, undefined, l);
      }.bind(this);
    return C(s), function (r) {
      if (u ? u.frame(function (o) {
          n = o.ordinal + o.length;
          var a = o.bounds(), s = o.first(), h = s && a && !a.isEmpty(), c = 0, g = t + d.measured.ascent, f = d.measured.ascent + d.measured.descent;
          if (h)
            g = s.baseline || 0, f = Math.max(o.height, f), c = s.bounds(false, true).l;
          else {
            var m = e + _ + v + d.measured.width, b = new A(null, m, i, g, d.measured.ascent, d.measured.descent, [r], n, l).bounds(false, true), C = r.lineSpacing();
            f = "number" == typeof C ? b.h * C : parseFloat(C), c = b.l;
          }
          var w = r.paragraphSpacing();
          t += "number" == typeof w ? f * w : Math.max(parseFloat(w), 0);
          var E = c - v - d.measured.width;
          d.position(E, g), t += f, p.children().push(d), h && p.children().push(o), p.finalize(null, null, _ + v + d.measured.width), y.children().push(p), u = d = null;
        }, r) : n++, !u) {
        var o = r.code();
        if (o) {
          if (o.$ == h.List.Close)
            return y.finalize(), y;
          if (o.$ == h.List.Item) {
            var a = b;
            if (a != (b = r.listDepth()))
              if (b > a)
                f.push(p.uuid);
              else
                for (; f.length > b;)
                  f.pop();
            C(r.codeFormatting());
          }
        }
      }
    };
  }, c.ListStart.prototype.measure = function () {
    return {
      width: 0,
      ascent: 0,
      descent: 0,
      maxY: 0,
      maxX: 0,
      height: 0
    };
  }, c.editFilter = function (e) {
    var t = 0, i = [];
    if (!e.words.some(function (n, r) {
        var o = n.code();
        if (o)
          switch (o.$) {
          case h.List.Open:
            t++, i.push(n.codeFormatting());
            break;
          case h.List.Item:
            if (0 === t)
              return e.spliceWordsWithRuns(r, 1, [l.derive(n.codeFormatting(), { text: { $: h.List.Open } })]), true;
            break;
          case h.List.Close:
            0 === t && e.spliceWordsWithRuns(r, 1, []), i.pop(), t--;
          }
      }) && t > 0) {
      for (var n = []; t > 0;)
        t--, n.push(l.derive(i.shift() || {}, { text: { $: h.List.Close } }));
      e.spliceWordsWithRuns(e.words.length - 1, 0, n);
    }
  }, require(922) /* module */(c), require(923) /* module */(c), require(924) /* VertexSource */(c), require(925) /* module */(c), exports.exports = c;
}
