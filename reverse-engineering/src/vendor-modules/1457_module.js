/**
 * chunk.vendor.js Module #1457
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(133);

      function o() {
        (r.call(this),
          (this.paintMode = r.PaintMode.Full),
          (this.multiPageView = !0),
          (this.ignoreEffects = !0),
          (this.thumbnails = !1));
      }
      (n.inherit(o, r),
        (o.prototype.isOutline = function (e) {
          return !1;
        }),
        (o.prototype.isAnnotationsVisible = function (e) {
          return !!this.annotations;
        }),
        (o.prototype.isElementAnnotationsVisible = function (e) {
          return !!this.annotations;
        }),
        (o.prototype.isClipToPage = function (e) {
          return !1;
        }),
        (e.exports = o));
    }