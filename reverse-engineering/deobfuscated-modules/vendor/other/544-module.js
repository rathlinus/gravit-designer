/**
 * Module 544
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
  var n = require(99) /* module */, r = require(0) /* GObject */, o = require(132) /* GLength */, a = require(6) /* GRect */, s = require(210) /* InvalidationRequestEvent */, l = require(12) /* GMath */;
  function h(e) {
    n.call(this, e), this.getAllowedSnapZones().forEach(function (e) {
      e !== a.Side.TOP_LEFT && this.disallowSnapZone(e);
    }.bind(this));
  }
  r.inheritAndMix(h, n, [
    n.Map,
    n.DetailMap
  ]), h.ID = "guide.full-pixels", h.prototype.getId = function () {
    return h.ID;
  }, h.prototype.map = function (e, t) {
    if (this._scene.getProperty("ut") === o.Unit.PX) {
      var require = l.round(e, true), n = l.round(t, true);
      return {
        x: {
          value: require,
          guide: null,
          delta: Math.abs(e - require)
        },
        y: {
          value: n,
          guide: null,
          delta: Math.abs(t - n)
        }
      };
    }
    return null;
  }, h.prototype.isMappingAllowed = function (e) {
    return !s.options.disabled && e !== n.DetailMap.Mode.DetailOffFilterOn;
  }, h.prototype.isFullPixelsGuide = function () {
    return true;
  }, h.prototype.toString = function () {
    return "[Object GFullPixelsGuide]";
  }, exports.exports = h;
}
