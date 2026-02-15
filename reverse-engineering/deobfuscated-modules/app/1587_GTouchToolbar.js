/**
 * Webpack Module #1587
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(168) /* polyfill_Array_reduce */,
      require(20) /* polyfill_RegExp_exec */,
      require(71) /* polyfill_String_includes */,
      require(247) /* module_247 */,
      require(4) /* stub_requires_668 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(169) /* stub_requires_683 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GEditor = require(15) /* GEditor */,
      GTools = require(53) /* GTools */,
      GCore = require(1) /* GCore */,
      GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */),
      GEvent_fullscreen = _interopRequireDefault(require(1330) /* GEvent_fullscreen */),
      GMenu = _interopRequireDefault(require(238) /* GMenu */),
      GMenu2 = _interopRequireDefault(require(339) /* GMenu */),
      GCutCopyAction = _interopRequireDefault(require(1331) /* GCutCopyAction */),
      GPasteAction = _interopRequireDefault(require(877) /* GPasteAction */),
      GPasteInPlaceAction = _interopRequireDefault(require(1183) /* GPasteInPlaceAction */),
      GPasteInsideAction = _interopRequireDefault(require(1184) /* GPasteInsideAction */),
      GPasteStyleAction = _interopRequireDefault(require(875) /* GPasteStyleAction */),
      GPasteAndReplaceAction = _interopRequireDefault(require(876) /* GPasteAndReplaceAction */),
      GDeleteAction = _interopRequireDefault(require(1332) /* GDeleteAction */),
      GGroupAction = _interopRequireDefault(require(811) /* GGroupAction */),
      GSplitAction = _interopRequireDefault(require(870) /* GSplitAction */),
      GSelectAllAction = _interopRequireDefault(require(1333) /* GSelectAllAction */),
      GDeselectAllAction = _interopRequireDefault(require(1334) /* GDeselectAllAction */),
      GArrangeAction = _interopRequireDefault(require(869) /* GArrangeAction */),
      GToggleFullscreenAction = _interopRequireDefault(require(1335) /* GToggleFullscreenAction */),
      GConvertToPathAction = _interopRequireDefault(require(810) /* GConvertToPathAction */),
      GOpenQuickHelpScreenAction = _interopRequireDefault(require(1336) /* GOpenQuickHelpScreenAction */),
      A = _interopRequireDefault(require(1337) /* module_1337 */),
      T = _interopRequireDefault(require(1590) /* module_1590 */),
      GTouchEventHandler = _interopRequireDefault(require(878) /* GTouchEventHandler */),
      GTouchClickGesture = _interopRequireDefault(require(879) /* GTouchClickGesture */);
    class D extends GTouchEventHandler.default {
      constructor(e) {
        super(e),
          this.addGesture(new GTouchClickGesture.default()),
          this.setDelayedTouchEventsEnabled(false);
      }
      _handleEvent(e) {
        e.cancelable && (e.preventDefault(), e.stopPropagation()),
          super._handleEvent(e);
      }
    }
    const L = {
        [GEditor.GKey.Constant.LEFT]: 37,
        [GEditor.GKey.Constant.UP]: 38,
        [GEditor.GKey.Constant.RIGHT]: 39,
        [GEditor.GKey.Constant.DOWN]: 40,
        [GEditor.GKey.Constant.SHIFT]: 16,
        [GEditor.GKey.Constant.CONTROL]: 17,
        [GEditor.GKey.Constant.ALT_LEFT]: 18,
      },
      I = Object.values(L),
      k = (e, t) => {
        const require = gDesigner.getActiveDocument(),
          _interopRequireDefault = require && require.getActiveWindow(),
          GEditor = _interopRequireDefault && _interopRequireDefault.getView(),
          GTools = GEditor && GEditor.getHtmlElement();
        GTools && GTools.dispatchEvent(new KeyboardEvent(e, { keyCode: t }));
      },
      O = (e) =>
        e === GEditor.GKey.Constant.ALT_LEFT ||
        e === GEditor.GKey.Constant.ALT_RIGHT ||
        e === GEditor.GKey.Constant.SHIFT ||
        e === GEditor.GKey.Constant.CONTROL,
      F = [
        GEditor.GKey.Constant.UP,
        GEditor.GKey.Constant.LEFT,
        GEditor.GKey.Constant.RIGHT,
        GEditor.GKey.Constant.DOWN,
      ];
    function R(e) {
      (this._htmlElement = e),
        (this._keyState = {}),
        (this._heldKeys = new Map()),
        (this._keyDownInveral = {}),
        (this._keyDownBound = this._keyDown.bind(this)),
        (this._keyUpBound = this._keyUp.bind(this)),
        (this._mouseUpBound = this._mouseup.bind(this)),
        (this._touchHandler = new T.default()),
        this.init();
    }
    (R.prototype._touchHandler = null),
      (R.prototype._htmlElement = null),
      (R.prototype._keyState = null),
      (R.prototype._heldKeys = null),
      (R.prototype._keyDownInveral = null),
      (R.prototype._document = null),
      (R.prototype._keyDownBound = null),
      (R.prototype._keyUpBound = null),
      (R.prototype._mouseUpBound = null),
      (R.prototype.init = function () {
        GEditor.GPlatform.constructor.bypassKeyDownRestrictionByClassName(
          "g-virtual-key"
        ),
          this._htmlElement.gCollapsible();
        const exports = $("<div/>").addClass("container").appendTo(this._htmlElement),
          module = (e) => {
            const module = this._keyDownInveral[e];
            module && (clearInterval(module), delete this._keyDownInveral[e]),
              O(e) && GEditor.GPlatform.releaseKey(e),
              k("keyup", L[e]);
          },
          require = (e) => {
            const module = this._keyDownInveral[e];
            module && clearInterval(module),
              ((e) => F.includes(e))(e) &&
                (this._keyDownInveral[e] = setInterval(() => {
                  k("keydown", L[e]);
                }, 100)),
              O(e) && GEditor.GPlatform.holdKey(e),
              k("keydown", L[e]);
          },
          _interopRequireDefault = (e) => {
            let { key: _interopRequireDefault, icon: GTools, dblclick: GCore, actionClass: GEvent_fullscreen } = e;
            const GMenu = GDocumentEvent({
              name: GTools ? null : GEditor.GKey.toLocalizedShort(_interopRequireDefault, true),
              icon: GTools,
              actionClass: "g-virtual-key" + (GEvent_fullscreen ? " " + GEvent_fullscreen : ""),
              mousedown: (e) => {
                e.stopImmediatePropagation(), this._isHoldingKey(_interopRequireDefault) || require(_interopRequireDefault);
              },
              click: (e) => {
                e.stopImmediatePropagation(),
                  this._isHoldingKey(_interopRequireDefault) ||
                    (module(_interopRequireDefault), gDesigner.stats("virtualkey_assistantbar_click", _interopRequireDefault));
              },
              dblclick: GCore,
              mouseup: (e) => {
                e.stopImmediatePropagation(), this._isHoldingKey(_interopRequireDefault) || module(_interopRequireDefault);
              },
              touchstart: () => {
                this._isHoldingKey(_interopRequireDefault) || require(_interopRequireDefault);
              },
              touchend: () => {
                this._isHoldingKey(_interopRequireDefault) || module(_interopRequireDefault);
              },
              touchcancel: () => {
                this._isHoldingKey(_interopRequireDefault) || module(_interopRequireDefault);
              },
              active: () => !!this._keyState[L[_interopRequireDefault]] || this._isHoldingKey(_interopRequireDefault),
            });
            return new D(GMenu[0]), GMenu;
          },
          GCore = function (e) {
            let module =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : "";
            return e.reduce((e, t) => {
              let { icon: require, action: _interopRequireDefault, isEnabled: GEditor } = t;
              const GTools = e.createAddItem(_interopRequireDefault);
              return (
                require && GTools.setIcon(require),
                GEditor &&
                  GTools.addEventListener(GMenu2.default.UpdateEvent, () => {
                    GTools.setEnabled(GEditor());
                  }),
                e
              );
            }, new GMenu.default(null, "g-assistant-bar-menu" + (module ? " " + module : "")));
          },
          GDocumentEvent = (e) => {
            let {
              action: module,
              name: require,
              menu: _interopRequireDefault,
              icon: GEditor,
              click: GTools,
              dblclick: GCore,
              mousedown: GDocumentEvent,
              mouseup: GEvent_fullscreen,
              touchstart: GMenu,
              touchmove: GMenu2,
              touchend: GCutCopyAction,
              touchcancel: GPasteAction,
              split: GPasteInPlaceAction = false,
              active: GPasteInsideAction,
              actionClass: GPasteStyleAction,
            } = e;
            const GPasteAndReplaceAction = $("<div/>")
                .addClass("toolbar-button")
                .toggleClass("split", !!GPasteInPlaceAction),
              GDeleteAction = $("<button/>").addClass("action-button").appendTo(GPasteAndReplaceAction);
            if (
              (GPasteStyleAction && GDeleteAction.addClass(GPasteStyleAction),
              GPasteInsideAction && (GPasteAndReplaceAction.data("active", GPasteInsideAction), GPasteAndReplaceAction.toggleClass("g-active", !!GPasteInsideAction())),
              module &&
                (GPasteAndReplaceAction.data("action", module),
                GEditor || (GEditor = module.getIcon()),
                GTools ||
                  (GTools = () =>
                    gDesigner.executeAction(
                      module.getId(),
                      undefined,
                      "assistantbar"
                    ))),
              require && $("<span/>").text(require).appendTo(GDeleteAction),
              GEditor && $("<span/>").addClass(GEditor).appendTo(GDeleteAction),
              GTools && GDeleteAction.on("click", GTools),
              GCore && GDeleteAction.on("dblclick", GCore),
              GDocumentEvent && GPasteAndReplaceAction.on("mousedown", GDocumentEvent),
              GEvent_fullscreen && GPasteAndReplaceAction.on("mouseup", GEvent_fullscreen),
              GMenu && GPasteAndReplaceAction.on("touchstart", GMenu),
              GMenu2 && GPasteAndReplaceAction.on("touchmove", GMenu2),
              GCutCopyAction && GPasteAndReplaceAction.on("touchend", GCutCopyAction),
              GPasteAction && GPasteAndReplaceAction.on("touchcancel", GPasteAction),
              _interopRequireDefault)
            ) {
              let e;
              (_interopRequireDefault.__which = "assistantbar"),
                (e = GPasteInPlaceAction
                  ? $("<button/>")
                      .addClass("dropdown-button")
                      .append(
                        $("<span></span>").addClass(
                          "gravit-icon-touch-arrow-up"
                        )
                      )
                      .appendTo(GPasteAndReplaceAction)
                  : GDeleteAction.append(
                      $("<span></span>").addClass("gravit-icon-touch-arrow-up")
                    )),
                e.gMenuButton({ menu: _interopRequireDefault, touch: true });
            }
            return GPasteAndReplaceAction;
          },
          GEvent_fullscreen = $("<div/>").addClass("left-side").appendTo(exports),
          T = $("<div/>")
            .addClass("right-side")
            .appendTo(exports)
            .gCollapsible({ orientation: A.default.Orientation.Horizontal })
            .gCollapsible("collapse")
            .on("visibilitychanged", (e, t) => {
              gContainer.setProperty(
                "designer.assistant-bar.left-side.expanded",
                !!t
              );
            });
        $("<div/>")
          .gPropertyRow({
            height: "auto",
            columns: [
              {
                width: "86px",
                content: _interopRequireDefault({
                  key: GEditor.GKey.Constant.SHIFT,
                  actionClass: "g-virtual-key-".concat(GEditor.GKey.Constant.SHIFT),
                  dblclick: () =>
                    this._toggleModifierKey(GEditor.GKey.Constant.SHIFT),
                }),
              },
              {
                width: "auto",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-copy",
                  action: gDesigner.getAction(GCutCopyAction.default.ID_COPY),
                }),
              },
              {
                width: "68px",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-paste",
                  action: gDesigner.getAction(GPasteAction.default.ID),
                  menu: GCore(
                    [
                      {
                        icon: "gravit-icon-touch-paste-in-place",
                        action: gDesigner.getAction(GPasteInPlaceAction.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-inside",
                        action: gDesigner.getAction(GPasteInsideAction.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-and-replace",
                        action: gDesigner.getAction(GPasteAndReplaceAction.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-style",
                        action: gDesigner.getAction(GPasteStyleAction.default.ID),
                      },
                    ],
                    "paste-menu"
                  ),
                  split: true,
                }),
              },
              {
                width: "auto",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-trash-2",
                  action: gDesigner.getAction(GDeleteAction.default.ID),
                }),
              },
              {
                width: "auto",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-selection",
                  click: () => {
                    const exports = gDesigner.getActiveDocument(),
                      module = exports && exports.getEditor();
                    if (module) {
                      module.getSelection() && module.getSelection().length > 0
                        ? gDesigner.executeAction(
                            GDeselectAllAction.default.ID,
                            undefined,
                            "assistantbar"
                          )
                        : gDesigner.executeAction(
                            GSelectAllAction.default.ID,
                            undefined,
                            "assistantbar"
                          );
                    }
                  },
                }),
              },
              {
                width: "62px",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-arrange-order",
                  menu: GCore(
                    Object.values(GTools.GEditor.ArrangeOrderType).map((e) => ({
                      icon: "gravit-icon-touch-arrange-" + e,
                      action: gDesigner.getAction(GArrangeAction.default.ID + "." + e),
                      isEnabled: () => this._isArrangeActionEnabled(e),
                    })),
                    "arrange-menu"
                  ),
                }),
              },
              {
                width: "auto",
                content: GDocumentEvent({
                  icon: "gravit-icon-touch-fullscreen",
                  action: gDesigner.getAction(GToggleFullscreenAction.default.ID),
                  active: () =>
                    gDesigner.getAction(GToggleFullscreenAction.default.ID).isFullscreen(),
                }),
              },
            ],
          })
          .appendTo(GEvent_fullscreen),
          $("<div/>")
            .gPropertyRow({
              height: "auto",
              columns: [
                {
                  width: "86px",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.CONTROL,
                    actionClass: "g-virtual-key-".concat(
                      GEditor.GKey.Constant.CONTROL
                    ),
                    dblclick: () =>
                      this._toggleModifierKey(GEditor.GKey.Constant.CONTROL),
                  }),
                },
                {
                  width: "114px",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.ALT_LEFT,
                    actionClass: "g-virtual-key-".concat(
                      GEditor.GKey.Constant.ALT_LEFT
                    ),
                    dblclick: () =>
                      this._toggleModifierKey(GEditor.GKey.Constant.ALT_LEFT),
                  }),
                },
                {
                  width: "auto",
                  content: GDocumentEvent({
                    icon: "gravit-icon-touch-group",
                    action: gDesigner.getAction(GGroupAction.default.ID),
                  }),
                },
                {
                  width: "auto",
                  content: GDocumentEvent({
                    icon: "gravit-icon-touch-ungroup",
                    action: gDesigner.getAction(GSplitAction.default.ID),
                  }),
                },
                {
                  width: "62px",
                  content: GDocumentEvent({
                    icon: "gravit-icon-touch-convert-to-path",
                    action: gDesigner.getAction(GConvertToPathAction.default.ID),
                  }),
                },
                {
                  width: "auto",
                  content: GDocumentEvent({
                    icon: "gravit-icon-touch-help",
                    click: () =>
                      gDesigner.executeAction(
                        GOpenQuickHelpScreenAction.default.ID,
                        undefined,
                        "assistantbar"
                      ),
                  }),
                },
              ],
            })
            .appendTo(GEvent_fullscreen),
          $("<div/>")
            .gPropertyRow({
              height: "auto",
              columns: [
                {
                  width: "auto",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.UP,
                    icon: "gravit-icon-touch-arrow-key-up",
                  }),
                },
                {
                  width: "auto",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.DOWN,
                    icon: "gravit-icon-touch-arrow-key-down",
                  }),
                },
              ],
            })
            .appendTo(T),
          $("<div/>")
            .gPropertyRow({
              height: "auto",
              columns: [
                {
                  width: "auto",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.LEFT,
                    icon: "gravit-icon-touch-arrow-key-left",
                  }),
                },
                {
                  width: "auto",
                  content: _interopRequireDefault({
                    key: GEditor.GKey.Constant.RIGHT,
                    icon: "gravit-icon-touch-arrow-key-right",
                  }),
                },
              ],
            })
            .appendTo(T),
          gContainer
            .getProperty("designer.assistant-bar.left-side.expanded")
            .then((e) => {
              T.gCollapsible(e ? "expand" : "collapse");
            });
      }),
      (R.prototype._toggleModifierKey = function (e) {
        const module = !GEditor.GPlatform.isHoldingKey(e);
        this._toggleKey(e, module),
          this._htmlElement
            .find(".g-virtual-key-".concat(e))
            .toggleClass("g-held", module),
          this._updateActions();
      }),
      (R.prototype._toggleKey = function (e, t) {
        t
          ? (GEditor.GPlatform.holdKey(e), this._heldKeys.set(e, true))
          : (GEditor.GPlatform.releaseKey(e), this._heldKeys.delete(e));
      }),
      (R.prototype._isHoldingKey = function (e) {
        return !!this._heldKeys && !!this._heldKeys.get(e);
      }),
      (R.prototype._keyDown = function (e) {
        I.includes(e.which || e.keyCode) &&
          ((this._keyState[e.which || e.keyCode] = true), this._updateActions());
      }),
      (R.prototype._keyUp = function (e) {
        I.includes(e.which || e.keyCode) &&
          (delete this._keyState[e.which || e.keyCode], this._updateActions());
      }),
      (R.prototype._mouseup = function (e) {
        e.isTrusted &&
          (Object.keys(this._keyDownInveral).forEach((e) => {
            k("keyup", L[e]), clearInterval(this._keyDownInveral[e]);
          }),
          (this._keyDownInveral = []));
      }),
      (R.prototype.activate = function () {
        document.addEventListener("keydown", this._keyDownBound, true),
          document.addEventListener("keyup", this._keyUpBound, true),
          document.addEventListener("mouseup", this._mouseUpBound, true),
          gDesigner.addEventListener(GDocumentEvent.default, this._documentEvent, this),
          gDesigner.addEventListener(GEvent_fullscreen.default, this._fullScreenEvent, this),
          GEditor.GPlatform.addEventListener(
            GEditor.GModifiersChangedEvent,
            this._modifiersChangedEvent,
            this
          ),
          this._activateDocument(gDesigner.getActiveDocument()),
          this._touchHandler.activate(this._htmlElement[0]),
          (this._heldKeys = new Map()),
          this._updateActions();
      }),
      (R.prototype.deactivate = function () {
        document.removeEventListener("keydown", this._keyDownBound, true),
          document.removeEventListener("keyup", this._keyUpBound, true),
          document.removeEventListener("mouseup", this._mouseUpBound, true),
          gDesigner.removeEventListener(GDocumentEvent.default, this._documentEvent, this),
          gDesigner.removeEventListener(GEvent_fullscreen.default, this._fullScreenEvent, this),
          GEditor.GPlatform.removeEventListener(
            GEditor.GModifiersChangedEvent,
            this._modifiersChangedEvent,
            this
          ),
          this._deactivateDocument(gDesigner.getActiveDocument()),
          GEditor.GPlatform.releaseKey(GEditor.GKey.Constant.ALT_LEFT),
          GEditor.GPlatform.releaseKey(GEditor.GKey.Constant.ALT_RIGHT),
          GEditor.GPlatform.releaseKey(GEditor.GKey.Constant.SHIFT),
          GEditor.GPlatform.releaseKey(GEditor.GKey.Constant.CONTROL),
          this._touchHandler.deactivate(this._htmlElement[0]),
          (this._heldKeys = null);
      }),
      (R.prototype._activateDocument = function (e) {
        e &&
          e
            .getEditor()
            .addEventListener(
              GTools.GEditor.SelectionChangedEvent,
              this._selectionChangedEvent,
              this
            ),
          (this._document = e);
      }),
      (R.prototype._deactivateDocument = function (e) {
        e &&
          e
            .getEditor()
            .removeEventListener(
              GTools.GEditor.SelectionChangedEvent,
              this._selectionChangedEvent,
              this
            ),
          (this._document = null);
      }),
      (R.prototype._selectionChangedEvent = function (e) {
        this._updateActions();
      }),
      (R.prototype._fullScreenEvent = function () {
        this._updateActions();
      }),
      (R.prototype._modifiersChangedEvent = function () {
        this._updateActions();
      }),
      (R.prototype._documentEvent = function (e) {
        const module = e.document;
        if (!module.isLockedByVersionHistory())
          switch (e.type) {
            case GDocumentEvent.default.Type.Activated:
              this._activateDocument(module), this._updateActions();
              break;
            case GDocumentEvent.default.Type.Deactivated:
              this._deactivateDocument(module), this._updateActions();
              break;
            case GDocumentEvent.default.Type.Modified:
              this._updateActions();
          }
      }),
      (R.prototype._updateActions = function () {
        this._htmlElement.find(".toolbar-button").each(function () {
          const exports = $(this),
            module = exports.data("action"),
            require = exports.data("active");
          if (module) {
            const n = !module.isAvailable() || !module.isEnabled();
            exports.find("button").prop("disabled", n).toggleClass("g-disabled", n);
          }
          require && exports.toggleClass("g-active", !!require());
        });
      }),
      (R.prototype._isArrangeActionEnabled = function (e) {
        if (!gDesigner.getAction(GArrangeAction.default.ID + "." + e).isEnabled()) return false;
        const module = this._document
          ? this._document.getEditor().getIndividualSelection()
          : null;
        if (!module) return false;
        if (module.length > 1) return true;
        const require = module[0],
          _interopRequireDefault = require.getParent();
        switch (e) {
          case GTools.GEditor.ArrangeOrderType.SendToFront:
            if (require.getNext()) {
              let e = require.getNext(),
                t = null;
              for (; !t && e; )
                e instanceof GCore.GElement && (t = e), (e = e.getNext());
              return !!t && GTools.GEditor.validateBlockInsertion(_interopRequireDefault, require);
            }
            return false;
          case GTools.GEditor.ArrangeOrderType.BringForward: {
            let e = require.getNext();
            if (e) {
              let t = null;
              for (; !t && e; )
                e instanceof GCore.GElement &&
                  (e.hasFlag(GCore.GNode.Flag.Selected) || (t = e)),
                  (e = e.getNext());
              if (null !== t) {
                const e = t.getNext();
                return GTools.GEditor.validateBlockInsertion(_interopRequireDefault, require, e);
              }
            }
            return false;
          }
          case GTools.GEditor.ArrangeOrderType.SendBackward: {
            let e = require.getPrevious();
            if (null !== e) {
              let t = null;
              for (; !t && e; )
                e instanceof GCore.GElement &&
                  (e.hasFlag(GCore.GNode.Flag.Selected) ||
                    (GTools.GEditor.validateBlockInsertion(_interopRequireDefault, require, e) && (t = e))),
                  (e = e.getPrevious());
              return !!t;
            }
            return false;
          }
          case GTools.GEditor.ArrangeOrderType.SendToBack:
            if (null !== require.getPrevious()) {
              let e = _interopRequireDefault.getFirstChild(),
                t = null;
              for (; !t && e && e !== require; )
                e instanceof GCore.GElement &&
                  GTools.GEditor.validateBlockInsertion(_interopRequireDefault, require, e) &&
                  (t = e),
                  (e = e.getNext());
              return !!t;
            }
            return false;
        }
        return true;
      }),
      (R.prototype.getHtmlElement = function () {
        return this._htmlElement;
      }),
      (exports.exports = R);
  }