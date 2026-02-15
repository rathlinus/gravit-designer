/**
 * Module 281 - GFontManager
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
  var n = i(75), r = i(0), o = i(108), a = i(72), s = i(568);
  function l() {
    this._fonts = [];
  }
  r.inherit(l, n), l.FontAvailableEvent = function (e) {
    this.font = e;
  }, r.inherit(l.FontAvailableEvent, a), l.FontAvailableEvent.prototype.font = null, l.FontAvailableEvent.prototype.toString = function () {
    return "[Event GFontManager.FontAvailableEvent]";
  }, l.FontUnavailableEvent = function (e) {
    this.font = e;
  }, r.inherit(l.FontUnavailableEvent, a), l.FontUnavailableEvent.prototype.font = null, l.FontUnavailableEvent.prototype.toString = function () {
    return "[Event GFontManager.FontUnavailableEvent]";
  }, l.ResolveFontEvent = function (e, t, i, n, r, o) {
    this.family = e, this.style = t, this.weight = i, this.resolved = n, this.failed = r, this.tryToResolveMissingFont = void 0 === o || o;
  }, r.inherit(l.ResolveFontEvent, a), l.ResolveFontEvent.prototype.family = null, l.ResolveFontEvent.prototype.tryToResolveMissingFont = null, l.ResolveFontEvent.prototype.style = null, l.ResolveFontEvent.prototype.weight = null, l.ResolveFontEvent.prototype.resolved = null, l.ResolveFontEvent.prototype.failed = null, l.ResolveFontEvent.prototype.toString = function () {
    return "[Event GFontManager.ResolveFontEvent]";
  }, l.QueryFontFamilyEvent = function (e, t, i) {
    this.family = e, this.callback = t, this.failed = i;
  }, r.inherit(l.QueryFontFamilyEvent, a), l.QueryFontFamilyEvent.prototype.family = null, l.QueryFontFamilyEvent.prototype.callback = null, l.QueryFontFamilyEvent.prototype.failed = null, l.QueryFontFamilyEvent.prototype.toString = function () {
    return "[Event GFontManager.QueryFontFamilyEvent]";
  }, l.prototype._defaultFont = null, l.prototype._defaultStyles = null, l.prototype._defaultWeights = null, l.prototype._fonts = null, l.prototype.getDefaultFont = function () {
    return this._defaultFont;
  }, l.prototype.getFonts = function () {
    return this._fonts;
  }, l.prototype.setDefaultFont = function (e) {
    if (!e.isResolved())
      for (var t = 0; t < this._fonts.length; ++t) {
        var i = this._fonts[t];
        if (i.isResolved() && o.equals(i, e)) {
          e = i;
          break;
        }
      }
    this._defaultFont = e;
  }, l.prototype.setDefaultFontStyles = function (e) {
    this._defaultStyles = e;
  }, l.prototype.setDefaultFontWeights = function (e) {
    this._defaultWeights = e;
  }, l.prototype.getDefaultFontStyles = function () {
    return this._defaultStyles;
  }, l.prototype.getDefaultFontWeights = function () {
    return this._defaultWeights;
  }, l.prototype.getFont = function (e, t, i, n) {
    var r = this._getFont(e, t, i);
    return r && r.isResolved() ? r : this.hasEventListeners(l.ResolveFontEvent) ? (r || (r = new s(e, t, i), this._fonts.push(r)), r.setFailed(!1), this.trigger(new l.ResolveFontEvent(e, t, i, this._resolvedFont.bind(this), this._unresolvedFont.bind(this, r), n)), this._getFont(e, t, i)) : null;
  }, l.prototype.queryFontFamily = function (e) {
    if (this.hasEventListeners(l.QueryFontFamilyEvent)) {
      var t;
      return this.trigger(new l.QueryFontFamilyEvent(e, function (e) {
        t = e;
      })), t;
    }
  }, l.prototype.removeFont = function (e) {
    for (var t = 0; t < this._fonts.length; ++t) {
      var i = this._fonts[t];
      i.getFamily() === e && i.isResolved() && (this._fonts[t] = new s(i.getFamily(), i.getStyle(), i.getWeight()));
    }
  }, l.prototype._getFont = function (e, t, i) {
    for (var n = null, r = 0; r < this._fonts.length; ++r) {
      var o = this._fonts[r];
      if (o.getFamily() === e && o.getStyle() === t && o.getWeight() === i) {
        if (o.isResolved())
          return o;
        n = o;
      }
    }
    return n;
  }, l.prototype.hasUnresolvedFonts = function () {
    return !!this._fonts.length && this._fonts.some(function (e) {
      return !e.isResolved();
    });
  }, l.prototype.hasPendingFonts = function () {
    return !!this._fonts.length && this._fonts.some(function (e) {
      return !e.isResolved() && !e.isFailed();
    });
  }, l.prototype._unresolvedFont = function (e) {
    e.setFailed(!0), this.hasEventListeners(l.FontUnavailableEvent) && this.trigger(new l.FontUnavailableEvent(e));
  }, l.prototype._resolvedFont = function (e) {
    if (e.isResolved())
      for (var t = 0; t < this._fonts.length; ++t)
        if (o.equals(this._fonts[t], e) && !this._fonts[t].isResolved()) {
          this._fonts[t] = e, o.equals(e, this._defaultFont) && (this._defaultFont = e), this.hasEventListeners(l.FontAvailableEvent) && this.trigger(new l.FontAvailableEvent(e));
          break;
        }
  }, e.exports = l;
}
