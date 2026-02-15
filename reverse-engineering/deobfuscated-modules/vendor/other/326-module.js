/**
 * Module 326
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
  var n = require(709) /* module */;
  function r() {
    this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
  }
  r.prototype.moveTo = function (e, t) {
    this.commands.push({
      type: "M",
      x: e,
      y: t
    });
  }, r.prototype.lineTo = function (e, t) {
    this.commands.push({
      type: "L",
      x: e,
      y: t
    });
  }, r.prototype.curveTo = r.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
    this.commands.push({
      type: "C",
      x1: e,
      y1: t,
      x2: i,
      y2: n,
      x: r,
      y: o
    });
  }, r.prototype.quadTo = r.prototype.quadraticCurveTo = function (e, t, i, n) {
    this.commands.push({
      type: "Q",
      x1: e,
      y1: t,
      x: i,
      y: n
    });
  }, r.prototype.close = r.prototype.closePath = function () {
    this.commands.push({ type: "Z" });
  }, r.prototype.extend = function (e) {
    if (e.commands)
      e = e.commands;
    else if (e instanceof n.BoundingBox) {
      var module = e;
      return this.moveTo(module.x1, module.y1), this.lineTo(module.x2, module.y1), this.lineTo(module.x2, module.y2), this.lineTo(module.x1, module.y2), void this.close();
    }
    Array.prototype.push.apply(this.commands, e);
  }, r.prototype.getBoundingBox = function () {
    for (var exports = new n.BoundingBox(), module = 0, require = 0, r = 0, o = 0, a = 0; a < this.commands.length; a++) {
      var s = this.commands[a];
      switch (s.type) {
      case "M":
        exports.addPoint(s.x, s.y), module = r = s.x, require = o = s.y;
        break;
      case "L":
        exports.addPoint(s.x, s.y), r = s.x, o = s.y;
        break;
      case "Q":
        exports.addQuad(r, o, s.x1, s.y1, s.x, s.y), r = s.x, o = s.y;
        break;
      case "C":
        exports.addBezier(r, o, s.x1, s.y1, s.x2, s.y2, s.x, s.y), r = s.x, o = s.y;
        break;
      case "Z":
        r = module, o = require;
        break;
      default:
        throw new Error("Unexpected path command " + s.type);
      }
    }
    return exports.isEmpty() && exports.addPoint(0, 0), exports;
  }, r.prototype.draw = function (e) {
    e.beginPath();
    for (var module = 0; module < this.commands.length; module += 1) {
      var require = this.commands[module];
      "M" === require.type ? e.moveTo(require.x, require.y) : "L" === require.type ? e.lineTo(require.x, require.y) : "C" === require.type ? e.bezierCurveTo(require.x1, require.y1, require.x2, require.y2, require.x, require.y) : "Q" === require.type ? e.quadraticCurveTo(require.x1, require.y1, require.x, require.y) : "Z" === require.type && e.closePath();
    }
    this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke());
  }, r.prototype.toPathData = function (e) {
    function module(t) {
      return Math.round(t) === t ? "" + Math.round(t) : t.toFixed(e);
    }
    function require() {
      for (var e = "", require = 0; require < arguments.length; require += 1) {
        var n = arguments[require];
        n >= 0 && require > 0 && (e += " "), e += module(n);
      }
      return e;
    }
    e = undefined !== e ? e : 2;
    for (var n = "", r = 0; r < this.commands.length; r += 1) {
      var o = this.commands[r];
      "M" === o.type ? n += "M" + require(o.x, o.y) : "L" === o.type ? n += "L" + require(o.x, o.y) : "C" === o.type ? n += "C" + require(o.x1, o.y1, o.x2, o.y2, o.x, o.y) : "Q" === o.type ? n += "Q" + require(o.x1, o.y1, o.x, o.y) : "Z" === o.type && (n += "Z");
    }
    return n;
  }, r.prototype.toSVG = function (e) {
    var t = "<path d=\"";
    return t += this.toPathData(e), t += "\"", this.fill && "black" !== this.fill && (null === this.fill ? t += " fill=\"none\"" : t += " fill=\"" + this.fill + "\""), this.stroke && (t += " stroke=\"" + this.stroke + "\" stroke-width=\"" + this.strokeWidth + "\""), t += "/>";
  }, r.prototype.toDOMElement = function (e) {
    var t = this.toPathData(e), i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return i.setAttribute("d", t), i;
  }, module.Path = r;
}
