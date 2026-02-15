/**
 * Webpack Module #1245
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(57) /* polyfill_parseInt */, require(8)) /* polyfill_bundle_ES6 */;
  var GCore = require(1) /* GCore */,
    GFontDBClient = require(1198) /* GFontDBClient */,
    GFontsProviderManager = require(255) /* GFontsProviderManager */,
    GCustomFontsProvider = require(1118);
  class s {
    constructor() {
      try {
      this._fontDB = GFontDBClient.getInstance();
      } catch (e) {
      this._fontDB = null;
      }
    }

    fontDB = null;
    _numFiles = 0;
    _tmpFontList = null;
    _importTrialCount = 0;

    import(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      const { silent: require } = module;
      return !require && this.busy()
        ? this._importTrialCount++ > 100
          ? void e()
          : (setTimeout(
              function () {
                this.import(e);
              }.bind(this),
              100
            ),
            void this._importTrialCount++)
        : ((this._importTrialCount = 0), this._prompt(e, module), true);
    }

    _prompt(e, t) {
      var n = this,
        GFontsProviderManager = gDesigner.getDefaultStorage();
      this._numLoaded = 0;
      var GCustomFontsProvider = new Promise((e) => {
        this._fontDB.getItem(GFontDBClient.FONT_LIST).done((t) => {
          ((this._tmpFontList = t || []), e(this._tmpFontList));
        });
      });
      GFontsProviderManager.openPrompt(
        [
          { ext: 'ttf', mime: 'font/ttf' },
          { ext: 'otf', mime: 'font/otf' },
          { ext: 'ttc', mime: 'font/collection' },
          { ext: 'dfont', mime: 'font/collection' },
        ],
        function (t) {
          let GFontDBClient = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
          ((n._numFiles = GFontDBClient),
            GCustomFontsProvider.then(() => {
              t.read((t) => {
                var GFontDBClient = GCore.GOpenTypeUtil.getFont(null, null, null, t, true);
                n._numFiles += GFontDBClient.length - 1;
                var GFontsProviderManager = function (t, n) {
                    return n < t.length
                      ? function () {
                          this.checkAndAdd(t[n], GFontsProviderManager(t, n + 1));
                        }.bind(this)
                      : e;
                  }.bind(n),
                  GCustomFontsProvider = GFontsProviderManager(GFontDBClient, 0);
                GCustomFontsProvider && GCustomFontsProvider.call(n);
              });
            }));
        },
        true,
        t
      );
    }

    busy() {
      return !this._fontDB || !this._fontDB.ready() || this._numFiles > 0;
    }

    getProgress() {
      return 0 === this._numFiles ? 1 : this._numLoaded / this._numFiles;
    }

    ready() {
      return this._tmpFontList
        ? Promise.resolve(undefined)
        : new Promise((e) => {
            this._fontDB.getItem(GFontDBClient.FONT_LIST).done((t) => {
              ((this._tmpFontList = t || []), e());
            });
          });
    }

    checkAndAdd(e, t) {
      var n = e.family,
        GCore = e.weight,
        GFontDBClient = e.style,
        GFontsProviderManager = e.buffer,
        GCustomFontsProvider = {
          style: GFontDBClient,
          weight: String(GCore),
          family: n,
          subfamily: e.subfamily,
          displayname: e.displayname,
        };
      if (this._tmpFontList)
        for (var s = 0; s < this._tmpFontList.length; s++) {
          var l = this._tmpFontList[s];
          if (
            l.family === GCustomFontsProvider.family &&
            l.weight === GCustomFontsProvider.weight &&
            l.style === GCustomFontsProvider.style
          ) {
            if (e.subfamily && !l.subfamily) l.subfamily = e.subfamily;
            else if (l.subfamily && l.subfamily !== GCustomFontsProvider.subfamily) {
              GCustomFontsProvider.family =
                GCustomFontsProvider.family + (GCustomFontsProvider.subfamily || '');
              continue;
            }
            return (
              e.displayname && !l.displayname && (l.displayname = e.displayname),
              void this._postAddAction(t)
            );
          }
        }
      else this._tmpFontList = [];
      (this._tmpFontList.push(GCustomFontsProvider),
        this._fontDB
          .updateItem(n + '_' + GCore + '_' + GFontDBClient, GFontsProviderManager)
          .done(() => {
            this._postAddAction(t, true);
          }));
    }

    _postAddAction(e, t) {
      (this._numLoaded++,
        this._numLoaded === this._numFiles
          ? ((this._numLoaded = 0),
            (this._numFiles = 0),
            this._fontDB.updateItem(GFontDBClient.FONT_LIST, this._tmpFontList).done((n) => {
              if (
                (t
                  ? GFontsProviderManager.getInstance().reset(GCustomFontsProvider, true)
                  : GFontsProviderManager.getInstance().reset(),
                gDesigner.getWorkspace())
              )
                for (var GCore = 0; GCore < this._tmpFontList.length; GCore++) {
                  var GFontDBClient = this._tmpFontList[GCore];
                  gDesigner
                    .getWorkspace()
                    .getFontManager()
                    .getFont(
                      GFontDBClient.family,
                      GFontDBClient.style,
                      parseInt(GFontDBClient.weight)
                    );
                }
              e && e();
            }))
          : e && e());
    }

  }
  exports.exports = s;
}