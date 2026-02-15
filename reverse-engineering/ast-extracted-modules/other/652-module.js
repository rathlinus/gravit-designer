/**
 * Module 652
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

function (e, t, i) {
  var n = i(161), r = i(0), o = i(916), a = i(230), s = i(917), l = i(653), h = i(920), A = i(926), c = i(148), p = i(509), u = i(927), d = i(267), g = i(368);
  function f() {
    this._width = 0, this.selection = {
      start: 0,
      end: 0
    }, this.nextInsertFormatting = {}, this.caretVisible = !0, this._noWrap = !1, this.customCodes = function (e, t, i) {
    }, this.codes = function (e, t) {
      return h.codeFactory(e, t, this.codes) || this.customCodes(e, t, this.codes);
    }.bind(this), this.selectionChanged = n.event(), this.contentChanged = n.event(), this.editFilters = [h.editFilter], this.load([]);
  }
  function m(e) {
    return y(e) && e.isSoftBreak();
  }
  function y(e) {
    if (e.isNewLine())
      return !0;
    var t = e.code();
    return !(!t || !t.block && !t.eof);
  }
  r.inherit(f, d), f.prototype.type = "document", f.prototype._width = 0, f.prototype._noWrap = !1, f.prototype._wordOrdinals = null, f.prototype.selection = null, f.prototype.caretVisible = !0, f.prototype.customCodes = null, f.prototype.codes = null, f.prototype.selectionChanged = null, f.prototype.contentChanged = null, f.prototype.editFilters = null, f.prototype.nextInsertFormatting = {}, f.prototype.emptyFormatting = null, f.prototype._nextSelection = null, f.prototype.words = null, f.prototype.undo = null, f.prototype.redo = null, f.prototype.frame = null, f.prototype.selectionJustChanged = !1, f.prototype._currentTransaction = null, f.prototype._lastSpacingPadding = null, f.prototype.makeEditCommand = function (e, t, i) {
    var n = this.selection.start, r = this.selection.end;
    return function (o) {
      this._wordOrdinals = [];
      var a = Array.prototype.splice.apply(this.words, [
        e,
        t
      ].concat(i));
      o(this.makeEditCommand(this, e, i.length, a)), this._nextSelection = {
        start: n,
        end: r
      };
    }.bind(this);
  }, f.prototype._makeTransaction = function (e) {
    var t = [], i = function (e) {
        t.push(e), i.cmdLen = t.length;
      }.bind(this);
    return e(i), function (e) {
      e(this._makeTransaction(function (e) {
        for (; t.length;)
          t.pop()(e);
      }.bind(this)));
    }.bind(this);
  }, f.prototype.load = function (e, t, i) {
    var n = this;
    this.undo = [], this.redo = [], this._wordOrdinals = [];
    var r = new A(e), o = new u(n.codes);
    try {
      this.words = p.create(r.emit, r).per(o.split, o).map(function (e) {
        return new s(e, n.codes);
      }).all();
    } catch (e) {
      return !1;
    }
    return this.layout(), this.contentChanged.fire(i), this.select(0, 0, t), !0;
  }, f.prototype.layout = function () {
    this.frame = null;
    try {
      var e = new l(0, 0, this._width, 0, this, void 0, void 0, void 0, this._noWrap, this._lastSpacingPadding);
      this.frame = p.create(this.words).per(e.frame, e).first(), this._lastSpacingPadding = this.frame && this.frame.getBBoxSpacing();
    } catch (e) {
      console.error(e);
    }
    if (this.frame) {
      if (this._nextSelection) {
        var t = this._nextSelection;
        delete this._nextSelection, this.select(t.start, t.end);
      }
    } else
      console.error("A bug somewhere has produced an invalid state - rolling back"), this.performUndo();
  }, f.prototype.range = function (e, t) {
    return new o(this, e, t);
  }, f.prototype.documentRange = function () {
    return this.range(0, this.frame ? this.frame.length - 1 : 0);
  }, f.prototype.selectedRange = function () {
    return this.range(this.selection.start, this.selection.end);
  }, f.prototype.save = function () {
    return this.documentRange().save();
  }, f.prototype.lineRange = function (e, t) {
    if (!this.frame)
      return this.range(0, 0);
    var i = this.frame.children();
    t = t || e;
    for (var n = 0, r = 0, o = 0; o < i.length; o++) {
      var a = i[o], s = a.last(), l = a.ordinal, h = s.ordinal;
      l <= e && e <= h && (n = l), l <= t && t <= h && (r = h + (s.word ? s.word.text.length : s.length));
    }
    return this.range(n, r);
  }, f.prototype.blocks = function (e, t) {
    var i = [], n = [], r = t.start, o = t.end, a = 0;
    this.words.forEach(function (e) {
      var t, r = e.code();
      if (r && 0 === r.$.indexOf("List")) {
        if (t = i.pop()) {
          var o = r.$ === g.List.Close ? a + e.length : a;
          n.push(this.range(t.start, o));
        }
        r.$ !== g.List.Close && i.push({
          start: a,
          code: !0
        });
      } else
        (t = i[i.length - 1]) || i.push({ start: a }), t && t.code || y(e) && !m(e) && (t = i.pop(), n.push(this.range(t.start, a + e.length)));
      a += e.length;
    }.bind(this));
    var s = function (e) {
        var t;
        return n.some(function (i) {
          if (e >= i.start && e < i.end)
            return t = i, !0;
        }), t;
      }, l = this.byOrdinal(r);
    l && l.block && r > 0 && r--, (l = this.byOrdinal(o)) && l.block && o > 0 && o--;
    var h = s(r), A = s(o);
    r = h ? h.start : 0, o = A ? A.end : this.frame ? this.frame.length : 0, n.forEach(function (t, i) {
      t.start >= r && t.end <= o && e(Object.create(t, {
        prev: { value: n[i - 1] },
        next: { value: t[i + 1] }
      }));
    });
  }, f.prototype.paragraphRange = function (e, t) {
    var i, n = this.wordContainingOrdinal(e);
    if (e = 0, n)
      for (i = n.index; i > 0; i--)
        if (y(this.words[i - 1]) && !m(this.words[i - 1])) {
          e = this.wordOrdinal(i);
          break;
        }
    var r = this.wordContainingOrdinal(t);
    if (t = this.frame ? this.frame.length - 1 : 0, r)
      if (y(r.word) && !m(r.word))
        t = this.wordOrdinal(r.index);
      else
        for (i = r.index; i < this.words.length; i++)
          if (y(this.words[i]) && !m(this.words[i])) {
            t = this.wordOrdinal(i);
            break;
          }
    return this.range(e, t);
  }, f.prototype.insert = function (e, t) {
    ("string" == typeof e || e instanceof String) && (e = n.deCRLFify(e)), this.select(this.selection.end + this.selectedRange().setText(e), null, t);
  }, f.prototype.modifyInsertFormatting = function (e, t) {
    this.nextInsertFormatting[e] = t, this.notifySelectionChanged();
  }, f.prototype.applyInsertFormatting = function (e) {
    var t;
    if (this.frame && this.frame.length <= 1 && this.emptyFormatting) {
      Object.keys(this.emptyFormatting);
      if (t = this.emptyFormatting, this.nextInsertFormatting)
        for (var i in this.nextInsertFormatting)
          t[i] = this.nextInsertFormatting[i];
    } else
      t = this.nextInsertFormatting;
    var n = Object.keys(t);
    n.length && e.forEach(function (e) {
      n.forEach(function (i) {
        e[i] = t[i];
      });
    });
  }, f.prototype.wordOrdinal = function (e) {
    if (e < this.words.length) {
      var t = this._wordOrdinals.length;
      if (t < e + 1)
        for (var i = t > 0 ? this._wordOrdinals[t - 1] + this.words[t - 1].length : 0, n = t; n <= e; n++)
          this._wordOrdinals[n] = i, i += this.words[n].length;
      return this._wordOrdinals[e];
    }
  }, f.prototype.wordContainingOrdinal = function (e) {
    var t, i = 0;
    return this.words ? (this.words.some(function (n, r) {
      if (e >= i && e < i + n.length)
        return t = {
          word: n,
          ordinal: i,
          index: r,
          offset: e - i
        }, !0;
      i += n.length;
    }), t) : (console.log("SOMETHING WRONG!"), {});
  }, f.prototype.runs = function (e, t) {
    var i = this.wordContainingOrdinal(Math.max(0, t.start)), n = this.wordContainingOrdinal(Math.min(t.end, this.frame ? this.frame.length - 1 : 0));
    if (i.index === n.index)
      i.word.runs(e, {
        start: i.offset,
        end: n.offset
      });
    else {
      i.word.runs(e, { start: i.offset });
      for (var r = i.index + 1; r < n.index; r++)
        this.words[r].runs(e);
      n.word.runs(e, { end: n.offset });
    }
  }, f.prototype.spliceWordsWithRuns = function (e, t, i) {
    var n, r = this, o = new A(i), a = new u(r.codes);
    try {
      n = p.create(o.emit, o).per(a.split, a).truthy().map(function (e) {
        return new s(e, r.codes);
      }).all();
    } catch (e) {
      return;
    }
    var l = !1;
    if ("_filtersRunning" in r)
      r._filtersRunning++;
    else {
      for (var h = 0; h < t; h++)
        this.words[e + h].code() && (l = !0);
      l || (l = n.some(function (e) {
        return !!e.code();
      }));
    }
    this.transaction(function (i) {
      if (this.makeEditCommand(e, t, n)(i), l) {
        this._filtersRunning = 0;
        try {
          for (;;) {
            var o = this._filtersRunning;
            if (!this.editFilters.some(function (e) {
                return e(this), o !== r._filtersRunning;
              }.bind(this)))
              break;
          }
        } finally {
          delete r._filtersRunning;
        }
      }
    }.bind(this));
  }, f.prototype.checkSanity = function (e, t, i) {
    try {
      var n = new f();
      return n.load(this.documentRange().save()), n.splice(e, t, i), !!n.frame;
    } catch (e) {
      console.warn("Document sanity - A bug somewhere would produce an invalid state", e);
    }
    return !1;
  }, f.prototype.clone = function () {
    var e = new f();
    return e._width = this._width, e.load(this.documentRange().save()), e;
  }, f.prototype.realBounds = function () {
    return this.frame && this.frame.bounds();
  }, f.prototype.splice = function (e, t, i) {
    if ("string" == typeof i) {
      var n = Math.max(0, e - 1), r = p.create({
          start: n,
          end: n + 1
        }).per(this.runs, this).first();
      i = [r ? Object.create(r, { text: { value: i } }) : { text: i }];
    } else
      Array.isArray(i) || (i = [{ text: i }]);
    this.applyInsertFormatting(i);
    var o, a, s = this.wordContainingOrdinal(e), l = this.wordContainingOrdinal(t);
    if (!s || !l)
      return 0;
    if (e === s.ordinal)
      if (s.index > 0 && !y(this.words[s.index - 1])) {
        s.index--;
        var h = this.words[s.index];
        o = p.create({}).per(h.runs, h).all();
      } else
        o = [];
    else
      o = p.create({ end: s.offset }).per(s.word.runs, s.word).all();
    t === l.ordinal ? t === (this.frame ? this.frame.length - 1 : 0) || y(l.word) ? (a = [], l.index--) : a = p.create({}).per(l.word.runs, l.word).all() : a = p.create({ start: l.offset }).per(l.word.runs, l.word).all();
    var A = this.frame ? this.frame.length : 0, u = p.create(o).concat(i).concat(a).per(c.consolidate()).all();
    if (0 === e && t >= this.frame.length - 1 && this.frame.length > 1 && 0 === u.length) {
      t === this.frame.length && t--;
      var d = this.range(0, t).getFormatting();
      for (var g in (this.emptyFormatting = null, d))
        "text" !== g && (this.emptyFormatting || (this.emptyFormatting = {}), this.emptyFormatting[g] = d[g]);
    }
    return this.spliceWordsWithRuns(s.index, l.index - s.index + 1, u), this.frame ? this.frame.length - A : 0;
  }, f.prototype.registerEditFilter = function (e) {
    this.editFilters.push(e);
  }, f.prototype.wrap = function (e) {
    this._noWrap = !e, this.layout();
  }, f.prototype.width = function (e) {
    if (0 === arguments.length)
      return this._width;
    e !== this._width && (this._width = e, this.layout());
  }, f.prototype.children = function () {
    return this.frame ? [this.frame] : [];
  }, f.prototype.toggleCaret = function () {
    var e = this.caretVisible;
    return this.selection.start === this.selection.end && (this.selectionJustChanged ? this.selectionJustChanged = !1 : this.caretVisible = !this.caretVisible), this.caretVisible !== e;
  }, f.prototype.getCaretCoords = function (e) {
    var t, i = this.byOrdinal(e);
    if (i) {
      var n = n = this.byOrdinal(e - 1);
      if (i.block && e > 0)
        if (n.newLine) {
          var r = n.bounds(), o = n.parent().parent().bounds();
          t = new a(o.l, o.b, 1, r.h);
        } else
          t = n.bounds(), t = new a(t.r, t.t, 1, t.h);
      else {
        var s = (t = i.bounds()).l, l = t.t, h = t.h;
        if (i.newLine && n.newLine) {
          var A = this.nextInsertFormatting.align || this.selectedRange().getFormatting().align;
          "center" === A ? s = this.frame.bounds().center().x : "right" === A && (s = this.frame.bounds().r);
        }
        if (n.endOfList && e === this.frame.length - 1 ? (l = (t = n.bounds()).t + t.h, h = t.h) : "document" === n.type && i.block && 0 === e ? (l = (t = i.bounds()).t - t.h, s = 0, h = t.h) : i.endOfList && 1 === i.length && "inline" === n.type && (h = n.h), h)
          t = new a(s, l, 1, h);
        else {
          var c = (n = this.byOrdinal(e - 1)).bounds();
          t = c.h ? new a(s, t.t, 1, c.h) : new a(s, t.t, t.w, 1);
        }
      }
      return t;
    }
  }, f.prototype.byCoordinate = function (e, t) {
    if (!this.frame)
      return null;
    e < 0 && (e = 0);
    for (var i = this.frame.byCoordinate(e, t).ordinal, n = this.getCaretCoords(i); n.b <= t && i < this.frame.length - 1;)
      i++, n = this.getCaretCoords(i);
    for (; n.t >= t && i > 0;)
      i--, n = this.getCaretCoords(i);
    return this.byOrdinal(i);
  }, f.prototype.drawSelection = function (e, t) {
    if (this.selection.end === this.selection.start) {
      if (t && (this.selectionJustChanged || this.caretVisible)) {
        var i = this.getCaretCoords(this.selection.start);
        i && (e.save(), e.fillStyle = "black", i.fill(e), e.restore());
      }
    } else
      e.save(), e.fillStyle = t ? "rgba(0, 100, 200, 0.3)" : "rgba(160, 160, 160, 0.3)", this.selectedRange().parts(function (t) {
        t.bounds(!1, !0).fill(e);
      }), e.restore();
  }, f.prototype.notifySelectionChanged = function (e) {
    var t = null, i = this;
    this.selectionChanged.fire(function () {
      return t || (t = i.selectedRange().getFormatting()), t;
    }, e);
  }, f.prototype.select = function (e, t, i) {
    this.frame && (this.selection.start = Math.max(0, e), this.selection.end = Math.min("number" == typeof t ? t : this.selection.start, this.frame.length - 1), this.selectionJustChanged = !0, this.caretVisible = !0, this.nextInsertFormatting = {}, this.notifySelectionChanged(i));
  }, f.prototype.performUndo = function (e) {
    var t = e ? this.redo : this.undo, i = e ? this.undo : this.redo, n = t.pop();
    n && (n(function (e) {
      i.push(e);
    }), this.layout(), this.contentChanged.fire());
  }, f.prototype.canUndo = function (e) {
    return e ? !!this.redo.length : !!this.undo.length;
  }, f.prototype.transaction = function (e) {
    if (this._currentTransaction)
      e(this._currentTransaction);
    else {
      for (; this.undo.length > 50;)
        this.undo.shift();
      this.redo.length = 0;
      var t = !1;
      this.undo.push(this._makeTransaction(function (i) {
        this._currentTransaction = i;
        try {
          e(i);
        } finally {
          t = i.cmdLen > 0, this._currentTransaction = null;
        }
      }.bind(this))), t && (this.layout(), this.contentChanged.fire());
    }
  }, e.exports = f;
}
