/**
 * Webpack Module #1073
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = require(257) /* module_257 */;
    exports.exports = {
      NEWDOCUMENTDIALOG: { HR_UNDER_PRESETS: false },
      OFFLINEDIALOG: { HAS_FOOTER: true },
      PATHPROPERTIES: { PATH_JOIN_CLASS: "" },
      PURCHASEPANEL: { HAS_PRODUCT_DESCRIPTION: true, HAS_HIGHLIGHT: false },
      SCENEPROPERTIES: { HAS_LOGO_UNDER_SYNC: true },
      DESIGNER: {
        HIGHLIGHT_COLOR: undefined,
        GUIDELINE_COLOR: undefined,
        GUIDELINEHINT_COLOR: undefined,
        DISTANCEHELPER_COLOR: undefined,
        HIGHLIGHTOUTLINE_COLOR: undefined,
      },
      USERLOGIN: {
        loadLogo: () =>
          $("<div/>")
            .addClass("cloud-logo")
            .load(o["cloud-logo"], () => {}),
        OVERLAY_CLASS: "",
      },
      BRAND_COLOR: "#d72e63",
      SHOW_BETA_BRANDING: true,
    };
  }