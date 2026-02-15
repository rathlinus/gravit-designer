/**
 * Module 1396
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(7) /* GTransform */, a = require(70) /* GText */, s = require(17) /* GRGBColor */, l = require(5) /* GPoint */, h = require(6) /* GRect */, A = (require(22) /* GElement */, require(28) /* GStylable */), c = require(1204) /* module */;
  function p() {
  }
  function u() {
    this.lines = [], this.defaultFill = null, this.defaultBorder = null;
  }
  function d(e) {
    this.words = [], this.transform = new o(), this.startPoint = new l(0, 0), this.endPoint = new l(0, 0), this.defaultFontSize = 12, e && this.add(e);
  }
  function g(e) {
    this.word = e;
  }
  function f(e, t) {
    return !(!r.equals(e, t) && ("__pdfimportgradtype__" in e || "__pdfimportgradtype__" in t));
  }
  n.inherit(p, c), u.prototype.lines = null, u.prototype.defaultFill = null, u.prototype.defaultBorder = null, u.prototype.canMerge = function (e) {
    return f(this.defaultFill, e.defaultFill) && r.equals(this.defaultBorder, e.defaultBorder);
  }, u.prototype.getFirstLine = function () {
    return this.lines[0];
  }, u.prototype.getLastLine = function () {
    return this.lines[this.lines.length - 1];
  }, u.prototype.merge = function (e) {
    this.lines = this.lines.concat(e.lines);
  }, u.prototype.add = function (e) {
    this.lines.push(e);
  }, u.prototype.acceptLines = function (e) {
    r.each(this.lines, function (t, i) {
      e(i);
    });
  }, u.prototype.getGeometryBBox = function () {
    var e = this.getFirstLine(), t = e.startPoint, i = e.endPoint;
    return r.each(this.lines, function (e, n) {
      t = l.min(t, n.startPoint), i = l.max(i, n.endPoint);
    }), new h(t.getX(), t.getY(), i.getX() - t.getX(), this.lines.length > 1 ? i.getY() - t.getY() : e.ascent);
  }, u.prototype.getContent = function () {
    var e = [];
    return this.acceptLines(function (t) {
      e = e.concat(t.words);
    }), e;
  }, u.prototype.toGText = function () {
    var e = true;
    if (this.acceptLines(function (t) {
        t.isEmpty() || (e = false);
      }), e)
      return null;
    var t = this.getGeometryBBox(), i = this.getFirstLine(), n = i.transform.getTranslation(), r = i.transform.translated(-n.getX(), -n.getY()).translated(t.getX(), t.getY()).preMultiplied(new o().translated(0, -i.ascent)), l = i.getFirstWord(), h = l.fontColor, c = l.fontColor || s.BLACK;
    "__pdfimportgradtype__" in c && (this.acceptLines(function (e) {
      e.acceptWords(function (e) {
        delete e.fontColor;
      });
    }), h = c.createGPattern(null, t));
    var p = l.borderWidth || 1, u = l.borderColor;
    u && "__pdfimportgradtype__" in u && (u = u.createGPattern(null, t)), this.defaultFill = c, this.defaultBorder = u;
    var d = this.getContent(), g = new a();
    if (g._$itext = this, g.setProperty("sc", true), g.transform(r), g.setProperties([
        "_tfi",
        "_aw",
        "_ah",
        "_fc"
      ], [
        i.defaultFontSize,
        true,
        true,
        h
      ]), u) {
      var f = new A.BorderPaintLayer(u);
      f.setProperty("_bw", p), g.getPaintLayers().appendChild(f);
    }
    return g.setText(d), g;
  }, u.prototype.toString = function () {
    var e = "", t = this.getContent();
    return r.each(t, function (t, i) {
      e += i.text;
    }), e;
  }, d.prototype.startPoint = null, d.prototype.endPoint = null, d.prototype.transform = null, d.prototype.defaultFontSize = null, d.prototype.width = null, d.prototype.ascent = null, d.prototype.descent = null, d.prototype.isBreakLine = function () {
    var e = this.getFirstWord();
    return e && e.text.startsWith("\n");
  }, d.prototype.isEmpty = function () {
    for (var exports = 0; exports < this.words.length; exports++) {
      if ("" !== this.words[exports].text.trim())
        return false;
    }
    return true;
  }, d.prototype.getFirstWord = function () {
    return this.words[0];
  }, d.prototype.getLastWord = function () {
    return this.words[this.words.length - 1];
  }, d.prototype.acceptWords = function (e) {
    r.each(this.words, function (t, i) {
      e(i);
    });
  }, d.prototype.merge = function (e) {
    this.words = this.words.concat(e.words);
  }, d.prototype.add = function (e) {
    this.getLastWord() || (this.ascent = e.ascent, this.startPoint = e.startPoint, this.endPoint = e.endPoint.translated(0, e.ascent), this.transform = e.transform, this.defaultFontSize = e.fontSize), this.words.push(e), this.ascent = Math.max(this.ascent, e.ascent), this.descent = Math.max(Math.abs(this.descent), Math.abs(e.descent)), e.transform.getRotationFactor() <= 0 ? (this.endPoint = l.max(this.endPoint, e.endPoint), this.startPoint = l.min(this.startPoint, e.startPoint)) : (this.endPoint = l.min(this.endPoint, e.endPoint), this.startPoint = l.max(this.startPoint, e.startPoint));
  }, d.prototype.getHeight = function () {
    return this.ascent + this.descent;
  }, d.prototype.getWidth = function () {
    return this.endPoint.getX() - this.startPoint.getX();
  }, d.prototype.toString = function () {
    var e = [];
    return this.acceptWords(function (t) {
      e.push(t.text);
    }), e.join("");
  }, g.prototype.word = null, Object.defineProperties(g.prototype, {
    wordSpacing: {
      get: function () {
        return this.word.wordSpacing || 0;
      },
      set: function (e) {
        this.word.wordSpacing = e;
      }
    },
    charSpacing: {
      get: function () {
        return this.word.charSpacing || 0;
      },
      set: function (e) {
        this.word.charSpacing = e;
      }
    },
    fontSizeScale: {
      get: function () {
        return this.word.fontSizeScale;
      }
    },
    text: {
      get: function () {
        return this.word.text;
      },
      set: function (e) {
        this.word.text = e;
      }
    }
  }), g.prototype.isSameTransformation = function (e) {
    return c.Transform.sameTransformation(this.word.transform, e.word.transform);
  }, g.prototype.isSameLine = function (e) {
    var t = this.word.transform.rotated(this.word.transform.getRotationFactor()).mapPoint(new l(this.word.x, this.word.y)).getY(), i = e.word.transform.rotated(e.word.transform.getRotationFactor()).mapPoint(new l(e.word.x, e.word.y)).getY();
    return (t = parseFloat(t.toFixed(4))) === (i = parseFloat(i.toFixed(4)));
  }, g.prototype.canMergeColor = function (e) {
    return f(this.word.fontColor, e.word.fontColor) && r.equals(this.word.borderColor, e.word.borderColor);
  }, g.prototype.getHStartPoint = function () {
    return this.word.startPoint.getX();
  }, g.prototype.getHEndPoint = function () {
    var e = " " === this.word.text.slice(-1) ? this.wordSpacing : this.charSpacing;
    return this.word.endPoint.getX() + e;
  }, g.prototype.clone = function () {
    return new g(r.extend({}, this.word));
  }, g.prototype.splice = function (e, t) {
    var i = this.slice(e, t);
    return this.text = e < 0 ? this.text.substring(0, this.length() + e) : this.text.substring(e, t), i;
  }, g.prototype.slice = function (e, t) {
    var i = this.clone();
    return i.text = this.text.slice(e, t || this.length()), i;
  }, g.prototype.length = function () {
    return this.text.length;
  }, p.prototype.createTexts = function (e) {
    for (var module, require, n = []; e.length;) {
      var r, o = e.shift();
      if (module || (module = new u(), n.push(module)), require) {
        r = require.getLastWord();
        var a = new g(o), s = new g(r);
        if (a.isSameLine(s) && a.isSameTransformation(s) && a.canMergeColor(s) && a.getHStartPoint() > s.getHStartPoint()) {
          var l = a.getHStartPoint() - s.getHEndPoint();
          if (l > 0)
            if (l *= s.fontSizeScale, s.length() > 1) {
              if (s.slice(-1).charSpacing >= 0) {
                var h = s.splice(-1);
                h.charSpacing = l, require.add(h.word);
              }
            } else
              s.charSpacing >= 0 && (s.charSpacing = l);
        } else
          require = new d(), (module = new u()).add(require), n.push(module);
      } else
        require = new d(), module.add(require);
      require.add(o);
    }
    return n;
  }, p.prototype.mergeTexts = function (e, t) {
    var i = false, n = e.$trf, r = t.$trf;
    if (c.Transform.sameTransformation(n, r) && e._$itext.canMerge(t._$itext)) {
      var o = this._mergeHorizontalTexts(e, t), a = this._mergeVerticalTexts(e, t);
      i = o || a;
    }
    return this._applyAlignmentsAndIdentations(e), i || this._applyAlignmentsAndIdentations(t), i;
  }, p.prototype._mergeVerticalTexts = function (e, t) {
    var i = e._$itext, n = t._$itext, a = i.getLastLine(), s = n.getFirstLine();
    if (a.startPoint.getY() === s.startPoint.getY())
      return false;
    var A = i.getGeometryBBox(), c = n.getGeometryBBox(), p = c.translated(0, -c.getY()).translated(0, A.getY());
    if (A.intersectsRect(p)) {
      if (!A.containsRect(p) && Math.abs(A.getX() - c.getX()) > 2)
        return false;
      var u = (a = i.getLastLine()).ascent / a.transform.getScaleFactor(), f = c.getY() - A.getSide(h.Side.BOTTOM_LEFT).getY();
      if (Math.abs(f) <= a.ascent) {
        var m = a.getLastWord(), y = n.getFirstLine().getFirstWord();
        if (!m.transform.decomposed().skew.isIdentity())
          return false;
        if (!new g(m).canMergeColor(new g(y)))
          return false;
        a.acceptWords(function (e) {
          e.lineSpacing = u + f / a.transform.getScaleFactor() + "";
        });
        var _ = r.extend({}, m);
        _.text = "\n", i.add(new d(_)), i.merge(n);
        var v = e.getTransform().getTranslation(), b = l.min(v, n.getGeometryBBox().getSide(h.Side.TOP_LEFT)), C = new o().translated(-v.getX(), -v.getY()).translated(b.getX(), b.getY());
        return e.transform(C), e.setText(i.getContent()), true;
      }
    }
    return false;
  }, p.prototype._mergeHorizontalTexts = function (e, t) {
    var i = e._$itext, n = t._$itext, r = i.getLastLine(), o = n.getFirstLine();
    if (r.startPoint.getY() !== o.startPoint.getY())
      return false;
    var a = new g(r.getLastWord()), s = new g(o.getFirstWord());
    if (!a.canMergeColor(s))
      return false;
    var l = s.getHStartPoint() - a.getHEndPoint();
    if (Math.abs(l) <= 10) {
      if (l > 0)
        if (a.length() > 1) {
          var h = a.splice(-1);
          h.charSpacing = l, r.add(h.word);
        } else
          a.charSpacing = l;
      return r.merge(o), e.setText(i.getContent()), true;
    }
    return false;
  }, p.prototype._applyAlignmentsAndIdentations = function (e) {
    var t = e._$itext, i = t.getGeometryBBox(), n = false;
    t.acceptLines(function (e) {
      if (!e.isBreakLine() && e.startPoint.getX() != i.getX()) {
        var t = i.getSide(h.Side.TOP_RIGHT).getX() - e.endPoint.getX(), o = e.startPoint.getX() - i.getX(), a = e.getFirstWord();
        if (Math.abs(t - o) <= 2 && (a.align = "center", n = true), !a.align) {
          var s = r.extend({}, a);
          s.text = " ", s.wordSpacing = parseInt(e.startPoint.getX() - i.getX()), e.startPoint = new l(i.getX(), e.startPoint.getY()), e.words.unshift(s), n = true;
        }
      }
    }), n && e.setText(t.getContent());
  }, exports.exports = p;
}
