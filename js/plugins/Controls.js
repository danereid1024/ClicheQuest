/*:
 * @target MZ
 * @plugindesc Tracks last input device and sets switch #20
 */

(() => {

  Input.keyMapper = {
    9: "tab", // tab
    13: "ok", // enter
    16: "shift", // shift
    17: "control", // control
    18: "control", // alt
    27: "escape", // escape
    32: "ok", // space
    33: "pageup", // pageup
    34: "pagedown", // pagedown
    65: "left", // left arrow
    87: "up", // up arrow
    68: "right", // right arrow
    83: "down", // down arrow
    45: "escape", // insert
    8: "escape", // X
    90: "ok", // Z
    96: "escape", // numpad 0
    98: "down", // numpad 2
    100: "left", // numpad 4
    102: "right", // numpad 6
    104: "up", // numpad 8
    120: "debug" // F9
};
Scene_Map.prototype.isMapTouchOk = function() {
    return this.isActive();
};
Scene_Map.prototype.onMapTouch = function() {
  return Input.isTriggered("ok");
};
Scene_Map.prototype.updateDestination = function() {

};

  // Global variable for scripts/events
  window.lastInput = "keyboard"; 

  // --- Keyboard detection ---
  document.addEventListener("keydown", () => {
    window.lastInput = "keyboard";
    $gameSwitches.setValue(20, false); // OFF = keyboard/mouse
  });

  // --- Mouse detection ---
  document.addEventListener("mousedown", () => {
    window.lastInput = "mouse";
    $gameSwitches.setValue(20, false); // OFF = keyboard/mouse
  });

  // --- Gamepad detection ---
  const _updateGamepadState = Input._updateGamepadState;
  Input._updateGamepadState = function(gamepad) {
    if (gamepad) {
      const pressed = gamepad.buttons.some(b => b.pressed);
      const moved = gamepad.axes.some(a => Math.abs(a) > 0.5);

      if (pressed || moved) {
        window.lastInput = "gamepad";
        $gameSwitches.setValue(20, true); // ON = gamepad
      }
    }
    _updateGamepadState.call(this, gamepad);
  };
})();
