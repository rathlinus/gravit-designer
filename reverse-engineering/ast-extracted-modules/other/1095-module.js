/**
 * Module 1095
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  (function (e, n) {
    const r = i(250), {
        UTSRoot: o,
        Page: a,
        Thread: s,
        Comment: l,
        Annotation: h,
        Shape: A,
        ShapeType: c,
        CommentType: p,
        AnnotationProperties: u,
        AuthorProperties: d
      } = i(1096), {
        CDAAnnotationsList: g,
        CDAAnnotation: f,
        CDAAnnotationBase: m,
        CDAComment: y,
        CDACommentType: _,
        CDAAnnotationType: v
      } = i(1097), b = i(17), C = i(179), w = i(285), E = i(316), B = i(317), x = i(318), P = i(320), S = i(319), T = i(533), I = i(160), F = i(778), R = (i(45), i(60)), D = i(2), k = (i(28), i(48)), G = i(54), Q = i(11), M = i(6), N = i(7), U = i(82), V = new RegExp("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}");
    function O(e) {
      if (!e)
        return e;
      let t;
      try {
        i = r.toByteArray(e), t = new TextDecoder("utf-8").decode(i);
      } catch (e) {
        t = "";
      }
      var i;
      return t;
    }
    function L(e) {
      return e ? r.fromByteArray(function (e) {
        return new TextEncoder("utf-8").encode(e);
      }(e)) : e;
    }
    function Y(e) {
      return !!e && !(e instanceof Array) && !(!e.Comments || "1" !== e.Comments.Version);
    }
    function X(e) {
      return e.endsWith("00ff11ee22dd");
    }
    function H(e) {
      return e && V.test(e);
    }
    function W(e) {
      if (X(e)) {
        let t = "";
        for (let i = 0; i < 8; i += 2)
          t += String.fromCharCode(parseInt("0x" + e[i] + e[i + 1]));
        for (let i = 9; i < 13; i += 2)
          t += String.fromCharCode(parseInt("0x" + e[i] + e[i + 1]));
        return t;
      }
      return e;
    }
    function Z(e) {
      return ("0" + e.toString(16)).slice(-2);
    }
    function z(e) {
      function t(e) {
        var t = (e = e || "abcdefgh").slice(0, 4).split("").map(e => Z(e.charCodeAt(0))).join(""), i = e.slice(4, 8).split("").map(e => Z(e.charCodeAt(0))).join(""), n = 4294967295, r = ((t = 36969 * (65535 & t) + (t >> 16) & n) << 16) + (i = 18000 * (65535 & i) + (i >> 16) & n) & n;
        return (r /= 4294967296) + 0.5;
      }
      var i = "";
      if (6 === e.length) {
        for (let t = 0; t < e.length; t++)
          i += Z(e.charCodeAt(t));
        for (let n = e.length; n < 10; n++)
          i += Z(parseInt(256 * t(e)));
        i += "00ff11ee22dd";
      } else {
        if (V.test(e))
          return e;
        for (let n = 0; n < 16; n++)
          i += Z(parseInt(256 * t(e)));
      }
      return i = i.slice(0, 8) + "-" + i.slice(8, 12) + "-" + i.slice(12, 16) + "-" + i.slice(16, 20) + "-" + i.slice(20, 32);
    }
    function j(e, t) {
      e.CreationTime = t.time, e.Guid = t.Guid || z(t["@id"]), e.IsResolved = t.rsv || !1, e.ModificationTime = t.mtime || 0, e.ReadBy = t.read && t.read.slice() || [], e.Removed = t.rmd, e.ServerId = t.sid || "", e.Text = L(t.text || ""), e.UsersAssigned = t.asgn && t.asgn.slice() || [];
    }
    function J(e, t) {
      e.Properties.AvatarUrl = L(t.img) || "", e.Properties.Email = L(t.email) || "", e.Properties.Name = L(t.name) || "", e.Properties.OnlineId = L(t.uid) || "", e.Properties.AuthType = t.atp || "";
    }
    function q(e) {
      var t = new h();
      return J(t.Author, e), j(t.Properties, e), function (e, t, i) {
        switch (t["@"]) {
        case v.ARROW_ANNOT:
          e.Type = c.ARROW;
          break;
        case v.COLLABORATIVE_TXT:
          e.Type = c.COLLABORATIVE_TEXT;
          break;
        case v.COMMENT_ANNOT:
          e.Type = c.HOTSPOT;
          break;
        case v.ELLIPSE_ANNOT:
          e.Type = c.ELLIPSE;
          break;
        case v.HIGHLIGHTER_ANNOT:
          e.Type = c.HIGHLIGHTER;
          break;
        case v.PENCIL_ANNOT:
          e.Type = c.PENCIL;
          break;
        case v.RECTANGLE_ANNOT:
          e.Type = c.RECTANGLE;
        }
        var n = D.restore(t);
        if (!n)
          return;
        let r = n.getPaintLayers();
        if (r) {
          var o = r.getFillLayers()[0], a = r.getBorderLayers()[0];
          if (a) {
            e.ArrowStart = "A" === a.getProperty("_bhm"), e.ArrowEnd = "A" === a.getProperty("_btm");
            let t, n = a.getProperty("_op") || 0;
            try {
              t = "#" + a.getProperty("_pt").toScreen().map(e => Z(e)).join("");
            } catch (e) {
              t = "#000000";
            }
            0 !== n ? (e.StrokeColor = t, i.CDA.StrokeOpacity = n) : (e.StrokeColor = null, i.CDA.strokeColor = t, i.CDA.StrokeOpacity = 0), e.StrokeWidth = a.getProperty("_bw") || 1;
          } else
            i.CDA.StrokeOpacity = 0, e.StrokeColor = null;
          if (o) {
            let t, n = o.getProperty("_op") || 0;
            try {
              t = "#" + o.getProperty("_pt").toScreen().map(e => Z(e)).join("");
            } catch (e) {
              t = "#000000";
            }
            0 !== n ? (e.FillColor = t, i.CDA.FillOpacity = n) : (e.FillColor = null, i.CDA.FillColor = t, i.CDA.FillOpacity = 0);
          } else
            i.CDA.FillOpacity = 0, e.FillColor = null;
        }
        var s = n;
        s.rewindVertices(0);
        for (var l = new k(), h = new k(), A = []; s.readVertex(l);) {
          switch (l.command) {
          case k.Command.Move:
          case k.Command.Line:
            A.push(l.command.toString()), A.push(Q.packPoint(l.x, l.y));
            break;
          case k.Command.Curve:
            A.push(k.Command.Curve2);
            var p = h.x, u = h.y, d = l.x, g = l.y;
            s.readVertex(l);
            var f = l.x, m = l.y, y = p + 2 / 3 * (d - p), _ = u + 2 / 3 * (g - u), b = f + 2 / 3 * (d - f), C = m + 2 / 3 * (g - m);
            A.push(Q.packPoint(y, _)), A.push(Q.packPoint(b, C)), A.push(Q.packPoint(f, m));
            break;
          case k.Command.Curve2:
            A.push(l.command.toString()), A.push(Q.packPoint(l.x, l.y)), s.readVertex(l), A.push(Q.packPoint(l.x, l.y)), s.readVertex(l), A.push(Q.packPoint(l.x, l.y));
            break;
          case k.Command.Close:
            A.push(l.command.toString());
          }
          h.x = l.x, h.y = l.y;
        }
        e.Curves = A, e.TargetGuid = t.targetGuid || null;
        var w = s.getGeometryBBox(!0);
        w && (e.TopLeftX = w.getX(), e.TopLeftY = w.getY(), e.Width = w.getWidth(), e.Height = w.getHeight());
      }(t.Shape, e, t.Properties.Meta), t.Properties.Meta.CDA.vis = e.vis, t;
    }
    function K(e) {
      let t = e.$;
      return t ? t.map(e => {
        let t = new s();
        t.Annotation = q(e);
        let i = e.$ || [];
        return t.Comments = i.filter(e => "cmt" === e["@"]).map(e => function (e) {
          var t = new l();
          switch (J(t.Author, e), j(t.Properties, e), e.type) {
          case _.Open:
            t.Properties.Type = p.REOPENED;
            break;
          case _.Close:
            t.Properties.Type = p.RESOLVED;
            break;
          default:
            t.Properties.Type = p.COMMON;
          }
          return t;
        }(e)), t;
      }) : [];
    }
    function $(e) {
      return (e || []).map(e => {
        var t = new a();
        return t.Properties.Guid = e.Guid || "", t.Properties.CdaId = e.pgid || "", t.Properties.AnnotationsListId = e.aid || "", t.Properties.Guid || !H(t.Properties.AnnotationsListId) || X(t.Properties.AnnotationsListId) || (t.Properties.Guid = t.Properties.AnnotationsListId), !t.Properties.AnnotationsListId && t.Properties.Guid && (t.Properties.AnnotationsListId = t.Properties.Guid || t.Properties.CdaId || ""), t.Properties.Removed = e.rmd, t.Properties.ServerId = e.sid || "", t.Thread = K(e), t;
      });
    }
    function ee(e, t) {
      let i = 1, n = Math.abs(e), r = Math.abs(t);
      return i = r < 1e-15 || e < 1e-15 || n > 1000000000000000 && r > 1000000000000000 ? 1 : e / t, i;
    }
    function te(e, t) {
      t && (e.uid = O(t.OnlineId || ""), e.name = O(t.Name || ""), e.email = O(t.Email || ""), e.img = O(t.AvatarUrl || ""), e.atp = t.AuthType || "");
    }
    function ie(e, t) {
      t && (t.Guid && !X(t.Guid) && (e.Guid = t.Guid || ""), e["@id"] = W(t.Guid), e.asgn = t.UsersAssigned || [], e.mtime = t.ModificationTime || 0, t.ReadBy && t.ReadBy.length ? e.read = t.ReadBy : e.read = null, e.rmd = t.Removed, e.sid = t.ServerId || "", e.text = O(t.Text || ""), e.time = t.CreationTime || 0);
    }
    function ne(e) {
      var t = new f();
      switch (e.Annotation.Shape.Type) {
      case c.ARROW:
        t["@"] = v.ARROW_ANNOT;
        break;
      case c.COLLABORATIVE_TEXT:
        t["@"] = v.COLLABORATIVE_TXT;
        break;
      case c.ELLIPSE:
        t["@"] = v.ELLIPSE_ANNOT;
        break;
      case c.HIGHLIGHTER:
        t["@"] = v.HIGHLIGHTER_ANNOT;
        break;
      case c.HOTSPOT:
        t["@"] = v.COMMENT_ANNOT;
        break;
      case c.PENCIL:
        t["@"] = v.PENCIL_ANNOT;
        break;
      case c.RECTANGLE:
        t["@"] = v.RECTANGLE_ANNOT;
      }
      if (e) {
        let i;
        te(t, e && e.Annotation && e.Annotation.Author && e.Annotation.Author.Properties), ie(t, e.Annotation && e.Annotation.Properties), t.vis = e.Annotation && e.Annotation.Properties && e.Annotation.Properties.Meta && e.Annotation.Properties.Meta.CDA && e.Annotation.Properties.Meta.CDA.vis, function (e, t) {
          if (t.Annotation && t.Annotation.Properties.IsResolved)
            return void (e.rsv = !0);
          if (t.Annotation && t.Comments)
            for (let i = t.Comments.length - 1; i >= 0; i--) {
              let n = t.Comments[i];
              if (n.Properties.Type !== p.COMMON)
                return void (n.Properties.Type === p.RESOLVED ? e.rsv = !0 : n.Properties.Type === p.REOPENED && (e.rsv = !1));
            }
          e.rsv = void 0;
        }(t, e), function (e, t, i) {
          if (!t)
            return;
          var n, r = new I(new F()), o = new U(r);
          if (t.Type === c.ARROW)
            n = new S();
          else if (t.Type === c.COLLABORATIVE_TEXT)
            n = new T();
          else if (t.Type === c.ELLIPSE)
            n = new B();
          else if (t.Type === c.HIGHLIGHTER)
            n = new x();
          else if (t.Type === c.HOTSPOT)
            n = new w();
          else if (t.Type === c.PENCIL)
            n = new P();
          else {
            if (t.Type !== c.RECTANGLE)
              return;
            n = new E();
          }
          if (o.insertElements([n], !1, !0, !1), n.getPaintLayers()) {
            let e = t.FillColor;
            !e && i && i.CDA && i.CDA.FillColor && (e = i.CDA.FillColor);
            var a = n.getPaintLayers().getFillLayers()[0];
            if (a)
              if (e) {
                let t = new b(b.parseCSSColor(e));
                a.setProperty("_pt", t), i && i.CDA && !isNaN(i.CDA.FillOpacity) && a.setProperty("_op", Number(i.CDA.FillOpacity));
              } else
                t.Type !== c.HOTSPOT && a.setProperty("_op", 0);
            let r = t.StrokeColor;
            !r && i && i.CDA && i.CDA.StrokeColor && (r = i.CDA.StrokeColor);
            var s = n.getPaintLayers().getBorderLayers()[0];
            if (s)
              if (r) {
                let e = new b(b.parseCSSColor(r));
                s.setProperty("_pt", e), t.Type === c.ARROW && (t.ArrowStart ? s.setProperty("_bhm", "A") : s.setProperty("_bhm", void 0), t.ArrowEnd ? s.setProperty("_btm", "A") : s.setProperty("_btm", void 0)), t.StrokeWidth && s.setProperty("_bw", parseInt(t.StrokeWidth)), i && i.CDA && !isNaN(i.CDA.StrokeOpacity) && s.setProperty("_op", Number(i.CDA.StrokeOpacity));
              } else
                s.setProperty("_op", 0);
          }
          if (n.initDefaultForLimitedRestore(), t.Curves && n instanceof R && t.Type !== c.HOTSPOT) {
            let e = new G(), i = t.Curves, r = 0;
            for (; r < i.length;) {
              let t, o = parseInt(i[r++]);
              if (isNaN(o))
                break;
              switch (o) {
              case k.Command.Curve2:
                t = Q.unpackPoint(i[r++]), e.addVertex(o, t[0], t[1]);
              case k.Command.Curve:
                t = Q.unpackPoint(i[r++]), e.addVertex(o, t[0], t[1]);
              case k.Command.Move:
              case k.Command.Line:
                t = Q.unpackPoint(i[r++]), e.addVertex(o, t[0], t[1]);
                break;
              case k.Command.Close:
                e.addVertex(o), n.setProperty("closed", !0);
              }
            }
            const o = C.createPathFromVertexSource(e);
            o && n.setAnchorPoints(o.cloneAnchorPoints());
            const a = n.getGeometryBBox(!0);
            let s, l, h, A;
            a ? (s = a.getX(), l = a.getY(), h = a.getWidth(), A = a.getHeight()) : s = l = h = A = 0;
            const c = ee(t.Width, h), p = ee(t.Height, A);
            a && !a.isEmpty() ? n.transform(new N().translated(-s, -l).scaled(c, p).translated(t.TopLeftX, t.TopLeftY)) : n.transform(new N().translated(-s, -l).translated(t.TopLeftX, t.TopLeftY));
          } else if (t.Type !== c.HOTSPOT) {
            let e = new N(), i = n.getGeometryBBox(!0);
            if (i) {
              let t = new M(i.getX(), i.getY(), i.getWidth() || 1, i.getHeight() || 1), n = N.getNativeRectTransformation(t);
              n && n.invertible() && (e = n.inverted());
            }
            let r = new M(t.TopLeftX, t.TopLeftY, t.Width || 1, t.Height || 1);
            if (r) {
              let t = N.getNativeRectTransformation(r);
              t && t.invertible() && (e = e.multiplied(t));
            }
            n.transform(e);
          } else
            n.initSizeAndPosition(), n.transform(new N(1, 0, 0, 1, t.TopLeftX, t.TopLeftY));
          let l = D.store(n);
          l && (Object.keys(l).forEach(t => {
            e.hasOwnProperty(t) || (e[t] = l[t]);
          }), e.$ = l.$, t.TargetGuid && n instanceof T && (e.targetGuid = t.TargetGuid, e.annotablerefs = [t.TargetGuid]));
        }(t, e.Annotation && e.Annotation.Shape, e.Annotation && e.Annotation.Properties && e.Annotation.Properties.Meta), "anc" === t["@"] && (i = t.$[0]), t.$ = (e.Comments || []).map(e => function (e) {
          var t = new y();
          if (t["@"] = "cmt", e) {
            switch (e.Properties.Type) {
            case p.RESOLVED:
              t.type = _.Close;
              break;
            case p.REOPENED:
              t.type = _.Open;
              break;
            default:
              t.type = _.User;
            }
            te(t, e.Author && e.Author.Properties), ie(t, e.Properties);
          }
          return t;
        }(e)), i && t.$.unshift(i);
      }
      return t;
    }
    function re(e) {
      return e.map(e => {
        var t = new g();
        return e.Properties && (t.Guid = e.Properties.Guid, t.pgid = e.Properties.CdaId, t.rmd = e.Properties.Removed, t.sid = e.Properties.ServerId, t["@id"] = t.aid = e.Properties.AnnotationsListId || e.Properties.Guid || e.Properties.CdaId), e.Thread && (t.$ = e.Thread.map(e => ne(e))), t["@"] = "annlst", t;
      });
    }
    "undefined" == typeof atob && void 0 !== e && (e.atob = function (e) {
      return e ? n.from(e, "base64").toString("binary") : "";
    }, e.btoa = function (e) {
      return e ? n.from(e, "binary").toString("base64") : "";
    }, e.TextDecoder = i(784).TextDecoder, e.TextEncoder = i(784).TextEncoder), t.CDAtoUTS = function (e, t) {
      if (Y(e))
        return e;
      if (e.annotationsCollection) {
        if (Y(e = e.annotationsCollection))
          return e;
      } else
        e instanceof Array || (e = e ? [e] : []);
      var i = new o();
      return i.Comments.FileId = t, i.Comments.Pages = $(e), JSON.parse(JSON.stringify(i));
    }, t.UTStoCDA = function (e) {
      if (!Y(e))
        return e;
      var t = e, i = re(t && t.Comments && t.Comments.Pages);
      return JSON.parse(JSON.stringify(i));
    }, t.AnnotationType = {
      COMMENT: "COMMENT",
      SUB_ROOT: "SUB_ROOT",
      ROOT: "ROOT",
      PAGE: "PAGE",
      THREAD: "THREAD"
    }, t.isUTS = Y, t.IdToGuid = z, t.GuidToId = W, t.isGuid = H, t.isFakeCDAGuid = X, t.guidReg = V, t.convertToPageArray = $, t.convertToCDAAnnotationsListArray = re, t.atobUtf = O, t.btoaUtf = L, t.convertProperties = j, t.convertAuthor = J, t.convertAuthorToCDA = te, t.convertToCDAAnnotation = ne;
  }.call(this, i(109), i(221).Buffer));
}
