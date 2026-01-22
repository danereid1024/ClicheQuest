/*:
 * @target MZ
 * @plugindesc Tracks last input device and sets switch #20
 */

(() => {
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
