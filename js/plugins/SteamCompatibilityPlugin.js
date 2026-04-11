 //==============================================================================
// RPG Maker MZ - SteamCompatibilityPlugin.js
//==============================================================================

/*:
* @target MZ
* @plugindesc Steam Compatiblity
* @author Dane Reid
*
* @help
* This plugin makes Cliche Quest compatible for Steam
*/
(() => { 
    function hideMouse() {
        document.body.style.cursor = "none"
        document.documentElement.style.cursor = "none"

        const canvas = document.getElementById("gameCanvas")

        if (canvas) {
            canvas.style.cursor = "none"
        }
    }

    const Hide_Mouse_Scene_Boot = Scene_Boot.prototype.start
    Scene_Boot.prototype.start = function() {
        Hide_Mouse_Scene_Boot.call(this)
        hideMouse()
    }

    const Hide_Mouse_Scene_Base = Scene_Base.prototype.start
    Scene_Base.prototype.start = function() {
        Hide_Mouse_Scene_Base.call(this)
        hideMouse()
    }
const _Scene_Boot_start = Scene_Boot.prototype.start
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this)

        const win = nw.Window.get()

        const screenWidth = window.screen.width
        const screenHeight = window.screen.height

        const width = win.width
        const height = win.height

        const x = Math.floor((screenWidth - width) / 2)
        const y = Math.floor((screenHeight - height) / 2)

        win.moveTo(x, y)
    }
    
    const Full_Screen_Boot = Scene_Boot.prototype.start
    Scene_Boot.prototype.start = function() {
        Full_Screen_Boot.call(this)

        if(!Graphics._isFullScreen()) {
            Graphics._requestFullScreen()
        }
    }

        Window_Base.prototype.translucentOpacity = function() {
        return 255
    }

    Window_Base.prototype.setBackgroundType = function(type) {
        if (type === 0) {
            this.opacity = 255
        } else {
            this.opacity = 255
        }
        if (type === 1) {
            this.showBackgroundDimmer()
        } else {
            this.hideBackgroundDimmer()
        }
    }

    Scene_Map.prototype.processMapTouch = function() {
        return
    }

    TouchInput.initialize = function() {
        this.clear()
    }


    
Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundFilter = new PIXI.filters.BlurFilter()
    this._backgroundSprite = new Sprite()
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap()
    this._backgroundSprite.filters = [this._backgroundFilter]
    this.addChild(this._backgroundSprite)
    this.setBackgroundOpacity(255)
}

  const alias_createButtons = Scene_Map.prototype.createButtons
  Scene_Map.prototype.createButtons = function() {
    alias_createButtons.call(this)

    if (this._button) {
      this._button.scale.x = 2 
      this._button.scale.y = 2 
    }
  }

  document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            SceneManager.stop()
        } else {
            SceneManager.resume()
        }
    })
        
    })()