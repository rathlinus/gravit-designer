/**
 * Module 712
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
  "use strict";
  var n = require(105) /* module */, r = require(984) /* module */, o = require(326) /* module */;
  function a(e) {
    this.bindConstructorValues(e);
  }
  a.prototype.bindConstructorValues = function (e) {
    var t, i;
    this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || undefined, this.unicodes = e.unicodes || undefined !== e.unicode ? [e.unicode] : [], e.xMin && (this.xMin = e.xMin), e.yMin && (this.yMin = e.yMin), e.xMax && (this.xMax = e.xMax), e.yMax && (this.yMax = e.yMax), e.advanceWidth && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", (t = e.path, i = t || new o.Path(), {
      configurable: true,
      get: function () {
        return "function" == typeof i && (i = i()), i;
      },
      set: function (e) {
        i = e;
      }
    }));
  }, a.prototype.addUnicode = function (e) {
    0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e);
  }, a.prototype.getBoundingBox = function () {
    return this.path.getBoundingBox();
  }, a.prototype.getPath = function (e, t, i, n, r) {
    var a, s;
    e = undefined !== e ? e : 0, t = undefined !== t ? t : 0, i = undefined !== i ? i : 72, n || (n = {});
    var l = n.xScale, h = n.yScale, A = new o.Path();
    if (n.hinting && r && r.hinting && (s = this.path && r.hinting.exec(this, i)), s)
      a = r.hinting.getCommands(s), e = Math.round(e), t = Math.round(t), l = h = 1;
    else {
      a = this.path.commands;
      var c = 1 / this.path.unitsPerEm * i;
      undefined === l && (l = c), undefined === h && (h = c);
    }
    for (var p = 0; p < a.length; p += 1) {
      var u = a[p];
      "M" === u.type ? A.moveTo(e + u.x * l, t + -u.y * h) : "L" === u.type ? A.lineTo(e + u.x * l, t + -u.y * h) : "Q" === u.type ? A.quadraticCurveTo(e + u.x1 * l, t + -u.y1 * h, e + u.x * l, t + -u.y * h) : "C" === u.type ? A.curveTo(e + u.x1 * l, t + -u.y1 * h, e + u.x2 * l, t + -u.y2 * h, e + u.x * l, t + -u.y * h) : "Z" === u.type && A.closePath();
    }
    return A;
  }, a.prototype.getContours = function () {
    if (undefined === this.points)
      return [];
    for (var exports = [], module = [], require = 0; require < this.points.length; require += 1) {
      var r = this.points[require];
      module.push(r), r.lastPointOfContour && (exports.push(module), module = []);
    }
    return n.argument(0 === module.length, "There are still points left in the current contour."), exports;
  }, a.prototype.getMetrics = function () {
    for (var exports = this.path.commands, module = [], require = [], n = 0; n < exports.length; n += 1) {
      var r = exports[n];
      "Z" !== r.type && (module.push(r.x), require.push(r.y)), "Q" !== r.type && "C" !== r.type || (module.push(r.x1), require.push(r.y1)), "C" === r.type && (module.push(r.x2), require.push(r.y2));
    }
    var o = {
      xMin: Math.min.apply(null, module),
      yMin: Math.min.apply(null, require),
      xMax: Math.max.apply(null, module),
      yMax: Math.max.apply(null, require),
      leftSideBearing: this.leftSideBearing
    };
    return isFinite(o.xMin) || (o.xMin = 0), isFinite(o.xMax) || (o.xMax = this.advanceWidth), isFinite(o.yMin) || (o.yMin = 0), isFinite(o.yMax) || (o.yMax = 0), o.rightSideBearing = this.advanceWidth - o.leftSideBearing - (o.xMax - o.xMin), o;
  }, a.prototype.draw = function (e, t, i, n, r) {
    this.getPath(t, i, n, r).draw(e);
  }, a.prototype.drawPoints = function (e, t, i, n) {
    function r(t, i, n, r) {
      var o = 2 * Math.PI;
      e.beginPath();
      for (var a = 0; a < t.length; a += 1)
        e.moveTo(i + t[a].x * r, n + t[a].y * r), e.arc(i + t[a].x * r, n + t[a].y * r, 2, 0, o, false);
      e.closePath(), e.fill();
    }
    t = undefined !== t ? t : 0, i = undefined !== i ? i : 0, n = undefined !== n ? n : 24;
    for (var o = 1 / this.path.unitsPerEm * n, a = [], s = [], l = this.path, h = 0; h < l.commands.length; h += 1) {
      var A = l.commands[h];
      undefined !== A.x && a.push({
        x: A.x,
        y: -A.y
      }), undefined !== A.x1 && s.push({
        x: A.x1,
        y: -A.y1
      }), undefined !== A.x2 && s.push({
        x: A.x2,
        y: -A.y2
      });
    }
    e.fillStyle = "blue", r(a, t, i, o), e.fillStyle = "red", r(s, t, i, o);
  }, a.prototype.drawMetrics = function (e, t, i, n) {
    var o;
    t = undefined !== t ? t : 0, i = undefined !== i ? i : 0, n = undefined !== n ? n : 24, o = 1 / this.path.unitsPerEm * n, e.lineWidth = 1, e.strokeStyle = "black", r.line(e, t, -10000, t, 10000), r.line(e, -10000, i, 10000, i);
    var a = this.xMin || 0, s = this.yMin || 0, l = this.xMax || 0, h = this.yMax || 0, A = this.advanceWidth || 0;
    e.strokeStyle = "blue", r.line(e, t + a * o, -10000, t + a * o, 10000), r.line(e, t + l * o, -10000, t + l * o, 10000), r.line(e, -10000, i + -s * o, 10000, i + -s * o), r.line(e, -10000, i + -h * o, 10000, i + -h * o), e.strokeStyle = "green", r.line(e, t + A * o, -10000, t + A * o, 10000);
  }, module.Glyph = a;
}
