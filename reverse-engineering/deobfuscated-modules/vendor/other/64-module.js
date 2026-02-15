/**
 * Module 64
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
  var n = require(75) /* GEventTarget */, r = require(0) /* GObject */, o = require(176) /* GSystem */, a = require(514) /* GModifiers */, s = require(150) /* GModifiersChangedEvent */, l = require(77) /* Wheel */, h = require(164) /* GKey */;
  function A() {
    "undefined" != typeof document && (document.addEventListener("keydown", function (e) {
      document.activeElement && function (e) {
        var t = e.nodeName.toLowerCase();
        return !(A._allowedClassNames && e.className && A._allowedClassNames.some(function (t) {
          return e.classList.contains(t);
        })) && ("input" === t || "textarea" === t && "gravit-ime-textarea-608209" !== e.className || "button" === t || "select" === t);
      }(document.activeElement) || this._updateModifiers(e);
    }.bind(this), true), document.addEventListener("keyup", function (e) {
      this._updateModifiers(e);
    }.bind(this), true), document.addEventListener("mousemove", function (e) {
      this._updateModifiers(e);
    }.bind(this), true), document.addEventListener("mousedown", function (e) {
      this._updateModifiers(e);
    }.bind(this), true), document.addEventListener("mouseup", function (e) {
      this._updateModifiers(e);
    }.bind(this), true)), this._updateProperties();
  }
  function c() {
    return "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.match(/Edge/i) ? A.WebBrowser.Edge_OLD : navigator.userAgent.match(/Edg/i) ? A.WebBrowser.Edge : navigator.userAgent.match(/OPR/i) ? A.WebBrowser.Opera : navigator.userAgent.match(/Firefox/i) ? A.WebBrowser.Firefox : navigator.userAgent.match(/Chrome/i) || navigator.userAgent.match(/CriOS/i) ? A.WebBrowser.Chrome : navigator.userAgent.match(/Safari/i) ? A.WebBrowser.Safari : navigator.userAgent.match(/Trident/i) || navigator.userAgent.match(/MSIE/) ? A.WebBrowser.MSIE : A.WebBrowser.Unknown : A.WebBrowser.Unknown;
  }
  function p() {
    var e = 4096;
    return o.hardware === o.Hardware.Desktop ? o.operatingSystem === o.OperatingSystem.Unix ? e = 65536 : A.webBrowser === A.WebBrowser.Chrome || A.webBrowser === A.WebBrowser.Firefox || A.webBrowser === A.WebBrowser.Edge ? e = 32768 : A.webBrowser === A.WebBrowser.Edge_OLD ? e = 16384 : A.webBrowser === A.WebBrowser.MSIE || A.webBrowser === A.WebBrowser.Opera ? e = 8192 : A.webBrowser === A.WebBrowser.Safari && (e = 4194304) : A.webBrowser === A.WebBrowser.Chrome || A.webBrowser === A.WebBrowser.Firefox ? e = 32768 : A.webBrowser === A.WebBrowser.Safari && (e = 4194304), e -= 1;
  }
  function u() {
    var e = 16777216;
    return o.hardware === o.Hardware.Desktop ? o.operatingSystem === o.OperatingSystem.Unix ? e = 4294967296 : A.webBrowser === A.WebBrowser.Chrome || A.webBrowser === A.WebBrowser.Edge || A.webBrowser === A.WebBrowser.Safari ? e = 268435456 : A.webBrowser === A.WebBrowser.Firefox ? e = 124992400 : A.webBrowser !== A.WebBrowser.MSIE && A.webBrowser !== A.WebBrowser.Opera || (e = 67108864) : A.webBrowser === A.WebBrowser.Chrome && (e = 117418896), e -= 1;
  }
  function d() {
    var e = 4294967296;
    if (A.webBrowser === A.WebBrowser.Chrome || A.webBrowser === A.WebBrowser.Edge) {
      e = o.operatingSystem !== o.Hardware.Unix && o.hardware === o.Hardware.Desktop ? 2147483648 : Math.floor(429496729.6);
    } else
      A.webBrowser === A.WebBrowser.Firefox ? e = A.absoluteMaxImgAreaDots : A.webBrowser === A.WebBrowser.Edge_OLD || A.webBrowser === A.WebBrowser.Opera ? e = 10485760 : A.webBrowser === A.WebBrowser.MSIE && (e = 629145600);
    e -= 1;
    var t = 3 * A.absoluteMaxImgAreaDots;
    return Math.min(t, e);
  }
  function g() {
    return Math.min(4294967295, Math.floor(A.maxPngDataSize / 3 * 4) + 22);
  }
  r.inheritAndMix(A, r, [n]), A.prototype._updateProperties = function () {
    this.webBrowser = A.webBrowser, this.absoluteMaxImgLinearDimension = A.absoluteMaxImgLinearDimension, this.maxImgLinearDimension = A.absoluteMaxImgLinearDimension >>> 1, this.absoluteMaxImgAreaDots = A.absoluteMaxImgAreaDots, this.maxImgAreaDots = A.absoluteMaxImgAreaDots >>> 2, this.maxPngDataSize = A.maxPngDataSize, this.maxImgDataUrlLength = A.maxImgDataUrlLength;
  }, A._allowedClassNames = null, A.bypassKeyDownRestrictionByClassName = function (e) {
    A._allowedClassNames || (A._allowedClassNames = []), A._allowedClassNames.push(e);
  }, A.WebBrowser = {
    Unknown: 0,
    Edge: 1,
    Opera: 2,
    Chrome: 3,
    Firefox: 4,
    Safari: 5,
    MSIE: 6,
    Edge_OLD: 7
  }, A.webBrowser = c(), A.absoluteMaxImgLinearDimension = p(), A.absoluteMaxImgAreaDots = u(), A.maxPngDataSize = d(), A.maxImgDataUrlLength = g(), A.isTouchDevice = "undefined" != typeof window && "ontouchstart" in window || "undefined" != typeof navigator && (navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), A.prototype.webBrowser = A.WebBrowser.Unknown, A.prototype.getWebBrowser = c, A.prototype.absoluteMaxImgLinearDimension = 0, A.prototype.maxImgLinearDimension = 0, A.prototype.absoluteMaxImgAreaDots = 0, A.prototype.maxImgAreaDots = 0, A.prototype.maxPngDataSize = 0, A.prototype.maxImgDataUrlLength = 0, A.prototype.modifiers = new a(), A.prototype._modifiersChangedEventCache = new s(), A.prototype.scheduleFrame = function (e) {
    return "undefined" != typeof window && "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame(e) : null;
  }, A.prototype.cancelFrame = function (e) {
    "undefined" != typeof window && "function" == typeof window.cancelAnimationFrame && window.cancelAnimationFrame(e);
  }, A.prototype._lastKeyEventTime = 0, A.prototype._hadMetaBefore = false, A.prototype._blockCtrl = false, A.prototype._altKey = false, A.prototype._ctrlKey = false, A.prototype._shiftKey = false, A.prototype.holdKey = function (e) {
    switch (e) {
    case h.Constant.ALT_LEFT:
    case h.Constant.ALT_RIGHT:
      this._altKey = true;
      break;
    case h.Constant.CONTROL:
      this._ctrlKey = true;
      break;
    case h.Constant.SHIFT:
      this._shiftKey = true;
    }
  }, A.prototype.releaseKey = function (e) {
    switch (e) {
    case h.Constant.ALT_LEFT:
    case h.Constant.ALT_RIGHT:
      this._altKey = false;
      break;
    case h.Constant.CONTROL:
      this._ctrlKey = false;
      break;
    case h.Constant.SHIFT:
      this._shiftKey = false;
    }
  }, A.prototype.isHoldingKey = function (e) {
    switch (e) {
    case h.Constant.ALT_LEFT:
    case h.Constant.ALT_RIGHT:
      return this._altKey;
    case h.Constant.CONTROL:
      return this._ctrlKey;
    case h.Constant.SHIFT:
      return this._shiftKey;
    default:
      return false;
    }
  }, A.prototype._updateModifiers = function (e) {
    var t = false, i = false, n = false, r = false, a = false, h = false, A = false, c = false, p = false, u = false, d = false, g = o.operatingSystem !== o.OperatingSystem.OSX_IOS || o.hardware !== o.Hardware.Desktop ? e.ctrlKey || this._ctrlKey : e.metaKey;
    o.operatingSystem === o.OperatingSystem.Windows && ("keydown" === e.type && e.ctrlKey ? e.altKey && 2 === e.location ? (new Date().getTime() - this._lastKeyEventTime < 50 && (this._hadMetaBefore || (this._blockCtrl = true)), this._hadMetaBefore = false, this._lastKeyEventTime = 0) : (this._lastKeyEventTime = new Date().getTime(), this.modifiers.metaKey ? this._hadMetaBefore = true : this._hadMetaBefore = false) : this._blockCtrl && !e.altKey && (this._blockCtrl = false)), this._blockCtrl && (g = false, r = false), g !== this.modifiers.metaKey && (n = true, this.modifiers.metaKey = g), (e.ctrlKey || this._ctrlKey) !== this.modifiers.ctrlKey && (r = true, this.modifiers.ctrlKey = e.ctrlKey || this._ctrlKey), (e.altKey || this._altKey) !== this.modifiers.optionKey && (t = true, this.modifiers.optionKey = e.altKey || this._altKey), (e.shiftKey || this._shiftKey) !== this.modifiers.shiftKey && (i = true, this.modifiers.shiftKey = e.shiftKey || this._shiftKey);
    var f = "keydown" === e.type && 32 === e.keyCode || ("keyup" !== e.type || 32 !== e.keyCode) && this.modifiers.spaceKey;
    f !== this.modifiers.spaceKey && (a = true, this.modifiers.spaceKey = f);
    var m = "keydown" === e.type && 9 === e.keyCode || ("keyup" !== e.type || 9 !== e.keyCode) && this.modifiers.tabKey;
    m !== this.modifiers.tabKey && (A = true, this.modifiers.tabKey = m), 27 === e.keyCode && ("keydown" === e.type ? (h = true, this.modifiers.escapeKey = true) : "keyup" === e.type && (h = true, this.modifiers.escapeKey = false)), o.operatingSystem === o.OperatingSystem.OSX_IOS && e.metaKey || (90 === e.keyCode && ("keydown" === e.type ? (u = true, this.modifiers.zKey = true) : "keyup" === e.type && (u = false, this.modifiers.zKey = false)), 107 !== e.keyCode && 187 !== e.keyCode || ("keydown" === e.type ? (c = true, this.modifiers.plusKey = true) : "keyup" === e.type && (c = true, this.modifiers.plusKey = false)), 109 !== e.keyCode && 189 !== e.keyCode || ("keydown" === e.type ? (p = true, this.modifiers.minusKey = true) : "keyup" === e.type && (p = true, this.modifiers.minusKey = false))), "mouseup" === e.type && e.button === l.BUTTON_MIDDLE && this.modifiers.middleButton ? (d = true, this.modifiers.middleButton = false) : "mousedown" !== e.type || e.button !== l.BUTTON_MIDDLE || this.modifiers.middleButton || (d = true, this.modifiers.middleButton = true), (n || r || t || i || n || a || h || A || c || p || u || d) && this.hasEventListeners(s) && (this._modifiersChangedEventCache.changed.metaKey = n, this._modifiersChangedEventCache.changed.ctrlKey = r, this._modifiersChangedEventCache.changed.optionKey = t, this._modifiersChangedEventCache.changed.shiftKey = i, this._modifiersChangedEventCache.changed.spaceKey = a, this._modifiersChangedEventCache.changed.escapeKey = h, this._modifiersChangedEventCache.changed.tabKey = A, this._modifiersChangedEventCache.changed.plusKey = c, this._modifiersChangedEventCache.changed.minusKey = p, this._modifiersChangedEventCache.changed.zKey = u, this._modifiersChangedEventCache.changed.middleButton = d, this._modifiersChangedEventCache.isImmediatePropagationStopped = false, this.trigger(this._modifiersChangedEventCache));
  }, A.prototype.setWebBrowser = function (e) {
    A.webBrowser = e, A.absoluteMaxImgLinearDimension = p(), A.absoluteMaxImgAreaDots = u(), A.maxPngDataSize = d(), A.maxImgDataUrlLength = g(), this._updateProperties();
  };
  var f = 0, m = [
      "ms",
      "moz",
      "webkit",
      "o"
    ];
  if ("undefined" != typeof window && !window.requestAnimationFrame)
    for (var y = 0; y < m.length; ++y)
      window.requestAnimationFrame = window[m[y] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[m[y] + "CancelAnimationFrame"];
  "undefined" == typeof window || window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
    var t = new Date().getTime(), i = Math.max(0, 16 - (t - f)), n = window.setTimeout(function () {
        e(t + i);
      }, i);
    return f = t + i, n;
  }), "undefined" == typeof window || window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
    clearTimeout(e);
  }), exports.exports = new A();
}
