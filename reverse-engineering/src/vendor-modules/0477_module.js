/**
 * chunk.vendor.js Module #477
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
            "        uniform highp float radius;        uniform highp float strength;        uniform highp vec2 center;    ",
            "        coord -= center;        highp float distance = length(coord);        if (distance < radius) {            highp float percent = distance / radius;            if (strength > 0.0) {                coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);            } else {                coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);            }        }        coord += center;    ",
          ),
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t, i, r, o, a) {
          var s = o,
            l = a,
            h = 0.01 * e.centerX * s,
            A = 0.01 * e.centerY * l,
            c = 0.01 * e.radius * Math.max(s, l),
            p = e.strength;
          this.simpleShader.call(this, {
            radius: c,
            strength: n.clamp(-1, p, 1),
            center: [h, A],
            texSize: [s, l],
            tileSize: [this.glEffect.width, this.glEffect.height],
            offset: [i, r],
          });
        }),
        (e.exports = r));
    }