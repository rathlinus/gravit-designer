/**
 * Webpack Module #1622
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(18) /* MenuItemBuilder */,
      i = require(1302) /* module_1302 */;
    exports.exports = [
      {
        name: "contact-us",
        link: gApi.link.getSupportUrl(),
        category: o.CATEGORY_HELP_SUPPORT,
        group: "help/support",
      },
      {
        name: "user-guide",
        link: gApi.link.getDocumentationUrl(),
        category: o.CATEGORY_HELP_LEARN,
        group: "help/learn",
      },
      {
        name: "tutorials",
        link: i.youtubePlaylist,
        category: o.CATEGORY_HELP_LEARN,
        group: "help/learn",
      },
      {
        name: "request-new-feature",
        link: gApi.link.getRequestNewFeatureUrl(),
        category: o.CATEGORY_HELP,
        group: "help",
      },
      {
        name: "eula",
        link: "http://www.corel.com/eula",
        category: o.CATEGORY_HELP,
        group: "help",
      },
    ];
  }