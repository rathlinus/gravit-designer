/**
 * chunk.vendor.js Module #1205
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(95),
        o = i(439),
        a = i(601);

      function s() {
        o.apply(this, arguments);
      }
      (n.inherit(s, o),
        (s.prototype._clones = null),
        (s.prototype._deferredTransform = null),
        (s.prototype.parse = function () {
          (this._getReference(this._data.image._ref).then(
            function (e) {
              var t = new window.FileReader();
              (t.readAsDataURL(e),
                (t.onload = function () {
                  (this._node.setProperty("url", t.result),
                    this._clones &&
                      this._clones.forEach(function (e) {
                        e._node.setProperty("url", t.result);
                      }));
                }.bind(this)));
            }.bind(this),
          ),
            (this._node.__sketchNode__ = this),
            this._node.addEventListener(
              r.StatusEvent,
              this._imageStatusEvent,
              this,
            ));
        }),
        (s.prototype.transform = function (e) {
          ((e = this._deferredTransform
            ? this._deferredTransform.multiplied(e)
            : e),
            this._node.getStatus() !== r.ImageStatus.Loaded
              ? (this._deferredTransform = e)
              : (o.prototype.transform.call(this, e),
                (this._deferredTransform = null)));
        }),
        (s.prototype.clone = function () {
          var e = o.prototype.clone.apply(this, arguments);
          return (
            e._node.addEventListener(r.StatusEvent, e._imageStatusEvent, e),
            this._clones || (this._clones = []),
            this._clones.push(e),
            e
          );
        }),
        (s.prototype._imageStatusEvent = function (e) {
          if (e.image === this._node) {
            if (e.status === r.ImageStatus.Loaded) {
              o.prototype.parse.call(this, !0);
              var t = this._node.getGeometryBBox();
              t
                ? this.transform(
                    a.getTransformation(t, this._getGeometryBBox()),
                  )
                : this.transform(this._deferredTransform);
            }
            (e.status !== r.ImageStatus.Error &&
              e.status !== r.ImageStatus.Loaded) ||
              this._node.removeEventListener(
                r.StatusEvent,
                this._imageStatusEvent,
                this,
              );
          }
        }),
        (s.prototype._getRelatedNodeClass = function () {
          return r;
        }),
        (e.exports = s));
    }