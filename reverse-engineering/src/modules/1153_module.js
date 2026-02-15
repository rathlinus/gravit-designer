/**
 * Webpack Module #1153
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(1);
    n(173);
    function i() {}
    o.GObject.inheritAndMix(i, o.GObject);
    var a = null;
    (i.TYPE = {
      PRINT: "preset-print",
      WEB: "preset-web",
      SOCIAL: "preset-social",
      SCREEN: "preset-screen",
      MERCH: "preset-merch",
    }),
      (i.getPresets = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
          (a && !e) ||
            (a = [
              {
                id: i.TYPE.PRINT,
                name: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.print")
                ),
                nameEn: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.print"),
                  void 0,
                  o.GLocaleLanguage.English
                ),
                subTitle: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-sub-title.print")
                ),
                localeClass: new o.GLocaleKey("GPresets", "preset-title.print"),
                icon: "preset-print",
                default: 6,
                layouts: [
                  {
                    id: "4a0",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.4a0")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "presets.4a0"),
                    unit: "mm",
                    width: 1682,
                    height: 2378,
                    dpi: 300,
                  },
                  {
                    id: "2a0",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.2a0")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.2a0"),
                    unit: "mm",
                    width: 1189,
                    height: 1682,
                    dpi: 300,
                  },
                  {
                    id: "a0",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a0")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a0"),
                    unit: "mm",
                    width: 841,
                    height: 1189,
                    dpi: 300,
                  },
                  {
                    id: "a1",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a1")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a1"),
                    unit: "mm",
                    width: 594,
                    height: 841,
                    dpi: 300,
                  },
                  {
                    id: "a2",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a2")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a2"),
                    unit: "mm",
                    width: 420,
                    height: 594,
                    dpi: 300,
                  },
                  {
                    id: "a3",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a3")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a3"),
                    unit: "mm",
                    width: 297,
                    height: 420,
                    dpi: 300,
                  },
                  {
                    id: "a4",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a4")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a4"),
                    unit: "mm",
                    width: 210,
                    height: 297,
                    dpi: 300,
                  },
                  {
                    id: "a5",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a5")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a5"),
                    unit: "mm",
                    width: 148,
                    height: 210,
                    dpi: 300,
                  },
                  {
                    id: "a6",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a6")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a6"),
                    unit: "mm",
                    width: 105,
                    height: 148,
                    dpi: 300,
                  },
                  {
                    id: "a7",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a7")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a7"),
                    unit: "mm",
                    width: 74,
                    height: 105,
                    dpi: 300,
                  },
                  {
                    id: "a8",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a8")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a8"),
                    unit: "mm",
                    width: 52,
                    height: 74,
                    dpi: 300,
                  },
                  {
                    id: "a9",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a9")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a9"),
                    unit: "mm",
                    width: 37,
                    height: 52,
                    dpi: 300,
                  },
                  {
                    id: "a10",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.a10")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.a10"),
                    unit: "mm",
                    width: 26,
                    height: 37,
                    dpi: 300,
                  },
                  {
                    id: "us-letter-portrait",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.us-letter-portrait")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.us-letter-landscape")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.business-card")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.flyer")
                    ),
                    localeClass: new o.GLocaleKey("GPresets", "preset.flyer"),
                    unit: "in",
                    width: 5,
                    height: 7,
                    dpi: 300,
                  },
                  {
                    id: "postcard",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.postcard")
                    ),
                    localeClass: new o.GLocaleKey(
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
                name: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.web")
                ),
                nameEn: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.web"),
                  void 0,
                  o.GLocaleLanguage.English
                ),
                subTitle: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-sub-title.web")
                ),
                localeClass: new o.GLocaleKey("GPresets", "preset-title.web"),
                icon: "preset-web",
                layouts: [
                  {
                    id: "blog-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.blog-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.blog-cover"
                    ),
                    unit: "px",
                    width: 560,
                    height: 315,
                  },
                  {
                    id: "blog-graphic",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.blog-graphic")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.blog-graphic"
                    ),
                    unit: "px",
                    width: 800,
                    height: 1200,
                  },
                  {
                    id: "website-small",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.website-small")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.website-small"
                    ),
                    unit: "px",
                    width: 1024,
                    height: 768,
                  },
                  {
                    id: "website-normal",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.website-normal")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.website-normal"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 800,
                  },
                  {
                    id: "website-medium",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.website-medium")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.website-medium"
                    ),
                    unit: "px",
                    width: 1366,
                    height: 768,
                  },
                  {
                    id: "website-large",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.website-large")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.website-large"
                    ),
                    unit: "px",
                    width: 1440,
                    height: 900,
                  },
                  {
                    id: "website-huge",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.website-huge")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.website-huge"
                    ),
                    unit: "px",
                    width: 1920,
                    height: 1280,
                  },
                  {
                    id: "full-website",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.full-website")
                    ),
                    localeClass: new o.GLocaleKey(
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
                name: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.social")
                ),
                nameEn: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.social"),
                  void 0,
                  o.GLocaleLanguage.English
                ),
                subTitle: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-sub-title.social")
                ),
                localeClass: new o.GLocaleKey(
                  "GPresets",
                  "preset-title.social"
                ),
                icon: "preset-social",
                layouts: [
                  {
                    id: "facebook-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-cover"
                    ),
                    unit: "px",
                    width: 820,
                    height: 312,
                  },
                  {
                    id: "twitter-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitter-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitter-cover"
                    ),
                    unit: "px",
                    width: 1500,
                    height: 500,
                  },
                  {
                    id: "blog-post",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.blog-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.blog-post"
                    ),
                    unit: "px",
                    width: 800,
                    height: 1200,
                  },
                  {
                    id: "youtube-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.youtube-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.youtube-cover"
                    ),
                    unit: "px",
                    width: 2560,
                    height: 1440,
                  },
                  {
                    id: "google-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.google-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.google-cover"
                    ),
                    unit: "px",
                    width: 1084,
                    height: 610,
                  },
                  {
                    id: "google-business-profile",
                    name: o.GLocale.get(
                      new o.GLocaleKey(
                        "GPresets",
                        "preset.google-business-profile"
                      )
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.google-business-profile"
                    ),
                    unit: "px",
                    width: 250,
                    height: 250,
                  },
                  {
                    id: "google-business-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey(
                        "GPresets",
                        "preset.google-business-cover"
                      )
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.google-business-cover"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 608,
                  },
                  {
                    id: "google-business-post",
                    name: o.GLocale.get(
                      new o.GLocaleKey(
                        "GPresets",
                        "preset.google-business-post"
                      )
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.google-business-post"
                    ),
                    unit: "px",
                    width: 497,
                    height: 373,
                  },
                  {
                    id: "linkedin-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.linkedin-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-cover"
                    ),
                    unit: "px",
                    width: 1128,
                    height: 191,
                  },
                  {
                    id: "twitch-cover",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitch-cover")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitch-cover"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 480,
                  },
                  {
                    id: "twitter-post-small",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitter-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitter-post"
                    ),
                    unit: "px",
                    width: 1600,
                    height: 900,
                  },
                  {
                    id: "twitter-post-large",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitter-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitter-post"
                    ),
                    unit: "px",
                    width: 1920,
                    height: 1080,
                  },
                  {
                    id: "twitter-profile",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitter-profile")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitter-profile"
                    ),
                    unit: "px",
                    width: 400,
                    height: 400,
                  },
                  {
                    id: "twitter-story",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitter-story")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitter-story"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 675,
                  },
                  {
                    id: "facebook-post",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-post"
                    ),
                    unit: "px",
                    width: 1200,
                    height: 630,
                  },
                  {
                    id: "facebook-profile",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-profile")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-profile"
                    ),
                    unit: "px",
                    width: 180,
                    height: 180,
                  },
                  {
                    id: "facebook-story",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-story")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-story"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1920,
                  },
                  {
                    id: "facebook-app",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-app")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-app"
                    ),
                    unit: "px",
                    width: 940,
                    height: 788,
                  },
                  {
                    id: "facebook-ad",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.facebook-ad")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.facebook-ad"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "instagram-post",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.instagram-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.instagram-post"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "instagram-profile",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.instagram-profile")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.instagram-profile"
                    ),
                    unit: "px",
                    width: 110,
                    height: 110,
                  },
                  {
                    id: "instagram-story",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.instagram-story")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.instagram-story"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1920,
                  },
                  {
                    id: "instagram-thumbnail",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.instagram-thumbnail")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.instagram-thumbnail"
                    ),
                    unit: "px",
                    width: 161,
                    height: 161,
                  },
                  {
                    id: "tumblr-graphic",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.tumblr-graphic")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.tumblr-graphic"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 1920,
                  },
                  {
                    id: "pinterest-pin",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.pinterest-pin")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.pinterest-pin"
                    ),
                    unit: "px",
                    width: 1e3,
                    height: 1500,
                  },
                  {
                    id: "twitch-video",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.twitch-video")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.twitch-video"
                    ),
                    unit: "px",
                    width: 1280,
                    height: 720,
                  },
                  {
                    id: "linkedin-banner",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.linkedin-banner")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-banner"
                    ),
                    unit: "px",
                    width: 1584,
                    height: 396,
                  },
                  {
                    id: "linkedin-profile",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.linkedin-profile")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-profile"
                    ),
                    unit: "px",
                    width: 400,
                    height: 400,
                  },
                  {
                    id: "linkedin-post",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.linkedin-post")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.linkedin-post"
                    ),
                    unit: "px",
                    width: 1080,
                    height: 1080,
                  },
                  {
                    id: "dribble-shot",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.dribble-shot")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.dribble-shot"
                    ),
                    unit: "px",
                    width: 2800,
                    height: 2100,
                    displaySize: !0,
                  },
                ],
              },
              {
                id: i.TYPE.SCREEN,
                name: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.screen")
                ),
                nameEn: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.screen"),
                  void 0,
                  o.GLocaleLanguage.English
                ),
                subTitle: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-sub-title.screen")
                ),
                localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "text.android-mobile")
                    ),
                    localeClass: new o.GLocaleKey(
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
                name: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.merch")
                ),
                nameEn: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-title.merch"),
                  void 0,
                  o.GLocaleLanguage.English
                ),
                subTitle: o.GLocale.get(
                  new o.GLocaleKey("GPresets", "preset-sub-title.merch")
                ),
                localeClass: new o.GLocaleKey("GPresets", "preset-title.merch"),
                icon: "preset-merch",
                hidden: !0,
                layouts: [
                  {
                    id: "amazon-shirt",
                    name: o.GLocale.get(
                      new o.GLocaleKey(
                        "GPresets",
                        "preset.amazon-shirt-pullover"
                      )
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.amazon-shirt-pullover"
                    ),
                    unit: "in",
                    dpi: 300,
                    template: "amazon_shirts",
                    includes: [
                      {
                        name: o.GLocale.get(
                          new o.GLocaleKey("GPresets", "preset.amazon-shirt")
                        ),
                        localeClass: new o.GLocaleKey(
                          "GPresets",
                          "preset.amazon-shirt"
                        ),
                        width: 15,
                        height: 18,
                        displaySize: !0,
                      },
                      {
                        name: o.GLocale.get(
                          new o.GLocaleKey("GPresets", "preset.amazon-pullover")
                        ),
                        localeClass: new o.GLocaleKey(
                          "GPresets",
                          "preset.amazon-pullover"
                        ),
                        width: 15,
                        height: 13.5,
                        displaySize: !0,
                      },
                    ],
                  },
                  {
                    id: "amazon-popsocket",
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.amazon-popsocket")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.teepublic-shirt")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.cafepress-shirt")
                    ),
                    localeClass: new o.GLocaleKey(
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
                    name: o.GLocale.get(
                      new o.GLocaleKey("GPresets", "preset.redbubble-shirt")
                    ),
                    localeClass: new o.GLocaleKey(
                      "GPresets",
                      "preset.redbubble-shirt"
                    ),
                    unit: "px",
                    dpi: 72,
                    template: "redbubble_shirts",
                    includes: [
                      {
                        name: o.GLocale.get(
                          new o.GLocaleKey(
                            "GPresets",
                            "preset.redbubble-shirt-standard"
                          )
                        ),
                        localeClass: new o.GLocaleKey(
                          "GPresets",
                          "preset.redbubble-shirt-standard"
                        ),
                        width: 2400,
                        height: 3200,
                        displaySize: !0,
                      },
                      {
                        name: o.GLocale.get(
                          new o.GLocaleKey(
                            "GPresets",
                            "preset.redbubble-shirt-long"
                          )
                        ),
                        localeClass: new o.GLocaleKey(
                          "GPresets",
                          "preset.redbubble-shirt-long"
                        ),
                        width: 2875,
                        height: 3900,
                        displaySize: !0,
                      },
                    ],
                  },
                ],
              },
            ]),
          a
        );
      }),
      (e.exports = i);
  }