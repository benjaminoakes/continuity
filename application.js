var console, continuity;

continuity.ready({ name: "Sandbox" }, function (unity) {
  console.log('before');

  // For some reason, in Ubuntu 12.10 Beta2 this requires a third argument... even `undefined`
  unity.Notification.showNotification('Hello from Sandbox', 'This is a test notification!', undefined);
  unity.MessagingIndicator.showIndicator('Inbox', { count: 3 });

  console.log('after');
}, function (error) {
  console.dir(error);
  console.error(error);
});
