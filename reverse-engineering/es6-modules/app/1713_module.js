/**
 * Webpack Module #1713
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(8) /* polyfill_bundle_ES6 */,
    require(4) /* stub_requires_668 */,
    require(41) /* stub_requires_682 */,
    require(32) /* stub_requires_670 */,
    require(97) /* stub_requires_684 */,
    require(33) /* polyfill_DOMCollection_forEach */,
    require(26)) /* polyfill_DOMCollection_iterator */;
  const { GObject: o } = require(1) /* GCore */,
    { GPlatform: i } = require(15) /* GEditor */,
    GSimpleTreeNodeNamed = require(1355) /* GSimpleTreeNodeNamed */,
    DataModule_1191 = require(1191) /* DataModule_1191 */,
    GAnnotationRow = require(1356) /* GAnnotationRow */,
    GAnnotationReplyEditor = require(1357) /* GAnnotationReplyEditor */,
    { handleCollabsData: c } =
      (require(536) /* module_536 */, require(882)) /* GCollaborationMentionsUtils */,
    GInvalidationOptions = require(1354) /* GInvalidationOptions */,
    u = require(434);
  class p {
    constructor() {
      for (
      var exports = arguments.length, module = new Array(exports), require = 0;
      require < exports;
      require++
      )
      module[require] = arguments[require];
      (GSimpleTreeNodeNamed.call(this, ...module), DataModule_1191.call(this));
    }

    _hasResolveAccess = false;
    _hasReopenAccess = false;
    _mentionData = {};

    _checkTreeSanity() {
      return !!$(this._container).data('gannotationpanel');
    }

    clean() {
      (GSimpleTreeNodeNamed.prototype.clean.call(this), this.clearChildren());
    }

    _isInvalidationBlocked() {
      return !!this.isEditingOrAddingContent();
    }

    isEditingOrAddingContent() {
      return (
        !!this.getChildren()
          .filter((e) => e instanceof GAnnotationReplyEditor)
          .some((e) => e.isVisible()) ||
        !!this.getChildren()
          .filter((e) => e instanceof GAnnotationRow)
          .some((e) => e.isEditMode())
      );
    }

    hasResolveAccess() {
      return this._hasResolveAccess;
    }

    hasReopenAccess() {
      return this._hasReopenAccess;
    }

    getMentionData() {
      return this._mentionData || {};
    }

    getCollaboratorsCache() {
      return this._collaboratorsCache;
    }

    async _beforeInvalidationStart() {
      let exports =
        arguments.length > 0 && undefined !== arguments[0]
          ? arguments[0]
          : new GInvalidationOptions();
      this.clearChildren();
      var t = gDesigner.getApplicationManager();
      ((this._hasResolveAccess = await t.hasAccess(u.RESOLVE_COMMENT_ANNOTATION)),
        (this._hasReopenAccess = await t.hasAccess(u.REOPEN_COMMENT_ANNOTATION)));
      const require = gDesigner.getActiveDocument(),
        o = gDesigner.getShareManager();
      (exports.collaboratorsCache && o.resetCollaboratorsCached(require),
        (this._collaboratorsCache = o.getCollaboratorsCached(require)),
        (this._mentionData = await c(this._collaboratorsCache)));
    }

    _afterInvalidationEnd() {
      (this.scrollIntoView(), this._updateCommentStats());
    }

    scrollIntoView() {
      $(this._container).gAnnotationPanel('scrollIntoView');
    }

    _updateCommentStats() {
      let exports = 0,
        module = 0,
        require = this.getChildren(),
        o = $(this._container).data('gannotationpanel'),
        i = o && o.options;
      (require &&
        require.forEach((n) => {
          n instanceof GAnnotationRow &&
            !n.isParentAnnotationResolved() &&
            (n.isRead() || module++, exports++);
        }),
        i && i.updateCommentCount && i.updateCommentCount(exports, module));
    }

    getCommentStats() {
      return this._commentStats;
    }

  }
  (o.inheritAndMix(p, GSimpleTreeNodeNamed, [DataModule_1191]),
    exports.exports = p);
}