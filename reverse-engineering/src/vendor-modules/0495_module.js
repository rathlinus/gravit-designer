/**
 * chunk.vendor.js Module #495
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42),
        r = i(0);

      function o(e) {
        (n.call(
          this,
          e,
          null,
          "        varying highp vec2 texCoord;        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform float opacity;        void main(){            vec4 base = texture2D(texture0, texCoord);            vec4 stroke = texture2D(texture1, texCoord);            stroke.a = clamp(stroke.a,0.0,opacity);            gl_FragColor = base.a * base.rgba + (1.0-base.a) * stroke.rgba;        }    ",
        ),
          this.textures({
            texture1: 1,
          }),
          (this.strokify = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        uniform vec3 color;        varying highp vec2 texCoord;        uniform float width;        uniform float height;        uniform float softness;        uniform float shapeCoeff;        void main(){            float alpha = 0.0;            alpha += texture2D(texture, texCoord + vec2( -width, height)).a;            alpha += texture2D(texture, texCoord + vec2( width, height)).a;            alpha += texture2D(texture, texCoord + vec2( width, -height)).a;            alpha += texture2D(texture, texCoord + vec2( -width, -height)).a;            /*if shapeCoeff is 1.0/sqrt(2) -> rounded corners */            alpha *= shapeCoeff;            alpha += texture2D(texture, texCoord + vec2( 0.0, height)).a;            alpha += texture2D(texture, texCoord + vec2( -width, 0.0)).a;            alpha += texture2D(texture, texCoord + vec2( width, 0.0)).a;            alpha += texture2D(texture, texCoord + vec2( 0.0, -height)).a;            gl_FragColor = vec4(color,alpha*softness);        }        ",
          )),
          (this.innerMerge = new n(
            e,
            null,
            "        varying highp vec2 texCoord;        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform float opacity;        void main(){            vec4 base = texture2D(texture0, texCoord);            vec4 stroke = texture2D(texture1, texCoord);            if (base.a > 0.1) {                stroke.a = clamp(stroke.a,0.0,opacity);                gl_FragColor = vec4(base.rgb*(1.0-stroke.a) + stroke.rgb*stroke.a,base.a);            } else {                gl_FragColor = base;            }        }        ",
          )),
          this.innerMerge.textures({
            texture1: 1,
          }),
          (this.innerMergeCenter = new n(
            e,
            null,
            "        varying highp vec2 texCoord;        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform float opacity;        void main(){            vec4 base = texture2D(texture0, texCoord);            vec4 stroke = texture2D(texture1, texCoord);            if (base.a > 0.0) {/*if 0.1 then opaque shapes and strokelayers have black artifacts*/                stroke.a = clamp(stroke.a,0.0,opacity);                gl_FragColor = vec4(base.rgb*(1.0-stroke.a) + stroke.rgb*stroke.a,max(stroke.a,base.a));            } else {                gl_FragColor = base;            }        }        ",
          )),
          this.innerMergeCenter.textures({
            texture1: 1,
          }),
          (this.invertAlpha = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main(){            vec4 c = texture2D(texture, texCoord);            c.a = 1.0-c.a;            gl_FragColor = c;        }        ",
          )),
          (this.strokifyRect = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        uniform vec3 color;        varying highp vec2 texCoord;        uniform float width;        uniform float height;        uniform float softness;        uniform float shapeCoeff;        void main(){            float alpha = 0.0;            alpha += texture2D(texture, texCoord + vec2( 0.0, width)).a;            alpha += texture2D(texture, texCoord + vec2( 0.0, -width)).a;            alpha *= shapeCoeff;            alpha += texture2D(texture, texCoord + vec2( -width, 0.0)).a;            alpha += texture2D(texture, texCoord + vec2( width, 0.0)).a;            gl_FragColor = vec4(color,alpha*softness);        }        ",
          )));
      }
      ((o.prototype.strokify = null),
        (o.prototype.strokifyRect = null),
        (o.prototype.invertAlpha = null),
        (o.prototype.innerMerge = null),
        (o.INSIDE = 1),
        (o.OUTSIDE = 0),
        (o.CENTER = 2),
        r.inherit(o, n),
        (o.prototype.render = function (e, t) {
          var i = e.color.slice();
          ((i[0] /= 255),
            (i[1] /= 255),
            (i[2] /= 255),
            this.glEffect.extraTexture.ensureFormat(this.glEffect.texture));
          var n = e.width * t,
            r = e.shape,
            a = 0 | e.placement.value,
            s = e.ellyptical,
            l = e.softness;
          a === o.CENTER && (n >>= 1);
          var h = function (e, t) {
            if (s) {
              this.strokifyRect.simpleShader.call(
                this.strokifyRect,
                {
                  color: i,
                  width: 1 / this.glEffect.width,
                  height: 1 / this.glEffect.height,
                  softness: l,
                  shapeCoeff: r,
                },
                e,
                t,
              );
              for (var o = 0; o < n; o++)
                this.strokifyRect.simpleShader.call(
                  this.strokifyRect,
                  {
                    color: i,
                    width: 1 / this.glEffect.width,
                    height: 1 / this.glEffect.height,
                    softness: l,
                    shapeCoeff: r,
                  },
                  t,
                  t,
                );
            } else {
              this.strokify.simpleShader.call(
                this.strokify,
                {
                  color: i,
                  width: 1 / this.glEffect.width,
                  height: 1 / this.glEffect.height,
                  softness: l,
                  shapeCoeff: r,
                },
                e,
                t,
              );
              for (o = 0; o < n; o++)
                this.strokify.simpleShader.call(
                  this.strokify,
                  {
                    color: i,
                    width: 1 / this.glEffect.width,
                    height: 1 / this.glEffect.height,
                    softness: l,
                    shapeCoeff: r,
                  },
                  t,
                  t,
                );
            }
          };
          ((a !== o.CENTER && a !== o.INSIDE) ||
            (this.invertAlpha.simpleShader.call(
              this.invertAlpha,
              null,
              this.glEffect.texture,
              this.glEffect.extraTexture,
            ),
            h.call(
              this,
              this.glEffect.extraTexture,
              this.glEffect.extraTexture,
            ),
            this.glEffect.extraTexture.use(1),
            a === o.CENTER
              ? this.innerMergeCenter.simpleShader.call(this.innerMergeCenter, {
                  opacity: e.opacity.value,
                })
              : this.innerMerge.simpleShader.call(this.innerMerge, {
                  opacity: e.opacity.value,
                })),
            (a !== o.OUTSIDE && a !== o.CENTER) ||
              (this.glEffect.extraTexture.use(0),
              h.call(this, this.glEffect.texture, this.glEffect.extraTexture),
              this.glEffect.extraTexture.use(1),
              this.simpleShader.call(this, {
                opacity: e.opacity.value,
              })));
        }),
        (o.prototype.destroy = function () {
          (this.strokify && this.strokify.destroy(),
            this.strokifyRect && this.strokifyRect.destroy(),
            this.invertAlpha && this.invertAlpha.destroy(),
            this.innerMerge && this.innerMerge.destroy(),
            n.prototype.destroy.call(this));
        }),
        (e.exports = o));
    }