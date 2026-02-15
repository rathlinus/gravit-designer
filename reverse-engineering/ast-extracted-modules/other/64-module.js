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

function (e, t, i) {
  var n = i(75), r = i(0), o = i(176), a = i(514), s = i(150), l = i(77), h = i(164);
  function A() {
    "undefined" != typeof document && (document.addEventListener("keydown", function (e) {
      document.activeElement && function (e) {
        var t = e.nodeName.toLowerCase();
        return !(A._allowedClassNames && e.className && A._allowedClassNames.some(function (t) {
          return e.classList.contains(t);
        })) && ("input" === t || "textarea" === t && "gravit-ime-textarea-608209" !== e.className || "button" === t || "select" === t);
      }(document.activeElement) || this._updateModifiers(e);
    }.bind(this), !0), document.addEventListener("keyup", function (e) {
      this._updateModifiers(e);
    }.bind(this), !0), document.addEventListener("mousemove", function (e) {
      this._updateModifiers(e);
    }.bind(this), !0), document.addEventListener("mousedown", function (e) {
      this._updateModifiers(e);
    }.bind(this), !0), document.addEventListener("mouseup", function (e) {
      this._updateModifiers(e);
    }.bind(this), !0)), this._updateProperties();
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
  }, A.prototype._lastKeyEventTime = 0, A.prototype._hadMetaBefore = !1, A.prototype._blockCtrl = !1, A.prototype._altKey = !1, A.prototype._ctrlKey = !1, A.prototype._shiftKey = !1, A.prototype.holdKey = function (e) {
    switch (e) {
    case h.Constant.ALT_LEFT:
    case h.Constant.ALT_RIGHT:
      this._altKey = !0;
      break;
    case h.Constant.CONTROL:
      this._ctrlKey = !0;
      break;
    case h.Constant.SHIFT:
      this._shiftKey = !0;
    }
  }, A.prototype.releaseKey = function (e) {
    switch (e) {
    case h.Constant.ALT_LEFT:
    case h.Constant.ALT_RIGHT:
      this._altKey = !1;
      break;
    case h.Constant.CONTROL:
      this._ctrlKey = !1;
      break;
    case h.Constant.SHIFT:
      this._shiftKey = !1;
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
      return !1;
    }
  }, A.prototype._updateModifiers = function (e) {
    var t = !1, i = !1, n = !1, r = !1, a = !1, h = !1, A = !1, c = !1, p = !1, u = !1, d = !1, g = o.operatingSystem !== o.OperatingSystem.OSX_IOS || o.hardware !== o.Hardware.Desktop ? e.ctrlKey || this._ctrlKey : e.metaKey;
    o.operatingSystem === o.OperatingSystem.Windows && ("keydown" === e.type && e.ctrlKey ? e.altKey && 2 === e.location ? (new Date().getTime() - this._lastKeyEventTime < 50 && (this._hadMetaBefore || (this._blockCtrl = !0)), this._hadMetaBefore = !1, this._lastKeyEventTime = 0) : (this._lastKeyEventTime = new Date().getTime(), this.modifiers.metaKey ? this._hadMetaBefore = !0 : this._hadMetaBefore = !1) : this._blockCtrl && !e.altKey && (this._blockCtrl = !1)), this._blockCtrl && (g = !1, r = !1), g !== this.modifiers.metaKey && (n = !0, this.modifiers.metaKey = g), (e.ctrlKey || this._ctrlKey) !== this.modifiers.ctrlKey && (r = !0, this.modifiers.ctrlKey = e.ctrlKey || this._ctrlKey), (e.altKey || this._altKey) !== this.modifiers.optionKey && (t = !0, this.modifiers.optionKey = e.altKey || this._altKey), (e.shiftKey || this._shiftKey) !== this.modifiers.shiftKey && (i = !0, this.modifiers.shiftKey = e.shiftKey || this._shiftKey);
    var f = "keydown" === e.type && 32 === e.keyCode || ("keyup" !== e.type || 32 !== e.keyCode) && this.modifiers.spaceKey;
    f !== this.modifiers.spaceKey && (a = !0, this.modifiers.spaceKey = f);
    var m = "keydown" === e.type && 9 === e.keyCode || ("keyup" !== e.type || 9 !== e.keyCode) && this.modifiers.tabKey;
    m !== this.modifiers.tabKey && (A = !0, this.modifiers.tabKey = m), 27 === e.keyCode && ("keydown" === e.type ? (h = !0, this.modifiers.escapeKey = !0) : "keyup" === e.type && (h = !0, this.modifiers.escapeKey = !1)), o.operatingSystem === o.OperatingSystem.OSX_IOS && e.metaKey || (90 === e.keyCode && ("keydown" === e.type ? (u = !0, this.modifiers.zKey = !0) : "keyup" === e.type && (u = !1, this.modifiers.zKey = !1)), 107 !== e.keyCode && 187 !== e.keyCode || ("keydown" === e.type ? (c = !0, this.modifiers.plusKey = !0) : "keyup" === e.type && (c = !0, this.modifiers.plusKey = !1)), 109 !== e.keyCode && 189 !== e.keyCode || ("keydown" === e.type ? (p = !0, this.modifiers.minusKey = !0) : "keyup" === e.type && (p = !0, this.modifiers.minusKey = !1))), "mouseup" === e.type && e.button === l.BUTTON_MIDDLE && this.modifiers.middleButton ? (d = !0, this.modifiers.middleButton = !1) : "mousedown" !== e.type || e.button !== l.BUTTON_MIDDLE || this.modifiers.middleButton || (d = !0, this.modifiers.middleButton = !0), (n || r || t || i || n || a || h || A || c || p || u || d) && this.hasEventListeners(s) && (this._modifiersChangedEventCache.changed.metaKey = n, this._modifiersChangedEventCache.changed.ctrlKey = r, this._modifiersChangedEventCache.changed.optionKey = t, this._modifiersChangedEventCache.changed.shiftKey = i, this._modifiersChangedEventCache.changed.spaceKey = a, this._modifiersChangedEventCache.changed.escapeKey = h, this._modifiersChangedEventCache.changed.tabKey = A, this._modifiersChangedEventCache.changed.plusKey = c, this._modifiersChangedEventCache.changed.minusKey = p, this._modifiersChangedEventCache.changed.zKey = u, this._modifiersChangedEventCache.changed.middleButton = d, this._modifiersChangedEventCache.isImmediatePropagationStopped = !1, this.trigger(this._modifiersChangedEventCache));
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
  }), e.exports = new A();
}
