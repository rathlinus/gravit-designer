/**
 * Module 346
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

function (exports, module, require) {
  var n = require(42) /* module */, r = require(0) /* GObject */, o = require(226) /* module */, a = require(111) /* GRendererCtx */, s = require(205) /* GRendererCtxDbg */;
  function l(e) {
    this.glEffect = e, this.shaders = [];
  }
  r.inherit(l, n), l.prototype.shaders = null, l.BlendModes = [
    "linear_burn",
    "linear_dodge",
    "vivid_light",
    "linear_light",
    "pin_light",
    "divide",
    "add",
    "subtract",
    "hardmix",
    "power",
    "harmonic",
    "sin"
  ], l.Blenders = [
    "return (src + dst) - 1.0;\n",
    "return src + dst;\n",
    "return vec3((src.x <= 0.5) ? (1.0 - (1.0 - dst.x) / (2.0 * src.x)) : (dst.x / (2.0 * (1.0 - src.x))),\n                (src.y <= 0.5) ? (1.0 - (1.0 - dst.y) / (2.0 * src.y)) : (dst.y / (2.0 * (1.0 - src.y))),\n                (src.z <= 0.5) ? (1.0 - (1.0 - dst.z) / (2.0 * src.z)) : (dst.z / (2.0 * (1.0 - src.z))));\n",
    "return 2.0 * src + dst - 1.0;\n",
    "return vec3((src.x > 0.5) ? max(dst.x, 2.0 * (src.x - 0.5)) : min(dst.x, 2.0 * src.x),\n                (src.x > 0.5) ? max(dst.y, 2.0 * (src.y - 0.5)) : min(dst.y, 2.0 * src.y),\n                (src.z > 0.5) ? max(dst.z, 2.0 * (src.z - 0.5)) : min(dst.z, 2.0 * src.z));\n",
    "return vec3((src.x == 0.0) ? ((dst.x == 0.0) ? 0.0 : 1.0) : min(1.0, (dst.x / src.x)),\n                 (src.y == 0.0) ? ((dst.y == 0.0) ? 0.0 : 1.0) : min(1.0, (dst.y / src.y)),\n                 (src.z == 0.0) ? ((dst.z == 0.0) ? 0.0 : 1.0) : min(1.0, (dst.z / src.z)));\n",
    "return vec3(min(1.0, src.x + dst.x),\n                 min(1.0, src.y + dst.y),\n                 min(1.0, src.z + dst.z));\n",
    "return vec3(max(0.0, dst.x - src.x),\n                 max(0.0, dst.y - src.y),\n                 max(0.0, dst.z - src.z));\n",
    "return vec3(((src.x <= 0.5) ? (1.0 - (1.0 - dst.x) / (2.0 * src.x)) : (dst.x / (2.0 * (1.0 - src.x)))) < 0.5 ? 0.0 : 1.0,\n                 ((src.y <= 0.5) ? (1.0 - (1.0 - dst.y) / (2.0 * src.y)) : (dst.y / (2.0 * (1.0 - src.y)))) < 0.5 ? 0.0 : 1.0,\n                 ((src.z <= 0.5) ? (1.0 - (1.0 - dst.z) / (2.0 * src.z)) : (dst.z / (2.0 * (1.0 - src.z)))) < 0.5 ? 0.0 : 1.0);\n",
    "return vec3(sqrt((src.x*src.x+dst.x*dst.x)/2.0),\n                 sqrt((src.y*src.y+dst.y*dst.y)/2.0),\n                 sqrt((src.z*src.z+dst.z*dst.z)/2.0));\n",
    "return vec3(min(1.0,2.0/(1.0/src.x + 1.0/dst.x)),\n                 min(1.0,2.0/(1.0/src.y + 1.0/dst.y)),\n                 min(1.0,2.0/(1.0/src.z + 1.0/dst.z)));\n",
    "return vec3(sin(1.57079632679*(src.x+dst.x)),\n                 sin(1.57079632679*(src.y+dst.y)),\n                 sin(1.57079632679*(src.z+dst.z)));\n"
  ], l.prototype.getShaderSource = function (e) {
    var t = "        vec3 blend (vec3 src, vec3 dst)\n            {\n";
    return t += l.Blenders[l.BlendModes.indexOf(e)], t += "        }\n        \n        uniform highp sampler2D texture0;\n        uniform highp sampler2D texture1;\n        uniform float opacity;\n        varying highp vec2 texCoord;\n        void main()\n        {\n            vec4 dst = texture2D(texture0, texCoord);\n            vec4 src = texture2D(texture1, texCoord);\n            vec3 color = dst.rgb * (1.0 - src.a) + clamp(blend(dst.rgb, src.rgb), 0.0, 1.0) * src.a;\n            gl_FragColor.rgb = color;\n            gl_FragColor.a = dst.a * (1.0 - src.a) + src.a;\n            \n        }\n";
  }, l.prototype.render = function (e, t) {
    var i = e.source, r = e.blendMode;
    if (!(l.BlendModes.indexOf(r) < 0)) {
      var h = null;
      this.shaders.hasOwnProperty(r) ? h = this.shaders[r] : (this.shaders[r] = h = new n(this.glEffect, null, this.getShaderSource(r)), h.textures({ texture1: 1 }));
      var A, c = false;
      if (i instanceof HTMLCanvasElement || i instanceof a.RendererCanvas || i instanceof s.RendererCanvas) {
        var p = e.area;
        A = p ? o.createTexture(i, p.getX(), p.getY(), p.getWidth(), p.getHeight()) : o.createTexture(i), c = true;
      } else
        A = i;
      h.glEffect.texture.use(0), A.use(1);
      var u = h.glEffect.spareTexture.width, d = h.glEffect.spareTexture.height;
      h.glEffect.spareTexture.drawTo(function () {
        if (e.dimensions) {
          var t = e.dimensions;
          h.uniforms(e).drawRect(t.x, t.y, t.x + t.width, t.y + t.height, [
            0,
            0,
            u,
            d
          ]);
        } else
          h.uniforms(e).drawRect(undefined, undefined, undefined, undefined, [
            0,
            0,
            u,
            d
          ]);
      }.bind(h)), h.glEffect.spareTexture.swapWith(h.glEffect.texture), c && A.destroy();
    }
  }, l.prototype.destroy = function () {
  }, exports.exports = l;
}
