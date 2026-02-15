/**
 * Webpack Module #1331
 * Type: class
 * Name: GCutCopyAction
 */

function (exports, module, require) {
  'use strict';
  (require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34) /* polyfill_String_replace */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    GEditor = require(15) /* GEditor */,
    AppSettings = require(10) /* AppSettings */,
    CollaborationMergeUtils = require(40);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    d = require(607) /* module_607 */,
    GSystemDialog = require(44);
  class p extends GAction {
    constructor(e) {
      super();
      ((this._isCut = e),
      document.addEventListener(
      this._isCut ? 'cut' : 'copy',
      this._documentCutOrCopyEvent.bind(this)
      ),
      document.addEventListener(
      this._isCut ? 'beforecut' : 'beforecopy',
      this._documentBeforeCutOrCopyEvent.bind(this)
      ),
      window.hasOwnProperty('ClipboardEvent') ||
      (this._cutCopyArea = $('<textArea></textArea>')
      .css({ position: 'absolute', top: '-9999px', opacity: 0 })
      .prop('tabindex', -1)
      .appendTo($('body'))));
    }

    _cutCopyArea = null;

    getId() {
      return this._isCut ? p.ID_CUT : p.ID_COPY;
    }

    getTitle() {
      return new GCore.GLocaleKey('GCutCopyAction', 'title.' + (this._isCut ? 'cut' : 'copy'));
    }

    getIcon() {
      return 'gravit-icon-' + (this._isCut ? 'cut' : 'copy');
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'ccp';
    }

    getShortcut() {
      return this._isCut ? [GEditor.GKey.Constant.META, 'X'] : [GEditor.GKey.Constant.META, 'C'];
    }

    isEnabled() {
      return (
        gDesigner.getActiveDocument() && !!gDesigner.getActiveDocument().getEditor().getSelection()
      );
    }

    executeFromShortcut() {
      return (
        this._isEditableElementFocused() || (this._cutCopyArea && this._cutCopyArea.focus()),
        false
      );
    }

    execute() {
      this._documentCutOrCopyEvent(null);
    }

    _documentCutOrCopyEvent(e) {
      if (this._isBrowserHandleCopy(e)) return;
      e && e.preventDefault();
      const module = gDesigner.getActiveDocument(),
        require = module && module.getEditor();
      if (this._isMouseOverContextStyleCopy()) {
        const t = this._getActiveStyleMouseOverContextBased();
        (this._copyStyleToClipboard(t, e), this._notifyMouseOverContextOfSuccessfulCopy());
      } else {
        let t = require && require.getSelection();
        this._copySelectionToClipboard(t, e);
      }
      (this._isCut && require && this._deleteCutSelection(),
        this._cutCopyArea && this._focusOnActiveArea());
    }

    _documentBeforeCutOrCopyEvent(e) {
      (document.activeElement &&
        $(document.activeElement).is(':editable') &&
        !gDesigner.isGravitIME(document.activeElement)) ||
        e.preventDefault();
    }

    _focusOnActiveArea() {
      setTimeout(function () {
        const exports = gDesigner.getWindows();
        exports && exports.getActiveWindow() && exports.getActiveWindow().getView().focus();
      }, 1);
    }

    _filterOutSelectionWithSameParent() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
      exports = GCore.GNode.order(exports.slice());
      let module = [];
      const require = function (e) {
        let require = false;
        return (
          module.forEach((t) => {
            e.findParent((e) => {
              require = e === t;
            });
          }),
          require
        );
      };
      for (let GCore = 0; GCore < exports.length; ++GCore)
        require(exports[GCore]) || module.push(exports[GCore]);
      return module;
    }

    _isEditableElementFocused() {
      return !(
        !document.activeElement ||
        !$(document.activeElement).is(':editable') ||
        gDesigner.isGravitIME(document.activeElement)
      );
    }

    _isBrowserHandleCopy(e) {
      return (
        (this._isEditableElementFocused() || (e && $(e.target).is(':textSelectable'))) &&
        !$(document.activeElement).is('button') &&
        (!this._cutCopyArea || document.activeElement !== this._cutCopyArea[0])
      );
    }

    _getActiveStyleMouseOverContextBased() {
      const exports = gDesigner.getActiveDocument(),
        module = gDesigner.getMouseOverContext(),
        require = exports.getActiveStylesList();
      let GCore = null;
      return (
        module.context === d.FillPropertiesPanel
          ? (GCore = require.Fill)
          : module.context === d.BorderPropertiesPanel
            ? (GCore = require.Border)
            : module.context === d.EffectPropertiesPanel && (GCore = require.Effect),
        GCore
      );
    }

    _serializeData(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      return GCore.GNode.serialize(e, {
        exceptions: module,
        copy: true,
        copyIgnoreProperties: GTools.GEditorOptions.propertiesExcludedFromCopying,
      });
    }

    _copyStyleToClipboard(e, t) {
      const require = this._serializeData([e]),
        GTools =
          '<gravit mimeType="' +
          GCore.GNode.MIME_TYPE +
          '">' +
          $('<div/>').text(require).html() +
          '</gravit>';
      t
        ? t.clipboardData.setData('text/xml', GTools)
        : gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, require);
    }

    _isRestricted() {
      return (
        gDesigner.getActiveDocument().isCommercialProductFile() ||
        !gDesigner.getApplicationManager().isCopyPasteEnabled()
      );
    }

    _filterSupportedCopyNodes() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
      return exports.filter(function (e) {
        return e instanceof GCore.GItem || e instanceof GCore.GLayer;
      });
    }

    _parseTextSelectionToEventClipboard(e, t) {
      for (let require = 0; require < e.length; require++)
        if (e[require] instanceof GCore.GText) {
          let GCore,
            GEditor = e[require];
          const AppSettings = GEditor.getTLCore();
          if (AppSettings) {
            const t = GTools.GElementEditor.getEditor(GEditor);
            GCore =
              t && 1 === e.length && t.isInlineEdit()
                ? AppSettings.selectedRange().plainText()
                : AppSettings.getDocumentRange().plainText();
          } else GCore = GEditor.getContent();
          t.clipboardData.setData('text/plain', GCore);
          break;
        }
    }

    _buildExceptionsForSelection() {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [],
        module = [];
      for (let require = 0; require < exports.length; require++)
        module = module.concat(
          gDesigner
            .getActiveDocument()
            .getEditor()
            .getLinkedElementsInSelection(exports[require], exports)
        );
      return (
        AppSettings.HAS_ANNOTATIONS &&
          (module = module.concat(
            gDesigner.getActiveDocument().getEditor().getAnnotationsExceptions(exports)
          )),
        module
      );
    }

    _extractStylesFromSelection(e) {
      const module = [];
      for (let require = 0; require < e.length; require++) {
        const GCore = e[require];
        GCore.hasProperty('sref') &&
          GCore.getReferencedStyle() &&
          module.push(GCore.getReferencedStyle());
      }
      return module;
    }

    _deleteCutSelection() {
      let exports = GCore.GLocale.get(new GCore.GLocaleKey('text.cut-selection'));
      const module = gDesigner.getActiveDocument(),
        require = module && module.getEditor(),
        GTools = gDesigner.getMouseOverContext(),
        GEditor = module.getActiveStylesList();
      require.beginTransaction();
      try {
        if (GTools.context && (GEditor.Fill || GEditor.Border || GEditor.Effect)) {
          let t = null,
            AppSettings = null;
          const MenuItemBuilder = require.getSelection();
          (GTools.context === d.FillPropertiesPanel
            ? ((t = GEditor.Fill), (AppSettings = 'fill'))
            : GTools.context === d.BorderPropertiesPanel
              ? ((t = GEditor.Border), (AppSettings = 'border'))
              : GTools.context === d.EffectPropertiesPanel &&
                ((t = GEditor.Effect), (AppSettings = 'effect')),
            (0, CollaborationMergeUtils.iterateEqualStyleLayers)(
              AppSettings,
              t,
              MenuItemBuilder,
              function (e) {
                e.getParent().removeChild(e);
              }
            ),
            (exports = GCore.GLocale.get(this.getTitle())));
        } else require.deleteSelection(true);
      } finally {
        require.commitTransaction(exports);
      }
    }

    _copySelectionToClipboard(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      const require = gDesigner.getActiveDocument();
      if (
        ((e = this._filterOutSelectionWithSameParent(e)),
        (e = this._filterSupportedCopyNodes(e)) && e.length)
      ) {
        const GTools = this._buildExceptionsForSelection(e),
          GEditor = this._extractStylesFromSelection(e);
        (e.push.apply(e, GEditor), this._isRestricted() && (e = require.restrictElements(e)));
        let AppSettings = this._serializeData(e, GTools);
        gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, AppSettings);
        const CollaborationMergeUtils = 1 === e.length && e[0];
        if (
          !(
            CollaborationMergeUtils &&
            CollaborationMergeUtils.hasMixin(GCore.GNode.Properties) &&
            CollaborationMergeUtils.getProperty('collab')
          )
        ) {
          const GTools =
            '<gravit mimeType="' +
            GCore.GNode.MIME_TYPE +
            '" restricted="' +
            (!!this._isRestricted() && require.getStorageItem().getId()) +
            '">' +
            $('<div/>').text(AppSettings).html() +
            '</gravit>';
          module
            ? (module.clipboardData.setData('text/xml', GTools),
              this._parseTextSelectionToEventClipboard(e, module))
            : gContainer.copyToClipboard(GTools).catch(() => {
                this._showError();
              });
        }
      }
    }

    _isMouseOverContextStyleCopy() {
      const exports = gDesigner.getActiveDocument(),
        module = gDesigner.getMouseOverContext(),
        require = exports.getActiveStylesList();
      return module.context && (require.Fill || require.Border || require.Effect);
    }

    _notifyMouseOverContextOfSuccessfulCopy() {
      const exports = gDesigner.getMouseOverContext();
      exports.contextCallback && exports.contextCallback(exports.prevEvt);
    }

    _showError() {
      const exports = this._isCut
        ? GCore.GLocale.get(new GCore.GLocaleKey('GCutCopyAction', 'title.cut'))
        : GCore.GLocale.get(new GCore.GLocaleKey('GCutCopyAction', 'title.copy'));
      GSystemDialog.alert(
        GCore.GLocale.get(new GCore.GLocaleKey('GCutCopyAction', 'text.security-issues'))
          .replace('%cutcopy', exports)
          .replace('%shortcut', GEditor.GKey.shortcutToString(this.getShortcut()))
      );
    }

    toString() {
      return '[Object GCutCopyAction]';
    }

    static ID_COPY = 'edit.copy';

    static ID_CUT = 'edit.cut';

  }
  exports.exports = p;
}