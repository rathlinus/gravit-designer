/**
 * Webpack Module #1094
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(3) /* module_3 */;
    var o = require(592) /* module_592 */;
    const { isUTS: i, UTStoCDA: a } = require(1095) /* module */;
    function r(e, t, n, r) {
      if (!t) throw new o("GCloudAnnotations: no cloud annotations id");
      if (!e)
        throw new o("GCloudAnnotations: empty cloud annotations result", t);
      if (
        (null === e.annotationsCollection && (e.annotationsCollection = []),
        !e.annotationsCollection ||
          (!i(e.annotationsCollection) &&
            !(e.annotationsCollection instanceof Array)))
      )
        throw new o(
          "GCloudAnnotations: no annotationsCollection inside cloud annotations",
          t
        );
      if (!e.lastUpdateTime && 0 !== e.lastUpdateTime)
        throw new o(
          "GCloudAnnotations: no lastUpdateTime inside cloud annotations",
          t
        );
      (this.annotationsCollection = e.annotationsCollection),
        i(this.annotationsCollection)
          ? ((this.annotationsCollection = a(this.annotationsCollection)),
            r && (r.hasUTS = true))
          : r && (r.hasUTS = false),
        (this.lastUpdateTime = new Date(e.lastUpdateTime).getTime()),
        (this.cid = t),
        n && (this.accessToken = n);
    }
    (r.prototype.annotationsCollection = null),
      (r.prototype.lastUpdateTime = null),
      (r.prototype.cid = null),
      (r.prototype.accessToken = null),
      (r.prototype.toString = function () {
        return "[GCloudAnnotations]";
      }),
      (exports.exports = r);
  }