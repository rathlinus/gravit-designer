/**
 * Webpack Module #1100
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* module */,
      i = require(119) /* module_119 */;
    exports.exports = function (e) {
      (e.CommercialProduct = function (t, n, GCore, i) {
        e.Item.call(this, t, n, GCore, i);
      }),
        GCore.GObject.inherit(e.CommercialProduct, e.Item),
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