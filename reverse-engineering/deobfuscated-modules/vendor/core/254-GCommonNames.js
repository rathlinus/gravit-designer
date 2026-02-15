/**
 * Module 254
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(20) /* polyfill_RegExp_exec */, require(151) /* DataModule_151 */, require(34) /* polyfill_String_replace */, require(247) /* module_247 */, require(91) /* polyfill_String_trim */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
  const {
      GLocale: n,
      GLocaleKey: r
    } = require(209) /* module */, o = Object.values(require(287) /* module */).filter(e => !!e.mentionName).map(e => e.mentionName), {
      externalApps: a,
      supportedApps: s,
      REQUEST_NEW_FEATURE_URL: l,
      DOCUMENTATION_URL: h,
      SUPPORT_URL: A,
      DISCUSS_BETA_URL: c,
      PRODUCT_VECTOR_URL: p
    } = require(374) /* module */;
  module.getUserEmail = function (e) {
    return !e.email && e.login && e.login.match(/^[^,\s"'<>@]+@[^,.\s"'<>@]+(?:\.[^,."'<>\s@]+)*$/) ? e.login : e.email;
  }, module.getRequestNewFeatureUrl = function () {
    return l;
  }, module.getSupportUrl = function () {
    return A;
  }, module.getDocumentationUrl = function () {
    return h;
  }, module.getDiscussBetaUrl = function () {
    return c;
  }, module.getProductVectorUrl = function () {
    return p;
  };
  const u = e => {
    let module = (e = e.replace(/^[@\s]+/, "")).indexOf("@");
    return module >= 0 && (e = e.substr(0, module)), module = o.indexOf(e.toLowerCase()), module >= 0 && (e += "-1"), e;
  };
  module.getUserName = function (e, t) {
    if (e.name && e.name.trim()) {
      let t = e.name.trim().split(/\s/)[0];
      return u(t);
    }
    return u(e.login || e.email || (t ? n.get(new r("GCommonNames", "text.unknown-user")) : "Unknown"));
  };
  const d = e => "string" == typeof e && 0 === e.indexOf("sharepoint_"), g = e => "string" == typeof e && 0 === e.indexOf("googledrive_"), f = e => e.app && e.app === s.SharePoint;
  module.isSharePointFileId = d, module.isGoogleDriveFileId = g, module.isSharePointFile = f, module.isGoogleDriveFile = e => e.app && e.app === s.GoogleDrive, module.isExternalFile = e => f(e) || g(e), module.isExternalFileId = e => g(e) || d(e), module.sanitizeName = u, module.sameDomain = (e, t) => e && t && e.email && t.email && e.email.split("@")[1] === t.email.split("@")[1], module.getExternalAppCodes = () => a.map(e => e.code), module.getAppFromFileId = e => d(e) ? s.SharePoint : g(e) ? s.GoogleDrive : null, module.coalesceString = function () {
    for (var exports = arguments.length, module = new Array(exports), require = 0; require < exports; require++)
      module[require] = arguments[require];
    return module.find(e => {
      if (e && "string" == typeof e)
        return e;
    });
  }, module.buildQueryParams = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    var t = "", i = Object.keys(exports);
    if (i.length > 0) {
      var n = i.map(t => t + "=" + exports[t]);
      t = "?" + n.join("&");
    }
    return t;
  }, module.getUrlWithQueryParams = function (e) {
    let require = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    return e + module.buildQueryParams(require);
  }, module.getSubscriptionUrl = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return module.getUrlWithQueryParams("", exports);
  }, module.getYearlySubscriptionUrl = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return module.getUrlWithQueryParams("", exports);
  };
}
