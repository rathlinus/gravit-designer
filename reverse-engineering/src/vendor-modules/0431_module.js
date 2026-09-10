/**
 * chunk.vendor.js Module #431
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = {
        Events: {
          DOCUMENT_CREATED: "document.created",
          DOCUMENT_OPENED: "document.opened",
          DOCUMENT_SAVED: "document.saved",
          DOCUMENT_EXPORTED: "document.exported",
          ACCOUNT_TRIAL_EXPIRED_SCREEN: "account.trial-expired-screen",
          ACCOUNT_CART_SCREEN: "account.cart-screen",
          APPLICATION_LAUNCHED: "application.launched",
          ACCOUNT_CREATED: "account.created",
          ACCOUNT_LOGIN: "account.login",
          ACCOUNT_TRIAL_STARTED: "account.trial-started",
          ACCOUNT_SUBSCRIBED: "account.subscribed",
        },
        EventProperties: {
          DOCUMENT_CREATED: {
            DOCUMENT_CATEGORY: "document.category",
            DOCUMENT_TYPE: "document.type",
            DOCUMENT_TEMPLATE_ID: "document.template-id",
          },
          DOCUMENT_OPENED: {
            DOCUMENT_FILE_FORMAT: "document.file-format",
            DOCUMENT_SOURCE: "document.source",
            DOCUMENT_RECENT: "document.recent",
          },
          DOCUMENT_SAVED: {
            DOCUMENT_FILE_FORMAT: "document.file-format",
            DOCUMENT_DESTINATION: "document.destination",
          },
          DOCUMENT_EXPORTED: {
            DOCUMENT_EXPORT_TYPE: "document.export-type",
            DOCUMENT_FILE_FORMAT: "document.file-format",
          },
          ACCOUNT_SUBSCRIBED: {
            ACCOUNT_TRIAL_DAYS_LEFT: "account.trial-days-left",
            ACCOUNT_SUBSCRIPTION_DAYS_LEFT: "account.subscription-days-left",
            ACCOUNT_TOTAL_TRIAL_DAYS_GIVEN: "account.total-trial-days-given",
            ACCOUNT_TOTAL_SUBSCRIPTION_DAYS_GIVEN:
              "account.total-subscription-days-given",
            ACCOUNT_EVER_SUBSCRIBED: "account.ever-subscribed",
            ACCOUNT_COUPON_USED: "account.coupon-used",
          },
          APPLICATION_LAUNCHED: {
            ACCOUNT_TRIAL_DAYS_LEFT: "account.trial-days-left",
            ACCOUNT_SUBSCRIPTION_DAYS_LEFT: "account.subscription-days-left",
            ACCOUNT_TRIAL_EXPIRED: "account.trial-expired",
            ACCOUNT_TOTAL_TRIAL_DAYS_GIVEN: "account.total-trial-days-given",
            ACCOUNT_TOTAL_SUBSCRIPTION_DAYS_GIVEN:
              "account.total-subscription-days-given",
            ACCOUNT_EVER_SUBSCRIBED: "account.ever-subscribed",
          },
          ACCOUNT_TRIAL_EXPIRED_SCREEN: {
            ACCOUNT_TOTAL_TRIAL_DAYS_GIVEN: "account.total-trial-days-given",
            ACCOUNT_TOTAL_SUBSCRIPTION_DAYS_GIVEN:
              "account.total-subscription-days-given",
            ACCOUNT_EVER_SUBSCRIBED: "account.ever-subscribed",
          },
        },
        UserProperties: {
          PRODUCT_NAME: "product.name",
          PRODUCT_APP_NAME: "product.app-name",
          PRODUCT_BUILD_NUMBER: "product.build-number",
          PRODUCT_LANGUAGE: "product.language",
          PRODUCT_LICENSE_TYPE: "product.license-type",
          PRODUCT_LICENSE_STATUS: "product.license-status",
          PRODUCT_ENVIRONMENT: "product.environment",
        },
        ExportTypes: {
          Simple: "Simple",
          Advanced: "Advanced",
        },
      };
    }