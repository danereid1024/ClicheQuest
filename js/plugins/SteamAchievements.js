(() => {

const steamworks = require("steamworks.js");

const client = steamworks.init(4454250);

window.UnlockAchievement = function(id) {
    client.achievement.activate(id);
};

})();