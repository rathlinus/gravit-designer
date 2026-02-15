/**
 * Webpack Module #1617
 * Type: class
 * Name: GPlayAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(20) /* polyfill_RegExp_exec */, require(107) /* polyfill_RegExp_test */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* module */,
      GEditor = require(15) /* module */,
      r = _interopRequireDefault(require(1618) /* module_1618 */),
      GContainer = _interopRequireDefault(require(85) /* GContainer */),
      GAction = _interopRequireDefault(require(31) /* GAction */),
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
      u = _interopRequireDefault(require(443) /* module_443 */),
      GChangeActivePageAction = _interopRequireDefault(require(1341) /* GChangeActivePageAction */);
    const { isExecutingOnMSTeamsSync: g } = u.default;
    class h extends GAction.default {
      constructor() {
        super(),
          (this._scene = null),
          (this._isInPlayMode = null),
          (this._shouldExitFullScreen = null),
          (this._isErrorMessageDisplaying = false),
          (this._timeoutId = null),
          (this._isLoading = false),
          (this._keyDownHandlerBind = this._keyDownHandler.bind(this)),
          (this._fullScreenRequestDeniedHandlerBind =
            this._fullScreenRequestDeniedHandler.bind(this)),
          (this._browserFullScreenModeChangeHandlerBind =
            this._browserFullScreenModeChangeHandler.bind(this));
      }
      getId() {
        return h.ID;
      }
      getTitle() {
        return h.TITLE;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return [
          GEditor.GKey.Constant.META,
          GEditor.GKey.Constant.OPTION,
          GEditor.GKey.Constant.ENTER,
        ];
      }
      isEnabled() {
        return (
          !!gDesigner.getActiveDocument() &&
          r.default.enabled &&
          !this._isErrorMessageDisplaying &&
          !this._isLoading
        );
      }
      isVisible() {
        return !g();
      }
      execute() {
        if (this._isInPlayMode) return this._exitPlayMode();
        if (((this._scene = this._getScene()), this._scene))
          if (
            (this._setIsLoading(true),
            (this._widget = new GEditor.GSceneWidget(this._scene)),
            (this._widget.getViewConfiguration().paintMode =
              GCore.GScenePaintConfiguration.PaintMode.Output),
            (this._overlay = $("<div></div>").css({
              position: "absolute",
              zIndex: 9999,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              background: "black",
            })),
            this._overlay.append(this._widget._htmlElement).appendTo($("body")),
            document.addEventListener("keydown", this._keyDownHandlerBind, true),
            window.addEventListener(
              "unhandledrejection",
              this._fullScreenRequestDeniedHandlerBind
            ),
            gContainer.getRuntime() === GContainer.default.Runtime.Electron)
          ) {
            const e = require(881) /* module_881 */.remote.getCurrentWindow();
            e.once("leave-full-screen", this._exitPlayMode.bind(this)),
              e.isFullScreen()
                ? (this._setShouldExitFullScreen(false), this._enterPlayMode())
                : (this._setShouldExitFullScreen(true),
                  e.once("enter-full-screen", () => {
                    this._timeoutId = setTimeout(
                      this._enterPlayMode.bind(this),
                      250
                    );
                  }),
                  e.setFullScreen(true));
          } else
            this._setShouldExitFullScreen(true),
              document.addEventListener(
                r.default.raw.fullscreenchange,
                this._browserFullScreenModeChangeHandlerBind
              ),
              r.default.request(this._overlay[0]);
      }
      changeActivePage(e, t) {
        const require = gDesigner
          .getAction("".concat(GChangeActivePageAction.default.ID, ".").concat(t))
          .getNextPage(e);
        require ? e.setActivePage(require) : t === GChangeActivePageAction.default.Type.Next && r.default.exit();
      }
      _getScene() {
        gDesigner.toggleLoading(true);
        try {
          return this._cloneActiveScene();
        } catch (e) {
          return null;
        } finally {
          gDesigner.toggleLoading(false);
        }
      }
      _cloneActiveScene() {
        const exports = gDesigner.getActiveDocument(),
          module = exports && exports.getScene();
        return module ? module.clone(null, module.getWorkspace()) : null;
      }
      _keyDownHandler(e) {
        let module = true;
        switch (GEditor.GKey.translateCode(e.code)) {
          case GEditor.GKey.Constant.DOWN:
          case GEditor.GKey.Constant.PAGE_DOWN:
          case GEditor.GKey.Constant.RIGHT:
          case GEditor.GKey.Constant.SPACE:
            this.changeActivePage(this._scene, GChangeActivePageAction.default.Type.Next);
            break;
          case GEditor.GKey.Constant.UP:
          case GEditor.GKey.Constant.PAGE_UP:
          case GEditor.GKey.Constant.LEFT:
            this.changeActivePage(this._scene, GChangeActivePageAction.default.Type.Previous);
            break;
          case GEditor.GKey.Constant.ESC:
            gContainer.getRuntime() === GContainer.default.Runtime.Electron &&
              this._exitPlayMode();
            break;
          default:
            module = false;
        }
        module && e.stopPropagation();
      }
      _fullScreenRequestDeniedHandler(e) {
        "Fullscreen request denied" === e.reason.message &&
          (this._exitPlayMode(),
          GSystemDialog.default.custom({
            title: GCore.GLocale.getValue(
              "GCommonNames",
              "text.something-wrong.try-again"
            ),
            openCallback: () => this._setIsErrorMessageDisplaying(true),
            closeCallback: () => this._setIsErrorMessageDisplaying(false),
          }));
      }
      _enterPlayMode() {
        this._setIsInPlayMode(true),
          this._widget.resize(
            this._overlay.outerWidth(),
            this._overlay.outerHeight()
          );
        const exports = this._scene.getActivePage().getPaintBBox();
        if (
          (this._widget.zoomAll(exports, false),
          gContainer.getRuntime() === GContainer.default.Runtime.Browser ||
            gContainer.getRuntime() === GContainer.default.Runtime.PWA)
        ) {
          /^((?!chrome|android)(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*[s\u017F]afari/i.test(
            navigator.userAgent
          ) && this._createExitFullScreenHint().appendTo(this._overlay);
        }
        this._setIsLoading(false);
      }
      _createExitFullScreenHint() {
        return $("<div/>")
          .addClass("g-exit-full-screen")
          .on("webkitAnimationEnd", (e) => {
            $(e.target).closest(".g-exit-full-screen").remove();
          })
          .append(
            $("<div/>").html(
              GCore.GLocale.getValue(
                "GPlayAction",
                "text.exit-full-screen"
              ).replace("%key", () =>
                $("<span/>")
                  .addClass("highlight")
                  .text(GCore.GLocale.getValue("GPlayAction", "text.esc"))
                  .prop("outerHTML")
              )
            )
          );
      }
      _exitPlayMode() {
        this._timeoutId && clearTimeout(this._timeoutId),
          this._shouldExitFullScreen && this._exitFullScreen(),
          this._overlay.remove(),
          this._widget.release(),
          document.removeEventListener("keydown", this._keyDownHandlerBind, true),
          document.removeEventListener(
            r.default.raw.fullscreenchange,
            this._browserFullScreenModeChangeHandlerBind
          ),
          window.removeEventListener(
            "unhandledrejection",
            this._fullScreenRequestDeniedHandlerBind
          ),
          this._setIsInPlayMode(false),
          this._setIsLoading(false);
      }
      _browserFullScreenModeChangeHandler() {
        r.default.isFullscreen ? this._enterPlayMode() : this._exitPlayMode();
      }
      _exitFullScreen() {
        if (gContainer.getRuntime() === GContainer.default.Runtime.Electron) {
          require(881) /* module_881 */.remote.getCurrentWindow().setFullScreen(false);
        } else r.default.exit();
      }
      _setIsInPlayMode(e) {
        this._isInPlayMode = e;
      }
      _setIsLoading(e) {
        this._isLoading = e;
      }
      _setShouldExitFullScreen(e) {
        this._shouldExitFullScreen = e;
      }
      _setIsErrorMessageDisplaying(e) {
        this._isErrorMessageDisplaying = e;
      }
      toString() {
        return "[Object GPlayAction]";
      }
    }
    (h.ID = "view.play"),
      (h.TITLE = new GCore.GLocaleKey("GPlayAction", "title")),
      (exports.exports = h);
  }