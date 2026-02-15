/**
 * Webpack Module #1255
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(20) /* polyfill_RegExp_exec */, require(34)) /* polyfill_String_replace */;
  var GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */),
    a = _interopRequireDefault(require(86) /* module_86 */),
    GFitAllAction = _interopRequireDefault(require(449) /* GFitAllAction */),
    GContainer = _interopRequireDefault(require(85) /* GContainer */),
    l = _interopRequireDefault(require(237) /* Item */),
    GCore = require(1); /* GCore */
  exports.exports = class {
    static handleOpenFileRequest(e, t) {
      gContainer.openStorageFile(e, t, function (n) {
        let _interopRequireDefault =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const d = t.getType();
        function u(t) {
          const n = (t) => {
            if (t.type === GDocumentEvent.default.Type.Activated && t.document === e) {
              let e = t.document.getStatus();
              (e === a.default.LoadFailed ||
                e === a.default.LoadCancelled ||
                gDesigner.executeAction(GFitAllAction.default.ID, undefined, undefined, true),
                gDesigner.removeEventListener(GDocumentEvent.default, n));
            }
          };
          if (
            (d !== GContainer.default.OpenFileRequest.Type.Preset &&
              gDesigner.addEventListener(GDocumentEvent.default, n),
            t instanceof l.default.Item)
          ) {
            if (
              (e.setStorageItem(t),
              e.setIsShared(true),
              e.load(null, _interopRequireDefault && _interopRequireDefault.loadingData),
              gDesigner.trigger(
                new GDocumentEvent.default(GDocumentEvent.default.Type.Modified, e)
              ),
              d === GContainer.default.OpenFileRequest.Type.Template)
            ) {
              e.setDocumentFromTemplate(true);
              let t = _interopRequireDefault.category,
                n = t && t.split('.');
              n.length > 1 && (t = n.splice(1).join('.'));
              let GDocumentEvent = t.toLowerCase().replace(/\./g, '-');
              gDesigner.stats(
                'directlink_template_'.concat(GDocumentEvent),
                ''
                  .concat(_interopRequireDefault.file.name, ' [')
                  .concat(_interopRequireDefault.content.id, ']')
              );
            } else if (d === GContainer.default.OpenFileRequest.Type.Preset) {
              e.setDocumentFromTemplate(true);
              let t = _interopRequireDefault.preset.presetCategory
                .toLowerCase()
                .replace(
                  /[\t-\r \/\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,
                  '-'
                );
              gDesigner.stats(
                'directlink_preset_'.concat(t),
                _interopRequireDefault.preset.presetLayout.name
              );
            }
          } else if (t && t.presetLayout) {
            let n = gDesigner.createScene(),
              {
                unit: _interopRequireDefault,
                dpi: GDocumentEvent,
                width: a,
                height: GFitAllAction,
              } = t.presetLayout,
              GContainer = t.presetCategory
                .toLowerCase()
                .replace(
                  /[\t-\r \/\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,
                  '-'
                );
            (n.setProperties(
              ['ut', 'dpi'],
              [_interopRequireDefault, GDocumentEvent || GCore.GLength.DPI]
            ),
              n
                .getActivePage()
                .setProperties(
                  ['bck', 'w', 'h'],
                  [
                    GCore.GRGBColor.WHITE,
                    new GCore.GLength(a, _interopRequireDefault).toPoint(),
                    new GCore.GLength(GFitAllAction, _interopRequireDefault).toPoint(),
                  ]
                ),
              e.setTitle(t.presetLayout.id),
              e.setScene(n),
              e.setDocumentFromTemplate(true),
              e.setIsShared(true),
              gDesigner.stats('directlink_preset_'.concat(GContainer), t.presetLayout.name));
          }
        }
        return (u(n), e);
      });
    }
  };
}
