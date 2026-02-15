/**
 * Webpack Module #1661
 * Type: class
 * Name: GSymbolsSidebar
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    GTools = require(53) /* GTools */,
    r = require(67) /* GRichTooltipConfig */,
    GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
    GDocumentEvent = require(78) /* GDocumentEvent */,
    GCreateSymbolAction = require(608) /* GCreateSymbolAction */,
    GFitSelectionAction = require(566) /* GFitSelectionAction */,
    GSidebar = require(806) /* GSidebar */,
    GSidebarContainer = require(395);
  class g extends GSidebar {
    constructor() {
      super();
      GSidebar.call(this);
    }

    _htmlElement = null;
    _newSymbolButton = null;
    _symbolsToolbar = null;
    _symbolsPanel = null;

    getId() {
      return g.ID;
    }

    getTitle() {
      return g.TITLE;
    }

    isEnabled() {
      return true;
    }

    isVisible() {
      return !!gDesigner.getApplicationManager().isEditingEnabled();
    }

    getOrientation() {
      return GSidebarContainer.Orientation.Left;
    }

    getMinimumWidth() {
      return 250;
    }

    getDefaultWidth() {
      return 250;
    }

    isResizeable() {
      return true;
    }

    relayout() {
      this._symbolsPanel.gSymbolsPanel('relayout');
    }

    init(e) {
      (GSidebar.prototype.init.call(this, e),
        (this._htmlElement = e),
        (this._symbolsToolbar = $('<div></div>')
          .addClass('toolbar symbols-toolbar')
          .append(
            $('<label></label>')
              .css('flex-grow', '1')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GSymbolsSidebar', 'text.symbols')))
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
          .appendTo(e)),
        $('<button></button>')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GSymbolsSidebar', 'action.delete-symbol'))
          )
          .on('click', () => this._deleteSymbol())
          .append($('<span></span>').addClass('gravit-icon-trash'))
          .append($('<span></span>').addClass('gravit-icon-touch-trash'))
          .appendTo(this._symbolsToolbar)
          .gRichTooltip(
            r.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GSymbolsSidebar', 'text.delete-symbol-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GSymbolsSidebar', 'text.delete-symbol-tooltip-description')
              ),
              learnMore: '',
            })
          ),
        (this._newSymbolButton = $('<button></button>')
          .attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GSymbolsSidebar', 'action.create-symbol'))
          )
          .on(
            'click',
            function () {
              (gDesigner.stats('symbols_new_symbol'),
                this._symbolsPanel.gSymbolsPanel('newSymbolClick') &&
                  ($(this._symbolsToolbar).gAccordion('toggleOpen', true),
                  $(this._symbolsToolbar).gAccordion('init', $(this._symbolsPanel))));
            }.bind(this)
          )
          .append($('<span></span>').addClass('gravit-icon-plus'))
          .append($('<span></span>').addClass('gravit-icon-touch-plus'))
          .appendTo(this._symbolsToolbar)
          .addClass('g-disabled')
          .gRichTooltip(
            r.GRichTooltipConfig.from({
              title: GCore.GLocale.get(
                new GCore.GLocaleKey('GSymbolsSidebar', 'text.create-symbol-tooltip-title')
              ),
              description: GCore.GLocale.get(
                new GCore.GLocaleKey('GSymbolsSidebar', 'text.create-symbol-tooltip-description')
              ),
              learnMore: '',
            })
          )));
      var t = this,
        n = $('<div></div>')
          .addClass('symbols-container')
          .appendTo(e)
          .on('click', function (e) {
            (gDesigner.stats('symbols_click_symbol'),
              (e.target === this || $(e.target).hasClass('g-symbols-panel')) &&
                t._symbolsPanel.gSymbolsPanel('isSelected') &&
                t._document.getEditor().updateSelection(
                  false,
                  t._document
                    .getEditor()
                    .getSelection()
                    .slice()
                    .filter(function (e) {
                      return !(e instanceof GCore.GSymbol && e.isMaster());
                    })
                ));
          })
          .on('scroll', function () {
            if ($('body').hasClass('g-touch')) {
              var e = $(this)[0].scrollTop,
                t = 'light' == gDesigner.getSetting('theme') ? 'DFDFDF' : '2E2E2E';
              ((e = e > 20 ? 20 : e),
                $('.symbols-toolbar').css({
                  'box-shadow': '0 0 25px '.concat(e, 'px #').concat(t),
                }));
            }
          });
      ((this._symbolsPanel = $('<div></div>')
        .addClass('symbols')
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
        .appendTo(n)),
        this._symbolsPanel.gSymbolsPanel({
          moveCallback: this._moveSymbolCallback.bind(this),
          clickCallback: this._clickSymbolCallback.bind(this),
          dblClickCallback: this._dblClickSymbolCallback.bind(this),
          startDraggingCallback: this._startSymbolDraggingCallback.bind(this),
        }),
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this));
    }

    _documentEvent(e) {
      if (e.type === GDocumentEvent.Type.Activated)
        ((this._document = e.document),
          this._symbolsPanel.gSymbolsPanel('scene', this._document.getScene()),
          this.trigger(GSidebar.UPDATE_EVENT),
          this._document
            .getEditor()
            .addEventListener(GTools.GEditor.SelectionChangedEvent, this._selectionUpdate, this));
      else if (e.type === GDocumentEvent.Type.Deactivated) {
        (this._symbolsPanel.gSymbolsPanel('scene', null),
          this._document
            .getEditor()
            .removeEventListener(GTools.GEditor.SelectionChangedEvent, this._selectionUpdate, this),
          (this._document = null),
          this.trigger(GSidebar.UPDATE_EVENT));
      }
    }

    _deleteSymbol() {
      gDesigner.stats('symbols_delete_symbol');
      this._document.getEditor();
      var e = this._document.getScene(),
        t = (e.getActivePage(), this._symbolsPanel);
      t.gSymbolsPanel('isSelected') &&
        GTools.GEditor.tryRunTransaction(
          e,
          function () {
            t.gSymbolsPanel('removeSelected');
          },
          GCore.GLocale.get(new GCore.GLocaleKey('GSymbolsSidebar', 'action.delete-symbol'))
        );
    }

    _moveSymbolCallback(e, t, n) {
      n && e && n.length;
    }

    _startSymbolDraggingCallback(e) {
      return (console.log('start dragging cb'), null);
    }

    _clickSymbolCallback(e) {
      if (e && e.isMaster()) {
        var module = this._document.getEditor();
        if (module) {
          var require = GTools.GEditor.getElementPage(e);
          (require && this._document.getScene().setActivePage(require),
            module.clearSelection(),
            module.updateSelection(false, [e]),
            module.hasSelection() &&
              gDesigner.executeAction(GFitSelectionAction.ID, undefined, undefined, true));
        }
      }
    }

    _dblClickSymbolCallback(e) {
      if (e && e.isMaster()) {
        var module = this._document.getEditor(),
          require = this._document.getScene(),
          _interopRequireDefault = (require.getActivePage(), [e]);
        (require.visitLinks(e, function (e) {
          e instanceof GCore.GSymbol && _interopRequireDefault.push(e);
        }),
          module &&
            (module.clearSelection(), module.updateSelection(false, _interopRequireDefault)));
      }
    }

    _selectionUpdate() {
      var e = gDesigner.canExecuteAction(GCreateSymbolAction.ID),
        t = this._newSymbolButton.hasClass('g-disabled');
      e && t
        ? this._newSymbolButton.removeClass('g-disabled')
        : e || t || this._newSymbolButton.addClass('g-disabled');
    }

    getTouchTools() {
      return [
        new GTouchTool.default({
          id: 'symbols',
          sidebar: this.getId(),
          icon: 'gravit-icon-touch-newSymbols',
          panel: '.symbols-container',
          toolbar: '.symbols-toolbar',
        }),
      ];
    }

    toString() {
      return '[Object GSymbolsSidebar]';
    }

    static ID = 'symbols';

    static TITLE = new GCore.GLocaleKey('GSymbolsSidebar', 'title');

  }
  exports.exports = g;
}