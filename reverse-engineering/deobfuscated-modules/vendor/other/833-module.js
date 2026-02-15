/**
 * Module 833
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

function (exports, module, require) {
  "use strict";
  const n = require(170) /* GLocale */, r = require(325) /* GLocaleKey */;
  exports.exports = e => {
    let {
      accessToken: module,
      apiKey: require,
      appId: o,
      language: a = 0
    } = e;
    n.setLanguage(a);
    const s = new google.picker.DocsView().setIncludeFolders(true).setSelectFolderEnabled(true).setParent("root").setLabel(n.get(new r("GGoogleDrive", "text.all-files-tab-title"))), l = new google.picker.DocsView().setIncludeFolders(true).setEnableDrives(true).setEnableTeamDrives(true).setSelectFolderEnabled(true).setParent("root").setLabel(n.get(new r("GGoogleDrive", "text.team-drives-tab-title")));
    return new google.picker.PickerBuilder().setAppId(o).setOAuthToken(module).enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES).enableFeature(google.picker.Feature.SUPPORT_DRIVES).addView(s).addView(l).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).setDeveloperKey(require).setLocale(n.getLocaleTagISO6391()).build();
  };
}
