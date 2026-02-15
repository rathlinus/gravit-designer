/**
 * Module 892
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
  var n = require(261) /* module */;
  function r() {
  }
  r.prototype._listeners = null, r.prototype.temporaryReceiver = false, r.prototype.addEventListener = function (e, t, i, r, o) {
    var a = n.getTypeId(e);
    this._listeners || (this._listeners = {});
    var s = t;
    if (i || r) {
      var l = r ? r.slice() : [];
      l.unshift(i || t), t = Function.prototype.bind.apply(t, l);
    }
    a in this._listeners || (this._listeners[a] = {
      eventClass: e,
      listeners: []
    }), o ? this._listeners[a].listeners.unshift({
      listener: t,
      sourceListener: s,
      target: i,
      registered: true
    }) : this._listeners[a].listeners.push({
      listener: t,
      sourceListener: s,
      target: i,
      registered: true
    });
  }, r.prototype.removeEventListener = function (e, t, i) {
    var r = n.getTypeId(e), o = false;
    if (this._listeners && r in this._listeners) {
      for (var a = this._listeners[r].listeners, s = 0; s < a.length; ++s)
        a[s].sourceListener != t || i && a[s].target !== i || (a[s].registered = false, a.splice(s, 1), o = true, --s);
      0 == a.length && delete this._listeners[r];
    }
    return o;
  }, r.prototype.hasEventListeners = function (e) {
    return !(!this._listeners || !(n.getTypeId(e) in this._listeners));
  }, r.prototype.trigger = function (e) {
    if (e.sender = this, this._listeners) {
      var module = n.getTypeId(e);
      if (module in this._listeners)
        for (var require = this._listeners[module].listeners.slice(), r = 0; r < require.length; r++) {
          var o = require[r];
          if (o.registered) {
            if (e.isImmediatePropagationStopped)
              break;
            o.listener.call(this, e);
          }
        }
    }
  }, exports.exports = r;
}
