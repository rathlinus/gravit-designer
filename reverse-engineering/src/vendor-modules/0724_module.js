/**
 * chunk.vendor.js Module #724
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (function (e) {
        ((t.isBrowser = function () {
          return "undefined" != typeof window;
        }),
          (t.isNode = function () {
            return "undefined" == typeof window;
          }),
          (t.nodeBufferToArrayBuffer = function (e) {
            for (
              var t = new ArrayBuffer(e.length), i = new Uint8Array(t), n = 0;
              n < e.length;
              ++n
            )
              i[n] = e[n];
            return t;
          }),
          (t.arrayBufferToNodeBuffer = function (t) {
            for (
              var i = new e(t.byteLength), n = new Uint8Array(t), r = 0;
              r < i.length;
              ++r
            )
              i[r] = n[r];
            return i;
          }),
          (t.checkArgument = function (e, t) {
            if (!e) throw t;
          }));
      }).call(this, i(221).Buffer);
    }