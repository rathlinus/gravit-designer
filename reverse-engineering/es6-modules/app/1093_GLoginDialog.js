/**
 * Webpack Module #1093
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(107) /* polyfill_RegExp_test */,
    require(3) /* polyfill_RegExp_toString */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  var AppSettings = require(10) /* AppSettings */,
    GCore = require(1) /* GCore */,
    AppSettings2 = require(10);
  const GContainer = require(85) /* GContainer */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GUserModel = require(177);
  class c extends GCore.GObject {
    constructor(e) {
      super();
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : c.Forms.SignIn;
      ((this._callback = e), this._init(module));
    }

    async _init(e) {
      ((this._dialog = $('<div></div>').gDialog({
        releaseOnClose: true,
        className: 'g-login-dialog',
      })),
        (this._container = $('<div></div>').addClass('container').appendTo(this._dialog)),
        this._buildSignIn(),
        await this._buildSignUp(),
        this._buildResetPassword(),
        this._activatePanel(e));
    }

    _buildSignIn() {
      let exports = $('<div></div>')
          .addClass('panel ' + c.Forms.SignIn)
          .appendTo(this._container),
        module = $('<div></div>').addClass('header').appendTo(exports);
      ($('<div></div>').addClass('logo').appendTo(module),
        $('<div></div>')
          .addClass('text')
          .text(
            GCore.GLocale.get(
              gDesigner.getStoreVendor()
                ? new GCore.GLocaleKey('GLoginDialog', 'text.login-dialog-title')
                : new GCore.GLocaleKey('GLoginDialog', 'text.sign-in')
            )
          )
          .appendTo(module));
      let require = $('<div></div>').addClass('body').appendTo(exports);
      $('<div></div>')
        .addClass('title')
        .addClass('simple')
        .append(
          $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-in-title'))
          )
        )
        .appendTo(require);
      let GSystemDialog = $('<div></div>').addClass('subtitle').appendTo(require);
      gDesigner.getStoreVendor() &&
        GSystemDialog.append(
          $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.not-register'))
          )
        ).append(
          $('<span></span>')
            .addClass('link')
            .addClass('panel')
            .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-up')))
            .on('click', () => {
              (gDesigner.stats('login-signup_create-account_open'),
                this._activatePanel(c.Forms.SignUp));
            })
        );
      let d = $('<div></div>').addClass('message').append($('<span></span>')).appendTo(require);
      const u = this._createMessageHandler(d);
      let p = $('<form></form>').attr('id', 'signin-form').appendTo(require);
      (p.on('submit', (e) => {
        (gDesigner.stats('login-signup_login_login'), u(''), e.preventDefault());
        const module = $(e.target),
          require = module.find('input[data-property="email"]').val(),
          GCore = module.find('input[data-property="password"]').val();
        return (
          AppSettings.gApi
            .signin({ email: require, password: GCore, app: 'designer' })
            .then(() => {
              AppSettings.gApi
                .getUser()
                .then((e) => {
                  (this.close(), this._callback(new GUserModel(e)));
                })
                .catch((e) => this._handlerError(e, u));
            })
            .catch((e) => this._handlerError(e, u)),
          false
        );
      }),
        AppSettings2.HAS_ENTERPRISE
          ? $('<label>')
              .addClass('label')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-in-login')
                )
              )
              .appendTo(p)
          : $('<label>')
              .addClass('label')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-in-login')))
              .appendTo(p),
        $('<input>')
          .attr('type', 'text')
          .attr('data-property', 'email')
          .attr('required', true)
          .appendTo(p),
        $('<label>')
          .addClass('label')
          .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-in-password')))
          .appendTo(p));
      let g = this._createPasswordInput(),
        h = $('<span></span>')
          .addClass('forgot-password')
          .append(
            $('<span></span>')
              .addClass('txt')
              .addClass('link')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.forgot-password')))
              .on('click', () => {
                (gDesigner.stats('login-signup_login_forgot-password'),
                  AppSettings2.FORGOT_PWD_LINK
                    ? gContainer.openExternalLink(
                        null,
                        'https://idp.corel.com/idp/accountForgotPwd.jsp'
                      )
                    : this._activatePanel(c.Forms.ResetPassword));
              })
          ),
        f = $('<button></button>')
          .addClass('sign-in')
          .attr('type', 'submit')
          .append(
            $('<span></span>').text(
              GCore.GLocale.get(
                new GCore.GLocaleKey(
                  'GLoginDialog',
                  AppSettings2.HAS_ENTERPRISE ? 'text.sign-in-button' : 'text.sign-in'
                )
              )
            )
          )
          .appendTo(p);
      AppSettings2.HAS_ENTERPRISE
        ? (h.appendTo(p), g.appendTo(p), f.appendTo(p))
        : (g.appendTo(p), $('<div>').addClass('login-button-row').append(h).append(f).appendTo(p));
      let m = $('<div></div>').addClass('oauth-buttons');
      if (AppSettings2.HAS_ENTERPRISE) {
        let e = $('<div></div>').addClass('enterprise-sign-in').appendTo(require),
          t = $('<div></div>').addClass('content').appendTo(e);
        (t.append(
          $('<div></div>')
            .addClass('header')
            .append(
              $('<div><div/>')
                .addClass('subtitle')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GLoginDialog', 'text.enterprise-sign-in-message')
                  )
                )
            )
        ),
          m
            .append(
              this._createGoogleButton(
                new GCore.GLocaleKey('GLoginDialog', 'text.enterprise-sign-google')
              ).attr('tabindex', 1)
            )
            .append(
              this._createMicrosoftButton(
                new GCore.GLocaleKey('GLoginDialog', 'text.enterprise-sign-microsoft')
              ).attr('tabindex', 2)
            )
            .appendTo(t),
          m.appendTo(t),
          $('<div></div>')
            .addClass('footer')
            .append(
              $('<span></span>')
                .addClass('message')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GLoginDialog', 'text.enterprise-login-message-1')
                  )
                )
            )
            .append(
              $('<span></span>')
                .addClass('message')
                .html(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GLoginDialog', 'text.enterprise-login-message-2')
                  )
                )
            )
            .appendTo(t));
      } else {
        (gContainer.getRuntime() !== GContainer.Runtime.Chrome &&
          ($('<div></div>')
            .addClass('sep')
            .append(
              $('<span></span>').text(
                GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.or'))
              )
            )
            .appendTo(require),
          m
            .append(
              this._createFacebookButton(
                new GCore.GLocaleKey('GLoginDialog', 'text.sign-facebook')
              ).attr('tabindex', 1)
            )
            .append(
              this._createGoogleButton(
                new GCore.GLocaleKey('GLoginDialog', 'text.sign-google')
              ).attr('tabindex', 2)
            )
            .appendTo(require)),
          gDesigner.getStoreVendor() &&
            $('<footer></footer>')
              .append(
                $('<span></span>')
                  .addClass('link')
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GLoginDialog', 'text.continue-without-loggin-in')
                    )
                  )
                  .on('click', () => {
                    (this.close(), this._callback(null));
                  })
              )
              .appendTo(exports));
      }
      return exports;
    }

    _createGoogleButton(e) {
      return $('<button></button>')
        .addClass('sign-google oauth column-layout')
        .append($('<span></span>').addClass('icon').addClass('gravit-icon-google'))
        .append($('<span></span>').addClass('txt').text(GCore.GLocale.get(e)))
        .on('click', () => {
          let e = this._getStatMappedForm();
          (gDesigner.stats('login-signup_'.concat(e, '_login-google')), this._oauth('google'));
        });
    }

    _createFacebookButton(e) {
      return $('<button></button>')
        .addClass('sign-facebook oauth column-layout')
        .append($('<span></span>').addClass('icon').addClass('gravit-icon-facebook'))
        .append($('<span></span>').addClass('txt').text(GCore.GLocale.get(e)))
        .on('click', () => {
          let e = this._getStatMappedForm();
          (gDesigner.stats('login-signup_'.concat(e, '_login-facebook')), this._oauth('facebook'));
        });
    }

    _createMicrosoftButton(e) {
      return $('<button></button>')
        .addClass('sign-microsoft oauth column-layout')
        .append($('<span></span>').addClass('icon').addClass('gravit-icon-microsoft'))
        .append($('<span></span>').addClass('txt').text(GCore.GLocale.get(e)))
        .on('click', () => {
          let e = this._getStatMappedForm();
          (gDesigner.stats('login-signup_'.concat(e, '_login-microsoft')),
            this._oauth('microsoft'));
        });
    }

    async _buildSignUp() {
      let exports = $('<div></div>')
          .addClass('panel ' + c.Forms.SignUp)
          .appendTo(this._container),
        module = $('<div></div>').addClass('header').appendTo(exports);
      ($('<div></div>').addClass('logo').appendTo(module),
        $('<div></div>')
          .addClass('text')
          .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.login-dialog-title')))
          .appendTo(module));
      let require = $('<div></div>').addClass('body').appendTo(exports);
      ($('<div></div>')
        .addClass('title')
        .addClass('simple')
        .append(
          $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-up-title'))
          )
        )
        .appendTo(require),
        $('<div></div>')
          .addClass('subtitle')
          .append(
            $('<span></span>').text(
              GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.already-registered'))
            )
          )
          .append(
            $('<span></span>')
              .addClass('link')
              .addClass('panel')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.login-here')))
              .on('click', () => {
                (gDesigner.stats('login-signup_create-account_back-to-login'),
                  this._activatePanel(c.Forms.SignIn));
              })
          )
          .appendTo(require));
      let AppSettings2 = $('<div></div>')
        .addClass('message')
        .append($('<span></span>'))
        .appendTo(require);
      const GSystemDialog = this._createMessageHandler(AppSettings2),
        d = gContainer.getRuntime() === GContainer.Runtime.Electron;
      let u = $('<form></form>').attr('id', 'signup-form').appendTo(require);
      const p =
          undefined !== window.grecaptcha &&
          /^(prod|trunk)/.test('production') &&
          'localhost' !== location.hostname &&
          !d,
        g = async (e) => {
          const module = u.find('input[data-property="email"]').val(),
            require =
              u.find('input[data-property="firstname"]').val() +
              ' ' +
              u.find('input[data-property="lastname"]').val(),
            GCore = u.find('input[data-property="password"]').val();
          var AppSettings2 = e;
          const g = u.find('input[data-property="newsletter"]').is(':checked');
          let h, f;
          if (
            (d && (AppSettings2 = await gContainer.generateGoogleRecaptchaToken()),
            gContainer.getRuntime() === GContainer.Runtime.Electron)
          ) {
            const e = gContainer.getPlatform();
            (('darwin' !== e && 'win32' !== e) || (h = 'designer://'),
              (f = gDesigner.getAssetsURL()));
          } else f = location.origin;
          AppSettings.gApi
            .signup({
              email: module,
              name: require,
              password: GCore,
              app: 'designer',
              recaptcha: AppSettings2,
              newsletter: g,
              appUrl: h,
              webUrl: f,
            })
            .then(() => {
              AppSettings.gApi
                .getUser()
                .then((e) => {
                  ((e = new GUserModel(e)),
                    this._buildThanksSignup(e),
                    this._activatePanel(c.Forms.Thanks),
                    this._callback(e));
                })
                .catch((e) => this._handlerError(e, GSystemDialog));
            })
            .catch((e) => {
              if (e && e.errors) {
                const t = new Map(e.errors);
                GSystemDialog(Array.from(t.values()).join('<br>'));
              } else GSystemDialog(e.message || '');
              p && grecaptcha.reset(this._recaptchaWidget);
            });
        };
      (u.on(
        'submit',
        (e) => (
          gDesigner.stats('login-signup_create-account_create-account'),
          GSystemDialog(''),
          e.preventDefault(),
          p ? grecaptcha.execute(this._recaptchaWidget) : g(),
          false
        )
      ),
        $('<label>')
          .addClass('label')
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-email')
            )
          )
          .appendTo(u),
        $('<input>')
          .attr('type', 'email')
          .attr('data-property', 'email')
          .attr('autofocus', true)
          .attr('required', true)
          .attr(
            'title',
            GCore.GLocale.get(
              new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-email')
            )
          )
          .appendTo(u));
      let h = $('<div></div>').addClass('input-group').appendTo(u);
      ($('<span>')
        .append(
          $('<label>')
            .addClass('label')
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-first-name')
              )
            )
        )
        .append(
          $('<input>')
            .attr('type', 'text')
            .attr('data-property', 'firstname')
            .attr('required', true)
            .attr(
              'title',
              GCore.GLocale.get(
                new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-first-name')
              )
            )
        )
        .appendTo(h),
        $('<span>')
          .append(
            $('<label>')
              .addClass('label')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-last-name')
                )
              )
          )
          .append(
            $('<input>')
              .attr('type', 'text')
              .attr('data-property', 'lastname')
              .attr('required', true)
              .attr(
                'title',
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-last-name')
                )
              )
          )
          .appendTo(h),
        $('<label>')
          .addClass('label')
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-sign-up-password')
            )
          )
          .appendTo(u),
        this._createPasswordInput().appendTo(u),
        $('<label></label>')
          .append(
            $('<input>')
              .attr('type', 'checkbox')
              .on('change', (e) => {
                let module = $(e.target).is(':checked');
                (gDesigner.stats('login-signup_create-account_i-agree', module),
                  u
                    .find('button[type="submit"]')
                    .prop('disabled', !module)
                    .toggleClass('g-disabled', !module));
              })
          )
          .append(
            $('<div></div>')
              .append(
                $('<span></span>').text(
                  GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.agree'))
                )
              )
              .append(
                $('<span></span>')
                  .addClass('link')
                  .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.terms-use')))
                  .on(
                    'click',
                    (e) => (
                      gDesigner.stats('login-signup_create-account_terms-of-use'),
                      gContainer.openExternalLink(e, 'https://www.corel.com/en/terms-of-use'),
                      false
                    )
                  )
              )
              .append($('<span></span>').text('&'))
              .append(
                $('<span></span>')
                  .addClass('link')
                  .text(
                    GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.privacy-policy'))
                  )
                  .on(
                    'click',
                    (e) => (
                      gDesigner.stats('login-signup_create-account_privacy-policy'),
                      gContainer.openExternalLink(
                        e,
                        'https://www.corel.com/en/corel-privacy-policy'
                      ),
                      false
                    )
                  )
              )
          )
          .appendTo(u),
        $('<label></label>')
          .append(
            $('<input>')
              .attr('type', 'checkbox')
              .attr('data-property', 'newsletter')
              .prop('checked', false)
          )
          .on('change', (e) => {
            gDesigner.stats('login-signup_create-account_subscribe', $(e.target).is(':checked'));
          })
          .append(
            $('<span></span>').text(
              GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.newsletter'))
            )
          )
          .appendTo(u));
      let f = await AppSettings.gApi.recaptchaKey();
      if (p) {
        let e = $(grecaptchaWidget);
        this._recaptchaWidget = grecaptcha.render(e[0], {
          sitekey: f,
          callback: g,
          size: 'invisible',
        });
      }
      ($('<button></button>')
        .attr('type', 'submit')
        .addClass('sign-in')
        .append(
          $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-up-now'))
          )
        )
        .addClass('g-disabled')
        .prop('disabled', true)
        .appendTo(u),
        gContainer.getRuntime() !== GContainer.Runtime.Chrome &&
          ($('<div></div>')
            .addClass('sep')
            .append(
              $('<span></span>').text(
                GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.or'))
              )
            )
            .appendTo(require),
          $('<div></div>')
            .addClass('oauth-buttons')
            .append(
              this._createFacebookButton(new GCore.GLocaleKey('GLoginDialog', 'text.sign-facebook'))
            )
            .append(
              this._createGoogleButton(new GCore.GLocaleKey('GLoginDialog', 'text.sign-google'))
            )
            .appendTo(require)));
      let m = $('<span></span>').addClass('link');
      return (
        gDesigner.getStoreVendor() &&
          m
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GLoginDialog', 'text.continue-without-loggin-in')
              )
            )
            .on('click', () => {
              (this.close(), this._callback(null));
            }),
        $('<footer></footer>').append(m).append(m).appendTo(exports),
        exports
      );
    }

    _buildResetPassword() {
      let exports = $('<div></div>')
          .addClass('panel ' + c.Forms.ResetPassword)
          .appendTo(this._container),
        module = $('<div></div>').addClass('header').appendTo(exports);
      ($('<div></div>').addClass('logo').appendTo(module),
        $('<div></div>')
          .addClass('text')
          .text(
            GCore.GLocale.get(
              new GCore.GLocaleKey('GLoginDialog', 'text.reset-password-header-title')
            )
          )
          .appendTo(module));
      let require = $('<div></div>').addClass('body').appendTo(exports);
      $('<div></div>')
        .addClass('title')
        .addClass('simple')
        .append(
          $('<span></span>').text(
            GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.reset-password-title'))
          )
        )
        .appendTo(require);
      let AppSettings2 = $('<div></div>')
        .addClass('message')
        .append($('<span></span>'))
        .appendTo(require);
      const GSystemDialog = this._createMessageHandler(AppSettings2);
      let GUserModel = $('<form></form>').attr('id', 'reset-password-form').appendTo(require);
      return (
        GUserModel.on('submit', (e) => {
          (gDesigner.stats('login-signup_forgot-password_send-request'),
            GSystemDialog(''),
            e.preventDefault());
          const module = GUserModel.find('input[data-property="email"]').val(),
            require = location.href;
          let GCore, AppSettings2;
          if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
            const e = gContainer.getPlatform();
            (('darwin' !== e && 'win32' !== e) || (GCore = 'designer://'),
              (AppSettings2 = gDesigner.getAssetsURL()));
          } else AppSettings2 = location.origin;
          return (
            AppSettings.gApi
              .resetPassword({
                email: module,
                redirect: require,
                appUrl: GCore,
                webUrl: AppSettings2,
              })
              .then((e) => {
                GSystemDialog(e && e.message, 'info');
              })
              .catch((e) => this._handlerError(e, GSystemDialog)),
            false
          );
        }),
        $('<label>')
          .addClass('label')
          .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.sign-in-login')))
          .appendTo(GUserModel),
        $('<input>')
          .attr('type', 'email')
          .attr('data-property', 'email')
          .attr('autofocus', true)
          .attr('required', true)
          .attr(
            'title',
            GCore.GLocale.get(
              new GCore.GLocaleKey('GLoginDialog', 'text.placeholder-reset-password-email')
            )
          )
          .appendTo(GUserModel),
        $('<div>')
          .addClass('login-button-row')
          .append(
            $('<span></span>')
              .addClass('link')
              .text(
                '‹ ' + GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.back-sign-in'))
              )
              .on('click', () => {
                (gDesigner.stats('login-signup_forgot-password_back-to-login'),
                  this._activatePanel(c.Forms.SignIn));
              })
          )
          .append(
            $('<button></button>')
              .attr('type', 'submit')
              .append(
                $('<span></span>').text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GLoginDialog', 'text.reset-password-send')
                  )
                )
              )
          )
          .appendTo(GUserModel),
        exports
      );
    }

    _buildThanksSignup(e) {
      let module = $('<div></div>')
          .addClass('panel ' + c.Forms.Thanks)
          .appendTo(this._container),
        require = $('<div></div>').addClass('header').appendTo(module);
      ($('<div></div>').addClass('logo').appendTo(require),
        $('<div></div>')
          .addClass('text')
          .text(GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.login-dialog-title')))
          .appendTo(require));
      let AppSettings = $('<div></div>').addClass('body').appendTo(module);
      return (
        $('<div></div>')
          .addClass('title')
          .append(
            $('<span></span>').html(
              GCore.GLocale.get(
                new GCore.GLocaleKey('GLoginDialog', 'text.sign-up-thanks')
              ).replace('%email', e.getEmail())
            )
          )
          .appendTo(AppSettings),
        $('<button></button>')
          .append(
            $('<span></span>').text(
              GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.ok'))
            )
          )
          .on('click', this.close.bind(this))
          .appendTo(AppSettings),
        module
      );
    }

    _createMessageHandler(e) {
      return function (t) {
        let require = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'error';
        (e.removeClass('error info show'),
          t && e.addClass('show').addClass(require).find('span').text(t));
      };
    }

    _activatePanel(e) {
      ((this._activePanel = e),
        this._container.find('.panel.g-active').removeClass('g-active'),
        this._container.find('.panel.' + e).addClass('g-active'));
    }

    _oauth(e, t) {
      AppSettings.gApi
        .popup('/auth/' + e)
        .then((e) => {
          (this.close(), this._callback(e));
        })
        .catch((e) => this._handlerError(e, t));
    }

    _handlerError(e, t) {
      t((e && e.message) || (e && e.errors.toString()) || '');
    }

    _createPasswordInput() {
      let exports = $('<div></div>').addClass('input-field'),
        module = $('<input>')
          .attr('type', 'password')
          .attr('required', true)
          .attr('data-property', 'password')
          .appendTo(exports);
      return (
        $('<span></span>')
          .addClass('icon')
          .addClass('gravit-icon-hide')
          .on('click', (e) => {
            $(e.target)
              .closest('span')
              .toggleClass('gravit-icon-display gravit-icon-hide')
              .hasClass('gravit-icon-hide')
              ? module.attr('type', 'password')
              : module.attr('type', 'text');
          })
          .appendTo(exports),
        exports
      );
    }

    _getStatMappedForm() {
      let exports = null;
      switch (this._activePanel) {
        case c.Forms.SignIn:
          exports = 'login';
          break;
        case c.Forms.SignUp:
          exports = 'create-account';
          break;
        case c.Forms.ResetPassword:
          exports = 'forgot-password';
          break;
        case c.Forms.Thanks:
          exports = 'account-created';
          break;
        default:
          exports = 'login';
      }
      return exports;
    }

    open() {
      gDesigner.isOfflineAsync().then((e) => {
        e
          ? GSystemDialog.alert(
              GCore.GLocale.get(new GCore.GLocaleKey('GLoginDialog', 'text.you-are-offline'))
            )
          : this._dialog.gDialog('open', false);
      });
    }

    close() {
      this._dialog.gDialog('close');
    }

    static Forms = {
      SignIn: 'sign-in',
      SignUp: 'sign-up',
      ResetPassword: 'reset-password',
      Thanks: 'thanks',
    };

  }
  exports.exports = c;
}