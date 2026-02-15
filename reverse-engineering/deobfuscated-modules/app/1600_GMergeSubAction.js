/**
 * Webpack Module #1600
 * Type: class
 * Name: GMergeSubAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(19) /* polyfill_Array_iterator */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */;
    var GCore = require(1) /* GCore */,
      GEditor = require(15) /* GEditor */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GSubAction = _interopRequireDefault(require(1168) /* GSubAction */),
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      c = require(67) /* GRichTooltipConfig */,
      GMergeMainAction = _interopRequireDefault(require(812) /* GMergeMainAction */),
      AppSettings = require(10) /* AppSettings */;
    class p extends GSubAction.default {
      constructor(e) {
        super(e),
          (this._title = new GCore.GLocaleKey(
            "GMergeSubAction",
            "title.".concat(this._type)
          )),
          (this._transactionType = null);
      }
      _getMainActionId() {
        return GMergeMainAction.default.ID;
      }
      getFullTitle() {
        const exports = this.getTitle(),
          module = this.getMainAction().getTitle();
        return "".concat(GCore.GLocale.get(module), " (").concat(GCore.GLocale.get(exports), ")");
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_MODIFY_COMBINE;
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
            return GEditor.GKey.Constant.U;
          case p.Type.Subtract:
            return GEditor.GKey.Constant.S;
          case p.Type.Intersect:
            return GEditor.GKey.Constant.I;
          case p.Type.Difference:
            return GEditor.GKey.Constant.X;
          default:
            return null;
        }
      }
      execute() {
        const exports = gDesigner.getActiveDocument().getEditor(),
          module = exports && GCore.GNode.order(exports.getIndividualSelection().slice());
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
        return GCore.GLocale.getValue(
          "GMergeSubAction",
          "transaction.".concat(this._transactionType)
        );
      }
      _shouldChangeBooleanOperation(e) {
        const [module] = e;
        return (
          1 === e.length &&
          (module instanceof GCore.GCompoundShape ||
            1 === GMergeMainAction.default.getValidItems(module).length)
        );
      }
      _changeBooleanOperationType(e) {
        if (
          e.getParent() instanceof GCore.GCompoundShape &&
          (e instanceof GCore.GCompoundShape ||
            (e.hasMixin(GCore.GVertexSource) && !(e instanceof GCore.GGroup)))
        )
          return e.setProperty("bool", this._getBooleanOperationType());
        if (e instanceof GCore.GCompoundShape && e.getFirstChild())
          for (let module = e.getFirstChild().getNext(); null !== module; module = module.getNext())
            module.setProperty("bool", this._getBooleanOperationType());
      }
      _createCompoundShape(e, t) {
        const require = new GCore.GCompoundShape();
        let _interopRequireDefault,
          GEditor = [];
        if (
          (t.forEach((e) => {
            GEditor = GEditor.concat(GMergeMainAction.default.getValidItems(e));
          }),
          GEditor.length > 1)
        ) {
          const MenuItemBuilder = t[t.length - 1];
          let GSubAction = MenuItemBuilder.getParent(),
            c = MenuItemBuilder.getNext();
          for (; !require.validateInsertion(GSubAction); )
            (c = GSubAction.getNext()), (GSubAction = GSubAction.getParent());
          if (!GSubAction) return;
          GSubAction.insertChild(require, c);
          try {
            const t = [],
              MenuItemBuilder = [];
            let GSubAction = null;
            (_interopRequireDefault = new Set()),
              GEditor.forEach((e) => {
                e.getParent() instanceof GCore.GCompoundShape
                  ? (t.push(e), GSubAction || (GSubAction = e.getParent()))
                  : MenuItemBuilder.push(e),
                  _interopRequireDefault.add(e.getParent());
              }),
              (GEditor = t.concat(MenuItemBuilder));
            const c = GSubAction || GEditor[0];
            if (
              ((0, CollaborationMergeUtils.blockChanges)(e, _interopRequireDefault, null, require),
              require.assignStyleFrom(c),
              c instanceof GCore.GText)
            ) {
              const e = c;
              if (
                !e.getPaintLayers().getFillLayers(true).length &&
                e.getProperty("_fc")
              ) {
                require.getPaintLayers().clearFillLayers();
                const t =
                  "string" == typeof e.getProperty("_fc")
                    ? GCore.GRGBColor.fromCSSColor(e.getProperty("_fc"))
                    : e.getProperty("_fc");
                require.getPaintLayers().appendChild(
                  new GCore.GStylable.FillPaintLayer(t)
                );
              }
            }
            GEditor.forEach((e) => {
              let t,
                _interopRequireDefault = e.getParent();
              for (
                !(
                  _interopRequireDefault === GSubAction ||
                  (_interopRequireDefault instanceof GCore.GCompoundShape && this._type === p.Type.Union)
                ) && e.setProperty("bool", this._getBooleanOperationType()),
                  _interopRequireDefault.removeChild(e);
                (_interopRequireDefault instanceof GCore.GGroup || _interopRequireDefault instanceof GCore.GCompoundShape) &&
                !_interopRequireDefault.getFirstChild();

              )
                (t = _interopRequireDefault), (_interopRequireDefault = _interopRequireDefault.getParent()), _interopRequireDefault.removeChild(t);
              require.appendChild(e);
            });
          } finally {
            (0, CollaborationMergeUtils.releaseChanges)(e, _interopRequireDefault, null, require);
          }
          e.updateSelection(false, [require]);
        }
      }
      _getBooleanOperationType() {
        switch (this._type) {
          case p.Type.Union:
            return GCore.GVertexPolyBoolean.OR;
          case p.Type.Subtract:
            return GCore.GVertexPolyBoolean.SUB;
          case p.Type.Intersect:
            return GCore.GVertexPolyBoolean.AND;
          case p.Type.Difference:
            return GCore.GVertexPolyBoolean.XOR;
          default:
            throw new Error("Type is not valid.");
        }
      }
      getTooltipConfig(e) {
        return e && p.TOOLTIP_CONFIG[e]
          ? p.TOOLTIP_CONFIG[e][this._type]
          : null;
      }
      toString() {
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
            title: GCore.GLocale.getValue("GMergeSubAction", "tooltip.union.title"),
            description: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.union.description"
            ),
            video: AppSettings.gApi.getRichTooltipVideoURL("Boolean_Union.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Subtract]: c.GRichTooltipConfig.from({
            title: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.substract.title"
            ),
            description: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.substract.description"
            ),
            video: AppSettings.gApi.getRichTooltipVideoURL("Boolean_Subtract.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Intersect]: c.GRichTooltipConfig.from({
            title: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.intersect.title"
            ),
            description: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.intersect.description"
            ),
            video: AppSettings.gApi.getRichTooltipVideoURL("Boolean_Intersect.mp4"),
            middle: false,
            learnMore:
              "",
          }),
          [p.Type.Difference]: c.GRichTooltipConfig.from({
            title: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.difference.title"
            ),
            description: GCore.GLocale.getValue(
              "GMergeSubAction",
              "tooltip.difference.description"
            ),
            video: AppSettings.gApi.getRichTooltipVideoURL("Boolean_Difference.mp4"),
            middle: false,
            learnMore:
              "",
          }),
        },
      }),
      (exports.exports = p);
  }