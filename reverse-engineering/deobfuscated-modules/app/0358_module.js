/**
 * Webpack Module #358
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* module_58 */,
      require(19) /* module_19 */,
      require(8) /* module_8 */,
      require(71) /* module_71 */,
      require(4) /* module_4 */,
      require(41) /* module_41 */,
      require(13) /* module_13 */,
      require(32) /* module_32 */,
      require(38) /* module_38 */,
      require(97) /* module_97 */,
      require(33) /* module_33 */,
      require(26) /* module_26 */;
    var o = require(1) /* module */,
      i = require(53) /* module */,
      a = require(40) /* module_40 */,
      r = require(10) /* module_10 */,
      s = require(592) /* module_592 */,
      l = require(1094) /* module_1094 */;
    const c = require(434) /* module_434 */;
    function d() {}
    async function u(e, t) {
      const require = gDesigner.getSyncUser(),
        o = gDesigner.getApplicationManager(),
        i = d.isOwner(require, e),
        a = (e.getProperty("asgn") || []).includes(require.getUID()),
        r = o.isCommentingEditingEnabled(),
        s = await o.hasAccess(t);
      return r && (s || i || a);
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
        .then((o) => new l(o, module, require, e));
    }),
      (d.updateAndReturnCloudAnnotationsForDocument = async function (e, t) {
        const require = e.getAnnotationsId();
        if (!require)
          throw new s(
            "GAnnotationsUtils.updateAndReturnCloudAnnotationsForDocument: can't get annotations id for the document"
          );
        t || (t = []);
        const o = await e.getAnnotationsToken(require);
        return gDesigner
          .getAnnotationsManager()
          .updateAnnotations(require, this._prepareAnnotations(e, t), o)
          .then((t) => new l(t, require, o, e));
      }),
      (d._prepareAnnotations = function (e, t) {
        return t;
      }),
      (d.saveDocumentAnnotations = async function (e, t, n, i) {
        var a = t;
        if (
          ((n = n || e.getScene()),
          (!e.isCloudFile() && !e.isExternalFile()) ||
            !n ||
            (!n.hasAnnotations() && !n.isCloudAnnotations()))
        )
          return false;
        var r = e.getId(),
          s = n.getProperty("cid"),
          c = e.getReservedId();
        let u = [];
        var p;
        n.iteratePages((e) => {
          let t = e.getAnnotations();
          i &&
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
          ((p = r || s || c) &&
            a &&
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
        a && !g && (g = await h());
        const f = this._prepareAnnotations(e, u.map(o.GNode.store));
        return (
          f instanceof Array || (f.suppressNewPageNotifications = !!i),
          gDesigner
            .getAnnotationsManager()
            .updateAnnotations(p, f, g)
            .then((t) => {
              var r = new l(t, p, g, e);
              let s,
                c = r.annotationsCollection;
              return (
                (s =
                  (i && n.getLastSavedTime()) ||
                  new Date(r.lastUpdateTime).getTime()),
                c && c.length
                  ? (n.iteratePages((e) => {
                      let t = d.findAnnotationsListForPage(e, c);
                      t && e.setAnnotations(o.GNode.restore(t));
                    }, true),
                    n.getProperty("cid") !== p && n.setCloudAnnotations(p),
                    a && g && n.setProperty("asec", g))
                  : (n.setCloudAnnotations(null),
                    n.cleanAnnotations(),
                    a && g && n.setProperty("asec", g)),
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
        let o = null;
        if (!t || !t.length) return o;
        if (
          (require &&
            (o = this._findInAnnotationsObj(
              t,
              (e) => e.Guid === require || e.aid === require,
              (e) => e.$Guid === require || e["@Guid"] === require || e.$aid === require
            )),
          !o)
        ) {
          const n = e.getAnnotations().getProperty("aid");
          n &&
            (o = this._findInAnnotationsObj(
              t,
              (e) => e.aid === n,
              (e) => e.$aid === n
            ));
        }
        if (!o) {
          const n = e.getId();
          n &&
            (o = this._findInAnnotationsObj(
              t,
              (e) => e.pgid === n,
              (e) => e.$pgid === n
            ));
        }
        return o;
      }),
      (d._findInAnnotationsObj = function (e, t, n) {
        return e.find((e) => (e instanceof o.GAnnotationsList ? n(e) : t(e)));
      }),
      (d.mergeAnnotations = function (e, t, n, i, r) {
        let s = {},
          l = {},
          c = false;
        t.forEach((e) => {
          (l[e.getId()] = e),
            e.hasFlag(o.GNode.Flag.Selected) && (s[e.getId()] = 1);
        }),
          t.forEach((t) => {
            i.some((e) => e.getId() === t.getId()) ||
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
        r &&
          r instanceof Object &&
          d.push(...Object.keys(r).map((e) => "$" + e));
        for (let t = 0; t < i.length; t++) {
          let n = i[t],
            r = l[n.getId()];
          r &&
            ((0, a.isDifferent)(
              n,
              r,
              d.concat(n instanceof o.GRectangleAnnotation ? ["$cu"] : [])
            ) && ((0, a.mergeNode)(r, n), (c = true)),
            r.setProperty("mtime", n.getProperty("mtime"))),
            1 === s[n.getId()] && n.setFlag(o.GNode.Flag.Selected),
            l[n.getId()] || (e.appendChild(n), (c = true));
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
        let o =
          !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
        if (!t || !t.getScene()) return;
        let a = t.getScene(),
          r = gDesigner.getActiveDocument();
        if (r.getScene() === a) {
          var s = !!r.getAnnotationsId();
          i.GAnnotationEditor.removeAnnotations(e, t, n, o, !s);
        }
      }),
      (d.filterAnnotationElements = function (e) {
        return e.filter(
          (e) => e.hasMixin(o.GAnnotation) || e instanceof o.GComment
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
          !(gDesigner.isAnonymous() && !r.ANONYMOUS_SESSION_ENABLED) && !!e
        );
      }),
      (d.resolveAllComments = function (e) {
        var t = e.getScene();
        t &&
          i.GEditor.tryRunTransaction(
            t,
            function () {
              t.iteratePages((e) => {
                e.getAnnotations().resolve();
              }, true);
            },
            o.GLocale.get(
              new o.GLocaleKey(
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
        let o = new l(require, e.id);
        return (
          o &&
            o.annotationsCollection &&
            o.annotationsCollection.forEach((e) => {
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
      (d.setPropertyValueInAnnotations = function (e, t, n, i) {
        e.accept((e) => {
          (e instanceof o.GAnnotationsList ||
            e.hasMixin(o.GAnnotation) ||
            e instanceof o.GComment) &&
            e.setProperty(t, n, i);
        });
      }),
      (exports.exports = d);
  }