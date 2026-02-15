/**
 * Module 1462
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
  var n = require(11) /* GUtil */;
  function r() {
    this.filters = [], this.id = "", this.nextPrefixId = 100, this.fill_opacity = 1, this._height = "400%", this._width = "400%", this._x = "-200%", this._y = "-200%", this._filterUnits = r.FilterUnits.ObjectBoundingBox;
  }
  r.Type = {
    Series: "series",
    Parallel: "parallel"
  }, r.prototype._filterUnits = null, r.FilterUnits = {
    UserSpaceOnUse: "userSpaceOnUse",
    ObjectBoundingBox: "objectBoundingBox"
  }, r.prototype.setId = function (e) {
    this.id = e;
  }, r.prototype.setFillOpacity = function (e) {
    this.fill_opacity = e;
  }, r.prototype.setDimensions = function (e, t) {
    this._height = e, this._width = t;
  }, r.prototype.setCoordinates = function (e, t) {
    this._x = e, this._y = t;
  }, r.prototype.setFilterUnits = function (e) {
    this._filterUnits = e;
  }, r.prototype._createBaseFilterObject = function (e) {
    if (!e)
      throw "Invalid filter instance!";
    return {
      defs: [],
      filterInstance: e,
      addFilter: function () {
        throw "Not defined!";
      },
      setSource: function (e) {
        this.getFirstDefElement().setAttribute("in", e);
      },
      setResult: function (e) {
        this.getLastDefElement().setAttribute("result", e);
      },
      getResult: function () {
        return this.getLastDefElement().getAttribute("result");
      },
      getLastDefElement: function () {
        return this.defs[this.defs.length - 1].documentElement;
      },
      getFirstDefElement: function () {
        return this.defs[0].documentElement;
      },
      getType: function () {
        throw "Not defined";
      },
      overrideDefsSource: function (e, t) {
        this.defs.forEach(function (i) {
          i.documentElement.getAttribute("in") === e && i.documentElement.setAttribute("in", t), i.documentElement.getAttribute("in2") === e && i.documentElement.setAttribute("in2", t), i.documentElement.getAttribute("in3") === e && i.documentElement.setAttribute("in3", t);
        });
      }
    };
  }, r.prototype.createSeriesFilter = function (e) {
    var t = this, i = this._createBaseFilterObject(e);
    return i.addFilter = function (e, i, n, r) {
      var o = t.createFilter(e, i, n, r);
      this.defs.push(o);
    }, i.getType = function () {
      return r.Type.Series;
    }, this.filters.push(i), i;
  }, r.prototype.createParallelFilter = function (e) {
    var t = this, i = this._createBaseFilterObject(e);
    return i.prefix = "pf_" + this.nextPrefixId++ + "_", i.addFilter = function (e, i, r, o) {
      0 != this.defs.length || i.in || (i.in = "SourceGraphic"), n.each(i, function (e, t) {
        "SourceGraphic" != t && "SourceAlpha" != t && (e.startsWith("in") || "target" === e || "out" === e || "result" === e) && (i[e] = this.prefix + t);
      }.bind(this));
      var a = t.createFilter(e, i, r, o);
      this.defs.push(a);
    }, i.getType = function () {
      return r.Type.Parallel;
    }, this.filters.push(i), i;
  }, r.prototype.createFilter = function (e, t, i, r) {
    var o = n.parseXML("<" + e + " xmlns='http://www.w3.org/2000/svg' />");
    if (t && n.each(t, function (e, t) {
        o.documentElement.setAttribute(e, t);
      }), i) {
      var a = o.documentElement.getAttribute("style") || "";
      n.each(i, function (e, t) {
        a && (a += ";"), a += e + ":" + t;
      }), o.documentElement.setAttribute("style", a);
    }
    return r && n.each(r, function (e, t) {
      var i = n.parseXML(t);
      o.documentElement.appendChild(o.importNode(i.documentElement));
    }), o;
  }, r.prototype._groupEqualFilters = function (e) {
    var t = {};
    return e.forEach(function (e) {
      t[e.filterInstance] || (t[e.filterInstance] = []), t[e.filterInstance].push(e);
    }), Object.keys(t).map(function (e) {
      return t[e];
    });
  }, r.prototype._generateResultId = function () {
    return "_out_" + n.uuid();
  }, r.prototype._createParallelFilters = function (e, t, i) {
    if (i.length)
      if (i.length > 1) {
        var r = this._groupEqualFilters(i), o = t.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "feMerge"), a = function (i, r) {
            if (n.each(i.defs, function (i, n) {
                t.appendChild(e.ownerDocument.importNode(n.documentElement, true)), t.appendChild(o);
              }), r) {
              var a = t.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
              a.setAttribute("in", i.getResult()), o.appendChild(a);
            }
          };
        r.forEach(function (e) {
          if (e.length > 1)
            e.forEach(function (e, t, i) {
              e.setResult(this._generateResultId());
              var n = i[t + 1];
              n && n.overrideDefsSource("SourceGraphic", e.getResult()), a(e, !n);
            }.bind(this));
          else {
            var t = e[0];
            t.setResult(this._generateResultId()), a(t, true);
          }
        }.bind(this));
      } else
        n.each(i[0].defs, function (i, n) {
          t.appendChild(e.ownerDocument.importNode(n.documentElement, true));
        });
  }, r.prototype._createSeriesFilters = function (e, t, i) {
    if (i.length) {
      if (i.length > 1) {
        var r = this._generateResultId();
        i[i.length - 2].setResult(r), (a = i[i.length - 1]).setSource(r);
      }
      var o, a, s = "SourceGraphic";
      if (n.each(i, function (e, t) {
          0 == e ? s = t.getResult() : t.overrideDefsSource("SourceGraphic", s);
        }), 1 != this.fill_opacity)
        0 == i.length ? (o = this.createSeriesFilter(), a = null) : ((a = (o = i[i.length - 1]).defs[o.defs.length - 1]).documentElement.setAttribute("result", "FilterOut"), n.each(o.defs, function (e, t) {
          "feBlend" === t.documentElement.tagName && "SourceGraphic" === t.documentElement.getAttribute("in") && t.documentElement.setAttribute("in", "SourceGraphicIgnore");
        })), o.addFilter("feComponentTransfer", {
          in: "SourceGraphic",
          result: "SourceGraphicFill"
        }, null, ["<feFuncA xmlns=\"http://www.w3.org/2000/svg\" type=\"table\" tableValues=\"0 " + this.fill_opacity + "\"/>"]), a && o.addFilter("feBlend", {
          in: "SourceGraphicFill",
          in2: "FilterOut",
          mode: "normal"
        });
      n.each(i, function (i, r) {
        n.each(r.defs, function (i, n) {
          t.appendChild(e.ownerDocument.importNode(n.documentElement, true));
        });
      });
    }
  }, r.prototype.toXml = function (e) {
    if (0 != this.filters.length || 0 != this.fill_opacity) {
      var module = e.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "filter");
      e.appendChild(module), this.id && module.setAttribute("id", this.id), module.setAttribute("x", this._x), module.setAttribute("y", this._y), module.setAttribute("width", this._width), module.setAttribute("height", this._height), module.setAttribute("filterUnits", this._filterUnits), module.setAttribute("color-interpolation-filters", "sRGB");
      var require = this.filters.filter(function (e) {
          return e.getType() === r.Type.Parallel;
        }), n = this.filters.filter(function (e) {
          return e.getType() === r.Type.Series;
        });
      this._createParallelFilters(e, module, require), this._createSeriesFilters(e, module, n);
    }
  }, exports.exports = r;
}
