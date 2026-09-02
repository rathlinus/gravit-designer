/**
 * chunk.vendor.js Module #280
 * Type: unknown
 */

function (e, t, i) {
      var n = i(75),
        r = i(0),
        o = i(72),
        a = i(281),
        s = i(11),
        l = i(471),
        h = i(76);

      function A() {
        ((this._fontManager = new a()),
          (this._references = {}),
          (this._transactionRecorder = new l()));
      }

      function c(e) {
        return (
          ("undefined" != typeof HTMLCanvasElement &&
            e instanceof HTMLCanvasElement) ||
          ("undefined" != typeof OffscreenCanvas &&
            e instanceof OffscreenCanvas)
        );
      }
      (r.inherit(A, n),
        (A.ResolveUrlEvent = function (e, t, i) {
          ((this.url = e), (this.scene = t), (this.resolved = i));
        }),
        r.inherit(A.ResolveUrlEvent, o),
        (A.ResolveUrlEvent.prototype.url = null),
        (A.ResolveUrlEvent.prototype.scene = null),
        (A.ResolveUrlEvent.prototype.resolved = null),
        (A.ResolveUrlEvent.prototype.toString = function () {
          return "[Event GWorkspace.ResolveUrlEvent]";
        }),
        (A.prototype._fontManager = null),
        (A.prototype._transactionRecorder = null),
        (A.prototype._references = null),
        (A.prototype._memory = 0),
        (A.prototype.getFontManager = function () {
          return this._fontManager;
        }),
        (A.prototype.getTransactionRecorder = function () {
          return this._transactionRecorder;
        }),
        (A.prototype.setTransactionRecorder = function (e) {
          this._transactionRecorder = e;
        }),
        (A.prototype.addReference = function (e) {
          var t = e.getReferenceId();
          (this._references.hasOwnProperty(t) &&
            ((e._oldReferenceId = t), (t = s.uuid()), (e._referenceId = t)),
            (this._references[t] = e));
        }),
        (A.prototype.removeReference = function (e) {
          var t = e.getReferenceId();
          if (!this._references.hasOwnProperty(t))
            throw new Error("Reference not yet added.");
          delete this._references[t];
        }),
        (A.prototype.cleanReferences = function (e) {
          if (e)
            for (var t in this._references) {
              var i = this._references[t];
              (i instanceof h ||
                (i = i.findParent(function (e) {
                  return e instanceof h;
                })),
                i && i.getScene() === e && delete this._references[t]);
            }
        }),
        (A.prototype.getReference = function (e) {
          return this._references.hasOwnProperty(e)
            ? this._references[e]
            : null;
        }),
        (A.prototype.increaseMemoryForImage = function (e) {
          if (!e) return !0;
          if (c(e)) {
            var t = (e.width * e.height) << 2;
            if (this._memory + t <= 1 << 30) return ((this._memory += t), !0);
          }
          return (
            "undefined" != typeof HTMLImageElement &&
            e instanceof HTMLImageElement
          );
        }),
        (A.prototype.decreaseMemoryForImage = function (e) {
          e &&
            c(e) &&
            (this._memory = Math.max(
              0,
              this._memory - ((e.width * e.height) << 2),
            ));
        }),
        (A.prototype.resolveUrl = function (e, t, i) {
          e && 0 !== e.indexOf("data:")
            ? e
                .trim()
                .match(/(https?):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i)
              ? t(e)
              : this.hasEventListeners(A.ResolveUrlEvent) &&
                this.trigger(new A.ResolveUrlEvent(e, i, t))
            : t(e);
        }),
        (e.exports = A));
    }