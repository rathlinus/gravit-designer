/**
 * Webpack Module #1280
 * Type: class
 * Name: GLinkImageAction
 */

function (exports, module, require) {
    "use strict";
    require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(41) /* stub_requires_682 */;
    var GCore = require(1) /* module */,
      i = require(67) /* GRichTooltipConfig */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GDocument = require(163) /* GDocument */,
      GAction = require(31) /* GAction */,
      GContainer = require(85) /* GContainer */;
    function c() {
      c.TOOLTIP_CONFIG = {
        [i.TOOLTIP_AREA.TOOLBAR]: i.GRichTooltipConfig.from({
          title: GCore.GLocale.get(
            new GCore.GLocaleKey("GLinkImageAction", "tooltip-title")
          ),
          description: GCore.GLocale.get(
            new GCore.GLocaleKey("GLinkImageAction", "tooltip-description")
          ),
          middle: false,
          learnMore:
            "",
        }),
      };
    }
    GCore.GObject.inherit(c, GAction),
      (c.ID = "file.link-import"),
      (c.TITLE = new GCore.GLocaleKey("GLinkImageAction", "title")),
      (c.TOOLTIP_CONFIG = null),
      (c.prototype.getId = function () {
        return c.ID;
      }),
      (c.prototype.getTitle = function () {
        return c.TITLE;
      }),
      (c.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE_IMPORT;
      }),
      (c.prototype.getGroup = function () {
        return "import/place-import";
      }),
      (c.prototype.getIcon = function () {
        return gDesigner.isTouchEnabled() ? "gravit-icon-link-image" : null;
      }),
      (c.prototype.isEnabled = function (e) {
        if (gContainer.getRuntime() !== GContainer.Runtime.Electron) return false;
        var t = gDesigner.getActiveDocument();
        return (
          !!t &&
          (e = e || t.getStorage() || gDesigner.getDefaultStorage()) &&
          e.canPromptOpen()
        );
      }),
      (c.prototype.execute = function (e, t) {
        var n = gDesigner.getActiveDocument();
        if (!n) return false;
        (e = e || n.getStorage() || gDesigner.getDefaultStorage()).openPrompt(
          GDocument.FileTypes.filter((e) => 0 === e.mime.indexOf("image")),
          (e) => {
            var i = "file://" + e.getUniqueId(),
              MenuItemBuilder = i,
              GDocument = n.getScene().getDictionary().putValueIfAbsent(MenuItemBuilder);
            GDocument && (MenuItemBuilder = GDocument.getUrl());
            var GAction = new Image();
            (GAction.onload = () => {
              var e = new GCore.GImage();
              e.setProperties(
                ["iw", "ih", "url"],
                [GAction.naturalWidth, GAction.naturalHeight, MenuItemBuilder]
              ),
                n.insertElement(e, true, true),
                t && t();
            }),
              (GAction.src = i);
          },
          false
        );
      }),
      (c.prototype.isAvailable = function () {
        return gContainer.getRuntime() !== GContainer.Runtime.IPad;
      }),
      (c.prototype.getTooltipConfig = function (e) {
        return (e && c.TOOLTIP_CONFIG[e]) || null;
      }),
      (c.prototype.toString = function () {
        return "[Object GLinkImageAction]";
      }),
      (exports.exports = c);
  }