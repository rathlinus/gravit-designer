/**
 * Module 830
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
  i(30), i(20), i(107), i(247), i(91);
  const n = i(973), {sanitizeName: r} = i(254), o = i(583), {
      GLocale: a,
      GLocaleKey: s
    } = i(209);
  function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, e);
  }
  l.prototype.isInternal = function () {
    return this.user_type === n.Internal;
  }, l.prototype.isStudent = function () {
    return this.user_type === n.Student;
  }, l.prototype.canUpdateSelfAccountData = function () {
    return !this.isStudent();
  }, l.prototype.canResetSelfPassword = function () {
    return !this.isStudent();
  }, l.prototype.isSuperAdmin = function () {
    return !!this.admin && 1 === this.admin.user;
  }, l.getUserNameInitials = function (e) {
    const t = e && e.split(/\s+/), i = t && t.length > 1 ? t[t.length - 1].slice(0, 1).toUpperCase() : "";
    return (e && e.slice(0, 1).toUpperCase()) + i;
  }, l.isFirstNameValid = function (e) {
    return !!e && !o.USER.INVALID_CHARACTERS.test(e);
  }, l.isLastNameValid = function (e) {
    return l.isFirstNameValid(e);
  }, l.prototype.getFullUserName = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.name || this.last_name) {
      const e = new Array();
      if (this.name && this.name.trim()) {
        let t = this.name.trim().split(/\s/)[0];
        e.push(r(t));
      }
      if (this.last_name && this.last_name.trim()) {
        let t = this.last_name.trim().split(/\s/)[0];
        e.push(r(t));
      }
      return e.join(" ");
    }
    return r(this.login || this.email || (e ? a.get(new s("GCommonNames", "text.unknown-user")) : "Unknown"));
  }, e.exports = l;
}
