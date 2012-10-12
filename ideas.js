var console, continuity;

// ## StackExchange
//
// * [All docs](https://api.stackexchange.com/docs)
// * [Network Unread Notifications](https://api.stackexchange.com/docs/unread-notifications)
// * [Network Unread Inbox](https://api.stackexchange.com/docs/inbox-unread)
continuity.ready({ name: 'StackOverflow' }, function (unity) {
  var response;

  response = {
    "items": [],
    "quota_remaining": 9999,
    "quota_max": 10000,
    "has_more": false
  };

  unity.MessagingIndicator.showIndicator('Notifications', { count: response.items.length });
  unity.MessagingIndicator.showIndicator('Inbox', { count: response.items.length });
});

// ## GitHub
//
// There doesn't seem to be an API for notifications.  [This Chrome extension](https://github.com/pedromenezes/GitHub-Inbox/blob/master/src/background.js) scrapes.
continuity.ready({ name: 'GitHub' }, function (unity) {
  unity.MessagingIndicator.showIndicator('Notifications', { count: 3 });
});
