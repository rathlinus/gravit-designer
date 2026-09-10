/**
 * chunk.vendor.js Module #544
 * Type: class
 * Name: GFullPixelsGuide
 */

function (e, t, i) {
      var n = i(99),
        r = i(0),
        o = i(132),
        a = i(6),
        s = i(210),
        l = i(12);

      function h(e) {
        (n.call(this, e),
          this.getAllowedSnapZones().forEach(
            function (e) {
              e !== a.Side.TOP_LEFT && this.disallowSnapZone(e);
            }.bind(this),
          ));
      }
      (r.inheritAndMix(h, n, [n.Map, n.DetailMap]),
        (h.ID = "guide.full-pixels"),
        (h.prototype.getId = function () {
          return h.ID;
        }),
        (h.prototype.map = function (e, t) {
          if (this._scene.getProperty("ut") === o.Unit.PX) {
            var i = l.round(e, !0),
              n = l.round(t, !0);
            return {
              x: {
                value: i,
                guide: null,
                delta: Math.abs(e - i),
              },
              y: {
                value: n,
                guide: null,
                delta: Math.abs(t - n),
              },
            };
          }
          return null;
        }),
        (h.prototype.isMappingAllowed = function (e) {
          return (
            !s.options.disabled && e !== n.DetailMap.Mode.DetailOffFilterOn
          );
        }),
        (h.prototype.isFullPixelsGuide = function () {
          return !0;
        }),
        (h.prototype.toString = function () {
          return "[Object GFullPixelsGuide]";
        }),
        (e.exports = h));
    }