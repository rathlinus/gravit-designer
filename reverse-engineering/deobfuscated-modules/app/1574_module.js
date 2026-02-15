/**
 * Webpack Module #1574
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(96) /* polyfill_JSON_stringify */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
    var o = require(10) /* AppSettings */,
      i = require(40) /* CollaborationMergeUtils */;
    const a = require(1186) /* module_1186 */,
      r = require(1575) /* module_1575 */;
    exports.exports = class extends a {
      constructor() {
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