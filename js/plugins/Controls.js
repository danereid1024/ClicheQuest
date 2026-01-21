
(() => {

  const _updateMain = SceneManager.updateMain;
  SceneManager.updateMain = function() {
    _updateMain.call(this);

    if (Input.isTriggered("ok")) {
      console.log("Current device:", window.CurrentInputDevice);
    }
  };
})();