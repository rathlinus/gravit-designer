/**
 * chunk.vendor.js Module #640
 * Type: unknown
 */

function (e, t) {
      function i(e, t, n) {
        ((this._stack = []),
          (this._abort = !1),
          (this._steps = 0),
          (this._endTime = Date.now() + this._executionTime),
          (this._executionSteps = "number" == typeof e ? e : i.EXECUTION_STEPS),
          (this._executionTime = "number" == typeof t ? t : i.EXECUTION_TIME),
          (this._done = n));
      }
      ((i.EXECUTION_TIME = 15),
        (i.EXECUTION_STEPS = 10),
        (i.prototype._stack = null),
        (i.prototype._executionSteps = null),
        (i.prototype._executionTime = null),
        (i.prototype._steps = 0),
        (i.prototype._abort = !1),
        (i.prototype._done = null),
        (i.prototype.execute = function (e, t, i) {
          if (this._abort) throw new Error("AbortError");
          (this._stack.push({
            idx: 0,
            objects: e,
            callback: t,
            done: i,
          }),
            1 === this._stack.length && this._continue());
        }),
        (i.prototype.abort = function () {
          this._abort = !0;
        }),
        (i.prototype._scheduleNext = function () {
          "undefined" != typeof window
            ? window.requestAnimationFrame(this._next.bind(this))
            : Promise.resolve(void 0).then(this._next.bind(this));
        }),
        (i.prototype._next = function () {
          ((this._steps = 0),
            (this._endTime = Date.now() + this._executionTime),
            this._continue());
        }),
        (i.prototype._continue = function () {
          if (!this._abort) {
            var e = this._stack[this._stack.length - 1];
            if (e)
              if (e.idx >= e.objects.length) {
                var t = this._stack.pop();
                (t && t.done && t.done(), this._scheduleNext());
              } else {
                try {
                  e.callback(e.objects[e.idx++]);
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
            else this._done && this._done();
          }
        }),
        (e.exports = i));
    }