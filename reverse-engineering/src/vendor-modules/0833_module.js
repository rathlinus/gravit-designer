/**
 * chunk.vendor.js Module #833
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const n = i(170),
        r = i(325);
      e.exports = (e) => {
        let { accessToken: t, apiKey: i, appId: o, language: a = 0 } = e;
        n.setLanguage(a);
        const s = new google.picker.DocsView()
            .setIncludeFolders(!0)
            .setSelectFolderEnabled(!0)
            .setParent("root")
            .setLabel(n.get(new r("GGoogleDrive", "text.all-files-tab-title"))),
          l = new google.picker.DocsView()
            .setIncludeFolders(!0)
            .setEnableDrives(!0)
            .setEnableTeamDrives(!0)
            .setSelectFolderEnabled(!0)
            .setParent("root")
            .setLabel(
              n.get(new r("GGoogleDrive", "text.team-drives-tab-title")),
            );
        return new google.picker.PickerBuilder()
          .setAppId(o)
          .setOAuthToken(t)
          .enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
          .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
          .addView(s)
          .addView(l)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setDeveloperKey(i)
          .setLocale(n.getLocaleTagISO6391())
          .build();
      };
    }