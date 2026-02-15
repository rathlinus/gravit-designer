/**
 * Webpack Module #1609
 * Type: class
 * Name: GPrintAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(30) /* polyfill_Object_assign */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      a = require(797) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GLoginPanel = require(446) /* GLoginPanel */,
      GLocale = require(219) /* GLocale */,
      Item = require(1610) /* Item */,
      GContainer = require(85) /* GContainer */;
    const GSystemDialog = require(44) /* GSystemDialog */;
    var h = null,
      f = false,
      m = false;
    function y() {}
    GCore.GObject.inherit(y, GAction),
      (y.ID = "file.print"),
      (y.TITLE = new GCore.GLocaleKey("GPrintAction", "title")),
      (y.prototype.getId = function () {
        return y.ID;
      }),
      (y.prototype.getTitle = function () {
        return y.TITLE;
      }),
      (y.prototype.getIcon = function () {
        return "gravit-icon-print";
      }),
      (y.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE;
      }),
      (y.prototype.getGroup = function () {
        return "print";
      }),
      (y.prototype.isEnabled = function () {
        if (!gDesigner.getApplicationManager().isExportEnabled()) return false;
        const exports = gDesigner.getActiveDocument();
        return exports && (!exports.isNew() || exports.isModified());
      }),
      (y.prototype.getShortcut = function () {
        return [GEditor.GKey.Constant.COMMAND, "P"];
      }),
      (y.prototype.execute = function () {
        var e = gDesigner.getActiveDocument(),
          t = e.getScene(),
          n = new Item.Item("PDF"),
          GEditor = {
            suppressMessages: true,
            dpi: gDesigner.isEnabledProFeatures() ? 300 : 150,
            preserveEditingCapabilities: false,
            jpegQuality: 100,
            export: true,
          },
          MenuItemBuilder = () => {
            console.log("NO DATA :(");
          };
        const GAction = () => {
          -1 !== navigator.userAgent.indexOf("Firefox") ||
          (gContainer.getRuntime() === GContainer.Runtime.Electron &&
            a.GSVGExport.hasSupportedEffects(t))
            ? GSystemDialog.confirm(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GPrintAction", "printing-warning")
                ),
                (e) => {
                  e && y();
                },
                undefined,
                undefined,
                undefined,
                true,
                true
              )
            : y();
        };
        var y = () => {
            Object.assign(GEditor, { convertTextToPath: true });
            let n = [];
            t.iteratePages(function (e) {
              n.push(e);
            });
            let GCore = [],
              GAction = (t, GLoginPanel) => {
                if (t || !GLoginPanel) return MenuItemBuilder();
                if ((GCore.push(GLoginPanel), n.shift(), n.length))
                  return void a.GSVGExport.export(n[0], GEditor, GAction);
                let GLocale = "";
                for (var Item = 0; Item < GCore.length; Item++) {
                  let e =
                    "data:image/svg+xml;base64," +
                    (0, CollaborationMergeUtils.stringToBase64String)(GCore[Item]);
                  GLocale = GLocale.concat(
                    "<img style='height:100%;width:auto;max-width:100%;display:block;' src='" +
                      e +
                      "'/>"
                  );
                }
                var GContainer = h.contentDocument;
                (GContainer.head.innerHTML =
                  "<style type='text/css' media='print'>@page { margin: 0mm; }</style>"),
                  (GContainer.body.style.margin = "0"),
                  (GContainer.body.style.height = "100%"),
                  (GContainer.body.innerHTML = GLocale),
                  (GContainer.title = e.getTitle()),
                  $(h.contentWindow.document).ready(function () {
                    h.contentWindow.focus();
                    try {
                      h.contentWindow.print();
                    } catch (e) {
                      (m = true), v();
                    }
                  });
              };
            n.length && a.GSVGExport.export(n[0], GEditor, GAction);
          },
          v = () =>
            new GLocale(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GPrintAction", "printing-disabled")
              )
            ).open(),
          _ = () => {
            if (h.src) {
              h.focus();
              try {
                h.contentWindow.print();
              } catch (e) {
                (f = true), (h.onload = GAction), (h.src = "about:blank");
              }
            }
          },
          b = () => {
            n.read((e) => {
              let t = new window.Blob([e], { type: "application/pdf" }),
                n = window.URL.createObjectURL(t);
              h.setAttribute("src", n);
            });
          };
        h ||
          (((h = document.createElement("iframe")).style.visibility = "hidden"),
          (h.style.position = "fixed"),
          (h.style.right = "0"),
          (h.style.bottom = "0"),
          (h.style.zIndex = "-1"),
          document.body.appendChild(h),
          gContainer.getRuntime() === GContainer.Runtime.Electron && (f = true)),
          new GLoginPanel(
            () => {
              !(function () {
                if (m) v();
                else if (f) GAction();
                else {
                  var GCore = 0,
                    CollaborationMergeUtils = [300, 150, 72, 36, null];
                  gDesigner.isEnabledProFeatures() || CollaborationMergeUtils.shift();
                  for (
                    var GLoginPanel = false;
                    !a.GPDFExport.isSupported(t, true, CollaborationMergeUtils[GCore++] + "dpi");

                  )
                    if (null === CollaborationMergeUtils[GCore]) {
                      GLoginPanel = true;
                      break;
                    }
                  GLoginPanel
                    ? ((h.onload = null), y())
                    : ((GEditor.dpi = CollaborationMergeUtils[GCore - 1]), (h.onload = _), e.store(n, b, MenuItemBuilder, GEditor));
                }
              })();
            },
            () => {
              gDesigner.stats("action-cancelled_anonymous", this.getId());
            }
          );
      }),
      (y.prototype.toString = function () {
        return "[Object GPrintAction]";
      }),
      (exports.exports = y);
  }