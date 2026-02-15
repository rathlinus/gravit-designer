/**
 * Module 645
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
  require(72) /* GEvent */;
  var n = require(77) /* Wheel */, r = require(167) /* module */;
  function o(e) {
    this._events = [], e && (e.addEventListener(e.constructor.ToolChangedEvent, this._toolChanged, this), this._toolMgr = e);
  }
  o.RecordItem = function (e, t, i, n) {
    this.type = e, this.event = t, this.eventClass = i, this.targetIsWidget = n;
  }, o.RecordItem.prototype.type = null, o.RecordItem.prototype.event = null, o.RecordItem.prototype.eventClass = null, o.RecordItem.prototype.serialize = function () {
    var e = { type: this.type };
    switch (this.type) {
    case o.RecordItemType.DOM:
      var module = this.event;
      e.eventClass = this.eventClass.prototype.toString().match(/^\[[a-zA-Z\s\.]+/)[0];
      e.event = {}, [
        "type",
        "code",
        "which",
        "keyCode",
        "location",
        "timestamp",
        "charCode",
        "button",
        "buttons",
        "deltaX",
        "deltaY",
        "ctrlKey",
        "detail",
        "offsetX",
        "offsetY",
        "clientX",
        "clientY",
        "pageX",
        "pageY"
      ].forEach(function (i) {
        e.event[i] = module[i];
      }), e.targetIsWidget = this.targetIsWidget;
      break;
    case o.RecordItemType.TOOL:
      e.event = {
        next: this.event.newTool.toString(),
        light: this.event.light
      };
    }
    return e;
  }, o.RecordItem.deserialize = function (e, t, i) {
    var a = { type: e.type };
    switch (e.type) {
    case o.RecordItemType.DOM:
      if (e.eventClass.startsWith("[Object GMouseEvent.")) {
        for (var s = Object.keys(n), l = 0; l < s.length; l++)
          if (e.eventClass === "[Object GMouseEvent." + s[l]) {
            a.eventClass = n[s[l]];
            break;
          }
      } else if (e.eventClass.startsWith("[Object GKeyEvent.")) {
        var h = Object.keys(r);
        for (l = 0; l < h.length; l++)
          if (e.eventClass === "[Object GKeyEvent." + h[l]) {
            a.eventClass = r[h[l]];
            break;
          }
      }
      a.event = e.event, a.event.preventDefault = a.event.stopPropagation = a.event.stopImmediatePropagation = function () {
      }, e.targetIsWidget && (a.event.target = i._htmlElement), a.targetIsWidget = e.targetIsWidget;
      break;
    case o.RecordItemType.TOOL:
      var A, c = e.event.next, p = 0;
      do {
        A = t.getTool(p++);
      } while (A && A.toString() !== c);
      a.event = new t.constructor.ToolChangedEvent(null, A, e.event.light);
    }
    return a;
  }, o.RecordItemType = {
    DOM: 0,
    TOOL: 1
  }, o.prototype._events = null, o.prototype._isRecording = false, o.prototype._isPlaying = false, o.prototype._head = 0, o.prototype._toolMgr = null, o.prototype.start = function () {
    this._isPlaying || (this._isRecording = true);
  }, o.prototype.stop = function () {
    this._isRecording = false;
  }, o.prototype.isBusy = function () {
    return this._isRecording || this._isPlaying;
  }, o.prototype.isRecording = function () {
    return this._isRecording;
  }, o.prototype.reset = function () {
    if (this._isRecording)
      this._isRecording = false;
    else if (this._isPlaying)
      return;
    this._events = [], this._head = 0, this._isRecording = false, this._isPlaying = false;
  }, o.prototype.record = function (e, t, i) {
    this._isPlaying || this._isRecording && this._events.push(new o.RecordItem(o.RecordItemType.DOM, e, t, i));
  }, o.prototype.play = function (e, t, i) {
    var n = this;
    for (this._isPlaying = true; n._head < n._events.length;) {
      var r = n._events[n._head];
      switch (r.type) {
      case o.RecordItemType.DOM:
        e._updateAndTriggerInputEvent(r.event, r.eventClass, true);
        break;
      case o.RecordItemType.TOOL:
        n._toolMgr && n._toolMgr.activateTool(r.event.newTool, null, true);
      }
      if (i && i(n._head, n._events.length), "number" == typeof t) {
        if (n._head + 1 === n._events.length)
          break;
        return void setTimeout(function () {
          n._head++, n.play(e, t, i);
        }, t);
      }
      n._head++;
    }
    n._isPlaying = false, n._head = 0;
  }, o.prototype._toolChanged = function (e) {
    this._isRecording && (this._isPlaying || this._events.push(new o.RecordItem(o.RecordItemType.TOOL, e)));
  }, o.prototype.serialize = function () {
    return this._events.map(function (e) {
      return e.serialize();
    });
  }, o.deserialize = function (e, t, i) {
    "string" == typeof e && (e = JSON.parse(e));
    var n = new o(t);
    return n._events = e.map(function (e) {
      return o.RecordItem.deserialize(e, t, i);
    }), n;
  }, exports.exports = o;
}
