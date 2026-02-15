/**
 * Webpack Module #1709
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  class o {
    constructor(e, t, n, o) {
      ((n = n || 0),
      (o = o || 30),
      (this._scroller = document.createElement('div')),
      this._scroller.classList.add('vscroller'),
      (this._container = e),
      (this._container.style.overflow = 'auto'),
      (this._container.style.position = 'relative'),
      this._container.classList.add('g-virtual-list'),
      this._container.appendChild(this._scroller),
      this._container.addEventListener('scroll', this._onScroll.bind(this)),
      this.beginUpdate(),
      t && this._renderer(t),
      o && this.rowHeight(o),
      n && this.rowCount(n),
      this.endUpdate());
    }

    _renderer = null;
    _rowHeight = 0;
    _rowCount = 0;
    _visibleRows = 0;
    _cachedRows = 0;
    _scroller = null;
    _updateCounter = 0;
    _lastRenderScrollTop = 0;
    _lastCleanedTime = 0;
    _cleanViewportTimerId = null;

    _renderer(e) {
      return arguments.length ? ((this._renderer = e), this._render(), this) : this._renderer;
    }

    rowHeight(e) {
      return arguments.length
        ? ((this._rowHeight = e),
          this._updateVisibleRows(),
          this._updateScroller(),
          this._render(),
          this)
        : this._rowHeight;
    }

    rowCount(e) {
      return arguments.length
        ? ((this._rowCount = e), this._updateScroller(), this._render(), this)
        : this._rowCount;
    }

    beginUpdate() {
      this._updateCounter++;
    }

    endUpdate() {
      0 == --this._updateCounter && this._render();
    }

    refresh() {
      return (this._updateVisibleRows(), this._updateScroller(), this._render(), this);
    }

    _render() {
      if (0 === this._updateCounter) {
        var exports = this._container.scrollTop,
          module = parseInt(exports / this._rowHeight) - this._visibleRows;
        this._renderViewport(module < 0 ? 0 : module);
      }
      return this;
    }

    _updateVisibleRows() {
      ((this._visibleRows = Math.floor(this._container.offsetHeight / this._rowHeight)),
        (this._cachedRows = 3 * this._visibleRows),
        (this._scrollCacheSize = this._visibleRows * this._rowHeight));
    }

    _updateScroller() {
      this._scroller.style.height = (this._rowCount * this._rowHeight).toString() + 'px';
    }

    _onScroll(e) {
      (e.preventDefault(), this._requestViewportClean());
      var t = this._container.scrollTop;
      (!this._lastRenderScrollTop ||
        Math.abs(t - this._lastRenderScrollTop) > this._scrollCacheSize) &&
        (this._updateVisibleRows(), this._render(), (this._lastRenderScrollTop = t));
    }

    _renderViewport(e) {
      for (var module = 1, require = this._container.childNodes.length; module < require; module++)
        ((this._container.childNodes[module].style.display = 'none'),
          this._container.childNodes[module].setAttribute('data-clean', ''));
      if (this._rowCount && this._renderer && this._rowHeight) {
        for (
          var o = Math.min(this._rowCount, e + this._cachedRows),
            i = document.createDocumentFragment(),
            a = e;
          a < o;
          a++
        ) {
          var r = document.createElement('div');
          (r.classList.add('vrow'),
            (r.style.top = a * this._rowHeight + 'px'),
            this._renderer(a, r),
            i.appendChild(r));
        }
        this._container.appendChild(i);
      }
    }

    _requestViewportClean() {
      null === this._cleanViewportTimerId &&
        (this._cleanViewportTimerId = setTimeout(
          function () {
            (Date.now() - this._lastCleanedTime > 100 &&
              (this._cleanViewport(), (this._lastCleanedTime = Date.now())),
              (this._cleanViewportTimerId = null));
          }.bind(this),
          300
        ));
    }

    _cleanViewport() {
      for (
        var exports = this._container.querySelectorAll('div[data-clean]'),
          module = 0,
          require = exports.length;
        module < require;
        module++
      )
        (this._container.removeChild(exports[module]), this._jqueryCleanup(exports[module]));
    }

    _jqueryCleanup(e) {
      window.hasOwnProperty('jQuery') &&
        jQuery.hasOwnProperty('cleanData') &&
        jQuery.hasOwnProperty('merge') &&
        jQuery.cleanData(jQuery.merge(Array.prototype.slice.call(e.querySelectorAll('*')), e));
    }

  }
  (require(57),
    require(3),
    exports.exports = o);
}