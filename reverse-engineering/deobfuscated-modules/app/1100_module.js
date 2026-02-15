/**
 * Webpack Module #1100
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
    var o = n(1) /* module_1 */,
      i = n(119) /* module_119 */;
    e.exports = function (e) {
      (e.CommercialProduct = function (t, n, o, i) {
        e.Item.call(this, t, n, o, i);
      }),
        o.GObject.inherit(e.CommercialProduct, e.Item),
        (e.CommercialProduct.prototype.read = function (e, t, n) {
          i.loadDesignData(this._id, false)
            .then((t) => {
              e(t.data);
            })
            .catch(t);
        }),
        (e.CommercialProduct.prototype.getPrice = async function () {
          throw Error("Not implemented");
        }),
        (e.CommercialProduct.prototype.getFormattedPrice = async function () {
          throw Error("Not implemented");
        });
    };
  }