 (() => {
     Scene_Battle.prototype.statusWindowRect = function() {
         const extra = 10;
         const ww = 175;
         const wh = 100
         const wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;
         const wy = Graphics.boxHeight - wh + extra - 4;
         return new Rectangle(wx, wy, ww, wh);
     };
     Window_BattleStatus.prototype.maxCols = function() {
         return 1;
     };
     Window_BattleItem.prototype.maxCols = function() {
         return 1;
     };
     
     Window_BattleSkill.prototype.maxCols = function() {
         return 1;
     };
     Scene_Battle.prototype.skillWindowRect = function() {
         const ww = 200;
         const wh = 400;
         const wx = 607;
         const wy = Graphics.boxHeight - wh;
         return new Rectangle(wx, wy, ww, wh);
     };

Window_PartyCommand.prototype.windowHeight = function() {
         return 200;
     };

Scene_Battle.prototype.partyCommandWindowRect = function() {
    const ww = 192;
    const wh = 230;
    const wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;
    const wy = Graphics.boxHeight - wh;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Battle.prototype.actorCommandWindowRect = function() {
    const ww = 192;
    const wh = 430;
    const wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;
    const wy = Graphics.boxHeight - wh;
    return new Rectangle(wx, wy, ww, wh);
};

})();
