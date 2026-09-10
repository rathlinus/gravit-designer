/**
 * chunk.vendor.js Module #1027
 * Type: class
 * Name: GAdjustMultiEffect
 */

function (e, t, i) {
      var n = i(535),
        r = i(282),
        o = i(731),
        a = i(728),
        s = i(2),
        l = i(9);

      function h() {
        n.call(this);
      }
      (s.inherit("adjustMultiEffect", h, n),
        (h.prototype.getNodeNameTranslated = function () {
          return l.getValue("GAdjustMultiEffect", "name", this.getNodeName());
        }),
        (h.prototype.toString = function () {
          return "[Object GAdjustMultiEffect]";
        }),
        n.register(h, [o, a, r]),
        (e.exports = h));
    }