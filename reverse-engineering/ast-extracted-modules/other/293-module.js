/**
 * Module 293
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
  var n = i(1220), r = i(0), o = i(11), a = i(602), s = i(90), l = i(560), h = i(564), A = i(1221), c = i(1222), p = i(1223), u = i(1412), d = function (e) {
      this.doc = e, this._pageSize = e.getPageSize(), this.pdfObjects = [], this.lastObject = null, this._gs = null;
    };
  d.OPERATIONFLAG_STROKE = 2, d.OPERATIONFLAG_FILL = 1, r.inheritAndMix(d, s, [s.Container]), d.prototype._pageSize = null, d.Fill = function () {
    this._workaroundStroke = !1;
  }, r.inherit(d.Fill, s), d.Fill.prototype._fillStyle = null, d.Fill.prototype._rule = null, d.Fill.prototype._workaroundStroke = null, d.Fill.prototype._path = null, d.Fill.prototype._lineWidth = null, Object.defineProperties(d.Fill.prototype, {
    fillStyle: {
      get: function () {
        return this._fillStyle;
      },
      set: function (e) {
        this._fillStyle = e;
      }
    },
    lineWidth: {
      get: function () {
        return this._lineWidth;
      },
      set: function (e) {
        this._lineWidth = e;
      }
    },
    rule: {
      get: function () {
        return this._rule;
      },
      set: function (e) {
        this._rule = e;
      }
    },
    workaroundStroke: {
      get: function () {
        return this._workaroundStroke;
      },
      set: function (e) {
        this._workaroundStroke = e;
      }
    },
    path: {
      get: function () {
        return this._path;
      },
      set: function (e) {
        this._path = e;
      }
    }
  }), d.Fill.prototype.write = function (e) {
    var t = new a();
    if (this._workaroundStroke) {
      var i = new d.Stroke();
      i.lineWidth = this._lineWidth, i.strokeStyle = this._fillStyle, t.add(i), t.add(this._path);
    }
    t.add(this._fillStyle), t.add("evenodd" === this._rule ? h.f$ : h.f), t.write(e);
  }, d.Stroke = function () {
  }, r.inherit(d.Stroke, s), d.Stroke.prototype._strokeStyle = null, d.Stroke.prototype._lineWidth = null, d.Stroke.prototype._lineDash = null, d.Stroke.prototype._lineCap = null, d.Stroke.prototype._lineJoin = null, d.Stroke.prototype._miterLimit = null, Object.defineProperties(d.Stroke.prototype, {
    miterlimit: {
      get: function () {
        return this._miterLimit;
      },
      set: function (e) {
        this._miterLimit = e;
      }
    },
    strokeStyle: {
      get: function () {
        return this._strokeStyle;
      },
      set: function (e) {
        this._strokeStyle = e;
      }
    },
    lineWidth: {
      get: function () {
        return this._lineWidth;
      },
      set: function (e) {
        this._lineWidth = e;
      }
    },
    lineDash: {
      get: function () {
        return this._lineDash;
      },
      set: function (e) {
        this._lineDash = e;
      }
    },
    lineCap: {
      get: function () {
        return this._lineCap;
      },
      set: function (e) {
        this._lineCap = e;
      }
    },
    lineJoin: {
      get: function () {
        return this._lineJoin;
      },
      set: function (e) {
        this._lineJoin = e;
      }
    }
  }), d.Stroke.prototype.write = function (e) {
    var t = new a();
    this._lineWidth && t.add(new u(this._lineWidth)), this._lineDash && t.add(this._lineDash), this._lineCap && t.add(this._lineCap), this._lineJoin && t.add(this._lineJoin), this._strokeStyle && t.add(this._strokeStyle), this._miterLimit && t.add(this._miterLimit + " M"), t.add(h.S), this._lineDash && t.add(new n()), this._lineCap && t.add(new A()), this._lineJoin && t.add(new c()), t.write(e);
  }, d.prototype.setClip = function (e) {
    this._clip = e;
  }, d.prototype.accept = function (e) {
    for (var t = this.pdfObjects.slice(), i = 0; i < t.length && !1 !== e(t[i], i); i++);
  }, d.prototype.clear = function () {
    return this.pdfObjects.splice(0, this.pdfObjects.length);
  }, d.prototype.size = function () {
    return this.pdfObjects.length;
  }, d.prototype.isEmpty = function () {
    return 0 === this.size();
  }, d.prototype.setGStateResource = function (e) {
    this._gs = e, this.add(e, 0);
  }, d.prototype.getGSStateResource = function () {
    return this._gs;
  }, d.prototype.addText = function (e) {
    var t = this.getPDFText();
    return t || (t = new p(), this.add(t)), t.add(e), t;
  }, d.prototype.getDocument = function () {
    return this.doc;
  }, d.prototype.getPDFText = function () {
    return this.lastObject instanceof p ? this.lastObject : null;
  }, d.prototype.add = function (e, t) {
    if (Array.isArray(e)) {
      var i = this;
      o.each(e, function (e, t) {
        i.add(t);
      });
    } else {
      var n = new l(e);
      null != t ? this.pdfObjects.splice(t, 0, n) : this.pdfObjects.push(n), this.lastObject = e;
    }
  }, d.prototype.set = function (e, t) {
    this.remove(t), this.add(e, t);
  }, d.prototype.get = function (e) {
    return this.pdfObjects[e];
  }, d.prototype.remove = function (e) {
    return this.pdfObjects.splice(e, 1);
  }, d.prototype.peek = function () {
    return this.get(this.pdfObjects.length - 1) || new l.Null();
  }, d.prototype.pop = function () {
    return this.pdfObjects.pop();
  }, d.prototype.fill = function (e) {
    this.add("evenodd" === e ? h.f$ : h.f);
  }, d.prototype.stroke = function () {
    this.add(h.S);
  }, d.prototype.relativeY = function (e) {
    return this._pageSize.relativeY(e);
  }, d.prototype.write = function (e) {
    this.pdfObjects.length && (e.writeln("q"), this._clip && (this._clip.write(e), e.writeln()), o.each(this.pdfObjects, function (t, i) {
      i.isEmpty() || (i.write(e), e.writeln());
    }), e.write("Q"));
  }, e.exports = d;
}
