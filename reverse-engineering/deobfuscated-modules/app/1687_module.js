/**
 * Webpack Module #1687
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */;
    var GCore = require(1) /* GCore */,
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */);
    const { DateAPI: r, DESIGNER: { TITLE: s } = {} } = require(10) /* AppSettings */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      c = r.minutesToMilliseconds(1),
      d = 0.8,
      u = r.minutesToMilliseconds(30);
    exports.exports = class {
      constructor() {
        let {
          memoryCheckInterval: exports = c,
          memoryUsageThreshold: module = d,
          autostartTime: require = u,
        } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        (this._memoryCheckInterval = Math.max(exports, r.minutesToMilliseconds(1))),
          (this._memoryUsageThreshold = module),
          (this._autostartTime = require);
      }
      start() {
        this.stop(),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
          this._memoryUsageThreshold <= 0 ||
            (gContainer.isMemoryInfoAvailable() &&
              (this._memoryCheckIntervalId = setInterval(
                this._checkMemory.bind(this),
                this._memoryCheckInterval
              )));
      }
      stop() {
        this._autostartScheduleId &&
          (clearTimeout(this._autostartScheduleId),
          delete this._autostartScheduleId),
          this._memoryCheckIntervalId &&
            (clearInterval(this._memoryCheckIntervalId),
            delete this._memoryCheckIntervalId),
          gDesigner.removeEventListener(GDocumentEvent, this._documentEvent, this);
      }
      _checkMemory() {
        this._calculateThreshold() >= this._memoryUsageThreshold &&
          (this._openWarningDialog(), this.stop(), this._scheduleStartup());
      }
      _calculateThreshold() {
        const exports = gContainer.getMemoryInfo();
        return exports ? exports.heapSizeInUse / exports.heapSizeLimit : 0;
      }
      _scheduleStartup() {
        this._autostartTime > 0 &&
          (this._autostartScheduleId = setTimeout(() => {
            this.start();
          }, this._autostartTime));
      }
      _openWarningDialog() {
        this._dialog ||
          (gDesigner.stats("memorywarningdialog_open"),
          (this._dialog = GSystemDialog.default.custom({
            closeCallback: () => {
              delete this._dialog;
            },
            className: "g-memory-warn-dialog",
            closeable: false,
            icon: "info",
            title: GCore.GLocale.get(
              new GCore.GLocaleKey("GMemoryManager", "text.title")
            ).replace("%app", s),
            subtitle: GCore.GLocale.get(
              new GCore.GLocaleKey("GMemoryManager", "text.subtitle")
            ),
            buttons: [
              {
                label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")),
                onclick: (e) => {
                  e.gDialog("close");
                },
                highlighted: true,
              },
            ],
          })));
      }
      _documentEvent(e) {
        e.type === GDocumentEvent.Type.Removed &&
          (gDesigner.hasDocuments() || GCore.GRendererCtx.freeMemory());
      }
    };
  }