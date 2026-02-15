/**
 * Webpack Module #860
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */,
      require(30) /* polyfill_Object_assign */,
      require(8) /* polyfill_bundle_ES6 */,
      require(20) /* polyfill_RegExp_exec */,
      require(3) /* polyfill_RegExp_toString */,
      require(34) /* polyfill_String_replace */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */,
      require(125) /* stub_requires_673 */,
      require(126) /* polyfill_URL_toJSON */,
      require(114) /* stub_requires_424 */;
    var o = require(1) /* module */,
      i = require(263) /* Exports_GRegex */,
      a = require(40) /* CollaborationMergeUtils */;
    const { gApi: r, GLoginDialog: s, DESIGNER: { TITLE: l } = {} } = require(10) /* AppSettings */,
      c = require(85) /* GContainer */,
      d = require(1252) /* module_1252 */,
      u = require(859) /* module_859 */,
      p = function (e) {
        return gContainer.signWithOAuth(e);
      };
    function g(e) {
      this._closeCallback = e;
    }
    function h(e) {
      (this._callback = e), (this._loginConfiguration = {});
    }
    o.GObject.inherit(g, s.Impl),
      (g.prototype.openOAuth = function (e) {
        let { dialog: module, provider: require } = e;
        p(require)
          .then((e) => module._postLogin(e))
          .catch((e) => module._handleError(e));
      }),
      (g.prototype.openPurchaseFlow = async function (e) {
        let { dialog: module, options: require = {} } = e;
        await gDesigner.openPaymentDialog(null, require).catch(() => null), module.close();
      }),
      (g.prototype.openExternalLink = function (e) {
        let { link: module } = e;
        gContainer.openExternalLink(null, module);
      }),
      (g.prototype.close = function () {
        this._closeCallback();
      }),
      (g.prototype.getLanguage = function () {
        return o.GLocale.getLanguage();
      }),
      o.GObject.inherit(h, o.GObject),
      (h.prototype._callback = null),
      (h.prototype._newTitle = null),
      (h.prototype._oldTitle = null),
      (h.prototype._loginConfiguration = null),
      (h.prototype._popupInfo = null),
      (h.prototype.open = function () {
        var e = this;
        let module =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        const require = u.getRuntimeCode();
        this._loginConfiguration = Object.assign({ runtime: require }, module);
        const {
          anonymous: i = false,
          animate: a = false,
          version: l = "",
          options: c = {},
        } = module;
        let h;
        if (
          ((this._oldTitle = document.title),
          (this._newTitle = o.GLocale.get(
            new o.GLocaleKey("GEmbeddedLogin", "text.title")
          )),
          (document.title = this._newTitle),
          gDesigner.isOffline())
        ) {
          this._frame = $("<div></div>")
            .addClass("cross-frame")
            .toggleClass("g-anonymous", i)
            .appendTo($("body"));
          const e = new g(() => this.close());
          new s({
            impl: e,
            gApi: r,
            origin: location.origin,
            anonymous: i,
            version: l,
            options: c,
            runtime: require,
          }).open(this._frame);
        } else {
          const t = this._buildURL(this._loginConfiguration);
          (this._crossFrame = new d({
            className: i ? "g-anonymous" : "",
            oauth: (e) =>
              p(e.provider)
                .then((e) =>
                  this._crossFrame.postMessage(
                    { cmd: "postLogin", user: e },
                    "*"
                  )
                )
                .catch((t) => this._handleOAuthError(e.provider, t)),
            close: function () {
              let { token: t } =
                arguments.length > 0 && undefined !== arguments[0]
                  ? arguments[0]
                  : {};
              return e.close(t);
            },
          }).open(t)),
            a &&
              ((h = this._crossFrame.getFrame()),
              h.css({ position: "fixed", height: "300%" }),
              h.on("load", f));
        }
        function f() {
          h && (h.animate({ height: "100%" }, "slow"), h.off("load", f));
        }
      }),
      (h.prototype._handleOAuthError = function (e, t) {
        t && t.code === r.ERROR_CODES.ERR_POPUP_HAS_BEEN_BLOCKED
          ? this._showPopupInfo(e)
          : this._crossFrame.postMessage({ cmd: "error", error: t }, "*");
      }),
      (h.prototype._showPopupInfo = function (e) {
        this._popupInfo && this._popupInfo.remove();
        const module = e.charAt(0).toUpperCase() + e.slice(1);
        (this._popupInfo = $("<div/>")
          .addClass("g-embedded-login")
          .addClass("popup-info")
          .append(
            $("<div/>")
              .addClass("container")
              .append(
                $("<div/>")
                  .addClass("message")
                  .html(
                    o.GLocale.get(
                      new o.GLocaleKey(
                        "GEmbeddedLogin",
                        "text.pop-has-been-blocked"
                      )
                    )
                      .replace("%provider", module)
                      .replace("%app", l)
                  )
              )
              .append(
                $("<img/>")
                  .addClass("close-button")
                  .attr("src", "assets/icon/login/close.svg")
                  .on("click", () => {
                    this._popupInfo.remove();
                  })
              )
          )),
          this._popupInfo.find("a").on("click", (t) => {
            t.preventDefault(),
              this._popupInfo.remove(),
              p(e)
                .then((e) => {
                  this._crossFrame.postMessage(
                    { cmd: "postLogin", user: e },
                    "*"
                  );
                })
                .catch((e) => {
                  this._crossFrame.postMessage({ cmd: "error", error: e }, "*");
                });
          }),
          this._popupInfo.appendTo($("body"));
      }),
      (h.prototype._buildURL = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        const {
          anonymous: module = false,
          signup: require = false,
          closeable: s = true,
          flow: l,
          options: d = {},
          runtime: u,
        } = exports;
        let p, g, h, f;
        if (gContainer.getRuntime() === c.Runtime.Electron) {
          const e = gContainer.getPlatform();
          ("darwin" !== e && "win32" !== e) || (p = window.btoa("designer://")),
            (g = (0, a.stringToBase64String)(gDesigner.getAssetsURL()));
        } else g = (0, a.stringToBase64String)(location.origin);
        const m = new URL("".concat(r.url, "/pro/login")),
          y = m.searchParams,
          v = gDesigner.getSignupOptions();
        v &&
          Object.entries(v).forEach((e) => {
            let [module, require] = e;
            require && y.set(module, require);
          }),
          g && y.set("webUrl", g),
          p && y.set("appUrl", p),
          (gDesigner.showCreateAccount() || require || v) && y.set("newuser", true),
          gDesigner.enterpriseLoginForm() && y.set("enterprise", "1"),
          module && y.set("anonymous", module),
          s || y.set("closeable", s),
          l && y.set("flow", l),
          gContainer.shouldBypassEmailVerification() &&
            y.set("bypassEmailVerification", true),
          u && y.set("runtime", u);
        var _ = new URL(window.location.href);
        if (_.searchParams)
          (h = _.searchParams.get("token")), (f = _.searchParams.get("d"));
        else {
          for (
            var b, w = {};
            (b = i.GRegex.URLQuery.NextParameter.exec(window.location.href));

          )
            w[b[1]] = b[2];
          (h = w.token), (f = w.d);
        }
        return (
          h && y.set("token", h),
          f && y.set("d", f),
          Object.keys(d).forEach((e) => {
            y.set(e, d[e]);
          }),
          y.set("lang", o.GLocale.getLanguage()),
          m.toString()
        );
      }),
      (h.prototype.close = async function (e) {
        e && r.setAuthorizationToken && r.setAuthorizationToken(e);
        const module = await gDesigner.getUser();
        module &&
          (this._isDeactivatedUser(module)
            ? this._handleDeactivatedUser(module)
            : (document.title === this._newTitle &&
                (document.title = this._oldTitle),
              this._crossFrame
                ? this._crossFrame.close()
                : this._frame && this._frame.remove(),
              this._callback && this._callback(module)));
      }),
      (h.prototype._isDeactivatedUser = function (e) {
        return (
          (!this._loginConfiguration.anonymous ||
            !gContainer.shouldBypassEmailVerification()) &&
          e.isDeactivated()
        );
      }),
      (h.prototype._handleDeactivatedUser = function (e) {
        if (this._crossFrame) {
          const { flow: e } = this._loginConfiguration;
          if ("purchase_flow_new" === e) {
            const e = this._buildURL(
              Object.assign(this._loginConfiguration, { flow: undefined })
            );
            this._crossFrame.getFrame().attr("src", e);
          }
        }
        gDesigner.openDeactivatedUserDialog(e);
      }),
      (exports.exports = h);
  }