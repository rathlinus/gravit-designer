/**
 * Webpack Module #1166
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(8) /* polyfill_bundle_ES6 */,
    require(71)) /* polyfill_String_includes */;
  const GUserModel = require(177) /* GUserModel */,
    GEvent_user_805 = require(805) /* GEvent_user_805 */,
    { gApi: a } = require(10) /* AppSettings */,
    r = {};
  let s = false;
  const l = (e) => {
    delete r[e.user.getUID()];
  };
  class c {
    constructor(e) {
      (e instanceof GUserModel || (e = new GUserModel(e)),
      (this._user = e),
      s || (gDesigner.addEventListener(GEvent_user_805, l), (s = true)));
    }

    build(e) {
      var t = null;
      const require = $('<span></span>')
        .addClass('g-user-preview')
        .append(
          $('<div />')
            .append(this._user.getUserNameInitials())
            .addClass('color-preview')
            .css({ 'background-color': this._user.getUserColor() })
        );
      return (
        (async (e) => {
          if (!r.hasOwnProperty(e)) {
            const t = await a.getUser(e, true).catch(() => Promise.resolve(null));
            r[e] = new GUserModel(t);
          }
          return r[e];
        })(this._user.getUID()).then((GUserModel) => {
          (GUserModel &&
            (t = this._user.avatar || GUserModel.avatar) &&
            (t.includes('graph.microsoft.com') ||
            ('http' !== t.substr(0, 4) && 'assets' !== t.substr(0, 6))
              ? '<svg' === t.substr(0, 4) &&
                require
                  .empty()
                  .append(
                    $(t).addClass('g-user-preview').toggleClass('grayed', false).addClass('svg')
                  )
              : (this._user.hasOwnPictureAvatar() ||
                  (!this._user.avatar && GUserModel.hasOwnPictureAvatar())) &&
                require
                  .empty()
                  .append(
                    $('<img>')
                      .attr('src', t)
                      .addClass('g-user-preview')
                      .toggleClass('grayed', false)
                  )),
            e && e());
        }),
        require
      );
    }

    static getUserDataFromAnnotAndUser(e, t) {
    const require = e.getProperty('uid');
    let GUserModel = e.getProperty('name'),
      GEvent_user_805 = '';
    return (
      require === t.getUID() &&
        ((GUserModel = t.getFirstName() || GUserModel), (GEvent_user_805 = t.getLastName() || '')),
      { id: require, name: GUserModel, last_name: GEvent_user_805 }
    );
  }

  }
  exports.exports = c;
}