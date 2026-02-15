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

function (e, t, i) {
  "use strict";
  i(58), i(19), i(30), i(57), i(8), i(20), i(527), i(107), i(71), i(151), i(34), i(91), i(4), i(41), i(13), i(26), i(125), i(126), i(114);
  const n = i(170), r = i(325), o = i(171), a = i(375), s = (i(373), i(354)), l = i(582), {PasswordLength: h} = i(581), A = i(978), {Events: c} = (i(584), i(431)), {learnmore: p} = i(253), u = i(980), {
      PRIVACY_URL: d,
      SUPPORT_URL: g,
      IMPORT_EXPORT_DOCUMENTATION: f,
      VECTOR_PRODUCT_PAGE: m,
      CORELDRAW_PAGE: y
    } = i(374), {
      getSupportUrl: _,
      getSubscriptionUrl: v,
      getUrlWithQueryParams: b
    } = i(254), C = (i(430), /xmas/), w = e => {
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
            return n = ++e, !1;
        }), n >= i.length && (n = 0), i.eq(n).focus();
      } else
        t[0] && !i.last().closest(t)[0] || (e.preventDefault(), i.first().focus());
    }
  });
  const x = () => {
    let e = o("<div></div>").addClass("input-field"), t = o("<input>").attr("type", "password").attr("required", !0).attr("data-property", "password").appendTo(e);
    return o("<span></span>").addClass("g-cloud-icon-hide").on("click", e => {
      o(e.target).closest("span").toggleClass("g-cloud-icon-display g-cloud-icon-hide").hasClass("g-cloud-icon-hide") ? t.attr("type", "password") : t.attr("type", "text");
    }).appendTo(e), e;
  };
  function P(e) {
    let {
      impl: t,
      gApi: i,
      anonymous: s,
      version: l,
      runtime: h,
      options: A = {},
      flow: c,
      query: p = {}
    } = e;
    this._impl = t, this._gApi = i, this._anonymous = !!s, this._version = l, this._runtimeCode = h, this._options = A, this._closeable = !0, this._flow = c, this._query = p, n.setLanguage(this._impl.getLanguage()), this._gApi.setLanguage(this._impl.getLanguage());
    let u, d, g = !1, f = !0, m = new URL(window.location.href);
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
      a("login-signup_".concat(e, "_support"), null, !1), this._impl.openExternalLink({
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Object.assign({}, e, this._options);
  }, P.prototype._runtimeCode = null, P.prototype._query = null, P.prototype._flow = null, P.prototype._anonymous = !1, P.prototype._formContent = null, P.prototype._title = null, P.prototype._dialog = null, P.prototype._callback = null, P.prototype._coupon = null, P.prototype._activePanel = P.Forms.SignIn, P.prototype._shouldBypassEmailVerification = function () {
    const e = this._query && this._query.bypassEmailVerification;
    return !!this._anonymous && "string" == typeof e && "false" !== e;
  }, P.prototype._isNewPurchaseFlow = function () {
    return !!this._flow && ("purchase_flow_new" === this._flow || "purchase" === this._flow);
  }, P.prototype.open = function (e) {
    const t = (document.cookie || "").match(/_gcoupon=[^;]+/);
    this._coupon = t ? t[0].slice("_gcoupon=".length) : null, this._coupon && C.test(this._coupon) && this._title.empty().append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-xmas-title")))).append(o("<br>")).append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-xmas-subtitle")))), this._buildForm().appendTo(this._container), this._isNewPurchaseFlow() || this._buildProInfo().appendTo(this._container), o("<span></span>").addClass("version").html(this._getFormattedVersion()).appendTo(this._dialog), o("<footer></footer>").appendTo(this._dialog), a("login-signup_login_open", null, !0), this._activatePanel(P.Forms.SignIn), this._anonymous && this._closeable && this._closeButton.css("display", ""), e.addClass("g-cloud-ui g-cloud-ui-embedded g-cloud-ui-login").toggleClass("g-anonymous", this._anonymous).toggleClass("g-new-purchase-flow", this._isNewPurchaseFlow()).append(o("<div></div>").addClass("background").append(o("<div></div>").addClass("left")).append(o("<div></div>").addClass("right"))).append(o("<div></div>").addClass("g-cloud-ui-login-dialog").append(this._dialog)).append(this._modal).append(this._overlay), p || e.addClass("g-cloud-ui-no-learn-more"), this.focus();
  }, P.prototype._getFormattedVersion = function () {
    const e = this._getRuntime(), t = e ? " ".concat(e.abbr) : "";
    return n.get(new r("GLoginDialog", "text.version")).replace("%version", this._version) + t;
  }, P.prototype._getRuntime = function () {
    if (this._runtimeCode) {
      return Object.values(l).find(e => e.code === this._runtimeCode);
    }
    return null;
  }, P.prototype.close = function () {
    this._toggleLoading(!0), this._impl.close({ dialog: this });
  }, P.prototype.openPurchaseFlow = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this._toggleLoading(!0), this._impl.openPurchaseFlow({
      dialog: this,
      options: this._getOptions(e)
    });
  }, P.prototype._buildForm = function () {
    let e = o("<div></div>").addClass("content");
    return o("<div></div>").addClass("column-layout sparse header").append(o("<span></span>").addClass("title text-left").attr("id", "form-title")).append(o("<span></span>").append(o("<span></span>").addClass("g-cloud-icon-question").on("click", function () {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_help"), null, !0), this._helpTip.toggleClass("visible");
    }.bind(this))).append(this._helpTip)).appendTo(e), o("<div></div>").addClass("message").append(o("<span></span>")).appendTo(e), this._buildSignin().appendTo(e), this._buildSignup().appendTo(e), this._buildResetPassword().appendTo(e), this._formContent = e, o("<div></div>").addClass("form-panel").append(e);
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
    let e = o("<div></div>").addClass("panel").attr("id", "reset-password").attr("data-title", n.get(new r("GLoginDialog", "text.forgot-password"))), t = o("<form></form>").appendTo(e);
    if (A.isAvailable()) {
      const e = o("<div></div>").addClass("g-recaptcha").appendTo(t);
      this._gApi.recaptchaKey().then(i => {
        this._resetPasswordRecaptchaWidget = grecaptcha.render(e[0], {
          sitekey: i,
          callback: e => this._onResetPasswordSubmit(t, e),
          size: "invisible"
        });
      });
    }
    return t.on("submit", e => (a("login-signup_forgot-password_send-request", null, !0), this._showMessage(), e.preventDefault(), A.isAvailable() ? navigator.onLine ? grecaptcha.execute(this._resetPasswordRecaptchaWidget) : u.openRetryConnection(null, () => {
      grecaptcha.execute(this._resetPasswordRecaptchaWidget);
    }) : this._onResetPasswordSubmit(t), !1)), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-up-email"))).appendTo(t), o("<input>").attr("type", "email").attr("data-property", "email").attr("autofocus", !0).attr("required", !0).appendTo(t), o("<button></button>").attr("type", "submit").addClass("fit").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.reset-password-send")))).appendTo(t), o("<div></div>").addClass("spacer").appendTo(e), o("<footer></footer>").append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.sign-up-go-back"))).keydown(w).on("click", () => {
      a("login-signup_forgot-password_back-to-login", null, !0), this._activatePanel(P.Forms.SignIn);
    })).appendTo(e), e;
  }, P.prototype._buildSignup = function () {
    let e = o("<div></div>").addClass("panel").attr("id", "sign-up").attr("data-title", n.get(new r("GLoginDialog", "text.title-create-account")).replace("%days", window.__TRIAL_DAYS__ || 15));
    o("<div></div>").addClass("column-layout normal subheader").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-already")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.sign-up-go-back"))).keydown(w).on("click enter", () => {
      a("login-signup_create-account_back-to-login", null, !0), this._activatePanel(P.Forms.SignIn);
    })).appendTo(e);
    let t = o("<form></form>").appendTo(e);
    const i = A.isAvailable(), s = e => {
        const n = t.find("input[data-property=\"email\"]").val(), r = t.find("input[data-property=\"password\"]").val(), o = e, a = t.find("input[data-property=\"newsletter\"]").is(":checked"), s = t.find("input[data-property=\"firstname\"]").val().trim(), l = t.find("input[data-property=\"lastname\"]").val().trim(), h = this._appUrl, A = this._webUrl, c = this._flow;
        this._toggleLoading(!0), this._gApi.signup({
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
        }).then(e => this._postLogin(Object.assign(e, { new: !0 }))).catch(e => {
          this._toggleLoading(!1), this._handleError(e), i && grecaptcha.reset(this._recaptchaWidget);
        });
      };
    t.on("submit", e => (a("login-signup_create-account_create-account", null, !0), this._showMessage(), e.preventDefault(), i ? navigator.onLine ? grecaptcha.execute(this._recaptchaWidget) : u.openRetryConnection(null, () => {
      grecaptcha.execute(this._recaptchaWidget);
    }) : s(), !1));
    const {
      firstName: l = "",
      lastName: c = "",
      email: p = ""
    } = this._query || {};
    if (o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-up-email"))).appendTo(t), o("<input>").attr("type", "email").attr("data-property", "email").attr("autofocus", !0).attr("required", !0).val(E(p)).appendTo(t), o("<div></div>").addClass("column-layout text-left top normal").append(o("<div></div>").addClass("row-layout").append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.first-name")))).append(o("<input>").attr("type", "text").attr("data-property", "firstname").attr("required", !0).val(E(l)))).append(o("<div></div>").addClass("row-layout").append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.last-name")))).append(o("<input>").attr("type", "text").attr("data-property", "lastname").attr("required", !0).val(E(c)))).appendTo(t), o("<label></label>").addClass("column-layout sparse").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-password")))).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-up-password-min-max")).replace("%min-number", h.Minimum).replace("%max-number", h.Maximum))).appendTo(t), x().appendTo(t), o("<label></label>").addClass("column-layout normal").append(o("<input>").attr("type", "checkbox").on("change", e => {
        let i = o(e.target).is(":checked");
        a("login-signup_create-account_i-agree", i, !0), t.find("button[type=\"submit\"]").prop("disabled", !i).toggleClass("g-disabled", !i);
      })).append(o("<span></span>").append(o("<span></span>").html(n.get(new r("GLoginDialog", "text.agreement")).replace("%terms-of-use", o("<span/>").addClass("link").addClass("terms-of-use").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.terms-use"))).prop("outerHTML")).replace("%end-user-license-agreement", o("<span/>").addClass("link").addClass("end-user-license-agreement").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.eula"))).prop("outerHTML")) + " ")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.privacy-statement")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.privacy-statement-link"))).keydown(w).on("click", () => (a("login-signup_create-account_privacy-policy", null, !0), this._impl.openExternalLink({
        dialog: this,
        link: b(d, this._getUTMCampaignParams())
      }), !1)))).appendTo(t), t.find(".terms-of-use").keydown(w).on("click", () => (a("login-signup_create-account_terms-of-use", null, !0), this._impl.openExternalLink({
        dialog: this,
        link: b("https://www.corel.com/terms/", this._getUTMCampaignParams())
      }), !1)), t.find(".end-user-license-agreement").keydown(w).on("click", () => (a("login-signup_create-account_eula", null, !0), this._impl.openExternalLink({
        dialog: this,
        link: b("https://www.corel.com/eula", this._getUTMCampaignParams())
      }), !1)), o("<label></label>").addClass("normal").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.info-privacy-statement")))).appendTo(t), o("<label></label>").addClass("column-layout normal").append(o("<input>").attr("type", "checkbox").attr("data-property", "newsletter").prop("checked", !1)).on("change", e => {
        a("login-signup_create-account_subscribe", o(e.target).is(":checked"), !0);
      }).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.newsletter")))).appendTo(t), i) {
      let e = o("<div></div>").addClass("g-recaptcha").appendTo(t);
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
    })(this._query && this._query.to) : n.get(new r("GLoginDialog", "text.sign-up-now")))).addClass("g-disabled").prop("disabled", !0).appendTo(t), o("<div></div>").addClass("column-layout separator").append(o("<hr>")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.or"))).addClass("or-element")).append(o("<hr>")).appendTo(e), o("<div></div>").addClass("column-layout oauth-buttons").append(this._createFacebookButton(new r("GLoginDialog", "text.sign-facebook"))).append(this._createGoogleButton(new r("GLoginDialog", "text.sign-google"))).appendTo(e), o("<div></div>").addClass("spacer").appendTo(e);
    let g = o("<footer></footer>").appendTo(e);
    return o("<span></span>").addClass("info").html(n.getValue("GLoginDialog", "text.create-account-info").replace("%privacy-link", d)).appendTo(g).find("a").on("click", e => {
      e.preventDefault(), e.stopImmediatePropagation();
      const t = o(e.target).closest("a").attr("href"), i = t.includes("terms") ? "terms-of-use" : "privacy-policy";
      return a("login-signup_create-account_".concat(i), null, !0), this._impl.openExternalLink({
        dialog: this,
        link: b(t, this._getUTMCampaignParams())
      }), !1;
    }), e;
  }, P.prototype._createGoogleButton = function (e) {
    return o("<button></button>").addClass("sign-google oauth column-layout").append(o("<span></span>").addClass("icon").addClass("g-cloud-icon-google")).append(o("<span></span>").addClass("txt").text(n.get(e))).on("click", () => {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_login-google"), null, !0), this._oauth("google");
    });
  }, P.prototype._createFacebookButton = function (e) {
    return o("<button></button>").addClass("sign-facebook oauth column-layout").append(o("<span></span>").addClass("icon").addClass("g-cloud-icon-facebook")).append(o("<span></span>").addClass("txt").text(n.get(e))).on("click", () => {
      let e = this._getStatMappedForm();
      a("login-signup_".concat(e, "_login-facebook"), null, !0), this._oauth("facebook");
    });
  }, P.prototype._buildThanks = function (e) {
    const t = o("#thanks");
    if (t.length)
      return t;
    this._closeButton.css("display", "none");
    let i = o("<div></div>").addClass("panel").attr("id", "thanks");
    o("<header></header>").append(o("<span></span>").html(n.get(new r("GLoginDialog", "text.account-created")))).appendTo(i);
    let s = o("<main></main>").appendTo(i);
    return this._title.empty().append(o("<label></label>").text(n.get(new r("GLoginDialog", "text.title-title-account-created")))), e.trial_created || (a("login-signup_account-created_trial-activated", null, !0), this._gApi.license.activateTrial().then(() => {
      (e.email_verified || this._shouldBypassEmailVerification()) && this.close();
    }).catch(e => this._handleError(e))), e.email_verified || (o("<span></span>").addClass("title").html(n.get(new r("GLoginDialog", "text.confirmation-account-created")).replace("%email", e.email)).appendTo(s), o("<span></span>").addClass("subtitle").html(n.get(new r("GLoginDialog", "text.confirmation-account-created-subtitle")).replace("%days", window.__TRIAL_DAYS__ || 15)).appendTo(s)), e.email_verified || o("<footer></footer>").append(o("<span></span>").addClass("font-11-px").text(n.get(new r("GLoginDialog", "text.email-not-received-part-1")))).append(o("<span></span>").addClass("link").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.email-not-received-part-2"))).keydown(w).on("click", async () => {
      a("login-signup_account-created_send-activation-email", null, !0), i.css("min-height", ""), this._showMessage(), this._toggleLoading(!0);
      try {
        const t = this._webUrl, n = this._appUrl;
        this._gApi.resendEmailConfirmation({
          email: e.email,
          force: !0,
          webUrl: t,
          appUrl: n
        }).then(e => {
          this._showMessage(e && e.message, "info"), i.css("min-height", "446px");
        }).catch(e => this._handleError(e));
      } finally {
        this._toggleLoading(!1);
      }
    })).appendTo(i), i;
  }, P.prototype._buildSignin = function () {
    let e = o("<div></div>").addClass("panel").attr("id", "sign-in").attr("data-title", n.get(new r("GLoginDialog", "text.sign-in-title"))), t = o("<form></form>").appendTo(e);
    o("<div></div>").html("<p>\u26A0︎ ".concat(n.get(new r("GLoginDialog", "text.title-discontinued-notice")), "</p>")).css("color", "#e3006e").appendTo(t), t.on("submit", e => {
      a("login-signup_login_login", null, !0), this._showMessage(), e.preventDefault();
      const t = o(e.target), i = t.find("input[data-property=\"login\"]").val(), n = t.find("input[data-property=\"password\"]").val(), r = this._flow;
      return this._toggleLoading(!0), this._gApi.signin({
        login: i,
        password: n,
        app: "designer",
        flow: r
      }).then(e => this._postLogin(e)).catch(e => this._handleError(e)), !1;
    }), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-in-login"))).appendTo(t), o("<input>").attr("type", "text").attr("data-property", "login").attr("required", !0).appendTo(t), o("<label></label>").text(n.get(new r("GLoginDialog", "text.sign-in-password"))).appendTo(t), x(new r("GLoginDialog", "text.placeholder-sign-in-password")).appendTo(t), o("<div></div>").addClass("column-layout login").append(o("<button></button>").attr("type", "submit").append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.sign-in-button"))))).appendTo(t), o("<div></div>").addClass("link text-left").attr("tabindex", 0).text(n.get(new r("GLoginDialog", "text.forgot-password"))).keydown(w).on("click", () => {
      a("login-signup_login_forgot-password", null, !0), this._activatePanel(P.Forms.ResetPassword);
    }).appendTo(t), o("<div></div>").addClass("column-layout separator").append(o("<hr>")).append(o("<span></span>").text(n.get(new r("GLoginDialog", "text.or"))).addClass("or-element")).append(o("<hr>")).appendTo(e), o("<div></div>").addClass("column-layout oauth-buttons").append(this._createGoogleButton(new r("GLoginDialog", "text.sign-google"))).appendTo(e), o("<div></div>").addClass("spacer").appendTo(e);
    let i = o("<footer></footer>").appendTo(e);
    i.append(o("<br />"));
    return o("<span></span>").addClass("info").html(n.getValue("GLoginDialog", "text.create-account-info").replace("%privacy-link", d)).appendTo(i).find("a").on("click", e => {
      e.preventDefault(), e.stopImmediatePropagation();
      const t = o(e.target).closest("a").attr("href"), i = t.includes("terms") ? "terms-of-use" : "privacy-policy";
      return a("login-signup_login_".concat(i), null, !0), this._impl.openExternalLink({
        dialog: this,
        link: b(t, this._getUTMCampaignParams())
      }), !1;
    }), e;
  }, P.prototype._buildProInfo = function () {
    const e = [
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
      ], t = [
        n.get(new r("GLoginDialog", "text.xmas-topic-1")),
        n.get(new r("GLoginDialog", "text.xmas-topic-2")),
        n.get(new r("GLoginDialog", "text.xmas-topic-3"))
      ], i = this._coupon && C.test(this._coupon), a = o("<header></header>"), s = o("<main></main>");
    if (i) {
      a.html(n.get(new r("GLoginDialog", "text.xmas-header"))), s.append(o("<header></header>").text(n.get(new r("GLoginDialog", "text.xmas-header-2")))), s.append(t.map((e, t) => o("<div></div>").append(o("<div></div>").addClass("number").text(t + 1)).append(o("<span></span>").addClass("content").text(e))));
      let e = o("<footer></footer>");
      s.append(e), this._gApi.getPrice({ coupon: this._coupon }).then(t => {
        let {
            price: i,
            listPrice: o,
            locale: a,
            currency: s
          } = t, l = "";
        i && o && (l = 5 * parseInt(Math.floor(100 * (1 - i / o) / 5)) + "%");
        const h = {
          style: "currency",
          currency: s
        };
        i && Math.round(i) === i && Object.assign(h, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        const A = i ? i.toLocaleString(a || n.getLocaleLanguageTag(navigator.language), h) : "";
        A && l && e.html(n.get(new r("GLoginDialog", "text.xmas-discount")).replace("%discount", l).replace("%price", A));
      });
    } else
      a.html(n.get(new r("GLoginDialog", "text.title-discontinued-thanks"))), s.append(e.map(e => {
        let {
          title: t,
          content: i,
          action: n
        } = e;
        const r = o("<div></div>").addClass("topic").append(o("<div></div>").text(t).css("font-size", "12pt").css("font-weight", "bold")).append(o("<div></div>").html(i).css("font-size", "12pt"));
        return n && r.append(o("<button></button>").addClass("buynow round-corner").text(n.text).on("click", () => {
          this._impl.openExternalLink({
            dialog: this,
            link: n.link
          });
        }).css("width", "fit-content").css("text-transform", "none").css("margin-top", "6px")), r;
      }));
    return o("<div></div>").addClass("pro-panel" + (i ? " xmas" : "")).append(a).append(s);
  }, P.prototype._activatePanel = function (e) {
    this._activePanel = e, this._showMessage(), this._dialog.find(".panel.g-active").removeClass("g-active");
    let t = this._dialog.find(".panel#" + e).addClass("g-active").attr("data-title");
    this._dialog.find("#form-title").text(t || "").parent().css("display", t ? "" : "none"), this.focus();
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
      e.new && void 0 !== window.dataLayer && (dataLayer.push({ userId: e.id }), dataLayer.push({ userEmail: e.email }), dataLayer.push({ userName: e.name || "" }), dataLayer.push({ userLogin: e.login }), dataLayer.push({ event: "USER_SIGN_UP_EVENT" })), this._toggleLoading(!0);
      const {
        flags: {welcomeMessage: t} = {}
      } = await this._gApi.getUserSettings().catch(() => Object.create({}));
      if (!t && e.new && (await this._gApi.updateUserSettings({ flags: { welcomeMessage: !0 } }), !(this._isNewPurchaseFlow() || e.trial_created && e.email_verified)))
        return this._buildThanks(e).insertBefore(this._dialog.find(".message")), void this._activatePanel(P.Forms.Thanks);
      if (this._isNewPurchaseFlow())
        return void this.openPurchaseFlow({ immediatePurchase: !0 });
      this.close();
    } finally {
      this._toggleLoading(!1);
    }
  }, P.prototype._toggleLoading = function (e) {
    this._formContent.toggleClass("g-cloud-ui-loading", e), this._welcomeback && this._welcomeback.toggleClass("g-cloud-ui-loading", e);
  }, P.prototype._handleError = async function (e) {
    if (this._toggleLoading(!1), navigator.onLine)
      this._showMessage(this._gApi.formatError(e));
    else {
      let e = await this._gApi.getUser().catch(() => null);
      u.openRetryConnection(e);
    }
  }, P.prototype._showMessage = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error", i = this._dialog.find(".message").removeClass("error info show");
    e && i.addClass("show").addClass(t).find("span").html(e);
  }, P.prototype._showVerifyEmailAlert = function (e) {
    let t = o("<div/>").addClass("left"), i = o("<div/>").addClass("right"), s = o("<span/>").addClass("icon g-cloud-icon-ok");
    t.append(s), i.append(o("<p/>").addClass("account-created").append(o("<b/>").text(n.get(new r("GLoginDialog", "text.account-created"))))).append(o("<div/>").addClass("confirmation-account-created").html(n.get(new r("GLoginDialog", "text.confirmation-account-created")).replace("%email", e.email))).append(o("<div/>").addClass("confirmation-account-created-subtitle").text(n.get(new r("GLoginDialog", "text.confirmation-account-created-subtitle")).replace("%days", window.__TRIAL_DAYS__ || 15))).append(o("<div/>").addClass("email-not-received").text(n.get(new r("GLoginDialog", "text.email-not-received-part-1")) + " ").append(o("<span/>").addClass("link").text(n.get(new r("GLoginDialog", "text.email-not-received-part-2"))).on("click", async () => {
      a("login-signup_account-created_send-activation-email", null, !0), this._showMessage(), this._toggleLoading(!0);
      try {
        const t = this._webUrl, i = this._appUrl;
        this._gApi.resendEmailConfirmation({
          email: e.email,
          force: !0,
          webUrl: t,
          appUrl: i
        }).then(e => this._showMessage(e && e.message, "info")).catch(e => this._handleError(e));
      } finally {
        this._toggleLoading(!1);
      }
    }))), this._modal.append(t).append(i), this._modal.removeClass("hide"), this._overlay.removeClass("hide");
  }, P.prototype._getStatMappedForm = function () {
    let e = null;
    switch (this._activePanel) {
    case P.Forms.SignIn:
      e = "login";
      break;
    case P.Forms.SignUp:
      e = "create-account";
      break;
    case P.Forms.ResetPassword:
      e = "forgot-password";
      break;
    case P.Forms.Thanks:
      e = "account-created";
      break;
    default:
      e = "login";
    }
    return e;
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
  }, e.exports = P;
}
