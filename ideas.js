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
// There's a new API for notifications.  It requires authentication.  See https://github.com/blog/1306-notifications-api
continuity.ready({ name: 'GitHub' }, function (unity) {
  unity.MessagingIndicator.showIndicator('Notifications', { count: 3 });
});
