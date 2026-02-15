/**
 * Webpack Module #1331
 * Type: class
 * Name: GCutCopyAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GCore = require(1) /* module */,
      GTools = require(53) /* module */,
      GEditor = require(15) /* module */,
      AppSettings = require(10) /* AppSettings */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      d = require(607) /* module_607 */,
      GSystemDialog = require(44) /* GSystemDialog */;
    function p(e) {
      (this._isCut = e),
        document.addEventListener(
          this._isCut ? "cut" : "copy",
          this._documentCutOrCopyEvent.bind(this)
        ),
        document.addEventListener(
          this._isCut ? "beforecut" : "beforecopy",
          this._documentBeforeCutOrCopyEvent.bind(this)
        ),
        window.hasOwnProperty("ClipboardEvent") ||
          (this._cutCopyArea = $("<textArea></textArea>")
            .css({ position: "absolute", top: "-9999px", opacity: 0 })
            .prop("tabindex", -1)
            .appendTo($("body")));
    }
    GCore.GObject.inherit(p, GAction),
      (p.ID_COPY = "edit.copy"),
      (p.ID_CUT = "edit.cut"),
      (p.prototype._cutCopyArea = null),
      (p.prototype.getId = function () {
        return this._isCut ? p.ID_CUT : p.ID_COPY;
      }),
      (p.prototype.getTitle = function () {
        return new GCore.GLocaleKey(
          "GCutCopyAction",
          "title." + (this._isCut ? "cut" : "copy")
        );
      }),
      (p.prototype.getIcon = function () {
        return "gravit-icon-" + (this._isCut ? "cut" : "copy");
      }),
      (p.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_EDIT;
      }),
      (p.prototype.getGroup = function () {
        return "ccp";
      }),
      (p.prototype.getShortcut = function () {
        return this._isCut
          ? [GEditor.GKey.Constant.META, "X"]
          : [GEditor.GKey.Constant.META, "C"];
      }),
      (p.prototype.isEnabled = function () {
        return (
          gDesigner.getActiveDocument() &&
          !!gDesigner.getActiveDocument().getEditor().getSelection()
        );
      }),
      (p.prototype.executeFromShortcut = function () {
        return (
          this._isEditableElementFocused() ||
            (this._cutCopyArea && this._cutCopyArea.focus()),
          false
        );
      }),
      (p.prototype.execute = function () {
        this._documentCutOrCopyEvent(null);
      }),
      (p.prototype._documentCutOrCopyEvent = function (e) {
        if (this._isBrowserHandleCopy(e)) return;
        e && e.preventDefault();
        const module = gDesigner.getActiveDocument(),
          require = module && module.getEditor();
        if (this._isMouseOverContextStyleCopy()) {
          const t = this._getActiveStyleMouseOverContextBased();
          this._copyStyleToClipboard(t, e),
            this._notifyMouseOverContextOfSuccessfulCopy();
        } else {
          let t = require && require.getSelection();
          this._copySelectionToClipboard(t, e);
        }
        this._isCut && require && this._deleteCutSelection(),
          this._cutCopyArea && this._focusOnActiveArea();
      }),
      (p.prototype._documentBeforeCutOrCopyEvent = function (e) {
        (document.activeElement &&
          $(document.activeElement).is(":editable") &&
          !gDesigner.isGravitIME(document.activeElement)) ||
          e.preventDefault();
      }),
      (p.prototype._focusOnActiveArea = function () {
        setTimeout(function () {
          const exports = gDesigner.getWindows();
          exports && exports.getActiveWindow() && exports.getActiveWindow().getView().focus();
        }, 1);
      }),
      (p.prototype._filterOutSelectionWithSameParent = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
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
        for (let GCore = 0; GCore < exports.length; ++GCore) require(exports[GCore]) || module.push(exports[GCore]);
        return module;
      }),
      (p.prototype._isEditableElementFocused = function () {
        return !(
          !document.activeElement ||
          !$(document.activeElement).is(":editable") ||
          gDesigner.isGravitIME(document.activeElement)
        );
      }),
      (p.prototype._isBrowserHandleCopy = function (e) {
        return (
          (this._isEditableElementFocused() ||
            (e && $(e.target).is(":textSelectable"))) &&
          !$(document.activeElement).is("button") &&
          (!this._cutCopyArea ||
            document.activeElement !== this._cutCopyArea[0])
        );
      }),
      (p.prototype._getActiveStyleMouseOverContextBased = function () {
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
      }),
      (p.prototype._serializeData = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        return GCore.GNode.serialize(e, {
          exceptions: module,
          copy: true,
          copyIgnoreProperties: GTools.GEditorOptions.propertiesExcludedFromCopying,
        });
      }),
      (p.prototype._copyStyleToClipboard = function (e, t) {
        const require = this._serializeData([e]),
          GTools =
            '<gravit mimeType="' +
            GCore.GNode.MIME_TYPE +
            '">' +
            $("<div/>").text(require).html() +
            "</gravit>";
        t
          ? t.clipboardData.setData("text/xml", GTools)
          : gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, require);
      }),
      (p.prototype._isRestricted = function () {
        return (
          gDesigner.getActiveDocument().isCommercialProductFile() ||
          !gDesigner.getApplicationManager().isCopyPasteEnabled()
        );
      }),
      (p.prototype._filterSupportedCopyNodes = function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
        return exports.filter(function (e) {
          return e instanceof GCore.GItem || e instanceof GCore.GLayer;
        });
      }),
      (p.prototype._parseTextSelectionToEventClipboard = function (e, t) {
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
            t.clipboardData.setData("text/plain", GCore);
            break;
          }
      }),
      (p.prototype._buildExceptionsForSelection = function () {
        let exports =
            arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [],
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
              gDesigner
                .getActiveDocument()
                .getEditor()
                .getAnnotationsExceptions(exports)
            )),
          module
        );
      }),
      (p.prototype._extractStylesFromSelection = function (e) {
        const module = [];
        for (let require = 0; require < e.length; require++) {
          const GCore = e[require];
          GCore.hasProperty("sref") &&
            GCore.getReferencedStyle() &&
            module.push(GCore.getReferencedStyle());
        }
        return module;
      }),
      (p.prototype._deleteCutSelection = function () {
        let exports = GCore.GLocale.get(new GCore.GLocaleKey("text.cut-selection"));
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
            GTools.context === d.FillPropertiesPanel
              ? ((t = GEditor.Fill), (AppSettings = "fill"))
              : GTools.context === d.BorderPropertiesPanel
              ? ((t = GEditor.Border), (AppSettings = "border"))
              : GTools.context === d.EffectPropertiesPanel &&
                ((t = GEditor.Effect), (AppSettings = "effect")),
              (0, CollaborationMergeUtils.iterateEqualStyleLayers)(AppSettings, t, MenuItemBuilder, function (e) {
                e.getParent().removeChild(e);
              }),
              (exports = GCore.GLocale.get(this.getTitle()));
          } else require.deleteSelection(true);
        } finally {
          require.commitTransaction(exports);
        }
      }),
      (p.prototype._copySelectionToClipboard = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        const require = gDesigner.getActiveDocument();
        if (
          ((e = this._filterOutSelectionWithSameParent(e)),
          (e = this._filterSupportedCopyNodes(e)) && e.length)
        ) {
          const GTools = this._buildExceptionsForSelection(e),
            GEditor = this._extractStylesFromSelection(e);
          e.push.apply(e, GEditor),
            this._isRestricted() && (e = require.restrictElements(e));
          let AppSettings = this._serializeData(e, GTools);
          gDesigner.setClipboardContent(GCore.GNode.MIME_TYPE, AppSettings);
          const CollaborationMergeUtils = 1 === e.length && e[0];
          if (
            !(CollaborationMergeUtils && CollaborationMergeUtils.hasMixin(GCore.GNode.Properties) && CollaborationMergeUtils.getProperty("collab"))
          ) {
            const GTools =
              '<gravit mimeType="' +
              GCore.GNode.MIME_TYPE +
              '" restricted="' +
              (!!this._isRestricted() && require.getStorageItem().getId()) +
              '">' +
              $("<div/>").text(AppSettings).html() +
              "</gravit>";
            module
              ? (module.clipboardData.setData("text/xml", GTools),
                this._parseTextSelectionToEventClipboard(e, module))
              : gContainer.copyToClipboard(GTools).catch(() => {
                  this._showError();
                });
          }
        }
      }),
      (p.prototype._isMouseOverContextStyleCopy = function () {
        const exports = gDesigner.getActiveDocument(),
          module = gDesigner.getMouseOverContext(),
          require = exports.getActiveStylesList();
        return module.context && (require.Fill || require.Border || require.Effect);
      }),
      (p.prototype._notifyMouseOverContextOfSuccessfulCopy = function () {
        const exports = gDesigner.getMouseOverContext();
        exports.contextCallback && exports.contextCallback(exports.prevEvt);
      }),
      (p.prototype._showError = function () {
        const exports = this._isCut
          ? GCore.GLocale.get(new GCore.GLocaleKey("GCutCopyAction", "title.cut"))
          : GCore.GLocale.get(new GCore.GLocaleKey("GCutCopyAction", "title.copy"));
        GSystemDialog.alert(
          GCore.GLocale.get(
            new GCore.GLocaleKey("GCutCopyAction", "text.security-issues")
          )
            .replace("%cutcopy", exports)
            .replace("%shortcut", GEditor.GKey.shortcutToString(this.getShortcut()))
        );
      }),
      (p.prototype.toString = function () {
        return "[Object GCutCopyAction]";
      }),
      (exports.exports = p);
  }