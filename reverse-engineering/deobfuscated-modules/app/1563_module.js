/**
 * Webpack Module #1563
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(32) /* stub_requires_670 */, require(97) /* stub_requires_684 */, require(33) /* polyfill_DOMCollection_forEach */;
    var o = require(1) /* module */,
      i = require(53) /* module */,
      a = require(1303) /* GContextMenu */,
      r = require(1176) /* GAttachToPathAction */,
      s = require(810) /* GConvertToPathAction */,
      l = require(608) /* GCreateSymbolAction */,
      c = require(874) /* GDetachSymbolAction */,
      d = require(1177) /* GResetInstanceAction */,
      u = require(1178) /* GDetachFromPathAction */,
      p = require(1179) /* GJoinPathsAction */;
    const g = require(812) /* GMergeMainAction */;
    var h = require(1180) /* GSelectByFontTypeAction */,
      f = require(873) /* GSplitPathAction */,
      m = require(871) /* GTransformAction */,
      y = require(872) /* GVectorizeBorderAction */,
      v = require(238) /* GMenu */,
      _ = require(339) /* GMenu */,
      b = require(444) /* module_444 */,
      w = require(1181) /* GMaskWithShapeAction */,
      C = require(877) /* GPasteAction */,
      x = require(1183) /* GPasteInPlaceAction */,
      S = require(1184) /* GPasteInsideAction */,
      E = require(1182) /* GPasteHereAction */,
      A = require(875) /* GPasteStyleAction */,
      T = require(809) /* GClipAction */,
      G = require(1314) /* GConvertToImageAction */,
      P = require(1315) /* GDuplicateAction */,
      D = require(1316) /* GCreateNestedCompoundAction */,
      L = require(1185) /* GOutlineAction */,
      I = require(1317) /* GOffsetAction */,
      k = require(1318) /* GSimplifyAction */,
      O = require(1319) /* GSplitLineAction */,
      F = require(1320) /* GConvertToRawPathAction */,
      R = require(566) /* GFitSelectionAction */,
      M = require(31) /* GAction */,
      { replaceImage: N, setOriginSize: B, cropImage: U } = require(1268) /* module_1268 */,
      j = require(78) /* GDocumentEvent */;
    const K = require(876) /* GPasteAndReplaceAction */;
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
                      m.ID + "." + m.Type.FlipHorizontal
                    ),
                  },
                  {
                    action: gDesigner.getAction(
                      m.ID + "." + m.Type.FlipVertical
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
                      m.ID + "." + m.Type.Rotate90Left
                    ),
                    icon: "gravit-icon-rotate-left",
                  },
                  {
                    action: gDesigner.getAction(
                      m.ID + "." + m.Type.Rotate90Right
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
                  gDesigner.getAction(C.ID),
                  o.GLocale.get(new o.GLocaleKey("GContextMenu", "text.paste")),
                  [
                    gDesigner.getAction(x.ID),
                    gDesigner.getAction(S.ID),
                    gDesigner.getAction(E.ID),
                    gDesigner.getAction(K.ID),
                    gDesigner.getAction(A.ID),
                  ]
                ),
              },
            ],
          })
          .appendTo(e);
        const require = gDesigner.getAction(g.ID),
          i = require && require.getSubActions().concat(gDesigner.getAction(D.ID));
        $("<div/>")
          .addClass("compound-section")
          .gPropertyRow({
            columns: [
              {
                content: this._createActionButtonWithMenu(
                  gDesigner.getAction(g.ID),
                  o.GLocale.get(
                    new o.GLocaleKey("GContextMenu", "text.create-compound")
                  ),
                  i
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
                    gDesigner.getAction(s.ID),
                    o.GLocale.get(
                      new o.GLocaleKey("GContextMenu", "text.convert-to-path")
                    ),
                    [
                      gDesigner.getAction(y.ID),
                      gDesigner.getAction(F.ID),
                      gDesigner.getAction(L.ID),
                      gDesigner.getAction(I.ID),
                      gDesigner.getAction(k.ID),
                      gDesigner.getAction(p.ID),
                      gDesigner.getAction(f.ID),
                      gDesigner.getAction(O.ID),
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
                    gDesigner.getAction(l.ID),
                    o.GLocale.get(
                      new o.GLocaleKey("GContextMenu", "text.create-symbol")
                    ),
                    [
                      gDesigner.getAction(d.ID),
                      gDesigner.getAction(c.ID),
                      {
                        caption: o.GLocale.get(
                          new o.GLocaleKey("GContextMenu", "text.go-to-master")
                        ),
                        click: (e) => {
                          var t = gDesigner.getActiveDocument(),
                            n = t.getEditor();
                          if (t) {
                            var i = t.getEditor().getIndividualSelection();
                            if (i && i.length) {
                              var a = i.find(
                                (e) =>
                                  e instanceof o.GSymbol &&
                                  !e.isLocked() &&
                                  !e.isMaster()
                              );
                              if (a) {
                                var r = a;
                                n.beginTransaction(),
                                  n.clearSelection(),
                                  n.updateSelection(false, [r]),
                                  gDesigner.executeAction(
                                    R.ID,
                                    undefined,
                                    undefined,
                                    true
                                  ),
                                  n.commitTransaction(
                                    o.GLocale.get(
                                      new o.GLocaleKey(
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
                                    e instanceof o.GSymbol &&
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
                  o.GLocale.get(new o.GLocaleKey("GContextMenu", "text.text")),
                  [
                    gDesigner.getAction(r.ID),
                    gDesigner.getAction(u.ID),
                    gDesigner.getAction(h.ID),
                  ],
                  () => !!this._getFirstSelectedTextElement()
                ),
              },
            ],
          })
          .appendTo(e);
        var a = [
          {
            caption: o.GLocale.get(
              new o.GLocaleKey("GContextMenu", "text.crop")
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
                o.GLocale.get(
                  new o.GLocaleKey(
                    "GImageProperties",
                    t ? "action.no-crop" : "action.crop"
                  )
                )
              );
            },
          },
          {
            caption: o.GLocale.get(
              new o.GLocaleKey("GContextMenu", "text.original-size")
            ),
            click: (e) => {
              B(this._getFirstSelectedImageElement()),
                gDesigner.stats("touchmenu_original-size");
            },
            icon: "gravit-icon-expand",
          },
          {
            caption: o.GLocale.get(
              new o.GLocaleKey("GContextMenu", "text.replace-image")
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
                  o.GLocale.get(new o.GLocaleKey("GContextMenu", "text.image")),
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
                    { action: gDesigner.getAction(T.ID) },
                    {
                      action: gDesigner.getAction(w.ID),
                      icon: "gravit-icon-mask-with-shape",
                    },
                  ]),
                },
                { width: "4%" },
                {
                  width: "48%",
                  content: this._createActionButtons([
                    {
                      action: gDesigner.getAction(G.ID),
                      icon: "gravit-icon-flatten",
                    },
                    {
                      action: gDesigner.getAction(P.ID),
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
          gDesigner.addEventListener(j, this._documentEvent.bind(this)),
          e
        );
      }),
      (a.prototype._elementsToCheck = []),
      (a.prototype._documentEvent = function (e) {
        e.type === j.Type.ContextMenuOpened &&
          (gDesigner
            .getAction(E.ID)
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
          i = e.click;
        let a = e.isEnabled,
          r = false;
        e.action &&
          ((r = e.action.isPro()),
          t || (t = o.GLocale.get(e.action.getTitle())),
          n || (n = e.action.getIcon() || e.action.getGroupIcon()),
          i ||
            (i = function () {
              gDesigner.executeAction(e.action.getId(), undefined, "touchmenu");
            }),
          a ||
            (a = function () {
              return gDesigner.canExecuteAction(e.action.getId());
            }));
        var s = $("<div></div>").gPro({ pro: r });
        e.action &&
          s
            .addClass("action")
            .attr("data-action", e.action.getId())
            .data("action", e.action);
        var l = $("<button></button>")
          .addClass("action-button")
          .addClass(e.longButton ? "long-button" : "")
          .toggleClass("g-active", true === e.active)
          .appendTo(s)
          .on("mousedown", function (e) {
            e.preventDefault();
          });
        return (
          this._elementsToCheck.push({ element: l, isEnabled: a }),
          n &&
            (this._updateIcon($("<span></span>").appendTo(l), n),
            l.addClass("icon")),
          e.label &&
            l.append($("<span></span>").addClass("label").text(e.label)),
          e.isMenu &&
            l.append(
              $("<span></span>").addClass(
                "icon item-tail gravit-icon-chevron-left-small"
              )
            ),
          i && l.on("click", i),
          s
        );
      }),
      (a.prototype._createActionButtonWithMenu = function (e, t, n) {
        var o = $("<div/>").addClass("action-button-with-menu");
        o.append(
          this._createActionButton({ action: e, label: t, longButton: true })
        );
        var i = new v(null, "g-context-menu");
        (i.__which = "touchmenu"),
          n.forEach((e) => {
            if (e instanceof M)
              i.createAddItem(
                e,
                null,
                null,
                null,
                e.getId() === E.ID ? a.ID : null
              );
            else {
              var t = i.createAddItem(e.caption, e.click);
              t.setIcon(e.icon),
                t.addEventListener(_.UpdateEvent, function () {
                  t.setEnabled(e.isEnabled());
                });
            }
          });
        var r = $("<button/>")
          .addClass("open-menu icon gravit-icon-chevron-left-small")
          .on("click", (e) => {
            i.open($(e.target), b.Position.Right_Bottom, b.Position.Center);
          });
        return (
          this._elementsToCheck.push({
            element: r,
            isEnabled: () => n.some((e) => e.isEnabled()),
          }),
          o.append(r),
          o
        );
      }),
      (a.prototype._createActionButtonMenu = function (e, t, n, o) {
        var i = new v(null, "g-context-menu");
        (i.__which = "touchmenu"),
          n.forEach((e) => {
            if (e instanceof M) i.createAddItem(e);
            else {
              var t = i.createAddItem(e.caption, e.click);
              t.setIcon(e.icon),
                t.addEventListener(_.UpdateEvent, function () {
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
                i.open(
                  $(e.target).closest(".action-menu-button"),
                  b.Position.Right_Bottom,
                  b.Position.Center
                );
              },
              isMenu: true,
              isEnabled: o,
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
              label: o.GLocale.get(
                new o.GLocaleKey("GContextMenu", "text.select")
              ),
              click: (e) => {
                var t = this._getHitsElments(),
                  n = gDesigner.getActiveDocument().getEditor(),
                  o = $("<div/>").gOverlay({
                    releaseOnClose: true,
                    offsetX: 100,
                    offsetY: -25,
                    clazz: "selected-menu-overlay",
                  }),
                  i = $("<div/>").appendTo(o);
                o.gOverlay("open", $(e.target).closest(".select-menu-button"));
                i.gSelectedPanel({
                  clickCallback: (e) => {
                    n.clearSelection(), n.updateSelection(false, [e]);
                  },
                  renderFinishCallback: () => {
                    o.gOverlay("relayout");
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
        return e && e.length > 0 ? e.find((e) => e instanceof o.GImage) : null;
      }),
      (a.prototype._getFirstSelectedTextElement = function () {
        var e = this._getSelectedItems();
        return e && e.length > 0 ? e.find((e) => e instanceof o.GText) : null;
      }),
      (a.prototype._setAllSelectionsHidden = function () {
        var e = this._getSelectedItems();
        e &&
          e.length > 0 &&
          i.GEditor.tryRunTransaction(
            gDesigner.getActiveDocument().getScene(),
            function () {
              for (var module = 0; module < e.length; module++)
                e[module].setProperty("vis", false),
                  e[module].removeFlag(o.GNode.Flag.Highlighted);
            },
            o.GLocale.get(
              new o.GLocaleKey("GCommonNames", "action.toggle-visibility")
            )
          );
      }),
      (a.prototype._setAllSelectionsLocked = function () {
        var e = this._getSelectedItems();
        e &&
          e.length > 0 &&
          i.GEditor.tryRunTransaction(
            gDesigner.getActiveDocument().getScene(),
            function () {
              for (; e.length > 0; )
                e[0].setProperty("lkt", o.GBlock.LockType.Full),
                  e[0].removeFlag(o.GNode.Flag.Highlighted),
                  e[0].accept(function (e) {
                    e.removeFlag(o.GNode.Flag.Selected);
                  });
            },
            o.GLocale.get(
              new o.GLocaleKey("GCommonNames", "action.toggle-lock")
            )
          );
      });
  }