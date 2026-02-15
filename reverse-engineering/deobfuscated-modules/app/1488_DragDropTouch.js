/**
 * Webpack Module #1488
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(57) /* polyfill_parseInt */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */;
    var i,
      AppSettings = require(10) /* AppSettings */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      s = _interopRequireDefault(require(565) /* module_565 */);
    !(function (e) {
      var t = (function () {
        function e() {
          (this._dropEffect = "move"),
            (this._effectAllowed = "all"),
            (this._data = {});
        }
        return (
          Object.defineProperty(e.prototype, "dropEffect", {
            get: function () {
              return this._dropEffect;
            },
            set: function (e) {
              this._dropEffect = e;
            },
            enumerable: true,
            configurable: true,
          }),
          Object.defineProperty(e.prototype, "effectAllowed", {
            get: function () {
              return this._effectAllowed;
            },
            set: function (e) {
              this._effectAllowed = e;
            },
            enumerable: true,
            configurable: true,
          }),
          Object.defineProperty(e.prototype, "types", {
            get: function () {
              return Object.keys(this._data);
            },
            enumerable: true,
            configurable: true,
          }),
          (e.prototype.clearData = function (e) {
            null != e ? delete this._data[e] : (this._data = null);
          }),
          (e.prototype.getData = function (e) {
            return this._data[e] || "";
          }),
          (e.prototype.setData = function (e, t) {
            this._data[e] = t;
          }),
          (e.prototype.setDragImage = function (e, t, _interopRequireDefault) {
            var i = n._instance;
            (i._imgCustom = e), (i._imgOffset = { x: t, y: _interopRequireDefault });
          }),
          e
        );
      })();
      e.DataTransfer = t;
      var n = (function () {
        function e() {
          if (e._instance) throw "DragDropTouch instance already created.";
          var t = (0, CollaborationMergeUtils.isPassiveSupported)();
          if ("ontouchstart" in document || "undefined" != typeof TouchEvent) {
            (this._documentTouchStart = this._documentTouchStart.bind(this)),
              (this._documentTouchEnd = this._documentTouchEnd.bind(this)),
              (this._documentDragStart = this._documentDragStart.bind(this)),
              document.addEventListener(
                "touchstart",
                this._documentTouchStart,
                !t || { passive: true, capture: true }
              ),
              document.addEventListener(
                "touchend",
                this._documentTouchEnd,
                !t || { passive: true, capture: true }
              ),
              document.addEventListener(
                "touchcancel",
                this._documentTouchEnd,
                !t || { passive: true, capture: true }
              ),
              document.addEventListener(
                "dragstart",
                this._documentDragStart,
                true
              );
            var n = document;
            (this._touchstart = this._touchstart.bind(this)),
              (this._touchmove = this._touchmove.bind(this)),
              (this._touchend = this._touchend.bind(this));
            var _interopRequireDefault = !!t && { passive: false, capture: false };
            n.addEventListener("touchstart", this._touchstart, _interopRequireDefault);
          }
        }
        return (
          (e.getInstance = function () {
            return e._instance;
          }),
          (e.prototype._touching = false),
          (e.prototype._documentTouchStart = function (e) {
            e.isTrusted && (this._touching = true);
          }),
          (e.prototype._documentTouchEnd = function (e) {
            e.isTrusted && ((this._touching = false), this._touchend(e));
          }),
          (e.prototype._documentDragStart = function (e) {
            e.isTrusted &&
              this._touching &&
              e.cancelable &&
              (e.preventDefault(), e.stopPropagation());
          }),
          (e.prototype._touchstart = function (t) {
            var n = this;
            if (this._shouldHandle(t)) {
              this._reset();
              var _interopRequireDefault = this._closestDraggable(t.target);
              _interopRequireDefault &&
                ((e._ISPRESSHOLDMODE =
                  parseInt(_interopRequireDefault.dataset.dragMode) === s.default.PRESS_AND_HOLD),
                (this._dragSource = _interopRequireDefault),
                this._updateImageOffset(t),
                (this._startTouchTime = new Date().getTime()),
                (this._ptDown = this._getPoint(t)),
                (this._lastTouch = t),
                this._dragSource.addEventListener(
                  "touchmove",
                  this._touchmove,
                  true
                ),
                this._dragSource.addEventListener(
                  "touchend",
                  this._touchend,
                  true
                ),
                this._dragSource.addEventListener(
                  "touchcancel",
                  this._touchend,
                  true
                ),
                e._ISPRESSHOLDMODE &&
                  (this._pressHoldInterval = setTimeout(function () {
                    (n._isDragEnabled = true),
                      (n._dragInitEvent = t),
                      n._touchmove(t);
                  }, e._PRESSHOLDAWAIT)));
            }
          }),
          (e.prototype._touchmove = function (t) {
            if (this._shouldCancelPressHoldMove(t)) this._reset();
            else if (
              this._shouldHandleMove(t) ||
              this._shouldHandlePressHoldMove(t)
            ) {
              var n = this._getTarget(t);
              if (
                (!this._img &&
                  this._dragSource &&
                  (t.cancelable && t.preventDefault(),
                  e._ISPRESSHOLDMODE &&
                    (this._dispatchEvent(
                      this._dragInitEvent || t,
                      "draginit",
                      this._dragSource
                    ),
                    this._dragSource.classList.add("g-draggable"),
                    this._dragSource.parentElement &&
                      this._dragSource.parentElement.classList.add(
                        "g-draggable-parent"
                      ))),
                !this._img && this._dragSource && this._shouldStartDragging(t))
              )
                t.cancelable && t.preventDefault(),
                  this._dragSource.classList.remove("g-draggable"),
                  this._dragSource.parentElement &&
                    this._dragSource.parentElement.classList.remove(
                      "g-draggable-parent"
                    ),
                  this._dispatchEvent(t, "dragstart", this._dragSource) ||
                    (this._createImage(t),
                    this._dispatchEvent(t, "dragenter", n));
              if (this._img) {
                const e = gDesigner.getContextMenu();
                e && e.close(),
                  (this._lastTouch = t),
                  t.cancelable && t.preventDefault(),
                  this._dispatchEvent(t, "drag", this._dragSource),
                  n != this._lastTarget &&
                    (this._dispatchEvent(t, "dragenter", n),
                    this._dispatchEvent(
                      this._lastTouch,
                      "dragleave",
                      this._lastTarget
                    ),
                    (this._lastTarget = n)),
                  this._moveImage(t),
                  (this._isDropZone = this._dispatchEvent(t, "dragover", n));
              }
            } else this._img && this._destroyImage();
          }),
          (e.prototype._touchend = function (e) {
            try {
              this._shouldHandle(e) &&
                this._dragSource &&
                ("touchcancel" !== e.type &&
                  this._isDropZone &&
                  this._dispatchEvent(
                    this._lastTouch,
                    "drop",
                    this._lastTarget
                  ),
                this._dispatchEvent(
                  this._lastTouch,
                  "dragend",
                  this._dragSource
                ));
            } finally {
              this._reset();
            }
          }),
          (e.prototype._shouldHandle = function (e) {
            if (e.touches && 1 === e.touches.length) {
              var t = e.touches[0] && e.touches[0].target;
              if (t && t.hasAttribute("draggable") && !t.draggable) return false;
            }
            return (
              e && !e.defaultPrevented && e.touches && e.touches.length < 2
            );
          }),
          (e.prototype._shouldHandleMove = function (t) {
            return !e._ISPRESSHOLDMODE && t.cancelable && this._shouldHandle(t);
          }),
          (e.prototype._shouldHandlePressHoldMove = function (t) {
            return (
              e._ISPRESSHOLDMODE &&
              this._isDragEnabled &&
              t &&
              t.touches &&
              t.touches.length
            );
          }),
          (e.prototype._shouldCancelPressHoldMove = function (t) {
            return (
              e._ISPRESSHOLDMODE &&
              !this._isDragEnabled &&
              this._getDelta(t) > e._PRESSHOLDMARGIN
            );
          }),
          (e.prototype._shouldStartDragging = function (t) {
            var n = this._getDelta(t);
            return (
              (n > e.DRAG_MOVE_THRESHOLD &&
                n <= e.DRAG_MOVE_LIMIT &&
                new Date().getTime() - this._startTouchTime >=
                  e.DRAG_MOVE_DELAY) ||
              (e._ISPRESSHOLDMODE && n >= e._PRESSHOLDTHRESHOLD)
            );
          }),
          (e.prototype._reset = function () {
            this._destroyImage(),
              this._dragSource &&
                (this._dragSource.classList.remove("g-draggable"),
                this._dragSource.parentElement &&
                  this._dragSource.parentElement.classList.remove(
                    "g-draggable-parent"
                  ),
                this._dragSource.removeEventListener(
                  "touchmove",
                  this._touchmove
                ),
                this._dragSource.removeEventListener(
                  "touchend",
                  this._touchend
                ),
                this._dragSource.removeEventListener(
                  "touchcancel",
                  this._touchend
                )),
              (this._dragSource = null),
              (this._startTouchTime = 0),
              (this._lastTouch = null),
              (this._lastTarget = null),
              (this._ptDown = null),
              (this._isDragEnabled = false),
              (this._isDropZone = false),
              (this._dataTransfer = new t()),
              this._pressHoldInterval && clearTimeout(this._pressHoldInterval);
          }),
          (e.prototype._getPoint = function (e, t) {
            return (
              e && e.touches && (e = e.touches[0]),
              { x: t ? e.pageX : e.clientX, y: t ? e.pageY : e.clientY }
            );
          }),
          (e.prototype._getDelta = function (t) {
            if (e._ISPRESSHOLDMODE && !this._ptDown) return 0;
            var n = this._getPoint(t);
            return (
              Math.abs(n.x - this._ptDown.x) + Math.abs(n.y - this._ptDown.y)
            );
          }),
          (e.prototype._getTarget = function (e) {
            for (
              var t = this._getPoint(e),
                n = document.elementFromPoint(t.x, t.y);
              n && "none" == getComputedStyle(n).pointerEvents;

            )
              n = n.parentElement;
            return n;
          }),
          (e.prototype._translate = function (e, t, n) {
            e.style.transform = "translate3d("
              .concat(t, "px, ")
              .concat(n, "px, 0px)");
          }),
          (e.prototype._createImage = function (t) {
            this._img && this._destroyImage();
            var n = this._imgCustom || this._dragSource;
            (this._img = n.cloneNode(true)),
              this._copyStyle(n, this._img),
              e._ISPRESSHOLDMODE &&
                this._img.classList.add("g-draggable-drag-image"),
              (this._img.style.left = this._img.style.top = "0px"),
              this._translate(this._img, -9999, -9999);
            var _interopRequireDefault = this._img.style;
            (_interopRequireDefault.position = "absolute"),
              (_interopRequireDefault.pointerEvents = "none"),
              (_interopRequireDefault["touch-action"] = "none"),
              (_interopRequireDefault.zIndex = "999999"),
              this._imgCustom ||
                (this._img.style.opacity = e._OPACITY.toString()),
              this._moveImage(t),
              document.body.appendChild(this._img);
          }),
          (e.prototype._updateImageOffset = function (e) {
            var t = (
                this._imgCustom || this._dragSource
              ).getBoundingClientRect(),
              n = this._getPoint(e);
            this._imgOffset = { x: n.x - t.left, y: n.y - t.top };
          }),
          (e.prototype._destroyImage = function () {
            this._img &&
              this._img.parentElement &&
              this._img.parentElement.removeChild(this._img),
              (this._img = null),
              (this._imgCustom = null);
          }),
          (e.prototype._moveImage = function (e) {
            if (this._img) {
              var t = this._getPoint(e);
              this._translate(
                this._img,
                t.x - this._imgOffset.x,
                t.y - this._imgOffset.y
              );
            }
          }),
          (e.prototype._copyProps = function (e, t, n) {
            for (var _interopRequireDefault = 0; _interopRequireDefault < n.length; _interopRequireDefault++) {
              var i = n[_interopRequireDefault];
              e[i] = t[i];
            }
          }),
          (e.prototype._copyStyle = function (t, n) {
            if (
              (e._rmvAtts.forEach(function (e) {
                n.removeAttribute(e);
              }),
              n.classList.add(e._CUSTOM_DRAGGING_ELEMENT_CLASS),
              t instanceof HTMLCanvasElement)
            ) {
              var _interopRequireDefault = t,
                i = n;
              (i.width = _interopRequireDefault.width),
                (i.height = _interopRequireDefault.height),
                i.getContext("2d").drawImage(_interopRequireDefault, 0, 0);
            }
            for (var AppSettings = getComputedStyle(t), CollaborationMergeUtils = 0; CollaborationMergeUtils < AppSettings.length; CollaborationMergeUtils++) {
              var s = AppSettings[CollaborationMergeUtils];
              s.indexOf("transition") < 0 && (n.style[s] = AppSettings[s]);
            }
            n.style.pointerEvents = "none";
            for (CollaborationMergeUtils = 0; CollaborationMergeUtils < t.children.length; CollaborationMergeUtils++)
              this._copyStyle(t.children[CollaborationMergeUtils], n.children[CollaborationMergeUtils]);
          }),
          (e.prototype._dispatchEvent = function (t, n, _interopRequireDefault) {
            try {
              if (t && _interopRequireDefault) {
                var i = document.createEvent("Event"),
                  AppSettings = t.touches ? t.touches[0] : t;
                if (
                  (i.initEvent(n, true, true),
                  (i.button = 0),
                  (i.which = i.buttons = 1),
                  this._copyProps(i, t, e._kbdProps),
                  this._copyProps(i, AppSettings, e._ptProps),
                  (i.dataTransfer = this._dataTransfer),
                  !i.layerX && !i.layerY)
                ) {
                  var CollaborationMergeUtils = _interopRequireDefault.getBoundingClientRect(),
                    s = i.clientX - CollaborationMergeUtils.left,
                    l = i.clientY - CollaborationMergeUtils.top;
                  (i.layerX = s), (i.layerY = l);
                }
                const c = _interopRequireDefault.dispatchEvent(i);
                return i.defaultPrevented || false === c;
              }
            } catch (t) {
              console.warn("DragDropTouch dispatch event error", t);
            }
            return false;
          }),
          (e.prototype._closestDraggable = function (e) {
            for (; e; e = e.parentElement)
              if (e.hasAttribute("draggable") && e.draggable) return e;
            return null;
          }),
          e
        );
      })();
      (n._instance = new n()),
        (n._OPACITY = 0.5),
        (n._ISPRESSHOLDMODE = false),
        (n._PRESSHOLDAWAIT = AppSettings.LONG_PRESS_TIME_OUT),
        (n._PRESSHOLDMARGIN = 25),
        (n._PRESSHOLDTHRESHOLD = AppSettings.MIN_TOUCH_MOVE_DISTANCE),
        (n.DRAG_MOVE_THRESHOLD = AppSettings.MIN_TOUCH_MOVE_DISTANCE || 0),
        (n.DRAG_MOVE_LIMIT = 25),
        (n.DRAG_MOVE_DELAY = 100),
        (n._rmvAtts = "draggable".split(",")),
        (n._CUSTOM_DRAGGING_ELEMENT_CLASS = "g-dragging-shadow-element"),
        (n._kbdProps = "altKey,ctrlKey,metaKey,shiftKey".split(",")),
        (n._ptProps = "pageX,pageY,clientX,clientY,screenX,screenY".split(",")),
        (e.DragDropTouch = n);
    })(i || (i = {}));
  }