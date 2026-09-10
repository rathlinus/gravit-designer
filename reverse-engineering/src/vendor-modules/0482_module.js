/**
 * chunk.vendor.js Module #482
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          null,
          n.warpShader(
            "        uniform float strengthX;        uniform float strengthY;    ",
            "        vec2 globalCoord = (texCoord * tileSize + offset)/texSize;        coord = vec2(coord.x + strengthX*sin(coord.x*3.141592), coord.y + strengthY*sin(coord.y*3.141592));    ",
          ),
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t, i, n, r, o) {
          var a = this.glEffect.width,
            s = this.glEffect.height,
            l = (Math.max(a, s), e.radius * t),
            h = l * e.strengthX,
            A = l * e.strengthY;
          this.simpleShader.call(this, {
            strengthX: h,
            strengthY: A,
            texSize: [r, o],
            tileSize: [a, s],
            offset: [i, n],
          });
        }),
        (e.exports = r));
    }