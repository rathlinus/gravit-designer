/**
 * Module 916
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
  var n = require(148) /* module */, r = require(509) /* module */, o = require(368) /* module */;
  function a(e, t, i) {
    this.doc = e, this.start = t, this.end = i, t > i && (this.start = i, this.end = t);
  }
  a.unlistifyFilter = function (e) {
    var t = e && e.text && e.text.$;
    return !t || -1 === t.indexOf("List");
  }, a.prototype.unlistify = function (e) {
    var t, i = this.doc, s = this.start, l = this.end, h = null, A = r.create(this.blocks, this).map(function (t) {
        if (t.isEOF())
          return [];
        s = Math.min(s, t.start), l = Math.min(Math.max(l, t.end), i.frame.length - 1);
        var A = t.prev, c = false;
        return null == h && (A && A.isList() ? (h = n.format([{ text: { $: o.List.Close } }], t.getFormatting(), true), c = true) : h = []), r.create(t.runs, t).map(function (t, n) {
          return e || "object" != typeof t.text || 0 !== t.text.$.indexOf("List") || 0 === n && c || t.text.$ === o.List.Open && 0 === s || t.text.$ === o.List.Close && l === i.frame.length - 1 ? t : Object.create(t, { text: { value: "\n" } });
        }).filter(a.unlistifyFilter).per(n.consolidate()).all();
      }).all().reduce(function (e, t) {
        return e.concat(t);
      }, []).map(function (e) {
        return Object.create(e, { listMarker: { value: undefined } });
      });
    return h && (A = h.concat(A)), (t = this.doc.checkSanity(s, l, A)) && this.doc.range(s, l).setText(A), t;
  }, a.prototype.listify = function (e, t) {
    var i = this.start, s = this.end, l = this.doc, h = null, A = null, c = r.create(this.blocks, this).map(function (c) {
        if (c.isEOF())
          return [];
        i = Math.min(i, c.start), s = Math.min(Math.max(s, c.end), l.frame.length - 1);
        var p = c.prev, u = c.next;
        if (null == h)
          if (p && p.isList() && !c.isList())
            i = Math.min(i, p.start), s = Math.max(s, p.end), h = r.create(p.runs, p).filter(function (e) {
              var t = e && e.text && e.text.$;
              return !t || -1 === t.indexOf(o.List.Close);
            }).per(n.consolidate()).all();
          else if (h = [], p) {
            var d = p.save(), g = d[d.length - 1];
            g && "string" == typeof g.text && "\n" === g.text.slice(-1) && (i = Math.min(i, p.start), s = Math.max(s, p.end), d[d.length - 1] = Object.create(g, { text: { value: g.text.substr(0, g.text.length - 1) } }), h = d);
          }
        A = u && u.isList() ? [] : n.format([{
            text: { $: o.List.Close },
            listMarker: e
          }], (u || c).getFormatting(), true);
        var f = r.create(c.runs, c).filter(a.unlistifyFilter).per(n.consolidate()).all().map(function (e) {
            if ("string" == typeof e.text) {
              if (t)
                return Object.create(e, { text: { value: "" } });
              if (-1 !== e.text.indexOf("\n"))
                return Object.create(e, { text: { value: e.text.replace(/\n/g, "") } });
            }
            return e;
          }), m = c.getFormatting();
        if (isNaN(m.listMarker)) {
          var y = 0;
          c.save().some(function (e) {
            if (e.text && e.text.$ && 0 === e.text.$.indexOf("List"))
              return isNaN(e.listDepth) || (y = e.listDepth), true;
          }), f = f.map(function (e) {
            return Object.create(e, { listDepth: { value: y } });
          }), m.listDepth = y;
        }
        return f.unshift(n.format({ text: { $: o.List.Item } }, m, true)), f;
      }).all().reduce(function (e, t) {
        return e.concat(t);
      }, []).map(function (t) {
        return Object.create(t, { listMarker: { value: e } });
      }), p = false;
    return c.length && (h && (c = h.concat(c)), A && (c = c.concat(A)), (p = this.doc.checkSanity(i, s, c)) && this.doc.range(i, s).setText(c)), p;
  }, a.prototype.parts = function (e, t) {
    t = t || this.doc.children();
    var i = this;
    t.some(function (t) {
      return !(t.ordinal + t.length <= i.start) && (t.ordinal >= i.end || void (t.ordinal >= i.start && t.ordinal + t.length <= i.end ? e(t) : i.parts(e, t.children())));
    });
  }, a.prototype.clear = function () {
    return this.setText([]);
  }, a.prototype.setText = function (e) {
    return this.doc.splice(this.start, this.end, e);
  }, a.prototype.runs = function (e) {
    this.doc.runs(e, this);
  }, a.prototype.blocks = function (e) {
    this.doc.blocks(e, this);
  }, a.prototype.plainText = function () {
    return r.create(this.runs, this).map(n.getPlainText).all().join("");
  }, a.prototype.save = function () {
    return r.create(this.runs, this).per(n.consolidate()).all();
  }, a.prototype.isEOF = function () {
    for (var exports = false, module = this.start; module < this.end; module++) {
      var require = this.doc.wordContainingOrdinal(module), n = require && require.word;
      if (n) {
        if (!n.eof) {
          exports = false;
          break;
        }
        exports = true;
      }
    }
    return exports;
  }, a.prototype.getFormatting = function () {
    if (this.start === this.end) {
      var exports = this.start;
      exports > 0 && exports--, this.start = exports, this.end = exports + 1;
    }
    return r.create(this.runs, this).reduce(n.merge).last() || this.doc.emptyFormatting || n.clone(n.defaultFormatting);
  }, a.prototype.isList = function () {
    return r.create(this.blocks, this).some(function (e) {
      return r.create(e.runs, e).some(function (e) {
        var t = e && e.text && e.text.$;
        return t && -1 !== t.indexOf("List");
      });
    });
  }, a.prototype.createListItem = function () {
    var e = r.create(this.blocks, this).first() || this, t = e.getFormatting();
    return (isNaN(t.listDepth) || "string" != typeof t.listMarker) && e.save().some(function (e) {
      if (e.text && e.text.$ && 0 === e.text.$.indexOf("List"))
        return isNaN(t.listDepth) && !isNaN(e.listDepth) && (t.listDepth = e.listDepth), "string" != typeof t.listMarker && (t.listMarker = e.listMarker), true;
    }), n.format([{ text: { $: o.List.Item } }], t, true);
  }, a.prototype.canInsertListItem = function () {
    if (this.isList()) {
      var exports = r.create(this.blocks, this).all();
      if (exports.length > 1)
        return true;
      if (this.start === this.end) {
        var module = exports.shift();
        if (module.end === this.doc.frame.length - 1)
          if (!r.create(module.runs, module).filter(a.unlistifyFilter).map(n.getPlainText).all().join("") && module.save().some(function (e) {
              return "object" == typeof e.text && e.text.$ === o.List.Close;
            }))
            return false;
        return true;
      }
    }
    return false;
  }, a.prototype.canChangeListDepth = function () {
    if (this.isList()) {
      var exports = r.create(this.blocks, this).all();
      if (exports.length > 1)
        return true;
      if (this.start === this.end) {
        var module = exports.shift();
        if (module && module.start + 1 === this.start)
          return true;
      }
    }
    return false;
  }, a.prototype._changeListDepth = function (e) {
    var t = false;
    return this.doc.transaction(function () {
      r.create(this.blocks, this).all().forEach(function (i) {
        if (i.isList()) {
          var n = i.getFormatting().listDepth || 0;
          if (isNaN(n)) {
            var r = this.doc.wordContainingOrdinal(i.start);
            r && (n = r.word.listDepth());
          }
          if (!isNaN(n)) {
            var o = Math.min(10, Math.max(0, n + e));
            n !== o && i.setFormatting("listDepth", o);
          }
          t = true;
        }
      }.bind(this));
    }.bind(this)), t;
  }, a.prototype.increaseList = function () {
    return this._changeListDepth(1);
  }, a.prototype.decreaseList = function () {
    return this._changeListDepth(-1);
  }, a.prototype.toggleList = function (e) {
    return e ? this.listify(e) : this.unlistify();
  }, a.prototype._setSingleFormatting = function (e, t) {
    if (this.start === this.end)
      this.doc.modifyInsertFormatting(e, t);
    else {
      var require = this.save(), r = {};
      r[e] = t, n.format(require, r), this.setText(require);
    }
  }, a.prototype.setFormatting = function (e, t) {
    var i, r;
    e instanceof Array || (e = [e], t = [t]);
    for (var o = 0; o < e.length; o++) {
      var a = e[o], s = t[o];
      "align" === a || "lineSpacing" === a || "paragraphSpacing" === a || "paragraphIndent" === a || "listMarker" === a ? this.doc.paragraphRange(this.start, this.end)._setSingleFormatting(a, s) : this.start === this.end ? this.doc.modifyInsertFormatting(a, s) : (i || (i = this.save(), r = {}), r[a] = s);
    }
    i && (n.format(i, r), this.setText(i));
  }, exports.exports = a;
}
