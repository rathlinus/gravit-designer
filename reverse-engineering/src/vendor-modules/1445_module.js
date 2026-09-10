/**
 * chunk.vendor.js Module #1445
 * Type: unknown
 */

function (e, t, i) {
      var n = i(1216),
        r = i(1147),
        o = i(0),
        a = i(188),
        s = i(854),
        l = i(5),
        h = i(14),
        A = i(6),
        c = i(293),
        p = i(359),
        u = i(7);

      function d(e) {
        ((this._canvasContext = e),
          (e.canvas = this),
          (this._width = 300),
          (this._height = 150),
          this.prepare(null));
        var t = i(643);
        this._blender = new t(this);
      }
      (o.inherit(d, h),
        (d.prototype._paintContext = null),
        (d.prototype.fillVertices = function (e, t, i, n) {
          if (
            (i || h.CompositeOperator.SourceOver) ===
              h.CompositeOperator.DestinationIn &&
            this.getGraphics().peek().getValue() instanceof r
          ) {
            var o = this.getGraphics().pop(),
              a = new s(o);
            this._canvasContext.setClip(a);
          }
          h.prototype.fillVertices.call(this, e, t, i, n);
        }),
        (d.prototype.drawCanvas = function (e, t, i, n, r) {
          this._canvasContext.drawCanvas(e, t, i, n, r);
        }),
        (d.prototype.getCurrentNode = function () {
          return this._paintContext.getCurrentNode();
        }),
        (d.prototype.getGraphics = function () {
          return this.getContext().getGraphics();
        }),
        (d.prototype.getDocument = function () {
          return this.getContext().getDocument();
        }),
        (d.prototype.getContext = function () {
          return this._canvasContext;
        }),
        (d.prototype._createContext = function () {
          var e = new c(this._canvasContext._doc);
          return (
            this._canvasContext._graphics.add(e),
            this._canvasContext._doc.pushGraphics(e),
            new n(this._canvasContext._doc, e)
          );
        }),
        (d.prototype.createCanvas = function (e, t) {
          var i = new d(this._createContext());
          ((i._paintContext = this._paintContext),
            (i._parent = this),
            (this._children = this._children || []),
            this._children.push(i));
          var n = this.getPaintExtents(e),
            r = n.getX(),
            o = n.getY(),
            a = this.getFinalExtents(n);
          i.resize(Math.ceil(a.getWidth()), Math.ceil(a.getHeight()));
          var s = null;
          if (t && this._areas) {
            s = [];
            for (var h = 0; h < this._areas.length; ++h)
              s.push(this._areas[h].translated(-r, -o));
          }
          var c = a.getSide(A.Side.TOP_LEFT);
          return (
            i.prepare(s),
            i.setOrigin(new l(0, 0)),
            i.setOffset(c),
            i.setScale(this._scale),
            i
          );
        }),
        (d.prototype._toScreenCSS = function (e, t) {
          return this._canvasContext._doc.getColorSpace() === p.CMYK &&
            e instanceof a
            ? "cmyk(" + e.getValue().join(",") + "," + t + ")"
            : h.prototype._toScreenCSS.call(this, e, t);
        }),
        (d.prototype._convertStyle = function (e) {
          return e;
        }),
        (d.prototype.finish = function () {
          (h.prototype.finish.call(this), this._canvasContext.finish());
        }),
        (d.prototype._transform = new u()),
        (d.prototype._origin = new l(0, 0)),
        (e.exports = d));
    }