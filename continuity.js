var external, continuity;

continuity = (function () {
  function ready(opts, success, error) {
    var unity;
    
    try {
      unity = external.getUnityObject(1.0);
      opts.onInit = function () { success(unity) };
      unity.init(opts);
    } catch (e) {
      error && error(e);
    }
  }

  return {
    ready: ready
  };
}());
