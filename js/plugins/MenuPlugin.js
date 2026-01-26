
(() => {
    
    Scene_MenuBase.prototype.commandWindowHeight = function() {
        return this.calcWindowHeight(9.1, true);
    };

    Scene_MenuBase.prototype.goldWindowHeight = function() {
        return this.calcWindowHeight(1, true);
    };
    Scene_Item.prototype.categoryWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(2.3, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Skill.prototype.skillTypeWindowRect = function() {
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(2.3, true);
    const wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;
    const wy = this.mainAreaTop();
    return new Rectangle(wx, wy, ww, wh);
};

    Scene_Menu.prototype.commandWindowRect = function() {
        const ww = 400;
        const wh = this.commandWindowHeight();
        const wx = 0;
        const wy = 5;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Menu.prototype.statusWindowRect = function() {
        const h1 = this.commandWindowHeight();
        const h2 = this.goldWindowHeight();
        const ww = 200;
        const wh = 200;
        const wx = 0;
        const wy = 850 + h1 + h2;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_ItemBase.prototype.actorWindowRect = function() {
        const rect = Scene_Menu.prototype.statusWindowRect();
        rect.y = this.mainAreaBottom() - rect.height;
        return rect;
    };

    Window_MenuCommand.prototype.maxCols = function() {
        return 2;
    };

    Window_MenuCommand.prototype.numVisibleRows = function() {
        return 2;
    };

    Window_MenuStatus.prototype.maxCols = function() {
        return 1;
    };

    Window_MenuStatus.prototype.numVisibleRows = function() {
        return 1;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRectWithPadding(index);
        const w = Math.min(rect.width, 144);
        const h = Math.min(rect.height, 144);
        const lineHeight = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        const actor = this.actor(index);
        const rect = this.itemRectWithPadding(index);
        const x = rect.x;
        const y = rect.y;
        const width = rect.width;
        const bottom = y + rect.height;
        const lineHeight = this.lineHeight();
        this.drawActorName(actor, x, y + lineHeight * 0, width);
        this.drawActorLevel(actor, x, y + lineHeight * 1, width);
        this.placeBasicGauges(actor, x, bottom - lineHeight * 3, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 1, width);
    };

    Scene_Equip.prototype.commandWindowRect = function() {
    const wx = this.statusWidth();
    const wy = this.mainAreaTop();
    const ww = Graphics.boxWidth - this.statusWidth();
    const wh = this.calcWindowHeight(2.3, true);
    return new Rectangle(wx, wy, ww, wh);
};

    Window_ItemList.prototype.itemHeight = function() {
        return 100;
    }

    Window_MenuCommand.prototype.itemHeight = function() {
        return 100;
    }
    // Window_MenuStatus.prototype.itemHeight = function() {
    //     return 100;
    // }

    Window_ShopBuy.prototype.itemHeight = function() {
        return 100;
    }

    Window_SkillList.prototype.itemHeight = function() {
        return 100;
    }
    Window_Command.prototype.itemHeight = function() {
        return 100;
    }
    Window_EquipStatus.prototype.itemHeight = function() {
        return 100;
    }
    
    Window_EquipCommand.prototype.itemHeight = function() {
        return 100;
    }
    Window_EquipSlot.prototype.itemHeight = function() {
        return 100;
    }
    Window_EquipItem.prototype.itemHeight = function() {
        return 100;
    }


    // Add a new command to the main menu that directly opens the actor's status screen
Scene_Menu.prototype.createCommandWindow = function() {
    const rect = this.commandWindowRect();
    const commandWindow = new Window_MenuCommand(rect);
    commandWindow.setHandler("item", this.commandItem.bind(this));
    commandWindow.setHandler("skill", this.commandSkill.bind(this));
    commandWindow.setHandler("equip", this.commandEquip.bind(this));
    commandWindow.setHandler("status", this.commandStatus.bind(this));
    commandWindow.setHandler("formation", this.commandFormation.bind(this));
    commandWindow.setHandler("options", this.commandOptions.bind(this));
    commandWindow.setHandler("save", this.commandSave.bind(this));
    commandWindow.setHandler("gameEnd", this.commandGameEnd.bind(this));
    commandWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(commandWindow);
    this._commandWindow = commandWindow;
};
Scene_Title.prototype.commandWindowRect = function() {
    const offsetX = $dataSystem.titleCommandWindow.offsetX;
    const offsetY = $dataSystem.titleCommandWindow.offsetY;
    const ww = this.mainCommandWidth();
    const wh = this.calcWindowHeight(6.9, true);
    const wx = (Graphics.boxWidth - ww) / 2 + offsetX;
    const wy = Graphics.boxHeight - wh - 96 + offsetY;
    return new Rectangle(wx, wy, ww, wh);
};
// Handler for the "Status" option
Scene_Menu.prototype.commandStatus = function() {
    SceneManager.push(Scene_Status);
};

Scene_Menu.prototype.commandEquip = function() {
    SceneManager.push(Scene_Equip);
};

Scene_Menu.prototype.commandSkill = function() {
    SceneManager.push(Scene_Skill);
};

Scene_Map.prototype.createMenuButton = function() {
    this._menuButton = new Sprite_Button("menu");
    this._menuButton.x = Graphics.boxWidth - this._menuButton.width - 10;
    this._menuButton.y = this.buttonY();
    this._menuButton.visible = false;
    this.addWindow(this._menuButton);
};

Scene_Shop.prototype.commandWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = this._goldWindow.x;
    const wh = this.calcWindowHeight(2.3, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Shop.prototype.categoryWindowRect = function() {
    const wx = 0;
    const wy = this._dummyWindow.y;
    const ww = Graphics.boxWidth;
    const wh = this.calcWindowHeight(2.3, true);
    return new Rectangle(wx, wy, ww, wh);
};

Scene_GameEnd.prototype.commandWindowRect = function() {
    const ww = 240;
    const wh = this.calcWindowHeight(5, true); // ← taller
    const wx = (Graphics.boxWidth - ww) / 2;
    const wy = (Graphics.boxHeight - wh) / 2;
    return new Rectangle(wx, wy, ww, wh);
  };

})();
