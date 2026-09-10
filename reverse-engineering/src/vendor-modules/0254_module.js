/**
 * chunk.vendor.js Module #254
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(20), i(151), i(34), i(247), i(91), i(4), i(41), i(13), i(38));
      const { GLocale: n, GLocaleKey: r } = i(209),
        o = Object.values(i(287))
          .filter((e) => !!e.mentionName)
          .map((e) => e.mentionName),
        {
          externalApps: a,
          supportedApps: s,
          REQUEST_NEW_FEATURE_URL: l,
          DOCUMENTATION_URL: h,
          SUPPORT_URL: A,
          DISCUSS_BETA_URL: c,
          PRODUCT_VECTOR_URL: p,
        } = i(374);
      ((t.getUserEmail = function (e) {
        return !e.email &&
          e.login &&
          e.login.match(/^[^,\s"'<>@]+@[^,.\s"'<>@]+(?:\.[^,."'<>\s@]+)*$/)
          ? e.login
          : e.email;
      }),
        (t.getRequestNewFeatureUrl = function () {
          return l;
        }),
        (t.getSupportUrl = function () {
          return A;
        }),
        (t.getDocumentationUrl = function () {
          return h;
        }),
        (t.getDiscussBetaUrl = function () {
          return c;
        }),
        (t.getProductVectorUrl = function () {
          return p;
        }));
      const u = (e) => {
        let t = (e = e.replace(/^[@\s]+/, "")).indexOf("@");
        return (
          t >= 0 && (e = e.substr(0, t)),
          (t = o.indexOf(e.toLowerCase())),
          t >= 0 && (e += "-1"),
          e
        );
      };
      t.getUserName = function (e, t) {
        if (e.name && e.name.trim()) {
          let t = e.name.trim().split(/\s/)[0];
          return u(t);
        }
        return u(
          e.login ||
            e.email ||
            (t ? n.get(new r("GCommonNames", "text.unknown-user")) : "Unknown"),
        );
      };
      const d = (e) => "string" == typeof e && 0 === e.indexOf("sharepoint_"),
        g = (e) => "string" == typeof e && 0 === e.indexOf("googledrive_"),
        f = (e) => e.app && e.app === s.SharePoint;
      ((t.isSharePointFileId = d),
        (t.isGoogleDriveFileId = g),
        (t.isSharePointFile = f),
        (t.isGoogleDriveFile = (e) => e.app && e.app === s.GoogleDrive),
        (t.isExternalFile = (e) => f(e) || g(e)),
        (t.isExternalFileId = (e) => g(e) || d(e)),
        (t.sanitizeName = u),
        (t.sameDomain = (e, t) =>
          e &&
          t &&
          e.email &&
          t.email &&
          e.email.split("@")[1] === t.email.split("@")[1]),
        (t.getExternalAppCodes = () => a.map((e) => e.code)),
        (t.getAppFromFileId = (e) =>
          d(e) ? s.SharePoint : g(e) ? s.GoogleDrive : null),
        (t.coalesceString = function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return t.find((e) => {
            if (e && "string" == typeof e) return e;
          });
        }),
        (t.buildQueryParams = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          var t = "",
            i = Object.keys(e);
          if (i.length > 0) {
            var n = i.map((t) => t + "=" + e[t]);
            t = "?" + n.join("&");
          }
          return t;
        }),
        (t.getUrlWithQueryParams = function (e) {
          let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return e + t.buildQueryParams(i);
        }),
        (t.getSubscriptionUrl = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t.getUrlWithQueryParams("", e);
        }),
        (t.getYearlySubscriptionUrl = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return t.getUrlWithQueryParams("", e);
        }));
    }