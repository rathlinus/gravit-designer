/**
 * Webpack Module #358
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */,
      require(19) /* polyfill_Array_iterator */,
      require(8) /* polyfill_bundle_ES6 */,
      require(71) /* polyfill_String_includes */,
      require(4) /* stub_requires_668 */,
      require(41) /* stub_requires_682 */,
      require(13) /* stub_requires_679 */,
      require(32) /* stub_requires_670 */,
      require(38) /* stub_requires_680 */,
      require(97) /* stub_requires_684 */,
      require(33) /* polyfill_DOMCollection_forEach */,
      require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GTools = require(53) /* GTools */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      AppSettings = require(10) /* AppSettings */,
      s = require(592) /* module_592 */,
      DataModule_1094 = require(1094) /* DataModule_1094 */;
    const c = require(434) /* stub_requires_30_1072 */;
    function d() {}
    async function u(e, t) {
      const require = gDesigner.getSyncUser(),
        GCore = gDesigner.getApplicationManager(),
        GTools = d.isOwner(require, e),
        CollaborationMergeUtils = (e.getProperty("asgn") || []).includes(require.getUID()),
        AppSettings = GCore.isCommentingEditingEnabled(),
        s = await GCore.hasAccess(t);
      return AppSettings && (s || GTools || CollaborationMergeUtils);
    }
    (d.getCloudAnnotationsForDocument = async function (e) {
      const module = e.getAnnotationsId();
      if (!module)
        throw new s(
          "GAnnotationsUtils.getCloudAnnotationsForDocument: can't get annotations id for the document"
        );
      const require = await e.getAnnotationsToken(module);
      return gDesigner
        .getAnnotationsManager()
        .getAnnotations(module, require)
        .then((GCore) => new DataModule_1094(GCore, module, require, e));
    }),
      (d.updateAndReturnCloudAnnotationsForDocument = async function (e, t) {
        const require = e.getAnnotationsId();
        if (!require)
          throw new s(
            "GAnnotationsUtils.updateAndReturnCloudAnnotationsForDocument: can't get annotations id for the document"
          );
        t || (t = []);
        const GCore = await e.getAnnotationsToken(require);
        return gDesigner
          .getAnnotationsManager()
          .updateAnnotations(require, this._prepareAnnotations(e, t), GCore)
          .then((t) => new DataModule_1094(t, require, GCore, e));
      }),
      (d._prepareAnnotations = function (e, t) {
        return t;
      }),
      (d.saveDocumentAnnotations = async function (e, t, n, GTools) {
        var CollaborationMergeUtils = t;
        if (
          ((n = n || e.getScene()),
          (!e.isCloudFile() && !e.isExternalFile()) ||
            !n ||
            (!n.hasAnnotations() && !n.isCloudAnnotations()))
        )
          return false;
        var AppSettings = e.getId(),
          s = n.getProperty("cid"),
          c = e.getReservedId();
        let u = [];
        var p;
        n.iteratePages((e) => {
          let t = e.getAnnotations();
          GTools &&
            (d.removeSidFromAnnotations(t),
            e.getProperty("Guid") || d.removeGuidFromAnnotations(t)),
            u.push(t);
        }, true);
        var g = null;
        const h = async () => {
          let e = await gApi.getFile(p, true).catch(() => null);
          if (e && e.link_accesses && e.link_accesses.length)
            for (var t = 0; t < e.link_accesses.length && !g; ++t) {
              let n = e.link_accesses[t];
              if (n.token && n.comment) return n.token;
            }
          return null;
        };
        if (
          ((p = AppSettings || s || c) &&
            CollaborationMergeUtils &&
            ((g = await e.getAnnotationsToken(p)) || (g = await h())),
          !p)
        )
          try {
            const t = { trashed: null };
            let n = await gApi.createFile(t);
            (p = n.id) && e.setReservedId(p);
          } catch (e) {
            console.warn("Failed to record annotations");
          }
        if (!p) return false;
        CollaborationMergeUtils && !g && (g = await h());
        const f = this._prepareAnnotations(e, u.map(GCore.GNode.store));
        return (
          f instanceof Array || (f.suppressNewPageNotifications = !!GTools),
          gDesigner
            .getAnnotationsManager()
            .updateAnnotations(p, f, g)
            .then((t) => {
              var AppSettings = new DataModule_1094(t, p, g, e);
              let s,
                c = AppSettings.annotationsCollection;
              return (
                (s =
                  (GTools && n.getLastSavedTime()) ||
                  new Date(AppSettings.lastUpdateTime).getTime()),
                c && c.length
                  ? (n.iteratePages((e) => {
                      let t = d.findAnnotationsListForPage(e, c);
                      t && e.setAnnotations(GCore.GNode.restore(t));
                    }, true),
                    n.getProperty("cid") !== p && n.setCloudAnnotations(p),
                    CollaborationMergeUtils && g && n.setProperty("asec", g))
                  : (n.setCloudAnnotations(null),
                    n.cleanAnnotations(),
                    CollaborationMergeUtils && g && n.setProperty("asec", g)),
                n.setLastTimeAnnotationsFromCloudModified(s),
                true
              );
            })
            .catch(
              (e) => (
                n.setCloudAnnotations(null),
                console.warn("Failed to record annotations: " + e),
                false
              )
            )
        );
      }),
      (d.findAnnotationsListForPage = function (e, t) {
        const require =
          e.getProperty("Guid", true) || e.getAnnotations().getProperty("Guid");
        let GCore = null;
        if (!t || !t.length) return GCore;
        if (
          (require &&
            (GCore = this._findInAnnotationsObj(
              t,
              (e) => e.Guid === require || e.aid === require,
              (e) => e.$Guid === require || e["@Guid"] === require || e.$aid === require
            )),
          !GCore)
        ) {
          const n = e.getAnnotations().getProperty("aid");
          n &&
            (GCore = this._findInAnnotationsObj(
              t,
              (e) => e.aid === n,
              (e) => e.$aid === n
            ));
        }
        if (!GCore) {
          const n = e.getId();
          n &&
            (GCore = this._findInAnnotationsObj(
              t,
              (e) => e.pgid === n,
              (e) => e.$pgid === n
            ));
        }
        return GCore;
      }),
      (d._findInAnnotationsObj = function (e, t, n) {
        return e.find((e) => (e instanceof GCore.GAnnotationsList ? n(e) : t(e)));
      }),
      (d.mergeAnnotations = function (e, t, n, GTools, AppSettings) {
        let s = {},
          DataModule_1094 = {},
          c = false;
        t.forEach((e) => {
          (DataModule_1094[e.getId()] = e),
            e.hasFlag(GCore.GNode.Flag.Selected) && (s[e.getId()] = 1);
        }),
          t.forEach((t) => {
            GTools.some((e) => e.getId() === t.getId()) ||
              (e.removeChild(t), (c = true));
          });
        const d = [
          "$lmd",
          "$storedUrl",
          "$__ids",
          "$plkt",
          "$mtime",
          "$lkt",
          "@_lkt",
        ];
        AppSettings &&
          AppSettings instanceof Object &&
          d.push(...Object.keys(AppSettings).map((e) => "$" + e));
        for (let t = 0; t < GTools.length; t++) {
          let n = GTools[t],
            AppSettings = DataModule_1094[n.getId()];
          AppSettings &&
            ((0, CollaborationMergeUtils.isDifferent)(
              n,
              AppSettings,
              d.concat(n instanceof GCore.GRectangleAnnotation ? ["$cu"] : [])
            ) && ((0, CollaborationMergeUtils.mergeNode)(AppSettings, n), (c = true)),
            AppSettings.setProperty("mtime", n.getProperty("mtime"))),
            1 === s[n.getId()] && n.setFlag(GCore.GNode.Flag.Selected),
            DataModule_1094[n.getId()] || (e.appendChild(n), (c = true));
        }
        e.setProperty("sid", n.getProperty("sid") || null);
        const u = n.getProperty("Guid");
        return u && e.setProperty("Guid", u), c;
      }),
      (d.canDeleteAnnotation = function (e) {
        var t = gDesigner.getSyncUser();
        return d.isOwner(t, e);
      }),
      (d.removeAnnotations = function (e, t, n) {
        let GCore =
          !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
        if (!t || !t.getScene()) return;
        let CollaborationMergeUtils = t.getScene(),
          AppSettings = gDesigner.getActiveDocument();
        if (AppSettings.getScene() === CollaborationMergeUtils) {
          var s = !!AppSettings.getAnnotationsId();
          GTools.GAnnotationEditor.removeAnnotations(e, t, n, GCore, !s);
        }
      }),
      (d.filterAnnotationElements = function (e) {
        return e.filter(
          (e) => e.hasMixin(GCore.GAnnotation) || e instanceof GCore.GComment
        );
      }),
      (d.canResolveAnnotation = function (e) {
        return u(e, c.RESOLVE_COMMENT_ANNOTATION);
      }),
      (d.canReopenAnnotation = function (e) {
        return u(e, c.REOPEN_COMMENT_ANNOTATION);
      }),
      (d.isOwner = function (e, t) {
        if (e) {
          const n = t.getProperty ? t.getProperty("uid") : t.uid;
          return e.getUID() === n;
        }
        return false;
      }),
      (d.canUpdate = function (e) {
        return (
          !(gDesigner.isAnonymous() && !AppSettings.ANONYMOUS_SESSION_ENABLED) && !!e
        );
      }),
      (d.resolveAllComments = function (e) {
        var t = e.getScene();
        t &&
          GTools.GEditor.tryRunTransaction(
            t,
            function () {
              t.iteratePages((e) => {
                e.getAnnotations().resolve();
              }, true);
            },
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GAnnotationsSidebar",
                "text.resolve-all-comments"
              )
            )
          );
      }),
      (d.getCommentsCount = function (e) {
        if (!e.annotations) return 0;
        let module = 0;
        const require = { annotationsCollection: e.annotations, lastUpdateTime: 0 };
        let GCore = new DataModule_1094(require, e.id);
        return (
          GCore &&
            GCore.annotationsCollection &&
            GCore.annotationsCollection.forEach((e) => {
              e.$ &&
                e.$.forEach(function (e) {
                  e.rsv ||
                    (e.$ &&
                      0 !== e.$.length &&
                      e.$.forEach(function (e) {
                        "cmt" === e["@"] && module++;
                      }),
                    module++);
                });
            }),
          module
        );
      }),
      (d.removeSidFromAnnotations = function (e) {
        d.setPropertyValueInAnnotations(e, "sid", null);
      }),
      (d.removeGuidFromAnnotations = function (e) {
        d.setPropertyValueInAnnotations(e, "Guid", "");
      }),
      (d.setPropertyValueInAnnotations = function (e, t, n, GTools) {
        e.accept((e) => {
          (e instanceof GCore.GAnnotationsList ||
            e.hasMixin(GCore.GAnnotation) ||
            e instanceof GCore.GComment) &&
            e.setProperty(t, n, GTools);
        });
      }),
      (exports.exports = d);
  }