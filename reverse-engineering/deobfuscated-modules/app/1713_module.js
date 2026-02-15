/**
 * Webpack Module #1713
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(8) /* polyfill_bundle_ES6 */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */, require(32) /* stub_requires_670 */, require(97) /* stub_requires_684 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    const { GObject: o } = require(1) /* module */,
      { GPlatform: i } = require(15) /* module */,
      GSimpleTreeNodeNamed = require(1355) /* GSimpleTreeNodeNamed */,
      r = require(1191) /* module_1191 */,
      GAnnotationRow = require(1356) /* GAnnotationRow */,
      GAnnotationReplyEditor = require(1357) /* GAnnotationReplyEditor */,
      { handleCollabsData: c } = (require(536) /* module_536 */, require(882) /* GCollaborationMentionsUtils */),
      GInvalidationOptions = require(1354) /* GInvalidationOptions */,
      u = require(434) /* stub_requires_30_1072 */;
    function p() {
      for (var exports = arguments.length, module = new Array(exports), require = 0; require < exports; require++)
        module[require] = arguments[require];
      GSimpleTreeNodeNamed.call(this, ...module), r.call(this);
    }
    o.inheritAndMix(p, GSimpleTreeNodeNamed, [r]),
      (p.prototype._checkTreeSanity = function () {
        return !!$(this._container).data("gannotationpanel");
      }),
      (p.prototype.clean = function () {
        GSimpleTreeNodeNamed.prototype.clean.call(this), this.clearChildren();
      }),
      (p.prototype._isInvalidationBlocked = function () {
        return !!this.isEditingOrAddingContent();
      }),
      (p.prototype.isEditingOrAddingContent = function () {
        return (
          !!this.getChildren()
            .filter((e) => e instanceof GAnnotationReplyEditor)
            .some((e) => e.isVisible()) ||
          !!this.getChildren()
            .filter((e) => e instanceof GAnnotationRow)
            .some((e) => e.isEditMode())
        );
      }),
      (p.prototype._hasResolveAccess = false),
      (p.prototype._hasReopenAccess = false),
      (p.prototype._mentionData = {}),
      (p.prototype.hasResolveAccess = function () {
        return this._hasResolveAccess;
      }),
      (p.prototype.hasReopenAccess = function () {
        return this._hasReopenAccess;
      }),
      (p.prototype.getMentionData = function () {
        return this._mentionData || {};
      }),
      (p.prototype.getCollaboratorsCache = function () {
        return this._collaboratorsCache;
      }),
      (p.prototype._beforeInvalidationStart = async function () {
        let exports =
          arguments.length > 0 && undefined !== arguments[0]
            ? arguments[0]
            : new GInvalidationOptions();
        this.clearChildren();
        var t = gDesigner.getApplicationManager();
        (this._hasResolveAccess = await t.hasAccess(
          u.RESOLVE_COMMENT_ANNOTATION
        )),
          (this._hasReopenAccess = await t.hasAccess(
            u.REOPEN_COMMENT_ANNOTATION
          ));
        const require = gDesigner.getActiveDocument(),
          o = gDesigner.getShareManager();
        exports.collaboratorsCache && o.resetCollaboratorsCached(require),
          (this._collaboratorsCache = o.getCollaboratorsCached(require)),
          (this._mentionData = await c(this._collaboratorsCache));
      }),
      (p.prototype._afterInvalidationEnd = function () {
        this.scrollIntoView(), this._updateCommentStats();
      }),
      (p.prototype.scrollIntoView = function () {
        $(this._container).gAnnotationPanel("scrollIntoView");
      }),
      (p.prototype._updateCommentStats = function () {
        let exports = 0,
          module = 0,
          require = this.getChildren(),
          o = $(this._container).data("gannotationpanel"),
          i = o && o.options;
        require &&
          require.forEach((n) => {
            n instanceof GAnnotationRow &&
              !n.isParentAnnotationResolved() &&
              (n.isRead() || module++, exports++);
          }),
          i && i.updateCommentCount && i.updateCommentCount(exports, module);
      }),
      (p.prototype.getCommentStats = function () {
        return this._commentStats;
      }),
      (exports.exports = p);
  }