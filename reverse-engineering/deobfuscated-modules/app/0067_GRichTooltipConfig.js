/**
 * Webpack Module #67
 * Type: class
 * Name: GRichTooltipConfig
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default = module.TOOLTIP_AREA = module.GRichTooltipConfig = undefined),
      require(290) /* DataModule_290 */,
      require(3) /* polyfill_RegExp_toString */;
    const o = (module.GRichTooltipConfig = function (e) {
      let {
        title: module,
        description: require,
        video: o,
        pic: i,
        isPro: a,
        middle: r,
        shortcut: s,
        videoTimeout: l,
        marginLeft: c,
        side: d,
        learnMore: u,
        upgradeToProStatsValue: p,
        forceShow: g,
        flipHorizontal: h,
      } = e;
      if (!module) throw new Error("");
      (this._title = module),
        (this._description = require),
        (this._video = o),
        (this._pic = i),
        (this._isPro = a),
        (this._middle = r),
        (this._marginLeft = c),
        (this._shortcut = s),
        (this._videoTimeout = l),
        (this._side = d),
        (this._learnMore = u),
        (this._upgradeToProStatsValue = p),
        (this._forceShow = g),
        (this._flipHorizontal = h);
    });
    (o.from = function (e) {
      return new o(e);
    }),
      (o.prototype._title = null),
      (o.prototype._description = null),
      (o.prototype._video = null),
      (o.prototype._pic = null),
      (o.prototype._isPro = null),
      (o.prototype._middle = null),
      (o.prototype._marginLeft = null),
      (o.prototype._shortcut = null),
      (o.prototype._videoTimeout = null),
      (o.prototype._side = null),
      (o.prototype._learnMore = null),
      (o.prototype._upgradeToProStatsValue = null),
      (o.prototype._forceShow = false),
      (o.prototype._flipHorizontal = false),
      (o.prototype.setConfig = function (e) {
        let {
          title: module,
          description: require,
          video: o,
          pic: i,
          isPro: a,
          middle: r,
          shortcut: s,
          videoTimeout: l,
          marginLeft: c,
          side: d,
          learnMore: u,
          upgradeToProStatsValue: p,
        } = e;
        if ((undefined !== module && (this._title = module), !this._title))
          throw new Error("");
        return (
          undefined !== require && (this._description = require),
          undefined !== o && (this._video = o),
          undefined !== i && (this._pic = i),
          undefined !== a && (this._isPro = a),
          undefined !== r && (this._middle = r),
          undefined !== s && (this._shortcut = s),
          undefined !== l && (this._videoTimeout = l),
          undefined !== c && (this._marginLeft = c),
          undefined !== d && (this._side = d),
          undefined !== u && (this._learnMore = u),
          undefined !== p && (this._upgradeToProStatsValue = p),
          this
        );
      }),
      (o.prototype.getConfig = function () {
        return {
          title: this._title,
          description: this._description,
          video: this._video,
          pic: this._pic,
          isPro: this._isPro,
          middle: this._middle,
          marginLeft: this._marginLeft,
          shortcut: this._shortcut,
          videoTimeout: this._videoTimeout,
          side: this._side,
          learnMore: this._learnMore,
          upgradeToProStatsValue: this._upgradeToProStatsValue,
          forceShow: this._forceShow,
          flipHorizontal: this._flipHorizontal,
        };
      }),
      (o.prototype.toString = function () {
        return "[Object GRichTooltipConfig]";
      });
    module.TOOLTIP_AREA = {
      TOOLBAR: "TOOLBAR",
      SIDEBAR: "SIDEBAR",
      MAIN_MENU: {
        TRY_PRO_COMMON: "TRY_PRO_COMMON",
        TRY_EXP_PDF_ADVANCED_SETTING: "TRY_EXP_PDF_ADVANCED_SETTING",
      },
    };
    module.default = o;
  }