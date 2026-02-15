/**
 * Webpack Module #1303
 * Type: class
 * Name: GContextMenu
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GTools = require(53) /* module */,
      GCore = require(1) /* module */,
      a = require(15) /* module */,
      GAlignAction = require(866) /* GAlignAction */,
      GArrangeAction = require(869) /* GArrangeAction */,
      GAttachToPathAction = require(1176) /* GAttachToPathAction */,
      GConvertToPathAction = require(810) /* GConvertToPathAction */,
      GCreateSymbolAction = require(608) /* GCreateSymbolAction */,
      GDetachSymbolAction = require(874) /* GDetachSymbolAction */,
      GResetInstanceAction = require(1177) /* GResetInstanceAction */,
      GDetachFromPathAction = require(1178) /* GDetachFromPathAction */,
      GDistributeAction = require(867) /* GDistributeAction */,
      GGroupAction = require(811) /* GGroupAction */,
      GJoinPathsAction = require(1179) /* GJoinPathsAction */;
    const GMergeMainAction = require(812) /* GMergeMainAction */;
    var GSelectByFontTypeAction = require(1180) /* GSelectByFontTypeAction */;
    const GSelectByPaintLayerAction = require(1304) /* GSelectByPaintLayerAction */,
      GSelectByBorderWidthAction = require(1305) /* GSelectByBorderWidthAction */,
      GSelectByTransparencyAction = require(1306) /* GSelectByTransparencyAction */,
      GSelectByBlendModeAction = require(1307) /* GSelectByBlendModeAction */,
      GSelectByShapeAction = require(1308) /* GSelectByShapeAction */,
      GSelectByEffectAction = require(1309) /* GSelectByEffectAction */;
    var GSplitAction = require(870) /* GSplitAction */,
      GSplitPathAction = require(873) /* GSplitPathAction */,
      GTransformAction = require(871) /* GTransformAction */,
      GVectorizeBorderAction = require(872) /* GVectorizeBorderAction */,
      GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      GMenuOpenEvent = require(804) /* GMenuOpenEvent */,
      GMaskWithShapeAction = require(1181) /* GMaskWithShapeAction */,
      GCropAction = require(1310) /* GCropAction */,
      GCancelCropAction = require(1311) /* GCancelCropAction */,
      GEditElementActon = require(1312) /* GEditElementActon */,
      GPasteStyleAction = require(875) /* GPasteStyleAction */,
      GPasteHereAction = require(1182) /* GPasteHereAction */;
    const GPasteAndReplaceAction = require(876) /* GPasteAndReplaceAction */;
    var GExportAction = require(861) /* GExportAction */,
      U = require(450) /* module_450 */,
      GSystemDialog = require(44) /* GSystemDialog */,
      GDocumentEvent = require(78) /* GDocumentEvent */;
    function V(e) {
      var t = this._createContextMenu(),
        n = this._createCropMenu(),
        GCore = this._createPageMenu(),
        a = this._createTouchContextMenu(),
        GAlignAction = this._createFillPropertyMenu(),
        GArrangeAction = this._createBorderPropertyMenu(),
        GAttachToPathAction = this._createEffectPropertyMenu();
      e.on(
        "contextmenu",
        function (e, GConvertToPathAction) {
          if (gDesigner.getWindows().getActiveWindow().getView()) {
            var GCreateSymbolAction = GConvertToPathAction && GConvertToPathAction.previousEvent ? GConvertToPathAction.previousEvent : GConvertToPathAction,
              GDetachSymbolAction = gDesigner.getToolManager().getActiveTool(),
              GResetInstanceAction = (e.data && e.data.context) || (GCreateSymbolAction && GCreateSymbolAction.data && GCreateSymbolAction.data.context);
            if (!GDetachSymbolAction || !GDetachSymbolAction.catchesContextMenu(GResetInstanceAction == U.LayerPanel || false)) {
              var GDetachFromPathAction = t,
                GDistributeAction = false;
              GResetInstanceAction === U.PagePanel
                ? ((GDetachFromPathAction = GCore), gDesigner.stats("contextmenu_open_page-menu"))
                : GResetInstanceAction === U.LayerPanel
                ? ((GDistributeAction = true), gDesigner.stats("contextmenu_open_layer-menu"))
                : GResetInstanceAction === U.FillPropertyPanel
                ? ((GDetachFromPathAction = GAlignAction),
                  gDesigner.stats("contextmenu_open_fill-properties-menu"))
                : GResetInstanceAction === U.BorderPropertyPanel
                ? ((GDetachFromPathAction = GArrangeAction),
                  gDesigner.stats("contextmenu_open_border-properties-menu"))
                : GResetInstanceAction === U.EffectPropertyPanel
                ? ((GDetachFromPathAction = GAttachToPathAction),
                  gDesigner.stats("contextmenu_open_effect-properties-menu"))
                : GDetachSymbolAction instanceof GTools.GSelectTool && GDetachSymbolAction.isCropContext()
                ? ((GDetachFromPathAction = n), gDesigner.stats("contextmenu_open_crop-menu"))
                : ((GDistributeAction = true), gDesigner.stats("contextmenu_open_context-menu"));
              var GGroupAction = "number" == typeof e.clientX ? e : GCreateSymbolAction;
              this._contextMenuClientPosition = gDesigner
                .getWindows()
                .getActiveWindow()
                .getView()
                ._convertClientPositionFromMousePosition(GGroupAction);
              var GJoinPathsAction = e.pageX ? e.pageX : GCreateSymbolAction.pageX,
                GMergeMainAction = e.pageY ? e.pageY : GCreateSymbolAction.pageY;
              return (
                (this._mouseEvent = e.pageX ? e : GCreateSymbolAction),
                (this._options = GConvertToPathAction),
                gDesigner.isTouchEnabled() && GDistributeAction
                  ? a.gOverlay("open", { x: GJoinPathsAction, y: GMergeMainAction }, undefined, () => {
                      gDesigner.trigger(
                        new GDocumentEvent(
                          GDocumentEvent.Type.ContextMenuOpened,
                          gDesigner.getActiveDocument()
                        )
                      );
                    })
                  : GDetachFromPathAction.open({ x: GJoinPathsAction, y: GMergeMainAction }),
                (this._contextMenuTouch = a),
                (this._contextMenuDesktop = GDetachFromPathAction),
                true
              );
            }
          }
        }.bind(this)
      );
    }
    (V.ID = "context.menu"),
      (V.prototype._contextMenuClientPosition = null),
      (V.prototype._mouseEvent = null),
      (V.prototype._options = null),
      (V.prototype._contextMenuTouch = null),
      (V.prototype._contextMenuDesktop = null),
      (V.prototype._createContextMenu = function () {
        var e = new GMenu();
        (e.__which = "context"), e.createAddItem(gDesigner.getAction(GEditElementActon.ID));
        var t = new GMenu2(GMenu2.Type.Menu, GMenu);
        t.setCaption(GCore.GLocale.get(new GCore.GLocaleKey("GPaste", "action.paste"))),
          t
            .getMenu()
            .createAddItem(gDesigner.getAction(GPasteHereAction.ID), null, null, null, V.ID)
            .addEventListener(
              GMenu2.UpdateEvent,
              function () {
                gDesigner
                  .getAction(GPasteHereAction.ID)
                  .setPosition(this._contextMenuClientPosition);
              }.bind(this)
            ),
          t.getMenu().createAddItem(gDesigner.getAction(GPasteAndReplaceAction.ID)),
          t.getMenu().createAddItem(gDesigner.getAction(GPasteStyleAction.ID)),
          e.addItem(t),
          e.createAddDivider();
        var n = new GMenu2(GMenu2.Type.Menu, GMenu);
        n.setCaption(
          GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.arrange"))
        ),
          n
            .getMenu()
            .createAddItem(
              gDesigner.getAction(
                GArrangeAction.ID + "." + GTools.GEditor.ArrangeOrderType.SendToFront
              )
            ),
          n
            .getMenu()
            .createAddItem(
              gDesigner.getAction(
                GArrangeAction.ID + "." + GTools.GEditor.ArrangeOrderType.BringForward
              )
            ),
          n
            .getMenu()
            .createAddItem(
              gDesigner.getAction(
                GArrangeAction.ID + "." + GTools.GEditor.ArrangeOrderType.SendBackward
              )
            ),
          n
            .getMenu()
            .createAddItem(
              gDesigner.getAction(
                GArrangeAction.ID + "." + GTools.GEditor.ArrangeOrderType.SendToBack
              )
            ),
          e.addItem(n);
        var GMenuOpenEvent = new GMenu2(GMenu2.Type.Menu, GMenu);
        GMenuOpenEvent.setCaption(
          GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.align"))
        ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignLeft
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignCenter
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignRight
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignJustifyHorizontal
            )
          ),
          GMenuOpenEvent.getMenu().createAddDivider(),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignTop
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignMiddle
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignBottom
            )
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(
              GAlignAction.ID + "." + GTools.GEditor.ArrangeAlignType.AlignJustifyVertical
            )
          ),
          GMenuOpenEvent.getMenu().createAddDivider(),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(GDistributeAction.ID + "." + GDistributeAction.Type.Horizontal)
          ),
          GMenuOpenEvent.getMenu().createAddItem(
            gDesigner.getAction(GDistributeAction.ID + "." + GDistributeAction.Type.Vertical)
          ),
          e.addItem(GMenuOpenEvent);
        var GCropAction = new GMenu2(GMenu2.Type.Menu, GMenu);
        GCropAction.setCaption(
          GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.transform"))
        ),
          GCropAction
            .getMenu()
            .createAddItem(
              gDesigner.getAction(GTransformAction.ID + "." + GTransformAction.Type.Rotate90Left)
            ),
          GCropAction
            .getMenu()
            .createAddItem(
              gDesigner.getAction(GTransformAction.ID + "." + GTransformAction.Type.Rotate90Right)
            ),
          GCropAction
            .getMenu()
            .createAddItem(
              gDesigner.getAction(GTransformAction.ID + "." + GTransformAction.Type.FlipHorizontal)
            ),
          GCropAction
            .getMenu()
            .createAddItem(
              gDesigner.getAction(GTransformAction.ID + "." + GTransformAction.Type.FlipVertical)
            ),
          e.addItem(GCropAction),
          e.createAddDivider(),
          e.createAddItem(gDesigner.getAction(GGroupAction.ID)),
          e.createAddItem(gDesigner.getAction(GMergeMainAction.ID)),
          e.createAddItem(gDesigner.getAction(GSplitAction.ID)),
          e.createAddItem(gDesigner.getAction(GMaskWithShapeAction.ID)),
          e.createAddDivider(),
          e.createAddItem(gDesigner.getAction(GConvertToPathAction.ID)),
          e.createAddItem(gDesigner.getAction(GVectorizeBorderAction.ID)),
          e.createAddItem(gDesigner.getAction(GJoinPathsAction.ID)),
          e.createAddItem(gDesigner.getAction(GSplitPathAction.ID)),
          e.createAddDivider(),
          e.createAddItem(gDesigner.getAction(GCreateSymbolAction.ID)),
          e.createAddItem(gDesigner.getAction(GResetInstanceAction.ID)),
          e.createAddItem(gDesigner.getAction(GDetachSymbolAction.ID)),
          e.createAddDivider(),
          e.createAddItem(gDesigner.getAction(GAttachToPathAction.ID)),
          e.createAddItem(gDesigner.getAction(GDetachFromPathAction.ID)),
          e.createAddDivider();
        const GCancelCropAction = new GMenu2(GMenu2.Type.Menu, GMenu);
        GCancelCropAction.setCaption(
          GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.select-same"))
        ),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByFontTypeAction.ID)),
          GCancelCropAction.getMenu().createAddDivider(),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByPaintLayerAction.getId(GSelectByPaintLayerAction.Type.Fill))),
          GCancelCropAction.getMenu().createAddItem(
            gDesigner.getAction(GSelectByPaintLayerAction.getId(GSelectByPaintLayerAction.Type.Border))
          ),
          GCancelCropAction.getMenu().createAddItem(
            gDesigner.getAction(GSelectByPaintLayerAction.getId(GSelectByPaintLayerAction.Type.FillAndBorder))
          ),
          GCancelCropAction.getMenu().createAddDivider(),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByBorderWidthAction.ID)),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByTransparencyAction.ID)),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByBlendModeAction.ID)),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByShapeAction.ID)),
          GCancelCropAction.getMenu().createAddItem(gDesigner.getAction(GSelectByEffectAction.ID)),
          e.addItem(GCancelCropAction),
          e.createAddDivider();
        var GExportAction = new GMenu2(GMenu2.Type.Menu, GMenu);
        return (
          GExportAction.setCaption(
            GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.select"))
          ),
          GExportAction.setIcon("gravit-icon-cursor-filled"),
          GExportAction.addEventListener(
            GMenu2.UpdateEvent,
            function () {
              GExportAction.getMenu().clearItems(), GExportAction.setEnabled(false);
              var {
                elementHits: e,
                filteredElementHits: t,
                submenus: n,
              } = this._getHitsElments();
              if (
                !(e && e.length > 0 && e[0] instanceof GCore.GPage) &&
                e &&
                e.length > 0
              ) {
                GExportAction.setEnabled(true);
                for (var GTools = 0; GTools < t.length; GTools++) {
                  var GAlignAction = t[GTools].element,
                    GArrangeAction =
                      GAlignAction instanceof GCore.GBlock
                        ? GAlignAction.getLabel()
                        : GAlignAction.getNodeNameTranslated(),
                    GAttachToPathAction = "temp-" + e.indexOf(t[GTools]);
                  if (n[GAttachToPathAction]) {
                    var GConvertToPathAction = new GMenu2(GMenu2.Type.Menu, GMenu);
                    GConvertToPathAction.setCaption((GTools + 1).toString() + ". " + GArrangeAction),
                      GConvertToPathAction.setData(GAttachToPathAction),
                      GConvertToPathAction.addEventListener(GMenu2.UpdateEvent, function () {
                        var e = n[this.getData()];
                        this.getMenu().clearItems();
                        for (var t = 0; t < e.length; t++)
                          this.getMenu().createAddItem(
                            (t + 1).toString() +
                              ". " +
                              (e[t] instanceof GCore.GBlock
                                ? e[t].getLabel()
                                : e[t].getNodeNameTranslated()),
                            function () {
                              this.element.removeFlag(GCore.GNode.Flag.Highlighted),
                                gDesigner
                                  .getActiveDocument()
                                  .getEditor()
                                  .updateSelection(
                                    a.GPlatform.modifiers.shiftKey,
                                    [this.element]
                                  );
                            },
                            function () {
                              this.element.setFlag(GCore.GNode.Flag.Highlighted);
                            },
                            function () {
                              this.element.removeFlag(GCore.GNode.Flag.Highlighted);
                            }
                          ).element = e[t];
                      }),
                      GExportAction.getMenu().addItem(GConvertToPathAction);
                  } else
                    GExportAction.getMenu().createAddItem(
                      (GTools + 1).toString() + ". " + GArrangeAction,
                      function () {
                        this.element.removeFlag(GCore.GNode.Flag.Highlighted),
                          gDesigner
                            .getActiveDocument()
                            .getEditor()
                            .updateSelection(a.GPlatform.modifiers.shiftKey, [
                              this.element,
                            ]);
                      },
                      function () {
                        this.element.setFlag(GCore.GNode.Flag.Highlighted);
                      },
                      function () {
                        this.element.removeFlag(GCore.GNode.Flag.Highlighted);
                      }
                    ).element = GAlignAction;
                }
              }
            }.bind(this)
          ),
          e.addItem(GExportAction),
          e
        );
      }),
      (V.prototype._createCropMenu = function () {
        var e = new GMenu();
        return (
          (e.__which = "crop"),
          e.createAddItem(gDesigner.getAction(GCropAction.ID)),
          e.createAddItem(gDesigner.getAction(GCancelCropAction.ID)),
          e
        );
      }),
      (V.prototype._getHitsElments = function (e) {
        e = e || this._mouseEvent;
        var t = gDesigner
            .getWindows()
            .getActiveWindow()
            .getView()
            ._convertClientPositionFromMousePosition(e),
          n = gDesigner.getActiveDocument().getScene(),
          a = gDesigner.getWindows().getActiveWindow().getView(),
          GAlignAction = a.getWorldTransform(n),
          GArrangeAction = function (e) {
            return !(e instanceof GCore.GPage);
          }.bind(this),
          GAttachToPathAction = n.hitTest(
            t,
            GAlignAction,
            GArrangeAction,
            true,
            -1,
            GTools.GEditorOptions.pickDistance,
            true,
            null,
            true,
            false,
            a.getViewConfiguration().multiPageView
          );
        if (
          (GAttachToPathAction &&
            GAttachToPathAction.length > 0 &&
            (GAttachToPathAction = GAttachToPathAction.filter(function (e) {
              var t = e.element.getProperty("plkt");
              return !(
                t & GCore.GBlock.ProgramLck.NoEdit &&
                t & GCore.GBlock.ProgramLck.NoSizeChanges &&
                t & GCore.GBlock.ProgramLck.NoMove &&
                t & GCore.GBlock.ProgramLck.NoDelete
              );
            })),
          GAttachToPathAction && GAttachToPathAction.length > 0 && GAttachToPathAction[0] instanceof GCore.GPage)
        )
          return { elementHits: GAttachToPathAction };
        var GConvertToPathAction = [],
          GCreateSymbolAction = {};
        if (GAttachToPathAction && GAttachToPathAction.length > 0)
          for (var GDetachSymbolAction = 0; GDetachSymbolAction < GAttachToPathAction.length; ++GDetachSymbolAction) {
            for (
              var GResetInstanceAction = GAttachToPathAction[GDetachSymbolAction].element.getParent(), GDetachFromPathAction = false, GDistributeAction = 0;
              GDistributeAction < GAttachToPathAction.length;
              ++GDistributeAction
            )
              if (GAttachToPathAction[GDistributeAction].element === GResetInstanceAction) {
                (GDetachFromPathAction = true),
                  GCreateSymbolAction["temp-" + GDistributeAction]
                    ? GCreateSymbolAction["temp-" + GDistributeAction].push(GAttachToPathAction[GDetachSymbolAction].element)
                    : (GCreateSymbolAction["temp-" + GDistributeAction] = [GAttachToPathAction[GDetachSymbolAction].element]);
                break;
              }
            GDetachFromPathAction || GConvertToPathAction.push(GAttachToPathAction[GDetachSymbolAction]);
          }
        return { elementHits: GAttachToPathAction, filteredElementHits: GConvertToPathAction, submenus: GCreateSymbolAction };
      }),
      (V.prototype._createPageMenu = function () {
        var e = new GMenu(null, "g-page-option-menu"),
          t = {
            DUPLICATE: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "page-panel.text.duplicate")
            ),
            DELETE: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "page-panel.text.delete")
            ),
            COPY: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "page-panel.text.copy")
            ),
            EXPORT: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "page-panel.text.export")
            ),
          },
          n = e.createAddItem(t.DUPLICATE, function () {
            var e = gDesigner.getActiveDocument().getScene();
            GTools.GEditor.tryRunTransaction(
              e,
              function () {
                var t = e.getActivePage(),
                  n = t.clone({
                    copy: true,
                    copyIgnoreProperties:
                      GTools.GEditorOptions.propertiesExcludedFromCopying,
                  });
                e.insertChild(n), e.renameClone(t, n);
                var a = n.getPosition(true, true, true, true);
                n.setProperty(
                  "off",
                  new GCore.GTransform(1, 0, 0, 1, a.getX(), a.getY())
                );
              },
              t.DUPLICATE
            ),
              gDesigner.stats("contextmenu_pages_duplicate");
          }),
          a = e.createAddItem(t.DELETE, function () {
            var e = gDesigner.getActiveDocument().getScene(),
              n = e.getActivePage(),
              a = n.getSlavePages().length > 0;
            n.getProperty("plkt") & GCore.GBlock.ProgramLck.NoDelete ||
              (a
                ? GSystemDialog.confirm(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GOutlineSidebar",
                        "text.confirm-delete-masterpage"
                      )
                    ),
                    function (t) {
                      t &&
                        GTools.GEditor.tryRunTransaction(
                          e,
                          function () {
                            e.deleteActivePage();
                          },
                          GCore.GLocale.get(
                            new GCore.GLocaleKey(
                              "GOutlineSidebar",
                              "action.delete-page"
                            )
                          )
                        );
                    },
                    null,
                    null,
                    true,
                    true
                  )
                : GTools.GEditor.tryRunTransaction(
                    e,
                    function () {
                      e.deleteActivePage();
                    },
                    t.DELETE
                  ),
              gDesigner.stats("contextmenu_pages_delete"));
          }),
          GAlignAction = e.createAddItem(t.COPY, function () {
            var e = gDesigner.getActiveDocument(),
              n = e.getScene();
            GTools.GEditor.tryRunTransaction(
              n,
              function () {
                var t =
                    e.isCommercialProductFile() ||
                    !gDesigner.getApplicationManager().isCopyPasteEnabled(),
                  a = n.getActivePage(),
                  GAlignAction = GCore.GNode.serialize(a, {
                    copy: true,
                    copyIgnoreProperties:
                      GTools.GEditorOptions.propertiesExcludedFromCopying,
                  }),
                  GArrangeAction =
                    '<gravit mimeType="' +
                    GCore.GNode.MIME_TYPE +
                    '" restricted="' +
                    (!!t && e.getStorageItem().getId()) +
                    '">' +
                    $("<div/>").text(GAlignAction).html() +
                    "</gravit>";
                gContainer.copyToClipboard(GArrangeAction);
              },
              t.COPY
            ),
              gDesigner.stats("contextmenu_pages_copy");
          }),
          GArrangeAction = e.createAddItem(t.EXPORT, function () {
            var e = gDesigner.getActiveDocument().getScene().getActivePage();
            gDesigner.executeAction(GExportAction.ID, [{ element: e }], null, true),
              gDesigner.stats("contextmenu_pages_export");
          });
        return (
          n.setIcon("gravit-icon-duplicate"),
          a.setIcon("gravit-icon-delete"),
          GAlignAction.setIcon("gravit-icon-copy"),
          GArrangeAction.setIcon("gravit-icon-export"),
          GArrangeAction.setProFeatureInterruption(false),
          e.addEventListener(GMenuOpenEvent.EVENT, function (e) {
            gDesigner.isEnabledProFeatures() || GArrangeAction.setPro(true);
          }),
          (e.__which = "page"),
          e
        );
      }),
      (V.prototype._createFillPropertyMenu = function () {
        var e = new GMenu(null, "fill-context-menu"),
          t = null,
          n = {
            DELETE: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "fill-properties-panel.text.delete-fill"
              )
            ),
            COPY: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "fill-properties-panel.text.copy-fill"
              )
            ),
          },
          GAlignAction = e.createAddItem(n.DELETE, function () {
            if (t) {
              var e = gDesigner.getActiveDocument().getEditor().getSelection();
              GTools.GEditor.tryRunTransaction(
                e[0],
                function () {
                  for (var n = 0; n < e.length; n++)
                    for (
                      var GTools = e[n].getPaintLayers().getFillLayers(), a = 0;
                      a < GTools.length;
                      a++
                    ) {
                      var GAlignAction = GTools[a];
                      if (GCore.GStylable.FillPaintLayer.equals(GAlignAction, t)) {
                        GAlignAction.getParent().removeChild(GAlignAction);
                        break;
                      }
                    }
                },
                n.DELETE
              );
            }
            gDesigner.stats("contextmenu_fills_delete");
          }),
          GArrangeAction = e.createAddItem(n.COPY, function () {
            if (t) {
              var e = GCore.GNode.serialize([t], {
                  copy: true,
                  copyIgnoreProperties:
                    GTools.GEditorOptions.propertiesExcludedFromCopying,
                }),
                n =
                  '<gravit mimeType="' +
                  GCore.GNode.MIME_TYPE +
                  '">' +
                  $("<div/>").text(e).html() +
                  "</gravit>";
              gContainer.copyToClipboard(n);
            }
            gDesigner.stats("contextmenu_fills_copy");
          });
        return (
          GAlignAction.setIcon("gravit-icon-trash"),
          GArrangeAction.setIcon("gravit-icon-copy"),
          GAlignAction.setShortcutHint([a.GKey.Constant.DELETE]),
          GArrangeAction.setShortcutHint([a.GKey.Constant.META, "C"]),
          e.addEventListener(
            GMenuOpenEvent,
            function () {
              t =
                this._options &&
                this._options.data &&
                this._options.data.paintLayer;
            }.bind(this)
          ),
          (e.__which = "fill"),
          e
        );
      }),
      (V.prototype._createBorderPropertyMenu = function () {
        var e = new GMenu(null, "border-context-menu"),
          t = null,
          n = {
            ADVANCED: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "border-properties-panel.text.advanced-settings"
              )
            ),
            DELETE: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "border-properties-panel.text.delete-border"
              )
            ),
            COPY: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "border-properties-panel.text.copy-border"
              )
            ),
          },
          GAlignAction = e.createAddItem(
            n.ADVANCED,
            function () {
              this._options &&
                this._options.data &&
                this._options.data.openAdvancedSettings(),
                gDesigner.stats("contextmenu_borders_advanced-settings");
            }.bind(this)
          ),
          GArrangeAction = e.createAddItem(n.DELETE, function () {
            if (t) {
              var e = gDesigner.getActiveDocument().getEditor().getSelection();
              GTools.GEditor.tryRunTransaction(
                e[0],
                function () {
                  for (var n = 0; n < e.length; n++)
                    for (
                      var GTools = e[n].getPaintLayers().getBorderLayers(), a = 0;
                      a < GTools.length;
                      a++
                    ) {
                      var GAlignAction = GTools[a];
                      if (GCore.GStylable.BorderPaintLayer.equals(GAlignAction, t)) {
                        GAlignAction.getParent().removeChild(GAlignAction);
                        break;
                      }
                    }
                },
                n.DELETE
              );
            }
            gDesigner.stats("contextmenu_borders_delete");
          }),
          GAttachToPathAction = e.createAddItem(n.COPY, function () {
            if (t) {
              var e = GCore.GNode.serialize([t], {
                  copy: true,
                  copyIgnoreProperties:
                    GTools.GEditorOptions.propertiesExcludedFromCopying,
                }),
                n =
                  '<gravit mimeType="' +
                  GCore.GNode.MIME_TYPE +
                  '">' +
                  $("<div/>").text(e).html() +
                  "</gravit>";
              gContainer.copyToClipboard(n);
            }
            gDesigner.stats("contextmenu_borders_copy");
          });
        return (
          GAlignAction.setIcon("gravit-icon-settings"),
          GArrangeAction.setIcon("gravit-icon-trash"),
          GAttachToPathAction.setIcon("gravit-icon-copy"),
          GArrangeAction.setShortcutHint([a.GKey.Constant.DELETE]),
          GAttachToPathAction.setShortcutHint([a.GKey.Constant.META, "C"]),
          e.addEventListener(
            GMenuOpenEvent,
            function () {
              t =
                this._options &&
                this._options.data &&
                this._options.data.paintLayer;
            }.bind(this)
          ),
          (e.__which = "border"),
          e
        );
      }),
      (V.prototype._createEffectPropertyMenu = function () {
        var e = new GMenu(null, "effect-context-menu"),
          t = null,
          n = {
            COPY: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "effect-properties-panel.text.copy-effect"
              )
            ),
            APPLY_TO_ELEMENT: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "effect-properties-panel.text.apply-to-element"
              )
            ),
            APPLY_TO_FILL: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "effect-properties-panel.text.apply-to-fill"
              )
            ),
            APPLY_TO_BORDER: GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GContextMenu",
                "effect-properties-panel.text.apply-to-border"
              )
            ),
          },
          GAlignAction = new GMenu2(GMenu2.Type.Menu, GMenu);
        GAlignAction.getMenu().addClass("effect-context-menu");
        var GArrangeAction = GAlignAction.getMenu().createAddItem(n.APPLY_TO_ELEMENT, function () {
            GDetachSymbolAction(null, n.APPLY_TO_ELEMENT);
          }),
          GAttachToPathAction = GAlignAction.getMenu().createAddItem(n.APPLY_TO_FILL, function () {
            GDetachSymbolAction(GCore.GStylable.StyleLayer.Fill, n.APPLY_TO_FILL);
          }),
          GConvertToPathAction = GAlignAction.getMenu().createAddItem(n.APPLY_TO_BORDER, function () {
            GDetachSymbolAction(GCore.GStylable.StyleLayer.Border, n.APPLY_TO_BORDER);
          }),
          GCreateSymbolAction = e.createAddItem(n.COPY, function () {
            if (t) {
              var e = GCore.GNode.serialize([t], {
                  copy: true,
                  copyIgnoreProperties:
                    GTools.GEditorOptions.propertiesExcludedFromCopying,
                }),
                n =
                  '<gravit mimeType="' +
                  GCore.GNode.MIME_TYPE +
                  '">' +
                  $("<div/>").text(e).html() +
                  "</gravit>";
              gContainer.copyToClipboard(n);
            }
            gDesigner.stats("contextmenu_effects_copy");
          }),
          GDetachSymbolAction = function (e, n) {
            GTools.GEditor.tryRunTransaction(
              t,
              function () {
                t.setProperty("ly", e);
              },
              n
            ),
              gDesigner.stats("contextmenu_effects_change-layer", n);
          };
        return (
          GAlignAction.setCaption(n.APPLY_TO_ELEMENT),
          GCreateSymbolAction.setIcon("gravit-icon-copy"),
          GArrangeAction.setIcon("gravit-icon-circle"),
          GAttachToPathAction.setIcon("gravit-icon-fill"),
          GConvertToPathAction.setIcon("gravit-icon-stroke"),
          GCreateSymbolAction.setShortcutHint([a.GKey.Constant.META, "C"]),
          e.addItem(GAlignAction),
          e.addEventListener(
            GMenuOpenEvent,
            function () {
              let e = null,
                GTools = null,
                a = (t =
                  this._options &&
                  this._options.data &&
                  this._options.data.effect).getProperty("ly");
              a === GCore.GStylable.StyleLayer.Fill
                ? ((e = "gravit-icon-fill"), (GTools = n.APPLY_TO_FILL))
                : a === GCore.GStylable.StyleLayer.Border
                ? ((e = "gravit-icon-stroke"), (GTools = n.APPLY_TO_BORDER))
                : ((e = "gravit-icon-circle"), (GTools = n.APPLY_TO_ELEMENT)),
                GAlignAction.setIcon(e),
                GAlignAction.setCaption(GTools);
            }.bind(this)
          ),
          (e.__which = "effect"),
          e
        );
      }),
      (V.prototype.close = function () {
        this._contextMenuTouch && this._contextMenuTouch.gOverlay("close"),
          this._contextMenuDesktop && this._contextMenuDesktop.close();
      }),
      (V.prototype.toString = function () {
        return "[Object GContextMenu]";
      }),
      (exports.exports = V);
  }