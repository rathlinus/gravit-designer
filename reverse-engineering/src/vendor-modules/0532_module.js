/**
 * chunk.vendor.js Module #532
 * Type: unknown
 */

function (e, t, i) {
      var n = i(84);

      function r() {}
      ((r.prototype.linkAnnotation = function (e) {
        return (
          !(!e.hasMixin(n.Linkable) || !this._scene) &&
          (this._scene.link(this, e), !0)
        );
      }),
        (r.prototype.getLinkedAnnotations = function () {
          var e = [];
          return (
            this._scene &&
              this._scene.visitLinks(this, function (t) {
                t.hasMixin(n) && e.push(t);
              }),
            e
          );
        }),
        (e.exports = r));
    }