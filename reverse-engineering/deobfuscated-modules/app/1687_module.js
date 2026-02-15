/**
 * Webpack Module #1687
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(20) /* module_20 */, require(34) /* module_34 */;
    var i = require(1) /* module */,
      a = o(require(44) /* GSystemDialog */);
    const { DateAPI: r, DESIGNER: { TITLE: s } = {} } = require(10) /* module_10 */,
      l = require(78) /* GDocumentEvent */,
      c = r.minutesToMilliseconds(1),
      d = 0.8,
      u = r.minutesToMilliseconds(30);
    exports.exports = class {
      function Object() { [native code] }() {
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
          gDesigner.addEventListener(l, this._documentEvent, this),
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
          gDesigner.removeEventListener(l, this._documentEvent, this);
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
          (this._dialog = a.default.custom({
            closeCallback: () => {
              delete this._dialog;
            },
            className: "g-memory-warn-dialog",
            closeable: false,
            icon: "info",
            title: i.GLocale.get(
              new i.GLocaleKey("GMemoryManager", "text.title")
            ).replace("%app", s),
            subtitle: i.GLocale.get(
              new i.GLocaleKey("GMemoryManager", "text.subtitle")
            ),
            buttons: [
              {
                label: i.GLocale.get(new i.GLocaleKey("GLocale", "ok")),
                onclick: (e) => {
                  e.gDialog("close");
                },
                highlighted: true,
              },
            ],
          })));
      }
      _documentEvent(e) {
        e.type === l.Type.Removed &&
          (gDesigner.hasDocuments() || i.GRendererCtx.freeMemory());
      }
    };
  }