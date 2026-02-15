/**
 * Webpack Module #1600
 * Type: class
 * Name: GMergeSubAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(19) /* module_19 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */, require(26) /* module_26 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(18) /* module_18 */),
      s = o(require(1168) /* GSubAction */),
      l = require(40) /* module_40 */,
      c = require(67) /* GRichTooltipConfig */,
      d = o(require(812) /* GMergeMainAction */),
      u = require(10) /* module_10 */;
    class p extends s.default {
      function Object() { [native code] }(e) {
        super(e),
          (this._title = new i.GLocaleKey(
            "GMergeSubAction",
            "title.".concat(this._type)
          )),
          (this._transactionType = null);
      }
      _getMainActionId() {
        return d.default.ID;
      }
      getFullTitle() {
        const exports = this.getTitle(),
          module = this.getMainAction().getTitle();
        return "".concat(i.GLocale.get(module), " (").concat(i.GLocale.get(exports), ")");
      }
      getCategory() {
        return r.default.CATEGORY_MODIFY_COMBINE;
      }
      getGroup() {
        return "structure-boolean/combine";
      }
      getIcon() {
        switch (this._type) {
          case p.Type.Union:
            return "gravit-icon-merge-union";
          case p.Type.Subtract:
            return "gravit-icon-merge-subtract";
          case p.Type.Intersect:
            return "gravit-icon-merge-intersect";
          case p.Type.Difference:
            return "gravit-icon-merge-difference";
          default:
            return null;
        }
      }
      isVisible() {
        return true;
      }
      getShortcutSubKey() {
        switch (this._type) {
          case p.Type.Union:
            return a.GKey.Constant.U;
          case p.Type.Subtract:
            return a.GKey.Constant.S;
          case p.Type.Intersect:
            return a.GKey.Constant.I;
          case p.Type.Difference:
            return a.GKey.Constant.X;
          default:
            return null;
        }
      }
      execute() {
        const exports = gDesigner.getActiveDocument().getEditor(),
          module = exports && i.GNode.order(exports.getIndividualSelection().slice());
        if (!module) return;
        exports.beginTransaction();
        const require = this._shouldChangeBooleanOperation(module);
        try {
          require
            ? (this._setTransactionType(p.TransactionType.Merge),
              this._changeBooleanOperationType(module[0]))
            : (this._setTransactionType(p.TransactionType.Combine),
              this._createCompoundShape(exports, module));
        } finally {
          exports.commitTransaction(this._getTransactionName());
        }
      }
      _setTransactionType(e) {
        this._transactionType = e;
      }
      _getTransactionName() {
        return i.GLocale.getValue(
          "GMergeSubAction",
          "transaction.".concat(this._transactionType)
        );
      }
      _shouldChangeBooleanOperation(e) {
        const [module] = e;
        return (
          1 === e.length &&
          (module instanceof i.GCompoundShape ||
            1 === d.default.getValidItems(module).length)
        );
      }
      _changeBooleanOperationType(e) {
        if (
          e.getParent() instanceof i.GCompoundShape &&
          (e instanceof i.GCompoundShape ||
            (e.hasMixin(i.GVertexSource) && !(e instanceof i.GGroup)))
        )
          return e.setProperty("bool", this._getBooleanOperationType());
        if (e instanceof i.GCompoundShape && e.getFirstChild())
          for (let module = e.getFirstChild().getNext(); null !== module; module = module.getNext())
            module.setProperty("bool", this._getBooleanOperationType());
      }
      _createCompoundShape(e, t) {
        const require = new i.GCompoundShape();
        let o,
          a = [];
        if (
          (t.forEach((e) => {
            a = a.concat(d.default.getValidItems(e));
          }),
          a.length > 1)
        ) {
          const r = t[t.length - 1];
          let s = r.getParent(),
            c = r.getNext();
          for (; !require.validateInsertion(s); )
            (c = s.getNext()), (s = s.getParent());
          if (!s) return;
          s.insertChild(require, c);
          try {
            const t = [],
              r = [];
            let s = null;
            (o = new Set()),
              a.forEach((e) => {
                e.getParent() instanceof i.GCompoundShape
                  ? (t.push(e), s || (s = e.getParent()))
                  : r.push(e),
                  o.add(e.getParent());
              }),
              (a = t.concat(r));
            const c = s || a[0];
            if (
              ((0, l.blockChanges)(e, o, null, require),
              require.assignStyleFrom(c),
              c instanceof i.GText)
            ) {
              const e = c;
              if (
                !e.getPaintLayers().getFillLayers(true).length &&
                e.getProperty("_fc")
              ) {
                require.getPaintLayers().clearFillLayers();
                const t =
                  "string" == typeof e.getProperty("_fc")
                    ? i.GRGBColor.fromCSSColor(e.getProperty("_fc"))
                    : e.getProperty("_fc");
                require.getPaintLayers().appendChild(
                  new i.GStylable.FillPaintLayer(t)
                );
              }
            }
            a.forEach((e) => {
              let t,
                o = e.getParent();
              for (
                !(
                  o === s ||
                  (o instanceof i.GCompoundShape && this._type === p.Type.Union)
                ) && e.setProperty("bool", this._getBooleanOperationType()),
                  o.removeChild(e);
                (o instanceof i.GGroup || o instanceof i.GCompoundShape) &&
                !o.getFirstChild();

              )
                (t = o), (o = o.getParent()), o.removeChild(t);
              require.appendChild(e);
            });
          } finally {
            (0, l.releaseChanges)(e, o, null, require);
          }
          e.updateSelection(false, [require]);
        }
      }
      _getBooleanOperationType() {
        switch (this._type) {
          case p.Type.Union:
            return i.GVertexPolyBoolean.OR;
          case p.Type.Subtract:
            return i.GVertexPolyBoolean.SUB;
          case p.Type.Intersect:
            return i.GVertexPolyBoolean.AND;
          case p.Type.Difference:
            return i.GVertexPolyBoolean.XOR;
          default:
            throw new Error("Type is not valid.");
        }
      }
      getTooltipConfig(e) {
        return e && p.TOOLTIP_CONFIG[e]
          ? p.TOOLTIP_CONFIG[e][this._type]
          : null;
      }
      function toString() { [native code] }() {
        return "[Object GMergeSubAction]";
      }
    }
    (p.Type = {
      Union: "union",
      Subtract: "subtract",
      Intersect: "intersect",
      Difference: "difference",
    }),
      (p.TransactionType = { Merge: "merge", Combine: "combine" }),
      (p.TOOLTIP_CONFIG = {
        [c.TOOLTIP_AREA.TOOLBAR]: {
          [p.Type.Union]: c.GRichTooltipConfig.from({
            title: i.GLocale.getValue("GMergeSubAction", "tooltip.union.title"),
            description: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.union.description"
            ),
            video: u.gApi.getRichTooltipVideoURL("Boolean_Union.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Subtract]: c.GRichTooltipConfig.from({
            title: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.substract.title"
            ),
            description: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.substract.description"
            ),
            video: u.gApi.getRichTooltipVideoURL("Boolean_Subtract.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Intersect]: c.GRichTooltipConfig.from({
            title: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.intersect.title"
            ),
            description: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.intersect.description"
            ),
            video: u.gApi.getRichTooltipVideoURL("Boolean_Intersect.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Difference]: c.GRichTooltipConfig.from({
            title: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.difference.title"
            ),
            description: i.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.difference.description"
            ),
            video: u.gApi.getRichTooltipVideoURL("Boolean_Difference.mp4"),
            middle: false,
            learnMore:
              "",
          }),
        },
      }),
      (exports.exports = p);
  }