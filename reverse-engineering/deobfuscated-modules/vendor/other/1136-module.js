/**
 * Module 1136
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
  var n = require(0) /* GObject */, r = require(439) /* module */, o = require(70) /* GText */, a = require(17) /* GRGBColor */, s = require(188) /* GCMYKColor */, l = require(1137) /* module */, h = require(28) /* GStylable */, A = require(108) /* GFont */, c = require(416) /* module */, p = require(7) /* GTransform */, u = {
      left: h.ParagraphAlignment.Left,
      right: h.ParagraphAlignment.Right,
      center: h.ParagraphAlignment.Center,
      justify: h.ParagraphAlignment.Justify
    };
  function d(e, t) {
    return (e < 0 || e >= Object.keys(u).length) && (e = 0), Object.keys(u).map(function (e) {
      return t ? e : u[e];
    })[e];
  }
  function g() {
    r.apply(this, arguments), this._node && this._node instanceof o && this._node.setProperty("sc", true);
  }
  function f(e) {
    var t = e.NSRGB;
    if (t)
      return new a(l.toByte(t) || a.BLACK.getValue());
    var i = e.NSCMYK;
    if (i) {
      var n = l.toByte(i);
      return n ? new s(n.map(function (e) {
        return e / 255;
      })) : new s();
    }
    return new a(a.BLACK.getValue());
  }
  n.inherit(g, r), g.composeQuery = function (e) {
    var t = /normal|italic|oblique|regular/i, i = /normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900/i;
    e = function (e) {
      return e.replace(/^\s+|\s+$/g, "");
    }(e.replace(/[\s\r\t\n]+/gm, " "));
    var n = "normal", r = A.Weight.Regular;
    t.test(e) && (n = t.exec(e).pop().toLowerCase()), i.test(e) && (r = i.exec(e).pop().toLowerCase());
    var o;
    return {
      fontName: e,
      fontFamily: function (e) {
        var t = (e = e.replace(/["']/g, "").replace(" ", "").trim()).indexOf("-");
        if (-1 !== t) {
          var i = e.substring(t + 1, e.length).trim();
          (A.Weight[i] || "normal" === i.toLowerCase()) && (e = e.substring(0, t).trim());
        }
        return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/([a-z])([0-9])/gi, "$1 $2").replace(/([0-9])([a-z])/gi, "$1 $2").trim();
      }(e),
      fontWeight: function (e) {
        if (isNaN(e)) {
          if ("normal" !== e)
            for (var t = Object.keys(A.Weight), i = 0; i < t.length; i++)
              if (t[i].toLowerCase() === e.toLowerCase())
                return A.Weight[t[i]];
          return A.Weight.Regular;
        }
        return parseInt(e);
      }(r),
      fontStyle: (o = n, "normal" === o ? A.Style.Normal : A.Style.Italic)
    };
  }, g.prototype._promise = null, g.prototype.setText = function (e) {
    this._promise.then(function () {
      var t = this._node.getContent();
      if (t && t.length) {
        var require = t[0];
        require.text = e, this._node.setText(t), 0 === this._data.textBehaviour && "center" === require.align && this._promise && this._file.getFontSearch().getFont(require.fontFamily, "normal" !== require.fontStyle ? A.Style.Italic : A.Style.Normal, require.fontWeight || A.Weight.Regular).then(function (e) {
          e.isResolved() && !e.isFailed() ? this._calculateNewPosition(e) : console.warn("Font is unresolved");
        }.bind(this));
      }
    }.bind(this));
  }, g.prototype._calculateNewPosition = function (e) {
    var t = this._node.getContent()[0];
    if (t) {
      var require = [];
      require.push("font:"), require.push(e.getStyle() === A.Style.Normal ? "normal" : "italic"), require.push(e.getWeight()), require.push(t.fontSize + "px"), require.push(e.getFamily());
      var n = new c(t.text, require.join(" "));
      n.width > this._getGeometryBBox().getWidth() && this._node.transform(new p().translated(this._getGeometryBBox().getWidth() / 2 - n.width / 2, 0));
    }
  }, g.prototype.parse = function () {
    r.prototype.parse.apply(this, arguments);
    var e = {};
    this._promise = new Promise(function (t, i) {
      e.resolve = t, e.reject = i;
    });
    var t, i, n = a.BLACK;
    if (this._data.style) {
      var o = this._data.style.textStyle;
      if (o && o.encodedAttributes) {
        if (o.encodedAttributes.NSColor)
          (h = l.from(o.encodedAttributes.NSColor._archive)) && (n = f(h.top()));
        if (o.encodedAttributes.NSParagraphStyle)
          (h = l.from(o.encodedAttributes.NSParagraphStyle._archive)) && h.top().NSAlignment && (t = h.top().NSAlignment);
        if (o.encodedAttributes.MSAttributedStringFontAttribute)
          if (h = l.from(o.encodedAttributes.MSAttributedStringFontAttribute._archive)) {
            var s = h.getByRef(h.top().NSFontDescriptorAttributes);
            i = E = h.toMap(s);
          }
      }
    }
    if (this._data.attributedString && this._data.attributedString.archivedAttributedString) {
      var h;
      if (!(h = l.from(this._data.attributedString.archivedAttributedString._archive)))
        return void e.reject();
      var c = h.getByRef(h.top().NSString);
      "object" == typeof c && c["NS.string"] && (c = c["NS.string"]);
      var p = h.getByRef(h.top().NSAttributeInfo), u = h.getByRef(h.top().NSAttributes);
      if (u) {
        var m, y;
        p ? (y = p["NS.data"].getBytes(), m = u["NS.objects"].map(function (e) {
          return h.toMap(h.getByRef(e));
        })) : (y = [
          c.length,
          0
        ], m = [h.toMap(u)]);
        for (var _ = [], v = 0, b = 0; b < y.length; b += 2) {
          var C = y[b], w = m[y[b + 1]], E = i, B = n, x = d(t || 0, true).toLowerCase();
          if (w && (w.MSAttributedStringFontAttribute && (E = h.toMap(h.getByRef(w.MSAttributedStringFontAttribute.NSFontDescriptorAttributes))), w.NSColor && (B = f(w.NSColor)), w.NSParagraphStyle && (x = d(w.NSParagraphStyle.NSAlignment || 0, true).toLowerCase())), E && B && x) {
            var P = this._file.getFontSearch().getDefaultFont(), S = E.NSFontNameAttribute || E.NSCTFontUIUsageAttribute || P.family, T = g.composeQuery(S), I = {
                text: c.substring(0, C),
                fontName: T.fontName,
                fontFamily: T.fontFamily,
                fontWeight: T.fontWeight,
                fontStyle: T.fontStyle,
                fontSize: E.NSFontSizeAttribute,
                fontColor: B.toScreenCSS(),
                align: x
              };
            w && w.NSParagraphStyle && w.NSParagraphStyle.NSMaxLineHeight && (I.lineSpacing = w.NSParagraphStyle.NSMaxLineHeight + ""), _.push(I);
          }
          c = c.substring(C);
        }
        this._node.$fontFamilies = _.map(function (e) {
          return e.fontName;
        }), _.forEach(function (t) {
          this._file.getFontSearch().queryFirst(t, function (i) {
            t.fontFamily = i ? i.family : P.family, t.fontWeight = i ? i.weight : P.weight, t.fontStyle = i && i.style !== A.Style.Normal ? "italic" : "normal";
            var n = function () {
              ++v >= _.length && (this._node.setText(_), e.resolve());
            }.bind(this);
            this._file.getFontSearch().getFont(t.fontFamily, "normal" === t.fontStyle ? A.Style.Normal : A.Style.Italic, t.fontWeight).then(n).catch(n);
          }.bind(this));
        }.bind(this)), c = null;
      } else
        this._node.setText(c);
    }
    var F = [], R = [];
    c && "string" == typeof c && (n && (F.push("_fc"), R.push(n)), t && (F.push("_pal"), R.push(d(t))), i && (F.push("_tfi", "_tff"), R.push(E.NSFontSizeAttribute, E.NSFontNameAttribute))), 0 === this._data.textBehaviour && (this._node._geometryBBox ? (F.push("ah"), R.push(true)) : (F.push("aw", "ah"), R.push(true, true))), this._node.setProperties(F, R), this._node._geometryBBox = this._getGeometryBBox();
  }, g.prototype._getRelatedNodeClass = function () {
    return o;
  }, exports.exports = g;
}
