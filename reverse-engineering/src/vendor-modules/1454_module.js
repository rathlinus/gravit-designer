/**
 * chunk.vendor.js Module #1454
 * Type: unknown
 */

function (e, t, i) {
      var n = i(83),
        r = i(2),
        o = i(1235);

      function a(e) {
        ((this._effectsEnabled = e),
          (this._incompatibleNodes = []),
          (this._rasterizableNodes = []));
      }
      ((a.prototype._rasterizableNodes = null),
        (a.prototype._incompatibleNodes = null),
        (a.prototype._effectsEnabled = !1),
        (a.prototype.processNode = function (e) {
          (o.isCompatible(e, this._effectsEnabled) ||
            (this._incompatibleNodes.push(e),
            this._shouldRaster(e) && this._rasterizableNodes.push(e)),
            e instanceof n && this._processMasterPages(e),
            e.hasMixin(r.Container) &&
              e.acceptChildren(
                function (e) {
                  this.processNode(e);
                }.bind(this),
              ));
        }),
        (a.prototype.isVectorable = function (e) {
          return (
            !this._incompatibleNodes.length ||
            !this._incompatibleNodes.some(function (t) {
              return t === e;
            })
          );
        }),
        (a.prototype.getRasterizableNodes = function () {
          return this._rasterizableNodes;
        }),
        (a.prototype.hasRasterizableNodes = function () {
          return this._rasterizableNodes.length > 0;
        }),
        (a.prototype._shouldRaster = function (e) {
          for (var t = 0; t < this._rasterizableNodes.length; t++) {
            var i = this._rasterizableNodes[t];
            if (
              e.findParent(function (e) {
                return i == e;
              })
            )
              return !1;
          }
          return !0;
        }),
        (a.prototype._processMasterPages = function (e) {
          var t = e.getMasterPages();
          t &&
            t.forEach(
              function (e) {
                e.accept(
                  function (e) {
                    this.processNode(e);
                  }.bind(this),
                );
              }.bind(this),
            );
        }),
        (e.exports = a));
    }