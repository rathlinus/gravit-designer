/**
 * Webpack Module #1268
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.cropImage = function (e, t) {
        if (!(e instanceof GCore.GImage)) return;
        t &&
          GTools.GEditor.tryRunTransaction(
            e,
            function () {
              var t = e.getImageTransform();
              e.setProperties(["trf", "ut", "tl_sx"], [t, true, 0]);
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GImageProperties", "action.reset-cropping")
            )
          );
        var n = gDesigner.getToolManager();
        n.getActiveTool() instanceof GTools.GSubSelectTool
          ? (n.activateTool(GTools.GPointerTool, null, true),
            n.getActiveTool().setEditMode(GTools.GSelectTool.EditMode.Select))
          : n.activateTool(GTools.GSubSelectTool, null, true);
      }),
      (module.replaceImage = function (e, t) {
        if (!(e instanceof GCore.GImage)) return;
        var n = n || t.getStorage() || gDesigner.getDefaultStorage();
        if (n && n.canPromptOpen()) {
          const t = [
            { ext: "png", mime: "image/png" },
            { ext: "jpg", mime: "image/jpeg" },
            { ext: "jpeg", mime: "image/jpeg" },
            { ext: "gif", mime: "image/gif" },
          ];
          n.openPrompt(
            t,
            (t) => {
              t.read((t) => {
                var n = new Blob([t]);
                if (n.size > GEditor.GPlatform.maxPngDataSize)
                  new r(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GDocument", "text.image-too-big")
                    )
                  ).open();
                else {
                  var s = new FileReader();
                  (s.onload = () => {
                    var t = s.result;
                    if (t.length > GEditor.GPlatform.maxImgDataUrlLength)
                      new r(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GDocument", "text.image-too-big")
                        )
                      ).open();
                    else {
                      var n = new Image();
                      (n.onload = () => {
                        if (
                          n.naturalHeight > GEditor.GPlatform.maxImgLinearDimension ||
                          n.naturalWidth > GEditor.GPlatform.maxImgLinearDimension ||
                          n.naturalWidth * n.naturalHeight >
                            GEditor.GPlatform.maxImgAreaDots
                        )
                          new r(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GDocument",
                                "text.image-too-big"
                              )
                            )
                          ).open();
                        else {
                          var s = gDesigner.getToolManager();
                          s.activateTool(GTools.GPointerTool),
                            s.getActiveTool() instanceof GTools.GSelectTool &&
                              s
                                .getActiveTool()
                                .setEditMode(GTools.GSelectTool.EditMode.Select);
                          var l = e.getGeometryBBox(),
                            c = new GCore.GTransform().translated(
                              l.getX(),
                              l.getY()
                            );
                          GTools.GEditor.tryRunTransaction(
                            e,
                            () => {
                              e.setProperties(
                                ["url", "iw", "ih", "itrf"],
                                [t, n.naturalWidth, n.naturalHeight, c]
                              );
                            },
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GImageProperties",
                                "action.replace-image"
                              )
                            )
                          ),
                            s.getActiveTool() instanceof GTools.GSelectTool &&
                              s
                                .getActiveTool()
                                .setEditMode(GTools.GSelectTool.EditMode.Edit);
                        }
                      }),
                        (n.src = t);
                    }
                  }),
                    (s.onerror = function () {
                      new r(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GDocument", "text.image-too-big")
                        )
                      ).open();
                    }),
                    s.readAsDataURL(n);
                }
              });
            },
            false
          );
        }
      }),
      (module.setOriginSize = function (e) {
        if (!(e instanceof GCore.GImage)) return;
        GTools.GEditor.tryRunTransaction(
          e,
          function () {
            var t = e.getGeometryBBox(),
              n = t ? t.getX() : 0,
              GEditor = t ? t.getY() : 0,
              GTools = new GCore.GTransform().translated(n, GEditor);
            e.setProperties(
              ["trf", "itrf", "pw", "ph"],
              [GTools, GTools, e.getWidth(), e.getHeight()]
            );
          },
          GCore.GLocale.get(
            new GCore.GLocaleKey("GImageProperties", "action.reset-size")
          )
        );
      });
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      GTools = require(53) /* GTools */,
      r = (require(1267) /* ColorQuantizer */, require(123) /* GProperties */, require(173) /* stub_requires_1 */, require(219) /* GLocale */);
  }