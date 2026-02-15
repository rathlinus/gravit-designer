/**
 * Webpack Module #1713
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(8) /* module_8 */, require(4) /* module_4 */, require(41) /* module_41 */, require(32) /* module_32 */, require(97) /* module_97 */, require(33) /* module_33 */, require(26) /* module_26 */;
    const { GObject: o } = require(1) /* module */,
      { GPlatform: i } = require(15) /* module */,
      a = require(1355) /* module_1355 */,
      r = require(1191) /* module_1191 */,
      s = require(1356) /* module_1356 */,
      l = require(1357) /* module_1357 */,
      { handleCollabsData: c } = (require(536) /* module_536 */, require(882) /* module_882 */),
      d = require(1354) /* GInvalidationOptions */,
      u = require(434) /* module_434 */;
    function p() {
      for (var exports = arguments.length, module = new Array(exports), require = 0; require < exports; require++)
        module[require] = arguments[require];
      a.call(this, ...module), r.call(this);
    }
    o.inheritAndMix(p, a, [r]),
      (p.prototype._checkTreeSanity = function () {
        return !!$(this._container).data("gannotationpanel");
      }),
      (p.prototype.clean = function () {
        a.prototype.clean.call(this), this.clearChildren();
      }),
      (p.prototype._isInvalidationBlocked = function () {
        return !!this.isEditingOrAddingContent();
      }),
      (p.prototype.isEditingOrAddingContent = function () {
        return (
          !!this.getChildren()
            .filter((e) => e instanceof l)
            .some((e) => e.isVisible()) ||
          !!this.getChildren()
            .filter((e) => e instanceof s)
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
            : new d();
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
            n instanceof s &&
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