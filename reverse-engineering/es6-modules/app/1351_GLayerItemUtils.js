/**
 * Webpack Module #1351
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (Object.defineProperty(module, '__esModule', { value: true }),
    (module.buildLayerItemContainer = function (e, t, n, a) {
      var r = $(e);
      (r.attr('draggable', false),
        r.gPro({
          pro: t instanceof GCore.GElement && !!t.getProperty('_pro', true),
        }));
      var s = $('<span></span>')
        .addClass('layer-title-group')
        .toggleClass('g-selected', t.hasFlag(GCore.GNode.Flag.Selected));
      (s.appendTo(r),
        r
          .on('mouseenter', function (e) {
            t.hasFlag(GCore.GElement.Flag.Hidden) || t.setFlag(GCore.GNode.Flag.Highlighted);
          })
          .on('mouseleave', function (e) {
            t.hasFlag(GCore.GElement.Flag.Hidden) || t.removeFlag(GCore.GNode.Flag.Highlighted);
          }));
      var l = t.getProperty('name');
      l = l || t.getNodeNameTranslated();
      var c = $('<span></span>').html(l);
      c.addClass('layer-title').appendTo(s);
      var d = function (e) {
        return e instanceof GCore.GSymbol && !!e.getMasterSymbol();
      };
      (d(t) || t.findParent(d)) && r.addClass('g-symbol-row');
      r.toggleClass('g-active', t.hasFlag(GCore.GNode.Flag.Active))
        .toggleClass('g-has-selection', n)
        .toggleClass('g-selected', t.hasFlag(GCore.GNode.Flag.Selected));
      var u,
        { icon: p, overlayIcon: g } = i(t, a);
      p &&
        ('<svg' === p.substr(0, 4)
          ? (u = $('<span></span>')
              .addClass('layer-icon')
              .append(
                $(p).addClass('layer-icon').attr({ width: '16px', height: '16px' }).css({
                  verticalAlign: 'middle',
                  paddingLeft: '1px',
                  opacity: 'initial',
                })
              )
              .insertBefore(c))
          : (gDesigner.isTouchEnabled() && (p += '-small'),
            (u = $('<span></span>')
              .addClass('layer-icon ' + p)
              .css({ opacity: 'initial' })
              .insertBefore(c))));
      g && u && g.appendTo(u);
      return { container: r, title: c, titleGroup: s };
    }),
    (module.getIconByLayerType = i),
    (module.getLayerOrItemStatus = function (e) {
      var t = false,
        n = null,
        i = false,
        a = e;
      for (; (a = a.getParent()) && !(a instanceof GCore.GScene); ) {
        (a instanceof GCore.GBlock &&
          ((t = false === a.getProperty('vis') || t),
          (s = a.getProperty('lkt')) &&
            (n ? s === GCore.GBlock.LockType.Full && (n = s) : (n = s))),
          a instanceof GCore.GLayer && (i = true === a.getProperty('otl') || i));
      }
      var r = t || false === e.getProperty('vis'),
        s = n || e.getProperty('lkt'),
        l = i || (e instanceof GCore.GLayer && e.getProperty('otl')),
        c = false;
      if (e.hasMixin(GCore.GNode.Container))
        for (var d = e.getFirstChild(); null !== d && !c; d = d.getNext())
          d instanceof GCore.GItem && d.hasFlag(GCore.GNode.Flag.Selected) && (c = true);
      return {
        parentHidden: t,
        parentLockType: n,
        parentOutlined: i,
        isHidden: r,
        lockType: s,
        isOutlined: l,
        hasSelection: c,
      };
    }));
  var GCore = require(1); /* GCore */
  function i(e, t) {
    var n = null,
      i = null;
    if (
      (e instanceof GCore.GLayer
        ? (n = t ? 'gravit-icon-folderopen' : 'gravit-icon-folderclose')
        : e instanceof GCore.GSlice
          ? (n = 'gravit-icon-slice')
          : e instanceof GCore.GGroup
            ? (n = 'gravit-icon-group')
            : e instanceof GCore.GShape
              ? e instanceof GCore.GPathsGraph
                ? (n = 'gravit-icon-pathgraph3')
                : e instanceof GCore.GSimpleShape
                  ? (n = e.getIcon())
                  : e instanceof GCore.GText
                    ? ((n = 'gravit-icon-textbox'),
                      e.isFakeText() && (i = $('<div></div>').addClass('layer-icon-overlay')))
                    : e instanceof GCore.GImage
                      ? (n = 'gravit-icon-picture')
                      : e instanceof GCore.GEllipse
                        ? (n = 'gravit-icon-ellipse')
                        : e instanceof GCore.GRectangle
                          ? (n = 'gravit-icon-rectangle')
                          : e instanceof GCore.GPath || e instanceof GCore.GCompoundPath
                            ? (n = 'gravit-icon-pen')
                            : e instanceof GCore.GPolygon
                              ? (n = 'gravit-icon-polygon')
                              : e instanceof GCore.GCompoundShape && (n = 'gravit-icon-merge-union')
              : e instanceof GCore.GSymbol &&
                ((n = 'gravit-icon-symbol'),
                e.isMaster()
                  ? (n += 'master')
                  : e.getMasterSymbol()
                    ? (n += 'instance')
                    : (n += 'detached')),
      e instanceof GCore.GShape && e.getParent() instanceof GCore.GCompoundShape && e.getPrevious())
    )
      switch (e.getProperty('bool')) {
        case GCore.GVertexPolyBoolean.OR:
          n = 'gravit-icon-merge-union';
          break;
        case GCore.GVertexPolyBoolean.AND:
          n = 'gravit-icon-merge-intersect';
          break;
        case GCore.GVertexPolyBoolean.SUB:
          n = 'gravit-icon-merge-subtract';
          break;
        case GCore.GVertexPolyBoolean.XOR:
          n = 'gravit-icon-merge-difference';
      }
    return { icon: n, overlayIcon: i };
  }
}
