/**
 * Module 42
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

function (e, t, i) {
  var n = i(11), r = i(14), o = i(226), a = i(6), s = (i(5), i(12)), l = i(103), h = i(111), A = i(205);
  function c(e, t, i) {
    this.vertexAttribute = null, this.glEffect = e, this.texCoordAttribute = null, t = t || g, i = "precision highp float;" + (i = i || f), this.program = c.getLinkedProgram(t, i);
  }
  c.shaderCache = {}, c.linkedShaderCache = {}, c.shaderCacheNoRender = {}, c.linkedShaderCacheNoRender = {}, c.cannotReadUINT = !1;
  function p(e) {
    var t = [], i = e.length;
    if (!i)
      return e;
    var n = e[0].length;
    if (!n)
      return e;
    for (var r = i * n, o = 0; o < r; o++)
      t.push(e[o % i][Math.floor(o / i)]);
    return t;
  }
  var u = !1, d = !1;
  u = !0, c.randomShaderFunc = "    float random(vec3 scale, float seed) {        /* use the fragment position for a different seed per-pixel */        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);    }", c.TOLOCAL = "    vec2 toLocal(vec2 coord) {        return ((coord * texSize) - offset)/tileSize;    }", c.sobelVertexShader = "     attribute vec2 vertex;     attribute vec4 _texCoord;     uniform highp float texelWidth;     uniform highp float texelHeight;     varying highp vec2 texCoord;     varying vec2 leftTextureCoordinate;     varying vec2 rightTextureCoordinate;     varying vec2 topTextureCoordinate;     varying vec2 topLeftTextureCoordinate;     varying vec2 topRightTextureCoordinate;     varying vec2 bottomTextureCoordinate;     varying vec2 bottomLeftTextureCoordinate;     varying vec2 bottomRightTextureCoordinate;     void main()     {         gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);         vec2 widthStep = vec2(texelWidth, 0.0);         vec2 heightStep = vec2(0.0, texelHeight);         vec2 widthHeightStep = vec2(texelWidth, texelHeight);         vec2 widthNegativeHeightStep = vec2(texelWidth, -texelHeight);         texCoord = _texCoord.xy;         leftTextureCoordinate = _texCoord.xy - widthStep;         rightTextureCoordinate = _texCoord.xy + widthStep;         topTextureCoordinate = _texCoord.xy - heightStep;         topLeftTextureCoordinate = _texCoord.xy - widthHeightStep;         topRightTextureCoordinate = _texCoord.xy + widthNegativeHeightStep;         bottomTextureCoordinate = _texCoord.xy + heightStep;         bottomLeftTextureCoordinate = _texCoord.xy - widthNegativeHeightStep;         bottomRightTextureCoordinate = _texCoord.xy + widthHeightStep;     }", c.tilingAwareVertexSource = "    attribute vec2 vertex;    attribute vec2 _texCoord;    varying highp vec2 texCoord;    varying vec2 localTexCoord;    uniform vec2 tileSize;    uniform vec2 offset;    uniform vec2 texSize;    void main() {        localTexCoord = _texCoord;        texCoord = (localTexCoord * tileSize + offset)/texSize;        gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);    }", c.prototype._fxaaPremultiplied = null, c.prototype._fxaaUnpremultiplied = null, c.prototype.fxaa = function (e, t, i, n, r) {
    var o;
    if (!(o = r ? this._fxaaUnpremultiplied : this._fxaaPremultiplied))
      try {
        o = new c(this.glEffect, c._fxaaVertexSource, r ? c._fxaaFragmentSourceUnpremultiplied : c._fxaaFragmentSourcePremultiplied);
      } catch (e) {
        r ? this._fxaaUnpremultiplied = {} : this._fxaaPremultiplied = {};
      }
    o instanceof c && (r ? this._fxaaUnpremultiplied = o : this._fxaaPremultiplied = o, o.simpleShader.call(o, {
      texSize: [
        i || this.glEffect.width,
        n || this.glEffect.height
      ],
      tileSize: [
        this.glEffect.width,
        this.glEffect.height
      ],
      offset: [
        e || 0,
        t || 0
      ]
    }, this.glEffect.texture, this.glEffect.texture));
  }, c._fxaaVertexSource = "attribute vec2 vertex;\nattribute vec2 _texCoord;\nvarying highp vec2 texCoord;\nvarying vec2 localTexCoordTL;\nvarying vec2 localTexCoordTR;\nvarying vec2 localTexCoordBL;\nvarying vec2 localTexCoordBR;\nvarying vec2 localTexCoord;\nuniform vec2 tileSize;\nuniform vec2 offset;\nuniform vec2 texSize;\nvoid main() {\n    vec2 step = vec2(1.0/tileSize.x, 1.0/tileSize.y);\n    localTexCoord = _texCoord;\n    localTexCoordTL = vec2(_texCoord.x - step.x, _texCoord.y - step.y);\n    localTexCoordBL = vec2(_texCoord.x - step.x, _texCoord.y + step.y);\n    localTexCoordTR = vec2(_texCoord.x + step.x, _texCoord.y - step.y);\n    localTexCoordBR = vec2(_texCoord.x + step.x, _texCoord.y + step.y);\n    texCoord = (localTexCoord * tileSize + offset)/texSize;\n    gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);\n}", c._fxaaFragmentSourceBase = "const float FXAA_REDUCE_MIN = 0.0078125;\nconst float FXAA_REDUCE_MUL = 0.125;\nconst float FXAA_SPAN_MAX   =  8.0;\nuniform highp sampler2D tex;\nuniform vec2 tileSize;\nvarying highp vec2 texCoord;\nvarying vec2 localTexCoord;\nvarying vec2 localTexCoordTL;varying vec2 localTexCoordTR;varying vec2 localTexCoordBL;varying vec2 localTexCoordBR;\nvoid main() {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / tileSize.x, 1.0 / tileSize.y);\n    vec4 rgba = texture2D(tex, localTexCoordTL);\n    vec3 rgbTL = rgba.rgb * rgba.a;\n    rgba = texture2D(tex, localTexCoordTR);\n    vec3 rgbTR = rgba.rgb * rgba.a;\n    rgba = texture2D(tex, localTexCoordBL);\n    vec3 rgbBL = rgba.rgb * rgba.a;\n    rgba = texture2D(tex, localTexCoordBR);\n    vec3 rgbBR = rgba.rgb * rgba.a;\n    vec4 texColor = texture2D(tex, localTexCoord);\n    vec3 rgbM  = texColor.rgb * texColor.a;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaTL = dot(rgbTL, luma);\n    float lumaTR = dot(rgbTR, luma);\n    float lumaBL = dot(rgbBL, luma);\n    float lumaBR = dot(rgbBR, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaTL, lumaTR), min(lumaBL, lumaBR)));\n    float lumaMax = max(lumaM, max(max(lumaTL, lumaTR), max(lumaBL, lumaBR)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaTL + lumaTR) - (lumaBL + lumaBR));\n    dir.y =  ((lumaTL + lumaBL) - (lumaTR + lumaBR));\n    \n    float dirReduce = max((lumaTL + lumaTR + lumaBR + lumaBL) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),dir * rcpDirMin)) * inverseVP;\n    \n    vec4 sample00 = texture2D(tex, localTexCoord + dir * (1.0 / 3.0 - 0.5));\n    vec4 sample01 = texture2D(tex, localTexCoord + dir * (2.0 / 3.0 - 0.5));\n    vec3 rgbA = 0.5 * (sample00.rgb * sample00.a + sample01.rgb * sample01.a); \n    \n    vec4 sample10 = texture2D(tex, localTexCoord + dir * -0.5);\n    vec4 sample11 = texture2D(tex, localTexCoord + dir * 0.5);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (sample10.rgb * sample10.a + sample11.rgb * sample11.a);\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n        gl_FragColor.rgba = 0.5 * (sample00 + sample01);\n    } else {\n        gl_FragColor.rgba = 0.25 * (sample00 + sample01) + 0.25 * (sample10 + sample11);\n    }\n", c._fxaaFragmentSourceUnpremultiplied = c._fxaaFragmentSourceBase + "}", c._fxaaFragmentSourcePremultiplied = c._fxaaFragmentSourceBase + "if (gl_FragColor.a == 0.0) {\n        gl_FragColor.rgb = vec3(1.0, 1.0, 1.0);\n    } else {\n        gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a;\n    }\n}", c.screenSpaceDither = " vec3 screenSpaceDither (vec2 vScreenPos) {    highp vec3 vDither = vec3( dot( vec2( 171.0, 231.0 ), vScreenPos.xy ) );    vDither.rgb = fract( vDither.rgb / vec3( 103.0, 71.0, 97.0 ) );    return vDither.rgb / 255.0;}", c.dithering = "float luma(vec3 color) {  return dot(color, vec3(0.299, 0.587, 0.114));}float luma(vec4 color) {  return dot(color.rgb, vec3(0.299, 0.587, 0.114));}float dither4x4(vec2 position, float brightness) {  int x = int(mod(position.x, 4.0));  int y = int(mod(position.y, 4.0));  int index = x + y * 4;  float limit = 0.0;  if (x < 8) {    if (index == 0) limit = 0.0625;    if (index == 1) limit = 0.5625;    if (index == 2) limit = 0.1875;    if (index == 3) limit = 0.6875;    if (index == 4) limit = 0.8125;    if (index == 5) limit = 0.3125;    if (index == 6) limit = 0.9375;    if (index == 7) limit = 0.4375;    if (index == 8) limit = 0.25;    if (index == 9) limit = 0.75;    if (index == 10) limit = 0.125;    if (index == 11) limit = 0.625;    if (index == 12) limit = 1.0;    if (index == 13) limit = 0.5;    if (index == 14) limit = 0.875;    if (index == 15) limit = 0.375;  }  return brightness < limit ? 0.0 : 1.0;}vec3 dither(vec2 position, vec3 color) {  return color * dither4x4(position, luma(color));}vec4 dither(vec2 position, vec4 color) {  return vec4(color.rgb * dither4x4(position, luma(color)), 1.0);}";
  var g = "    attribute vec2 vertex;    attribute vec2 _texCoord;    varying highp vec2 texCoord;    void main() {        texCoord = _texCoord;        gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);    }", f = "    uniform highp sampler2D texture;    varying highp vec2 texCoord;    void main() {        gl_FragColor = texture2D(texture, texCoord);    }";
  function m(e) {
    return "[object Number]" == Object.prototype.toString.call(e);
  }
  c.warpShader = function (e, t) {
    return e + "    uniform highp sampler2D texture;    uniform vec2 texSize;    uniform vec2 tileSize;    uniform vec2 offset;    varying highp vec2 texCoord;    void main() {        highp vec2 coord = texCoord * tileSize + offset;        " + t + "        gl_FragColor = texture2D(texture, (coord - offset) / tileSize);        highp vec2 clampedCoord = clamp(coord, offset, tileSize+offset);        if (coord != clampedCoord) {            /* fade to transparent if we are outside the image */            gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));        }    }";
  }, c.clamp = function (e, t, i) {
    return Math.min(i, Math.max(e, t));
  }, c.prototype.simpleShader = function (e, t, i, n) {
    (t || this.glEffect.texture).use(), this.glEffect.spareTexture.drawTo(function () {
      this.uniforms(e).drawRect(void 0, void 0, void 0, void 0, [
        0,
        0,
        this.glEffect.spareTexture.width,
        this.glEffect.spareTexture.height
      ]);
    }.bind(this)), this.glEffect.spareTexture.swapWith(i || this.glEffect.texture);
  }, c._getShaderCache = function () {
    return l.isRenderPhase() ? (c.shaderCache || (c.shaderCache = []), c.shaderCache) : (c.shaderCacheNoRender || (c.shaderCacheNoRender = []), c.shaderCacheNoRender);
  }, c._getLinkedShaderCache = function () {
    return l.isRenderPhase() ? (c.linkedShaderCache || (c.linkedShaderCache = []), c.linkedShaderCache) : (c.linkedShaderCacheNoRender || (c.linkedShaderCacheNoRender = []), c.linkedShaderCacheNoRender);
  }, c.compileSource = function (e, t, i) {
    var r = o.getGLContext();
    if (!r)
      return null;
    var a, s = i || n.hash(t), l = c._getShaderCache(), h = l[s];
    if (h)
      for (var A = 0; A < h.length; A++)
        if ((a = h[A]).src == t)
          return a.program;
    var p = r.createShader(e);
    if (r.shaderSource(p, t), r.compileShader(p), !r.getShaderParameter(p, r.COMPILE_STATUS))
      throw "compile error: " + r.getShaderInfoLog(p);
    return h ? h.push({
      src: t,
      program: p
    }) : (h = [{
        src: t,
        program: p
      }], l[s] = h), p;
  }, c.getLinkedProgram = function (e, t) {
    var i = c._getLinkedShaderCache(), r = n.hash(e), a = n.hash(t), s = i[r + a];
    if (!s) {
      var l = o.getGLContext();
      if (!l)
        return null;
      var h = l.createProgram();
      return l.attachShader(h, c.compileSource(l.VERTEX_SHADER, e, r)), l.attachShader(h, c.compileSource(l.FRAGMENT_SHADER, t, a)), c.linkProgram(h, r, a), h;
    }
    return s;
  }, c.linkProgram = function (e, t, i) {
    var n = c._getLinkedShaderCache(), r = c._getShaderCache();
    if (!n[t + i]) {
      if (!r[t])
        return null;
      if (!r[i])
        return null;
      var a = o.getGLContext();
      if (a && (a.linkProgram(e), n[t + i] = e, !a.getProgramParameter(e, a.LINK_STATUS)))
        throw "link error: " + a.getProgramInfoLog(e);
    }
  }, c.prototype.destroy = function () {
    this._fxaaUnpremultiplied && this._fxaaUnpremultiplied instanceof c && this._fxaaUnpremultiplied.destroy(), this._fxaaPremultiplied && this._fxaaPremultiplied instanceof c && this._fxaaPremultiplied.destroy();
  }, c.prototype.uniforms = function (e) {
    var t, i = o.getGLContext();
    if (!i)
      return this;
    for (var n in (i.useProgram(this.program), e))
      if (e.hasOwnProperty(n)) {
        var r = i.getUniformLocation(this.program, n);
        if (null !== r) {
          var a = e[n], s = !n.match(/_int_$/);
          if (t = a, "[object Array]" == Object.prototype.toString.call(t))
            switch (a.length) {
            case 1:
              s ? i.uniform1fv(r, new Float32Array(p(a))) : i.uniform1iv(r, new Int32Array(p(a)));
              break;
            case 2:
              s ? i.uniform2fv(r, new Float32Array(p(a))) : i.uniform2iv(r, new Int32Array(p(a)));
              break;
            case 3:
              s ? i.uniform3fv(r, new Float32Array(p(a))) : i.uniform3iv(r, new Int32Array(p(a)));
              break;
            case 4:
              s ? i.uniform4fv(r, new Float32Array(p(a))) : i.uniform4iv(r, new Int32Array(p(a)));
              break;
            case 9:
              i.uniformMatrix3fv(r, !1, new Float32Array(p(a)));
              break;
            case 16:
              i.uniformMatrix4fv(r, !1, new Float32Array(p(a)));
              break;
            default:
              throw "dont't know how to load uniform \"" + n + "\" of length " + a.length;
            }
          else if (m(a))
            s ? i.uniform1f(r, a) : i.uniform1i(r, a);
          else if (!(r instanceof h.UniformLocation || r instanceof A.UniformLocation))
            throw "attempted to set uniform \"" + n + "\" to invalid value " + (a || "undefined").toString();
        }
      }
    return this;
  }, c.prototype.textures = function (e) {
    var t = o.getGLContext();
    if (!t)
      return this;
    for (var i in (t.useProgram(this.program), e))
      e.hasOwnProperty(i) && t.uniform1i(t.getUniformLocation(this.program, i), e[i]);
    return this;
  }, c.prototype.drawRect = function (e, t, i, n, r) {
    var a = o.getGLContext();
    a && (t = void 0 !== t ? (t - r[1]) / r[3] : 0, e = void 0 !== e ? (e - r[0]) / r[2] : 0, i = void 0 !== i ? (i - r[0]) / r[2] : 1, n = void 0 !== n ? (n - r[1]) / r[3] : 1, null == a.vertexBuffer && (a.vertexBuffer = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, a.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, new Float32Array([
      e,
      t,
      e,
      n,
      i,
      t,
      i,
      n
    ]), a.STATIC_DRAW), null == a.texCoordBuffer && (a.texCoordBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, a.texCoordBuffer), a.bufferData(a.ARRAY_BUFFER, new Float32Array([
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1
    ]), a.STATIC_DRAW)), null == this.vertexAttribute && (this.vertexAttribute = a.getAttribLocation(this.program, "vertex"), a.enableVertexAttribArray(this.vertexAttribute)), null == this.texCoordAttribute && (this.texCoordAttribute = a.getAttribLocation(this.program, "_texCoord"), a.enableVertexAttribArray(this.texCoordAttribute)), a.useProgram(this.program), a.bindBuffer(a.ARRAY_BUFFER, a.vertexBuffer), a.vertexAttribPointer(this.vertexAttribute, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, a.texCoordBuffer), a.vertexAttribPointer(this.texCoordAttribute, 2, a.FLOAT, !1, 0, 0), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
  }, c.getDefaultShader = function () {
    var e = o.getGLContext();
    return e ? (e.defaultShader = e.defaultShader || new c(), e.defaultShader) : {
      drawRect: function () {
      }
    };
  }, c._getFinalArea = function (e, t) {
    if (!e)
      return t;
    var i = e.getAreas(), n = null;
    if (i) {
      for (var r = 0; r < i.length; r++) {
        var o = i[r].intersected(t);
        o.isEmpty() || (n = n && !n.isEmpty() ? n.united(o) : o);
      }
      if (!n || n.getWidth() < 1 || n.getHeight() < 1)
        return null;
    } else
      n = t;
    return n;
  }, c._renderTile = function (e, t, i, n, r, a, l, h) {
    var A = o.getGLContext(), c = this._getFinalArea(e, n.translated(-a.getX(), -a.getY()).toAlignedRect());
    if (!c)
      return !1;
    var p, g, f, m, y = (c = n).getWidth(), _ = c.getHeight(), v = c.getX(), b = c.getY();
    if (t && (p = i.getX(), g = i.getY(), f = i.getWidth(), m = i.getHeight()), c.getX() >= a.getWidth() + a.getX() || c.getY() >= a.getHeight() + a.getY())
      return !1;
    if (a.getX() > c.getX() + c.getWidth() || a.getY() > c.getY() + c.getHeight())
      return !1;
    if (y <= 0 || _ <= 0 || t && f <= 0 || t && m <= 0)
      return !1;
    A.clearColor(0, 0, 0, 0), A.clear(A.COLOR_BUFFER_BIT), d ? (A.canvas.width = s.nextPowerOf2(y), A.canvas.height = s.nextPowerOf2(_)) : u ? (A.canvas.width !== Math.ceil(y) && (A.canvas.width = Math.ceil(y)), A.canvas.height !== Math.ceil(_) && (A.canvas.height = Math.ceil(_))) : (A.canvas.width < s.nextPowerOf2(y) && (A.canvas.width = s.nextPowerOf2(y)), A.canvas.height < s.nextPowerOf2(_) && (A.canvas.height = s.nextPowerOf2(_)));
    var C = r.getWidth(), w = r.getHeight(), E = h.shader, B = h.properties, x = h.scale, P = E.glEffect, S = o.createTexture(e._canvasContext.canvas, v - a.getX(), b - a.getY(), y, _);
    if (P.draw(S), E.render(B, x, v, b, C, w), P.update(), S.destroy(), t) {
      var T = t.getTransform(!1), I = t.getTransform(!0);
      t.setTransform(T.inverted()), t.clearRect(p, g, f, m), t.drawImageFragment(A.canvas, p - v, g - b + (A.canvas.height - _), p, g, f, m), t.setTransform(I);
    }
    return !0;
  };
  var y = 1;
  c.shouldEnableTiles = function (e, t) {
    var i = !1;
    return !i && e * t > 4194304 ? i = !0 : i && e <= 2048 && t <= 2048 && (i = !1), i;
  }, c._getMaxSize = function (e, t) {
    var i, n = t.slice();
    if (e.getAreas()) {
      for (var r = 0, o = e.getAreas(), a = 0; a < o.length; a++)
        r = Math.max(r, o[a].getWidth() + n[0] + n[2], o[a].getHeight() + n[1] + n[3]);
      i = Math.max(256, Math.min(r, 1024));
    } else
      i = 1024;
    return i < 2048 && (n[0] + n[2] > 0.33 * i || n[1] + n[3] > 0.33 * i) && (i *= 2), i;
  }, c.computeDownScale = function (e, t, i) {
    var n = i || y;
    "undefined" != typeof DEFAULTDETAILLEVEL && (y = DEFAULTDETAILLEVEL);
    var r = t.slice(), o = this._getMaxSize(e, t);
    (r[0] + r[2] > 0.33 * o || r[1] + r[3] > 0.33 * o) && (n *= 0.33 * o / Math.min(r[0] + r[2], r[1] + r[3]));
    return n;
  }, c.apply = function (e, t, i, n, s, l, A) {
    var p = o.getGLContext();
    if (!p)
      return e;
    var u, d, g, f = n.shader, m = n.properties, y = n.scale, _ = f.glEffect, v = null;
    if (e instanceof r) {
      s || (s = new a(e.getOffset().getX(), e.getOffset().getY(), e.getWidth(), e.getHeight()));
      var b = new a(e.getOffset().getX() - s.getX(), e.getOffset().getY() - s.getY(), e.getWidth(), e.getHeight());
      s = new a(Math.floor(s.getX()), Math.floor(s.getY()), s.getWidth(), s.getHeight()), b = new a(Math.floor(b.getX()), Math.floor(b.getY()), b.getWidth(), b.getHeight());
      var C = this.shouldEnableTiles(t, i);
      0;
      var w = n.shader.glEffect.getAbsoluteEffectPadding && n.shader.glEffect.getAbsoluteEffectPadding() || 0;
      w instanceof Array || (w = [
        w,
        w,
        w,
        w
      ]);
      var E = this._getMaxSize(e, w), B = A || this.computeDownScale(e, w);
      w = w.map(function (e) {
        return Math.ceil(Math.max(0, e * y * B));
      }), d = b.scaled(B, B).toAlignedRect();
      var x = (u = s.scaled(B, B).toAlignedRect()).getWidth(), P = u.getHeight();
      if (C) {
        v = c._copyCanvas(e, s, b, u, d, !0);
        var S, T, I = 0, F = 0;
        n.properties.clip;
        F = 0, 0;
        for (var R = [], D = []; F < P;) {
          for (T = E - w[1] - w[3], F + E >= P ? T = P - F : 0 === F && (T += w[1]), T < 1 && (T = 1), I = 0; I < x;) {
            S = E - w[0] - w[2], I + E >= x ? S = x - I : 0 === I && (S += w[0]), S < 1 && (S = 1);
            var k = new a(I, F, E, E), G = new a(0 === I ? 0 : I + w[0], 0 === F ? 0 : F + w[1], S, T);
            R.push(G), D.push(k), I += 0 === I ? S - w[2] : S;
          }
          F += 0 === F ? T - w[3] : T;
        }
        M = 1 !== B || l && l.getScene() ? this._copyCanvas(e, s, b, u, d, !1) : e, n.scale *= B;
        for (var Q = 0; Q < R.length; Q++)
          c._renderTile(M, v, R[Q], D[Q], u, d, w, n);
        n.scale = y;
      } else {
        var M;
        n.scale *= B, M = 1 !== B ? this._copyCanvas(e, s, b, u, d, !1) : e, c._renderTile(M, null, null, d, u, d, w, n), n.scale = y;
      }
      var N, U, V, O, L, Y, X, H, W = e.getTransform(!0), Z = e.getTransform(!1);
      e.setTransform(Z.inverted()), v ? (N = -b.getX(), U = -b.getY(), L = 0, Y = 0, V = s.getWidth(), O = s.getHeight(), X = u.getWidth(), H = u.getHeight()) : (N = U = 0, V = b.getWidth(), O = b.getHeight(), X = d.getWidth(), H = d.getHeight(), L = 0, Y = p.canvas.height - H);
      var z = 1;
      n.properties.opacity && "object" == typeof n.properties.opacity && "opacity" === n.properties.opacity.type && (z = n.properties.opacity.value), e.drawImageFragment(v || p.canvas, L, Y, N, U, X, H, !1, z, r.CompositeOperator.Copy, V, O), e.setTransform(W);
    } else {
      g = o.createTexture(e, t, i);
      var j = s ? s.getWidth() : t, J = s ? s.getHeight() : i;
      if (_.draw(g), f.render(m, y * (i / J), 0, 0, j, J), _.update(), g.destroy(), e instanceof h.ImageDataArray)
        _.readPixels(e.uint8Array);
      else {
        var q = new Uint8Array(e.buffer);
        _.readPixels(q);
      }
    }
    return e;
  }, c._genAreas = function (e, t, i, n) {
    if (!e)
      return null;
    var r = t.getX(), o = t.getY();
    return e.map(function (e) {
      return e = e.translated(r, o).scaled(rescale, rescale), n || (e = e.translated(-r * rescale, -o * rescale)), e;
    });
  }, c._updateAreas = function (e, t, i, r, o, s) {
    var l = e.getAreas(), h = c._genAreas(t.getAreas(), r, o, s);
    if (!n.equals(l, h)) {
      var A = i.getSide(a.Side.TOP_LEFT);
      e.resetClip(), e.prepare(h, !1), e.setOrigin(A), e.setOffset(A), e.setScale(t.getScale() * o);
    }
  }, c._copyCanvas = function (e, t, i, n, o, s) {
    var l = new r();
    s ? l.resize(n.getWidth(), n.getHeight()) : l.resize(o.getWidth(), o.getHeight());
    var h = e.getAreas(), A = t.getSide(a.Side.TOP_LEFT), c = h ? h.map(function (e) {
        var r;
        return ((r = s ? (r = e.translated(i.getX(), i.getY())).scaled(n.getWidth() / t.getWidth(), n.getHeight() / t.getHeight()) : e.scaled(o.getWidth() / i.getWidth(), o.getHeight() / i.getHeight())).getX() < 0 || r.getY() < 0) && (r = new a(Math.max(0, r.getX()), Math.max(0, r.getY()), r.getWidth() + Math.min(0, r.getX()), r.getHeight() + Math.min(0, r.getY()))), r.toAlignedRect();
      }) : null;
    if (l.prepare(c, !1), h)
      for (var p = new a(0, 0, e.getWidth(), e.getHeight()), u = new a(0, 0, l.getWidth(), l.getHeight()), d = 0; d < h.length; d++) {
        var g = h[d].intersected(p), f = c[d].intersected(u);
        g.isEmpty() || f.isEmpty() || l.drawImageFragment(e, g.getX(), g.getY(), f.getX(), f.getY(), g.getWidth(), g.getHeight(), !1, 1, r.CompositeOperator.SourceOver, f.getWidth(), f.getHeight());
      }
    else
      l.drawImageFragment(e, 0, 0, 0, 0, e.getWidth(), e.getHeight(), !1, 1, r.CompositeOperator.Copy, l.getWidth(), o.getHeight());
    return l.setOrigin(A), l.setOffset(A), l;
  }, e.exports = c;
}
