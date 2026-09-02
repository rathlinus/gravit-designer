/**
 * chunk.vendor.js Module #1439
 * Type: unknown
 */

function (e, t, i) {
      var n = i(391),
        r = i(0),
        o = i(197),
        a = i(1440),
        s = i(440),
        l = i(7),
        h = i(5),
        A = function (e, t, i, r) {
          (o.call(this),
            (this.contents = e),
            (this.resources = t),
            (this._origin = new h(0, 0)),
            this.put("/Type", "/Page"),
            this.put("/Contents", new n(e)),
            this.put("/Resources", new n(t)),
            this.put("/MediaBox", new a(0, 0, i, r)),
            (this.lastObject = null));
        };
      (r.inherit(A, o),
        (A.prototype._origin = null),
        (A.prototype.setBleedBox = function (e) {
          this.put(
            "/BleedBox",
            new a(e.getX(), e.getY(), e.getWidth(), e.getHeight()),
          );
        }),
        (A.prototype.setPageOrigin = function (e) {
          this._origin = e;
          var t = new l().translated(e.getX(), e.getY());
          this.add(new s(t), 0);
        }),
        (A.prototype.getPageOrigin = function () {
          return this._origin;
        }),
        (A.prototype.add = function (e, t) {
          ((this.lastObject = e), this.contents.getPDFObject().add(e, t));
        }),
        (A.prototype.getPageSize = function () {
          return this.get("/MediaBox");
        }),
        (A.prototype.getResources = function () {
          return this.resources.getPDFObject();
        }),
        (A.prototype.addResource = function (e, t) {
          this.getResources().add(e, t);
        }),
        (A.prototype.getContents = function () {
          return this.contents.getPDFObject();
        }),
        (e.exports = A));
    }