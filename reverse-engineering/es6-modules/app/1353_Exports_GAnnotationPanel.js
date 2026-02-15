/**
 * Webpack Module #1353
 * Type: exports
 * Name: Exports_GAnnotationPanel
 */

function (exports, module, require) {
  'use strict';
  const { GLocale: o, GLocaleKey: i } = require(1) /* GCore */,
    DataModule_883 = require(883); /* DataModule_883 */
  exports.exports = {
    createAdditionalMentions: function () {
      return {
        MENTION_ALL_REVIEWERS: new DataModule_883({
          name: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-reviewers-name')
          ),
          showText: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-reviewers-show-text')
          ),
          id: '@reviewers',
          avatar: 'assets/icon/notification-icon.svg',
          fontWeight: 'bold',
          type: 'contact',
          role: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-reviewers-role')
          ),
          email: '',
          additional: true,
        }),
        MENTION_ALL_APPROVERS: new DataModule_883({
          name: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-approvers-name')
          ),
          showText: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-approvers-show-text')
          ),
          id: '@approvers',
          avatar: 'assets/icon/notification-icon.svg',
          fontWeight: 'bold',
          type: 'contact',
          role: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-approvers-role')
          ),
          email: '',
          additional: true,
        }),
        MENTION_ALL_CO_AUTHORS: new DataModule_883({
          name: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-co-author-name')
          ),
          showText: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-co-author-show-text')
          ),
          id: '@coauthors',
          avatar: 'assets/icon/notification-icon.svg',
          fontWeight: 'bold',
          type: 'contact',
          role: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-all-co-author-role')
          ),
          email: '',
          additional: true,
        }),
        MENTION_ALL: new DataModule_883({
          name: o.get(new i('GAnnotationPanel', 'text.additional-collaborators-all-name')),
          showText: o.get(new i('GAnnotationPanel', 'text.additional-collaborators-all-show-text')),
          id: '@all',
          avatar: 'assets/icon/notification-icon.svg',
          fontWeight: 'bold',
          type: 'contact',
          role: o.get(new i('GAnnotationPanel', 'text.additional-collaborators-all-role')),
          email: '',
          additional: true,
        }),
        MENTION_OWNER: new DataModule_883({
          name: o.get(new i('GAnnotationPanel', 'text.additional-collaborators-owner-name')),
          showText: o.get(
            new i('GAnnotationPanel', 'text.additional-collaborators-owner-show-text')
          ),
          id: '@owner',
          avatar: 'assets/icon/notification-icon.svg',
          fontWeight: 'bold',
          type: 'contact',
          role: o.get(new i('GAnnotationPanel', 'text.additional-collaborators-owner-role')),
          email: '',
          additional: true,
        }),
      };
    },
  };
}
