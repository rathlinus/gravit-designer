/**
 * Module 161 - GTLUtil
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
  var n = require(148) /* module */, r = require(108) /* GFont */, o = require(12) /* GMath */;
  function a() {
  }
  a.UNSUBSCRIBE = 1638, a.event = function () {
    var e = [], t = function (t) {
        e.push(t);
      };
    return t.fire = function () {
      var t = Array.prototype.slice.call(arguments, 0);
      e = e.filter(function (e) {
        return e.apply(null, t) !== a.UNSUBSCRIBE;
      });
    }, t.clearHandlers = function () {
      e = [];
    }, t;
  }, a.cssProperty = function (e, t, i) {
    var n = new RegExp("\\b(?:" + t + "\\s*?:\\s*([^;>]*?)(?=[;\">}]|$))").exec(e);
    if (n && n.length > 1) {
      if (i) {
        var r = /([0-9]*)\.?[0-9]+/.exec(n[1]);
        return r && r.length ? r[0] : null;
      }
      return n[1];
    }
    return null;
  }, a.parseFont = function (e) {
    var t, i = n.defaultFormatting.fontFamily, a = null, s = n.defaultFormatting.strikeout, l = n.defaultFormatting.fontStyle, h = n.defaultFormatting.fontWeight, A = "normal", c = "normal", p = e.split(/\s+/);
    e:
      for (; t = p.shift();)
        switch (t) {
        case "normal":
          break;
        case "italic":
          l = r.Style.Italic;
          break;
        case "oblique":
          s = true;
          break;
        case "small-caps":
          A = t;
          break;
        case "bold":
          h = r.Weight.Bold;
          break;
        case "bolder":
          h = 900;
          break;
        case "lighter":
          h = 200;
          break;
        case "100":
        case "200":
        case "300":
        case "400":
        case "500":
        case "600":
        case "700":
        case "800":
        case "900":
          h = parseInt(t);
          break;
        default:
          if (!a) {
            var u = t.split("/");
            a = u[0], u.length > 1 && (c = u[1]);
            break;
          }
          i = t, p.length && (i += " " + p.join(" "));
          break e;
        }
    var d = a.match(/[0-9]+pt$/);
    return d && d.length ? (a = parseFloat(a), a *= 96 / 72, a = o.round(a, false, 1)) : (a = parseFloat(a), a = o.round(a, false, 1), Number.isNaN(a) && (a = 10)), {
      fontStyle: "normal" == l ? r.Style.Normal : l,
      fontVariant: A,
      fontWeight: "normal" == h ? r.Weight.Regular : h,
      fontSize: a,
      lineHeight: c,
      fontFamily: i.replace(/^"(.*)"$/, "$1"),
      strikeout: s
    };
  }, a.deCRLFify = function (e) {
    return e = (e = (e = e.replace("\r\n", "\n")).replace("\r", "\n")).replace(/\t/g, "   ");
  }, a.derive = function (e, t) {
    var i = {};
    return Object.keys(t).forEach(function (e) {
      i[e] = { value: t[e] };
    }), Object.create(e, i);
  }, a.transformText = function (e, t, i) {
    switch (t) {
    case "uppercase":
      return e.toUpperCase();
    case "lowercase":
      return e.toLowerCase();
    case "capitalize":
      return e.toLowerCase().replace(/(^|\s)\S/g, function (e) {
        return e.toUpperCase();
      });
    case "smallcaps":
      if (i && i.hasFeature(r.Features.SmallCaps))
        return Array.from(e).map(function (e) {
          return r.SmallCapsUnicodeMap[e] || e;
        }).join("");
    }
    return e;
  }, exports.exports = a;
}
