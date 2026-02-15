/**
 * Module 1213
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
  var n = require(0) /* GObject */, r = require(11) /* GUtil */, o = require(233) /* GCompoundShape */, a = require(264) /* GVertexPolyBoolean */, s = require(70) /* GText */, l = require(28) /* GStylable */, h = require(17) /* GRGBColor */, A = require(87) /* GVertexSource */, c = require(122) /* GGroup */, p = require(2) /* GNode */, u = require(796) /* module */, d = require(795) /* module */, g = require(439) /* module */, f = [
      a.OR,
      a.SUB,
      a.AND,
      a.XOR
    ];
  function m() {
    u.apply(this, arguments);
  }
  n.inherit(m, u), m.prototype.parse = function () {
    var e = this._data.style, t = this._data.isVisible, i = this._data.isLocked, n = this._data.name, o = this._data.resizingConstraint, a = this._data.windingRule;
    this._data.layers.forEach(function (s) {
      this.isCompoundShape() || (s.style = r.extend(s.style || {}, e), s.isVisible = t, s.isLocked = i, s.name = n, s.resizingConstraint = o, s.windingRule = a);
    }.bind(this)), u.prototype.parse.apply(this, arguments);
  }, m.prototype.isCompoundShape = function () {
    return this._data.layers.length > 1;
  }, m.prototype._clip = function (e) {
    if (this.isCompoundShape())
      u.prototype._clip.call(this, e);
    else {
      var module = this.getChildren();
      module.length && module[0]._clip(e);
    }
  }, m.prototype.appendTo = function (e, t) {
    var i = this._getTransformation();
    if (this.isCompoundShape()) {
      var n = function (e) {
          e._beginBlockCompositeEvents(true, true), e._beginBlockChanges([
            p._Change.BeforeChildRemove,
            p._Change.AfterChildRemove,
            p._Change.BeforeChildInsert,
            p._Change.AfterChildInsert
          ]);
        }, o = function (e) {
          e._endBlockCompositeEvents(true, true), e._endBlockChanges([
            p._Change.BeforeChildRemove,
            p._Change.AfterChildRemove,
            p._Change.BeforeChildInsert,
            p._Change.AfterChildInsert
          ]);
        }, a = this.getChildren().slice().filter(function (e) {
          return e instanceof d && !!e.getNode();
        }), s = a.map(function (e) {
          return e.getNode();
        }), l = a.map(function (e) {
          return e._data.booleanOperation;
        }), h = false, A = null;
      s.forEach(function (e, t) {
        var i = l[t];
        undefined !== i && -1 !== i || (i = 3), A ? A !== i && (h = true) : A = i;
      });
      var c = null;
      if (h)
        for (var m = 0; m < s.length; m++) {
          var y = s[m], _ = c, v = l[m];
          if (!_ && m < s.length - 1) {
            _ = s[++m], v = l[m];
            var b = y;
            y = _, _ = b;
          }
          undefined !== v && -1 !== v || (v = 3);
          var C = f[v];
          if (null !== C)
            try {
              n(_), n(y), c = this._merge(C, [
                _,
                y
              ]);
            } finally {
              o(_), o(y);
            }
          else
            console.warn("Unsupported boolean operation: #" + v);
        }
      else
        c = this._merge(f[l.shift()], s);
      c.setProperty("evenodd", this.isEvenOdd());
      var w = r.extend({}, this._data);
      w.noTransform = true, delete w.layers, new g(w, this._file, null, c).parse(), c.transform(i), e.appendChild(c);
    } else
      u.prototype.appendTo.call(this, e, t);
  }, m.prototype._postAppendTo = function () {
    this.isCompoundShape() || this.transform(this._getTransformation());
  }, m.prototype._getValidItems = function (e) {
    var t = [];
    if (e instanceof c || e instanceof o)
      for (var require = e.getFirstChild(); null !== require; require = require.getNext())
        t = t.concat(this._getValidItems(require));
    else
      e.hasMixin(A) && e.validateInsertion(new o()) && t.push(e);
    return t;
  }, m.prototype._merge = function (e, t) {
    var i, n = new o(), r = [], p = true;
    if (t.forEach(function (e) {
        r = r.concat(this._getValidItems(e)), e.hasMixin(A) && e.validateInsertion(n) && e.getParent() instanceof o ? i ? i !== e.getParent() && (p = false) : i = e.getParent() : p = false;
      }.bind(this)), r.length > 1) {
      var u = r[r.length - 1], d = u.getParent(), g = u.getNext();
      if (p)
        for (; d instanceof c;)
          g = d.getNext(), d = d.getParent();
      else
        for (; d instanceof c || d instanceof o;)
          g = d.getNext(), d = d.getParent();
      d && d.insertChild(n, g);
      try {
        if (n.beginUpdate(), n.setProperty("evenodd", r[0].getProperty("evenodd")), r[0] instanceof s) {
          var f = r[0];
          if (!f.getPaintLayers().getFillLayers(true).length && f.getProperty("_fc")) {
            n.getPaintLayers().clearFillLayers();
            var m = "string" == typeof f.getProperty("_fc") ? h.fromCSSColor(f.getProperty("_fc")) : f.getProperty("_fc");
            n.getPaintLayers().appendChild(new l.FillPaintLayer(m));
          }
        }
        var y = [], _ = [];
        i = null, r.forEach(function (e) {
          e.getParent() instanceof o ? (y.push(e), i || (i = e.getParent())) : _.push(e);
        }), (r = y.concat(_)).forEach(function (t) {
          var r, s = t.getParent();
          for (s && i && s === i || s instanceof o && e === a.OR || t.setProperty("bool", e), s && s.removeChild(t); (s instanceof c || s instanceof o) && !s.getFirstChild();)
            r = s, (s = s.getParent()) && s.removeChild(r);
          n.appendChild(t);
        });
      } finally {
        n.endUpdate();
      }
    }
    return n;
  }, exports.exports = m;
}
