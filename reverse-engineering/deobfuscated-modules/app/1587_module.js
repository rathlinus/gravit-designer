/**
 * Webpack Module #1587
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
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
    var i = require(15) /* module */,
      a = require(53) /* module */,
      r = require(1) /* module */,
      s = o(require(78) /* GDocumentEvent */),
      l = o(require(1330) /* module_1330 */),
      c = o(require(238) /* GMenu */),
      d = o(require(339) /* GMenu */),
      u = o(require(1331) /* GCutCopyAction */),
      p = o(require(877) /* GPasteAction */),
      g = o(require(1183) /* GPasteInPlaceAction */),
      h = o(require(1184) /* GPasteInsideAction */),
      f = o(require(875) /* GPasteStyleAction */),
      m = o(require(876) /* GPasteAndReplaceAction */),
      y = o(require(1332) /* GDeleteAction */),
      v = o(require(811) /* GGroupAction */),
      _ = o(require(870) /* GSplitAction */),
      b = o(require(1333) /* GSelectAllAction */),
      w = o(require(1334) /* GDeselectAllAction */),
      C = o(require(869) /* GArrangeAction */),
      x = o(require(1335) /* GToggleFullscreenAction */),
      S = o(require(810) /* GConvertToPathAction */),
      E = o(require(1336) /* GOpenQuickHelpScreenAction */),
      A = o(require(1337) /* module_1337 */),
      T = o(require(1590) /* module_1590 */),
      G = o(require(878) /* module_878 */),
      P = o(require(879) /* module_879 */);
    class D extends G.default {
      constructor(e) {
        super(e),
          this.addGesture(new P.default()),
          this.setDelayedTouchEventsEnabled(false);
      }
      _handleEvent(e) {
        e.cancelable && (e.preventDefault(), e.stopPropagation()),
          super._handleEvent(e);
      }
    }
    const L = {
        [i.GKey.Constant.LEFT]: 37,
        [i.GKey.Constant.UP]: 38,
        [i.GKey.Constant.RIGHT]: 39,
        [i.GKey.Constant.DOWN]: 40,
        [i.GKey.Constant.SHIFT]: 16,
        [i.GKey.Constant.CONTROL]: 17,
        [i.GKey.Constant.ALT_LEFT]: 18,
      },
      I = Object.values(L),
      k = (e, t) => {
        const require = gDesigner.getActiveDocument(),
          o = require && require.getActiveWindow(),
          i = o && o.getView(),
          a = i && i.getHtmlElement();
        a && a.dispatchEvent(new KeyboardEvent(e, { keyCode: t }));
      },
      O = (e) =>
        e === i.GKey.Constant.ALT_LEFT ||
        e === i.GKey.Constant.ALT_RIGHT ||
        e === i.GKey.Constant.SHIFT ||
        e === i.GKey.Constant.CONTROL,
      F = [
        i.GKey.Constant.UP,
        i.GKey.Constant.LEFT,
        i.GKey.Constant.RIGHT,
        i.GKey.Constant.DOWN,
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
        i.GPlatform.constructor.bypassKeyDownRestrictionByClassName(
          "g-virtual-key"
        ),
          this._htmlElement.gCollapsible();
        const exports = $("<div/>").addClass("container").appendTo(this._htmlElement),
          module = (e) => {
            const module = this._keyDownInveral[e];
            module && (clearInterval(module), delete this._keyDownInveral[e]),
              O(e) && i.GPlatform.releaseKey(e),
              k("keyup", L[e]);
          },
          require = (e) => {
            const module = this._keyDownInveral[e];
            module && clearInterval(module),
              ((e) => F.includes(e))(e) &&
                (this._keyDownInveral[e] = setInterval(() => {
                  k("keydown", L[e]);
                }, 100)),
              O(e) && i.GPlatform.holdKey(e),
              k("keydown", L[e]);
          },
          o = (e) => {
            let { key: o, icon: a, dblclick: r, actionClass: l } = e;
            const c = s({
              name: a ? null : i.GKey.toLocalizedShort(o, true),
              icon: a,
              actionClass: "g-virtual-key" + (l ? " " + l : ""),
              mousedown: (e) => {
                e.stopImmediatePropagation(), this._isHoldingKey(o) || require(o);
              },
              click: (e) => {
                e.stopImmediatePropagation(),
                  this._isHoldingKey(o) ||
                    (module(o), gDesigner.stats("virtualkey_assistantbar_click", o));
              },
              dblclick: r,
              mouseup: (e) => {
                e.stopImmediatePropagation(), this._isHoldingKey(o) || module(o);
              },
              touchstart: () => {
                this._isHoldingKey(o) || require(o);
              },
              touchend: () => {
                this._isHoldingKey(o) || module(o);
              },
              touchcancel: () => {
                this._isHoldingKey(o) || module(o);
              },
              active: () => !!this._keyState[L[o]] || this._isHoldingKey(o),
            });
            return new D(c[0]), c;
          },
          r = function (e) {
            let module =
              arguments.length > 1 && undefined !== arguments[1]
                ? arguments[1]
                : "";
            return e.reduce((e, t) => {
              let { icon: require, action: o, isEnabled: i } = t;
              const a = e.createAddItem(o);
              return (
                require && a.setIcon(require),
                i &&
                  a.addEventListener(d.default.UpdateEvent, () => {
                    a.setEnabled(i());
                  }),
                e
              );
            }, new c.default(null, "g-assistant-bar-menu" + (module ? " " + module : "")));
          },
          s = (e) => {
            let {
              action: module,
              name: require,
              menu: o,
              icon: i,
              click: a,
              dblclick: r,
              mousedown: s,
              mouseup: l,
              touchstart: c,
              touchmove: d,
              touchend: u,
              touchcancel: p,
              split: g = false,
              active: h,
              actionClass: f,
            } = e;
            const m = $("<div/>")
                .addClass("toolbar-button")
                .toggleClass("split", !!g),
              y = $("<button/>").addClass("action-button").appendTo(m);
            if (
              (f && y.addClass(f),
              h && (m.data("active", h), m.toggleClass("g-active", !!h())),
              module &&
                (m.data("action", module),
                i || (i = module.getIcon()),
                a ||
                  (a = () =>
                    gDesigner.executeAction(
                      module.getId(),
                      undefined,
                      "assistantbar"
                    ))),
              require && $("<span/>").text(require).appendTo(y),
              i && $("<span/>").addClass(i).appendTo(y),
              a && y.on("click", a),
              r && y.on("dblclick", r),
              s && m.on("mousedown", s),
              l && m.on("mouseup", l),
              c && m.on("touchstart", c),
              d && m.on("touchmove", d),
              u && m.on("touchend", u),
              p && m.on("touchcancel", p),
              o)
            ) {
              let e;
              (o.__which = "assistantbar"),
                (e = g
                  ? $("<button/>")
                      .addClass("dropdown-button")
                      .append(
                        $("<span></span>").addClass(
                          "gravit-icon-touch-arrow-up"
                        )
                      )
                      .appendTo(m)
                  : y.append(
                      $("<span></span>").addClass("gravit-icon-touch-arrow-up")
                    )),
                e.gMenuButton({ menu: o, touch: true });
            }
            return m;
          },
          l = $("<div/>").addClass("left-side").appendTo(exports),
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
                content: o({
                  key: i.GKey.Constant.SHIFT,
                  actionClass: "g-virtual-key-".concat(i.GKey.Constant.SHIFT),
                  dblclick: () =>
                    this._toggleModifierKey(i.GKey.Constant.SHIFT),
                }),
              },
              {
                width: "auto",
                content: s({
                  icon: "gravit-icon-touch-copy",
                  action: gDesigner.getAction(u.default.ID_COPY),
                }),
              },
              {
                width: "68px",
                content: s({
                  icon: "gravit-icon-touch-paste",
                  action: gDesigner.getAction(p.default.ID),
                  menu: r(
                    [
                      {
                        icon: "gravit-icon-touch-paste-in-place",
                        action: gDesigner.getAction(g.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-inside",
                        action: gDesigner.getAction(h.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-and-replace",
                        action: gDesigner.getAction(m.default.ID),
                      },
                      {
                        icon: "gravit-icon-touch-paste-style",
                        action: gDesigner.getAction(f.default.ID),
                      },
                    ],
                    "paste-menu"
                  ),
                  split: true,
                }),
              },
              {
                width: "auto",
                content: s({
                  icon: "gravit-icon-touch-trash-2",
                  action: gDesigner.getAction(y.default.ID),
                }),
              },
              {
                width: "auto",
                content: s({
                  icon: "gravit-icon-touch-selection",
                  click: () => {
                    const exports = gDesigner.getActiveDocument(),
                      module = exports && exports.getEditor();
                    if (module) {
                      module.getSelection() && module.getSelection().length > 0
                        ? gDesigner.executeAction(
                            w.default.ID,
                            undefined,
                            "assistantbar"
                          )
                        : gDesigner.executeAction(
                            b.default.ID,
                            undefined,
                            "assistantbar"
                          );
                    }
                  },
                }),
              },
              {
                width: "62px",
                content: s({
                  icon: "gravit-icon-touch-arrange-order",
                  menu: r(
                    Object.values(a.GEditor.ArrangeOrderType).map((e) => ({
                      icon: "gravit-icon-touch-arrange-" + e,
                      action: gDesigner.getAction(C.default.ID + "." + e),
                      isEnabled: () => this._isArrangeActionEnabled(e),
                    })),
                    "arrange-menu"
                  ),
                }),
              },
              {
                width: "auto",
                content: s({
                  icon: "gravit-icon-touch-fullscreen",
                  action: gDesigner.getAction(x.default.ID),
                  active: () =>
                    gDesigner.getAction(x.default.ID).isFullscreen(),
                }),
              },
            ],
          })
          .appendTo(l),
          $("<div/>")
            .gPropertyRow({
              height: "auto",
              columns: [
                {
                  width: "86px",
                  content: o({
                    key: i.GKey.Constant.CONTROL,
                    actionClass: "g-virtual-key-".concat(
                      i.GKey.Constant.CONTROL
                    ),
                    dblclick: () =>
                      this._toggleModifierKey(i.GKey.Constant.CONTROL),
                  }),
                },
                {
                  width: "114px",
                  content: o({
                    key: i.GKey.Constant.ALT_LEFT,
                    actionClass: "g-virtual-key-".concat(
                      i.GKey.Constant.ALT_LEFT
                    ),
                    dblclick: () =>
                      this._toggleModifierKey(i.GKey.Constant.ALT_LEFT),
                  }),
                },
                {
                  width: "auto",
                  content: s({
                    icon: "gravit-icon-touch-group",
                    action: gDesigner.getAction(v.default.ID),
                  }),
                },
                {
                  width: "auto",
                  content: s({
                    icon: "gravit-icon-touch-ungroup",
                    action: gDesigner.getAction(_.default.ID),
                  }),
                },
                {
                  width: "62px",
                  content: s({
                    icon: "gravit-icon-touch-convert-to-path",
                    action: gDesigner.getAction(S.default.ID),
                  }),
                },
                {
                  width: "auto",
                  content: s({
                    icon: "gravit-icon-touch-help",
                    click: () =>
                      gDesigner.executeAction(
                        E.default.ID,
                        undefined,
                        "assistantbar"
                      ),
                  }),
                },
              ],
            })
            .appendTo(l),
          $("<div/>")
            .gPropertyRow({
              height: "auto",
              columns: [
                {
                  width: "auto",
                  content: o({
                    key: i.GKey.Constant.UP,
                    icon: "gravit-icon-touch-arrow-key-up",
                  }),
                },
                {
                  width: "auto",
                  content: o({
                    key: i.GKey.Constant.DOWN,
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
                  content: o({
                    key: i.GKey.Constant.LEFT,
                    icon: "gravit-icon-touch-arrow-key-left",
                  }),
                },
                {
                  width: "auto",
                  content: o({
                    key: i.GKey.Constant.RIGHT,
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
        const module = !i.GPlatform.isHoldingKey(e);
        this._toggleKey(e, module),
          this._htmlElement
            .find(".g-virtual-key-".concat(e))
            .toggleClass("g-held", module),
          this._updateActions();
      }),
      (R.prototype._toggleKey = function (e, t) {
        t
          ? (i.GPlatform.holdKey(e), this._heldKeys.set(e, true))
          : (i.GPlatform.releaseKey(e), this._heldKeys.delete(e));
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
          gDesigner.addEventListener(s.default, this._documentEvent, this),
          gDesigner.addEventListener(l.default, this._fullScreenEvent, this),
          i.GPlatform.addEventListener(
            i.GModifiersChangedEvent,
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
          gDesigner.removeEventListener(s.default, this._documentEvent, this),
          gDesigner.removeEventListener(l.default, this._fullScreenEvent, this),
          i.GPlatform.removeEventListener(
            i.GModifiersChangedEvent,
            this._modifiersChangedEvent,
            this
          ),
          this._deactivateDocument(gDesigner.getActiveDocument()),
          i.GPlatform.releaseKey(i.GKey.Constant.ALT_LEFT),
          i.GPlatform.releaseKey(i.GKey.Constant.ALT_RIGHT),
          i.GPlatform.releaseKey(i.GKey.Constant.SHIFT),
          i.GPlatform.releaseKey(i.GKey.Constant.CONTROL),
          this._touchHandler.deactivate(this._htmlElement[0]),
          (this._heldKeys = null);
      }),
      (R.prototype._activateDocument = function (e) {
        e &&
          e
            .getEditor()
            .addEventListener(
              a.GEditor.SelectionChangedEvent,
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
              a.GEditor.SelectionChangedEvent,
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
            case s.default.Type.Activated:
              this._activateDocument(module), this._updateActions();
              break;
            case s.default.Type.Deactivated:
              this._deactivateDocument(module), this._updateActions();
              break;
            case s.default.Type.Modified:
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
        if (!gDesigner.getAction(C.default.ID + "." + e).isEnabled()) return false;
        const module = this._document
          ? this._document.getEditor().getIndividualSelection()
          : null;
        if (!module) return false;
        if (module.length > 1) return true;
        const require = module[0],
          o = require.getParent();
        switch (e) {
          case a.GEditor.ArrangeOrderType.SendToFront:
            if (require.getNext()) {
              let e = require.getNext(),
                t = null;
              for (; !t && e; )
                e instanceof r.GElement && (t = e), (e = e.getNext());
              return !!t && a.GEditor.validateBlockInsertion(o, require);
            }
            return false;
          case a.GEditor.ArrangeOrderType.BringForward: {
            let e = require.getNext();
            if (e) {
              let t = null;
              for (; !t && e; )
                e instanceof r.GElement &&
                  (e.hasFlag(r.GNode.Flag.Selected) || (t = e)),
                  (e = e.getNext());
              if (null !== t) {
                const e = t.getNext();
                return a.GEditor.validateBlockInsertion(o, require, e);
              }
            }
            return false;
          }
          case a.GEditor.ArrangeOrderType.SendBackward: {
            let e = require.getPrevious();
            if (null !== e) {
              let t = null;
              for (; !t && e; )
                e instanceof r.GElement &&
                  (e.hasFlag(r.GNode.Flag.Selected) ||
                    (a.GEditor.validateBlockInsertion(o, require, e) && (t = e))),
                  (e = e.getPrevious());
              return !!t;
            }
            return false;
          }
          case a.GEditor.ArrangeOrderType.SendToBack:
            if (null !== require.getPrevious()) {
              let e = o.getFirstChild(),
                t = null;
              for (; !t && e && e !== require; )
                e instanceof r.GElement &&
                  a.GEditor.validateBlockInsertion(o, require, e) &&
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