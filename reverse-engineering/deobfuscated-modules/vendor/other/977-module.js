/**
 * Module 977
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
  require(58) /* polyfill_Array_includes */, require(19) /* polyfill_Array_iterator */, require(30) /* polyfill_Object_assign */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(527) /* DataModule_527 */, require(107) /* polyfill_RegExp_test */, require(71) /* polyfill_String_includes */, require(151) /* DataModule_151 */, require(34) /* polyfill_String_replace */, require(91) /* polyfill_String_trim */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(13) /* stub_requires_679 */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
  const n = require(170) /* GLocale */, r = require(325) /* GLocaleKey */, o = require(171) /* module_171 */, a = require(375) /* module */, s = (require(373) /* DateAPI */, require(354) /* module */), l = require(582) /* module */, {PasswordLength: h} = require(581) /* module */, A = require(978) /* module */, {Events: c} = (require(584) /* module */, require(431) /* module */), {learnmore: p} = require(253) /* module */, u = require(980) /* module */, {
      PRIVACY_URL: d,
      SUPPORT_URL: g,
      IMPORT_EXPORT_DOCUMENTATION: f,
      VECTOR_PRODUCT_PAGE: m,
      CORELDRAW_PAGE: y
    } = require(374) /* module */, {
      getSupportUrl: _,
      getSubscriptionUrl: v,
      getUrlWithQueryParams: b
    } = require(254) /* GCommonNames */, C = (require(430) /* module */, /xmas/), w = e => {
      32 === (e.which || e.keyCode) && (e.preventDefault(), o(e.target).click());
    }, E = e => {
      try {
        return decodeURIComponent(e);
      } catch (e) {
        console.warn(e);
      }
      return e;
    }, B = navigator.vendor && /apple/i.test(navigator.vendor) || !!window.safari || -1 != navigator.userAgent.indexOf("safari") && !(-1 != navigator.userAgent.indexOf("chrome") && -1 != navigator.userAgent.indexOf("version/"));
  o(document).on("keydown", e => {
    if (9 === (e.which || e.keyCode)) {
      const t = o(":focus"), i = o(document.body).find("a, button, :input, [tabindex]").filter(":visible:not(:disabled)");
      if (B) {
        e.preventDefault();
        let n = 0;
        i.each(function (e) {
          if (o(this).closest(t)[0])
            return n = ++e, false;
        }), n >= i.length && (n = 0), i.eq(n).focus();
      } else
        t[0] && !i.last().closest(t)[0] || (e.preventDefault(), i.first().focus());
    }
  });
  const x = () => {
    let exports = o("<div></div>").addClass("input-field"), module = o("<input>").attr("type", "password").attr("required", true).attr("data-property", "password").appendTo(exports);
    return o("<span></span>").addClass("g-cloud-icon-hide").on("click", e => {
      o(e.target).closest("span").toggleClass("g-cloud-icon-display g-cloud-icon-hide").hasClass("g-cloud-icon-hide") ? module.attr("type", "password") : module.attr("type", "text");
    }).appendTo(exports), exports;
  };
  function P(e) {
    let {
      impl: module,
      gApi: require,
      anonymous: s,
      version: l,
      runtime: h,
      options: A = {},
      flow: c,
      query: p = {}
    } = e;
    this._impl = module, this._gApi = require, this._anonymous = !!s, this._version = l, this._runtimeCode = h, this._options = A, this._closeable = true, this._flow = c, this._query = p, n.setLanguage(this._impl.getLanguage()), this._gApi.setLanguage(this._impl.getLanguage());
    let u, d, g = false, f = true, m = new URL(window.location.href);
    if (m.searchParams) {
      u = m.searchParams.get("webUrl"), d = m.searchParams.get("appUrl");
      let e = m.searchParams.get("newuser"), t = m.searchParams.get("closeable");
      g = e && "false" != e, f = !t || "false" != t;
    } else {
      for (var y, v = /[?&]([^=#]+)=([^&#]*)/g, C = {}; y = v.exec(window.location.href);)
        C[y[1]] = y[2];
      u = C.webUrl, d = C.appUrl, g = C.newUser && "false" != C.newUser, f = !C.closeable || "false" != C.closeable;
    }
    if (u)
      try {
        u = window.atob(u);
      } catch (e) {
        u = "";
      }
    if (d)
      try {
        d = window.atob(d);
      } catch (e) {
        d = "";
      }
    this._webUrl = u, this._appUrl = d, this._newUser = g, this._closeable = f, this._dialog = o("<div/>").addClass("g-dialog-content"), this._modal = o("<div/>").addClass("g-dialog-modal hide"), this._overlay = o("<div/>").addClass("g-dialog-overlay hide"), this._closeButton = o("<div></div>").css("display", "none").addClass("g-cloud-ui-btn-close").append(o("<span></span>").addClass("g-cloud-icon-close")).on("click", this.close.bind(this)).appendTo(this._dialog);
    let w = o("<header></header>").appendTo(this._dialog);
    this._title = o("<span></span>").addClass("title").append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-discontinued")))).appendTo(w), this._container = o("<div></div>").addClass("container").appendTo(this._dialog), this._helpTip = o("<div></div>").addClass("help-tip").append(o("<span></span>").html(n.get(new r("GLoginDialog", "text.tooltip-trouble-login")).replace("%support-link", "<span class=\"support-link\">".concat(_(), "</span>")))), this._helpTip.find(".support-link").on("click", function () {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_support"), null, false), this._impl.openExternalLink({
        dialog: this,
        link: b(_(), this._getUTMCampaignParams())
      });
    }.bind(this)), this._dialog.on("click", e => {
      var t = o(e.target);
      t.hasClass("g-cloud-icon-question") || t.hasClass("help-tip") || t.parent().hasClass("help-tip") || !this._helpTip.hasClass("visible") || this._helpTip.removeClass("visible");
    });
  }
  P.Forms = {
    SignIn: "sign-in",
    SignUp: "sign-up",
    ResetPassword: "reset-password",
    Thanks: "thanks"
  }, P.prototype._getOptions = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return Object.assign({}, exports, this._options);
  }, P.prototype._runtimeCode = null, P.prototype._query = null, P.prototype._flow = null, P.prototype._anonymous = false, P.prototype._formContent = null, P.prototype._title = null, P.prototype._dialog = null, P.prototype._callback = null, P.prototype._coupon = null, P.prototype._activePanel = P.Forms.SignIn, P.prototype._shouldBypassEmailVerification = function () {
    const exports = this._query && this._query.bypassEmailVerification;
    return !!this._anonymous && "string" == typeof exports && "false" !== exports;
  }, P.prototype._isNewPurchaseFlow = function () {
    return !!this._flow && ("purchase_flow_new" === this._flow || "purchase" === this._flow);
  }, P.prototype.open = function (e) {
    const module = (document.cookie || "").match(/_gcoupon=[^;]+/);
    this._coupon = module ? module[0].slice("_gcoupon=".length) : null, this._coupon && C.test(this._coupon) && this._title.empty().append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-xmas-title")))).append(o("<br>")).append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-xmas-subtitle")))), this._buildForm().appendTo(this._container), this._isNewPurchaseFlow() || this._buildProInfo().appendTo(this._container), o("<span></span>").addClass("version").html(this._getFormattedVersion()).appendTo(this._dialog), o("<footer></footer>").appendTo(this._dialog), a("login-signup_login_open", null, true), this._activatePanel(P.Forms.SignIn), this._anonymous && this._closeable && this._closeButton.css("display", ""), e.addClass("g-cloud-ui g-cloud-ui-embedded g-cloud-ui-login").toggleClass("g-anonymous", this._anonymous).toggleClass("g-new-purchase-flow", this._isNewPurchaseFlow()).append(o("<div></div>").addClass("background").append(o("<div></div>").addClass("left")).append(o("<div></div>").addClass("right"))).append(o("<div></div>").addClass("g-cloud-ui-login-dialog").append(this._dialog)).append(this._modal).append(this._overlay), p || e.addClass("g-cloud-ui-no-learn-more"), this.focus();
  }, P.prototype._getFormattedVersion = function () {
    const exports = this._getRuntime(), module = exports ? " ".concat(exports.abbr) : "";
    return n.get(new r("GLoginDialog", "text.version")).replace("%version", this._version) + module;
  }, P.prototype._getRuntime = function () {
    if (this._runtimeCode) {
      return Object.values(l).find(e => e.code === this._runtimeCode);
    }
    return null;
  }, P.prototype.close = function () {
    this._toggleLoading(true), this._impl.close({ dialog: this });
  }, P.prototype.openPurchaseFlow = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    this._toggleLoading(true), this._impl.openPurchaseFlow({
      dialog: this,
      options: this._getOptions(exports)
    });
  }, P.prototype._buildForm = function () {
    let exports = o("<div></div>").addClass("content");
    return o("<div></div>").addClass("column-layout sparse header").append(o("<span></span>").addClass("title text-left").attr("id", "form-title")).append(o("<span></span>").append(o("<span></span>").addClass("g-cloud-icon-question").on("click", function () {
      let exports = this._getStatMappedForm();
      a("login-signup_".concat(exports, "_help"), null, true), this._helpTip.toggleClass("visible");
    }.bind(this))).append(this._helpTip)).appendTo(exports), o("<div></div>").addClass("message").append(o("<span></span>")).appendTo(exports), this._buildSignin().appendTo(exports), this._buildSignup().appendTo(exports), this._buildResetPassword().appendTo(exports), this._formContent = exports, o("<div></div>").addClass("form-panel").append(exports);
  }, P.prototype._onResetPasswordSubmit = async function (e, t) {
    try {
      const i = await this._gApi.resetPassword({
        email: e.find("input[data-property=\"email\"]").val(),
        appUrl: this._appUrl,
        webUrl: this._webUrl,
        recaptcha: t
      });
      this._showMessage(i && i.message, "info");
    } catch (e) {
      this._handleError(e);
    }
    A.isAvailable() && grecaptcha.reset(this._resetPasswordRecaptchaWidget);
  }, P.prototype._buildResetPassword = function () {
    let exports = o("<div></div>").addClass("panel").attr("id", "reset-password").attr("data-title", n.get(new r("GLoginDialog", "text.forgot-password"))), module = o("<form></form>").appendTo(exports);
    if (A.isAvailable()) {
      const e = o("<div></div>").addClass("g-recaptcha").appendTo(module);
      this._gApi.recaptchaKey().then(i => {
        this._resetPasswordRecaptchaWidget = grecaptcha.render(e[0], {
          sitekey: i,
          callback: e => this._onResetPasswordSubmit(module, e),
          size: "invisible"
        });
      });
    }
    return module.on("submit", e => (a("login-signup_forgot-password_send-request", null, true), this._showMessage(), e.preventDefault(), A.isAvailable() ? navigator.onLine ? grecaptcha.execute(this._resetPasswordRecaptchaWidget) : u.openRetryConnection(null, () => {
      grecaptcha.execute(this._resetPasswordRecaptchaWidget);
    }) : this._onResetPasswordSubmit(module), false)), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-up-email"))).appendTo(module), o("<input>").attr("type", "email").attr("data-property", "email").attr("autofocus", true).attr("required", true).appendTo(module), o("<button></button>").attr("type", "submit").addClass("fit").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.reset-password-send")))).appendTo(module), o("<div></div>").addClass("spacer").appendTo(exports), o("<footer></footer>").append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.sign-up-go-back"))).keydown(w).on("click", () => {
      a("login-signup_forgot-password_back-to-login", null, true), this._activatePanel(P.Forms.SignIn);
    })).appendTo(exports), exports;
  }, P.prototype._buildSignup = function () {
    let exports = o("<div></div>").addClass("panel").attr("id", "sign-up").attr("data-title", n.get(new r("GLoginDialog", "text.title-create-account")).replace("%days", window.__TRIAL_DAYS__ || 15));
    o("<div></div>").addClass("column-layout normal subheader").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-already")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.sign-up-go-back"))).keydown(w).on("click enter", () => {
      a("login-signup_create-account_back-to-login", null, true), this._activatePanel(P.Forms.SignIn);
    })).appendTo(exports);
    let module = o("<form></form>").appendTo(exports);
    const require = A.isAvailable(), s = e => {
        const n = module.find("input[data-property=\"email\"]").val(), r = module.find("input[data-property=\"password\"]").val(), o = e, a = module.find("input[data-property=\"newsletter\"]").is(":checked"), s = module.find("input[data-property=\"firstname\"]").val().trim(), l = module.find("input[data-property=\"lastname\"]").val().trim(), h = this._appUrl, A = this._webUrl, c = this._flow;
        this._toggleLoading(true), this._gApi.signup({
          email: n,
          password: r,
          app: "designer",
          recaptcha: o,
          newsletter: a,
          name: s,
          last_name: l,
          appUrl: h,
          webUrl: A,
          flow: c
        }).then(e => this._postLogin(Object.assign(e, { new: true }))).catch(e => {
          this._toggleLoading(false), this._handleError(e), require && grecaptcha.reset(this._recaptchaWidget);
        });
      };
    module.on("submit", e => (a("login-signup_create-account_create-account", null, true), this._showMessage(), e.preventDefault(), require ? navigator.onLine ? grecaptcha.execute(this._recaptchaWidget) : u.openRetryConnection(null, () => {
      grecaptcha.execute(this._recaptchaWidget);
    }) : s(), false));
    const {
      firstName: l = "",
      lastName: c = "",
      email: p = ""
    } = this._query || {};
    if (o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-up-email"))).appendTo(module), o("<input>").attr("type", "email").attr("data-property", "email").attr("autofocus", true).attr("required", true).val(E(p)).appendTo(module), o("<div></div>").addClass("column-layout text-left top normal").append(o("<div></div>").addClass("row-layout").append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.first-name")))).append(o("<input>").attr("type", "text").attr("data-property", "firstname").attr("required", true).val(E(l)))).append(o("<div></div>").addClass("row-layout").append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.last-name")))).append(o("<input>").attr("type", "text").attr("data-property", "lastname").attr("required", true).val(E(c)))).appendTo(module), o("<label></label>").addClass("column-layout sparse").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-password")))).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-password-min-max")).replace("%min-number", h.Minimum).replace("%max-number", h.Maximum))).appendTo(module), x().appendTo(module), o("<label></label>").addClass("column-layout normal").append(o("<input>").attr("type", "checkbox").on("change", e => {
        let require = o(e.target).is(":checked");
        a("login-signup_create-account_i-agree", require, true), module.find("button[type=\"submit\"]").prop("disabled", !require).toggleClass("g-disabled", !require);
      })).append(o("<span></span>").append(o("<span></span>").html(n.get(new r("GLoginDialog", "text.agreement")).replace("%terms-of-use", o("<span/>").addClass("link").addClass("terms-of-use").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.terms-use"))).prop("outerHTML")).replace("%end-user-license-agreement", o("<span/>").addClass("link").addClass("end-user-license-agreement").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.eula"))).prop("outerHTML")) + " ")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.privacy-statement")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.privacy-statement-link"))).keydown(w).on("click", () => (a("login-signup_create-account_privacy-policy", null, true), this._impl.openExternalLink({
        dialog: this,
        link: b(d, this._getUTMCampaignParams())
      }), false)))).appendTo(module), module.find(".terms-of-use").keydown(w).on("click", () => (a("login-signup_create-account_terms-of-use", null, true), this._impl.openExternalLink({
        dialog: this,
        link: b("https://www.corel.com/terms/", this._getUTMCampaignParams())
      }), false)), module.find(".end-user-license-agreement").keydown(w).on("click", () => (a("login-signup_create-account_eula", null, true), this._impl.openExternalLink({
        dialog: this,
        link: b("https://www.corel.com/eula", this._getUTMCampaignParams())
      }), false)), o("<label></label>").addClass("normal").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.info-privacy-statement")))).appendTo(module), o("<label></label>").addClass("column-layout normal").append(o("<input>").attr("type", "checkbox").attr("data-property", "newsletter").prop("checked", false)).on("change", e => {
        a("login-signup_create-account_subscribe", o(e.target).is(":checked"), true);
      }).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.newsletter")))).appendTo(module), require) {
      let e = o("<div></div>").addClass("g-recaptcha").appendTo(module);
      this._gApi.recaptchaKey().then(t => {
        this._recaptchaWidget = grecaptcha.render(e[0], {
          sitekey: t,
          callback: s,
          size: "invisible"
        });
      });
    }
    o("<button></button>").attr("type", "submit").addClass("fit").append(o("<span></span>").text(this._isNewPurchaseFlow() ? (e => {
      if (!e)
        return n.get(new r("GLoginDialog", "text.continue"));
      return (n.get(new r("GLoginDialog", "text.continue-to-".concat(e))) || n.get(new r("GLoginDialog", "text.continue"))).replace("%days", window.__TRIAL_DAYS__ || 15);
    })(this._query && this._query.to) : n.get(new r("GLoginDialog", "text.sign-up-now")))).addClass("g-disabled").prop("disabled", true).appendTo(module), o("<div></div>").addClass("column-layout separator").append(o("<hr>")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.or"))).addClass("or-element")).append(o("<hr>")).appendTo(exports), o("<div></div>").addClass("column-layout oauth-buttons").append(this._createFacebookButton(new r("GLoginDialog", "text.sign-facebook"))).append(this._createGoogleButton(new r("GLoginDialog", "text.sign-google"))).appendTo(exports), o("<div></div>").addClass("spacer").appendTo(exports);
    let g = o("<footer></footer>").appendTo(exports);
    return o("<span></span>").addClass("info").html(n.getValue("GLoginDialog", "text.create-account-info").replace("%privacy-link", d)).appendTo(g).find("a").on("click", e => {
      e.preventDefault(), e.stopImmediatePropagation();
      const module = o(e.target).closest("a").attr("href"), require = module.includes("terms") ? "terms-of-use" : "privacy-policy";
      return a("login-signup_create-account_".concat(require), null, true), this._impl.openExternalLink({
        dialog: this,
        link: b(module, this._getUTMCampaignParams())
      }), false;
    }), exports;
  }, P.prototype._createGoogleButton = function (e) {
    return o("<button></button>").addClass("sign-google oauth column-layout").append(o("<span></span>").addClass("icon").addClass("g-cloud-icon-google")).append(o("<span></span>").addClass("txt").text(n.get(e))).on("click", () => {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_login-google"), null, true), this._oauth("google");
    });
  }, P.prototype._createFacebookButton = function (e) {
    return o("<button></button>").addClass("sign-facebook oauth column-layout").append(o("<span></span>").addClass("icon").addClass("g-cloud-icon-facebook")).append(o("<span></span>").addClass("txt").text(n.get(e))).on("click", () => {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_login-facebook"), null, true), this._oauth("facebook");
    });
  }, P.prototype._buildThanks = function (e) {
    const module = o("#thanks");
    if (module.length)
      return module;
    this._closeButton.css("display", "none");
    let require = o("<div></div>").addClass("panel").attr("id", "thanks");
    o("<header></header>").append(o("<span></span>").html(n.get(new r("GLoginDialog", "text.account-created")))).appendTo(require);
    let s = o("<main></main>").appendTo(require);
    return this._title.empty().append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-title-account-created")))), e.trial_created || (a("login-signup_account-created_trial-activated", null, true), this._gApi.license.activateTrial().then(() => {
      (e.email_verified || this._shouldBypassEmailVerification()) && this.close();
    }).catch(e => this._handleError(e))), e.email_verified || (o("<span></span>").addClass("title").html(n.get(new r("GLoginDialog", "text.confirmation-account-created")).replace("%email", e.email)).appendTo(s), o("<span></span>").addClass("subtitle").html(n.get(new r("GLoginDialog", "text.confirmation-account-created-subtitle")).replace("%days", window.__TRIAL_DAYS__ || 15)).appendTo(s)), e.email_verified || o("<footer></footer>").append(o("<span></span>").addClass("font-11-px").text(n.get(new r("GLoginDialog", "text.email-not-received-part-1")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.email-not-received-part-2"))).keydown(w).on("click", async () => {
      a("login-signup_account-created_send-activation-email", null, true), require.css("min-height", ""), this._showMessage(), this._toggleLoading(true);
      try {
        const t = this._webUrl, n = this._appUrl;
        this._gApi.resendEmailConfirmation({
          email: e.email,
          force: true,
          webUrl: t,
          appUrl: n
        }).then(e => {
          this._showMessage(e && e.message, "info"), require.css("min-height", "446px");
        }).catch(e => this._handleError(e));
      } finally {
        this._toggleLoading(false);
      }
    })).appendTo(require), require;
  }, P.prototype._buildSignin = function () {
    let exports = o("<div></div>").addClass("panel").attr("id", "sign-in").attr("data-title", n.get(new r("GLoginDialog", "text.sign-in-title"))), module = o("<form></form>").appendTo(exports);
    o("<div></div>").html("<p>\u26A0︎ ".concat(n.get(new r("GLoginDialog", "text.title-discontinued-notice")), "</p>")).css("color", "#e3006e").appendTo(module), module.on("submit", e => {
      a("login-signup_login_login", null, true), this._showMessage(), e.preventDefault();
      const module = o(e.target), require = module.find("input[data-property=\"login\"]").val(), n = module.find("input[data-property=\"password\"]").val(), r = this._flow;
      return this._toggleLoading(true), this._gApi.signin({
        login: require,
        password: n,
        app: "designer",
        flow: r
      }).then(e => this._postLogin(e)).catch(e => this._handleError(e)), false;
    }), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-in-login"))).appendTo(module), o("<input>").attr("type", "text").attr("data-property", "login").attr("required", true).appendTo(module), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-in-password"))).appendTo(module), x(new r("GLoginDialog", "text.placeholder-sign-in-password")).appendTo(module), o("<div></div>").addClass("column-layout login").append(o("<button></button>").attr("type", "submit").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-in-button"))))).appendTo(module), o("<div></div>").addClass("link text-left").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.forgot-password"))).keydown(w).on("click", () => {
      a("login-signup_login_forgot-password", null, true), this._activatePanel(P.Forms.ResetPassword);
    }).appendTo(module), o("<div></div>").addClass("column-layout separator").append(o("<hr>")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.or"))).addClass("or-element")).append(o("<hr>")).appendTo(exports), o("<div></div>").addClass("column-layout oauth-buttons").append(this._createGoogleButton(new r("GLoginDialog", "text.sign-google"))).appendTo(exports), o("<div></div>").addClass("spacer").appendTo(exports);
    let require = o("<footer></footer>").appendTo(exports);
    require.append(o("<br />"));
    return o("<span></span>").addClass("info").html(n.getValue("GLoginDialog", "text.create-account-info").replace("%privacy-link", d)).appendTo(require).find("a").on("click", e => {
      e.preventDefault(), e.stopImmediatePropagation();
      const module = o(e.target).closest("a").attr("href"), require = module.includes("terms") ? "terms-of-use" : "privacy-policy";
      return a("login-signup_login_".concat(require), null, true), this._impl.openExternalLink({
        dialog: this,
        link: b(module, this._getUTMCampaignParams())
      }), false;
    }), exports;
  }, P.prototype._buildProInfo = function () {
    const exports = [
        {
          title: n.get(new r("GLoginDialog", "text.title-discontinued-eol-date")),
          content: n.get(new r("GLoginDialog", "text.title-discontinued-eol-date-details")).replace("%support-link", g)
        },
        {
          title: n.get(new r("GLoginDialog", "text.title-discontinued-avoid-losing-work")),
          content: n.get(new r("GLoginDialog", "text.title-discontinued-avoid-losing-work-details")),
          action: {
            text: n.get(new r("GLoginDialog", "text.title-discontinued-export-your-files")),
            link: f
          }
        },
        {
          title: n.get(new r("GLoginDialog", "text.title-discontinued-sign-up-closed")),
          content: n.get(new r("GLoginDialog", "text.title-discontinued-sign-up-closed-details")).replace("%product-link", y),
          action: {
            text: n.get(new r("GLoginDialog", "text.title-discontinued-sign-up-closed-learn-more")),
            link: m
          }
        }
      ], module = [
        n.get(new r("GLoginDialog", "text.xmas-topic-1")),
        n.get(new r("GLoginDialog", "text.xmas-topic-2")),
        n.get(new r("GLoginDialog", "text.xmas-topic-3"))
      ], require = this._coupon && C.test(this._coupon), a = o("<header></header>"), s = o("<main></main>");
    if (require) {
      a.html(n.get(new r("GLoginDialog", "text.xmas-header"))), s.append(o("<header></header>").text(n.get(new r("GLoginDialog", "text.xmas-header-2")))), s.append(module.map((e, t) => o("<div></div>").append(o("<div></div>").addClass("number").text(t + 1)).append(o("<span></span>").addClass("content").text(e))));
      let e = o("<footer></footer>");
      s.append(e), this._gApi.getPrice({ coupon: this._coupon }).then(t => {
        let {
            price: require,
            listPrice: o,
            locale: a,
            currency: s
          } = t, l = "";
        require && o && (l = 5 * parseInt(Math.floor(100 * (1 - require / o) / 5)) + "%");
        const h = {
          style: "currency",
          currency: s
        };
        require && Math.round(require) === require && Object.assign(h, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        const A = require ? require.toLocaleString(a || n.getLocaleLanguageTag(navigator.language), h) : "";
        A && l && e.html(n.get(new r("GLoginDialog", "text.xmas-discount")).replace("%discount", l).replace("%price", A));
      });
    } else
      a.html(n.get(new r("GLoginDialog", "text.title-discontinued-thanks"))), s.append(exports.map(e => {
        let {
          title: module,
          content: require,
          action: n
        } = e;
        const r = o("<div></div>").addClass("topic").append(o("<div></div>").text(module).css("font-size", "12pt").css("font-weight", "bold")).append(o("<div></div>").html(require).css("font-size", "12pt"));
        return n && r.append(o("<button></button>").addClass("buynow round-corner").text(n.text).on("click", () => {
          this._impl.openExternalLink({
            dialog: this,
            link: n.link
          });
        }).css("width", "fit-content").css("text-transform", "none").css("margin-top", "6px")), r;
      }));
    return o("<div></div>").addClass("pro-panel" + (require ? " xmas" : "")).append(a).append(s);
  }, P.prototype._activatePanel = function (e) {
    this._activePanel = e, this._showMessage(), this._dialog.find(".panel.g-active").removeClass("g-active");
    let module = this._dialog.find(".panel#" + e).addClass("g-active").attr("data-title");
    this._dialog.find("#form-title").text(module || "").parent().css("display", module ? "" : "none"), this.focus();
  }, P.prototype.focus = function () {
    o(document.body).find("a, button, :input, [tabindex]").filter(":visible:not(:disabled)").first().focus();
  }, P.prototype._oauth = function (e) {
    this._impl.openOAuth({
      dialog: this,
      provider: e
    });
  }, P.prototype._postLogin = async function (e) {
    try {
      await this._gApi.license.get();
      e.new && undefined !== window.dataLayer && (dataLayer.push({ userId: e.id }), dataLayer.push({ userEmail: e.email }), dataLayer.push({ userName: e.name || "" }), dataLayer.push({ userLogin: e.login }), dataLayer.push({ event: "USER_SIGN_UP_EVENT" })), this._toggleLoading(true);
      const {
        flags: {welcomeMessage: module} = {}
      } = await this._gApi.getUserSettings().catch(() => Object.create({}));
      if (!module && e.new && (await this._gApi.updateUserSettings({ flags: { welcomeMessage: true } }), !(this._isNewPurchaseFlow() || e.trial_created && e.email_verified)))
        return this._buildThanks(e).insertBefore(this._dialog.find(".message")), void this._activatePanel(P.Forms.Thanks);
      if (this._isNewPurchaseFlow())
        return void this.openPurchaseFlow({ immediatePurchase: true });
      this.close();
    } finally {
      this._toggleLoading(false);
    }
  }, P.prototype._toggleLoading = function (e) {
    this._formContent.toggleClass("g-cloud-ui-loading", e), this._welcomeback && this._welcomeback.toggleClass("g-cloud-ui-loading", e);
  }, P.prototype._handleError = async function (e) {
    if (this._toggleLoading(false), navigator.onLine)
      this._showMessage(this._gApi.formatError(e));
    else {
      let e = await this._gApi.getUser().catch(() => null);
      u.openRetryConnection(e);
    }
  }, P.prototype._showMessage = function (e) {
    let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "error", require = this._dialog.find(".message").removeClass("error info show");
    e && require.addClass("show").addClass(module).find("span").html(e);
  }, P.prototype._showVerifyEmailAlert = function (e) {
    let module = o("<div/>").addClass("left"), require = o("<div/>").addClass("right"), s = o("<span/>").addClass("icon g-cloud-icon-ok");
    module.append(s), require.append(o("<p/>").addClass("account-created").append(o("<b/>").text(n.get(new r("GLoginDialog", "text.account-created"))))).append(o("<div/>").addClass("confirmation-account-created").html(n.get(new r("GLoginDialog", "text.confirmation-account-created")).replace("%email", e.email))).append(o("<div/>").addClass("confirmation-account-created-subtitle").text(n.get(new r("GLoginDialog", "text.confirmation-account-created-subtitle")).replace("%days", window.__TRIAL_DAYS__ || 15))).append(o("<div/>").addClass("email-not-received").text(n.get(new r("GLoginDialog", "text.email-not-received-part-1")) + " ").append(o("<span/>").addClass("link").text(n.get(new r("GLoginDialog", "text.email-not-received-part-2"))).on("click", async () => {
      a("login-signup_account-created_send-activation-email", null, true), this._showMessage(), this._toggleLoading(true);
      try {
        const t = this._webUrl, i = this._appUrl;
        this._gApi.resendEmailConfirmation({
          email: e.email,
          force: true,
          webUrl: t,
          appUrl: i
        }).then(e => this._showMessage(e && e.message, "info")).catch(e => this._handleError(e));
      } finally {
        this._toggleLoading(false);
      }
    }))), this._modal.append(module).append(require), this._modal.removeClass("hide"), this._overlay.removeClass("hide");
  }, P.prototype._getStatMappedForm = function () {
    let exports = null;
    switch (this._activePanel) {
    case P.Forms.SignIn:
      exports = "login";
      break;
    case P.Forms.SignUp:
      exports = "create-account";
      break;
    case P.Forms.ResetPassword:
      exports = "forgot-password";
      break;
    case P.Forms.Thanks:
      exports = "account-created";
      break;
    default:
      exports = "login";
    }
    return exports;
  }, P.prototype._getUTMCampaignParams = function () {
    return this._getOptions(s.buildStoreCampaignParams(s.StoreCampaign.WelcomeScreen));
  }, P.prototype.getHTMLElement = function () {
    return this._dialog;
  }, P.__i18n__ = "GLoginDialog", P.Impl = class {
    openOAuth() {
      throw new Error("Not implemented");
    }
    openPurchaseFlow() {
      throw new Error("Not implemented");
    }
    openExternalLink() {
      throw new Error("Not implemented");
    }
    close() {
      throw new Error("Not implemented");
    }
    getLanguage() {
      throw new Error("Not implemented");
    }
  }, exports.exports = P;
}
