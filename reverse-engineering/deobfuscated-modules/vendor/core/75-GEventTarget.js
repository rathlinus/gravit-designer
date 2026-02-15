/**
 * Module 75 - GEventTarget
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
  var n = require(0) /* GObject */;
  function r() {
  }
  r.prototype._listeners = null, r.prototype.temporaryReceiver = false, r.prototype.addEventListener = function (e, t, i, r, o, a) {
    var s = n.getTypeId(e);
    this._listeners || (this._listeners = {});
    var l = t;
    if (i || r) {
      var h = r ? r.slice() : [];
      h.unshift(i || t), t = Function.prototype.bind.apply(t, h);
    }
    s in this._listeners || (this._listeners[s] = {
      eventClass: e,
      listeners: []
    }), o ? this._listeners[s].listeners.unshift({
      listener: t,
      sourceListener: l,
      target: i,
      registered: true,
      persistent: a
    }) : this._listeners[s].listeners.push({
      listener: t,
      sourceListener: l,
      target: i,
      registered: true,
      persistent: a
    });
  }, r.prototype.removeEventListener = function (e, t, i) {
    var r = n.getTypeId(e), o = false;
    if (this._listeners && r in this._listeners) {
      for (var a = this._listeners[r].listeners, s = 0; s < a.length; ++s)
        a[s].sourceListener != t || i && a[s].target !== i || (a[s].registered = false, a.splice(s, 1), o = true, --s);
      0 == a.length && delete this._listeners[r];
    }
    return o;
  }, r.prototype.removeAllEventListeners = function (e) {
    if (this._listeners) {
      var module = Object.keys(this._listeners);
      if (module.length > 0)
        for (var require = module.length - 1; require >= 0; require--) {
          for (var n = this._listeners[module[require]], r = n.listeners.length - 1; r >= 0; r--) {
            var o = n.listeners[r];
            !e && o.persistent || (o.registered = false, n.listeners.splice(r, 1));
          }
          0 === n.listeners.length && delete this._listeners[module[require]];
        }
    }
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
