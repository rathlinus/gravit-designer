/**
 * chunk.vendor.js Module #1032
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLBendEffect", a, r),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLBendEffect", "name", this.getNodeName());
        }),
        (a.prototype.getEffectPadding = function () {
          var e =
              this.$shp.radius * Math.sin((this.$shp.strengthX * Math.PI) / 2),
            t =
              this.$shp.radius * Math.sin((this.$shp.strengthY * Math.PI) / 2);
          return [
            Math.max(e, 0),
            Math.max(t, 0),
            Math.max(-e, 0),
            Math.max(-t, 0),
          ];
        }),
        (a.prototype.getAbsoluteEffectPadding = function () {
          var e = Math.abs(
              this.$shp.radius * Math.sin((this.$shp.strengthX * Math.PI) / 2),
            ),
            t = Math.abs(
              this.$shp.radius * Math.sin((this.$shp.strengthY * Math.PI) / 2),
            );
          return [e, t, e, t];
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.GeometryProperties = {
          shp: {
            strengthX: 0.5,
            strengthY: 0,
            radius: 50,
          },
          sh: "GGLBendShader",
        }),
        (a.RANGES = {
          strengthX: [-1, 1],
          strengthY: [-1, 1],
          radius: [0, 100],
        }),
        (e.exports = a));
    }