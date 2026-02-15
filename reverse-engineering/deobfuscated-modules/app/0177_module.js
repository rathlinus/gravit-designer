/**
 * Webpack Module #177
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(30) /* module_30 */, n(20) /* module_20 */, n(107) /* module_107 */, n(3) /* module_3 */, n(247) /* module_247 */, n(91) /* module_91 */;
    var o = n(263) /* module_263 */,
      i = n(10) /* module_10 */;
    const { GObject: a } = n(1) /* module_1 */,
      r = n(733) /* module_733 */,
      s = n(589) /* module_589 */,
      l = {},
      c = [
        "#B30000",
        "#B35900",
        "#999900",
        "#59B300",
        "#009966",
        "#00B3B3",
        "#0095B3",
        "#006699",
        "#003CB3",
        "#1E00B3",
        "#5900B3",
        "#9500B3",
        "#B30077",
        "#E60000",
        "#E67300",
        "#E69900",
        "#5500FF",
        "#BF00FF",
      ];
    function d() {
      let e =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, e);
    }
    a.inheritAndMix(d, s, [r, i.User], true),
      (d.equals = function (e, t) {
        return new d(e).getUID() === new d(t).getUID();
      }),
      (d.prototype.hasOwnPictureAvatar = function () {
        return (
          this.avatar &&
          this.avatar.split("?")[1] &&
          "v=" === this.avatar.split("?")[1].substr(0, 2)
        );
      }),
      (d.prototype.getUID = function () {
        return !this.id && i.ANONYMOUS_SESSION_ENABLED
          ? this.user_id || this.session_id || ""
          : this.id || this.user_id || "";
      }),
      (d.prototype.getUserColor = function () {
        if (!this._color) {
          const t = this.getUID();
          if (!l[t]) {
            var e = c.shift();
            l[t] =
              e ||
              "#" +
                (
                  (((32 * Math.random()) | 0) << 3) |
                  (((32 * Math.random()) | 0) << 11) |
                  (((32 * Math.random()) | 0) << 19)
                ).toString(16);
          }
          this._color = l[t];
        }
        return this._color;
      }),
      (d.prototype.getEmail = function () {
        return i.CloudUtils.getUserEmail(this);
      }),
      (d.prototype.isDeactivated = function () {
        return !!this.deactivated;
      }),
      (d.prototype.isAnonymous = function () {
        return this.anonymous;
      }),
      (d.prototype.isGravitAccount = function () {
        const e = this.getEmail();
        return /\@(gravit\.io|designer\.io|corel\.com|corelvector\.com)$/.test(
          e
        );
      }),
      (d.prototype.isEmailVerified = function () {
        return !!this.email_verified;
      }),
      (d.prototype.getFirstName = function () {
        try {
          if (this.name && this.name.trim()) {
            return this.name.trim().split(o.GRegex.String.SpacesLineBreak)[0];
          }
          return this.name || "";
        } catch (e) {
          return "";
        }
      }),
      (d.prototype.getUserNameInitials = function () {
        const e = this.getFirstName();
        try {
          if (this.last_name && this.last_name.trim()) {
            const t = this.last_name;
            return ""
              .concat(e.substr(0, 1))
              .concat(t.substr(0, 1))
              .toLocaleUpperCase();
          }
          return e ? "".concat(e.substr(0, 1)) : "";
        } catch (t) {
          return e ? "".concat(e.substr(0, 1)) : "";
        }
      }),
      (d.prototype.getLastName = function () {
        return this.last_name;
      }),
      (d.prototype.getUserReference = function () {
        return this.email || this.login || this.getFullUserName();
      }),
      (d.prototype.getAccountName = function () {
        return this.email || this.login || "";
      }),
      (e.exports = d);
  }