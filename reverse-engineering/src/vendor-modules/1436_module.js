/**
 * chunk.vendor.js Module #1436
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(182),
        o = i(197),
        a = function () {
          (o.call(this), (this.pages = new r()), this.put("/Type", "/Pages"));
        };
      (n.inherit(a, o),
        (a.prototype.addPage = function (e) {
          (this.pages.push(e),
            this.put("/Kids", this.pages),
            this.put("/Count", this.pages.size()));
        }),
        (a.prototype.getPage = function (e) {
          var t = this.pages.get(e),
            i = t && t.getValue();
          return i ? i.getPDFObject() : null;
        }),
        (e.exports = a));
    }