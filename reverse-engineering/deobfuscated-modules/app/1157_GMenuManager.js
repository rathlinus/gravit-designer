/**
 * Webpack Module #1157
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GEditor = require(15) /* GEditor */,
      GCore = require(1) /* GCore */,
      a = function (e) {
        e.changed.escapeKey && (e.isImmediatePropagationStopped = true);
      },
      r = {
        _activeMenu: null,
        _activeActivationCallback: null,
        _activeMenuMouseLocations: null,
        getActiveMenu: function () {
          return r._activeMenu;
        },
        triggerGlobalActivation: function (e) {
          r._activeMenu &&
            r._activeActivationCallback &&
            r._activeActivationCallback(e);
        },
        setActiveMenu: function (e, t, n) {
          r._activeMenu &&
            (GEditor.GPlatform.removeEventListener(
              GEditor.GModifiersChangedEvent,
              a,
              r._activeMenu && r._activeMenu.getHtmlElement()
            ),
            t || r._activeMenu.close(),
            (r._activeMenu = null),
            (r._activeActivationCallback = null),
            document.removeEventListener(
              "mousemove",
              r._activeMenuMouseMoveListener
            ),
            document.removeEventListener(
              "mousedown",
              r._activeMenuMouseUpDownListener
            ),
            document.removeEventListener(
              "mouseup",
              r._activeMenuMouseUpDownListener
            ),
            document.removeEventListener(
              "keydown",
              r._activeMenuKeyDownListener
            )),
            (r._activeMenu = e),
            (r._activeActivationCallback = n),
            r._activeMenu &&
              (GEditor.GPlatform.addEventListener(
                GEditor.GModifiersChangedEvent,
                a,
                e.getHtmlElement(),
                null,
                true
              ),
              document.addEventListener(
                "mousemove",
                r._activeMenuMouseMoveListener
              ),
              document.addEventListener(
                "mousedown",
                r._activeMenuMouseUpDownListener
              ),
              setTimeout(function () {
                document.addEventListener(
                  "mouseup",
                  r._activeMenuMouseUpDownListener
                );
              }, 250),
              document.addEventListener(
                "keydown",
                r._activeMenuKeyDownListener
              ));
        },
        _activeMenuMouseMoveListener: function (e) {
          r._activeMenuMouseLocations || (r._activeMenuMouseLocations = []),
            r._activeMenuMouseLocations.push({ x: e.pageX, y: e.pageY }),
            r._activeMenuMouseLocations.length > 3 &&
              r._activeMenuMouseLocations.shift();
        },
        _activeMenuMouseUpDownListener: function (e) {
          e.cancelable && r.setActiveMenu(null);
        },
        _activeMenuKeyDownListener: function (e) {
          27 == e.keyCode && r.setActiveMenu(null);
        },
        createActionMenu: function (e, t) {
          for (
            var require = [],
              GEditor = function (e, GEditor, GCore) {
                e.getItemCount() > 0 &&
                  (function (e) {
                    for (var t = 0; t < require.length; ++t)
                      if (require[t].item === e) return require[t].group;
                  })(e.getItem(e.getItemCount() - 1)) !== GCore &&
                  e.addItem(t.createDivider());
                require.push({ item: GEditor, group: GCore });
              },
              a = 0;
            a < e.length;
            ++a
          ) {
            var r = e[a];
            if (r.isAvailable()) {
              var s = GCore.GLocale.get(r.getCategory()),
                l = r.getGroup(),
                c = s ? s.split("/") : null,
                d = l ? [""].concat(l.split("/")) : null;
              if (d && c && c.length !== d.length - 1)
                throw new Error(
                  "Number of categories different thant number of groups."
                );
              var u = t;
              if (c)
                for (var p = 0; p < c.length; ++p) {
                  (s = c[p]), (l = d ? d[p] : null);
                  var g = u.findItem(s);
                  g ||
                    ((g = t.createMenuItem(true)).setCaption(s),
                    GEditor(u, g, l),
                    u.addItem(g)),
                    (u = g.getMenu());
                }
              var h = t.createMenuItem();
              h.setAction(r), GEditor(u, h, d ? d[d.length - 1] : null), u.addItem(h);
            }
          }
        },
      };
    exports.exports = r;
  }