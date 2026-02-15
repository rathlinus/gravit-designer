/**
 * Webpack Module #883
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */;
    const o = require(177) /* module_177 */;
    class i extends o {
      constructor() {
        let {
          id: exports,
          name: module,
          last_name: require,
          email: o,
          showText: i,
          avatar: a,
          role: r,
          fontWeight: s = "normal",
          type: l = "contact",
          trigger: c = "@",
          additional: d = false,
        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        super({
          id: exports,
          name: module,
          last_name: require,
          email: o,
          showText: i,
          avatar: a,
          fontWeight: s,
          type: l,
          trigger: c,
        }),
          (this.value = ""),
          (this._role = r),
          (this._additional = d);
      }
      setValue(e) {
        this.value = e;
      }
      getFullUserName() {
        return this._additional ? this.name : super.getFullUserName();
      }
      static createUserMention(e, t) {
        let require = e.getFirstName();
        return new i({
          id: e.getUID(),
          name: require,
          last_name: e.getLastName(),
          showText: "@" + e.getFullUserName(),
          avatar: t ? t.avatar : "assets/icon/notification-icon.svg",
          role: e.getRole(),
          email: e.getEmail(),
        });
      }
      static clone(e) {
        const module = new i();
        return Object.assign(module, e), module;
      }
    }
    exports.exports = i;
  }