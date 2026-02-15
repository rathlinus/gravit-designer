/**
 * Webpack Module #446
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GCore = require(1) /* GCore */,
      GCloudStorage = _interopRequireDefault(require(119) /* GCloudStorage */),
      GEmbeddedLogin = _interopRequireDefault(require(860) /* GEmbeddedLogin */);
    function s(e) {
      let module =
        arguments.length > 1 && undefined !== arguments[1]
          ? arguments[1]
          : () => {};
      (this._cb = e), (this._showFormCb = module), this._run();
    }
    GCore.GObject.inherit(s, GCore.GObject),
      (s.prototype._close = function () {
        this._dialog && this._dialog.gDialog("close");
      }),
      (s.prototype._run = function () {
        if (gDesigner.isAnonymous())
          return (
            new GEmbeddedLogin.default((e) => {
              e && !e.anonymous && this._logged(e);
            }).open({ anonymous: true, signup: true, animate: true }),
            void this._showFormCb()
          );
        this._cb && this._cb();
      }),
      (s.prototype._logged = function (e) {
        this._close(), this._cb && this._cb(e);
      }),
      (s.prototype._build = function () {
        (this._dialog = $("<div/>")),
          gDesigner.getUser().then((e) => {
            if (e) this._logged(e);
            else {
              this._dialog.closest(".loading").removeClass("loading");
              var module = $("<div/>");
              module.addClass("container").appendTo(this._dialog),
                $("<div/>").addClass("logo").appendTo(module),
                $("<span/>")
                  .addClass("title")
                  .text(
                    GCore.GLocale.get(new GCore.GLocaleKey("GLoginPanel", "text.title"))
                  )
                  .appendTo(module),
                $("<span/>")
                  .addClass("subtitle")
                  .text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GLoginPanel", "text.subtitle")
                    )
                  )
                  .appendTo(module);
              var require = $("<div/>");
              require.addClass("buttons").appendTo(module);
              var _interopRequireDefault = (e, t) => {
                var _interopRequireDefault = $("<div/>");
                _interopRequireDefault.on("click", t),
                  _interopRequireDefault
                    .addClass(e)
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GLoginPanel", "text." + e)
                      )
                    )
                    .appendTo(require);
              };
              _interopRequireDefault("login", () => {
                GCloudStorage.default.performLogin().then((e) => {
                  this._logged(e);
                });
              }),
                _interopRequireDefault("signup", () => {
                  GCloudStorage.default.performSignup().then((e) => {
                    this._logged(e);
                  });
                });
            }
          }),
          this._dialog.gDialog({
            releaseOnClose: true,
            className: "g-login-panel loading",
          }),
          this._dialog.gDialog("open", true);
      }),
      (exports.exports = s);
  }