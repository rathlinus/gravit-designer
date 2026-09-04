/**
 * chunk.vendor.js Module #930
 * Type: class
 * Name: GEdgeLink
 */

function (e, t) {
      function i(e, t) {
        t ? this.setEdge(t) : (this._uid = e);
      }
      ((i.prototype._uid = null),
        (i.prototype._edge = null),
        (i.prototype.getId = function () {
          return this._uid;
        }),
        (i.prototype.setId = function (e) {
          (e && this._edge && !this._uid.isEqual(e) && (this._edge = null),
            (this._uid = e));
        }),
        (i.prototype.getEdge = function () {
          return this._edge;
        }),
        (i.prototype.setEdge = function (e) {
          ((this._uid = e.getId()), (this._edge = e));
        }),
        (i.prototype.toString = function () {
          return "[Object GEdgeLink]";
        }),
        (e.exports = i));
    }