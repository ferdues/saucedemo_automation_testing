const rasObjects = require("./rasObjects");

class RasActions{
    async resetAppState(){
        await rasObjects.BurgerMenuBtn.click();
        await rasObjects.ResetAppStareMenu.click();
        await rasObjects.BurgerMenuCrossBtn.click();
    }
}
module.exports = new RasActions();