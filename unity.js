function unityReady(external, opts, success) {
  var Unity;
  
  if (external.getUnityObject) {
    Unity = external.getUnityObject(1.0);
    opts.onInit = function() { success(Unity) };
    Unity.init(opts);
  } else {
    opts.failure && opts.failure(external);
  }
}

unityReady(external, { name: "Sandbox" }, function (Unity) {
  console.log('before');
  // For some reason, in Ubuntu 12.10 Beta2 this requires a third argument
  Unity.Notification.showNotification('Hello from Sandbox', 'This is a test notification!', undefined);
  Unity.MessagingIndicator.showIndicator("Inbox", { count: 3 });
  console.log('after');
});