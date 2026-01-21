
(() => {
    Window_Base.prototype.translucentOpacity = function() {
        return 255;
    };

    Window_Base.prototype.setBackgroundType = function(type) {
        if (type === 0) {
            this.opacity = 255;
        } else {
            this.opacity = 255;
        }
        if (type === 1) {
            this.showBackgroundDimmer();
        } else {
            this.hideBackgroundDimmer();
        }
    };


Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundFilter = new PIXI.filters.BlurFilter();
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this._backgroundSprite.filters = [this._backgroundFilter];
    this.addChild(this._backgroundSprite);
    this.setBackgroundOpacity(255);
};
})();