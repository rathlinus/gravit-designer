/**
 * Module 1142
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
  var n = require(108) /* GFont */, r = require(281) /* GFontManager */, o = require(11) /* GUtil */;
  function a(e, t) {
    this._fontManager = t, this._fontManager.addEventListener(r.FontAvailableEvent, this._fontEvent, this), this._fontManager.addEventListener(r.FontUnavailableEvent, this._fontEvent, this), this._fontCallback = {}, this._missingFonts = [], this._unresolvedFonts = [], this._resolvedFonts = [], this._fontProvider = e || {
      queryFirst: function (e, t) {
        t(this.getDefaultFont());
      }.bind(this)
    };
    var i = {};
    this._promise = new Promise(function (e, t) {
      i.resolve = e, i.reject = t;
    }), this._promiseCapability = i;
  }
  a.hashCode = function (e) {
    return e.fontFamily + "_" + e.fontStyle + "_" + e.fontWeight;
  }, a.prototype._fontManager = null, a.prototype._unresolvedFonts = null, a.prototype._resolvedFonts = null, a.prototype._fontCallback = null, a.prototype._fontProvider = null, a.prototype._missingFonts = [], a.prototype._promise = null, a.prototype._promiseCapability = null, a.prototype.getDefaultFont = function () {
    return {
      family: this._fontManager.getDefaultFont() ? this._fontManager.getDefaultFont().getFamily() : "Open Sans",
      style: this._fontManager.getDefaultFont() ? this._fontManager.getDefaultFont().getStyle() : n.Style.Normal,
      weight: this._fontManager.getDefaultFont() ? this._fontManager.getDefaultFont().getWeight() : n.Weight.Regular
    };
  }, a.prototype.queryFirst = function (e, t) {
    var i = this._fontCallback[a.hashCode(e)];
    i || (this._fontCallback[a.hashCode(e)] = i = []), i.push(t), 1 === i.length && this._fontProvider.queryFirst(e, function (t) {
      t || -1 === this._missingFonts.indexOf(e.fontName) && this._missingFonts.push(e.fontName);
      var i = this._fontCallback[a.hashCode(e)];
      delete this._fontCallback[a.hashCode(e)], i && i.forEach(function (e) {
        e(t);
      }), this.ready();
    }.bind(this));
  }, a.prototype.getFont = function (e, t, i) {
    if (this._fontManager) {
      var r = this._fontManager.getFont(e, t, i);
      if (!r.isResolved() && !r.isFailed()) {
        var a = o.find(this._unresolvedFonts, function (e) {
          return n.equals(r, e.font);
        });
        if (!a) {
          var s = {};
          a = {
            promise: new Promise(function (e, t) {
              s.resolve = e, s.reject = t;
            }),
            promiseCapability: s,
            font: r
          }, this._unresolvedFonts.push(a);
        }
        return a.promise;
      }
      return Promise.resolve(r);
    }
    return Promise.resolve(null);
  }, a.prototype._fontEvent = function (e) {
    if (!this._resolvedFonts.some(function (t) {
        return n.equals(e.font, t);
      })) {
      var module = o.find(this._unresolvedFonts, function (t) {
        return n.equals(e.font, t.font);
      });
      module && (this._resolvedFonts.push(e.font), module.promiseCapability.resolve());
    }
    this.ready();
  }, a.prototype.ready = function () {
    return this._unresolvedFonts.length <= this._resolvedFonts.length && !Object.keys(this._fontCallback).length && (this._fontManager && (this._fontManager.removeEventListener(r.FontAvailableEvent, this._fontEvent, this), this._fontManager.removeEventListener(r.FontUnavailableEvent, this._fontEvent, this)), this._promiseCapability.resolve()), this._promise;
  }, exports.exports = a;
}
