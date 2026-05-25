/*:
* @target MZ
* @plugindesc SteamLink Commands Addon
* @author Maxii1996
* @help
* //////////////////////////////////////////////////////////////////////////////
*               ___ _                  _    _      _   
*              / __| |_ ___ __ _ _ __ | |  (_)_ _ | |__
*              \__ \  _/ -_) _` | '  \| |__| | ' \| / /
*              |___/\__\___\__,_|_|_|_|____|_|_||_|_\_\
*
*         __    ___   _      _       __    _      ___   __  
*       / /`  / / \ | |\/| | |\/|  / /\  | |\ | | | \ ( (` 
*       \_\_, \_\_/ |_|  | |_|  | /_/--\ |_| \| |_|_/ _)_) 
* 
* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*
* @param trueVariable
* @type variable
* @text True Variable
* @desc The game variable where "true" will be stored.
*
*
* @command getScreenName
* @text Get Steam Screen Name
* @desc Gets the Steam screen name and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the Steam screen name will be stored.
*
* @command getUiLanguage
* @text Get UI Language
* @desc Gets the Steam UI language and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the Steam UI language will be stored.
*
* @command getGameLanguage
* @text Get Game Language
* @desc Gets the game language and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the game language will be stored.
*
* @command getAchievementCount
* @text Get Achievement Count
* @desc Gets the number of achievements and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the number of achievements will be stored.
*
* @command isRunning
* @text Is Steam Running
* @desc Checks if Steam is running and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @command isOverlayEnabled
* @text Is Overlay Enabled
* @desc Checks if Steam overlay is enabled and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @command getDlcCount
* @text Get DLC Count
* @desc Gets the number of DLCs and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the number of DLCs will be stored.
*
* @command getFriendCount
* @text Get Friend Count
* @desc Gets the number of friends and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the number of friends will be stored.
*
* @command isCloudEnabled
* @text Is Cloud Enabled
* @desc Checks if Steam Cloud is enabled and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @command isUserCloudEnabled
* @text Is User Cloud Enabled
* @desc Checks if the user has Steam Cloud enabled and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @command activateAchievement
* @text Activate Achievement
* @desc Activates the specified achievement for the player.
*
* @arg achievementName
* @type text
* @text Achievement Name
* @desc The name of the achievement to activate.
*
* @command getAchievement
* @text Get Achievement
* @desc Returns true or false indicating if the player has already activated the specified achievement
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @arg achievementName
* @type text
* @text Achievement Name
* @desc The name of the achievement to check.
*
* @command clearAchievement
* @text Clear Achievement
* @desc Deactivates the specified achievement for the player.
*
* @arg achievementName
* @type text
* @text Achievement Name
* @desc The name of the achievement to deactivate.
*
*
* @command isDLCInstalled
* @text Is DLC Installed
* @desc Checks if the specified DLC is installed and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @arg dlcName
* @type text
* @text DLC Name
* @desc The name of the DLC to check.
*
* @command installDLC
* @text Install DLC
* @desc Installs the specified DLC.
*
* @arg dlcName
* @type text
* @text DLC Name
* @desc The name of the DLC to install.
*
* @command uninstallDLC
* @text Uninstall DLC
* @desc Uninstalls the specified DLC.
*
* @arg dlcName
* @type text
* @text DLC Name
* @desc The name of the DLC to uninstall.
*
* @command getStatInt
* @text Get Stat Int
* @desc Gets the value of the specified integer stat and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @arg statName
* @type text
* @text Stat Name
* @desc The name of the stat to get.
*
* @command getStatFloat
* @text Get Stat Float
* @desc Gets the value of the specified float stat and stores it in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @arg statName
* @type text
* @text Stat Name
* @desc The name of the stat to get.
*
* @command setStat
* @text Set Stat
* @desc Sets the value of the specified stat.
*
* @arg statName
* @type text
* @text Stat Name
* @desc The name of the stat to set.
*
* @arg statValue
* @type number
* @text Stat Value
* @desc The value to set the stat to.
*
* @command storeStats
* @text Store Stats
* @desc Stores the current stats.
*
* @command isSubscribedApp
* @text Is Subscribed App
* @desc Checks if the user is subscribed to the specified app and stores the result in a game variable.
*
* @arg variableId
* @type variable
* @text Variable
* @desc The game variable where the result will be stored.
*
* @arg appId
* @type text
* @text App ID
* @desc The ID of the app to check.
*/



(() => {
  const pluginName = 'SteamLinkCommandsAddon';
  const parameters = PluginManager.parameters(pluginName);
  const trueVariable = Number(parameters['trueVariable']);

  const _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function() {
    _Scene_Map_onMapLoaded.call(this);
    $gameVariables.setValue(trueVariable, true);
  };

  PluginManager.registerCommand(pluginName, 'getScreenName', args => {
    const variableId = Number(args.variableId);
    const screenName = SteamLink.screenName;
    $gameVariables.setValue(variableId, screenName);
  });

  PluginManager.registerCommand(pluginName, 'getUiLanguage', args => {
    const variableId = Number(args.variableId);
    const uiLanguage = SteamLink.uiLanguage;
    $gameVariables.setValue(variableId, uiLanguage);
  });

  PluginManager.registerCommand(pluginName, 'getGameLanguage', args => {
    const variableId = Number(args.variableId);
    const gameLanguage = SteamLink.gameLanguage;
    $gameVariables.setValue(variableId, gameLanguage);
  });

  PluginManager.registerCommand(pluginName, 'getAchievementCount', args => {
    const variableId = Number(args.variableId);
    const achievementCount = SteamLink.achievementCount;
    $gameVariables.setValue(variableId, achievementCount);
  });

  PluginManager.registerCommand(pluginName, 'isRunning', args => {
    const variableId = Number(args.variableId);
    const isRunning = SteamLink.running;
    $gameVariables.setValue(variableId, isRunning);
  });

  PluginManager.registerCommand(pluginName, 'isOverlayEnabled', args => {
    const variableId = Number(args.variableId);
    const isOverlayEnabled = SteamLink.overlayEnabled;
    $gameVariables.setValue(variableId, isOverlayEnabled);
  });

  PluginManager.registerCommand(pluginName, 'getDlcCount', args => {
    const variableId = Number(args.variableId);
    const dlcCount = SteamLink.dlcCount;
    $gameVariables.setValue(variableId, dlcCount);
  });

  PluginManager.registerCommand(pluginName, 'getFriendCount', args => {
    const variableId = Number(args.variableId);
    const friendCount = SteamLink.friendCount;
    $gameVariables.setValue(variableId, friendCount);
  });

  PluginManager.registerCommand(pluginName, 'isCloudEnabled', args => {
    const variableId = Number(args.variableId);
    const isCloudEnabled = SteamLink.cloudEnabled;
    $gameVariables.setValue(variableId, isCloudEnabled);
  });

  PluginManager.registerCommand(pluginName, 'isUserCloudEnabled', args => {
    const variableId = Number(args.variableId);
    const isUserCloudEnabled = SteamLink.userCloudEnabled;
    $gameVariables.setValue(variableId, isUserCloudEnabled);
  });

  PluginManager.registerCommand(pluginName, 'activateAchievement', args => {
    const achievementName = String(args.achievementName);
    SteamLink.activateAchievement(achievementName);
  });

  PluginManager.registerCommand(pluginName, 'getAchievement', args => {
    const variableId = Number(args.variableId);
    const achievementName = String(args.achievementName);
    const achievementStatus = SteamLink.getAchievement(achievementName);
    $gameVariables.setValue(variableId, achievementStatus);
  });

  PluginManager.registerCommand(pluginName, 'clearAchievement', args => {
    const achievementName = String(args.achievementName);
    SteamLink.clearAchievement(achievementName);
  });

  PluginManager.registerCommand(pluginName, 'isDLCInstalled', args => {
    const variableId = Number(args.variableId);
    const dlcId = Number(args.dlcName);
    const isDLCInstalled = SteamLink.isDLCInstalled(dlcId);
    $gameVariables.setValue(variableId, isDLCInstalled ? trueVariable : falseVariable);
  });

  PluginManager.registerCommand(pluginName, 'installDLC', args => {
    const dlcName = String(args.dlcName);
    SteamLink.installDLC(dlcName);
  });

  PluginManager.registerCommand(pluginName, 'uninstallDLC', args => {
    const dlcName = String(args.dlcName);
    SteamLink.uninstallDLC(dlcName);
  });

  PluginManager.registerCommand(pluginName, 'getStatInt', args => {
    const variableId = Number(args.variableId);
    const statName = String(args.statName);
    const statValue = SteamLink.getStatInt(statName);
    $gameVariables.setValue(variableId, statValue);
  });

  PluginManager.registerCommand(pluginName, 'getStatFloat', args => {
    const variableId = Number(args.variableId);
    const statName = String(args.statName);
    const statValue = SteamLink.getStatFloat(statName);
    $gameVariables.setValue(variableId, statValue);
  });

  PluginManager.registerCommand(pluginName, 'setStat', args => {
    const statName = String(args.statName);
    const statValue = Number(args.statValue);
    SteamLink.setStat(statName, statValue);
  });

  PluginManager.registerCommand(pluginName, 'storeStats', args => {
    SteamLink.storeStats();
  });

  PluginManager.registerCommand(pluginName, 'isSubscribedApp', args => {
    const variableId = Number(args.variableId);
    const appId = Number(args.appId);
    const isSubscribedApp = SteamLink.isSubscribedApp(appId);
    $gameVariables.setValue(variableId, isSubscribedApp ? $gameVariables.value(trueVariable) : $gameVariables.value(falseVariable));
  });
  
  
})();
