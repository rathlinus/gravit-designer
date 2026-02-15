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

function (exports, module, require) {
  "use strict";
  require(30) /* polyfill_Object_assign */, require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(247) /* module_247 */, require(91) /* polyfill_String_trim */;
  const n = require(973) /* module */, {sanitizeName: r} = require(254) /* GCommonNames */, o = require(583) /* module */, {
      GLocale: a,
      GLocaleKey: s
    } = require(209) /* module */;
  function l() {
    let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    Object.assign(this, exports);
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
    const module = e && e.split(/\s+/), require = module && module.length > 1 ? module[module.length - 1].slice(0, 1).toUpperCase() : "";
    return (e && e.slice(0, 1).toUpperCase()) + require;
  }, l.isFirstNameValid = function (e) {
    return !!e && !o.USER.INVALID_CHARACTERS.test(e);
  }, l.isLastNameValid = function (e) {
    return l.isFirstNameValid(e);
  }, l.prototype.getFullUserName = function () {
    let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
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
    return r(this.login || this.email || (exports ? a.get(new s("GCommonNames", "text.unknown-user")) : "Unknown"));
  }, exports.exports = l;
}
