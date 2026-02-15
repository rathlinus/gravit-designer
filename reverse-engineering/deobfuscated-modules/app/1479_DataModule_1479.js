/**
 * Webpack Module #1479
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(271) /* polyfill_String_endsWith */;
    const AppSettings = require(10) /* AppSettings */,
      { IS_LOCALHOST: i, IS_RC: a } = require(231) /* DataModule_231 */;
    AppSettings.IS_TEAMS = "teams.coreldraw.app" === window.location.hostname;
    const r = window.location.hostname.endsWith(".ngrok.io");
    AppSettings.IS_TEAMS
      ? (AppSettings.gApi.url = AppSettings.cloudTeamsURL)
      : i || r
      ? (AppSettings.trunkwebcdr && (AppSettings.gApi.webcdr = AppSettings.cloudTrunkURL + "/api/webcdr"),
        (AppSettings.gApi.url = AppSettings.cloudTrunkURL))
      : AppSettings.IS_BETA
      ? (AppSettings.cloudBetaURL && (AppSettings.gApi.url = AppSettings.cloudBetaURL),
        AppSettings.betaWebcdr && (AppSettings.gApi.webcdr = AppSettings.betaWebcdr))
      : a
      ? (AppSettings.cloudRCURL && (AppSettings.gApi.url = AppSettings.cloudRCURL),
        AppSettings.stagingWebcdr && (AppSettings.gApi.webcdr = AppSettings.stagingWebcdr))
      : AppSettings.IS_TRUNK &&
        ((AppSettings.gApi.url = AppSettings.cloudTrunkURL),
        AppSettings.trunkwebcdr && (AppSettings.gApi.webcdr = AppSettings.trunkwebcdr)),
      !AppSettings.gApi.webcdr && AppSettings.webcdr && (AppSettings.gApi.webcdr = AppSettings.webcdr),
      (window.gApi = AppSettings.gApi),
      (exports.exports = AppSettings);
  }