/**
 * Module 417
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
  require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(96) /* polyfill_JSON_stringify */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(3) /* polyfill_RegExp_toString */, require(151) /* DataModule_151 */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(322) /* stub_requires_669 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
  const n = module, r = require(938) /* module */, o = require(574) /* module */, a = require(577) /* module */, s = require(952) /* module */;
  require(824) /* URLSearchParamsPolyfill */;
  const {
      getUserName: l,
      isSharePointFileId: h,
      isGoogleDriveFileId: A,
      isSharePointFile: c,
      isGoogleDriveFile: p,
      isExternalFile: u,
      isExternalFileId: d,
      sameDomain: g,
      buildQueryParams: f
    } = require(254) /* GCommonNames */, {providers: m} = require(253) /* module */;
  if (n.version = "v1", Object({
      NODE_ENV: "production",
      APP_VERSION: "3.15.0",
      APP_VERSION_FRIENDLY: "i015.3",
      IS_BETA: false,
      BUILD_NUM: "8795",
      COMMIT_SHA: "566771f4dff3952a55c0d9d3c130f7e787dfdfa7",
      STORE_VENDOR: "",
      IS_COREL: false,
      IS_TRUNK: false,
      IS_PROD: true
    }).INCLUDE_POLYFILL_ON_CLIENT_API && "undefined" != typeof window && (!window.hasOwnProperty("URLSearchParams") || !window.hasOwnProperty("fetch") || !Array.hasOwnProperty("from"))) {
    var y = document.createElement("script");
    y.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=default,URL,fetch", document.body.insertBefore(y, document.body.firstChild);
  }
  let _ = [];
  "undefined" != typeof window && window.addEventListener && window.addEventListener("online", () => {
    for (; _.length;)
      _.pop().call(null);
  });
  const v = navigator.cookieEnabled;
  let b, C, w, E = {
      beforeSendRequest: e => {
        let {
          url: module,
          query: require
        } = e;
      },
      onError: (e, t, i) => {
      }
    };
  n.setHooks = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return Object.assign(E, exports);
  }, n.setToken = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    b = function (t) {
      let require = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : undefined;
      return T(F(n.url + t, Object.assign({}, exports, require, { lang: n.lang })), {}, r).then(I);
    }, C = function (t) {
      let require = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : undefined;
      return T(F(n.url + t, Object.assign({}, exports, require, { lang: n.lang })), { method: "HEAD" }, r);
    }, w = function (t, i) {
      let r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : undefined;
      return T(F(n.url + t, Object.assign({}, exports, r, { lang: n.lang })), i, o).then(I);
    };
  };
  const B = e => new URL(location.href).searchParams.get(e), x = B("token"), P = B("EWOSU"), S = B("directlink");
  n.setToken({
    token: x,
    EWOSU: P,
    directlink: S
  }), Object.assign(n, {
    GET: b,
    HEAD: C,
    fetchJSON: w,
    token: x,
    getUrl: F
  });
  const T = (e, t, i) => {
      var r = new URL(e);
      let o;
      if (r.searchParams.get("lang") || (r.searchParams.append("lang", n.getLanguage()), e = r.href), i) {
        const e = new AbortController();
        o = e.signal, setTimeout(() => e.abort(), i);
      }
      return fetch(e, {
        method: t.method || "GET",
        body: window.File && t.body instanceof window.File || window.FormData && t.body instanceof window.FormData ? t.body : t.body && JSON.stringify(t.body),
        credentials: "include",
        headers: Object.assign(!t || !t.body || window.FormData && t.body instanceof window.FormData ? {} : { "Content-Type": "application/json" }, { Accept: "json" }, !v && { Authorization: R.gApiToken || "" }, t.headers),
        signal: o
      }).then(i => {
        if (false === i.ok) {
          const {onError: n} = E || {};
          n && n.call(null, i, e, t);
        }
        return i;
      }).catch(i => {
        const {onError: n} = E || {};
        return n && n.call(null, i, e, t), i;
      });
    }, I = e => {
      if (204 == e.status) {
        if (e.text)
          return;
        return Promise.accept({
          status: e.status,
          cloud: true
        });
      }
      return e.status < 400 ? e.json ? e.json() : Promise.accept({
        status: e.status,
        cloud: true
      }) : e.json ? e.json().then(t => Promise.reject(Object.assign(t, {
        status: e.status,
        cloud: true
      }))) : Promise.reject({
        status: e.status || e.message,
        cloud: true
      });
    };
  function F(e, t) {
    (t = t || {}).lang || (t.lang = n.getLanguage()), E && "function" == typeof E.beforeSendRequest && E.beforeSendRequest({
      url: e,
      query: t
    });
    var i = new URLSearchParams();
    for (var r in t)
      "string" != typeof t[r] && "number" != typeof t[r] && "boolean" != typeof t[r] || i.set(r, t[r]);
    var o = i + "", a = e.indexOf("?") >= 0 ? "&" : "?";
    return e + (o && a + o);
  }
  let R = {};
  if (window.chrome && chrome.storage && chrome.storage.local)
    console.log("Chrome app detected"), chrome.storage.local.get("gApiToken", function (e) {
      R._token = e, Object.defineProperty(R, "token", {
        set(e) {
          chrome.storage.local.set({ gApiToken: e }), R._token = e;
        },
        get: () => R._token
      });
    });
  else
    try {
      R = window.localStorage;
    } catch (e) {
      console.log(e);
    }
  n.managementUrl = "https://cloud-management.corel.com", (n.url = window.location.origin, n.websocketURL = (window.location.protocol === "https:" ? "wss://" : "ws://") + window.location.host + "/license"), n.setLanguage = e => n.lang = e, n.getLanguage = () => n.lang, n.lang = 0, n.getAppStatus = e => T("".concat(n.managementUrl, "/api/v1/status/").concat(e), { method: "GET" }).then(e => I(e)), n.self = () => (n.url = location.origin, n), n.diagnostic = e => T("".concat(n.url, "/report/diagnostic"), {
    method: "POST",
    body: e
  }), n.getUserSettings = () => b("/user/settings"), n.updateUserSettings = (e, t) => w("/user/settings", {
    method: "PUT",
    body: Object.assign({}, { data: e }, { nonPublic: t })
  }), n.getPrice = function () {
    let {
      productId: exports,
      coupon: module,
      currency: require,
      country: n,
      provider: r
    } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    const o = m[r || a.Cleverbridge];
    return o ? o.getPrice({
      productId: exports,
      coupon: module,
      currency: require,
      country: n
    }) : Promise.resolve({});
  }, n.getProduct = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.Cleverbridge;
    return b("/payment/".concat(module, "/product"), e).then(e => e.productId ? n.getPrice(e).then(t => Object.assign(e, t)) : e);
  }, n.subscription = {}, n.subscription.getNextBillingDate = () => b("/subscription/nextbillingdate"), n.subscription.isLifetime = () => b("/subscription/lifetime").then(e => {
    let {lifetime: module} = e;
    return !!module;
  }), n.activateSubscription = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.Cleverbridge;
    return b("/subscription/".concat(module, "/activate/").concat(e));
  }, n.deactivateSubscription = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.Cleverbridge;
    return b("/subscription/".concat(module, "/deactivate/").concat(e));
  }, n.isEnabledSubscriptions = () => b("/subscription/test").then(e => 1 == e.status), n.confirmEmail = e => b("/confirm-email/".concat(e)), n.resendEmailConfirmation = e => w("/resend-confirm-email", {
    method: "POST",
    body: e
  }), n.quota = () => b("/quota").then(e => e.quota), n.listen = function (e, t) {
    let require = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
    const r = new n.WebSocketClient(), o = e => {
        try {
          t(e.data);
        } finally {
          require && r.close();
        }
      };
    return r.connect(e), r.on(e.substr(1), o), r;
  }, n.license = {
    get: () => b("/license"),
    listen: e => n.listen("/license", e, false),
    activateTrial: e => T("".concat(n.url, "/activate-trial/").concat(e || ""), { method: "POST" }),
    resetTrial: () => T(n.url + "/reset-trial", { method: "POST" }),
    everSubscribed: () => b("/ever-subscribed"),
    totalSubscriptionDays: () => b("/total-subscription-days")
  }, n.checkout = function (e, t) {
    let require = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
    const r = {}, o = new Promise(e => Object.assign(r, { resolve: e })), a = n.listen("/payload", e => r.resolve(e), true);
    if (t instanceof HTMLElement) {
      let n = document.createElement("iframe"), {events: r} = require;
      r && Object.keys(r).forEach(e => n.addEventListener(e, r[e], false)), t.appendChild(n), n.setAttribute("src", e);
    } else {
      let i;
      if ("_blank" === t)
        i = window.open(e, "Checkout");
      else {
        var s = null != window.screenLeft ? window.screenLeft : screen.left, l = null != window.screenTop ? window.screenTop : screen.top, h = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, A = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, c = 1000, p = 680, u = h / 2 - c / 2 + s, d = A / 2 - p / 2 + l;
        i = window.open(e, "Checkout", "scrollbars=yes, width=" + c + ", height=" + p + ", top=" + d + ", left=" + u);
      }
      window.focus && i.focus();
    }
    return {
      promise: o,
      cancel: () => a.close()
    };
  }, n.coupon = {}, n.coupon.activate = e => b("/coupon/activate/" + e), n.coupon.getReport = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return w(F("/coupon/report", exports), { method: "GET" });
  }, n.coupon.getGeneralReport = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return w(F("/coupon/report/general", exports), { method: "GET" });
  }, n.coupon.create = e => w("/coupon/create", {
    method: "PUT",
    body: e
  }), n.coupon.export = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return b("/coupon/report/export", exports);
  }, n.coupon.exportLink = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return F("".concat(n.url, "/coupon/report/export"), exports);
  }, n.coupon.revokeUsage = e => w("/coupon/usage/" + e + "/revoke", { method: "POST" }), n.coupon.batch = {}, n.coupon.batch.removeUnusedCoupons = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon/unused", {
      method: "DELETE",
      body: { coupons: exports }
    });
  }, n.coupon.batch.deleteCoupons = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon", {
      method: "DELETE",
      body: { coupons: exports }
    });
  }, n.coupon.batch.revokeCoupons = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon/revoke", {
      method: "POST",
      body: { coupons: exports }
    });
  }, n.coupon.batch.removeUnusedCouponsByGroups = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon/group/unused", {
      method: "DELETE",
      body: { groups: exports }
    });
  }, n.coupon.batch.deleteCouponsByGroups = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon/group", {
      method: "DELETE",
      body: { groups: exports }
    });
  }, n.coupon.batch.revokeCouponsByGroups = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
    return w("/coupon/group/revoke", {
      method: "POST",
      body: { groups: exports }
    });
  }, n.getPurchase = e => b("/purchase/" + e), n.listPurchases = e => b("/purchases", e), n.hasPurchases = e => C("/purchases", Object.assign(e || {}, { limit: 1 })).then(e => 204 !== e.status && e.status < 400), n.listPurchasedProducts = e => b("/purchase/products", e), n.getPurchasedFile = e => b("/purchase/product/" + e + "/file"), n.getPurchasedProduct = e => b("/purchase/product/" + e), n.hasPurchasedProduct = e => C("/purchase/product/" + e).then(e => 204 !== e.status && e.status < 400), n.getProviderContentDetails = e => b("/store/v1/content/details/".concat(e)), n.getProviderContentFile = e => b("/store/v1/content/file/".concat(e)), n.getProviderExternalAsset = e => b("/provider/v1/asset/".concat(e)), n.software = {
    getRelease: function () {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      return b("/software/release", exports);
    }
  }, n.getSubscriptionByPurchase = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : a.Cleverbridge;
    return b("/subscription/".concat(module, "/purchase/").concat(e));
  }, n.getLocation = () => b("/geo/me"), n.isNewsletterRequired = () => b("/newsletter/required").then(e => 1 == e.result), n.getUser = (e, t) => b("/user".concat(e ? "/" + e : "", "?public=").concat(t ? 1 : 0)), n.updateUser = e => w("/user", {
    method: "PUT",
    body: e
  }), n.updateAvatar = e => w("/user/me/avatar", {
    method: "PUT",
    body: e,
    headers: { "Content-Type": e.type }
  }), n.listUsers = e => b("/users", e), n.listFiles = e => b("/file", e), n.listMarket = e => b("/market", e), n.listMarketV2 = e => b("/v2/market", e), n.listVersions = (e, t) => t && t.split("").every(e => [
    "t",
    "s",
    "r",
    "f"
  ].includes(e)) ? b("/file/" + e + "/versions/type/" + t) : b("/file/" + e + "/versions"), n.getFile = (e, t, i, n) => {
    var r = "";
    return n && [
      "t",
      "s",
      "r"
    ].indexOf(n) >= 0 && (r = "/type/" + n), "string" == typeof e ? b("/file/" + e + (t ? "/full" : "") + (i ? "/version/" + i + r : "")) : e.token ? b("/share/" + e.token + (t ? "/full" : "")) : b("/file/" + e.id + (t ? "/full" : "") + (i ? "/version/" + i + r : ""));
  }, n.getFileExtended = e => n.getFile(e, true).then(e => new o(e)), n.getCollaborators = e => b("/file/" + e + "/collaborators"), n.getExternalFile = e => b("/file/external/".concat(e)).then(e => new o(e)), n.annotations = {}, n.annotations.getHistory = e => b("/file/" + e + "/annotations/history"), n.annotations.getDesignHistory = e => b("/file/" + e + "/annotations/history/design"), n.resolveUrls = (e, t) => b("/file/" + e + "/urls/" + t), n.createFile = e => w("/file", {
    method: "POST",
    body: e
  }), n.updateFile = (e, t) => w("/file/" + e, {
    method: "PUT",
    body: t
  }), n.updateFilePassword = (e, t) => w("/file/" + e + "/password", {
    method: "PUT",
    body: t
  }), n.updateFileData = (e, t) => w("/file/" + e + "/data", {
    method: "PUT",
    body: t
  }), n.updateAnnotations = (e, t, i) => i ? w("/file/" + e + "/annotations", {
    method: "PUT",
    body: t
  }, { token: i }) : w("/file/" + e + "/annotations", {
    method: "PUT",
    body: t
  }), n.getAnnotations = (e, t) => t ? b("/file/" + e + "/annotations", { token: t }) : b("/file/" + e + "/annotations"), n.updateStatus = (e, t) => w("/file/" + e + "/status", {
    method: "POST",
    body: { status: t }
  }), n.signedPutUrls = (e, t) => w("/file/" + e + "/urls", {
    method: "PUT",
    body: t
  }), n.deleteFile = e => w("/file/" + e, { method: "DELETE" }), n.copyFile = (e, t) => w("/file/" + e, {
    method: "COPY",
    body: t
  }), n.shareWithUser = (e, t, i) => w("/file/" + e + "/user/" + t, {
    method: "PUT",
    body: i
  }), n.unshareWithUser = (e, t) => w("/file/" + e + "/user/" + t, { method: "DELETE" }), n.createShare = (e, t, i) => w("/file/" + e + "/share", {
    method: "POST",
    body: Object.assign({ annots: i }, t)
  }), n.updateShare = (e, t) => w("/share/" + e, {
    method: "PUT",
    body: t
  }), n.deleteShare = e => w("/share/" + e, { method: "DELETE" }), n.getShare = (e, t) => b("/share/" + e + (t ? "/full" : "")), n.checkEnterpriseToken = e => b("/share/checkenterprise/" + e), n.getSharingStatistics = () => b("/sharing/statistics").then(e => new r(e)), n.share = {}, n.share.sendInvitationEmails = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
    return w("/share/" + e + "/send-invitation-emails", {
      method: "POST",
      body: { emails: module }
    });
  }, n.requestPermission = (e, t) => w("/request/permission/" + e, {
    method: "POST",
    body: t
  }), n.usage = (e, t) => w("/file/" + e + "/usage", {
    method: "PUT",
    body: t
  }), n.updateFileFormat = (e, t) => w("/file/" + e + "/fileformat", {
    method: "POST",
    body: t
  }), n.listComments = (e, t) => b("/file/" + e + "/comment", t), n.updateComment = (e, t) => w("/comment/" + e, {
    method: "PUT",
    body: t
  }), n.deleteComment = e => w("/comment/" + e, { method: "DELETE" }), n.createComment = (e, t) => w("/file/" + e + "/comment", {
    method: "POST",
    body: t
  }), n.createReply = (e, t) => w("/comment/" + e + "/reply", {
    method: "POST",
    body: t
  }), n.listAnonymousTokens = () => w("/anonymous/token", { method: "GET" }), n.createAnonymousToken = () => w("/anonymous/token", { method: "PUT" }), n.deleteAnonymousToken = e => w("/anonymous/token/" + e, { method: "DELETE" }), n.popup = (e, t) => function (e, t) {
    e = F(e, Object.assign({}, { origin: location.origin }));
    var i = new URL(n.url + e);
    const r = {
      newtab: t,
      name: "Sign in - Gravit",
      url: i.toString()
    };
    if (!t) {
      var o = null != window.screenLeft ? window.screenLeft : screen.left, a = null != window.screenTop ? window.screenTop : screen.top, l = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, A = l / 2 - 230 + o, c = h / 2 - 340 + a;
      Object.assign(r, {
        w: 460,
        h: 680,
        top: c,
        left: A
      });
    }
    var p = k.call(null, r);
    if (!p)
      return Promise.reject({ code: s.ERR_POPUP_HAS_BEEN_BLOCKED });
    return new Promise(function (e, t) {
      window.addEventListener("message", function i(n) {
        const {
          data: {token: r} = {}
        } = n;
        if (r) {
          if (n.source != p && !p && n.origin.indexOf("chrome-extension:") < 0)
            return console.warn("Token was rejected because there is an invalid source", n.source), t();
          p && p.close(), window.removeEventListener("message", i), e(n.data);
        }
      });
    });
  }((e || "").replace(/^(?!\/)/, "/"), t).then(function (e) {
    let {
      token: t,
      userSignup: require
    } = e;
    return v || (R.gApiToken = t), n.getUser().then(e => Object.assign(e, { new: "true" == require }));
  }), n.signin = e => T(n.url + "/signin", {
    method: "POST",
    body: e
  }).then(e => (v || (R.gApiToken = e.headers.get("Authorization")), I(e))), n.signup = e => T(n.url + "/signup", {
    method: "POST",
    body: Object.assign({ locale: navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage }, e)
  }).then(e => (v || (R.gApiToken = e.headers.get("Authorization")), I(e))), n.recaptchaKey = () => b("/recaptchakey"), n.initRecaptcha = (e, t) => {
    if (t = t || window, e) {
      var require = document.createElement("iframe");
      require.src = n.url + "/recaptcha", t.document.body.appendChild(require), require.addEventListener("load", function () {
        t.grecaptcha = {
          render: require.contentWindow.window.grecaptcha.render,
          reset: require.contentWindow.window.grecaptcha.reset,
          execute: require.contentWindow.window.grecaptcha.execute
        };
      });
    } else {
      var r = null;
      Object.defineProperty(window, "grecaptchaWidget", { get: () => (r && document.body.removeChild(r), (r = document.createElement("div")).setAttribute("class", "g-recaptcha"), document.body.appendChild(r), r) });
      var o = document.createElement("script");
      o.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=explicit"), o.setAttribute("async", ""), o.setAttribute("defer", ""), document.head.appendChild(o);
    }
  }, n.resetPassword = e => w("/reset-password", {
    method: "POST",
    body: e
  }), n.updatePassword = (e, t) => w("/reset-password/".concat(t), {
    method: "POST",
    body: e
  }), n.signout = n.logout = () => b("/signout"), n.formatError = e => {
    let module;
    if ("string" == typeof e && (module = e), !module && e && e.message && (module = e.message), !module && e && e.errors) {
      const i = new Map(e.errors);
      module = Array.from(i.values()).join("<br>");
    }
    return !module && e && (module = e), module;
  }, n.getLinkLearnMorePro = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}, module = navigator.userAgent.match(/Electron/) ? "desktop" : "web";
    return location.origin && 0 === location.origin.indexOf("chrome") && (module = "chrome"), Object.assign(exports, { platform: module }), n.url + "/get-pro/learnmore" + f(exports);
  };
  const D = e => {
    let {
      newtab: module,
      top: require,
      left: n,
      w: r,
      h: o,
      url: a,
      name: s
    } = e;
    var l;
    return (l = module ? window.open(a, s) : window.open(a, s, "scrollbars=yes, width=" + r + ", height=" + o + ", top=" + require + ", left=" + n)) && l.focus && l.focus(), l;
  };
  let k = D;
  n.setOAuthFactory = e => {
    k = e || D;
  }, n.getPresetTemplate = e => b("/assets/templates/pod", e), n.getUnsplashPhotos = e => b("/unsplash/featured", e), n.searchUnsplashPhotos = e => b("/unsplash/search/photos", e), n.getUnsplashPhotoUrl = e => b("/unsplash/download/photo", e), n.getExampleFiles = e => b("/example-files", e), n.getUserName = e => l(e, true), n.listAutoSaves = e => b("/file/".concat(e, "/autosave/versions")), n.getAutoSave = (e, t) => b("/file/".concat(e, "/autosave").concat(t ? "/version/".concat(t) : "")), n.getAutoSaveThumbnail = (e, t) => b("/file/".concat(e, "/autosave/thumbnail").concat(t ? "/version/".concat(t) : "")), n.uploadAutoSave = (e, t) => w("/file/".concat(e, "/autosave"), {
    method: "PUT",
    body: { md5: t }
  }), n.commitAutoSaveFileUpdate = e => w("/file/".concat(e, "/autosave/commit"), { method: "POST" }), n.commitManualFileUpdate = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
    return w("/file/".concat(e, "/manual/commit"), {
      method: "POST",
      body: { types: module }
    });
  }, n.isSharePointFileId = h, n.isGoogleDriveFileId = A, n.isSharePointFile = c, n.isGoogleDriveFile = p, n.sameDomain = g, n.isExternalFileId = d, n.isExternalFile = u, n.getRichTooltipVideoURL = e => "".concat(n.url, "/rich-tooltip-video/").concat(e), n.fetchTranslationsURL = (e, t) => b("/i18n-url/".concat(e, "/").concat(t)), n.cloudServices = {
    googleDrive: {
      getAccessToken: () => b("/cloudservices/googledrive/access"),
      getClientConfiguration: () => b("/cloudservices/googledrive/configuration"),
      openFilePicker: e => {
        const module = null != window.screenLeft ? window.screenLeft : screen.left, require = null != window.screenTop ? window.screenTop : screen.top, r = (window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - 512 + module, o = (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - 384 + require, a = "".concat(n.url, "/googleapi/picker/").concat(encodeURIComponent(e), "?lang=").concat(n.getLanguage()), s = window.open(a, "Google Picker", "scrollbars=yes, width=1024, height=768, top=" + o + ", left=" + r);
        return window.focus && s.focus(), s;
      }
    },
    googleAPI: {
      getToken: e => b("/googleapi/token?code=".concat(e)),
      getRefreshToken: e => b("/googleapi/token?refresh_token=".concat(e)),
      getTokenInfo: e => T("https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=".concat(e), { method: "GET" }).then(I),
      getUserInfo: e => T("https://www.googleapis.com/oauth2/v3/userinfo?access_token=".concat(e), { method: "GET" }).then(I),
      revokeToken: e => T("https://accounts.google.com/o/oauth2/revoke?token=".concat(e), {
        method: "GET",
        headers: { "Content-type": "application/x-www-form-urlencoded" }
      })
    }
  }, n.client = { getConfiguration: () => b("/client/configuration") }, n.HTTP_STATUS_CODES = require(578) /* module */, n.ERROR_CODES = s, n.COLLABORATION_EVENTS = require(953) /* module */, n.AUTHENTICATION_EVENTS = require(954) /* module */, n.PAYMENT_EVENTS = require(955) /* module */, require(956) /* module */(n), require(957) /* module */(n), require(959) /* module */(n), require(960) /* module */(n), require(961) /* module */(n), require(962) /* module */(n), require(963) /* module */(n), require(964) /* module */(n), require(965) /* module */(n), require(966) /* module */(n), require(967) /* module */(n), require(968) /* module */(n), require(969) /* module */(n), require(970) /* module */(n);
}
