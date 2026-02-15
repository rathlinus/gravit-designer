/**
 * Webpack Module #1574
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */, n(96) /* module_96 */, n(3) /* module_3 */, n(26) /* module_26 */, n(125) /* module_125 */, n(126) /* module_126 */, n(114) /* module_114 */;
    var o = n(10) /* module_10 */,
      i = n(40) /* module_40 */;
    const a = n(1186) /* module_1186 */,
      r = n(1575) /* module_1575 */;
    e.exports = class extends a {
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