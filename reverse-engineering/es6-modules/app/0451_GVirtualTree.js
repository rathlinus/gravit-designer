/**
 * Webpack Module #451
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(1352) /* stub_requires_1707 */,
    require(13)) /* stub_requires_679 */;
  var GCore = require(1) /* GCore */,
    GVirtualList = require(1709);
  class a {
    parent = null;
    previous = null;
    next = null;
    firstChild = null;
    lastChild = null;
    expanded = false;
    dragging = false;
    row = null;

    acceptChildren(e, t, n, GCore) {
      var GVirtualList,
        a = !GCore;
      if (!t || this.expanded)
        if (n)
          for (var r = this.lastChild; null != r; r = r.previous) {
            if (false === (GVirtualList = r.accept(e, t, n, GCore)) && !GCore) return false;
            true === GVirtualList && GCore && (a = true);
          }
        else
          for (r = this.firstChild; null != r; r = r.next) {
            if (false === (GVirtualList = r.accept(e, t, n, GCore)) && !GCore) return false;
            true === GVirtualList && GCore && (a = true);
          }
      return a;
    }

    accept(e, t, n, GCore) {
      return false !== e.call(null, this) && this.acceptChildren(e, t, n, GCore);
    }

    getNestLevel() {
      for (
        var exports = 0, module = this.parent;
        null != module && module instanceof a;
        module = module.parent
      )
        ++exports;
      return exports;
    }

    isVisible() {
      for (var exports = this.parent; exports instanceof a; ) {
        if (!exports.expanded) return false;
        exports = exports.parent;
      }
      return true;
    }

    handleChange(e, t) {
      (e != a._Change.ExpandedSet && e != a._Change.ExpandedRemoved) ||
        (this.parent && this.parent.handleChange(e, t));
    }

    handleExpand(e) {
      e.target.id === s.COLLAPSE_ID && this.expanded
        ? ((this.expanded = false), this.handleChange(a._Change.ExpandedSet, this))
        : e.target.id !== s.EXPAND_ID ||
          this.expanded ||
          ((this.expanded = true), this.handleChange(a._Change.ExpandedRemoved, this));
    }

    getNodeCount() {
      var e = 0;
      return (
        this.accept(function (t) {
          return (++e, true);
        }, false),
        e
      );
    }

    getBBox() {
      if (this.row) {
        const e = this.row.getBoundingClientRect();
        return new GCore.GRect(e.x, e.y, e.width, e.height);
      }
      return new GCore.GRect(0, 0, 0, 0);
    }

    getNextFocusableNode() {
      return this.expanded
        ? this.firstChild
        : this.next ||
            (this.parent && this.parent.next) ||
            (this.parent.row ? this.parent.parent.firstChild : this.parent.firstChild);
    }

    getPreviousFocusableNode() {
      return this.previous && this.previous.expanded
        ? this.previous.lastChild
        : !this.previous && this.parent.expanded && this.parent.row
          ? this.parent
          : this.previous ||
            (this.parent.lastChild.expanded
              ? this.parent.lastChild.lastChild
              : this.parent.lastChild);
    }

    setDragging(e) {
      this.accept((t) => {
        t.dragging = e;
      });
    }

    toString() {
      return '[GVirtualTreeNode]';
    }

    static _Change = { ExpandedSet: 1, ExpandedRemoved: 2 };

  }
  class r {
    constructor(e, t) {
      ((this.id = e), (this.expanded = t));
    }

    id = null;
    expanded = undefined;

  }
  class s {
    constructor(e, t, n, GCore, r, c, d, u, p, g, h, f, m, y, v, _, b, w, C, x, S, E, A) {
      ((this._root = new a()),
      (this._root.expanded = true),
      (this._root.parent = this),
      (this._rootIndentation = x || 15),
      (this._indentation = S || 15),
      (this._bottomPadding = E || 0),
      GVirtualList.call(this, e, t, 0, 0),
      this._container.classList.add('g-virtual-tree'),
      (this._rowStyle = n || s.DEFAULT_ROW_STYLE),
      (this._freeHeight = isNaN(d) ? s.DEFAULT_FREEZONE_HEIGHT : d),
      (this._insertIntoStyle = u || s.DEFAULT_INSERTINTO_STYLE),
      (this._upSeparatorSpan1Style = v || s.DEFAULT_UP_SEPARATOR_SPAN1_STYLE),
      (this._downSeparatorSpan1Style = b || s.DEFAULT_DOWN_SEPARATOR_SPAN1_STYLE),
      this._initComputedVals(),
      r && (this._expandStyle = r),
      GCore && (this._expandRenderer = GCore),
      c && (this._separatorRenderer = c),
      _ && (this._upSeparatorSpan2Style = _),
      w && (this._downSeparatorSpan2Style = w),
      p && (this._dropAllowedCallback = p),
      g && (this._dropCallback = g),
      h && f && ((this._isDuplicateEffectCallback = h), (this._duplicateCallback = f)),
      m && (this._clickCallback = m),
      y && (this._expandCallback = y),
      A && (this._renderFinishCallback = A),
      (this._putLastChildWhenInside = !!C),
      (this._aScroll = new l(this._container, 200, 10, null, 7)),
      (this._drag = this._drag.bind(this)));
    }

    _root = null;
    _nodeCount = 0;
    _rowStyle = null;
    _rootIndentation = 15;
    _indentation = 21;
    _bottomPadding = 0;
    _containerWidth = 0;
    _expandedWidth = 0;
    _expandStyle = null;
    _dragNodes = null;
    _freeHeight = 0;
    _upSeparatorStyle = null;
    _downSeparatorStyle = null;
    _insertIntoStyle = null;
    _downSepHeight = 0;
    _dropAllowedCallback = null;
    _dropCallback = null;
    _renderFinishCallback = null;
    _dragStartPt = null;
    _dragLastPt = null;
    _dragBBox = null;
    _dragNode = null;
    _dragAndDropHelper = null;
    _animatedDragEnabled = false;
    _dragByMouse = false;
    _isDuplicateEffectCallback = null;
    _duplicateCallback = null;
    _clickCallback = null;
    _expandCallback = null;
    _putLastChildWhenInside = false;
    _invalidationRequestTimerId = null;
    _focusTimerId = null;
    _updateMarksTimerId = null;
    _aScroll = null;
    _freeZone = null;
    _lastVisitedDroppable = null;

    endUpdate(e) {
      0 == --this._updateCounter && this.requestInvalidation(e);
    }

    refresh() {
      (this._initComputedVals(), this.requestInvalidation(true));
    }

    expandAndFocus(e, t) {
      for (var require = 0, GCore = e; GCore.parent && GCore.parent !== this._root; )
        (GCore = GCore.parent).expanded ||
          ((GCore.expanded = true), this._expandCallback && this._expandCallback(GCore));
      if (this._focusTimerId) return false;
      (this._root.acceptChildren(function (t) {
        return t !== e && (require++, true);
      }, true),
        t || this.invalidate());
      var GVirtualList = require * this._rowHeight,
        a = this._container.scrollTop;
      return (
        0 === this._visibleRows && this._updateVisibleRows(),
        (a > GVirtualList || GVirtualList - a >= this._rowHeight * this._visibleRows) &&
          (this._focusTimerId = setTimeout(
            function () {
              ((this._container.scrollTop = GVirtualList), (this._focusTimerId = null));
            }.bind(this, 50)
          )),
        true
      );
    }

    requestInvalidation(e) {
      e
        ? this._updateCounter ||
          (this.invalidate(), this._renderFinishCallback && this._renderFinishCallback())
        : this._updateCounter ||
          (null === this._invalidationRequestTimerId &&
            (this._invalidationRequestTimerId = setTimeout(
              function () {
                (this.requestInvalidation(true), (this._invalidationRequestTimerId = null));
              }.bind(this),
              25
            )));
    }

    handleChange(e, t) {
      (e != a._Change.ExpandedSet && e != a._Change.ExpandedRemoved) ||
        this.requestInvalidation(true);
    }

    invalidate() {
      (this._updateRowCount(),
        this._updateVisibleRows(),
        this._updateScroller(),
        this._requestViewportClean(),
        this._render(),
        (this._lastRenderScrollTop = this._container.scrollTop));
    }

    getNextNode(e, t) {
      var n = e,
        GCore = null;
      if (t) for (; n.parent instanceof a && !n.parent.expanded; ) n = n.parent;
      if (
        (!n.firstChild || (t && !n.expanded) || (GCore = n.firstChild),
        !GCore && n.next && (GCore = n.next),
        !GCore)
      )
        for (
          var GVirtualList = n.parent;
          !GCore && GVirtualList instanceof a && GVirtualList !== this._root;
          GVirtualList = GVirtualList.parent
        )
          GVirtualList.next && (GCore = GVirtualList.next);
      return GCore;
    }

    appendNode(e, t) {
      return this._insertNodeBefore(e || this._root, null, t);
    }

    prependNode(e, t) {
      return this._insertNodeBefore(e || this._root, e ? e.firstChild : this._root.firstChild, t);
    }

    insertNodeBefore(e, t) {
      return this._insertNodeBefore(e.parent, e, t);
    }

    insertNodeAfter(e, t) {
      return this._insertNodeBefore(e.parent, e.next ? e.next : null, t);
    }

    removeNode(e) {
      (e.parent &&
        (e.parent.firstChild == e && (e.parent.firstChild = e.next),
        e.parent.lastChild == e && (e.parent.lastChild = e.previous)),
        null != e.previous && (e.previous.next = e.next),
        null != e.next && (e.next.previous = e.previous));
      var t = e.parent;
      t &&
        ((e.parent = null),
        (e.previous = null),
        (e.next = null),
        e.firstChild ? (this._nodeCount -= e.getNodeCount()) : --this._nodeCount,
        e.expanded && e.firstChild ? this._updateRowCount() : t.expanded && --this._rowCount,
        t.expanded &&
          !t.firstChild &&
          t !== this._root &&
          t.expanded &&
          (t.handleChange(a._Change.ExpandedRemoved, t),
          (t.expanded = false),
          this._expandCallback && this._expandCallback(t)),
        t.expanded && this.requestInvalidation());
    }

    clean() {
      ((this._nodeCount = 0),
        (this._rowCount = 0),
        (this._root = new a()),
        (this._root.expanded = true),
        (this._root.parent = this),
        (this._dragNodes = null),
        this.requestInvalidation(true));
    }

    acceptChildren(e, t, n, GCore) {
      return this._root.acceptChildren(e, t, n, GCore);
    }

    getLastVisitedDroppable() {
      return this._lastVisitedDroppable;
    }

    _updateScroller() {
      ((this._scroller.style.height =
        (this._rowCount * this._rowHeight + this._freeHeight).toString() + 'px'),
        this._scroller.scrollHeight < this._container.clientHeight
          ? (this._scroller.style.borderRight = 'none')
          : (this._scroller.style.borderRight = ''));
    }

    _isDragging() {
      return !!this._dragNode;
    }

    _renderViewport(e) {
      const module = !this.isAnimatedDragEnabled() || !this._isDragging();
      if (module) {
        ((this._freeZone = null), (this._lastVisitedDroppable = null));
        for (var require = 1, GCore = this._container.childNodes.length; require < GCore; require++)
          ((this._container.childNodes[require].style.display = 'none'),
            this._container.childNodes[require].setAttribute('data-clean', ''));
      }
      if (this._rowCount && this._renderer && this._rowHeight) {
        for (
          var GVirtualList = Math.min(this._rowCount, e + this._cachedRows),
            a = document.createDocumentFragment(),
            r = new s.IdxIterator(this, e + 1, GVirtualList, true),
            l = e,
            c = r.getFirstNode();
          null != c;
          c = r.getNext(), ++l
        ) {
          const e = c.row;
          var d = !module && e ? e : document.createElement('div');
          ((d.id = s.ROW_ID),
            d.classList.add(this._rowStyle),
            (d.style.top = (l * this._rowHeight).toString() + 'px'));
          var u = this._rootIndentation + this._indentation * (c.getNestLevel() - 1);
          if (((d.style.paddingLeft = u.toString() + 'px'), c.expanded || c.firstChild)) {
            var p = document.createElement('span');
            (c.expanded ? (p.id = s.COLLAPSE_ID) : (p.id = s.EXPAND_ID),
              this._expandStyle && p.classList.add(this._expandStyle),
              this._expandRenderer(p),
              (!module && e) || d.appendChild(p));
          }
          (this.isAnimatedDragEnabled()
            ? (d.classList.add('g-drag-vrow'),
              d.classList.toggle('g-drag-mouse', !!this._dragByMouse),
              d.classList.toggle('g-dragging', !!c.dragging))
            : (d.classList.remove('g-drag-vrow'),
              d.classList.remove('g-drag-mouse'),
              d.classList.remove('g-dragging')),
            module || !e
              ? (d.addEventListener('click', this._nodeClick.bind(this, c)),
                d.setAttribute('draggable', true),
                d.addEventListener('draginit', this._nodeDragInit.bind(this, c)),
                d.addEventListener('dragstart', this._nodeDragStart.bind(this, c)),
                d.addEventListener('dragend', this._nodeDragEnd.bind(this, c)),
                this.isAnimatedDragEnabled() ||
                  (d.addEventListener('dragenter', this._nodeDragEnter.bind(this, c)),
                  d.addEventListener('dragover', this._nodeDragOver.bind(this, c)),
                  d.addEventListener('dragleave', this._nodeDragLeave.bind(this, c)),
                  d.addEventListener('dragexit', this._nodeDragExit.bind(this, c)),
                  d.addEventListener('drop', this._nodeDrop.bind(this, c))),
                (d._specCounter = 0),
                (d._hasStyle = false),
                (c.row = d),
                this._renderer(c, d),
                a.appendChild(d))
              : module ||
                (d.hasAttribute('data-clean') &&
                  (d.removeAttribute('data-clean'), (d.style.display = '')),
                d.parentNode || a.appendChild(d)));
        }
        if (GVirtualList == this._rowCount && !this.isAnimatedDragEnabled()) {
          var g = document.createElement('div');
          ((g.style.position = 'absolute'),
            (g.style.height = this._freeHeight.toString() + 'px'),
            (g.style.top = (GVirtualList * this._rowHeight).toString() + 'px'),
            g.addEventListener('dragenter', this._nodeDragEnter.bind(this, this._root)),
            g.addEventListener('dragover', this._nodeDragOver.bind(this, this._root)),
            g.addEventListener('dragleave', this._nodeDragLeave.bind(this, this._root)),
            g.addEventListener('drop', this._nodeDrop.bind(this, this._root)),
            a.appendChild(g),
            (this._freeZone = g));
        }
        (this._container.appendChild(a), (this._expandedWidth = this._container.scrollWidth));
        for (require = 1, GCore = this._container.childNodes.length; require < GCore; require++)
          if ('none' !== this._container.childNodes[require].style.display) {
            getComputedStyle(this._container.childNodes[require]);
            this._container.childNodes[require].style.width = this._expandedWidth + 'px';
          }
      }
    }

    _initComputedVals() {
      this._containerWidth = parseInt(this._container.clientWidth);
      var e = document.createElement('div');
      (e.classList.add(this._rowStyle),
        (e.style.visibility = 'hidden'),
        this._container.appendChild(e));
      var t = getComputedStyle(e),
        n = parseInt(t.height);
      this._rowHeight = (n || 20) + this._bottomPadding;
      var GCore = document.createElement('div');
      (GCore.classList.add(this._downSeparatorStyle),
        (GCore.style.display = 'none'),
        e.appendChild(GCore),
        (this._downSepHeight = parseInt(getComputedStyle(GCore).height)),
        (this._expandedWidth = this._container.scrollWidth),
        this._container.removeChild(e));
    }

    _insertNodeBefore(e, t, n) {
      return (
        (n.parent = e),
        null != t
          ? ((n.next = t),
            (n.previous = t.previous),
            (t.previous = n),
            null == n.previous ? (e.firstChild = n) : (n.previous.next = n))
          : (null != e.lastChild &&
              ((n.previous = e.lastChild), (e.lastChild.next = n), (e.lastChild = n)),
            (n.next = null)),
        null == e.firstChild && ((e.firstChild = n), (n.previous = null), (n.next = null)),
        null == n.next && (e.lastChild = n),
        n.firstChild ? (this._nodeCount += n.getNodeCount()) : ++this._nodeCount,
        n.expanded && n.firstChild ? this._updateRowCount() : e.expanded && ++this._rowCount,
        (e.expanded || (!e.expanded && e.firstChild == e.lastChild)) && this.requestInvalidation(),
        this
      );
    }

    _expandRenderer(e) {
      e.id === s.COLLAPSE_ID
        ? (e.innerHTML = '&#9660;')
        : e.id === s.EXPAND_ID && (e.innerHTML = '&#9658;');
    }

    _separatorRenderer(e, t) {
      var n = this._expandedWidth || this._container.scrollWidth;
      ((e.style.width = n.toString() + 'px'),
        (e.style.height = this._freeHeight.toString() + 'px'),
        (e.style.position = 'absolute'),
        (e.style.pointerEvents = 'none'));
      var GCore = document.createElement('span'),
        GVirtualList = null;
      (e.id == s.UPPER_SEP_ID
        ? (GCore.classList.add(this._upSeparatorSpan1Style),
          (GVirtualList = this._upSeparatorSpan2Style ? this._upSeparatorSpan2Style : null),
          (e.style.top = '0px'))
        : (GCore.classList.add(this._downSeparatorSpan1Style),
          (GVirtualList = this._downSeparatorSpan2Style ? this._downSeparatorSpan2Style : null),
          (e.style.top = (this._rowHeight - this._freeHeight).toString() + 'px')),
        e.appendChild(GCore));
      getComputedStyle(GCore);
      if (GVirtualList) {
        var a = document.createElement('span');
        (a.classList.add(GVirtualList), e.appendChild(a));
      }
    }

    _updateRowCount() {
      var e = 0;
      (this._root.acceptChildren(function (t) {
        return (++e, true);
      }, true),
        (this._rowCount = e));
    }

    _getNodeByIdx(e, t) {
      var n = 0,
        GCore = null;
      return (
        this._root.acceptChildren(function (t) {
          return ++n != e || ((GCore = t), false);
        }, t),
        GCore
      );
    }

    _nodeHasSomeParent(e, t) {
      for (
        var require = false, GCore = e.parent;
        GCore && GCore instanceof a && !require;
        GCore = GCore.parent
      )
        require = GCore === t;
      return require;
    }

    _nodeClick(e, t) {
      (!e.expanded && !e.firstChild) ||
      (t.target.id !== s.COLLAPSE_ID && t.target.id !== s.EXPAND_ID)
        ? this._clickCallback && (t.stopPropagation(), this._clickCallback(e))
        : (t.stopPropagation(), e.handleExpand(t), this._expandCallback && this._expandCallback(e));
    }

    setDragNodes(e) {
      e && e.length && (this._dragNodes = e.slice());
    }

    setAnimatedDragEnabled(e) {
      this._animatedDragEnabled !== e &&
        ((this._animatedDragEnabled = e), this.requestInvalidation(true));
    }

    isAnimatedDragEnabled() {
      return this._animatedDragEnabled;
    }

    _onScroll(e) {
      this.isAnimatedDragEnabled() && this._isDragging()
        ? e.preventDefault()
        : GVirtualList.prototype._onScroll.call(this, e);
    }

    _nodeDragInit(e, t) {
      this.isAnimatedDragEnabled() &&
        ((this._dragNode = e),
        (this._dragBBox = e.getBBox()),
        (this._dragStartPt = new GCore.GPoint(t.clientX, t.clientY)),
        (this._dragOffset = this._dragStartPt.subtract(
          this._dragBBox.getSide(GCore.GRect.Side.TOP_LEFT)
        )),
        (this._dragAndDropHelper = new s._DragAndDropHelper(this)));
    }

    _nodeDragStart(e, t) {
      (this._dragNodes || (this._dragNodes = [e]),
        t.dataTransfer.setData('text/plain', 'some_dummy_data'),
        t.target.classList.add('g-drag'),
        this.isAnimatedDragEnabled()
          ? ((this._dragByMouse = !!t.isTrusted),
            this._dragNode || this._nodeDragInit(e, t),
            document.addEventListener('drag', this._drag, true),
            e.setDragging(true),
            this.requestInvalidation(true))
          : this._aScroll.enableAScroll());
    }

    _moveDown(e, t) {
      e !== this._dragNode &&
        this._dragAndDropHelper &&
        (Math.abs(t.getY()) > this._freeHeight
          ? this._canDropInside(e) && this._dragAndDropHelper.setDroppableNodeInside(e)
          : this._canDropLower(e) && this._dragAndDropHelper.setDroppableNodeLower(e));
    }

    _moveUp(e, t) {
      e !== this._dragNode &&
        this._dragAndDropHelper &&
        (t.getY() > this._freeHeight
          ? this._canDropInside(e) && this._dragAndDropHelper.setDroppableNodeInside(e)
          : this._canDropUpper(e) && this._dragAndDropHelper.setDroppableNodeUpper(e));
    }

    _canDropUpper(e) {
      const module = this._dragNode.row === this._freeZone;
      return this._dropHereAllowed(e) && this._dropUpperAllowed(e, 0, null, module);
    }

    _canDropLower(e) {
      return this._dropHereAllowed(e) && this._dropLowerAllowed(e, this._rowHeight);
    }

    _canDropInside(e) {
      return this._dropHereAllowed(e) && e !== this._root && this._dropInsideAllowed(e);
    }

    _getOffset(e, t) {
      const require = e.getBBox().getSide(GCore.GRect.Side.TOP_LEFT);
      return t.getSide(GCore.GRect.Side.TOP_LEFT).subtract(require);
    }

    _drag(e) {
      if (!this._dragAndDropHelper) return;
      const module = new GCore.GPoint(e.clientX, e.clientY),
        require = module.subtract(this._dragLastPt || this._dragStartPt),
        GVirtualList = parseInt(require.getY());
      if (0 === GVirtualList) return;
      this._dragLastPt = new GCore.GPoint(e.clientX, e.clientY);
      const a = module.subtract(this._dragOffset),
        r = new GCore.GRect(
          a.getX(),
          a.getY(),
          this._dragBBox.getWidth(),
          this._dragBBox.getHeight()
        ),
        s = [];
      (this._root.acceptChildren((e) => {
        if (this._dragNode !== e)
          if (e.getBBox().intersectsRect(r)) s.push(e);
          else if (s.length > 0) return false;
      }, true),
        this._dragAndDropHelper.setDroppableNodeInside(null));
      const l = GVirtualList > 0;
      if (1 === s.length) {
        const e = s[0],
          t = this._getOffset(e, r);
        l ? this._moveDown(e, t) : this._moveUp(e, t);
      } else if (2 === s.length)
        if (l) {
          const e = s[1],
            t = this._getOffset(e, r);
          this._moveDown(e, t);
        } else {
          const e = s[0],
            t = this._getOffset(e, r);
          this._moveUp(e, t);
        }
    }

    _nodeDragEnd(e, t) {
      (document.removeEventListener('drag', this._drag, true),
        gDesigner.setItemDraggingState(false),
        $(t.target).closest('.g-drag').removeClass('g-drag'),
        this.isAnimatedDragEnabled() &&
          (e.setDragging(false),
          this._dragAndDropHelper.drop(),
          (this._dragNode = null),
          (this._dragAndDropHelper = null),
          this.expandAndFocus(e, true),
          this.requestInvalidation(true)));
    }

    _nodeDragEnter(e, t) {
      return (
        t.preventDefault(),
        t.stopPropagation(),
        gDesigner.setItemDraggingState(true),
        this._updateMarksTimerId && clearTimeout(this._updateMarksTimerId),
        gDesigner.isTouchEnabled()
          ? this._updateMarks(e, t.currentTarget, t.layerY, true)
          : (this._updateMarksTimerId = setTimeout(
              function (e, t, n) {
                this._updateMarks(e, t, n, true);
              }.bind(this, e, t.currentTarget, t.layerY),
              10
            )),
        (this._lastVisitedDroppable = t.currentTarget),
        false
      );
    }

    _nodeDragOver(e, t) {
      return (
        t.preventDefault(),
        t.stopPropagation(),
        this._updateMarksTimerId && clearTimeout(this._updateMarksTimerId),
        gDesigner.isTouchEnabled()
          ? this._updateMarks(e, t.currentTarget, t.layerY, false)
          : (this._updateMarksTimerId = setTimeout(
              function (e, t, n) {
                this._updateMarks(e, t, n, false);
              }.bind(this, e, t.currentTarget, t.layerY),
              10
            )),
        this._aScroll.takeOnOffAction(t),
        false
      );
    }

    _nodeDragExit(e, t) {
      $(this._container).find('.g-drag').removeClass('g-no-drop');
    }

    _nodeDragLeave(e, t) {
      return (
        t.preventDefault(),
        t.stopPropagation(),
        t.currentTarget._hasStyle &&
          (!t.currentTarget._specCounter || t.currentTarget._specCounter <= 1
            ? ((t.currentTarget._specCounter = 0),
              t.currentTarget.classList.remove(this._insertIntoStyle),
              this._rowRemoveSep(t.currentTarget, s.LOWER_SEP_ID),
              this._rowRemoveSep(t.currentTarget, s.UPPER_SEP_ID),
              this._aScroll.takeOnOffAction(t))
            : --t.currentTarget._specCounter),
        false
      );
    }

    _nodeDrop(e, t) {
      (t.preventDefault(), t.stopPropagation());
      var n = this._lastVisitedDroppable ? this._lastVisitedDroppable : t.currentTarget,
        GCore = t.layerY;
      if (((n._specCounter = 0), this._dropHereAllowed(e))) {
        (n.classList.remove(this._insertIntoStyle),
          this._rowRemoveSep(n, s.LOWER_SEP_ID),
          this._rowRemoveSep(n, s.UPPER_SEP_ID),
          (n._hasStyle = false));
        var GVirtualList = [],
          a = n === this._freeZone;
        if (this._dropUpperAllowed(e, GCore, GVirtualList, a))
          if (
            (GVirtualList.length || (GVirtualList = this._dragNodes),
            this._isDuplicateEffectCallback && this._isDuplicateEffectCallback(t))
          )
            e !== this._root
              ? this._duplicateCallback(e.parent, e, e.previous ? e.previous : null, GVirtualList)
              : this._duplicateCallback(this._root, null, a ? e.lastChild : null, GVirtualList);
          else {
            this.beginUpdate();
            for (var r = 0; r < GVirtualList.length; ++r) this.removeNode(GVirtualList[r]);
            if (e !== this._root) {
              this._dropCallback &&
                this._dropCallback(e.parent, e, e.previous ? e.previous : null, GVirtualList);
              for (r = 0; r < GVirtualList.length; ++r) this.insertNodeBefore(e, GVirtualList[r]);
            } else {
              this._dropCallback &&
                this._dropCallback(this._root, null, a ? e.lastChild : null, GVirtualList);
              for (r = 0; r < GVirtualList.length; ++r) this.appendNode(e, GVirtualList[r]);
            }
            ((this._dragNodes = null), this.endUpdate());
          }
        else if (this._dropLowerAllowed(e, GCore, GVirtualList))
          if (
            (GVirtualList.length || (GVirtualList = this._dragNodes),
            this._isDuplicateEffectCallback && this._isDuplicateEffectCallback(t))
          )
            this._duplicateCallback(e.parent, e.next ? e.next : null, e, GVirtualList);
          else {
            this.beginUpdate();
            for (r = 0; r < GVirtualList.length; ++r) this.removeNode(GVirtualList[r]);
            this._dropCallback &&
              this._dropCallback(e.parent, e.next ? e.next : null, e, GVirtualList);
            for (r = GVirtualList.length; r > 0; --r) this.insertNodeAfter(e, GVirtualList[r - 1]);
            ((this._dragNodes = null), this.endUpdate());
          }
        else if (this._dropInsideAllowed(e, GVirtualList, a))
          if (
            (GVirtualList.length || (GVirtualList = this._dragNodes),
            this._isDuplicateEffectCallback && this._isDuplicateEffectCallback(t))
          )
            this._duplicateCallback(e, null, null, GVirtualList);
          else {
            this.beginUpdate();
            for (r = 0; r < GVirtualList.length; ++r) this.removeNode(GVirtualList[r]);
            if (
              (this._dropCallback &&
                this._dropCallback(e, null, a ? e.lastChild : null, GVirtualList),
              this._putLastChildWhenInside || a)
            )
              for (r = 0; r < GVirtualList.length; ++r) this.appendNode(e, GVirtualList[r]);
            else for (r = GVirtualList.length; r > 0; --r) this.prependNode(e, GVirtualList[r - 1]);
            ((this._dragNodes = null), this.endUpdate());
          }
      }
      return ((this._dragNodes = null), this._aScroll.disableAScroll(), false);
    }

    _dropHereAllowed(e) {
      for (
        var module = this._dragNodes && this._dragNodes.length, require = 0;
        module && require < this._dragNodes.length;
        ++require
      ) {
        var GCore = this._dragNodes[require];
        module = GCore !== e && !this._nodeHasSomeParent(e, GCore);
      }
      return module;
    }

    _dropUpperAllowed(e, t, n, GCore) {
      var GVirtualList =
        t <= this._freeHeight && (this._dragNodes.length > 1 || e !== this._dragNodes[0].next);
      return (
        GVirtualList &&
          this._dropAllowedCallback &&
          (GVirtualList =
            (e !== this._root &&
              this._dropAllowedCallback(
                e.parent,
                e,
                e.previous ? e.previous : null,
                this._dragNodes,
                n
              )) ||
            (e === this._root && this._dropInsideAllowed(e, n, GCore))),
        GVirtualList
      );
    }

    _dropLowerAllowed(e, t, n) {
      var GCore =
        t >= this._rowHeight - this._freeHeight &&
        !e.expanded &&
        e !== this._root &&
        (this._dragNodes.length > 1 || this._dragNodes[0] !== e.next);
      return (
        GCore &&
          this._dropAllowedCallback &&
          (GCore = this._dropAllowedCallback(
            e.parent,
            e.next ? e.next : null,
            e,
            this._dragNodes,
            n
          )),
        GCore
      );
    }

    _dropInsideAllowed(e, t, n) {
      var GCore = n || this._putLastChildWhenInside,
        GVirtualList =
          this._dragNodes.length > 1 ||
          !(
            this._dragNodes[0].parent === e &&
            ((GCore && e.lastChild === this._dragNodes[0]) ||
              (!GCore && e.firstChild === this._dragNodes[0]))
          );
      return (
        GVirtualList &&
          this._dropAllowedCallback &&
          (GVirtualList = this._dropAllowedCallback(
            e,
            GCore ? null : e.firstChild,
            GCore ? e.lastChild : null,
            this._dragNodes,
            t
          )),
        GVirtualList
      );
    }

    _drawUpperSeparator(e, t) {
      var n = e === this._root ? 0 : e.getNestLevel() - 1;
      this._rowAddSep(t, s.UPPER_SEP_ID, n);
    }

    _drawLowerSeparator(e, t) {
      var n = e.getNestLevel() - 1;
      this._rowAddSep(t, s.LOWER_SEP_ID, n);
    }

    _updateMarks(e, t, n, GCore) {
      let GVirtualList = true;
      if (this._dropHereAllowed(e)) {
        var a = t === this._freeZone;
        this._dropUpperAllowed(e, n, null, a)
          ? ((GVirtualList = false),
            this._rowHasSep(t, s.UPPER_SEP_ID) ||
              (this._rowRemoveSep(t, s.LOWER_SEP_ID),
              (t._specCounter = 0),
              t.classList.remove(this._insertIntoStyle),
              this._drawUpperSeparator(e, t)))
          : this._dropLowerAllowed(e, n)
            ? ((GVirtualList = false),
              this._rowHasSep(t, s.LOWER_SEP_ID) ||
                (this._rowRemoveSep(t, s.UPPER_SEP_ID),
                (t._specCounter = 0),
                t.classList.remove(this._insertIntoStyle),
                this._drawLowerSeparator(e, t)))
            : e !== this._root &&
              this._dropInsideAllowed(e) &&
              ((GVirtualList = false),
              this._rowRemoveSep(t, s.LOWER_SEP_ID),
              this._rowRemoveSep(t, s.UPPER_SEP_ID),
              t.classList.add(this._insertIntoStyle),
              (t._hasStyle = true),
              GCore && (t._specCounter ? ++t._specCounter : (t._specCounter = 1)));
      }
      $(this._container).find('.g-drag').toggleClass('g-no-drop', GVirtualList);
    }

    _rowHasSep(e, t) {
      for (var require = 1, GCore = e.childNodes.length; require < GCore; require++)
        if (e.childNodes[require].id === t) return true;
      return false;
    }

    _rowAddSep(e, t, n) {
      var GCore = document.createElement('div');
      ((GCore.id = t),
        this._separatorRenderer(GCore, n),
        t == s.UPPER_SEP_ID ? e.insertBefore(GCore, e.firstChild) : e.appendChild(GCore),
        (e._hasStyle = true));
    }

    _rowRemoveSep(e, t) {
      for (var require = e.childNodes.length - 1; require >= 0; --require)
        e.childNodes[require].id === t && e.removeChild(e.childNodes[require]);
    }

    resetRowHeight(e) {
      this._rowHeight = e;
    }

    setFreeHeight(e) {
      this._freeHeight = e;
    }

    toString() {
      return '[GVirtualTree]';
    }

    static DEFAULT_ROW_STYLE = 'vrow';

    static DEFAULT_INSERTINTO_STYLE = 'insertInto';

    static DEFAULT_LINE_HEIGHT = 30;

    static DEFAULT_FREEZONE_HEIGHT = 7;

    static DEFAULT_UP_SEPARATOR_SPAN1_STYLE = 'up-separator-span1';

    static DEFAULT_DOWN_SEPARATOR_SPAN1_STYLE = 'down-separator-span1';

    static COLLAPSE_ID = 'clpsId';

    static EXPAND_ID = 'xpndId';

    static ROW_ID = 'rowId';

    static LOWER_SEP_ID = 'lsepId';

    static UPPER_SEP_ID = 'usepId';

    static IdxIterator(e, t, n, GCore) {
      ((this._vtree = e),
        (this._firstIdx = t || 1),
        (this._lastIdx = GCore
          ? n && n <= this._vtree._rowCount
            ? n
            : this._vtree._rowCount
          : n && n <= this._vtree._nodeCount
            ? n
            : this._vtree._nodeCount),
        (this._visibleOnly = !!GCore));
    }

  }
  class l {
    constructor(e, t, n, GCore, GVirtualList) {
      ((this._elem = e),
      (this._scrollDelay = t || 30),
      (this._step = n || 1),
      (this._axisFlag = GCore || l.SCROLL_AXIS_FLAG.Y | l.SCROLL_AXIS_FLAG.X),
      (this._scAreaWidth = GVirtualList || 5),
      this._fixupHandler('onmouseout', this.offScrolls.bind(this)),
      this._fixupHandler('ondragleave', this.offScrolls.bind(this)));
    }

    _elem = null;
    _timerId = null;
    _scrollDelay = null;
    _step = null;
    _axisFlag = null;
    _scAreaWidth = 0;
    _aScrollEnabled = false;
    _aScrollY = l.AUTO_SCROLL_Y.OFF;
    _aScrollX = l.AUTO_SCROLL_X.OFF;

    enableAScroll() {
      ((this._aScrollEnabled = true),
        (this._timerId = setInterval(this._tryScroll.bind(this), this._scrollDelay)));
    }

    disableAScroll() {
      ((this._aScrollEnabled = false),
        this._timerId && (clearInterval(this._timerId), (this._timerId = null)));
    }

    takeOnOffAction(e) {
      if (this._aScrollEnabled) {
        if (e.layerY == e.clientY || e.layerX == e.clientX)
          return (
            (this._aScrollY = l.AUTO_SCROLL_Y.OFF),
            void (this._aScrollX = l.AUTO_SCROLL_X.OFF)
          );
        for (
          var module = e.layerY, require = e.layerX, GCore = e.target;
          GCore != this._elem && GCore;
          GCore = GCore.offsetParent ? GCore.offsetParent : GCore.parentNode
        )
          GCore.offsetParent && ((module += GCore.offsetTop), (require += GCore.offsetLeft));
        if (!GCore) return;
        ((module -= this._elem.scrollTop),
          (require -= this._elem.scrollLeft),
          this._axisFlag & l.SCROLL_AXIS_FLAG.Y &&
            require > 0 &&
            require < this._elem.offsetWidth &&
            (module <= this._scAreaWidth
              ? (this._aScrollY = l.AUTO_SCROLL_Y.UP)
              : module >= this._elem.offsetHeight - this._scAreaWidth
                ? (this._aScrollY = l.AUTO_SCROLL_Y.DOWN)
                : (this._aScrollY = l.AUTO_SCROLL_Y.OFF)),
          this._axisFlag & l.SCROLL_AXIS_FLAG.X &&
            module > 0 &&
            module < this._elem.offsetHeight &&
            (require <= this._scAreaWidth
              ? (this._aScrollX = l.AUTO_SCROLL_X.LEFT)
              : require >= this._elem.offsetWidth - this._scAreaWidth
                ? (this._aScrollX = l.AUTO_SCROLL_X.RIGHT)
                : (this._aScrollX = l.AUTO_SCROLL_X.OFF)));
      }
    }

    offScrolls(e) {
      e.target === this._elem &&
        ((this._aScrollY = l.AUTO_SCROLL_Y.OFF), (this._aScrollX = l.AUTO_SCROLL_X.OFF));
    }

    _tryScroll() {
      if (this._aScrollY !== l.AUTO_SCROLL_Y.OFF || this._aScrollX !== l.AUTO_SCROLL_X.OFF) {
        if (this._aScrollY) {
          var exports = this._aScrollY == l.AUTO_SCROLL_Y.UP ? -1 : 1;
          this._elem.scrollTop += this._step * exports;
        }
        if (this._aScrollX) {
          var module = this._aScrollX == l.AUTO_SCROLL_X.LEFT ? -1 : 1;
          this._elem.scrollLeft += this._step * module;
        }
      }
    }

    _fixupHandler(e, t) {
      var n, GCore;
      this._elem[e]
        ? (this._elem[e] =
            ((n = t),
            (GCore = this._elem[e]),
            function () {
              return (n.apply(this, arguments), GCore.apply(this, arguments));
            }))
        : (this._elem[e] = t);
    }

    static AUTO_SCROLL_Y = { OFF: 0, UP: 1, DOWN: 2 };

    static AUTO_SCROLL_X = { OFF: 0, LEFT: 1, RIGHT: 2 };

    static SCROLL_AXIS_FLAG = { X: 1, Y: 2 };

  }
  (r.prototype = Object.create(a.prototype),
    s.prototype = Object.create(GVirtualList.prototype),
    s.IdxIterator.prototype._vtree = null,
    s.IdxIterator.prototype._firstIdx = 0,
    s.IdxIterator.prototype._lastIdx = 0,
    s.IdxIterator.prototype._visibleOnly = false,
    s.IdxIterator.prototype._curNode = null,
    s.IdxIterator.prototype._curIdx = 0,
    s.IdxIterator.prototype.getFirstNode = function () {
      return (
        this._firstIdx <= this._lastIdx
          ? ((this._curIdx = this._firstIdx),
            (this._curNode = this._vtree._getNodeByIdx(this._curIdx, this._visibleOnly)))
          : ((this._curIdx = this._lastIdx + 1), (this._curNode = null)),
        this._curNode
      );
    },
    s.IdxIterator.prototype.getNext = function () {
      return this._curIdx
        ? ((this._curIdx = this._curIdx <= this._lastIdx ? this._curIdx + 1 : this._curIdx),
          this._curIdx <= this._lastIdx && this._curNode
            ? (this._curNode = this._vtree.getNextNode(this._curNode, this._visibleOnly))
            : (this._curNode = null),
          this._curNode)
        : this.getFirstNode();
    },
    require(1710)(/* _DragAndDropHelper */ s),
    exports.exports.GVirtualTreeNode = a,
    exports.exports.GVirtualTreeNodeNamed = r,
    exports.exports.GVirtualTree = s);
}