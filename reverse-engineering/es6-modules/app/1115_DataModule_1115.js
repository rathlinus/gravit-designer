/**
 * Webpack Module #1115
 * Type: unknown
 */

function (exports, module, require) {
  (function (e) {
    var o = (undefined !== e && e) || ('undefined' != typeof self && self) || window,
      i = Function.prototype.apply;
    function a(e, t) {
      ((this._id = e), (this._clearFn = t));
    }
    ((module.setTimeout = function () {
      return new a(i.call(setTimeout, o, arguments), clearTimeout);
    }),
      (module.setInterval = function () {
        return new a(i.call(setInterval, o, arguments), clearInterval);
      }),
      (module.clearTimeout = module.clearInterval =
        function (e) {
          e && e.close();
        }),
      (a.prototype.unref = a.prototype.ref = function () {}),
      (a.prototype.close = function () {
        this._clearFn.call(o, this._id);
      }),
      (module.enroll = function (e, t) {
        (clearTimeout(e._idleTimeoutId), (e._idleTimeout = t));
      }),
      (module.unenroll = function (e) {
        (clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1));
      }),
      (module._unrefActive = module.active =
        function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
      require(1116) /* SetImmediatePolyfill */,
      (module.setImmediate =
        ('undefined' != typeof self && self.setImmediate) ||
        (undefined !== e && e.setImmediate) ||
        (this && this.setImmediate)),
      (module.clearImmediate =
        ('undefined' != typeof self && self.clearImmediate) ||
        (undefined !== e && e.clearImmediate) ||
        (this && this.clearImmediate)));
  }).call(this, require(109) /* module_109 */);
}
