/**
 * Webpack Module #1166
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */, require(71) /* polyfill_String_includes */;
    const o = require(177) /* module_177 */,
      i = require(805) /* module_805 */,
      { gApi: a } = require(10) /* AppSettings */,
      r = {};
    let s = false;
    const l = (e) => {
      delete r[e.user.getUID()];
    };
    function c(e) {
      e instanceof o || (e = new o(e)),
        (this._user = e),
        s || (gDesigner.addEventListener(i, l), (s = true));
    }
    (c.getUserDataFromAnnotAndUser = function (e, t) {
      const require = e.getProperty("uid");
      let o = e.getProperty("name"),
        i = "";
      return (
        require === t.getUID() &&
          ((o = t.getFirstName() || o), (i = t.getLastName() || "")),
        { id: require, name: o, last_name: i }
      );
    }),
      (c.prototype.build = function (e) {
        var t = null;
        const require = $("<span></span>")
          .addClass("g-user-preview")
          .append(
            $("<div />")
              .append(this._user.getUserNameInitials())
              .addClass("color-preview")
              .css({ "background-color": this._user.getUserColor() })
          );
        return (
          (async (e) => {
            if (!r.hasOwnProperty(e)) {
              const t = await a
                .getUser(e, true)
                .catch(() => Promise.resolve(null));
              r[e] = new o(t);
            }
            return r[e];
          })(this._user.getUID()).then((o) => {
            o &&
              (t = this._user.avatar || o.avatar) &&
              (t.includes("graph.microsoft.com") ||
              ("http" !== t.substr(0, 4) && "assets" !== t.substr(0, 6))
                ? "<svg" === t.substr(0, 4) &&
                  require
                    .empty()
                    .append(
                      $(t)
                        .addClass("g-user-preview")
                        .toggleClass("grayed", false)
                        .addClass("svg")
                    )
                : (this._user.hasOwnPictureAvatar() ||
                    (!this._user.avatar && o.hasOwnPictureAvatar())) &&
                  require
                    .empty()
                    .append(
                      $("<img>")
                        .attr("src", t)
                        .addClass("g-user-preview")
                        .toggleClass("grayed", false)
                    )),
              e && e();
          }),
          require
        );
      }),
      (exports.exports = c);
  }