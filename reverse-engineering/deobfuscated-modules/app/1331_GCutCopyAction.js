/**
 * Webpack Module #1331
 * Type: class
 * Name: GCutCopyAction
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var o = require(1) /* module */,
      i = require(53) /* module */,
      a = require(15) /* module */,
      r = require(10) /* AppSettings */,
      s = require(40) /* CollaborationMergeUtils */;
    const l = require(18) /* MenuItemBuilder */,
      c = require(31) /* GAction */,
      d = require(607) /* module_607 */,
      u = require(44) /* GSystemDialog */;
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
    o.GObject.inherit(p, c),
      (p.ID_COPY = "edit.copy"),
      (p.ID_CUT = "edit.cut"),
      (p.prototype._cutCopyArea = null),
      (p.prototype.getId = function () {
        return this._isCut ? p.ID_CUT : p.ID_COPY;
      }),
      (p.prototype.getTitle = function () {
        return new o.GLocaleKey(
          "GCutCopyAction",
          "title." + (this._isCut ? "cut" : "copy")
        );
      }),
      (p.prototype.getIcon = function () {
        return "gravit-icon-" + (this._isCut ? "cut" : "copy");
      }),
      (p.prototype.getCategory = function () {
        return l.CATEGORY_EDIT;
      }),
      (p.prototype.getGroup = function () {
        return "ccp";
      }),
      (p.prototype.getShortcut = function () {
        return this._isCut
          ? [a.GKey.Constant.META, "X"]
          : [a.GKey.Constant.META, "C"];
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
        exports = o.GNode.order(exports.slice());
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
        for (let o = 0; o < exports.length; ++o) require(exports[o]) || module.push(exports[o]);
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
        let o = null;
        return (
          module.context === d.FillPropertiesPanel
            ? (o = require.Fill)
            : module.context === d.BorderPropertiesPanel
            ? (o = require.Border)
            : module.context === d.EffectPropertiesPanel && (o = require.Effect),
          o
        );
      }),
      (p.prototype._serializeData = function (e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
        return o.GNode.serialize(e, {
          exceptions: module,
          copy: true,
          copyIgnoreProperties: i.GEditorOptions.propertiesExcludedFromCopying,
        });
      }),
      (p.prototype._copyStyleToClipboard = function (e, t) {
        const require = this._serializeData([e]),
          i =
            '<gravit mimeType="' +
            o.GNode.MIME_TYPE +
            '">' +
            $("<div/>").text(require).html() +
            "</gravit>";
        t
          ? t.clipboardData.setData("text/xml", i)
          : gDesigner.setClipboardContent(o.GNode.MIME_TYPE, require);
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
          return e instanceof o.GItem || e instanceof o.GLayer;
        });
      }),
      (p.prototype._parseTextSelectionToEventClipboard = function (e, t) {
        for (let require = 0; require < e.length; require++)
          if (e[require] instanceof o.GText) {
            let o,
              a = e[require];
            const r = a.getTLCore();
            if (r) {
              const t = i.GElementEditor.getEditor(a);
              o =
                t && 1 === e.length && t.isInlineEdit()
                  ? r.selectedRange().plainText()
                  : r.getDocumentRange().plainText();
            } else o = a.getContent();
            t.clipboardData.setData("text/plain", o);
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
          r.HAS_ANNOTATIONS &&
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
          const o = e[require];
          o.hasProperty("sref") &&
            o.getReferencedStyle() &&
            module.push(o.getReferencedStyle());
        }
        return module;
      }),
      (p.prototype._deleteCutSelection = function () {
        let exports = o.GLocale.get(new o.GLocaleKey("text.cut-selection"));
        const module = gDesigner.getActiveDocument(),
          require = module && module.getEditor(),
          i = gDesigner.getMouseOverContext(),
          a = module.getActiveStylesList();
        require.beginTransaction();
        try {
          if (i.context && (a.Fill || a.Border || a.Effect)) {
            let t = null,
              r = null;
            const l = require.getSelection();
            i.context === d.FillPropertiesPanel
              ? ((t = a.Fill), (r = "fill"))
              : i.context === d.BorderPropertiesPanel
              ? ((t = a.Border), (r = "border"))
              : i.context === d.EffectPropertiesPanel &&
                ((t = a.Effect), (r = "effect")),
              (0, s.iterateEqualStyleLayers)(r, t, l, function (e) {
                e.getParent().removeChild(e);
              }),
              (exports = o.GLocale.get(this.getTitle()));
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
          const i = this._buildExceptionsForSelection(e),
            a = this._extractStylesFromSelection(e);
          e.push.apply(e, a),
            this._isRestricted() && (e = require.restrictElements(e));
          let r = this._serializeData(e, i);
          gDesigner.setClipboardContent(o.GNode.MIME_TYPE, r);
          const s = 1 === e.length && e[0];
          if (
            !(s && s.hasMixin(o.GNode.Properties) && s.getProperty("collab"))
          ) {
            const i =
              '<gravit mimeType="' +
              o.GNode.MIME_TYPE +
              '" restricted="' +
              (!!this._isRestricted() && require.getStorageItem().getId()) +
              '">' +
              $("<div/>").text(r).html() +
              "</gravit>";
            module
              ? (module.clipboardData.setData("text/xml", i),
                this._parseTextSelectionToEventClipboard(e, module))
              : gContainer.copyToClipboard(i).catch(() => {
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
          ? o.GLocale.get(new o.GLocaleKey("GCutCopyAction", "title.cut"))
          : o.GLocale.get(new o.GLocaleKey("GCutCopyAction", "title.copy"));
        u.alert(
          o.GLocale.get(
            new o.GLocaleKey("GCutCopyAction", "text.security-issues")
          )
            .replace("%cutcopy", exports)
            .replace("%shortcut", a.GKey.shortcutToString(this.getShortcut()))
        );
      }),
      (p.prototype.toString = function () {
        return "[Object GCutCopyAction]";
      }),
      (exports.exports = p);
  }