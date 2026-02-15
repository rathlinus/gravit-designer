/**
 * Webpack Module #177
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */,
    require(20) /* polyfill_RegExp_exec */,
    require(107) /* polyfill_RegExp_test */,
    require(3) /* polyfill_RegExp_toString */,
    require(247) /* module_247 */,
    require(91)) /* polyfill_String_trim */;
  var o = require(263) /* Exports_GRegex */,
    AppSettings = require(10);
  const { GObject: a } = require(1) /* GCore */,
    r = require(733) /* module_733 */,
    s = require(589) /* module_589 */,
    l = {},
    c = [
      '#B30000',
      '#B35900',
      '#999900',
      '#59B300',
      '#009966',
      '#00B3B3',
      '#0095B3',
      '#006699',
      '#003CB3',
      '#1E00B3',
      '#5900B3',
      '#9500B3',
      '#B30077',
      '#E60000',
      '#E67300',
      '#E69900',
      '#5500FF',
      '#BF00FF',
    ];
  class d {
    constructor() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      Object.assign(this, exports);
    }

    hasOwnPictureAvatar() {
      return (
        this.avatar && this.avatar.split('?')[1] && 'v=' === this.avatar.split('?')[1].substr(0, 2)
      );
    }

    getUID() {
      return !this.id && AppSettings.ANONYMOUS_SESSION_ENABLED
        ? this.user_id || this.session_id || ''
        : this.id || this.user_id || '';
    }

    getUserColor() {
      if (!this._color) {
        const t = this.getUID();
        if (!l[t]) {
          var exports = c.shift();
          l[t] =
            exports ||
            '#' +
              (
                (((32 * Math.random()) | 0) << 3) |
                (((32 * Math.random()) | 0) << 11) |
                (((32 * Math.random()) | 0) << 19)
              ).toString(16);
        }
        this._color = l[t];
      }
      return this._color;
    }

    getEmail() {
      return AppSettings.CloudUtils.getUserEmail(this);
    }

    isDeactivated() {
      return !!this.deactivated;
    }

    isAnonymous() {
      return this.anonymous;
    }

    isGravitAccount() {
      const exports = this.getEmail();
      return /\@(gravit\.io|designer\.io|corel\.com|corelvector\.com)$/.test(exports);
    }

    isEmailVerified() {
      return !!this.email_verified;
    }

    getFirstName() {
      try {
        if (this.name && this.name.trim()) {
          return this.name.trim().split(o.GRegex.String.SpacesLineBreak)[0];
        }
        return this.name || '';
      } catch (e) {
        return '';
      }
    }

    getUserNameInitials() {
      const exports = this.getFirstName();
      try {
        if (this.last_name && this.last_name.trim()) {
          const t = this.last_name;
          return ''.concat(exports.substr(0, 1)).concat(t.substr(0, 1)).toLocaleUpperCase();
        }
        return exports ? ''.concat(exports.substr(0, 1)) : '';
      } catch (t) {
        return exports ? ''.concat(exports.substr(0, 1)) : '';
      }
    }

    getLastName() {
      return this.last_name;
    }

    getUserReference() {
      return this.email || this.login || this.getFullUserName();
    }

    getAccountName() {
      return this.email || this.login || '';
    }

    static equals(e, t) {
      return new d(e).getUID() === new d(t).getUID();
    }

  }
  (a.inheritAndMix(d, s, [r, AppSettings.User], true),
    exports.exports = d);
}