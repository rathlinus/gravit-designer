/**
 * Module 640
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

function (exports, module) {
  function i(e, t, n) {
    this._stack = [], this._abort = false, this._steps = 0, this._endTime = Date.now() + this._executionTime, this._executionSteps = "number" == typeof e ? e : i.EXECUTION_STEPS, this._executionTime = "number" == typeof t ? t : i.EXECUTION_TIME, this._done = n;
  }
  i.EXECUTION_TIME = 15, i.EXECUTION_STEPS = 10, i.prototype._stack = null, i.prototype._executionSteps = null, i.prototype._executionTime = null, i.prototype._steps = 0, i.prototype._abort = false, i.prototype._done = null, i.prototype.execute = function (e, t, i) {
    if (this._abort)
      throw new Error("AbortError");
    this._stack.push({
      idx: 0,
      objects: e,
      callback: t,
      done: i
    }), 1 === this._stack.length && this._continue();
  }, i.prototype.abort = function () {
    this._abort = true;
  }, i.prototype._scheduleNext = function () {
    "undefined" != typeof window ? window.requestAnimationFrame(this._next.bind(this)) : Promise.resolve(undefined).then(this._next.bind(this));
  }, i.prototype._next = function () {
    this._steps = 0, this._endTime = Date.now() + this._executionTime, this._continue();
  }, i.prototype._continue = function () {
    if (!this._abort) {
      var exports = this._stack[this._stack.length - 1];
      if (exports)
        if (exports.idx >= exports.objects.length) {
          var module = this._stack.pop();
          module && module.done && module.done(), this._scheduleNext();
        } else {
          try {
            exports.callback(exports.objects[exports.idx++]);
          } catch (e) {
            console.error(e);
          }
          if (++this._steps > this._executionSteps) {
            if (Date.now() > this._endTime)
              return void this._scheduleNext();
            this._steps = 0;
          }
          this._continue();
        }
      else
        this._done && this._done();
    }
  }, exports.exports = i;
}
