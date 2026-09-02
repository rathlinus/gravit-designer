/**
 * chunk.vendor.js Module #748
 * Type: class
 * Name: GLassoTool
 */

function (e, t, i) {
      var n = i(334),
        r = i(386),
        o = i(0),
        a = i(52),
        s = i(54),
        l = i(380),
        h = i(141),
        A = i(48),
        c = i(5),
        p = i(12),
        u = i(17),
        d = i(24);

      function g() {
        r.call(this, new g._AreaSelector());
      }
      (o.inherit(g, r),
        (g._AreaSelector = function () {
          n._AreaSelector.call(this);
        }),
        o.inherit(g._AreaSelector, n._AreaSelector),
        (g._AreaSelector.prototype._current = null),
        (g._AreaSelector.prototype._currentPoints = null),
        (g._AreaSelector.prototype._fitter = null),
        (g._AreaSelector.prototype._firstTangent = null),
        (g._AreaSelector.prototype._lastTangent = null),
        (g._AreaSelector.prototype._cdist = 0),
        (g._AreaSelector.prototype._processedVertices = null));
      ((g._AreaSelector.prototype.clearArea = function () {
        (n._AreaSelector.prototype.clearArea.call(this),
          (this._current = null),
          (this._currentPoints = null),
          (this._fitter = null),
          (this._firstTangent = null),
          (this._lastTangent = null),
          (this._cdist = 0),
          (this._processedVertices = null));
      }),
        (g._AreaSelector.prototype.startArea = function (e) {
          (n._AreaSelector.prototype.startArea.call(this, e),
            (this._currentPoints = [e]),
            (this._current = e),
            (this._processedVertices = new s()),
            (this._fitter = new l(7)),
            (this._firstTangent = null),
            (this._lastTangent = null),
            (this._cdist = 0));
        }),
        (g._AreaSelector.prototype.expandToPoint = function (e) {
          if (
            !(
              this._current &&
              p.isEqualEps(this._current.getX(), e.getX()) &&
              p.isEqualEps(this._current.getY(), e.getY())
            )
          ) {
            if (
              (this._areaStartedPos || (this._areaStartedPos = e), this._trf)
            ) {
              ((this._areaStartedPos = this._trf.mapPoint(
                this._areaStartedPos,
              )),
                (this._currentPoints = this._currentPoints.map(
                  function (e) {
                    return this._trf.mapPoint(e);
                  }.bind(this),
                )));
              var t = s.splitVertexSource(this._vertexContainer, this._trf);
              t && t.length && (this._vertexContainer = t[0]);
              var i = s.splitVertexSource(this._processedVertices, this._trf);
              (i && i.length && (this._processedVertices = i[0]),
                this._current &&
                  (this._current = this._trf.mapPoint(this._current)),
                (this._trf = null),
                (this._pixelTransformer = null));
            }
            this._areaLastPos = e;
            var n = 0;
            if (this._current) {
              var r = this._current.subtract(e);
              n = r.dot(r);
              this._cdist += n;
            }
            if (null == this._current || n >= 1) {
              if (
                20 === this._currentPoints.length ||
                (this._currentPoints.length > 4 && this._cdist > 400)
              ) {
                var o = !1,
                  a = this._processedVertices.getCount();
                if (a > 0) {
                  this._processedVertices.rewindVertices(a - 1);
                  var l = new A();
                  this._processedVertices.readVertex(l);
                  var h = new c(l.x, l.y);
                  ((this._firstTangent = this._currentPoints[0].subtract(h)),
                    (this._lastTangent =
                      this._currentPoints[
                        this._currentPoints.length - 1
                      ].subtract(e)),
                    (this._lastTangent = this._lastTangent.scale(
                      1 / Math.sqrt(this._lastTangent.dot(this._lastTangent)),
                    )));
                } else {
                  o = !0;
                  var u = this._currentPoints.shift();
                  this._firstTangent = this._currentPoints[0].subtract(u);
                }
                this._firstTangent = this._firstTangent.scale(
                  1 / Math.sqrt(this._firstTangent.dot(this._firstTangent)),
                );
                var d,
                  g = this._fitter.fitCurve(
                    this._currentPoints,
                    20,
                    this._firstTangent,
                    this._lastTangent,
                  );
                if (o && g) {
                  ((d = g[0]),
                    this._processedVertices.addVertex(
                      A.Command.Move,
                      d[0].getX(),
                      d[0].getY(),
                    ));
                  for (var f = 0; f < g.length; f++)
                    ((d = g[f]),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[3].getX(),
                        d[3].getY(),
                      ),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[1].getX(),
                        d[1].getY(),
                      ),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[2].getX(),
                        d[2].getY(),
                      ));
                } else if (g)
                  for (f = 0; f < g.length; f++)
                    ((d = g[f]),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[3].getX(),
                        d[3].getY(),
                      ),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[1].getX(),
                        d[1].getY(),
                      ),
                      this._processedVertices.addVertex(
                        A.Command.Curve2,
                        d[2].getX(),
                        d[2].getY(),
                      ));
                ((this._currentPoints = []),
                  this._vertexContainer.clearVertices(),
                  this._vertexContainer.appendVertices(this._processedVertices),
                  (this._cdist = 0));
              }
              (this._vertexContainer.addVertex(
                0 == this._vertexContainer.getCount()
                  ? A.Command.Move
                  : A.Command.Line,
                e.getX(),
                e.getY(),
              ),
                this._currentPoints.push(e),
                (this._current = e));
            }
          }
        }),
        (g._AreaSelector.prototype.paint = function (e, t) {
          if (this._pixelTransformer || this._areaLastPos) {
            var i = new h(
              this._pixelTransformer
                ? this._pixelTransformer
                : this._vertexContainer,
            );
            (e.canvas.putVertices(i),
              e.canvas.strokeVertices(u.BLACK, d.outlineWidth));
          }
        }),
        (g.prototype.getCursor = function () {
          var e = r.prototype.getCursor.call(this);
          return e === a.SelectInverse ? a.Lasso : e;
        }),
        (g.prototype.toString = function () {
          return "[Object GLassoTool]";
        }),
        (e.exports = g));
    }