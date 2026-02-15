/**
 * Webpack Module #1535
 * Type: class
 * Name: GAnnotations
 */

function (exports, module, require) {
  'use strict';
  (require(58) /* polyfill_Array_includes */,
    require(3) /* polyfill_RegExp_toString */,
    require(71) /* polyfill_String_includes */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(97) /* stub_requires_684 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    a = require(15) /* GEditor */,
    GFitAllAction = require(449) /* GFitAllAction */,
    GFitSelectionAction = require(566) /* GFitSelectionAction */,
    GProperties = require(123);
  const GAnnotationsUtils = require(358) /* GAnnotationsUtils */,
    d = require(86) /* module_86 */,
    { SHOW_SIDEBAR_BADGE: u } = require(10);
  class p extends GProperties {
    constructor() {
      super();
      this._elements = [];
    }

    _panel = null;
    _toolbar = null;
    _document = null;
    _elements = null;

    init(e, t, n, GTools, a, GFitAllAction) {
      ((this._panel = e),
        (this._toolbar = t),
        this._addListPanel(e, n, GTools, a, GFitAllAction),
        t.append(
          $('<label>')
            .addClass('annotation-panel-label')
            .text(GCore.GLocale.get(new GCore.GLocaleKey('GAnnotations', 'text.page')))
        ));
    }

    _addListPanel(e, t, n, GTools, GFitSelectionAction) {
      var GProperties = $('<div></div>').addClass('annotations-container').appendTo(e);
      this._annotationPanel ||
        ((this._annotationPanel = $('<div></div>')
          .addClass('annotations')
          .on(
            'mouseenter',
            function () {
              var e = this._document.getScene();
              (e &&
                e.acceptChildren(function (e) {
                  return (
                    e.hasFlag(GCore.GNode.Flag.Highlighted) &&
                      e.removeFlag(GCore.GNode.Flag.Highlighted),
                    true
                  );
                }),
                this._annotationPanel.gAnnotationPanel('setBlockHighlight', true));
            }.bind(this)
          )
          .on(
            'mouseleave',
            function () {
              this._annotationPanel.gAnnotationPanel('setBlockHighlight', false);
            }.bind(this)
          )
          .on(
            'click',
            function () {
              this._document.getEditor().clearSelection();
              var e = this._document.getScene();
              (e && e.setActiveLayer(null),
                a.GPlatform.modifiers.optionKey &&
                  gDesigner.executeAction(GFitAllAction.ID, undefined, 'outlinesidebar'));
            }.bind(this)
          )
          .on('dragover', function (e) {
            (e.preventDefault(), e.stopPropagation());
          })
          .on('dragenter', function (e) {
            (e.preventDefault(), e.stopPropagation());
          })
          .on(
            'drop',
            function (e) {
              (e.preventDefault(), e.stopPropagation());
            }.bind(this)
          )
          .appendTo(GProperties)),
        this._annotationPanel.gAnnotationPanel({
          clickCallback: this._clickTreeNodeCallback.bind(this),
          updateCommentCount: this._updateCommentCount.bind(this),
          showResolved: n,
          updateSidebar: GTools,
          updateAnnotationCache: GFitSelectionAction,
          sidebarActive: t,
        }),
        (window.refreshannot = () => this._annotationPanel.gAnnotationPanel('refresh')),
        (window.relayoutannot = () => this._annotationPanel.gAnnotationPanel('relayout')));
    }

    relayout(e) {
      this._annotationPanel && this._annotationPanel.gAnnotationPanel('relayout', e);
    }

    isAddingAnnotation() {
      return this._annotationPanel.gAnnotationPanel('isEditingOrAddingContent');
    }

    toggleShowResolved(e) {
      this._annotationPanel.gAnnotationPanel('showResolved', e);
    }

    setPage(e) {
      (this._annotationPanel.gAnnotationPanel('page', e),
        e && this._setAnnotationLabel(e.getProperty('name')));
    }

    _setAnnotationLabel(e) {
      this._toolbar.find('.annotation-panel-label').text(e);
    }

    _updateCommentCount(e, t) {
      var n = this._toolbar.find('.g-badge');
      u && e > 0
        ? (0 === n.length &&
            ((n = $('<span/>').addClass('g-badge comment-count')), this._toolbar.append(n)),
          t > 0 ? n.addClass('unread') : n.removeClass('unread'),
          n.text(e))
        : n.remove();
    }

    getPage() {
      return this._annotationPanel.gAnnotationPanel('page');
    }

    setAnnotations(e) {
      return this._annotationPanel.gAnnotationPanel('annotations', e);
    }

    setDelayedSyncCallback(e) {
      this._annotationPanel.gAnnotationPanel('setDelayedSyncCallback', e);
    }

    _clickTreeNodeCallback(e) {
      if (
        (e instanceof GCore.GComment && (e = e.getParent()),
        e && !e.hasFlag(GCore.GNode.Flag.Selected))
      ) {
        (this._document.getScene().updateActivePageForElem(e),
          this._document.getScene().updateActiveLayerForElem(e));
        var module = this._document.getEditor(),
          require = false;
        if (
          (jQuery(gDesigner.getWindows().getActiveWindow().getView().getHtmlElement())
            .find('> div[tabindex=0]')
            .focus(),
          a.GPlatform.modifiers.metaKey ||
            (!e.hasFlag(GCore.GNode.Flag.Selected) &&
              !e.hasFlag(GCore.GElement.Flag.FullLocked) &&
              !a.GPlatform.modifiers.shiftKey))
        ) {
          let GTools = [e];
          if (e.hasMixin(GCore.GAnnotation.Linkable)) {
            let t = e.getAnnotableReferences();
            t &&
              ((t = t.filter((e) => !e.hasFlag(GCore.GNode.Flag.Selected))),
              t.length &&
                ((GTools = GTools.concat(t)),
                this._document.getScene().updateActivePageForElem(t[0])));
          }
          (module.updateSelection(a.GPlatform.modifiers.metaKey, GTools), (require = true));
        }
        if (require && a.GPlatform.modifiers.optionKey)
          module.hasSelection()
            ? gDesigner.executeAction(GFitSelectionAction.ID, undefined, 'outlinesidebar')
            : gDesigner.executeAction(GFitAllAction.ID, undefined, 'outlinesidebar');
        else if (require) {
          let t;
          if (e.hasMixin(GCore.GAnnotation.Linkable)) {
            const n = e.getAnnotableReferences();
            n &&
              n.length &&
              n.forEach((e) => {
                if (e instanceof GCore.GElement) {
                  const n = e.getPaintBBox();
                  n && !n.isEmpty() && (t = t ? t.united(n) : n);
                }
              });
          } else e instanceof GCore.GElement && (t = e.getPaintBBox());
          const n = this._document && this._document.getActiveWindow();
          n && n.scrollIntoView(t);
        }
      }
    }

    _selectionChangedEvent() {
      const exports = this._document && this._document.getEditor(),
        module = exports && exports.getSelection();
      if (module && module.length) {
        module
          .filter((e) => e.hasMixin(GCore.GAnnotable))
          .forEach((e) => {
            const module = e.getLinkedAnnotations();
            module &&
              module.forEach((e) => {
                e.hasFlag(GCore.GNode.Flag.Selected) || e.setFlag(GCore.GNode.Flag.Selected);
              });
          });
      }
    }

    _isSyncTransactionEvent(e) {
      return !(
        !(e.data && e.data.nodes && e.data.parent) ||
        (e.data.type !== GTools.GAnnotationEditor.TransactionType.RemoveAnnotation &&
          e.data.type !== GTools.GAnnotationEditor.TransactionType.AddAnnotation)
      );
    }

    _handleModifiedEvent(e) {
      if (this._isSyncTransactionEvent(e)) {
        const n = e.data.evtType === GTools.GEditor.ModifiedEvent.Type.Undo,
          GCore = e.data.evtType === GTools.GEditor.ModifiedEvent.Type.Redo,
          a = e.data.type === GTools.GAnnotationEditor.TransactionType.RemoveAnnotation,
          GFitAllAction = e.data.type === GTools.GAnnotationEditor.TransactionType.AddAnnotation,
          GFitSelectionAction = !!this._document.getAnnotationsId(),
          GProperties = (n && a) || (n && GFitAllAction) || (GCore && GFitAllAction),
          d = GCore && a;
        let u;
        if (GFitSelectionAction && GProperties)
          ((u = GAnnotationsUtils.filterAnnotationElements(e.data.nodes)),
            u.length &&
              u.forEach((t) => {
                (GAnnotationsUtils.removeSidFromAnnotations(t),
                  t.getParent() || e.data.parent.insertChild(t));
              }));
        else if (GFitSelectionAction && d) {
          var module = e.data.parent.getChildren();
          ((u = GAnnotationsUtils.filterAnnotationElements(e.data.nodes).filter((e) =>
            module.some((t) => t.getId() === e.getId())
          )),
            u.length && GAnnotationsUtils.removeAnnotations(u, e.data.parent, undefined, false));
        }
      }
    }

    update(e, t, n) {
      if (
        (n && this._annotationPanel.gAnnotationPanel('cleanEmptyAnnotations'),
        this._document &&
          (this._document
            .getScene()
            .removeEventListener(GCore.GElement.GeometryChangeEvent, this._geometryChange, this),
          this._document
            .getScene()
            .removeEventListener(
              GCore.GNode.AfterPropertiesChangeEvent,
              this._afterPropertiesChange,
              this
            ),
          this._document
            .getEditor()
            .removeEventListener(
              GTools.GEditor.EdGeometryChangeEvent,
              this._edGeometryChange,
              this
            ),
          this._document
            .getEditor()
            .removeEventListener(GTools.GEditor.ModifiedEvent, this._handleModifiedEvent, this),
          this._document
            .getEditor()
            .removeEventListener(
              GTools.GEditor.SelectionChangedEvent,
              this._selectionChangedEvent,
              this
            ),
          (this._document = null)),
        (this._elements = []),
        e)
      ) {
        for (var a = 0; a < t.length; ++a) this._elements.push(t[a]);
        if (this._elements.length === t.length) {
          if (((this._document = e), this._elements.length))
            return (
              this._document
                .getScene()
                .addEventListener(
                  GCore.GNode.AfterPropertiesChangeEvent,
                  this._afterPropertiesChange,
                  this
                ),
              this._document
                .getScene()
                .addEventListener(GCore.GElement.GeometryChangeEvent, this._geometryChange, this),
              this._document
                .getEditor()
                .addEventListener(
                  GTools.GEditor.EdGeometryChangeEvent,
                  this._edGeometryChange,
                  this
                ),
              this._document
                .getEditor()
                .addEventListener(
                  GTools.GEditor.SelectionChangedEvent,
                  this._selectionChangedEvent,
                  this
                ),
              this._document
                .getEditor()
                .addEventListener(GTools.GEditor.ModifiedEvent, this._handleModifiedEvent, this),
              this._updateDimensions(),
              this._updateToolbar(),
              (this._document.getStatus() !== d.Ready && this._document.getStatus() !== d.Loaded) ||
                !this._document.getActiveWindow() ||
                this._document.getActiveWindow().getView().invalidate(null, true),
              true
            );
          this._document
            .getEditor()
            .addEventListener(GTools.GEditor.ModifiedEvent, this._handleModifiedEvent, this);
        }
      } else this.setPage(null);
      return false;
    }

    _afterPropertiesChange(e) {
      e.node === this.getPage() &&
        e.properties.includes('name') &&
        this._setAnnotationLabel(e.node.getProperty('name'));
    }

    _geometryChange(e) {
      (e.type !== GCore.GElement.GeometryChangeEvent.Type.After &&
        e.type !== GCore.GElement.GeometryChangeEvent.Type.Child) ||
        (this._elements.indexOf(e.element) >= 0 && this._updateDimensions());
    }

    _edGeometryChange() {
      this._updateDimensions(false, true);
    }

    _updateDimensions() {}

    _updateToolbar() {
      this._toolbar.find('[data-action]').each(
        function (e, t) {
          var n = $(t);
          n.prop('disabled', !gDesigner.canExecuteAction(n.attr('data-action')));
        }.bind(this)
      );
    }

    toString() {
      return '[Object GAnnotations]';
    }

  }
  exports.exports = p;
}