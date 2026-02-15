/**
 * Webpack Module #1479
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(271) /* module_271 */;
    const o = require(10) /* module_10 */,
      { IS_LOCALHOST: i, IS_RC: a } = require(231) /* module_231 */;
    o.IS_TEAMS = "teams.coreldraw.app" === window.location.hostname;
    const r = window.location.hostname.endsWith(".ngrok.io");
    o.IS_TEAMS
      ? (o.gApi.url = o.cloudTeamsURL)
      : i || r
      ? (o.trunkwebcdr && (o.gApi.webcdr = o.cloudTrunkURL + "/api/webcdr"),
        (o.gApi.url = o.cloudTrunkURL))
      : o.IS_BETA
      ? (o.cloudBetaURL && (o.gApi.url = o.cloudBetaURL),
        o.betaWebcdr && (o.gApi.webcdr = o.betaWebcdr))
      : a
      ? (o.cloudRCURL && (o.gApi.url = o.cloudRCURL),
        o.stagingWebcdr && (o.gApi.webcdr = o.stagingWebcdr))
      : o.IS_TRUNK &&
        ((o.gApi.url = o.cloudTrunkURL),
        o.trunkwebcdr && (o.gApi.webcdr = o.trunkwebcdr)),
      !o.gApi.webcdr && o.webcdr && (o.gApi.webcdr = o.webcdr),
      (window.gApi = o.gApi),
      (exports.exports = o);
  }