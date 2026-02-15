/**
 * Webpack Module #1544
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(58) /* polyfill_Array_includes */,
    require(57) /* polyfill_parseInt */,
    require(8) /* polyfill_bundle_ES6 */,
    require(71) /* polyfill_String_includes */,
    require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10) /* AppSettings */,
    r = require(357) /* module_357 */,
    CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
    GOfflineDialog = _interopRequireDefault(require(256) /* GOfflineDialog */),
    GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */),
    ExternalFileSettingsError = _interopRequireDefault(
      require(734) /* ExternalFileSettingsError */
    ),
    GDocument = require(163) /* GDocument */,
    GOpenAction = require(813) /* GOpenAction */,
    GObject_1299 = require(1299) /* GObject_1299 */,
    GCloudStorage = require(119) /* GCloudStorage */,
    GFilesPanel = require(1545) /* GFilesPanel */,
    GCloudTemplatesPanel = require(1558) /* GCloudTemplatesPanel */,
    GPresets = require(1153) /* GPresets */,
    { youtubePlaylist: v } = require(1302) /* module_1302 */,
    GLoginPanel = require(446);
  require(220) /* Item */;
  const DataModule_859 = require(859) /* DataModule_859 */,
    GEvent_license = require(441);
  class C extends GCore.GObject {
    constructor() {
      super();
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null;
      var t = this._createFooter(),
      n = this;
      (this._createOption.bind(this),
      this._createPresetsFrame.bind(this),
      this.open.bind(this),
      this.isOpen.bind(this),
      this.close.bind(this),
      this._newDocumentCustomSize.bind(this),
      this.getDialogElement.bind(this),
      (this._openFromCloud = false),
      (this._parentDialogInstance = exports),
      (this._spectatorModeClazz = 'on-spectator-mode'),
      (this._cb = null),
      (this._dialog = $('<div></div>')));
      $('<div></div>')
      .addClass('links')
      .append(
      $('<div></div>')
      .addClass('loader')
      .text(GCore.GLocale.get(new GCore.GLocaleKey('GLocale', 'loading')) + '...')
      );
      var _interopRequireDefault = $('<div></div>').addClass('sidebar').appendTo(this._dialog);
      AppSettings.LICENSE.UPGRADEABLE &&
      (gDesigner.getApplicationManager().isLicenseUpgradeable() ||
      _interopRequireDefault.addClass('on-pro'));
      var CollaborationMergeUtils = $('<div/>')
      .addClass('sidebar-options')
      .appendTo(_interopRequireDefault),
      GDocument = $('<div></div>').addClass('frame').appendTo(this._dialog),
      GOpenAction = this._createPresetsFrame().appendTo(GDocument),
      GObject_1299 = null;
      this._createSeparator(CollaborationMergeUtils, 'start-option');
      var GCloudTemplatesPanel = function (e) {
      (this._dialog.find('.sidebar-options').find('.option').removeClass('active'),
      this._dialog.find('.sidebar-options').find(e).addClass('active'));
      }.bind(this),
      GPresets = function () {
      (this._dialog.find('.option.start-option').trigger('click'),
      this._dialog.find('.frame').removeClass('cloud-frame'),
      this._dialog.find('.g-dialog-content').removeClass('cloud-dialog'),
      this._dialog.parent().removeClass('cloud-files-dialog'),
      GCloudTemplatesPanel('.start-option'));
      }.bind(this);
      (this._createOption(
      CollaborationMergeUtils,
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.start-option')),
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.start-option-description')
      ),
      'start-option',
      function (e) {
      (GDocument.children().detach(), GDocument.append(GOpenAction));
      var t = gDesigner.getSetting('show_welcome_screen'),
      _interopRequireDefault = 'boolean' != typeof t || t;
      (e || n._isSpectatorMode() || gDesigner.stats('newdocumentdialog_click_newdesign'),
      $('<div></div>')
      .addClass('footer-section')
      .append(
      $('<label></label>')
      .text(
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.start-option-check')
      )
      )
      .append(
      $('<input>')
      .attr('type', 'checkbox')
      .prop('checked', !_interopRequireDefault)
      .on('change', (e) => {
      (gDesigner.stats(
      'newdocumentdialog_toggle_show-welcome-screen',
      _interopRequireDefault ? 'enable' : 'disable'
      ),
      gDesigner.setSetting('show_welcome_screen', !$(e.target).is(':checked')));
      })
      )
      )
      .appendTo(GDocument),
      n._isSpectatorMode() || GCloudTemplatesPanel('.start-option'));
      }
      ),
      this._createSeparator(CollaborationMergeUtils, 'templates-option'),
      this._createOption(
      CollaborationMergeUtils,
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-option')),
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-option-description')
      ),
      'templates-option',
      function (e) {
      if (n._isSpectatorMode()) return;
      const t = function () {
      (e || gDesigner.stats('newdocumentdialog_click_templates'),
      gDesigner.getUser().then((e) => {
      let t = (e) => {
      if (!e) return (GDocument.removeClass('loading'), void GPresets());
      n._loadTemplates();
      };
      e
      ? t(e)
      : AppSettings.LOGIN_DIALOGS.POPUP
      ? GCloudStorage.performLogin().then(t)
      : n._createCloudLoginFrame('template', t, GDocument);
      }));
      };
      gDesigner.isOffline() ? GOfflineDialog.default.openUnavailableFeature(t) : t();
      }
      ),
      this._createSeparator(CollaborationMergeUtils, 'cloud-option'),
      this._createOption(
      CollaborationMergeUtils,
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-option')),
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-option-description')
      ),
      'cloud-option',
      function (e, t, _interopRequireDefault, GCore, r, CollaborationMergeUtils) {
      const GSystemDialog = function () {
      (e || gDesigner.stats('newdocumentdialog_open_cloudfiles'),
      n._openFromCloud
      ? (GDocument.children().detach(),
      GDocument.addClass('loading'),
      GCloudTemplatesPanel('.cloud-option'),
      GFilesPanel.isMaximized().then((e) => {
      e && GDocument.closest('.g-dialog-container').addClass('fullscreen');
      }),
      gDesigner.getUser().then((e) => {
      let GOfflineDialog = (e) => {
      if ((GDocument.children().detach(), !e))
      return (GDocument.removeClass('loading'), void n.close());
      (GObject_1299 || (GObject_1299 = $('<div/>').addClass('cloud-workspace')),
      GDocument.append(GObject_1299),
      GObject_1299.empty(),
      n._loadCloudFiles(
      GObject_1299,
      t,
      _interopRequireDefault,
      GCore,
      r,
      CollaborationMergeUtils
      ));
      };
      e
      ? GOfflineDialog(e)
      : AppSettings.LOGIN_DIALOGS.POPUP
      ? GCloudStorage.performLogin().then(GOfflineDialog)
      : n._createCloudLoginFrame('cloud', GOfflineDialog, GDocument);
      }))
      : new GLoginPanel(() => {
      let e = {
      closable: true,
      showCloudOptions: true,
      openFromCloud: true,
      closeCallback: () => {
      n._parentDialogInstance && n._parentDialogInstance.close();
      },
      };
      new C(n).open(e);
      }));
      };
      return gDesigner.isOffline()
      ? GOfflineDialog.default.openUnavailableFeature(GSystemDialog)
      : GSystemDialog();
      }
      ),
      this._createSeparator(CollaborationMergeUtils, 'local-option'),
      this._createOption(
      CollaborationMergeUtils,
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.local-option')),
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.local-option-description')
      ),
      'local-option',
      function (e) {
      (e || gDesigner.stats('newdocumentdialog_click_opendocument'), this._openDocument());
      }.bind(this),
      true
      ),
      this._createSeparator(CollaborationMergeUtils, 'recent-option'));
      var v = this._createOption(
      CollaborationMergeUtils,
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.recent-option')),
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.recent-option-description')
      ),
      'recent-option',
      function (e) {
      e || gDesigner.stats('newdocumentdialog_click_recent');
      var t = $('<div></div>').gOverlay({
      releaseOnClose: true,
      clazz: 'g-recent-documents',
      padding: false,
      }),
      n = $('<div></div>').addClass('menu').appendTo(t),
      _interopRequireDefault = gContainer.getRecentDocuments();
      _interopRequireDefault && _interopRequireDefault.length
      ? _interopRequireDefault.forEach((e) => {
      var t = gContainer.getRecentDocumentIconClass(e);
      $('<div></div>')
      .addClass('item file')
      .data('file', e)
      .on('click', async (e) => {
      gDesigner.stats('newdocumentdialog_click_openrecentdocument');
      try {
      gDesigner.openDocument($(e.target).closest('.file').data('file'));
      } catch (e) {
      if (!(e instanceof ExternalFileSettingsError.default)) throw (this.close(), e);
      GSystemDialog.default.externalFileError(true);
      }
      this.close();
      })
      .append(
      $('<div/>')
      .addClass('icon')
      .addClass(t || '')
      )
      .append(
      $('<div/>')
      .addClass('name')
      .append(e.getName() + '.' + e.getExtension().toLowerCase())
      )
      .appendTo(n);
      })
      : $('<div></div>')
      .addClass('item')
      .append(
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.recent-option-empty')
      )
      )
      .appendTo(n);
      var AppSettings = v.offset().left + v.width() - 10,
      r = v.offset().top - t.height();
      t.gOverlay('open', { x: AppSettings, y: r });
      }.bind(this),
      true
      );
      (this._createSeparator(CollaborationMergeUtils),
      AppSettings.LICENSE.UPGRADEABLE &&
      $('<div></div>')
      .addClass('activate-trial')
      .css('display', gDesigner.getApplicationManager().isLicenseUpgradeable() ? '' : 'none')
      .append(
      $('<div></div>')
      .addClass('title')
      .html(
      GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.try-out-pro'))
      )
      )
      .append(
      $('<div></div>')
      .addClass('subtitle')
      .html(
      GCore.GLocale.get(
      new GCore.GLocaleKey('GNewDocumentDialog', 'text.start-free-trial')
      )
      )
      )
      .on('click', () => gDesigner.activateTrialLicense().then(() => this._updateUI()))
      .appendTo(_interopRequireDefault));
      var DataModule_859 = $('<div></div>').addClass('footer').appendTo(_interopRequireDefault),
      GEvent_license = $('<div />').addClass('links-container').appendTo(DataModule_859),
      x = $('<div/>').addClass('links-column').appendTo(GEvent_license),
      S = $('<div/>').addClass('links-column').appendTo(GEvent_license),
      E = $('<div/>').addClass('links-column').appendTo(GEvent_license),
      A = 0;
      (t.forEach((e) => {
      e.links.forEach((e) => {
      var t = $('<div/>').addClass('link');
      ($('<div/>').addClass('link-icon').appendTo(t),
      $('<a/>')
      .on('click', function (t) {
      (e.statType
      ? gDesigner.stats(e.statType)
      : gDesigner.stats(
      'newdocumentdialog_open_externallink',
      GCore.GLocale.get(e.labelLocale, null, GCore.GLocaleLanguage.English)
      ),
      e.click ? e.click.call(this) : gContainer.openExternalLink(t, e.href));
      })
      .text(GCore.GLocale.get(e.labelLocale || e.text))
      .appendTo(t),
      A % 3 == 0 ? t.appendTo(x) : A % 3 == 1 ? t.appendTo(S) : t.appendTo(E),
      ++A);
      });
      }),
      r.SHOW_BETA_BRANDING &&
      gDesigner.isBeta() &&
      $('<div/>').addClass('beta-badge').attr('title', 'βETA').appendTo(_interopRequireDefault),
      this._getVersionInfoWidget().appendTo(_interopRequireDefault),
      (this._closeCallbackListeners = []),
      this._dialog.gDialog({
      closeTimeout: 0,
      releaseOnClose: false,
      className: 'g-new-document-dialog',
      closeCallback: (e) => {
      (this._closeCallback && this._closeCallback(e),
      this._closeCallbackListeners.length &&
      (this._closeCallbackListeners.forEach((t) => t.call(null, e)),
      (this._closeCallbackListeners = [])));
      },
      alwaysCloseable: true,
      }),
      document.addEventListener(
      'keydown',
      function (e) {
      13 === e.keyCode && this._dialog.gDialog('isOpen') && this._newDocumentCustomSize();
      }.bind(this)
      ));
    }

    _getVersionInfoWidget() {
      let exports = '';
      'lts' === gDesigner.getEnv()
        ? (exports = ' LTS')
        : 'rc' === gDesigner.getEnv() && (exports = ' Staging');
      const module = DataModule_859.getRuntime();
      return (
        module && (exports += ' '.concat(module.abbr)),
        $('<div/>')
          .addClass('version')
          .html(
            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.version')) +
              ' ' +
              gDesigner.getVersionFriendlyName() +
              exports
          )
          .on('click', function () {
            if (
              (gDesigner.stats('newdocumentdialog_show_gravitversion'),
              'production' !== gDesigner.getEnv() &&
                'lts' !== gDesigner.getEnv() &&
                'rc' !== gDesigner.getEnv())
            ) {
              var module = $(this),
                require = module.data('nfo');
              (require || module.data('nfo', (require = { current: 0 })),
                (function (n) {
                  switch (((n.current = (n.current + 1) % 4), n.current)) {
                    case 0:
                      module.html(
                        GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.version')) +
                          ' ' +
                          gDesigner.getVersionFriendlyName() +
                          exports
                      );
                      break;
                    case 1:
                      module.html(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey('GCommonNames', 'text.internal-version')
                        ) +
                          ': ' +
                          gDesigner.getVersion()
                      );
                      break;
                    case 2:
                      module.html(
                        GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.build')) +
                          ': ' +
                          (gDesigner.getBuildNum() || '')
                      );
                      break;
                    case 3:
                      module.html(
                        GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.commit')) +
                          ': ' +
                          (gDesigner.getCommitSHA() || '').substr(0, 8)
                      );
                  }
                })(require));
            }
          })
      );
    }

    _licenseChangedEvent(e) {
      this._updateUI();
    }

    _updateUI() {
      if (AppSettings.LICENSE.UPGRADEABLE) {
        const e = gDesigner.getApplicationManager().isLicenseUpgradeable();
        (this._dialog.find('.activate-trial').css('display', e ? '' : 'none'),
          this._dialog.find('.sidebar').toggleClass('on-pro', !e));
      }
      (this._dialog.find('.templates-option').css('display', gDesigner.isOffline() ? 'none' : ''),
        this._dialog.find('.cloud-option').css('display', gDesigner.isOffline() ? 'none' : ''),
        this._updateForUserLicense());
    }

    getDialogElement() {
      return this._dialog;
    }

    _updateForUserLicense() {
      const exports = this._dialog.find('.header'),
        module = this._dialog.find('.presets-frame'),
        require = exports.find('.preset .g-input'),
        _interopRequireDefault = module.find('.presets .preset');
      if (!this._isSpectatorMode())
        return (
          this._dialog
            .find('.start-option')
            .removeClass(this._spectatorModeClazz)
            .removeAttr('data-title'),
          this._dialog
            .find('.templates-option')
            .removeClass(this._spectatorModeClazz)
            .removeAttr('data-title'),
          module.removeClass(this._spectatorModeClazz),
          exports.removeClass(this._spectatorModeClazz),
          exports.find('.select-overlay').remove(),
          require
            .find('input')
            .removeAttr('readonly')
            .removeAttr('disabled')
            .removeAttr('data-title'),
          require
            .find('select')
            .removeAttr('disabled')
            .removeAttr('data-title')
            .removeClass('g-disabled'),
          require
            .find('.cloud-button')
            .removeAttr('disabled')
            .removeAttr('data-title')
            .removeClass('g-disabled')
            .addClass('active'),
          _interopRequireDefault.find('.icon').removeAttr('data-title'),
          void _interopRequireDefault.find('.select-container').removeAttr('data-title')
        );
      const AppSettings = GCore.GLocale.get(
        new GCore.GLocaleKey('GNewDocumentDialog', 'text.option-not-available-in-view-mode')
      );
      (this._dialog
        .find('.start-option')
        .addClass(this._spectatorModeClazz)
        .attr('data-title', AppSettings),
        this._dialog
          .find('.templates-option')
          .addClass(this._spectatorModeClazz)
          .attr('data-title', AppSettings),
        module.addClass(this._spectatorModeClazz),
        exports.addClass(this._spectatorModeClazz),
        require
          .find('input')
          .attr('readonly', true)
          .attr('disabled', true)
          .attr('data-title', AppSettings),
        require
          .find('select')
          .attr('disabled', true)
          .attr('data-title', AppSettings)
          .addClass('g-disabled')
          .insertAfter(),
        require
          .find('.cloud-button')
          .attr('data-title', AppSettings)
          .addClass('g-disabled')
          .removeClass('active'),
        _interopRequireDefault.find('.icon').attr('data-title', AppSettings),
        _interopRequireDefault.find('.select-container').attr('data-title', AppSettings),
        exports.find('.select-overlay').length ||
          $('<div>')
            .addClass('select-overlay')
            .attr('data-title', AppSettings)
            .insertAfter(exports.find('.preset .g-input select')));
    }

    _createOption(e, t, n, _interopRequireDefault, GCore, AppSettings) {
      var r = $('<div/>')
        .addClass('option')
        .addClass(_interopRequireDefault)
        .on(
          'click',
          function (e, t, n, _interopRequireDefault, CollaborationMergeUtils, GOfflineDialog) {
            (this._dialog.find('.frame').removeClass('loading'),
              AppSettings ||
                (this._dialog
                  .find('.sidebar-options')
                  .find('.option-separator')
                  .removeClass('active'),
                $(r).prevAll('.option-separator:visible').first().addClass('active'),
                $(r).nextAll('.option-separator:visible').first().addClass('active')),
              GCore(
                true & e.isTrigger,
                t,
                n,
                _interopRequireDefault,
                CollaborationMergeUtils,
                GOfflineDialog
              ));
          }.bind(this)
        )
        .appendTo(e);
      $('<div/>').addClass('option-icon').appendTo(r);
      var CollaborationMergeUtils = $('<div/>').addClass('option-text').appendTo(r);
      return (
        $('<div/>').addClass('option-title').html(t).appendTo(CollaborationMergeUtils),
        $('<div/>').addClass('option-subtitle').html(n).appendTo(CollaborationMergeUtils),
        r
      );
    }

    _createFooter() {
      return [
        {
          section: GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.connect')),
          links: [
            {
              href: '',
              labelLocale: new GCore.GLocaleKey('GNewDocumentDialog', 'text.example-files'),
              statType: 'newdocumentdialog_click_example-files',
              click: () => {
                const exports = () =>
                  new C().open({
                    closable: true,
                    openFromCloud: true,
                    showCloudOptions: true,
                    nativeCloud: true,
                    showExampleFiles: true,
                  });
                gDesigner.isOffline()
                  ? GOfflineDialog.default.openUnavailableFeature(exports)
                  : exports();
              },
            },
            {
              href: v,
              labelLocale: new GCore.GLocaleKey('GOpenLinkAction', 'title.tutorials'),
            },
            {
              href: '',
              labelLocale: new GCore.GLocaleKey('GOpenLinkAction', 'title.user-guide'),
            },
          ],
        },
      ];
    }

    _createSeparator(e, t) {
      $('<div/>').addClass('option-separator').addClass(t).appendTo(e);
    }

    _createPresetsFrame() {
      var e = $('<div></div>').addClass('presets-container'),
        t = $('<div/>').addClass('header').appendTo(e),
        n = $('<div></div>')
          .addClass('presets')
          .appendTo($('<div/>').addClass('presets-frame').appendTo(e));
      (GPresets.getPresets(true).forEach((e, t) => {
        $('<div/>')
          .addClass('preset')
          .data('preset', e)
          .append($('<p/>').addClass('title').text(e.name))
          .append(
            $('<div/>')
              .addClass('icon')
              .on('click', (t) => {
                this._isSpectatorMode() || this._showPresetDropdown(t, e);
              })
              .append($('<img/>').attr('src', 'assets/img/new-document/' + e.icon + '-white.svg'))
              .append(
                $('<img/>')
                  .attr('src', 'assets/img/new-document/' + e.icon + '-black.svg')
                  .addClass('hover')
              )
          )
          .append(
            $('<div/>')
              .addClass('select-container')
              .append([
                $('<p/>')
                  .addClass('name')
                  .text(e.subTitle)
                  .on('click', (t) => {
                    this._isSpectatorMode() || this._showPresetDropdown(t, e);
                  }),
              ])
          )
          .appendTo(n);
      }),
        $('<div/>')
          .addClass('preset')
          .append(
            $('<p/>')
              .addClass('title')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-option')
                )
              )
          )
          .append(
            $('<div/>')
              .addClass('icon')
              .on('click', () => {
                this._isSpectatorMode() ||
                  this._dialog.find('.sidebar-options').find('.templates-option').trigger('click');
              })
              .css('padding-bottom', '42px')
              .append($('<img/>').attr('src', 'assets/img/new-document/preset-templates-white.svg'))
              .append(
                $('<img/>')
                  .attr('src', 'assets/img/new-document/preset-templates-black.svg')
                  .addClass('hover')
              )
          )
          .appendTo(n));
      var _interopRequireDefault = (e) =>
        13 === e.keyCode ? this._newDocumentCustomSize() : undefined;
      return (
        $('<div/>')
          .addClass('preset custom-size')
          .append(
            $('<div/>')
              .addClass('g-input')
              .on('click', (e) => e.stopPropagation())
              .append(
                $('<div/>')
                  .addClass('input-holder')
                  .append(
                    $('<div/>')
                      .append(
                        $('<input/>')
                          .on('keydown', _interopRequireDefault)
                          .attr('name', 'width')
                          .attr(
                            'placeholder',
                            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.width'))
                          )
                          .val('')
                          .gInputBox({
                            minValue: 0,
                            incrementValue: 1,
                            allowEmptyValue: true,
                          })
                      )
                      .append($('<img/>').addClass('versus').attr('src', 'assets/icon/versus.svg'))
                      .append(
                        $('<input/>')
                          .on('keydown', _interopRequireDefault)
                          .attr('name', 'height')
                          .attr(
                            'placeholder',
                            GCore.GLocale.get(new GCore.GLocaleKey('GCommonNames', 'text.height'))
                          )
                          .val('')
                          .gInputBox({
                            minValue: 0,
                            incrementValue: 1,
                            allowEmptyValue: true,
                          })
                      )
                  )
              )
              .append($('<select/>').attr('name', 'unit').val('px').gUnit({ short: true }))
              .on('change', function (e) {
                var t = $(this).find(':selected').val() || 'px';
                'undefined' != typeof gDesigner &&
                  gDesigner.stats('newdocumentdialog_change_unit', t);
              })
              .append($('<img/>').addClass('result').attr('src', 'assets/icon/result.svg'))
              .append(
                $('<button/>')
                  .addClass('cloud-button')
                  .append(
                    $('<span/>').text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey('GNewDocumentDialog', 'action.create-canvas')
                      )
                    )
                  )
                  .addClass('active')
                  .on('click', () => {
                    this._isSpectatorMode() || this._newDocumentCustomSize();
                  })
              )
          )
          .append(
            $('<p/>')
              .addClass('infinite-canvas')
              .text(
                GCore.GLocale.get(
                  new GCore.GLocaleKey('GNewDocumentDialog', 'action.leave-empty-infinite')
                )
              )
          )
          .appendTo(t),
        r.NEWDOCUMENTDIALOG.HR_UNDER_PRESETS && $('<hr/>').appendTo(t),
        e
      );
    }

    _createCloudLoginFrame(e, t, n) {
      if (0 === $(n).children().length) {
        n.removeClass('loading');
        var _interopRequireDefault = $('<div/>').addClass('cloud-login').addClass(e),
          AppSettings = 'template' === e;
        $('<div/>').addClass('cloud-logo').addClass(e).appendTo(_interopRequireDefault);
        var r = AppSettings
            ? GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-login-title')
              )
            : GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-login-title')
              ),
          CollaborationMergeUtils = AppSettings
            ? GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-login-phrase1')
              )
            : GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-login-phrase1')
              ),
          GOfflineDialog = AppSettings
            ? GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.templates-login-phrase2')
              )
            : GCore.GLocale.get(
                new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-login-phrase2')
              );
        ($('<div/>').html(r).addClass('title').addClass(e).appendTo(_interopRequireDefault),
          $('<div/>')
            .html(CollaborationMergeUtils)
            .addClass('subtitle')
            .addClass('first')
            .addClass(e)
            .appendTo(_interopRequireDefault),
          $('<div/>')
            .html(GOfflineDialog)
            .addClass('subtitle')
            .addClass('second')
            .addClass(e)
            .appendTo(_interopRequireDefault),
          $('<div/>')
            .addClass('login-buttons')
            .append(
              $('<div/>')
                .addClass('g-button cloud-login-button')
                .addClass('login')
                .html(
                  GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-login'))
                )
                .on('click', function () {
                  GCloudStorage.performLogin().then(function (e) {
                    t && t(e);
                  });
                })
            )
            .append(
              $('<div/>')
                .addClass('g-button cloud-login-button')
                .html(
                  GCore.GLocale.get(new GCore.GLocaleKey('GNewDocumentDialog', 'text.cloud-signup'))
                )
                .on('click', function () {
                  GCloudStorage.performSignup().then(function (e) {
                    t && t(e);
                  });
                })
            )
            .appendTo(_interopRequireDefault),
          n.append(_interopRequireDefault));
      }
    }

    _loadCloudFiles(e, t, n, _interopRequireDefault, GCore, AppSettings) {
      this.handled = false;
      var r = new GFilesPanel({
          parentComponent: e,
          closeCallback: async function (e) {
            ((this.handled = true),
              await this.close(),
              this._parentDialogInstance && (await this._parentDialogInstance.close()),
              e || (n && n()));
          }.bind(this),
          documentToSave: t,
          cancelSave: async function () {
            ((this.handled = true), await this.close(), n && n());
          }.bind(this),
          defaultFilename: _interopRequireDefault,
          readyStateChange: this.readyStateChange,
          nativeCloud: GCore,
          showExampleFiles: AppSettings,
        }),
        CollaborationMergeUtils = () => {
          var e = this._closeCallbackListeners.indexOf(CollaborationMergeUtils);
          (this._closeCallbackListeners.splice(e, 1),
            this.handled || (n && n()),
            r.handleParentClose());
        };
      this._closeCallbackListeners.push(CollaborationMergeUtils);
    }

    _loadTemplates() {
      new GCloudTemplatesPanel(
        function () {
          this.close();
        }.bind(this)
      );
    }

    open(e) {
      let {
        closable: module,
        cb: require,
        showCloudOptions: _interopRequireDefault,
        openFromCloud: GCore,
        defaultOption: AppSettings,
        newOrFromTemplate: r,
        documentToSave: CollaborationMergeUtils,
        cancelSaveCallback: GOfflineDialog,
        defaultFilename: GSystemDialog,
        closeCallback: ExternalFileSettingsError,
        nativeCloud: GDocument,
        showExampleFiles: GOpenAction,
      } = e;
      ((this._cb = require || null),
        (this._closeCallback = ExternalFileSettingsError),
        (this._openFromCloud = GCore));
      GCloudStorage.isOnline();
      var GObject_1299 = function () {
          (this._dialog.find('.sidebar').css('display', ''),
            this._dialog.find('.sidebar-options').find('.option').css('display', ''),
            this._dialog.find('.sidebar-options').find('.option-separator').css('display', ''),
            this._dialog.find('.sidebar').find('.footer').css('display', ''),
            this._dialog.find('.sidebar').find('.version').css('display', ''));
        }.bind(this),
        GFilesPanel = function () {
          (this._dialog.find('.cloud-option').css('display', _interopRequireDefault ? '' : 'none'),
            this._dialog.find('.option.start-option').trigger('click'),
            this._dialog.find('.frame').removeClass('cloud-frame'),
            this._dialog.find('.g-dialog-content').removeClass('cloud-dialog'),
            this._dialog.parent().removeClass('cloud-files-dialog'),
            _interopRequireDefault &&
              GCore &&
              (this._dialog.find('.sidebar').css('display', 'none'),
              this._dialog.addClass('cloud-dialog'),
              this._dialog.parent().addClass('cloud-files-dialog'),
              this._dialog.find('.frame').addClass('cloud-frame'),
              this._dialog
                .find('.cloud-option')
                .trigger('click', [
                  CollaborationMergeUtils,
                  GOfflineDialog,
                  GSystemDialog,
                  GDocument,
                  GOpenAction,
                ])),
            AppSettings && this._dialog.find('.' + AppSettings).trigger('click'));
        }.bind(this);
      (this._dialog.gDialog('open', module),
        GObject_1299(),
        GFilesPanel(),
        this._updateUI(),
        this._closeCallbackListeners.push(() => {
          gDesigner.removeEventListener(GEvent_license, this._licenseChangedEvent, this);
        }),
        gDesigner.addEventListener(GEvent_license, this._licenseChangedEvent, this));
    }

    saveCloudFile(e, t, n, _interopRequireDefault, GCore) {
      let AppSettings = {
        closable: true,
        showCloudOptions: true,
        openFromCloud: true,
        cancelSaveCallback: t,
        documentToSave: e,
        defaultFilename: n,
        nativeCloud: GCore,
      };
      ((this.readyStateChange = _interopRequireDefault), this.open(AppSettings));
    }

    isOpen() {
      return this._dialog.gDialog('isOpen');
    }

    close() {
      return (
        this._dialog.parent().removeClass('cloud-files-dialog'),
        this._dialog.gDialog('close', false, 0),
        (0, CollaborationMergeUtils.sleep)(0)
      );
    }

    async _newDocumentFromPreset(e, t, n) {
      var _interopRequireDefault = this._dialog.find('.frame'),
        r = e.layouts[t];
      if (
        (gDesigner.stats(
          'newdocumentdialog_new_document-from-preset',
          n ||
            (r.localeClass
              ? GCore.GLocale.get(r.localeClass, null, GCore.GLocaleLanguage.English)
              : r.name),
          false,
          true
        ),
        gDesigner.getAmplitudeHelper().logEvent(AppSettings.AmplitudeData.Events.DOCUMENT_CREATED, {
          DOCUMENT_CATEGORY: e.nameEn,
          DOCUMENT_TYPE: this._getLayoutDisplayName(r),
          DOCUMENT_TEMPLATE_ID: e.id,
        }),
        r.template)
      )
        try {
          _interopRequireDefault.addClass('loading');
          var CollaborationMergeUtils = new GDocument(),
            GOfflineDialog = await AppSettings.gApi.getPresetTemplate({ type: r.template });
          (_interopRequireDefault.removeClass('loading'),
            gDesigner.addDocument(CollaborationMergeUtils),
            CollaborationMergeUtils.setDocumentFromTemplate(true),
            CollaborationMergeUtils.loadFromData(GOfflineDialog.data),
            this.close(),
            this._cb && this._cb());
        } catch (e) {
          (_interopRequireDefault.hasClass('loading') &&
            _interopRequireDefault.removeClass('loading'),
            this._newDocument(r.width, r.height, r.unit, r.dpi));
        }
      else this._newDocument(r.width, r.height, r.unit, r.dpi);
    }

    _newDocumentCustomSize() {
      (gDesigner.stats('newdocumentdialog_new_custom-sized'),
        gDesigner.getAmplitudeHelper().logEvent(AppSettings.AmplitudeData.Events.DOCUMENT_CREATED, {
          DOCUMENT_CATEGORY: 'Blank',
          DOCUMENT_TYPE: 'Blank',
        }));
      var e = this._dialog.find('.preset.custom-size'),
        t = e.find('[name="width"]').gInputBox('value'),
        n = e.find('[name="height"]').gInputBox('value'),
        _interopRequireDefault = e.find('[name="unit"]').val(),
        GCore = '' === t,
        r = '' === n,
        CollaborationMergeUtils = GCore ? 0 : parseInt(t),
        GOfflineDialog = r ? 0 : parseInt(n);
      isNaN(CollaborationMergeUtils) ||
        isNaN(GOfflineDialog) ||
        !_interopRequireDefault ||
        (!CollaborationMergeUtils && !GCore) ||
        (!GOfflineDialog && !r) ||
        this._newDocument(t, n, _interopRequireDefault);
    }

    _newDocument(e, t, n, _interopRequireDefault) {
      var AppSettings = gDesigner.createScene();
      (AppSettings.setProperties(['ut', 'dpi'], [n, _interopRequireDefault || GCore.GLength.DPI]),
        AppSettings.getActivePage().setProperties(
          ['bck', 'w', 'h'],
          [
            GCore.GRGBColor.WHITE,
            new GCore.GLength(e, n).toPoint(),
            new GCore.GLength(t, n).toPoint(),
          ]
        ),
        gDesigner.addDocument(new GDocument(AppSettings)),
        this.close(),
        this._cb && this._cb());
    }

    _openDocument() {
      gDesigner.executeAction(
        gDesigner.getAction(GObject_1299.ID).isAvailable() ? GObject_1299.ID : GOpenAction.ID,
        [null, this.close.bind(this)],
        undefined,
        true
      );
    }

    _getLayoutFormattedSize(e) {
      var t = e.includes,
        n = '';
      if (t) {
        for (
          var _interopRequireDefault = [], GCore = 0, AppSettings = t.length;
          GCore < AppSettings;
          GCore++
        ) {
          var r = t[GCore];
          _interopRequireDefault.push(r.width + 'x' + r.height);
        }
        n = _interopRequireDefault.join(', ') + ' ' + e.unit;
      } else n = e.width + 'x' + e.height + ' ' + e.unit;
      return n;
    }

    _getLayoutDisplayName(e) {
      return e.name + ' (' + this._getLayoutFormattedSize(e) + ')';
    }

    _showPresetDropdown(e, t) {
      e.stopPropagation();
      var n = $(e.target).closest('.preset').find('.name'),
        _interopRequireDefault = $('<ul/>');
      (t.layouts.forEach((e, n) => {
        var AppSettings = $('<li/>')
          .attr('data-value', n)
          .text(this._getLayoutDisplayName(e))
          .on('click', (e) => {
            _interopRequireDefault.gOverlay('close');
            var n = parseInt($(e.target).attr('data-value')),
              AppSettings = '';
            ((AppSettings = t.localeClass
              ? GCore.GLocale.get(t.localeClass, null, GCore.GLocaleLanguage.English)
              : t.name || ''),
              (AppSettings = t.layouts[n].localeClass
                ? AppSettings +
                  '/' +
                  GCore.GLocale.get(t.layouts[n].localeClass, null, GCore.GLocaleLanguage.English)
                : AppSettings + '/' + t.layouts[n].name),
              'undefined' != typeof gDesigner &&
                gDesigner.stats('newdocumentdialog_change_preset', AppSettings),
              this._newDocumentFromPreset(t, n, AppSettings));
          });
        _interopRequireDefault.append(AppSettings);
      }),
        _interopRequireDefault.gOverlay({ clazz: 'preset-select', padding: false, offsetY: 10 }),
        _interopRequireDefault.gOverlay('open', n));
    }

    _isSpectatorMode() {
      return false;
    }

  }
  exports.exports = C;
}