/**
 * Webpack Module #1693
 * Type: class
 * Name: GLongPressEvent
 */

function (exports, module, require) {
    "use strict";
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    function s() {}
    GCore.GObject.inherit(s, GCore.GEvent),
      (s.prototype._startX = 0),
      (s.prototype._startY = 0),
      (s.prototype._timerHandle = null),
      (s.prototype._mouseMove = null),
      (s.prototype._mouseUp = null),
      (s.prototype._mouseDown = null),
      (s.prototype._isTouchDevice = false),
      (s.prototype._event = null),
      (s.prototype._touching = false),
      (s.prototype._clearRequestTimeout = function (e) {
        e &&
          (window.cancelAnimationFrame
            ? window.cancelAnimationFrame(e.value)
            : window.webkitCancelAnimationFrame
            ? window.webkitCancelAnimationFrame(e.value)
            : window.webkitCancelRequestAnimationFrame
            ? window.webkitCancelRequestAnimationFrame(e.value)
            : window.mozCancelRequestAnimationFrame
            ? window.mozCancelRequestAnimationFrame(e.value)
            : window.oCancelRequestAnimationFrame
            ? window.oCancelRequestAnimationFrame(e.value)
            : window.msCancelRequestAnimationFrame
            ? window.msCancelRequestAnimationFrame(e.value)
            : clearTimeout(e.value));
      }),
      (s.prototype._requestTimeout = function (e, t) {
        if (
          !(
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            (window.mozRequestAnimationFrame &&
              window.mozCancelRequestAnimationFrame) ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame
          )
        )
          return { value: window.setTimeout(e, t) };
        var n = new Date().getTime(),
          GCore = {},
          GEditor = function () {
            new Date().getTime() - n >= t
              ? e.call()
              : (GCore.value = requestAnimFrame(GEditor));
          };
        return (GCore.value = requestAnimFrame(GEditor)), GCore;
      }),
      (s.prototype._clearLongPressTimer = function () {
        this._clearRequestTimeout(this._timerHandle),
          (this._timerHandle = null);
      }),
      (s.prototype._cancelEvent = function (e) {
        e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation();
      }),
      (s.prototype._mouseDownHandler = function (e) {
        if (e.defaultPrevented) return void this._clearLongPressTimer();
        let { clientX: module, clientY: require } = e;
        "touchstart" === e.type &&
          e.changedTouches &&
          e.changedTouches[0] &&
          ({ clientX: module, clientY: require } = e.changedTouches[0]),
          (this._startX = module),
          (this._startY = require),
          this._startLongPressTimer(e);
      }),
      (s.prototype._startLongPressTimer = function (e) {
        this._clearLongPressTimer(), (this._event = e);
        var t = e.target,
          n = parseInt(
            t.getAttribute("data-long-press-delay") || AppSettings.LONG_PRESS_TIME_OUT,
            10
          );
        this._timerHandle = this._requestTimeout(
          this._fireLongPressEvent.bind(this),
          n
        );
      }),
      (s.prototype._fireLongPressEvent = function () {
        this._clearLongPressTimer();
        var e = this._event.target,
          t = this._isTouchDevice
            ? this._event.touches[0].clientX
            : this._event.clientX,
          n = this._isTouchDevice
            ? this._event.touches[0].clientY
            : this._event.clientY,
          GCore = e.dispatchEvent(
            new CustomEvent("long-press", {
              bubbles: true,
              cancelable: true,
              detail: { clientX: t, clientY: n },
            })
          ),
          GEditor =
            this._event.target.parentElement &&
            this._event.target.parentElement.className &&
            -1 ===
              this._event.target.parentElement.className.indexOf(
                "g-scene-widget"
              );
        if (GCore && GEditor) {
          const e = (t) => {
            t.isTrusted &&
              (document.removeEventListener("touchend", e, true),
              document.removeEventListener("mouseup", e, true),
              this._cancelEvent(t));
          };
          document.addEventListener("touchend", e, true),
            document.addEventListener("mouseup", e, true);
        }
      }),
      (s.prototype.startup = function () {
        if (
          ((this._isTouchDevice = GEditor.GPlatform.constructor.isTouchDevice),
          (this._mouseDown = this._isTouchDevice ? "touchstart" : "mousedown"),
          (this._mouseUp = this._isTouchDevice ? "touchend" : "mouseup"),
          (this._mouseMove = this._isTouchDevice ? "touchmove" : "mousemove"),
          document.addEventListener(
            this._mouseUp,
            this._clearLongPressTimer.bind(this),
            true
          ),
          document.addEventListener(
            this._mouseMove,
            this._mouseMoveHandler.bind(this),
            true
          ),
          document.addEventListener(
            "wheel",
            this._clearLongPressTimer.bind(this),
            true
          ),
          document.addEventListener(
            "scroll",
            this._clearLongPressTimer.bind(this),
            true
          ),
          document.addEventListener(
            this._mouseDown,
            this._mouseDownHandler.bind(this)
          ),
          this._isTouchDevice &&
            GEditor.GPlatform.webBrowser ===
              GEditor.GPlatform.constructor.WebBrowser.Safari)
        ) {
          const e = !(0, CollaborationMergeUtils.isPassiveSupported)() || {
            passive: true,
            capture: true,
          };
          document.addEventListener(
            "touchstart",
            this._documentTouchStart.bind(this),
            e
          ),
            document.addEventListener(
              "touchend",
              this.documentTouchEnd.bind(this),
              e
            ),
            document.addEventListener(
              "touchcancel",
              this.documentTouchEnd.bind(this),
              e
            ),
            document.addEventListener(
              "mousedown",
              this._documentMouseDown.bind(this),
              true
            );
        }
      }),
      (s.prototype._documentTouchStart = function (e) {
        e.isTrusted && (this._touching = true);
      }),
      (s.prototype.documentTouchEnd = function (e) {
        e.isTrusted && (this._touching = false);
      }),
      (s.prototype._documentMouseDown = function (e) {
        e.isTrusted &&
          this._touching &&
          e.cancelable &&
          e.stopImmediatePropagation();
      }),
      (s.prototype._mouseMoveHandler = function (e) {
        if ("touchmove" === e.type) {
          const { clientX: module, clientY: require } = e.changedTouches[0];
          if (
            Math.abs(module - this._startX) < AppSettings.MIN_TOUCH_MOVE_DISTANCE &&
            Math.abs(require - this._startY) < AppSettings.MIN_TOUCH_MOVE_DISTANCE
          )
            return;
        }
        this._clearLongPressTimer();
      }),
      (s.prototype.toString = function () {
        return "[Object GLongPressEvent]";
      }),
      new s().startup(),
      (exports.exports = s);
  }