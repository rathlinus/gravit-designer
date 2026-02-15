/**
 * Webpack Module #1574
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(96) /* module_96 */, require(3) /* module_3 */, require(26) /* module_26 */, require(125) /* module_125 */, require(126) /* module_126 */, require(114) /* module_114 */;
    var o = require(10) /* module_10 */,
      i = require(40) /* module_40 */;
    const a = require(1186) /* module_1186 */,
      r = require(1575) /* module_1575 */;
    exports.exports = class extends a {
      function Object() { [native code] }() {
        super(), (this._url = new URL(o.gApi.url));
      }
      setId(e) {
        return (this._id = e), this;
      }
      setTime(e) {
        return this._url.searchParams.set("time", e.getTime()), this;
      }
      setEndpoint(e) {
        return (this._url.pathname = e), this;
      }
      setLanguage(e) {
        return this._url.searchParams.set("lang", e), this;
      }
      setCampaign(e) {
        return e && this._url.searchParams.set("campaign", e), this;
      }
      setShareFile(e) {
        return e && this._url.searchParams.set("shareFile", e), this;
      }
      setDashboard(e) {
        return e && this._url.searchParams.set("dashboard", e), this;
      }
      setProduct(e) {
        return (
          e &&
            this._url.searchParams.set(
              "product",
              (0, i.stringToBase64String)(JSON.stringify(e))
            ),
          this
        );
      }
      setInAppPurchasesAvailable(e) {
        return this._url.searchParams.set("iap", e), this;
      }
      setLayout(e) {
        return (e = e || 0), this._url.searchParams.set("layout", e), this;
      }
      build() {
        return new r(this._id, this._url.toString());
      }
    };
  }