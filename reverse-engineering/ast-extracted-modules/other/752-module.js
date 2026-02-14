/**
 * Module 752
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
  var n = i(82), r = i(0), o = i(108), a = i(52), s = i(77), l = i(5), h = i(24), A = i(6), c = i(167), p = i(7), u = i(164), d = i(64), g = i(11), f = i(215), m = i(266), y = i(195), _ = i(9), v = i(47);
  function b(e) {
    this._toggles = {
      B: "fontWeight",
      I: "fontStyle",
      U: "underline",
      D: "strikeout"
    }, this._editor = e;
  }
  r.inherit(b, r), b.HANDLECOPYPASTE = !1, b.prototype._editor = null, b.prototype._view = null, b.prototype._textUnderMouse = !1, b.prototype._activated = !1, b.prototype._keyboardSelect = 0, b.prototype._keyboardX = null, b.prototype._nextKeyboardX = null, b.prototype._selectDragStart = null, b.prototype._focusChar = null, b.prototype._richClipboard = null, b.prototype._plainClipboard = null, b.prototype._toggles = null, b.prototype._caretInterval = 0, b.prototype._lastSelect = void 0, b.prototype._lastTimeStamp = -1, b.prototype._lastResult = !1, b.prototype._keyDownHandled = null, b.prototype._compositionOn = !1, b.prototype._lastCompositedTextLength = 0, b.prototype._compositionSelectionDelta = 0, b.IS_NON_PRINTABLE_REG = /^[\u0000-\u001f\u0080-\u009f\u2029]*$/, b.prototype.isActivated = function () {
    return this._activated;
  }, b.prototype.activate = function (e) {
    var t = this._editor.getElement().getTLCore();
    t && t.setInlineEdit(!0), this._activated = !0, this._view = e, this._textUnderMouse = !0, this.showCaretAndSelection(), this._view.setCursor(a.Text), e.addEventListener(s.Move, this._mouseMove, this), e.addEventListener(s.Down, this._mouseDown, this), e.addEventListener(s.Release, this._mouseRelease, this), e.addEventListener(s.DblClick, this._mouseDblClick, this), e.addEventListener(c.Down, this._keyDown, this), e.addEventListener(c.Release, this._keyUp, this), this._view.startCaptureInput(this._boxInput.bind(this), this._compStart.bind(this), this._compEnd.bind(this)), this._view.isCapturingInput() || e.addEventListener(c.Press, this._keyPress, this);
  }, b.prototype.deactivate = function () {
    var e = this._editor.getElement().getTLCore();
    e && e.setInlineEdit(!1), this.hideCaretAndSelection(), this._view.setCursor(null), this._activated = !1, this._view.isCapturingInput() ? this._view.endCaptureInput() : this._view.removeEventListener(c.Press, this._keyPress, this), this._view.removeEventListener(s.Move, this._mouseMove, this), this._view.removeEventListener(s.Down, this._mouseDown, this), this._view.removeEventListener(s.Release, this._mouseRelease, this), this._view.removeEventListener(s.DblClick, this._mouseDblClick, this), this._view.removeEventListener(c.Down, this._keyDown, this), this._view.removeEventListener(c.Release, this._keyUp, this), this._view = null;
  }, b.prototype.showCaretAndSelection = function () {
    if (0 === this._caretInterval) {
      var e = this._editor.getElement().getTLCore();
      if (e)
        if (void 0 === this._lastSelect) {
          var t = e.getLength() - 1;
          e.select(0, t), this._lastSelect = g.extend({}, e.getSelection());
        } else
          e.select(this._lastSelect.start, this._lastSelect.end);
      this._caretInterval = setInterval(this._editor._caretUpdate.bind(this._editor));
    }
  }, b.prototype.hasFocus = function () {
    return this._view && this._view.hasFocus();
  }, b.prototype.hideCaretAndSelection = function () {
    if (0 !== this._caretInterval) {
      var e = this._editor.getElement().getTLCore();
      e && (this._lastSelect = g.extend({}, e.getSelection()), e.select(0, 0)), clearInterval(this._caretInterval), this._caretInterval = 0;
    }
  }, b.prototype.getCaretBox = function () {
    var e = this._editor.getElement().getTLCore();
    if (!e)
      return null;
    if (0 === this._caretInterval)
      return null;
    var t = e.getSelection();
    if (t.end === t.start && this.hasFocus() && (e.isSelectionChanged() || e.isCaretVisible())) {
      var i, n = e.getCaretCoords(t.start), r = null;
      if (e.getTransformer()) {
        var o = e.getTransformer(f.TYPE) ? n.h : 0;
        i = new A(n.l, n.t - e.getVShift() - o, n.w, n.h);
        var a = e.getRenderBounds(), s = new A(0, 0, n.w, n.h), l = e.getTransformer().getMatrix(n.l, n.t, s);
        if (!l)
          return null;
        var h = new p(1, 0, 0, 1, -a.getX(), -a.getY());
        r = l.multiplied(h);
      } else
        i = new A(n.l, n.t - e.getVShift(), n.w, n.h);
      return {
        box: i,
        transform: r
      };
    }
    return null;
  }, b.prototype.getSelectionBoxes = function () {
    var e = this._editor.getElement().getTLCore();
    return e ? e.getBoxes(e.selectedRange(), function (e) {
      return !e || "inline" !== e.type;
    }) : null;
  }, b.prototype._isSelectable = function (e) {
    if (0 === e) {
      var t = this._editor.getElement().getTLCore();
      if (t) {
        var i = t.wordContainingOrdinal(e), n = i && i.word;
        if (n && n.isStartOfList())
          return !1;
      }
    }
    return !0;
  }, b.prototype._exhausted = function (e, t) {
    var i = this._editor.getElement().getTLCore();
    if (i)
      return t < 0 ? e <= 0 : e >= i.getLength() - 1;
  }, b.prototype._differentLine = function (e, t) {
    return e.b <= t.t || t.b <= e.t;
  }, b.prototype._changeLine = function (e, t) {
    var i = this._editor.getElement().getTLCore();
    if (i) {
      var n, r = i.getCaretCoords(e);
      for (this._nextKeyboardX = null !== this._keyboardX ? this._keyboardX : r.l; !this._exhausted(e, t);) {
        if (!this._isSelectable(e + t))
          return e;
        if (e += t, n = i.getCaretCoords(e), this._differentLine(n, r))
          break;
      }
      for (r = n; !this._exhausted(e, t) && !(t > 0 && n.l >= this._nextKeyboardX || t < 0 && n.l <= this._nextKeyboardX);)
        if (e += t, n = i.getCaretCoords(e), this._differentLine(n, r)) {
          e -= t;
          break;
        }
      return e;
    }
  }, b.prototype._endOfline = function (e, t) {
    var i = this._editor.getElement().getTLCore();
    if (i) {
      for (var n, r = i.getCaretCoords(e); !this._exhausted(e, t);)
        if (e += t, n = i.getCaretCoords(e), this._differentLine(n, r)) {
          e -= t;
          break;
        }
      return e;
    }
  }, b.prototype._updateTextArea = function (e) {
    if (this._view.isCapturingInput()) {
      var t = this._editor.getElement().getTLCore();
      if (t) {
        var i = t.byOrdinal(this._focusChar);
        if (i) {
          var n = this._editor.getElement().getGeometryBBox(), r = i.bounds();
          this._view.updateInputBox(r.l + n.getX(), r.t + r.h + n.getY()), c.Release;
        }
      }
    }
  }, b.prototype._getTransformedKey = function (e, t) {
    var i = t.getTransformer(m.TYPE);
    if (i && i.getDirection() === m.RTL)
      switch (e) {
      case u.Constant.LEFT:
        return u.Constant.RIGHT;
      case u.Constant.RIGHT:
        return u.Constant.LEFT;
      default:
        return e;
      }
    return e;
  }, b.prototype._handleKey = function (e, t, i) {
    var r;
    if (t && !this._compositionOn && (this._shiftKeyDown = !0), this._compositionOn)
      switch (t = !1, e) {
      case u.Constant.LEFT:
      case u.Constant.HOME:
      case u.Constant.RIGHT:
      case u.Constant.END:
        i = !1, r = this._lastCompositedTextLength - this._compositionSelectionDelta;
        break;
      default:
        if (i && ("Z" === e || "Y" === e))
          break;
        return;
      }
    var a = this._editor.getElement().getScene();
    if (a) {
      var s = n.getEditor(a), l = this._editor.getElement().getTLCore();
      if (l) {
        e = this._getTransformedKey(e, l);
        var h = l.getSelection().start, A = l.getSelection().end, c = l.getLength() - 1, p = !1;
        if (this._nextKeyboardX = null, t) {
          if (!this._keyboardSelect)
            switch (e) {
            case u.Constant.LEFT:
            case u.Constant.UP:
            case u.Constant.HOME:
            case u.Constant.PAGE_UP:
              this._keyboardSelect = -1;
              break;
            case u.Constant.RIGHT:
            case u.Constant.DOWN:
            case u.Constant.END:
            case u.Constant.PAGE_DOWN:
              this._keyboardSelect = 1;
            }
        } else
          this._keyboardSelect = 0;
        var d = 1 === this._keyboardSelect ? A : h, g = !1;
        switch (this._editor.contentSetEnabled(0), e) {
        case u.Constant.LEFT:
          if (this._compositionOn)
            r > 0 && (d--, this._compositionSelectionDelta++, this._lastCompositedTextLength > this._compositionSelectionDelta && d > 0 && "'" === l.getRange(d - 1, d).plainText() && (d--, this._compositionSelectionDelta++), this._isSelectable(d) && (g = !0));
          else {
            if (t || h == A) {
              if (d > 0)
                if (i)
                  d = (f = l.wordContainingOrdinal(d)).ordinal === d ? f.index > 0 ? l.wordOrdinal(f.index - 1) : 0 : f.ordinal;
                else
                  d--;
            } else
              d = h;
            this._isSelectable(d) && (g = !0);
          }
          break;
        case u.Constant.RIGHT:
          if (this._compositionOn)
            r < this._lastCompositedTextLength && ("'" === l.getRange(d, d + 1).plainText() && (d++, this._compositionSelectionDelta--), this._compositionSelectionDelta > 0 && (d++, this._compositionSelectionDelta--), g = !0);
          else {
            var f;
            if (t || h == A) {
              if (d < c)
                if (i)
                  d = (f = l.wordContainingOrdinal(d)).ordinal + f.word.length;
                else
                  d++;
            } else
              d = A;
            g = !0;
          }
          break;
        case u.Constant.DOWN:
          d = this._changeLine(d, 1), g = !0;
          break;
        case u.Constant.UP:
          d = this._changeLine(d, -1), g = !0;
          break;
        case u.Constant.HOME:
          this._compositionOn ? r > 0 && (d -= r, this._compositionSelectionDelta = this._lastCompositedTextLength, g = !0) : (d = this._endOfline(d, -1), g = !0);
          break;
        case u.Constant.END:
          this._compositionOn ? r < this._lastCompositedTextLength && (d += this._lastCompositedTextLength - r, this._compositionSelectionDelta = 0, g = !0) : (d = this._endOfline(d, 1), g = !0);
          break;
        case u.Constant.PAGE_UP:
          d = 0, g = !0;
          break;
        case u.Constant.PAGE_DOWN:
          d = c, g = !0;
          break;
        case u.Constant.BACKSPACE:
          h > 0 && h === A ? (l.getRange(h - 1, h).clear(), this._focusChar = h - 1, l.select(this._focusChar, this._focusChar)) : h !== A && (l.getRange(h, A).clear(), this._focusChar = h, l.select(this._focusChar, this._focusChar)), p = !0;
          break;
        case u.Constant.DELETE:
          h < c && (h === A ? l.getRange(h, h + 1).clear() : (l.getRange(h, A).clear(), this._focusChar = h, l.select(this._focusChar, this._focusChar))), p = !0;
          break;
        case u.Constant.SPACE:
          "lorem" === l.getDocumentRange().plainText().toLowerCase() ? (l.getDocumentRange().clear(), l.select(0, 0), l.insert("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.".replace(/\t/g, " ")), this._editor.invalidateTextWidth()) : l.insert(" "), p = !0;
          break;
        case u.Constant.ENTER:
          (m = l.selectedRange()) && m.isList() && !this._shiftKeyDown && (m.canInsertListItem() ? (l.insert(m.createListItem()), p = !0) : p = m.unlistify(!0)), p || l.insert(this._shiftKeyDown ? y.LS : "\n"), p = !0;
          break;
        case u.Constant.TAB:
          var m;
          (m = l.selectedRange()) && m.canChangeListDepth() && (p = this._shiftKeyDown ? m.decreaseList() : m.increaseList()), p || (l.insert("   "), p = !0);
          break;
        case "Z":
          i && (p = !0, !this._compositionOn && s.hasUndoState() && (s.undoState(), this._lastCompositedTextLength = 0, this._view && this._view.resetInputBoxContent()));
          break;
        case "Y":
          i && (p = !0, !this._compositionOn && s.hasRedoState() && s.redoState());
          break;
        case "A":
          i && (p = !0, l.select(0, c));
          break;
        case "C":
          b.HANDLECOPYPASTE && i && (this._richClipboard = l.selectedRange().save(), this._plainClipboard = l.selectedRange().plainText(), p = !0);
          break;
        case "X":
          b.HANDLECOPYPASTE && i && (this._richClipboard = l.selectedRange().save(), this._plainClipboard = l.selectedRange().plainText(), l.getRange(h, A).clear(), this._focusChar = h, l.select(this._focusChar, this._focusChar), p = !0);
          break;
        case "V":
          b.HANDLECOPYPASTE && i && (l.insert(this._richClipboard), this._editor.invalidateTextWidth(), p = !0);
        }
        this._editor.contentSetEnabled(1);
        var C = this._toggles[e];
        if (!this._shiftKeyDown && i && C) {
          var w, E, B, x = l.selectedRange(), P = x.getFormatting()[C], S = this._editor.getElement().getWorkspace().getFontManager(), T = this._editor.getProperty("_tff"), I = S.queryFontFamily(T);
          "fontWeight" === C ? (w = this._editor.getProperty("_tfs"), ((B = E = parseInt(P) == o.Weight.Bold ? o.Weight.Regular : o.Weight.Bold) === o.Weight.Normal || void 0 === I || I.filter(function (e) {
            return e.style === w && e.weight === E;
          }).length > 0) && (s.beginTransaction(), this._editor.setProperties(["_tfw"], [B]), s.commitTransaction(_.get(new v("GInlineTextEditor", "action.modify-text-properties"))))) : "fontStyle" === C ? (E = this._editor.getProperty("_tfw"), ((B = w = "italic" == P ? o.Style.Normal : o.Style.Italic) === o.Style.Normal || void 0 === I || I.filter(function (e) {
            return e.style === w && e.weight === E;
          }).length > 0) && (s.beginTransaction(), this._editor.setProperties(["_tfs"], [B]), s.commitTransaction(_.get(new v("GInlineTextEditor", "action.modify-text-properties"))))) : (this._editor.contentSetEnabled(0), x.setFormatting(C, !0 !== P), this._editor.contentSetEnabled(1)), p = !0, this._editor.triggerHotkeyEvent([
            u.Constant.CONTROL,
            e
          ]);
        }
        if (g) {
          switch (this._keyboardSelect) {
          case 0:
            h = A = d;
            break;
          case -1:
            h = d;
            break;
          case 1:
            A = d;
          }
          if (h === A)
            this._keyboardSelect = 0;
          else if (h > A) {
            this._keyboardSelect = -this._keyboardSelect;
            var F = A;
            A = h, h = F;
          }
          this._focusChar = d, l.select(h, A), p = !0;
        }
        return this._keyboardX = this._nextKeyboardX, p;
      }
    }
  }, b.prototype.deleteSelected = function () {
    var e = this._editor.getElement().getTLCore();
    if (e) {
      var t = e.getSelection().start, i = e.getSelection().end;
      this._editor.requestInvalidation(), this._editor.contentSetEnabled(0), e.getRange(t, i).clear(), this._editor.contentSetEnabled(1), this._focusChar = t, e.select(this._focusChar, this._focusChar), this._keyboardX = null;
    }
  }, b.prototype._canHandleInput = function (e, t, i, n) {
    if (this._editor.getElement().getTLCore()) {
      var r = null, o = 0, a = 0, s = [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          186,
          187,
          188,
          189,
          190,
          191,
          192,
          219,
          220,
          221,
          222,
          224,
          251,
          252,
          253,
          254
        ], l = !1;
      if (n) {
        var h = n.split("+");
        h && h.length > 1 && (r = String.fromCharCode(parseInt(h[1], 16)));
      }
      return r || ("string" == typeof e || e instanceof String) && 1 === e.length && (r = e, o = e.toLowerCase().charCodeAt(0), n = null), n && r && r.length ? l = !0 : !i && r && (t ? ((a = s.indexOf(o)) >= 0 && (r = ")!@#$%^&*(:+<_>?~{|}\"~{|}\"".charAt(a)), l = r && r.length) : l = (r = (a = s.indexOf(o)) >= 0 ? "0123456789;=,-./`[\\]'`[\\]'".charAt(a) : r.toLowerCase()) && r.length), l;
    }
  }, b.prototype._checkTimeStamp = function (e) {
    return e < 0 && Math.abs(this._lastTimeStamp - e) < 10 || e === this._lastTimeStamp;
  }, b.prototype._compStart = function (e) {
    this._compositionOn && this._view && this._view.resetInputBoxContent(), this._compositionOn = !0, this._lastCompositedTextLength = 0, this._compositionSelectionDelta = 0;
  }, b.prototype._compEnd = function (e) {
    this._view && this._view.resetInputBoxContent(), this._compositionOn = !1;
  }, b.prototype._boxInput = function (e) {
    "input" === e.type && this._keyPress(e, !0);
  }, b.prototype._keyPress = function (e, t) {
    var i = t ? e.target.value : e.keyUTF, n = this._editor.getElement().getTLCore();
    if (n)
      if (this.hasFocus()) {
        if (!b.IS_NON_PRINTABLE_REG.test(i) && !this._keyDownHandled) {
          if (this._editor.requestInvalidation(), this._editor.contentSetEnabled(0), t && this._compositionOn) {
            var r = n.getSelection().start, o = n.getSelection().end;
            if (r === o && (r += this._compositionSelectionDelta, o += this._compositionSelectionDelta), r === o) {
              var a = n.getRange(r - this._lastCompositedTextLength, r);
              a.plainText() != i && a.setText(i), this._focusChar = r - this._compositionSelectionDelta + i.length - this._lastCompositedTextLength, n.select(this._focusChar, null);
            } else
              r !== o && (n.getRange(r, o).setText(i), this._focusChar = r + i.length, n.select(this._focusChar, this._focusChar));
            this._lastCompositedTextLength = i.length;
          } else
            n.insert(i), t && (e.target.value = "");
          return this._updateTextArea(e), this._editor.contentSetEnabled(1), this._lastResult = !0, e.preventDefault(), e.stopPropagation(), !1;
        }
      } else
        console.log("inlineTextEditor: didn't have focus");
  }, b.prototype._keyUp = function (e) {
    this._keyDownHandled = null, this._shiftKeyDown = !1, this._updateTextArea(e);
  }, b.prototype._keyDown = function (e) {
    var t = e.key, i = d.modifiers.shiftKey, n = d.modifiers.metaKey, r = e.timestamp;
    return this._checkTimeStamp(r) ? !this._lastResult && void 0 : (this._lastTimeStamp = r, this._lastResult = !1, this.hasFocus() ? (this._editor.requestInvalidation(), this._handleKey(t, i, n) ? (this._lastResult = !0, this._keyDownHandled = t, e.preventDefault(), e.stopPropagation(), !1) : this._canHandleInput(t, i, n) ? (this._lastResult = !0, !1) : void 0) : (console.log("inlineTextEditor: didn't have focus"), void (this._lastResult = !1)));
  }, b.prototype.handleDomKeyDown = function (e) {
    if (!e)
      return !1;
    if ("keydown" !== e.type)
      return !1;
    var t = e.timeStamp || -new Date().getTime(), i = u.translateCode(e.code) || u.translateKey(e.which || e.keyCode, e.location);
    if (this._checkTimeStamp(t))
      return this._keyDownHandled == i && (e.preventDefault(), e.stopPropagation()), this._lastResult;
    this._lastTimeStamp = t, this._lastResult = !1, this._editor.requestInvalidation();
    var n = e.shiftKey, r = e.ctrlKey && !e.altKey;
    e.keyIdentifier;
    return this._handleKey(i, n, r) ? (e.preventDefault(), e.stopPropagation(), this._lastResult = !0, this._keyDownHandled = i, !0) : !!this._canHandleInput(i, n, r) && (this._lastResult = !0, !0);
  }, b.prototype._convertToObjectSpace = function (e) {
    var t = this._editor.getElement().getTransform(), i = this._view.getWorldTransform(this._view.getScene().getActivePage());
    t && (i = i.preMultiplied(t));
    var n = this._editor.getElement().getTLCore();
    if (n && n.getTransformer()) {
      var r = i.invertible() && i.inverted().mapPoint(e) || new l(), o = n.getRenderBounds();
      return r = r.translated(o.getX(), o.getY()), n.getTransformer().inverseTransform(r);
    }
    return i.invertible() ? i.inverted().mapPoint(e) : new l();
  }, b.prototype.selectWordAtPosition = function (e) {
    var t = this._editor.getElement().getTLCore();
    if (t) {
      var i = this._convertToObjectSpace(e), n = t.byCoordinate(i.getX(), i.getY() - this._editor._getVerticalOffset());
      (n = n.parent()) && t.select(n.ordinal, n.ordinal + (n.word ? n.word.text.length : n.length));
    }
  }, b.prototype._mouseDblClick = function (e) {
    this._textUnderMouse && this.selectWordAtPosition(e.client);
  }, b.prototype._mouseDown = function (e) {
    if (e.button === s.BUTTON_LEFT && this._textUnderMouse) {
      if (this._shiftKeyDown) {
        var t = this._editor.getElement().getTLCore();
        if (this._view.setCursor(a.Text), t) {
          var i = t.selectedRange().start, n = this._convertToObjectSpace(e.client), r = t.byCoordinate(n.getX(), n.getY() - this._editor._getVerticalOffset());
          return r && (this._focusChar = r.ordinal, i > r.ordinal ? t.select(r.ordinal, i) : t.select(i, r.ordinal)), void (this._selectDragStart = i);
        }
      }
      if (3 === e.clickCount) {
        if (!(t = this._editor.getElement().getTLCore()))
          return;
        var o = t.selectedRange();
        return o = o.doc.paragraphRange(o.start, o.end), t.select(o.start, o.end), void (this._selectDragStart = o.start);
      }
      this._selectDragStart = this.setCursor(e.client);
    }
  }, b.prototype.setCursor = function (e) {
    if (this._activated) {
      var t = this._editor.getElement().getTLCore();
      if (t) {
        var i = this._convertToObjectSpace(e), n = t.byCoordinate(i.getX(), i.getY() - this._editor._getVerticalOffset());
        return t.select(n.ordinal, n.ordinal), this._keyboardX = null, n.ordinal;
      }
      return null;
    }
  }, b.prototype._mouseRelease = function (e) {
    this._updateTextArea(), this._selectDragStart = null, this._keyboardX = null;
  }, b.prototype._mouseMove = function (e) {
    var t = this._editor.getElement().getPaintBBox();
    if (t && !t.isEmpty()) {
      t = this._view.getWorldTransform(this._view.getScene().getActivePage()).mapRect(t);
      var i = h.pickDistance;
      t.expanded(i, i, i, i).containsPoint(e.client) ? this._textUnderMouse = !0 : this._textUnderMouse = !1;
    }
    if (this._textUnderMouse && this._view.setCursor(a.Text), null !== this._selectDragStart) {
      var n = this._editor.getElement().getTLCore();
      if (n) {
        var r = this._convertToObjectSpace(e.client), o = n.byCoordinate(r.getX(), r.getY() - this._editor._getVerticalOffset());
        o && (this._focusChar = o.ordinal, this._selectDragStart > o.ordinal ? n.select(o.ordinal, this._selectDragStart) : n.select(this._selectDragStart, o.ordinal));
      }
    }
  }, b.prototype.isSelectionHit = function (e) {
    var t = this._editor.getElement().getTLCore();
    if (!t)
      return !1;
    var i = t.getSelection();
    if (i.start === i.end)
      return !1;
    var n = this._convertToObjectSpace(e), r = t.byCoordinate(n.getX(), n.getY() - this._editor._getVerticalOffset());
    return !!(i && r.ordinal >= i.start && r.ordinal <= i.end);
  }, b.prototype.toString = function () {
    return "[Object GInlineTextEditor]";
  }, e.exports = b;
}
