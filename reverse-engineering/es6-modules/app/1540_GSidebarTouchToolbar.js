/**
 * Webpack Module #1540
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(4) /* stub_requires_668 */,
    require(13) /* stub_requires_679 */,
    require(32) /* stub_requires_670 */,
    require(33)) /* polyfill_DOMCollection_forEach */;
  var GSidebarContainer = require(395); /* GSidebarContainer */
  ((GSidebarContainer.prototype._rightSidebarDefaultWidthForTouch = 300),
    (GSidebarContainer.prototype._updateTouchToolbar = function (e) {
      const module = ['fill', 'border', 'effect'];
      if (!gDesigner.isTouchEnabled()) return;
      this._touchToolbar ||
        (this._touchToolbar = $('<div/>').addClass('g-touch-toolbar').prependTo(this._htmlElement));
      let require = null;
      (this._touchToolbar.empty(),
        this.removeClassName('align-active'),
        this._sidebars.forEach((GSidebarContainer) => {
          let { sidebar: i, container: a } = GSidebarContainer;
          const r = i.getTouchTools(e);
          i &&
            i.isVisible() &&
            r &&
            r.forEach((e) => {
              e.sidebar = i.getId();
              const GSidebarContainer = !!this._activeTouchTool && e.id == this._activeTouchTool.id;
              GSidebarContainer && (require = e);
              let r = e.panel;
              if (
                (Array.isArray(e.panel) || (r = [e.panel]),
                'dimension.align' === e.id &&
                  GSidebarContainer &&
                  this.addClassName('align-active'),
                r.forEach((t) => {
                  let require;
                  ((require = 'string' == typeof t ? a.find(t) : $(t)),
                    require
                      .attr('g-touch-tool', e.id)
                      .toggleClass('g-active', GSidebarContainer)
                      .addClass('g-touch-toolbar-panel'));
                }),
                e.toolbar)
              ) {
                let t = e.toolbar;
                (Array.isArray(e.toolbar) || (t = [e.toolbar]),
                  t.forEach((t) => {
                    let require;
                    ((require = 'string' == typeof t ? a.find(t) : $(t)),
                      require
                        .attr('g-touch-tool', e.id)
                        .toggleClass('g-active', GSidebarContainer)
                        .addClass('g-touch-toolbar-label'));
                  }));
              }
              var s = $('<button/>')
                .addClass('g-touch-toolbar-button')
                .attr('g-touch-tool', e.id)
                .attr('id', e.id)
                .toggleClass('g-active', GSidebarContainer)
                .append($('<span/>').addClass(e.icon || ''))
                .on('click', () => {
                  (this.removeClassName('align-active'),
                    'dimension.align' == e.id
                      ? ($('.scrolling-panels').addClass('hide'), this.addClassName('align-active'))
                      : $('.scrolling-panels').removeClass('hide'),
                    -1 != module.indexOf(e.id)
                      ? $('.sidebar-inspector').addClass('expand')
                      : $('.sidebar-inspector').removeClass('expand'),
                    this._activeTouchTool && this._activeTouchTool.id == e.id
                      ? this._isActiveSidebarDeactivatable() &&
                        (this.setActiveTouchTool(null),
                        this._htmlElement.css('width', i.getDefaultWidth() + 'px'))
                      : this._tryActivateSidebar(i) &&
                        (this.setActiveTouchTool(e),
                        e.panelWidth
                          ? this._htmlElement.css('width', e.panelWidth)
                          : this._htmlElement.css('width', i.getDefaultWidth() + 'px'),
                        '.appearance-toolbar' !== e.toolbar
                          ? this._htmlElement
                              .find('.appearance-properties-panel')
                              .addClass('display-none')
                          : this._htmlElement
                              .find('.appearance-properties-panel')
                              .removeClass('display-none')));
                })
                .appendTo(this._touchToolbar);
              if (-1 != module.indexOf(e.id)) {
                var l = $('.'.concat(e.id, '-block')).length;
                s.append(
                  $('<div/>').addClass('count').append($('<div/>').addClass('scale').text(l))
                );
              }
            });
        }),
        this.setActiveTouchTool(require),
        require || this._setDefaultRightSidebarWidthForTouch());
    }),
    (GSidebarContainer.prototype.updateTouchToolbar = function () {
      this._updateTouchToolbar();
    }),
    (GSidebarContainer.prototype._setDefaultRightSidebarWidthForTouch = function () {
      this._htmlElement.css('width', this._rightSidebarDefaultWidthForTouch + 'px');
    }));
}
