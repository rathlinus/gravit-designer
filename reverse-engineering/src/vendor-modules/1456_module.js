/**
 * chunk.vendor.js Module #1456
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(17),
        o = i(5),
        a = i(14),
        s = i(6),
        l = i(7);

      function h(e) {
        ((this._canvasContext = e),
          (e.canvas = this),
          (this._width = 300),
          (this._height = 150),
          this.prepare(null));
        var t = i(643);
        this._blender = new t(this);
      }
      (n.inherit(h, a),
        Object.defineProperty(h.prototype, "width", {
          set: function (e) {
            this._width = e;
          },
          get: function () {
            return this._width;
          },
        }),
        Object.defineProperty(h.prototype, "height", {
          set: function (e) {
            this._height = e;
          },
          get: function () {
            return this._height;
          },
        }),
        (h.prototype.clipRect = function (e, t, i, n) {
          console.log("clipRect is not supported");
        }),
        (h.prototype.resetClip = function () {
          console.log("resetClip is not supported");
        }),
        (h.prototype.strokeLine = function (e, t, i, n, s, l) {
          if (
            ((l = this._convertStyle(l || r.BLACK)),
            (s = s || 1),
            this.getTransform)
          ) {
            var h = new o(e, t),
              A = new o(i, n);
            ((h = this._transform.mapPoint(h)),
              (A = this._transform.mapPoint(A)),
              (e = h.getX()),
              (t = h.getY()),
              (i = A.getX()),
              (n = A.getY()));
          }
          ((this._canvasContext.globalCompositeOperation =
            a.CompositeOperator.SourceOver),
            (this._canvasContext.globalAlpha = 1),
            (this._canvasContext.strokeStyle = l),
            (this._canvasContext.lineWidth = s),
            dashed && this._canvasContext.setLineDash([4]),
            this._canvasContext.beginPath(),
            this._canvasContext.moveTo(e, t),
            this._canvasContext.lineTo(i, n),
            this._canvasContext.stroke(),
            dashed && this._canvasContext.setLineDash([]));
        }),
        (h.prototype._createContext = function (e) {
          console.log(
            "GSVGPaintCanvas.prototype._createContext is not overridden",
          );
        }),
        (h.prototype.createCanvas = function (e, t) {
          var i = new h(this._createContext(null));
          i._createContext = this._createContext;
          var n = this.getPaintExtents(e),
            r = n.getX(),
            o = n.getY(),
            a = (n.getWidth(), n.getHeight(), this.getFinalExtents(n));
          i.resize(Math.ceil(a.getWidth()), Math.ceil(a.getHeight()));
          var l = null;
          if (t && this._areas) {
            l = [];
            for (var A = 0; A < this._areas.length; ++A)
              l.push(this._areas[A].translated(-r, -o));
          }
          i.prepare(l);
          var c = a.getSide(s.Side.TOP_LEFT);
          return (i.setOrigin(c), i.setOffset(c), i.setScale(this._scale), i);
        }),
        (h.prototype.drawImageSmooth = function (e, t, i, n, r, o) {
          console.log("drawImageSmooth is not supported");
        }),
        (h.prototype.drawImage = function (e, t, i, n, r, o) {}),
        (h.prototype.drawCanvas = function (e, t, i, n, r) {
          (this._canvasContext.save(),
            (this._canvasContext._dc_globalAlpha =
              "number" == typeof n ? n : 1),
            (this._canvasContext._dc_globalCompositeOperation =
              r || a.CompositeOperator.SourceOver),
            this._canvasContext.drawImage(e, t || 0, i || 0),
            this._canvasContext.restore());
        }),
        (h.prototype._transform = new l()),
        (h.prototype._origin = {
          x: 0,
          y: 0,
          getX: function () {
            return this.x;
          },
          getY: function () {
            return this.y;
          },
        }),
        (e.exports = h));
    }