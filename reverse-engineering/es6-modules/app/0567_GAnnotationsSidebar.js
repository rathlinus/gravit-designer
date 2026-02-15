/**
 * Webpack Module #567
 * Type: class
 * Name: GAnnotationsSidebar
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(8) /* polyfill_bundle_ES6 */,
    require(3) /* polyfill_RegExp_toString */,
    require(71) /* polyfill_String_includes */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(38) /* stub_requires_680 */,
    require(97) /* stub_requires_684 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GTools = require(53) /* GTools */,
    GCore = require(1) /* GCore */,
    r = require(15) /* GEditor */,
    GMenu = _interopRequireDefault(require(238) /* GMenu */),
    GMenu2 = _interopRequireDefault(require(339) /* GMenu */),
    GRichTooltipConfig = require(67) /* GRichTooltipConfig */,
    GTouchTool = _interopRequireDefault(require(340) /* GTouchTool */),
    GSettingsDialog = require(1275) /* GSettingsDialog */,
    p = require(444) /* module_444 */,
    GDocumentEvent = require(78) /* GDocumentEvent */,
    h = (require(606) /* GPanel */, require(806)) /* GSidebar */,
    GSidebarContainer = require(395) /* GSidebarContainer */,
    GInspectorSidebar = require(864) /* GInspectorSidebar */,
    GProperties = require(123) /* GProperties */,
    GAnnotations = require(1535) /* GAnnotations */,
    _ = require(603) /* WindowEvent */,
    GAnnotationProperties = require(1536) /* GAnnotationProperties */,
    GAnnotationsUtils = require(358) /* GAnnotationsUtils */,
    C = require(592);
  const GEvent_document = require(392) /* GEvent_document */,
    GSettingChangedEvent = require(135);
  var GFileReviewProperties = require(1537);
  const GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
    GCollaborationEvent = require(393) /* GCollaborationEvent */,
    GEvent_storageItem = require(336) /* GEvent_storageItem */,
    P = require(434) /* stub_requires_30_1072 */,
    { SHOW_SIDEBAR_BADGE: D, NOTIFICATION_SETTINGS_ENABLED: L } = require(10) /* AppSettings */,
    I = require(86) /* module_86 */,
    GDocumentStatusEvent = require(217) /* GDocumentStatusEvent */,
    O = require(1279) /* module_1279 */,
    {
      DateAPI: F,
      FileStatus: { APPROVED: R },
    } = require(10) /* AppSettings */,
    GOutlineSidebar = require(198);
  class N extends h {
    constructor() {
      super();
      (h.call(this),
      (this._annotationPanels = []),
      (this._annotationProperties = []),
      (this._handleFocusInEvent = this._handleFocusInEvent.bind(this)),
      (this._handleFocusOutEvent = this._handleFocusOutEvent.bind(this)));
    }

    _htmlElement = null;
    _panelsContainer = null;
    _annotationPanels = null;
    _annotationProperties = null;
    _document = null;
    _notificationMenu = null;
    _elements = null;
    _listenersAdded = false;
    _annotationToolbar = null;
    _annotationsToolbarPanel = null;
    _showResolved = false;
    _showDistance = GTools.GEditorOptions.showDistance;
    _toolExitKey = GTools.GEditorOptions.toolExitKey;
    _currentAnnotations = null;
    _localAnnotations = null;
    _page = null;

    getId() {
      return N.ID;
    }

    getTitle() {
      return N.TITLE;
    }

    isEnabled() {
      return !!this._document;
    }

    isVisible() {
      return !!gDesigner.getApplicationManager().isCommentingEnabled();
    }

    isDeactivatable() {
      return (
        !this._annotationPanels ||
        !this._annotationPanels.some((e) => e.properties.isAddingAnnotation())
      );
    }

    getOrientation() {
      return GSidebarContainer.Orientation.Right;
    }

    getMinimumWidth() {
      return this._getSidebarWidth();
    }

    isResizeable() {
      return false;
    }

    getDefaultWidth() {
      return this._getSidebarWidth();
    }

    _getSidebarWidth() {
      return gDesigner.isTouchEnabled() ? 376 : 300;
    }

    _storageItemFileStatusEvent(e) {
      this._storageItem &&
        this._storageItem === e.storageItem &&
        ((e.oldStatus !== R && e.newStatus !== R) || this._updatePropertyPanels(true));
    }

    _toggleShowResolved(e) {
      if (e !== this._showResolved) {
        this._showResolved = e;
        for (var module = this._annotationPanels.length - 1; module >= 0; module--) {
          this._annotationPanels[module].properties.toggleShowResolved(e);
        }
        ((this._document
          .getActiveWindow()
          .getView()
          .getViewConfiguration().showResolvedAnnotations = e),
          this._document.getActiveWindow().getView().invalidateAndResetCache(null));
      }
    }

    syncAnnotations(e) {
      return this._annotationPanels && this._document && this._document.getAnnotationsId()
        ? this.isAnnotationPropertiesEditing()
          ? Promise.resolve()
          : new Promise((t) => {
              (e
                ? GAnnotationsUtils.updateAndReturnCloudAnnotationsForDocument(
                    this._document,
                    this._currentAnnotations
                  )
                : GAnnotationsUtils.getCloudAnnotationsForDocument(this._document)
              ).then((n) => {
                let _interopRequireDefault = n.annotationsCollection,
                  GTools = false;
                this._document && this._document.getAnnotationsId() !== n.cid && t(GTools);
                let GCore = false;
                if (_interopRequireDefault) {
                  this._currentAnnotations = _interopRequireDefault;
                  for (let t = this._annotationPanels.length - 1; t >= 0; t--) {
                    let n = this._annotationPanels[t];
                    if (n.properties instanceof GAnnotations) {
                      let t = this._getAnnotationsToSet(
                          _interopRequireDefault,
                          n.properties.getPage()
                        ),
                        r = n.properties.setAnnotations(t);
                      r === O.UPDATED
                        ? (GTools = true)
                        : r === O.DELAYED &&
                          ((GCore = true),
                          n.properties.setDelayedSyncCallback(this.syncAnnotations.bind(this, e)));
                    }
                  }
                }
                if (((GTools = GTools && !GCore), GTools)) {
                  let e = this._document.getScene();
                  (e && e.setLastTimeAnnotationsFromCloudModified(n.lastUpdateTime),
                    gDesigner.notifyDocumentModified(this._document),
                    this._active ? this._activateAnnotations() : this.trigger(h.UPDATE_EVENT));
                }
                t(GTools);
              });
            })
        : Promise.resolve();
    }

    _getAnnotationsToSet(e, t) {
      let require = GAnnotationsUtils.findAnnotationsListForPage(t, e);
      return (require || (require = { '@': 'annlst' }), require);
    }

    init(e) {
      (h.prototype.init.call(this, e),
        (this._htmlElement = e),
        (this._notificationMenu = new GMenu.default(
          null,
          'g-annotation-sidebar-notification-menu'
        )));
      const module = gDesigner.getApplicationManager().isCommentingEditingEnabled();
      ((this._sidebarTitle = $('<div></div>')
        .addClass('sidebar-title-inner')
        .append(GCore.GLocale.get(this.getTitle()))),
        (this._annotationToolbar = $('<div></div>').addClass('toolbar annotations-toolbar')));
      const require = $('<button></button>');
      var _interopRequireDefault = $('<div></div>')
        .addClass('annotation-sidebar-options')
        .gOverlay({
          releaseOnClose: false,
          clazz: 'g-annotation-sidebar-option-overlay',
          closeCallback: () => require.removeClass('g-active'),
        });
      this._annotationsToolbarPanel = $('<div></div>')
        .addClass('properties-panel')
        .addClass('annotations-properties-panel');
      var r = $('<div></div>').addClass('annotation-options-box').appendTo(this._annotationToolbar);
      (require
        .attr(
          'data-title',
          GCore.GLocale.get(new GCore.GLocaleKey('GAnnotationsSidebar', 'text.annotation-options'))
        )
        .addClass('annotation-options')
        .append($('<span></span>').addClass('gravit-icon-settings'))
        .on(
          'click',
          function (e) {
            (_interopRequireDefault.gOverlay('open', $(e.target).closest('button')),
              require.addClass('g-active'));
          }.bind(this)
        )
        .appendTo(r),
        $('<span></span>').addClass('indicator').appendTo(this._annotationToolbar),
        (this._optionsToolbar = $('<div></div>').gPropertyRow({
          noPaddingRight: true,
          clickable: true,
          rawClick: (e) => {
            var t = !$(e.target).find('input').prop('checked');
            ($(e.target).find('input').prop('checked', t),
              gDesigner.stats('annotations_settings_show-resolved', t ? 'On' : 'Off'),
              this._toggleShowResolved(t),
              e.stopPropagation());
          },
          columns: [
            {
              width: '100%',
              content: $('<label>')
                .append(
                  $('<input>')
                    .attr('type', 'checkbox')
                    .prop('checked', this._showResolved)
                    .on('change', (e) => {
                      var t = $(e.target).prop('checked');
                      (gDesigner.stats('annotations_settings_show-resolved', t ? 'On' : 'Off'),
                        this._toggleShowResolved(t),
                        e.stopPropagation());
                    })
                )
                .append(
                  $('<span>').text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey('GAnnotationsSidebar', 'text.show-resolved')
                    )
                  )
                ),
            },
          ],
        })),
        module &&
          this._optionsToolbar.gPropertyRow({
            noPaddingRight: true,
            clickable: true,
            rawClick: () => {
              gDesigner.getApplicationManager().isCommentingEditingEnabled() &&
                (GAnnotationsUtils.resolveAllComments(this._document), this.relayout(true));
            },
            columns: [
              {
                width: '100%',
                content: $('<label>')
                  .append(
                    $('<span>').addClass('resolve-all-button').addClass('gravit-icon-resolve-all')
                  )
                  .append(
                    $('<span>').text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GAnnotationsSidebar', 'text.resolve-all')
                      )
                    )
                  ),
              },
            ],
          }),
        L &&
          this._optionsToolbar.gPropertyRow({
            clickable: true,
            isMenu: true,
            rawClick: (e) => {
              if (this._document && this._document.isCloudFile())
                (this._notificationMenu.open(
                  e.target,
                  p.Position.Right_Bottom,
                  p.Position.Right_Bottom
                ),
                  $('body').find('.hover-notification-container') &&
                    this._removeHoverNotificationFrag(),
                  this._openHoverNotification(e.target));
              else {
                this._optionsToolbar
                  .find('.notification-label')
                  .closest('.columns')
                  .gTooltip('show');
              }
              e.stopPropagation();
            },
            columns: [
              {
                width: '100%',
                clazz: 'notification-label',
                content: $('<label>')
                  .append(
                    $('<span>').addClass('resolve-all-button').addClass('gravit-icon-notification')
                  )
                  .append(
                    $('<span>').text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GAnnotationsSidebar', 'text.notification')
                      )
                    )
                  ),
              },
            ],
          }),
        this._optionsToolbar.appendTo(_interopRequireDefault),
        $('<div/>')
          .addClass('offline-overlay-message')
          .append(
            $('<div/>')
              .addClass('box')
              .append(
                $('<span/>').text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey('GOfflineDialog', 'title.unavailable-feature')
                  )
                )
              )
          )
          .appendTo(this._htmlElement),
        gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this),
        gDesigner.getWindows().addEventListener(_.WindowEvent, this._windowEvent, this),
        gDesigner
          .getToolManager()
          .addEventListener(GTools.GToolManager.ToolChangedEvent, this._toolChangedEvent, this),
        gDesigner.addEventListener(GEvent_document, this._stateChangedEvent, this),
        gDesigner.addEventListener(
          GNetworkAvailabilityChangedEvent,
          this._networkAvailabilityChangedEvent,
          this
        ),
        this._activeTool(gDesigner.getToolManager().getActiveTool()),
        this._updatePropertyPanels(true));
    }

    getTouchTools() {
      if (!this.isEnabled()) return [];
      if (!this._active) {
        const e = this._document && this._document.getEditor(),
          t = e && e.getSelection();
        if (t && t.length) return [];
      }
      return [
        new GTouchTool.default({
          id: 'annotation',
          sidebar: this.getId(),
          icon: 'gravit-icon-touch-comment-docker',
          panel: [this._annotationsToolbarPanel, '.annotations-properties-panel'],
          toolbar: [this._annotationToolbar, '.annotations-toolbar'],
        }),
      ];
    }

    getAnnotationsProperties() {
      return [
        new GAnnotationProperties(
          [
            GAnnotationProperties.PropertySet.FillLayer,
            GAnnotationProperties.PropertySet.BorderLayer,
            GAnnotationProperties.PropertySet.BorderWidth,
          ],
          GCore.GEllipseAnnotation,
          GTools.GEllipseAnnotationTool,
          'gravit-icon-annotationtools-ellipse',
          'text.tooltip-ellipse-tool',
          {
            _ptf: 'text.tooltip-ellipse-fill',
            _ptb: 'text.tooltip-ellipse-border',
            _ptfdropper: 'text.tooltip-ellipse-dropper-fill',
            _ptbdropper: 'text.tooltip-ellipse-dropper-border',
            _bw: 'text.tooltip-ellipse-outline',
          },
          'Ellipse',
          'tool-ellipse'
        ),
        new GAnnotationProperties(
          [
            GAnnotationProperties.PropertySet.FillLayer,
            GAnnotationProperties.PropertySet.BorderLayer,
            GAnnotationProperties.PropertySet.BorderWidth,
          ],
          GCore.GRectangleAnnotation,
          GTools.GRectangleAnnotationTool,
          'gravit-icon-annotationtools-rectangle',
          'text.tooltip-rectangle-tool',
          {
            _ptf: 'text.tooltip-rectangle-fill',
            _ptb: 'text.tooltip-rectangle-border',
            _ptfdropper: 'text.tooltip-rectangle-dropper-fill',
            _ptbdropper: 'text.tooltip-rectangle-dropper-border',
            _bw: 'text.tooltip-rectangle-outline',
          },
          'Rectangle',
          'tool-rectangle'
        ),
        new GAnnotationProperties(
          [
            GAnnotationProperties.PropertySet.BorderLayer,
            GAnnotationProperties.PropertySet.BorderWidth,
          ],
          GCore.GPencilAnnotation,
          GTools.GPencilAnnotationTool,
          'gravit-icon-annotationtools-pencil',
          'text.tooltip-pencil-tool',
          {
            _ptb: 'text.tooltip-pencil-border',
            _ptbdropper: 'text.tooltip-pencil-dropper-border',
            _bw: 'text.tooltip-pencil-outline',
          },
          'Pencil',
          'tool-pencil'
        ),
        new GAnnotationProperties(
          [
            GAnnotationProperties.PropertySet.BorderLayer,
            GAnnotationProperties.PropertySet.BorderWidth,
          ],
          GCore.GHighlighterAnnotation,
          GTools.GHighlighterAnnotationTool,
          'gravit-icon-annotationtools-highlighter',
          'text.tooltip-highlighter-tool',
          {
            _ptb: 'text.tooltip-highlighter-border',
            _ptbdropper: 'text.tooltip-highlighter-dropper-border',
            _bw: 'text.tooltip-highlighter-outline',
          },
          'Highlighter',
          'tool-highlighter'
        ),
        new GAnnotationProperties(
          [
            GAnnotationProperties.PropertySet.BorderLayer,
            GAnnotationProperties.PropertySet.BorderWidth,
            GAnnotationProperties.PropertySet.BorderHeadMarker,
            GAnnotationProperties.PropertySet.BorderTailMarker,
          ],
          GCore.GArrowAnnotation,
          GTools.GArrowAnnotationTool,
          'gravit-icon-annotationtools-line',
          'text.tooltip-arrow-tool',
          {
            _ptb: 'text.tooltip-arrow-border',
            _ptbdropper: 'text.tooltip-arrow-dropper-border',
            _bw: 'text.tooltip-arrow-outline',
          },
          'Line',
          'tool-line'
        ),
        new GAnnotationProperties(
          [GAnnotationProperties.PropertySet.FillLayer],
          GCore.GCommentAnnotation,
          GTools.GCommentAnnotationTool,
          'gravit-icon-annotationtools-comment',
          'text.tooltip-comment-tool',
          {
            _ptf: 'text.tooltip-comment-fill',
            _ptfdropper: 'text.tooltip-comment-dropper-fill',
          },
          'Note',
          'tool-comment'
        ),
        new GFileReviewProperties(),
      ];
    }

    activate() {
      ((this._active = true),
        !this._listenersAdded &&
          this._document &&
          (this._addListeners(), this._updatePropertyPanels(true)),
        this._updateToolbarButtons(),
        this._document && this._document.getActiveWindow() && this._activateAnnotations(),
        gDesigner.getToolManager().activateTool(GTools.GPointerTool, null, true),
        this.syncAnnotations());
    }

    deactivate() {
      ((this._active = false),
        this._listenersAdded && this._removeListeners(),
        this._document && this._document.getActiveWindow() && this._deactivateAnnotations());
    }

    _activateAnnotations() {
      this._document &&
        (this._document.getEditor().clearSelection(),
        (this._document
          .getActiveWindow()
          .getView()
          .getViewConfiguration().elementAnnotations = true),
        (this._document.getActiveWindow().getView().getViewConfiguration().showResolvedAnnotations =
          this._showResolved),
        (this._showDistance = GTools.GEditorOptions.showDistance),
        (this._toolExitKey = GTools.GEditorOptions.toolExitKey),
        (GTools.GEditorOptions.showDistance = false),
        (GTools.GEditorOptions.toolExitKey = r.GKey.Constant.ESC),
        this._document.getActiveWindow().getView().invalidateAndResetCache(null));
    }

    _deactivateAnnotations() {
      if (this._document) {
        var exports = this._document.getEditor();
        (exports.getSelection() &&
          exports.updateSelection(
            false,
            exports.getSelection().filter((e) => !e.hasMixin(GCore.GAnnotation))
          ),
          (this._document
            .getActiveWindow()
            .getView()
            .getViewConfiguration().elementAnnotations = false),
          (GTools.GEditorOptions.showDistance = this._showDistance),
          (GTools.GEditorOptions.toolExitKey = this._toolExitKey),
          this._document.getActiveWindow().getView().invalidateAndResetCache(null));
      }
    }

    _addListeners() {
      var e = this._document.getScene(),
        t = this._document.getEditor();
      (gDesigner
        .getToolManager()
        .addEventListener(
          GTools.GToolManager.ToolChangedEvent,
          this._updateFromToolOrSelection,
          this
        ),
        t.addEventListener(GTools.GEditor.SelectionChangedEvent, this._selectionChangedEvent, this),
        e.addEventListener(GCore.GNode.AfterFlagChangeEvent, this._afterFlagChangeEvent, this),
        e.addEventListener(GCore.GNode.AfterInsertEvent, this._afterInsertEvent, this),
        e.addEventListener(GCore.GNode.AfterRemoveEvent, this._afterRemoveEvent, this),
        gDesigner.addEventListener(GSettingChangedEvent, this._settingChanged, this),
        gDesigner.isTouchEnabled() &&
          this._htmlElement &&
          (this._htmlElement[0].addEventListener('focusin', this._handleFocusInEvent, true),
          this._htmlElement[0].addEventListener('focusout', this._handleFocusOutEvent, true)),
        (this._listenersAdded = true));
    }

    _removeListeners() {
      var e = this._document.getScene(),
        t = this._document.getEditor();
      (gDesigner
        .getToolManager()
        .removeEventListener(
          GTools.GToolManager.ToolChangedEvent,
          this._updateFromToolOrSelection,
          this
        ),
        t.removeEventListener(
          GTools.GEditor.SelectionChangedEvent,
          this._selectionChangedEvent,
          this
        ),
        e.removeEventListener(GCore.GNode.AfterFlagChangeEvent, this._afterFlagChangeEvent, this),
        e.removeEventListener(GCore.GNode.AfterInsertEvent, this._afterInsertEvent, this),
        e.removeEventListener(GCore.GNode.AfterRemoveEvent, this._afterRemoveEvent, this),
        gDesigner.removeEventListener(GSettingChangedEvent, this._settingChanged, this),
        this._htmlElement &&
          (this._htmlElement[0].removeEventListener('focusin', this._handleFocusInEvent),
          this._htmlElement[0].removeEventListener('focusout', this._handleFocusOutEvent)),
        (this._listenersAdded = false));
    }

    async _stateChangedEvent(e) {
      this._updateToolbar();
    }

    async _updateToolbar() {
      const exports = gDesigner.getApplicationManager(),
        module = exports.isCommentingEditingEnabled(),
        require = await exports.hasAccess(P.RESOLVE_ALL_COMMENT_ANNOTATION),
        _interopRequireDefault = this._optionsToolbar.find('.resolve-all-row');
      module && require
        ? _interopRequireDefault.parent().show()
        : _interopRequireDefault.parent().hide();
    }

    _windowEvent(e) {
      e.type === _.WindowEvent.Type.Activated && this._active && this._activateAnnotations();
    }

    _documentEvent(e) {
      if (!e.document.isLockedByVersionHistory())
        if (e.type === GDocumentEvent.Type.Activated) {
          ((this._document = e.document), (this._storageItem = this._document.getStorageItem()));
          var module = this._document && this._document.getScene();
          ((this._localAnnotations = module && module.getAnnotations()),
            this._document.isLocked() || this._updateFromToolOrSelection(true),
            this._active && !this._listenersAdded && this._addListeners(),
            this._active && this._document.getActiveWindow() && this._activateAnnotations(),
            this.trigger(h.UPDATE_EVENT),
            this._document.addEventListener(GDocumentStatusEvent, this._documentStatusEvent, this),
            this._document.addEventListener(GCollaborationEvent, this._collaborationEvent, this),
            gDesigner.addEventListener(
              GEvent_storageItem.FileStatusUpdate,
              this._storageItemFileStatusEvent,
              this
            ),
            this._updateNotificationMenu());
        } else
          e.type === GDocumentEvent.Type.Deactivated
            ? (this._listenersAdded && this._removeListeners(),
              this._document.getActiveWindow() && this._deactivateAnnotations(),
              this._document.removeEventListener(
                GDocumentStatusEvent,
                this._documentStatusEvent,
                this
              ),
              this._document.removeEventListener(
                GCollaborationEvent,
                this._collaborationEvent,
                this
              ),
              gDesigner.removeEventListener(
                GEvent_storageItem.FileStatusUpdate,
                this._storageItemFileStatusEvent,
                this
              ),
              (this._document = null),
              (this._storageItem = null),
              (this._elements = null),
              (this._currentAnnotations = null),
              (this._localAnnotations = null),
              (this._page = null),
              this._updatePropertyPanels(true),
              this.trigger(h.UPDATE_EVENT))
            : e.type === GDocumentEvent.Type.StorageItemUpdated && this._updatePropertyPanels(true);
    }

    _settingChanged(e) {
      'touch' === e.key && this._updateToolbarButtons();
    }

    _handleFocusInEvent(e) {
      $(e.target).is('textarea') && this._htmlElement.addClass('g-annotation-comment-focus');
    }

    _handleFocusOutEvent(e) {
      $(e.target).is('textarea') && this._htmlElement.removeClass('g-annotation-comment-focus');
    }

    _updateNotificationMenu() {
      (this._notificationMenu.clearItems(),
        this._notificationMenu.setTooltipType(GRichTooltipConfig.TOOLTIP_AREA.SIDEBAR),
        this._document.getId() &&
          gApi.updateFileData(this._document.getId()).then((e) => {
            const module = [
              {
                caption: GCore.GLocale.get(
                  new GCore.GLocaleKey('GAnnotationsSidebar', 'text.notification-all-annotation')
                ),
                checked: false,
                statType: 'All',
              },
              {
                caption: GCore.GLocale.get(
                  new GCore.GLocaleKey('GAnnotationsSidebar', 'text.notification-assign-to-me')
                ),
                checked: false,
                statType: 'Assigned',
              },
              {
                caption: GCore.GLocale.get(
                  new GCore.GLocaleKey('GAnnotationsSidebar', 'text.notification-none')
                ),
                checked: false,
                statType: 'None',
              },
            ];
            ((module[e.data.notifications_disabled || 0].checked = true),
              0 === this._notificationMenu.getItemCount() &&
                module.forEach((e) => {
                  this._notificationMenu.addItem(this._createMenuItem(e));
                }));
          }));
    }

    _createMenuItem(e) {
      var t = new GMenu2.default(GMenu2.default.Type.Item);
      return (
        t.setChecked(e.checked),
        t.setCaption(e.caption),
        t.addEventListener(GMenu2.default.ActivateEvent, (t) => {
          const { sender: require } = t;
          (this._notificationMenu._items.forEach((e) => {
            e.setChecked(false);
          }),
            require.setChecked(true),
            gDesigner.stats('annotations_settings_notifications', e.statType),
            gApi.updateFileData(this._document.getId(), {
              notifications_disabled: this._notificationMenu.indexOf(require),
            }));
        }),
        t
      );
    }

    _documentStatusEvent(e) {
      e.status === I.Unlocked && this._updateFromToolOrSelection(true);
    }

    _collaborationEvent(e) {
      if (e.type === GCollaborationEvent.Type.AnnotationsUpdate) {
        const { data: { lastUpdateTime: module } = {} } = e;
        if (module && this._document) {
          const e = this._document.getScene();
          !e ||
            (e.getLastTimeAnnotationsFromCloudModified() &&
              !F.lt(e.getLastTimeAnnotationsFromCloudModified(), module, false)) ||
            this.syncAnnotations();
        }
      } else e.type === GCollaborationEvent.Type.ReviewStatusChanged && this._updateToolbar();
    }

    isToolAllowed(e) {
      return !(
        ![GTools.GHandTool, GTools.GPointerTool, GTools.GZoomTool].some((t) => e instanceof t) &&
        !e.hasMixin(GTools.GAnnotationTool)
      );
    }

    _toolChangedEvent(e) {
      e.previousTool;
      var t = e.newTool;
      if (e.newTool.hasMixin(GTools.GAnnotationTool)) {
        var require = gDesigner.getActiveDocument();
        require && require.getEditor() && require.getEditor().clearSelection();
      }
      this._activeTool(t);
    }

    _networkAvailabilityChangedEvent(e) {
      (this._htmlElement.toggleClass('offline', !e.connected),
        e.connected && this.syncAnnotations());
    }

    _activeTool(e) {
      this._annotationToolbar.find('.toolbar-button').each((t, n) => {
        var _interopRequireDefault = $(n).data('toolClass');
        e instanceof _interopRequireDefault
          ? $(n).addClass('g-active')
          : $(n).removeClass('g-active');
      });
    }

    _afterFlagChangeEvent(e) {
      e.node instanceof GCore.GPage &&
        e.flag === GCore.GNode.Flag.Active &&
        !this._document.getEditor().hasSelection() &&
        this._updateFromToolOrSelection();
    }

    _afterInsertEvent(e) {
      (e.node instanceof GCore.GPage || e.node instanceof GCore.GAnnotationsList) &&
        this._updatePropertyPanels(true);
    }

    _afterRemoveEvent(e) {
      (e.node instanceof GCore.GPage || e.node instanceof GCore.GAnnotationsList) &&
        this._updatePropertyPanels(true);
    }

    relayout(e) {
      this._annotationPanels.forEach(
        (t) => t.properties instanceof GAnnotations && t.properties.relayout(e)
      );
    }

    _updateSelection() {
      const exports = this._document && this._document.getEditor();
      if (exports) {
        var module = this._document.getScene().getActivePage();
        if (
          ((this._page = module),
          (this._elements = exports.getSelection()),
          this._elements && this._elements.length)
        ) {
          if (
            this._elements.find((e) => !(e.hasMixin(GCore.GAnnotation) || e instanceof GCore.GPage))
          )
            return (
              (this._elements = []),
              console.warn('deactivating annotations'),
              void gDesigner.getRightSidebars().setActiveSidebar(GInspectorSidebar.ID)
            );
          this._elements = this._elements.filter((e) => e.hasMixin(GCore.GAnnotation));
        }
        if (!this._elements || 0 === this._elements.length) {
          var require = gDesigner.getToolManager().getActiveTool();
          if (require instanceof GTools.GItemTool) {
            var _interopRequireDefault = require.getDefaultStyle();
            _interopRequireDefault && (this._elements = [_interopRequireDefault]);
          }
        }
        this._elements || (this._elements = []);
      }
    }

    _selectionChangedEvent(e) {
      (this._updateSelection(), this._updatePropertyPanels(false, false, false));
    }

    _updateFromToolOrSelection(e) {
      (this._updateSelection(),
        this._updatePropertyPanels(
          true === e,
          e instanceof GTools.GToolManager.ToolChangedEvent &&
            !(e.newTool instanceof GTools.GPointerTool)
        ));
    }

    _updateAnnotationArray() {
      var e,
        t = false,
        n = false;
      if (
        (this._panelsContainer
          ? (n = true)
          : ((this._panelsContainer = $('<div></div>')
              .addClass('panels')
              .appendTo(this._htmlElement)),
            $('<div></div>').addClass('fixed-panels').appendTo(this._panelsContainer),
            $('<div></div>').addClass('scrolling-panels').appendTo(this._panelsContainer)),
        (e = this._panelsContainer.find('.fixed-panels')),
        !n)
      ) {
        (this._sidebarTitle.appendTo(e),
          this._annotationToolbar.appendTo(e),
          this._annotationsToolbarPanel.appendTo(e));
        for (
          var _interopRequireDefault = 0;
          _interopRequireDefault < this.getAnnotationsProperties().length;
          _interopRequireDefault++
        )
          t =
            this._addPropertiesPanel(
              this.getAnnotationsProperties()[_interopRequireDefault],
              _interopRequireDefault
            ) || t;
      }
      if (this._document) {
        for (
          _interopRequireDefault = this._annotationPanels.length - 1;
          _interopRequireDefault >= 0;
          _interopRequireDefault--
        ) {
          var GTools = this._annotationPanels[_interopRequireDefault];
          (GTools.properties.setPage(null),
            GTools.panel && GTools.panel.remove(),
            GTools.toolbar && GTools.toolbar.remove(),
            GTools.divider && GTools.divider.remove());
        }
        ((this._annotationPanels = []),
          this._document.getScene().iteratePages((e) => {
            t = this._addPropertiesPanel(e) || t;
          }, true));
      }
      return t;
    }

    _addPropertiesPanel(e, t) {
      let require,
        _interopRequireDefault,
        GTools = $('<div></div>').css('display', 'none').addClass('properties-panel'),
        r = false;
      const GMenu = this._panelsContainer.find('.scrolling-panels');
      if (e instanceof GProperties) {
        require = e;
        var GMenu2 = $('<div></div>').addClass('annotations-property-panel');
        if (
          (require.init(GMenu2, this._annotationToolbar),
          e._availableProperties && 0 === e._availableProperties.length)
        )
          return r;
        var GRichTooltipConfig = $('<div></div>').css('display', 'none');
        (e instanceof GAnnotationProperties &&
          GRichTooltipConfig.append(
            $('<div></div>')
              .addClass('arrow-top')
              .css(
                'right',
                (gDesigner.isTouchEnabled()
                  ? N.ANNOTATION_PROPERTIES_ARROW_POSITION_TOUCH[t]
                  : N.ANNOTATION_PROPERTIES_ARROW_POSITION[t]) + '%'
              )
          ),
          this._annotationsToolbarPanel.append(GRichTooltipConfig),
          this._annotationsToolbarPanel.append(GMenu2),
          (_interopRequireDefault = this._annotationToolbar),
          (GTools = GMenu2),
          this._annotationProperties.push({
            panel: GTools,
            toolbar: _interopRequireDefault,
            properties: require,
            topArrow: GRichTooltipConfig,
          }));
      } else {
        if (
          ((_interopRequireDefault = $('<div></div>').addClass('annotations-page-toolbar toolbar')),
          (require = new GAnnotations()),
          GTools.appendTo(GMenu),
          require.init(
            GTools,
            _interopRequireDefault,
            this._active,
            this._showResolved,
            this._updatePropertyPanels.bind(this),
            function (e) {
              this._currentAnnotations = e;
            }.bind(this)
          ),
          '' !== _interopRequireDefault.html()
            ? _interopRequireDefault.insertBefore(GTools)
            : (_interopRequireDefault = null),
          this._currentAnnotations)
        ) {
          let t,
            n,
            _interopRequireDefault = e.getAnnotations();
          t = GCore.GNode.store(_interopRequireDefault);
          let GTools = false;
          if (
            (_interopRequireDefault.restored
              ? (n = GAnnotationsUtils.findAnnotationsListForPage(e, this._currentAnnotations))
              : ((n = this._currentAnnotations.find((e) => e['@id'] === t['@id'])),
                (GTools = true)),
            n && !GCore.GUtil.equals(t, n, true))
          ) {
            let t = GCore.GNode.restore(n);
            if (t) {
              let n = e.getAnnotations(),
                _interopRequireDefault = t.getChildren() || [];
              if ((t.clearChildren(), GTools && n.getProperty('aid') !== t.getProperty('aid'))) {
                (n.setProperty('aid', t.getProperty('aid')), n.clearChildren());
                for (let e = 0; e < _interopRequireDefault.length; e++)
                  n.appendChild(_interopRequireDefault[e]);
                r = true;
              } else {
                let e = GAnnotationsUtils.mergeAnnotations(
                  n,
                  n.getChildren(),
                  t,
                  _interopRequireDefault
                );
                r = r || e;
              }
            }
          }
        }
        (require.setPage(e),
          this._annotationPanels.push({
            panel: GTools,
            toolbar: _interopRequireDefault,
            properties: require,
          }));
      }
      return r;
    }

    _updateToolbarButtons() {
      this._annotationProperties.forEach((e, t) => {
        const { topArrow: require, properties: _interopRequireDefault } = e;
        if (_interopRequireDefault instanceof GAnnotationProperties) {
          const e = gDesigner.isTouchEnabled()
            ? N.ANNOTATION_PROPERTIES_ARROW_POSITION_TOUCH
            : N.ANNOTATION_PROPERTIES_ARROW_POSITION;
          require.find('.arrow-top').css('right', e[t] + '%');
        }
      });
    }

    _updatePropertyPanels(e, t) {
      let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      if (this._updatingPropertyPanels) return;
      (this.updateNotificationOption(), (this._updatingPropertyPanels = true));
      const _interopRequireDefault = () => {
        let _interopRequireDefault = false;
        try {
          e && (_interopRequireDefault = this._updateAnnotationArray());
          var GTools = this._annotationProperties.concat(this._annotationPanels),
            r = this._annotationToolbar.find('.indicator');
          r.css('visibility', 'hidden');
          for (var GMenu = 0; GMenu < GTools.length; ++GMenu) {
            var GMenu2 = GTools[GMenu],
              GRichTooltipConfig = GMenu2.properties,
              GTouchTool = GRichTooltipConfig.isAvailable(this._transformMode);
            if (GTouchTool)
              if (
                GRichTooltipConfig instanceof GAnnotationProperties ||
                GRichTooltipConfig instanceof GFileReviewProperties
              )
                (GMenu2.panel.show(),
                  (GTouchTool = GMenu2.properties.update(
                    this._document,
                    this._elements,
                    gDesigner.getToolManager().getActiveTool()
                  )) || GMenu2.panel.hide());
              else {
                var GSettingsDialog = GRichTooltipConfig.getPage().getAnnotations().getChildren();
                ((GTouchTool = GMenu2.properties.update(this._document, GSettingsDialog, t)),
                  require && GMenu2.properties.relayout());
              }
            if (GMenu2.toolbar && GMenu2.toolbar !== this._annotationToolbar)
              (GMenu2.toolbar.css('display', GTouchTool ? '' : 'none'),
                GRichTooltipConfig instanceof GFileReviewProperties ||
                  (GTouchTool
                    ? (GMenu2.toolbar.gAccordion(
                        'toggleOpen',
                        GRichTooltipConfig.getPage().hasFlag(GCore.GNode.Flag.Active)
                      ),
                      GMenu2.toolbar.gAccordion('init', GMenu2.panel, 'label', null, 'annotations'),
                      GRichTooltipConfig.getPage().hasFlag(GCore.GNode.Flag.Active)
                        ? GMenu2.panel.addClass('g-active')
                        : GMenu2.panel.removeClass('g-active'))
                    : GMenu2.panel.css('display', 'none')));
            else if (
              (GMenu2.panel.css('display', GTouchTool ? '' : 'none'),
              GMenu2.topArrow.css('display', GTouchTool ? '' : 'none'),
              GTouchTool && !(GRichTooltipConfig instanceof GFileReviewProperties))
            ) {
              let e = this._annotationToolbar.find('.' + GRichTooltipConfig._toolbarIcon);
              (r.css('left', e.position().left + e.width() / 2 - 6),
                r.css('visibility', 'visible'));
            }
            GTouchTool && this._annotationsToolbarPanel.css('display', '');
          }
          this._document || (this._annotationPanels = []);
        } finally {
          this._updatingPropertyPanels = false;
        }
        return _interopRequireDefault;
      };
      !this._currentAnnotations && this._document && this._document.getAnnotationsId()
        ? GAnnotationsUtils.getCloudAnnotationsForDocument(this._document)
            .then((e) => {
              let t = false;
              if (this._document && this._document.getAnnotationsId() !== e.cid)
                return ((this._updatingPropertyPanels = false), t);
              if (
                ((this._currentAnnotations = e.annotationsCollection),
                (t = _interopRequireDefault()),
                t)
              ) {
                let t = this._document.getScene();
                (t && t.setLastTimeAnnotationsFromCloudModified(e.lastUpdateTime),
                  gDesigner.notifyDocumentModified(this._document),
                  this._active ? this._activateAnnotations() : this.trigger(h.UPDATE_EVENT));
              }
            })
            .catch((e) => {
              !this._active ||
              (e instanceof C &&
                e.cid &&
                this._document &&
                this._document.getAnnotationsId() !== e.cid)
                ? (this._updatingPropertyPanels = false)
                : ((this._currentAnnotations = []), _interopRequireDefault());
            })
        : _interopRequireDefault();
    }

    updateBadge(e) {
      var t = { unread: 0, total: 0 },
        n = this._annotationPanels.map((e) => e.properties.getPage()),
        _interopRequireDefault =
          this._document && (this._document.isCloudFile() || this._document.isExternalFile());
      if (D && !this._active) {
        var GTools = gDesigner.getSyncUser();
        if (_interopRequireDefault) {
          if (this._currentAnnotations) {
            n.map((e) => GAnnotationsUtils.findAnnotationsListForPage(e, this._currentAnnotations))
              .filter((e) => !!e)
              .forEach(function (e) {
                e.$ &&
                  e.$.forEach(function (e) {
                    var n = GAnnotationsUtils.isOwner(GTools, e);
                    e.rsv ||
                      (e.$ && 0 != e.$.length
                        ? (e.$.forEach(function (e) {
                            'cmt' == e['@'] &&
                              (GTools &&
                                GTools.getUID() !== e.uid &&
                                e.type !== GCore.GComment.Type.Close &&
                                !(e.read || []).includes(GTools.getUID()) &&
                                t.unread++,
                              t.total++);
                          }),
                          n || (e.read || []).includes(GTools.getUID()) || t.unread++,
                          t.total++)
                        : (n || (e.read || []).includes(GTools.getUID()) || t.unread++, t.total++));
                  });
              });
          }
        } else if (this._localAnnotations) {
          n.map((e) => GAnnotationsUtils.findAnnotationsListForPage(e, this._localAnnotations))
            .filter((e) => !!e)
            .forEach(function (e) {
              for (
                var n = e.getFirstChild();
                null !== n && n.hasMixin(GCore.GAnnotation);
                n = n.getNext()
              ) {
                var _interopRequireDefault = GAnnotationsUtils.isOwner(GTools, n);
                if (!n.getProperty('rsv'))
                  if (n.getChildren().length > 0) {
                    for (
                      var r = n.getFirstChild();
                      null !== r && r instanceof GCore.GComment;
                      r = r.getNext()
                    )
                      (GTools &&
                        GTools.getUID() !== r.getProperty('uid') &&
                        r.getProperty('type') !== GCore.GComment.Type.Close &&
                        !(r.getProperty('read') || []).includes(GTools.getUID()) &&
                        t.unread++,
                        t.total++);
                    (_interopRequireDefault ||
                      (n.getProperty('read') || []).includes(GTools.getUID()) ||
                      t.unread++,
                      t.total++);
                  } else
                    (_interopRequireDefault ||
                      (n.getProperty('read') || []).includes(GTools.getUID()) ||
                      t.unread++,
                      t.total++);
              }
            });
        }
      }
      return (
        t.total > 0 && (e.text(t.total), t.unread > 0 ? e.addClass('new') : e.removeClass('new')),
        !!t.total
      );
    }

    isAnnotationPropertiesEditing() {
      return this._annotationProperties.some((e) => {
        let { properties: module } = e;
        return (module.isEditing && module.isEditing()) || false;
      });
    }

    updateNotificationOption() {
      const exports = this._optionsToolbar.find('.notification-label').closest('.columns');
      this._document && this._document.isCloudFile()
        ? (exports.removeAttr('data-title'), exports.toggleClass('g-disabled', false))
        : (exports.attr(
            'data-title',
            GCore.GLocale.get(new GCore.GLocaleKey('GAnnotationsSidebar', 'text.save-file-tip'))
          ),
          exports.toggleClass('g-disabled', true));
    }

    toString() {
      return '[Object GAnnotationsSidebar]';
    }

    _createHoverNotificationFrag() {
      let exports = $('<div>')
        .addClass('g-menu hover-notification-container')
        .html(
          GCore.GLocale.get(new GCore.GLocaleKey('GAnnotationsSidebar', 'text.hover-notification'))
        );
      return (
        exports
          .find('span')
          .addClass('highlight')
          .click(() => {
            new GSettingsDialog().then((e) => e.open());
          }),
        exports
      );
    }

    _openHoverNotification(e) {
      let module = this._createHoverNotificationFrag(),
        require = $('body').find('.g-annotation-sidebar-notification-menu')[0];
      if (
        (module.appendTo($('body')),
        document.addEventListener('click', this._removeHoverNotificationFrag),
        require &&
          (require.addEventListener('mouseenter', function () {
            let e = $('body').find('.hover-notification-container');
            e.length && $(e[0]).css('display', 'block');
          }),
          require.addEventListener('mouseleave', function () {
            let e = $('body').find('.hover-notification-container');
            e.length &&
              setTimeout(function () {
                $(e[0]).css('display', 'none');
              }, 250);
          }),
          $(require)
            .find('li')
            .map((e, t) => {
              t.addEventListener('mousedown', function () {
                let e = $('body').find('.hover-notification-container');
                e.length && $(e[0]).css('display', 'none');
              });
            })),
        module.parent().is('body'))
      ) {
        var _interopRequireDefault = module.outerWidth(),
          GTools = module.outerHeight(),
          GCore = $(window).width(),
          r = $(window).height(),
          GMenu = { x: 0, y: 0, width: 0, height: 0 },
          GMenu2 = $(e),
          GRichTooltipConfig = GMenu2.offset();
        ((GMenu.x = GRichTooltipConfig.left),
          (GMenu.y = GRichTooltipConfig.top),
          (GMenu.width = GMenu2.outerWidth()),
          (GMenu.height = GMenu2.outerHeight()));
        var GTouchTool = 0;
        (GTouchTool = GMenu.x + GMenu.width) + _interopRequireDefault > GCore &&
          (GTouchTool = GMenu.x - _interopRequireDefault);
        var GSettingsDialog = 0;
        (GSettingsDialog = GMenu.y + GMenu.height) + GTools > r &&
          (GSettingsDialog = GMenu.y - GTools);
        const n = this._rangeLeftX ? this._rangeLeftX : 0;
        GTouchTool < n && (GTouchTool = n);
        const p = this._rangeRightX ? this._rangeRightX : GCore;
        GTouchTool + _interopRequireDefault >= p && (GTouchTool = p - _interopRequireDefault);
        const GDocumentEvent = this._rangeLeftY ? this._rangeLeftY : 0;
        GSettingsDialog < GDocumentEvent && (GSettingsDialog = GDocumentEvent);
        const h = this._rangeRightY ? this._rangeRightY : r;
        GSettingsDialog + GTools >= h && (GSettingsDialog = h - GTools);
        const GSidebarContainer = GSettingsDialog - GTools - 10;
        (module.css('left', GTouchTool),
          module.css('top', GSidebarContainer),
          module.addClass('g-menu-right g-menu-bottom'));
      }
    }

    _removeHoverNotificationFrag() {
      let exports = $('body').find('.hover-notification-container');
      exports.length &&
        (exports.remove(),
        document.removeEventListener('click', this._removeHoverNotificationFrag));
    }

    static ANNOTATION_PROPERTIES_ARROW_POSITION = [32.5, 44, 55.5, 67, 78.5, 90];

    static ANNOTATION_PROPERTIES_ARROW_POSITION_TOUCH = [25.5, 38, 50.5, 63, 75.5, 88];

    static ID = GOutlineSidebar.SidebarsIds.GAnnotationsSidebar;

    static TITLE = new GCore.GLocaleKey('GAnnotationsSidebar', 'text.title');

  }
  exports.exports = N;
}