/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import game1 from "./script/games/game1"
import InitUI from "./script/InitUI"
import level from "./script/level"
import Ioading from "./script/Ioading"
import GameUI from "./script/GameUI"
import fire from "./script/hand/fire"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("script/level.js",level);
    }
}
GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode ="full";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "test/level.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
