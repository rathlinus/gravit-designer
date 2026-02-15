/**
 * Webpack Module #1699
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var CollaborationMergeUtils = require(40);
  class i {
    constructor(e, t, n) {
      ((this.element = e),
      (this.mouseMoveCallback = t || CollaborationMergeUtils.fakeFunction),
      (this.mouseUpCallback = n || CollaborationMergeUtils.fakeFunction),
      this.init());
    }

    init() {
    ((this._handleMouseDown = this._handleMouseDown.bind(this)),
      (this._onDragStart = this._onDragStart.bind(this)),
      (this._onMouseUp = this._onMouseUp.bind(this)),
      (this._onMouseMove = this._onMouseMove.bind(this)),
      this.element.addEventListener('mousedown', this._handleMouseDown),
      (this.element.style.position = 'absolute'));
  }

    _updateElementOffset(e, t) {
      const require = this.element.getBoundingClientRect();
      ((this._offsetX = e - require.left), (this._offsetY = t - require.top));
    }

    _resetElementOffset() {
      ((this._offsetX = 0), (this._offsetY = 0));
    }

    _hasElementOffset() {
      return !!this._offsetX && !!this._offsetY;
    }

    _handleMouseDown(e) {
      (e.preventDefault(),
        e.stopPropagation(),
        this._resetElementOffset(),
        document.addEventListener('mousemove', this._onMouseMove),
        document.addEventListener('mouseup', this._onMouseUp),
        this.element.addEventListener('dragstart', this._onDragStart),
        this.moveTo(e.pageX, e.pageY));
    }

    moveTo(e, t, n) {
      (n ? this._resetElementOffset() : this._hasElementOffset() || this._updateElementOffset(e, t),
        this.mouseMoveCallback({
          elementX: e - this._offsetX,
          elementY: t - this._offsetY,
          centerX: e - this._offsetX / 2,
          centerY: t - this._offsetY / 2,
          pageX: e,
          pageY: t,
        }));
    }

    _onMouseMove(e) {
      this.moveTo(e.pageX, e.pageY);
    }

    _onDragStart() {
      return false;
    }

    _onMouseUp(e) {
      (this.unmount(), this.mouseUpCallback(e));
    }

    unmount() {
      (document.removeEventListener('mousemove', this._onMouseMove),
        document.removeEventListener('mouseup', this._onMouseUp),
        this.element.removeEventListener('mousedown', this._handleMouseDown),
        this.element.removeEventListener('dragstart', this._onDragStart));
    }

  }
  exports.exports = i;
}