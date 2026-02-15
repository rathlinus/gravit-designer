/**
 * Webpack Module #1093
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(19) /* module_19 */, n(8) /* module_8 */, n(20) /* module_20 */, n(107) /* module_107 */, n(3) /* module_3 */, n(34) /* module_34 */, n(4) /* module_4 */, n(13) /* module_13 */, n(26) /* module_26 */;
    var o = n(10) /* module_10 */,
      i = n(1) /* module_1 */,
      a = n(10) /* module_10 */;
    const r = n(85) /* GContainer */,
      s = n(44) /* GSystemDialog */,
      l = n(177) /* module_177 */;
    function c(e) {
      let t =
        arguments.length > 1 && undefined !== arguments[1]
          ? arguments[1]
          : c.Forms.SignIn;
      (this._callback = e), this._init(t);
    }
    i.GObject.inherit(c, i.GObject),
      (c.Forms = {
        SignIn: "sign-in",
        SignUp: "sign-up",
        ResetPassword: "reset-password",
        Thanks: "thanks",
      }),
      (c.prototype._init = async function (e) {
        (this._dialog = $("<div></div>").gDialog({
          releaseOnClose: true,
          className: "g-login-dialog",
        })),
          (this._container = $("<div></div>")
            .addClass("container")
            .appendTo(this._dialog)),
          this._buildSignIn(),
          await this._buildSignUp(),
          this._buildResetPassword(),
          this._activatePanel(e);
      }),
      (c.prototype._buildSignIn = function () {
        let e = $("<div></div>")
            .addClass("panel " + c.Forms.SignIn)
            .appendTo(this._container),
          t = $("<div></div>").addClass("header").appendTo(e);
        $("<div></div>").addClass("logo").appendTo(t),
          $("<div></div>")
            .addClass("text")
            .text(
              i.GLocale.get(
                gDesigner.getStoreVendor()
                  ? new i.GLocaleKey("GLoginDialog", "text.login-dialog-title")
                  : new i.GLocaleKey("GLoginDialog", "text.sign-in")
              )
            )
            .appendTo(t);
        let n = $("<div></div>").addClass("body").appendTo(e);
        $("<div></div>")
          .addClass("title")
          .addClass("simple")
          .append(
            $("<span></span>").text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.sign-in-title")
              )
            )
          )
          .appendTo(n);
        let s = $("<div></div>").addClass("subtitle").appendTo(n);
        gDesigner.getStoreVendor() &&
          s
            .append(
              $("<span></span>").text(
                i.GLocale.get(
                  new i.GLocaleKey("GLoginDialog", "text.not-register")
                )
              )
            )
            .append(
              $("<span></span>")
                .addClass("link")
                .addClass("panel")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey("GLoginDialog", "text.sign-up")
                  )
                )
                .on("click", () => {
                  gDesigner.stats("login-signup_create-account_open"),
                    this._activatePanel(c.Forms.SignUp);
                })
            );
        let d = $("<div></div>")
          .addClass("message")
          .append($("<span></span>"))
          .appendTo(n);
        const u = this._createMessageHandler(d);
        let p = $("<form></form>").attr("id", "signin-form").appendTo(n);
        p.on("submit", (e) => {
          gDesigner.stats("login-signup_login_login"),
            u(""),
            e.preventDefault();
          const t = $(e.target),
            n = t.find('input[data-property="email"]').val(),
            i = t.find('input[data-property="password"]').val();
          return (
            o.gApi
              .signin({ email: n, password: i, app: "designer" })
              .then(() => {
                o.gApi
                  .getUser()
                  .then((e) => {
                    this.close(), this._callback(new l(e));
                  })
                  .catch((e) => this._handlerError(e, u));
              })
              .catch((e) => this._handlerError(e, u)),
            false
          );
        }),
          a.HAS_ENTERPRISE
            ? $("<label>")
                .addClass("label")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GLoginDialog",
                      "text.placeholder-sign-in-login"
                    )
                  )
                )
                .appendTo(p)
            : $("<label>")
                .addClass("label")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey("GLoginDialog", "text.sign-in-login")
                  )
                )
                .appendTo(p),
          $("<input>")
            .attr("type", "text")
            .attr("data-property", "email")
            .attr("required", true)
            .appendTo(p),
          $("<label>")
            .addClass("label")
            .text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.sign-in-password")
              )
            )
            .appendTo(p);
        let g = this._createPasswordInput(),
          h = $("<span></span>")
            .addClass("forgot-password")
            .append(
              $("<span></span>")
                .addClass("txt")
                .addClass("link")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey("GLoginDialog", "text.forgot-password")
                  )
                )
                .on("click", () => {
                  gDesigner.stats("login-signup_login_forgot-password"),
                    a.FORGOT_PWD_LINK
                      ? gContainer.openExternalLink(
                          null,
                          "https://idp.corel.com/idp/accountForgotPwd.jsp"
                        )
                      : this._activatePanel(c.Forms.ResetPassword);
                })
            ),
          f = $("<button></button>")
            .addClass("sign-in")
            .attr("type", "submit")
            .append(
              $("<span></span>").text(
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    a.HAS_ENTERPRISE ? "text.sign-in-button" : "text.sign-in"
                  )
                )
              )
            )
            .appendTo(p);
        a.HAS_ENTERPRISE
          ? (h.appendTo(p), g.appendTo(p), f.appendTo(p))
          : (g.appendTo(p),
            $("<div>")
              .addClass("login-button-row")
              .append(h)
              .append(f)
              .appendTo(p));
        let m = $("<div></div>").addClass("oauth-buttons");
        if (a.HAS_ENTERPRISE) {
          let e = $("<div></div>").addClass("enterprise-sign-in").appendTo(n),
            t = $("<div></div>").addClass("content").appendTo(e);
          t.append(
            $("<div></div>")
              .addClass("header")
              .append(
                $("<div><div/>")
                  .addClass("subtitle")
                  .html(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GLoginDialog",
                        "text.enterprise-sign-in-message"
                      )
                    )
                  )
              )
          ),
            m
              .append(
                this._createGoogleButton(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    "text.enterprise-sign-google"
                  )
                ).attr("tabindex", 1)
              )
              .append(
                this._createMicrosoftButton(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    "text.enterprise-sign-microsoft"
                  )
                ).attr("tabindex", 2)
              )
              .appendTo(t),
            m.appendTo(t),
            $("<div></div>")
              .addClass("footer")
              .append(
                $("<span></span>")
                  .addClass("message")
                  .html(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GLoginDialog",
                        "text.enterprise-login-message-1"
                      )
                    )
                  )
              )
              .append(
                $("<span></span>")
                  .addClass("message")
                  .html(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GLoginDialog",
                        "text.enterprise-login-message-2"
                      )
                    )
                  )
              )
              .appendTo(t);
        } else {
          gContainer.getRuntime() !== r.Runtime.Chrome &&
            ($("<div></div>")
              .addClass("sep")
              .append(
                $("<span></span>").text(
                  i.GLocale.get(new i.GLocaleKey("GLoginDialog", "text.or"))
                )
              )
              .appendTo(n),
            m
              .append(
                this._createFacebookButton(
                  new i.GLocaleKey("GLoginDialog", "text.sign-facebook")
                ).attr("tabindex", 1)
              )
              .append(
                this._createGoogleButton(
                  new i.GLocaleKey("GLoginDialog", "text.sign-google")
                ).attr("tabindex", 2)
              )
              .appendTo(n)),
            gDesigner.getStoreVendor() &&
              $("<footer></footer>")
                .append(
                  $("<span></span>")
                    .addClass("link")
                    .text(
                      i.GLocale.get(
                        new i.GLocaleKey(
                          "GLoginDialog",
                          "text.continue-without-loggin-in"
                        )
                      )
                    )
                    .on("click", () => {
                      this.close(), this._callback(null);
                    })
                )
                .appendTo(e);
        }
        return e;
      }),
      (c.prototype._createGoogleButton = function (e) {
        return $("<button></button>")
          .addClass("sign-google oauth column-layout")
          .append(
            $("<span></span>").addClass("icon").addClass("gravit-icon-google")
          )
          .append($("<span></span>").addClass("txt").text(i.GLocale.get(e)))
          .on("click", () => {
            let e = this._getStatMappedForm();
            gDesigner.stats("login-signup_".concat(e, "_login-google")),
              this._oauth("google");
          });
      }),
      (c.prototype._createFacebookButton = function (e) {
        return $("<button></button>")
          .addClass("sign-facebook oauth column-layout")
          .append(
            $("<span></span>").addClass("icon").addClass("gravit-icon-facebook")
          )
          .append($("<span></span>").addClass("txt").text(i.GLocale.get(e)))
          .on("click", () => {
            let e = this._getStatMappedForm();
            gDesigner.stats("login-signup_".concat(e, "_login-facebook")),
              this._oauth("facebook");
          });
      }),
      (c.prototype._createMicrosoftButton = function (e) {
        return $("<button></button>")
          .addClass("sign-microsoft oauth column-layout")
          .append(
            $("<span></span>")
              .addClass("icon")
              .addClass("gravit-icon-microsoft")
          )
          .append($("<span></span>").addClass("txt").text(i.GLocale.get(e)))
          .on("click", () => {
            let e = this._getStatMappedForm();
            gDesigner.stats("login-signup_".concat(e, "_login-microsoft")),
              this._oauth("microsoft");
          });
      }),
      (c.prototype._buildSignUp = async function () {
        let e = $("<div></div>")
            .addClass("panel " + c.Forms.SignUp)
            .appendTo(this._container),
          t = $("<div></div>").addClass("header").appendTo(e);
        $("<div></div>").addClass("logo").appendTo(t),
          $("<div></div>")
            .addClass("text")
            .text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.login-dialog-title")
              )
            )
            .appendTo(t);
        let n = $("<div></div>").addClass("body").appendTo(e);
        $("<div></div>")
          .addClass("title")
          .addClass("simple")
          .append(
            $("<span></span>").text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.sign-up-title")
              )
            )
          )
          .appendTo(n),
          $("<div></div>")
            .addClass("subtitle")
            .append(
              $("<span></span>").text(
                i.GLocale.get(
                  new i.GLocaleKey("GLoginDialog", "text.already-registered")
                )
              )
            )
            .append(
              $("<span></span>")
                .addClass("link")
                .addClass("panel")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey("GLoginDialog", "text.login-here")
                  )
                )
                .on("click", () => {
                  gDesigner.stats("login-signup_create-account_back-to-login"),
                    this._activatePanel(c.Forms.SignIn);
                })
            )
            .appendTo(n);
        let a = $("<div></div>")
          .addClass("message")
          .append($("<span></span>"))
          .appendTo(n);
        const s = this._createMessageHandler(a),
          d = gContainer.getRuntime() === r.Runtime.Electron;
        let u = $("<form></form>").attr("id", "signup-form").appendTo(n);
        const p =
            undefined !== window.grecaptcha &&
            /^(prod|trunk)/.test("production") &&
            "localhost" !== location.hostname &&
            !d,
          g = async (e) => {
            const t = u.find('input[data-property="email"]').val(),
              n =
                u.find('input[data-property="firstname"]').val() +
                " " +
                u.find('input[data-property="lastname"]').val(),
              i = u.find('input[data-property="password"]').val();
            var a = e;
            const g = u
              .find('input[data-property="newsletter"]')
              .is(":checked");
            let h, f;
            if (
              (d && (a = await gContainer.generateGoogleRecaptchaToken()),
              gContainer.getRuntime() === r.Runtime.Electron)
            ) {
              const e = gContainer.getPlatform();
              ("darwin" !== e && "win32" !== e) || (h = "designer://"),
                (f = gDesigner.getAssetsURL());
            } else f = location.origin;
            o.gApi
              .signup({
                email: t,
                name: n,
                password: i,
                app: "designer",
                recaptcha: a,
                newsletter: g,
                appUrl: h,
                webUrl: f,
              })
              .then(() => {
                o.gApi
                  .getUser()
                  .then((e) => {
                    (e = new l(e)),
                      this._buildThanksSignup(e),
                      this._activatePanel(c.Forms.Thanks),
                      this._callback(e);
                  })
                  .catch((e) => this._handlerError(e, s));
              })
              .catch((e) => {
                if (e && e.errors) {
                  const t = new Map(e.errors);
                  s(Array.from(t.values()).join("<br>"));
                } else s(e.message || "");
                p && grecaptcha.reset(this._recaptchaWidget);
              });
          };
        u.on(
          "submit",
          (e) => (
            gDesigner.stats("login-signup_create-account_create-account"),
            s(""),
            e.preventDefault(),
            p ? grecaptcha.execute(this._recaptchaWidget) : g(),
            false
          )
        ),
          $("<label>")
            .addClass("label")
            .text(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GLoginDialog",
                  "text.placeholder-sign-up-email"
                )
              )
            )
            .appendTo(u),
          $("<input>")
            .attr("type", "email")
            .attr("data-property", "email")
            .attr("autofocus", true)
            .attr("required", true)
            .attr(
              "title",
              i.GLocale.get(
                new i.GLocaleKey(
                  "GLoginDialog",
                  "text.placeholder-sign-up-email"
                )
              )
            )
            .appendTo(u);
        let h = $("<div></div>").addClass("input-group").appendTo(u);
        $("<span>")
          .append(
            $("<label>")
              .addClass("label")
              .text(
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    "text.placeholder-sign-up-first-name"
                  )
                )
              )
          )
          .append(
            $("<input>")
              .attr("type", "text")
              .attr("data-property", "firstname")
              .attr("required", true)
              .attr(
                "title",
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    "text.placeholder-sign-up-first-name"
                  )
                )
              )
          )
          .appendTo(h),
          $("<span>")
            .append(
              $("<label>")
                .addClass("label")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GLoginDialog",
                      "text.placeholder-sign-up-last-name"
                    )
                  )
                )
            )
            .append(
              $("<input>")
                .attr("type", "text")
                .attr("data-property", "lastname")
                .attr("required", true)
                .attr(
                  "title",
                  i.GLocale.get(
                    new i.GLocaleKey(
                      "GLoginDialog",
                      "text.placeholder-sign-up-last-name"
                    )
                  )
                )
            )
            .appendTo(h),
          $("<label>")
            .addClass("label")
            .text(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GLoginDialog",
                  "text.placeholder-sign-up-password"
                )
              )
            )
            .appendTo(u),
          this._createPasswordInput().appendTo(u),
          $("<label></label>")
            .append(
              $("<input>")
                .attr("type", "checkbox")
                .on("change", (e) => {
                  let t = $(e.target).is(":checked");
                  gDesigner.stats("login-signup_create-account_i-agree", t),
                    u
                      .find('button[type="submit"]')
                      .prop("disabled", !t)
                      .toggleClass("g-disabled", !t);
                })
            )
            .append(
              $("<div></div>")
                .append(
                  $("<span></span>").text(
                    i.GLocale.get(
                      new i.GLocaleKey("GLoginDialog", "text.agree")
                    )
                  )
                )
                .append(
                  $("<span></span>")
                    .addClass("link")
                    .text(
                      i.GLocale.get(
                        new i.GLocaleKey("GLoginDialog", "text.terms-use")
                      )
                    )
                    .on(
                      "click",
                      (e) => (
                        gDesigner.stats(
                          "login-signup_create-account_terms-of-use"
                        ),
                        gContainer.openExternalLink(
                          e,
                          "https://www.corel.com/en/terms-of-use"
                        ),
                        false
                      )
                    )
                )
                .append($("<span></span>").text("&"))
                .append(
                  $("<span></span>")
                    .addClass("link")
                    .text(
                      i.GLocale.get(
                        new i.GLocaleKey("GLoginDialog", "text.privacy-policy")
                      )
                    )
                    .on(
                      "click",
                      (e) => (
                        gDesigner.stats(
                          "login-signup_create-account_privacy-policy"
                        ),
                        gContainer.openExternalLink(
                          e,
                          "https://www.corel.com/en/corel-privacy-policy"
                        ),
                        false
                      )
                    )
                )
            )
            .appendTo(u),
          $("<label></label>")
            .append(
              $("<input>")
                .attr("type", "checkbox")
                .attr("data-property", "newsletter")
                .prop("checked", false)
            )
            .on("change", (e) => {
              gDesigner.stats(
                "login-signup_create-account_subscribe",
                $(e.target).is(":checked")
              );
            })
            .append(
              $("<span></span>").text(
                i.GLocale.get(
                  new i.GLocaleKey("GLoginDialog", "text.newsletter")
                )
              )
            )
            .appendTo(u);
        let f = await o.gApi.recaptchaKey();
        if (p) {
          let e = $(grecaptchaWidget);
          this._recaptchaWidget = grecaptcha.render(e[0], {
            sitekey: f,
            callback: g,
            size: "invisible",
          });
        }
        $("<button></button>")
          .attr("type", "submit")
          .addClass("sign-in")
          .append(
            $("<span></span>").text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.sign-up-now")
              )
            )
          )
          .addClass("g-disabled")
          .prop("disabled", true)
          .appendTo(u),
          gContainer.getRuntime() !== r.Runtime.Chrome &&
            ($("<div></div>")
              .addClass("sep")
              .append(
                $("<span></span>").text(
                  i.GLocale.get(new i.GLocaleKey("GLoginDialog", "text.or"))
                )
              )
              .appendTo(n),
            $("<div></div>")
              .addClass("oauth-buttons")
              .append(
                this._createFacebookButton(
                  new i.GLocaleKey("GLoginDialog", "text.sign-facebook")
                )
              )
              .append(
                this._createGoogleButton(
                  new i.GLocaleKey("GLoginDialog", "text.sign-google")
                )
              )
              .appendTo(n));
        let m = $("<span></span>").addClass("link");
        return (
          gDesigner.getStoreVendor() &&
            m
              .text(
                i.GLocale.get(
                  new i.GLocaleKey(
                    "GLoginDialog",
                    "text.continue-without-loggin-in"
                  )
                )
              )
              .on("click", () => {
                this.close(), this._callback(null);
              }),
          $("<footer></footer>").append(m).append(m).appendTo(e),
          e
        );
      }),
      (c.prototype._buildResetPassword = function () {
        let e = $("<div></div>")
            .addClass("panel " + c.Forms.ResetPassword)
            .appendTo(this._container),
          t = $("<div></div>").addClass("header").appendTo(e);
        $("<div></div>").addClass("logo").appendTo(t),
          $("<div></div>")
            .addClass("text")
            .text(
              i.GLocale.get(
                new i.GLocaleKey(
                  "GLoginDialog",
                  "text.reset-password-header-title"
                )
              )
            )
            .appendTo(t);
        let n = $("<div></div>").addClass("body").appendTo(e);
        $("<div></div>")
          .addClass("title")
          .addClass("simple")
          .append(
            $("<span></span>").text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.reset-password-title")
              )
            )
          )
          .appendTo(n);
        let a = $("<div></div>")
          .addClass("message")
          .append($("<span></span>"))
          .appendTo(n);
        const s = this._createMessageHandler(a);
        let l = $("<form></form>")
          .attr("id", "reset-password-form")
          .appendTo(n);
        return (
          l.on("submit", (e) => {
            gDesigner.stats("login-signup_forgot-password_send-request"),
              s(""),
              e.preventDefault();
            const t = l.find('input[data-property="email"]').val(),
              n = location.href;
            let i, a;
            if (gContainer.getRuntime() === r.Runtime.Electron) {
              const e = gContainer.getPlatform();
              ("darwin" !== e && "win32" !== e) || (i = "designer://"),
                (a = gDesigner.getAssetsURL());
            } else a = location.origin;
            return (
              o.gApi
                .resetPassword({ email: t, redirect: n, appUrl: i, webUrl: a })
                .then((e) => {
                  s(e && e.message, "info");
                })
                .catch((e) => this._handlerError(e, s)),
              false
            );
          }),
          $("<label>")
            .addClass("label")
            .text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.sign-in-login")
              )
            )
            .appendTo(l),
          $("<input>")
            .attr("type", "email")
            .attr("data-property", "email")
            .attr("autofocus", true)
            .attr("required", true)
            .attr(
              "title",
              i.GLocale.get(
                new i.GLocaleKey(
                  "GLoginDialog",
                  "text.placeholder-reset-password-email"
                )
              )
            )
            .appendTo(l),
          $("<div>")
            .addClass("login-button-row")
            .append(
              $("<span></span>")
                .addClass("link")
                .text(
                  "‹ " +
                    i.GLocale.get(
                      new i.GLocaleKey("GLoginDialog", "text.back-sign-in")
                    )
                )
                .on("click", () => {
                  gDesigner.stats("login-signup_forgot-password_back-to-login"),
                    this._activatePanel(c.Forms.SignIn);
                })
            )
            .append(
              $("<button></button>")
                .attr("type", "submit")
                .append(
                  $("<span></span>").text(
                    i.GLocale.get(
                      new i.GLocaleKey(
                        "GLoginDialog",
                        "text.reset-password-send"
                      )
                    )
                  )
                )
            )
            .appendTo(l),
          e
        );
      }),
      (c.prototype._buildThanksSignup = function (e) {
        let t = $("<div></div>")
            .addClass("panel " + c.Forms.Thanks)
            .appendTo(this._container),
          n = $("<div></div>").addClass("header").appendTo(t);
        $("<div></div>").addClass("logo").appendTo(n),
          $("<div></div>")
            .addClass("text")
            .text(
              i.GLocale.get(
                new i.GLocaleKey("GLoginDialog", "text.login-dialog-title")
              )
            )
            .appendTo(n);
        let o = $("<div></div>").addClass("body").appendTo(t);
        return (
          $("<div></div>")
            .addClass("title")
            .append(
              $("<span></span>").html(
                i.GLocale.get(
                  new i.GLocaleKey("GLoginDialog", "text.sign-up-thanks")
                ).replace("%email", e.getEmail())
              )
            )
            .appendTo(o),
          $("<button></button>")
            .append(
              $("<span></span>").text(
                i.GLocale.get(new i.GLocaleKey("GLoginDialog", "text.ok"))
              )
            )
            .on("click", this.close.bind(this))
            .appendTo(o),
          t
        );
      }),
      (c.prototype._createMessageHandler = function (e) {
        return function (t) {
          let n =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : "error";
          e.removeClass("error info show"),
            t && e.addClass("show").addClass(n).find("span").text(t);
        };
      }),
      (c.prototype._activatePanel = function (e) {
        (this._activePanel = e),
          this._container.find(".panel.g-active").removeClass("g-active"),
          this._container.find(".panel." + e).addClass("g-active");
      }),
      (c.prototype._oauth = function (e, t) {
        o.gApi
          .popup("/auth/" + e)
          .then((e) => {
            this.close(), this._callback(e);
          })
          .catch((e) => this._handlerError(e, t));
      }),
      (c.prototype._handlerError = function (e, t) {
        t((e && e.message) || (e && e.errors.toString()) || "");
      }),
      (c.prototype._createPasswordInput = function () {
        let e = $("<div></div>").addClass("input-field"),
          t = $("<input>")
            .attr("type", "password")
            .attr("required", true)
            .attr("data-property", "password")
            .appendTo(e);
        return (
          $("<span></span>")
            .addClass("icon")
            .addClass("gravit-icon-hide")
            .on("click", (e) => {
              $(e.target)
                .closest("span")
                .toggleClass("gravit-icon-display gravit-icon-hide")
                .hasClass("gravit-icon-hide")
                ? t.attr("type", "password")
                : t.attr("type", "text");
            })
            .appendTo(e),
          e
        );
      }),
      (c.prototype._getStatMappedForm = function () {
        let e = null;
        switch (this._activePanel) {
          case c.Forms.SignIn:
            e = "login";
            break;
          case c.Forms.SignUp:
            e = "create-account";
            break;
          case c.Forms.ResetPassword:
            e = "forgot-password";
            break;
          case c.Forms.Thanks:
            e = "account-created";
            break;
          default:
            e = "login";
        }
        return e;
      }),
      (c.prototype.open = function () {
        gDesigner.isOfflineAsync().then((e) => {
          e
            ? s.alert(
                i.GLocale.get(
                  new i.GLocaleKey("GLoginDialog", "text.you-are-offline")
                )
              )
            : this._dialog.gDialog("open", false);
        });
      }),
      (c.prototype.close = function () {
        this._dialog.gDialog("close");
      }),
      (e.exports = c);
  }