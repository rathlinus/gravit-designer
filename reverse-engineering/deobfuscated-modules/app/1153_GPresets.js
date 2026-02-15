/**
 * Webpack Module #1153
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GCore = require(1) /* GCore */;
    require(173) /* stub_requires_1 */;
    function i() {}
    GCore.GObject.inheritAndMix(i, GCore.GObject);
    var a = null;
    (i.TYPE = {
      PRINT: "preset-print",
      WEB: "preset-web",
      SOCIAL: "preset-social",
      SCREEN: "preset-screen",
      MERCH: "preset-merch",
    }),
      (i.getPresets = function () {
        let exports = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        return (
          (a && !exports) ||
            (a = [
              {
                id: i.TYPE.PRINT,
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.print")
                ),
                nameEn: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.print"),
                  undefined,
                  GCore.GLocaleLanguage.English
                ),
                subTitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-sub-title.print")
                ),
                localeClass: new GCore.GLocaleKey("GPresets", "preset-title.print"),
                icon: "preset-print",
                default: 6,
                layouts: [
                  {
                    id: "4a0",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.4a0")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "presets.4a0"),
                    unit: "mm",
                    width: 1682,
                    height: 2378,
                    dpi: 300,
                  },
                  {
                    id: "2a0",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.2a0")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.2a0"),
                    unit: "mm",
                    width: 1189,
                    height: 1682,
                    dpi: 300,
                  },
                  {
                    id: "a0",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a0")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a0"),
                    unit: "mm",
                    width: 841,
                    height: 1189,
                    dpi: 300,
                  },
                  {
                    id: "a1",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a1")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a1"),
                    unit: "mm",
                    width: 594,
                    height: 841,
                    dpi: 300,
                  },
                  {
                    id: "a2",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a2")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a2"),
                    unit: "mm",
                    width: 420,
                    height: 594,
                    dpi: 300,
                  },
                  {
                    id: "a3",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a3")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a3"),
                    unit: "mm",
                    width: 297,
                    height: 420,
                    dpi: 300,
                  },
                  {
                    id: "a4",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a4")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a4"),
                    unit: "mm",
                    width: 210,
                    height: 297,
                    dpi: 300,
                  },
                  {
                    id: "a5",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a5")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a5"),
                    unit: "mm",
                    width: 148,
                    height: 210,
                    dpi: 300,
                  },
                  {
                    id: "a6",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a6")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a6"),
                    unit: "mm",
                    width: 105,
                    height: 148,
                    dpi: 300,
                  },
                  {
                    id: "a7",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a7")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a7"),
                    unit: "mm",
                    width: 74,
                    height: 105,
                    dpi: 300,
                  },
                  {
                    id: "a8",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a8")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a8"),
                    unit: "mm",
                    width: 52,
                    height: 74,
                    dpi: 300,
                  },
                  {
                    id: "a9",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a9")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a9"),
                    unit: "mm",
                    width: 37,
                    height: 52,
                    dpi: 300,
                  },
                  {
                    id: "a10",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.a10")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.a10"),
                    unit: "mm",
                    width: 26,
                    height: 37,
                    dpi: 300,
                  },
                  {
                    id: "us-letter-portrait",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.us-letter-portrait")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.us-letter-portrait"
                    ),
                    unit: "in",
                    width: 8.5,
                    height: 11,
                    dpi: 300,
                  },
                  {
                    id: "us-letter-landscape",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.us-letter-landscape")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.us-letter-landscape"
                    ),
                    unit: "in",
                    width: 11,
                    height: 8.5,
                    dpi: 300,
                  },
                  {
                    id: "business-card",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.business-card")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.business-card"
                    ),
                    unit: "mm",
                    width: 85,
                    height: 55,
                    dpi: 300,
                  },
                  {
                    id: "flyer",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.flyer")
                    ),
                    localeClass: new GCore.GLocaleKey("GPresets", "preset.flyer"),
                    unit: "in",
                    width: 5,
                    height: 7,
                    dpi: 300,
                  },
                  {
                    id: "postcard",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.postcard")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.postcard"
                    ),
                    unit: "mm",
                    width: 148,
                    height: 105,
                    dpi: 300,
                  },
                ],
              },
              {
                id: i.TYPE.WEB,
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.web")
                ),
                nameEn: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.web"),
                  undefined,
                  GCore.GLocaleLanguage.English
                ),
                subTitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-sub-title.web")
                ),
                localeClass: new GCore.GLocaleKey("GPresets", "preset-title.web"),
                icon: "preset-web",
                layouts: [
                  {
                    id: "blog-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.blog-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.blog-cover"
                    ),
                    unit: "px",
                    width: 560,
                    height: 315,
                  },
                  {
                    id: "blog-graphic",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.blog-graphic")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.blog-graphic"
                    ),
                    unit: "px",
                    width: 800,
                    height: 1200,
                  },
                  {
                    id: "website-small",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.website-small")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.website-small"
                    ),
                    unit: "px",
                    width: 1024,
                    height: 768,
                  },
                  {
                    id: "website-normal",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.website-normal")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.website-normal"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 800,
                  },
                  {
                    id: "website-medium",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.website-medium")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.website-medium"
                    ),
                    unit: "px",
                    width: 1366,
                    height: 768,
                  },
                  {
                    id: "website-large",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.website-large")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.website-large"
                    ),
                    unit: "px",
                    width: 1440,
                    height: 900,
                  },
                  {
                    id: "website-huge",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.website-huge")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.website-huge"
                    ),
                    unit: "px",
                    width: 1920,
                    height: 1280,
                  },
                  {
                    id: "full-website",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.full-website")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.full-website"
                    ),
                    unit: "px",
                    width: 1440,
                    height: 3072,
                  },
                ],
              },
              {
                id: i.TYPE.SOCIAL,
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.social")
                ),
                nameEn: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.social"),
                  undefined,
                  GCore.GLocaleLanguage.English
                ),
                subTitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-sub-title.social")
                ),
                localeClass: new GCore.GLocaleKey(
                  "GPresets",
                  "preset-title.social"
                ),
                icon: "preset-social",
                layouts: [
                  {
                    id: "facebook-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-cover"
                    ),
                    unit: "px",
                    width: 820,
                    height: 312,
                  },
                  {
                    id: "twitter-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitter-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitter-cover"
                    ),
                    unit: "px",
                    width: 1500,
                    height: 500,
                  },
                  {
                    id: "blog-post",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.blog-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.blog-post"
                    ),
                    unit: "px",
                    width: 800,
                    height: 1200,
                  },
                  {
                    id: "youtube-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.youtube-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.youtube-cover"
                    ),
                    unit: "px",
                    width: 2560,
                    height: 1440,
                  },
                  {
                    id: "google-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.google-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.google-cover"
                    ),
                    unit: "px",
                    width: 1084,
                    height: 610,
                  },
                  {
                    id: "google-business-profile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GPresets",
                        "preset.google-business-profile"
                      )
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.google-business-profile"
                    ),
                    unit: "px",
                    width: 250,
                    height: 250,
                  },
                  {
                    id: "google-business-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GPresets",
                        "preset.google-business-cover"
                      )
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.google-business-cover"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 608,
                  },
                  {
                    id: "google-business-post",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GPresets",
                        "preset.google-business-post"
                      )
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.google-business-post"
                    ),
                    unit: "px",
                    width: 497,
                    height: 373,
                  },
                  {
                    id: "linkedin-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.linkedin-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-cover"
                    ),
                    unit: "px",
                    width: 1128,
                    height: 191,
                  },
                  {
                    id: "twitch-cover",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitch-cover")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitch-cover"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 480,
                  },
                  {
                    id: "twitter-post-small",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitter-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitter-post"
                    ),
                    unit: "px",
                    width: 1600,
                    height: 900,
                  },
                  {
                    id: "twitter-post-large",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitter-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitter-post"
                    ),
                    unit: "px",
                    width: 1920,
                    height: 1080,
                  },
                  {
                    id: "twitter-profile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitter-profile")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitter-profile"
                    ),
                    unit: "px",
                    width: 400,
                    height: 400,
                  },
                  {
                    id: "twitter-story",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitter-story")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitter-story"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 675,
                  },
                  {
                    id: "facebook-post",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-post"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 630,
                  },
                  {
                    id: "facebook-profile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-profile")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-profile"
                    ),
                    unit: "px",
                    width: 180,
                    height: 180,
                  },
                  {
                    id: "facebook-story",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-story")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-story"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1920,
                  },
                  {
                    id: "facebook-app",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-app")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-app"
                    ),
                    unit: "px",
                    width: 940,
                    height: 788,
                  },
                  {
                    id: "facebook-ad",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.facebook-ad")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.facebook-ad"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "instagram-post",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.instagram-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.instagram-post"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "instagram-profile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.instagram-profile")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.instagram-profile"
                    ),
                    unit: "px",
                    width: 110,
                    height: 110,
                  },
                  {
                    id: "instagram-story",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.instagram-story")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.instagram-story"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1920,
                  },
                  {
                    id: "instagram-thumbnail",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.instagram-thumbnail")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.instagram-thumbnail"
                    ),
                    unit: "px",
                    width: 161,
                    height: 161,
                  },
                  {
                    id: "tumblr-graphic",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.tumblr-graphic")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.tumblr-graphic"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 1920,
                  },
                  {
                    id: "pinterest-pin",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.pinterest-pin")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.pinterest-pin"
                    ),
                    unit: "px",
                    width: 1e3,
                    height: 1500,
                  },
                  {
                    id: "twitch-video",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.twitch-video")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.twitch-video"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 720,
                  },
                  {
                    id: "linkedin-banner",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.linkedin-banner")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-banner"
                    ),
                    unit: "px",
                    width: 1584,
                    height: 396,
                  },
                  {
                    id: "linkedin-profile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.linkedin-profile")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-profile"
                    ),
                    unit: "px",
                    width: 400,
                    height: 400,
                  },
                  {
                    id: "linkedin-post",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.linkedin-post")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-post"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "dribble-shot",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.dribble-shot")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.dribble-shot"
                    ),
                    unit: "px",
                    width: 2800,
                    height: 2100,
                    displaySize: true,
                  },
                ],
              },
              {
                id: i.TYPE.SCREEN,
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.screen")
                ),
                nameEn: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.screen"),
                  undefined,
                  GCore.GLocaleLanguage.English
                ),
                subTitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-sub-title.screen")
                ),
                localeClass: new GCore.GLocaleKey(
                  "GPresets",
                  "preset-title.screen"
                ),
                icon: "preset-screen",
                layouts: [
                  {
                    id: "iphone-x",
                    name: "iPhone X",
                    localeClass: null,
                    unit: "px",
                    width: 375,
                    height: 812,
                  },
                  {
                    id: "iphone-xr",
                    name: "iPhone XR",
                    localeClass: null,
                    unit: "px",
                    width: 828,
                    height: 1792,
                  },
                  {
                    id: "iphone-xs-max",
                    name: "iPhone XS Max",
                    localeClass: null,
                    unit: "px",
                    width: 1242,
                    height: 2688,
                  },
                  {
                    id: "iphone-plus",
                    name: "iPhone 6/7/8 Plus",
                    localeClass: null,
                    unit: "px",
                    width: 414,
                    height: 736,
                  },
                  {
                    id: "iphone",
                    name: "iPhone 6/7/8",
                    localeClass: null,
                    unit: "px",
                    width: 375,
                    height: 667,
                  },
                  {
                    id: "iphone-se",
                    name: "iPhone 5/SE",
                    localeClass: null,
                    unit: "px",
                    width: 320,
                    height: 568,
                  },
                  {
                    id: "google-pixel-xl",
                    name: "Google Pixel 2/XL",
                    localeClass: null,
                    unit: "px",
                    width: 411,
                    height: 731,
                  },
                  {
                    id: "android-mobile",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "text.android-mobile")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "text.android-mobile"
                    ),
                    unit: "px",
                    width: 360,
                    height: 640,
                  },
                  {
                    id: "apple-watch-38",
                    name: "Apple Watch 38 mm",
                    localeClass: null,
                    unit: "px",
                    width: 272,
                    height: 340,
                  },
                  {
                    section: "55f6e10de679477c7bca92c4",
                    id: "apple-watch-42mm",
                    name: "Apple Watch 42 mm",
                    localeClass: null,
                    unit: "px",
                    width: 312,
                    height: 390,
                  },
                  {
                    id: "apple-watch-4-40mm",
                    name: "Apple Watch 4 40 mm",
                    localeClass: null,
                    unit: "px",
                    width: 324,
                    height: 394,
                  },
                  {
                    id: "apple-watch-4-44mm",
                    name: "Apple Watch 4 44 mm",
                    localeClass: null,
                    unit: "px",
                    width: 368,
                    height: 448,
                  },
                  {
                    id: "ipad-mini",
                    name: "iPad 3/4/Air/Mini",
                    localeClass: null,
                    unit: "px",
                    width: 768,
                    height: 1024,
                  },
                  {
                    id: "ipad-pro",
                    name: "iPad Pro 12.9in",
                    localeClass: null,
                    unit: "px",
                    width: 1024,
                    height: 1366,
                  },
                  {
                    id: "nexus-7",
                    name: "Nexus 7",
                    localeClass: null,
                    unit: "px",
                    width: 600,
                    height: 960,
                  },
                  {
                    id: "nexus-9",
                    name: "Nexus 9",
                    localeClass: null,
                    unit: "px",
                    width: 1024,
                    height: 768,
                  },
                  {
                    id: "nexus-10",
                    name: "Nexus 10",
                    localeClass: null,
                    unit: "px",
                    width: 1280,
                    height: 800,
                  },
                  {
                    id: "surface-pro-3",
                    name: "Surface Pro 3",
                    localeClass: null,
                    unit: "px",
                    width: 1440,
                    height: 960,
                  },
                  {
                    id: "surface-pro-4",
                    name: "Surface Pro 4",
                    localeClass: null,
                    unit: "px",
                    width: 1368,
                    height: 912,
                  },
                ],
              },
              {
                id: i.TYPE.MERCH,
                name: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.merch")
                ),
                nameEn: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-title.merch"),
                  undefined,
                  GCore.GLocaleLanguage.English
                ),
                subTitle: GCore.GLocale.get(
                  new GCore.GLocaleKey("GPresets", "preset-sub-title.merch")
                ),
                localeClass: new GCore.GLocaleKey("GPresets", "preset-title.merch"),
                icon: "preset-merch",
                hidden: true,
                layouts: [
                  {
                    id: "amazon-shirt",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GPresets",
                        "preset.amazon-shirt-pullover"
                      )
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.amazon-shirt-pullover"
                    ),
                    unit: "in",
                    dpi: 300,
                    template: "amazon_shirts",
                    includes: [
                      {
                        name: GCore.GLocale.get(
                          new GCore.GLocaleKey("GPresets", "preset.amazon-shirt")
                        ),
                        localeClass: new GCore.GLocaleKey(
                          "GPresets",
                          "preset.amazon-shirt"
                        ),
                        width: 15,
                        height: 18,
                        displaySize: true,
                      },
                      {
                        name: GCore.GLocale.get(
                          new GCore.GLocaleKey("GPresets", "preset.amazon-pullover")
                        ),
                        localeClass: new GCore.GLocaleKey(
                          "GPresets",
                          "preset.amazon-pullover"
                        ),
                        width: 15,
                        height: 13.5,
                        displaySize: true,
                      },
                    ],
                  },
                  {
                    id: "amazon-popsocket",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.amazon-popsocket")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.amazon-popsocket"
                    ),
                    unit: "px",
                    dpi: 72,
                    width: 485,
                    height: 485,
                    template: "amazon_popsockets",
                  },
                  {
                    id: "teepublic-shirt",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.teepublic-shirt")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.teepublic-shirt"
                    ),
                    unit: "px",
                    dpi: 72,
                    width: 1500,
                    height: 1995,
                    template: "teepublic_shirts",
                  },
                  {
                    id: "cafepress-shirt",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.cafepress-shirt")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.cafepress-shirt"
                    ),
                    unit: "in",
                    dpi: 200,
                    width: 10,
                    height: 10,
                    template: "cafepress_shirts",
                  },
                  {
                    id: "redbubble-shirt",
                    name: GCore.GLocale.get(
                      new GCore.GLocaleKey("GPresets", "preset.redbubble-shirt")
                    ),
                    localeClass: new GCore.GLocaleKey(
                      "GPresets",
                      "preset.redbubble-shirt"
                    ),
                    unit: "px",
                    dpi: 72,
                    template: "redbubble_shirts",
                    includes: [
                      {
                        name: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPresets",
                            "preset.redbubble-shirt-standard"
                          )
                        ),
                        localeClass: new GCore.GLocaleKey(
                          "GPresets",
                          "preset.redbubble-shirt-standard"
                        ),
                        width: 2400,
                        height: 3200,
                        displaySize: true,
                      },
                      {
                        name: GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GPresets",
                            "preset.redbubble-shirt-long"
                          )
                        ),
                        localeClass: new GCore.GLocaleKey(
                          "GPresets",
                          "preset.redbubble-shirt-long"
                        ),
                        width: 2875,
                        height: 3900,
                        displaySize: true,
                      },
                    ],
                  },
                ],
              },
            ]),
          a
        );
      }),
      (exports.exports = i);
  }