/**
 * Webpack Module #446
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(1) /* module */,
      a = o(require(119) /* module_119 */),
      r = o(require(860) /* module_860 */);
    function s(e) {
      let module =
        arguments.length > 1 && undefined !== arguments[1]
          ? arguments[1]
          : () => {};
      (this._cb = e), (this._showFormCb = module), this._run();
    }
    i.GObject.inherit(s, i.GObject),
      (s.prototype._close = function () {
        this._dialog && this._dialog.gDialog("close");
      }),
      (s.prototype._run = function () {
        if (gDesigner.isAnonymous())
          return (
            new r.default((e) => {
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
                    i.GLocale.get(new i.GLocaleKey("GLoginPanel", "text.title"))
                  )
                  .appendTo(module),
                $("<span/>")
                  .addClass("subtitle")
                  .text(
                    i.GLocale.get(
                      new i.GLocaleKey("GLoginPanel", "text.subtitle")
                    )
                  )
                  .appendTo(module);
              var require = $("<div/>");
              require.addClass("buttons").appendTo(module);
              var o = (e, t) => {
                var o = $("<div/>");
                o.on("click", t),
                  o
                    .addClass(e)
                    .text(
                      i.GLocale.get(
                        new i.GLocaleKey("GLoginPanel", "text." + e)
                      )
                    )
                    .appendTo(require);
              };
              o("login", () => {
                a.default.performLogin().then((e) => {
                  this._logged(e);
                });
              }),
                o("signup", () => {
                  a.default.performSignup().then((e) => {
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