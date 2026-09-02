/**
 * chunk.vendor.js Module #1438
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(799),
        o = i(197),
        a = function () {
          o.call(this);
        };
      (n.inherit(a, o),
        (a.prototype.add = function (e, t) {
          return this.getGroup(e).add(t);
        }),
        (a.prototype.getGroup = function (e) {
          var t = this.get("/" + e.name);
          return (t || ((t = new r.Group(e)), this.put("/" + e.name, t)), t);
        }),
        (e.exports = a));
    }