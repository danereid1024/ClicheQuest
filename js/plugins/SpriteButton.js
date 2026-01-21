(() => {
  const alias_createButtons = Scene_Map.prototype.createButtons;
  Scene_Map.prototype.createButtons = function() {
    alias_createButtons.call(this);

    if (this._button) {
      this._button.scale.x = 2; // Increase width scale
      this._button.scale.y = 2; // Increase height scale
    }
  };
})();
