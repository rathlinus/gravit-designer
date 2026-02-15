/**
 * Webpack Module #1563
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(97) /* stub_requires_684 */, require(33) /* polyfill_DOMCollection_forEach */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      a = require(1303) /* GContextMenu */,
      GAttachToPathAction = require(1176) /* GAttachToPathAction */,
      GConvertToPathAction = require(810) /* GConvertToPathAction */,
      GCreateSymbolAction = require(608) /* GCreateSymbolAction */,
      GDetachSymbolAction = require(874) /* GDetachSymbolAction */,
      GResetInstanceAction = require(1177) /* GResetInstanceAction */,
      GDetachFromPathAction = require(1178) /* GDetachFromPathAction */,
      GJoinPathsAction = require(1179) /* GJoinPathsAction */;
    const GMergeMainAction = require(812) /* GMergeMainAction */;
    var GSelectByFontTypeAction = require(1180) /* GSelectByFontTypeAction */,
      GSplitPathAction = require(873) /* GSplitPathAction */,
      GTransformAction = require(871) /* GTransformAction */,
      GVectorizeBorderAction = require(872) /* GVectorizeBorderAction */,
      GMenu = require(238) /* GMenu */,
      GMenu2 = require(339) /* GMenu */,
      b = require(444) /* module_444 */,
      GMaskWithShapeAction = require(1181) /* GMaskWithShapeAction */,
      GPasteAction = require(877) /* GPasteAction */,
      GPasteInPlaceAction = require(1183) /* GPasteInPlaceAction */,
      GPasteInsideAction = require(1184) /* GPasteInsideAction */,
      GPasteHereAction = require(1182) /* GPasteHereAction */,
      GPasteStyleAction = require(875) /* GPasteStyleAction */,
      GClipAction = require(809) /* GClipAction */,
      GConvertToImageAction = require(1314) /* GConvertToImageAction */,
      GDuplicateAction = require(1315) /* GDuplicateAction */,
      GCreateNestedCompoundAction = require(1316) /* GCreateNestedCompoundAction */,
      GOutlineAction = require(1185) /* GOutlineAction */,
      GOffsetAction = require(1317) /* GOffsetAction */,
      GSimplifyAction = require(1318) /* GSimplifyAction */,
      GSplitLineAction = require(1319) /* GSplitLineAction */,
      GConvertToRawPathAction = require(1320) /* GConvertToRawPathAction */,
      GFitSelectionAction = require(566) /* GFitSelectionAction */,
      GAction = require(31) /* GAction */,
      { replaceImage: N, setOriginSize: B, cropImage: U } = require(1268) /* GImageManipulation */,
      GDocumentEvent = require(78) /* GDocumentEvent */;
    const GPasteAndReplaceAction = require(876) /* GPasteAndReplaceAction */;
    (a.prototype._contextMenuContainerTouch = null),
      (a.prototype._createTouchContextMenu = function () {
        var e = $("<div/>").gOverlay({
            releaseOnClose: false,
            clazz: "context-menu-touch-overlay",
          }),
          t = this;
        this._contextMenuContainerTouch = e;
        $("<div/>")
          .addClass("transform-section")
          .gPropertyRow({
            columns: [
              {
                width: "48%",
                content: this._createActionButtons([
                  {
                    action: gDesigner.getAction(
                      GTransformAction.ID + "." + GTransformAction.Type.FlipHorizontal
                    ),
                  },
                  {
                    action: gDesigner.getAction(
                      GTransformAction.ID + "." + GTransformAction.Type.FlipVertical
                    ),
                  },
                ]),
              },
              { width: "4%" },
              {
                width: "48%",
                content: this._createActionButtons([
                  {
                    action: gDesigner.getAction(
                      GTransformAction.ID + "." + GTransformAction.Type.Rotate90Left
                    ),
                    icon: "gravit-icon-rotate-left",
                  },
                  {
                    action: gDesigner.getAction(
                      GTransformAction.ID + "." + GTransformAction.Type.Rotate90Right
                    ),
                    icon: "gravit-icon-rotate-right",
                  },
                ]),
              },
            ],
          })
          .appendTo(e);
        $("<div/>")
          .addClass("paste-section")
          .gPropertyRow({
            columns: [
              {
                content: this._createActionButtonWithMenu(
                  gDesigner.getAction(GPasteAction.ID),
                  GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.paste")),
                  [
                    gDesigner.getAction(GPasteInPlaceAction.ID),
                    gDesigner.getAction(GPasteInsideAction.ID),
                    gDesigner.getAction(GPasteHereAction.ID),
                    gDesigner.getAction(GPasteAndReplaceAction.ID),
                    gDesigner.getAction(GPasteStyleAction.ID),
                  ]
                ),
              },
            ],
          })
          .appendTo(e);
        const require = gDesigner.getAction(GMergeMainAction.ID),
          GTools = require && require.getSubActions().concat(gDesigner.getAction(GCreateNestedCompoundAction.ID));
        $("<div/>")
          .addClass("compound-section")
          .gPropertyRow({
            columns: [
              {
                content: this._createActionButtonWithMenu(
                  gDesigner.getAction(GMergeMainAction.ID),
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GContextMenu", "text.create-compound")
                  ),
                  GTools
                ),
              },
            ],
          })
          .appendTo(e),
          $("<div/>")
            .addClass("path-section")
            .gPropertyRow({
              columns: [
                {
                  content: this._createActionButtonWithMenu(
                    gDesigner.getAction(GConvertToPathAction.ID),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GContextMenu", "text.convert-to-path")
                    ),
                    [
                      gDesigner.getAction(GVectorizeBorderAction.ID),
                      gDesigner.getAction(GConvertToRawPathAction.ID),
                      gDesigner.getAction(GOutlineAction.ID),
                      gDesigner.getAction(GOffsetAction.ID),
                      gDesigner.getAction(GSimplifyAction.ID),
                      gDesigner.getAction(GJoinPathsAction.ID),
                      gDesigner.getAction(GSplitPathAction.ID),
                      gDesigner.getAction(GSplitLineAction.ID),
                    ]
                  ),
                },
              ],
            })
            .appendTo(e),
          $("<div/>")
            .addClass("symbol-section")
            .gPropertyRow({
              columns: [
                {
                  content: this._createActionButtonWithMenu(
                    gDesigner.getAction(GCreateSymbolAction.ID),
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GContextMenu", "text.create-symbol")
                    ),
                    [
                      gDesigner.getAction(GResetInstanceAction.ID),
                      gDesigner.getAction(GDetachSymbolAction.ID),
                      {
                        caption: GCore.GLocale.get(
                          new GCore.GLocaleKey("GContextMenu", "text.go-to-master")
                        ),
                        click: (e) => {
                          var t = gDesigner.getActiveDocument(),
                            n = t.getEditor();
                          if (t) {
                            var GTools = t.getEditor().getIndividualSelection();
                            if (GTools && GTools.length) {
                              var a = GTools.find(
                                (e) =>
                                  e instanceof GCore.GSymbol &&
                                  !e.isLocked() &&
                                  !e.isMaster()
                              );
                              if (a) {
                                var GAttachToPathAction = a;
                                n.beginTransaction(),
                                  n.clearSelection(),
                                  n.updateSelection(false, [GAttachToPathAction]),
                                  gDesigner.executeAction(
                                    GFitSelectionAction.ID,
                                    undefined,
                                    undefined,
                                    true
                                  ),
                                  n.commitTransaction(
                                    GCore.GLocale.get(
                                      new GCore.GLocaleKey(
                                        "GContextMenu",
                                        "text.go-to-master"
                                      )
                                    )
                                  );
                              }
                            }
                          }
                          gDesigner.stats("touchmenu_go-to-master");
                        },
                        icon: "gravit-icon-go-to-master",
                        isEnabled: () => {
                          var e = gDesigner.getActiveDocument();
                          if (e) {
                            var t = e.getEditor().getIndividualSelection();
                            if (t && t.length)
                              if (
                                t.find(
                                  (e) =>
                                    e instanceof GCore.GSymbol &&
                                    !e.isLocked() &&
                                    !e.isMaster()
                                )
                              )
                                return true;
                          }
                          return false;
                        },
                      },
                    ]
                  ),
                },
              ],
            })
            .appendTo(e);
        $("<div/>")
          .addClass("text-section")
          .gPropertyRow({
            columns: [
              {
                content: this._createActionButtonMenu(
                  "gravit-icon-textbox",
                  GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.text")),
                  [
                    gDesigner.getAction(GAttachToPathAction.ID),
                    gDesigner.getAction(GDetachFromPathAction.ID),
                    gDesigner.getAction(GSelectByFontTypeAction.ID),
                  ],
                  () => !!this._getFirstSelectedTextElement()
                ),
              },
            ],
          })
          .appendTo(e);
        var a = [
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "text.crop")
            ),
            click: (e) => {
              var t = gDesigner
                .getActiveDocument()
                .getEditor()
                .hasSelectionDetail();
              U(this._getFirstSelectedImageElement(), t),
                gDesigner.stats("touchmenu_crop-image");
            },
            icon: "gravit-icon-crop",
            update: (e) => {
              var t = gDesigner
                .getActiveDocument()
                .getEditor()
                .hasSelectionDetail();
              e.setCaption(
                GCore.GLocale.get(
                  new GCore.GLocaleKey(
                    "GImageProperties",
                    t ? "action.no-crop" : "action.crop"
                  )
                )
              );
            },
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "text.original-size")
            ),
            click: (e) => {
              B(this._getFirstSelectedImageElement()),
                gDesigner.stats("touchmenu_original-size");
            },
            icon: "gravit-icon-expand",
          },
          {
            caption: GCore.GLocale.get(
              new GCore.GLocaleKey("GContextMenu", "text.replace-image")
            ),
            click: (e) => {
              gDesigner.stats("touchmenu_replace-image"),
                N(
                  this._getFirstSelectedImageElement(),
                  gDesigner.getActiveDocument()
                );
            },
            icon: "gravit-icon-replaceimg",
          },
        ];
        $("<div/>")
          .addClass("image-section")
          .gPropertyRow({
            columns: [
              {
                content: this._createActionButtonMenu(
                  "gravit-icon-image",
                  GCore.GLocale.get(new GCore.GLocaleKey("GContextMenu", "text.image")),
                  a,
                  () => !!this._getFirstSelectedImageElement()
                ),
              },
            ],
          })
          .appendTo(e);
        return (
          $("<div/>")
            .addClass("")
            .gPropertyRow({
              columns: [
                {
                  width: "48%",
                  content: this._createActionButtons([
                    { action: gDesigner.getAction(GClipAction.ID) },
                    {
                      action: gDesigner.getAction(GMaskWithShapeAction.ID),
                      icon: "gravit-icon-mask-with-shape",
                    },
                  ]),
                },
                { width: "4%" },
                {
                  width: "48%",
                  content: this._createActionButtons([
                    {
                      action: gDesigner.getAction(GConvertToImageAction.ID),
                      icon: "gravit-icon-flatten",
                    },
                    {
                      action: gDesigner.getAction(GDuplicateAction.ID),
                      icon: "gravit-icon-duplicate",
                    },
                  ]),
                },
              ],
            })
            .appendTo(e),
          $("<div/>")
            .addClass("")
            .gPropertyRow({
              columns: [
                {
                  width: "48%",
                  content: this._createActionButtons([
                    {
                      icon: "gravit-icon-lock",
                      click: (e) => {
                        t._setAllSelectionsLocked(),
                          this._contextMenuContainerTouch.gOverlay("close"),
                          gDesigner.stats("touchmenu_lock-layer");
                      },
                      isEnabled: () => t._getSelectedItems().length > 0,
                    },
                    {
                      icon: "gravit-icon-hide-big",
                      click: (e) => {
                        t._setAllSelectionsHidden(),
                          this._contextMenuContainerTouch.gOverlay("close"),
                          gDesigner.stats("touchmenu_hide-layer");
                      },
                      isEnabled: () => t._getSelectedItems().length > 0,
                    },
                  ]),
                },
                { width: "4%" },
                { width: "48%", content: this._createSelectMenuButton() },
              ],
            })
            .appendTo(e),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent.bind(this)),
          e
        );
      }),
      (a.prototype._elementsToCheck = []),
      (a.prototype._documentEvent = function (e) {
        e.type === GDocumentEvent.Type.ContextMenuOpened &&
          (gDesigner
            .getAction(GPasteHereAction.ID)
            .setPosition(this._contextMenuClientPosition),
          this._elementsToCheck.forEach((e) => {
            e.isEnabled &&
              e.element &&
              e.element.attr("disabled", !e.isEnabled(this._mouseEvent));
          }));
      }),
      (a.prototype._createActionButtons = function (e) {
        var t = $("<div/>").addClass("button-group");
        return (
          (e = e instanceof Array ? e : [e]).forEach((e) => {
            var n = this._createActionButton(e);
            t.append(n);
          }),
          t
        );
      }),
      (a.prototype._createActionButton = function (e) {
        var t = e.label,
          n = e.icon,
          GTools = e.click;
        let a = e.isEnabled,
          GAttachToPathAction = false;
        e.action &&
          ((GAttachToPathAction = e.action.isPro()),
          t || (t = GCore.GLocale.get(e.action.getTitle())),
          n || (n = e.action.getIcon() || e.action.getGroupIcon()),
          GTools ||
            (GTools = function () {
              gDesigner.executeAction(e.action.getId(), undefined, "touchmenu");
            }),
          a ||
            (a = function () {
              return gDesigner.canExecuteAction(e.action.getId());
            }));
        var GConvertToPathAction = $("<div></div>").gPro({ pro: GAttachToPathAction });
        e.action &&
          GConvertToPathAction
            .addClass("action")
            .attr("data-action", e.action.getId())
            .data("action", e.action);
        var GCreateSymbolAction = $("<button></button>")
          .addClass("action-button")
          .addClass(e.longButton ? "long-button" : "")
          .toggleClass("g-active", true === e.active)
          .appendTo(GConvertToPathAction)
          .on("mousedown", function (e) {
            e.preventDefault();
          });
        return (
          this._elementsToCheck.push({ element: GCreateSymbolAction, isEnabled: a }),
          n &&
            (this._updateIcon($("<span></span>").appendTo(GCreateSymbolAction), n),
            GCreateSymbolAction.addClass("icon")),
          e.label &&
            GCreateSymbolAction.append($("<span></span>").addClass("label").text(e.label)),
          e.isMenu &&
            GCreateSymbolAction.append(
              $("<span></span>").addClass(
                "icon item-tail gravit-icon-chevron-left-small"
              )
            ),
          GTools && GCreateSymbolAction.on("click", GTools),
          GConvertToPathAction
        );
      }),
      (a.prototype._createActionButtonWithMenu = function (e, t, n) {
        var GCore = $("<div/>").addClass("action-button-with-menu");
        GCore.append(
          this._createActionButton({ action: e, label: t, longButton: true })
        );
        var GTools = new GMenu(null, "g-context-menu");
        (GTools.__which = "touchmenu"),
          n.forEach((e) => {
            if (e instanceof GAction)
              GTools.createAddItem(
                e,
                null,
                null,
                null,
                e.getId() === GPasteHereAction.ID ? a.ID : null
              );
            else {
              var t = GTools.createAddItem(e.caption, e.click);
              t.setIcon(e.icon),
                t.addEventListener(GMenu2.UpdateEvent, function () {
                  t.setEnabled(e.isEnabled());
                });
            }
          });
        var GAttachToPathAction = $("<button/>")
          .addClass("open-menu icon gravit-icon-chevron-left-small")
          .on("click", (e) => {
            GTools.open($(e.target), b.Position.Right_Bottom, b.Position.Center);
          });
        return (
          this._elementsToCheck.push({
            element: GAttachToPathAction,
            isEnabled: () => n.some((e) => e.isEnabled()),
          }),
          GCore.append(GAttachToPathAction),
          GCore
        );
      }),
      (a.prototype._createActionButtonMenu = function (e, t, n, GCore) {
        var GTools = new GMenu(null, "g-context-menu");
        (GTools.__which = "touchmenu"),
          n.forEach((e) => {
            if (e instanceof GAction) GTools.createAddItem(e);
            else {
              var t = GTools.createAddItem(e.caption, e.click);
              t.setIcon(e.icon),
                t.addEventListener(GMenu2.UpdateEvent, function () {
                  e.update && e.update(t);
                });
            }
          });
        var a = $("<div/>").addClass("action-menu-button");
        return (
          a.append(
            this._createActionButton({
              label: t,
              icon: e,
              click: (e) => {
                GTools.open(
                  $(e.target).closest(".action-menu-button"),
                  b.Position.Right_Bottom,
                  b.Position.Center
                );
              },
              isMenu: true,
              isEnabled: GCore,
            })
          ),
          a
        );
      }),
      (a.prototype._createSelectMenuButton = function () {
        var e = $("<div/>").addClass("select-menu-button");
        return (
          e.append(
            this._createActionButton({
              label: GCore.GLocale.get(
                new GCore.GLocaleKey("GContextMenu", "text.select")
              ),
              click: (e) => {
                var t = this._getHitsElments(),
                  n = gDesigner.getActiveDocument().getEditor(),
                  GCore = $("<div/>").gOverlay({
                    releaseOnClose: true,
                    offsetX: 100,
                    offsetY: -25,
                    clazz: "selected-menu-overlay",
                  }),
                  GTools = $("<div/>").appendTo(GCore);
                GCore.gOverlay("open", $(e.target).closest(".select-menu-button"));
                GTools.gSelectedPanel({
                  clickCallback: (e) => {
                    n.clearSelection(), n.updateSelection(false, [e]);
                  },
                  renderFinishCallback: () => {
                    GCore.gOverlay("relayout");
                  },
                }).gSelectedPanel("setSelections", t);
              },
              isMenu: true,
              isEnabled: (e) => {
                var t = this._getHitsElments(e);
                return !!(t && t.elementHits && t.elementHits.length > 0);
              },
            })
          ),
          e
        );
      }),
      (a.prototype._updateIcon = function (e, t) {
        e.empty(), e.attr("class", "icon " + t);
      }),
      (a.prototype._getSelectedItems = function () {
        var e = gDesigner.getActiveDocument();
        if (e) {
          var module = e.getEditor();
          if (module) {
            var require = module.getSelection();
            return require || [];
          }
        }
        return [];
      }),
      (a.prototype._getFirstSelectedImageElement = function () {
        var e = this._getSelectedItems();
        return e && e.length > 0 ? e.find((e) => e instanceof GCore.GImage) : null;
      }),
      (a.prototype._getFirstSelectedTextElement = function () {
        var e = this._getSelectedItems();
        return e && e.length > 0 ? e.find((e) => e instanceof GCore.GText) : null;
      }),
      (a.prototype._setAllSelectionsHidden = function () {
        var e = this._getSelectedItems();
        e &&
          e.length > 0 &&
          GTools.GEditor.tryRunTransaction(
            gDesigner.getActiveDocument().getScene(),
            function () {
              for (var module = 0; module < e.length; module++)
                e[module].setProperty("vis", false),
                  e[module].removeFlag(GCore.GNode.Flag.Highlighted);
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "action.toggle-visibility")
            )
          );
      }),
      (a.prototype._setAllSelectionsLocked = function () {
        var e = this._getSelectedItems();
        e &&
          e.length > 0 &&
          GTools.GEditor.tryRunTransaction(
            gDesigner.getActiveDocument().getScene(),
            function () {
              for (; e.length > 0; )
                e[0].setProperty("lkt", GCore.GBlock.LockType.Full),
                  e[0].removeFlag(GCore.GNode.Flag.Highlighted),
                  e[0].accept(function (e) {
                    e.removeFlag(GCore.GNode.Flag.Selected);
                  });
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey("GCommonNames", "action.toggle-lock")
            )
          );
      });
  }